'use client';

import Link from "next/link";
import { ArrowRight, HeartHandshake } from "lucide-react";
import AnimatedSection from "@/components/animations/AnimatedSection";
import { ROUTES, CONTACT } from "@/lib/constants";
import { useTranslation } from "@/i18n/LanguageProvider";

export default function CTASection() {
  const { t } = useTranslation();

  return (
    <AnimatedSection className="py-24 relative overflow-hidden bg-[#0A0F1C]">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-900/30 via-transparent to-transparent" />

      {/* Decorative dots pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="cta-dots" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="#fff" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#cta-dots)" />
        </svg>
      </div>

      <div className="container-custom relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Top Icon */}
          <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 text-primary-400 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_30px_rgba(59,130,246,0.2)]">
            <HeartHandshake className="w-10 h-10" strokeWidth={1.5} />
            <div className="absolute inset-0 rounded-3xl border border-white/5 scale-105" />
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-slate-400">
                {t('cta.title')}
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg md:text-xl text-slate-400 font-light leading-relaxed">
              {t('cta.subtitle')}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <Link
              href={ROUTES.booking}
              className="group relative inline-flex items-center justify-center gap-3 bg-primary-600 hover:bg-primary-500 text-white px-10 py-5 rounded-full font-black text-[11px] uppercase tracking-[0.2em] transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
            >
              {/* Shine effect */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shimmer" />
              <span className="relative">{t('cta.bookNow')}</span>
              <ArrowRight className="h-4 w-4 relative transform group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href={`https://wa.me/${CONTACT.whatsapp.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 backdrop-blur-md text-white border border-white/10 hover:border-white/20 px-10 py-5 rounded-full font-black text-[11px] uppercase tracking-[0.2em] transition-all duration-300 transform hover:-translate-y-1"
            >
              <svg
                className="h-5 w-5 text-[#25D366] group-hover:scale-110 transition-transform"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
              </svg>
              {t('cta.whatsapp')}
            </a>
          </div>

          {/* Trust Badge */}
          <div className="flex items-center justify-center gap-6 pt-12 text-slate-500">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-slate-700" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">{t('cta.tagBadge')}</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-slate-700" />
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
