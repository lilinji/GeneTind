# AGENTS.md - GeneTind Web (Startup Next.js) AI Agent 指南

欢迎来到 **GeneTind（金泰生命科学智能计算平台）** 前端项目。本文档作为 AI Agent（包含 Antigravity、Claude Code、Cursor、Copilot 等智能体）在参与本项目开发、维护、重构与功能扩展时的**核心操作规范与架构准则**。

---

## 1. 项目定位与核心愿景

- **项目名称**：GeneTind Vision / Startup Next.js
- **业务使命**：“让生命无法计算的价值！”——专注于生命科学 IT 数据分析、生物多组学智能计算、AI 算力基础设施（HPC 集群 / 异构服务器）以及 GneroAI 生物智能平台。
- **主要模块**：
  - **HPC 智算平台** (`/hpc`)：AI 算力服务器、超融合机柜、算力拓扑与服务器品牌矩阵。
  - **GneroAI** (`/gneroai`)：生命科学多组学智能分析一体机、LIMS 系统与分析流程。
  - **GneSkills / OpenClaw**：面向生信 AI 的 Agent 技能库与智能私人助理实战。
  - **核心展示**：Hero 轮播、Features 特性矩阵、Video 品牌宣传、Testimonials 用户口碑、Pricing 商业方案、Blog 资讯。

---

## 2. 技术栈规格 (Tech Stack)

| 领域 | 核心技术与版本 | 说明 |
| :--- | :--- | :--- |
| **基础框架** | **Next.js 16.0.10 (App Router)** | 基于 React 19，全面采用 Server Components 优先架构 |
| **核心视图库** | **React 19.2.0 / React-DOM 19.2.0** | 最新并发特性、React Server Components |
| **语言** | **TypeScript 5.3+** | 严格类型检查，杜绝无意义的 `any` |
| **样式方案** | **Tailwind CSS v4.1.3** | 采用 CSS 驱动的 `@theme`（无 `tailwind.config.js`） |
| **国际化** | **next-intl 4.8.3** | 中文 `zh` (默认) 与 英文 `en` 双语多语言路由 |
| **动画效果** | **motion 12.35.0 (Framer Motion)** | 平滑微交互、滚动动画与卡片动态展示 |
| **图标库** | **lucide-react** | 轻量现代线性图标 |
| **主题切换** | **next-themes** | 支持 Light / Dark 双色系与持久化切换 |
| **包管理器** | **pnpm** (推荐) / npm | 根目录附带 `pnpm-lock.yaml` |

---

## 3. 核心目录架构

```text
├── messages/                  # 国际化文案字典 (next-intl)
│   ├── zh.json                # 中文词条（主语言）
│   └── en.json                # 英文词条
├── public/                    # 静态静态资源 (images, icons, fonts)
├── src/
│   ├── app/
│   │   └── [locale]/          # 国际化动态根路由
│   │       ├── layout.tsx     # 根布局（Providers, Header, Footer）
│   │       ├── page.tsx       # 首页组合
│   │       ├── hpc/           # HPC 算力平台专属页面
│   │       ├── gneroai/       # GneroAI 专属页面
│   │       ├── about/         # 关于我们
│   │       ├── blog/          # 博客与文章列表
│   │       ├── contact/       # 商务合作与支持
│   │       └── ...
│   ├── components/            # 业务组件库（按功能域划分）
│   │   ├── HPC/               # HPC 算力与供应商跑马灯组件
│   │   ├── GneroAI/           # GneroAI 专属组件
│   │   ├── Hero/              # 首页首屏轮播与视觉组件
│   │   ├── Header/            # 导航栏（响应式菜单、语言切换、主题切换）
│   │   ├── Footer/            # 页脚与企业信息
│   │   ├── Features/          # 平台核心能力卡片
│   │   ├── Common/            # SectionTitle, Breadcrumb, ScrollUp 等通用组件
│   │   └── ui/                # 基础原子 UI 组件
│   ├── i18n/                  # 国际化配置逻辑
│   │   ├── routing.ts         # 路由定义 (locales: ['zh', 'en'], default: 'zh')
│   │   ├── request.ts         # 服务端请求时字典注入
│   │   └── navigation.ts      # 本地化 Link, useRouter, usePathname 导出
│   ├── lib/
│   │   └── utils.ts           # 通用工具函数 (cn = clsx + tailwind-merge)
│   ├── styles/
│   │   └── index.css          # 全局样式、Tailwind v4 @theme 变量与深色模式定制
│   ├── types/                 # 全局业务类型定义 (blog, brand, feature, menu 等)
│   └── proxy.ts               # next-intl 路由代理拦截器 (Middleware)
├── next.config.js             # Next.js 配置（包含 next-intl 包装与图片域名配置）
└── package.json               # 依赖管理与项目脚本
```

---

## 4. 开发工作流与常用命令

所有 AI Agent 执行终端任务时，必须在工作区根目录下使用以下命令：

```bash
# 启动本地开发服务 (默认 http://localhost:3000)
pnpm dev

# 执行生产构建检查 (修改关键代码或发布前必测)
pnpm build

# 运行代码规范检查
pnpm lint

# 启动构建产物 (生产模式预览)
pnpm start
```

---

## 5. Agent 编码规范与架构准则

### 5.1 React 19 & Next.js 16 架构规范
1. **服务端组件优先 (RSC First)**：
   - 页面和容器组件默认保持为 Server Component，利于 SEO 和减小首屏 JS 体积。
   - 仅在需要使用客户端 Hooks (`useState`, `useEffect`, `useRef`)、浏览器原生 API、第三方交互库或 `motion` 动画时，在文件顶部显式声明 `"use client"`。
2. **图片加载规范**：
   - 一律优先使用 `next/image` 的 `<Image>` 组件，必须提供明确的 `alt` 文本与 `width`/`height`（或配合 `fill` 与父容器 `relative`）。
   - 外部图片引用需确保符合 `next.config.js` 中的 `remotePatterns` 策略。

### 5.2 国际化 (i18n) 强制规范
1. **绝不硬编码界面文案**：
   - 组件内所有面向用户的文本，必须抽取到 `messages/zh.json` 与 `messages/en.json` 中。
   - **双语同步原则**：新增或修改任意文案键值时，**必须同时更新 `zh.json` 与 `en.json`**，防止缺失键导致运行时降级或空白。
2. **多语言导航与路由**：
   - 站内跳转链接必须使用从 `@/i18n/navigation` 导出的 `Link`，**严禁**直接从 `next/navigation` 或 `next/link` 导入未经本地化包装的原生链接，以确保语言前缀（`/zh`、`/en`）正确保留。
   - 客户端编程式导航使用 `@/i18n/navigation` 的 `useRouter` 与 `usePathname`。

### 5.3 Tailwind CSS v4 样式规范
1. **Tailwind v4 配置感知**：
   - 本项目已升级至 Tailwind CSS v4，自定义设计 Token（色板、断点、阴影等）统一在 `src/styles/index.css` 的 `@theme` 块中配置。**严禁新建或恢复旧版的 `tailwind.config.js`**。
2. **类名合并与动态样式**：
   - 条件拼接类名时必须使用 `@/lib/utils` 中的 `cn(...)` 工具函数。
3. **深浅色模式适配**：
   - 保证组件在亮色与暗色模式下均拥有优良的对比度与视觉一致性。暗色模式采用 Tailwind 的 `dark:` 变体（配置为 `@custom-variant dark (&:is(.dark *));`）。

### 5.4 视觉与用户体验标准
- **高级工业质感**：GeneTind 面向生命科学、生物医学与 AI 算力领域，UI 风格应保持科技感、克制、现代且严谨，杜绝粗糙的廉价渐变与未对齐的网格。
- **微交互与动画**：使用 `motion` 时保持过渡自然、轻巧，避免过长或生硬的弹簧动画影响页面响应度。

---

## 6. Agent 协作行为守则

1. **先审视后改动**：在修改已有组件或模块前，先查阅相关文件及其引用的上下文（如关联的 `messages/*.json` 与 `src/types/*.ts`）。
2. **保护既有代码与注释**：除非属于废弃代码或重构目标，不得擅自删除原作者的业务注释、版权说明或合法配置。
3. **严格自查与验证**：
   - 完成关键改动后，主动运行 `pnpm build` 或 `pnpm lint` 验证是否存在类型报错或编译错误。
   - 绝不在存在编译未决报错的状态下宣布任务完成。
4. **Git 提交信息规范**：遵循 Conventional Commits 规范，例如：
   - `feat: 添加 HPC 算力监控实时图表组件`
   - `fix: 修复中英文切换时导航菜单激活状态丢失问题`
   - `style: 优化 GneroAI 详情卡片在移动端的布局排版`
   - `docs: 更新 AGENTS.md 规范与配置说明`
