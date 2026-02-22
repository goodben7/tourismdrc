'use client';

import { useState, useEffect } from 'react';
import type { Locale } from './config';
import { defaultLocale } from './config';

type TranslationObject = {
  [key: string]: string | TranslationObject;
};

let translations: Record<Locale, TranslationObject> = {
  fr: {},
  en: {},
};

// Load translations
async function loadTranslations() {
  const [fr, en] = await Promise.all([
    import('./locales/fr.json'),
    import('./locales/en.json'),
  ]);
  translations = { fr: fr.default, en: en.default };
}

loadTranslations();

export function useTranslation() {
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('locale') as Locale) || defaultLocale;
    }
    return defaultLocale;
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('locale', locale);
    }
  }, [locale]);

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[locale];

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

  return { t, locale, setLocale };
}
