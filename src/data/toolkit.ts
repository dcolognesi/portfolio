import type { ToolkitItem } from '~/types';

/**
 * Four areas of work supported by the CV. Tools are examples, not a complete
 * inventory, and are not repeated in every card.
 */
export const toolkit: ToolkitItem[] = [
  {
    icon: 'chart',
    title: 'Analytics & measurement',
    detail:
      'Measurement plans, GA4 and Adobe Analytics tracking, KPI definitions, consent and data quality.',
  },
  {
    icon: 'grid',
    title: 'BI & reporting',
    detail:
      'Data models and dashboards in Power BI, Looker Studio and Tableau, built around a decision rather than a chart count.',
  },
  {
    icon: 'layers',
    title: 'Automation & data integration',
    detail:
      'SQL and Python workflows, ELT pipelines in BigQuery and Snowflake, plus CRM and CDP integrations across Salesforce and HubSpot.',
  },
  {
    icon: 'spark',
    title: 'Technical SEO & GEO',
    detail:
      'Technical audits, crawling, site migrations, AEO/GEO monitoring and organic visibility analysis.',
  },
];

export const toolkitHeading = {
  eyebrow: 'Capabilities',
  title: 'Four areas I work across.',
  intro:
    'Measurement, reporting, automation and search. The tools change; the goal is the same: data a team can trust, understand and use.',
};
