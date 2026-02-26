import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-25/24 max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/about-image-2.svg"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/about-image-2-dark.svg"
                alt="about image"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9 group relative rounded-2xl bg-white/60 dark:bg-gray-dark/40 backdrop-blur-md border border-white/20 dark:border-white/10 p-6 shadow-two drop-shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_40px_-10px_rgba(74,108,247,0.3)] hover:border-primary/30 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <h3 className="relative z-10 mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-[#9b8fff] transition-all duration-300">
                  GTC-Chat (企业级 AI Chat)
                </h3>
                <p className="relative z-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed group-hover:text-body-color-dark transition-colors duration-300">
                  智能对话助手，无缝集成企业知识库，提供精准问答与业务咨询，显著提升员工效率与客户满意度。
                </p>
              </div>

              <div className="mb-9 group relative rounded-2xl bg-white/60 dark:bg-gray-dark/40 backdrop-blur-md border border-white/20 dark:border-white/10 p-6 shadow-two drop-shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_40px_-10px_rgba(74,108,247,0.3)] hover:border-primary/30 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <h3 className="relative z-10 mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-[#9b8fff] transition-all duration-300">
                  GTC-Agent (智能 AI Agent)
                </h3>
                <p className="relative z-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed group-hover:text-body-color-dark transition-colors duration-300">
                  自主决策与执行的智能体，自动化处理复杂业务流程，从数据分析到任务调度，全方位助力企业运营增效。
                </p>
              </div>

              <div className="mb-1 group relative rounded-2xl bg-white/60 dark:bg-gray-dark/40 backdrop-blur-md border border-white/20 dark:border-white/10 p-6 shadow-two drop-shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_40px_-10px_rgba(74,108,247,0.3)] hover:border-primary/30 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <h3 className="relative z-10 mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-[#9b8fff] transition-all duration-300">
                  GTC-Skills (定制化 Skills)
                </h3>
                <p className="relative z-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed group-hover:text-body-color-dark transition-colors duration-300">
                  灵活扩展的技能插件平台，针对特定业务场景定制 AI 能力，赋能企业快速构建专属智能化应用。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
