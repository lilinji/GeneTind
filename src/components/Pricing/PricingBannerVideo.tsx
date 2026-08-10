"use client";

import { useRef, useState } from "react";
import { useTranslations } from "next-intl";

const PricingBannerVideo = () => {
  const t = useTranslations("Pricing");
  const videoRef = useRef<HTMLVideoElement>(null);
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
      {/* Background glowing decorations */}
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 -z-10 w-full max-w-4xl h-48 rounded-full bg-gradient-to-r from-primary/20 via-[#9b8fff]/25 to-primary/20 blur-[80px] opacity-70 pointer-events-none"></div>

      <div className="relative overflow-hidden rounded-2xl md:rounded-3xl border border-primary/15 dark:border-white/10 bg-white/70 dark:bg-gray-dark/70 backdrop-blur-xl p-4 sm:p-6 lg:p-8 shadow-[0_15px_50px_-15px_rgba(74,108,247,0.15)] group">
        {/* Subtle Ambient Accent Border Glow */}
        <div className="absolute inset-0 rounded-2xl md:rounded-3xl bg-gradient-to-r from-primary/10 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

        {/* Banner Header */}
        <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-body-color/10 pb-5 dark:border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary border border-primary/20 mb-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-ping"></span>
              {t("banner_subtitle")}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-white">
              {t("banner_title")}
            </h3>
          </div>

          <button
            onClick={togglePlay}
            className="self-start md:self-auto inline-flex items-center gap-2 rounded-full bg-white/80 dark:bg-white/10 px-4 py-2 text-xs font-medium text-black dark:text-white border border-gray-200 dark:border-white/15 backdrop-blur-md shadow-sm hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:border-primary transition-all duration-300 cursor-pointer"
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            {isPlaying ? (
              <>
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                </svg>
                <span>暂停动画</span>
              </>
            ) : (
              <>
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                <span>播放动画</span>
              </>
            )}
          </button>
        </div>

        {/* Video Wrapper */}
        <div className="relative w-full overflow-hidden rounded-xl md:rounded-2xl bg-white dark:bg-[#0c1222] border border-black/5 dark:border-white/5">
          <video
            ref={videoRef}
            src="/footer.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto object-cover mix-blend-multiply dark:mix-blend-normal dark:invert dark:hue-rotate-180 dark:brightness-95 transition-all duration-500 min-h-[140px] md:min-h-[220px]"
          />

          {/* Left & Right gradient edge soft fade */}
          <div className="absolute inset-y-0 left-0 w-8 md:w-16 bg-gradient-to-r from-white dark:from-[#0c1222] to-transparent pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-8 md:w-16 bg-gradient-to-l from-white dark:from-[#0c1222] to-transparent pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
};

export default PricingBannerVideo;
