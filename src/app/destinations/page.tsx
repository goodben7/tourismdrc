'use client';

import { useTranslation } from "@/i18n/LanguageProvider";
import { destinations } from "@/data/destinations";
import {
  Building2,
  Mountain,
  Flame,
  Leaf,
  Pickaxe,
  Palmtree,
  Droplet,
  ArrowRight,
  MapPin,
  Waves,
  Ship,
  Binoculars
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const iconMap: Record<string, any> = {
  Building2, Mountain, Flame, Leaf, Pickaxe, Palmtree, Droplet, Waves, Ship, Binoculars
};

export default function DestinationsPage() {
  const { t, locale } = useTranslation();

  return (
    <div className="min-h-screen bg-[#FDFDFF]">
      {/* Hero Section - Compact & Cinematic */}
      <section className="relative pt-28 pb-16 overflow-hidden bg-slate-950">
        <div className="absolute inset-0">
          <Image
            src="/images/destinations/vi-8.jpeg"
            alt="Background"
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
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary-500"></span>
              </span>
              EXPLORE THE CONGO
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight leading-none">
              {t('destinations_page.heroTitle')}
            </h1>
            <p className="text-sm md:text-base text-slate-300 font-light leading-relaxed max-w-lg">
              {t('destinations_page.heroSubtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Destinations Exploration */}
      <section className="py-24 relative">
        <div className="container-custom">
          <div className="grid gap-32">
            {destinations.map((dest, index) => {
              const Icon = iconMap[dest.heroIcon] || MapPin;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={dest.slug}
                  className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16 lg:gap-24`}
                >
                  {/* Text Content */}
                  <div className="flex-1 space-y-8 w-full">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className={`h-12 w-12 rounded-2xl flex items-center justify-center bg-primary-600 text-white shadow-xl shadow-black/5`}>
                          <Icon className="h-6 w-6" strokeWidth={2} />
                        </div>
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">
                          {t('footer.destinations')} 0{index + 1}
                        </span>
                      </div>
                      <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                        {dest.name[locale]}
                      </h2>
                      <div className="h-1 w-12 bg-primary-500 rounded-full" />
                    </div>

                    <div className="text-xl font-bold tracking-tight text-primary-600">
                      {dest.tagline[locale]}
                    </div>

                    <p className="text-lg text-slate-500 font-light leading-relaxed">
                      {dest.description[locale]}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4">
                      {dest.tags.slice(0, 4).map((tag, tIndex) => (
                        <div key={tIndex} className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm hover:border-primary-200 transition-colors">
                          <div className="h-4 w-4 rounded-full bg-primary-50 flex items-center justify-center shrink-0">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary-600" />
                          </div>
                          <span className="text-[13px] text-slate-600 font-medium">{tag[locale]}</span>
                        </div>
                      ))}
                    </div>

                    <Link href={`/destinations/${dest.slug}`} className="inline-flex items-center gap-3 text-[11px] font-black text-primary-600 uppercase tracking-[0.2em] group border-b-2 border-transparent hover:border-primary-600 pb-1 transition-all">
                      {t('home.learnMore')}
                      <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  {/* Visual Element */}
                  <div className="flex-1 w-full relative">
                    {/* The decorative twisted background box */}
                    <div className={`absolute -inset-4 bg-slate-100 rounded-[2.5rem] -rotate-2 opacity-100`} />
                    <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl bg-slate-200 group">
                      <Image
                        src={dest.heroImage}
                        alt={dest.name[locale]}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-[10000ms] ease-out"
                      />
                      {/* Gradient to darken the edges slightly */}
                      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/60 pointer-events-none" />

                      {/* Big watermark number overlay */}
                      <div className="absolute inset-0 flex items-center justify-center text-white font-black text-9xl uppercase tracking-widest opacity-10 transition-transform duration-700 group-hover:scale-110 pointer-events-none">
                        0{index + 1}
                      </div>

                      <div className="absolute bottom-6 left-8 right-8 flex items-end justify-between pointer-events-none">
                        <div className="text-white font-black text-3xl uppercase tracking-widest drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                          {dest.name[locale]}
                        </div>
                        <div className="h-12 w-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 text-white">
                          <ArrowRight className="h-5 w-5" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>


    </div>
  );
}
