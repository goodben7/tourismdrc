'use client';

import { useState, useEffect } from 'react';
import Link from "next/link";
import {
  Shield,
  Gem,
  Crown,
  CheckCircle2,
  Clock,
  MapPin,
  ChevronDown,
  X,
  XCircle,
  AlertCircle,
  ArrowRight,
  Navigation,
  Check,
  Info
} from "lucide-react";
import { useTranslation } from "@/i18n/LanguageProvider";
import { ROUTES } from "@/lib/constants";

interface Package {
  id: string;
  icon: any;
  color: string;
  key: string;
  featured: boolean;
  bgColor: string;
  iconColor: string;
  accentColor: string;
}

export default function PackagesPage() {
  const { t } = useTranslation();
  const [selectedPkg, setSelectedPkg] = useState<Package | null>(null);

  const packages: Package[] = [
    {
      id: 'standard',
      icon: Shield,
      color: 'blue',
      key: 'packages.standard',
      featured: false,
      bgColor: 'bg-blue-50/50',
      iconColor: 'bg-blue-600',
      accentColor: 'text-blue-600',
    },
    {
      id: 'silver',
      icon: Gem,
      color: 'indigo',
      key: 'packages.silver',
      featured: true,
      bgColor: 'bg-indigo-50/70',
      iconColor: 'bg-indigo-600',
      accentColor: 'text-indigo-600',
    },
    {
      id: 'gold',
      icon: Crown,
      color: 'amber',
      key: 'packages.gold',
      featured: false,
      bgColor: 'bg-amber-50/50',
      iconColor: 'bg-amber-500',
      accentColor: 'text-amber-600',
    },
  ];

  useEffect(() => {
    if (selectedPkg) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedPkg]);

  return (
    <div className="min-h-screen bg-[#FDFDFF]">
      {/* Hero Section */}
      <section className="relative pt-28 pb-16 overflow-hidden bg-slate-950">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary-600/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-secondary-500/10 rounded-full blur-[100px]" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-primary-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-4 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
              </span>
              {t('home.packagesTag')}
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-3 tracking-tight">
              {t('packages_page.heroTitle')}
            </h1>
            <p className="text-sm md:text-base text-slate-400 font-light leading-relaxed">
              {t('packages_page.heroSubtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-24 relative">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {packages.map((pkg) => {
              const Icon = pkg.icon;

              return (
                <div
                  key={pkg.id}
                  className={`group relative flex flex-col rounded-[2rem] transition-all duration-500 bg-white border ${pkg.featured
                    ? 'border-primary-500 shadow-[0_24px_48px_-12px_rgba(0,102,204,0.12)] lg:-translate-y-2 z-10'
                    : 'border-slate-100 shadow-sm hover:shadow-md'
                    }`}
                >
                  {pkg.featured && (
                    <div className="absolute -top-3.5 right-8 bg-primary-600 text-white px-4 py-1.5 text-[9px] font-bold uppercase tracking-[0.15em] rounded-full shadow-lg border-2 border-white z-10">
                      {t('home.mostPopular')}
                    </div>
                  )}

                  {/* Card Header */}
                  <div className={`p-8 rounded-t-[2rem] ${pkg.bgColor}`}>
                    <div className={`mb-8 inline-flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-500 group-hover:scale-110 ${pkg.iconColor} text-white shadow-lg shadow-black/5`}>
                      <Icon className="h-6 w-6" strokeWidth={2} />
                    </div>

                    <h2 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">
                      {t(`${pkg.key}.name`)}
                    </h2>

                    <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      <div className="flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5 text-primary-500" />
                        {t(`${pkg.key}.duration`)}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-primary-600 font-bold">{t(`${pkg.key}.price`)}</span>
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-8 flex-grow space-y-8">
                    <p className="text-sm text-slate-500 leading-relaxed italic border-l-2 border-primary-500/20 pl-4 py-0.5">
                      {t(`${pkg.key}.description`)}
                    </p>

                    {/* Quick Info Block */}
                    <div className="bg-slate-50/50 rounded-xl p-5 border border-slate-100">
                      <div className="flex items-center gap-2 mb-3">
                        <MapPin className="h-3.5 w-3.5 text-primary-500" />
                        <span className="text-[10px] font-bold text-slate-900 uppercase tracking-widest">
                          {t('services_page.discoveryTitle')}
                        </span>
                      </div>
                      <p className="text-[13px] text-slate-600 leading-relaxed font-medium line-clamp-2">
                        {t(`${pkg.key}.itinerary`)}
                      </p>
                    </div>

                    <button
                      onClick={() => setSelectedPkg(pkg)}
                      className="w-full flex items-center justify-between p-3.5 rounded-xl transition-all duration-300 font-bold text-[13px] bg-slate-50 text-slate-600 hover:bg-slate-900 hover:text-white group/btn"
                    >
                      <span className="flex items-center gap-2">
                        <Info className="h-4 w-4" />
                        {t('home.learnMore')}
                      </span>
                      <ArrowRight className="h-4 w-4 transform -rotate-45 group-hover/btn:rotate-0 transition-transform" />
                    </button>
                  </div>

                  <div className="p-8 pt-0">
                    <Link
                      href={`${ROUTES.booking}?package=${pkg.id}`}
                      className={`w-full py-4 rounded-xl font-bold text-[13px] uppercase tracking-widest transition-all duration-400 flex items-center justify-center gap-3 ${pkg.featured
                        ? 'bg-primary-600 hover:bg-primary-700 text-white shadow-lg shadow-primary-600/20'
                        : 'bg-white border-2 border-slate-900 text-slate-900 hover:bg-slate-950 hover:text-white'
                        }`}
                    >
                      {t('home.bookNow')}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* POPUP MODAL */}
      {selectedPkg && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6" aria-modal="true" role="dialog">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-md animate-fade-in" onClick={() => setSelectedPkg(null)} />

          {/* Modal Content */}
          <div className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-[2rem] shadow-2xl overflow-hidden animate-slide-up flex flex-col">
            {/* Header */}
            <div className={`relative px-8 py-8 md:px-12 border-b border-slate-100 ${selectedPkg.bgColor}`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-5">
                  <div className={`h-12 w-12 rounded-xl flex items-center justify-center ${selectedPkg.iconColor} text-white shadow-lg shadow-black/5`}>
                    <selectedPkg.icon className="h-6 w-6" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                      {t(`${selectedPkg.key}.name`)}
                    </h3>
                    <div className="flex items-center gap-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">
                      <span className="flex items-center gap-1.5"><Clock className="h-4 w-4 text-primary-500" /> {t(`${selectedPkg.key}.duration`)}</span>
                      <span className="h-1 w-1 bg-slate-300 rounded-full" />
                      <span className={`${selectedPkg.accentColor} font-black`}>{t(`${selectedPkg.key}.price`)}</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedPkg(null)}
                  className="h-10 w-10 rounded-full bg-slate-100 hover:bg-red-50 hover:text-red-500 transition-all flex items-center justify-center border border-slate-200 group"
                >
                  <X className="h-5 w-5 group-hover:rotate-90 transition-transform" />
                </button>
              </div>
            </div>

            {/* Body */}
            <div className="flex-grow overflow-y-auto p-8 md:p-12 space-y-12 scrollbar-hide">

              {/* Row 1: Intro & Discovery */}
              <div className="grid lg:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-6 bg-slate-200 rounded-full" />
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.25em]">APERÇU</span>
                  </div>
                  <p className="text-base text-slate-600 leading-relaxed font-light italic">
                    {t(`${selectedPkg.key}.description`)}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Navigation className="h-4 w-4 text-primary-500" />
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.25em]">{t('services_page.discoveryTitle')}</span>
                  </div>
                  <div className="bg-slate-50/70 p-6 rounded-2xl border border-slate-100 text-sm font-medium text-slate-700 leading-relaxed">
                    {t(`${selectedPkg.key}.itinerary`)}
                  </div>
                </div>
              </div>

              {/* Row 2: Columns */}
              <div className="grid md:grid-cols-3 gap-10">
                <div className="md:col-span-2 space-y-6">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.25em]">{t(`${selectedPkg.key}.included`)}</span>
                    <div className="h-px flex-grow bg-slate-100" />
                  </div>
                  <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => {
                      const content = t(`${selectedPkg.key}.item${num}`);
                      if (content.includes('.item')) return null;
                      return (
                        <li key={num} className="flex items-start gap-3">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 text-green-500 shrink-0" />
                          <span className="text-[13px] text-slate-600 leading-tight font-medium">{content}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className="space-y-8">
                  <div className="space-y-5">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.25em] block">{t(`${selectedPkg.key}.securityAssistance`)}</span>
                    <div className="bg-slate-900 p-6 rounded-3xl shadow-xl space-y-4 border border-white/5">
                      {[1, 2].map((num) => {
                        const content = t(`${selectedPkg.key}.secInfo${num}`);
                        if (content.includes('.secInfo')) return null;
                        return (
                          <div key={num} className="flex items-start gap-3">
                            <Shield className="h-4 w-4 text-primary-400 shrink-0 mt-0.5" />
                            <span className="text-[11px] text-slate-300 font-light leading-snug">{content}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {selectedPkg.id !== 'gold' && (
                    <div className="space-y-4">
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.25em] block">{t(`${selectedPkg.key}.notIncluded`)}</span>
                      <ul className="space-y-2 pl-2">
                        {[1, 2, 3, 4, 5].map((num) => {
                          const content = t(`${selectedPkg.key}.notInc${num}`);
                          if (content.includes('.notInc')) return null;
                          return (
                            <li key={num} className="flex items-start gap-2.5">
                              <XCircle className="h-3.5 w-3.5 text-red-500/30 mt-0.5 shrink-0" />
                              <span className="text-[11px] text-slate-400 font-medium italic">{content}</span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              {/* Footer */}
              <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h5 className="text-lg font-bold text-slate-800">{t('packages_page.modalCtaTitle')}</h5>
                  <p className="text-xs text-slate-500">{t('packages_page.modalCtaSubtitle')}</p>
                </div>
                <Link
                  href={`${ROUTES.booking}?package=${selectedPkg.id}`}
                  className={`px-8 py-3.5 rounded-xl font-bold text-xs uppercase tracking-widest transition-all ${selectedPkg.featured ? 'bg-primary-600 text-white' : 'bg-slate-900 text-white'}`}
                >
                  {t('home.bookNow')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
