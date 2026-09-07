"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { Play, Pause, Sparkles, Dna, Cpu, Microscope, ArrowRight, Trees, Globe, ShieldCheck } from "lucide-react";

const PricingBannerVideo = () => {
  const t = useTranslations("Pricing");
  const videoRef = useRef<HTMLVideoElement>(null);
  const [activeTab, setActiveTab] = useState<"panorama" | "video">("panorama");
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="mt-16 lg:mt-24 relative z-20">
      <div className="relative overflow-hidden rounded-3xl border border-zinc-200/90 bg-white/95 p-6 sm:p-8 backdrop-blur-xl shadow-lg transition-all dark:border-white/[0.08] dark:bg-[#0b111d]/90 dark:shadow-2xl">
        
        {/* Subtle Ambient Radial Glow */}
        <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

        {/* Banner Header */}
        <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-zinc-200/80 dark:border-white/[0.08] pb-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-xs text-emerald-700 dark:text-emerald-400 mb-2.5">
              <Trees className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>{t("banner_subtitle")}</span>
            </div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white leading-tight">
              {t("banner_title")}
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {t("banner_desc")}
            </p>
          </div>

          {/* View Mode Switcher */}
          <div className="self-start md:self-center flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-100/80 p-1 dark:border-white/10 dark:bg-white/[0.04]">
            <button
              onClick={() => setActiveTab("panorama")}
              className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 font-mono text-xs font-medium transition-all cursor-pointer ${
                activeTab === "panorama"
                  ? "bg-white text-emerald-600 shadow-xs dark:bg-emerald-500/20 dark:text-emerald-300"
                  : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
              }`}
            >
              <Trees className="h-3.5 w-3.5" />
              <span>生态全景</span>
            </button>
            <button
              onClick={() => setActiveTab("video")}
              className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 font-mono text-xs font-medium transition-all cursor-pointer ${
                activeTab === "video"
                  ? "bg-white text-emerald-600 shadow-xs dark:bg-emerald-500/20 dark:text-emerald-300"
                  : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
              }`}
            >
              <Play className="h-3.5 w-3.5" />
              <span>动态实况</span>
            </button>
          </div>
        </div>

        {/* Main Display Window */}
        <div className="relative w-full overflow-hidden rounded-2xl border border-zinc-200/90 bg-zinc-950 shadow-inner dark:border-white/10 group">
          
          {activeTab === "panorama" ? (
            /* Panoramic Nature-Bio-AI Ecosystem Visual */
            <div className="relative aspect-[16/9] w-full overflow-hidden">
              <Image
                src="/images/ecosystem/nature-bio-ai-ecosystem.jpg"
                alt="GeneTind Bio-AI Ecological Co-Evolutionary Tree of Life"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1400px) 90vw, 1200px"
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              
              {/* Soft Vignette & Atmosphere Gradient */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

              {/* Floating Top Indicator Tags */}
              <div className="absolute top-4 left-4 right-4 flex flex-wrap items-center justify-between gap-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/60 px-3.5 py-1.5 text-xs font-medium text-white backdrop-blur-md shadow-lg">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>自然演化启发式拓扑 · Evolutionary AI Architecture</span>
                </div>

                <div className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/70 px-3 py-1 font-mono text-xs text-emerald-300 backdrop-blur-md">
                  <Globe className="h-3.5 w-3.5 text-emerald-400" />
                  <span>200+ 生态伙伴节点协同中</span>
                </div>
              </div>

              {/* Interactive Canopy Nodes overlay */}
              <div className="hidden sm:block pointer-events-none absolute inset-0">
                {/* Node 1: Genomic Sequencing */}
                <div className="absolute top-[26%] left-[22%] -translate-x-1/2 -translate-y-1/2 pointer-events-auto cursor-default">
                  <div className="flex items-center gap-2 rounded-full border border-emerald-400/40 bg-black/60 px-3 py-1 text-xs font-mono font-medium text-emerald-300 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-emerald-400 hover:bg-emerald-950/80 shadow-lg">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                    </span>
                    <span>{t("eco_pin_seq")}</span>
                  </div>
                </div>

                {/* Node 2: AI HPC Engine */}
                <div className="absolute top-[16%] left-[50%] -translate-x-1/2 -translate-y-1/2 pointer-events-auto cursor-default">
                  <div className="flex items-center gap-2 rounded-full border border-cyan-400/40 bg-black/60 px-3 py-1 text-xs font-mono font-medium text-cyan-300 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-cyan-400 hover:bg-cyan-950/80 shadow-lg">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75"></span>
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500"></span>
                    </span>
                    <span>{t("eco_pin_hpc")}</span>
                  </div>
                </div>

                {/* Node 3: CryoEM */}
                <div className="absolute top-[24%] left-[78%] -translate-x-1/2 -translate-y-1/2 pointer-events-auto cursor-default">
                  <div className="flex items-center gap-2 rounded-full border border-emerald-400/40 bg-black/60 px-3 py-1 text-xs font-mono font-medium text-emerald-300 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-emerald-400 hover:bg-emerald-950/80 shadow-lg">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                    </span>
                    <span>{t("eco_pin_cryo")}</span>
                  </div>
                </div>

                {/* Node 4: Drug Discovery */}
                <div className="absolute top-[46%] left-[72%] -translate-x-1/2 -translate-y-1/2 pointer-events-auto cursor-default">
                  <div className="flex items-center gap-2 rounded-full border border-purple-400/40 bg-black/60 px-3 py-1 text-xs font-mono font-medium text-purple-300 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-purple-400 hover:bg-purple-950/80 shadow-lg">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-75"></span>
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-purple-500"></span>
                    </span>
                    <span>{t("eco_pin_drug")}</span>
                  </div>
                </div>
              </div>

              {/* Bottom Overlay Info Strip */}
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-zinc-200">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-emerald-400" />
                  <span className="font-semibold text-white">使命驱动：</span>
                  <span>让生命无法计算的价值，在自然与数字的协同中绽放</span>
                </div>
                <div className="hidden md:flex items-center gap-4 text-zinc-300">
                  <span>多组学数据流</span>
                  <span>·</span>
                  <span>AlphaFold3 蛋白质推演</span>
                  <span>·</span>
                  <span>绿色智算集群</span>
                </div>
              </div>
            </div>
          ) : (
            /* Dynamic Pipeline Stream Video Mode */
            <div className="relative w-full aspect-[16/9]">
              <video
                ref={videoRef}
                src="/footer.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover opacity-90 transition-opacity duration-300"
              />
              <button
                onClick={togglePlay}
                className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/60 px-3 py-1.5 font-mono text-xs text-white backdrop-blur-md hover:bg-black/80 transition-colors cursor-pointer"
              >
                {isPlaying ? (
                  <>
                    <Pause className="h-3.5 w-3.5 text-emerald-400" />
                    <span>{t("pause_animation")}</span>
                  </>
                ) : (
                  <>
                    <Play className="h-3.5 w-3.5 text-emerald-400" />
                    <span>{t("play_animation")}</span>
                  </>
                )}
              </button>
            </div>
          )}
        </div>

        {/* 4 Multi-Omics Partner Ecosystem Pillar Cards */}
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* Pillar 1 */}
          <div className="group/node rounded-xl border border-zinc-200/80 bg-zinc-50/80 p-4 transition-all duration-300 hover:border-emerald-500/40 hover:bg-white hover:shadow-sm dark:border-white/[0.05] dark:bg-white/[0.02] dark:hover:border-emerald-500/30 dark:hover:bg-white/[0.04]">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                <Dna className="h-4 w-4" />
              </div>
              <span className="font-mono text-xs font-bold text-zinc-900 dark:text-white">
                {t("eco_node1")}
              </span>
            </div>
            <p className="mt-2 text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
              Illumina · 华大智造 · PacBio · ONT
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="group/node rounded-xl border border-zinc-200/80 bg-zinc-50/80 p-4 transition-all duration-300 hover:border-cyan-500/40 hover:bg-white hover:shadow-sm dark:border-white/[0.05] dark:bg-white/[0.02] dark:hover:border-cyan-500/30 dark:hover:bg-white/[0.04]">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                <Microscope className="h-4 w-4" />
              </div>
              <span className="font-mono text-xs font-bold text-zinc-900 dark:text-white">
                {t("eco_node2")}
              </span>
            </div>
            <p className="mt-2 text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
              CryoEM · AlphaFold3 · ESMFold
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="group/node rounded-xl border border-zinc-200/80 bg-zinc-50/80 p-4 transition-all duration-300 hover:border-emerald-500/40 hover:bg-white hover:shadow-sm dark:border-white/[0.05] dark:bg-white/[0.02] dark:hover:border-emerald-500/30 dark:hover:bg-white/[0.04]">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                <Cpu className="h-4 w-4" />
              </div>
              <span className="font-mono text-xs font-bold text-zinc-900 dark:text-white">
                {t("eco_node3")}
              </span>
            </div>
            <p className="mt-2 text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
              Slurm / PBS 混合调度 · 100+ PFLOPS
            </p>
          </div>

          {/* Pillar 4 */}
          <div className="group/node rounded-xl border border-zinc-200/80 bg-zinc-50/80 p-4 transition-all duration-300 hover:border-purple-500/40 hover:bg-white hover:shadow-sm dark:border-white/[0.05] dark:bg-white/[0.02] dark:hover:border-purple-500/30 dark:hover:bg-white/[0.04]">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400">
                <Sparkles className="h-4 w-4" />
              </div>
              <span className="font-mono text-xs font-bold text-zinc-900 dark:text-white">
                {t("eco_node4")}
              </span>
            </div>
            <p className="mt-2 text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
              Virtual Screening · 药企分子发现
            </p>
          </div>
        </div>

        {/* Co-Evolution Invitation Footer */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-xl border border-emerald-500/20 bg-emerald-500/[0.04] px-5 py-4 dark:border-emerald-500/10 dark:bg-emerald-500/[0.02]">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <span className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 font-medium">
              欢迎生命科学研究机构、药企研发中心与算力中心加入 GeneTind 协同生态
            </span>
          </div>

          <Link
            href="/contact"
            className="group inline-flex items-center gap-1.5 rounded-full bg-emerald-600 px-4 py-2 font-mono text-xs font-semibold text-white shadow-xs transition-all hover:bg-emerald-500 hover:shadow-md cursor-pointer shrink-0"
          >
            <span>{t("contact_sales")}</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </div>
  );
};

export default PricingBannerVideo;
