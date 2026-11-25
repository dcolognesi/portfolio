---
title: 'Power BI: Unifying Data for a Multinational Retailer'
client: Confidential client
year: '2024'
category: Product
excerpt: A unified Business Intelligence platform connecting paid media, web analytics and e-commerce sales.
description: A Power BI case study on centralizing web, e-commerce and paid media data into a single attribution model for a European multinational retailer.
image:
  src: /images/work/power-bi-retail/monthly-roas-summary.webp
  alt: Monthly ROAS summary dashboard with cost, sessions, orders and e-commerce ROAS by month
  width: 1456
  height: 736
  fit: contain
hero:
  src: /images/work/power-bi-retail/sessions-cost-cps.webp
  alt: Power BI report showing sessions, advertising cost and CPS trends over time
  width: 2458
  height: 1128
  fit: contain
services: ['Business intelligence', 'Data modeling', 'Marketing attribution', 'Dashboard design']
technologies: ['Power BI', 'Microsoft Fabric', 'Google BigQuery', 'Funnel.io', 'DAX']
featured: false
order: 3
draft: false
---

In today's omnichannel retail landscape, companies generate vast amounts of data across multiple platforms. Too often, however, this information remains locked in silos, preventing a holistic view of performance and making it difficult to optimize return on investment (ROI).

This case study explores how I helped a large European multinational operating in e-commerce and retail overcome this challenge. The goal was to build a unified Business Intelligence platform, powered by Microsoft Power BI, that could connect paid media activities with actual sales data — regardless of where the underlying information originated.

## The Challenge: Breaking Down Data Silos to Create a Holistic View

The client needed to evaluate the effectiveness of its marketing campaigns across digital channels — including paid search, social media, display advertising, and demand-side platforms (DSPs) — and compare campaign performance with the revenue generated through its e-commerce channels.

Several factors made this particularly complex:

- **A proprietary web analytics platform:** Website and e-commerce data did not come from a standard platform such as Google Analytics 4 (GA4). Instead, they were captured by a proprietary analytics system with a non-standard data structure.
- **Fragmented advertising data:** Paid media information was spread across numerous platforms, including DSPs, search engines, and social media networks, each with its own metrics, definitions, and reporting conventions.
- **Inconsistent campaign classification:** Differences in naming conventions and tracking parameters made it difficult to reliably connect advertising activity with website sessions and e-commerce conversions.

To address these issues, the data needed to be centralized, cleaned, and normalized. It then had to be incorporated into a custom attribution model agreed upon with the client, ensuring that sales value could be consistently assigned to the relevant marketing activities.

## The Solution: A Modern Data Architecture with Power BI

To manage this complexity, I designed and implemented a robust, scalable data architecture integrated with the Microsoft ecosystem. The project was delivered in four main stages.

### 1. Centralizing and Normalizing Web and E-commerce Data

Raw data was extracted from the client's proprietary analytics platform. Through an Extract, Transform, Load (ETL) process, the data was:

- Cleaned and validated
- Standardized into a consistent structure
- Mapped to the predefined custom attribution model
- Prepared for integration with paid media data

The transformed data was then loaded into and stored in a data warehouse on Google BigQuery, creating a reliable foundation for downstream analysis.

### 2. Centralizing Paid Media Data

All paid traffic sources and DSP data feeds were connected to the Funnel.io data integration platform. Within Funnel.io, the data was normalized and harmonized into a common schema. This made it possible to compare information across advertising platforms using consistent dimensions and metrics, rather than relying on each platform's native reporting structure.

### 3. Integrating and Modeling Data in Microsoft Fabric and Power BI

Data from Google BigQuery and Funnel.io was connected to Microsoft Fabric and modeled in Power BI. A relational data model was developed to bring web analytics, e-commerce, and paid media information together. The key to this integration was a predefined custom naming convention, which provided a common framework for mapping campaigns across different DSP and paid media platforms to the UTM parameters captured by the client's analytics system.

This created a single source of truth in which campaigns, ads, and ad groups could be connected to the sessions and conversions recorded on the e-commerce platform. The resulting model supported granular analysis across dimensions such as:

- Time period
- Funnel stage
- Product category
- Traffic source
- Medium
- Campaign, ad group, and ad
- Advertising platform

As a result, stakeholders could move seamlessly from high-level business performance to detailed campaign and transaction analysis.

### 4. Creating Interactive Dashboards for Different Stakeholders

The final stage was the development of dedicated report pages and dashboards tailored to the needs of different business teams. These interactive dashboards allowed users to explore results through both aggregated and detailed views.

#### Executive View for Management

A high-level overview designed to monitor key performance indicators, including:

- Return on Ad Spend (ROAS)
- Cost Per Acquisition (CPA)
- Cost Per Sale (CPS)
- Costs, sessions, and orders
- Targets versus actual results

This view gave management a concise understanding of marketing efficiency and progress against business objectives.

#### Detailed View for the Marketing Team

In-depth reports enabled the marketing team to analyze the performance of individual campaigns, paid channels, and product categories. Users could filter and drill down into the data — reaching transaction-level detail where required — to identify trends, investigate anomalies, and uncover opportunities for optimization.

## The Results: Faster, More Confident, Data-Driven Decision-Making

The new Business Intelligence solution delivered several tangible benefits.

### End-to-End Visibility

The client gained a unified view of the customer journey, connecting advertising activity with website engagement and final e-commerce purchases. This made it easier to understand how different channels and campaigns contributed to commercial outcomes.

### More Effective Budget Allocation

With costs and attributed sales available in a consistent model, the marketing team could allocate budget toward the channels, campaigns, and product categories delivering the strongest performance. Decisions could be based on observed business results rather than fragmented reports or estimates.

### Greater Operational Efficiency

Automating data collection, transformation, and consolidation reduced the manual effort required to produce reports. This freed up valuable time for the marketing team to focus on analysis, experimentation, and strategic optimization.

### Faster and More Confident Decisions

Access to clear, consistent, and up-to-date dashboards enabled stakeholders to respond more quickly to changes in performance. Management and operational teams could work from the same metrics and definitions, reducing ambiguity and improving alignment.

## Anonymized Power BI Dashboard Gallery

The following examples show selected views from the Power BI dashboards implemented for the client. All data has been anonymized for demonstration purposes.

### 1: Context Menu and Data Export

This image shows the main summary table with its context menu open. Users can export data directly from the visualization, making it easier to perform additional analysis outside the dashboard.

<figure class="case-figure">
  <a class="case-figure-link" href="/images/work/power-bi-retail/data-export.webp" data-image-zoom aria-label="Open the context menu and data export screenshot at full size">
    <img src="/images/work/power-bi-retail/data-export.webp" alt="Power BI summary table with the context menu open showing the data export option" width="1312" height="343" loading="lazy" decoding="async" />
  </a>
  <figcaption>Summary table with the context menu open for direct data export.</figcaption>
</figure>

### 2: Monthly ROAS Summary

A high-level dashboard designed for management, displaying key metrics — including cost, sessions, orders, and e-commerce ROAS — aggregated by month. Filters for objective, medium, and source allow users to refine the analysis.

<figure class="case-figure">
  <a class="case-figure-link" href="/images/work/power-bi-retail/monthly-roas-summary.webp" data-image-zoom aria-label="Open the monthly ROAS summary screenshot at full size">
    <img src="/images/work/power-bi-retail/monthly-roas-summary.webp" alt="Monthly dashboard with cost, sessions, orders and e-commerce ROAS plus objective, medium and source filters" width="1456" height="736" loading="lazy" decoding="async" />
  </a>
  <figcaption>Monthly cost, sessions, orders and e-commerce ROAS for management.</figcaption>
</figure>

### 3: Daily ROAS Monitoring

This view provides daily performance detail for ongoing monitoring. It shows day-by-day e-commerce ROAS alongside cost and order trends, helping users identify changes in efficiency and investment.

<figure class="case-figure">
  <a class="case-figure-link" href="/images/work/power-bi-retail/daily-roas-monitoring.webp" data-image-zoom aria-label="Open the daily ROAS monitoring screenshot at full size">
    <img src="/images/work/power-bi-retail/daily-roas-monitoring.webp" alt="Daily view of e-commerce ROAS next to cost and order trend lines" width="2019" height="825" loading="lazy" decoding="async" />
  </a>
  <figcaption>Day-by-day e-commerce ROAS with cost and order trends.</figcaption>
</figure>

### 4: Sessions, Cost, and CPS Over Time

A detailed report for the marketing team that connects traffic volume, measured by sessions, with advertising investment and efficiency, measured by CPS. Bar charts and trend lines make it easier to identify anomalies, peaks, and changes over the selected period.

<figure class="case-figure">
  <a class="case-figure-link" href="/images/work/power-bi-retail/sessions-cost-cps.webp" data-image-zoom aria-label="Open the sessions, cost and CPS screenshot at full size">
    <img src="/images/work/power-bi-retail/sessions-cost-cps.webp" alt="Report combining sessions, advertising cost and CPS with bar charts and trend lines" width="2458" height="1128" loading="lazy" decoding="async" />
  </a>
  <figcaption>Sessions, advertising cost and CPS combined in one detailed view.</figcaption>
</figure>

### 5: Daily E-commerce ROAS Detail

Another daily monitoring view, focused on metrics such as e-commerce orders and e-commerce ROAS. The combination of bars and a trend line highlights how order activity and profitability evolve from day to day.

<figure class="case-figure">
  <a class="case-figure-link" href="/images/work/power-bi-retail/daily-roas-detail.webp" data-image-zoom aria-label="Open the daily e-commerce ROAS detail screenshot at full size">
    <img src="/images/work/power-bi-retail/daily-roas-detail.webp" alt="Daily e-commerce orders and ROAS shown with bars and a trend line" width="1980" height="841" loading="lazy" decoding="async" />
  </a>
  <figcaption>Daily e-commerce orders and ROAS, with bars and a trend line.</figcaption>
</figure>

### 6: Intermediate Layout and Prototyping Phase

#### The Development Lifecycle: From Concept to Deployment

To provide context on where this image fits into the overall project, here are the key phases of development I undertook, leading up to the final deployment.

#### Phase 1: Discovery and Requirements Gathering

Before any data was touched, I conducted extensive workshops with the client's management and marketing teams. The goal was to define:

- **Key Performance Indicators (KPIs):** Specifically, what defines success for their retail e-commerce (ROAS, CPS, etc.).
- **Data Granularity:** The level of detail required (e.g., by day, by campaign, by product category).
- **User Experience (UX):** How different stakeholders (management vs. marketing specialists) need to interact with the data.

#### Phase 2: Data Architecture and ETL (Described in the main article)

This phase involved connecting to the various data sources (proprietary analytics, Funnel.io, BigQuery) and building the data pipelines. It ensured that data from dozens of different platforms was normalized, cleaned, and ready for reporting.

#### Phase 3: Prototyping and Wireframing (The "Blank Canvas" Phase)

Based on the requirements from Phase 1, I moved into Power BI to create prototypes. The image below represents this exact phase.

- I structured the page with clear headers for different sections: "CAMPAGNE PAID ECOMMERCE," "CAMPAGNE MARKETPLACE," and "CAMPAGNE AWARENESS."
- I placed the necessary data fields (the columns visible in the image) into the report tables, even though no data was loaded yet.
- Crucially, I established the global filters at the top of the page (Obiettivo, Medium, Sorgente, Campagna, Date range) to ensure consistent interactivity across all reports.

This intermediate layout allowed the client to **approve the structure and navigation flow before significant development time was invested in creating complex charts and visuals.** It ensured that when data was finally "turned on," it would be presented in the most intuitive and effective way for decision-making.

<figure class="case-figure">
  <a class="case-figure-link" href="/images/work/power-bi-retail/prototype-layout.webp" data-image-zoom aria-label="Open the intermediate prototype layout screenshot at full size">
    <img src="/images/work/power-bi-retail/prototype-layout.webp" alt="Empty Power BI layout with section headers, table fields and global filters before data was loaded" width="1965" height="1427" loading="lazy" decoding="async" />
  </a>
  <figcaption>The blank-canvas prototype: structure, fields and global filters approved before development.</figcaption>
</figure>

#### Phase 4: Final Visualization and Deployment

Once the wireframe was approved, I populated the tables with the actual data, created the DAX measures (the custom calculation formulas), and added the charts (bar graphs, trend lines, etc.) seen in the other images of this case study. After user acceptance testing (UAT), the dashboard was deployed to the Power BI service for the client's stakeholders.

## Conclusion

This project demonstrates the value of a well-structured Business Intelligence strategy supported by modern technologies such as Microsoft Power BI, Microsoft Fabric, Google BigQuery, and Funnel.io.

For multinational retailers, the challenge is not simply collecting more data — it is making fragmented information consistent, connected, and actionable. By centralizing data sources, normalizing metrics, establishing a shared campaign taxonomy, and implementing a custom attribution model, the client transformed disconnected reports into a unified decision-making platform.

The result is more than improved reporting: it is a scalable analytical foundation that helps turn fragmented data into a strategic competitive advantage.
