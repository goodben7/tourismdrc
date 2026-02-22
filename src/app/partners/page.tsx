import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partenaires",
  description: "Nos partenaires de confiance pour vos voyages en RDC",
};

export default function PartnersPage() {
  return (
    <div className="min-h-screen">
      <section className="section-padding bg-white border-b border-gray-200">
        <div className="hero-overlay" />
        <div className="container-custom hero-content">
          <h1 className="mb-6 animate-fade-in">Nos Partenaires</h1>
          <p className="mb-8 max-w-2xl text-lg md:text-xl animate-fade-in animation-delay-200">
            Un réseau de partenaires de confiance pour votre sécurité et votre confort
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="mb-4">Partenaires de Confiance</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Nous travaillons avec les meilleurs hôtels, compagnies de transport,
              et guides locaux pour garantir la qualité de votre expérience.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
