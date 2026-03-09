import Breadcrumb from "@/components/Common/Breadcrumb";
import GneroAIContent from "@/components/GneroAI";
import Link from "next/link";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "GneroAI | 吉因丰科技 (GeneTind AI)",
  description: "探索 GneroAI 的无限可能。我们为生命科学提供最先进的人工智能解决方案，包括智能对话、生信代理和模块化 AI 技能库。",
};

const GneroAIPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="GneroAI 智能平台"
        description={
          <div className="space-y-6">
            <p>
              以 GneroAI 为核心，深度融合多组学、生物计算与智能分析能力，为生命科学研究与产业创新提供一体化智能平台。
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="https://gnero.genetind.com"
                target="_blank"
                className="inline-block rounded-sm bg-primary px-8 py-3 text-base font-semibold text-white duration-300 hover:bg-primary/90"
              >
                进入文档
              </Link>
              <Link
                href="https://public.genetind.com/"
                target="_blank"
                className="inline-block rounded-sm bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-3 text-base font-semibold text-white duration-300 hover:from-purple-700 hover:to-indigo-700"
              >
                ✨ 神秘功能
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
