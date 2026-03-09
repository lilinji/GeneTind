import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "联系我们 | 吉因丰科技 (GeneTind)",
  description: "如果您有任何疑问或需要技术支持，请随时与我们联系。我们的团队将竭诚为您服务。",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="联系我们"
        description="如果您有任何疑问或需要技术支持，请随时与我们联系。我们的团队将竭诚为您服务。"
      />

      <Contact />
    </>
  );
};

export default ContactPage;
