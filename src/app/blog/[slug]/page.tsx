'use client';

import Link from "next/link";
import { ArrowLeft, Clock, Tag, BookOpen } from "lucide-react";
import { useTranslation } from "@/i18n/LanguageProvider";
import { ROUTES } from "@/lib/constants";
import { use } from "react";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

const postMeta: Record<string, {
  gradient: string;
  icon: string;
  category: { fr: string; en: string };
  title: { fr: string; en: string };
  readTime: string;
}> = {
  "virunga-guide": {
    gradient: "from-green-500 to-emerald-700",
    icon: "🦍",
    category: { fr: "Safari", en: "Safari" },
    title: { fr: "Guide Complet du Parc des Virunga", en: "Complete Guide to Virunga National Park" },
    readTime: "8 min",
  },
  "kinshasa-guide": {
    gradient: "from-orange-500 to-red-700",
    icon: "🏙️",
    category: { fr: "Culture", en: "Culture" },
    title: { fr: "Guide de Kinshasa : Que Voir et Faire", en: "Kinshasa Guide: What to See and Do" },
    readTime: "6 min",
  },
  "conseils-voyage-rdc": {
    gradient: "from-blue-500 to-indigo-700",
    icon: "✈️",
    category: { fr: "Conseils", en: "Tips" },
    title: { fr: "10 Conseils pour Voyager en RDC", en: "10 Tips for Traveling to the DRC" },
    readTime: "5 min",
  },
  "gorilles-montagne": {
    gradient: "from-teal-500 to-cyan-700",
    icon: "🌿",
    category: { fr: "Nature", en: "Nature" },
    title: { fr: "Les Gorilles de Montagne : Histoire et Conservation", en: "Mountain Gorillas: History and Conservation" },
    readTime: "7 min",
  },
  "nyiragongo-ascension": {
    gradient: "from-red-600 to-rose-800",
    icon: "🌋",
    category: { fr: "Aventure", en: "Adventure" },
    title: { fr: "Ascension du Nyiragongo : Mon Expérience", en: "Nyiragongo Ascent: My Experience" },
    readTime: "10 min",
  },
  "rumba-congolaise-patrimoine": {
    gradient: "from-purple-500 to-violet-700",
    icon: "🎵",
    category: { fr: "Culture", en: "Culture" },
    title: { fr: "La Rumba Congolaise, Patrimoine de l'UNESCO", en: "Congolese Rumba, UNESCO Heritage" },
    readTime: "4 min",
  },
};

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = use(params);
  const { locale, t } = useTranslation();
  const lang = locale as "fr" | "en";

  const meta = postMeta[slug];
  const gradient = meta?.gradient ?? "from-primary-600 to-primary-900";
  const icon = meta?.icon ?? "📖";
  const category = meta?.category[lang] ?? slug;
  const title = meta?.title[lang] ?? slug.replace(/-/g, ' ');
  const readTime = meta?.readTime ?? "5 min";

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className={`relative bg-gradient-to-br ${gradient} overflow-hidden`}>
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative container-custom py-16 md:py-24">
          <Link
            href={ROUTES.blog}
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 text-sm font-medium transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            {t('blog_page.backToBlog')}
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
              <Tag className="h-3 w-3" />
              {category}
            </span>
            <span className="text-white/60 text-xs flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {readTime}
            </span>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-6xl">{icon}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white max-w-3xl leading-tight">
            {title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8 text-center mb-10">
            <BookOpen className="h-12 w-12 text-amber-500 mx-auto mb-4" />
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              {lang === "fr" ? "Article en cours de rédaction" : "Article being written"}
            </h2>
            <p className="text-gray-600 mb-6">
              {t('blog_page.postComingSoon')}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href={ROUTES.blog}
                className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all"
              >
                <ArrowLeft className="h-4 w-4" />
                {t('blog_page.backToBlog')}
              </Link>
              <Link
                href={ROUTES.contact}
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-primary-600 border-2 border-primary-600 px-6 py-3 rounded-xl font-semibold text-sm transition-all"
              >
                {lang === "fr" ? "Nous contacter" : "Contact us"}
              </Link>
            </div>
          </div>

          {/* Related articles */}
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            {lang === "fr" ? "Vous pourriez aussi aimer" : "You might also like"}
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {Object.entries(postMeta)
              .filter(([s]) => s !== slug)
              .slice(0, 4)
              .map(([s, m]) => (
                <Link
                  key={s}
                  href={`${ROUTES.blog}/${s}`}
                  className="flex items-center gap-3 bg-gray-50 hover:bg-gray-100 rounded-xl p-4 transition-colors group"
                >
                  <span className="text-3xl">{m.icon}</span>
                  <div>
                    <div className="text-xs text-primary-600 font-semibold mb-1">{m.category[lang]}</div>
                    <div className="text-sm font-semibold text-gray-900 group-hover:text-primary-600 transition-colors leading-tight">
                      {m.title[lang]}
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
