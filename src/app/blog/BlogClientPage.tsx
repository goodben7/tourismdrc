'use client';

import Link from "next/link";
import Image from "next/image";
import { BookOpen, ArrowRight, Clock, Bell, Sparkles, Layout } from "lucide-react";
import { useTranslation } from "@/i18n/LanguageProvider";
import { ROUTES } from "@/lib/constants";

const comingSoonPosts = [
  {
    slug: "virunga-guide",
    image: "/images/destinations/vi-1.jpg",
    gradient: "from-emerald-600 to-teal-600",
    category: { fr: "Safari", en: "Safari" },
    title: { fr: "Guide Complet du Parc des Virunga", en: "Complete Guide to Virunga National Park" },
    excerpt: {
      fr: "Tout ce que vous devez savoir pour préparer votre trekking gorilles dans le plus ancien parc d'Afrique.",
      en: "Everything you need to know to prepare your gorilla trekking in Africa's oldest park.",
    },
    readTime: "8 min",
  },
  {
    slug: "kinshasa-guide",
    image: "/images/destinations/k-2.jpg",
    gradient: "from-blue-600 to-indigo-600",
    category: { fr: "Culture", en: "Culture" },
    title: { fr: "Guide de Kinshasa : Que Voir et Faire", en: "Kinshasa Guide: What to See and Do" },
    excerpt: {
      fr: "Les incontournables de la plus grande ville francophone du monde : musées, marchés, musique et gastronomie.",
      en: "The must-sees of the world's largest French-speaking city: museums, markets, music and gastronomy.",
    },
    readTime: "6 min",
  },
  {
    slug: "conseils-voyage-rdc",
    image: "/images/destinations/vi-8.jpeg",
    gradient: "from-amber-600 to-orange-600",
    category: { fr: "Conseils", en: "Tips" },
    title: { fr: "10 Conseils pour Voyager en RDC", en: "10 Tips for Traveling to the DRC" },
    excerpt: {
      fr: "Visa, santé, monnaie, sécurité... Tout ce qu'il faut savoir avant de partir en République Démocratique du Congo.",
      en: "Visa, health, currency, safety... Everything you need to know before traveling to the Democratic Republic of Congo.",
    },
    readTime: "5 min",
  }
];

export default function BlogPage() {
  const { t, locale } = useTranslation();
  const lang = locale as "fr" | "en";

  return (
    <div className="min-h-screen bg-[#FBFBFF]">
      {/* Hero Section - Compact & Cinematic (Inspired by Destinations) */}
      <section className="relative pt-28 pb-16 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/destinations/vi-2.jpg"
            alt="TourismDRC Blog Insights"
            fill
            className="w-full h-full object-cover opacity-40 scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-[9px] font-black uppercase tracking-[0.25em] mb-4 backdrop-blur-md">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-500"></span>
              </span>
              {t('blog_page.noticeTitle')}
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight leading-none uppercase">
              {t('blog_page.insightsTitle')}
            </h1>
            <p className="text-sm md:text-base text-slate-300 font-light leading-relaxed max-w-lg">
              {t('blog_page.heroSubtitle')}
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
                <Layout className="w-10 h-10" />
              </div>

              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 tracking-tight">
                {t('blog_page.comingSoonTitle')}
              </h2>

              <p className="text-slate-500 text-lg font-light leading-relaxed max-w-2xl mx-auto mb-10">
                {t('blog_page.noticeDesc')}
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
                  href={ROUTES.home}
                  className="px-8 h-14 rounded-full bg-slate-50 text-slate-600 flex items-center gap-3 font-bold text-sm hover:bg-slate-100 transition-all duration-300"
                >
                  {t('nav.home')}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Content Grid */}
      <section className="py-24 bg-white border-t border-slate-100 relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -skew-x-12 translate-x-1/2 pointer-events-none" />

        <div className="container-custom relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                {t('blog_page.plannedContent')}
              </h2>
            </div>
            <p className="text-slate-500 font-light max-w-sm">
              {t('blog_page.comingSoonText')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            {comingSoonPosts.map((post, i) => (
              <div
                key={post.slug}
                className="group relative flex flex-col bg-white rounded-[2.5rem] border border-slate-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-700 overflow-hidden"
              >
                {/* Image Header */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title[lang]}
                    fill
                    className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors" />

                  {/* Category Badge overlay */}
                  <div className="absolute top-6 left-6">
                    <div className={`px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-slate-900 text-[10px] font-black uppercase tracking-widest shadow-sm`}>
                      {post.category[lang]}
                    </div>
                  </div>

                </div>

                <div className="p-8 pt-10 flex flex-col flex-1">
                  <div className="mb-4 flex items-center gap-3 text-slate-400 text-[10px] font-bold uppercase tracking-widest">
                    <Clock className="w-3.5 h-3.5 text-primary-500" />
                    {post.readTime}
                  </div>

                  <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-4 leading-[1.2] group-hover:text-primary-600 transition-colors duration-300">
                    {post.title[lang]}
                  </h3>

                  <p className="text-slate-500 text-sm font-light leading-relaxed mb-8 flex-1">
                    {post.excerpt[lang]}
                  </p>

                  <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-amber-500">
                      <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                      {t('blog_page.pending')}
                    </div>
                    <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 group-hover:bg-primary-50 group-hover:text-primary-500 transition-all duration-500">
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <div className="inline-block p-1 rounded-full bg-slate-50 border border-slate-100 shadow-sm">
              <div className="flex items-center gap-4 px-6 py-3">
                <p className="text-sm font-bold text-slate-500">{t('blog_page.stayTuned')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
