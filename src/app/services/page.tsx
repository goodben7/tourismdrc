'use client';

import { Plane, Hotel, Car, Shield, Languages, HeartHandshake } from "lucide-react";
import { useTranslation } from "@/i18n/LanguageProvider";

const serviceIcons = [Plane, Hotel, Car, Shield, Languages, HeartHandshake];
const serviceKeys = [
  {
    titleKey: 'services_page.svc1_title',
    descKey: 'services_page.svc1_desc',
    featureKeys: ['services_page.svc1_feat1', 'services_page.svc1_feat2', 'services_page.svc1_feat3', 'services_page.svc1_feat4'],
  },
  {
    titleKey: 'services_page.svc2_title',
    descKey: 'services_page.svc2_desc',
    featureKeys: ['services_page.svc2_feat1', 'services_page.svc2_feat2', 'services_page.svc2_feat3', 'services_page.svc2_feat4'],
  },
  {
    titleKey: 'services_page.svc3_title',
    descKey: 'services_page.svc3_desc',
    featureKeys: ['services_page.svc3_feat1', 'services_page.svc3_feat2', 'services_page.svc3_feat3', 'services_page.svc3_feat4'],
  },
  {
    titleKey: 'services_page.svc4_title',
    descKey: 'services_page.svc4_desc',
    featureKeys: ['services_page.svc4_feat1', 'services_page.svc4_feat2', 'services_page.svc4_feat3', 'services_page.svc4_feat4'],
  },
  {
    titleKey: 'services_page.svc5_title',
    descKey: 'services_page.svc5_desc',
    featureKeys: ['services_page.svc5_feat1', 'services_page.svc5_feat2', 'services_page.svc5_feat3', 'services_page.svc5_feat4'],
  },
  {
    titleKey: 'services_page.svc6_title',
    descKey: 'services_page.svc6_desc',
    featureKeys: ['services_page.svc6_feat1', 'services_page.svc6_feat2', 'services_page.svc6_feat3', 'services_page.svc6_feat4'],
  },
];

export default function ServicesPage() {
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
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900/80 via-emerald-900/70 to-green-900/80" />
        <div className="relative container-custom text-white">
          <h1 className="mb-6 animate-fade-in text-white">{t('services_page.heroTitle')}</h1>
          <p className="mb-8 max-w-2xl text-lg md:text-xl animate-fade-in animation-delay-200 text-white/90">
            {t('services_page.heroSubtitle')}
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid gap-8 lg:gap-12">
            {serviceKeys.map((svc, index) => {
              const Icon = serviceIcons[index];
              return (
                <div
                  key={svc.titleKey}
                  className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center"
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-lg bg-primary-500 text-white">
                      <Icon className="h-8 w-8" />
                    </div>
                    <h2 className="mb-4">{t(svc.titleKey)}</h2>
                    <p className="mb-6 text-lg text-gray-600">
                      {t(svc.descKey)}
                    </p>
                    <ul className="space-y-3">
                      {svc.featureKeys.map((featKey) => (
                        <li key={featKey} className="flex items-start">
                          <svg
                            className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary-600"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-gray-700">{t(featKey)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="aspect-video rounded-lg bg-gray-200" />
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
