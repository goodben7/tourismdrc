'use client';

import Link from "next/link";
import { Plane, Hotel, Shield, MapPin, Users, Briefcase } from "lucide-react";
import HeroSlider from "@/components/sections/HeroSlider";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import CTASection from "@/components/sections/CTASection";
import { ROUTES } from "@/lib/constants";
import { useTranslation } from "@/i18n/LanguageProvider";

const iconMap = {
  Plane,
  Hotel,
  Shield,
  MapPin,
  Users,
  Briefcase,
};

const serviceIcons = ["Plane", "Hotel", "MapPin", "Shield", "Users", "Briefcase"];
const serviceKeys = [
  { name: 'home.service1_name', short: 'home.service1_short', slug: 'travel-organization' },
  { name: 'home.service2_name', short: 'home.service2_short', slug: 'accommodation' },
  { name: 'home.service3_name', short: 'home.service3_short', slug: 'transport' },
  { name: 'home.service4_name', short: 'home.service4_short', slug: 'security' },
  { name: 'home.service5_name', short: 'home.service5_short', slug: 'translation' },
  { name: 'home.service6_name', short: 'home.service6_short', slug: 'business' },
];

const packageKeys = [
  { icon: "🦍", titleKey: 'home.package1_title', descKey: 'home.package1_desc', priceKey: 'home.package1_price', durationKey: 'home.package1_duration', highlight: true },
  { icon: "🌋", titleKey: 'home.package2_title', descKey: 'home.package2_desc', priceKey: 'home.package2_price', durationKey: 'home.package2_duration', highlight: false },
  { icon: "🏛️", titleKey: 'home.package3_title', descKey: 'home.package3_desc', priceKey: 'home.package3_price', durationKey: 'home.package3_duration', highlight: false },
];

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <HeroSlider />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mb-16 text-center">
            <div className="mb-4 inline-block rounded-lg bg-primary-100 px-6 py-2 text-sm font-semibold text-primary-700">
              {t('home.welcome')}
            </div>
            <h2 className="mb-6 text-4xl md:text-5xl font-bold">{t('home.companyName')}</h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600 leading-relaxed">
              {t('home.intro')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: t('home.feature1_title'), description: t('home.feature1_desc') },
              { title: t('home.feature2_title'), description: t('home.feature2_desc') },
              { title: t('home.feature3_title'), description: t('home.feature3_desc') },
            ].map((item, index) => (
              <div key={index} className="feature-card text-center">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="mb-16 text-center">
            <div className="mb-4 inline-block rounded-lg bg-primary-100 px-6 py-2 text-sm font-semibold text-primary-700">
              {t('home.servicesTitle')}
            </div>
            <h2 className="mb-6 text-4xl md:text-5xl font-bold">{t('home.servicesSubtitle')}</h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              {t('home.servicesIntro')}
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {serviceKeys.map((svc, index) => {
              const Icon = iconMap[serviceIcons[index] as keyof typeof iconMap];
              return (
                <div key={svc.slug} className="group bg-white rounded-lg p-8 border border-gray-200 hover:border-primary-400 transition-all duration-200">
                  <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-lg bg-primary-500 text-white">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">
                    {t(svc.name)}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {t(svc.short)}
                  </p>
                  <div className="flex items-center text-primary-600 font-semibold group-hover:gap-2 transition-all">
                    {t('home.learnMore')}
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-16 text-center">
            <Link 
              href={ROUTES.services}
              className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
            >
              {t('home.viewAllServices')}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mb-16 text-center">
            <div className="mb-4 inline-block rounded-lg bg-secondary-100 px-6 py-2 text-sm font-semibold text-secondary-700">
              {t('home.packagesTag')}
            </div>
            <h2 className="mb-6 text-4xl md:text-5xl font-bold">{t('home.packagesTitle')}</h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              {t('home.packagesIntro')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {packageKeys.map((pkg, index) => (
              <div 
                key={index} 
                className={`relative bg-gray-50 rounded-lg p-8 border-2 transition-all duration-200 ${
                  pkg.highlight ? 'border-primary-500' : 'border-gray-200'
                }`}
              >
                {pkg.highlight && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary-500 text-white px-6 py-2 rounded-lg text-sm font-semibold">
                    {t('home.mostPopular')}
                  </div>
                )}
                <div className="text-6xl mb-6 text-center">{pkg.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-center text-gray-900">{t(pkg.titleKey)}</h3>
                <p className="text-gray-600 text-center mb-6 leading-relaxed">{t(pkg.descKey)}</p>
                <div className="border-t border-gray-200 pt-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">{t('home.duration')}</span>
                    <span className="font-semibold text-gray-900">{t(pkg.durationKey)}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">{t('home.price')}</span>
                    <span className="font-bold text-primary-600 text-xl">{t(pkg.priceKey)}</span>
                  </div>
                </div>
                <button className="mt-6 w-full bg-primary-500 hover:bg-primary-600 text-white py-3 rounded-lg font-semibold transition-all duration-200">
                  {t('home.bookNow')}
                </button>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link 
              href={ROUTES.packages}
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-primary-600 border-2 border-primary-500 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
            >
              {t('home.viewAllPackages')}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <WhyChooseUs />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-primary-600">
              {t('home.testimonialsTag')}
            </p>
            <h2 className="mb-4">{t('home.testimonialsTitle')}</h2>
          </div>
          <div className="text-center">
            <p className="text-gray-600">
              {t('home.testimonialsEmpty')}
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
