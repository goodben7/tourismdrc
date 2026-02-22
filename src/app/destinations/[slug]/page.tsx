import type { Metadata } from "next";
import { notFound } from "next/navigation";

interface DestinationPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: DestinationPageProps): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: `Destination: ${slug}`,
    description: `Découvrez ${slug} en République Démocratique du Congo`,
  };
}

export default async function DestinationPage({ params }: DestinationPageProps) {
  const { slug } = await params;
  return (
    <div className="min-h-screen">
      <section className="hero-section bg-gradient-to-br from-primary-900 to-primary-700">
        <div className="hero-overlay" />
        <div className="container-custom hero-content">
          <h1 className="mb-6 animate-fade-in capitalize">{slug.replace(/-/g, ' ')}</h1>
          <p className="mb-8 max-w-2xl text-lg md:text-xl animate-fade-in animation-delay-200">
            Découvrez cette destination exceptionnelle
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6">À Propos de cette Destination</h2>
            <p className="mb-4 text-lg text-gray-600">
              Les informations détaillées sur cette destination seront bientôt disponibles.
            </p>
            <p className="text-lg text-gray-600">
              Contactez-nous pour en savoir plus sur les activités, hébergements et forfaits disponibles.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
