import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import postcssPresetEnv from 'postcss-preset-env';

export default defineConfig({
  server: {
    host: 'localhost',
    port: 5173,
    hmr: {
      protocol: 'ws',
      host: 'localhost',
    },
    proxy: {
      '/payment': {
        target: 'http://localhost:8000', // Backend server URL
        changeOrigin: true, // Required for virtual hosted sites
        secure: false, // If your backend server uses HTTPS, set this to true
      },
    },
  },
  optimizeDeps: {
    exclude: ['@cashfreepayments/cashfree-js']
  },
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          // Uncomment if needed
          // utils: ['./src/utils.js'],
        },
      },
    },
  },
  css: {
    postcss: {
      plugins: [
        autoprefixer(),
        cssnano({
          preset: [
            'default',
            {
              discardComments: {
                removeAll: true, // Remove all comments, which may help remove legacy hacks
              },
              normalizeWhitespace: false, // Prevent normalizing whitespace, which might help with old hacks
            },
          ],
        }),
        postcssPresetEnv({
          stage: 3, // Set to stage 3 for widely supported features.
          features: {
            'nesting-rules': true,
          },
        }),
      ],
    },
  },
});
