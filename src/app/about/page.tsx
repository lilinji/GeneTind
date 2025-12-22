import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "关于我们 | 吉因丰科技 (GeneTind)",
  description: "吉因丰科技是一家以数据服务为核心的技术型公司，致力于推动生命科学、精准医疗及人工智能新发展。",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="关于我们"
        description={
          <div className="space-y-6">
            <p className="text-base font-medium leading-relaxed text-body-color">
              “Delivering cutting-edge Life Sciences IT solutions to power your business.”
              <br />
              <span className="text-primary font-bold">吉因丰科技 (GeneTind)</span>{" "}
              是以数据服务为核心的技术革新力量，致力于让数据解码基因，驱动人工智能与精准医疗的深度融合。
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <div className="flex items-center space-x-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold">1</span>
                <span className="text-sm font-semibold text-dark dark:text-white">GneroAI-HPC (AI/HPC智算平台)</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold">2</span>
                <span className="text-sm font-semibold text-dark dark:text-white">GneroAI-ALL (企业级 AI平台)</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold">3</span>
                <span className="text-sm font-semibold text-dark dark:text-white">GneroAI-Lab (企业级 AI组学平台)</span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-body-color/10 inline-flex items-center space-x-4">
              <span className="text-sm font-bold uppercase tracking-wider text-body-color">Call Anytime:</span>
              <a href="tel:+8618665379896" className="text-xl font-bold text-primary hover:underline">
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
