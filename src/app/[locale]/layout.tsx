import { Inter, Outfit } from "next/font/google";
import { Metadata } from "next";
import Script from "next/script";
import "../../styles/index.css";
import ClientLayout from "./ClientLayout";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

const inter = Inter({ subsets: ["latin"] });
const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "吉因丰科技 | GneroAI 智能平台",
  description: "以 AI 为核心，深度融合多组学、生物计算与智能分析能力，为生命科学研究与产业创新提供一体化智能平台。",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
      { url: "/web-app-manifest-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/web-app-manifest-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/web-app-manifest-192x192.png", sizes: "192x192", type: "image/png" },
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
      <body className={`bg-[#FCFCFC] dark:bg-black ${outfit.className}`}>
        <Script defer src="https://cloud.umami.is/script.js" data-website-id="7d79219d-6f80-412c-b896-2d508b01940a" />
        <NextIntlClientProvider messages={messages}>
          <ClientLayout>{props.children}</ClientLayout>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
