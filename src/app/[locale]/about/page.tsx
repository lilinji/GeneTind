import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "AboutPage" });
  return {
    title: t("meta_title"),
    description: t("meta_description"),
  };
}

const AboutPage = () => {
  const t = useTranslations("AboutPage");
  return (
    <>
      <Breadcrumb
        pageName={t("pageName")}
        description={
          <div className="space-y-6">
            <p className="text-base font-medium leading-relaxed text-body-color">
              {t("quote")}
              <br />
              <span className="text-primary font-bold">{t("intro_1")}</span>{" "}
              {t("intro_2")}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="flex items-center space-x-3 group relative p-3 rounded-xl hover:bg-white/5 dark:hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/10">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300"></div>
                <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary text-sm font-bold shadow-[inset_0_0_10px_rgba(74,108,247,0.1)] transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:shadow-[0_0_15px_rgba(74,108,247,0.4)] group-hover:scale-110">1</span>
                <span className="relative z-10 text-sm font-semibold text-dark dark:text-gray-300 group-hover:text-primary dark:group-hover:text-white transition-colors">{t("card1")}</span>
              </div>
              <div className="flex items-center space-x-3 group relative p-3 rounded-xl hover:bg-white/5 dark:hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/10">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300"></div>
                <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary text-sm font-bold shadow-[inset_0_0_10px_rgba(74,108,247,0.1)] transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:shadow-[0_0_15px_rgba(74,108,247,0.4)] group-hover:scale-110">2</span>
                <span className="relative z-10 text-sm font-semibold text-dark dark:text-gray-300 group-hover:text-primary dark:group-hover:text-white transition-colors">{t("card2")}</span>
              </div>
              <div className="flex items-center space-x-3 group relative p-3 rounded-xl hover:bg-white/5 dark:hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/10">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300"></div>
                <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary text-sm font-bold shadow-[inset_0_0_10px_rgba(74,108,247,0.1)] transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:shadow-[0_0_15px_rgba(74,108,247,0.4)] group-hover:scale-110">3</span>
                <span className="relative z-10 text-sm font-semibold text-dark dark:text-gray-300 group-hover:text-primary dark:group-hover:text-white transition-colors">{t("card3")}</span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-body-color/10 inline-flex items-center space-x-4 relative">
              <div className="absolute -left-4 -top-0 w-[200px] h-[1px] bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0"></div>
              <span className="text-sm font-bold uppercase tracking-wider text-body-color flex items-center">
                <span className="animate-pulse mr-2 inline-block h-1.5 w-1.5 rounded-full bg-primary"></span>
                {t("call_anytime")}
              </span>
              <a href="tel:+8618665379896" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-[#9b8fff] hover:opacity-80 transition-opacity drop-shadow-sm">
                +86 18665379896
              </a>
            </div>
          </div>
        }
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
