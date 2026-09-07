"use client";

import { useTranslations } from "next-intl";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "@/i18n/navigation";

const PricingBox = (props: {
  price?: string;
  duration?: string;
  packageName: string;
  subtitle: string;
  children: React.ReactNode;
  popular?: boolean;
}) => {
  const { price, duration, packageName, subtitle, children, popular } = props;
  const t = useTranslations("Pricing");

  return (
    <div className="w-full h-full group">
      <div
        className={`relative h-full rounded-2xl border bg-white/95 p-8 backdrop-blur-xl shadow-md transition-all duration-300 hover:shadow-xl dark:bg-[#0b111d]/90 dark:hover:bg-[#0e1626] flex flex-col justify-between ${
          popular
            ? "border-emerald-500/50 shadow-emerald-500/10 dark:border-emerald-500/40"
            : "border-zinc-200/80 hover:border-emerald-500/30 dark:border-white/[0.08]"
        }`}
      >
        {popular && (
          <div className="absolute -top-3.5 right-6 inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500 px-3 py-0.5 text-xs font-mono font-semibold text-zinc-950 shadow-md">
            <Sparkles className="h-3 w-3" />
            <span>Recommended</span>
          </div>
        )}

        <div>
          {/* Header Row */}
          <div className="flex items-center justify-between border-b border-zinc-100 dark:border-white/[0.08] pb-6">
            <div>
              <h4 className="font-mono text-xl font-bold tracking-tight text-zinc-900 dark:text-white">
                {packageName}
              </h4>
              <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                {subtitle}
              </p>
            </div>
            
            {price ? (
              <div className="text-right">
                <span className="font-mono text-2xl font-bold text-emerald-600 dark:text-emerald-400">${price}</span>
                <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400">/{duration}</span>
              </div>
            ) : (
              <span className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 font-mono text-xs text-zinc-700 dark:border-white/10 dark:bg-white/[0.04] dark:text-zinc-300">
                Enterprise
              </span>
            )}
          </div>

          {/* Features List */}
          <div className="mt-6 space-y-3">
            {children}
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-8 pt-6 border-t border-zinc-100 dark:border-white/[0.08]">
          <Link
            href="/contact"
            className={`flex w-full items-center justify-center gap-2 rounded-full py-3.5 text-xs font-mono font-semibold transition-all ${
              popular
                ? "bg-emerald-500 text-zinc-950 hover:bg-emerald-400 shadow-lg shadow-emerald-500/20"
                : "border border-zinc-200 bg-zinc-50 text-zinc-800 hover:bg-zinc-100 dark:border-white/10 dark:bg-white/[0.04] dark:text-white dark:hover:bg-white/[0.08]"
            }`}
          >
            <span>{t("start_trial")}</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PricingBox;
