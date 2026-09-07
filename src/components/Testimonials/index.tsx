"use client";

import { Testimonial } from "@/types/testimonial";
import SingleTestimonial from "./SingleTestimonial";
import { useTranslations } from "next-intl";
import { MessageSquareQuote } from "lucide-react";

const getTestimonialData = (t: any): Testimonial[] => [
  {
    id: 1,
    name: t("t1_name"),
    designation: t("t1_designation"),
    content: t("t1_content"),
    image: "/images/testimonials/auth-01.png",
    star: 5,
  },
  {
    id: 2,
    name: t("t2_name"),
    designation: t("t2_designation"),
    content: t("t2_content"),
    image: "/images/testimonials/auth-02.png",
    star: 5,
  },
  {
    id: 3,
    name: t("t3_name"),
    designation: t("t3_designation"),
    content: t("t3_content"),
    image: "/images/testimonials/auth-03.png",
    star: 5,
  },
];

const Testimonials = () => {
  const t = useTranslations("Testimonials");
  const testimonialData = getTestimonialData(t);

  return (
    <section className="relative z-10 overflow-hidden bg-white dark:bg-[#060911] py-24 sm:py-32 border-t border-zinc-200/80 dark:border-white/[0.08] transition-colors duration-300">
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
            <MessageSquareQuote className="h-3.5 w-3.5" />
            <span>Research & Industry Trust</span>
          </div>

          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white leading-tight">
            {t("title")}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-400">
            {t("paragraph")}
          </p>
        </div>

        {/* 3-Column Staggered Cards */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonialData.map((testimonial) => (
            <SingleTestimonial key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
