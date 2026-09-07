"use client";

import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import { History, Milestone, CheckCircle2 } from "lucide-react";

const AboutTimeline = () => {
  const t = useTranslations("AboutPage");

  const milestones = [
    {
      year: t("timeline1_year"),
      title: t("timeline1_title"),
      desc: t("timeline1_desc"),
      accent: "text-emerald-500",
      border: "border-emerald-500/30",
      bg: "bg-emerald-500/10",
    },
    {
      year: t("timeline2_year"),
      title: t("timeline2_title"),
      desc: t("timeline2_desc"),
      accent: "text-cyan-500",
      border: "border-cyan-500/30",
      bg: "bg-cyan-500/10",
    },
    {
      year: t("timeline3_year"),
      title: t("timeline3_title"),
      desc: t("timeline3_desc"),
      accent: "text-emerald-500",
      border: "border-emerald-500/30",
      bg: "bg-emerald-500/10",
    },
    {
      year: t("timeline4_year"),
      title: t("timeline4_title"),
      desc: t("timeline4_desc"),
      accent: "text-cyan-500",
      border: "border-cyan-500/30",
      bg: "bg-cyan-500/10",
    },
  ];

  return (
    <section className="relative overflow-hidden py-24 sm:py-32 bg-white dark:bg-[#060911] transition-colors duration-300">
      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-mono font-medium text-emerald-600 dark:text-emerald-400 mb-4">
            <History className="h-3.5 w-3.5" />
            <span>{t("timeline_badge")}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
            {t("timeline_title")}
          </h2>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            {t("timeline_desc")}
          </p>
        </div>

        {/* Timeline Flow */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Connecting Hairline (Desktop) */}
          <div className="hidden sm:block absolute left-1/2 top-4 bottom-4 -translate-x-1/2 w-0.5 bg-gradient-to-b from-emerald-500/40 via-cyan-500/40 to-emerald-500/10" />

          <div className="space-y-12 sm:space-y-16">
            {milestones.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`relative flex flex-col sm:flex-row items-center gap-6 sm:gap-12 ${
                    isEven ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`}
                >
                  {/* Content Card (Half Width) */}
                  <div className={`w-full sm:w-1/2 ${isEven ? "sm:text-right" : "sm:text-left"}`}>
                    <div className="p-1.5 rounded-[1.5rem] border border-zinc-200/80 dark:border-white/10 bg-zinc-50 dark:bg-white/[0.02] shadow-sm hover:shadow-md transition-all duration-300">
                      <div className="p-6 rounded-[1.25rem] bg-white dark:bg-[#090e17] border border-zinc-100 dark:border-white/5">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-mono font-bold ${item.bg} ${item.accent} border ${item.border} mb-3`}>
                          {item.year}
                        </span>
                        <h3 className="text-lg sm:text-xl font-bold tracking-tight text-zinc-900 dark:text-white">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-xs sm:text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Center Node on Spine */}
                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-white dark:border-[#060911] bg-gradient-to-tr from-emerald-500 to-cyan-400 shadow-md">
                    <span className="h-3 w-3 rounded-full bg-white dark:bg-[#060911]" />
                  </div>

                  {/* Empty Spacer (Opposite Half for symmetry) */}
                  <div className="hidden sm:block w-full sm:w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutTimeline;
