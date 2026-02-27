'use client';

import Link from "next/link";
import { ROUTES } from "@/lib/constants";
import { useTranslation } from "@/i18n/LanguageProvider";

const categoryKeys = [
  { nameKey: 'packages_page.cat1_name', descKey: 'packages_page.cat1_desc', slug: 'safari' },
  { nameKey: 'packages_page.cat2_name', descKey: 'packages_page.cat2_desc', slug: 'culture-heritage' },
  { nameKey: 'packages_page.cat3_name', descKey: 'packages_page.cat3_desc', slug: 'adventure-nature' },
  { nameKey: 'packages_page.cat4_name', descKey: 'packages_page.cat4_desc', slug: 'business-travel' },
];

export default function PackagesPage() {
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
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-gray-900/70 to-zinc-900/80" />
        <div className="relative container-custom text-white">
          <h1 className="mb-6 animate-fade-in text-white">{t('packages_page.heroTitle')}</h1>
          <p className="mb-8 max-w-2xl text-lg md:text-xl animate-fade-in animation-delay-200 text-white/90">
            {t('packages_page.heroSubtitle')}
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h2 className="mb-4">{t('packages_page.categoriesTitle')}</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              {t('packages_page.categoriesSubtitle')}
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {categoryKeys.map((category) => (
              <div
                key={category.slug}
                className="card group text-center"
              >
                <div className="card-content">
                  <h3 className="mb-2 text-xl font-semibold group-hover:text-primary-600 transition-colors">
                    {t(category.nameKey)}
                  </h3>
                  <p className="text-gray-600">{t(category.descKey)}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="mb-6 text-gray-600">
              {t('packages_page.comingSoon')}
            </p>
            <Link href={ROUTES.booking} className="btn btn-primary">
              {t('packages_page.requestQuote')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
