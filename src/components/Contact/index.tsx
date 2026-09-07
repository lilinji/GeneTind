"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import NewsLatterBox from "./NewsLatterBox";
import {
  User,
  Mail,
  Phone,
  Tag,
  MessageSquare,
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
} from "lucide-react";

const Contact = () => {
  const t = useTranslations("Contact");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    if (status === "error") setStatus("idle");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setErrorMessage("请完整填写姓名、邮箱和留言内容");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (res.ok && result.success) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus("error");
        setErrorMessage(result.error || "邮件发送遇到问题，请重试或直接发信至负责人邮箱。");
      }
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err?.message || "网络请求失败，请检查网络连接或直接发信。");
    }
  };

  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28 transition-colors duration-300">
      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="-mx-4 flex flex-wrap">
          
          {/* Contact Form Column (Left Col 7/8) */}
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12 mb-12 lg:mb-0">
            <div className="p-1.5 sm:p-2 rounded-[2rem] border border-zinc-200/80 dark:border-white/10 bg-zinc-100/60 dark:bg-white/[0.02] shadow-sm">
              <div className="rounded-[1.6rem] bg-white dark:bg-[#090f1a] p-6 sm:p-10 lg:p-12 border border-zinc-100 dark:border-white/5">
                
                <div className="mb-8">
                  <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400 mb-3">
                    <Mail className="h-3.5 w-3.5" />
                    <span>{t("badge")}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
                    {t("title")}
                  </h2>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {t("description")}
                  </p>
                </div>

                {/* Success State Card */}
                {status === "success" ? (
                  <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-8 text-center sm:p-12">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 mb-5">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white">
                      {t("success_title")}
                    </h3>
                    <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-300 max-w-md mx-auto leading-relaxed">
                      {t("success_desc")}
                    </p>

                    <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                      <button
                        onClick={() => setStatus("idle")}
                        className="inline-flex items-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-2.5 text-sm font-semibold shadow-md transition-all"
                      >
                        <span>{t("send_another")}</span>
                      </button>
                      <a
                        href="mailto:service@genetind.com"
                        className="inline-flex items-center gap-2 rounded-full border border-zinc-300 dark:border-white/20 px-6 py-2.5 text-sm font-semibold text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-white/5 transition-all"
                      >
                        <Mail className="h-4 w-4 text-emerald-500" />
                        <span>service@genetind.com</span>
                      </a>
                    </div>
                  </div>
                ) : (
                  /* Active Form */
                  <form onSubmit={handleSubmit} noValidate>
                    {/* Error Notice */}
                    {status === "error" && (
                      <div className="mb-6 flex items-start gap-3 rounded-xl border border-rose-500/30 bg-rose-500/10 p-4 text-rose-600 dark:text-rose-400 text-sm">
                        <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
                        <div className="flex-1">
                          <div className="font-semibold">{t("error_title")}</div>
                          <div className="text-xs mt-0.5">{errorMessage}</div>
                          <div className="text-xs mt-2">
                            <span>{t("direct_email_tip")} </span>
                            <a
                              href="mailto:service@genetind.com"
                              className="font-mono underline hover:opacity-80"
                            >
                              service@genetind.com
                            </a>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="-mx-3 flex flex-wrap">
                      {/* Name Field */}
                      <div className="w-full px-3 md:w-1/2 mb-6">
                        <label
                          htmlFor="name"
                          className="mb-2 block text-xs font-semibold uppercase tracking-wider text-zinc-700 dark:text-zinc-300"
                        >
                          {t("name_label")} <span className="text-emerald-500">*</span>
                        </label>
                        <div className="relative">
                          <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder={t("name_placeholder")}
                            className="w-full rounded-xl border border-zinc-200 dark:border-white/10 bg-zinc-50 dark:bg-[#0c121e] px-4 py-3 pl-10 text-sm text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 outline-none transition-all focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                          />
                          <User className="pointer-events-none absolute left-3.5 top-3.5 h-4 w-4 text-zinc-400 dark:text-zinc-500" />
                        </div>
                      </div>

                      {/* Email Field */}
                      <div className="w-full px-3 md:w-1/2 mb-6">
                        <label
                          htmlFor="email"
                          className="mb-2 block text-xs font-semibold uppercase tracking-wider text-zinc-700 dark:text-zinc-300"
                        >
                          {t("email_label")} <span className="text-emerald-500">*</span>
                        </label>
                        <div className="relative">
                          <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder={t("email_placeholder")}
                            className="w-full rounded-xl border border-zinc-200 dark:border-white/10 bg-zinc-50 dark:bg-[#0c121e] px-4 py-3 pl-10 text-sm text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 outline-none transition-all focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                          />
                          <Mail className="pointer-events-none absolute left-3.5 top-3.5 h-4 w-4 text-zinc-400 dark:text-zinc-500" />
                        </div>
                      </div>

                      {/* Phone Field */}
                      <div className="w-full px-3 md:w-1/2 mb-6">
                        <label
                          htmlFor="phone"
                          className="mb-2 block text-xs font-semibold uppercase tracking-wider text-zinc-700 dark:text-zinc-300"
                        >
                          {t("phone_label")}
                        </label>
                        <div className="relative">
                          <input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder={t("phone_placeholder")}
                            className="w-full rounded-xl border border-zinc-200 dark:border-white/10 bg-zinc-50 dark:bg-[#0c121e] px-4 py-3 pl-10 text-sm text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 outline-none transition-all focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                          />
                          <Phone className="pointer-events-none absolute left-3.5 top-3.5 h-4 w-4 text-zinc-400 dark:text-zinc-500" />
                        </div>
                      </div>

                      {/* Subject Field */}
                      <div className="w-full px-3 md:w-1/2 mb-6">
                        <label
                          htmlFor="subject"
                          className="mb-2 block text-xs font-semibold uppercase tracking-wider text-zinc-700 dark:text-zinc-300"
                        >
                          {t("subject_label")}
                        </label>
                        <div className="relative">
                          <input
                            id="subject"
                            name="subject"
                            type="text"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder={t("subject_placeholder")}
                            className="w-full rounded-xl border border-zinc-200 dark:border-white/10 bg-zinc-50 dark:bg-[#0c121e] px-4 py-3 pl-10 text-sm text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 outline-none transition-all focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                          />
                          <Tag className="pointer-events-none absolute left-3.5 top-3.5 h-4 w-4 text-zinc-400 dark:text-zinc-500" />
                        </div>
                      </div>

                      {/* Message Field */}
                      <div className="w-full px-3 mb-6">
                        <label
                          htmlFor="message"
                          className="mb-2 block text-xs font-semibold uppercase tracking-wider text-zinc-700 dark:text-zinc-300"
                        >
                          {t("message_label")} <span className="text-emerald-500">*</span>
                        </label>
                        <div className="relative">
                          <textarea
                            id="message"
                            name="message"
                            rows={5}
                            required
                            value={formData.message}
                            onChange={handleChange}
                            placeholder={t("message_placeholder")}
                            className="w-full resize-none rounded-xl border border-zinc-200 dark:border-white/10 bg-zinc-50 dark:bg-[#0c121e] px-4 py-3 pl-10 text-sm text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 outline-none transition-all focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                          />
                          <MessageSquare className="pointer-events-none absolute left-3.5 top-3.5 h-4 w-4 text-zinc-400 dark:text-zinc-500" />
                        </div>
                      </div>

                      {/* Submit Button */}
                      <div className="w-full px-3">
                        <button
                          type="submit"
                          disabled={status === "loading"}
                          className="group inline-flex items-center justify-center gap-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 dark:bg-emerald-500 dark:hover:bg-emerald-400 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-600/20 transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 disabled:pointer-events-none cursor-pointer"
                        >
                          {status === "loading" ? (
                            <>
                              <Loader2 className="h-4 w-4 animate-spin text-white" />
                              <span>{t("submitting_button")}</span>
                            </>
                          ) : (
                            <>
                              <span>{t("submit_button")}</span>
                              <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </form>
                )}

              </div>
            </div>
          </div>

          {/* Contact Info Column (Right Col 5/4) */}
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
