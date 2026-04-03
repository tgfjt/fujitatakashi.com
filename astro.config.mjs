import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://fujitatakashi.com',
  output: 'static',
  integrations: [
    sitemap(),
  ],
  server: {
    port: 4329,
  },
  build: {
    format: 'directory',
  },
  markdown: {
    shikiConfig: {
      theme: 'min-light',
    },
  },
});
