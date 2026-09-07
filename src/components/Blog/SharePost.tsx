"use client";

import { useState } from "react";
import { Link2, Check, Share2 } from "lucide-react";

const SharePost = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="flex items-center gap-2 sm:ml-3">
      <button
        onClick={handleCopy}
        aria-label="复制文章链接"
        title={copied ? "已复制链接" : "复制文章链接"}
        className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-zinc-100 px-3 py-1.5 font-mono text-xs text-zinc-700 transition-all hover:border-emerald-500/40 hover:bg-emerald-50 hover:text-emerald-700 dark:border-white/10 dark:bg-white/[0.04] dark:text-zinc-300 dark:hover:bg-emerald-500/10 dark:hover:text-emerald-400 cursor-pointer"
      >
        {copied ? (
          <>
            <Check className="h-3.5 w-3.5 text-emerald-500" />
            <span>已复制</span>
          </>
        ) : (
          <>
            <Link2 className="h-3.5 w-3.5" />
            <span>复制链接</span>
          </>
        )}
      </button>
    </div>
  );
};

export default SharePost;
