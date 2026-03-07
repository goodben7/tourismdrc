'use client';

import { Check, Star } from "lucide-react";
import { useTranslation } from "@/i18n/LanguageProvider";
import Link from "next/link";
import Image from "next/image";
import { ROUTES } from "@/lib/constants";

export default function PackagesServicesPage() {
  const { t } = useTranslation();

  const packages = [
    {
      name: t('packages.standard.name'),
      duration: t('packages.standard.duration'),
      included: [
        t('packages.standard.item1'),
        t('packages.standard.item2'),
        t('packages.standard.item3'),
        t('packages.standard.item4'),
        t('packages.standard.item5'),
        t('packages.standard.item6'),
        t('packages.standard.item7'),
        t('packages.standard.item8'),
      ],
      optional: [
        t('packages.standard.opt1'),
        t('packages.standard.opt2'),
        t('packages.standard.opt3'),
        t('packages.standard.opt4'),
      ],
      featured: false,
    },
    {
      name: t('packages.silver.name'),
      duration: t('packages.silver.duration'),
      included: [
        t('packages.silver.item1'),
        t('packages.silver.item2'),
        t('packages.silver.item3'),
        t('packages.silver.item4'),
        t('packages.silver.item5'),
        t('packages.silver.item6'),
        t('packages.silver.item7'),
        t('packages.silver.item8'),
      ],
      optional: [
        t('packages.silver.opt1'),
        t('packages.silver.opt2'),
        t('packages.silver.opt3'),
        t('packages.silver.opt4'),
        t('packages.silver.opt5'),
      ],
      featured: true,
    },
    {
      name: t('packages.gold.name'),
      duration: t('packages.gold.duration'),
      included: [
        t('packages.gold.item1'),
        t('packages.gold.item2'),
        t('packages.gold.item3'),
        t('packages.gold.item4'),
        t('packages.gold.item5'),
        t('packages.gold.item6'),
        t('packages.gold.item7'),
        t('packages.gold.item8'),
        t('packages.gold.item9'),
        t('packages.gold.item10'),
        t('packages.gold.item11'),
        t('packages.gold.item12'),
        t('packages.gold.item13'),
        t('packages.gold.item14'),
      ],
      optional: [
        t('packages.gold.opt1'),
      ],
      featured: false,
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden py-32">
        <Image
          src="/images/destinations/forest.jpeg"
          alt="Packages Services Background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/80 via-teal-900/70 to-cyan-900/80" />
        <div className="relative container-custom text-center text-white">
          <h1 className="mb-6 animate-fade-in text-white">{t('packages_services_page.heroTitle')}</h1>
          <p className="mb-8 max-w-3xl mx-auto text-xl md:text-2xl text-white/90 animate-fade-in animation-delay-200">
            {t('packages_services_page.heroSubtitle')}
          </p>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative card h-full flex flex-col ${pkg.featured ? 'ring-2 ring-primary-500' : ''
                  }`}
              >
                {pkg.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="badge badge-warning flex items-center gap-1 px-4 py-2">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="font-bold">{t('packages_services_page.mostPopular')}</span>
                    </div>
                  </div>
                )}

                <div className="card-content flex-1 flex flex-col">
                  <div className="text-center mb-8 pb-6 border-b border-gray-200">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {pkg.name}
                    </h3>
                    <p className="text-lg text-gray-600">{pkg.duration}</p>
                  </div>

                  <div className="mb-6 flex-1">
                    <h4 className="text-sm font-bold text-primary-600 uppercase tracking-wide mb-4">
                      {t('packages.standard.included')}
                    </h4>
                    <ul className="space-y-3">
                      {pkg.included.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-primary-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {pkg.optional.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-sm font-bold text-gray-600 uppercase tracking-wide mb-4">
                        {t('packages.standard.optional')}
                      </h4>
                      <ul className="space-y-3">
                        {pkg.optional.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="h-5 w-5 rounded border-2 border-gray-300 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-600 leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <Link
                      href={ROUTES.booking}
                      className={`block w-full text-center px-6 py-4 rounded-lg font-bold text-lg transition-all duration-200 ${pkg.featured
                          ? 'bg-primary-500 hover:bg-primary-600 text-white'
                          : 'bg-white hover:bg-gray-50 text-primary-600 border-2 border-primary-600'
                        }`}
                    >
                      {t('nav.getQuote')}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6 text-3xl font-bold">{t('packages_services_page.customTitle')}</h2>
            <p className="text-lg text-gray-700 mb-8">
              {t('packages_services_page.customText')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:contact@tourismdrc.com"
                className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
              >
                {t('about.contactEmail')}
              </a>
              <Link
                href={ROUTES.contact}
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-primary-600 border-2 border-primary-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
              >
                {t('about.contactPage')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
