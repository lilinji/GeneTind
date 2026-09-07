"use client";

import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import { Compass, Leaf, Lock, Terminal, FlaskConical } from "lucide-react";

const AboutValues = () => {
  const t = useTranslations("AboutPage");

  const values = [
    {
      num: t("val1_num"),
      title: t("val1_title"),
      desc: t("val1_desc"),
      icon: Leaf,
      accent: "text-emerald-500",
      bg: "bg-emerald-500/10 border-emerald-500/20",
    },
    {
      num: t("val2_num"),
      title: t("val2_title"),
      desc: t("val2_desc"),
      icon: Lock,
      accent: "text-cyan-500",
      bg: "bg-cyan-500/10 border-cyan-500/20",
    },
    {
      num: t("val3_num"),
      title: t("val3_title"),
      desc: t("val3_desc"),
      icon: Terminal,
      accent: "text-emerald-500",
      bg: "bg-emerald-500/10 border-emerald-500/20",
    },
    {
      num: t("val4_num"),
      title: t("val4_title"),
      desc: t("val4_desc"),
      icon: FlaskConical,
      accent: "text-cyan-500",
      bg: "bg-cyan-500/10 border-cyan-500/20",
    },
  ];

  return (
    <section className="relative overflow-hidden py-24 sm:py-32 bg-zinc-50/60 dark:bg-[#070b14] border-t border-zinc-200/80 dark:border-white/10 transition-colors duration-300">
      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-mono font-medium text-emerald-600 dark:text-emerald-400 mb-4">
            <Compass className="h-3.5 w-3.5" />
            <span>{t("values_badge")}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
            {t("values_title")}
          </h2>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            {t("values_desc")}
          </p>
        </div>

        {/* 4-Card Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, idx) => {
            const Icon = v.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group relative p-1.5 rounded-[1.75rem] border border-zinc-200/80 dark:border-white/10 bg-white dark:bg-white/[0.02] shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="h-full rounded-[1.375rem] bg-white dark:bg-[#090f1a] p-6 flex flex-col justify-between border border-zinc-100 dark:border-white/5 group-hover:border-emerald-500/30 transition-colors">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className={`flex h-11 w-11 items-center justify-center rounded-xl border ${v.bg}`}>
                        <Icon className={`h-5 w-5 ${v.accent}`} />
                      </div>
                      <span className="font-mono text-xs font-extrabold tracking-wider text-zinc-300 dark:text-zinc-700 group-hover:text-emerald-500 transition-colors">
                        {v.num}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold tracking-tight text-zinc-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {v.title}
                    </h3>
                    <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                      {v.desc}
                    </p>
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

export default AboutValues;
