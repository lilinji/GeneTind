"use client";

import Image from "next/image";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";

const Header = () => {
  const t = useTranslations("Header");
  const locale = useLocale();
  const router = useRouter();
  const usePathName = usePathname();

  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleStickyNavbar = () => {
      if (window.scrollY >= 40) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleStickyNavbar);
    return () => {
      window.removeEventListener("scroll", handleStickyNavbar);
    };
  }, []);

  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  const toggleLanguage = () => {
    const nextLocale = locale === "zh" ? "en" : "zh";
    router.replace(usePathName, { locale: nextLocale });
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full pt-4 sm:pt-6 px-4 pointer-events-none">
      <div
        className={`pointer-events-auto w-full max-w-7xl mx-auto rounded-full border px-4 sm:px-6 py-2.5 sm:py-3 transition-all duration-300 flex items-center justify-between shadow-lg ${
          sticky
            ? "border-zinc-200/90 bg-white/90 backdrop-blur-2xl shadow-zinc-900/5 dark:border-white/15 dark:bg-[#060911]/90 dark:shadow-emerald-500/5"
            : "border-zinc-200/70 bg-white/80 backdrop-blur-xl shadow-sm dark:border-white/10 dark:bg-[#060911]/70"
        }`}
      >
        {/* Brand Logo & Telemetry Status Indicator */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative h-8 w-32 md:w-36 transition-transform duration-300 group-hover:scale-[1.02]">
              <Image
                src="/images/logo/logo-2.svg"
                alt="GeneTind Logo"
                fill
                className="object-contain object-left dark:hidden"
                priority
              />
              <Image
                src="/images/logo/logo.svg"
                alt="GeneTind Logo"
                fill
                className="object-contain object-left hidden dark:block"
                priority
              />
            </div>
          </Link>
          <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>HPC Online</span>
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-8">
          {menuData.map((menuItem, index) => {
            const isActive = usePathName === menuItem.path;
            return (
              <div key={index} className="relative group">
                {menuItem.path ? (
                  <Link
                    href={menuItem.path}
                    className={`text-[13px] lg:text-sm font-medium tracking-tight transition-colors py-1 ${
                      isActive
                        ? "text-emerald-600 dark:text-emerald-400 font-semibold"
                        : "text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white"
                    }`}
                  >
                    {t(menuItem.title)}
                  </Link>
                ) : (
                  <div>
                    <button
                      onClick={() => handleSubmenu(index)}
                      className="flex items-center gap-1 text-[13px] lg:text-sm font-medium tracking-tight text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white transition-colors py-1 cursor-pointer"
                    >
                      {t(menuItem.title)}
                      <svg
                        className="w-3.5 h-3.5 opacity-60"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {menuItem.submenu && (
                      <div
                        className={`absolute left-0 mt-3 w-48 rounded-2xl border border-zinc-200/80 bg-white/95 p-2 backdrop-blur-2xl shadow-xl dark:border-white/10 dark:bg-[#0b111d]/95 ${
                          openIndex === index ? "block" : "hidden group-hover:block"
                        }`}
                      >
                        {menuItem.submenu.map((sub, sIndex) => (
                          <Link
                            key={sIndex}
                            href={sub.path}
                            className="block rounded-xl px-3 py-2 text-xs font-medium text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-white/5 dark:hover:text-white transition-colors"
                          >
                            {t(sub.title)}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Right Tools: Language + Theme + Primary Action */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={toggleLanguage}
            className="flex h-8 w-8 items-center justify-center rounded-full text-zinc-600 hover:text-zinc-950 hover:bg-black/5 dark:text-zinc-400 dark:hover:text-white dark:hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Toggle language"
          >
            <span className="text-xs font-mono font-semibold">{locale === "zh" ? "EN" : "中"}</span>
          </button>
          <ThemeToggler />

          <Link
            href="/hpc"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200 px-4 py-2 text-xs font-bold tracking-tight transition-all duration-200 shadow-md hover:scale-[1.02]"
          >
            <span>算力控制台</span>
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={navbarToggleHandler}
            aria-label="Mobile Menu"
            className="p-1.5 text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white md:hidden cursor-pointer"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {navbarOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Panel */}
      {navbarOpen && (
        <div className="pointer-events-auto mt-2 max-w-7xl mx-auto rounded-3xl border border-zinc-200 bg-white/95 p-6 backdrop-blur-2xl shadow-2xl dark:border-white/10 dark:bg-[#060911]/95 md:hidden">
          <div className="flex flex-col space-y-4">
            {menuData.map((item, idx) => (
              <Link
                key={idx}
                href={item.path || "#"}
                onClick={() => setNavbarOpen(false)}
                className="text-sm font-semibold text-zinc-800 hover:text-emerald-600 dark:text-zinc-200 dark:hover:text-emerald-400"
              >
                {t(item.title)}
              </Link>
            ))}
            <div className="pt-4 border-t border-zinc-200 dark:border-white/10 flex items-center justify-between">
              <Link
                href="/hpc"
                onClick={() => setNavbarOpen(false)}
                className="w-full text-center rounded-full bg-emerald-500 py-3 text-sm font-bold text-zinc-950 shadow-md"
              >
                访问 HPC 智算控制台
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
