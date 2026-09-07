"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Check, Sparkles, Dna } from "lucide-react";
import { motion } from "motion/react";

const AboutSectionOne = () => {
  const t = useTranslations("About");

  const List = ({ text }: { text: string }) => (
    <div className="mb-3.5 flex items-center gap-3">
      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
        <Check className="h-3 w-3" />
      </span>
      <span className="text-xs sm:text-sm font-medium text-zinc-700 dark:text-zinc-300">
        {text}
      </span>
    </div>
  );

  return (
    <section id="about" className="relative z-10 overflow-hidden bg-white dark:bg-[#060911] py-24 sm:py-32 transition-colors duration-300">
      {/* Subtle organic light gradient */}
      <div className="pointer-events-none absolute top-1/2 left-0 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-emerald-500/5 blur-3xl" />

      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Nature + AI Content (Col 7) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3.5 py-1 text-xs font-mono font-medium text-emerald-600 dark:text-emerald-400 mb-6">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Bio-Intelligence & Nature</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white leading-[1.15]">
              {t("title").split("与")[0]}
              <span className="font-serif italic font-normal text-emerald-600 dark:text-emerald-400 ml-2">
                与{t("title").split("与")[1] || "生物计算的交汇"}
              </span>
            </h2>

            <p className="mt-5 text-base sm:text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 max-w-xl">
              {t("paragraph")}
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-6 pt-6 border-t border-zinc-200/80 dark:border-white/[0.08]">
              <div>
                <List text={t("check1")} />
                <List text={t("check2")} />
                <List text={t("check3")} />
              </div>
              <div>
                <List text={t("check4")} />
                <List text={t("check5")} />
                <List text={t("check6")} />
              </div>
            </div>
          </motion.div>

          {/* Right Column: Generated Bio-Nature DNA Artwork (Col 6) */}
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
                  src="/images/about/bio-nature-dna.jpg"
                  alt="Nature and AI biological DNA synthesis"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* High-Craft Floating Botanical Tag */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl border border-white/20 bg-black/50 p-3 backdrop-blur-md text-white">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500/30 text-emerald-300">
                    <Dna className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-mono text-xs font-semibold">DNA / Neural Mycelium</div>
                    <div className="text-[10px] text-zinc-300">Bio-Generative Architecture</div>
                  </div>
                </div>
                <span className="font-mono text-[11px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  Active Helix
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
