/**
 * Copy blocks for the homepage sections that are one-of-a-kind.
 * Longer, repeating content lives in its own data file or content
 * collection instead.
 */

export const hero = {
  greeting: 'Hello. The name is',
  /** Rendered on two lines. */
  nameLines: ['Robin', 'Vale'],
  intro:
    'I art-direct and design for teams who already know what they are building, and need it to feel like one thing instead of forty.',
  ctaLabel: 'Book a call',
  ctaHref: '/contact/',
  photo: {
    src: '/images/hero-portrait.webp',
    alt: 'Robin Vale, art director, photographed against a plain studio wall',
    width: 960,
    height: 1210,
  },
  aside: {
    roleLine: ['Independent of the Year 2026', 'Art Direction & Interface'],
    title: ['Art', 'Direction'],
    /** Small avatar stack — decorative, so the images carry empty alt text. */
    stack: ['/images/avatar-02.webp', '/images/avatar-01.webp', '/images/avatar-03.webp'],
    stackBadge: '98%',
    kpi: '210+',
    kpiLabel: 'launches behind me',
    note: 'Working across nine time zones',
  },
};

export const collaborate = {
  eyebrow: 'Working together',
  title: 'Most of my work arrives as a half-finished thing somebody is quietly worried about.',
  body: 'Send me yours and I will tell you what I would do with it — honestly, and before there is any question of an invoice. If it is not a fit, I will name someone who is.',
  badge: 'Independent since 2011',
  ctaLabel: 'Send me the brief',
  ctaHref: '/contact/',
  /**
   * The staggered pair beside the copy. Swap these for the bundled SVG
   * mockups (`BookletMock`, `TabletMock` in src/components/art/) if you would
   * rather show artwork than photography — see the README.
   */
  images: [
    {
      src: '/images/collab-team.webp',
      alt: 'Two colleagues standing in a bright office, reviewing work together on a tablet',
      width: 760,
      height: 760,
    },
    {
      src: '/images/collab-meeting.webp',
      alt: 'Two colleagues talking over an open laptop at a meeting table',
      width: 760,
      height: 760,
    },
  ],
};

export const about = {
  eyebrow: 'Background',
  title: 'Eleven years of turning messy data into decisions.',
  body: 'I have built measurement systems inside agencies, in-house teams and as an independent consultant. The pattern is always the same: the dashboard is not the hard part. Agreeing on what a conversion means, where the data comes from and who owns it is. I stay until those questions have an answer the team can defend.',
  points: [
    'I start with the decision, then work backwards to the data model.',
    'Tracking, pipelines and dashboards are documented and handed over, not kept in my head.',
    'If the metric cannot be trusted, I say so before it reaches a board deck.',
  ],
  image: {
    src: '/images/about-studio.webp',
    alt: 'Designers arranging sticky notes and printed layouts across a studio table',
    width: 900,
    height: 954,
  },
  badge: {
    value: '11+',
    label: 'Years across analytics, SEO and business intelligence.',
  },
  ctaLabel: 'See the work',
  ctaHref: '/work/',
};

export const servicesHeading = {
  eyebrow: 'Engagements',
  title: 'Six ways to put me to work.',
  ctaLabel: 'Ask for a scope',
  ctaHref: '/contact/',
};

export const workHeading = {
  eyebrow: 'Selected work',
  title: 'Six projects, six different arguments.',
};

export const journalHeading = {
  eyebrow: 'Notebook',
  title: 'Things I keep having to explain.',
  ctaLabel: 'Every article',
  ctaHref: '/journal/',
};

export const cta = {
  title: 'Have you got something that deserves doing properly?',
  body: 'Tell me what is broken, who it is breaking for, and what happens if it stays that way. That is enough for me to come back with a scope and a number.',
  primaryLabel: 'Send the brief',
};
