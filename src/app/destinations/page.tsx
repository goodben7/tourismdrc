import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Destinations",
  description: "Découvrez les plus belles destinations de la République Démocratique du Congo",
};

export default function DestinationsPage() {
  return (
    <div className="min-h-screen">
      <section className="section-padding bg-white border-b border-gray-200">
        <div className="hero-overlay" />
        <div className="container-custom hero-content">
          <h1 className="mb-6 animate-fade-in">Nos Destinations</h1>
          <p className="mb-8 max-w-2xl text-lg md:text-xl animate-fade-in animation-delay-200">
            Explorez les merveilles naturelles et culturelles de la RDC
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="mb-4">Destinations Bientôt Disponibles</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Nous préparons une sélection exceptionnelle de destinations à travers la RDC.
              Contactez-nous pour plus d'informations sur nos circuits disponibles.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
