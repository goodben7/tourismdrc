'use client';

import { Target, Eye, Heart } from "lucide-react";
import { useTranslation } from "@/i18n/LanguageProvider";

export default function AboutPage() {
  const { t } = useTranslation();

  const values = [
    {
      icon: Target,
      titleKey: 'about_page.value1_title',
      descKey: 'about_page.value1_desc',
    },
    {
      icon: Eye,
      titleKey: 'about_page.value2_title',
      descKey: 'about_page.value2_desc',
    },
    {
      icon: Heart,
      titleKey: 'about_page.value3_title',
      descKey: 'about_page.value3_desc',
    },
  ];

  return (
    <div className="min-h-screen">
      <section
        className="relative overflow-hidden py-32"
        style={{
          backgroundImage: "url(/images/destinations/kinshasa.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-indigo-900/70 to-blue-800/80" />
        <div className="relative container-custom text-white">
          <h1 className="mb-6 animate-fade-in text-white">{t('about_page.heroTitle')}</h1>
          <p className="mb-8 max-w-2xl text-lg md:text-xl animate-fade-in animation-delay-200 text-white/90">
            {t('about_page.heroSubtitle')}
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6">{t('about_page.whoWeAreTitle')}</h2>
            <p className="mb-4 text-lg text-gray-600">
              {t('about_page.whoWeAreText1')}
            </p>
            <p className="text-lg text-gray-600">
              {t('about_page.whoWeAreText2')}
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid gap-8 lg:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.titleKey} className="card text-center">
                  <div className="card-content">
                    <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-lg bg-primary-500 text-white">
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="mb-3 text-xl font-semibold">{t(value.titleKey)}</h3>
                    <p className="text-gray-600">{t(value.descKey)}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6">{t('about_page.teamTitle')}</h2>
            <p className="text-lg text-gray-600">
              {t('about_page.teamText')}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
