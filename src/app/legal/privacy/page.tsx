'use client';

import { useTranslation } from "@/i18n/LanguageProvider";

const content = {
  fr: {
    title: "Politique de Confidentialité",
    updated: "Dernière mise à jour",
    sections: [
      {
        title: "1. Collecte des Informations",
        text: "Tourism DRC collecte des informations personnelles lorsque vous utilisez nos services, notamment lors de demandes de devis, réservations ou contacts via notre site web ou par téléphone.",
      },
      {
        title: "2. Utilisation des Informations",
        text: "Vos informations sont utilisées pour traiter vos demandes, améliorer nos services et vous contacter concernant votre voyage. Nous ne les utilisons jamais à des fins commerciales non consenties.",
      },
      {
        title: "3. Protection des Données",
        text: "Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos informations personnelles contre tout accès non autorisé, modification, divulgation ou destruction.",
      },
      {
        title: "4. Partage des Informations",
        text: "Nous ne vendons ni ne louons vos informations personnelles à des tiers. Nous pouvons partager vos données avec nos partenaires de confiance uniquement dans le cadre de la fourniture de nos services.",
      },
      {
        title: "5. Cookies",
        text: "Notre site utilise des cookies pour améliorer votre expérience de navigation. Vous pouvez configurer votre navigateur pour refuser les cookies, mais certaines fonctionnalités pourraient ne plus être disponibles.",
      },
      {
        title: "6. Vos Droits",
        text: "Conformément aux lois applicables sur la protection des données, vous avez le droit d'accéder, de modifier, de corriger ou de supprimer vos informations personnelles. Contactez-nous à contact@tourismdrc.com pour exercer ces droits.",
      },
      {
        title: "7. Modifications",
        text: "Nous nous réservons le droit de modifier cette politique à tout moment. Les modifications seront publiées sur cette page avec la date de mise à jour.",
      },
    ],
  },
  en: {
    title: "Privacy Policy",
    updated: "Last updated",
    sections: [
      {
        title: "1. Information Collection",
        text: "Tourism DRC collects personal information when you use our services, including when requesting quotes, making reservations or contacting us through our website or by phone.",
      },
      {
        title: "2. Use of Information",
        text: "Your information is used to process your requests, improve our services and contact you regarding your trip. We never use it for non-consented commercial purposes.",
      },
      {
        title: "3. Data Protection",
        text: "We implement appropriate security measures to protect your personal information against unauthorized access, modification, disclosure or destruction.",
      },
      {
        title: "4. Information Sharing",
        text: "We do not sell or rent your personal information to third parties. We may share your data with our trusted partners solely in the context of providing our services.",
      },
      {
        title: "5. Cookies",
        text: "Our site uses cookies to improve your browsing experience. You can configure your browser to refuse cookies, but some features may no longer be available.",
      },
      {
        title: "6. Your Rights",
        text: "In accordance with applicable data protection laws, you have the right to access, modify, correct or delete your personal information. Contact us at contact@tourismdrc.com to exercise these rights.",
      },
      {
        title: "7. Modifications",
        text: "We reserve the right to modify this policy at any time. Changes will be posted on this page with the update date.",
      },
    ],
  },
};

export default function PrivacyPage() {
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
