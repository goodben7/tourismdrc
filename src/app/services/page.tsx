import type { Metadata } from "next";
import { Plane, Hotel, Car, Shield, Languages, HeartHandshake } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description: "Découvrez tous nos services pour votre voyage en RDC",
};

const services = [
  {
    icon: Plane,
    title: "Organisation de Voyage",
    description: "Planification complète de votre séjour sur mesure, de A à Z.",
    features: [
      "Conception d'itinéraires personnalisés",
      "Réservation de vols et transferts",
      "Planification d'activités",
      "Assistance administrative",
    ],
  },
  {
    icon: Hotel,
    title: "Hébergement",
    description: "Sélection d'hôtels et lodges de qualité adaptés à vos besoins.",
    features: [
      "Hôtels de luxe et boutiques",
      "Lodges en pleine nature",
      "Hébergements authentiques",
      "Options pour tous budgets",
    ],
  },
  {
    icon: Car,
    title: "Transport",
    description: "Solutions de transport sûres et confortables.",
    features: [
      "Véhicules climatisés avec chauffeur",
      "Transferts aéroport",
      "Location de véhicules",
      "Transport inter-villes",
    ],
  },
  {
    icon: Shield,
    title: "Sécurité & Assistance",
    description: "Accompagnement et sécurité 24/7 pendant votre séjour.",
    features: [
      "Assistance 24h/24",
      "Guides de sécurité",
      "Assurance voyage",
      "Support d'urgence",
    ],
  },
  {
    icon: Languages,
    title: "Traduction",
    description: "Services de traduction et interprétation professionnels.",
    features: [
      "Interprètes qualifiés",
      "Traduction de documents",
      "Support multilingue",
      "Accompagnement linguistique",
    ],
  },
  {
    icon: HeartHandshake,
    title: "Assistance Locale",
    description: "Support local pour faciliter vos démarches.",
    features: [
      "Contacts locaux",
      "Assistance administrative",
      "Recommandations locales",
      "Support culturel",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <section className="section-padding bg-white border-b border-gray-200">
        <div className="hero-overlay" />
        <div className="container-custom hero-content">
          <h1 className="mb-6 animate-fade-in">Nos Services</h1>
          <p className="mb-8 max-w-2xl text-lg md:text-xl animate-fade-in animation-delay-200">
            Des services complets pour un voyage sans souci en RDC
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid gap-8 lg:gap-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center"
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-lg bg-primary-500 text-white">
                      <Icon className="h-8 w-8" />
                    </div>
                    <h2 className="mb-4">{service.title}</h2>
                    <p className="mb-6 text-lg text-gray-600">
                      {service.description}
                    </p>
                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start">
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
                          <span className="text-gray-700">{feature}</span>
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
