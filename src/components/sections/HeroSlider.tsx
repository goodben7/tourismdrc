'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
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
      image: '/slides/1.jpeg',
      title: t('hero.slide1.title'),
      subtitle: t('hero.slide1.subtitle'),
      ctaText: t('hero.slide1.cta'),
      ctaLink: ROUTES.destinations,
      textColor: 'white',
    },
    {
      image: '/slides/2.jpeg',
      title: t('hero.slide2.title'),
      subtitle: t('hero.slide2.subtitle'),
      ctaText: t('hero.slide2.cta'),
      ctaLink: ROUTES.packages,
      textColor: 'white',
    },
    {
      image: '/slides/2.jpg',
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
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Images with Preloading */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority={index === 0}
            quality={90}
            sizes="100vw"
            className="object-cover scale-105 blur-[2px]"
          />
          {/* Strong overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
          <div className="absolute inset-0 bg-black/20" />
        </div>
      ))}

      {/* Content Overlay */}
      <div className="relative z-20 flex h-full items-center justify-center">
        <div className="w-[90%] mx-auto text-center">
          <div className="max-w-5xl mx-auto">
            {/* Title */}
            <h1
              className={`mb-6 text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in ${
                currentSlideData.textColor === 'white' ? 'text-white' : 'text-gray-900'
              }`}
              style={{ fontFamily: 'var(--font-montserrat)' }}
            >
              {currentSlideData.title}
            </h1>

            {/* Subtitle */}
            <p
              className={`mb-10 text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto animate-fade-in animation-delay-200 ${
                currentSlideData.textColor === 'white' ? 'text-white/90' : 'text-gray-700'
              }`}
            >
              {currentSlideData.subtitle}
            </p>

            {/* CTA Button */}
            <Link
              href={currentSlideData.ctaLink}
              className="inline-flex items-center gap-3 bg-primary-500 hover:bg-primary-600 text-white px-10 py-5 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 shadow-2xl animate-fade-in animation-delay-400"
            >
              {currentSlideData.ctaText}
              <ArrowRight className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        disabled={isTransitioning}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white transition-all duration-200 disabled:opacity-50"
        aria-label="Slide précédent"
      >
        <ChevronLeft className="h-8 w-8" />
      </button>
      <button
        onClick={nextSlide}
        disabled={isTransitioning}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white transition-all duration-200 disabled:opacity-50"
        aria-label="Slide suivant"
      >
        <ChevronRight className="h-8 w-8" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            disabled={isTransitioning}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'w-12 bg-white'
                : 'w-2 bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Aller au slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
