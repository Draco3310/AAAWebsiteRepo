# Advanced Ascension Athletics (AAA) Website

Polished, premium, conversion-focused marketing website for **Advanced Ascension Athletics LLC (AAA)** in Colorado Springs, CO. Built with **Astro** and **Tailwind CSS**.

Tagline: **One Body. One Path. Become More.**

---

## Technical Stack & Architecture

- **Framework:** [Astro](https://astro.build/) (v5 static-first)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) (v4 with Vite plugin)
- **TypeScript:** Strict type checking
- **SEO & Data:** Astro Sitemap integration, OpenGraph, Schema.org Organization metadata
- **Color System:**
  - Performance Graphite: `#181A1F`
  - Ascension Violet: `#5B35A3`
  - Titanium: `#A7ADB5`
  - Summit White: `#F5F6F7`

---

## Key Site Structure

### Primary Pages
1. **Home (`/`)**: Brand philosophy, value proposition, coaching ladder preview, HYROX feature, baseline assessment detail.
2. **Coaching (`/coaching`)**: System vs workouts positioning, 4-tier ladder, feature comparison matrix.
3. **HYROX (`/hyrox`)**: Specialty vertical execution mechanics, compromised running, pacing strategy.
4. **The AAA Method (`/method`)**: 5-stage framework (Assess, Individualize, Progress, Adapt, Reassess) and client responsibility principle.
5. **About (`/about`)**: Meet Your Coach (Branden Young bio, Army Reserve background, ISSA CPT, HYROX L1), "Nobody cares. Lift the weight." personality.
6. **Results (`/results`)**: "Proof of Progress" evaluation system and verified Google Reviews connector / empty state.
7. **Start Here (`/start-here`)**: Direct intake pathways and form submission.

### Supporting Local SEO Landing Pages
- `/colorado-springs-personal-training`
- `/baseline-assessment` ($149 Standalone)
- `/semi-private-coaching` (2:1 to 4:1)
- `/private-drop-in` ($110)

---

## Centralized Data Architecture

All pricing, services, coach credentials, and business facts are defined in single-source-of-truth modules under `src/data/` and `src/config/`:
- `src/config/site.ts`
- `src/data/services.ts`
- `src/data/coach.ts`
- `src/data/hyrox.ts`

---

## Environment Variables

Copy `.env.example` to `.env` and populate required values:

```env
PUBLIC_SITE_URL=https://advancedascensionathletics.com
PUBLIC_INTAKE_FORM_ENDPOINT=https://formspree.io/f/your_form_id
GOOGLE_REVIEWS_ENABLED=false
GOOGLE_PLACE_ID=
GOOGLE_MAPS_API_KEY=
```

---

## Development & Build Commands

```bash
# Install dependencies
npm install

# Run local development server (http://localhost:4321)
npm run dev

# Build production static output in /dist
npm run build

# Preview build locally
npm run preview
```

---

## Pre-Production Checklist

See `PRODUCTION_CHECKLIST.md` for remaining pre-launch items.
