# Portfolio content review

Phase: positioning, content, evidence and conversion.

The layout and design system from the previous phase were kept. Changes are limited to copy, data, metadata, content visibility and small content-driven component adjustments.

## New positioning

**Primary title:** Data Analyst · Marketing Analytics & Automation

**Supporting areas:** marketing analytics, BI and reporting, automation and data integration, technical SEO and GEO.

The portfolio now reads as the site of a data analyst who works between marketing, web analytics and CRM systems. It no longer presents art direction, identity, packaging or interface design as services.

## Hero

Before:

> I turn search, analytics and product data into decisions teams can act on — from tracking architecture to the dashboard on the wall.

After:

> I connect marketing, web and CRM data to build reliable measurement, useful dashboards and automated workflows. My work spans marketing analytics, BI and technical SEO.

CTAs:
- Primary: `View selected projects` → `/work/`
- Secondary: `View CV` → `#cv`

The decorative avatar stack was removed because there is no verified team imagery behind it.

## Main copy changes

### About

Before: eleven years framing with a design-agency tone.

After: measurement built around the decision, with responsibilities covering KPIs, tracking, data pipelines, reporting and documentation.

### Skills

Before: eight design-oriented toolkit cards.

After: four areas of work:
- Analytics & measurement
- BI & reporting
- Automation & data integration
- Technical SEO & GEO

No tools are listed as a promise of commercial services.

### Process

Before: `Listen`, `Frame`, `Draw`, `Leave well` with fixed week numbers.

After: `Understand the decision`, `Audit data and tracking`, `Build the measurement layer`, `Validate and hand over`. No fixed timelines or free-support promises.

### FAQ

Rewritten around analytics, tools, existing tracking/CRM, SEO, deliverables and contact. Removed claims about fixed prices, six-week engagements, one-week reviews and unlimited post-handover support.

### Contact

The contact form was removed from public rendering because `contact.formEndpoint` is empty and the form would have shown a developer-only setup note. The page now uses email, the hidden phone reveal, location and availability.

## Removed or unpublished content

### Projects

The following template case studies were moved to `draft: true` and are no longer published:

- `brightsill-console.md`
- `coalfield-site.md`
- `petrichor-reporting.md`
- `saltmarsh-packaging.md`
- `tessellate-identity.md`

Reason: they are design/interface/packaging demos without a documented connection to the analytics/SEO profile.

`undergrove-app.md` was removed entirely at the user's request and is no longer part of the repository.

Published project:

- `analytics-seo-dashboard.md` — **portfolio demo**, built with synthetic data. The page states this explicitly, uses `client: Portfolio demo`, and contains no measured client results.

### Services

All six template service pages were moved to `draft: true`; the `/services` routes were removed. Reason: art direction, identity, packaging, design systems and site build are not supported by the current professional positioning.

### Journal

All six design/UX blog posts were moved to `draft: true`; the `/journal` routes were removed. Reason: the articles are template content about interface design and design systems, not analytics or technical SEO.

### Testimonials and awards

The template testimonials and awards were already removed from rendering in the layout phase. Their data files remain unused and are not part of the public site.

## Quantitative claims and sources

The CV supplied by the user is the source for the following:

| Claim | Source | Where it appears |
|---|---|---|
| 11+ years in analytics and SEO | Roles from 08/2015 to 06/2026 | Homepage stats, hero, About badge |
| 80+ professionals trained | CV, JobsAcademy | Homepage stats, experience entry |
| 95% course satisfaction | CV, JobsAcademy | Experience entry |
| 25% client retention increase | CV, OTO Agency | Experience entry only |
| Up to 290% conversion-rate increase | CV, OTO Agency Google Ads | Experience entry only |
| 25% session duration increase | CV, OTO Agency | Experience entry only |
| 40% bounce-rate reduction | CV, OTO Agency | Experience entry only |

The 25% retention claim was removed from the homepage stats band because the CV does not include a baseline or measurement period. It remains in the OTO experience entry with `reported` wording.

The analytics case study contains no quantitative performance claims. Its result labels describe the demo output, not client outcomes.

## Experience and education

- Six roles are published from the CV: Plan.Net Italia, JobsAcademy, Freelance, OTO Agency, Free-way Agency and A. Minieri S.p.A.
- The CV contains two Plan.Net Italia entries with the same dates (`Data Analyst` and `Data Analyst & SEO / GEO Manager`). They were merged into one timeline entry to avoid duplication.
- Education and certifications are published from the CV.
- The CV gives the ITIS range as `1995 – 2020`. The site uses `1995 – 2000` because the original range appears inconsistent. This needs confirmation.
- No CV PDF exists in the repository, so no `Download CV` button was added.

## Metadata

Updated:
- Site title, role, description and footer blurb.
- Open Graph image now uses the real portrait.
- Page titles and descriptions for About, Projects and Contact.
- Privacy, Terms and 404 copy no longer contain template or demo instructions.

Still pending:
- `astro.config.mjs` still uses the template canonical URL fallback (`https://swp-freelancer-portfolio.vercel.app`). The production domain was not provided, so it was not invented.
- There is no CV PDF to align with the site.

## Questions for Dario

1. Confirm the production domain to replace the template canonical URL in `astro.config.mjs`.
2. Confirm whether the Plan.Net Italia titles should remain merged or be shown as two separate official roles.
3. Confirm the correct ITIS end year (`2000` assumed, CV says `2020`).
4. Confirm whether the 25%, 290%, 25% and 40% results at OTO Agency have a baseline and measurement period that can be published.
5. Confirm whether there are real analytics/SEO projects with client permission that can replace or add to the synthetic demo.
6. Confirm whether the site should keep the `Open to analytics, BI and technical SEO opportunities` availability line.
7. Confirm whether a CV PDF exists and should be linked.
8. Confirm whether any of the drafted design articles should be rewritten for analytics rather than removed.

## Verification

- `npm run build` — passed; 8 static pages generated.
- `npm run check` — 0 errors, 0 warnings, 0 hints.
- Generated HTML checked for `/journal`, `/services`, `Robin Vale`, `Art direction` and template notes: no occurrences.
- Homepage section order verified: Projects → Skills → CV/Experience → Process → About → FAQ → Contact.
- No browser was available, so no visual viewport, keyboard or screenshot pass was performed in this phase.
- No commit or deployment was performed.
