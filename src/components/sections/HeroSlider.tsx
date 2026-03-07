'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { ROUTES } from '@/lib/constants';
import { useTranslation } from '@/i18n/LanguageProvider';

interface Slide {
  image: string;
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  textColor: 'white' | 'dark';
}

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const { t } = useTranslation();

  const slides: Slide[] = [
    {
      image: '/slides/1.jpg',
      title: t('hero.slide1.title'),
      subtitle: t('hero.slide1.subtitle'),
      ctaText: t('hero.slide1.cta'),
      ctaLink: ROUTES.destinations,
      textColor: 'white',
    },
    {
      image: '/slides/2.jpg',
      title: t('hero.slide2.title'),
      subtitle: t('hero.slide2.subtitle'),
      ctaText: t('hero.slide2.cta'),
      ctaLink: ROUTES.experiences,
      textColor: 'white',
    },
    {
      image: '/slides/3.jpg',
      title: t('hero.slide3.title'),
      subtitle: t('hero.slide3.subtitle'),
      ctaText: t('hero.slide3.cta'),
      ctaLink: ROUTES.booking,
      textColor: 'white',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(timer);
  }, [currentSlide]);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <section className="relative h-[90vh] min-h-[600px] w-full overflow-hidden">
      {/* Background Images with Preloading */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
        >
          <div
            className={`absolute inset-0 transition-transform duration-[10000ms] ease-linear ${index === currentSlide ? 'scale-110' : 'scale-100'
              }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={index === 0}
              quality={90}
              sizes="100vw"
              className="object-cover"
            />
          </div>
          {/* Subtle cinematic gradient overlay instead of heavy blur */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-transparent to-slate-900/80" />
          <div className="absolute inset-0 bg-black/30" />
        </div>
      ))}

      {/* Content Overlay */}
      <div className="relative z-20 flex h-full items-center justify-center">
        <div className="w-full px-4 text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-5xl mx-auto space-y-6"
            >
              {/* Title */}
              <h1
                className={`text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight drop-shadow-xl ${currentSlideData.textColor === 'white' ? 'text-white' : 'text-slate-900'
                  }`}
              >
                {currentSlideData.title}
              </h1>

              {/* Subtitle */}
              <p
                className={`text-lg md:text-xl lg:text-2xl font-light mx-auto max-w-3xl drop-shadow-md ${currentSlideData.textColor === 'white' ? 'text-slate-200' : 'text-slate-700'
                  }`}
              >
                {currentSlideData.subtitle}
              </p>

              {/* CTA Button */}
              <div className="pt-8">
                <Link
                  href={currentSlideData.ctaLink}
                  className="group inline-flex items-center gap-3 bg-primary-600 hover:bg-primary-500 text-white px-8 py-4 rounded-full font-bold text-sm tracking-widest uppercase transition-all duration-300 hover:scale-105 shadow-[0_0_40px_rgba(0,102,204,0.4)]"
                >
                  {currentSlideData.ctaText}
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        disabled={isTransitioning}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 p-4 rounded-full bg-white/10 hover:bg-primary-600 border border-white/20 hover:border-transparent backdrop-blur-md text-white transition-all duration-300 disabled:opacity-0 group"
        aria-label="Slide précédent"
      >
        <ChevronLeft className="h-6 w-6 transform group-hover:-translate-x-1 transition-transform" strokeWidth={2.5} />
      </button>
      <button
        onClick={nextSlide}
        disabled={isTransitioning}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 p-4 rounded-full bg-white/10 hover:bg-primary-600 border border-white/20 hover:border-transparent backdrop-blur-md text-white transition-all duration-300 disabled:opacity-0 group"
        aria-label="Slide suivant"
      >
        <ChevronRight className="h-6 w-6 transform group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-3 items-center">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            disabled={isTransitioning}
            className={`rounded-full transition-all duration-300 ${index === currentSlide
              ? 'w-10 h-1.5 bg-primary-500 shadow-[0_0_10px_rgba(0,102,204,0.8)]'
              : 'w-2 h-1.5 bg-white/50 hover:bg-white/80'
              }`}
            aria-label={`Aller au slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
