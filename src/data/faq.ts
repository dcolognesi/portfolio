import type { FaqItem } from '~/types';

export const faq: FaqItem[] = [
  {
    question: 'What kind of analytics work do you take on?',
    answer:
      'Measurement plans, tracking architecture, data quality, SQL and Python workflows, BI dashboards, CRM and CDP integration, and technical SEO or GEO analysis. The common thread is making marketing and customer data usable for a decision.',
  },
  {
    question: 'Which tools do you work with?',
    answer:
      'GA4, Adobe Analytics, Google Tag Manager, SQL, Python, BigQuery, Snowflake, Power BI, Looker Studio, Tableau, Salesforce and HubSpot. I choose the tool around the existing stack, not the other way round.',
  },
  {
    question: 'Can you work with our existing tracking and CRM?',
    answer:
      'Yes. I have configured client- and server-side tracking, connected web analytics with CDP and CRM systems, and worked with Salesforce and HubSpot data. I start by checking what is already collected and what can be trusted.',
  },
  {
    question: 'Do you cover SEO as well as analytics?',
    answer:
      'Yes. My background includes technical SEO, enterprise SEO strategy, AEO/GEO analysis, crawling and site migrations. SEO work is supported by the same measurement and data-quality approach as the analytics work.',
  },
  {
    question: 'What does an engagement produce?',
    answer:
      'Depending on the scope: a measurement plan, tracking implementation, SQL models, data pipelines, dashboards, automated checks or a technical audit. Definitions and documentation are part of the output, so the team can maintain it after handover.',
  },
  {
    question: 'How should I get in touch?',
    answer:
      'Send a short note with the context, the decision you need to support and any deadline. You do not need a complete brief to start the conversation.',
  },
];

export const faqHeading = {
  eyebrow: 'FAQ',
  title: 'Common questions about the work.',
  asideTitle: 'Have a specific question?',
  asideBody:
    'Send the context and the decision you need to support. I will reply with questions and a suggested next step.',
};
