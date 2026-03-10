import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ContactPage" });
  return {
    title: t("meta_title"),
    description: t("meta_description"),
  };
}

const ContactPage = async ({ params }: { params: Promise<{ locale: string }> }) => {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ContactPage" });
  return (
    <>
      <Breadcrumb
        pageName={t("pageName")}
        description={t("description")}
      />

      <Contact />
    </>
  );
};

export default ContactPage;
