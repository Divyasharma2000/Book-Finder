import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'chat',
      filename: 'remoteEntry.js',
      exposes: {
     './ChatApp': './src/ChatApp.jsx'
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  build: { modulePreload: false, target: 'esnext', minify: false, cssCodeSplit: false, },
  server: { port: 3001, },
});