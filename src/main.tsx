import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

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
