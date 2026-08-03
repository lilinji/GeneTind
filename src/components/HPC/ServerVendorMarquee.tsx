"use client";

import { Link } from "@/i18n/navigation";

const vendors = [
  {
    id: "dell",
    name: "戴尔科技 DELL",
    badge: "DELL PowerEdge GPU 服务器",
    desc: "8卡 NVLink 全互联 | 原厂授权代理",
    color: "from-blue-600/20 to-blue-500/10 border-blue-500/30 text-blue-400",
    hoverBg: "hover:border-blue-500/60",
    icon: "💻",
  },
  {
    id: "inspur",
    name: "浪潮信息 Inspur",
    badge: "浪潮 NF5488 / NF5688",
    desc: "4U 8卡高密 AI 算力旗舰",
    color: "from-indigo-600/20 to-indigo-500/10 border-indigo-500/30 text-indigo-400",
    hoverBg: "hover:border-indigo-500/60",
    icon: "🌊",
  },
  {
    id: "sugon",
    name: "中科曙光 Sugon",
    badge: "曙光冷锋 / 硅立方",
    desc: "相变/冷板式浸没液冷集群",
    color: "from-cyan-600/20 to-cyan-500/10 border-cyan-500/30 text-cyan-400",
    hoverBg: "hover:border-cyan-500/60",
    icon: "❄️",
  },
  {
    id: "supercloud",
    name: "超云 SuperCloud",
    badge: "超云 R8448 / R6240",
    desc: "高性价比 AI 算力与生信节点",
    color: "from-purple-600/20 to-purple-500/10 border-purple-500/30 text-purple-400",
    hoverBg: "hover:border-purple-500/60",
    icon: "☁️",
  },
  {
    id: "huawei",
    name: "华为科技 Huawei",
    badge: "华为 Atlas 800 / FusionServer",
    desc: "鲲鹏 + 昇腾全栈信创算力",
    color: "from-red-600/20 to-red-500/10 border-red-500/30 text-red-400",
    hoverBg: "hover:border-red-500/60",
    icon: "🔴",
  },
  {
    id: "lenovo",
    name: "联想 ThinkSystem",
    badge: "ThinkSystem SR675 V3",
    desc: "高性能计算与大模型集群",
    color: "from-amber-600/20 to-amber-500/10 border-amber-500/30 text-amber-400",
    hoverBg: "hover:border-amber-500/60",
    icon: "🚀",
  },
  {
    id: "h3c",
    name: "新华三 H3C",
    badge: "UniServer R5300 G6",
    desc: "异构 AI 算力加速平台",
    color: "from-teal-600/20 to-teal-500/10 border-teal-500/30 text-teal-400",
    hoverBg: "hover:border-teal-500/60",
    icon: "🛡️",
  },
];

// Duplicate vendors list to make seamless infinite loop
const doubleVendors = [...vendors, ...vendors];

const ServerVendorMarquee = () => {
  return (
    <section className="relative z-10 py-12 bg-gray-50/60 dark:bg-dark/60 overflow-hidden border-y border-gray-200/60 dark:border-white/10">
      {/* Background glow lines */}
      <div className="absolute inset-0 bg-[radial-gradient(#4a6cf7_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none"></div>

      <div className="container mb-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </span>
            <h3 className="text-base sm:text-lg font-bold text-black dark:text-white">
              合作服务器品牌与硬件厂商代理
            </h3>
            <span className="text-xs text-body-color dark:text-white/60 hidden md:inline">
              (点击品牌直接查看原厂服务器型号)
            </span>
          </div>
          <Link
            href="/hpc"
            className="text-xs font-bold text-primary hover:underline flex items-center gap-1"
          >
            <span>查看完整 HPC 产品矩阵</span>
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Marquee Track Container */}
      <div className="relative w-full overflow-hidden group">
        {/* Left and Right Fade Gradients */}
        <div className="absolute top-0 left-0 bottom-0 w-20 z-20 bg-gradient-to-r from-gray-50 dark:from-dark to-transparent pointer-events-none"></div>
        <div className="absolute top-0 right-0 bottom-0 w-20 z-20 bg-gradient-to-l from-gray-50 dark:from-dark to-transparent pointer-events-none"></div>

        {/* Scrolling flex track */}
        <div className="flex w-max space-x-6 animate-marquee group-hover:[animation-play-state:paused]">
          {doubleVendors.map((vendor, index) => (
            <Link
              key={`${vendor.id}-${index}`}
              href={`/hpc?vendor=${vendor.id}`}
              className={`flex items-center gap-4 shrink-0 rounded-2xl bg-white dark:bg-gray-dark/80 backdrop-blur-xl border border-gray-200/80 dark:border-white/10 px-5 py-4 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl ${vendor.hoverBg}`}
            >
              <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${vendor.color} text-2xl font-bold border shrink-0`}>
                {vendor.icon}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-sm font-extrabold text-black dark:text-white">
                    {vendor.name}
                  </h4>
                  <span className="text-[10px] font-semibold text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                    正品代理
                  </span>
                </div>
                <div className="text-xs font-semibold text-primary mt-0.5">
                  {vendor.badge}
                </div>
                <div className="text-[11px] text-body-color dark:text-white/60">
                  {vendor.desc}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServerVendorMarquee;
