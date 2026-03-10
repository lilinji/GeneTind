"use client";

import { Link } from "@/i18n/navigation";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";

const totalSlides = 3;

const Hero = () => {
  const t = useTranslations("Hero");
  const [currentSlide, setCurrentSlide] = useState(0);
  const paginationLabels = [t("goToSlide1"), t("goToSlide2"), t("goToSlide3")];
  const paginationActiveClasses = [
    "bg-primary",
    "bg-green-600 dark:bg-[#4ade80]",
    "bg-amber-500 dark:bg-amber-300",
  ];
  const slide3Highlights = [
    {
      label: t("slide3_chip_1"),
      itemClass: "border-white/10 bg-slate-900/65",
      badgeClass: "border-white/10 bg-white/[0.06] text-white/80",
      barClass: "w-10 bg-white/70",
    },
    {
      label: t("slide3_chip_2"),
      itemClass: "border-white/10 bg-slate-900/75",
      badgeClass: "border-white/10 bg-white/[0.06] text-amber-100",
      barClass: "w-16 bg-amber-200/90",
    },
    {
      label: t("slide3_chip_3"),
      itemClass: "border-amber-200/20 bg-amber-300/10",
      badgeClass: "border-amber-200/20 bg-amber-300/10 text-amber-100",
      barClass: "w-20 bg-[linear-gradient(90deg,#fde68a,#fb923c)]",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <section
        id="home"
        className="dark:bg-gray-dark relative z-10 overflow-hidden bg-white pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[200px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="relative mx-auto max-w-[860px] text-center">
                {/* Carousel Tracks / Content */}
                <div className="grid items-center justify-items-center">
                  {/* Slide 1 */}
                  <div
                    className={`col-start-1 row-start-1 flex w-full flex-col items-center justify-center transition-all duration-1000 ease-in-out ${
                      currentSlide === 0
                        ? "pointer-events-auto z-10 translate-y-0 opacity-100"
                        : "pointer-events-none z-0 -translate-y-8 opacity-0"
                    }`}
                  >
                    <h1 className="mb-5 text-3xl leading-tight font-bold text-black sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight dark:text-white">
                      {t("title_main")}
                      <br />
                      {t("title_sub")}
                    </h1>
                    <p className="text-body-color dark:text-body-color-dark mb-12 text-base leading-relaxed! font-bold sm:text-lg md:text-xl">
                      {t("paragraph")}
                    </p>
                    <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                      <Link
                        href="https://gneroai.genetind.com"
                        className="bg-primary hover:bg-primary/80 rounded-xs px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out"
                      >
                        {t("getPro")}
                      </Link>
                      <Link
                        href="https://github.com/lilinji/gneroai"
                        className="inline-block rounded-xs bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
                      >
                        {t("starOnGithub")}
                      </Link>
                    </div>
                  </div>

                  {/* Slide 2 (ClawBio Design Replica) */}
                  <div
                    className={`col-start-1 row-start-1 flex w-full flex-col items-center justify-center transition-all duration-1000 ease-in-out ${
                      currentSlide === 1
                        ? "pointer-events-auto z-10 translate-y-0 opacity-100"
                        : "pointer-events-none z-0 translate-y-8 opacity-0"
                    }`}
                  >
                    <div className="mb-6 inline-flex items-center rounded-full border border-green-600/30 bg-green-500/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-green-700 sm:text-[10px] md:text-xs dark:border-green-800/50 dark:text-[#4ade80]">
                      {t("slide2_tags")}
                    </div>
                    <h1 className="mb-5 text-3xl leading-tight font-extrabold tracking-tight text-black sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight dark:text-white">
                      {t("slide2_title_1")}{" "}
                      <span className="text-green-600 dark:text-[#4ade80]">
                        {t("slide2_title_highlight")}
                      </span>
                      <br />
                      {t("slide2_title_2")}
                    </h1>
                    <p className="text-body-color mb-12 max-w-[600px] text-base leading-relaxed font-medium sm:text-lg md:text-xl dark:text-gray-400">
                      {t("slide2_paragraph")}
                    </p>
                    <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                      <Link
                        href="https://github.com/lilinji/GeneTind-Life-Skills"
                        className="rounded-xs bg-green-600 px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-green-700 dark:bg-[#4ade80] dark:text-black dark:hover:bg-[#22c55e]"
                      >
                        {t("exploreSkills")}
                      </Link>
                    </div>
                  </div>

                  {/* Slide 3 (OpenClaw Course) */}
                  <div
                    className={`col-start-1 row-start-1 w-full transition-all duration-1000 ease-in-out ${
                      currentSlide === 2
                        ? "pointer-events-auto z-10 translate-y-0 opacity-100"
                        : "pointer-events-none z-0 translate-y-8 opacity-0"
                    }`}
                  >
                    <div className="relative mx-auto max-w-[820px] overflow-hidden rounded-[32px] border border-white/10 bg-slate-950 p-[1px] text-left shadow-[0_32px_100px_-52px_rgba(15,23,42,0.96)] transition-transform duration-500 hover:-translate-y-1">
                      <div className="relative overflow-hidden rounded-[31px] bg-[linear-gradient(135deg,#09111f_0%,#10192b_48%,#1d2432_100%)] px-6 py-6 sm:px-8 sm:py-8 md:px-10 md:py-10">
                        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.24),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(96,165,250,0.14),transparent_30%)]" />
                        <div className="pointer-events-none absolute inset-x-6 inset-y-5 rounded-[26px] border border-white/[0.06]" />
                        <div className="pointer-events-none absolute top-10 right-10 h-28 w-28 rounded-full bg-amber-300/20 blur-3xl" />

                        <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1.12fr)_minmax(260px,0.88fr)] lg:items-end">
                          <div>
                            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-200/20 bg-white/[0.06] px-4 py-2 text-[11px] font-semibold tracking-[0.32em] text-amber-100/90 uppercase backdrop-blur">
                              <Sparkles className="h-3.5 w-3.5 text-amber-300" />
                              {t("slide3_badge")}
                            </div>

                            <div className="mb-8">
                              <h2 className="max-w-[520px] text-3xl leading-[0.96] font-black tracking-[-0.05em] text-white sm:text-4xl md:text-[54px]">
                                {t("slide3_title_1")}
                              </h2>
                              <div className="mt-4 flex flex-wrap items-center gap-3 text-3xl leading-none font-black tracking-[-0.05em] text-white sm:text-4xl md:text-[54px]">
                                <span className="inline-flex rounded-full bg-[linear-gradient(135deg,#fde68a,#fb923c)] px-4 py-2 text-slate-950 shadow-[0_18px_38px_-24px_rgba(251,146,60,0.9)]">
                                  {t("slide3_title_highlight")}
                                </span>
                                <span className="text-white/92">
                                  {t("slide3_title_2")}
                                </span>
                              </div>
                              <p className="mt-6 max-w-[560px] text-lg leading-relaxed font-semibold text-slate-100 md:text-2xl">
                                {t("slide3_subtitle")}
                              </p>
                              <p className="mt-4 max-w-[540px] text-sm leading-7 text-slate-300 sm:text-base">
                                {t("slide3_paragraph")}
                              </p>
                            </div>

                            <div className="flex flex-col items-start gap-4">
                              <Link
                                href="https://gnero.genetind.com/zh/openclaw"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,#fde68a,#fb923c)] px-7 py-3.5 text-sm font-bold text-slate-950 shadow-[0_22px_40px_-24px_rgba(251,146,60,0.85)] transition duration-300 ease-in-out hover:scale-[1.02] hover:shadow-[0_28px_46px_-24px_rgba(251,146,60,0.95)] sm:px-8 sm:py-4 sm:text-base"
                              >
                                {t("slide3_cta")}
                                <ArrowUpRight className="h-4 w-4" />
                              </Link>

                              <div className="flex flex-wrap gap-3 text-[11px] font-semibold tracking-[0.24em] text-slate-200 uppercase sm:text-xs">
                                {slide3Highlights.map((item, index) => (
                                  <span
                                    key={item.label}
                                    className={`rounded-full px-3.5 py-2 backdrop-blur ${
                                      index === slide3Highlights.length - 1
                                        ? "border border-amber-200/20 bg-amber-300/10 text-amber-100"
                                        : "border border-white/10 bg-white/[0.08]"
                                    }`}
                                  >
                                    {item.label}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>

                          <div className="relative">
                            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.05] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_24px_50px_-34px_rgba(15,23,42,0.9)] backdrop-blur-sm">
                              <div className="mb-6 flex items-end justify-between gap-4 border-b border-white/10 pb-5">
                                <div>
                                  <p className="text-[10px] font-semibold tracking-[0.34em] text-amber-200/75 uppercase">
                                    OpenClaw
                                  </p>
                                  <p className="mt-3 max-w-[220px] text-xl leading-snug font-bold text-white">
                                    {t("slide3_subtitle")}
                                  </p>
                                </div>
                                <div className="text-right">
                                  <p className="text-5xl font-black tracking-[-0.08em] text-white">
                                    07
                                  </p>
                                  <p className="mt-1 text-[10px] font-semibold tracking-[0.24em] text-slate-400 uppercase">
                                    OpenClaw
                                  </p>
                                </div>
                              </div>

                              <div className="space-y-3">
                                {slide3Highlights.map((item, index) => (
                                  <div
                                    key={`${item.label}-panel`}
                                    className={`flex items-center justify-between rounded-[22px] border px-4 py-4 ${item.itemClass}`}
                                  >
                                    <div className="flex items-center gap-4">
                                      <span
                                        className={`flex h-10 w-10 items-center justify-center rounded-full border text-[11px] font-bold tracking-[0.24em] ${item.badgeClass}`}
                                      >
                                        {(index + 1)
                                          .toString()
                                          .padStart(2, "0")}
                                      </span>
                                      <span className="text-sm font-semibold text-white sm:text-base">
                                        {item.label}
                                      </span>
                                    </div>
                                    <span
                                      className={`h-1.5 rounded-full ${item.barClass}`}
                                    />
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Carousel Pagination Dots */}
                <div className="mt-14 flex items-center justify-center space-x-3">
                  {paginationLabels.map((label, index) => (
                    <button
                      key={label}
                      onClick={() => setCurrentSlide(index)}
                      aria-label={label}
                      className={`h-2.5 rounded-full transition-all duration-300 ease-out ${
                        currentSlide === index
                          ? `${paginationActiveClasses[index]} w-8`
                          : "bg-body-color/30 hover:bg-body-color/50 w-2.5 dark:bg-white/20 dark:hover:bg-white/40"
                      }`}
                    ></button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 z-[-1] opacity-30 lg:opacity-100">
          <svg
            width="450"
            height="556"
            viewBox="0 0 450 556"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="277"
              cy="63"
              r="225"
              fill="url(#paint0_linear_25:217)"
            />
            <circle
              cx="17.9997"
              cy="182"
              r="18"
              fill="url(#paint1_radial_25:217)"
            />
            <circle
              cx="76.9997"
              cy="288"
              r="34"
              fill="url(#paint2_radial_25:217)"
            />
            <circle
              cx="325.486"
              cy="302.87"
              r="180"
              transform="rotate(-37.6852 325.486 302.87)"
              fill="url(#paint3_linear_25:217)"
            />
            <circle
              opacity="0.8"
              cx="184.521"
              cy="315.521"
              r="132.862"
              transform="rotate(114.874 184.521 315.521)"
              stroke="url(#paint4_linear_25:217)"
            />
            <circle
              opacity="0.8"
              cx="356"
              cy="290"
              r="179.5"
              transform="rotate(-30 356 290)"
              stroke="url(#paint5_linear_25:217)"
            />
            <circle
              opacity="0.8"
              cx="191.659"
              cy="302.659"
              r="133.362"
              transform="rotate(133.319 191.659 302.659)"
              fill="url(#paint6_linear_25:217)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_25:217"
                x1="-54.5003"
                y1="-178"
                x2="222"
                y2="288"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <radialGradient
                id="paint1_radial_25:217"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(17.9997 182) rotate(90) scale(18)"
              >
                <stop offset="0.145833" stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.08" />
              </radialGradient>
              <radialGradient
                id="paint2_radial_25:217"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(76.9997 288) rotate(90) scale(34)"
              >
                <stop offset="0.145833" stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.08" />
              </radialGradient>
              <linearGradient
                id="paint3_linear_25:217"
                x1="226.775"
                y1="-66.1548"
                x2="292.157"
                y2="351.421"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_25:217"
                x1="184.521"
                y1="182.159"
                x2="184.521"
                y2="448.882"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_25:217"
                x1="356"
                y1="110"
                x2="356"
                y2="470"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint6_linear_25:217"
                x1="118.524"
                y1="29.2497"
                x2="166.965"
                y2="338.63"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 z-[-1] opacity-30 lg:opacity-100">
          <svg
            width="364"
            height="201"
            viewBox="0 0 364 201"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.88928 72.3303C33.6599 66.4798 101.397 64.9086 150.178 105.427C211.155 156.076 229.59 162.093 264.333 166.607C299.076 171.12 337.718 183.657 362.889 212.24"
              stroke="url(#paint0_linear_25:218)"
            />
            <path
              d="M-22.1107 72.3303C5.65989 66.4798 73.3965 64.9086 122.178 105.427C183.155 156.076 201.59 162.093 236.333 166.607C271.076 171.12 309.718 183.657 334.889 212.24"
              stroke="url(#paint1_linear_25:218)"
            />
            <path
              d="M-53.1107 72.3303C-25.3401 66.4798 42.3965 64.9086 91.1783 105.427C152.155 156.076 170.59 162.093 205.333 166.607C240.076 171.12 278.718 183.657 303.889 212.24"
              stroke="url(#paint2_linear_25:218)"
            />
            <path
              d="M-98.1618 65.0889C-68.1416 60.0601 4.73364 60.4882 56.0734 102.431C120.248 154.86 139.905 161.419 177.137 166.956C214.37 172.493 255.575 186.165 281.856 215.481"
              stroke="url(#paint3_linear_25:218)"
            />
            <circle
              opacity="0.8"
              cx="214.505"
              cy="60.5054"
              r="49.7205"
              transform="rotate(-13.421 214.505 60.5054)"
              stroke="url(#paint4_linear_25:218)"
            />
            <circle cx="220" cy="63" r="43" fill="url(#paint5_radial_25:218)" />
            <defs>
              <linearGradient
                id="paint0_linear_25:218"
                x1="184.389"
                y1="69.2405"
                x2="184.389"
                y2="212.24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_25:218"
                x1="156.389"
                y1="69.2405"
                x2="156.389"
                y2="212.24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_25:218"
                x1="125.389"
                y1="69.2405"
                x2="125.389"
                y2="212.24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_25:218"
                x1="93.8507"
                y1="67.2674"
                x2="89.9278"
                y2="210.214"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_25:218"
                x1="214.505"
                y1="10.2849"
                x2="212.684"
                y2="99.5816"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <radialGradient
                id="paint5_radial_25:218"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(220 63) rotate(90) scale(43)"
              >
                <stop offset="0.145833" stopColor="white" stopOpacity="0" />
                <stop offset="1" stopColor="white" stopOpacity="0.08" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </section>
    </>
  );
};

export default Hero;
