# Tourism DRC 🇨🇩

Plateforme web premium de tourisme pour la République Démocratique du Congo, construite avec Next.js 14 et une architecture professionnelle scalable.

## 🎯 Vue d'Ensemble

Tourism DRC est une application web moderne conçue pour promouvoir le tourisme en RDC. Elle offre une expérience utilisateur premium avec une architecture robuste, maintenable et SEO-friendly.

## 🚀 Stack Technique

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** TailwindCSS avec design system personnalisé
- **State Management:** Redux Toolkit + RTK Query
- **HTTP Client:** Axios (via RTK Query)
- **Icons:** Lucide React
- **Fonts:** Inter (sans-serif) + Playfair Display (display)
- **Linting:** ESLint + Prettier

## 📁 Architecture du Projet

```
src/
├── app/                      # Routes Next.js 14 (App Router)
│   ├── (marketing)/         # Groupe de routes marketing
│   ├── destinations/        # Pages destinations
│   ├── packages/            # Pages forfaits
│   ├── services/            # Pages services
│   ├── about/               # À propos
│   ├── blog/                # Blog
│   ├── contact/             # Contact
│   ├── booking/             # Réservation
│   ├── partners/            # Partenaires
│   ├── legal/               # Pages légales
│   ├── layout.tsx           # Layout racine
│   └── page.tsx             # Page d'accueil
│
├── components/
│   ├── ui/                  # Composants UI réutilisables
│   ├── layout/              # Navbar, Footer
│   ├── sections/            # Sections de pages
│   ├── cards/               # Cartes (Destination, Package, etc.)
│   └── forms/               # Formulaires
│
├── features/                # Features Redux par domaine
│   ├── destinations/
│   ├── packages/
│   ├── services/
│   └── blog/
│
├── store/                   # Configuration Redux
│   ├── index.ts            # Store principal
│   └── api.ts              # RTK Query base API
│
├── lib/                     # Utilitaires et helpers
│   ├── constants.ts
│   └── utils.ts
│
├── types/                   # Types TypeScript
│   └── index.ts
│
├── hooks/                   # Custom React hooks
│   └── useAppDispatch.ts
│
├── config/                  # Configuration
│   └── i18n.ts
│
└── styles/                  # Styles globaux
    └── globals.css
```

## 🎨 Design System

### Palette de Couleurs

- **Primary (Vert Nature):** Représente la nature luxuriante de la RDC
- **Secondary (Ocre/Terre):** Évoque les terres africaines
- **Earth (Tons Terre):** Palette complémentaire
- **Accent (Bleu):** Pour les CTAs et éléments interactifs

### Typographie

- **Sans-serif:** Inter (corps de texte)
- **Display:** Playfair Display (titres)

## 🛠️ Installation

```bash
# Cloner le repository
git clone <repository-url>
cd tourism-drc

# Installer les dépendances
npm install

# Créer le fichier .env.local
cp .env.example .env.local

# Lancer le serveur de développement
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 📝 Variables d'Environnement

Créer un fichier `.env.local` à la racine du projet :

```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:3001/api
```

## 🗺️ Routes Principales

- `/` - Page d'accueil
- `/destinations` - Liste des destinations
- `/destinations/[slug]` - Détail d'une destination
- `/packages` - Liste des forfaits
- `/packages/[slug]` - Détail d'un forfait
- `/services` - Services offerts
- `/about` - À propos
- `/blog` - Blog
- `/blog/[slug]` - Article de blog
- `/contact` - Contact
- `/booking` - Demande de devis
- `/partners` - Partenaires
- `/legal/privacy` - Politique de confidentialité
- `/legal/terms` - Conditions d'utilisation
- `/legal/faq` - FAQ

## 🔌 API Integration

L'application utilise RTK Query pour la gestion des appels API. Les endpoints sont définis dans `src/store/api.ts` :

- `getDestinations` - Liste des destinations
- `getDestinationBySlug` - Détail d'une destination
- `getPackages` - Liste des forfaits
- `getPackageBySlug` - Détail d'un forfait
- `getFeaturedPackages` - Forfaits en vedette
- `getServices` - Liste des services
- `getBlogPosts` - Articles de blog
- `submitContact` - Formulaire de contact
- `submitQuoteRequest` - Demande de devis
- `submitBooking` - Réservation

## 🌍 Internationalisation

Structure prête pour le multi-langue (FR/EN) via `next-intl`. Configuration dans `src/config/i18n.ts`.

## 🎯 Features Principales

### ✅ Implémenté

- Architecture Next.js 14 avec App Router
- Redux Toolkit + RTK Query
- Design system TailwindCSS personnalisé
- Composants UI réutilisables
- Layout responsive (Navbar + Footer)
- Page d'accueil complète
- Routes principales
- Formulaires de contact et devis
- SEO optimisé (metadata, sitemap, robots.txt)
- Pages dynamiques [slug]

### 🚧 À Développer

- Intégration backend API
- Authentification admin
- Dashboard admin
- Système de paiement
- Galeries photos avancées
- Système de réservation complet
- Multi-langue complet (i18n)

## 📦 Scripts Disponibles

```bash
# Développement
npm run dev

# Build production
npm run build

# Démarrer en production
npm start

# Linting
npm run lint

# Format avec Prettier
npm run format
```

## 🏗️ Build & Déploiement

```bash
# Build de production
npm run build

# Test du build localement
npm start
```

### Déploiement Vercel

Le projet est optimisé pour Vercel :

```bash
vercel --prod
```

## 🔒 Sécurité

- Variables d'environnement sécurisées
- Validation des formulaires
- Protection CSRF
- Headers de sécurité Next.js

## 🧪 Tests (À Implémenter)

Structure prête pour :
- Jest + React Testing Library
- Cypress pour les tests E2E
- Tests unitaires des composants
- Tests d'intégration API

## 📈 Performance

- Images optimisées avec `next/image`
- Lazy loading des composants
- Code splitting automatique
- Fonts optimisées
- SEO optimisé

## 🤝 Contribution

Ce projet suit les meilleures pratiques :
- Code TypeScript strict
- Architecture modulaire
- Séparation des responsabilités
- Commentaires professionnels
- Clean code

## 📄 License

Propriétaire - Tourism DRC

## 👥 Contact

Pour toute question concernant le projet, contactez l'équipe de développement.

---

**Built with ❤️ for Tourism DRC**
