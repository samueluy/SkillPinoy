import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'lucide-react/icons/fingerprint': '/src/dummy-icon.tsx', // Redirect unused icons
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'], // Exclude only if absolutely necessary
  },
});
