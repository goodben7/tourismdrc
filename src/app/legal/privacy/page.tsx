import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de Confidentialité",
  description: "Politique de confidentialité de Tourism DRC",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <h1 className="mb-8">Politique de Confidentialité</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600">
              Dernière mise à jour: {new Date().toLocaleDateString("fr-FR")}
            </p>

            <h2>1. Collecte des Informations</h2>
            <p>
              Tourism DRC collecte des informations personnelles lorsque vous utilisez nos services,
              notamment lors de demandes de devis, réservations ou contacts.
            </p>

            <h2>2. Utilisation des Informations</h2>
            <p>
              Vos informations sont utilisées pour traiter vos demandes, améliorer nos services
              et vous contacter concernant votre voyage.
            </p>

            <h2>3. Protection des Données</h2>
            <p>
              Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos
              informations personnelles contre tout accès non autorisé.
            </p>

            <h2>4. Partage des Informations</h2>
            <p>
              Nous ne vendons ni ne louons vos informations personnelles à des tiers.
              Nous pouvons partager vos données avec nos partenaires de confiance uniquement
              dans le cadre de la fourniture de nos services.
            </p>

            <h2>5. Vos Droits</h2>
            <p>
              Vous avez le droit d'accéder, de modifier ou de supprimer vos informations
              personnelles. Contactez-nous pour exercer ces droits.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
