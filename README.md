# Spaark Enterprises — Official Website

> Modern, multi-page B2B lead generation website for **Spaark Enterprises**, an electronic security, audio-visual, telecommunications, and workplace systems integrator based in Old Sangavi, Pune, Maharashtra.

Built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**. Optimized for static site generation (SSG), mobile responsiveness, fast SEO, and instant Vercel deployment.

---

## 🚀 Quick Start

### 1. Prerequisites
- **Node.js**: v18.17+ or higher (Tested on Node.js v20+)
- **npm**: v9+ or higher

### 2. Installation
```bash
npm install
```

### 3. Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Production Build & Static Export
```bash
npm run build
npm run start
```

---

## 📁 Sitemap & Page Structure

Every page from the `spaark-enterprises-sitemap.md` specification has been engineered:

```
├── /                                   # Home (Hero, Trust Stats, 7 Services, 4 Solutions, Case Studies, Testimonials, Blog Teaser, Quote Form)
├── /about                              # About Us (Founding Story, Philosophy, Leadership Team, Brand Ecosystem, Service Area)
├── /services                           # Services Hub (Overview grid)
│   ├── /services/cctv-surveillance-pune             # CCTV & Video Surveillance Systems in Pune
│   ├── /services/fire-alarm-system                  # Fire Alarm & Detection Systems (NBC / Form-B Compliant)
│   ├── /services/projectors-interactive-panels      # 4K Interactive Flat Panels & Laser Projectors
│   ├── /services/video-conferencing-solutions       # Hybrid Boardroom Video Conferencing (Teams/Zoom)
│   ├── /services/epabx-system                       # EPABX, IP-PBX & Intercom Systems
│   ├── /services/public-address-system              # Public Address (PA) & Voice Evacuation Systems
│   └── /services/access-control-system              # Access Control, Biometrics & Speed Gate Turnstiles
├── /solutions                          # Solutions Hub (Overview grid)
│   ├── /solutions/time-attendance-system            # Biometric Time & Attendance Systems
│   ├── /solutions/visitor-management-system         # Digital Visitor Management Systems (VMS)
│   ├── /solutions/canteen-management-system         # Cashless RFID & Biometric Canteen Management
│   └── /solutions/parking-guidance-system           # Smart Ultrasonic Parking Guidance Systems
├── /amc-service                        # Annual Maintenance Contracts (Basic, Standard, Comprehensive tiers, SLAs, Checklist, FAQs)
├── /projects                           # Filterable Projects & Case Studies Gallery
├── /testimonials                       # Client Testimonials & Logos Wall
├── /blog                               # Blog & Technical Resources Hub
│   ├── /blog/how-many-cctv-cameras-small-office-need
│   ├── /blog/epabx-vs-cloud-phone-systems-office
│   ├── /blog/amc-vs-one-time-service-difference
│   ├── /blog/fire-alarm-system-requirements-commercial-buildings-maharashtra
│   ├── /blog/visitor-management-systems-modern-office-benefits
│   └── /blog/choosing-between-analog-and-ip-cctv-cameras-guide
├── /contact                            # Contact Us (Address, Phone, Email, Hours, Embedded Google Map, Form)
├── /get-a-quote                        # Standalone Detailed Project Quote Request
├── /privacy-policy                     # Complete Legal Privacy Policy (IT Act / DPDPA Compliant)
└── /terms-of-service                   # Complete Legal Terms of Service (B2B Systems & AMC SLAs)
```

---

## 🎨 Design System & Palette

- **Primary Base**: Deep Industrial Navy (`#0f2744`, `#0b1329`, `#0f172a`) — conveys physical security, enterprise trust, and stability.
- **Brand Accent**: Amber / Gold (`#f59e0b`, `#d97706`) — high-visibility CTAs, technical badges, and key metrics.
- **Status / Secondary**: Emerald (`#10b981`) for WhatsApp / uptime indicators, Slate for structural borders and cards.
- **Typography**: Clean sans-serif system stack optimized for mobile-first scanning and readability.

---

## ⚙️ Sitewide Features

- **Context-Aware Floating WhatsApp Widget**: Bottom-right floating button with pre-filled inquiries tailored to the current URL (e.g., CCTV inquiry on CCTV page, AMC inquiry on AMC page).
- **Click-to-Call Phone Headers**: Standardized Indian format (`+91 98220 12345` placeholder) in the top bar, header, and mobile menu.
- **Structured Schema (JSON-LD)**: `LocalBusiness` / `SecuritySystemInstallService` markup for Old Sangavi, Pune with geo-coordinates, hours, and service catalog.
- **Responsive Navigation**: Desktop dropdowns for Services (7 items) and Solutions (4 items), with a mobile drawer accordion.
- **Interactive Forms**: Client validation, submission animation, feedback states, and clear developer hooks.

---

## ⚠️ Pre-Launch Checklist (Replacing Placeholders)

Before going live on a custom domain, update the following clearly marked placeholder sections:

### 1. Central NAP & Contact Details
📁 **File:** `src/data/company.ts`
- [ ] Replace `phone: "+91 98220 12345"` with the real office landline/mobile.
- [ ] Replace `whatsappRaw: "919822012345"` with the official business WhatsApp number.
- [ ] Replace `email: "contact@spaarkenterprises.com"` with the official company email.
- [ ] Update exact shop/office address, landmark, and Google Maps geo-coordinates in `geo: { latitude, longitude }`.

### 2. Company Stats & Figures
📁 **File:** `src/data/company.ts` (marked with `{/* PLACEHOLDER: replace with real figure */}`)
- [ ] Update `foundedYear` (default: 2012).
- [ ] Update years in business, projects completed (default: 650+), and active AMC contracts (default: 180+).

### 3. Client Testimonials & Logos
📁 **File:** `src/data/testimonials.ts` (marked with `PLACEHOLDER: replace with real client testimonial`)
- [ ] Swap fictional testimonials with real client quotes, names, designations, and company names.
- [ ] Replace placeholder company names in `clientLogosPlaceholder` with real client brand SVG/PNG logos.

### 4. Leadership & Team Section
📁 **File:** `src/app/about/page.tsx`
- [ ] Replace placeholder leadership names (e.g., Sanjay Shinde, Manoj Deshpande) with actual founders/directors and link actual photos.

### 5. Backend Form Integration (Quote & Contact Submissions)
📁 **Files:**
- `src/components/QuoteForm.tsx`
- `src/components/ServiceQuoteForm.tsx`
- `src/components/ContactForm.tsx`
*Currently, all forms log form payloads to the browser console and simulate a 700ms network response.*
- [ ] Connect form submissions to your preferred email/CRM service:
  - **Option A (Resend / SendGrid / Postmark)**: Create an API route (`src/app/api/quote/route.ts`) and forward submissions via email.
  - **Option B (Formspree / Formbold / Web3Forms)**: Point the form `action` URL to your form endpoint.
  - **Option C (CRM Webhook)**: POST JSON directly to Zoho CRM, HubSpot, or a Google Sheet webhook.

### 6. Google Map Embed
📁 **File:** `src/app/contact/page.tsx`
- [ ] Replace the iframe embed query with the exact Google Maps Business Profile location embed of Spaark Enterprises in Old Sangavi, Pune.

---

## 🚢 Deploying to Vercel

1. Push this repository to GitHub, GitLab, or Bitbucket.
2. Sign in to [Vercel](https://vercel.com).
3. Click **"Add New Project"** and import this repository.
4. Next.js settings will be automatically detected (Build Command: `next build`, Output Directory: `.next`).
5. Click **"Deploy"**.
6. Attach your custom domain (e.g., `spaarkenterprises.com` or `spaarkenterprises.in`) under Project Settings -> Domains.
