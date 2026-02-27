'use client';

import { useTranslation } from "@/i18n/LanguageProvider";

export default function DestinationsPage() {
  const { t } = useTranslation();

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
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/80 via-emerald-900/70 to-teal-900/80" />
        <div className="relative container-custom text-white">
          <h1 className="mb-6 animate-fade-in text-white">{t('destinations_page.heroTitle')}</h1>
          <p className="mb-8 max-w-2xl text-lg md:text-xl animate-fade-in animation-delay-200 text-white/90">
            {t('destinations_page.heroSubtitle')}
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="mb-4">{t('destinations_page.comingSoonTitle')}</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              {t('destinations_page.comingSoonText')}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
