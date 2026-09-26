# Govt. Graduate College Aroop, Gujranwala — Official Website

Official public website for **Govt. Graduate College Aroop, Gujranwala** (`ggca-grw.edu.pk`), a public sector college under the Higher Education Department, Government of the Punjab, affiliated with the University of Gujrat.

This is a **standalone project and its own git repository** — it is intentionally not tracked inside the `inbox` repo (see the root `.gitignore`).

## Stack

- React 19 + Vite 8 + TypeScript
- TanStack Router (file-based routing, client-side only — no backend)
- Tailwind CSS v4, shadcn/ui-style primitives (`src/components/ui`)
- lucide-react + @tabler/icons-react

This mirrors the conventions used in the `inbox` project's `apps/web` (same styling approach, `cn()` helper, component structure) but stays a minimal static site — no auth, database, i18n, or server, none of which this project needs.

## Why no backend (v1)

The site is purely informational: college intro, programs, faculty, news, gallery, contact. All of that is static content that a frontend-only app can serve. A backend would only become necessary if the college later wants:

- An admin panel for non-technical staff to edit content themselves
- Online admission forms with server-side validation/storage
- A contact form that emails/stores submissions
- A student portal or authenticated area
- Document verification lookups (e.g. verifying a certificate by ID)

None of these are in scope for v1. If needed later, the cleanest path is a small headless CMS or a lightweight API added under a new `apps/` folder, without rewriting the frontend.

## Editable content

All content that must stay accurate lives in `src/data/*.ts`, with comments noting what's officially sourced vs. a placeholder:

- `site.ts` — name, address, contact, affiliation, social links
- `programs.ts` — academic programs (sourced from the HED Punjab portal)
- `faculty.ts` — **intentionally empty** until the college provides a current, verified teacher list (the previously public list is outdated)
- `news.ts` — announcements/events (empty until the college provides real items)
- `gallery.ts` — campus photos (placeholders until real photos are supplied — Facebook/Instagram could not be scraped reliably for authentic images)

## Development

```bash
bun install
bun dev      # http://localhost:5173
bun run build
```
