"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { motion } from "motion/react";
import { Sparkles, ArrowRight, Server, PhoneCall } from "lucide-react";

const AboutCTA = () => {
  const t = useTranslations("AboutPage");

  return (
    <section className="relative overflow-hidden py-20 sm:py-28 bg-white dark:bg-[#060911] transition-colors duration-300">
      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2.5rem] border border-zinc-200/80 dark:border-white/15 bg-gradient-to-b from-zinc-50 to-white dark:from-[#0c1322] dark:to-[#080d16] p-8 sm:p-14 lg:p-16 shadow-2xl"
        >
          {/* Internal Glow Accents */}
          <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-emerald-500/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-cyan-500/15 blur-3xl" />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-mono font-medium text-emerald-600 dark:text-emerald-400 mb-6 backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5" />
              <span>{t("cta_badge")}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-tight">
              {t("cta_title")}
            </h2>

            <p className="mt-5 text-sm sm:text-base leading-relaxed text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto">
              {t("cta_desc")}
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* Primary Button-in-Button */}
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-3 rounded-full bg-emerald-600 hover:bg-emerald-500 dark:bg-emerald-500 dark:hover:bg-emerald-400 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-600/25 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>{t("cta_btn_primary")}</span>
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowRight className="h-4 w-4 text-white" />
                </span>
              </Link>

              {/* Secondary Clean Pill */}
              <Link
                href="/hpc"
                className="inline-flex items-center gap-2.5 rounded-full border border-zinc-300 dark:border-white/20 bg-white/80 dark:bg-white/5 hover:bg-zinc-100 dark:hover:bg-white/10 px-6 py-3.5 text-sm font-semibold text-zinc-800 dark:text-zinc-200 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Server className="h-4 w-4 text-cyan-600 dark:text-cyan-400" />
                <span>{t("cta_btn_secondary")}</span>
              </Link>
            </div>

            {/* Direct Official Line */}
            <div className="mt-8 pt-6 border-t border-zinc-200/60 dark:border-white/10 inline-flex items-center gap-3 text-xs font-mono text-zinc-500 dark:text-zinc-400">
              <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Enterprise Support
              </span>
              <span>•</span>
              <a href="tel:+8618665379896" className="hover:text-emerald-500 transition-colors">
                +86 18665379896
              </a>
              <span>•</span>
              <span>service@genetind.com</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutCTA;
