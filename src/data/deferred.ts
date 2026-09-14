/**
 * Minimal deferred-dataset primitive for code splitting.
 *
 * Heavy data modules (fulfillment index, thread details, beliefs, LDE) are
 * dynamically imported instead of statically bundled. get() stays synchronous
 * for existing render paths (returning null until loaded), and subscribe()
 * lets React re-render via useSyncExternalStore when the data arrives.
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
  subscribe: (listener: () => void) => () => void;
}

export function createDeferredDataset<T>(loader: () => Promise<T>): DeferredDataset<T> {
  let data: T | null = null;
  let promise: Promise<T> | null = null;
  const listeners = new Set<() => void>();

  const ensure = (): Promise<T> => {
    if (!promise) {
      promise = loader()
        .then(loaded => {
          data = loaded;
          listeners.forEach(l => l());
          return loaded;
        })
        .catch(err => {
          // Allow a retry on the next ensure() rather than caching the failure.
          promise = null;
          throw err;
        });
    }
    return promise;
  };

  return {
    ensure,
    preload: () => {
      ensure().catch(err => console.error('Deferred dataset failed to load:', err));
    },
    get: () => data,
    isReady: () => data !== null,
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
