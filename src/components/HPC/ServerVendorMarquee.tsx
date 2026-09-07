"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { Server, Cpu, Layers, HardDrive, Zap, Boxes, ShieldCheck, ArrowRight } from "lucide-react";

const vendors = [
  {
    id: "dell",
    name: "戴尔科技 DELL",
    badge: "DELL PowerEdge GPU 服务器",
    icon: Server,
    color: "text-emerald-600 dark:text-emerald-400",
  },
  {
    id: "inspur",
    name: "浪潮信息 Inspur",
    badge: "浪潮 NF5488 / NF5688",
    icon: Cpu,
    color: "text-cyan-600 dark:text-cyan-400",
  },
  {
    id: "sugon",
    name: "中科曙光 Sugon",
    badge: "曙光冷锋 / 硅立方",
    icon: Layers,
    color: "text-emerald-600 dark:text-emerald-400",
  },
  {
    id: "supercloud",
    name: "超云 SuperCloud",
    badge: "超云 R8448 / R6240",
    icon: Boxes,
    color: "text-cyan-600 dark:text-cyan-400",
  },
  {
    id: "huawei",
    name: "华为科技 Huawei",
    badge: "华为 Atlas 800 / FusionServer",
    icon: Zap,
    color: "text-emerald-600 dark:text-emerald-400",
  },
  {
    id: "lenovo",
    name: "联想 ThinkSystem",
    badge: "ThinkSystem SR675 V3",
    icon: HardDrive,
    color: "text-cyan-600 dark:text-cyan-400",
  },
  {
    id: "h3c",
    name: "新华三 H3C",
    badge: "UniServer R5300 G6",
    icon: ShieldCheck,
    color: "text-emerald-600 dark:text-emerald-400",
  },
];

const doubleVendors = [...vendors, ...vendors];

const ServerVendorMarquee = () => {
  const t = useTranslations("ServerMarquee");

  return (
    <section className="relative z-10 overflow-hidden border-y border-zinc-200/80 bg-zinc-50/50 py-12 dark:border-white/[0.08] dark:bg-[#060911] transition-colors duration-300">
      {/* Organic Subtle Glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40 dark:opacity-60"
        style={{
          background:
            "radial-gradient(circle 600px at 50% 50%, rgba(16, 185, 129, 0.08), transparent 70%)",
        }}
      />

      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-7">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            <h3 className="font-mono text-sm sm:text-base font-bold tracking-tight text-zinc-900 dark:text-white">
              {t("title")}
            </h3>
            <span className="hidden md:inline font-mono text-xs text-zinc-500 dark:text-zinc-400">
              ({t("subtitle")})
            </span>
          </div>

          <Link
            href="/hpc"
            className="group inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 transition-colors"
          >
            <span>{t("view_all")}</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* Marquee Track */}
      <div className="relative w-full overflow-hidden">
        {/* Soft Edge Mask Fades */}
        <div className="pointer-events-none absolute top-0 bottom-0 left-0 z-20 w-28 bg-gradient-to-r from-zinc-50 dark:from-[#060911] to-transparent" />
        <div className="pointer-events-none absolute top-0 bottom-0 right-0 z-20 w-28 bg-gradient-to-l from-zinc-50 dark:from-[#060911] to-transparent" />

        <div className="flex w-max space-x-5 animate-marquee hover:[animation-play-state:paused] py-1">
          {doubleVendors.map((vendor, index) => {
            const Icon = vendor.icon;
            return (
              <Link
                key={`${vendor.id}-${index}`}
                href={`/hpc?vendor=${vendor.id}`}
                className="group relative flex items-center gap-4 shrink-0 rounded-2xl border border-zinc-200/90 bg-white/95 px-5 py-4 backdrop-blur-xl shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-500/50 hover:bg-white hover:shadow-[0_8px_30px_rgba(16,185,129,0.12)] dark:border-white/[0.08] dark:bg-[#0b111d]/90 dark:hover:border-emerald-500/40 dark:hover:bg-[#0f172a]"
              >
                {/* Hardware Icon Frame */}
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/5 transition-all duration-300 group-hover:scale-105 group-hover:border-emerald-500/40 group-hover:bg-emerald-500/10 dark:border-white/10 dark:bg-white/[0.03]">
                  <Icon className={`h-5 w-5 ${vendor.color} transition-colors`} />
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-mono text-xs sm:text-sm font-bold text-zinc-900 dark:text-white transition-colors group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                      {vendor.name}
                    </h4>
                    <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 font-mono text-[10px] font-medium text-emerald-700 dark:text-emerald-400">
                      <span className="h-1 w-1 rounded-full bg-emerald-500" />
                      {t("official_agent")}
                    </span>
                  </div>
                  <div className="font-mono text-[11px] text-zinc-500 dark:text-zinc-400 mt-1 flex items-center gap-1.5">
                    <span className="inline-block h-1 w-1 rounded-full bg-zinc-300 dark:bg-zinc-600" />
                    <span>{vendor.badge}</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServerVendorMarquee;
