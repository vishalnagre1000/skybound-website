import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  root: '.', // keep root as current folder
  publicDir: 'public', // tell Vite where to look for index.html and public assets
  build: {
    outDir: 'dist', // output folder
    rollupOptions: {
      input: path.resolve(__dirname, 'public/index.html'), // this is the FIX 👇
    },
  },
});
