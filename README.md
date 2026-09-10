# EVERON — Luxury Real Estate Web Experience

A flagship digital experience for **EVERON**, a premier architectural real estate developer in Bangladesh. Built with modern web standards, cinematic typography, smooth motion choreography, interactive floor plans, dynamic project catalogs, and optimized performance.

---

## ✨ Features

- **Cinematic Visual Language**: Tailored architectural aesthetic with custom gold accents, dark luxury backdrop, and precision typography.
- **Interactive Project Catalog**: Real-time filtering across residential, commercial, and mixed-use luxury developments.
- **Interactive Presence Map**: Dynamic SVG-based Dhaka locations (Gulshan, Banani, Dhanmondi, Bashundhara, Baridhara, Tejgaon) with active project quick-previews.
- **Project Detail View & Interactive 3D/Floor Plans**: Interactive floor plan visualizer with unit specifications, pricing details, and photo gallery with lightbox.
- **Booking & Inquiry Workflow**: Instant private tour scheduling modal with calendar, time slots, and API integration (`/api/inquire`).
- **Smooth Inertial Scrolling**: Powered by `@studio-freight/lenis` with coordinated modal lifecycle listeners.
- **Responsive & Accessible**: Fully adaptive across all viewport sizes, fine-pointer mouse tracking with luxury cursor, and full touch fallback.
- **SEO & Social Optimization**: Dynamic `sitemap.ts`, `robots.ts`, OpenGraph metadata, and image generation.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16 (App Router & Turbopack)](https://nextjs.org)
- **Library**: React 19
- **Styling**: Tailwind CSS v4
- **Animation**: Framer Motion
- **Smooth Scroll**: Lenis
- **Type Checking**: TypeScript 5
- **Linting**: ESLint 9

---

## 🚀 Getting Started

### 1. Prerequisites
- Node.js 18.18+ or 20+
- npm / yarn / pnpm

### 2. Installation
```bash
npm install
```

### 3. Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
```bash
npm run build
npm run start
```

---

## ☁️ Deployment on Vercel

This repository is ready for 1-click deployment on [Vercel](https://vercel.com):

1. Push this repository to GitHub.
2. In the Vercel dashboard, click **"Add New Project"** and import your GitHub repository.
3. Vercel automatically detects Next.js:
   - **Framework Preset**: Next.js
   - **Build Command**: `next build`
   - **Output Directory**: `.next`
4. Click **Deploy**.

---

## 📄 License
Private & Confidential &copy; 2026 EVERON. All rights reserved.
