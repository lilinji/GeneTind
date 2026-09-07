"use client";

import VideoModal from "@/components/video-modal";
import Image from "next/image";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { Play, Sparkles } from "lucide-react";

export default function Video() {
  const [isOpen, setOpen] = useState(false);
  const t = useTranslations("Video");

  return (
    <>
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
          <div className="mx-auto max-w-3xl text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-mono font-medium text-emerald-700 dark:text-emerald-400">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Bio-Computing Innovation</span>
            </div>

            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white leading-tight">
              {t("title")}
            </h2>

            <p className="mt-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-400">
              {t("paragraph")}
            </p>
          </div>

          {/* Video Poster with High-Craft Frame */}
          <div className="mx-auto max-w-4xl">
            <div className="relative overflow-hidden rounded-3xl border border-zinc-200/80 bg-white shadow-xl dark:border-white/[0.08] dark:bg-[#0b111d] dark:shadow-2xl group">
              <div className="relative aspect-video w-full">
                <Image
                  src="/images/video/image.png"
                  alt={t("title")}
                  className="object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                  fill
                />

                {/* Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />

                {/* Centered Glowing Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    aria-label="Play presentation video"
                    onClick={() => setOpen(true)}
                    className="group/btn relative flex h-20 w-20 items-center justify-center rounded-full border border-emerald-500/50 bg-emerald-500/30 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-emerald-500 hover:border-emerald-400 shadow-xl shadow-emerald-500/20 cursor-pointer"
                  >
                    <span className="absolute inset-0 rounded-full bg-emerald-400/30 animate-ping pointer-events-none" />
                    <Play className="h-7 w-7 fill-white text-white transition-colors group-hover/btn:fill-zinc-950 group-hover/btn:text-zinc-950 ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <VideoModal
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        channel="custom"
        src="/genetindmv.mp4"
      />
    </>
  );
}
