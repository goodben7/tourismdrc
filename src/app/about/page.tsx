import type { Metadata } from "next";
import { Target, Eye, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "À Propos",
  description: "Découvrez Tourism DRC, votre partenaire de confiance pour explorer la RDC",
};

const values = [
  {
    icon: Target,
    title: "Notre Mission",
    description:
      "Faire découvrir les richesses naturelles et culturelles de la RDC à travers des expériences authentiques et sécurisées, tout en contribuant au développement du tourisme local.",
  },
  {
    icon: Eye,
    title: "Notre Vision",
    description:
      "Devenir la référence du tourisme en RDC en offrant des services d'excellence et en promouvant un tourisme responsable et durable.",
  },
  {
    icon: Heart,
    title: "Nos Valeurs",
    description:
      "Authenticité, sécurité, excellence, respect de l'environnement et des communautés locales. Nous croyons en un tourisme qui bénéficie à tous.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <section className="section-padding bg-white border-b border-gray-200">
        <div className="hero-overlay" />
        <div className="container-custom hero-content">
          <h1 className="mb-6 animate-fade-in">À Propos de Tourism DRC</h1>
          <p className="mb-8 max-w-2xl text-lg md:text-xl animate-fade-in animation-delay-200">
            Votre partenaire de confiance pour découvrir la beauté de la RDC
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6">Qui Sommes-Nous ?</h2>
            <p className="mb-4 text-lg text-gray-600">
              Tourism DRC est une agence de tourisme spécialisée dans la découverte
              de la République Démocratique du Congo. Nous sommes passionnés par notre
              pays et déterminés à partager ses merveilles avec le monde.
            </p>
            <p className="text-lg text-gray-600">
              Avec une expertise locale approfondie et un réseau de partenaires de confiance,
              nous créons des expériences de voyage uniques qui allient aventure, culture,
              et sécurité.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid gap-8 lg:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="card text-center">
                  <div className="card-content">
                    <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-lg bg-primary-500 text-white">
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="mb-3 text-xl font-semibold">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6">Notre Équipe</h2>
            <p className="text-lg text-gray-600">
              Notre équipe est composée de professionnels passionnés, de guides expérimentés
              et d'experts locaux qui mettent leur savoir-faire à votre service pour créer
              des voyages inoubliables.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
