'use client';

import {
  Plane,
  Hotel,
  Car,
  Shield,
  HeartHandshake,
  Compass,
  Check,
  ArrowRight,
  ShieldCheck,
  Star,
  Globe,
  Clock
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import AnimatedSection from "@/components/animations/AnimatedSection";
import { ROUTES } from "@/lib/constants";
import { useTranslation } from "@/i18n/LanguageProvider";

const serviceIcons = [Plane, Hotel, Car, Compass, HeartHandshake, Shield];
const serviceKeys = [
  {
    id: 'airport',
    titleKey: 'services_page.svc1_title',
    descKey: 'services_page.svc1_desc',
    featureKeys: ['services_page.svc1_feat1', 'services_page.svc1_feat2', 'services_page.svc1_feat3', 'services_page.svc1_feat4'],
    color: 'bg-blue-600',
    bgColor: 'bg-blue-50',
    image: '/images/services/a-1.jpg'
  },
  {
    id: 'hotel',
    titleKey: 'services_page.svc2_title',
    descKey: 'services_page.svc2_desc',
    featureKeys: ['services_page.svc2_feat1', 'services_page.svc2_feat2', 'services_page.svc2_feat3', 'services_page.svc2_feat4'],
    color: 'bg-indigo-600',
    bgColor: 'bg-indigo-50',
    image: '/images/services/h-1.jpg'
  },
  {
    id: 'transport',
    titleKey: 'services_page.svc3_title',
    descKey: 'services_page.svc3_desc',
    featureKeys: ['services_page.svc3_feat1', 'services_page.svc3_feat2', 'services_page.svc3_feat3', 'services_page.svc3_feat4'],
    color: 'bg-slate-900',
    bgColor: 'bg-slate-50',
    image: '/images/services/t-1.jpg'
  },
  {
    id: 'discovery',
    titleKey: 'services_page.svc4_title',
    descKey: 'services_page.svc4_desc',
    featureKeys: ['services_page.svc4_feat1', 'services_page.svc4_feat2', 'services_page.svc4_feat3', 'services_page.svc4_feat4'],
    color: 'bg-emerald-600',
    bgColor: 'bg-emerald-50',
    image: '/images/services/e-1.jpg'
  },
  {
    id: 'assistance',
    titleKey: 'services_page.svc5_title',
    descKey: 'services_page.svc5_desc',
    featureKeys: ['services_page.svc5_feat1', 'services_page.svc5_feat2', 'services_page.svc5_feat3', 'services_page.svc5_feat4'],
    color: 'bg-amber-600',
    bgColor: 'bg-amber-50',
    image: '/images/services/c-1.jpg'
  },
  {
    id: 'security',
    titleKey: 'services_page.svc6_title',
    descKey: 'services_page.svc6_desc',
    featureKeys: ['services_page.svc6_feat1', 'services_page.svc6_feat2', 'services_page.svc6_feat3', 'services_page.svc6_feat4'],
    color: 'bg-red-600',
    bgColor: 'bg-red-50',
    image: '/images/services/s-1.jpg'
  },
];

export default function ServicesPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-[#FDFDFF]">
      {/* Hero Section - Compact & Cinematic */}
      <section className="relative pt-28 pb-16 overflow-hidden bg-slate-950">
        <div className="absolute inset-0">
          <Image
            src="/images/services/he-1.jpg"
            alt="Background"
            fill
            className="object-cover opacity-60 scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-[9px] font-black uppercase tracking-[0.25em] mb-4 backdrop-blur-md">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary-500"></span>
              </span>
              EXCELLENCE & SERVICE
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight leading-none">
              {t('services_page.heroTitle')}
            </h1>
            <p className="text-sm md:text-base text-slate-300 font-light leading-relaxed max-w-lg">
              {t('services_page.heroSubtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Services Exploration */}
      <section className="py-24 relative">
        <div className="container-custom">
          <div className="grid gap-32">
            {serviceKeys.map((svc, index) => {
              const Icon = serviceIcons[index];
              const isEven = index % 2 === 0;

              return (
                <AnimatedSection
                  key={svc.id}
                  id={svc.id}
                  direction={isEven ? 'left' : 'right'}
                  className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16 lg:gap-24 scroll-mt-32`}
                >
                  {/* Text Content */}
                  <div className="flex-1 space-y-8 w-full">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className={`h-12 w-12 rounded-2xl flex items-center justify-center ${svc.color} text-white shadow-xl shadow-black/5`}>
                          <Icon className="h-6 w-6" strokeWidth={2} />
                        </div>
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">
                          {t('nav.services')} 0{index + 1}
                        </span>
                      </div>
                      <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                        {t(svc.titleKey)}
                      </h2>
                      <div className="h-1 w-12 bg-primary-500 rounded-full" />
                    </div>

                    <p className="text-lg text-slate-500 font-light leading-relaxed">
                      {t(svc.descKey)}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4">
                      {svc.featureKeys.map((fKey, fIndex) => (
                        <div key={fIndex} className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm hover:border-primary-200 transition-colors">
                          <div className="h-6 w-6 rounded-full bg-primary-50 flex items-center justify-center shrink-0">
                            <Check className="h-3 w-3 text-primary-600" />
                          </div>
                          <span className="text-[13px] text-slate-600 font-medium">{t(fKey)}</span>
                        </div>
                      ))}
                    </div>


                  </div>

                  {/* Visual Element */}
                  <div className="flex-1 w-full relative">
                    <div className={`absolute -inset-4 ${svc.bgColor} rounded-[2.5rem] -rotate-2 opacity-50`} />
                    <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl bg-slate-100 group">
                      <Image
                        src={svc.image}
                        alt={t(svc.titleKey)}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent" />
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA - Refined & Premium */}
      <AnimatedSection className="py-24 relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-50/50 via-transparent to-transparent" />

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-slate-900/20">
              {/* Decorative background elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

              <div className="relative z-10 space-y-10">
                <div className="flex flex-col items-center space-y-6">
                  <div className="h-16 w-16 rounded-2xl bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/10 group-hover:scale-110 transition-transform duration-500">
                    <HeartHandshake className="h-8 w-8 text-primary-400" strokeWidth={1.5} />
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
                      {t('services_page.ctaTitle').split(' ').slice(0, -1).join(' ')} <br className="hidden md:block" />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-blue-400">{t('services_page.ctaTitle').split(' ').slice(-1)}</span>
                    </h3>
                    <p className="text-slate-400 font-light text-base md:text-lg max-w-xl mx-auto leading-relaxed">
                      {t('services_page.ctaSubtitle')}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <Link
                    href={ROUTES.contact}
                    className="group px-10 py-4 bg-primary-600 hover:bg-primary-500 text-white rounded-full font-black text-[11px] uppercase tracking-[0.2em] shadow-xl shadow-primary-900/20 transition-all flex items-center gap-3"
                  >
                    {t('services_page.ctaButton')}
                    <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <div className="flex items-center gap-4 text-white/40">
                    <div className="h-px w-8 bg-white/10" />
                    <span className="text-[9px] font-bold uppercase tracking-widest">{t('services_page.ctaBadge')}</span>
                    <div className="h-px w-8 bg-white/10" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
