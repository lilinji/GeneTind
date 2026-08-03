import Breadcrumb from "@/components/Common/Breadcrumb";
import HPCPageContent from "@/components/HPC/HPCPageContent";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";
import { Suspense } from "react";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "HPCPage" });
  return {
    title: t("meta_title"),
    description: t("meta_description"),
  };
}

const HPCPage = async ({ params }: { params: Promise<{ locale: string }> }) => {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "HPCPage" });

  return (
    <>
      <Breadcrumb
        pageName={t("pageName")}
        description={
          <div className="space-y-4 max-w-3xl">
            <p className="text-base md:text-lg leading-relaxed text-body-color dark:text-white/80">
              {t("description")}
            </p>
          </div>
        }
      />

      <Suspense fallback={
        <div className="py-20 text-center text-gray-500 dark:text-gray-400">
          加载 HPC 产品数据中...
        </div>
      }>
        <HPCPageContent />
      </Suspense>
    </>
  );
};

export default HPCPage;
