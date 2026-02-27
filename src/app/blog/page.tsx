'use client';

import Link from "next/link";
import { BookOpen, ArrowRight } from "lucide-react";
import { useTranslation } from "@/i18n/LanguageProvider";
import { ROUTES } from "@/lib/constants";

const comingSoonPosts = [
  {
    slug: "virunga-guide",
    gradient: "from-green-500 to-emerald-700",
    icon: "🦍",
    category: { fr: "Safari", en: "Safari" },
    title: { fr: "Guide Complet du Parc des Virunga", en: "Complete Guide to Virunga National Park" },
    excerpt: {
      fr: "Tout ce que vous devez savoir pour préparer votre trekking gorilles dans le plus ancien parc d'Afrique.",
      en: "Everything you need to know to prepare your gorilla trekking in Africa's oldest park.",
    },
    readTime: "8 min",
  },
  {
    slug: "kinshasa-guide",
    gradient: "from-orange-500 to-red-700",
    icon: "🏙️",
    category: { fr: "Culture", en: "Culture" },
    title: { fr: "Guide de Kinshasa : Que Voir et Faire", en: "Kinshasa Guide: What to See and Do" },
    excerpt: {
      fr: "Les incontournables de la plus grande ville francophone du monde : musées, marchés, musique et gastronomie.",
      en: "The must-sees of the world's largest French-speaking city: museums, markets, music and gastronomy.",
    },
    readTime: "6 min",
  },
  {
    slug: "conseils-voyage-rdc",
    gradient: "from-blue-500 to-indigo-700",
    icon: "✈️",
    category: { fr: "Conseils", en: "Tips" },
    title: { fr: "10 Conseils pour Voyager en RDC", en: "10 Tips for Traveling to the DRC" },
    excerpt: {
      fr: "Visa, santé, monnaie, sécurité... Tout ce qu'il faut savoir avant de partir en République Démocratique du Congo.",
      en: "Visa, health, currency, safety... Everything you need to know before traveling to the Democratic Republic of Congo.",
    },
    readTime: "5 min",
  },
  {
    slug: "gorilles-montagne",
    gradient: "from-teal-500 to-cyan-700",
    icon: "🌿",
    category: { fr: "Nature", en: "Nature" },
    title: { fr: "Les Gorilles de Montagne : Histoire et Conservation", en: "Mountain Gorillas: History and Conservation" },
    excerpt: {
      fr: "Découvrez l'histoire fascinante des gorilles de montagne et les efforts pour leur conservation dans les forêts du Kivu.",
      en: "Discover the fascinating history of mountain gorillas and the conservation efforts in the Kivu forests.",
    },
    readTime: "7 min",
  },
  {
    slug: "nyiragongo-ascension",
    gradient: "from-red-600 to-rose-800",
    icon: "🌋",
    category: { fr: "Aventure", en: "Adventure" },
    title: { fr: "Ascension du Nyiragongo : Mon Expérience", en: "Nyiragongo Ascent: My Experience" },
    excerpt: {
      fr: "Un récit immersif de l'ascension du mythique volcan Nyiragongo et de la nuit passée au bord de son lac de lave.",
      en: "An immersive account of climbing the mythical Nyiragongo volcano and spending the night by its lava lake.",
    },
    readTime: "10 min",
  },
  {
    slug: "rumba-congolaise-patrimoine",
    gradient: "from-purple-500 to-violet-700",
    icon: "🎵",
    category: { fr: "Culture", en: "Culture" },
    title: { fr: "La Rumba Congolaise, Patrimoine de l'UNESCO", en: "Congolese Rumba, UNESCO Heritage" },
    excerpt: {
      fr: "Classée au patrimoine immatériel de l'UNESCO en 2021, la rumba congolaise est bien plus qu'un genre musical.",
      en: "Listed on UNESCO's intangible heritage in 2021, Congolese rumba is much more than a musical genre.",
    },
    readTime: "4 min",
  },
];

export default function BlogPage() {
  const { t, locale } = useTranslation();
  const lang = locale as "fr" | "en";

  return (
    <div className="min-h-screen">
      <section
        className="relative overflow-hidden py-32"
        style={{
          backgroundImage: "url(/images/destinations/kinshasa.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/80 via-blue-900/70 to-purple-900/80" />
        <div className="relative container-custom text-white">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-sm px-4 py-2 text-sm font-semibold text-white border border-white/30">
            <BookOpen className="h-4 w-4" />
            {t('blog_page.heroTitle')}
          </div>
          <h1 className="mb-6 animate-fade-in text-white">{t('blog_page.heroTitle')}</h1>
          <p className="mb-8 max-w-2xl text-lg md:text-xl animate-fade-in animation-delay-200 text-white/90">
            {t('blog_page.heroSubtitle')}
          </p>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          {/* Featured post */}
          <div className="mb-12">
            <div className={`relative rounded-3xl bg-gradient-to-br ${comingSoonPosts[0].gradient} overflow-hidden`}>
              <div className="absolute inset-0 bg-black/20" />
              <div className="relative p-8 md:p-12 flex flex-col md:flex-row gap-6 items-start">
                <div className="text-7xl flex-shrink-0">{comingSoonPosts[0].icon}</div>
                <div className="flex-1">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full">
                      {comingSoonPosts[0].category[lang]}
                    </span>
                    <span className="text-white/70 text-xs">{comingSoonPosts[0].readTime}</span>
                    <span className="bg-primary-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      {lang === "fr" ? "À venir" : "Coming soon"}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-3">
                    {comingSoonPosts[0].title[lang]}
                  </h2>
                  <p className="text-white/80 text-lg mb-6 leading-relaxed">
                    {comingSoonPosts[0].excerpt[lang]}
                  </p>
                  <span className="inline-flex items-center gap-2 bg-white/20 text-white px-6 py-3 rounded-xl font-semibold text-sm cursor-not-allowed opacity-70">
                    {t('blog_page.readMore')}
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Grid posts */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {comingSoonPosts.slice(1).map((post) => (
              <div key={post.slug} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className={`h-40 bg-gradient-to-br ${post.gradient} flex items-center justify-center`}>
                  <span className="text-5xl">{post.icon}</span>
                </div>
                <div className="p-6">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="text-xs font-bold text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                      {post.category[lang]}
                    </span>
                    <span className="text-xs text-gray-400">{post.readTime}</span>
                    <span className="text-xs text-amber-600 bg-amber-50 px-2 py-1 rounded-full font-medium">
                      {lang === "fr" ? "À venir" : "Coming soon"}
                    </span>
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2 leading-tight">
                    {post.title[lang]}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {post.excerpt[lang]}
                  </p>
                  <div className="flex items-center gap-1 text-gray-400 text-sm font-medium cursor-not-allowed">
                    {t('blog_page.readMore')}
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center bg-white rounded-2xl p-8 border border-gray-100">
            <p className="text-gray-500 text-lg mb-2">{t('blog_page.comingSoonTitle')}</p>
            <p className="text-gray-400 mb-6">{t('blog_page.comingSoonText')}</p>
            <Link
              href={ROUTES.contact}
              className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200"
            >
              {lang === "fr" ? "Nous contacter" : "Contact us"}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
