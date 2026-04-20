"use client";

import Link from "next/link";
import { CheckCircle2, ArrowRight, Plane, Calendar, CreditCard } from "lucide-react";
import Button from "@/components/ui/Button";
import { useTranslation } from "@/i18n/LanguageProvider";

export default function SuccessPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-[#FBFBFF] pt-32 pb-24">
      <div className="container-custom max-w-2xl mx-auto text-center">
        <div className="relative inline-block mb-10">
          <div className="absolute inset-0 bg-primary-100 rounded-full blur-3xl opacity-50 -z-10 animate-pulse" />
          <div className="w-24 h-24 bg-white rounded-3xl shadow-xl flex items-center justify-center text-primary-600 border border-primary-50">
            <CheckCircle2 className="w-12 h-12" />
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-6">
          Paiement Réussi !
        </h1>
        <p className="text-lg text-slate-500 font-light leading-relaxed mb-12">
          Merci pour votre confiance. Votre réservation pour votre aventure en RDC a été confirmée. 
          Un email récapitulatif a été envoyé à votre adresse.
        </p>

        <div className="bg-white rounded-[2.5rem] p-8 md:p-10 border border-slate-100 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] text-left mb-12">
          <h3 className="text-xl font-bold text-slate-900 mb-8 flex items-center gap-3">
             Prochaines Étapes
          </h3>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 shrink-0">
                <Plane className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-slate-800 tracking-tight">Vérification de votre boîte mail</p>
                <p className="text-sm text-slate-500 font-light">Contrôlez vos emails (et spams) pour le reçu détaillé et les formalités de voyage.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 shrink-0">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-slate-800 tracking-tight">Préparation de l'itinéraire</p>
                <p className="text-sm text-slate-500 font-light">Notre équipe vous contactera sous 24h pour finaliser les détails logistiques de votre séjour.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 shrink-0">
                <CreditCard className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-slate-800 tracking-tight">Visa et documents</p>
                <p className="text-sm text-slate-500 font-light">Si vous avez pris l'assistance administrative, les documents vous seront envoyés par mail.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <Link href="/" className="w-full md:w-auto">
            <Button size="lg" className="w-full md:w-auto group rounded-full bg-slate-900 text-white px-10 h-14 font-black tracking-widest text-xs">
              RETOUR À L'ACCUEIL
            </Button>
          </Link>
          <Link href="/destinations" className="w-full md:w-auto">
            <Button variant="outline" size="lg" className="w-full md:w-auto group rounded-full border-slate-200 text-slate-600 px-10 h-14 font-black tracking-widest text-xs">
              EXPLORER PLUS
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
