'use client';

import { notFound } from "next/navigation";
import Link from "next/link";
import { MapPin, Clock, Thermometer, Plane, Hotel, ArrowRight, Check, Tag } from "lucide-react";
import { useTranslation } from "@/i18n/LanguageProvider";
import { getDestinationBySlug } from "@/data/destinations";
import { ROUTES } from "@/lib/constants";
import { use } from "react";

interface DestinationPageProps {
  params: Promise<{ slug: string }>;
}

export default function DestinationPage({ params }: DestinationPageProps) {
  const { slug } = use(params);
  const { locale, t } = useTranslation();
  const destination = getDestinationBySlug(slug);

  if (!destination) {
    notFound();
  }

  const lang = locale as "fr" | "en";

  const practicalInfoItems = [
    {
      icon: Clock,
      label: lang === "fr" ? "Meilleure période" : "Best time",
      value: destination.practicalInfo.bestTime[lang],
    },
    {
      icon: Thermometer,
      label: lang === "fr" ? "Climat" : "Climate",
      value: destination.practicalInfo.climate[lang],
    },
    {
      icon: Plane,
      label: lang === "fr" ? "Comment y aller" : "How to get there",
      value: destination.practicalInfo.howToGetThere[lang],
    },
    {
      icon: Hotel,
      label: lang === "fr" ? "Hébergement" : "Accommodation",
      value: destination.practicalInfo.accommodation[lang],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage: `url(${destination.heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* fallback gradient + dark overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${destination.heroGradient} opacity-70`} />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative container-custom py-24 md:py-36">
          <div className="max-w-3xl">
            <div className="mb-4 flex flex-wrap gap-2">
              {destination.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 rounded-full bg-white/20 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-white border border-white/30"
                >
                  <Tag className="h-3 w-3" />
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-6xl">{destination.heroIcon}</span>
            </div>
            <h1 className="mb-4 text-white text-5xl md:text-6xl font-bold animate-fade-in">
              {destination.name[lang]}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 animate-fade-in animation-delay-200 leading-relaxed">
              {destination.tagline[lang]}
            </p>
          </div>
        </div>

        {/* Stats bar */}
        <div className="relative bg-black/40 backdrop-blur-sm border-t border-white/10">
          <div className="container-custom py-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {destination.stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-white/70 uppercase tracking-wide">{stat.label[lang]}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2">
              <div className="mb-3 inline-flex items-center gap-2 text-primary-600 font-semibold text-sm uppercase tracking-wide">
                <MapPin className="h-4 w-4" />
                {lang === "fr" ? "À propos" : "About"}
              </div>
              <h2 className="mb-6 text-3xl font-bold text-gray-900">
                {destination.name[lang]}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                {destination.description[lang]}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {destination.longDescription[lang]}
              </p>
            </div>

            {/* Activities sidebar */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <h3 className="font-bold text-gray-900 text-lg mb-4">
                {lang === "fr" ? "Activités" : "Activities"}
              </h3>
              <ul className="space-y-2">
                {destination.activities.map((activity, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-700">
                    <Check className="h-4 w-4 text-primary-500 flex-shrink-0" />
                    {activity[lang]}
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <Link
                  href={ROUTES.booking}
                  className="flex items-center justify-center gap-2 w-full bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200"
                >
                  {t('nav.getQuote')}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold text-gray-900">
              {lang === "fr" ? "Points Forts" : "Highlights"}
            </h2>
            <p className="text-gray-600 text-lg">
              {lang === "fr"
                ? "Ce qu'il ne faut pas manquer"
                : "What you must not miss"}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {destination.highlights.map((highlight, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="text-4xl mb-4">{highlight.icon}</div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">
                  {highlight.title[lang]}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {highlight.description[lang]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practical Info */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold text-gray-900">
              {lang === "fr" ? "Informations Pratiques" : "Practical Information"}
            </h2>
            <p className="text-gray-600 text-lg">
              {lang === "fr"
                ? "Tout ce qu'il faut savoir avant de partir"
                : "Everything you need to know before you go"}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {practicalInfoItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="flex items-start gap-4 bg-gray-50 rounded-2xl p-6 border border-gray-100"
                >
                  <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-xl bg-primary-500 text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-primary-600 uppercase tracking-wide mb-1">
                      {item.label}
                    </div>
                    <p className="text-gray-700 leading-relaxed">{item.value}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Photo gallery placeholder */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="mb-8 text-3xl font-bold text-gray-900 text-center">
            {lang === "fr" ? "Galerie Photos" : "Photo Gallery"}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
              <div
                key={n}
                className={`rounded-2xl bg-gradient-to-br ${destination.heroGradient} opacity-60 ${
                  n === 1 ? "col-span-2 row-span-2 aspect-square" : "aspect-square"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary-500">
        <div className="container-custom text-center">
          <h2 className="text-white mb-4 text-3xl font-bold">
            {lang === "fr"
              ? `Prêt à visiter ${destination.name.fr} ?`
              : `Ready to visit ${destination.name.en}?`}
          </h2>
          <p className="text-white/90 mb-8 text-lg max-w-2xl mx-auto">
            {lang === "fr"
              ? "Notre équipe crée votre voyage sur mesure. Contactez-nous pour un devis personnalisé."
              : "Our team creates your tailor-made trip. Contact us for a personalized quote."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={ROUTES.booking}
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-primary-600 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200"
            >
              {t('nav.getQuote')}
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href={ROUTES.destinations}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border-2 border-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200"
            >
              {lang === "fr" ? "Toutes les destinations" : "All destinations"}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
