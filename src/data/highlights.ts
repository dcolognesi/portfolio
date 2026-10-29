/**
 * Copy blocks for the homepage sections that are one-of-a-kind.
 * Longer, repeating content lives in its own data file or content
 * collection instead.
 */

export const hero = {
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
  title: 'Most of my work starts with numbers nobody trusts.',
  body: 'A dashboard that disagrees with the CRM, tracking that lost half the funnel, or a report that takes three days to rebuild. Send me the mess and I will tell you what I would fix first — before there is any question of an invoice. If it is not a fit, I will name someone who is.',
  ctaLabel: 'Send me the brief',
  ctaHref: '/contact/',
  images: [
    {
      src: '/images/distrust-2.jpeg',
      alt: 'Two colleagues reviewing printed charts and analytics reports at a table',
      width: 640,
      height: 427,
    },
    {
      src: '/images/distrust 1.1.jpeg',
      alt: 'Two people reviewing a printed analytics report with charts',
      width: 640,
      height: 427,
    },
  ],
};

export const about = {
  eyebrow: 'Background',
  title: '11 years of turning messy data into decisions.',
  body: 'I have built measurement systems inside agencies, in-house teams and as an independent consultant. The pattern is always the same: the dashboard is not the hard part. Agreeing on what a conversion means, where the data comes from and who owns it is. I stay until those questions have an answer the team can defend.',
  points: [
    'I start with the decision, then work backwards to the data model.',
    'Tracking, pipelines and dashboards are documented and handed over, not kept in my head.',
    'If the metric cannot be trusted, I say so before it reaches a board deck.',
  ],
  image: {
    src: '/images/messy_data_2.jpeg',
    alt: 'Messy data spreadsheets and charts across a desk',
    width: 640,
    height: 424,
  },
  badge: {
    value: '11+',
    label: 'Years across analytics, SEO and business intelligence.',
  },
  ctaLabel: 'See the work',
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
