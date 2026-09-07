"use client";

import OfferList from "./OfferList";
import PricingBox from "./PricingBox";
import PricingBannerVideo from "./PricingBannerVideo";
import { useTranslations } from "next-intl";
import { Sparkles } from "lucide-react";

const Pricing = () => {
  const t = useTranslations("Pricing");

  return (
    <section id="pricing" className="relative z-10 overflow-hidden bg-zinc-50/70 dark:bg-[#060911] py-24 sm:py-32 transition-colors duration-300">
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
            <Sparkles className="h-3.5 w-3.5" />
            <span>Commercial Deployment</span>
          </div>

          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white leading-tight">
            {t("title")}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-400">
            {t("paragraph")}
          </p>
        </div>

        {/* Pricing Matrix */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <PricingBox
            packageName="Lite"
            subtitle={t("lite_subtitle")}
          >
            <OfferList text={t("lite_f1")} status="active" />
            <OfferList text={t("lite_f2")} status="active" />
            <OfferList text={t("lite_f3")} status="active" />
            <OfferList text={t("lite_f4")} status="active" />
            <OfferList text={t("lite_f5")} status="inactive" />
            <OfferList text={t("lite_f6")} status="inactive" />
          </PricingBox>

          <PricingBox
            packageName="Basic Plus"
            subtitle={t("basic_subtitle")}
            popular={true}
          >
            <OfferList text={t("basic_f1")} status="active" />
            <OfferList text={t("basic_f2")} status="active" />
            <OfferList text={t("basic_f3")} status="active" />
            <OfferList text={t("basic_f4")} status="active" />
            <OfferList text={t("basic_f5")} status="active" />
            <OfferList text={t("basic_f6")} status="inactive" />
          </PricingBox>

          <PricingBox
            packageName="GneroAI Platform"
            subtitle={t("platform_subtitle")}
          >
            <OfferList text={t("platform_f1")} status="active" />
            <OfferList text={t("platform_f2")} status="active" />
            <OfferList text={t("platform_f3")} status="active" />
            <OfferList text={t("platform_f4")} status="active" />
            <OfferList text={t("platform_f5")} status="active" />
            <OfferList text={t("platform_f6")} status="active" />
          </PricingBox>
        </div>

        {/* Ecosystem Video Banner */}
        <PricingBannerVideo />
      </div>
    </section>
  );
};

export default Pricing;
