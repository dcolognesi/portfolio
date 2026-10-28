import type { ProcessStep } from '~/types';

export const process: ProcessStep[] = [
  {
    stage: 'Phase 01',
    title: 'Understand the decision',
    body: 'Clarify the decision the team needs to make, the KPIs that support it and who will use the output. This determines the data model before any dashboard is built.',
    timing: 'Discovery',
  },
  {
    stage: 'Phase 02',
    title: 'Audit data and tracking',
    body: 'Review the available sources, tracking setup, consent state and CRM or CDP integration. Surface gaps, conflicting definitions and quality issues early.',
    timing: 'Audit',
  },
  {
    stage: 'Phase 03',
    title: 'Build the measurement layer',
    body: 'Implement the tracking, SQL models, pipelines and reporting views needed to answer the question. Add Python automation where manual work would otherwise repeat.',
    timing: 'Build',
  },
  {
    stage: 'Phase 04',
    title: 'Validate and hand over',
    body: 'Test the figures, document metric definitions, and walk the team through the model and dashboards. The handover includes what was built and what remains open.',
    timing: 'Handover',
  },
];

export const processHeading = {
  eyebrow: 'How I work',
  title: 'A measurement process that ends with data the team can run.',
  intro:
    'The sequence is deliberate: define the decision, check the data, build the layer, then validate and transfer it. The output should not depend on me being in the room.',
};
