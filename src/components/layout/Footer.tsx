'use client';

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { ROUTES, CONTACT, SOCIAL_LINKS, APP_NAME } from "@/lib/constants";
import { useTranslation } from "@/i18n/LanguageProvider";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    stroke="none"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: SOCIAL_LINKS.facebook },
  { name: "Instagram", icon: Instagram, href: SOCIAL_LINKS.instagram },
  { name: "WhatsApp", icon: WhatsAppIcon, href: `https://wa.me/${CONTACT.whatsapp.replace('+', '')}` },
];

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const footerNavigation = {
    destinations: [
      { name: "Kinshasa", href: `${ROUTES.destinations}/kinshasa` },
      { name: "Zongo", href: `${ROUTES.destinations}/zongo` },
      { name: "Kisantu", href: `${ROUTES.destinations}/kisantu` },
      { name: "Moanda", href: `${ROUTES.destinations}/moanda` },
      { name: "Matadi", href: `${ROUTES.destinations}/matadi` },
      { name: "N'Sele", href: `${ROUTES.destinations}/nsele` },
    ],
    services: [
      { name: t('footer.svc_travel'), href: `${ROUTES.services}#airport` },
      { name: t('footer.svc_accommodation'), href: `${ROUTES.services}#hotel` },
      { name: t('footer.svc_transport'), href: `${ROUTES.services}#transport` },
      { name: t('footer.svc_security'), href: `${ROUTES.services}#security` },
    ],
    company: [
      { name: t('footer.co_about'), href: ROUTES.about },
      { name: t('footer.co_blog'), href: ROUTES.blog },
      { name: t('footer.co_partners'), href: ROUTES.partners },
      { name: t('footer.co_contact'), href: ROUTES.contact },
    ],
  };

  return (
    <footer className="bg-slate-950 text-slate-300 relative overflow-hidden border-t border-white/5">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary-900/20 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-900/10 rounded-full blur-[100px] translate-y-1/4 translate-x-1/4 pointer-events-none" />

      <div className="container-custom pt-24 pb-12 relative z-10">
        <div className="grid gap-12 lg:grid-cols-12 mb-16">

          {/* Brand & Contact Info */}
          <div className="lg:col-span-5 pr-8">
            <Link href={ROUTES.home} className="inline-block mb-8 bg-white p-4 rounded-xl shadow-lg ring-1 ring-white/10 hover:shadow-primary-500/20 transition-shadow">
              <Image
                src="/logo.jpeg"
                alt="TourismDRC Logo"
                width={180}
                height={60}
                className="h-10 w-auto object-contain"
              />
            </Link>

            <p className="max-w-md text-[15px] leading-relaxed text-slate-400 mb-8 font-light">
              {t('footer.description')}
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                  <MapPin className="h-4 w-4 text-primary-400" />
                </div>
                <div className="text-sm text-slate-400 leading-relaxed pt-2.5">
                  {CONTACT.address}
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                  <Phone className="h-4 w-4 text-primary-400" />
                </div>
                <div className="pt-1.5 flex flex-col gap-1">
                  <a href={`tel:${CONTACT.phoneEn}`} className="text-sm text-slate-400 hover:text-white transition-colors duration-300 group flex items-center gap-2">
                    <span className="text-[10px] uppercase font-bold text-slate-500 group-hover:text-primary-400 transition-colors">EN</span> {CONTACT.phoneEn}
                  </a>
                  <a href={`tel:${CONTACT.phoneFr}`} className="text-sm text-slate-400 hover:text-white transition-colors duration-300 group flex items-center gap-2">
                    <span className="text-[10px] uppercase font-bold text-slate-500 group-hover:text-primary-400 transition-colors">FR</span> {CONTACT.phoneFr}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                  <Mail className="h-4 w-4 text-primary-400" />
                </div>
                <div className="pt-2.5">
                  <a href={`mailto:${CONTACT.email}`} className="text-sm text-slate-400 hover:text-white transition-colors duration-300">
                    {CONTACT.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-12 pt-4">
            {/* Destinations */}
            <div>
              <div className="font-bold text-white mb-6 uppercase tracking-widest text-sm flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary-500 shrink-0" />
                <span>{t('footer.destinations')}</span>
              </div>
              <ul className="space-y-4">
                {footerNavigation.destinations.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-[14px] lg:text-[15px] font-light text-slate-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <div className="font-bold text-white mb-6 uppercase tracking-widest text-sm flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                <span>{t('footer.services')}</span>
              </div>
              <ul className="space-y-4">
                {footerNavigation.services.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-[14px] lg:text-[15px] font-light text-slate-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="col-span-2 md:col-span-1">
              <div className="font-bold text-white mb-6 uppercase tracking-widest text-sm flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0" />
                <span>{t('footer.company')}</span>
              </div>
              <ul className="space-y-4">
                {footerNavigation.company.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-[14px] lg:text-[15px] font-light text-slate-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Social Links */}
          <div className="flex gap-3">
            {socialLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-primary-500 hover:text-white hover:border-transparent transition-all duration-300 group"
                >
                  <span className="sr-only">{item.name}</span>
                  <Icon className="h-4 w-4 group-hover:scale-110 transition-transform" />
                </a>
              );
            })}
          </div>

          {/* Copyright & Legal */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p className="text-xs text-slate-500 font-medium">
              &copy; {currentYear} {APP_NAME}. {t('footer.allRightsReserved')}
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}
