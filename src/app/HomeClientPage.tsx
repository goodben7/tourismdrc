'use client';

import Link from "next/link";
import Image from "next/image";
import { Plane, Hotel, Shield, MapPin, Users, Briefcase, Gem, Crown, ArrowRight, Car, Compass, HeartHandshake } from "lucide-react";
import HeroSlider from "@/components/sections/HeroSlider";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import CTASection from "@/components/sections/CTASection";
import AnimatedSection from "@/components/animations/AnimatedSection";
import { ROUTES } from "@/lib/constants";
import { useTranslation } from "@/i18n/LanguageProvider";

const iconMap = {
  Plane,
  Hotel,
  Shield,
  MapPin,
  Users,
  Briefcase,
  Car,
  Compass,
  HeartHandshake
};

const pkgIconMap = {
  Shield,
  Gem,
  Crown,
};

const serviceIcons = ["Plane", "Hotel", "Car", "Compass", "HeartHandshake", "Shield"];
const serviceKeys = [
  { name: 'home.service1_name', short: 'home.service1_short', slug: 'airport' },
  { name: 'home.service2_name', short: 'home.service2_short', slug: 'hotel' },
  { name: 'home.service3_name', short: 'home.service3_short', slug: 'transport' },
  { name: 'home.service6_name', short: 'home.service6_short', slug: 'discovery' }, // Mapping Assistance Locale to Discovery
  { name: 'home.service5_name', short: 'home.service5_short', slug: 'assistance' }, // Mapping Traduction to Assistance (which includes broad support)
  { name: 'home.service4_name', short: 'home.service4_short', slug: 'security' },
];

const packageKeys = [
  { image: "/images/packages/4.jpg", titleKey: 'home.package1_title', descKey: 'home.package1_desc', priceKey: 'home.package1_price', durationKey: 'home.package1_duration', highlight: true },
  { image: "/images/packages/5.jpg", titleKey: 'home.package2_title', descKey: 'home.package2_desc', priceKey: 'home.package2_price', durationKey: 'home.package2_duration', highlight: false },
  { image: "/images/packages/6.jpg", titleKey: 'home.package3_title', descKey: 'home.package3_desc', priceKey: 'home.package3_price', durationKey: 'home.package3_duration', highlight: false },
];

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <HeroSlider />

      {/* Introduction Section */}
      <AnimatedSection className="py-24 bg-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary-50/30 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2" />

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left Content */}
            <div className="max-w-2xl">
              <div className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-primary-600 text-[10px] font-bold uppercase tracking-[0.2em] shadow-sm">
                <div className="h-1.5 w-1.5 rounded-full bg-primary-500 animate-pulse" />
                {t('home.welcome')}
              </div>

              <h2 className="mb-8 text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
                {t('home.companyName')}
              </h2>

              <p className="text-lg text-slate-500 font-light leading-relaxed mb-10">
                {t('home.intro')}
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: MapPin,
                    title: t('home.feature1_title'),
                    description: t('home.feature1_desc'),
                    color: 'text-blue-600',
                    bgColor: 'bg-blue-50'
                  },
                  {
                    icon: Shield,
                    title: t('home.feature2_title'),
                    description: t('home.feature2_desc'),
                    color: 'text-indigo-600',
                    bgColor: 'bg-indigo-50'
                  },
                  {
                    icon: Gem,
                    title: t('home.feature3_title'),
                    description: t('home.feature3_desc'),
                    color: 'text-emerald-600',
                    bgColor: 'bg-emerald-50'
                  },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-start gap-5 group">
                      <div className={`mt-1 shrink-0 flex items-center justify-center w-12 h-12 rounded-xl ${item.bgColor} ${item.color} shadow-sm group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300`}>
                        <Icon className="w-5 h-5" strokeWidth={2} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-primary-600 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-slate-500 font-light leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Images (Bento Box / Collage) */}
            <div className="relative h-[600px] w-full hidden lg:block">
              {/* Main large image */}
              <div className="absolute top-0 right-0 w-[80%] h-[70%] rounded-[2.5rem] overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] border-8 border-white z-10 group">
                <Image
                  src="/images/1.png"
                  alt="DRC Landscape"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-[10000ms] ease-out"
                />
                <div className="absolute inset-0 bg-primary-900/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>

              {/* Secondary overlapping image */}
              <div className="absolute bottom-0 left-0 w-[55%] h-[50%] rounded-[2rem] overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] border-8 border-white z-20 group">
                <Image
                  src="/images/packages/4.jpg"
                  alt="DRC Culture"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-[10000ms] ease-out"
                />
                <div className="absolute inset-0 bg-primary-900/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>

              {/* Decorative element */}
              <div className="absolute top-1/2 left-10 -translate-y-1/2 w-32 h-32 bg-primary-100/50 rounded-full blur-2xl -z-10" />
            </div>

          </div>
        </div>
      </AnimatedSection>

      {/* Services Section */}
      <AnimatedSection className="py-16 bg-[#F8F9FF] relative overflow-hidden">
        {/* Subtle decorative elements */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary-50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 opacity-40" />

        <div className="container-custom relative z-10">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm text-primary-600 text-[9px] font-bold uppercase tracking-[0.2em]">
              <div className="h-1 w-1 rounded-full bg-primary-500 animate-pulse" />
              {t('home.servicesTitle')}
            </div>
            <h2 className="mb-4 text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
              {t('home.servicesSubtitle')}
            </h2>
            <p className="mx-auto max-w-xl text-base text-slate-500 font-light leading-relaxed">
              {t('home.servicesIntro')}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {serviceKeys.map((svc, index) => {
              const Icon = iconMap[serviceIcons[index] as keyof typeof iconMap];
              return (
                <div
                  key={svc.slug}
                  className="group relative bg-white rounded-[1.5rem] p-7 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-primary-600/5 transition-all duration-500"
                >
                  <div className="mb-6 inline-flex items-center justify-center w-11 h-11 rounded-lg bg-slate-50 text-slate-400 group-hover:bg-primary-500 group-hover:text-white transition-all duration-500">
                    <Icon className="w-5 h-5" strokeWidth={1.5} />
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-slate-900 tracking-tight group-hover:text-primary-600 transition-colors">
                    {t(svc.name)}
                  </h3>

                  <p className="text-slate-500 leading-relaxed mb-6 font-light text-[13px] min-h-[2.5rem]">
                    {t(svc.short)}
                  </p>

                  <div className="pt-4 border-t border-slate-50 flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-primary-600 transition-colors">
                      {t('home.learnMore')}
                    </span>
                    <div className="w-7 h-7 rounded-full border border-slate-100 flex items-center justify-center group-hover:bg-primary-500 group-hover:border-primary-500 group-hover:text-white transition-all duration-300">
                      <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>

                  <Link href={`${ROUTES.services}#${svc.slug}`} className="absolute inset-0 z-10" />
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link
              href={ROUTES.services}
              className="group inline-flex items-center gap-3 bg-slate-900 hover:bg-slate-950 text-white px-8 py-3 rounded-full font-bold text-[11px] uppercase tracking-widest shadow-lg shadow-slate-900/10 transition-all duration-300"
            >
              {t('home.viewAllServices')}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-padding bg-slate-50/50">
        <div className="container-custom">
          <div className="mb-16 text-center">
            <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-100 text-secondary-700 text-xs font-bold uppercase tracking-widest">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary-500"></span>
              </span>
              {t('home.packagesTag')}
            </div>
            <h2 className="mb-6 text-4xl md:text-5xl font-bold text-slate-900">{t('home.packagesTitle')}</h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600 font-light">
              {t('home.packagesIntro')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {packageKeys.map((pkg, index) => {
              return (
                <div
                  key={index}
                  className={`group relative bg-white rounded-[2rem] overflow-hidden transition-all duration-500 hover:-translate-y-2 flex flex-col ${pkg.highlight
                    ? 'border-2 border-primary-500 shadow-2xl shadow-primary-500/20'
                    : 'border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-slate-200/80 hover:border-primary-200'
                    }`}
                >
                  {/* Image Header */}
                  <div className="relative h-60 w-full overflow-hidden shrink-0">
                    <Image
                      src={pkg.image}
                      alt="Package image"
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-[10000ms] ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

                    {pkg.highlight && (
                      <div className="absolute top-4 right-4 bg-primary-500 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
                        {t('home.mostPopular')}
                      </div>
                    )}

                    {/* Title inside the image over gradient */}
                    <div className="absolute bottom-6 left-8 right-8">
                      <h3 className="text-2xl font-black text-white drop-shadow-md tracking-tight">{t(pkg.titleKey)}</h3>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-8 flex flex-col flex-grow bg-white">
                    <p className="text-slate-500 mb-8 leading-relaxed font-light flex-grow">
                      {t(pkg.descKey)}
                    </p>

                    <div className="space-y-4 border-t border-slate-100 pt-6 mb-8">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">{t('home.duration')}</span>
                        <span className="font-bold text-slate-800">{t(pkg.durationKey)}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">{t('home.price')}</span>
                        <span className="font-black text-primary-600 text-2xl tracking-tight">{t(pkg.priceKey)}</span>
                      </div>
                    </div>

                    <button className={`w-full py-4 rounded-xl font-bold uppercase tracking-widest text-[11px] transition-all duration-300 ${pkg.highlight
                      ? 'bg-primary-500 hover:bg-primary-600 text-white shadow-[0_10px_20px_-10px_rgba(0,102,204,0.5)]'
                      : 'bg-slate-900 hover:bg-slate-950 text-white'
                      }`}>
                      {t('home.bookNow')}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <Link
              href={ROUTES.packages}
              className="group inline-flex items-center gap-3 text-slate-950 font-bold hover:text-primary-600 transition-colors"
            >
              <span className="text-lg border-b-2 border-transparent group-hover:border-primary-500 transition-all">
                {t('home.viewAllPackages')}
              </span>
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 group-hover:border-primary-500 group-hover:bg-primary-500 group-hover:text-white transition-all">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </AnimatedSection>

      <WhyChooseUs />

      {/* Testimonials Section */}
      <AnimatedSection className="py-24 bg-white relative overflow-hidden text-center">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 skew-x-12 transform origin-top" />
        <div className="container-custom relative z-10">
          <div className="mb-16">
            <div className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-500 text-[9px] font-bold uppercase tracking-[0.2em]">
              <div className="h-1.5 w-1.5 rounded-full bg-primary-500" />
              {t('home.testimonialsTag')}
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              {t('home.testimonialsTitle')}
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-[#FBFBFF] rounded-[2rem] p-12 text-center border border-slate-100/50 shadow-sm relative overflow-hidden group hover:shadow-xl transition-all duration-500">
              {/* Subtle background quote */}
              <div className="absolute -top-6 -right-6 text-[12rem] font-serif text-slate-100 opacity-50 group-hover:scale-110 transition-transform duration-700 select-none pointer-events-none">
                "
              </div>
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white shadow-sm mb-6 text-primary-200 group-hover:text-primary-500 transition-colors duration-500 group-hover:-translate-y-1">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <p className="text-lg text-slate-500 font-light leading-relaxed">
                  {t('home.testimonialsEmpty')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <CTASection />
    </>
  );
}
