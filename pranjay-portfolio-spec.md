# Pranjay Guleria — Personal Portfolio Spec
> Single-page, transition-heavy portfolio for handoff to Antigravity

---

## 🎨 Design Direction

**Aesthetic:** Dark-mode editorial meets brutalist data — think Bloomberg Terminal crossed with a creative technologist's sketchbook. Not a typical dev portfolio.

**Vibe:** Confident, technical, product-led. Someone who ships things at scale and thinks in systems.

**Color Palette:**
- Background: `#080A0F` (near-black with a blue undertone)
- Surface: `#0E1117`
- Accent Primary: `#00FFB2` (electric mint — nod to EV/tech work)
- Accent Secondary: `#FF6B35` (warm orange — product/human side)
- Text Primary: `#F0F4F8`
- Text Muted: `#5A6A7A`
- Border/Grid: `#1A2233`

**Typography:**
- Display / Hero: `Bebas Neue` — tall, bold, editorial
- Headings: `DM Serif Display` — contrast serif for section titles
- Body / UI: `JetBrains Mono` — monospace reinforces technical credibility
- Labels / Tags: `Syne` — geometric, modern

**Fonts via Google Fonts:**
```
https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Serif+Display&family=JetBrains+Mono:wght@300;400;500&family=Syne:wght@400;600;700&display=swap
```

---

## 🏗️ Page Architecture (Single Page, Scroll-Based)

```
[01] HERO
[02] ABOUT
[03] EXPERIENCE TIMELINE
[04] PROJECTS (Featured Cards)
[05] SKILLS & STACK
[06] EDUCATION
[07] CERTIFICATIONS
[08] TESTIMONIAL
[09] CONTACT
```

---

## 🔀 Transitions & Animations (CSS / Tailwind / GSAP)

These transitions are the soul of the page — implement all of them:

| Element | Animation |
|---|---|
| Page load | Staggered line-by-line reveal of hero text (each word slides up with `animation-delay`) |
| Section entry | Elements slide up + fade in on scroll (IntersectionObserver or GSAP ScrollTrigger) |
| Navigation | Fixed top bar fades in with backdrop-blur after scroll past hero |
| Hero background | Slow-moving noise/grain texture overlay + subtle animated grid lines |
| Project cards | On hover: card lifts (`translateY(-8px)`), accent border glows, inner content shifts |
| Skills | Progress bars animate from 0% → % on scroll entry, with a brief overshoot bounce |
| Timeline | Timeline line "draws" downward as you scroll (SVG stroke-dashoffset animation) |
| Section numbers | Large `01`, `02`, `03` numerals in the background, parallax scroll slower than content |
| Cursor | Custom cursor: small dot + larger trailing ring (pure CSS or JS) |
| CTA Button | Magnetic hover effect — button subtly follows cursor |
| Mobile menu | Fullscreen overlay slides in from right |

---

## 📄 Section-by-Section Content

---

### [01] HERO

**Layout:** Full viewport height. Left-aligned text, large typographic statement. Background: dark with animated floating grid lines and faint noise texture.

**Content:**
```
[Small label — Syne, muted, uppercase tracking]
PRODUCT MANAGER → DATA SCIENTIST

[Hero Headline — Bebas Neue, ~10–14vw, white]
PRANJAY
GULERIA

[Subline — JetBrains Mono, small, accent green]
> Building intelligent systems. Shipping real products.
> Melbourne (incoming) · Delhi · 6006907667

[CTA Buttons]
[View Work ↓]    [Download CV]    [LinkedIn ↗]
```

**Animation:** Each word of "PRANJAY GULERIA" reveals letter by letter or line by line. Subtitle types out like a terminal cursor.

---

### [02] ABOUT

**Layout:** Two-column. Left: large pull-quote text. Right: short bio paragraph + quick facts sidebar.

**Content:**

**Pull Quote (large, DM Serif Display, ~3rem):**
> "From roadmaps to models — I build things that work at scale."

**Bio:**
Ex-Product Manager at Antino with nearly 3 years shipping products across healthcare, edtech, and EV domains. Incoming Master of Data Science student at RMIT University, Melbourne. I combine product thinking, software engineering, and machine learning to build impactful, data-driven systems.

**Quick Facts (right sidebar — JetBrains Mono, small):**
```
LOCATION     →  Greater Delhi Area
NEXT_BASE    →  Melbourne, AU (RMIT)
BACKGROUND   →  B.Tech AI · Bennett University
FOCUS_NOW    →  ML Systems · FastAPI · MLflow
CONTACT      →  pranjayguleria@gmail.com
```

---

### [03] EXPERIENCE TIMELINE

**Layout:** Vertical timeline with left-side dates, right-side content cards. Timeline "line" draws itself on scroll.

**Company: Antino** · `Jul 2023 – Apr 2026` · `2 yrs 10 mos`

---

**Role 1: Product Manager**
`Nov 2024 – Apr 2026` | Gurugram

- Led development of India's first integrated GMR EV charging infrastructure for airlines and ground handling at RGI Airport, Hyderabad — 58 GSE charging points across 2,000+ sq. meters, powered entirely by renewable energy. Partners: Celebi & GlobeGround India.
- Built the Oakridge School App (Nord Anglia Education Group) — Driver and Permission Slip modules for iOS & Android. Integrated NFC functionality in the Driver module, reducing human error by **35%+**, serving **10,000+ users** across the school franchise.
- Built and deployed a Python-based JIRA Analytics & Reporting System on PythonAnywhere — automated KPI tracking for **10+ teams**, reduced manual effort by **~90%** (~10 hrs/week saved). Integrated dynamic charts and automated email reports.
- Led full SDLC for **Spare Space** ([sparespace.co.in](http://www.sparespace.co.in)) — India's first marketplace for short-term creative space rentals. Architected booking workflows, secure payment integration, dual-interface dashboards for hosts and seekers.

**Tags:** `EV Infrastructure` `EdTech` `Marketplace` `Python` `NFC` `JIRA` `KPI Automation`

---

**Role 2: Associate Product Manager**
`Jan 2024 – Nov 2024` | Gurugram

- Delivered **7 client projects** on-time via Agile (Scrum & Kanban) — cross-functional coordination using JIRA.
- Created detailed DFDs and User Flow Diagrams in Miro for improved stakeholder clarity.
- Translated requirements from pre-sales calls into comprehensive FRD, BRD, PRD documentation for **10+ projects**.

**Tags:** `Agile` `Scrum` `Kanban` `DFDs` `FRD/BRD/PRD` `Miro`

---

**Role 3: Product Manager Intern**
`Jul 2023 – Jan 2024` | Gurugram

- Gathered requirements from stakeholder pre-sales calls, translated into structured feature lists for timeline and effort estimation.
- Created DFDs for **15+ projects**.
- Drafted BRD, PRD, FRD documentation aligned to business objectives.

**Tags:** `Requirements Gathering` `Documentation` `Pre-sales`

---

**Company: Cisco** · `May 2022 – Jun 2022`
Cyber Security Intern

---

### [04] PROJECTS (Featured)

**Layout:** 3 large horizontal cards (or 2-column grid). Each card has: project name, short description, outcome metrics, tech tags, and a subtle background image or icon.

---

**Project 1: GMR EV Charging Infrastructure**
*India's First Integrated Airport EV Charging System*

> Real-time monitoring and predictive maintenance for 58 GSE charging points across 2,000+ sq. meters at RGI Airport, Hyderabad. Fully powered by renewable energy.

- **Partners:** Celebi Aviation, GlobeGround India
- **Impact:** Operational-scale EV infra for airline ground handling
- **Tags:** `EV` `IoT` `Predictive Maintenance` `Real-time Systems` `Renewable Energy`

---

**Project 2: Oakridge School App — NFC Driver Module**
*Nord Anglia Education Group · 10,000+ Users*

> End-to-end iOS & Android app covering Driver and Permission Slip modules. NFC integration in the Driver module cut human error rates by 35%+.

- **Tags:** `Mobile` `iOS` `Android` `NFC` `EdTech` `UX`

---

**Project 3: JIRA Analytics & Reporting System**
*Python · PythonAnywhere · 10+ Teams*

> Automated KPI tracking system with dynamic charts, real-time time-tracking, and automated email reports for engineering and product teams. Reduced manual reporting effort by ~90%.

- **Tags:** `Python` `JIRA API` `Automation` `KPI` `Data Engineering`

---

**Project 4: Spare Space**
*India's First Short-Term Creative Space Marketplace*
[sparespace.co.in](http://www.sparespace.co.in)

> Full SDLC ownership. Marketplace connecting space owners with 10+ creator categories (photographers, fitness instructors, corporate teams). Secure payments, dual-interface dashboards.

- **Tags:** `Marketplace` `Full Stack` `Product` `Payments` `SDLC`

---

### [05] SKILLS & STACK

**Layout:** Two visual blocks — Skills as animated progress bars, Stack as icon/tag grid.

**Product & Management:**
```
Agile / Scrum / Kanban          ████████████████░░   90%
Stakeholder Management          ███████████████░░░   85%
Product Documentation (FRD/BRD) ████████████████░░   88%
JIRA / Miro / FigJam            ████████████████░░   90%
SDLC Ownership                  ████████████████░░   88%
```

**Data & Engineering:**
```
Python                          ███████████████░░░   85%
SQL                             ██████████████░░░░   80%
Power BI                        █████████████░░░░░   75%
EDA / Data Wrangling            ████████████████░░   85%
Machine Learning                ████████████░░░░░░   70%
FastAPI / Streamlit / MLflow    ███████████░░░░░░░   65%
Full Stack Development          ███████████████░░░   80%
```

**Stack Tags (icon grid):**
`Python` `SQL` `Power BI` `FastAPI` `Streamlit` `MLflow` `JIRA` `Miro` `FigJam` `AWS` `HTML/CSS` `JavaScript` `Git` `PythonAnywhere`

---

### [06] EDUCATION

**Layout:** Two cards side by side.

**Card 1:**
```
RMIT University
Master of Data Science
Melbourne, Australia
2026 → (Incoming)
```

**Card 2:**
```
Bennett University
B.Tech — Artificial Intelligence
2020 → 2024
```

---

### [07] CERTIFICATIONS

**Layout:** Horizontal scrolling chip/badge row or a minimal 3-column grid.

| Certificate | Issuer |
|---|---|
| AWS Academy Graduate — ML Foundations | Amazon Web Services |
| Cybersecurity Essentials | Cisco |
| Python for Data Science and AI | IBM / Coursera |
| The Complete 2022 Web Development Bootcamp | Udemy |
| Introduction to Cybersecurity | Cisco |

---

### [08] CONTACT

**Layout:** Full-width section. Large typographic CTA on left, contact links on right.

**Left — Big Text (Bebas Neue, huge):**
```
LET'S
BUILD
SOMETHING.
```

**Right — Links:**
```
EMAIL    →  pranjayguleria@gmail.com
PHONE    →  +91 6006907667
LINKEDIN →  linkedin.com/in/pranjay19
LOCATION →  Greater Delhi Area → Melbourne
```

**CTA Button:** `Say Hello →` (magnetic hover, accent green border, terminal-style)

**Footer (tiny, muted):**
```
© 2026 Pranjay Guleria · Designed for humans. Built for scale.
```

---

### [08-A] RECOMMENDATIONS / TESTIMONIALS

**Layout:** Full-width section between Contact and Skills (or just before Contact). Large quote mark as background decoration. Card with avatar, name, role, and full quote text. If only one testimonial, make it a centrepiece — full width, large quote, not a carousel.

**Content:**

> **"A dependable, thoughtful, and execution-driven Product Manager. I'd strongly recommend Pranjay to any team building from the ground up."**

**— Khayat Chakerverty**
Founder, Spare Space · [linkedin.com/in/khayat-chakerverty-49453213a](https://www.linkedin.com/in/khayat-chakerverty-49453213a/)
*January 2026 · Worked with Pranjay as client/collaborator*

**Full quote for reference (paraphrase in design, don't reproduce verbatim):**
Khayat — a non-technical founder — highlighted Pranjay's ability to translate vision and business needs into clear, executable product requirements, keeping product, tech, and timelines aligned at every stage. He noted Pranjay's strong sense of ownership: going beyond his role, keeping momentum, and ensuring nothing slipped through the cracks.

**Design Treatment:**
- Giant `"` quotation mark in background, accent green, ~20% opacity
- Avatar: circular, 56px, with a subtle green ring
- Name in `Syne` bold, role in `JetBrains Mono` muted
- Quote text in `DM Serif Display`, italic, large (~1.5rem)
- LinkedIn icon link next to name (opens in new tab)
- Animate: quote fades + slides up on scroll entry; quotation mark parallaxes slightly

---

## 📐 Layout & Spacing Guidelines

- Max content width: `1200px`, centered
- Section padding: `120px 0` desktop, `80px 0` mobile
- Grid: 12-column CSS Grid base
- Border radius on cards: `2px` (sharp — brutalist feel) or `6px` (subtle softness — pick one and stick to it)
- Card backgrounds: `rgba(255,255,255,0.02)` with `1px solid #1A2233` border

---

## 📱 Responsive Breakpoints

| Breakpoint | Behavior |
|---|---|
| `< 768px` | Single column, hamburger nav, hero text scales to `18vw` |
| `768–1024px` | 2-column grid, timeline collapses to single side |
| `> 1024px` | Full layout as described |

---

## 🧭 Navigation (Fixed Top Bar)

**Appears:** After scrolling past hero (with `backdrop-filter: blur(20px)` + subtle dark bg)

**Links:**
```
PRANJAY G.     [About] [Work] [Projects] [Skills] [Contact]
```

Active section highlighted in accent green.

---

## ⚙️ Tech Stack Recommendation for Antigravity

- **Framework:** Next.js 14+ (App Router) or Astro
- **Styling:** Tailwind CSS v3 + custom CSS variables
- **Animations:** GSAP + ScrollTrigger for timeline draw + scroll-based reveals
- **Fonts:** Google Fonts (preloaded)
- **Deployment:** Vercel or Netlify

---

## 🗒️ Notes for Developer

1. **Hero animation** is the most important moment — invest time here. The name reveal sets the tone.
2. **Section numbers** (`01` `02` etc.) should be in the far background at ~5% opacity, parallaxing at 0.3x scroll speed.
3. **Custom cursor** should only activate on desktop (disable on touch devices).
4. **Timeline line draw** — use SVG with `stroke-dashoffset` animated via IntersectionObserver or ScrollTrigger.
5. **All transitions** should respect `prefers-reduced-motion` — provide a no-animation fallback.
6. **Performance:** Lazy-load below-the-fold sections. Hero must load instantly.
7. **Accessibility:** All interactive elements must have focus states, ARIA labels on icon-only links.
