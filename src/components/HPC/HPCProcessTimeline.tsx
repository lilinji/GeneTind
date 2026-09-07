"use client";

import { useTranslations } from "next-intl";
import { HardDrive, Cpu, Dna, Activity, FileCheck, Database, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "@/i18n/navigation";

export default function HPCProcessTimeline() {
  const t = useTranslations("HPCProcess");

  const steps = [
    {
      num: t("step1_num"),
      tag: t("step1_tag"),
      title: t("step1_title"),
      desc: t("step1_desc"),
      metric: t("step1_metric"),
      metricLabel: t("step1_metric_label"),
      specs: [
        { icon: HardDrive, label: t("step1_spec1") },
        { icon: Database, label: t("step1_spec2") },
      ],
      accentBorder: "hover:border-emerald-500/40",
      accentGlow: "from-emerald-500/10 to-transparent",
      badgeColor: "text-emerald-700 dark:text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
      metricColor: "text-emerald-600 dark:text-emerald-400",
    },
    {
      num: t("step2_num"),
      tag: t("step2_tag"),
      title: t("step2_title"),
      desc: t("step2_desc"),
      metric: t("step2_metric"),
      metricLabel: t("step2_metric_label"),
      specs: [
        { icon: Cpu, label: t("step2_spec1") },
        { icon: Activity, label: t("step2_spec2") },
      ],
      accentBorder: "hover:border-cyan-500/40",
      accentGlow: "from-cyan-500/10 to-transparent",
      badgeColor: "text-cyan-700 dark:text-cyan-400 border-cyan-500/30 bg-cyan-500/10",
      metricColor: "text-cyan-600 dark:text-cyan-400",
    },
    {
      num: t("step3_num"),
      tag: t("step3_tag"),
      title: t("step3_title"),
      desc: t("step3_desc"),
      metric: t("step3_metric"),
      metricLabel: t("step3_metric_label"),
      specs: [
        { icon: Dna, label: t("step3_spec1") },
        { icon: FileCheck, label: t("step3_spec2") },
      ],
      accentBorder: "hover:border-emerald-500/40",
      accentGlow: "from-emerald-500/10 to-transparent",
      badgeColor: "text-emerald-700 dark:text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
      metricColor: "text-emerald-600 dark:text-emerald-400",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-zinc-50/70 dark:bg-[#060911] py-24 sm:py-32 transition-colors duration-300">
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
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          
          {/* Sticky Left Narrative Column (Col 5) */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 self-start">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-mono font-medium text-emerald-700 dark:text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>{t("badge")}</span>
            </div>

            <h2 className="mt-5 text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white leading-[1.15]">
              {t("title_prefix")}
              <span className="font-serif italic font-normal text-emerald-600 dark:text-emerald-400 ml-2">
                {t("title_highlight")}
              </span>
            </h2>

            <p className="mt-5 text-base sm:text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              {t("subtitle")}
            </p>

            {/* Architecture Pipeline Summary Steps */}
            <div className="mt-10 hidden lg:block space-y-4 border-l border-zinc-200 dark:border-white/[0.08] pl-6">
              {steps.map((step, idx) => (
                <div key={idx} className="group flex items-center gap-3">
                  <span className="font-mono text-xs text-zinc-400 dark:text-zinc-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {step.num}
                  </span>
                  <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">
                    {step.tag}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-zinc-200 dark:border-white/[0.08]">
              <Link
                href="/hpc"
                className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 transition-colors"
              >
                <span>深入了解集群硬件架构</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: High-Density Process Cards (Col 7) */}
          <div className="lg:col-span-7 space-y-8 sm:space-y-10">
            {steps.map((step, index) => {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`group relative rounded-2xl border border-zinc-200/90 bg-white/95 p-8 backdrop-blur-xl shadow-md transition-all duration-300 hover:shadow-xl dark:border-white/[0.08] dark:bg-[#0b111d]/90 dark:hover:bg-[#0e1626] ${step.accentBorder}`}
                >
                  <div className="relative z-10">
                    {/* Header: Step Number, Tag, and Telemetry Metric */}
                    <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-200/80 dark:border-white/[0.08] pb-6">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-2xl font-bold tracking-tight text-zinc-300 dark:text-white/40 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">
                          {step.num}
                        </span>
                        <div
                          className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-mono font-medium ${step.badgeColor}`}
                        >
                          {step.tag}
                        </div>
                      </div>

                      {/* Right Telemetry Pill */}
                      <div className="text-right">
                        <div className={`font-mono text-xl font-bold tracking-tight ${step.metricColor}`}>
                          {step.metric}
                        </div>
                        <div className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                          {step.metricLabel}
                        </div>
                      </div>
                    </div>

                    {/* Step Title & Description */}
                    <div className="mt-6">
                      <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white leading-snug">
                        {step.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                        {step.desc}
                      </p>
                    </div>

                    {/* Hardware / Architectural Specs Pills */}
                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 border-t border-zinc-100 dark:border-white/[0.06]">
                      {step.specs.map((spec, specIdx) => {
                        const Icon = spec.icon;
                        return (
                          <div
                            key={specIdx}
                            className="flex items-center gap-2.5 rounded-lg border border-zinc-200/70 bg-zinc-50/80 px-3.5 py-2.5 transition-colors group-hover:border-emerald-500/30 dark:border-white/[0.04] dark:bg-white/[0.02] dark:group-hover:border-white/10 dark:group-hover:bg-white/[0.04]"
                          >
                            <Icon className="h-4 w-4 text-zinc-500 dark:text-zinc-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors shrink-0" />
                            <span className="font-mono text-xs text-zinc-700 dark:text-zinc-300">
                              {spec.label}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
