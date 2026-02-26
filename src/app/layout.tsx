import { Inter, Outfit } from "next/font/google";
import { Metadata } from "next";
import Script from "next/script";
import "../styles/index.css";
import ClientLayout from "./ClientLayout";

const inter = Inter({ subsets: ["latin"] });
const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "吉因丰科技 | GneroAI 智能平台",
  description: "以 AI 为核心，深度融合多组学、生物计算与智能分析能力，为生命科学研究与产业创新提供一体化智能平台。",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="zh-CN">
      <head />
      <body className={`bg-[#FCFCFC] dark:bg-black ${outfit.className}`}>
        <Script defer src="https://cloud.umami.is/script.js" data-website-id="7d79219d-6f80-412c-b896-2d508b01940a" />
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
