import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    copyPublicDir: true,
    rollupOptions: {
      output: {
        // Keeps both chunks under Vite's 500 kB warning limit; vendor code also caches across deploys.
        manualChunks: (id) => (id.includes('node_modules') ? 'vendor' : undefined),
      },
    },
  },
});
