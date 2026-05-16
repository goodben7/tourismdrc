'use client';

import {
  Globe2, Target, Eye, Map, TreePine, Landmark, ShieldCheck,
  Briefcase, BadgeCheck, Sprout, Lightbulb, Heart, ArrowRight,
  Mail, Phone, MapPin
} from "lucide-react";
import { useTranslation } from "@/i18n/LanguageProvider";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/animations/AnimatedSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import { ROUTES, CONTACT } from "@/lib/constants";
import CTASection from "@/components/sections/CTASection";

export default function AboutPage() {
  const { t } = useTranslation();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatWeOffer = [
    { key: 'about_page.offer1', icon: Briefcase, color: 'text-primary-400', bg: 'bg-primary-500/10' },
    { key: 'about_page.offer2', icon: Map, color: 'text-blue-400', bg: 'bg-blue-500/10' },
    { key: 'about_page.offer3', icon: TreePine, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
    { key: 'about_page.offer4', icon: Landmark, color: 'text-amber-400', bg: 'bg-amber-500/10' },
    { key: 'about_page.offer5', icon: ShieldCheck, color: 'text-sky-400', bg: 'bg-sky-500/20', highlight: true },
    { key: 'about_page.offer6', icon: Globe2, color: 'text-indigo-400', bg: 'bg-indigo-500/10' },
  ];

  const whyChooseUsData = [
    { key: 'about_page.why1', icon: BadgeCheck, color: 'text-blue-600', bg: 'bg-blue-50' },
    { key: 'about_page.why2', icon: Sprout, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { key: 'about_page.why3', icon: Lightbulb, color: 'text-primary-600', bg: 'bg-primary-50', highlight: true },
    { key: 'about_page.why4', icon: Heart, color: 'text-rose-600', bg: 'bg-rose-50' },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative flex flex-col justify-center min-h-[60vh] md:min-h-[70vh] overflow-hidden">
        <Image
          src="/images/packages/5.jpg"
          alt="Tourism DRC Header"
          fill
          priority
          className="object-cover transition-transform duration-300 ease-out scale-110"
          style={{
            transform: `translateY(${scrollY * 0.4}px)`
          }}
        />
        {/* Gradients pour une meilleure lisibilité */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/80 via-indigo-900/60 to-slate-900/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-slate-900/20 to-transparent" />

        <div className="relative z-10 container-custom mt-20 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-[10px] font-black uppercase tracking-[0.2em] text-white border border-white/20 shadow-xl mb-4">
              <Globe2 className="h-3 w-3 text-primary-400" />
              <span>Tourism DRC</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight drop-shadow-lg leading-tight">
              {t('about_page.heroTitle')}
            </h1>

            <p className="text-lg md:text-2xl text-slate-200 font-light leading-relaxed mx-auto max-w-2xl px-4 md:px-0">
              {t('about_page.heroSubtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 bg-slate-50 relative">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-white rounded-[3rem] p-10 md:p-16 shadow-2xl border border-slate-100 -mt-32 relative z-20">
            <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-8 leading-tight">
              {t('about_page.introText1')}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full mb-8" />
            <p className="text-lg md:text-xl text-slate-600 font-light leading-relaxed">
              {t('about_page.introText2')}
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision - Home Page Style Cards */}
      <AnimatedSection className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Mission */}
            <div className="group relative rounded-[3rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
              <div className="absolute inset-0">
                <Image
                  src="/images/destinations/vi-4.jpg"
                  alt="Mission"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 to-blue-900/40" />
              </div>
              <div className="relative p-10 md:p-12 h-full flex flex-col justify-end">
                <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white mb-8 shadow-lg transform group-hover:rotate-6 transition-transform">
                  <Target className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-black text-white mb-6">
                  {t('about_page.missionTitle')}
                </h3>
                <p className="text-blue-50 font-light text-lg leading-relaxed">
                  {t('about_page.missionText')}
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="group relative rounded-[3rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
              <div className="absolute inset-0">
                <Image
                  src="/images/destinations/sa-3.jpg"
                  alt="Vision"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 to-indigo-900/40" />
              </div>
              <div className="relative p-10 md:p-12 h-full flex flex-col justify-end">
                <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white mb-8 shadow-lg transform group-hover:rotate-6 transition-transform">
                  <Eye className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-black text-white mb-6">
                  {t('about_page.visionTitle')}
                </h3>
                <p className="text-purple-50 font-light text-lg leading-relaxed">
                  {t('about_page.visionText')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* What We Offer - Premium Grid */}
      <section className="py-24 bg-[#050810] relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-900/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/10 rounded-full blur-[120px]" />
        </div>

        <div className="container-custom relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 lg:items-center mb-20">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-primary-400 text-[10px] font-black uppercase tracking-[0.3em] mb-6 shadow-2xl">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse" />
                OUR EXPERTISE
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] mb-2 px-1">
                {t('about_page.whatWeOfferTitle')}
              </h2>
            </div>
            <div className="flex-1 lg:max-w-xl">
              <div className="h-px w-20 bg-primary-500 mb-8 lg:hidden" />
              <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed border-l-2 border-primary-500/50 pl-8 py-2">
                {t('about_page.heroSubtitle')}
              </p>
            </div>
          </div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            {whatWeOffer.map((offer, i) => {
              const Icon = offer.icon;
              // On récupère la clé de description correspondante (ex: about.offer1_desc)
              const descKey = offer.key.replace('about_page.', 'about.') + '_desc';
              
              return (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    show: { opacity: 1, y: 0 }
                  }}
                  className={`relative p-8 rounded-[2.5rem] border overflow-hidden flex flex-col h-full transition-colors duration-500 ${
                    offer.highlight
                      ? 'bg-gradient-to-br from-sky-500/10 to-transparent border-sky-500/20'
                      : 'bg-white/[0.03] border-white/10'
                  }`}
                >
                  {/* Subtle Background Icon Decoration (Static) */}
                  <Icon className="absolute -bottom-6 -right-6 w-32 h-32 text-white/[0.03] -rotate-12 pointer-events-none" />

                  <div className="relative z-10 flex flex-col h-full">
                    <div className={`mb-6 w-14 h-14 rounded-2xl flex items-center justify-center shadow-2xl ${
                      offer.highlight
                        ? 'bg-sky-500 text-white'
                        : 'bg-white/5 text-primary-400 border border-white/10'
                    }`}>
                      <Icon strokeWidth={1.5} className="w-6 h-6" />
                    </div>

                    <h3 className={`text-xl font-black tracking-tight mb-4 leading-tight ${
                      offer.highlight ? 'text-sky-400' : 'text-white'
                    }`}>
                      {t(offer.key)}
                    </h3>

                    <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed">
                      {t(descKey)}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <WhyChooseUs />

      {/* Contact Section */}
      <section className="py-24 bg-white relative">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto bg-primary-900 rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden shadow-2xl">
            {/* Background Details */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-800 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2 opacity-50" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-900 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2 opacity-50" />

            <div className="grid md:grid-cols-2 gap-12 lg:gap-20 relative z-10">
              <div>
                <h2 className="text-3xl md:text-5xl font-black mb-6">
                  {t('about_page.contactTitle')}
                </h2>
                <p className="text-xl text-primary-200 font-light mb-8">
                  {t('about_page.contactSubtitle')}
                </p>
                <p className="text-lg text-white mb-10 leading-relaxed">
                  {t('about_page.contactText')}
                </p>
                <Link
                  href={ROUTES.contact}
                  className="inline-flex items-center gap-2 bg-white text-primary-900 hover:bg-primary-50 px-8 py-4 rounded-xl font-bold text-sm tracking-widest uppercase transition-all duration-300 hover:scale-105"
                >
                  {t('about_page.contactTitle')}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="flex flex-col justify-center space-y-8 bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-primary-200 uppercase tracking-widest font-bold mb-1">
                      {t('about_page.contactPhoneEn')}
                    </div>
                    <div className="text-xl font-medium">{CONTACT.phoneEn}</div>
                    <div className="mt-4 text-sm text-primary-200 uppercase tracking-widest font-bold mb-1">
                      {t('about_page.contactPhoneFr')}
                    </div>
                    <div className="text-xl font-medium">{CONTACT.phoneFr}</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-primary-200 uppercase tracking-widest font-bold mb-1">
                      {t('about_page.contactEmail')}
                    </div>
                    <div className="text-xl font-medium">{CONTACT.email}</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-primary-200 uppercase tracking-widest font-bold mb-1">
                      {t('about_page.contactAddress')}
                    </div>
                    <div className="text-xl font-medium leading-snug">{CONTACT.address}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
