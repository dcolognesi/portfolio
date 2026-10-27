import type { SiteConfig } from '~/types';

/**
 * ============================================================
 *  THE ONE FILE TO EDIT FIRST
 * ============================================================
 *
 * Everything here is demo content. Replace it with your own and the
 * header, footer, hero, contact page, metadata, structured data, RSS
 * feed and sitemap all follow.
 *
 * The canonical URL lives in `astro.config.mjs` (`site`) and is read
 * back here through `import.meta.env.SITE`.
 */
export const siteConfig: SiteConfig = {
  name: 'Dario Colognesi',

  logo: {
    header: { src: '/images/header-logo.webp', width: 164, height: 58 },
    footer: { src: '/images/footer-logo.webp', width: 164, height: 58 },
  },

  author: 'Dario Colognesi',
  role: 'Data Analyst & SEO Specialist',
  title: 'Dario Colognesi — Data Analyst & SEO Specialist',
  description:
    'Portfolio of Dario Colognesi, a Data Analyst and SEO Specialist based in Milan working on analytics, search performance and data-driven growth.',
  url: import.meta.env.SITE ?? 'https://swp-freelancer-portfolio.vercel.app',
  ogImage: '/og-default.png',
  locale: 'en',
  themeColor: '#c8f14d',

  contact: {
    email: 'dario.colognesi@gmail.com',
    phone: '+39 371 187 0703',
    phoneHref: '+393711870703',
    location: 'Milano, Italia',
    availability: 'Available for analytics & SEO consulting',
    // Paste a Formspree / Web3Forms / Netlify endpoint here to make the
    // contact form live. See "Contact form" in the README.
    formEndpoint: '',
  },

  social: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/dario-colognesi-b7829a23/', icon: 'linkedin' },
    { label: 'GitHub', href: 'https://github.com/dcolognesi', icon: 'github' },
  ],

  about:
    'Data Analyst & SEO Specialist based in Milan. I turn search, analytics and product data into decisions teams can act on.',

  copyrightHolder: 'Dario Colognesi',
};

export default siteConfig;
