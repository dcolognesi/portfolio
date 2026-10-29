import type { SiteConfig } from '~/types';
import { toolkit } from '~/data/toolkit';
import { languages } from '~/data/languages';

/**
 * Structured data builders.
 *
 * Everything here is derived from `src/config/site.ts` and the page's own
 * content — nothing is invented. Drop a builder if you do not want the
 * corresponding schema.org type emitted.
 */

type Json = Record<string, unknown>;

/** Strip a trailing slash so `url` and `@id` never double up. */
function origin(site: SiteConfig): string {
  return site.url.replace(/\/+$/, '');
}

export function personSchema(site: SiteConfig): Json {
  const base = origin(site);
  return {
    '@type': 'Person',
    '@id': `${base}/#person`,
    name: site.author,
    jobTitle: site.role,
    description: site.description,
    url: `${base}/`,
    image: new URL(site.ogImage, `${base}/`).href,
    email: `mailto:${site.contact.email}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Milan',
      addressCountry: 'IT',
    },
    knowsAbout: toolkit.map((item) => item.title),
    knowsLanguage: languages.map((item) => item.language),
    sameAs: site.social.map((s) => s.href),
  };
}

export function websiteSchema(site: SiteConfig): Json {
  const base = origin(site);
  return {
    '@type': 'WebSite',
    '@id': `${base}/#website`,
    url: `${base}/`,
    name: site.name,
    description: site.description,
    inLanguage: site.locale,
    publisher: { '@id': `${base}/#person` },
  };
}

export function blogPostingSchema(
  site: SiteConfig,
  post: {
    title: string;
    description: string;
    url: string;
    image: string;
    datePublished: string;
    dateModified?: string;
    author: string;
    keywords?: string[];
  }
): Json {
  const base = origin(site);
  return {
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    url: post.url,
    image: post.image,
    datePublished: post.datePublished,
    dateModified: post.dateModified ?? post.datePublished,
    author: { '@type': 'Person', name: post.author, url: `${base}/` },
    publisher: { '@id': `${base}/#person` },
    mainEntityOfPage: { '@type': 'WebPage', '@id': post.url },
    inLanguage: site.locale,
    ...(post.keywords?.length ? { keywords: post.keywords.join(', ') } : {}),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]): Json {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/** A generic page node for legal and other secondary pages. */
export function webPageSchema(
  site: SiteConfig,
  page: { url: string; name: string; description: string }
): Json {
  return {
    '@type': 'WebPage',
    '@id': `${page.url}#page`,
    url: page.url,
    name: page.name,
    description: page.description,
    inLanguage: site.locale,
    isPartOf: { '@id': `${origin(site)}/#website` },
  };
}

/** The About page, with the Person as its main entity. */
export function profilePageSchema(
  site: SiteConfig,
  page: { url: string; name: string; description: string }
): Json {
  const base = origin(site);
  return {
    '@type': 'ProfilePage',
    '@id': `${page.url}#page`,
    url: page.url,
    name: page.name,
    description: page.description,
    inLanguage: site.locale,
    mainEntity: { '@id': `${base}/#person` },
    isPartOf: { '@id': `${base}/#website` },
  };
}

/** The Contact page, tied to the Person and their contact details. */
export function contactPageSchema(
  site: SiteConfig,
  page: { url: string; name: string; description: string }
): Json {
  const base = origin(site);
  return {
    '@type': 'ContactPage',
    '@id': `${page.url}#page`,
    url: page.url,
    name: page.name,
    description: page.description,
    inLanguage: site.locale,
    mainEntity: { '@id': `${base}/#person` },
    isPartOf: { '@id': `${base}/#website` },
  };
}

/** The projects index, listing the visible case studies. */
export function collectionPageSchema(
  site: SiteConfig,
  page: { url: string; name: string; description: string },
  items: { name: string; url: string }[]
): Json {
  const base = origin(site);
  return {
    '@type': 'CollectionPage',
    '@id': `${page.url}#page`,
    url: page.url,
    name: page.name,
    description: page.description,
    inLanguage: site.locale,
    isPartOf: { '@id': `${base}/#website` },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: items.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: item.name,
        url: item.url,
      })),
    },
  };
}

/** A case study as a CreativeWork, credited to the Person. */
export function projectSchema(
  site: SiteConfig,
  project: {
    title: string;
    description: string;
    url: string;
    image?: string;
    category?: string;
    keywords?: string[];
  }
): Json {
  const base = origin(site);
  return {
    '@type': 'CreativeWork',
    '@id': `${project.url}#project`,
    name: project.title,
    description: project.description,
    url: project.url,
    ...(project.image ? { image: new URL(project.image, `${base}/`).href } : {}),
    ...(project.category ? { genre: project.category } : {}),
    ...(project.keywords?.length ? { keywords: project.keywords.join(', ') } : {}),
    creator: { '@id': `${base}/#person` },
  };
}

/** FAQ markup matching the questions rendered in `Faq.astro`. */
export function faqPageSchema(items: { question: string; answer: string }[]): Json {
  return {
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
}

/** Wraps one or more schema objects in a single `@graph` document. */
export function graph(nodes: Json[]): string {
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': nodes });
}
