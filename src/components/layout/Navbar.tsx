"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Globe, Check, Building2, Trees, MapPin, Compass, Calendar, Briefcase, HeartHandshake } from "lucide-react";
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
              { name: t('megaMenu.destinations.moanda'), href: "/destinations/moanda", description: t('megaMenu.destinations.moanda_desc') },
              { name: t('megaMenu.destinations.matadi'), href: "/destinations/matadi", description: t('megaMenu.destinations.matadi_desc') },
            ]
          },
          {
            title: t('megaMenu.destinations.nature'),
            links: [
              { name: t('megaMenu.destinations.zongo'), href: "/destinations/zongo", description: t('megaMenu.destinations.zongo_desc') },
              { name: t('megaMenu.destinations.kisantu'), href: "/destinations/kisantu", description: t('megaMenu.destinations.kisantu_desc') },
              { name: t('megaMenu.destinations.nsele'), href: "/destinations/nsele", description: t('megaMenu.destinations.nsele_desc') },
            ]
          },
        ],
        featured: []
      }
    },
    {
      name: t("nav.experiences"),
      href: ROUTES.packages,
      megaMenu: {
        columns: [
          {
            title: t("home.packagesTitle"),
            links: [
              {
                name: t("home.package1_title"),
                href: ROUTES.packages,
                description: t("home.package1_desc"),
              },
              {
                name: t("home.package2_title"),
                href: ROUTES.packages,
                description: t("home.package2_desc"),
              },
              {
                name: t("home.package3_title"),
                href: ROUTES.packages,
                description: t("home.package3_desc"),
              },
            ],
          },
        ],
        featured: [],
      },
    },
    {
      name: t('nav.services'),
      href: ROUTES.services,
      megaMenu: {
        columns: [
          {
            title: t('megaMenu.services.logistics'),
            links: [
              { name: t('home.service1_name'), href: `${ROUTES.services}#airport`, description: t('home.service1_short') },
              { name: t('home.service2_name'), href: `${ROUTES.services}#hotel`, description: t('home.service2_short') },
              { name: t('home.service3_name'), href: `${ROUTES.services}#transport`, description: t('home.service3_short') },
            ]
          },
          {
            title: t('megaMenu.services.assistance'),
            links: [
              { name: t('home.service4_name'), href: `${ROUTES.services}#security`, description: t('home.service4_short') },
              { name: t('home.service5_name'), href: `${ROUTES.services}#assistance`, description: t('home.service5_short') },
              { name: t('home.service6_name'), href: `${ROUTES.services}#discovery`, description: t('home.service6_short') },
            ]
          },
        ],
        featured: []
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

  const activeMegaMenu = activeDropdown 
    ? navigation.find(item => item.name === activeDropdown)?.megaMenu 
    : null;

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
      <nav className="w-[90%] mx-auto ">
        <div className="flex h-28 items-center justify-between">
          {/* Logo à gauche */}
          <div className="flex items-center">
            <Link href={ROUTES.home} className="flex items-center space-x-2 group">
              <Image
                src="/logo.jpeg"
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
                const isActive = item.href === ROUTES.home
                  ? pathname === item.href
                  : pathname.startsWith(item.href);
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
                          activeDropdown === item.name || isActive
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
                    <div className={(activeMegaMenu?.featured?.length ?? 0) > 0 ? "col-span-8" : "col-span-12"}>
                      <div className={`grid ${(activeMegaMenu?.columns?.length ?? 0) > 1 ? "grid-cols-2" : "grid-cols-1 max-w-md mx-auto"} gap-12 text-center md:text-left`}>
                        {activeMegaMenu?.columns.map((column, idx) => (
                          <div key={idx} className="animate-slide-up" style={{ animationDelay: `${idx * 100}ms` }}>
                            <h3 className="text-sm font-black text-slate-800 mb-6 tracking-widest flex items-center justify-center md:justify-start gap-2">
                              {column.title === t('megaMenu.destinations.cities') && <Building2 className="w-4 h-4 text-primary-500" />}
                              {column.title === t('megaMenu.destinations.nature') && <Trees className="w-4 h-4 text-primary-500" />}
                              {column.title === t('nav.experiences') && <Compass className="w-4 h-4 text-primary-500" />}
                              {column.title === t('home.packagesTitle') && <Compass className="w-4 h-4 text-primary-500" />}
                              {column.title === t('megaMenu.experiences.byDuration') && <Calendar className="w-4 h-4 text-primary-500" />}
                              {column.title === t('megaMenu.services.logistics') && <Briefcase className="w-4 h-4 text-primary-500" />}
                              {column.title === t('megaMenu.services.assistance') && <HeartHandshake className="w-4 h-4 text-primary-500" />}
                              {column.title}
                            </h3>
                            <ul className="space-y-4">
                              {column.links.map((link, linkIdx) => (
                                <li key={link.name} className="animate-fade-in" style={{ animationDelay: `${(idx * 100) + (linkIdx * 50)}ms` }}>
                                  <Link
                                    href={link.href}
                                    className="block group py-1 transition-all duration-200"
                                    onClick={() => setActiveDropdown(null)}
                                  >
                                    <div className="font-bold text-[15px] text-slate-700 group-hover:text-primary-600 transition-colors duration-200 mb-1 leading-tight">
                                      {link.name}
                                    </div>
                                    <div className="text-[13px] text-slate-500 font-medium group-hover:text-slate-600 transition-colors duration-200">
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
                    src="/logo.jpeg"
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
