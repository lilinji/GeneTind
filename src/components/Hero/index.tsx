"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { ArrowRight, Cpu, ShieldCheck, Dna, Sparkles, Workflow } from "lucide-react";
import { useTranslations } from "next-intl";
import { motion } from "motion/react";

const Hero = () => {
  const t = useTranslations("Hero");

  return (
    <section
      id="home"
      className="relative z-10 overflow-hidden bg-white dark:bg-[#060911] pt-36 pb-20 md:pt-44 md:pb-28 lg:pt-48 lg:pb-32 transition-colors duration-300"
    >
      {/* Subtle Floria Radial Atmospheric Ambient Glow */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[600px] opacity-30 dark:opacity-40 mix-blend-multiply dark:mix-blend-screen"
        style={{
          background:
            "radial-gradient(circle 800px at 50% -100px, rgba(16, 185, 129, 0.15), rgba(6, 182, 212, 0.08), transparent 70%)",
        }}
      />

      {/* 1px Grid Hairline Backdrop */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
          
          {/* Left Column: Asymmetric Content (Col 7) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-start lg:col-span-7"
          >
            {/* Overline Status Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-mono font-medium text-emerald-700 dark:text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span>{t("badge")}</span>
            </div>

            {/* Title with Floria Editorial Serif Accent */}
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 dark:text-white leading-[1.08]">
              {t("title_prefix")}
              <span className="font-serif italic font-normal text-emerald-600 dark:text-emerald-400 ml-2 sm:ml-3">
                {t("title_highlight")}
              </span>
            </h1>

            {/* Editorial Lead Paragraph */}
            <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              {t("paragraph")}
            </p>

            {/* Action CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/hpc"
                className="group inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3.5 text-sm font-semibold text-zinc-950 shadow-lg shadow-emerald-500/20 transition-all hover:bg-emerald-400 hover:shadow-emerald-500/30"
              >
                <span>{t("cta_primary")}</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/gneroai"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-6 py-3.5 text-sm font-medium text-zinc-900 shadow-sm transition-all hover:bg-zinc-50 dark:border-white/10 dark:bg-white/[0.04] dark:text-white dark:hover:border-white/20 dark:hover:bg-white/[0.08]"
              >
                <span>{t("cta_secondary")}</span>
              </Link>
            </div>

            {/* Live Telemetry Bar */}
            <div className="mt-12 w-full border-t border-zinc-200/80 dark:border-white/[0.08] pt-8">
              <div className="grid grid-cols-3 gap-6 sm:gap-8">
                <div>
                  <div className="font-mono text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
                    {t("stat1_value")}
                  </div>
                  <div className="mt-1 text-xs text-zinc-500 dark:text-zinc-400 uppercase tracking-wider font-mono">
                    {t("stat1_label")}
                  </div>
                </div>
                <div>
                  <div className="font-mono text-xl sm:text-2xl font-bold tracking-tight text-emerald-600 dark:text-emerald-400">
                    {t("stat2_value")}
                  </div>
                  <div className="mt-1 text-xs text-zinc-500 dark:text-zinc-400 uppercase tracking-wider font-mono">
                    {t("stat2_label")}
                  </div>
                </div>
                <div>
                  <div className="font-mono text-xl sm:text-2xl font-bold tracking-tight text-cyan-600 dark:text-cyan-400">
                    {t("stat3_value")}
                  </div>
                  <div className="mt-1 text-xs text-zinc-500 dark:text-zinc-400 uppercase tracking-wider font-mono">
                    {t("stat3_label")}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: AI Intelligent System + Pipeline + Workflow + Appliance (Col 5) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="relative lg:col-span-5"
          >
            {/* Ambient Radial Accent behind card */}
            <div className="pointer-events-none absolute -top-16 -right-16 h-64 w-64 rounded-full bg-emerald-500/15 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-cyan-500/15 blur-3xl" />

            {/* Main Architectural Card */}
            <div className="relative overflow-hidden rounded-2xl border border-zinc-200/90 bg-white/90 p-5 backdrop-blur-xl shadow-xl transition-all dark:border-white/10 dark:bg-[#0b111d]/90 dark:shadow-2xl">
              
              {/* Terminal / System Titlebar */}
              <div className="flex items-center justify-between border-b border-zinc-200/80 dark:border-white/[0.08] pb-3.5">
                <div className="flex items-center gap-2.5">
                  <div className="flex items-center gap-1.5">
                    <div className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
                    <div className="h-2.5 w-2.5 rounded-full bg-amber-500/70" />
                    <div className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
                  </div>
                  <div className="flex items-center gap-1.5 pl-2 border-l border-zinc-200 dark:border-white/10">
                    <span className="font-mono text-[11px] font-black tracking-widest text-emerald-600 dark:text-emerald-400 uppercase rounded bg-emerald-500/10 px-1.5 py-0.5 border border-emerald-500/20">
                      GneroAI™
                    </span>
                    <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400">
                      bio-os://appliance-v4
                    </span>
                  </div>
                </div>
                <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-mono text-emerald-600 dark:text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  {t("panel_status")}
                </div>
              </div>

              {/* Hardware & Holographic Pipeline Visual Window */}
              <div className="relative mt-4 overflow-hidden rounded-xl border border-zinc-200/80 bg-zinc-950 dark:border-white/10 group shadow-inner">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src="/images/hero/bio-ai-appliance.jpg"
                    alt="GneroAI Bio-Computing Appliance with Holographic AI Pipeline"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                  {/* Subtle Dark Gradient Overlay at bottom of image for seamless text contrast */}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />

                  {/* Top-left Floating Glass Tag */}
                  <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/60 px-3 py-1 text-[11px] font-medium text-white backdrop-blur-md shadow-lg">
                    <Sparkles className="h-3 w-3 text-emerald-400 animate-pulse" />
                    <span>{t("panel_tag")}</span>
                  </div>

                  {/* Bottom Image Stats Pill */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-zinc-200">
                    <span className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      AlphaFold3 & Nextflow Ready
                    </span>
                    <span className="text-emerald-300 font-semibold">100+ GB/s I/O</span>
                  </div>
                </div>
              </div>

              {/* Appliance Header */}
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <h3 className="font-mono text-base sm:text-lg font-bold tracking-tight text-zinc-900 dark:text-white">
                    {t("panel_title")}
                  </h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    {t("panel_subtitle")}
                  </p>
                </div>
                <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/10 p-2 text-emerald-600 dark:text-emerald-400">
                  <Workflow className="h-4 w-4" />
                </div>
              </div>

              {/* Multi-Stage Active Workflow Pipeline Stepper */}
              <div className="mt-3.5 space-y-2">
                {/* Step 1 */}
                <div className="flex items-center justify-between rounded-lg border border-zinc-200/80 bg-zinc-50/80 px-3 py-2 text-xs transition dark:border-white/[0.05] dark:bg-white/[0.02] hover:border-emerald-500/30">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-5 w-5 items-center justify-center rounded-md bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                      <Dna className="h-3 w-3" />
                    </div>
                    <span className="font-mono text-zinc-700 dark:text-zinc-300">
                      {t("wf_step1")}
                    </span>
                  </div>
                  <span className="rounded bg-emerald-500/10 px-1.5 py-0.5 font-mono text-[10px] font-medium text-emerald-600 dark:text-emerald-400">
                    FASTQ Ingest
                  </span>
                </div>

                {/* Step 2 */}
                <div className="flex items-center justify-between rounded-lg border border-zinc-200/80 bg-zinc-50/80 px-3 py-2 text-xs transition dark:border-white/[0.05] dark:bg-white/[0.02] hover:border-cyan-500/30">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-5 w-5 items-center justify-center rounded-md bg-cyan-500/15 text-cyan-600 dark:text-cyan-400">
                      <Sparkles className="h-3 w-3" />
                    </div>
                    <span className="font-mono text-zinc-700 dark:text-zinc-300">
                      {t("wf_step2")}
                    </span>
                  </div>
                  <span className="rounded bg-cyan-500/10 px-1.5 py-0.5 font-mono text-[10px] font-medium text-cyan-600 dark:text-cyan-400">
                    GATK · DeepVariant
                  </span>
                </div>

                {/* Step 3 */}
                <div className="flex items-center justify-between rounded-lg border border-zinc-200/80 bg-zinc-50/80 px-3 py-2 text-xs transition dark:border-white/[0.05] dark:bg-white/[0.02] hover:border-emerald-500/30">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-5 w-5 items-center justify-center rounded-md bg-purple-500/15 text-purple-600 dark:text-purple-400">
                      <Cpu className="h-3 w-3" />
                    </div>
                    <span className="font-mono text-zinc-700 dark:text-zinc-300">
                      {t("wf_step3")}
                    </span>
                  </div>
                  <span className="rounded bg-purple-500/10 px-1.5 py-0.5 font-mono text-[10px] font-medium text-purple-600 dark:text-purple-400">
                    3D Folding
                  </span>
                </div>
              </div>

              {/* Verified Compliance & Architecture Footnote */}
              <div className="mt-3.5 flex items-center justify-between border-t border-zinc-200/80 dark:border-white/[0.08] pt-3 px-1 text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>Bio-Safety & ISO27001</span>
                </div>
                <span>PUE 1.12 Liquid</span>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
