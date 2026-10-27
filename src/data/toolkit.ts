import type { ToolkitItem } from '~/types';

export const toolkit: ToolkitItem[] = [
  { icon: 'chart', title: 'Data analytics', detail: 'GA4, Adobe Analytics and the questions behind the numbers.' },
  { icon: 'code', title: 'SQL & Python', detail: 'CTEs, window functions, query tuning and automated audits.' },
  { icon: 'layers', title: 'Data pipelines', detail: 'ELT, BigQuery, Snowflake and a governed source of truth.' },
  { icon: 'grid', title: 'BI dashboards', detail: 'Power BI, Looker Studio and Tableau built for decisions.' },
  { icon: 'flag', title: 'Tracking & consent', detail: 'GTM client/server-side, data quality and GDPR compliance.' },
  { icon: 'spark', title: 'SEO & GEO', detail: 'Technical audits, AEO/GEO monitoring and organic strategy.' },
  { icon: 'device', title: 'CRM & CDP', detail: 'HubSpot, Salesforce and attribution across the journey.' },
  { icon: 'type', title: 'Data storytelling', detail: 'KPI frameworks and executive reporting that gets used.' },
];

export const toolkitHeading = {
  eyebrow: 'Toolkit',
  title: 'The stack behind the decisions.',
  intro:
    'Analytics, engineering and search working as one measurement layer — documented, governed and handed over so the team can run it without me.',
};
