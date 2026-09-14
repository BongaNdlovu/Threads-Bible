import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vitest/config';
import {VitePWA} from 'vite-plugin-pwa';

export default defineConfig(({mode}) => {
  return {
    base: process.env.BASE_PATH || (mode === 'production' ? '/Threads-Bible/' : '/'),
    plugins: [
      react(),
      tailwindcss(),
      // SECURITY: never inline secrets via `define` — everything here is baked
      // into the public JS bundle. This app is fully static, needs no API keys,
      // and ships no telemetry.
      VitePWA({
        registerType: 'autoUpdate',
        includeAssets: ['favicon.svg'],
        manifest: {
          name: 'Threads Bible — Scripture Threads & Prophecy',
          short_name: 'Threads Bible',
          description:
            'KJV Bible reader with curated scripture threads, cross-references, Messianic prophecies, and redemptive chains.',
          theme_color: '#FAF9F6',
          background_color: '#FAF9F6',
          display: 'standalone',
          start_url: '.',
          icons: [
            {
              src: 'favicon.svg',
              sizes: 'any',
              type: 'image/svg+xml',
              purpose: 'any',
            },
          ],
        },
        workbox: {
          // App shell + all hashed data chunks are precached by generateSW.
          // Book text and TSK data are too large to precache — cache them on
          // first use; the JSONs are immutable per release, so CacheFirst.
          runtimeCaching: [
            {
              urlPattern: /\/books\/[a-z0-9]+\.json$/,
              method: 'GET',
              handler: 'CacheFirst',
              options: {
                cacheName: 'threads-bible-books',
                expiration: {maxEntries: 66, maxAgeSeconds: 60 * 60 * 24 * 365},
                cacheableResponse: {statuses: [200]},
              },
            },
            {
              urlPattern: /\/data\/tsk\/[a-z0-9]+\.json$/,
              method: 'GET',
              handler: 'CacheFirst',
              options: {
                cacheName: 'threads-bible-tsk',
                expiration: {maxEntries: 66, maxAgeSeconds: 60 * 60 * 24 * 365},
                cacheableResponse: {statuses: [200]},
              },
            },
          ],
        },
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // DISABLE_HMR=true turns off file watching (used for agent-driven edits).
      hmr: process.env.DISABLE_HMR !== 'true',
    },
    test: {
      // Data-layer tests only: pure modules, no DOM or fetch needed.
      environment: 'node',
      include: ['src/**/*.test.ts'],
    },
  };
});
