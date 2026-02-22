import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { ROUTES, CONTACT } from "@/lib/constants";

export default function CTASection() {
  return (
    <section className="section-padding bg-primary-500 text-white">
      <div className="container-custom text-center">
        <h2 className="mb-4 text-white">Prêt à Découvrir la RDC ?</h2>
        <p className="mb-8 mx-auto max-w-2xl text-lg text-white/90">
          Contactez-nous dès aujourd'hui pour planifier votre voyage sur mesure
          et vivre une expérience inoubliable en République Démocratique du Congo.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={ROUTES.booking}
            className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
          >
            Demander un Devis
            <ArrowRight className="h-5 w-5" />
          </Link>
          <a
            href={`https://wa.me/${CONTACT.whatsapp.replace(/\D/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
          >
            <MessageCircle className="h-5 w-5" />
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
