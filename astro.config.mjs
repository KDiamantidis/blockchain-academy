// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages: https://kdiamantidis.github.io/blockchain-academy/
export default defineConfig({
  site: 'https://kdiamantidis.github.io',
  base: '/blockchain-academy',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
