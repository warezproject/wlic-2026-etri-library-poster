# WLIC 2026 Poster Companion Site Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a mobile-first static Astro site linked from a QR code on the WLIC 2026 poster, helping visitors understand ETRI Library's six AI use cases in 1–3 minutes.

**Architecture:** Single-page Astro static site with all content stored in typed TypeScript data files, rendered through focused `.astro` components, deployed to GitHub Pages via GitHub Actions. No JavaScript framework, no backend, no database.

**Tech Stack:** Astro 4.x · TypeScript data files · Plain CSS (custom properties + CSS Grid/Flexbox) · GitHub Pages · GitHub Actions

## Global Constraints

- Mobile-first: every section must be fully readable on a 375px viewport
- No JavaScript runtime dependencies (Astro ships zero JS by default — keep it that way)
- No images required initially; use CSS-drawn diagrams and Unicode/emoji icons
- Repository name: `wlic-2026-etri-library-poster`
- GitHub username: `warezproject`
- Base URL: `https://warezproject.github.io/wlic-2026-etri-library-poster/`
- Astro `base` config must match the repository sub-path
- Plain CSS only — no Tailwind, no CSS-in-JS, no utility frameworks
- Accessible contrast: WCAG AA minimum (4.5:1 for body text, 3:1 for large text)
- All quantitative numbers must match the spec exactly (see Global Numbers below)

**Global Numbers (copy verbatim into components — do not paraphrase):**
- Kiosk borrowing: "약 2배 증가 (전년 대비)" / "~2× increase vs. previous year"
- Research output ingestion: "연간 약 1,800건 처리 (직원 1명)" / "~1,800 records/year by 1 staff"
- Google Scholar records: "약 10건 (2024) → 약 4,200건+ (2026)" / "~10 (2024) → 4,200+ (2026)"
- Google Scholar referral visits: "354건 (2024) → 5,315건 (2025)" / "354 (2024) → 5,315 (2025)"

---

## 1. Recommended Site Concept

This site is a **QR-linked mobile companion page** — not a report, not a portfolio, not a Notion export. Its job is to give a conference visitor who just scanned a QR code a clear, fast impression of six concrete AI use cases in under three minutes.

**How it differs from a long Notion page or report:**
- No table of contents, no footnotes, no appendices
- Every section fits in one smartphone screen (or nearly so)
- Reading order is controlled — sections are not skippable tabs
- Numbers are large and prominent, not buried in prose
- The visual hierarchy does the work that prose would normally do

The tone is: **calm confidence, academic credibility, practitioner pragmatism.** Not a startup pitch. Not a government report. A library showing real work.

---

## 2. Information Architecture

### Section order and specifications

| # | Section | Purpose | Visual Treatment | Length |
|---|---------|---------|-----------------|--------|
| 1 | **Hero** | First impression; establish context | Large heading, 2-line subtitle, one CTA link | One screen |
| 2 | **30-second Summary** | Core message in 3 sentences | Left-bordered callout block | 3–4 lines |
| 3 | **Key Numbers** | Quantitative proof of impact | 4 large-number stat cards, 2×2 grid | One screen |
| 4 | **Three Strategic Themes** | Frame the six cases | 3 horizontal pills or cards with icon + title + one-line description | One screen |
| 5 | **Six Case Cards** | The substance — six cases | 2-column card grid on mobile (stacked), icon + title + 3 lines | 3 screens |
| 6 | **How AI Was Used** | Demystify the tools used | Icon list: AI tools / methods used (5–7 items) | Half screen |
| 7 | **Research Output Workflow** | One visual diagram showing automation | Simple CSS step diagram (boxes + arrows) | One screen |
| 8 | **Lessons for Libraries** | Generalizable takeaways | 3–4 numbered lessons, short sentences | One screen |
| 9 | **Full Documentation** | Pointer to detailed materials | Single prominent button | Quarter screen |
| 10 | **Contact** | Attribution and conference identity | Name, org, email, conference name | Quarter screen |

### Section-by-section detail

**Section 1 — Hero**
- Purpose: Establish the poster title, organization, and conference context in under 5 seconds.
- Main message: "This is the digital companion to the WLIC 2026 poster by ETRI Library."
- Content: `h1` with short site title · subtitle with conference name · one anchor link ("Scroll to explore" or "See all cases")
- Visual: Full-viewport-height on mobile, large type, dark or deep blue background, white text. No image required.

**Section 2 — 30-Second Summary**
- Purpose: Let the visitor decide whether to keep reading.
- Main message: ETRI Library used AI as a practical tool across six real cases — no large IT team required.
- Content: 3 sentences. First: what ETRI Library did. Second: the common thread across cases. Third: why it matters for other libraries.
- Visual: Off-white background, left accent border (colored), medium font size.

**Section 3 — Key Numbers**
- Purpose: Prove impact before the visitor reads anything.
- Main message: The numbers are real, they are specific, and they are significant.
- Content: 4 stat cards — kiosk borrowing ×2, 1,800 records/year, 4,200+ Google Scholar records, 5,315 referral visits.
- Visual: 2×2 grid. Each card: large number (48–64px), short label below, light background.

**Section 4 — Three Strategic Themes**
- Purpose: Frame the six cases before showing them.
- Main message: The six cases are not random — they follow a strategic logic.
- Content: Theme 1: Designing Services · Theme 2: Automating Work · Theme 3: Reimagining the Library. Each has a one-line description.
- Visual: Horizontal scroll on mobile (or stacked) · colored left border or top border per theme · small icon or emoji.

**Section 5 — Six Case Cards**
- Purpose: The main content — let visitors find what interests them.
- Main message: Each case is a real problem solved with real tools.
- Content: 6 cards. Each card: icon · case title · problem (1 sentence) · approach (1 sentence) · outcome (1 sentence).
- Visual: Single-column on mobile, 2-column on desktop · card shadow · colored top border per theme · consistent height not required.

**Section 6 — How AI Was Used**
- Purpose: Answer the question "but what AI tools exactly?"
- Main message: The tools are approachable — not exotic, not expensive.
- Content: List of 5–7 tools/methods: Generative AI (LLM) for design and code · RPA for automation · REST APIs for data feeds · Metadata structuring for Google Scholar · AI image generation for space concepts.
- Visual: Icon + label list, 2-column grid on mobile.

**Section 7 — Research Output Workflow**
- Purpose: Show one concrete workflow as a visual — the most automatable case.
- Main message: A single staff member handles 1,800 records/year because the pipeline is well-designed.
- Content: 4–5 step boxes connected by arrows: Collect → Verify → Enrich → Ingest → Report.
- Visual: CSS flexbox row with boxes and arrow connectors. Horizontal scroll on mobile if needed, or stacked vertically.

**Section 8 — Lessons for Libraries**
- Purpose: Give the visitor something to take home.
- Main message: Any library can do this — the bottleneck is not technology, it is workflow design.
- Content: 3–4 numbered lessons. Each: 1 bold sentence + 1 supporting sentence.
- Visual: Numbered list with accent color numbers, generous line spacing.

**Section 9 — Full Documentation**
- Purpose: Provide a link to full materials (Notion or other).
- Content: Short sentence + one large button.
- Visual: Centered, high-contrast button.

**Section 10 — Contact**
- Purpose: Attribution.
- Content: Author name(s) · ETRI Library · Electronics and Telecommunications Research Institute · Republic of Korea · Email address · Conference: WLIC 2026.
- Visual: Footer-style, small text, muted background.

---

## 3. Mobile-First User Experience

### Opening experience (from QR scan)
The user scans the code, the browser opens, and within 1 second they must see:
- The poster title (they recognize it from the physical poster)
- The organization name
- A visual signal that this is a professional, credible page

**First screen requirements:**
- `h1` visible above the fold on iPhone SE (375×667px)
- No horizontal scroll
- No splash screen, no loading spinner
- Background color or gradient (no image required) to load instantly

### Navigation
- No sticky navigation bar — this is a single scrollable page
- One anchor link in the Hero ("Scroll to explore") for orientation
- No hamburger menu, no sidebar
- "Back to top" link in the footer (optional, low priority)

### Scroll flow
Sections should feel like chapters — each one self-contained and visually distinct. The visitor should not feel lost scrolling. Achieve this with:
- Alternating background colors (white / off-white / very light blue)
- Section headings that are clearly readable mid-scroll
- Adequate top padding (64px+ on mobile) so headings breathe

### Section length guideline
- No section should require more than 2 full scrolls on mobile
- If a section would be longer, split content or reduce copy

### Button placement
- Primary CTA (documentation link) near the bottom of the page
- Contact section email link: `mailto:` link, styled as a button

### Readability
- Base font size: 16px minimum, 17–18px preferred on mobile
- Line height: 1.6–1.7 for body text
- Paragraph max-width: 65ch (prevents long lines on wide screens)
- All headings: system font stack or one clean sans-serif (no decorative fonts)

---

## 4. Content Reduction Strategy

### Core principle
Each case card answers exactly four questions: **What was the problem? What did we do? How did AI help? What happened?** No background, no methodology detail, no citations.

### Six case card specifications

---

**Case 1: Self-Service Borrowing & Return Kiosk**

- Card title: Self-Service Kiosk
- Theme: Designing Services
- Icon suggestion: 📦 or a terminal icon
- One-line summary: AI helped design and build a custom self-service borrowing kiosk from scratch.
- Problem: No budget for a commercial kiosk; staff time spent on manual circulation.
- Approach: Used generative AI to validate the service concept, map the user workflow, and generate kiosk application code.
- AI/automation role: LLM as co-designer and code generator — from concept sketch to working prototype.
- Outcome: Borrowing volume approximately doubled compared with the previous year.

---

**Case 2: Research Paper Plagiarism Checking Service**

- Card title: Plagiarism Checking Service
- Theme: Designing Services
- Icon suggestion: 🔍 or a document icon
- One-line summary: A new library service for checking potential plagiarism in ETRI research papers.
- Problem: Researchers had no convenient in-house way to check papers before submission.
- Approach: Used AI to co-design the service concept and user workflow, then integrated with an existing detection tool.
- AI/automation role: LLM as service design partner; helped prototype the user journey and define scope.
- Outcome: New library service launched, providing value to researchers at no additional tooling cost.

---

**Case 3: Automated Information Displays**

- Card title: Automated Library Displays
- Theme: Automating Work
- Icon suggestion: 🖥️ or a display icon
- One-line summary: Library information screens now update automatically via RPA and APIs.
- Problem: Keeping multiple information displays current required repetitive manual effort.
- Approach: Built RPA workflows to pull data from library systems and push updates to displays on a schedule.
- AI/automation role: AI assisted in scripting the automation logic and troubleshooting API connections.
- Outcome: Staff time saved; displays stay accurate without manual intervention.

---

**Case 4: Research Output Ingestion Workflows**

- Card title: Research Output Pipeline
- Theme: Automating Work
- Icon suggestion: ⚙️ or a pipeline icon
- One-line summary: One staff member now processes ~1,800 research records annually through a structured workflow.
- Problem: Annual collection, verification, and entry of ETRI research output data was labor-intensive and error-prone.
- Approach: Designed a structured data pipeline using AI-generated scripts and automation to handle collection, verification, enrichment, and ingestion.
- AI/automation role: LLM generated the processing scripts; AI assisted in designing the pipeline stages.
- Outcome: ~1,800 research outputs verified and entered annually by a single staff member.

---

**Case 5: Google Scholar Discoverability**

- Card title: Google Scholar Visibility
- Theme: Reimagining the Library
- Icon suggestion: 🔎 or a chart icon
- One-line summary: ETRI Library's Google Scholar indexed records grew from ~10 to 4,200+ in two years.
- Problem: ETRI Library's holdings were nearly invisible on Google Scholar, resulting in minimal referral traffic.
- Approach: Used AI to diagnose metadata gaps, guide structured data preparation, and automate submission processes.
- AI/automation role: AI as diagnostic partner and automation assistant for metadata improvement and indexing.
- Outcome: Indexed records: ~10 (2024) → 4,200+ (2026). Referral visits: 354 (2024) → 5,315 (2025).

---

**Case 6: Library Remodeling Concepts**

- Card title: AI-Assisted Space Planning
- Theme: Reimagining the Library
- Icon suggestion: 🏛️ or a floor plan icon
- One-line summary: AI generated multiple space planning concepts for a library renovation project.
- Problem: The library needed renovation ideas but lacked access to architectural design resources.
- Approach: Used AI image generation and spatial reasoning to produce, iterate, and compare multiple remodeling concepts rapidly.
- AI/automation role: AI as creative co-designer — generating visual concepts and spatial layouts for human review.
- Outcome: Multiple viable remodeling concepts produced rapidly at minimal cost, giving decision-makers concrete options.

---

## 5. Visual Design Direction

### Layout style
- Single-column on mobile (375px–767px)
- Two-column for case cards on tablet (768px+)
- Max content width: 800px, centered on desktop
- Section padding: 64px vertical on mobile, 96px on desktop

### Typography
- Font stack: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`
- No web font loading (avoids render-blocking requests on conference WiFi)
- `h1`: 2.5rem (40px) on mobile, 3.5rem on desktop
- `h2`: 1.75rem (28px) on mobile, 2.25rem on desktop
- `h3` (card titles): 1.125rem (18px)
- Body: 1rem (16px) on mobile, 1.0625rem (17px) on desktop
- Line height: 1.65 for body, 1.2 for headings

### Color direction
Use CSS custom properties throughout. Suggested palette:

```
--color-bg: #ffffff
--color-bg-alt: #f8f9fa
--color-bg-dark: #1a1f2e        /* Hero background */
--color-text: #1a1a2e
--color-text-muted: #5a6070
--color-accent: #2563eb         /* Royal blue — academic, professional */
--color-accent-light: #dbeafe
--color-theme-1: #2563eb        /* Designing Services */
--color-theme-2: #16a34a        /* Automating Work */
--color-theme-3: #7c3aed        /* Reimagining the Library */
--color-border: #e2e8f0
```

No gradients needed. Flat colors only.

### Card design
- White background
- 1px border (`--color-border`)
- 4px top border in the theme color (blue / green / purple)
- 12px border radius
- 16px internal padding
- Subtle box shadow: `0 1px 3px rgba(0,0,0,0.08)`
- No hover animation required (mobile context)

### Spacing scale
Use multiples of 8px: 8, 16, 24, 32, 48, 64, 96px.

### Icon and diagram usage
- Use Unicode emoji or simple CSS shapes — no icon library dependency
- The workflow diagram (Section 7) uses CSS flexbox boxes with border and arrow characters (→) between them
- No SVG files required initially

### Professional vs. commercial tone
- No testimonials, no "free trial" language, no marketing superlatives
- Citations and precise numbers signal academic credibility
- Section headings are descriptive, not punchy ("Six AI Use Cases" not "We Changed Everything")
- White space does the visual work — resist adding decorative elements

---

## 6. Data and Content Structure

All content lives in `src/data/` as TypeScript files. No content is hard-coded in `.astro` components.

### `src/data/siteConfig.ts`
```
SiteConfig {
  title: string           // "AI in Action at ETRI Library"
  subtitle: string        // Full poster title
  conference: string      // "WLIC 2026"
  organization: string    // "ETRI Library"
  orgFull: string         // "Electronics and Telecommunications Research Institute"
  country: string         // "Republic of Korea"
  contactEmail: string
  docsUrl: string         // Link to full documentation (Notion or other)
  baseUrl: string         // GitHub Pages base path
}
```
Why: keeps deployment URL, email, and branding in one place — change once, reflects everywhere.

### `src/data/themes.ts`
```
Theme {
  id: 'designing' | 'automating' | 'reimagining'
  title: string
  description: string     // one sentence
  colorVar: string        // CSS variable name, e.g. "--color-theme-1"
  icon: string            // emoji
}
```
Why: themes array is iterated in ThemeCards and used as a lookup key in CaseCard.

### `src/data/cases.ts`
```
Case {
  id: string
  themeId: Theme['id']
  icon: string
  title: string
  summary: string         // one-line summary
  problem: string         // one sentence
  approach: string        // one sentence
  aiRole: string          // one sentence
  outcome: string         // one sentence
}
```
Why: separating content from layout means a non-developer can edit a case by changing one field in one file.

### `src/data/metrics.ts`
```
Metric {
  value: string           // e.g. "2×", "1,800", "4,200+", "5,315"
  label: string           // short label
  sublabel?: string       // optional context, e.g. "referral visits (2025 vs. 2024)"
  caseId?: string         // which case this belongs to
}
```
Why: metrics are reused in multiple places (Key Numbers section and individual case cards).

### `src/data/lessons.ts`
```
Lesson {
  number: number
  headline: string        // bold sentence
  body: string            // one supporting sentence
}
```
Why: lessons are editorial content that may be refined after the conference — keeping them in a data file makes edits trivial.

### `src/data/workflow.ts`
```
WorkflowStep {
  step: number
  label: string           // short step name, e.g. "Collect"
  description: string     // one sentence
}
```
Why: the workflow diagram component maps over this array — changing the number of steps doesn't require touching the component.

### `src/data/aiTools.ts`
```
AiTool {
  icon: string
  name: string
  description: string     // one-line explanation of how ETRI Library used it
}
```
Why: the "How AI Was Used" section maps over this array.

---

## 7. Component Plan

All components are `.astro` files. No React, no Svelte, no Vue. Components receive typed props from data files and return HTML only.

### `src/layouts/Base.astro`
Wraps every page. Contains `<html>`, `<head>` (meta tags, Open Graph, title, global CSS link), and `<body>`. Accepts `title` and `description` props for SEO.

### `src/components/Hero.astro`
Renders the first viewport-height section. Receives `SiteConfig`. Outputs `h1`, subtitle, conference label, and scroll link. Dark background, white text.

### `src/components/Summary.astro`
Renders the 30-second summary block. Receives 3 sentences as props (or hard-coded strings — this section rarely changes). Left accent border styling.

### `src/components/Metrics.astro`
Receives `Metric[]`. Renders a 2×2 CSS grid of stat cards. Each card: large value, label, optional sublabel. No chart library needed.

### `src/components/ThemeCards.astro`
Receives `Theme[]`. Renders 3 theme cards with colored borders, icons, and one-line descriptions. Stacked on mobile, horizontal on desktop.

### `src/components/CaseCard.astro`
Receives a single `Case` and the matching `Theme` (for color). Renders: icon, title, problem, approach, AI role, outcome. Top border in theme color.

### `src/components/CaseGrid.astro`
Receives `Case[]` and `Theme[]`. Renders all six `CaseCard` components in a CSS grid (1-column mobile, 2-column desktop). Handles the mapping.

### `src/components/HowAI.astro`
Receives `AiTool[]`. Renders a 2-column icon+label+description list. "How AI Was Used" section.

### `src/components/Workflow.astro`
Receives `WorkflowStep[]`. Renders a CSS step diagram — boxes connected by arrows. Horizontal scroll on mobile if steps overflow; or renders vertically on mobile.

### `src/components/Lessons.astro`
Receives `Lesson[]`. Renders numbered lessons with large accent-colored numbers, bold headline, and body sentence.

### `src/components/CTA.astro`
Receives `docsUrl: string` and optional `label: string`. Renders a centered section with one descriptive sentence and one large anchor button.

### `src/components/Footer.astro`
Receives `SiteConfig`. Renders author, organization, country, email link, conference name. Muted background. Small text.

---

## 8. File Structure

```
wlic2026/                         ← repository root (= working directory)
├── docs/
│   └── superpowers/
│       └── plans/
│           └── 2026-06-24-wlic2026-poster-site.md
├── public/
│   ├── favicon.svg               ← simple SVG, or omit initially
│   └── robots.txt                ← optional, allow all
├── src/
│   ├── components/
│   │   ├── Hero.astro
│   │   ├── Summary.astro
│   │   ├── Metrics.astro
│   │   ├── ThemeCards.astro
│   │   ├── CaseCard.astro
│   │   ├── CaseGrid.astro
│   │   ├── HowAI.astro
│   │   ├── Workflow.astro
│   │   ├── Lessons.astro
│   │   ├── CTA.astro
│   │   └── Footer.astro
│   ├── data/
│   │   ├── siteConfig.ts
│   │   ├── themes.ts
│   │   ├── cases.ts
│   │   ├── metrics.ts
│   │   ├── lessons.ts
│   │   ├── workflow.ts
│   │   └── aiTools.ts
│   ├── layouts/
│   │   └── Base.astro
│   ├── pages/
│   │   └── index.astro           ← assembles all components in section order
│   └── styles/
│       └── global.css            ← CSS custom properties, resets, utility classes
├── .github/
│   └── workflows/
│       └── deploy.yml            ← GitHub Actions: build + deploy to gh-pages
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

---

## 9. GitHub Pages Deployment Plan

### Repository name
`wlic-2026-etri-library-poster`

### Final URL
`https://warezproject.github.io/wlic-2026-etri-library-poster/`

### Astro base path configuration
Because the site is served at a sub-path (`/wlic-2026-etri-library-poster/`), Astro needs the `base` config set. **Without this, all asset paths break in production.**

In `astro.config.mjs`:
```js
export default defineConfig({
  site: 'https://warezproject.github.io',
  base: '/wlic-2026-etri-library-poster',
  output: 'static',
});
```

All internal links and asset references must use Astro's built-in `import.meta.env.BASE_URL` prefix or the `<base href>` pattern that Astro handles automatically. Links written as bare `/path` will break; Astro's asset pipeline handles this if you use the correct patterns.

### GitHub Actions workflow (`deploy.yml`)
Triggers on push to `main`. Steps:
1. Checkout code
2. Install Node.js (LTS)
3. `npm ci`
4. `npm run build`
5. Deploy `dist/` to `gh-pages` branch using `actions/deploy-pages` or `peaceiris/actions-gh-pages`

In GitHub repository settings: Pages source = `gh-pages` branch, root directory.

### Before deploying
- Confirm `USERNAME` in `astro.config.mjs` matches the actual GitHub username
- Enable GitHub Pages in repository Settings → Pages
- The first deploy creates the `gh-pages` branch automatically

### QR code
Generate the QR code **after** the first successful deploy, using the final URL. Use any QR generator. Test by scanning with both iOS and Android before printing the poster.

---

## 10. Implementation Phases

### Phase 1: Project Setup
**Goal:** A working Astro project that builds and deploys successfully — before any real content.

- [ ] Initialize Astro project with `npm create astro@latest` using the "Empty" template, TypeScript mode
- [ ] Confirm `astro.config.mjs` has `output: 'static'`, `site`, and `base` set correctly for GitHub Pages
- [ ] Create `src/layouts/Base.astro` with HTML skeleton, `<title>`, basic meta tags
- [ ] Create `src/pages/index.astro` that renders `Base.astro` with a placeholder `<h1>`
- [ ] Create `src/styles/global.css` with CSS reset, custom property declarations (colors, spacing), body font stack
- [ ] Run `npm run dev` and confirm the page loads locally at `localhost:4321`
- [ ] Create `.github/workflows/deploy.yml` for GitHub Actions build + deploy
- [ ] Push to GitHub, confirm Pages deployment succeeds, confirm URL resolves

**Verification:** Visit `https://USERNAME.github.io/wlic-2026-etri-library-poster/` and see the placeholder heading.

---

### Phase 2: Content Modeling
**Goal:** All content data files exist with correct TypeScript types and real content from the plan.

- [ ] Create `src/data/siteConfig.ts` — fill in all fields (title, org, email placeholder, docs URL placeholder)
- [ ] Create `src/data/themes.ts` — add all 3 themes with id, title, description, colorVar, icon
- [ ] Create `src/data/cases.ts` — add all 6 cases with all fields (using content from Section 4 of this plan)
- [ ] Create `src/data/metrics.ts` — add all 4 metrics (exact numbers from Global Constraints)
- [ ] Create `src/data/lessons.ts` — add 3–4 lessons (draft content; can refine later)
- [ ] Create `src/data/workflow.ts` — add 5 workflow steps for research output pipeline
- [ ] Create `src/data/aiTools.ts` — add 5–7 AI tool entries
- [ ] Verify TypeScript compiles with no errors: `npm run build`

**Verification:** `npm run build` succeeds. No TypeScript errors.

---

### Phase 3: Core Components (Hero → Metrics → Themes)
**Goal:** First three sections visible and styled correctly on mobile.

- [ ] Build `src/components/Hero.astro`: dark background, `h1`, subtitle, conference label, scroll link
- [ ] Build `src/components/Summary.astro`: left accent border, 3-sentence block
- [ ] Build `src/components/Metrics.astro`: 2×2 grid, large value, label, sublabel
- [ ] Wire all three into `src/pages/index.astro`
- [ ] Test in browser at 375px width (Chrome DevTools mobile emulation)
- [ ] Confirm: `h1` is visible above fold; numbers are large; no horizontal overflow
- [ ] Commit

**Verification:** Visual check at 375px. No horizontal scroll. Numbers legible.

---

### Phase 4: Case Cards and Themes Section
**Goal:** The six case cards and three theme cards rendered and styled.

- [ ] Build `src/components/ThemeCards.astro`: 3 cards with colored top border, icon, title, description
- [ ] Build `src/components/CaseCard.astro`: top border in theme color, icon, title, problem/approach/AI role/outcome
- [ ] Build `src/components/CaseGrid.astro`: CSS grid, 1-column mobile, 2-column ≥768px, maps over `cases`
- [ ] Wire ThemeCards and CaseGrid into `src/pages/index.astro`
- [ ] Test at 375px: cards stack single-column; borders are correct theme colors
- [ ] Test at 768px: cards form 2-column grid
- [ ] Commit

**Verification:** All 6 case cards visible. Theme color borders correct. Grid switches at 768px.

---

### Phase 5: Remaining Sections
**Goal:** All 10 sections complete and wired into the page.

- [ ] Build `src/components/HowAI.astro`: 2-column icon+name+description list
- [ ] Build `src/components/Workflow.astro`: horizontal step boxes with arrows; vertical fallback on mobile
- [ ] Build `src/components/Lessons.astro`: large accent numbers, bold headline, body text
- [ ] Build `src/components/CTA.astro`: centered section, description sentence, large button
- [ ] Build `src/components/Footer.astro`: org name, country, email link, conference
- [ ] Wire all into `src/pages/index.astro` in correct section order
- [ ] Add alternating background colors to sections (white / off-white / very light blue)
- [ ] Commit

**Verification:** Full page scrolls without any missing sections. All sections visible on mobile.

---

### Phase 6: Mobile Optimization and Visual Polish
**Goal:** The page feels complete and professional at all viewport sizes.

- [ ] Audit every section at 375px width — fix any text overflow, padding issues, or grid breaks
- [ ] Set correct font sizes: body 16px mobile / 17px desktop; headings per spec
- [ ] Set line heights: 1.65 body, 1.2 headings
- [ ] Add 65ch max-width on paragraph text
- [ ] Confirm color contrast for all text (check with browser DevTools accessibility panel)
- [ ] Test at 768px (tablet) and 1280px (desktop)
- [ ] Add `<meta name="viewport">` and `theme-color` to Base.astro if not already present
- [ ] Add Open Graph tags: `og:title`, `og:description`, `og:url` (for link previews when shared)
- [ ] Verify page loads fast: `npm run build` output should be under 100KB total (no images, no fonts)
- [ ] Commit

**Verification:** Page renders cleanly at 375px, 768px, 1280px. Lighthouse mobile score ≥ 95 for Performance.

---

### Phase 7: GitHub Pages Deployment and QR Testing
**Goal:** The page is live at the final URL and the QR code is verified.

- [ ] Push all changes to `main`
- [ ] Confirm GitHub Actions workflow completes successfully
- [ ] Visit the live URL on a real smartphone (both iOS Safari and Android Chrome)
- [ ] Scroll through all sections on the phone
- [ ] Confirm: no horizontal scroll, no overlapping text, CTA button tappable
- [ ] Generate QR code from the final URL
- [ ] Scan the QR code from ~50cm distance (simulating standing-in-front-of-poster)
- [ ] Confirm the page loads in under 3 seconds on mobile data
- [ ] Fill in final content: contact email, docs URL (once Notion page is ready)
- [ ] Final commit and push

**Verification:** QR scan → page loads → scrolls correctly on a real phone.

---

## 11. Risks and Decisions Needed

### Decision 1: CSS approach — Plain CSS (recommended) vs. Tailwind
**Recommendation: Plain CSS.** This site has ~10 components, a fixed color palette, and no complex interaction states. Tailwind adds a build step, a `tailwind.config.js`, and class-name clutter in templates with no meaningful benefit at this scale. Plain CSS with custom properties is easier to edit by non-developers and produces cleaner markup.

**Status: Recommendation is Plain CSS. Confirm or override.**

### Decision 2: Contact email address
**Resolved:** `sjbae7@etri.re.kr`

### Decision 3: Full documentation URL
**Resolved:** `https://app.notion.com/p/AI-in-Action-at-ETRI-Library-Designing-Services-Automating-Work-and-Reimagining-the-Library-388eccb1cdf381459920f159da9872f1`

### Decision 4: Author name(s) in the footer
**Resolved:** Seongjin Bae, Jiyeon Baek (ETRI)

### Decision 5: GitHub username for Pages URL
**Resolved:** `warezproject` → Final URL: `https://warezproject.github.io/wlic-2026-etri-library-poster/`

### Decision 6: Include images?
No images are required. If the poster has a logo (ETRI logo, WLIC logo, or conference badge), including it adds credibility but also adds file management. **Should images be included, or stay image-free for now?**

**Status: Recommendation is image-free initially. Confirm or override.**

### Decision 7: One page only vs. case detail pages
All content is currently proposed as a single page. Case detail pages would require a routing layer, markdown files, and more Astro complexity. **Single page only?**

**Status: Recommendation is single page. Confirm or override.**

---

## 12. Resolved Configuration

All decisions confirmed by user on 2026-06-24:

| Item | Value |
|------|-------|
| GitHub username | `warezproject` |
| Final URL | `https://warezproject.github.io/wlic-2026-etri-library-poster/` |
| Contact email | `sjbae7@etri.re.kr` |
| Docs URL | `https://app.notion.com/p/AI-in-Action-at-ETRI-Library-…-388eccb1cdf381459920f159da9872f1` |
| Authors | Seongjin Bae, Jiyeon Baek (ETRI) |
| CSS approach | Plain CSS (confirmed) |

---

*Plan written: 2026-06-24. All decisions resolved. Ready for implementation.*
