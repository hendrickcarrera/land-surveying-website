# Quadrant Surveying Services (Imus)

## Project Overview

- **Description:** A production-quality single-page marketing/services website for Quadrant Surveying Services, a land surveying business based in Imus, built with React 19, Vite, TypeScript, Tailwind CSS, React Router, React Hook Form, Zod, and Framer Motion.
- **Site structure:** Single page only — one route (`/`) rendering `HomePage`, with in-page sections (hero, work-in-the-field carousel, services, CTA) linked via anchor scrolling (`#services`, `#top`) rather than separate routed pages. There is no Services/Contact/About page anymore.
- **Business name:** Quadrant Surveying Services (Imus) — source: [Facebook page](https://www.facebook.com/QuadrantSurveyingServices).
- **Business details (confirmed):** Office at 2/F Blue Alley, Open Canal Road, Brgy. Malagasang 2C, Imus, Cavite. Phone (046) 887-7329. Emails rbc01landsurvey@gmail.com and grant.crtz027@gmail.com. Full services list: Relocation & Verification, Subdivision, Consolidation, Aerial Topographic, Resurvey & Amendment, Engineering, Hydrographic, Land Title Verification & Technical Research, Construction, Detailed Engineering, Lot Plan with Vicinity Map, As-Built, Tree Tagging. Source: text baked into the client-provided `QSS_*.jpg`/`QSS_Header.png` marketing images in `src/assets/` (not yet independently confirmed by the client in writing — hours of operation still unknown).
- **Main goal:** Give the business a professional web presence that clearly presents its services and converts visitors into quote requests.
- **Target audience:** Property owners, developers, contractors, and businesses who need boundary, topographic, ALTA, or construction surveying services.
- **Current phase:** Foundation — core tooling is mostly in place; finishing the last Foundation items before moving into Core Website pages.
- **Secondary goal:** This project doubles as a structured React learning path for the developer (6+ years Angular/TypeScript experience), so every feature is taught with an explicit Angular comparison before it's built. See "React Learning Notes" below.

---

## Milestones

### Foundation
- [x] React + Vite + TypeScript
- [x] Git initialized
- [x] GitHub repository created (private — `hendrickcarrera/land-surveying-website`)
- [x] Initial commit
- [x] Tailwind CSS
- [x] React Router
- [x] ESLint
- [ ] Prettier

### Core Website (single page — see "Site structure" above)
- [x] Layout (shell with anchor-link nav + `<Outlet />` — functional, not yet fully designed)
- [x] Navbar (anchor links inline in `Layout`, scrolls to sections; not yet extracted/styled as its own component)
- [x] Footer (`src/app/Footer.tsx` — brand, anchor quick links, real contact info: address, phone, two emails, Facebook link)
- [x] Home (real content: hero, image carousel, full services grid, CTA band — `src/features/home/HomePage.tsx`, the only page in the app)
- [x] Services — merged into Home as the `#services` section (real content: full 13-service grid); no longer a separate route
- [x] Contact — removed as a separate page; Footer (with real address/phone/email) plus `mailto:` CTAs and a Facebook link now cover this instead
- [ ] About / Projects / Equipment — not planned as separate pages under the single-page approach; would be additional sections on Home if ever added
- [ ] Request a Quote — currently just a `mailto:` link; a dedicated form is deferred (see Next Tasks)

### Enhancements
- [ ] Framer Motion
- [ ] React Hook Form
- [ ] Zod Validation
- [ ] SEO
- [ ] Accessibility
- [ ] Performance
- [ ] Responsive Design

### Deployment
- [ ] Production Build
- [ ] GitHub Release
- [ ] Deploy to Vercel
- [ ] Final QA

---

## Progress Checklist

- [x] React + Vite + TypeScript scaffold
- [x] Git initialized
- [x] GitHub repository created (private)
- [x] Initial commit (`98bebb0`)
- [x] Tailwind CSS v4 installed, wired into Vite, verified (build + dev server)
- [x] React Router v7 route shell: single `/` route (`Layout` + `HomePage`) — Services and Contact routes both removed, app is single-page only now
- [x] ESLint verified passing (`npm run lint`, no errors)
- [ ] Prettier setup
- [ ] Navbar extracted as its own reusable component (currently anchor links inline in `Layout.tsx`)
- [x] Footer component
- [x] Home page — real content, single page containing everything
- [x] Image carousel (`src/components/Carousel.tsx`, hand-rolled, no external library)
- [x] App icon set to `QSS_Logo.png` (`public/qss_logo.png`, referenced from `index.html`)
- [x] Services content — merged into Home as the `#services` section (not a separate page)
- [x] Contact page — removed; replaced by Footer contact info + `mailto:` CTAs + Facebook link
- [ ] Request a Quote flow — currently just a `mailto:` link, not a form
- [ ] React Hook Form installed + shared form pattern
- [ ] Zod installed + shared validation schema pattern
- [ ] Framer Motion installed + first animated component
- [ ] SEO pass (meta tags, titles per route)
- [ ] Accessibility pass (keyboard nav, ARIA, color contrast)
- [ ] Performance pass (bundle size, lazy loading routes)
- [ ] Responsive design pass (mobile/tablet breakpoints)
- [ ] Production build verified
- [ ] GitHub release cut
- [ ] Deployed to Vercel
- [ ] Final QA pass

---

## Current Sprint

- **Current Objective:** Polish the single-page site (content, visuals, UX) now that the project is rebranded as Quadrant Surveying Services (Imus) with real business info available and the architecture has settled on single-page-only.
- **Current Task:** Footer, Home page (with merged Services section), image carousel, and app icon are done and verified (lint + `tsc -b` + `npm run build` all clean). Services page and Contact page have both been removed as separate routes — the app is now genuinely single-page (`/` only).
- **Current Branch:** `main`
- **Current Commit:** `02b195a` — "Add PROGRESS.md as the project's living status doc" (rebrand, Footer/Home/carousel/icon/single-page-consolidation work not yet committed)
- **Files currently being worked on:** `src/app/Footer.tsx`, `src/app/Layout.tsx`, `src/app/router.tsx`, `src/features/home/HomePage.tsx`, `src/components/Carousel.tsx`, `index.html`

---

## Next Tasks

1. Install and wire up **React Hook Form + Zod** (shared validation pattern in `src/lib/`), for a future Request-a-Quote form if one gets added — currently just a `mailto:` link.
2. Install **Framer Motion** and validate it with one small animated element (e.g. section fade/slide-in on scroll — fits a single-page site well).
3. Add **Prettier** (+ ESLint integration) to close out the Foundation milestone.
4. Extract **Navbar** as its own reusable component (currently anchor links inline inside `Layout.tsx`; `Footer` is already extracted).
5. Ask the client to confirm the address/phone/emails/services list pulled from the marketing images (see "Business details" above) — treat as high-confidence but not yet client-verified in writing.
6. If About/Projects/Equipment content is wanted later, add them as new `#anchor` sections on `HomePage`, not new routes (see "Site structure" above).

---

## Future Improvements

- Dark mode support
- Blog / resources section for surveying-related content (SEO value)
- Client portal or project-status lookup
- Testimonials / reviews section
- Interactive service-area map
- Multi-language support, if serving non-English-speaking clients

---

**Decision:** Rebrand the project as "Quadrant Surveying Services (Imus)" — updated `package.json` name, `index.html` `<title>`, and added a brand name to the nav header in `Layout.tsx`.
**Reason:** This is being built for a real business (Quadrant Surveying Services, Imus) rather than staying a generic placeholder.
**Alternative considered:** Scaffolding a brand-new separate project — rejected to keep the Foundation work already done (Tailwind, Router, ESLint).

**Decision:** Build the image carousel as a small hand-rolled component (`src/components/Carousel.tsx`, plain `useState` + Tailwind transitions) instead of installing a carousel library.
**Reason:** The need is simple (a handful of images, prev/next + dots), and the project already plans to add Framer Motion later for animation — no need for a second animation/UI dependency in the meantime.
**Alternative considered:** A library like `embla-carousel` or `swiper` — rejected as unnecessary weight for this use case.

**Decision:** Introduce a top-level `src/components/` folder for generic, cross-feature UI (starting with `Carousel.tsx`), alongside the existing `src/features/*` organization.
**Reason:** A carousel isn't specific to any one feature/page — it doesn't fit the feature-folder convention, so it needs its own shared location.
**Alternative considered:** Placing it inside `src/features/home/` since that's the only current consumer — rejected since it's meant to be reusable (e.g. future Projects page).

**Decision:** Remove the dedicated `/contact` route and page entirely. The Footer (with real address, phone, and both emails) now covers contact info site-wide, "Request a Quote"/"Contact Us" buttons on Home and Services link directly to `mailto:rbc01landsurvey@gmail.com`, and a Facebook link (to the client's page) was added to the Footer's Quick Links.
**Reason:** User feedback: a separate Contact page was redundant once the Footer had real, complete contact info on every page — simpler to act on contact info directly (email/Facebook) than to route to a page that would just repeat the Footer.
**Alternative considered:** Keeping a Contact page with a form — deferred; would need React Hook Form + Zod + a form backend/email-sending solution, which is out of scope until actually needed.

**Decision:** Consolidate the whole site into a single page. Removed the `/services` route and `ServicesPage.tsx`, merging its full 13-service grid into `HomePage.tsx` as a `#services` section. `router.tsx` now defines a single index route. `Layout.tsx`'s nav and `Footer.tsx`'s Quick Links both switched from React Router `<NavLink>`/`<Link>` route navigation to plain `<a href="#...">` anchors (`#top`, `#services`) that scroll within the page.
**Reason:** Explicit user instruction: "remove the services tab, i want the whole app to be single page only." A small local-business marketing site with only two real "pages" worth of content doesn't benefit from routed navigation — anchor scrolling is simpler and matches the single-page-site pattern directly.
**Alternative considered:** Keeping React Router with multiple routes gated behind a "single visual page" via CSS — rejected as needless complexity once there's only one route left; a single index route is simpler and still leaves React Router in place if more routes are ever needed later.

---

## Architecture Decisions

**Decision:** Use Tailwind CSS v4's CSS-first config (`@import "tailwindcss"` + `@tailwindcss/vite` plugin) instead of a `tailwind.config.js` + PostCSS setup.
**Reason:** Simpler, faster, no separate PostCSS config needed; it's the current recommended Tailwind v4 setup.
**Alternative considered:** Tailwind v3 with a traditional `tailwind.config.js` — rejected as the legacy approach.

**Decision:** Use React Router's data router API (`createBrowserRouter` + `RouterProvider`) instead of the declarative `<BrowserRouter><Routes>` JSX style.
**Reason:** Route config as an array of objects maps closely to Angular's route-config mental model, and it supports future loaders/actions/error boundaries without a rewrite.
**Alternative considered:** Declarative `<Routes>/<Route>` JSX — rejected as the older pattern.

**Decision:** Organize source by feature (`src/features/home`, `src/features/services`, ...) rather than by file type (`components/`, `pages/`, `containers/`).
**Reason:** Keeps related code colocated and scales better as the site grows.
**Alternative considered:** Flat `pages/` + `components/` split — rejected for long-term scalability.

**Decision:** Keep the GitHub repo private with no open-source license.
**Reason:** This is commercial client work, not an open-source library — default all-rights-reserved copyright is correct.
**Alternative considered:** MIT license — rejected, would grant unintended reuse rights.

---

## React Learning Notes

### Tailwind CSS Setup
- **React concepts introduced:** `className` prop for applying CSS classes.
- **Angular equivalent:** Component-scoped `.css`/`.scss` files with `ViewEncapsulation.Emulated`.
- **Key differences:** Tailwind classes are global utility classes with no per-component style encapsulation — there's no Angular-style automatic scoping to lean on.
- **Best practices learned:** Compose utility classes directly in JSX rather than writing a separate stylesheet per component.
- **Common Angular habits to avoid:** Creating a dedicated `.css` file per component "to scope styles" — unnecessary with Tailwind, and it wouldn't provide Angular-style isolation anyway.

### React Router Route Shell
- **React concepts introduced:** `createBrowserRouter` / `RouterProvider`, `<Outlet />`, `<NavLink>`, route config as a plain array of objects.
- **Angular equivalent:** `RouterModule.forRoot(routes)`, `<router-outlet>`, `routerLink` / `routerLinkActive`.
- **Key differences:** `element` takes JSX directly, no DI-based component resolution; `NavLink`'s active state comes back to you via a className callback function instead of being auto-applied like `routerLinkActive`.
- **Best practices learned:** Nest a shared `Layout` route above child routes instead of repeating navigation markup in every page.
- **Common Angular habits to avoid:** Expecting route `element` resolution to go through some injector/registration step — it's just a JSX expression evaluated as plain JavaScript.

### Single-Page Consolidation (anchor nav instead of routes)
- **React concepts introduced:** Plain `<a href="#section-id">` anchors + a matching `id` on the target element for in-page scrolling, used instead of `<NavLink>`/`<Link>` once there was only one route left.
- **Angular equivalent:** Same idea in Angular — native anchor-fragment scrolling (`<a href="#section">` + `id`), or Angular's own `[routerLink]="[]" fragment="section"` if you wanted the router involved. Neither framework does anything special here; it's browser-native behavior either way.
- **Key differences:** No router `isActive` state, no client-side navigation event, no history entry management needed — the browser handles the scroll on its own with zero JS.
- **Best practices learned:** Don't reach for router navigation (`<Link>`/`<NavLink>`) for same-page section jumps — that's what plain anchors + `id`s are for. Router navigation is for switching between genuinely different views/routes.
- **Common Angular habits to avoid:** Wiring up `routerLink`/`<Link>` "just because navigation" without checking whether the destination is actually a different route — for in-page jumps, that's unnecessary indirection over what a raw anchor already does.

---

## Session Notes

### Session 1 — 2026-07-19
- **Completed:** Git init, GitHub repo created (private) and pushed, initial commit; Tailwind CSS v4 installed and verified; React Router v7 route shell built and verified (`Layout`, Home/Services/Contact placeholders); ESLint confirmed passing.
- **In progress:** Foundation milestone — React Hook Form, Zod, Framer Motion, and Prettier still pending.
- **Blockers:** None currently.
- **Next session should start with:** React Hook Form + Zod setup (see "Next Tasks" above).

### Session 2 — 2026-07-26
- **Completed:** Rebranded project as "Quadrant Surveying Services (Imus)" (business identity sourced from the client's Facebook page — `package.json` name, `index.html` title, nav brand text); ran `npm install` (node_modules was missing) and confirmed lint passing; started the dev server and verified it serves correctly (`http://localhost:5173/`); built and extracted `Footer.tsx`; built real Home page content (hero, services teaser grid, CTA band). Client provided real marketing photos/graphics (`QSS_2.jpg`–`QSS_6.jpg`, `QSS_Header.png`, `QSS_Logo.png` in `src/assets/`) — extracted real business details baked into them (office address, phone, two emails, full 13-item services list) and used them to fill in Footer contact info and build out the real Services page. Set the app/browser-tab icon to `QSS_Logo.png` (`public/qss_logo.png`, referenced from `index.html`; old default Vite `favicon.svg` removed). Built a hand-rolled `Carousel` component (`src/components/Carousel.tsx`) and used it on the Home page to showcase the field photos. Verified throughout with `npm run lint` and `npx tsc -b`, both clean.
- **In progress:** Core Website milestone — About/Projects/Equipment pages still need real content.
- **Blockers:** None currently. Business details were extracted from client-provided marketing images rather than given directly in writing — worth a quick client confirmation pass, and hours of operation are still unknown.
- **Also completed this session:** Fixed the carousel to autoplay (5s interval, pauses on hover) and to stop cropping images (switched from a forced 16:9 `object-cover` box to `aspect-[940/788]` + `object-contain` matching the actual photo dimensions). Removed the `/contact` route and `ContactPage.tsx` entirely per user feedback — Footer now carries all contact info, CTA buttons link to `mailto:rbc01landsurvey@gmail.com`, and a Facebook link to the client's page was added to the Footer. Per further user feedback ("remove the services tab, i want the whole app to be single page only"), removed the `/services` route and `ServicesPage.tsx` too, merging its full 13-service grid into `HomePage.tsx` as a `#services` section; `router.tsx` now has a single index route; `Layout.tsx` nav and `Footer.tsx` Quick Links switched from router `<Link>`/`<NavLink>` to plain anchor (`#top`, `#services`) scrolling. Verified with `npm run lint`, `npx tsc -b`, and a full `npm run build` — all clean.
- **Next session should start with:** Polish pass on the single page (see "Next Tasks" above) — Framer Motion, React Hook Form/Zod, Prettier, Navbar extraction, and client confirmation of the extracted business details.

---

## Git History

- `98bebb0` — Initial Vite React TS scaffold
- `8e4cb57` — Add Tailwind CSS v4 setup
- `a369299` — Add React Router route shell

---

## Claude Instructions

Whenever a new Claude Code session starts, read this `PROGRESS.md` before making any changes.

Use it to understand the current state of the project, continue from where we left off, and update this file whenever a milestone or task is completed.

Do not overwrite existing progress — only append or update completed items.
