"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import {
  Cpu,
  Server,
  Workflow,
  Zap,
  Database,
  Sparkles,
  ArrowRight,
  Terminal,
  Activity,
  CheckCircle2,
} from "lucide-react";
import { motion } from "motion/react";

const Features = () => {
  const t = useTranslations("Features");

  return (
    <section id="features" className="relative z-10 overflow-hidden bg-white dark:bg-[#060911] py-24 sm:py-32 transition-colors duration-300">
      {/* 1px grid backdrop */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-mono font-medium text-emerald-700 dark:text-emerald-400">
            <Sparkles className="h-3.5 w-3.5" />
            <span>GneroAI Platform Architecture</span>
          </div>

          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white leading-tight">
            {t("paragraph_part1")}{" "}
            <span className="font-serif italic font-normal text-emerald-600 dark:text-emerald-400">
              {t("paragraph_highlight")}
            </span>{" "}
            {t("paragraph_part2")}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-400">
            {t("title")}
          </p>
        </div>

        {/* Bento Grid (12-Column Asymmetric Matrix with Image-Driven Cards) */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Card 1: Hero Card (Col 8) - 生信分析一体机 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group relative md:col-span-12 lg:col-span-8 rounded-3xl border border-zinc-200/90 bg-white/95 p-6 sm:p-8 backdrop-blur-xl shadow-lg transition-all duration-500 hover:border-emerald-500/40 hover:shadow-2xl dark:border-white/[0.08] dark:bg-[#0b111d]/90 flex flex-col justify-between overflow-hidden"
          >
            {/* Ambient Radial Glow */}
            <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

            <div>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shadow-sm">
                    <Cpu className="h-5 w-5" />
                  </div>
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-xs text-emerald-700 dark:text-emerald-400">
                    <Activity className="h-3.5 w-3.5 animate-pulse" />
                    <span>Turnaround -65%</span>
                  </div>
                </div>

                <span className="font-mono text-xs text-emerald-700 dark:text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
                  {t("f1_badge")}
                </span>
              </div>

              <h3 className="mt-5 text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
                {t("feature1_title")}
              </h3>

              <p className="mt-2.5 max-w-2xl text-sm sm:text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                {t("feature1_desc")}
              </p>
            </div>

            {/* Embedded Visual: GneroAI Liquid-Cooled Appliance with Holographic Workflow */}
            <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden rounded-2xl border border-zinc-200/80 dark:border-white/[0.08] bg-zinc-950 mt-6 shadow-inner">
              <Image
                src="/images/features/bio-appliance.jpg"
                alt={t("feature1_title")}
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 800px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30" />

              {/* Floating Top Indicator HUD */}
              <div className="absolute top-3 left-3 right-3 flex flex-wrap items-center justify-between gap-2">
                <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/40 bg-black/60 px-3 py-1 text-[11px] font-mono font-medium text-emerald-300 backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>4x GPU 异构加速 · 工业液冷降噪</span>
                </div>
                <div className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/60 px-3 py-1 text-[11px] font-mono text-zinc-300 backdrop-blur-md">
                  <span>开箱即算 · 软硬件一体交付</span>
                </div>
              </div>

              {/* Embedded Live Multi-Omics Pipeline Flowchart Simulator */}
              <div className="absolute bottom-3 left-3 right-3 rounded-xl border border-white/10 bg-black/70 p-3 font-mono text-xs backdrop-blur-md">
                <div className="flex items-center justify-between text-zinc-400 border-b border-white/10 pb-1.5 mb-2 text-[11px]">
                  <span className="flex items-center gap-1.5">
                    <Terminal className="h-3.5 w-3.5 text-emerald-400" />
                    <span>pipeline-executor://wgs-germline-v4</span>
                  </span>
                  <span className="text-emerald-400 text-[10px] font-semibold flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                    ALL STAGES NOMINAL
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
                  <div className="rounded-lg border border-white/10 bg-white/[0.04] p-1.5">
                    <div className="text-[9px] text-zinc-400">STAGE 01</div>
                    <div className="font-semibold text-white text-[11px] mt-0.5">{t("f1_stage1")}</div>
                    <div className="text-[9px] text-emerald-400 mt-0.5">✓ 128M reads</div>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-white/[0.04] p-1.5">
                    <div className="text-[9px] text-zinc-400">STAGE 02</div>
                    <div className="font-semibold text-white text-[11px] mt-0.5">{t("f1_stage2")}</div>
                    <div className="text-[9px] text-emerald-400 mt-0.5">✓ 99.8% map</div>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-white/[0.04] p-1.5">
                    <div className="text-[9px] text-zinc-400">STAGE 03</div>
                    <div className="font-semibold text-white text-[11px] mt-0.5">{t("f1_stage3")}</div>
                    <div className="text-[9px] text-emerald-400 mt-0.5">✓ 4.6M SNVs</div>
                  </div>
                  <div className="rounded-lg border border-emerald-500/40 bg-emerald-500/20 p-1.5">
                    <div className="text-[9px] text-emerald-300">STAGE 04</div>
                    <div className="font-semibold text-white text-[11px] mt-0.5">{t("f1_stage4")}</div>
                    <div className="text-[9px] text-emerald-300 mt-0.5 font-bold">Ready to export</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: (Col 4) - 生信分析超融合机柜 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative md:col-span-6 lg:col-span-4 rounded-3xl border border-zinc-200/90 bg-white/95 p-6 backdrop-blur-xl shadow-lg transition-all duration-500 hover:border-cyan-500/40 hover:shadow-2xl dark:border-white/[0.08] dark:bg-[#0b111d]/90 flex flex-col justify-between overflow-hidden"
          >
            {/* Visual Image Header */}
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-zinc-200/80 dark:border-white/[0.08] bg-zinc-950 shadow-inner">
              <Image
                src="/images/features/hyperconverged-cabinet.jpg"
                alt={t("feature2_title")}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

              <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                <span className="rounded-full border border-cyan-400/40 bg-black/60 px-2.5 py-1 text-[11px] font-mono font-medium text-cyan-300 backdrop-blur-md">
                  {t("f2_tag1")}
                </span>
                <span className="rounded-full border border-white/20 bg-black/60 px-2 py-0.5 text-[10px] font-mono text-zinc-300 backdrop-blur-md">
                  Modular
                </span>
              </div>

              <div className="absolute bottom-3 left-3 text-[11px] font-mono text-cyan-300 flex items-center gap-1.5">
                <Server className="h-3.5 w-3.5 text-cyan-400" />
                <span>{t("f2_tag2")}</span>
              </div>
            </div>

            <div className="mt-5">
              <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white">
                {t("feature2_title")}
              </h3>

              <p className="mt-2.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {t("feature2_desc")}
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-zinc-100 dark:border-white/[0.06] flex items-center justify-between text-xs font-mono text-zinc-500 dark:text-zinc-400">
              <span>Edge-to-Core Multi-Cloud</span>
              <span className="text-cyan-600 dark:text-cyan-400 font-bold">42U Dense</span>
            </div>
          </motion.div>

          {/* Card 3: (Col 4) - 生信流程定制与优化 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group relative md:col-span-6 lg:col-span-4 rounded-3xl border border-zinc-200/90 bg-white/95 p-6 backdrop-blur-xl shadow-lg transition-all duration-500 hover:border-emerald-500/40 hover:shadow-2xl dark:border-white/[0.08] dark:bg-[#0b111d]/90 flex flex-col justify-between overflow-hidden"
          >
            {/* Visual Image Header */}
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-zinc-200/80 dark:border-white/[0.08] bg-zinc-950 shadow-inner">
              <Image
                src="/images/hpc/hpc-orchestration-ui.jpg"
                alt={t("feature3_title")}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

              <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                <span className="rounded-full border border-emerald-400/40 bg-black/60 px-2.5 py-1 text-[11px] font-mono font-medium text-emerald-300 backdrop-blur-md">
                  {t("f3_tag1")}
                </span>
                <span className="rounded-full border border-white/20 bg-black/60 px-2 py-0.5 text-[10px] font-mono text-zinc-300 backdrop-blur-md">
                  DAG Engine
                </span>
              </div>

              <div className="absolute bottom-3 left-3 text-[11px] font-mono text-emerald-300 flex items-center gap-1.5">
                <Workflow className="h-3.5 w-3.5 text-emerald-400" />
                <span>{t("f3_tag2")}</span>
              </div>
            </div>

            <div className="mt-5">
              <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white">
                {t("feature3_title")}
              </h3>

              <p className="mt-2.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {t("feature3_desc")}
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-zinc-100 dark:border-white/[0.06] flex items-center justify-between text-xs font-mono">
              <span className="text-zinc-500 dark:text-zinc-400">Nextflow / WDL</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-bold">200+ Pipelines</span>
            </div>
          </motion.div>

          {/* Card 4: (Col 4) - 生信分析 HPC 平台 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="group relative md:col-span-6 lg:col-span-4 rounded-3xl border border-zinc-200/90 bg-white/95 p-6 backdrop-blur-xl shadow-lg transition-all duration-500 hover:border-cyan-500/40 hover:shadow-2xl dark:border-white/[0.08] dark:bg-[#0b111d]/90 flex flex-col justify-between overflow-hidden"
          >
            {/* Visual Image Header */}
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-zinc-200/80 dark:border-white/[0.08] bg-zinc-950 shadow-inner">
              <Image
                src="/images/hpc/liquid-gpu-server.jpg"
                alt={t("feature4_title")}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

              <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                <span className="rounded-full border border-cyan-400/40 bg-black/60 px-2.5 py-1 text-[11px] font-mono font-medium text-cyan-300 backdrop-blur-md">
                  {t("f4_tag1")}
                </span>
                <span className="rounded-full border border-white/20 bg-black/60 px-2 py-0.5 text-[10px] font-mono text-zinc-300 backdrop-blur-md">
                  Liquid Cool
                </span>
              </div>

              <div className="absolute bottom-3 left-3 text-[11px] font-mono text-cyan-300 flex items-center gap-1.5">
                <Zap className="h-3.5 w-3.5 text-cyan-400" />
                <span>{t("f4_tag2")}</span>
              </div>
            </div>

            <div className="mt-5">
              <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white">
                {t("feature4_title")}
              </h3>

              <p className="mt-2.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {t("feature4_desc")}
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-zinc-100 dark:border-white/[0.06] flex items-center justify-between text-xs font-mono text-zinc-500 dark:text-zinc-400">
              <span>UPS & Precision Power</span>
              <span className="text-cyan-600 dark:text-cyan-400 font-bold">99.999% SLA</span>
            </div>
          </motion.div>

          {/* Card 5: (Col 4) - LIMS 系统 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="group relative md:col-span-6 lg:col-span-4 rounded-3xl border border-zinc-200/90 bg-white/95 p-6 backdrop-blur-xl shadow-lg transition-all duration-500 hover:border-emerald-500/40 hover:shadow-2xl dark:border-white/[0.08] dark:bg-[#0b111d]/90 flex flex-col justify-between overflow-hidden"
          >
            {/* Visual Image Header */}
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-zinc-200/80 dark:border-white/[0.08] bg-zinc-950 shadow-inner">
              <Image
                src="/images/features/lims-system.jpg"
                alt={t("feature5_title")}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

              <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                <span className="rounded-full border border-emerald-400/40 bg-black/60 px-2.5 py-1 text-[11px] font-mono font-medium text-emerald-300 backdrop-blur-md">
                  {t("f5_tag1")}
                </span>
                <span className="rounded-full border border-white/20 bg-black/60 px-2 py-0.5 text-[10px] font-mono text-zinc-300 backdrop-blur-md">
                  Audit Ready
                </span>
              </div>

              <div className="absolute bottom-3 left-3 text-[11px] font-mono text-emerald-300 flex items-center gap-1.5">
                <Database className="h-3.5 w-3.5 text-emerald-400" />
                <span>{t("f5_tag2")}</span>
              </div>
            </div>

            <div className="mt-5">
              <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white">
                {t("feature5_title")}
              </h3>

              <p className="mt-2.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {t("feature5_desc")}
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-zinc-100 dark:border-white/[0.06] flex items-center justify-between text-xs font-mono text-zinc-500 dark:text-zinc-400">
              <span>Audit Trail Compliance</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-bold">ISO 15189 / 17025</span>
            </div>
          </motion.div>

          {/* Card 6: Panoramic Bottom Banner (Col 12) - GneroAI 一体机 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="group relative md:col-span-12 rounded-3xl border border-zinc-200/90 bg-white/95 p-6 sm:p-10 backdrop-blur-xl shadow-xl transition-all duration-500 hover:border-emerald-500/40 hover:shadow-2xl dark:border-white/[0.08] dark:bg-gradient-to-br dark:from-[#0b111d] dark:via-[#0c1421] dark:to-[#090e18] overflow-hidden"
          >
            {/* Ambient Radial Highlights */}
            <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Details */}
              <div className="lg:col-span-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-mono text-emerald-700 dark:text-emerald-400">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>{t("f6_badge")}</span>
                </div>

                <h3 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white leading-tight">
                  {t("feature6_title")}
                </h3>

                <p className="mt-3 text-sm sm:text-base leading-relaxed text-zinc-600 dark:text-zinc-400 max-w-xl">
                  {t("feature6_desc")}
                </p>

                {/* 3 Value Pillars */}
                <div className="mt-6 space-y-2.5">
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>{t("f6_bullet1")}</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>{t("f6_bullet2")}</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>{t("f6_bullet3")}</span>
                  </div>
                </div>

                {/* CTA Action Buttons */}
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Link
                    href="/gneroai"
                    className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-2.5 font-mono text-xs font-semibold text-white transition-all hover:bg-emerald-500 shadow-md shadow-emerald-600/20 cursor-pointer"
                  >
                    <span>{t("f6_btn_primary")}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                  <Link
                    href="/gneroai"
                    className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-5 py-2.5 font-mono text-xs font-medium text-zinc-900 shadow-xs transition-all hover:bg-zinc-50 dark:border-white/10 dark:bg-white/[0.04] dark:text-white dark:hover:bg-white/[0.08] cursor-pointer"
                  >
                    <span>{t("f6_btn_secondary")}</span>
                  </Link>
                </div>
              </div>

              {/* Right Visual: Layered Workbench Preview & Active Agent Terminal */}
              <div className="lg:col-span-6 relative">
                {/* Background Image Container */}
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-zinc-200/80 dark:border-white/[0.08] bg-zinc-950 shadow-xl">
                  <Image
                    src="/images/gneroai/gneroai-platform-workbench.jpg"
                    alt="GneroAI Platform Workbench"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                    className="object-cover opacity-75 transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/30" />

                  {/* Foreground Layered Interactive AI Terminal Window */}
                  <div className="absolute inset-3 sm:inset-4 flex flex-col justify-between rounded-xl border border-white/20 bg-black/75 p-4 font-mono text-xs shadow-2xl backdrop-blur-md">
                    <div>
                      {/* Terminal macOS Header */}
                      <div className="flex items-center justify-between pb-3 border-b border-white/10 text-[11px] text-zinc-400">
                        <div className="flex items-center gap-2">
                          <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                          <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                          <span className="ml-2 text-zinc-300 font-semibold">gnero-agent://alphafold-session.v4</span>
                        </div>
                        <span className="inline-flex items-center gap-1 text-emerald-400 font-bold">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                          Active
                        </span>
                      </div>

                      {/* Terminal Interactive Session Trace */}
                      <div className="mt-3 space-y-2 text-[11px]">
                        <div className="text-zinc-400 font-medium">
                          &gt; query --model alphafold3 --target protein_142.pdb
                        </div>
                        <div className="text-emerald-400">
                          Predicting 3D folding conformations (Confidence: 94.2%)...
                        </div>
                        <div className="text-cyan-400">
                          Pipeline dispatched to GT-HPC-8000G Node 04
                        </div>
                        <div className="text-white font-semibold pt-1">
                          ✓ Complete in 2.8s. PDB output written to /storage/fast/pdb/
                        </div>
                      </div>
                    </div>

                    {/* Bottom Status Bar */}
                    <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-zinc-400">
                      <span>SLURM Job #89211</span>
                      <span className="text-emerald-400 font-mono">Status: Converged</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Features;
