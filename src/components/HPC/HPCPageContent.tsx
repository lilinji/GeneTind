"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import { Link } from "@/i18n/navigation";
import SectionTitle from "../Common/SectionTitle";

type CategoryType = "all" | "server" | "storage" | "network" | "software";

interface ProductItem {
  id: string;
  category: "server" | "storage" | "network" | "software";
  categoryBadge: string;
  categoryBadgeColor: string;
  name: string;
  model: string;
  tagline: string;
  description: string;
  specs: { label: string; value: string }[];
  highlights: string[];
  icon: React.ReactNode;
}

const HPCPageContent = () => {
  const t = useTranslations("HPCPage");
  const searchParams = useSearchParams();
  const initialCategory = (searchParams.get("category") as CategoryType) || "all";

  const [activeCategory, setActiveCategory] = useState<CategoryType>("all");

  useEffect(() => {
    if (initialCategory && ["all", "server", "storage", "network", "software"].includes(initialCategory)) {
      setActiveCategory(initialCategory as CategoryType);
    }
  }, [initialCategory]);

  const products: ProductItem[] = [
    // 1. 服务器 (Servers / Compute Nodes)
    {
      id: "srv-8g-liquid",
      category: "server",
      categoryBadge: "AI 算力服务器",
      categoryBadgeColor: "bg-blue-500/15 text-blue-400 border-blue-500/30",
      name: "GeneTind HPC-8000G 液冷智算服务器",
      model: "GT-HPC-8000G-LQD",
      tagline: "8卡 NVLink 全互联 | 液冷冷板式散热 | 超大内存带宽",
      description: "专为百亿/千亿级 AI 生物大模型训练与全基因组高吞吐比对打造。支持 8 x SXM5 GPU 高速互联，相较风冷散热能效比提升 40%，噪声降低 50%。",
      specs: [
        { label: "算力配置", value: "8 x NVIDIA H100/H800/L40S NVLink" },
        { label: "处理器", value: "双路 AMD EPYC 9004 / Intel 5th Xeon" },
        { label: "内存容量", value: "最高 3TB DDR5 4800MHz ECC" },
        { label: "网络接口", value: "8 x 400G NDR InfiniBand + 2 x 10GbE" },
      ],
      highlights: ["高效冷板式液冷 PUE < 1.15", "NVLink 900GB/s 内部点对点互联", "生信 WGS/WES 深度学习算法原厂优化"],
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
    },
    {
      id: "srv-blade-node",
      category: "server",
      categoryBadge: "高密度 HPC 节点",
      categoryBadgeColor: "bg-cyan-500/15 text-cyan-400 border-cyan-500/30",
      name: "GeneTind HPC-4000C 高密度计算节点",
      model: "GT-HPC-4000C-BLD",
      tagline: "2U 4节点高密架构 | 组学数据分析首选 | 多路 PCIe 扩展",
      description: "在 2U 标准机架空间内集成 4 个独立高性能计算节点，适用于三代测序组装、分子动力学模拟及蛋白质结构预测（AlphaFold）集群调度。",
      specs: [
        { label: "节点密度", value: "2U 4-Node 模块化热插拔" },
        { label: "单节点 CPU", value: "双路 Intel Xeon Platinum 8480+" },
        { label: "GPU/NPU", value: "单节点支持 2 x PCIe Gen5 GPU" },
        { label: "扩展存储", value: "24 x U.2 NVMe 热插拔硬盘位" },
      ],
      highlights: ["高密度共享冗余电源与风扇", "针对 GATK / BLAST / BWA 深度并行优化", "单机柜提供超 2500 物理核心算力"],
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },

    // 2. 存储 (High-Performance Storage)
    {
      id: "stg-nvme-flash",
      category: "storage",
      categoryBadge: "全闪并行存储",
      categoryBadgeColor: "bg-purple-500/15 text-purple-400 border-purple-500/30",
      name: "GeneTind TeraFS-NVMe 极速分布式文件存储",
      model: "GT-TeraFS-NVMe-100G",
      tagline: "百GB/s 读写带宽 | POSIX/Lustre 客户端 | 亚毫秒级 IOPS",
      description: "专为生信下机数据拆分、海量 BAM/CRAM 组学文件并行分析构建的全闪分布式存储。有效消除 AI 训练中的 IO 饥饿瓶颈。",
      specs: [
        { label: "读写带宽", value: "单集群最高 200 GB/s 聚合吞吐" },
        { label: "延迟与 IOPS", value: "< 150μs 极低延迟，1,000,000+ IOPS" },
        { label: "文件系统", value: "支持 Lustre / GPFS / POSIX 原生接口" },
        { label: "容量扩展", value: "从 50TB 软扩展至 20PB 统一命名空间" },
      ],
      highlights: ["全 Flash NVMe PCIe 5.0 架构", "客户端并发缓存加速与RDMA零拷贝", "自动冷热数据多级迁移（SSD-HDD-S3）"],
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
    },
    {
      id: "stg-hybrid-archive",
      category: "storage",
      categoryBadge: "海量归档存储",
      categoryBadgeColor: "bg-indigo-500/15 text-indigo-400 border-indigo-500/30",
      name: "GeneTind BioVault 混合海量组学归档存储",
      model: "GT-BioVault-PB",
      tagline: "EB 级弹性扩展 | 纠删码高可靠性 | 低成本生命周期管理",
      description: "面向医疗临床测序数据、大型队列人群基因组库提供安全长期的合规数据存储，内置重消压缩与死锁数据防护机制。",
      specs: [
        { label: "存储密度", value: "4U 108 盘位超高密机箱" },
        { label: "容灾机制", value: "8+4 纠删码 (Erasure Coding) 高冗余" },
        { label: "对象兼容", value: "S3 / HDFS / NFS / SMB 全协议支持" },
        { label: "数据完整性", value: "端到端校验码与自愈擦除算法" },
      ],
      highlights: ["单 GB 综合存储成本降低 60%", "合规性审计与数据加密 WORM 机制", "无缝对接私有云与公共云混合归档"],
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20" />
        </svg>
      ),
    },

    // 3. 网络安全产品 (Network & Security)
    {
      id: "net-infiniband-switch",
      category: "network",
      categoryBadge: "智算网络交换机",
      categoryBadgeColor: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
      name: "GeneTind Quantum-NDR 400G InfiniBand 交换机",
      model: "GT-NDR-400G-64P",
      tagline: "64 端口 400G NDR | 0 丢包网络 | 硬件网内计算 (SHARP)",
      description: "打造千万核级计算节点的无阻塞高敏敏捷网络。提供极低通信时延与网络内数据归约计算（In-Network Computing），加速分布式 AI 训练。",
      specs: [
        { label: "总吞吐量", value: "51.2 Tbps 聚合交换容量" },
        { label: "端口配置", value: "64 x OSFP 400Gb/s NDR 端口" },
        { label: "延迟表现", value: "超低 Cut-Through 延时 < 130ns" },
        { label: "网内计算", value: "SHARP v3 硬件规约计算加速" },
      ],
      highlights: ["拥塞控制 (Congestion Control) 智能算法", "支持 RoCE v2 无损以太网与 IB 双模运行", "自动化网络拓扑监测与故障秒级自愈"],
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      id: "net-hpc-sec-gateway",
      category: "network",
      categoryBadge: "智算安全防护屏障",
      categoryBadgeColor: "bg-teal-500/15 text-teal-400 border-teal-500/30",
      name: "GeneTind SecureCluster 零信任智算安全网关",
      model: "GT-SEC-CLUSTER-80G",
      tagline: "多租户逻辑隔离 | 80Gbps 硬件加密 | 基因数据安全勒索防护",
      description: "针对医疗科研与多团队合作用算场景，防范未授权访问与数据外泄。提供多租户算力隔离、数据传输加密及微隔离策略配置。",
      specs: [
        { label: "防火墙吞吐", value: "80 Gbps 硬件级包过滤线速" },
        { label: "安全模式", value: "零信任 Zero-Trust 身份认证 + 微隔离" },
        { label: "加密算法", value: "国密 SM2/SM3/SM4 & AES-256 硬件加速" },
        { label: "威胁防护", value: "AI 智能流量异常检测与 Anti-DDoS" },
      ],
      highlights: ["针对生信集群多租户资源调度的网络隔离", "敏感遗留基因组数据防泄漏 (DLP) 策略", "实时全网流量镜像分析与合规日志审计"],
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },

    // 4. HPC 软件 (HPC Software)
    {
      id: "soft-scheduler-ai",
      category: "software",
      categoryBadge: "调度与作业管理",
      categoryBadgeColor: "bg-amber-500/15 text-amber-400 border-amber-500/30",
      name: "GeneTind SmartScheduler HPC/AI 资源调度系统",
      model: "GT-Software-Scheduler-v4",
      tagline: "异构 GPU/CPU 统一调度 | 动态抢占式优先级 | 组学 Workflow 引擎",
      description: "集成了 Slurm / PBS 调度内核与云计算灵活性的下一代算力管理平台。支持生信分析 Pipeline 自动图依赖关联调度与 GPU 显存微粒切割（MIG）。",
      specs: [
        { label: "调度规模", value: "支持 100,000+ 节点，单日百万级作业" },
        { label: "异构支持", value: "NVIDIA/AMD/华为昇腾 GPU 及各种 X86/ARM CPU" },
        { label: "生信整合", value: "内置 Nextflow / WDL / Snakemake 插件" },
        { label: "显存隔离", value: "精细化 GPU 分割与算力配额感知" },
      ],
      highlights: ["根据作业计算特征动态自动配比 CPU与 GPU 资源", "交互式 Web 命令行与仪表盘一键提交作业", "智能算力计费与多部门成本拆分（Chargeback）"],
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      id: "soft-bio-accel-suite",
      category: "software",
      categoryBadge: "生信算法加速软件",
      categoryBadgeColor: "bg-orange-500/15 text-orange-400 border-orange-500/30",
      name: "GeneTind BioAccel-GPU 生信算法硬件加速套件",
      model: "GT-Software-BioAccel-v3",
      tagline: "比传统 CPU 快 10-30 倍 | 30x WGS 分析缩短至 15 分钟",
      description: "深度利用 GPU CUDA 硬件特性的高并行生信加速软件库。重构了 BWA-MEM、GATK HaplotypeCaller、Samtools 等经典生信分析工具。",
      specs: [
        { label: "加速倍率", value: "核心比对与变异检测算法加速 10x - 30x" },
        { label: "精度验证", value: "结果与 GATK 官方标准流 99.999% 一致" },
        { label: "硬件环境", value: "兼容标准 Linux、Docker 及 K8s 容器化部署" },
        { label: "算法覆盖", value: "WGS, WES, RNA-seq, 单细胞, 三代 Long-Reads" },
      ],
      highlights: ["单卡 GPU 每日可处理数十人份 30x 人类全基因组数据", "降低 70% 的计算服务器硬件采购与机房能耗成本", "原厂提供算法与 Pipeline 定制二次开发支持"],
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ];

  const filteredProducts = activeCategory === "all"
    ? products
    : products.filter((p) => p.category === activeCategory);

  const categories = [
    { id: "all", label: t("all_tab"), icon: "⚡" },
    { id: "server", label: t("server_tab"), icon: "🖥️" },
    { id: "storage", label: t("storage_tab"), icon: "💾" },
    { id: "network", label: t("network_tab"), icon: "🛡️" },
    { id: "software", label: t("software_tab"), icon: "⚙️" },
  ];

  const architectureLayers = [
    {
      step: "01",
      title: t("arch_layer1_name"),
      desc: t("arch_layer1_desc"),
      color: "from-blue-500 to-indigo-600",
    },
    {
      step: "02",
      title: t("arch_layer2_name"),
      desc: t("arch_layer2_desc"),
      color: "from-indigo-600 to-purple-600",
    },
    {
      step: "03",
      title: t("arch_layer3_name"),
      desc: t("arch_layer3_desc"),
      color: "from-purple-600 to-cyan-600",
    },
    {
      step: "04",
      title: t("arch_layer4_name"),
      desc: t("arch_layer4_desc"),
      color: "from-cyan-600 to-teal-500",
    },
  ];

  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Dynamic background lights and network wire grid */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:28px_28px]"></div>
      <div className="absolute top-1/3 left-10 -z-10 w-96 h-96 bg-primary/20 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-1/3 right-10 -z-10 w-96 h-96 bg-indigo-500/20 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container">
        {/* Section Heading */}
        <div className="flex flex-wrap justify-center relative z-20">
          <div className="w-full px-4">
            <SectionTitle
              title={t("tagline")}
              titleClassName="bg-clip-text text-transparent bg-gradient-to-r from-primary via-indigo-400 to-cyan-400 bg-[length:200%_auto] animate-shimmer"
              paragraph={t("description")}
              center
              mb="40px"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-3 relative z-20">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as CategoryType)}
              className={`flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-primary text-white shadow-lg shadow-primary/30 scale-105"
                  : "bg-white/80 dark:bg-gray-dark/80 text-black dark:text-white/80 border border-gray-200 dark:border-white/10 hover:border-primary/50 hover:text-primary"
              }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-20">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group relative flex flex-col justify-between rounded-2xl bg-white/70 dark:bg-gray-dark/60 backdrop-blur-xl border border-gray-200/80 dark:border-white/10 p-6 md:p-8 shadow-xl transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:border-primary/40 overflow-hidden"
            >
              {/* Card Header */}
              <div>
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                      {product.icon}
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold text-gray-500 dark:text-white/50 block">
                        {product.model}
                      </span>
                      <h3 className="text-xl font-bold text-black dark:text-white group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                    </div>
                  </div>
                  <span className={`inline-block rounded-md border px-3 py-1 text-xs font-semibold ${product.categoryBadgeColor}`}>
                    {product.categoryBadge}
                  </span>
                </div>

                {/* Tagline */}
                <div className="mb-4 inline-block rounded-lg bg-gray-100/80 dark:bg-white/5 px-3 py-1.5 text-xs font-semibold text-primary">
                  ✨ {product.tagline}
                </div>

                {/* Description */}
                <p className="text-sm text-body-color dark:text-white/70 leading-relaxed mb-6">
                  {product.description}
                </p>

                {/* Specs Box */}
                <div className="mb-6 rounded-xl bg-gray-50/80 dark:bg-dark/40 border border-gray-150 dark:border-white/5 p-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-black dark:text-white/90 mb-3">
                    {t("spec_label")}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {product.specs.map((s, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <span className="font-semibold text-gray-700 dark:text-white/80 shrink-0">
                          {s.label}:
                        </span>
                        <span className="text-body-color dark:text-white/60 font-mono">
                          {s.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Highlights List */}
                <div className="mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-black dark:text-white/90 mb-2">
                    {t("highlights_label")}
                  </h4>
                  <ul className="space-y-1.5 text-xs text-body-color dark:text-white/70">
                    {product.highlights.map((h, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-emerald-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="pt-4 border-t border-gray-100 dark:border-white/10 flex items-center justify-between">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary/10 hover:bg-primary px-4 py-2 text-xs font-bold text-primary hover:text-white transition-all duration-300"
                >
                  <span>{t("contact_sales")}</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
                <span className="text-xs font-mono text-gray-400 dark:text-white/40">
                  GeneTind HPC Stack
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Full-Stack Architecture Banner */}
        <div className="mt-20 relative rounded-3xl bg-gradient-to-br from-gray-900 via-dark to-black p-8 md:p-12 text-white overflow-hidden shadow-2xl border border-white/10">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/30 rounded-full blur-[120px] pointer-events-none"></div>

          <div className="relative z-10 mb-10 text-center max-w-3xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
              {t("architecture_title")}
            </h3>
            <p className="text-sm text-gray-300">
              {t("architecture_subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
            {architectureLayers.map((layer, index) => (
              <div
                key={index}
                className="relative rounded-xl bg-white/10 backdrop-blur-md border border-white/15 p-6 hover:bg-white/15 transition-all duration-300"
              >
                <div className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r ${layer.color} text-white font-mono font-bold text-sm shadow-md`}>
                  {layer.step}
                </div>
                <h4 className="text-base font-bold text-white mb-2">
                  {layer.title}
                </h4>
                <p className="text-xs text-gray-300 leading-relaxed">
                  {layer.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HPCPageContent;
