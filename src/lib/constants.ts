/**
 * Application-wide constants
 */

export const APP_NAME = "Tourism DRC";
export const APP_DESCRIPTION = "Discover the beauty and richness of the Democratic Republic of Congo";
export const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://tourismdrc.com";

export const CONTACT = {
  email: "Contact@TourismDRC.com",
  phoneFr: "+243 894898210",
  phoneEn: "+61 7 34730564",
  whatsapp: "+243894898210",
  address: "N° 63, Avenue Colonel, Commune de la Gombe, Kinshasa",
} as const;

export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/share/18E5oFBKS8/",
  instagram: "https://www.instagram.com/tourismdrc?igsh=MXRvaGQwbDd6YjBhb",
  tiktok: "https://www.tiktok.com/@tourismdrc?_r=1&_t=ZS-95Woz5rYotD",
} as const;

export const LOCALES = ["fr", "en"] as const;
export const DEFAULT_LOCALE = "fr" as const;

export const PROVINCES = [
  "Kinshasa",
  "Kongo Central",
  "Kwango",
  "Kwilu",
  "Mai-Ndombe",
  "Kasaï",
  "Kasaï-Central",
  "Kasaï-Oriental",
  "Lomami",
  "Sankuru",
  "Maniema",
  "Sud-Kivu",
  "Nord-Kivu",
  "Ituri",
  "Haut-Uélé",
  "Tshopo",
  "Bas-Uélé",
  "Nord-Ubangi",
  "Mongala",
  "Sud-Ubangi",
  "Équateur",
  "Tshuapa",
  "Tanganyika",
  "Haut-Lomami",
  "Lualaba",
  "Haut-Katanga",
] as const;

export const PACKAGE_CATEGORIES = [
  "safari",
  "culture-heritage",
  "adventure-nature",
  "business-travel",
] as const;

export const SERVICE_TYPES = [
  "travel-organization",
  "accommodation",
  "transport",
  "security-assistance",
  "translation",
  "local-assistance",
] as const;

export const ROUTES = {
  home: "/",
  destinations: "/destinations",
  experiences: "/experiences",
  packages: "/packages",
  packagesServices: "/packages-services",
  services: "/services",
  booking: "/booking",
  about: "/about",
  blog: "/blog",
  partners: "/partners",
  contact: "/contact",
  legal: {
    privacy: "/legal/privacy",
    terms: "/legal/terms",
    faq: "/legal/faq",
  },
} as const;
