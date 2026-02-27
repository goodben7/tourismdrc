'use client';

import { useTranslation } from "@/i18n/LanguageProvider";

const content = {
  fr: {
    title: "Conditions d'Utilisation",
    updated: "Dernière mise à jour",
    sections: [
      {
        title: "1. Acceptation des Conditions",
        text: "En utilisant les services de Tourism DRC, vous acceptez pleinement et sans réserve les présentes conditions d'utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser nos services.",
      },
      {
        title: "2. Services Proposés",
        text: "Tourism DRC propose des services d'organisation de voyages en République Démocratique du Congo, incluant hébergement, transport, activités, guides et assistance. Nos services sont disponibles pour les particuliers et les entreprises.",
      },
      {
        title: "3. Réservations et Paiements",
        text: "Les réservations sont confirmées après réception du paiement initial (acompte). Le solde est dû selon les conditions définies dans votre devis personnalisé. Tout paiement reçu est soumis à notre politique d'annulation.",
      },
      {
        title: "4. Politique d'Annulation",
        text: "Les annulations effectuées plus de 30 jours avant le départ donnent droit à un remboursement partiel (hors frais de dossier). Les annulations moins de 30 jours avant le départ ne donnent pas droit à remboursement, sauf cas de force majeure documenté.",
      },
      {
        title: "5. Responsabilités",
        text: "Tourism DRC s'engage à fournir des services de qualité selon les prestations contractuelles convenues. Nous ne pouvons être tenus responsables des événements indépendants de notre volonté (météo, situations politiques, grèves, etc.).",
      },
      {
        title: "6. Propriété Intellectuelle",
        text: "Tout le contenu de ce site (textes, images, logos) est la propriété de Tourism DRC et protégé par les droits d'auteur. Toute reproduction sans autorisation écrite est interdite.",
      },
      {
        title: "7. Modifications des Conditions",
        text: "Nous nous réservons le droit de modifier ces conditions à tout moment. Les modifications entrent en vigueur dès leur publication sur ce site. Il vous appartient de consulter régulièrement ces conditions.",
      },
      {
        title: "8. Droit Applicable",
        text: "Les présentes conditions sont soumises au droit de la République Démocratique du Congo. Tout litige sera soumis à la juridiction compétente de Kinshasa.",
      },
    ],
  },
  en: {
    title: "Terms of Use",
    updated: "Last updated",
    sections: [
      {
        title: "1. Acceptance of Terms",
        text: "By using Tourism DRC's services, you fully and unconditionally accept these terms of use. If you do not accept these terms, please do not use our services.",
      },
      {
        title: "2. Services Offered",
        text: "Tourism DRC offers travel organization services in the Democratic Republic of Congo, including accommodation, transport, activities, guides and assistance. Our services are available to individuals and businesses.",
      },
      {
        title: "3. Bookings and Payments",
        text: "Bookings are confirmed upon receipt of the initial payment (deposit). The balance is due according to the conditions defined in your personalized quote. All payments received are subject to our cancellation policy.",
      },
      {
        title: "4. Cancellation Policy",
        text: "Cancellations made more than 30 days before departure are entitled to a partial refund (excluding processing fees). Cancellations less than 30 days before departure are not eligible for a refund, except in documented cases of force majeure.",
      },
      {
        title: "5. Liability",
        text: "Tourism DRC is committed to providing quality services according to the agreed contractual terms. We cannot be held responsible for events beyond our control (weather, political situations, strikes, etc.).",
      },
      {
        title: "6. Intellectual Property",
        text: "All content on this site (texts, images, logos) is the property of Tourism DRC and protected by copyright. Any reproduction without written authorization is prohibited.",
      },
      {
        title: "7. Amendment of Terms",
        text: "We reserve the right to modify these terms at any time. Changes take effect as soon as they are published on this site. It is your responsibility to consult these terms regularly.",
      },
      {
        title: "8. Applicable Law",
        text: "These terms are governed by the laws of the Democratic Republic of Congo. Any dispute will be submitted to the competent jurisdiction of Kinshasa.",
      },
    ],
  },
};

export default function TermsPage() {
  const { locale } = useTranslation();
  const lang = locale as "fr" | "en";
  const data = content[lang];

  return (
    <div className="min-h-screen">
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <h1 className="mb-4">{data.title}</h1>
          <p className="text-gray-500 mb-10 text-sm">
            {data.updated}: {new Date().toLocaleDateString(lang === "fr" ? "fr-FR" : "en-GB")}
          </p>

          <div className="space-y-8">
            {data.sections.map((section, i) => (
              <div key={i}>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">{section.title}</h2>
                <p className="text-gray-600 leading-relaxed">{section.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
