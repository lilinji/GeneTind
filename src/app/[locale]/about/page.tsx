import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import AboutHero from "@/components/About/AboutHero";
import AboutMissionBento from "@/components/About/AboutMissionBento";
import AboutTimeline from "@/components/About/AboutTimeline";
import AboutValues from "@/components/About/AboutValues";
import AboutCTA from "@/components/About/AboutCTA";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "AboutPage" });
  return {
    title: t("meta_title"),
    description: t("meta_description"),
  };
}

const AboutPage = async () => {
  return (
    <main className="min-h-screen bg-white dark:bg-[#060911] text-zinc-900 dark:text-zinc-100 transition-colors duration-300">
      <AboutHero />
      <AboutMissionBento />
      <AboutTimeline />
      <AboutValues />
      <AboutCTA />
    </main>
  );
};

export default AboutPage;
