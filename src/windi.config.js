import { defineConfig } from 'windicss/helpers';

export default defineConfig({
  extract: {
    include: ['src/**/*.{jsx,tsx,css}'],
    exclude: ['node_modules', '.git', 'dist'],
  },
  safelist: 'p-2 p-4 p-6',
});

