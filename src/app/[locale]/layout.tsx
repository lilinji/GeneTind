import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import { Metadata } from "next";
import Script from "next/script";
import "../../styles/index.css";
import ClientLayout from "./ClientLayout";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "GeneTind 吉因丰科技 | 生命科学 IT 数据分析与 HPC 智算平台",
  description: "以 GneroAI 与 HPC 智算算力为核心，融合多组学数据、AI 算力服务器与全闪并行存储，打造下一代生命科学智能基础设施。",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/web-app-manifest-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/web-app-manifest-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default async function RootLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const params = await props.params;
  const { locale } = params;
  
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html suppressHydrationWarning lang={locale}>
      <head />
      <body className={`bg-[#fafafa] text-zinc-900 dark:bg-[#060911] dark:text-zinc-100 antialiased selection:bg-emerald-500/20 selection:text-emerald-800 dark:selection:bg-emerald-500/30 dark:selection:text-emerald-200 ${geistSans.variable} ${geistMono.variable} ${playfair.variable} font-sans transition-colors duration-300`}>
        <Script defer src="https://cloud.umami.is/script.js" data-website-id="7d79219d-6f80-412c-b896-2d508b01940a" />
        <NextIntlClientProvider messages={messages}>
          <ClientLayout>{props.children}</ClientLayout>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
