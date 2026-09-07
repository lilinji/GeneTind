"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Server, HardDrive, Network, Cpu, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

const HPCSection = () => {
  const t = useTranslations("HPCSection");

  const stats = [
    { num: t("stat1_num"), label: t("stat1_label"), color: "text-zinc-900 dark:text-white" },
    { num: t("stat2_num"), label: t("stat2_label"), color: "text-emerald-600 dark:text-emerald-400" },
    { num: t("stat3_num"), label: t("stat3_label"), color: "text-cyan-600 dark:text-cyan-400" },
    { num: t("stat4_num"), label: t("stat4_label"), color: "text-zinc-900 dark:text-white" },
  ];

  const cards = [
    {
      id: "server",
      title: t("card1_title"),
      desc: t("card1_desc"),
      tag: t("card1_tag"),
      icon: Server,
      accentBorder: "hover:border-emerald-500/40",
      iconColor: "text-emerald-600 dark:text-emerald-400",
      badgeColor: "border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400",
    },
    {
      id: "storage",
      title: t("card2_title"),
      desc: t("card2_desc"),
      tag: t("card2_tag"),
      icon: HardDrive,
      accentBorder: "hover:border-cyan-500/40",
      iconColor: "text-cyan-600 dark:text-cyan-400",
      badgeColor: "border-cyan-500/30 bg-cyan-500/10 text-cyan-700 dark:text-cyan-400",
    },
    {
      id: "network",
      title: t("card3_title"),
      desc: t("card3_desc"),
      tag: t("card3_tag"),
      icon: Network,
      accentBorder: "hover:border-emerald-500/40",
      iconColor: "text-emerald-600 dark:text-emerald-400",
      badgeColor: "border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400",
    },
    {
      id: "software",
      title: t("card4_title"),
      desc: t("card4_desc"),
      tag: t("card4_tag"),
      icon: Cpu,
      accentBorder: "hover:border-cyan-500/40",
      iconColor: "text-cyan-600 dark:text-cyan-400",
      badgeColor: "border-cyan-500/30 bg-cyan-500/10 text-cyan-700 dark:text-cyan-400",
    },
  ];

  return (
    <section className="relative z-10 overflow-hidden bg-zinc-50/70 dark:bg-[#060911] py-24 sm:py-32 transition-colors duration-300">
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
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>{t("cta_badge")}</span>
          </div>

          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white leading-tight">
            {t("title")}
          </h2>

          <p className="mt-4 text-base sm:text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            {t("paragraph")}
          </p>
        </div>

        {/* HPC Metrics Highlight Banner */}
        <div className="mt-14 rounded-2xl border border-zinc-200/80 bg-white/90 p-8 backdrop-blur-xl shadow-md dark:border-white/[0.08] dark:bg-[#0b111d]/80 dark:shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-zinc-200/80 dark:divide-white/[0.08]">
            {stats.map((stat, index) => (
              <div key={index} className={`pt-4 md:pt-0 ${index > 0 ? "md:pl-6" : ""}`}>
                <div className={`font-mono text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight ${stat.color}`}>
                  {stat.num}
                </div>
                <div className="mt-2 text-xs sm:text-sm font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider font-mono">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Product Matrix 4 Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-20">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group relative"
              >
                <Link href={`/hpc?category=${card.id}`} className="block h-full">
                  <div
                    className={`relative h-full flex flex-col justify-between rounded-2xl border border-zinc-200/80 bg-white/90 p-6 backdrop-blur-xl shadow-sm transition-all duration-300 hover:shadow-xl hover:border-emerald-500/40 dark:border-white/[0.08] dark:bg-[#0b111d]/90 dark:hover:bg-[#0e1626] ${card.accentBorder}`}
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-50 dark:border-white/10 dark:bg-white/[0.04]">
                          <Icon className={`h-6 w-6 ${card.iconColor}`} />
                        </div>
                        <span className={`inline-block rounded-full border px-2.5 py-0.5 font-mono text-[11px] font-medium ${card.badgeColor}`}>
                          {card.tag}
                        </span>
                      </div>

                      <h3 className="mt-5 text-lg font-bold tracking-tight text-zinc-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                        {card.title}
                      </h3>

                      <p className="mt-2.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        {card.desc}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-white/[0.06] flex items-center justify-between text-xs font-mono text-zinc-500 dark:text-zinc-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      <span>{t("view_details")}</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="mt-14 text-center">
          <Link
            href="/hpc"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-8 py-3.5 text-sm font-semibold text-zinc-950 shadow-lg shadow-emerald-500/20 transition-all hover:bg-emerald-400 hover:shadow-emerald-500/30"
          >
            <span>{t("cta_button")}</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default HPCSection;
