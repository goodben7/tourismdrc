'use client';

import Link from "next/link";
import Image from "next/image";
import { Plane, Hotel, Shield, MapPin, Users, Briefcase } from "lucide-react";
import HeroSlider from "@/components/sections/HeroSlider";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import CTASection from "@/components/sections/CTASection";
import ServiceCard from "@/components/cards/ServiceCard";
import { ROUTES } from "@/lib/constants";
import { useTranslation } from "@/i18n/LanguageProvider";

const services = [
  {
    id: "1",
    slug: "travel-organization",
    name: "Organisation de Voyage",
    type: "travel-organization" as const,
    shortDescription: "Planification complète de votre séjour sur mesure",
    description: "Service complet d'organisation de voyage",
    icon: "Plane",
    features: [],
    createdAt: "",
    updatedAt: "",
  },
  {
    id: "2",
    slug: "accommodation",
    name: "Hébergement",
    type: "accommodation" as const,
    shortDescription: "Sélection d'hôtels et lodges de qualité",
    description: "Hébergements premium",
    icon: "Hotel",
    features: [],
    createdAt: "",
    updatedAt: "",
  },
  {
    id: "3",
    slug: "transport",
    name: "Transport",
    type: "transport" as const,
    shortDescription: "Solutions de transport sûres et confortables",
    description: "Transport professionnel",
    icon: "MapPin",
    features: [],
    createdAt: "",
    updatedAt: "",
  },
  {
    id: "4",
    slug: "security",
    name: "Sécurité & Assistance",
    type: "security-assistance" as const,
    shortDescription: "Accompagnement et sécurité 24/7",
    description: "Sécurité garantie",
    icon: "Shield",
    features: [],
    createdAt: "",
    updatedAt: "",
  },
  {
    id: "5",
    slug: "translation",
    name: "Traduction",
    type: "translation" as const,
    shortDescription: "Services de traduction et interprétation",
    description: "Traduction professionnelle",
    icon: "Users",
    features: [],
    createdAt: "",
    updatedAt: "",
  },
  {
    id: "6",
    slug: "business",
    name: "Assistance Locale",
    type: "local-assistance" as const,
    shortDescription: "Support local pour vos démarches",
    description: "Assistance locale",
    icon: "Briefcase",
    features: [],
    createdAt: "",
    updatedAt: "",
  },
];

const iconMap = {
  Plane,
  Hotel,
  Shield,
  MapPin,
  Users,
  Briefcase,
};

export default function Home() {
  const { t, locale } = useTranslation();

  return (
    <>
      {/* Hero Slider */}
      <HeroSlider />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mb-16 text-center">
            <div className="mb-4 inline-block rounded-lg bg-primary-100 px-6 py-2 text-sm font-semibold text-primary-700">
              {t('home.welcome')}
            </div>
            <h2 className="mb-6 text-4xl md:text-5xl font-bold">{t('home.companyName')}</h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600 leading-relaxed">
              {t('home.intro')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: t('home.feature1_title'),
                description: t('home.feature1_desc')
              },
              {
                title: t('home.feature2_title'),
                description: t('home.feature2_desc')
              },
              {
                title: t('home.feature3_title'),
                description: t('home.feature3_desc')
              }
            ].map((item, index) => (
              <div key={index} className="feature-card text-center">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        
        <div className="container-custom">
          <div className="mb-16 text-center">
            <div className="mb-4 inline-block rounded-lg bg-primary-100 px-6 py-2 text-sm font-semibold text-primary-700">
              {t('home.servicesTitle')}
            </div>
            <h2 className="mb-6 text-4xl md:text-5xl font-bold">{t('home.servicesSubtitle')}</h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              {t('home.servicesIntro')}
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = iconMap[service.icon as keyof typeof iconMap];
              return (
                <div key={service.id} className="group bg-white rounded-lg p-8 border border-gray-200 hover:border-primary-400 transition-all duration-200">
                  <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-lg bg-primary-500 text-white">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {service.shortDescription}
                  </p>
                  <div className="flex items-center text-primary-600 font-semibold group-hover:gap-2 transition-all">
                    En savoir plus
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-16 text-center">
            <Link 
              href={ROUTES.services}
              className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
            >
              {t('home.viewAllServices')}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mb-16 text-center">
            <div className="mb-4 inline-block rounded-lg bg-secondary-100 px-6 py-2 text-sm font-semibold text-secondary-700">
              Forfaits Populaires
            </div>
            <h2 className="mb-6 text-4xl md:text-5xl font-bold">Nos Forfaits Phares</h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              Découvrez nos forfaits les plus demandés pour explorer la RDC
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: "🦍",
                title: "Safari Gorilles",
                description: "Rencontrez les majestueux gorilles de montagne dans leur habitat naturel",
                price: "À partir de $2,500",
                duration: "5-7 jours",
                highlight: true
              },
              {
                icon: "🌋",
                title: "Volcans & Nature",
                description: "Explorez les volcans actifs et les paysages spectaculaires du Virunga",
                price: "À partir de $1,800",
                duration: "4-6 jours",
                highlight: false
              },
              {
                icon: "🏛️",
                title: "Culture & Patrimoine",
                description: "Découvrez l'histoire riche et la culture vibrante de Kinshasa",
                price: "À partir de $1,200",
                duration: "3-5 jours",
                highlight: false
              }
            ].map((pkg, index) => (
              <div 
                key={index} 
                className={`relative bg-gray-50 rounded-lg p-8 border-2 transition-all duration-200 ${
                  pkg.highlight ? 'border-primary-500' : 'border-gray-200'
                }`}
              >
                {pkg.highlight && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary-500 text-white px-6 py-2 rounded-lg text-sm font-semibold">
                    ⭐ Le Plus Populaire
                  </div>
                )}
                <div className="text-6xl mb-6 text-center">{pkg.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-center text-gray-900">{pkg.title}</h3>
                <p className="text-gray-600 text-center mb-6 leading-relaxed">{pkg.description}</p>
                <div className="border-t border-gray-200 pt-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Durée</span>
                    <span className="font-semibold text-gray-900">{pkg.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Prix</span>
                    <span className="font-bold text-primary-600 text-xl">{pkg.price}</span>
                  </div>
                </div>
                <button className="mt-6 w-full bg-primary-500 hover:bg-primary-600 text-white py-3 rounded-lg font-semibold transition-all duration-200">
                  Réserver Maintenant
                </button>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link 
              href={ROUTES.packages}
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-primary-600 border-2 border-primary-500 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
            >
              Voir Tous les Forfaits
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <WhyChooseUs />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-primary-600">
              Témoignages
            </p>
            <h2 className="mb-4">Ce Que Disent Nos Clients</h2>
          </div>
          <div className="text-center">
            <p className="text-gray-600">
              Les témoignages de nos clients satisfaits seront bientôt disponibles.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
