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
  role: 'Data Analyst · Marketing Analytics & Automation',
  title: 'Dario Colognesi — Data Analyst, Marketing Analytics & Automation',
  description:
    'Portfolio of Dario Colognesi, a data analyst working across marketing analytics, BI, automation and technical SEO. Based in Milan, Italy.',
  url: import.meta.env.SITE ?? 'https://swp-freelancer-portfolio.vercel.app',
  ogImage: '/images/colognesi-dario-light.jpeg',
  locale: 'en',
  themeColor: '#c8f14d',

  contact: {
    email: 'oceanmarketingitalia@gmail.com',
    phone: '+39 371 187 0703',
    phoneHref: '+393711870703',
    location: 'Milan, Italy',
    availability: 'Open to analytics, BI and technical SEO opportunities',
    // Paste a Formspree / Web3Forms / Netlify endpoint here to make the
    // contact form live. See "Contact form" in the README.
    formEndpoint: '',
  },

  social: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/dario-colognesi-b7829a23/', icon: 'linkedin' },
    { label: 'GitHub', href: 'https://github.com/dcolognesi', icon: 'github' },
  ],

  about:
    'Data analyst working across marketing analytics, BI, automation and technical SEO. I build measurement systems that teams can trust and use.',

  copyrightHolder: 'Dario Colognesi',
};

export default siteConfig;
