import type { ExperienceItem } from '~/types';

/**
 * Professional experience, newest first.
 *
 * Each entry is rendered as a timeline row on the About page. Leave the array
 * empty and the section is not rendered.
 */
export const experience: ExperienceItem[] = [
  {
    role: 'Data Analyst & SEO/GEO Manager',
    company: 'Plan.Net Italia',
    location: 'Milano',
    start: '02/2023',
    end: '06/2026',
    summary:
      'Led data governance, analytics pipelines and BI integration for key international clients, while owning enterprise SEO, AEO and GEO strategy.',
    highlights: [
      'Architected client- and server-side tracking on GA4 and Adobe Analytics, with GTM and consent-aware data quality controls.',
      'Built pipelines connecting web analytics, CDP and CRM data to support campaign performance and attribution reporting.',
      'Defined and executed organic positioning strategies integrated with paid media, UX and content teams.',
      'Engineered Python workflows for technical audits, crawling and generative search engine monitoring.',
    ],
    tags: ['GA4', 'Adobe Analytics', 'GTM', 'BigQuery', 'Python', 'SQL', 'Looker Studio', 'Power BI', 'SEO/GEO'],
  },
  {
    role: 'Teacher in Digital Marketing Analytics, Tracking, SEO & Omnichannel',
    company: 'Fondazione ITS – JobsAcademy',
    location: "San Paolo d'Argon",
    start: '04/2021',
    end: '02/2023',
    summary:
      'Designed and delivered a technical programme of more than 200 hours for over 80 professionals, with a 95% satisfaction rate.',
    highlights: [
      'Taught digital analytics, SEO, data modelling, BI architectures and CRO optimisation.',
      'Covered Power BI, Looker Studio, GTM, GA4, advanced tracking and omnichannel operations.',
      'Combined theoretical frameworks with practical labs based on real client scenarios.',
    ],
    tags: ['Digital Analytics', 'SEO', 'Data Modelling', 'BI', 'CRO', 'Power BI', 'Looker Studio', 'GTM', 'GA4'],
  },
  {
    role: 'Data Analyst & SEO Consultant',
    company: 'Freelance',
    location: 'Milano',
    start: '12/2020',
    end: '02/2023',
    summary:
      'Consulted for international e-commerce businesses on conversion data modelling, tracking architecture and organic growth.',
    highlights: [
      'Configured advanced tracking in cookieless environments to preserve conversion attribution and CRM data accuracy.',
      'Built custom SQL models to map user journeys, identify funnel drop-offs and optimise checkout flows.',
      'Developed Python scripts for crawling, site migrations, sitemap matching and mass analysis of complex site structures.',
      'Executed technical SEO audits and content optimisation plans for international merchants.',
    ],
    tags: ['SQL', 'Python', 'GA4', 'GTM', 'Technical SEO', 'CRO', 'E-commerce', 'Data Modelling'],
  },
  {
    role: 'Data Analyst & SEO Manager',
    company: 'OTO Agency',
    location: 'Bergamo',
    start: '12/2019',
    end: '12/2020',
    summary:
      'Directed multichannel strategies, launched the internal BI division and managed SEO performance across the agency portfolio.',
    highlights: [
      'Established KPI frameworks and custom dashboards, increasing client retention by 25%.',
      'Optimised Google Ads campaigns for top clients, with conversion rate increases of up to 290%.',
      'Re-engineered navigation paths based on behavioural analysis, increasing session duration by 25% and reducing bounce rate by 40%.',
      'Defined technical and content guidelines for all agency SEO projects.',
    ],
    tags: ['BI', 'KPI Frameworks', 'Google Ads', 'SEO', 'Dashboards', 'Web Analytics'],
  },
  {
    role: 'Data Analyst & Inbound Marketing Manager',
    company: 'Free-way Agency',
    location: 'Vimercate',
    start: '06/2017',
    end: '12/2019',
    summary:
      'Coordinated data flows and CRM integrations for international brands, leading the outbound marketing team for Coyote Systems.',
    highlights: [
      'Developed multi-country Power BI reporting to monitor European retail performance.',
      'Connected and optimised Salesforce and HubSpot architectures with corporate databases.',
      'Managed direct marketing activities and improved lead generation data quality.',
    ],
    tags: ['Power BI', 'Salesforce', 'HubSpot', 'CRM', 'Data Integration', 'Inbound Marketing'],
  },
  {
    role: 'Data Analyst & SEO Manager',
    company: 'Impresa A. Minieri S.p.A.',
    location: 'Telese Terme',
    start: '08/2015',
    end: '07/2017',
    summary:
      'Managed organic positioning and the full data analysis infrastructure during the launch of the company’s first e-commerce channel.',
    highlights: [
      'Designed the e-commerce measurement plan, configuring goals, e-commerce tracking and conversion KPIs.',
      'Analysed browsing and purchase funnels to optimise user experience and define dynamic pricing models.',
      'Defined the site information architecture and implemented on-page optimisation for transactional search intent.',
    ],
    tags: ['SEO', 'E-commerce', 'Adobe Analytics', 'Measurement Plan', 'Funnel Analysis', 'Information Architecture'],
  },
];

export const experienceHeading = {
  eyebrow: 'Experience',
  title: 'Where I have done the work.',
  intro:
    'Roles, responsibilities and the outcomes that mattered — newest first.',
};
