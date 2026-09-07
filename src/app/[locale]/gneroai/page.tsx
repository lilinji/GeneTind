import GneroAIContent from "@/components/GneroAI";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "GneroAIPage" });
  return {
    title: t("meta_title"),
    description: t("meta_description"),
  };
}

const GneroAIPage = () => {
  return <GneroAIContent />;
};

export default GneroAIPage;
