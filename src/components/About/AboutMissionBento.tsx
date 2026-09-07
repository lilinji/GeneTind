"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import { Sparkles, Bot, Server, ShieldCheck, Activity, Dna, Cpu } from "lucide-react";

const AboutMissionBento = () => {
  const t = useTranslations("AboutPage");

  return (
    <section className="relative overflow-hidden py-24 sm:py-32 bg-zinc-50/60 dark:bg-[#070b14] border-y border-zinc-200/80 dark:border-white/10 transition-colors duration-300">
      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Eyebrow & Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-mono font-medium text-emerald-600 dark:text-emerald-400 mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            <span>{t("pillars_badge")}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
            {t("pillars_title")}
          </h2>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            {t("pillars_desc")}
          </p>
        </div>

        {/* Bento Grid Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          
          {/* Bento Item 1: GneroAI Platform (Col 7) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 group relative p-2 rounded-[2rem] border border-zinc-200/80 dark:border-white/10 bg-white/80 dark:bg-[#090f1a]/80 shadow-sm hover:shadow-xl transition-all duration-500"
          >
            <div className="h-full rounded-[1.5rem] bg-white dark:bg-[#080d16] p-6 sm:p-8 flex flex-col justify-between overflow-hidden">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400">
                    <Bot className="h-3.5 w-3.5" />
                    <span>{t("pillar1_badge")}</span>
                  </div>
                  <span className="text-[11px] font-mono text-zinc-400 dark:text-zinc-500">PILLAR // 01</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
                  {t("pillar1_title")}
                </h3>
                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {t("pillar1_desc")}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 rounded-lg text-xs font-mono bg-zinc-100 dark:bg-white/5 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-white/10">
                    {t("pillar1_tag1")}
                  </span>
                  <span className="px-2.5 py-1 rounded-lg text-xs font-mono bg-zinc-100 dark:bg-white/5 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-white/10">
                    {t("pillar1_tag2")}
                  </span>
                  <span className="px-2.5 py-1 rounded-lg text-xs font-mono bg-zinc-100 dark:bg-white/5 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-white/10">
                    {t("pillar1_tag3")}
                  </span>
                </div>
              </div>

              {/* Artwork Container */}
              <div className="mt-8 relative aspect-16/9 w-full overflow-hidden rounded-2xl border border-zinc-200/80 dark:border-white/10">
                <Image
                  src="/images/about/bio-nature-dna.jpg"
                  alt="Bio-Nature AI and Genomics Synthesis"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs font-mono">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <Dna className="h-4 w-4" />
                    Bio-Generative Engine
                  </span>
                  <span className="bg-black/60 px-2 py-0.5 rounded border border-white/20 text-[10px]">
                    Slurm / WDL DAG Active
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bento Item 2: HPC Heterogeneous Liquid-Cooled Infrastructure (Col 5) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 group relative p-2 rounded-[2rem] border border-zinc-200/80 dark:border-white/10 bg-white/80 dark:bg-[#090f1a]/80 shadow-sm hover:shadow-xl transition-all duration-500"
          >
            <div className="h-full rounded-[1.5rem] bg-white dark:bg-[#080d16] p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400">
                    <Server className="h-3.5 w-3.5" />
                    <span>{t("pillar2_badge")}</span>
                  </div>
                  <span className="text-[11px] font-mono text-zinc-400 dark:text-zinc-500">PILLAR // 02</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
                  {t("pillar2_title")}
                </h3>
                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {t("pillar2_desc")}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 rounded-lg text-xs font-mono bg-zinc-100 dark:bg-white/5 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-white/10">
                    {t("pillar2_tag1")}
                  </span>
                  <span className="px-2.5 py-1 rounded-lg text-xs font-mono bg-zinc-100 dark:bg-white/5 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-white/10">
                    {t("pillar2_tag2")}
                  </span>
                  <span className="px-2.5 py-1 rounded-lg text-xs font-mono bg-zinc-100 dark:bg-white/5 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-white/10">
                    {t("pillar2_tag3")}
                  </span>
                </div>
              </div>

              {/* High-Craft Telemetry Display */}
              <div className="mt-8 rounded-2xl border border-zinc-200/80 dark:border-white/10 bg-zinc-50 dark:bg-white/[0.02] p-5">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 rounded-xl bg-white dark:bg-black/40 border border-zinc-200/60 dark:border-white/5">
                    <div className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400 uppercase">GPU Load Pk</div>
                    <div className="text-xl font-mono font-bold text-emerald-600 dark:text-emerald-400 mt-1">94.8%</div>
                    <div className="text-[10px] text-zinc-400 font-mono">Slurm Topology-Aware</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white dark:bg-black/40 border border-zinc-200/60 dark:border-white/5">
                    <div className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400 uppercase">Liquid Cooling</div>
                    <div className="text-xl font-mono font-bold text-cyan-600 dark:text-cyan-400 mt-1">&lt; 1.15</div>
                    <div className="text-[10px] text-zinc-400 font-mono">PUE Certified</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bento Item 3: Edge Bio-Appliances & LIMS Compliance (Col 12 Full-Width Horizontal) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-12 group relative p-2 rounded-[2rem] border border-zinc-200/80 dark:border-white/10 bg-white/80 dark:bg-[#090f1a]/80 shadow-sm hover:shadow-xl transition-all duration-500"
          >
            <div className="h-full rounded-[1.5rem] bg-white dark:bg-[#080d16] p-6 sm:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7">
                  <div className="flex items-center justify-between mb-4">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400">
                      <ShieldCheck className="h-3.5 w-3.5" />
                      <span>{t("pillar3_badge")}</span>
                    </div>
                    <span className="text-[11px] font-mono text-zinc-400 dark:text-zinc-500">PILLAR // 03</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
                    {t("pillar3_title")}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {t("pillar3_desc")}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    <span className="px-2.5 py-1 rounded-lg text-xs font-mono bg-zinc-100 dark:bg-white/5 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-white/10">
                      {t("pillar3_tag1")}
                    </span>
                    <span className="px-2.5 py-1 rounded-lg text-xs font-mono bg-zinc-100 dark:bg-white/5 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-white/10">
                      {t("pillar3_tag2")}
                    </span>
                    <span className="px-2.5 py-1 rounded-lg text-xs font-mono bg-zinc-100 dark:bg-white/5 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-white/10">
                      {t("pillar3_tag3")}
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-5 relative aspect-16/10 w-full overflow-hidden rounded-2xl border border-zinc-200/80 dark:border-white/10">
                  <Image
                    src="/images/about/protein-bio-ai.jpg"
                    alt="Protein Bio AI and Molecular Conformation"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs font-mono">
                    <span className="flex items-center gap-1.5 text-cyan-400">
                      <Activity className="h-4 w-4" />
                      AlphaFold3 / ESMFold
                    </span>
                    <span className="bg-black/60 px-2 py-0.5 rounded border border-white/20 text-[10px]">
                      ISO 15189 Ready
                    </span>
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

export default AboutMissionBento;
