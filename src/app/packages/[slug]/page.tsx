'use client';

import { notFound } from "next/navigation";
import Link from "next/link";
import { Clock, Users, BarChart, DollarSign, Check, X, ArrowRight, Tag, MapPin } from "lucide-react";
import { useTranslation } from "@/i18n/LanguageProvider";
import { getPackageBySlug } from "@/data/packages";
import { ROUTES } from "@/lib/constants";
import { use } from "react";

interface PackagePageProps {
  params: Promise<{ slug: string }>;
}

export default function PackagePage({ params }: PackagePageProps) {
  const { slug } = use(params);
  const { locale, t } = useTranslation();
  const pkg = getPackageBySlug(slug);

  if (!pkg) {
    notFound();
  }

  const lang = locale as "fr" | "en";

  const stats = [
    { icon: Clock, label: lang === "fr" ? "Durée" : "Duration", value: pkg.duration[lang] },
    { icon: Users, label: lang === "fr" ? "Groupe" : "Group size", value: pkg.groupSize[lang] },
    { icon: BarChart, label: lang === "fr" ? "Difficulté" : "Difficulty", value: pkg.difficulty[lang] },
    { icon: DollarSign, label: lang === "fr" ? "Prix" : "Price", value: pkg.price[lang] },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage: `url(${pkg.heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${pkg.heroGradient} opacity-70`} />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative container-custom py-24 md:py-36">
          <div className="max-w-3xl">
            <div className="mb-4 flex flex-wrap gap-2">
              {pkg.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 rounded-full bg-white/20 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-white border border-white/30"
                >
                  <Tag className="h-3 w-3" />
                  {tag}
                </span>
              ))}
            </div>
            <div className="text-6xl mb-4">{pkg.heroIcon}</div>
            <h1 className="mb-4 text-white text-5xl md:text-6xl font-bold animate-fade-in">
              {pkg.name[lang]}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 animate-fade-in animation-delay-200 leading-relaxed">
              {pkg.tagline[lang]}
            </p>
          </div>
        </div>

        {/* Stats bar */}
        <div className="relative bg-black/40 backdrop-blur-sm border-t border-white/10">
          <div className="container-custom py-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div key={i} className="flex items-center gap-3 justify-center">
                    <Icon className="h-5 w-5 text-white/60" />
                    <div>
                      <div className="text-xs text-white/60 uppercase tracking-wide">{stat.label}</div>
                      <div className="text-sm font-bold text-white">{stat.value}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2 space-y-10">
              {/* Description */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {lang === "fr" ? "Description" : "Description"}
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {pkg.description[lang]}
                </p>
              </div>

              {/* Itinerary */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  {lang === "fr" ? "Programme Jour par Jour" : "Day by Day Itinerary"}
                </h2>
                <div className="space-y-4">
                  {pkg.itinerary.map((day) => (
                    <div key={day.day} className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-500 text-white flex items-center justify-center font-bold text-sm">
                        J{day.day}
                      </div>
                      <div className="flex-1 bg-gray-50 rounded-xl p-5 border border-gray-100">
                        <h3 className="font-bold text-gray-900 text-lg mb-2">
                          {lang === "fr" ? `Jour ${day.day}` : `Day ${day.day}`} — {day.title[lang]}
                        </h3>
                        <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                          {day.description[lang]}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {day.activities.map((act, i) => (
                            <span
                              key={i}
                              className="inline-flex items-center gap-1 text-xs bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium"
                            >
                              <Check className="h-3 w-3" />
                              {act[lang]}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Destinations */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {lang === "fr" ? "Destinations Visitées" : "Destinations Visited"}
                </h2>
                <div className="flex flex-wrap gap-3">
                  {pkg.destinations.map((dest) => (
                    <Link
                      key={dest}
                      href={`${ROUTES.destinations}/${dest}`}
                      className="inline-flex items-center gap-2 bg-gray-100 hover:bg-primary-100 hover:text-primary-700 text-gray-700 px-4 py-2 rounded-full text-sm font-medium transition-colors"
                    >
                      <MapPin className="h-4 w-4" />
                      {dest.charAt(0).toUpperCase() + dest.slice(1).replace(/-/g, ' ')}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* CTA Card */}
              <div className={`rounded-2xl bg-gradient-to-br ${pkg.heroGradient} p-6 text-white`}>
                <div className="text-3xl font-bold mb-1">{pkg.price[lang]}</div>
                <p className="text-white/80 text-sm mb-6">
                  {lang === "fr" ? "par personne, tout compris" : "per person, all inclusive"}
                </p>
                <Link
                  href={ROUTES.booking}
                  className="flex items-center justify-center gap-2 w-full bg-white text-gray-900 hover:bg-gray-100 px-6 py-4 rounded-xl font-bold text-base transition-all duration-200"
                >
                  {t('nav.getQuote')}
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  href={ROUTES.contact}
                  className="flex items-center justify-center gap-2 w-full mt-3 bg-white/10 hover:bg-white/20 text-white border border-white/30 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200"
                >
                  {lang === "fr" ? "Poser une question" : "Ask a question"}
                </Link>
              </div>

              {/* Included */}
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  {lang === "fr" ? "Inclus" : "Included"}
                </h3>
                <ul className="space-y-2">
                  {pkg.included.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                      {item[lang]}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Not Included */}
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <X className="h-5 w-5 text-red-400" />
                  {lang === "fr" ? "Non inclus" : "Not included"}
                </h3>
                <ul className="space-y-2">
                  {pkg.notIncluded.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <X className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" />
                      {item[lang]}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className={`section-padding bg-gradient-to-br ${pkg.heroGradient}`}>
        <div className="container-custom text-center">
          <h2 className="text-white mb-4 text-3xl font-bold">
            {lang === "fr"
              ? `Intéressé par "${pkg.name.fr}" ?`
              : `Interested in "${pkg.name.en}"?`}
          </h2>
          <p className="text-white/90 mb-8 text-lg max-w-2xl mx-auto">
            {lang === "fr"
              ? "Contactez-nous pour personnaliser ce forfait selon vos besoins et obtenir un devis détaillé."
              : "Contact us to customize this package to your needs and get a detailed quote."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={ROUTES.booking}
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200"
            >
              {t('nav.getQuote')}
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href={`${ROUTES.packages}`}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border-2 border-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200"
            >
              {lang === "fr" ? "Voir tous les forfaits" : "View all packages"}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
