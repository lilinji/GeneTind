"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import {
  Bot,
  MessageSquare,
  Workflow,
  Cpu,
  Layers,
  Dna,
  Microscope,
  ShieldCheck,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  ChevronRight,
  CheckCircle2,
  GitBranch,
  FileText,
  Activity,
  Trees,
  Terminal,
} from "lucide-react";

const GneroAIContent = () => {
  const t = useTranslations("GneroAIPage");

  const pillars = [
    {
      id: "chat",
      tag: t("p1_tag"),
      title: t("p1_title"),
      desc: t("p1_desc"),
      features: [t("p1_f1"), t("p1_f2"), t("p1_f3")],
      icon: MessageSquare,
      color: "text-emerald-600 dark:text-emerald-400",
      bgBadge: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20",
    },
    {
      id: "agent",
      tag: t("p2_tag"),
      title: t("p2_title"),
      desc: t("p2_desc"),
      features: [t("p2_f1"), t("p2_f2"), t("p2_f3")],
      icon: Workflow,
      color: "text-cyan-600 dark:text-cyan-400",
      bgBadge: "bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border-cyan-500/20",
    },
    {
      id: "skills",
      tag: t("p3_tag"),
      title: t("p3_title"),
      desc: t("p3_desc"),
      features: [t("p3_f1"), t("p3_f2"), t("p3_f3")],
      icon: Cpu,
      color: "text-purple-600 dark:text-purple-400",
      bgBadge: "bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/20",
      link: "https://github.com/lilinji/GeneTind-Life-Skills",
    },
    {
      id: "lab",
      tag: t("p4_tag"),
      title: t("p4_title"),
      desc: t("p4_desc"),
      features: [t("p4_f1"), t("p4_f2"), t("p4_f3")],
      icon: Layers,
      color: "text-emerald-600 dark:text-emerald-400",
      bgBadge: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20",
    },
  ];

  const omicsPillars = [
    {
      title: t("om1_title"),
      desc: t("om1_desc"),
      icon: Dna,
      badge: "WGS · WES · GATK4",
    },
    {
      title: t("om2_title"),
      desc: t("om2_desc"),
      icon: Activity,
      badge: "RNA-seq · scRNA · 10x",
    },
    {
      title: t("om3_title"),
      desc: t("om3_desc"),
      icon: Microscope,
      badge: "AlphaFold3 · CryoEM",
    },
    {
      title: t("om4_title"),
      desc: t("om4_desc"),
      icon: Trees,
      badge: "ATAC-seq · 宏基因组",
    },
  ];

  const scenarios = [
    {
      title: t("sc1_title"),
      desc: t("sc1_desc"),
      icon: ShieldCheck,
    },
    {
      title: t("sc2_title"),
      desc: t("sc2_desc"),
      icon: Sparkles,
    },
    {
      title: t("sc3_title"),
      desc: t("sc3_desc"),
      icon: Dna,
    },
    {
      title: t("sc4_title"),
      desc: t("sc4_desc"),
      icon: Terminal,
    },
  ];

  return (
    <div className="relative min-h-screen bg-white dark:bg-[#060911] transition-colors duration-300">
      
      {/* Subtle Floria Radial Atmospheric Ambient Glow */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[650px] opacity-25 dark:opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 1000px 600px at 50% -120px, rgba(16, 185, 129, 0.16), rgba(6, 182, 212, 0.09), transparent 70%)",
        }}
      />

      {/* Hairline 1px Grid Backdrop */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025] dark:opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Section 1: Grand Hero & Platform Value Proposition */}
      <section className="relative z-10 pt-36 pb-16 md:pt-44 md:pb-20 lg:pt-48 lg:pb-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb Navigation */}
          <nav className="mb-6 flex items-center gap-2 font-mono text-xs text-zinc-500 dark:text-zinc-400">
            <Link href="/" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-zinc-900 dark:text-zinc-200 font-medium">{t("pageName")}</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 font-mono text-xs font-medium text-emerald-700 dark:text-emerald-400 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>{t("hero_badge")}</span>
          </div>

          {/* Master Headline with Floria Typography */}
          <div className="max-w-4xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight text-zinc-900 dark:text-white leading-[1.1]">
              {t("hero_title_prefix")}{" "}
              <span className="font-serif italic font-normal text-emerald-600 dark:text-emerald-400">
                {t("hero_title_highlight")}
              </span>
            </h1>

            <p className="mt-5 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-3xl">
              {t("description")}
            </p>

            {/* Action CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="https://ai.genetind.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 font-mono text-xs sm:text-sm font-semibold text-white shadow-xs transition-all hover:bg-emerald-500 hover:shadow-lg cursor-pointer"
              >
                <span>{t("launch_platform")}</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white/90 px-6 py-3 font-mono text-xs sm:text-sm font-semibold text-zinc-800 backdrop-blur-md transition-all hover:border-emerald-500/50 hover:bg-zinc-50 dark:border-white/10 dark:bg-white/[0.04] dark:text-zinc-200 dark:hover:bg-white/[0.08] dark:hover:text-white cursor-pointer"
              >
                <Sparkles className="h-4 w-4 text-emerald-500" />
                <span>{t("request_demo")}</span>
              </Link>
            </div>
          </div>

          {/* Real-time Telemetry Status Bar */}
          <div className="mt-14 grid grid-cols-2 gap-4 border-t border-zinc-200/80 pt-8 sm:grid-cols-4 sm:gap-6 dark:border-white/[0.08]">
            <div className="rounded-2xl border border-zinc-200/80 bg-zinc-50/70 p-4 backdrop-blur-sm dark:border-white/[0.06] dark:bg-white/[0.02]">
              <div className="font-mono text-xl font-bold tracking-tight text-zinc-900 dark:text-white">
                {t("stat_pipelines")}
              </div>
              <div className="mt-1 font-mono text-xs text-zinc-500 dark:text-zinc-400">
                {t("stat_pipelines_sub")}
              </div>
            </div>

            <div className="rounded-2xl border border-zinc-200/80 bg-zinc-50/70 p-4 backdrop-blur-sm dark:border-white/[0.06] dark:bg-white/[0.02]">
              <div className="font-mono text-xl font-bold tracking-tight text-emerald-600 dark:text-emerald-400">
                {t("stat_models")}
              </div>
              <div className="mt-1 font-mono text-xs text-zinc-500 dark:text-zinc-400">
                {t("stat_models_sub")}
              </div>
            </div>

            <div className="rounded-2xl border border-zinc-200/80 bg-zinc-50/70 p-4 backdrop-blur-sm dark:border-white/[0.06] dark:bg-white/[0.02]">
              <div className="font-mono text-xl font-bold tracking-tight text-cyan-600 dark:text-cyan-400">
                {t("stat_accuracy")}
              </div>
              <div className="mt-1 font-mono text-xs text-zinc-500 dark:text-zinc-400">
                {t("stat_accuracy_sub")}
              </div>
            </div>

            <div className="rounded-2xl border border-zinc-200/80 bg-zinc-50/70 p-4 backdrop-blur-sm dark:border-white/[0.06] dark:bg-white/[0.02]">
              <div className="font-mono text-xl font-bold tracking-tight text-purple-600 dark:text-purple-400">
                {t("stat_compliance")}
              </div>
              <div className="mt-1 font-mono text-xs text-zinc-500 dark:text-zinc-400">
                {t("stat_compliance_sub")}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Section 2: Flagship Product Workbench Showcase ("图文并茂") */}
      <section className="relative z-10 pb-20 lg:pb-28">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="relative overflow-hidden rounded-3xl border border-zinc-200/90 bg-white/95 p-5 sm:p-8 backdrop-blur-xl shadow-2xl dark:border-white/10 dark:bg-[#0b111d]/90">
            
            {/* Ambient Radial Accent */}
            <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-emerald-500/15 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-cyan-500/15 blur-3xl" />

            {/* Window Top Titlebar */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-200/80 dark:border-white/[0.08] pb-4 mb-5">
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
                    gnero-os://workbench.v4
                  </span>
                </div>
              </div>

              <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-0.5 font-mono text-xs text-emerald-700 dark:text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>{t("workbench_status")}</span>
              </div>
            </div>

            {/* Workbench Screen Image */}
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-zinc-200/80 bg-zinc-950 dark:border-white/10 group shadow-inner">
              <Image
                src="/images/gneroai/gneroai-platform-workbench.jpg"
                alt="GneroAI Intelligent Multi-Omics Platform Workbench"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1400px) 90vw, 1200px"
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />

              {/* Bottom Soft Shadow */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Floating Bottom Live Tag */}
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-zinc-200">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-semibold text-white">GneroAI 生物计算智能体：</span>
                  <span>实时解析 BRCA1 变异，AlphaFold3 蛋白质构象置信度 94.2%</span>
                </div>
                <div className="hidden sm:flex items-center gap-4 text-zinc-300">
                  <span>变异自动位点推断</span>
                  <span>·</span>
                  <span>原子级构象折叠</span>
                  <span>·</span>
                  <span>DAG 图谱调度</span>
                </div>
              </div>
            </div>

            {/* 3 Callout Feature Chips */}
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="flex items-center gap-3 rounded-xl border border-zinc-200/80 bg-zinc-50/80 p-3.5 dark:border-white/[0.05] dark:bg-white/[0.02]">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  <MessageSquare className="h-4 w-4" />
                </div>
                <span className="font-mono text-xs text-zinc-700 dark:text-zinc-300">
                  {t("feat_copilot")}
                </span>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-zinc-200/80 bg-zinc-50/80 p-3.5 dark:border-white/[0.05] dark:bg-white/[0.02]">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                  <Microscope className="h-4 w-4" />
                </div>
                <span className="font-mono text-xs text-zinc-700 dark:text-zinc-300">
                  {t("feat_structure")}
                </span>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-zinc-200/80 bg-zinc-50/80 p-3.5 dark:border-white/[0.05] dark:bg-white/[0.02]">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400">
                  <GitBranch className="h-4 w-4" />
                </div>
                <span className="font-mono text-xs text-zinc-700 dark:text-zinc-300">
                  {t("feat_dag")}
                </span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Section 3: 4 Core Platform Capabilities Matrix (核心能力矩阵) */}
      <section className="relative z-10 py-16 lg:py-24 border-t border-zinc-200/80 dark:border-white/[0.08] bg-zinc-50/40 dark:bg-black/20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-14">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 font-mono text-xs font-medium text-emerald-700 dark:text-emerald-400 mb-3">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Core Architecture</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
              {t("pillars_title")}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
              {t("pillars_subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.id}
                  className="group relative flex flex-col justify-between rounded-3xl border border-zinc-200/90 bg-white/95 p-7 sm:p-9 backdrop-blur-xl shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-xl dark:border-white/[0.08] dark:bg-[#0b111d]/90"
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-zinc-200 bg-zinc-50 transition-transform duration-300 group-hover:scale-105 dark:border-white/10 dark:bg-white/[0.03]">
                        <Icon className={`h-6 w-6 ${pillar.color}`} />
                      </div>

                      <span className={`inline-flex items-center rounded-full border px-3 py-1 font-mono text-xs font-semibold ${pillar.bgBadge}`}>
                        {pillar.tag}
                      </span>
                    </div>

                    <h3 className="font-mono text-xl font-bold text-zinc-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {pillar.title}
                    </h3>

                    <p className="mt-3 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {pillar.desc}
                    </p>

                    {/* Features checklist */}
                    <div className="mt-6 space-y-2.5 border-t border-zinc-100 dark:border-white/[0.06] pt-5">
                      {pillar.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2.5 text-xs text-zinc-700 dark:text-zinc-300">
                          <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                          <span className="font-mono">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom Link */}
                  {pillar.link ? (
                    <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-white/[0.06]">
                      <a
                        href={pillar.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 transition-colors cursor-pointer"
                      >
                        <span>Explore OpenClaw GitHub Repo</span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  ) : (
                    <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-white/[0.06] flex items-center justify-between font-mono text-[11px] text-zinc-400 dark:text-zinc-500">
                      <span>Enterprise Ready</span>
                      <span>Turnkey Native</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Section 4: Multi-Omics Full-Stack Coverage (多组学全链路覆盖) */}
      <section className="relative z-10 py-16 lg:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-14">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 font-mono text-xs font-medium text-emerald-700 dark:text-emerald-400 mb-3">
              <Dna className="h-3.5 w-3.5" />
              <span>Multi-Omics Pipeline</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
              {t("omics_title")}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
              {t("omics_subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {omicsPillars.map((item, index) => {
              const OmicsIcon = item.icon;
              return (
                <div
                  key={index}
                  className="group rounded-2xl border border-zinc-200/80 bg-zinc-50/80 p-6 backdrop-blur-sm transition-all duration-300 hover:border-emerald-500/40 hover:bg-white hover:shadow-lg dark:border-white/[0.06] dark:bg-[#0b111d]/80 dark:hover:border-emerald-500/40"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 mb-4 transition-transform group-hover:scale-105">
                    <OmicsIcon className="h-5 w-5" />
                  </div>

                  <span className="inline-block rounded-md bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 font-mono text-[10px] font-semibold text-emerald-700 dark:text-emerald-400 mb-2">
                    {item.badge}
                  </span>

                  <h3 className="font-mono text-base font-bold text-zinc-900 dark:text-white mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Section 5: Industry Application Scenarios (产业创新赋能场景) */}
      <section className="relative z-10 py-16 lg:py-24 border-t border-zinc-200/80 dark:border-white/[0.08] bg-zinc-50/40 dark:bg-black/20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-14">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 font-mono text-xs font-medium text-emerald-700 dark:text-emerald-400 mb-3">
              <Trees className="h-3.5 w-3.5" />
              <span>Real-World Impact</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
              {t("scenarios_title")}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
              {t("scenarios_subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {scenarios.map((sc, idx) => {
              const ScIcon = sc.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-zinc-200/80 bg-white/90 p-6 backdrop-blur-sm shadow-xs transition-all duration-300 hover:border-emerald-500/40 hover:shadow-md dark:border-white/[0.06] dark:bg-[#0b111d]/90"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 mb-4">
                    <ScIcon className="h-5 w-5" />
                  </div>

                  <h3 className="font-mono text-base font-bold text-zinc-900 dark:text-white mb-2">
                    {sc.title}
                  </h3>

                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {sc.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Section 6: Grand Enterprise CTA Banner */}
      <section className="relative z-10 py-20 lg:py-28">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 via-zinc-50 to-cyan-500/10 p-8 sm:p-14 backdrop-blur-xl text-center shadow-xl dark:border-emerald-500/20 dark:from-emerald-950/40 dark:via-[#0b111d] dark:to-cyan-950/30">
            
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 mx-auto block mb-4 animate-ping" />

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
              {t("cta_title")}
            </h2>

            <p className="mt-4 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              {t("cta_desc")}
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://ai.genetind.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 font-mono text-xs sm:text-sm font-semibold text-white shadow-xs transition-all hover:bg-emerald-500 hover:shadow-lg cursor-pointer"
              >
                <span>{t("cta_btn_primary")}</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white/90 px-6 py-3 font-mono text-xs sm:text-sm font-semibold text-zinc-800 backdrop-blur-md transition-all hover:border-emerald-500/50 hover:bg-zinc-50 dark:border-white/10 dark:bg-white/[0.04] dark:text-zinc-200 dark:hover:bg-white/[0.08] dark:hover:text-white cursor-pointer"
              >
                <Sparkles className="h-4 w-4 text-emerald-500" />
                <span>{t("cta_btn_secondary")}</span>
              </Link>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default GneroAIContent;
