"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import {
  Server,
  HardDrive,
  Cpu,
  Zap,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  SlidersHorizontal,
  ChevronRight,
  Activity,
  Layers,
} from "lucide-react";

type CategoryType = "all" | "server" | "storage" | "network" | "software";

const HPCPageContent = () => {
  const t = useTranslations("HPCPage");
  const searchParams = useSearchParams();
  const initialCategory = (searchParams.get("category") as CategoryType) || "all";

  const [activeCategory, setActiveCategory] = useState<CategoryType>("all");

  useEffect(() => {
    if (initialCategory && ["all", "server", "storage", "network", "software"].includes(initialCategory)) {
      setActiveCategory(initialCategory as CategoryType);
    }
  }, [initialCategory]);

  const categories = [
    { id: "all", label: t("all_tab"), icon: SlidersHorizontal },
    { id: "server", label: t("server_tab"), icon: Server },
    { id: "storage", label: t("storage_tab"), icon: HardDrive },
    { id: "network", label: t("network_tab"), icon: Zap },
    { id: "software", label: t("software_tab"), icon: Cpu },
  ];

  const products = [
    {
      id: "srv-8000g",
      category: "server",
      badge: t("p1_badge"),
      model: t("p1_model"),
      title: t("p1_title"),
      tagline: t("p1_tagline"),
      description: t("p1_desc"),
      image: "/images/hpc/liquid-gpu-server.jpg",
      metrics: [
        { val: t("p1_m1_v"), lbl: t("p1_m1_l") },
        { val: t("p1_m2_v"), lbl: t("p1_m2_l") },
        { val: t("p1_m3_v"), lbl: t("p1_m3_l") },
      ],
      icon: Server,
    },
    {
      id: "stg-terafs",
      category: "storage",
      badge: t("p2_badge"),
      model: t("p2_model"),
      title: t("p2_title"),
      tagline: t("p2_tagline"),
      description: t("p2_desc"),
      image: "/images/hpc/all-flash-storage.jpg",
      metrics: [
        { val: t("p2_m1_v"), lbl: t("p2_m1_l") },
        { val: t("p2_m2_v"), lbl: t("p2_m2_l") },
        { val: t("p2_m3_v"), lbl: t("p2_m3_l") },
      ],
      icon: HardDrive,
    },
    {
      id: "net-ndr400g",
      category: "network",
      badge: t("p3_badge"),
      model: t("p3_model"),
      title: t("p3_title"),
      tagline: t("p3_tagline"),
      description: t("p3_desc"),
      image: "/images/hpc/infiniband-fabric.jpg",
      metrics: [
        { val: t("p3_m1_v"), lbl: t("p3_m1_l") },
        { val: t("p3_m2_v"), lbl: t("p3_m2_l") },
        { val: t("p3_m3_v"), lbl: t("p3_m3_l") },
      ],
      icon: Zap,
    },
    {
      id: "soft-scheduler",
      category: "software",
      badge: t("p4_badge"),
      model: t("p4_model"),
      title: t("p4_title"),
      tagline: t("p4_tagline"),
      description: t("p4_desc"),
      image: "/images/hpc/hpc-orchestration-ui.jpg",
      metrics: [
        { val: t("p4_m1_v"), lbl: t("p4_m1_l") },
        { val: t("p4_m2_v"), lbl: t("p4_m2_l") },
        { val: t("p4_m3_v"), lbl: t("p4_m3_l") },
      ],
      icon: Cpu,
    },
  ];

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  const architectureLayers = [
    {
      num: t("arch_layer1_num"),
      title: t("arch_layer1_name"),
      desc: t("arch_layer1_desc"),
      icon: Cpu,
    },
    {
      num: t("arch_layer2_num"),
      title: t("arch_layer2_name"),
      desc: t("arch_layer2_desc"),
      icon: Zap,
    },
    {
      num: t("arch_layer3_num"),
      title: t("arch_layer3_name"),
      desc: t("arch_layer3_desc"),
      icon: HardDrive,
    },
    {
      num: t("arch_layer4_num"),
      title: t("arch_layer4_name"),
      desc: t("arch_layer4_desc"),
      icon: Server,
    },
  ];

  return (
    <div className="relative min-h-screen bg-white dark:bg-[#060911] transition-colors duration-300">
      
      {/* Ambient Top Glow */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[600px] opacity-25 dark:opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 900px 500px at 50% -100px, rgba(16, 185, 129, 0.15), rgba(6, 182, 212, 0.08), transparent 70%)",
        }}
      />

      {/* Grid Hairline Backdrop */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025] dark:opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Hero Section */}
      <section className="relative z-10 pt-36 pb-16 md:pt-44 md:pb-20 lg:pt-48 lg:pb-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb Bar */}
          <nav className="mb-6 flex items-center gap-2 font-mono text-xs text-zinc-500 dark:text-zinc-400">
            <Link href="/" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-zinc-900 dark:text-zinc-200 font-medium">{t("pageName")}</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 font-mono text-xs font-medium text-emerald-700 dark:text-emerald-400 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>{t("hero_badge")}</span>
          </div>

          {/* Grand Headline */}
          <div className="max-w-4xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight text-zinc-900 dark:text-white leading-[1.1]">
              {t("hero_title_prefix")}{" "}
              <span className="font-serif italic font-normal text-emerald-600 dark:text-emerald-400">
                {t("hero_title_highlight")}
              </span>
            </h1>

            <p className="mt-5 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-3xl">
              {t("description")}
            </p>
          </div>

          {/* Key Telemetry Bar */}
          <div className="mt-12 grid grid-cols-2 gap-4 border-t border-zinc-200/80 pt-8 sm:grid-cols-4 sm:gap-8 dark:border-white/[0.08]">
            <div className="rounded-xl border border-zinc-200/70 bg-zinc-50/70 p-4 dark:border-white/[0.06] dark:bg-white/[0.02]">
              <div className="font-mono text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
                {t("stat_compute_val")}
              </div>
              <div className="mt-1 font-mono text-xs text-zinc-500 dark:text-zinc-400">
                {t("stat_compute_lbl")}
              </div>
            </div>

            <div className="rounded-xl border border-zinc-200/70 bg-zinc-50/70 p-4 dark:border-white/[0.06] dark:bg-white/[0.02]">
              <div className="font-mono text-xl sm:text-2xl font-bold tracking-tight text-emerald-600 dark:text-emerald-400">
                {t("stat_pue_val")}
              </div>
              <div className="mt-1 font-mono text-xs text-zinc-500 dark:text-zinc-400">
                {t("stat_pue_lbl")}
              </div>
            </div>

            <div className="rounded-xl border border-zinc-200/70 bg-zinc-50/70 p-4 dark:border-white/[0.06] dark:bg-white/[0.02]">
              <div className="font-mono text-xl sm:text-2xl font-bold tracking-tight text-cyan-600 dark:text-cyan-400">
                {t("stat_storage_val")}
              </div>
              <div className="mt-1 font-mono text-xs text-zinc-500 dark:text-zinc-400">
                {t("stat_storage_lbl")}
              </div>
            </div>

            <div className="rounded-xl border border-zinc-200/70 bg-zinc-50/70 p-4 dark:border-white/[0.06] dark:bg-white/[0.02]">
              <div className="font-mono text-xl sm:text-2xl font-bold tracking-tight text-emerald-600 dark:text-emerald-400">
                {t("stat_network_val")}
              </div>
              <div className="mt-1 font-mono text-xs text-zinc-500 dark:text-zinc-400">
                {t("stat_network_lbl")}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Category Navigation Pills */}
      <section className="relative z-10 -mt-4 mb-12">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-2 rounded-2xl border border-zinc-200/80 bg-zinc-50/80 p-2 backdrop-blur-md dark:border-white/[0.08] dark:bg-[#0b111d]/90">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id as CategoryType)}
                  className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 font-mono text-xs font-semibold transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-white text-emerald-600 shadow-sm dark:bg-emerald-500/20 dark:text-emerald-400 dark:shadow-md"
                      : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                  }`}
                >
                  <Icon className={`h-4 w-4 ${isActive ? "text-emerald-600 dark:text-emerald-400" : ""}`} />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products Showcase Grid ("图文并茂") */}
      <section className="relative z-10 pb-24 lg:pb-32">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            {filteredProducts.map((product) => {
              const Icon = product.icon;
              return (
                <div
                  key={product.id}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-zinc-200/90 bg-white/95 p-6 sm:p-8 backdrop-blur-xl shadow-md transition-all duration-500 hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-2xl dark:border-white/[0.08] dark:bg-[#0b111d]/90 dark:hover:border-emerald-500/40 dark:shadow-xl"
                >
                  <div>
                    {/* Visual Image Container */}
                    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-zinc-200/80 bg-zinc-950 dark:border-white/10 shadow-inner">
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      
                      {/* Gradient bottom shadow for contrast */}
                      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                      {/* Top-left Category Pill */}
                      <div className="absolute top-3.5 left-3.5 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/60 px-3 py-1 font-mono text-[11px] font-medium text-white backdrop-blur-md">
                        <Icon className="h-3 w-3 text-emerald-400" />
                        <span>{product.badge}</span>
                      </div>

                      {/* Top-right Model Code */}
                      <div className="absolute top-3.5 right-3.5 font-mono text-[11px] text-zinc-300 bg-black/60 px-2.5 py-1 rounded-full border border-white/10 backdrop-blur-md">
                        {product.model}
                      </div>

                      {/* Bottom Live Hardware Ready Tag */}
                      <div className="absolute bottom-3 left-4 flex items-center gap-1.5 font-mono text-[11px] text-emerald-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span>Ready for Production Deployment</span>
                      </div>
                    </div>

                    {/* Content Header */}
                    <div className="mt-6">
                      <h3 className="font-mono text-lg sm:text-xl font-bold tracking-tight text-zinc-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                        {product.title}
                      </h3>

                      <div className="mt-2 inline-flex items-center gap-1.5 rounded-lg border border-emerald-500/20 bg-emerald-500/[0.06] px-2.5 py-1 font-mono text-xs font-medium text-emerald-700 dark:text-emerald-300">
                        <Sparkles className="h-3 w-3 text-emerald-500" />
                        <span>{product.tagline}</span>
                      </div>

                      <p className="mt-3.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        {product.description}
                      </p>
                    </div>

                    {/* 3 Metric Chips */}
                    <div className="mt-6 grid grid-cols-3 gap-2.5 rounded-xl border border-zinc-200/80 bg-zinc-50/80 p-3.5 dark:border-white/[0.05] dark:bg-white/[0.02]">
                      {product.metrics.map((m, idx) => (
                        <div key={idx} className="text-center">
                          <div className="font-mono text-xs sm:text-sm font-bold text-zinc-900 dark:text-white">
                            {m.val}
                          </div>
                          <div className="mt-0.5 font-mono text-[10px] text-zinc-500 dark:text-zinc-400 truncate">
                            {m.lbl}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="mt-6 flex items-center justify-between border-t border-zinc-200/80 pt-4 dark:border-white/[0.08]">
                    <Link
                      href="/contact"
                      className="group/btn inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2 font-mono text-xs font-bold text-white shadow-xs transition-all hover:bg-emerald-500 hover:shadow-md cursor-pointer"
                    >
                      <span>{t("inquire_btn")}</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </Link>

                    <div className="flex items-center gap-1.5 font-mono text-[11px] text-zinc-500 dark:text-zinc-400">
                      <ShieldCheck className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
                      <span>ISO27001 & GLP</span>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

          {/* Full-Stack Architecture Banner */}
          <div className="mt-20 sm:mt-28 relative overflow-hidden rounded-3xl border border-zinc-200/90 bg-white/95 p-8 sm:p-12 backdrop-blur-xl shadow-xl dark:border-white/10 dark:bg-[#0b111d]/90">
            
            {/* Ambient Lighting */}
            <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

            <div className="relative z-10 max-w-3xl text-center mx-auto mb-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-xs text-emerald-700 dark:text-emerald-400 mb-3">
                <Layers className="h-3.5 w-3.5" />
                <span>Full-Stack Matrix</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
                {t("architecture_title")}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
                {t("architecture_subtitle")}
              </p>
            </div>

            {/* 4 Stacked Layers */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 relative z-10">
              {architectureLayers.map((layer, index) => {
                const LayerIcon = layer.icon;
                return (
                  <div
                    key={index}
                    className="group/arch rounded-2xl border border-zinc-200/80 bg-zinc-50/80 p-6 transition-all duration-300 hover:border-emerald-500/40 hover:bg-white hover:shadow-md dark:border-white/[0.05] dark:bg-white/[0.02] dark:hover:bg-white/[0.04]"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-lg font-black text-emerald-600 dark:text-emerald-400">
                        {layer.num}
                      </span>
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                        <LayerIcon className="h-4 w-4" />
                      </div>
                    </div>

                    <h4 className="font-mono text-sm font-bold text-zinc-900 dark:text-white mb-2">
                      {layer.title}
                    </h4>

                    <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {layer.desc}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

export default HPCPageContent;
