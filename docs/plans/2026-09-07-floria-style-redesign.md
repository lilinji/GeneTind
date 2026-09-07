# GeneTind Bio-Infra Redesign Implementation Plan (Floria Style & Impeccable Standards)

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Transform GeneTind from a generic SaaS marketing template into an exquisite, high-end "Bio-Infra Architecture" website inspired by Floria's aesthetic and verified against Impeccable's deterministic quality rules.

**Architecture:** We will transition the visual layer to a deep obsidian palette (`#060911` / `zinc-950`) with bionic emerald/cyan telemetry accents. We replace repetitive 3-column glass cards with Floria's signature design patterns: a cinematic asymmetric split hero, a sticky timeline process section, a staggered bento hardware gallery, and a floating pill navigation. The stack stays lean on Next.js 16 App Router, React 19, Tailwind CSS v4, Motion, and next-intl.

**Tech Stack:** Next.js 16.0.10, React 19.2.0, Tailwind CSS v4.1.3, Motion (Framer Motion) 12.35.0, next-intl 4.8.3, next-themes, Lucide React, TypeScript.

---

## User Review Required

> [!IMPORTANT]
> **Key Design Decisions:**
> 1. **Abandoning the 6-second auto-rotating Hero Carousel**: Replacing it with a single, stable **Asymmetric Split Hero** (Left: impactful typography, value proposition, 3 key metrics; Right: 3D/schematic liquid-cooled HPC chassis & bio-topology visual anchor). This eliminates the CLS height-jumping issue detected by Impeccable.
> 2. **Color Palette Standardization**: Locking the site to a **Deep Obsidian (`#060911`) + Bionic Emerald (`#10b981`) / Cyan (`#06b6d4`)** palette. Generic template blue (`#4a6cf7`) and AI-purple gradients (`#9b8fff`) are permanently retired.
> 3. **Purging Template Placeholders**: Removing `UIdeck`, `Formbold`, `Tailgrids` and emoji server icons (💻, 🌊, etc.), replacing them with authentic monochrome enterprise SVG hardware & bioinfo ecosystem marks.

---

## Proposed Changes & Tasks

### Task 1: Design Tokens & Typography Foundation

**Files:**
- Modify: `src/styles/index.css`
- Modify: `src/app/[locale]/layout.tsx`
- Modify: `src/app/[locale]/page.tsx`

**Step 1: Update Tailwind v4 `@theme` tokens in `src/styles/index.css`**
- Configure `--color-obsidian-bg: #060911;`, `--color-obsidian-card: #0b111d;`, `--color-bionic-emerald: #10b981;`, `--color-bionic-cyan: #06b6d4;`.
- Set up 1px hairline border tokens `rgba(255,255,255,0.08)`.
- Remove redundant Google Fonts `@import` from `index.css`.

**Step 2: Load Geist / Modern Sans & Mono in `src/app/[locale]/layout.tsx`**
- Import `Geist`, `Geist_Mono` from `next/font/google`.
- Set base `body` styles: `bg-[#060911] text-zinc-100 antialiased selection:bg-emerald-500/30 selection:text-emerald-200`.

**Step 3: Fix Page Metadata in `src/app/[locale]/page.tsx`**
- Remove `"-----让生命无法计算的价值！"` and replace with clean, authoritative title and description.

**Step 4: Verification & Commit**
- Run `pnpm build` to verify font loading and token syntax.
- Git commit: `style: configure obsidian design tokens and typography foundation`

---

### Task 2: Floating Pill Header & Navigation

**Files:**
- Modify: `src/components/Header/index.tsx`
- Modify: `src/components/Header/menuData.tsx`

**Step 1: Fix Memory Leak in `Header/index.tsx`**
- Remove un-cleaned `window.addEventListener('scroll')`.
- Replace with a clean scroll state handler using React `useEffect` with dependency array and `return () => window.removeEventListener('scroll', handler)` (or Framer Motion `useScroll`).

**Step 2: Restyle into Floria-inspired Floating Capsule**
- Container: `fixed top-0 inset-x-0 z-50 flex justify-center px-4 py-4 md:py-6 pointer-events-none`.
- Inner Bar: `pointer-events-auto w-full max-w-7xl flex items-center justify-between rounded-full border border-white/10 bg-black/60 backdrop-blur-xl px-6 py-3 shadow-2xl transition-all`.
- Nav links: `text-sm font-medium text-zinc-400 hover:text-white transition-colors`.
- Brand Logo: Refined monochrome contrast logo with subtle bionic dot indicator (`Online / Cluster Healthy`).

**Step 3: Verification & Commit**
- Verify header sticks smoothly without console errors or layout shifting.
- Git commit: `feat: implement floating pill header and fix scroll event memory leak`

---

### Task 3: Cinematic Asymmetric Split Hero

**Files:**
- Modify: `src/components/Hero/index.tsx`
- Modify: `messages/zh.json` (Hero section)
- Modify: `messages/en.json` (Hero section)

**Step 1: Replace 3-slide Carousel with Single Asymmetric Split Layout**
- Grid structure: `grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[90dvh] pt-32 pb-16`.
- Left (col-span-7):
  - Overline pill: `[ 8x H100 SXM5 · 400G InfiniBand 集群就绪 ]` (font-mono text-xs text-emerald-400 border border-emerald-500/20 bg-emerald-500/10 rounded-full px-3.5 py-1.5).
  - Headline: `Bio-Computing Architecture.` with `Architecture.` in elegant italic accent (`text-white/80 font-serif italic` or `font-sans italic`).
  - Subtitle: Clear, punchy description of GeneTind's genomics & HPC AI infrastructure (< 25 words).
  - Action buttons: Primary rounded-full button (`bg-white text-zinc-950 font-bold hover:bg-zinc-200`) + Secondary pill (`border border-white/20 text-white hover:bg-white/10`).
  - Telemetry Bar: 3-column stats dock directly beneath hero copy:
    - `100+ PFLOPS` (FP16 智算峰值)
    - `400 Gbps NDR` (极速无损互联)
    - `100+ GB/s` (NVMe 并行文件吞吐)

**Step 2: Right Column (col-span-5) Hardware/Topology Visual Anchor**
- Build an interactive/floating architectural chassis card representing the GeneTind liquid-cooled GPU compute node and genome data stream, using Motion micro-animations and depth shadows.

**Step 3: Verification & Commit**
- Test on desktop and mobile viewports. Ensure zero CLS jumping.
- Git commit: `feat: implement cinematic asymmetric split hero`

---

### Task 4: Life Science Computing Workflow - Sticky Process Section

**Files:**
- Create: `src/components/HPC/HPCProcessTimeline.tsx`
- Modify: `src/app/[locale]/page.tsx`
- Modify: `messages/zh.json` & `messages/en.json`

**Step 1: Create Sticky Timeline Component (Floria Process pattern)**
- Left side (sticky on desktop): `The Architecture of Bio-Computing` (生命科学数据计算闭环), sticky at `top-32`.
- Right side: Vertical timeline with `border-l border-white/10` hairline.
  - `01` / **数据接入与测序拆分** (NVMe 全闪 TeraFS 极速缓存，消除 IO 饥饿)
  - `02` / **异构集群统一调度** (400G RoCE/IB 无损智算网络 + Slurm / PBS 动态调度)
  - `03` / **多组学分析与模型推理** (覆盖 200+ 生信分析流水线与 GneroAI Agent 自动化)

**Step 2: Add to Homepage Sequence**
- Position below Hero / Features to guide visitors through the computing lifecycle.

**Step 3: Verification & Commit**
- Git commit: `feat: add sticky bio-computing architecture timeline`

---

### Task 5: HPC Hardware & GneroAI - Staggered Bento Gallery

**Files:**
- Modify: `src/components/HPC/HPCSection.tsx`
- Modify: `src/components/Features/index.tsx`
- Modify: `src/components/Features/SingleFeature.tsx`

**Step 1: De-slop Features & HPC Cards**
- Replace repetitive 3-column cards with an asymmetric Bento Grid:
  - Cell 1 (Featured 8-col span): `GT-HPC-8000G 液冷智算服务器` (displaying detailed specs, PUE < 1.15, NVLink topology).
  - Cell 2 (4-col span): `生信超融合机柜` (density and quick deployment specs).
  - Cell 3 (6-col span): `分布式全闪并行存储 TeraFS`.
  - Cell 4 (6-col span): `GneroAI 生信智能一体机与 LIMS 合规平台`.
- Style with Floria-grade hairlines: `rounded-3xl border border-white/10 bg-zinc-900/30 backdrop-blur-sm hover:border-white/20 transition-all`.

**Step 2: Verification & Commit**
- Git commit: `refactor: convert features and HPC into staggered bento gallery`

---

### Task 6: Hardware Vendors & Ecosystem Cleanup

**Files:**
- Modify: `src/components/HPC/ServerVendorMarquee.tsx`
- Modify: `src/components/Brands/brandsData.tsx`
- Modify: `src/components/Brands/index.tsx`

**Step 1: Clean Server Vendor Marquee**
- Remove emojis (💻 🌊 ❄️ ☁️ 🔴 🚀 🛡️).
- Replace with clean monochrome hardware brand identifiers (DELL, Inspur, Sugon, SuperCloud, Huawei, Lenovo, H3C).
- Use subtle opacity (`opacity-50 hover:opacity-100 transition-opacity`).

**Step 2: Clean Partner Brand Wall**
- Purge `UIdeck`, `Formbold`, `Tailgrids`.
- Replace with authentic technology ecosystem partners (NVIDIA, Intel, AMD, Nextflow, Slurm, Lustre, Broad Institute) with monochrome SVG icons.

**Step 3: Verification & Commit**
- Git commit: `fix: clean partner wall and replace marquee emojis with clean typography`

---

### Task 7: Testimonials, Pricing & Theme Hardening

**Files:**
- Modify: `src/components/Testimonials/index.tsx`
- Modify: `src/components/Testimonials/SingleTestimonial.tsx`
- Modify: `src/components/Pricing/index.tsx`
- Modify: `src/components/Pricing/PricingBox.tsx`
- Modify: `src/components/Pricing/PricingBannerVideo.tsx`
- Modify: `src/components/About/AboutSectionOne.tsx`
- Modify: `src/components/About/AboutSectionTwo.tsx`

**Step 1: Staggered Testimonials (Floria Clarity style)**
- Testimonial cards arranged in staggered offsets (`md:col-span-4 md:mt-12`, `md:col-span-5 md:-mt-8`, `md:col-span-6 md:col-start-7 md:-mt-24`).
- Max 3 lines per quote, elegant author attribution with monograms.

**Step 2: Hardening Pricing & Video**
- In `PricingBox.tsx`, remove empty `<h3>` price artifact.
- Localize button text from hardcoded English to `next-intl` dictionary.
- In `PricingBannerVideo.tsx`, remove the CSS filter `dark:invert dark:hue-rotate-180` hack and replace with a native dark video or clean canvas / alpha asset.
- In `About` sections, retire generic 2020 cartoon SVGs in favor of technical architectural diagrams.

**Step 3: Verification & Commit**
- Git commit: `refactor: harden testimonials, pricing and eliminate theme invert hacks`

---

### Task 8: Full i18n Sync, Pre-Flight Verification & Build Audit

**Files:**
- Modify: `messages/zh.json`
- Modify: `messages/en.json`

**Step 1: Synchronize Translation Dictionaries**
- Audit every string in `zh.json` and `en.json` to ensure zero missing keys or untranslated leaks.
- Ensure all hardcoded English in Chinese locale (and vice versa) is resolved.

**Step 2: Run Production Build and Lint**
- Command: `pnpm build`
- Command: `pnpm lint`
- Expected: 0 build errors, 0 lint warnings, clean bundle output.

**Step 3: Verification & Commit**
- Git commit: `chore: complete i18n parity and pre-flight verification`

---

## Verification Plan

### Automated Checks
- `pnpm build`: Verify TypeScript compilation, App Router route generation, and zero bundle errors.
- `pnpm lint`: Verify ESLint and Tailwind formatting passes.

### Visual & Impeccable Quality Checks
- **Viewport & CLS**: Hero section maintains stable height on mobile and desktop viewports without jumpy transitions.
- **Color Consistency**: The entire page adheres strictly to Deep Obsidian + Bionic Emerald/Cyan palette without random neon or purple gradients.
- **Card Diversity**: Verified that no two sections repeat identical 3-column cards.
- **Performance**: Verified that no unbounded scroll event listeners remain in `Header`.
- **i18n Testing**: Switch between `/zh` and `/en` to verify all labels, pills, and buttons update accurately.
