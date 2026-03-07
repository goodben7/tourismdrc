'use client';

import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "@/i18n/LanguageProvider";
import { ROUTES } from "@/lib/constants";
import { ArrowRight, Star, Shield, Globe, Award, Bell, Layout, Sparkles } from "lucide-react";

export default function PartnersPage() {
  const { t, locale } = useTranslation();
  const lang = locale as "fr" | "en";

  return (
    <div className="min-h-screen bg-[#FBFBFF]">
      {/* Hero Section - Compact & Cinematic (Inspired by Blog/Destinations) */}
      <section className="relative pt-28 pb-16 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/destinations/ki-4.jpg"
            alt="TourismDRC Partners"
            fill
            className="w-full h-full object-cover opacity-40 scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-[9px] font-black uppercase tracking-[0.25em] mb-4 backdrop-blur-md">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-500"></span>
              </span>
              {t('partners_page.noticeTitle')}
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight leading-none uppercase">
              {t('partners_page.heroTitle')}
            </h1>
            <p className="text-sm md:text-base text-slate-300 font-light leading-relaxed max-w-lg">
              {t('partners_page.heroSubtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Main Notice Section */}
      <section className="py-24 relative z-40 bg-[#FBFBFF]">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] border border-slate-100 relative overflow-hidden text-center group">
              {/* Background accent */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-2 bg-gradient-to-r from-transparent via-primary-500 to-transparent" />

              <div className="w-20 h-20 rounded-3xl bg-primary-50 flex items-center justify-center text-primary-500 mx-auto mb-8 shadow-inner group-hover:scale-110 transition-transform duration-500">
                <Shield className="w-10 h-10" />
              </div>

              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 tracking-tight">
                {t('partners_page.comingSoonTitle')}
              </h2>

              <p className="text-slate-500 text-lg font-light leading-relaxed max-w-2xl mx-auto mb-10">
                {t('partners_page.noticeDesc')}
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href={ROUTES.contact}
                  className="px-8 h-14 rounded-full bg-slate-900 text-white flex items-center gap-3 font-bold text-sm hover:bg-primary-600 transition-all duration-300 shadow-xl shadow-slate-900/10"
                >
                  <Bell className="w-4 h-4" />
                  {t('blog_page.stayNotified')}
                </Link>
                <Link
                  href={ROUTES.contact}
                  className="px-8 h-14 rounded-full bg-slate-50 text-slate-600 flex items-center gap-3 font-bold text-sm hover:bg-slate-100 transition-all duration-300"
                >
                  {lang === "fr" ? "Nous Contacter" : "Contact Us"}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Opportunities Section */}
      <section className="py-24 bg-white border-t border-slate-100 relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -skew-x-12 translate-x-1/2 pointer-events-none" />

        <div className="container-custom relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                {t('partners_page.becomePartner')}
              </h2>
            </div>
            <p className="text-slate-500 font-light max-w-sm">
              {t('partners_page.becomePartnerText')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Globe, title: { fr: "Visibilité", en: "Visibility" }, desc: { fr: "Exposez votre service à une clientèle internationale.", en: "Expose your service to an international clientele." } },
              { icon: Shield, title: { fr: "Confiance", en: "Trust" }, desc: { fr: "Rejoignez un réseau de prestataires rigoureusement sélectionnés.", en: "Join a network of rigorously selected providers." } },
              { icon: Award, title: { fr: "Excellence", en: "Excellence" }, desc: { fr: "Partagez nos standards de qualité élevés.", en: "Share our high quality standards." } },
              { icon: Star, title: { fr: "Croissance", en: "Growth" }, desc: { fr: "Développez votre activité avec TourismDRC.", en: "Develop your business with TourismDRC." } }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-[2rem] bg-[#FBFBFF] border border-slate-100 hover:border-primary-100 hover:shadow-xl hover:shadow-primary-500/5 transition-all duration-500">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary-500 mb-6">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="font-black text-slate-900 mb-2">{item.title[lang]}</h3>
                <p className="text-slate-500 text-sm font-light leading-relaxed">{item.desc[lang]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
