import type { ExperienceItem } from '~/types';

/**
 * Professional experience, newest first.
 *
 * Source: CV supplied by Dario Colognesi. The two Plan.Net Italia entries in
 * the CV share the same dates and were merged into one role to avoid a
 * duplicated timeline entry.
 */
export const experience: ExperienceItem[] = [
  {
    role: 'Data Analyst & SEO/GEO Manager',
    company: 'Plan.Net Italia',
    location: 'Milan, Italy',
    start: '02/2023',
    end: '06/2026',
    summary:
      'Led data governance, analytics pipelines and BI integration for international clients, with responsibility for enterprise SEO, AEO and GEO strategy.',
    highlights: [
      'Architected client- and server-side tracking on GA4 and Adobe Analytics, including GTM, consent states and data-quality controls.',
      'Built pipelines connecting web analytics, CDP and CRM data to support campaign reporting and attribution.',
      'Defined and executed organic strategies across SEO, AEO and GEO, integrated with paid media, UX and content teams.',
      'Developed Python workflows for technical audits, crawling and generative-search monitoring.',
    ],
    tags: ['GA4', 'Adobe Analytics', 'GTM', 'BigQuery', 'Python', 'SQL', 'Looker Studio', 'Power BI', 'SEO/GEO'],
  },
  {
    role: 'Teacher in Digital Marketing Analytics, Tracking, SEO & Omnichannel',
    company: 'Fondazione ITS – JobsAcademy',
    location: "San Paolo d'Argon, Italy",
    start: '04/2021',
    end: '02/2023',
    summary:
      'Designed and delivered a technical programme of more than 200 hours to over 80 professionals, with a reported 95% satisfaction rate.',
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
    location: 'Milan, Italy',
    start: '12/2020',
    end: '02/2023',
    summary:
      'Consulted for international e-commerce businesses on conversion data modelling, tracking architecture and organic growth.',
    highlights: [
      'Configured tracking in cookieless environments to preserve conversion attribution and CRM data accuracy.',
      'Built SQL models to map user journeys, identify funnel drop-offs and analyse checkout flows.',
      'Developed Python scripts for crawling, site migrations, sitemap matching and analysis of complex site structures.',
      'Executed technical SEO audits and content optimisation plans for international merchants.',
    ],
    tags: ['SQL', 'Python', 'GA4', 'GTM', 'Technical SEO', 'CRO', 'E-commerce', 'Data Modelling'],
  },
  {
    role: 'Data Analyst & SEO Manager',
    company: 'OTO Agency',
    location: 'Bergamo, Italy',
    start: '12/2019',
    end: '12/2020',
    summary:
      'Led multichannel strategies, established the internal BI function and managed SEO performance across the agency portfolio.',
    highlights: [
      'Introduced KPI frameworks and custom dashboards, with a reported 25% increase in client retention.',
      'Optimised Google Ads campaigns for key clients, with reported conversion-rate increases of up to 290% on selected campaigns.',
      'Re-engineered navigation paths based on behavioural analysis, with a reported 25% increase in session duration and 40% reduction in bounce rate.',
      'Defined technical and content guidelines for agency SEO projects.',
    ],
    tags: ['BI', 'KPI Frameworks', 'Google Ads', 'SEO', 'Dashboards', 'Web Analytics'],
  },
  {
    role: 'Data Analyst & Inbound Marketing Manager',
    company: 'Free-way Agency',
    location: 'Vimercate, Italy',
    start: '06/2017',
    end: '12/2019',
    summary:
      'Coordinated data flows and CRM integrations for international brands, leading the outbound marketing team for Coyote Systems.',
    highlights: [
      'Developed multi-country Power BI reporting to monitor European retail performance.',
      'Connected and optimised Salesforce and HubSpot architectures with corporate databases.',
      'Managed direct marketing activities and improved lead-generation data quality.',
    ],
    tags: ['Power BI', 'Salesforce', 'HubSpot', 'CRM', 'Data Integration', 'Inbound Marketing'],
  },
  {
    role: 'Data Analyst & SEO Manager',
    company: 'Impresa A. Minieri S.p.A.',
    location: 'Telese Terme, Italy',
    start: '08/2015',
    end: '07/2017',
    summary:
      'Managed organic positioning and the data analysis infrastructure during the launch of the company’s first e-commerce channel.',
    highlights: [
      'Designed the e-commerce measurement plan, including goals, e-commerce tracking and conversion KPIs.',
      'Analysed browsing and purchase funnels to support UX decisions and dynamic pricing models.',
      'Defined the site information architecture and implemented on-page optimisation for transactional search intent.',
    ],
    tags: ['SEO', 'E-commerce', 'Adobe Analytics', 'Measurement Plan', 'Funnel Analysis', 'Information Architecture'],
  },
];

export const experienceHeading = {
  eyebrow: 'Experience',
  title: 'Where I have done the work.',
  intro: 'Roles, responsibilities and reported outcomes — newest first.',
};
