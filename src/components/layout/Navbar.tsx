"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Globe, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { ROUTES } from "@/lib/constants";
import Button from "@/components/ui/Button";
import { useTranslation } from "@/i18n/LanguageProvider";
import { locales, localeNames, localeFlags, type Locale } from "@/i18n/config";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const pathname = usePathname();
  const { t, locale, setLocale } = useTranslation();

  const navigation = [
    { name: t('nav.home'), href: ROUTES.home },
    { 
      name: t('nav.destinations'), 
      href: ROUTES.destinations,
      megaMenu: {
        columns: [
          {
            title: t('megaMenu.destinations.cities'),
            links: [
              { name: t('megaMenu.destinations.kinshasa'), href: "/destinations/kinshasa", description: t('megaMenu.destinations.kinshasa_desc') },
              { name: t('megaMenu.destinations.lubumbashi'), href: "/destinations/lubumbashi", description: t('megaMenu.destinations.lubumbashi_desc') },
              { name: t('megaMenu.destinations.goma'), href: "/destinations/goma", description: t('megaMenu.destinations.goma_desc') },
              { name: t('megaMenu.destinations.kisangani'), href: "/destinations/kisangani", description: t('megaMenu.destinations.kisangani_desc') },
            ]
          },
          {
            title: t('megaMenu.destinations.nature'),
            links: [
              { name: t('megaMenu.destinations.virunga'), href: "/destinations/virunga", description: t('megaMenu.destinations.virunga_desc') },
              { name: t('megaMenu.destinations.salonga'), href: "/destinations/salonga", description: t('megaMenu.destinations.salonga_desc') },
              { name: t('megaMenu.destinations.kahuzi'), href: "/destinations/kahuzi", description: t('megaMenu.destinations.kahuzi_desc') },
              { name: t('megaMenu.destinations.boyoma'), href: "/destinations/boyoma", description: t('megaMenu.destinations.boyoma_desc') },
            ]
          },
        ],
        featured: [
          {
            title: "Découvrez Virunga",
            description: "Le plus ancien parc d'Afrique",
            image: "/images/virunga-featured.jpg",
            href: "/blog/virunga-guide"
          },
          {
            title: "Guide de Kinshasa",
            description: "Que faire dans la capitale",
            image: "/images/kinshasa-featured.jpg",
            href: "/blog/kinshasa-guide"
          },
        ]
      }
    },
    { 
      name: t('nav.experiences'), 
      href: ROUTES.experiences,
      megaMenu: {
        columns: [
          {
            title: t('megaMenu.experiences.byType'),
            links: [
              { name: t('megaMenu.experiences.safari'), href: ROUTES.experiences, description: t('megaMenu.experiences.safari_desc') },
              { name: t('megaMenu.experiences.culture'), href: ROUTES.experiences, description: t('megaMenu.experiences.culture_desc') },
              { name: t('megaMenu.experiences.adventure'), href: ROUTES.experiences, description: t('megaMenu.experiences.adventure_desc') },
              { name: t('megaMenu.experiences.wellness'), href: ROUTES.experiences, description: t('megaMenu.experiences.wellness_desc') },
            ]
          },
          {
            title: t('megaMenu.experiences.byDuration'),
            links: [
              { name: t('megaMenu.experiences.weekend'), href: ROUTES.experiences, description: t('megaMenu.experiences.weekend_desc') },
              { name: t('megaMenu.experiences.week'), href: ROUTES.experiences, description: t('megaMenu.experiences.week_desc') },
              { name: t('megaMenu.experiences.extended'), href: ROUTES.experiences, description: t('megaMenu.experiences.extended_desc') },
              { name: t('megaMenu.experiences.custom'), href: ROUTES.experiences, description: t('megaMenu.experiences.custom_desc') },
            ]
          },
        ],
        featured: [
          {
            title: "Safari Gorilles",
            description: "Rencontre avec les gorilles",
            image: "/images/gorilla-safari.jpg",
            href: ROUTES.experiences
          },
          {
            title: "Circuit Culturel",
            description: "Art et traditions congolaises",
            image: "/images/culture-tour.jpg",
            href: ROUTES.experiences
          },
        ]
      }
    },
    { 
      name: t('nav.services'), 
      href: ROUTES.services,
      megaMenu: {
        columns: [
          {
            title: t('megaMenu.services.logistics'),
            links: [
              { name: t('megaMenu.services.accommodation'), href: "/services/accommodation", description: t('megaMenu.services.accommodation_desc') },
              { name: t('megaMenu.services.transport'), href: "/services/transport", description: t('megaMenu.services.transport_desc') },
              { name: t('megaMenu.services.dining'), href: "/services/dining", description: t('megaMenu.services.dining_desc') },
            ]
          },
          {
            title: t('megaMenu.services.assistance'),
            links: [
              { name: t('megaMenu.services.guides'), href: "/services/guides", description: t('megaMenu.services.guides_desc') },
              { name: t('megaMenu.services.visa'), href: "/services/visa", description: t('megaMenu.services.visa_desc') },
              { name: t('megaMenu.services.insurance'), href: "/services/insurance", description: t('megaMenu.services.insurance_desc') },
            ]
          },
        ],
        featured: [
          {
            title: "Nos Guides Experts",
            description: "Rencontrez notre équipe",
            image: "/images/guides-team.jpg",
            href: "/blog/meet-our-guides"
          },
        ]
      }
    },
    { name: t('nav.about'), href: ROUTES.about },
    { name: t('nav.blog'), href: ROUTES.blog },
    { name: t('nav.contact'), href: ROUTES.contact },
  ];

  const handleMenuClick = (itemName: string, e: React.MouseEvent) => {
    e.preventDefault();
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  const handleClickOutside = () => {
    setActiveDropdown(null);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
      <nav className="w-[90%] mx-auto ">
        <div className="flex h-28 items-center justify-between">
          {/* Logo à gauche */}
          <div className="flex items-center">
            <Link href={ROUTES.home} className="flex items-center space-x-2 group">
              <Image 
                src="/logo1.jpeg" 
                alt="TourismDRC Logo" 
                width={180} 
                height={60}
                className="mt-[-10px] w-auto transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </Link>
          </div>

          {/* Tous les menus à droite */}
          <div className="hidden items-center space-x-6 lg:flex">
            {/* Navigation principale */}
            <div className="flex items-center space-x-1">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                const hasMegaMenu = item.megaMenu;
                
                return (
                  <div 
                    key={item.name}
                    className="relative"
                  >
                    {hasMegaMenu ? (
                      <button
                        onClick={(e) => handleMenuClick(item.name, e)}
                        className={cn(
                          "px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 flex items-center gap-1",
                          activeDropdown === item.name
                            ? "bg-primary-50 text-primary-700" 
                            : "text-gray-700 hover:bg-gray-50 hover:text-primary-600"
                        )}
                      >
                        {item.name}
                        <ChevronDown className={cn(
                          "h-4 w-4 transition-transform duration-200",
                          activeDropdown === item.name && "rotate-180"
                        )} />
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        className={cn(
                          "px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 flex items-center gap-1",
                          isActive 
                            ? "bg-primary-50 text-primary-700" 
                            : "text-gray-700 hover:bg-gray-50 hover:text-primary-600"
                        )}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>
            
            {/* Boutons d'action */}
            <div className="flex items-center space-x-3 border-l border-gray-200 pl-6">
              <div className="relative">
                <button 
                  onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
                  className="flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  <Globe className="h-4 w-4" />
                  <span>{locale.toUpperCase()}</span>
                  <ChevronDown className={cn(
                    "h-3 w-3 transition-transform duration-200",
                    languageMenuOpen && "rotate-180"
                  )} />
                </button>
                
                {languageMenuOpen && (
                  <>
                    <div 
                      className="fixed inset-0 z-30"
                      onClick={() => setLanguageMenuOpen(false)}
                    />
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-40">
                      {locales.map((loc) => (
                        <button
                          key={loc}
                          onClick={() => {
                            setLocale(loc);
                            setLanguageMenuOpen(false);
                          }}
                          className={cn(
                            "w-full flex items-center justify-between px-4 py-2 text-sm transition-colors",
                            locale === loc
                              ? "bg-primary-50 text-primary-600 font-semibold"
                              : "text-gray-700 hover:bg-gray-50"
                          )}
                        >
                          <span className="flex items-center gap-2">
                            <span>{localeFlags[loc]}</span>
                            <span>{localeNames[loc]}</span>
                          </span>
                          {locale === loc && <Check className="h-4 w-4" />}
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>
              <Link 
                href={ROUTES.booking} 
                className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-6 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200"
              >
                {t('nav.getQuote')}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
          
          {/* Mega Menu Dropdown */}
          {activeDropdown && navigation.find(item => item.name === activeDropdown)?.megaMenu && (
            <>
              <div 
                className="fixed inset-0 z-40"
                onClick={handleClickOutside}
              />
              <div 
                className="absolute left-0 right-0 top-full mt-0 bg-white border-t border-gray-200 shadow-2xl z-50 animate-fade-in-down"
                style={{ fontFamily: 'var(--font-poppins)' }}
              >
              <div className="container-custom py-10">
                <div className="grid grid-cols-12 gap-8">
                  <div className="col-span-8">
                    <div className="grid grid-cols-2 gap-12">
                      {navigation.find(item => item.name === activeDropdown)?.megaMenu?.columns.map((column, idx) => (
                        <div key={idx} className="animate-slide-up" style={{ animationDelay: `${idx * 100}ms` }}>
                          <h3 className="text-xs font-bold text-gray-900 mb-5 uppercase tracking-widest" style={{ fontFamily: 'var(--font-montserrat)', letterSpacing: '0.1em' }}>
                            {column.title}
                          </h3>
                          <ul className="space-y-4">
                            {column.links.map((link, linkIdx) => (
                              <li key={link.name} className="animate-fade-in" style={{ animationDelay: `${(idx * 100) + (linkIdx * 50)}ms` }}>
                                <Link
                                  href={link.href}
                                  className="block group py-1 transition-all duration-200"
                                >
                                  <div className="font-semibold text-base text-gray-900 group-hover:text-primary-600 transition-colors duration-200 mb-1">
                                    {link.name}
                                  </div>
                                  <div className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors duration-200">
                                    {link.description}
                                  </div>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="col-span-4 border-l border-gray-200 pl-10">
                    <h3 className="text-xs font-bold text-gray-900 mb-5 uppercase tracking-widest" style={{ fontFamily: 'var(--font-montserrat)', letterSpacing: '0.1em' }}>
                      À Découvrir
                    </h3>
                    <div className="space-y-5">
                      {navigation.find(item => item.name === activeDropdown)?.megaMenu?.featured.map((feature, idx) => (
                        <Link
                          key={idx}
                          href={feature.href}
                          className="block group animate-fade-in"
                          style={{ animationDelay: `${200 + (idx * 100)}ms` }}
                        >
                          <div className="relative aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300 shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:scale-[1.02]">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                            <div className="absolute inset-0 bg-primary-600/0 group-hover:bg-primary-600/10 transition-colors duration-300" />
                            <div className="absolute bottom-4 left-4 right-4">
                              <div className="text-white font-bold text-base mb-1 group-hover:translate-x-1 transition-transform duration-200">
                                {feature.title}
                              </div>
                              <div className="text-white/90 text-sm">
                                {feature.description}
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </>
          )}

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-900" />
            ) : (
              <Menu className="h-6 w-6 text-gray-900" />
            )}
          </button>
        </div>

        {/* Mobile Sidebar */}
        {mobileMenuOpen && (
          <>
            {/* Overlay */}
            <div 
              className="fixed inset-0 bg-black/50 z-40 lg:hidden animate-fade-in"
              onClick={() => setMobileMenuOpen(false)}
            />
            
            {/* Sidebar */}
            <div className="fixed top-0 right-0 bottom-0 w-80 bg-white z-50 lg:hidden shadow-2xl animate-slide-in-right">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <div className="flex items-center space-x-2">
                  <Image 
                    src="/logo1.jpeg" 
                    alt="TourismDRC Logo" 
                    width={120} 
                    height={40}
                    className="w-auto"
                  />
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <X className="h-6 w-6 text-gray-900" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="overflow-y-auto h-[calc(100vh-180px)] py-6">
                <div className="space-y-1 px-4">
                  {/* Main navigation items */}
                  {navigation.map((item) => {
                    const isActive = pathname === item.href;
                    const hasMegaMenu = item.megaMenu;
                    
                    return (
                      <div key={item.name}>
                        {/* Main link */}
                        <Link
                          href={item.href}
                          className={cn(
                            "block rounded-lg px-4 py-3 text-base font-semibold transition-colors",
                            isActive
                              ? "bg-primary-50 text-primary-600"
                              : "text-gray-900 hover:bg-gray-50"
                          )}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                        
                        {/* Sub-links from mega menu (flat structure) */}
                        {hasMegaMenu && (
                          <div className="ml-4 mt-2 space-y-1">
                            {item.megaMenu.columns.map((column) => (
                              column.links.map((link) => (
                                <Link
                                  key={link.name}
                                  href={link.href}
                                  className="block rounded-lg px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary-600 transition-colors"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {link.name}
                                </Link>
                              ))
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Footer Actions */}
              <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200 bg-white space-y-3">
                <div className="relative">
                  <button 
                    onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
                    className="flex w-full items-center justify-center space-x-2 rounded-lg px-4 py-3 text-sm font-medium text-gray-700 bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <Globe className="h-4 w-4" />
                    <span>{localeNames[locale]}</span>
                    <ChevronDown className={cn(
                      "h-3 w-3 transition-transform duration-200",
                      languageMenuOpen && "rotate-180"
                    )} />
                  </button>
                  
                  {languageMenuOpen && (
                    <div className="absolute bottom-full left-0 right-0 mb-2 bg-white rounded-lg shadow-xl border border-gray-200 py-2">
                      {locales.map((loc) => (
                        <button
                          key={loc}
                          onClick={() => {
                            setLocale(loc);
                            setLanguageMenuOpen(false);
                          }}
                          className={cn(
                            "w-full flex items-center justify-between px-4 py-2 text-sm transition-colors",
                            locale === loc
                              ? "bg-primary-50 text-primary-600 font-semibold"
                              : "text-gray-700 hover:bg-gray-50"
                          )}
                        >
                          <span className="flex items-center gap-2">
                            <span>{localeFlags[loc]}</span>
                            <span>{localeNames[loc]}</span>
                          </span>
                          {locale === loc && <Check className="h-4 w-4" />}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <Link 
                  href={ROUTES.booking} 
                  className="flex w-full items-center justify-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t('nav.getQuote')}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </>
        )}
      </nav>
    </header>
  );
}
