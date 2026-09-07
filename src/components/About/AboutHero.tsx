"use client";

import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import { Dna, HardDrive, Cpu, ShieldCheck, Sparkles, ArrowDownRight } from "lucide-react";

const AboutHero = () => {
  const t = useTranslations("AboutPage");

  const metrics = [
    {
      value: t("metric1_value"),
      label: t("metric1_label"),
      sub: t("metric1_sub"),
      icon: Dna,
      accent: "text-emerald-600 dark:text-emerald-400",
      bg: "bg-emerald-500/10 border-emerald-500/20",
    },
    {
      value: t("metric2_value"),
      label: t("metric2_label"),
      sub: t("metric2_sub"),
      icon: HardDrive,
      accent: "text-cyan-600 dark:text-cyan-400",
      bg: "bg-cyan-500/10 border-cyan-500/20",
    },
    {
      value: t("metric3_value"),
      label: t("metric3_label"),
      sub: t("metric3_sub"),
      icon: Cpu,
      accent: "text-emerald-600 dark:text-emerald-400",
      bg: "bg-emerald-500/10 border-emerald-500/20",
    },
    {
      value: t("metric4_value"),
      label: t("metric4_label"),
      sub: t("metric4_sub"),
      icon: ShieldCheck,
      accent: "text-cyan-600 dark:text-cyan-400",
      bg: "bg-cyan-500/10 border-cyan-500/20",
    },
  ];

  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28 transition-colors duration-300">
      {/* Bioluminescent Ambient Gradients */}
      <div className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 -z-10 h-[500px] w-[800px] max-w-full rounded-full bg-gradient-to-tr from-emerald-500/10 via-cyan-500/10 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 right-10 -z-10 h-[360px] w-[360px] rounded-full bg-emerald-500/5 blur-3xl" />

      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Editorial Eyebrow Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-mono font-medium text-emerald-600 dark:text-emerald-400 shadow-sm backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>{t("hero_badge")}</span>
          </div>
        </motion.div>

        {/* Master Editorial Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-8 text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-[1.12]">
            {t("hero_title_prefix")}{" "}
            <span className="font-serif italic font-normal text-emerald-600 dark:text-emerald-400 decoration-emerald-500/30">
              {t("hero_title_highlight")}
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl leading-relaxed text-zinc-700 dark:text-zinc-300 font-medium max-w-3xl mx-auto">
            {t("hero_subtitle")}
          </p>

          <p className="mt-4 text-sm sm:text-base leading-relaxed text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
            {t("hero_narrative")}
          </p>
        </motion.div>

        {/* 4 Live Telemetry Metric Cards (Double-Bezel Architecture) */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {metrics.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + idx * 0.08 }}
                className="group relative p-1.5 rounded-[1.75rem] border border-zinc-200/80 dark:border-white/10 bg-zinc-100/60 dark:bg-white/[0.03] shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="h-full rounded-[1.375rem] bg-white dark:bg-[#090e17] p-5 sm:p-6 border border-zinc-100 dark:border-white/5 flex flex-col justify-between transition-colors duration-300 group-hover:border-emerald-500/30">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-xl border ${item.bg}`}>
                      <Icon className={`h-5 w-5 ${item.accent}`} />
                    </div>
                    <ArrowDownRight className="h-4 w-4 text-zinc-400 dark:text-zinc-600 group-hover:text-emerald-500 transition-colors" />
                  </div>

                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold font-mono tracking-tight text-zinc-900 dark:text-white">
                      {item.value}
                    </div>
                    <div className="mt-1 text-xs sm:text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                      {item.label}
                    </div>
                    <div className="mt-1 text-[11px] leading-relaxed text-zinc-500 dark:text-zinc-400 font-mono">
                      {item.sub}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
