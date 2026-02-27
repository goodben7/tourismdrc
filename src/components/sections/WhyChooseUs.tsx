'use client';

import { Shield, Users, Award, HeartHandshake } from "lucide-react";
import { useTranslation } from "@/i18n/LanguageProvider";

export default function WhyChooseUs() {
  const { t } = useTranslation();

  const features = [
    {
      icon: Shield,
      titleKey: 'whyChooseUs.feat1_title',
      descKey: 'whyChooseUs.feat1_desc',
    },
    {
      icon: Users,
      titleKey: 'whyChooseUs.feat2_title',
      descKey: 'whyChooseUs.feat2_desc',
    },
    {
      icon: Award,
      titleKey: 'whyChooseUs.feat3_title',
      descKey: 'whyChooseUs.feat3_desc',
    },
    {
      icon: HeartHandshake,
      titleKey: 'whyChooseUs.feat4_title',
      descKey: 'whyChooseUs.feat4_desc',
    },
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <h2 className="mb-4">{t('whyChooseUs.title')}</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            {t('whyChooseUs.subtitle')}
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.titleKey}
                className="group text-center animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-lg bg-primary-500 text-white">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{t(feature.titleKey)}</h3>
                <p className="text-gray-600">{t(feature.descKey)}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
