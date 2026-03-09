"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";
import { useTranslations } from "next-intl";

const Pricing = () => {
  const t = useTranslations("Pricing");

  return (
    <section id="pricing" className="relative z-10 overflow-hidden py-16 md:py-20 lg:py-28">
      {/* Ambient AI Background */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>
      <div className="absolute right-1/4 top-1/2 -z-10 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[150px] mix-blend-screen pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute left-1/4 bottom-0 -z-10 w-[500px] h-[500px] rounded-full bg-[#9b8fff]/10 blur-[120px] mix-blend-screen pointer-events-none -translate-x-1/2 translate-y-1/4"></div>

      <div className="container relative z-20">
        <SectionTitle
          title={t("title")}
          paragraph={t("paragraph")}
          center
          width="665px"
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
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
      </div>

      <div className="absolute bottom-0 left-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;
