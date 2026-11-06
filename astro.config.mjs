// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import astroNoEmail from 'astro-noemail';

/**
 * The canonical origin of the deployed site.
 *
 * On Cloudflare Pages, set a `SITE_URL` environment variable in
 * Settings → Environment variables (build time) with the production
 * domain, e.g. `https://www.dariocolognesi.it` — or simply replace
 * `DEFAULT_SITE` below. It drives canonical URLs, Open Graph tags, the
 * sitemap, the RSS feed and robots.txt.
 */
const DEFAULT_SITE = 'https://portfolio.oceanmarketingitalia.workers.dev';

export default defineConfig({
  site: process.env.SITE_URL ?? DEFAULT_SITE,

  // `base: '/repo-name'` is required for project pages on GitHub Pages.
  // base: '/swp-freelancer-portfolio',

  output: 'static',
  trailingSlash: 'always',
  build: { format: 'directory' },

  // Astro 7 defaults to 'jsx' whitespace handling; this theme relies on
  // HTML-aware compression so inline spacing in the markup is preserved.
  compressHTML: true,

  integrations: [
    sitemap({
      // The 404 route is built as a real page but must never be indexed
      // or listed in the sitemap.
      filter: (page) => !page.endsWith('/404/'),
    }),
    // Obfuscate email addresses in the generated HTML so scrapers cannot
    // harvest them. The site is fully static, so SSR rewriting is off.
    astroNoEmail({ ssr: false }),
  ],

  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },
});
