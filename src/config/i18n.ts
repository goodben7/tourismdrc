/**
 * Internationalization configuration
 */

import { LOCALES, DEFAULT_LOCALE } from "@/lib/constants";

export const locales = LOCALES;
export const defaultLocale = DEFAULT_LOCALE;

export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  fr: "Français",
  en: "English",
};
