import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import {preloadFulfillments} from './data/library';
import {preloadThreadDetails} from './data/threadDetailService';
import {registerSW} from 'virtual:pwa-register';

// Apply stored theme before first paint to avoid flash
const stored = localStorage.getItem('threads-bible-theme');
const prefersDark = stored === 'dark';
document.documentElement.classList.toggle('dark', prefersDark);
document.documentElement.style.colorScheme = prefersDark ? 'dark' : 'light';
const storedFont = parseInt(localStorage.getItem('threads-bible-font-size') || '20', 10);
const fontSize = Number.isNaN(storedFont) ? 20 : Math.min(32, Math.max(14, storedFont));
document.documentElement.style.setProperty('--reading-font-size', `${fontSize}px`);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

// Fetch the deferred data chunks (fulfillment index, thread details) in the
// background right after first paint; they are needed for the first thread
// open but must not block the initial bundle.
preloadFulfillments();
preloadThreadDetails();

// PWA service worker (production builds only): precaches the app shell and
// data chunks, caches book/TSK JSONs on first use, and auto-updates.
registerSW({immediate: true});

// Self-heal across deploys: a still-running session can reference chunk
// hashes that a newer deploy replaced, and the service worker purges the old
// precache on activation — lazy imports then 404. Vite reports those as
// vite:preloadError; reload once to pick up the new build (guarded so an
// offline session never reload-loops — the ErrorBoundary covers the rest).
const DEPLOY_RELOAD_KEY = 'threads-bible-deploy-reload';
window.addEventListener('vite:preloadError', () => {
  if (!navigator.onLine) return;
  try {
    if (sessionStorage.getItem(DEPLOY_RELOAD_KEY)) return;
    sessionStorage.setItem(DEPLOY_RELOAD_KEY, '1');
  } catch {
    // Storage unavailable: reload unconditionally, still once per session.
  }
  window.location.reload();
});

// When a freshly deployed service worker takes control of an existing tab,
// reload once so the new build replaces the stale one immediately. The
// first-ever claim (initial install) is exempt via the session flag.
navigator.serviceWorker?.addEventListener('controllerchange', () => {
  try {
    if (!sessionStorage.getItem('threads-bible-claimed')) {
      sessionStorage.setItem('threads-bible-claimed', '1');
      return;
    }
  } catch {
    return;
  }
  window.location.reload();
});
