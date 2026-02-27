'use client';

import { Compass, Calendar, Mountain, Sparkles } from "lucide-react";
import { useTranslation } from "@/i18n/LanguageProvider";
import Link from "next/link";
import { ROUTES } from "@/lib/constants";

export default function ExperiencesPage() {
  const { t } = useTranslation();

  const experiencesByType = [
    {
      titleKey: 'megaMenu.experiences.safari',
      descKey: 'megaMenu.experiences.safari_desc',
      icon: Compass,
      color: 'bg-green-500',
    },
    {
      titleKey: 'megaMenu.experiences.culture',
      descKey: 'megaMenu.experiences.culture_desc',
      icon: Sparkles,
      color: 'bg-purple-500',
    },
    {
      titleKey: 'megaMenu.experiences.adventure',
      descKey: 'megaMenu.experiences.adventure_desc',
      icon: Mountain,
      color: 'bg-orange-500',
    },
    {
      titleKey: 'megaMenu.experiences.wellness',
      descKey: 'megaMenu.experiences.wellness_desc',
      icon: Calendar,
      color: 'bg-blue-500',
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
    <div className="min-h-screen">
      <section
        className="relative overflow-hidden py-32"
        style={{
          backgroundImage: "url(/images/destinations/forest.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/80 via-amber-900/70 to-yellow-900/80" />
        <div className="relative container-custom text-center text-white">
          <h1 className="mb-6 animate-fade-in text-white">{t('experiences_page.heroTitle')}</h1>
          <p className="mb-8 max-w-3xl mx-auto text-xl md:text-2xl text-white/90 animate-fade-in animation-delay-200">
            {t('experiences_page.heroSubtitle')}
          </p>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold">{t('megaMenu.experiences.byType')}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('experiences_page.byTypeSubtitle')}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {experiencesByType.map((exp, index) => {
              const Icon = exp.icon;
              return (
                <div key={index} className="feature-card text-center group cursor-pointer">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${exp.color} text-white mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{t(exp.titleKey)}</h3>
                  <p className="text-gray-600 leading-relaxed">{t(exp.descKey)}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold">{t('megaMenu.experiences.byDuration')}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('experiences_page.byDurationSubtitle')}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {experiencesByDuration.map((exp, index) => (
              <div key={index} className="card group cursor-pointer">
                <div className="card-content text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 mb-6 group-hover:bg-primary-600 group-hover:text-white transition-all">
                    <Calendar className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{t(exp.titleKey)}</h3>
                  <p className="text-sm font-semibold text-primary-600 mb-3">{t(exp.durationKey)}</p>
                  <p className="text-gray-600 leading-relaxed">{t(exp.descKey)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold">{t('experiences_page.featuredTitle')}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('experiences_page.featuredSubtitle')}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="card overflow-hidden group cursor-pointer">
              <div className="relative h-64 bg-gradient-to-br from-green-400 to-green-600">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="text-3xl font-bold mb-2">{t('experiences_page.safari_feat_title')}</h3>
                    <p className="text-lg">{t('experiences_page.safari_feat_desc')}</p>
                  </div>
                </div>
              </div>
              <div className="card-content">
                <p className="text-gray-600 leading-relaxed">
                  {t('experiences_page.safari_feat_long')}
                </p>
              </div>
            </div>
            <div className="card overflow-hidden group cursor-pointer">
              <div className="relative h-64 bg-gradient-to-br from-purple-400 to-purple-600">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="text-3xl font-bold mb-2">{t('experiences_page.culture_feat_title')}</h3>
                    <p className="text-lg">{t('experiences_page.culture_feat_desc')}</p>
                  </div>
                </div>
              </div>
              <div className="card-content">
                <p className="text-gray-600 leading-relaxed">
                  {t('experiences_page.culture_feat_long')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6 text-3xl font-bold">{t('experiences_page.ctaTitle')}</h2>
            <p className="text-lg text-gray-700 mb-8">
              {t('experiences_page.ctaSubtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href={ROUTES.booking}
                className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
              >
                {t('nav.getQuote')}
              </Link>
              <Link
                href={ROUTES.contact}
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-primary-600 border-2 border-primary-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
              >
                {t('nav.contact')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
