import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { initGA, trackPageView } from './lib/analytics.ts';

const rootElement = document.getElementById('root')!;

// Initialize Google Analytics
initGA();

// Track the initial page view
trackPageView(window.location.pathname);

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
