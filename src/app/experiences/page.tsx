'use client';

import type { Metadata } from "next";
import { Compass, Calendar, Mountain, Sparkles } from "lucide-react";
import { useTranslation } from "@/i18n/LanguageProvider";
import Link from "next/link";
import { ROUTES } from "@/lib/constants";

export default function ExperiencesPage() {
  const { t } = useTranslation();

  const experiencesByType = [
    {
      title: t('megaMenu.experiences.safari'),
      description: t('megaMenu.experiences.safari_desc'),
      icon: Compass,
      color: 'bg-green-500',
    },
    {
      title: t('megaMenu.experiences.culture'),
      description: t('megaMenu.experiences.culture_desc'),
      icon: Sparkles,
      color: 'bg-purple-500',
    },
    {
      title: t('megaMenu.experiences.adventure'),
      description: t('megaMenu.experiences.adventure_desc'),
      icon: Mountain,
      color: 'bg-orange-500',
    },
    {
      title: t('megaMenu.experiences.wellness'),
      description: t('megaMenu.experiences.wellness_desc'),
      icon: Calendar,
      color: 'bg-blue-500',
    },
  ];

  const experiencesByDuration = [
    {
      title: t('megaMenu.experiences.weekend'),
      description: t('megaMenu.experiences.weekend_desc'),
      duration: '2-3 jours',
    },
    {
      title: t('megaMenu.experiences.week'),
      description: t('megaMenu.experiences.week_desc'),
      duration: '5-7 jours',
    },
    {
      title: t('megaMenu.experiences.extended'),
      description: t('megaMenu.experiences.extended_desc'),
      duration: '10+ jours',
    },
    {
      title: t('megaMenu.experiences.custom'),
      description: t('megaMenu.experiences.custom_desc'),
      duration: 'Sur mesure',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-white border-b border-gray-200">
        <div className="container-custom text-center">
          <h1 className="mb-6 animate-fade-in">Expériences</h1>
          <p className="mb-8 max-w-3xl mx-auto text-xl md:text-2xl text-gray-700 animate-fade-in animation-delay-200">
            Découvrez nos expériences uniques au cœur de la RDC
          </p>
        </div>
      </section>

      {/* By Type Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold">{t('megaMenu.experiences.byType')}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choisissez votre type d'expérience
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {experiencesByType.map((exp, index) => {
              const Icon = exp.icon;
              return (
                <div key={index} className="feature-card text-center group cursor-pointer">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${exp.color} text-white mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{exp.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{exp.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* By Duration Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold">{t('megaMenu.experiences.byDuration')}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Sélectionnez la durée de votre séjour
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {experiencesByDuration.map((exp, index) => (
              <div key={index} className="card group cursor-pointer">
                <div className="card-content text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 mb-6 group-hover:bg-primary-600 group-hover:text-white transition-all">
                    <Calendar className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{exp.title}</h3>
                  <p className="text-sm font-semibold text-primary-600 mb-3">{exp.duration}</p>
                  <p className="text-gray-600 leading-relaxed">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Experiences */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold">À Découvrir</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Nos expériences phares
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="card overflow-hidden group cursor-pointer">
              <div className="relative h-64 bg-gradient-to-br from-green-400 to-green-600">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="text-3xl font-bold mb-2">Safari Gorilles</h3>
                    <p className="text-lg">Rencontre avec les gorilles de montagne</p>
                  </div>
                </div>
              </div>
              <div className="card-content">
                <p className="text-gray-600 leading-relaxed">
                  Une expérience inoubliable au cœur du Parc des Virunga pour observer les gorilles dans leur habitat naturel.
                </p>
              </div>
            </div>
            <div className="card overflow-hidden group cursor-pointer">
              <div className="relative h-64 bg-gradient-to-br from-purple-400 to-purple-600">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="text-3xl font-bold mb-2">Circuit Culturel</h3>
                    <p className="text-lg">Art et traditions congolaises</p>
                  </div>
                </div>
              </div>
              <div className="card-content">
                <p className="text-gray-600 leading-relaxed">
                  Immersion dans la richesse culturelle de la RDC, de Kinshasa aux villages traditionnels.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6 text-3xl font-bold">Prêt à Vivre l'Aventure ?</h2>
            <p className="text-lg text-gray-700 mb-8">
              Contactez-nous pour créer votre expérience sur mesure
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href={ROUTES.booking}
                className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
              >
                {t('nav.getQuote')}
              </Link>
              <Link
                href={ROUTES.contact}
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-primary-600 border-2 border-primary-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
              >
                {t('nav.contact')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
