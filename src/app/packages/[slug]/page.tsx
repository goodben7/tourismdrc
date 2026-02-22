import type { Metadata } from "next";
import Link from "next/link";
import { ROUTES } from "@/lib/constants";

interface PackagePageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: PackagePageProps): Promise<Metadata> {
  return {
    title: `Forfait: ${params.slug}`,
    description: `Découvrez notre forfait ${params.slug} pour explorer la RDC`,
  };
}

export default function PackagePage({ params }: PackagePageProps) {
  return (
    <div className="min-h-screen">
      <section className="hero-section bg-gradient-to-br from-secondary-900 to-secondary-700">
        <div className="hero-overlay" />
        <div className="container-custom hero-content">
          <h1 className="mb-6 animate-fade-in capitalize">{params.slug.replace(/-/g, ' ')}</h1>
          <p className="mb-8 max-w-2xl text-lg md:text-xl animate-fade-in animation-delay-200">
            Un forfait exceptionnel pour découvrir la RDC
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6">Détails du Forfait</h2>
            <p className="mb-6 text-lg text-gray-600">
              Les informations détaillées sur ce forfait seront bientôt disponibles.
            </p>
            
            <div className="rounded-xl bg-primary-50 p-8">
              <h3 className="mb-4 text-xl font-semibold">Intéressé par ce forfait ?</h3>
              <p className="mb-6 text-gray-600">
                Contactez-nous pour obtenir un devis personnalisé et des informations détaillées.
              </p>
              <Link href={ROUTES.booking} className="btn btn-primary">
                Demander un Devis
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
