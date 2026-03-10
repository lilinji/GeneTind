import Breadcrumb from "@/components/Common/Breadcrumb";
import GneroAIContent from "@/components/GneroAI";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "GneroAIPage" });
  return {
    title: t("meta_title"),
    description: t("meta_description"),
  };
}

const GneroAIPage = async ({ params }: { params: Promise<{ locale: string }> }) => {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "GneroAIPage" });
  return (
    <>
      <Breadcrumb
        pageName={t("pageName")}
        description={
          <div className="space-y-6">
            <p>
              {t("description")}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="https://gnero.genetind.com"
                target="_blank"
                className="inline-block rounded-sm bg-primary px-8 py-3 text-base font-semibold text-white duration-300 hover:bg-primary/90"
              >
                {t("doc_link")}
              </Link>
              <Link
                href="https://public.genetind.com/"
                target="_blank"
                className="inline-block rounded-sm bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-3 text-base font-semibold text-white duration-300 hover:from-purple-700 hover:to-indigo-700"
              >
                {t("secret_link")}
              </Link>
            </div>
          </div>
        }
      />

      <GneroAIContent />
    </>
  );
};

export default GneroAIPage;
