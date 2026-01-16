# README.md

## 1. Overview

**doublecli.cc-waitlist** is a **clean-loud, hacker-arcade** waitlist landing page for the **doublecli.cc** project. It’s built to collect emails for **Cohort 0 / Site Launch** and deliver a scroll-stopping first impression with strict brand consistency (dark-first, Safety Orange + Hot Magenta accents, and the signature 6px down-right echo motif).

Primary audience: teens + 20s who want to learn how to hunt emerging opportunities and build solo ventures in frontier niches.

---

## 2. Goals and Non-Goals

### Goals
- Ship a **fast, mobile-responsive** waitlist landing page with:
  - Hero headline + subhead + email capture form
  - “Mission Brief” terminal card
  - Short supporting sections (What you’ll learn / For vs Not for / FAQ)
- Preserve doublecli.cc brand constants:
  - Dark-first UI, **90–95% neutrals**, **5–10% accents**
  - Accents: **Safety Orange** for primary action, **Hot Magenta** for tags/secondary emphasis
  - Signature motif: **single** double-offset echo (**6px / 6px**, down-right) with a tight neon aura
  - Two-cursor icon mark (orange + magenta)
- Integrate waitlist submissions with a configurable provider (e.g., Formspree, ConvertKit, Buttondown, custom endpoint).
- Make deployment trivial (GitHub Pages / Cloudflare Pages / any static host).
- Keep it maintainable for iterative copy and layout tweaks.

### Non-Goals
- No full auth system, user accounts, or gated content.
- No heavy backend required for MVP (unless you choose a custom endpoint).
- No complicated CMS, page builder, or component framework required.
- No mascots/characters in the core system.
- No “design trend soup” (avoid noisy neon gradients, clutter, generic SaaS templates).

---

## 3. Core Use Cases

1. Visitor joins waitlist by entering email and receiving an immediate “you’re on the list” confirmation.
2. Owner updates the waitlist endpoint (Formspree/ConvertKit/etc.) without rewriting the page.
3. Owner updates copy (headline/subhead/FAQ) quickly to match evolving positioning.
4. Owner shares a single URL on TikTok/X that loads fast and looks premium on mobile.
5. Owner runs small iterations (CTA text, badge copy, FAQ items) while staying brand-consistent.
6. Agent/dev adds basic spam defenses (honeypot, rate limiting via provider, optional CAPTCHA) without breaking styling.

---

## 4. Proposed Solution

### High-level Architecture
- **Static Frontend**
  - `index.html` (structure + copy)
  - `styles.css` (tokens + layout + brand motif)
  - `main.js` (waitlist submit logic, status messaging, config)
- **Waitlist Provider**
  - Configurable endpoint for form submissions (recommended for MVP)
  - Optional custom endpoint later (serverless function) if you want advanced controls

### Key Technical Choices
- **Vanilla HTML/CSS/JS (default)**  
  Rationale: fastest to ship, easiest to host anywhere, minimal moving parts.
- **Optional Vite dev workflow**  
  Rationale: nicer local DX (HMR) if you already run Vite on port `5173`.
- **Static hosting (GitHub Pages / Cloudflare Pages)**  
  Rationale: free, fast global CDN, simple deploy.

---

## 5. Interfaces

### UI Screens
- `/` — Waitlist landing page
  - Hero: badge + headline + subhead + email capture
  - Mission Brief terminal card
  - Supporting sections: What you’ll learn, For/Not for, FAQ
  - Footer: brand stamp + slogan

### Configuration Surface
Choose one of these patterns (MVP-friendly):

**Option A: `config.js` (static-host friendly)**
- Create `public/config.js`:
  ```js
  window.DOUBLECLI_CONFIG = {
    waitlistEndpoint: "https://your-provider-endpoint",
  };
