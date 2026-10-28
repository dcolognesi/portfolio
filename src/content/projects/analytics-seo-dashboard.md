---
title: Analytics & SEO reporting demo
client: Portfolio demo
year: '2026'
category: Product
excerpt: A synthetic reporting model for marketing, SEO and CRM data
description: A portfolio demo showing how web analytics, CRM records and SEO reporting can be modelled in BigQuery and exposed in Looker Studio. Built with synthetic data, not client data.
artwork: dashboard
services: ['Measurement planning', 'Data modelling', 'BI reporting', 'Technical SEO']
technologies: ['Python', 'GA4', 'BigQuery', 'Looker Studio', 'SQL', 'GTM']
results:
  - value: 'Synthetic'
    label: Dataset used for the demo
  - value: 'GA4 → BigQuery → Looker Studio'
    label: Reference pipeline
  - value: 'SQL + Python'
    label: Modelling and automation
featured: true
order: 0
---

## Demo notice

This is a portfolio demo built with synthetic data. It is not a client engagement, and the figures in the model are illustrative rather than measured client results.

## Context

Marketing, SEO and CRM teams often measure the same journey in different systems. Organic sessions sit in GA4, campaign costs in the ad platforms, and lead quality in the CRM. Each team can be correct inside its own tool while the combined picture remains unresolved.

## Problem

The demo starts with a familiar problem: three sources, three definitions of a conversion, and a monthly report that takes too long to rebuild. The goal is not another chart. It is a shared definition of the metric and a pipeline the team can inspect.

## Role

I designed the measurement model, the BigQuery structure, the SQL transformations and the Looker Studio views. The demo also includes Python scripts for repeatable data-quality checks.

## Solution

- **A governed BigQuery layer.** GA4 exports, campaign data and CRM records land in BigQuery, where SQL models normalise dates, channels and conversion definitions before anything reaches a dashboard.
- **Python for repeatable checks.** Scripts validate row counts, missing dates, duplicate records and tracking completeness before the reporting layer refreshes.
- **A single reporting front end.** Separate views for SEO, paid media and executive reporting share the same dimensions, so a change in filter or date range produces the same answer everywhere.
- **Consent-aware tracking.** The reference design includes client- and server-side events, consent states and CRM stitching, without claiming a specific production implementation.

## Technical choices

The demo uses a small set of tables rather than a full production warehouse: sessions, events, campaign costs, leads and a date dimension. SQL models keep transformation logic readable and testable. Python handles tasks that would otherwise become manual checks. Looker Studio is used as the presentation layer because it keeps the reporting surface simple.

## Output

- A documented metric dictionary for sessions, conversions, leads and channel attribution.
- A BigQuery reference model with staging and reporting layers.
- Python checks for data quality and refresh completeness.
- A Looker Studio dashboard with separate SEO, paid media and executive views.
- A handover note covering definitions, assumptions and known limitations.

## Results

The demo produces a working reference implementation, not a measured business outcome. It demonstrates how the pieces fit together and where definitions need to be agreed before a dashboard is built.

## Limits

The data is synthetic. There is no client, no production tracking implementation and no measured performance uplift. A real engagement would start with source access, a consent review and a validation period before any figure was published.
