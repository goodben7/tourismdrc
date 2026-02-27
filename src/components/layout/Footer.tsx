'use client';

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { ROUTES, CONTACT, SOCIAL_LINKS, APP_NAME } from "@/lib/constants";
import { useTranslation } from "@/i18n/LanguageProvider";

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: SOCIAL_LINKS.facebook },
  { name: "Instagram", icon: Instagram, href: SOCIAL_LINKS.instagram },
  { name: "Twitter", icon: Twitter, href: SOCIAL_LINKS.twitter },
  { name: "YouTube", icon: Youtube, href: SOCIAL_LINKS.youtube },
];

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const footerNavigation = {
    destinations: [
      { name: "Kinshasa", href: `${ROUTES.destinations}/kinshasa` },
      { name: "Virunga", href: `${ROUTES.destinations}/virunga` },
      { name: t('footer.dest_lacKivu'), href: `${ROUTES.destinations}/lac-kivu` },
      { name: "Kisangani", href: `${ROUTES.destinations}/kisangani` },
    ],
    services: [
      { name: t('footer.svc_travel'), href: `${ROUTES.services}#travel-organization` },
      { name: t('footer.svc_accommodation'), href: `${ROUTES.services}#accommodation` },
      { name: t('footer.svc_transport'), href: `${ROUTES.services}#transport` },
      { name: t('footer.svc_security'), href: `${ROUTES.services}#security` },
    ],
    company: [
      { name: t('footer.co_about'), href: ROUTES.about },
      { name: t('footer.co_blog'), href: ROUTES.blog },
      { name: t('footer.co_partners'), href: ROUTES.partners },
      { name: t('footer.co_contact'), href: ROUTES.contact },
    ],
    legal: [
      { name: t('footer.legal_privacy'), href: ROUTES.legal.privacy },
      { name: t('footer.legal_terms'), href: ROUTES.legal.terms },
      { name: t('footer.legal_faq'), href: ROUTES.legal.faq },
    ],
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom section-padding">
        <div className="grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href={ROUTES.home} className="inline-block mb-4">
              <Image 
                src="/logo.jpeg" 
                alt="TourismDRC Logo" 
                width={160} 
                height={53}
                className="h-12 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mt-4 max-w-md text-sm leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="h-4 w-4 text-primary-500" />
                <span>{CONTACT.address}</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="h-4 w-4 text-primary-500" />
                <a href={`tel:${CONTACT.phone}`} className="hover:text-white">
                  {CONTACT.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="h-4 w-4 text-primary-500" />
                <a href={`mailto:${CONTACT.email}`} className="hover:text-white">
                  {CONTACT.email}
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white">{t('footer.destinations')}</h3>
            <ul className="mt-4 space-y-2">
              {footerNavigation.destinations.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white">{t('footer.services')}</h3>
            <ul className="mt-4 space-y-2">
              {footerNavigation.services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white">{t('footer.company')}</h3>
            <ul className="mt-4 space-y-2">
              {footerNavigation.company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <div className="flex space-x-6">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <span className="sr-only">{item.name}</span>
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
              {footerNavigation.legal.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <p className="mt-8 text-center text-sm">
            &copy; {currentYear} {APP_NAME}. {t('footer.allRightsReserved')}
          </p>
        </div>
      </div>
    </footer>
  );
}
