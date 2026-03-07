'use client';

import { Shield, Users, Award, HeartHandshake, CheckCircle2 } from "lucide-react";
import { useTranslation } from "@/i18n/LanguageProvider";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/animations/AnimatedSection";

export default function WhyChooseUs() {
  const { t } = useTranslation();

  const features = [
    {
      icon: Shield,
      titleKey: 'whyChooseUs.feat1_title',
      descKey: 'whyChooseUs.feat1_desc',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Users,
      titleKey: 'whyChooseUs.feat2_title',
      descKey: 'whyChooseUs.feat2_desc',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
    },
    {
      icon: Award,
      titleKey: 'whyChooseUs.feat3_title',
      descKey: 'whyChooseUs.feat3_desc',
      color: 'text-amber-600',
      bgColor: 'bg-amber-50',
    },
    {
      icon: HeartHandshake,
      titleKey: 'whyChooseUs.feat4_title',
      descKey: 'whyChooseUs.feat4_desc',
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
    },
  ];

  return (
    <AnimatedSection className="py-24 bg-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%">
          <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="currentColor" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div className="container-custom relative z-10">
        <div className="mb-20 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-[10px] font-black uppercase tracking-[0.2em] mb-6 shadow-sm">
            <CheckCircle2 className="h-3 w-3 text-primary-500" />
            NOTRE ENGAGEMENT
          </div>
          <h2 className="mb-6 text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
            {t('whyChooseUs.title')}
          </h2>
          <p className="mx-auto max-w-2xl text-base md:text-lg text-slate-500 font-light leading-relaxed">
            {t('whyChooseUs.subtitle')}
          </p>
        </div>

        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
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
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.titleKey}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 }
                }}
                className="group relative bg-white rounded-[2rem] p-8 border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2"
              >
                <div className={`mb-8 inline-flex h-14 w-14 items-center justify-center rounded-[1.25rem] ${feature.bgColor} ${feature.color} shadow-inner transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                  <Icon className="h-7 w-7" strokeWidth={1.5} />
                </div>

                <h3 className="mb-4 text-xl font-black text-slate-900 tracking-tight leading-tight group-hover:text-primary-600 transition-colors">
                  {t(feature.titleKey)}
                </h3>

                <p className="text-sm text-slate-500 font-light leading-relaxed">
                  {t(feature.descKey)}
                </p>

                {/* Subtle bottom detail */}
                <div className="absolute bottom-6 left-8 right-8 h-1 bg-slate-50 rounded-full overflow-hidden">
                  <div className={`h-full w-0 bg-primary-500 group-hover:w-full transition-all duration-700 ease-out`} />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
