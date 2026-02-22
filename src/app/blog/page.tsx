import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Découvrez nos articles sur le tourisme en RDC",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <section className="section-padding bg-white border-b border-gray-200">
        <div className="hero-overlay" />
        <div className="container-custom hero-content">
          <h1 className="mb-6 animate-fade-in">Blog</h1>
          <p className="mb-8 max-w-2xl text-lg md:text-xl animate-fade-in animation-delay-200">
            Actualités, conseils et récits de voyage en RDC
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="mb-4">Articles Bientôt Disponibles</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Nous préparons du contenu passionnant sur le tourisme en RDC.
              Revenez bientôt pour découvrir nos articles.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
