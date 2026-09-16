/**
 * Lazy facade over threadDetails.ts (329 KB of hand-written detail content).
 * The module is dynamically imported, so it ships in a separate chunk and is
 * fetched in the background at boot (see preloadThreadDetails). Callers use
 * the same synchronous getters; before the chunk arrives they return null and
 * components re-render via useThreadDetailsReady().
 */
import { createDeferredDataset, useDatasetReady, useDatasetState } from './deferred';
import type { ThreadDetail, ThreadChain } from './threadDetails';

export type { ThreadDetail, ThreadChain } from './threadDetails';

interface ThreadDetailApi {
  getThreadDetail(verseId: string): ThreadDetail | null;
  getChainForVerse(verseId: string): ThreadChain | null;
  getChainById(chainId: string): ThreadChain | null;
}

const apiDataset = createDeferredDataset<ThreadDetailApi>(async () => {
  const m = await import('./threadDetails');
  return {
    getThreadDetail: m.getThreadDetail,
    getChainForVerse: m.getChainForVerse,
    getChainById: m.getChainById,
  };
});

export function getThreadDetail(verseId: string): ThreadDetail | null {
  return apiDataset.get()?.getThreadDetail(verseId) ?? null;
}

export function getChainForVerse(verseId: string): ThreadChain | null {
  return apiDataset.get()?.getChainForVerse(verseId) ?? null;
}

export function getChainById(chainId: string): ThreadChain | null {
  return apiDataset.get()?.getChainById(chainId) ?? null;
}

export function useThreadDetailsReady(): boolean {
  return useDatasetReady(apiDataset);
}

export function useThreadDetailsState() {
  return useDatasetState(apiDataset);
}

export function getThreadDetailsError(): Error | null {
  return apiDataset.getError();
}

export function retryThreadDetails(): Promise<ThreadDetailApi> {
  return apiDataset.retry();
}

export function ensureThreadDetails(): Promise<ThreadDetailApi> {
  return apiDataset.ensure();
}

export function preloadThreadDetails(): void {
  apiDataset.preload();
}

