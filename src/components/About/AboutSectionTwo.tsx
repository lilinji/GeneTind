"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Bot, MessageSquare, Wrench, Activity } from "lucide-react";
import { motion } from "motion/react";

const AboutSectionTwo = () => {
  const t = useTranslations("About");

  const cards = [
    {
      title: t("card1_title"),
      desc: t("card1_desc"),
      icon: MessageSquare,
      color: "text-emerald-600 dark:text-emerald-400",
      bgColor: "bg-emerald-500/10 border-emerald-500/20",
    },
    {
      title: t("card2_title"),
      desc: t("card2_desc"),
      icon: Bot,
      color: "text-cyan-600 dark:text-cyan-400",
      bgColor: "bg-cyan-500/10 border-cyan-500/20",
    },
    {
      title: t("card3_title"),
      desc: t("card3_desc"),
      icon: Wrench,
      color: "text-emerald-600 dark:text-emerald-400",
      bgColor: "bg-emerald-500/10 border-emerald-500/20",
    },
  ];

  return (
    <section className="relative z-10 overflow-hidden bg-zinc-50 dark:bg-[#080d17] py-24 sm:py-32 transition-colors duration-300">
      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Generated Protein Bio AI Artwork (Col 6) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6"
          >
            <div className="relative mx-auto overflow-hidden rounded-3xl border border-zinc-200/80 dark:border-white/10 bg-zinc-100/50 dark:bg-[#0b111d] shadow-2xl group">
              <div className="relative aspect-4/3 w-full overflow-hidden">
                <Image
                  src="/images/about/protein-bio-ai.jpg"
                  alt="Biological AI protein folding and cellular genomics"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* High-Craft Floating Bio-Computing Tag */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl border border-white/20 bg-black/50 p-3 backdrop-blur-md text-white">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-500/30 text-cyan-300">
                    <Activity className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-mono text-xs font-semibold">AlphaFold3 / ESMFold</div>
                    <div className="text-[10px] text-zinc-300">In Silico Conformation Engine</div>
                  </div>
                </div>
                <span className="font-mono text-[11px] text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                  Confidence 94.8%
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 3 Clean High-Craft Cards (Col 6) */}
          <div className="lg:col-span-6 space-y-5">
            {cards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group relative rounded-2xl border border-zinc-200/80 dark:border-white/[0.08] bg-white/90 dark:bg-[#0b111d]/90 p-6 backdrop-blur-xl shadow-sm dark:shadow-lg transition-all duration-300 hover:border-emerald-500/40 hover:bg-white dark:hover:bg-[#0e1626] hover:shadow-md"
                >
                  <div className="flex items-start gap-4">
                    <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border ${card.bgColor}`}>
                      <Icon className={`h-5 w-5 ${card.color}`} />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold tracking-tight text-zinc-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                        {card.title}
                      </h3>
                      <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                        {card.desc}
                      </p>
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
};

export default AboutSectionTwo;
