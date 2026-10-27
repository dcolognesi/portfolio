---
title: Analytics & SEO Dashboard
client: Plan.Net Italia
year: '2026'
category: Product
excerpt: One measurement layer for SEO, paid media and CRM data
description: A BigQuery-backed analytics and SEO dashboard that replaced fragmented exports with a single, governed view of organic and campaign performance.
artwork: dashboard
services: ['Data analytics', 'SEO strategy', 'Tracking architecture', 'BI dashboard']
technologies: ['Python', 'GA4', 'BigQuery', 'Looker Studio', 'SQL', 'GTM']
results:
  - value: '1'
    label: Governed source of truth for SEO and marketing KPIs
  - value: '−60%'
    label: Time spent rebuilding recurring reports by hand
  - value: 'GA4 + BigQuery'
    label: End-to-end pipeline from collection to dashboard
featured: true
order: 0
---

## The problem

SEO, paid media and CRM teams were each measuring a different version of the same journey. Organic sessions lived in GA4, campaign costs in the ad platforms, and lead quality in the CRM. Every monthly report required exporting three datasets, reconciling date ranges and explaining why the numbers did not match.

The real problem was not visualisation. It was trust. Without a shared definition of a session, a conversion and an attributed lead, the dashboard would only make the disagreement faster to produce.

## The solution

The project started with a measurement model, not a chart. I mapped the questions each team needed to answer, defined the KPIs once, and documented the source of truth for every metric.

- **A governed BigQuery layer.** GA4 exports, ad platform data and CRM records land in BigQuery, where SQL models normalise dates, channels and conversion definitions before anything reaches a dashboard.
- **Python for the repetitive work.** Scripts handle technical SEO audits, crawl comparisons, sitemap matching and scheduled data quality checks, so the pipeline surfaces anomalies instead of hiding them in manual exports.
- **A single Looker Studio front end.** Separate views for SEO, paid media and executive reporting share the same dimensions, so a change in filter or date range produces the same answer everywhere.
- **Consent-aware tracking.** GA4 and GTM were configured with client- and server-side events, consent states and CRM stitching to preserve attribution without compromising GDPR compliance.
- **SEO and GEO signals in the same model.** Organic visibility, query intent, landing-page performance and generative-search mentions sit beside campaign data rather than in a separate spreadsheet.

## The dashboard

The main view answers four questions in one screen: what changed, where it changed, which channel caused it, and what action follows. Each KPI carries its definition and refresh timestamp. Filters are stored in the URL so a view can be shared without a screenshot and a paragraph of context.

Below the executive view, dedicated tabs cover technical SEO health, content performance, paid media efficiency and lead quality. The detail is available, but it does not compete with the decision on the first screen.

## Results

- Replaced recurring manual exports with a scheduled BigQuery pipeline and a shared reporting layer.
- Cut the time spent rebuilding monthly reports by roughly 60%.
- Gave SEO, paid media and CRM teams one definition of conversion and attribution.
- Reduced tracking incidents through automated data quality checks and consent monitoring.
- Made organic and generative-search performance visible alongside campaign spend and CRM outcomes.

## What shipped

A documented measurement plan, a BigQuery data model, Python automation for audits and quality checks, a Looker Studio dashboard with role-specific views, and a handover guide covering metric definitions, refresh schedules and troubleshooting.
