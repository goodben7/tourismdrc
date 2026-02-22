"use client";

import type { Metadata } from "next";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Est-il sûr de voyager en RDC ?",
    answer:
      "Oui, avec une planification appropriée et un accompagnement professionnel. Tourism DRC travaille avec des partenaires locaux de confiance et met votre sécurité en priorité. Nous vous conseillons sur les zones à visiter et assurons un suivi constant pendant votre séjour.",
  },
  {
    question: "Quels documents sont nécessaires pour voyager en RDC ?",
    answer:
      "Un passeport valide (au moins 6 mois après la date de retour) et un visa sont requis. Nous pouvons vous assister dans les démarches d'obtention du visa. Certaines vaccinations sont également recommandées.",
  },
  {
    question: "Quelle est la meilleure période pour visiter la RDC ?",
    answer:
      "La saison sèche (juin à septembre) est généralement la meilleure période pour visiter la plupart des régions. Cependant, certaines destinations peuvent être visitées toute l'année. Nous vous conseillerons selon votre itinéraire.",
  },
  {
    question: "Quelles langues sont parlées en RDC ?",
    answer:
      "Le français est la langue officielle. Le lingala, le swahili, le kikongo et le tshiluba sont également largement parlés. Nos guides sont multilingues et peuvent communiquer en français, anglais et langues locales.",
  },
  {
    question: "Quelle monnaie utiliser en RDC ?",
    answer:
      "La monnaie officielle est le franc congolais (CDF), mais le dollar américain (USD) est largement accepté, surtout dans les zones touristiques. Nous recommandons d'avoir des dollars en petites coupures.",
  },
  {
    question: "Comment réserver un voyage avec Tourism DRC ?",
    answer:
      "Vous pouvez nous contacter via notre formulaire de devis, par email, téléphone ou WhatsApp. Nous discuterons de vos besoins, créerons un itinéraire personnalisé et vous enverrons un devis détaillé.",
  },
  {
    question: "Quelle est votre politique d'annulation ?",
    answer:
      "Notre politique d'annulation varie selon le type de service et la période. En général, les annulations plus de 30 jours avant le départ donnent droit à un remboursement partiel. Contactez-nous pour les détails spécifiques.",
  },
  {
    question: "Proposez-vous des assurances voyage ?",
    answer:
      "Nous recommandons fortement de souscrire une assurance voyage. Nous pouvons vous conseiller sur les meilleures options et vous mettre en relation avec des assureurs de confiance.",
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
        <span className="font-semibold">{question}</span>
        <ChevronDown
          className={cn(
            "h-5 w-5 flex-shrink-0 transition-transform",
            isOpen && "rotate-180"
          )}
        />
      </button>
      {isOpen && (
        <div className="pb-6 text-gray-600">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
  return (
    <div className="min-h-screen">
      <section className="section-padding bg-white border-b border-gray-200">
        <div className="hero-overlay" />
        <div className="container-custom hero-content">
          <h1 className="mb-6 animate-fade-in">Questions Fréquentes</h1>
          <p className="mb-8 max-w-2xl text-lg md:text-xl animate-fade-in animation-delay-200">
            Trouvez les réponses aux questions les plus courantes
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-3xl">
          <div className="space-y-0">
            {faqs.map((faq) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>

          <div className="mt-12 rounded-xl bg-primary-50 p-8 text-center">
            <h2 className="mb-4">Vous ne trouvez pas la réponse ?</h2>
            <p className="mb-6 text-gray-600">
              Notre équipe est là pour répondre à toutes vos questions
            </p>
            <a href="/contact" className="btn btn-primary">
              Contactez-Nous
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
