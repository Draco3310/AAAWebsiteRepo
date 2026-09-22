# Advanced Ascension Athletics — Pre-Production Checklist

This document details required external inputs and configuration tasks before launching the Advanced Ascension Athletics website to live production.

---

## 1. Domain & Deployment Configuration
- [ ] **Production Site URL:** Set `PUBLIC_SITE_URL` in environment variables (e.g., `https://advancedascensionathletics.com`).
- [ ] **DNS & SSL:** Configure A/CNAME records on hosting provider (Netlify, Vercel, or Cloudflare Pages) and verify SSL certificate generation.

## 2. Lead Intake Form Endpoint
- [ ] **Form Endpoint:** Create a Formspree (or equivalent form processor) endpoint for lead routing.
- [ ] **Environment Variable:** Set `PUBLIC_INTAKE_FORM_ENDPOINT` (e.g., `https://formspree.io/f/xyz123`).
- [ ] **Notification Email:** Ensure form submissions route directly to Branden Young's primary inbox.

## 3. Brand Assets
- [ ] **Favicon / Icon:** Drop official icon-only PNG asset into `/public/assets/aaa-icon.png`.
- [ ] **OpenGraph Social Image:** Replace default meta image reference with official AAA high-resolution OpenGraph asset.

## 4. Google Business Profile & Verified Reviews
- [ ] **Google Place ID:** Obtain Google Place ID for Advanced Ascension Athletics / Peak Performance footprint.
- [ ] **Google Maps API Key:** Configure restricted Places API key.
- [ ] **Environment Variables:**
  ```env
  GOOGLE_REVIEWS_ENABLED=true
  GOOGLE_PLACE_ID=your_place_id
  GOOGLE_MAPS_API_KEY=your_api_key
  ```

## 5. Contact & Facility Verification
- [ ] Verify if public phone number should be displayed on contact follow-ups or footer.
- [ ] Confirm Peak Performance Fitness & Yoga physical suite address if exact mailing details are desired in footer.

## 6. Privacy Policy & Terms
- [ ] Finalize legal text for Privacy Policy (`/privacy`) and Terms of Service (`/terms`).
- [ ] Add links to footer navigation.
