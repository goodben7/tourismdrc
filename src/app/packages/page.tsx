import type { Metadata } from "next";
import Link from "next/link";
import { ROUTES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Forfaits",
  description: "Découvrez nos forfaits de voyage pour explorer la RDC",
};

const categories = [
  {
    name: "Safari",
    description: "Découvrez la faune exceptionnelle de la RDC",
    slug: "safari",
  },
  {
    name: "Culture & Patrimoine",
    description: "Plongez dans la richesse culturelle congolaise",
    slug: "culture-heritage",
  },
  {
    name: "Aventure & Nature",
    description: "Explorez les paysages époustouflants",
    slug: "adventure-nature",
  },
  {
    name: "Voyage d'Affaires",
    description: "Solutions professionnelles pour vos déplacements",
    slug: "business-travel",
  },
];

export default function PackagesPage() {
  return (
    <div className="min-h-screen">
      <section className="section-padding bg-white border-b border-gray-200">
        <div className="hero-overlay" />
        <div className="container-custom hero-content">
          <h1 className="mb-6 animate-fade-in">Nos Forfaits</h1>
          <p className="mb-8 max-w-2xl text-lg md:text-xl animate-fade-in animation-delay-200">
            Des expériences sur mesure pour tous les voyageurs
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h2 className="mb-4">Catégories de Forfaits</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Choisissez le type d'expérience qui vous correspond
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <div
                key={category.slug}
                className="card group text-center"
              >
                <div className="card-content">
                  <h3 className="mb-2 text-xl font-semibold group-hover:text-primary-600 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-gray-600">{category.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="mb-6 text-gray-600">
              Nos forfaits détaillés seront bientôt disponibles.
            </p>
            <Link href={ROUTES.booking} className="btn btn-primary">
              Demander un Devis Personnalisé
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
