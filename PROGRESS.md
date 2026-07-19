# Land Surveying Services Website

## Project Overview

- **Description:** A production-quality marketing/services website for a land surveying business, built with React 19, Vite, TypeScript, Tailwind CSS, React Router, React Hook Form, Zod, and Framer Motion.
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

### Core Website
- [x] Layout (shell with nav + `<Outlet />` — functional, not yet fully designed)
- [x] Navbar (basic nav links inline in `Layout`; not yet extracted/styled as its own component)
- [ ] Footer
- [ ] Home (placeholder page scaffolded, real content pending)
- [ ] About
- [ ] Services (placeholder page scaffolded, real content pending)
- [ ] Projects
- [ ] Equipment
- [ ] Contact (placeholder page scaffolded, real content pending)
- [ ] Request a Quote

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
- [x] React Router v7 route shell: `Layout` + Home/Services/Contact placeholder pages
- [x] ESLint verified passing (`npm run lint`, no errors)
- [ ] Prettier setup
- [ ] Navbar extracted as its own reusable component
- [ ] Footer component
- [ ] Home page — real content
- [ ] About page
- [ ] Services page — real content
- [ ] Projects page
- [ ] Equipment page
- [ ] Contact page — real content
- [ ] Request a Quote page/flow
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

- **Current Objective:** Finish the Foundation milestone before starting on real Core Website page content.
- **Current Task:** Creating this `PROGRESS.md` file. Next up: React Hook Form + Zod setup.
- **Current Branch:** `main`
- **Current Commit:** `a369299` — "Add React Router route shell"
- **Files currently being worked on:** `PROGRESS.md` (this file)

---

## Next Tasks

1. Install and wire up **React Hook Form + Zod** (shared validation pattern in `src/lib/`), in preparation for the Contact / Request a Quote forms.
2. Install **Framer Motion** and validate it with one small animated element.
3. Add **Prettier** (+ ESLint integration) to close out the Foundation milestone.
4. Extract **Navbar** and add a **Footer** as their own reusable components (currently the nav is inline inside `Layout.tsx`).
5. Build out real **Home page** content (hero section, services teaser, call to action).

---

## Future Improvements

- Dark mode support
- Blog / resources section for surveying-related content (SEO value)
- Client portal or project-status lookup
- Testimonials / reviews section
- Interactive service-area map
- Multi-language support, if serving non-English-speaking clients

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

---

## Session Notes

### Session 1 — 2026-07-19
- **Completed:** Git init, GitHub repo created (private) and pushed, initial commit; Tailwind CSS v4 installed and verified; React Router v7 route shell built and verified (`Layout`, Home/Services/Contact placeholders); ESLint confirmed passing.
- **In progress:** Foundation milestone — React Hook Form, Zod, Framer Motion, and Prettier still pending.
- **Blockers:** None currently.
- **Next session should start with:** React Hook Form + Zod setup (see "Next Tasks" above).

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
