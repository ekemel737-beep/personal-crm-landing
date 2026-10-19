// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Inline CSS into the page: one request less, no render-blocking stylesheet
  build: { inlineStylesheets: 'always' },
  devToolbar: { enabled: false },
  vite: { plugins: [tailwindcss()] },
});
