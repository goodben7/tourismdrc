"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/i18n/LanguageProvider";
import Link from "next/link";
import { ROUTES } from "@/lib/constants";

const faqData = [
  {
    question: { fr: "Est-il sûr de voyager en RDC ?", en: "Is it safe to travel to the DRC?" },
    answer: {
      fr: "Oui, avec une planification appropriée et un accompagnement professionnel. Tourism DRC travaille avec des partenaires locaux de confiance et met votre sécurité en priorité. Nous vous conseillons sur les zones à visiter et assurons un suivi constant pendant votre séjour.",
      en: "Yes, with proper planning and professional accompaniment. Tourism DRC works with trusted local partners and puts your safety first. We advise you on areas to visit and provide constant monitoring during your stay.",
    },
  },
  {
    question: { fr: "Quels documents sont nécessaires pour voyager en RDC ?", en: "What documents are required to travel to the DRC?" },
    answer: {
      fr: "Un passeport valide (au moins 6 mois après la date de retour) et un visa sont requis. Nous pouvons vous assister dans les démarches d'obtention du visa. Certaines vaccinations sont également recommandées.",
      en: "A valid passport (at least 6 months after the return date) and a visa are required. We can assist you with the visa application process. Certain vaccinations are also recommended.",
    },
  },
  {
    question: { fr: "Quelle est la meilleure période pour visiter la RDC ?", en: "What is the best time to visit the DRC?" },
    answer: {
      fr: "La saison sèche (juin à septembre) est généralement la meilleure période pour visiter la plupart des régions. Cependant, certaines destinations peuvent être visitées toute l'année. Nous vous conseillerons selon votre itinéraire.",
      en: "The dry season (June to September) is generally the best time to visit most regions. However, some destinations can be visited year-round. We will advise you according to your itinerary.",
    },
  },
  {
    question: { fr: "Quelles langues sont parlées en RDC ?", en: "What languages are spoken in the DRC?" },
    answer: {
      fr: "Le français est la langue officielle. Le lingala, le swahili, le kikongo et le tshiluba sont également largement parlés. Nos guides sont multilingues et peuvent communiquer en français, anglais et langues locales.",
      en: "French is the official language. Lingala, Swahili, Kikongo and Tshiluba are also widely spoken. Our guides are multilingual and can communicate in French, English and local languages.",
    },
  },
  {
    question: { fr: "Quelle monnaie utiliser en RDC ?", en: "What currency should I use in the DRC?" },
    answer: {
      fr: "La monnaie officielle est le franc congolais (CDF), mais le dollar américain (USD) est largement accepté, surtout dans les zones touristiques. Nous recommandons d'avoir des dollars en petites coupures.",
      en: "The official currency is the Congolese franc (CDF), but the US dollar (USD) is widely accepted, especially in tourist areas. We recommend having dollars in small denominations.",
    },
  },
  {
    question: { fr: "Comment réserver un voyage avec Tourism DRC ?", en: "How do I book a trip with Tourism DRC?" },
    answer: {
      fr: "Vous pouvez nous contacter via notre formulaire de devis, par email, téléphone ou WhatsApp. Nous discuterons de vos besoins, créerons un itinéraire personnalisé et vous enverrons un devis détaillé.",
      en: "You can contact us via our quote form, by email, phone or WhatsApp. We will discuss your needs, create a personalized itinerary and send you a detailed quote.",
    },
  },
  {
    question: { fr: "Quelle est votre politique d'annulation ?", en: "What is your cancellation policy?" },
    answer: {
      fr: "Notre politique d'annulation varie selon le type de service et la période. En général, les annulations plus de 30 jours avant le départ donnent droit à un remboursement partiel. Contactez-nous pour les détails spécifiques.",
      en: "Our cancellation policy varies depending on the type of service and time period. Generally, cancellations more than 30 days before departure are entitled to a partial refund. Contact us for specific details.",
    },
  },
  {
    question: { fr: "Proposez-vous des assurances voyage ?", en: "Do you offer travel insurance?" },
    answer: {
      fr: "Nous recommandons fortement de souscrire une assurance voyage. Nous pouvons vous conseiller sur les meilleures options et vous mettre en relation avec des assureurs de confiance.",
      en: "We strongly recommend taking out travel insurance. We can advise you on the best options and put you in touch with trusted insurers.",
    },
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-6 text-left transition-colors hover:text-primary-600"
      >
        <span className="font-semibold pr-4">{question}</span>
        <ChevronDown className={cn("h-5 w-5 flex-shrink-0 transition-transform", isOpen && "rotate-180")} />
      </button>
      {isOpen && (
        <div className="pb-6 text-gray-600 leading-relaxed">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
  const { locale, t } = useTranslation();
  const lang = locale as "fr" | "en";

  return (
    <div className="min-h-screen">
      <section
        className="relative overflow-hidden py-32"
        style={{
          backgroundImage: "url(/images/destinations/kinshasa.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/80 via-purple-900/70 to-indigo-900/80" />
        <div className="relative container-custom text-white">
          <h1 className="mb-6 animate-fade-in text-white">
            {lang === "fr" ? "Questions Fréquentes" : "Frequently Asked Questions"}
          </h1>
          <p className="mb-8 max-w-2xl text-lg md:text-xl animate-fade-in animation-delay-200 text-white/90">
            {lang === "fr"
              ? "Trouvez les réponses aux questions les plus courantes"
              : "Find answers to the most common questions"}
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-3xl">
          <div className="space-y-0">
            {faqData.map((faq, i) => (
              <FAQItem key={i} question={faq.question[lang]} answer={faq.answer[lang]} />
            ))}
          </div>

          <div className="mt-12 rounded-2xl bg-primary-50 p-8 text-center border border-primary-100">
            <h2 className="mb-4 text-2xl font-bold">
              {lang === "fr" ? "Vous ne trouvez pas la réponse ?" : "Can't find the answer?"}
            </h2>
            <p className="mb-6 text-gray-600">
              {lang === "fr"
                ? "Notre équipe est là pour répondre à toutes vos questions"
                : "Our team is here to answer all your questions"}
            </p>
            <Link href={ROUTES.contact} className="btn btn-primary">
              {lang === "fr" ? "Contactez-Nous" : "Contact Us"}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
