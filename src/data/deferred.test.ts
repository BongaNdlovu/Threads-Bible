import { describe, it, expect, vi } from 'vitest';
import { createDeferredDataset } from './deferred';

describe('createDeferredDataset error and retry mechanics', () => {
  it('reports loading, ready, and error states correctly on failure and retry', async () => {
    let shouldFail = true;
    const loader = vi.fn(async () => {
      if (shouldFail) {
        throw new Error('Network failure simulation');
      }
      return { success: true, count: 42 };
    });

    const dataset = createDeferredDataset(loader);

    expect(dataset.get()).toBeNull();
    expect(dataset.isReady()).toBe(false);
    expect(dataset.isLoading()).toBe(false);
    expect(dataset.getError()).toBeNull();

    let notificationCount = 0;
    const unsubscribe = dataset.subscribe(() => {
      notificationCount++;
    });

    // First attempt fails
    await expect(dataset.ensure()).rejects.toThrow('Network failure simulation');

    expect(dataset.isReady()).toBe(false);
    expect(dataset.isLoading()).toBe(false);
    expect(dataset.getError()?.message).toBe('Network failure simulation');
    expect(dataset.get()).toBeNull();
    expect(notificationCount).toBeGreaterThan(0);

    // Retry after failure
    shouldFail = false;
    const loadedData = await dataset.retry();

    expect(loadedData).toEqual({ success: true, count: 42 });
    expect(dataset.isReady()).toBe(true);
    expect(dataset.isLoading()).toBe(false);
    expect(dataset.getError()).toBeNull();
    expect(dataset.get()).toEqual({ success: true, count: 42 });

    unsubscribe();
  });

  it('handles preload error without throwing unhandled rejection and allows subsequent retry', async () => {
    let fail = true;
    const loader = vi.fn(async () => {
      if (fail) throw new Error('Chunk load failed');
      return ['verse-1', 'verse-2'];
    });

    const dataset = createDeferredDataset(loader);
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    dataset.preload();
    // Wait for the preload microtask to resolve/reject
    await new Promise(r => setTimeout(r, 10));

    expect(dataset.getError()?.message).toBe('Chunk load failed');
    expect(dataset.isReady()).toBe(false);

    fail = false;
    const data = await dataset.retry();
    expect(data).toEqual(['verse-1', 'verse-2']);
    expect(dataset.isReady()).toBe(true);

    consoleSpy.mockRestore();
  });

  it('deduplicates concurrent ensure calls and returns cached value once ready', async () => {
    let callCount = 0;
    const loader = vi.fn(async () => {
      callCount++;
      return { loaded: true };
    });

    const dataset = createDeferredDataset(loader);
    const [p1, p2] = await Promise.all([dataset.ensure(), dataset.ensure()]);

    expect(p1).toBe(p2);
    expect(callCount).toBe(1);

    // Later call returns cached value immediately
    const p3 = await dataset.ensure();
    expect(p3).toBe(p1);
    expect(callCount).toBe(1);
  });
});
