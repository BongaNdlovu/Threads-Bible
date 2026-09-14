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
