'use client';

import {
  Compass, Calendar, Mountain, Sparkles,
  ArrowRight, Heart, Star, MapPin, Check
} from "lucide-react";
import { useTranslation } from "@/i18n/LanguageProvider";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ROUTES } from "@/lib/constants";
import CTASection from "@/components/sections/CTASection";

export default function ExperiencesPage() {
  const { t } = useTranslation();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const experiencesByType = [
    {
      titleKey: 'megaMenu.experiences.safari',
      descKey: 'megaMenu.experiences.safari_desc',
      image: '/images/destinations/vi-2.jpg',
      icon: Compass,
    },
    {
      titleKey: 'megaMenu.experiences.culture',
      descKey: 'megaMenu.experiences.culture_desc',
      image: '/images/2.jpg',
      icon: Sparkles,
    },
    {
      titleKey: 'megaMenu.experiences.adventure',
      descKey: 'megaMenu.experiences.adventure_desc',
      image: '/images/destinations/bo-10.jpg',
      icon: Mountain,
    },
    {
      titleKey: 'megaMenu.experiences.wellness',
      descKey: 'megaMenu.experiences.wellness_desc',
      image: '/images/destinations/ki-5.jpg',
      icon: Heart,
    },
  ];

  const experiencesByDuration = [
    {
      titleKey: 'megaMenu.experiences.weekend',
      descKey: 'megaMenu.experiences.weekend_desc',
      durationKey: 'experiences_page.weekend_duration',
    },
    {
      titleKey: 'megaMenu.experiences.week',
      descKey: 'megaMenu.experiences.week_desc',
      durationKey: 'experiences_page.week_duration',
    },
    {
      titleKey: 'megaMenu.experiences.extended',
      descKey: 'megaMenu.experiences.extended_desc',
      durationKey: 'experiences_page.extended_duration',
    },
    {
      titleKey: 'megaMenu.experiences.custom',
      descKey: 'megaMenu.experiences.custom_desc',
      durationKey: 'experiences_page.custom_duration',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative flex flex-col justify-center min-h-[60vh] md:min-h-[70vh] overflow-hidden">
        <Image
          src="/images/destinations/vi-8.jpeg"
          alt="Experiences Background"
          fill
          priority
          className="object-cover transition-transform duration-300 ease-out scale-110"
          style={{
            transform: `translateY(${scrollY * 0.4}px)`
          }}
        />
        {/* Gradients pour une meilleure lisibilité */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/60 via-slate-900/40 to-slate-900/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-slate-900/20 to-transparent" />

        <div className="relative z-10 container-custom mt-20 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-[10px] font-black uppercase tracking-[0.2em] text-white border border-white/20 shadow-xl mb-4">
              <Star className="h-3 w-3 text-yellow-400" />
              <span>Tourisme Exceptionnel</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight drop-shadow-lg leading-tight">
              {t('experiences_page.heroTitle')}
            </h1>

            <p className="text-lg md:text-2xl text-slate-200 font-light leading-relaxed mx-auto max-w-2xl px-4 md:px-0">
              {t('experiences_page.heroSubtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Explorer par type */}
      <section className="pt-24 pb-16 bg-slate-50 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-500 text-[9px] font-bold uppercase tracking-[0.2em] mb-6 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse" />
              {t('megaMenu.experiences.byType')}
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
              {t('experiences_page.byTypeSubtitle')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full mx-auto mt-6" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4">
            {experiencesByType.map((exp, i) => {
              const Icon = exp.icon;
              return (
                <Link
                  key={i}
                  href={ROUTES.destinations}
                  className="group relative h-[450px] rounded-[2.5rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 block"
                >
                  {/* Background Image */}
                  <Image
                    src={exp.image}
                    alt={t(exp.titleKey)}
                    fill
                    className="object-cover transition-transform duration-[10000ms] ease-out group-hover:scale-125"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Content */}
                  <div className="absolute inset-0 p-10 flex flex-col justify-end">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="mb-6 w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <Icon strokeWidth={1.5} className="w-6 h-6" />
                      </div>

                      <h3 className="font-black text-white text-3xl mb-4 tracking-tight leading-none">
                        {t(exp.titleKey)}
                      </h3>

                      <p className="text-slate-200 text-sm font-light leading-relaxed mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-2">
                        {t(exp.descKey)}
                      </p>

                      <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-white">
                        <span className="h-1 w-8 bg-primary-500 rounded-full" />
                        <span>Explorer</span>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Experiences */}
      <section className="py-24 bg-white relative">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-[120%] bg-primary-50/50 rounded-r-[100%] blur-[100px] -z-10 pointer-events-none" />

        <div className="container-custom">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-500 text-[9px] font-bold uppercase tracking-[0.2em] mb-6 shadow-sm">
                <MapPin className="h-3 w-3 text-primary-500" />
                {t('experiences_page.featuredTitle')}
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
                {t('experiences_page.featuredSubtitle')}
              </h2>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Featured Card 1 */}
            <div className="group rounded-[2rem] overflow-hidden relative cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 bg-slate-900 min-h-[400px] md:min-h-[500px]">
              <Image
                src="/images/destinations/vi-1.jpg"
                alt={t('experiences_page.safari_feat_title')}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />

              <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="mb-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-500/20 backdrop-blur-md text-[10px] font-black uppercase tracking-[0.2em] text-primary-100 border border-primary-500/30">
                    {t('experiences_page.safari_feat_desc')}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
                    {t('experiences_page.safari_feat_title')}
                  </h3>
                  <p className="text-slate-300 font-light leading-relaxed mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {t('experiences_page.safari_feat_long')}
                  </p>

                  <Link
                    href={ROUTES.booking}
                    className="inline-flex items-center justify-center gap-3 bg-white text-slate-900 px-6 py-3 rounded-xl font-black text-[11px] uppercase tracking-[0.2em] transition-all duration-300 hover:bg-primary-500 hover:text-white group/btn"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span>{t('nav.getQuote')}</span>
                    <ArrowRight className="h-4 w-4 transform group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Featured Card 2 */}
            <div className="group rounded-[2rem] overflow-hidden relative cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 bg-slate-900 min-h-[400px] md:min-h-[500px]">
              <Image
                src="/images/2.jpg"
                alt={t('experiences_page.culture_feat_title')}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />

              <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="mb-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/20 backdrop-blur-md text-[10px] font-black uppercase tracking-[0.2em] text-purple-100 border border-purple-500/30">
                    {t('experiences_page.culture_feat_desc')}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
                    {t('experiences_page.culture_feat_title')}
                  </h3>
                  <p className="text-slate-300 font-light leading-relaxed mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {t('experiences_page.culture_feat_long')}
                  </p>

                  <Link
                    href={ROUTES.booking}
                    className="inline-flex items-center justify-center gap-3 bg-white text-slate-900 px-6 py-3 rounded-xl font-black text-[11px] uppercase tracking-[0.2em] transition-all duration-300 hover:bg-purple-600 hover:text-white group/btn"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span>{t('nav.getQuote')}</span>
                    <ArrowRight className="h-4 w-4 transform group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explorer par durée */}
      <section className="py-24 bg-[#FBFBFF] relative border-y border-slate-100">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
              {t('megaMenu.experiences.byDuration')}
            </h2>
            <p className="text-slate-500 text-lg">
              {t('experiences_page.byDurationSubtitle')}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
            {experiencesByDuration.map((exp, i) => (
              <div
                key={i}
                className="group flex flex-col items-center text-center p-8 bg-white rounded-[2rem] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl transition-all duration-300 cursor-default"
              >
                <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-primary-50 transition-colors">
                  <Calendar className="w-6 h-6 text-slate-400 group-hover:text-primary-600 transition-colors" />
                </div>

                <h3 className="text-lg font-black text-slate-900 mb-2">
                  {t(exp.titleKey)}
                </h3>

                <div className="text-primary-600 font-black text-sm tracking-wide mb-4">
                  {t(exp.durationKey)}
                </div>

                <p className="text-slate-500 text-sm font-light leading-relaxed">
                  {t(exp.descKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Remplacement du CTA inline par le CTA global */}
      <CTASection />

    </div>
  );
}
