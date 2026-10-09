// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages: https://kdiamantidis.github.io/blockchain-academy/
const base = '/blockchain-academy';

export default defineConfig({
  site: 'https://kdiamantidis.github.io',
  base,
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  markdown: {
    shikiConfig: { themes: { light: 'github-light', dark: 'github-dark' } },
  },
  // The site used to be the blockchain guide alone; keep links that were shared before the move working.
  // Astro does not prefix redirect targets with the base, so it is added here.
  redirects: Object.fromEntries(
    ['roadmap', 'start', 'projects', 'glossary', 'faq', ...[0, 1, 2, 3, 4, 5, 6].map((n) => `phases/${n}`)].map((p) => [
      `/${p}`,
      `${base}/blockchain/${p}/`,
    ]),
  ),
});
