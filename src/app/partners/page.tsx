'use client';

import Link from "next/link";
import { useTranslation } from "@/i18n/LanguageProvider";
import { ROUTES } from "@/lib/constants";
import { ArrowRight, Star, Shield, Globe, Award } from "lucide-react";

const partnerCategories = [
  {
    icon: "🏨",
    categoryKey: { fr: "Hébergement", en: "Accommodation" },
    partners: [
      { name: "Fleuve Congo Hotel", location: "Kinshasa", stars: 5 },
      { name: "Hotel Venus", location: "Kinshasa", stars: 4 },
      { name: "Ihusi Hotel", location: "Goma", stars: 4 },
      { name: "Serena Hotel", location: "Goma", stars: 5 },
    ],
  },
  {
    icon: "🚗",
    categoryKey: { fr: "Transport", en: "Transport" },
    partners: [
      { name: "Congo Safari Transfers", location: "Goma", stars: 5 },
      { name: "Kivu Express", location: "Goma", stars: 4 },
      { name: "Kinshasa VIP Cars", location: "Kinshasa", stars: 4 },
      { name: "Air Congo Charter", location: "Kinshasa", stars: 5 },
    ],
  },
  {
    icon: "🦺",
    categoryKey: { fr: "Sécurité", en: "Security" },
    partners: [
      { name: "Virunga Rangers", location: "Virunga", stars: 5 },
      { name: "Congo Security Pro", location: "Kinshasa", stars: 5 },
      { name: "East Africa Protection", location: "Goma", stars: 4 },
    ],
  },
  {
    icon: "🧭",
    categoryKey: { fr: "Guides Locaux", en: "Local Guides" },
    partners: [
      { name: "Gorilla Guides Association", location: "Virunga", stars: 5 },
      { name: "Kinshasa Cultural Tours", location: "Kinshasa", stars: 5 },
      { name: "Forest Explorers DRC", location: "Kisangani", stars: 4 },
    ],
  },
];

const benefits = [
  {
    icon: Globe,
    title: { fr: "Réseau International", en: "International Network" },
    desc: {
      fr: "Accès à notre clientèle internationale de voyageurs premium",
      en: "Access to our international clientele of premium travelers",
    },
  },
  {
    icon: Shield,
    title: { fr: "Partenariat de Confiance", en: "Trusted Partnership" },
    desc: {
      fr: "Un partenariat basé sur la transparence et la fiabilité",
      en: "A partnership based on transparency and reliability",
    },
  },
  {
    icon: Award,
    title: { fr: "Standards de Qualité", en: "Quality Standards" },
    desc: {
      fr: "Nous exigeons les meilleurs standards pour garantir vos expériences",
      en: "We demand the highest standards to guarantee your experiences",
    },
  },
  {
    icon: Star,
    title: { fr: "Visibilité Accrue", en: "Increased Visibility" },
    desc: {
      fr: "Votre entreprise mise en avant sur notre plateforme",
      en: "Your business featured on our platform",
    },
  },
];

export default function PartnersPage() {
  const { t, locale } = useTranslation();
  const lang = locale as "fr" | "en";

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
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-gray-900/70 to-zinc-900/80" />
        <div className="relative container-custom text-white">
          <h1 className="mb-6 animate-fade-in text-white">{t('partners_page.heroTitle')}</h1>
          <p className="mb-8 max-w-2xl text-lg md:text-xl animate-fade-in animation-delay-200 text-white/90">
            {t('partners_page.heroSubtitle')}
          </p>
        </div>
      </section>

      {/* Partner categories */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold">{t('partners_page.title')}</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">{t('partners_page.text')}</p>
          </div>

          <div className="space-y-10">
            {partnerCategories.map((cat, i) => (
              <div key={i}>
                <h3 className="flex items-center gap-3 text-xl font-bold text-gray-900 mb-6">
                  <span className="text-3xl">{cat.icon}</span>
                  {cat.categoryKey[lang]}
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {cat.partners.map((partner, j) => (
                    <div
                      key={j}
                      className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="text-4xl mb-3 text-center">{cat.icon}</div>
                      <h4 className="font-bold text-gray-900 text-center mb-1">{partner.name}</h4>
                      <p className="text-sm text-gray-500 text-center mb-2">{partner.location}</p>
                      <div className="flex justify-center gap-0.5">
                        {Array.from({ length: partner.stars }).map((_, k) => (
                          <Star key={k} className="h-4 w-4 text-amber-400 fill-amber-400" />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits of partnering */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold">
              {lang === "fr" ? "Pourquoi Devenir Partenaire ?" : "Why Become a Partner?"}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <div key={i} className="text-center bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary-500 text-white mb-4">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{b.title[lang]}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{b.desc[lang]}</p>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="text-center bg-primary-50 rounded-2xl p-8 border border-primary-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{t('partners_page.becomePartner')}</h3>
            <p className="text-gray-600 mb-6">{t('partners_page.becomePartnerText')}</p>
            <Link
              href={ROUTES.contact}
              className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-xl font-bold transition-all duration-200"
            >
              {lang === "fr" ? "Nous Contacter" : "Contact Us"}
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
