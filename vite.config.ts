import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'], // Automatically resolve these extensions
  },
  server: {
    open: true, // Automatically open the browser
  },
  build: {
    outDir: 'build', // Ensure the output directory matches your setup
  },
});
