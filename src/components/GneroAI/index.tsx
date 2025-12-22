import SectionTitle from "../Common/SectionTitle";

const GneroAIContent = () => {
  return (
    <section className="pb-[120px] pt-[120px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4">
            <SectionTitle
              title="探索 GneroAI 的无限可能"
              titleClassName="bg-clip-text text-transparent bg-gradient-to-r from-primary via-[#9b8fff] to-primary bg-[length:200%_auto] animate-shimmer"
              paragraph="我们正致力于构建下一代生命科学 AI 平台。从智能对话到组学数据分析，GneroAI 将为您带来前所未有的效率提升。多款创新产品即将面世，敬请期待。"
              center
              mb="80px"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {/* GneroAI Chat */}
          <div className="w-full">
            <div className="wow fadeInUp group relative z-10 rounded-sm bg-white p-8 shadow-three duration-300 hover:shadow-one dark:bg-gray-dark sm:p-11 lg:p-8 xl:p-11" data-wow-delay=".1s">
              <div className="mb-8 flex items-center justify-between">
                <div className="flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary transition-all group-hover:bg-opacity-100 group-hover:text-white">
                  <svg width="36" height="30" viewBox="0 0 36 30" fill="currentColor">
                    <path d="M18 0.5C8.3 0.5 0.5 8.3 0.5 18C0.5 27.7 8.3 35.5 18 35.5C27.7 35.5 35.5 27.7 35.5 18C35.5 8.3 27.7 0.5 18 0.5ZM18 32.2C10.2 32.2 3.8 25.8 3.8 18C3.8 10.2 10.2 3.8 18 3.8C25.8 3.8 32.2 10.2 32.2 18C32.2 25.8 25.8 32.2 18 32.2Z" />
                    <path d="M18 8.8C12.9 8.8 8.8 12.9 8.8 18C8.8 23.1 12.9 27.2 18 27.2C23.1 27.2 27.2 23.1 27.2 18C27.2 12.9 23.1 8.8 18 8.8ZM18 23.9C14.7 23.9 12.1 21.3 12.1 18C12.1 14.7 14.7 12.1 18 12.1C21.3 12.1 23.9 14.7 23.9 18C23.9 21.3 21.3 23.9 18 23.9Z" />
                  </svg>
                </div>
                <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                  核心智能
                </span>
              </div>
              <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                GneroAI Chat
              </h3>
              <p className="text-base font-medium leading-relaxed text-body-color border-t border-body-color/10 pt-5 dark:border-white/10">
                专为生命科学领域设计的智能对话助手，深度理解生物学语义，助力科研探索。
              </p>
            </div>
          </div>

          {/* GTC-Agent */}
          <div className="w-full">
            <div className="wow fadeInUp group relative z-10 rounded-sm bg-white p-8 shadow-three duration-300 hover:shadow-one dark:bg-gray-dark sm:p-11 lg:p-8 xl:p-11" data-wow-delay=".15s">
              <div className="mb-8 flex items-center justify-between">
                <div className="flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary transition-all group-hover:bg-opacity-100 group-hover:text-white">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor">
                    <path d="M28 4H4C2.9 4 2 4.9 2 6V26C2 27.1 2.9 28 4 28H28C29.1 28 30 27.1 30 26V6C30 4.9 29.1 4 28 4ZM28 26H4V6H28V26Z" />
                    <path d="M18 10H8V12H18V10Z" />
                    <path d="M24 14H8V16H24V14Z" />
                    <path d="M24 18H8V20H24V18Z" />
                    <path d="M14 22H8V24H14V22Z" />
                  </svg>
                </div>
                <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                  推理驱动
                </span>
              </div>
              <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                GneroAI Agent
              </h3>
              <p className="text-base font-medium leading-relaxed text-body-color border-t border-body-color/10 pt-5 dark:border-white/10">
                自动化的生信流程执行代理，智能管理任务流，实现零代码复杂数据分析。
              </p>
            </div>
          </div>

          {/* GTC-Skills */}
          <div className="w-full">
            <div className="wow fadeInUp group relative z-10 rounded-sm bg-white p-8 shadow-three duration-300 hover:shadow-one dark:bg-gray-dark sm:p-11 lg:p-8 xl:p-11" data-wow-delay=".2s">
              <div className="mb-8 flex items-center justify-between">
                <div className="flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary transition-all group-hover:bg-opacity-100 group-hover:text-white">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor">
                    <path d="M16 2C8.3 2 2 8.3 2 16C2 23.7 8.3 30 16 30C23.7 30 30 23.7 30 16C30 8.3 23.7 2 16 2ZM16 26.7C10.1 26.7 5.3 21.9 5.3 16C5.3 10.1 10.1 5.3 16 5.3C21.9 5.3 26.7 10.1 26.7 16C26.7 21.9 21.9 26.7 16 26.7Z" />
                    <path d="M16 8V16L21.3 21.3" stroke="currentColor" strokeWidth="2" fill="none" />
                  </svg>
                </div>
                <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                  模块化 AI
                </span>
              </div>
              <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                GneroAI Skills
              </h3>
              <p className="text-base font-medium leading-relaxed text-body-color border-t border-body-color/10 pt-5 dark:border-white/10">
                模块化的 AI 技能插件库，快速为现有系统赋能，灵活应对多样化场景需求。
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <p className="text-lg font-semibold text-primary">
            更多 AI 产品矩阵持续构建中，期待与您共同见证生命科学的智能化未来。
          </p>
        </div>
      </div>
    </section>
  );
};

export default GneroAIContent;
