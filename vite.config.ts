import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vitest/config';

export default defineConfig(({mode}) => {
  return {
    base: process.env.BASE_PATH || (mode === 'production' ? '/Threads-Bible/' : '/'),
    plugins: [react(), tailwindcss()],
    // SECURITY: never inline secrets via `define` — everything here is baked into
    // the public JS bundle. This app is fully static and needs no API keys.
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
