import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions d'Utilisation",
  description: "Conditions d'utilisation de Tourism DRC",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <h1 className="mb-8">Conditions d'Utilisation</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600">
              Dernière mise à jour: {new Date().toLocaleDateString("fr-FR")}
            </p>

            <h2>1. Acceptation des Conditions</h2>
            <p>
              En utilisant les services de Tourism DRC, vous acceptez les présentes
              conditions d'utilisation.
            </p>

            <h2>2. Services Proposés</h2>
            <p>
              Tourism DRC propose des services d'organisation de voyages en République
              Démocratique du Congo, incluant hébergement, transport et activités.
            </p>

            <h2>3. Réservations et Paiements</h2>
            <p>
              Les réservations sont confirmées après réception du paiement initial.
              Les conditions d'annulation varient selon le type de service réservé.
            </p>

            <h2>4. Responsabilités</h2>
            <p>
              Tourism DRC s'engage à fournir des services de qualité mais ne peut être
              tenu responsable des événements indépendants de sa volonté.
            </p>

            <h2>5. Modifications</h2>
            <p>
              Nous nous réservons le droit de modifier ces conditions à tout moment.
              Les modifications entrent en vigueur dès leur publication.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
