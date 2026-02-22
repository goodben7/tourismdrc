'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import type { Locale } from './config';
import { defaultLocale } from './config';
import frTranslations from './locales/fr.json';
import enTranslations from './locales/en.json';

type TranslationObject = {
  [key: string]: string | TranslationObject;
};

// Load translations synchronously
const translations: Record<Locale, TranslationObject> = {
  fr: frTranslations,
  en: enTranslations,
};

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  useEffect(() => {
    setMounted(true);
    // Load locale from localStorage only on client
    const savedLocale = localStorage.getItem('locale') as Locale;
    if (savedLocale && (savedLocale === 'fr' || savedLocale === 'en')) {
      setLocaleState(savedLocale);
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('locale', locale);
    }
  }, [locale, mounted]);

  const t = (key: string): string => {
    // Always use default locale for SSR to prevent hydration mismatch
    const currentLocale = mounted ? locale : defaultLocale;
    const keys = key.split('.');
    let value: any = translations[currentLocale];

    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k];
      } else {
        return key;
      }
    }

    return typeof value === 'string' ? value : key;
  };

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
}
