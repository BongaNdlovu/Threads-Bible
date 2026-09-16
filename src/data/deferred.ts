/**
 * Minimal deferred-dataset primitive for code splitting.
 *
 * Heavy data modules (fulfillment index, thread details, beliefs, LDE) are
 * dynamically imported instead of statically bundled. get() stays synchronous
 * for existing render paths (returning null until loaded), and subscribe()
 * lets React re-render via useSyncExternalStore when data arrives or fails.
 */
import { useSyncExternalStore } from 'react';

export interface DeferredDataset<T> {
  /** Load the dataset once; later calls return the same promise. */
  ensure: () => Promise<T>;
  /** Fire-and-forget load (errors logged, retried on next ensure). */
  preload: () => void;
  /** Synchronous snapshot: the loaded value, or null before it arrives. */
  get: () => T | null;
  /** React-ready snapshot (stable boolean) for useSyncExternalStore. */
  isReady: () => boolean;
  /** Whether the dataset is currently in-flight. */
  isLoading: () => boolean;
  /** Current loading error, if the last attempt failed. */
  getError: () => Error | null;
  /** Re-trigger a load attempt after failure. */
  retry: () => Promise<T>;
  subscribe: (listener: () => void) => () => void;
}

export function createDeferredDataset<T>(loader: () => Promise<T>): DeferredDataset<T> {
  let data: T | null = null;
  let promise: Promise<T> | null = null;
  let error: Error | null = null;
  let loading = false;
  const listeners = new Set<() => void>();

  const notify = () => {
    listeners.forEach(l => l());
  };

  const ensure = (): Promise<T> => {
    if (data !== null) {
      return Promise.resolve(data);
    }
    if (!promise) {
      loading = true;
      error = null;
      notify();
      promise = loader()
        .then(loaded => {
          data = loaded;
          error = null;
          loading = false;
          notify();
          return loaded;
        })
        .catch(err => {
          promise = null;
          loading = false;
          error = err instanceof Error ? err : new Error(String(err));
          notify();
          throw error;
        });
    }
    return promise;
  };

  const retry = (): Promise<T> => {
    promise = null;
    error = null;
    return ensure();
  };

  return {
    ensure,
    preload: () => {
      ensure().catch(err => console.error('Deferred dataset failed to load:', err));
    },
    get: () => data,
    isReady: () => data !== null,
    isLoading: () => loading,
    getError: () => error,
    retry,
    subscribe: listener => {
      listeners.add(listener);
      return () => {
        listeners.delete(listener);
      };
    },
  };
}

/** Re-render the calling component when the dataset finishes loading. */
export function useDatasetReady<T>(dataset: DeferredDataset<T>): boolean {
  return useSyncExternalStore(dataset.subscribe, dataset.isReady);
}

export interface DatasetState<T> {
  data: T | null;
  isReady: boolean;
  isLoading: boolean;
  error: Error | null;
  retry: () => Promise<T>;
}

export function useDatasetState<T>(dataset: DeferredDataset<T>): DatasetState<T> {
  const isReady = useSyncExternalStore(dataset.subscribe, dataset.isReady);
  const isLoading = useSyncExternalStore(dataset.subscribe, dataset.isLoading);
  const error = useSyncExternalStore(dataset.subscribe, dataset.getError);
  const data = useSyncExternalStore(dataset.subscribe, dataset.get);

  return {
    data,
    isReady,
    isLoading,
    error,
    retry: dataset.retry,
  };
}

