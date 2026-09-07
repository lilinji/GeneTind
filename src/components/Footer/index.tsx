"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("Footer");

  return (
    <footer className="relative z-10 overflow-hidden bg-white dark:bg-[#060911] border-t border-zinc-200/80 dark:border-white/[0.08] pt-16 md:pt-20 lg:pt-24 transition-colors duration-300">
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
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-8 pb-16">
          
          {/* Company Brand Column (Col 5) */}
          <div className="lg:col-span-5">
            <Link href="/" className="mb-6 inline-block">
              <Image
                src="/images/logo/logo-2.svg"
                alt="GeneTind Logo"
                width={140}
                height={30}
                className="dark:hidden"
              />
              <Image
                src="/images/logo/logo.svg"
                alt="GeneTind Logo"
                width={140}
                height={30}
                className="hidden dark:block brightness-110"
              />
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              {t("company_desc")}
            </p>
          </div>

          {/* Company Links (Col 2) */}
          <div className="lg:col-span-2">
            <h3 className="font-mono text-xs uppercase tracking-widest text-zinc-900 dark:text-zinc-300 mb-6 font-semibold">
              {t("company")}
            </h3>
            <ul className="space-y-3 font-mono text-xs">
              <li>
                <Link
                  href="/about"
                  className="text-zinc-600 dark:text-zinc-400 transition-colors hover:text-emerald-600 dark:hover:text-emerald-400"
                >
                  {t("about_us")}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-zinc-600 dark:text-zinc-400 transition-colors hover:text-emerald-600 dark:hover:text-emerald-400"
                >
                  {t("contact_us")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Products / Community Links (Col 2) */}
          <div className="lg:col-span-2">
            <h3 className="font-mono text-xs uppercase tracking-widest text-zinc-900 dark:text-zinc-300 mb-6 font-semibold">
              {t("community")}
            </h3>
            <ul className="space-y-3 font-mono text-xs">
              <li>
                <Link
                  href="/hpc"
                  className="text-zinc-600 dark:text-zinc-400 transition-colors hover:text-emerald-600 dark:hover:text-emerald-400"
                >
                  HPC 智算平台
                </Link>
              </li>
              <li>
                <Link
                  href="/gneroai"
                  className="text-zinc-600 dark:text-zinc-400 transition-colors hover:text-emerald-600 dark:hover:text-emerald-400"
                >
                  GneroAI
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details (Col 3) */}
          <div className="lg:col-span-3">
            <h3 className="font-mono text-xs uppercase tracking-widest text-zinc-900 dark:text-zinc-300 mb-6 font-semibold">
              {t("contact_info")}
            </h3>
            <ul className="space-y-3 font-mono text-xs text-zinc-600 dark:text-zinc-400">
              <li>
                <span className="text-zinc-900 dark:text-zinc-300 font-semibold">{t("address_label")}</span>{" "}
                <span>{t("address_value")}</span>
              </li>
              <li>
                <span className="text-zinc-900 dark:text-zinc-300 font-semibold">{t("email_label")}</span>{" "}
                <span>support@genetind.com</span>
              </li>
              <li>
                <span className="text-zinc-900 dark:text-zinc-300 font-semibold">{t("phone_label")}</span>{" "}
                <span>+86 186 6537 9896</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Regulatory Notice, Copyright & ICP */}
        <div className="border-t border-zinc-200/80 dark:border-white/[0.08] py-8 text-center font-mono text-xs text-zinc-500 dark:text-zinc-400 space-y-3">
          <p className="max-w-4xl mx-auto text-[11px] leading-relaxed text-zinc-500/90 dark:text-zinc-500">
            {t("disclaimer")}
          </p>
          <p>
            {t("copyright")}{" "}
            <a
              href="http://beian.miit.gov.cn/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-emerald-600 dark:hover:text-emerald-400 ml-2"
            >
              津ICP备2023000552号
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
