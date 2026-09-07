import HPCPageContent from "@/components/HPC/HPCPageContent";
import ServerVendorMarquee from "@/components/HPC/ServerVendorMarquee";
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

const HPCPage = async () => {
  return (
    <>
      <Suspense fallback={
        <div className="py-40 text-center font-mono text-sm text-zinc-500 dark:text-zinc-400">
          Loading HPC Infrastructure Matrix...
        </div>
      }>
        <HPCPageContent />
      </Suspense>
      <ServerVendorMarquee />
    </>
  );
};

export default HPCPage;
