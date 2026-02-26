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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="flex items-center space-x-3 group relative p-3 rounded-xl hover:bg-white/5 dark:hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/10">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300"></div>
                <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary text-sm font-bold shadow-[inset_0_0_10px_rgba(74,108,247,0.1)] transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:shadow-[0_0_15px_rgba(74,108,247,0.4)] group-hover:scale-110">1</span>
                <span className="relative z-10 text-sm font-semibold text-dark dark:text-gray-300 group-hover:text-primary dark:group-hover:text-white transition-colors">GneroAI-HPC (AI/HPC智算平台)</span>
              </div>
              <div className="flex items-center space-x-3 group relative p-3 rounded-xl hover:bg-white/5 dark:hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/10">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300"></div>
                <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary text-sm font-bold shadow-[inset_0_0_10px_rgba(74,108,247,0.1)] transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:shadow-[0_0_15px_rgba(74,108,247,0.4)] group-hover:scale-110">2</span>
                <span className="relative z-10 text-sm font-semibold text-dark dark:text-gray-300 group-hover:text-primary dark:group-hover:text-white transition-colors">GneroAI-ALL (企业级 AI平台)</span>
              </div>
              <div className="flex items-center space-x-3 group relative p-3 rounded-xl hover:bg-white/5 dark:hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/10">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300"></div>
                <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary text-sm font-bold shadow-[inset_0_0_10px_rgba(74,108,247,0.1)] transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:shadow-[0_0_15px_rgba(74,108,247,0.4)] group-hover:scale-110">3</span>
                <span className="relative z-10 text-sm font-semibold text-dark dark:text-gray-300 group-hover:text-primary dark:group-hover:text-white transition-colors">GneroAI-Lab (企业级 AI组学平台)</span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-body-color/10 inline-flex items-center space-x-4 relative">
              <div className="absolute -left-4 -top-0 w-[200px] h-[1px] bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0"></div>
              <span className="text-sm font-bold uppercase tracking-wider text-body-color flex items-center">
                <span className="animate-pulse mr-2 inline-block h-1.5 w-1.5 rounded-full bg-primary"></span>
                Call Anytime:
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
