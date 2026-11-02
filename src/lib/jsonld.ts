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
    givenName: site.author.split(' ')[0],
    familyName: site.author.split(' ').slice(1).join(' '),
    jobTitle: site.role,
    description: site.description,
    url: `${base}/`,
    image: new URL(site.ogImage, `${base}/`).href,
    email: `mailto:${site.contact.email}`,
    telephone: site.contact.phoneHref,
    address: {
      '@type': 'PostalAddress',
      addressLocality: site.contact.location.split(',')[0]?.trim() ?? 'Milan',
      addressCountry: 'IT',
    },
    hasOccupation: {
      '@type': 'Occupation',
      name: site.role,
      occupationalCategory: site.role,
      description: site.about,
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
    author: { '@id': `${base}/#person`, name: post.author, url: `${base}/` },
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
  page: { url: string; name: string; description: string },
  options: { hasPart?: string } = {}
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
    ...(options.hasPart ? { hasPart: { '@id': options.hasPart } } : {}),
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
        /* `item` (not bare `url`) and the shared `#project` @id let
           crawlers merge these entries with the CreativeWork nodes
           emitted on the case-study pages. */
        item: {
          '@type': 'CreativeWork',
          '@id': `${item.url}#project`,
          name: item.name,
          url: item.url,
          creator: { '@id': `${base}/#person` },
        },
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
    datePublished?: string;
  }
): Json {
  const base = origin(site);
  return {
    '@type': 'CreativeWork',
    '@id': `${project.url}#project`,
    name: project.title,
    description: project.description,
    url: project.url,
    mainEntityOfPage: { '@type': 'WebPage', '@id': project.url },
    ...(project.image ? { image: new URL(project.image, `${base}/`).href } : {}),
    ...(project.category ? { genre: project.category } : {}),
    ...(project.keywords?.length ? { keywords: project.keywords.join(', ') } : {}),
    ...(project.datePublished ? { datePublished: project.datePublished } : {}),
    creator: { '@id': `${base}/#person` },
  };
}

/**
 * "Selected works": an ItemList of CreativeWorks credited to the Person.
 *
 * Each item reuses the same `@id` (`<url>#project`) emitted by
 * `projectSchema` on the case-study pages, so crawlers merge the two
 * nodes into one entity. The list itself is referenced from the home
 * `ProfilePage` through `hasPart`.
 */
export function worksItemListSchema(
  site: SiteConfig,
  items: {
    title: string;
    description: string;
    url: string;
    image?: string;
    category?: string;
    keywords?: string[];
    datePublished?: string;
  }[]
): Json {
  const base = origin(site);
  return {
    '@type': 'ItemList',
    '@id': `${base}/#works`,
    name: 'Selected works',
    numberOfItems: items.length,
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'CreativeWork',
        '@id': `${item.url}#project`,
        name: item.title,
        description: item.description,
        url: item.url,
        mainEntityOfPage: { '@type': 'WebPage', '@id': item.url },
        ...(item.image ? { image: new URL(item.image, `${base}/`).href } : {}),
        ...(item.category ? { genre: item.category } : {}),
        ...(item.keywords?.length ? { keywords: item.keywords.join(', ') } : {}),
        ...(item.datePublished ? { datePublished: item.datePublished } : {}),
        creator: { '@id': `${base}/#person` },
      },
    })),
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
