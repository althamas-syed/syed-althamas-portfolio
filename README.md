# Syed Althamas — Portfolio

A data-analyst portfolio built with React, TypeScript, Three.js (React Three Fiber),
GSAP, Lenis smooth scroll, and Tailwind CSS v4 — modelled on a high-end creative
developer portfolio.

## Signature element

A 3D particle field of 1,100 particles runs behind the whole page and morphs through
six formations as you scroll — raw scattered cloud → ascending trend line → structured
grid → bar chart of the headline project metrics → orbiting data rings → a single
coalesced point at the contact section. It visually echoes the actual work: turning
messy data into a clear signal.

## Effects included

- 3D particle morph field (React Three Fiber + scroll progress)
- Mouse-parallax on the particle field, glow blobs, giant outline headlines
- Custom glowing cursor with trailing ring (desktop only)
- Magnetic buttons, word-by-word headline reveals (GSAP ScrollTrigger)
- Lenis smooth scrolling + animated timeline line, growing skill bars,
  chart bars that grow when scrolled into view, count-up stat cards
- Glassmorphism cards with hover glow, dual marquee strips, typed role rotator

## Run it

```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Deploy to GitHub Pages

The repo already includes `.github/workflows/deploy.yml` and a `public/CNAME`
file. Push to `main` and GitHub Actions builds `dist/` and publishes it.

1. Create a repository, e.g. `althamas-syed.github.io` (or any name — with a
   custom domain the repo name does not matter).
2. Push this project to `main`.
3. Repo → Settings → Pages → **Source: GitHub Actions** (the workflow builds
   and deploys automatically on every push).
4. Settings → Pages → **Custom domain**: enter your domain (e.g.
   `syedalthamas.net`), Save, then tick **Enforce HTTPS** once the certificate
   is issued.
5. At your DNS registrar point the domain at GitHub (see DNS table below).

### DNS records (for the custom domain)

| Type  | Host | Value                       |
| ----- | ---- | --------------------------- |
| A     | @    | 185.199.108.153             |
| A     | @    | 185.199.109.153             |
| A     | @    | 185.199.110.153             |
| A     | @    | 185.199.111.153             |
| CNAME | www  | althamas-syed.github.io     |

Reference: GitHub docs on [managing a custom domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).

## Structure

- `src/data/resume.ts` — every piece of content (profile, stats, skills,
  experience, projects, certifications, education). Edit this file to update the
  site's content without touching layout code.
- `src/components/DataField.tsx` — the 3D particle field (six formations).
- `src/components/Cursor.tsx` — custom cursor.
- `src/components/Magnetic.tsx` — magnetic hover wrapper.
- `src/components/Nav.tsx` — fixed navigation with smooth-scroll anchors.
- `src/components/` — Hero, About, Experience, Skills, Projects, Education, Contact.
- `src/lib/animations.ts` — global GSAP ScrollTrigger animation setup.
- `src/lib/lenis.ts` — Lenis smooth scroll singleton.
