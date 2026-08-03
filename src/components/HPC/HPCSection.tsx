"use client";

import SectionTitle from "../Common/SectionTitle";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const HPCSection = () => {
  const t = useTranslations("HPCSection");

  const stats = [
    { num: t("stat1_num"), label: t("stat1_label") },
    { num: t("stat2_num"), label: t("stat2_label") },
    { num: t("stat3_num"), label: t("stat3_label") },
    { num: t("stat4_num"), label: t("stat4_label") },
  ];

  const cards = [
    {
      id: "server",
      title: t("card1_title"),
      desc: t("card1_desc"),
      tag: t("card1_tag"),
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      badgeColor: "from-blue-500/20 to-cyan-500/20 text-cyan-400 border-cyan-500/30",
    },
    {
      id: "storage",
      title: t("card2_title"),
      desc: t("card2_desc"),
      tag: t("card2_tag"),
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      badgeColor: "from-purple-500/20 to-indigo-500/20 text-purple-400 border-purple-500/30",
    },
    {
      id: "network",
      title: t("card3_title"),
      desc: t("card3_desc"),
      tag: t("card3_tag"),
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      badgeColor: "from-emerald-500/20 to-teal-500/20 text-emerald-400 border-emerald-500/30",
    },
    {
      id: "software",
      title: t("card4_title"),
      desc: t("card4_desc"),
      tag: t("card4_tag"),
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      badgeColor: "from-amber-500/20 to-orange-500/20 text-amber-400 border-amber-500/30",
    },
  ];

  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-gray-50/50 via-white to-gray-50/50 dark:from-dark/40 dark:via-gray-dark dark:to-dark/40">
      {/* Background glowing aura & high-tech grid overlay */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#4a6cf7_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.15] dark:opacity-[0.08]"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -z-10 w-[600px] h-[350px] bg-primary/15 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="container">
        {/* Header Title */}
        <div className="flex flex-wrap justify-center relative z-20">
          <div className="w-full px-4">
            <div className="mb-4 text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-primary animate-ping"></span>
                {t("cta_badge")}
              </span>
            </div>
            <SectionTitle
              title={t("title")}
              titleClassName="bg-clip-text text-transparent bg-gradient-to-r from-primary via-indigo-500 to-cyan-500 bg-[length:200%_auto] animate-shimmer"
              paragraph={t("paragraph")}
              center
              mb="50px"
            />
          </div>
        </div>

        {/* HPC Metrics Highlight Banner */}
        <div className="mb-14 rounded-2xl bg-white/70 dark:bg-gray-dark/70 backdrop-blur-xl border border-gray-200/80 dark:border-white/10 p-6 md:p-8 shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-gray-200 dark:divide-white/10">
            {stats.map((stat, index) => (
              <div key={index} className={`pt-4 md:pt-0 ${index > 0 ? "md:pl-6" : ""}`}>
                <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-black dark:text-white bg-clip-text text-transparent bg-gradient-to-r from-primary to-indigo-500">
                  {stat.num}
                </div>
                <div className="mt-1 text-xs sm:text-sm font-medium text-body-color dark:text-white/70">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Product Matrix 4 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-20">
          {cards.map((card) => (
            <div key={card.id} className="group relative">
              <Link href={`/hpc?category=${card.id}`} className="block h-full">
                <div className="relative h-full flex flex-col justify-between rounded-2xl bg-white/80 dark:bg-gray-dark/60 backdrop-blur-xl border border-gray-200/70 dark:border-white/10 p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-primary/40 overflow-hidden">
                  {/* Glowing top line accent */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-indigo-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div>
                    <div className="mb-5 flex items-center justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        {card.icon}
                      </div>
                      <span className={`inline-block rounded-md border px-2.5 py-1 text-xs font-semibold bg-gradient-to-r ${card.badgeColor}`}>
                        {card.tag}
                      </span>
                    </div>

                    <h3 className="mb-3 text-lg font-bold text-black dark:text-white group-hover:text-primary transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-sm text-body-color dark:text-white/70 leading-relaxed">
                      {card.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-100 dark:border-white/10 flex items-center text-xs font-bold text-primary group-hover:translate-x-1 transition-transform">
                    <span>查看分类详情</span>
                    <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* CTA Banner to Dedicated Page */}
        <div className="mt-12 text-center">
          <Link
            href="/hpc"
            className="inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg shadow-primary/30 transition-all duration-300 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/40 hover:scale-[1.02]"
          >
            <span>{t("cta_button")}</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HPCSection;
