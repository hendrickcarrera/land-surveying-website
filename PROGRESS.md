# Quadrant Surveying Services (Imus)

## Project Overview

- **Description:** A production-quality single-page marketing/services website for Quadrant Surveying Services, a land surveying business based in Imus, built with React 19, Vite, TypeScript, Tailwind CSS, React Router, React Hook Form, Zod, and Framer Motion.
- **Site structure:** Single page only — one route (`/`) rendering `HomePage`, with in-page sections (hero, gallery, how-it-works, services, CTA) linked via anchor scrolling (`#top`, `#gallery`, `#services`) rather than separate routed pages. There is no Services/Contact/About page anymore.
- **Design system:** "Field notes / blueprint" look — near-black `#14161A` (`ink`) for header/footer/dark sections, warm paper `#F6F2E9` (`paper`) for light sections, safety-orange `#E85D2C` (`accent`) as the primary accent, muted blueprint-blue `#3E5C76` (`blueprint`) as secondary accent. Space Grotesk for headings (`font-display`), Inter for body (`font-sans`, the default), JetBrains Mono for eyebrow labels/tags (`font-mono`) — all via Google Fonts, defined as Tailwind v4 `@theme` tokens in `src/index.css`. Icons via `lucide-react`. Sourced from a user-provided design mockup (`quadrant-redesign-mockup.jsx`, outside the repo) and adapted into the existing component structure rather than replacing it wholesale.
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
- [x] Welcome modal (`src/components/WelcomeModal.tsx` — shows `QSS_Header.png` on load, Framer Motion fade/scale-in, Escape/backdrop-click/X to close)
- [x] Gallery lightbox (`src/components/ImageLightbox.tsx` — clicking a gallery tile opens the full, uncropped image; shares the `Modal` overlay shell with the welcome modal)
- [x] Layout (dark sticky nav — Compass icon + wordmark, anchor links, "Get a Quote" CTA button; `<Outlet />` for the single route)
- [x] Navbar (anchor links inline in `Layout`, scrolls to sections; not yet extracted/styled as its own component)
- [x] Footer (`src/app/Footer.tsx` — paper background, brand blurb, anchor quick links, real contact info with icons: address, phone, two emails, Facebook link)
- [x] Home (real content, "field notes / blueprint" design system: hero with trust-signal row, photo gallery, how-it-works, grouped services grid, CTA band — `src/features/home/HomePage.tsx`, the only page in the app)
- [x] Services — merged into Home as the `#services` section, grouped into 3 categories (Boundary & Legal, Mapping & Topographic, Construction Support) with icons + mono reference tags; no longer a separate route
- [x] Contact — removed as a separate page; Footer (with real address/phone/email) plus `mailto:`/`tel:` CTAs and a Facebook link now cover this instead
- [ ] About / Projects / Equipment — not planned as separate pages under the single-page approach; would be additional sections on Home if ever added
- [ ] Request a Quote — currently just a `mailto:` link; a dedicated form is deferred (see Next Tasks)

### Enhancements
- [x] Framer Motion — installed and validated (`WelcomeModal.tsx`)
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
- [x] Image carousel — replaced by a masonry photo gallery (`#gallery` section in `HomePage.tsx`) as part of the design system redo; `src/components/Carousel.tsx` removed (fully unused after the swap)
- [x] App icon set to `QSS_Logo.png` (`public/qss_logo.png`, referenced from `index.html`)
- [x] Services content — merged into Home as the `#services` section, grouped into 3 categories
- [x] Contact page — removed; replaced by Footer contact info + `mailto:`/`tel:` CTAs + Facebook link
- [x] "Field notes / blueprint" design system applied (palette, typography, icons) per user-provided mockup
- [ ] Request a Quote flow — currently just a `mailto:` link, not a form
- [ ] React Hook Form installed + shared form pattern
- [ ] Zod installed + shared validation schema pattern
- [x] Framer Motion installed and validated (`WelcomeModal.tsx` fade/scale-in via `AnimatePresence`)
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

- **Current Objective:** Polish the single-page site (content, visuals, UX) now that the project is rebranded as Quadrant Surveying Services (Imus), has real business info, is single-page-only, and has a real design system applied.
- **Current Task:** Full visual redesign applied per a user-provided mockup — new palette/typography/icons, dark sticky nav, hero with trust-signal row (non-numeric, see decision below), masonry photo gallery (`#gallery`), a new "How It Works" 4-step section, and the services grid regrouped into 3 categories with icons and mono reference tags. Added a welcome modal showcasing `QSS_Header.png` on load. Verified: lint + `tsc -b` + `npm run build` all clean.
- **Current Branch:** `main`
- **Current Commit:** `2239755` — "Rebrand as Quadrant Surveying Services and consolidate to a single page" (this session's redesign + welcome-modal work not yet committed)
- **Files currently being worked on:** `src/index.css`, `src/app/Layout.tsx`, `src/app/Footer.tsx`, `src/features/home/HomePage.tsx`, `src/components/WelcomeModal.tsx` (new), `package.json` (added `framer-motion`, `lucide-react`)

---

## Next Tasks

1. Install and wire up **React Hook Form + Zod** (shared validation pattern in `src/lib/`), for a future Request-a-Quote form if one gets added — currently just a `mailto:` link.
2. Add **Prettier** (+ ESLint integration) to close out the Foundation milestone.
3. Extract **Navbar** as its own reusable component (currently anchor links inline inside `Layout.tsx`; `Footer` is already extracted).
4. Ask the client to confirm the address/phone/emails/services list pulled from the marketing images (see "Business details" above) — treat as high-confidence but not yet client-verified in writing.
5. Get real trust-signal numbers from the client (license/registration status, actual turnaround time, a real track-record figure) — the hero currently uses non-numeric placeholders ("Licensed Surveying Team", "Fast, Clear Quotes", "Serving Imus & Cavite") specifically to avoid fabricating stats; swap in real ones once confirmed.
6. If About/Projects/Equipment content is wanted later, add them as new `#anchor` sections on `HomePage`, not new routes (see "Site structure" above).
7. Consider whether the welcome modal should only show once per visitor (e.g. `sessionStorage`) rather than on every full page load — currently it just shows every time `Layout` mounts, which for a single-page app means every hard refresh.

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

**Decision:** Apply a full visual redesign from a user-supplied mockup (`quadrant-redesign-mockup.jsx`, kept outside the repo): near-black/warm-paper/safety-orange/blueprint-blue palette as Tailwind v4 `@theme` tokens (`--color-ink`, `--color-paper`, `--color-accent`, `--color-blueprint`) in `src/index.css`; Space Grotesk/Inter/JetBrains Mono via a Google Fonts `@import` (placed *before* `@import "tailwindcss"` — Tailwind's generated `@layer` rules otherwise land before it in the compiled CSS, which violates the CSS spec's "`@import` must be first" rule and throws a build warning); `lucide-react` for icons.
**Reason:** Direct user request/feedback ("it looks bland" → provided an actual mockup to implement), adapted into the existing component structure rather than replacing it wholesale, per explicit instruction.
**Alternative considered:** A from-scratch redesign without the mockup as a reference — rejected since the user did the design work and asked for it to be applied, not reinvented.

**Decision:** Replace the hand-rolled autoplaying `Carousel` component with a static masonry photo gallery (`#gallery` section, mixed tall/wide/normal tiles with a hover caption overlay), per the mockup. Deleted `src/components/Carousel.tsx` since it became fully unused.
**Reason:** The mockup's gallery treatment reads as a working crew's portfolio (specific captions, static grid) rather than a generic auto-rotating slideshow — a better fit for a trust-building small-business site, and the user's brief explicitly called for this section to be rebuilt this way.
**Alternative considered:** Keeping the carousel and adding the masonry gallery alongside it — rejected as redundant; both were showing the same five photos.

**Decision:** Use non-numeric trust-signal phrases ("Licensed Surveying Team", "Fast, Clear Quotes", "Serving Imus & Cavite") instead of the mockup's example numeric claims ("PRC-Licensed Geodetic Engineer", "Quotes within 24 hours", "500+ lots surveyed in Cavite"), and reworded the "How It Works" step 2 and CTA copy to drop an unconfirmed "within a day" turnaround claim.
**Reason:** None of those specific numbers/credentials have been confirmed by the client — the mockup's own comments explicitly flagged them as needing real data, and the user chose "skip numeric claims for now" when asked. Publishing unverified stats/credentials on a real business site would be a false-claims risk.
**Alternative considered:** Hardcoding the mockup's example numbers as placeholders — rejected as a live site publishing fabricated claims, even temporarily, is worse than a slightly less punchy trust row.

**Decision:** Keep the hero background a dark gradient rather than a full-bleed photo, even though the mockup's design uses a real photo behind the hero.
**Reason:** All 5 real field photos (`QSS_2`–`6.jpg`) have marketing text baked directly into the image (a logo pill top-left, an address/phone bar at the bottom) — there's no clean/raw version to crop from, and the user chose the no-photo-in-hero option when asked rather than risk that text showing under the headline.
**Alternative considered:** Cropping one photo tightly via `background-position`/`background-size` to hide the baked-in bands — offered as an option but not chosen; revisit if the client later provides clean, untouched field photos.

**Decision:** Add a welcome modal (`src/components/WelcomeModal.tsx`) that shows `QSS_Header.png` (the client's services-overview graphic) on load, rendered from `Layout.tsx` so it appears regardless of scroll position. Used Framer Motion (`AnimatePresence` + `motion.div`) for the fade/scale-in — the first real use of the dependency installed earlier this session.
**Reason:** Direct user request ("create a welcome modal that showcase qss_header.png").
**Alternative considered:** Rendering it inside `HomePage` instead of `Layout` — rejected since `Layout` wraps the whole app and is the more natural single place for a page-level overlay.

**Decision:** Extract a shared `Modal` component (`src/components/Modal.tsx` — backdrop, Escape-to-close, body-scroll lock, Framer Motion enter/exit) and refactor `WelcomeModal` to use it, then build `ImageLightbox` (`src/components/ImageLightbox.tsx`) on top of it for the gallery. Clicking a gallery tile opens the lightbox with the full, uncropped image (`object-contain`, not the cropped `object-cover` thumbnail) and its caption.
**Reason:** Direct user request ("if a user clicks one of [the showcase images] it should pop up and show the whole image"). Two modals now need near-identical backdrop/Escape/scroll-lock/animation behavior, so sharing that shell avoids duplicating it rather than copy-pasting `WelcomeModal`'s logic.
**Alternative considered:** Copy-pasting the overlay logic into a second standalone modal component — rejected once a second real consumer existed; extracting was no longer premature.

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

### Tailwind v4 `@theme` Design Tokens
- **React concepts introduced:** N/A directly (this is Tailwind, not React), but it's how the app's design system (colors, fonts) is centrally defined and then consumed via ordinary `className` strings throughout components.
- **Angular equivalent:** SCSS `$variables`/CSS custom properties defined once in a global stylesheet (e.g. `_variables.scss` or `:root { --color-accent: ... }`) and referenced everywhere — same centralization idea, different syntax.
- **Key differences:** Tailwind v4's `@theme { --color-accent: #e85d2c; }` block does double duty — it's both the CSS custom property definition *and* the source Tailwind reads to auto-generate matching utility classes (`bg-accent`, `text-accent`, `border-accent`, plus opacity variants like `bg-accent/20`) for free. No separate config file, no manual utility authoring.
- **Best practices learned:** Any custom `@import` (like a Google Fonts stylesheet) must be placed *before* `@import "tailwindcss"` in the same file — Tailwind's own output expands into `@layer` rules, and CSS requires all `@import` rules to precede everything except `@charset`, so an import placed after `@import "tailwindcss"` ends up after generated content in the compiled CSS and trips a build warning.
- **Common Angular habits to avoid:** Reaching for a separate `tailwind.config.js` `theme.extend` block out of habit — Tailwind v4's CSS-first `@theme` in the stylesheet itself replaces that, consistent with the project's earlier decision to skip the config-file approach entirely.

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
- **Also completed this session:** Deployed to Vercel (dashboard + GitHub integration, user's choice) at https://land-surveying-website-silk.vercel.app/ — user reported the live site "looks bland." Applied a full visual redesign from a user-provided mockup (`quadrant-redesign-mockup.jsx`, kept outside the repo, not committed): installed `framer-motion` and `lucide-react`; added a "field notes / blueprint" design system (ink/paper/accent/blueprint palette + Space Grotesk/Inter/JetBrains Mono fonts) as Tailwind v4 `@theme` tokens in `src/index.css`; rebuilt `Layout.tsx` (dark sticky nav, Compass icon + wordmark, "Get a Quote" CTA), `Footer.tsx` (reskinned, kept real contact info + icons), and `HomePage.tsx` (hero with non-numeric trust signals, new masonry photo gallery replacing the old carousel, a new "How It Works" 4-step section, and the 13 services regrouped into 3 categories with icons + mono reference tags). Deleted the now-unused `Carousel.tsx`. Deliberately deviated from the mockup in two places per explicit user choice: no numeric/unverified trust claims, and no photo in the hero background (the real field photos have marketing text baked in with no clean crop available). Added a welcome modal (`src/components/WelcomeModal.tsx`) showcasing `QSS_Header.png` on load, using Framer Motion for the entrance/exit animation. Then extracted that modal's overlay logic into a shared `Modal.tsx` and built `ImageLightbox.tsx` on top of it so clicking any gallery tile pops up the full, uncropped photo. Verified with `npm run lint`, `npx tsc -b`, and `npm run build` — all clean throughout (one CSS `@import`-ordering build warning surfaced during the redesign and was fixed by reordering the Google Fonts import before `@import "tailwindcss"`).
- **Next session should start with:** Get user sign-off on the redesign + modals (share the dev server or redeploy to Vercel), then commit + push, then continue with the polish-pass Next Tasks above.

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
