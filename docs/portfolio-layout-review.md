# Portfolio layout review

Phase: layout, section order, visual hierarchy, typography, spacing, navigation, responsive behaviour and interface accessibility.

No professional copy, case-study content, clients, results or testimonials were rewritten in this phase.

## Files changed

- `src/pages/index.astro`
- `src/pages/about.astro`
- `src/components/Header.astro`
- `src/components/home/Toolkit.astro`
- `src/components/home/Work.astro`
- `src/components/home/CvAccordion.astro`
- `src/data/navigation.ts`
- `src/data/highlights.ts`
- `src/data/cv.ts`
- `src/styles/tokens.css`
- `src/styles/base.css`
- `src/styles/sections.css`

## Structure before

Homepage:

1. Hero
2. Client strip
3. Collaborate / working-together block
4. Dark stats band
5. About
6. Services
7. Work
8. Process
9. CV accordion
10. Journal
11. FAQ
12. Contact CTA
13. Footer

Navigation: Home, About, CV, Work, Journal, Contact.

## Structure after

Homepage:

1. Hero
2. Credibility: client strip + stats band
3. Selected projects (`#work`)
4. Skills (`#skills`)
5. Experience and CV accordion (`#cv`, `#experience`, `#education`)
6. Process (`#process`)
7. About (`#about`)
8. Services (`#services`)
9. Journal (`#journal`)
10. FAQ (`#faq`)
11. Working together / contact details
12. Contact CTA (`#contact`)
13. Footer

About page:

1. About
2. Stats band
3. Skills
4. Experience and CV accordion
5. Process
6. Contact CTA
7. Footer

## Design decisions

- Projects now appear before the long descriptive blocks.
- Skills are a standalone section again; the CV accordion contains experience and education only.
- Header navigation is reduced to four task-oriented links: Projects, Skills, Experience, Contact.
- CV access is a dedicated header CTA (`View CV`) instead of a competing primary navigation item.
- The mobile drawer uses the same anchors and closes after a link is chosen.
- The CV accordion keeps native `<details>` / `<summary>` semantics, remaining keyboard accessible without extra ARIA.
- Clicking a hash link to `#experience`, `#education` or `#cv` opens the CV accordion before scrolling.
- The main content width is now driven by `--content: 1200px`.
- Header height is a token (`--header-h: 72px`), with matching scroll offsets.
- Body text moved from 16px to 17px for long-form readability.
- The skills grid now targets four columns on wide screens instead of six or more narrow cards.
- The dark stats panel remains contained and aligned with the content width.

## Accessibility checks performed

Static and build-time checks:

- `npm run build` — passed, 28 static pages generated.
- `npm run check` — passed with 0 errors, 0 warnings, 0 hints.
- Skip link already present in `BaseLayout`.
- Native landmarks: header, nav, main and footer.
- Keyboard-operable mobile menu with `aria-expanded`, Escape close and focus return.
- CV accordion uses native disclosure semantics and has a visible focus style through the global `:focus-visible` rule.
- Section anchors receive `scroll-margin-top` so the sticky header does not cover focus targets.
- Smooth scrolling is disabled by the existing `prefers-reduced-motion` rule.
- No download button was added for a CV PDF, because no PDF exists in the repository.
- Checked generated HTML for the new section order and header labels.

Not performed:

- No real browser was available in this environment.
- No screenshots or visual tests at 360, 390, 768, 1024 or 1440px.
- No automated axe/Lighthouse run.
- Manual keyboard walkthrough and zoom/reflow testing still need a browser pass.

## Open issues for the content phase

- `src/content/services/*.md` is still written for art direction, identity and interface design. It does not match a data analytics / SEO portfolio.
- Most case studies in `src/content/projects/` are demo design projects (`Brightsill`, `Tessellate`, `Coalfield`, `Petrichor`, `Saltmarsh`). Only `analytics-seo-dashboard.md` matches the current positioning.
- `src/content/blog/*.md` contains design and interface articles; author metadata still credits `Robin Vale` in several posts.
- `src/data/process.ts` describes a design-agency process rather than an analytics/SEO engagement.
- `src/data/faq.ts` and `src/data/highlights.ts` still contain design-specific wording.
- The homepage Work heading says `Six projects, six different arguments` while the project collection currently contains seven files.
- Two contact-oriented blocks remain at the end of the homepage (`Collaborate` and the final CTA). They were kept to avoid deleting content, but their messages should be consolidated in the content phase.
- Unused `Experience.astro` and `Education.astro` components remain available for a standalone presentation; the CV accordion is the current public surface.

## Constraints respected

- No dependency was added.
- No framework or deployment configuration was changed.
- No commit, push or deployment was performed.
- Existing URLs and content-collection routes were preserved.
