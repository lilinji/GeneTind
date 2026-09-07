import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Features from "@/components/Features";
import HPCSection from "@/components/HPC/HPCSection";
import HPCProcessTimeline from "@/components/HPC/HPCProcessTimeline";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "GeneTind 吉因丰科技 | 生命科学 IT 数据分析与 HPC 智算平台",
  description: "以 GneroAI 与 HPC 智算算力为核心，融合多组学数据、AI 算力服务器与全闪并行存储，打造下一代生命科学智能基础设施。",
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <HPCProcessTimeline />
      <Features />
      <HPCSection />
      <Video />
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
      <Pricing />
    </>
  );
}
