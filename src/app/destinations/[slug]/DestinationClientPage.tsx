'use client';

import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  Building2, Music, Landmark, Waves, ShoppingBag, ShoppingCart,
  Mountain, Flame, Binoculars, Map as MapIcon, Umbrella, Leaf,
  Droplet, Trees, Ship, Bird, Pickaxe, Building, Palmtree, Shield,
  Fish, Camera, MapPin, Clock, Thermometer, Plane, Hotel, ArrowRight, Check, Tag, Info
} from "lucide-react";

const IconMap: Record<string, React.ElementType> = {
  Building2, Music, Landmark, Waves, ShoppingBag, ShoppingCart,
  Mountain, Flame, Binoculars, MapIcon, Umbrella, Leaf,
  Droplet, Trees, Ship, Bird, Pickaxe, Building, Palmtree, Shield,
  Fish, Camera
};
import { useTranslation } from "@/i18n/LanguageProvider";
import { getDestinationBySlug } from "@/data/destinations";
import { ROUTES } from "@/lib/constants";
import { use } from "react";

interface DestinationPageProps {
  params: Promise<{ slug: string }>;
}

export default function DestinationPage({ params }: DestinationPageProps) {
  const { slug } = use(params);
  const { locale, t } = useTranslation();
  const destination = getDestinationBySlug(slug);

  if (!destination) {
    notFound();
  }

  const lang = locale as "fr" | "en";

  const practicalInfoItems = [
    {
      icon: Clock,
      label: lang === "fr" ? "Meilleure période" : "Best time",
      value: destination.practicalInfo.bestTime[lang],
    },
    {
      icon: Thermometer,
      label: lang === "fr" ? "Climat" : "Climate",
      value: destination.practicalInfo.climate[lang],
    },
    {
      icon: Plane,
      label: lang === "fr" ? "Comment y aller" : "How to get there",
      value: destination.practicalInfo.howToGetThere[lang],
    },
    {
      icon: Hotel,
      label: lang === "fr" ? "Hébergement" : "Accommodation",
      value: destination.practicalInfo.accommodation[lang],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative flex flex-col justify-end min-h-[70vh] md:min-h-[80vh] overflow-hidden"
      >
        <Image
          src={destination.heroImage}
          alt={destination.name[lang]}
          fill
          priority
          className="object-cover transition-transform duration-1000 scale-105"
        />
        {/* Gradients pour une meilleure lisibilité */}
        <div className={`absolute inset-0 bg-gradient-to-br ${destination.heroGradient} opacity-60 mix-blend-multiply`} />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />

        <div className="relative z-10 container-custom pb-32 md:pb-40 pt-32">
          <div className="max-w-4xl">
            <div className="mb-6 flex flex-wrap gap-3">
              {destination.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 rounded-full bg-white/10 backdrop-blur-md px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-white border border-white/20 shadow-xl"
                >
                  <Tag className="h-3 w-3" />
                  {tag[lang]}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4 mb-4">
              <span className="text-5xl md:text-7xl drop-shadow-2xl text-white">
                {(() => {
                  const HeroIconComponent = IconMap[destination.heroIcon];
                  return HeroIconComponent ? <HeroIconComponent className="w-16 h-16 md:w-24 md:h-24" strokeWidth={1.5} /> : null;
                })()}
              </span>
            </div>

            <h1 className="mb-6 text-white text-5xl md:text-7xl lg:text-8xl font-black tracking-tight drop-shadow-lg">
              {destination.name[lang]}
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed max-w-2xl border-l-2 border-primary-500 pl-6">
              {destination.tagline[lang]}
            </p>
          </div>
        </div>
      </section>

      {/* Stats bar - Floating effect */}
      <div className="relative z-20 container-custom -mt-20 mb-12">
        <div className="bg-[#0A0F1C]/90 backdrop-blur-xl border border-white/10 rounded-[2rem] p-6 md:p-8 shadow-2xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 divide-x divide-white/10">
            {destination.stats.map((stat, i) => (
              <div key={i} className="text-center px-2 md:px-4 flex flex-col justify-center">
                <div className="text-2xl md:text-3xl font-black text-white mb-2 group flex flex-col items-center">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-blue-400">
                    {stat.value}
                  </span>
                </div>
                <div className="text-[9px] md:text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em] leading-snug">
                  {stat.label[lang]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div >

      {/* Description & Activities */}
      < section className="pt-12 pb-24 bg-white relative" >
        <div className="container-custom">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            {/* Left Column: About */}
            <div className="lg:col-span-7 xl:col-span-8 space-y-10">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-500 text-[9px] font-bold uppercase tracking-[0.2em] mb-6">
                  <MapPin className="h-3 w-3 text-primary-500" />
                  {lang === "fr" ? "À propos de la destination" : "About the destination"}
                </div>
                <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-8">
                  Découvrez <span className="text-primary-600">{destination.name[lang]}</span>
                </h2>

                <div className="prose prose-lg text-slate-500 font-light leading-relaxed space-y-6">
                  <p className="text-xl font-medium text-slate-700">
                    {destination.description[lang]}
                  </p>
                  <p>
                    {destination.longDescription[lang]}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Activities Widget */}
            <div className="lg:col-span-5 xl:col-span-4 sticky top-32">
              <div className="bg-[#FBFBFF] rounded-[2rem] p-8 border border-slate-100 shadow-xl shadow-slate-200/50">
                <h3 className="font-black text-slate-900 text-xl mb-6 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 text-primary-600">
                    <Check className="w-4 h-4" strokeWidth={3} />
                  </span>
                  {lang === "fr" ? "Activités Incontournables" : "Must-do Activities"}
                </h3>

                <ul className="space-y-4 mb-8">
                  {destination.activities.map((activity, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600 font-medium">
                      <div className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary-500" />
                      <span className="leading-snug text-sm">{activity[lang]}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-8 border-t border-slate-200">
                  <Link
                    href={ROUTES.booking}
                    className="group flex items-center justify-center gap-3 w-full bg-slate-900 hover:bg-slate-800 text-white px-6 py-4 rounded-xl font-black text-[11px] uppercase tracking-[0.2em] transition-all duration-300 shadow-lg shadow-slate-900/20"
                  >
                    {t('nav.getQuote')}
                    <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* Highlights */}
      < section className="py-24 bg-slate-50 relative overflow-hidden" >
        <div className="container-custom relative z-10">
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-500 text-[9px] font-bold uppercase tracking-[0.2em] mb-6 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse" />
              {lang === "fr" ? "Points Forts" : "Highlights"}
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-6">
              {lang === "fr" ? "À ne pas manquer" : "Must see places"}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {destination.highlights.map((highlight, i) => (
              <div
                key={i}
                className="group bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-50 rounded-bl-full -z-10 transition-transform group-hover:scale-110" />

                <div className="text-5xl mb-6 text-primary-500 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 drop-shadow-md">
                  {(() => {
                    const HighlightIconComponent = IconMap[highlight.icon];
                    return HighlightIconComponent ? <HighlightIconComponent className="w-12 h-12" strokeWidth={1.5} /> : null;
                  })()}
                </div>

                <h3 className="font-black text-slate-900 text-xl mb-3 tracking-snug group-hover:text-primary-600 transition-colors">
                  {highlight.title[lang]}
                </h3>

                <p className="text-slate-500 text-sm font-light leading-relaxed">
                  {highlight.description[lang]}
                </p>

                <div className="absolute bottom-0 left-8 right-8 h-1 bg-slate-50 rounded-t-full overflow-hidden">
                  <div className="h-full w-0 bg-primary-500 group-hover:w-full transition-all duration-700 ease-out" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section >

      {/* Practical Info */}
      < section className="py-24 bg-white relative overflow-hidden" >
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-[120%] bg-primary-50/30 rounded-l-[100%] blur-[100px] -z-10" />

        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/3 text-center lg:text-left space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-500 text-[9px] font-bold uppercase tracking-[0.2em]">
                <Info className="h-3 w-3 text-primary-500" />
                {lang === "fr" ? "Informations Pratiques" : "Practical Info"}
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
                {lang === "fr" ? "Préparez votre voyage" : "Prepare your trip"}
              </h2>
              <p className="text-slate-500 font-light text-lg">
                {lang === "fr"
                  ? "Tout ce que vous devez savoir pour un séjour parfait en RDC."
                  : "Everything you need to know for a perfect stay in DRC."}
              </p>
            </div>

            <div className="lg:w-2/3 grid sm:grid-cols-2 gap-6 w-full">
              {practicalInfoItems.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="flex flex-col bg-white rounded-[2rem] p-8 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(59,130,246,0.1)] transition-all duration-300"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-[1rem] bg-primary-50 text-primary-600">
                        <Icon className="h-6 w-6" strokeWidth={1.5} />
                      </div>
                      <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                        {item.label}
                      </div>
                    </div>
                    <p className="text-slate-700 font-medium leading-relaxed">{item.value}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section >

      {/* Photo gallery */}
      {destination.gallery && destination.gallery.length > 0 && (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
          <div className="container-custom">
            <div className="mb-12 text-center">
              <h2 className="mb-8 text-3xl font-black text-slate-900 tracking-tight">
                {lang === "fr" ? "Galerie Photos" : "Photo Gallery"}
              </h2>
              <p className="text-slate-500 font-light">
                {lang === "fr"
                  ? "Aperçu en images de cette destination."
                  : "A glimpse of this destination in pictures."}
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {destination.gallery.map((imgSrc, index) => (
                <div
                  key={index}
                  className={`group relative rounded-[1.5rem] bg-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 ${index === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-square"
                    }`}
                >
                  <Image
                    src={imgSrc}
                    alt={`${destination.name[lang]} - gallery image ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-[10000ms] ease-out"
                  />
                  <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/10 transition-colors duration-500 pointer-events-none" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA - Premium Edition */}
      <section className="py-32 relative overflow-hidden bg-slate-950">
        {/* Deep rich radial gradients for glowing effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary-900/40 via-transparent to-transparent opacity-80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-blue-900/40 via-transparent to-transparent opacity-80" />

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.03] mix-blend-overlay" />
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="container-custom relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Glassmorphism card container */}
            <div className="relative bg-white/[0.02] backdrop-blur-3xl border border-white/10 rounded-[3rem] p-12 md:p-20 shadow-2xl overflow-hidden group">
              {/* Animated glowing border effect */}
              <div className="absolute inset-0 rounded-[3rem] border border-transparent bg-gradient-to-br from-primary-500/20 via-transparent to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10" />

              <div className="relative z-10 space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary-300 text-[10px] font-black uppercase tracking-[0.3em] mb-4">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
                  </span>
                  {lang === "fr" ? "VOTRE PROCHAINE AVENTURE" : "YOUR NEXT ADVENTURE"}
                </div>

                <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tight leading-[1.1]">
                  <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 drop-shadow-sm">
                    {lang === "fr"
                      ? `Prêt à explorer`
                      : `Ready to explore `} <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-blue-400 to-primary-300">{destination.name[lang]} ?</span>
                  </span>
                </h2>

                <p className="mx-auto max-w-2xl text-lg md:text-xl text-slate-400 font-light leading-relaxed">
                  {lang === "fr"
                    ? "Notre équipe d'experts crée votre voyage sur mesure dans cette région exceptionnelle. Chaque détail est pensé pour une expérience de luxe inoubliable."
                    : "Our expert team creates your tailor-made trip in this exceptional region. Every detail is designed for an unforgettable luxury experience."}
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center pt-10">
                  <Link
                    href={ROUTES.booking}
                    className="relative inline-flex items-center justify-center gap-3 bg-primary-600 hover:bg-primary-500 text-white px-10 py-5 rounded-full font-black text-[11px] uppercase tracking-[0.2em] transition-all duration-500 transform hover:-translate-y-1 shadow-[0_0_40px_rgba(59,130,246,0.4)] hover:shadow-[0_0_60px_rgba(59,130,246,0.6)]"
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      {t('nav.getQuote')}
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </Link>

                  <Link
                    href={ROUTES.destinations}
                    className="group inline-flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 backdrop-blur-md text-slate-300 hover:text-white border border-white/10 hover:border-white/30 px-10 py-5 rounded-full font-black text-[11px] uppercase tracking-[0.2em] transition-all duration-300 transform hover:-translate-y-1"
                  >
                    {lang === "fr" ? "Toutes les destinations" : "All destinations"}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div >
  );
}
