/**
 * Copy blocks for the homepage sections that are one-of-a-kind.
 * Longer, repeating content lives in its own data file or content
 * collection instead.
 */

export const hero = {
  greeting: 'Hello, my name is',
  /** Rendered on two lines. */
  nameLines: ['Dario', 'Colognesi'],
  intro:
    'I connect marketing, web and CRM data to build reliable measurement, useful dashboards and automated workflows. My work spans marketing analytics, BI and technical SEO.',
  ctaLabel: 'View selected projects',
  ctaHref: '/work/',
  secondaryLabel: 'View CV',
  secondaryHref: '#cv',
  photo: {
    src: '/images/colognesi-dario-light.jpeg',
    alt: 'Portrait of Dario Colognesi',
    width: 1280,
    height: 854,
  },
  aside: {
    roleLine: ['Data Analyst · Marketing analytics', 'Business Intelligence · SEO / GEO'],
    title: ['Measurement', '& reporting'],
    /** Optional avatar stack — left empty because there is no verified team imagery. */
    stack: [] as string[],
    stackBadge: '',
    kpi: '11+',
    kpiLabel: 'years across analytics and SEO',
    note: 'Milan, Italy',
  },
};

export const collaborate = {
  eyebrow: 'Working together',
  title: 'Start with the decision the data needs to support.',
  body: 'A dashboard that disagrees with the CRM, tracking that lost part of the funnel, or a report that takes days to rebuild. Send the context and the question behind it, and I will suggest a concrete first step.',
  badge: 'Analytics since 2015',
  ctaLabel: 'Get in touch',
  ctaHref: '/contact/',
  images: [
    {
      src: '/images/collab-team.webp',
      alt: 'Two colleagues reviewing work together on a tablet',
      width: 760,
      height: 760,
    },
    {
      src: '/images/collab-meeting.webp',
      alt: 'Two colleagues reviewing a laptop at a meeting table',
      width: 760,
      height: 760,
    },
  ],
};

export const about = {
  eyebrow: 'Background',
  title: 'Measurement built around the decision, not the dashboard.',
  body: 'Since 2015 I have worked across agencies, in-house teams and freelance engagements. My work sits between marketing, web analytics and CRM: defining KPIs, fixing tracking, building data pipelines and turning the result into reporting people trust.',
  points: [
    'I start with the decision the team needs to make, then work back to the metric and the data model.',
    'I treat tracking, consent and data quality as part of the deliverable, not an afterthought.',
    'Definitions, pipelines and dashboards are documented so the team can run them after handover.',
  ],
  image: {
    src: '/images/colognesi-dario-light.jpeg',
    alt: 'Portrait of Dario Colognesi',
    width: 1280,
    height: 854,
  },
  badge: {
    value: '11+',
    label: 'Years across analytics, SEO and business intelligence.',
  },
  ctaLabel: 'View selected projects',
  ctaHref: '/work/',
};

export const servicesHeading = {
  eyebrow: 'Capabilities',
  title: 'Four areas of work.',
  ctaLabel: 'Get in touch',
  ctaHref: '/contact/',
};

export const workHeading = {
  eyebrow: 'Selected projects',
  title: 'A documented analytics project.',
};

export const journalHeading = {
  eyebrow: 'Notes',
  title: 'Working notes on measurement and search.',
  ctaLabel: 'All notes',
  ctaHref: '/journal/',
};

export const cta = {
  title: 'Have a measurement problem worth fixing?',
  body: 'Share the context, the decision you need to support and any deadline. I will reply with questions and a concrete next step.',
  primaryLabel: 'Get in touch',
};
