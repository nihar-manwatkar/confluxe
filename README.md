# Confluxe Landing Page

A corporate landing page for Confluxe, built with Next.js, Tailwind CSS, and Framer Motion. Fully responsive with scroll-triggered animations.

## Getting Started

### Run locally

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
npm start
```

### Deploy (Vercel recommended)

1. Push this project to GitHub
2. Sign up at [vercel.com](https://vercel.com)
3. Click "New Project" and import your repo
4. Vercel will auto-detect Next.js and deploy

Your site will be live at `your-project.vercel.app`. You can add a custom domain in the Vercel dashboard.

## Tech Stack

- **Next.js 14** – React framework
- **Tailwind CSS** – Styling
- **Framer Motion** – Animations
- **TypeScript** – Type safety

## Project Structure

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
└── components/
    ├── Header.tsx
    ├── Hero.tsx
    ├── WhatWeAre.tsx
    ├── OurCapabilities.tsx
    ├── Testimonial.tsx
    ├── CategoryBlock.tsx
    ├── OurValues.tsx
    ├── JoinTheTeam.tsx
    └── Footer.tsx
```
