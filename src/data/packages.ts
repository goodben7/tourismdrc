export interface PackageItineraryDay {
  day: number;
  title: { fr: string; en: string };
  description: { fr: string; en: string };
  activities: { fr: string; en: string }[];
}

export interface PackageData {
  slug: string;
  heroImage: string;
  heroGradient: string;
  heroIcon: string;
  category: string;
  name: { fr: string; en: string };
  tagline: { fr: string; en: string };
  description: { fr: string; en: string };
  duration: { fr: string; en: string };
  groupSize: { fr: string; en: string };
  difficulty: { fr: string; en: string };
  price: { fr: string; en: string };
  included: { fr: string; en: string }[];
  notIncluded: { fr: string; en: string }[];
  itinerary: PackageItineraryDay[];
  destinations: string[];
  tags: string[];
  featured: boolean;
}

export const packages: PackageData[] = [
  {
    slug: "safari-gorilles",
    heroImage: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1920&q=80",
    heroGradient: "from-green-700 via-emerald-800 to-teal-900",
    heroIcon: "🦍",
    category: "safari",
    featured: true,
    name: { fr: "Safari Gorilles", en: "Gorilla Safari" },
    tagline: {
      fr: "Une rencontre inoubliable avec les gorilles de montagne",
      en: "An unforgettable encounter with mountain gorillas",
    },
    description: {
      fr: "Plongez au cœur du Parc des Virunga pour une expérience unique au monde : observer les gorilles de montagne dans leur habitat naturel. Une aventure qui allie trekking, nature et émerveillement.",
      en: "Dive into the heart of Virunga National Park for a once-in-a-lifetime experience: observing mountain gorillas in their natural habitat. An adventure combining trekking, nature and wonder.",
    },
    duration: { fr: "5-7 jours", en: "5-7 days" },
    groupSize: { fr: "2–8 personnes", en: "2–8 people" },
    difficulty: { fr: "Modéré à difficile", en: "Moderate to difficult" },
    price: { fr: "À partir de $2 500 / personne", en: "From $2,500 / person" },
    included: [
      { fr: "Accueil et transferts aéroport", en: "Airport pickup and transfers" },
      { fr: "Hébergement 3–4 étoiles", en: "3–4 star accommodation" },
      { fr: "Permis de trekking gorilles", en: "Gorilla trekking permits" },
      { fr: "Guide expert anglophone/francophone", en: "Expert English/French guide" },
      { fr: "Repas inclus (petit-déj + dîner)", en: "Meals included (breakfast + dinner)" },
      { fr: "Transport en véhicule 4x4", en: "4x4 vehicle transport" },
      { fr: "Ranger accompagnateur", en: "Accompanying ranger" },
      { fr: "Assurance voyage basique", en: "Basic travel insurance" },
    ],
    notIncluded: [
      { fr: "Vols internationaux", en: "International flights" },
      { fr: "Visa RDC", en: "DRC visa" },
      { fr: "Pourboires guides et rangers", en: "Tips for guides and rangers" },
      { fr: "Dépenses personnelles", en: "Personal expenses" },
    ],
    itinerary: [
      {
        day: 1,
        title: { fr: "Arrivée à Goma", en: "Arrival in Goma" },
        description: {
          fr: "Accueil à l'aéroport de Goma, transfert à l'hôtel. Briefing sur le programme et repos.",
          en: "Welcome at Goma airport, transfer to hotel. Program briefing and rest.",
        },
        activities: [
          { fr: "Accueil aéroport", en: "Airport welcome" },
          { fr: "Check-in hôtel", en: "Hotel check-in" },
          { fr: "Briefing safari", en: "Safari briefing" },
        ],
      },
      {
        day: 2,
        title: { fr: "Route vers le Virunga", en: "Road to Virunga" },
        description: {
          fr: "Départ tôt vers le Parc des Virunga. Enregistrement au poste des rangers et présentation de l'équipe.",
          en: "Early departure to Virunga National Park. Registration at ranger post and team introduction.",
        },
        activities: [
          { fr: "Transfert vers le parc", en: "Transfer to the park" },
          { fr: "Enregistrement rangers", en: "Ranger registration" },
          { fr: "Orientation en forêt", en: "Forest orientation" },
        ],
      },
      {
        day: 3,
        title: { fr: "Trekking Gorilles", en: "Gorilla Trekking" },
        description: {
          fr: "Le jour J ! Trekking dans la forêt du Virunga à la rencontre d'une famille de gorilles. Une heure d'observation inoubliable.",
          en: "The big day! Trekking through Virunga forest to meet a gorilla family. One unforgettable hour of observation.",
        },
        activities: [
          { fr: "Trek en forêt (2–6h)", en: "Forest trek (2–6h)" },
          { fr: "Observation des gorilles (1h)", en: "Gorilla observation (1h)" },
          { fr: "Retour au camp", en: "Return to camp" },
        ],
      },
      {
        day: 4,
        title: { fr: "Nyiragongo (optionnel)", en: "Nyiragongo (optional)" },
        description: {
          fr: "Pour les aventuriers : ascension du volcan Nyiragongo pour observer son lac de lave depuis le sommet.",
          en: "For adventurers: ascent of Nyiragongo volcano to observe its lava lake from the summit.",
        },
        activities: [
          { fr: "Ascension Nyiragongo (6–8h)", en: "Nyiragongo ascent (6–8h)" },
          { fr: "Nuit au sommet (optionnel)", en: "Night at summit (optional)" },
          { fr: "Descente et retour", en: "Descent and return" },
        ],
      },
      {
        day: 5,
        title: { fr: "Lac Kivu et départ", en: "Lake Kivu and departure" },
        description: {
          fr: "Matinée détente au bord du lac Kivu. Déjeuner et transfert à l'aéroport pour le retour.",
          en: "Relaxing morning on the shores of Lake Kivu. Lunch and airport transfer for departure.",
        },
        activities: [
          { fr: "Promenade au lac Kivu", en: "Lake Kivu walk" },
          { fr: "Déjeuner d'adieu", en: "Farewell lunch" },
          { fr: "Transfert aéroport", en: "Airport transfer" },
        ],
      },
    ],
    destinations: ["virunga", "goma"],
    tags: ["Safari", "Gorilles", "Trekking", "Nature", "Aventure"],
  },
  {
    slug: "volcans-nature",
    heroImage: "https://images.unsplash.com/photo-1541795083-ce0e914a9d41?auto=format&fit=crop&w=1920&q=80",
    heroGradient: "from-orange-600 via-red-700 to-rose-900",
    heroIcon: "🌋",
    category: "adventure-nature",
    featured: false,
    name: { fr: "Volcans & Nature", en: "Volcanoes & Nature" },
    tagline: {
      fr: "L'aventure brûlante du Nyiragongo et des paysages du Kivu",
      en: "The burning adventure of Nyiragongo and Kivu landscapes",
    },
    description: {
      fr: "Grimpez le mythique volcan Nyiragongo, explorez les paysages lunaires de lave solidifiée et naviguez sur le magnifique lac Kivu. Un forfait aventure pour les esprits intrépides.",
      en: "Climb the mythical Nyiragongo volcano, explore the lunar landscapes of solidified lava and navigate the magnificent Lake Kivu. An adventure package for intrepid spirits.",
    },
    duration: { fr: "4-6 jours", en: "4-6 days" },
    groupSize: { fr: "2–10 personnes", en: "2–10 people" },
    difficulty: { fr: "Difficile", en: "Difficult" },
    price: { fr: "À partir de $1 800 / personne", en: "From $1,800 / person" },
    included: [
      { fr: "Accueil et transferts", en: "Welcome and transfers" },
      { fr: "Hébergement (hôtel + bivouac sommet)", en: "Accommodation (hotel + summit bivouac)" },
      { fr: "Guide de montagne certifié", en: "Certified mountain guide" },
      { fr: "Matériel de bivouac au sommet", en: "Summit bivouac equipment" },
      { fr: "Repas durant le trek", en: "Meals during trek" },
      { fr: "Excursion en bateau sur le lac Kivu", en: "Lake Kivu boat excursion" },
      { fr: "Transport 4x4", en: "4x4 transport" },
    ],
    notIncluded: [
      { fr: "Vols internationaux", en: "International flights" },
      { fr: "Visa RDC", en: "DRC visa" },
      { fr: "Équipement personnel (sac de couchage recommandé)", en: "Personal equipment (sleeping bag recommended)" },
      { fr: "Assurance aventure", en: "Adventure insurance" },
    ],
    itinerary: [
      {
        day: 1,
        title: { fr: "Arrivée à Goma", en: "Arrival in Goma" },
        description: {
          fr: "Arrivée à Goma, transfert hôtel. Visite de la ville construite sur la lave du Nyiragongo.",
          en: "Arrival in Goma, hotel transfer. Tour of the city built on Nyiragongo lava.",
        },
        activities: [
          { fr: "Accueil aéroport", en: "Airport welcome" },
          { fr: "Tour de ville sur lave", en: "Lava city tour" },
          { fr: "Préparation ascension", en: "Ascent preparation" },
        ],
      },
      {
        day: 2,
        title: { fr: "Ascension du Nyiragongo", en: "Nyiragongo Ascent" },
        description: {
          fr: "Départ à 7h. Trek de 6–8h jusqu'au cratère (3 470m). Nuit au sommet devant le lac de lave en fusion.",
          en: "Departure at 7am. 6–8h trek to the crater (3,470m). Night at the summit overlooking the molten lava lake.",
        },
        activities: [
          { fr: "Trek vers le sommet (6–8h)", en: "Summit trek (6–8h)" },
          { fr: "Nuit au cratère", en: "Night at crater" },
          { fr: "Observation du lac de lave", en: "Lava lake observation" },
        ],
      },
      {
        day: 3,
        title: { fr: "Descente et Lac Kivu", en: "Descent and Lake Kivu" },
        description: {
          fr: "Lever de soleil sur le lac de lave puis descente. Après-midi détente au bord du lac Kivu.",
          en: "Sunrise over the lava lake then descent. Afternoon relaxation on Lake Kivu's shores.",
        },
        activities: [
          { fr: "Lever de soleil sur la lave", en: "Sunrise over lava" },
          { fr: "Descente vers Goma (4h)", en: "Descent to Goma (4h)" },
          { fr: "Baignade au lac Kivu", en: "Swimming at Lake Kivu" },
        ],
      },
      {
        day: 4,
        title: { fr: "Excursion sur le lac", en: "Lake Excursion" },
        description: {
          fr: "Journée entière sur le lac Kivu : visite des îles, pêche traditionnelle, kayak et plages isolées.",
          en: "Full day on Lake Kivu: island visits, traditional fishing, kayaking and secluded beaches.",
        },
        activities: [
          { fr: "Croisière îles du lac", en: "Lake island cruise" },
          { fr: "Kayak et baignade", en: "Kayaking and swimming" },
          { fr: "Pêche traditionnelle", en: "Traditional fishing" },
        ],
      },
    ],
    destinations: ["virunga", "goma"],
    tags: ["Volcans", "Aventure", "Lac", "Trekking", "Nature"],
  },
  {
    slug: "culture-patrimoine",
    heroImage: "/images/destinations/kinshasa.jpeg",
    heroGradient: "from-purple-600 via-violet-700 to-indigo-900",
    heroIcon: "🏛️",
    category: "culture-heritage",
    featured: false,
    name: { fr: "Culture & Patrimoine", en: "Culture & Heritage" },
    tagline: {
      fr: "L'âme du Congo à travers son histoire, son art et ses traditions",
      en: "The soul of Congo through its history, art and traditions",
    },
    description: {
      fr: "Plongez dans la richesse culturelle de Kinshasa et des grandes villes congolaises. Musées, marchés artisanaux, concerts de rumba et rencontres avec les artistes locaux vous attendent.",
      en: "Dive into the cultural richness of Kinshasa and the great Congolese cities. Museums, craft markets, rumba concerts and meetings with local artists await you.",
    },
    duration: { fr: "3-5 jours", en: "3-5 days" },
    groupSize: { fr: "1–12 personnes", en: "1–12 people" },
    difficulty: { fr: "Facile", en: "Easy" },
    price: { fr: "À partir de $1 200 / personne", en: "From $1,200 / person" },
    included: [
      { fr: "Accueil et transferts", en: "Welcome and transfers" },
      { fr: "Hébergement 3–4 étoiles", en: "3–4 star accommodation" },
      { fr: "Guide culturel bilingue", en: "Bilingual cultural guide" },
      { fr: "Entrées musées et sites", en: "Museum and site admissions" },
      { fr: "Concert de rumba congolaise", en: "Congolese rumba concert" },
      { fr: "Tour gastronomique", en: "Gastronomic tour" },
      { fr: "Atelier artisanal", en: "Craft workshop" },
      { fr: "Repas typiques inclus", en: "Typical meals included" },
    ],
    notIncluded: [
      { fr: "Vols internationaux", en: "International flights" },
      { fr: "Visa RDC", en: "DRC visa" },
      { fr: "Achats personnels (art, artisanat)", en: "Personal purchases (art, crafts)" },
      { fr: "Boissons au restaurant", en: "Restaurant drinks" },
    ],
    itinerary: [
      {
        day: 1,
        title: { fr: "Arrivée à Kinshasa", en: "Arrival in Kinshasa" },
        description: {
          fr: "Arrivée à l'aéroport de N'Djili, check-in à l'hôtel. Promenade en soirée au bord du fleuve Congo.",
          en: "Arrival at N'Djili airport, hotel check-in. Evening stroll along the Congo River.",
        },
        activities: [
          { fr: "Accueil aéroport", en: "Airport welcome" },
          { fr: "Promenade au fleuve Congo", en: "Congo River walk" },
          { fr: "Dîner bienvenue", en: "Welcome dinner" },
        ],
      },
      {
        day: 2,
        title: { fr: "Kinshasa Culturelle", en: "Cultural Kinshasa" },
        description: {
          fr: "Journée immersive : Musée National, académie des Beaux-Arts, Académie Nationale de Musique et quartier Kintambo.",
          en: "Immersive day: National Museum, Academy of Fine Arts, National Music Academy and Kintambo district.",
        },
        activities: [
          { fr: "Musée National de Kinshasa", en: "National Museum of Kinshasa" },
          { fr: "Visite Académie des Beaux-Arts", en: "Academy of Fine Arts visit" },
          { fr: "Découverte quartier Kintambo", en: "Kintambo district discovery" },
        ],
      },
      {
        day: 3,
        title: { fr: "Marchés & Artisanat", en: "Markets & Crafts" },
        description: {
          fr: "Matinée au marché artisanal de Kinshasa. Après-midi : atelier de sculpture ou de peinture congolaise.",
          en: "Morning at Kinshasa craft market. Afternoon: Congolese sculpture or painting workshop.",
        },
        activities: [
          { fr: "Marché artisanal", en: "Craft market" },
          { fr: "Atelier artisanat local", en: "Local craft workshop" },
          { fr: "Rencontre artistes", en: "Artist meetings" },
        ],
      },
      {
        day: 4,
        title: { fr: "Nuit de Rumba", en: "Rumba Night" },
        description: {
          fr: "Tour gastronomique dans les restaurants de Kinshasa. En soirée : concert de rumba congolaise dans un club emblématique.",
          en: "Gastronomic tour in Kinshasa restaurants. Evening: Congolese rumba concert in an iconic club.",
        },
        activities: [
          { fr: "Tour gastronomique", en: "Gastronomic tour" },
          { fr: "Concert de rumba congolaise", en: "Congolese rumba concert" },
          { fr: "Dégustation boissons locales", en: "Local drinks tasting" },
        ],
      },
    ],
    destinations: ["kinshasa"],
    tags: ["Culture", "Histoire", "Musique", "Art", "Gastronomie"],
  },
  {
    slug: "voyage-affaires",
    heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1920&q=80",
    heroGradient: "from-slate-700 via-gray-800 to-zinc-900",
    heroIcon: "💼",
    category: "business-travel",
    featured: false,
    name: { fr: "Voyage d'Affaires", en: "Business Travel" },
    tagline: {
      fr: "Solutions professionnelles complètes pour vos déplacements en RDC",
      en: "Complete professional solutions for your business trips to the DRC",
    },
    description: {
      fr: "Tourism DRC propose une gamme complète de services pour les voyageurs d'affaires : accueil VIP, logistique, interprétariat et assistance administrative pour un séjour professionnel optimal.",
      en: "Tourism DRC offers a complete range of services for business travelers: VIP welcome, logistics, interpreting and administrative assistance for an optimal professional stay.",
    },
    duration: { fr: "Sur mesure", en: "Custom" },
    groupSize: { fr: "1 personne et plus", en: "1 person and more" },
    difficulty: { fr: "Facile", en: "Easy" },
    price: { fr: "Sur devis", en: "On request" },
    included: [
      { fr: "Accueil VIP à l'aéroport", en: "VIP airport welcome" },
      { fr: "Chauffeur personnel", en: "Personal driver" },
      { fr: "Interprète bilingue (français/anglais)", en: "Bilingual interpreter (French/English)" },
      { fr: "Assistance visa et formalités", en: "Visa and administrative assistance" },
      { fr: "Hébergement hôtel de standing", en: "Upscale hotel accommodation" },
      { fr: "Organisation de réunions", en: "Meeting organization" },
      { fr: "Carte SIM locale", en: "Local SIM card" },
      { fr: "Assistance 24h/24", en: "24/7 assistance" },
    ],
    notIncluded: [
      { fr: "Vols internationaux", en: "International flights" },
      { fr: "Dépenses professionnelles (repas d'affaires, etc.)", en: "Professional expenses (business meals, etc.)" },
      { fr: "Services juridiques", en: "Legal services" },
    ],
    itinerary: [
      {
        day: 1,
        title: { fr: "Arrivée et Installation", en: "Arrival and Setup" },
        description: {
          fr: "Accueil VIP à l'aéroport, transfert en véhicule premium, check-in hôtel et briefing logistique complet.",
          en: "VIP airport welcome, premium vehicle transfer, hotel check-in and full logistics briefing.",
        },
        activities: [
          { fr: "Accueil VIP aéroport", en: "VIP airport welcome" },
          { fr: "Transfert véhicule premium", en: "Premium vehicle transfer" },
          { fr: "Briefing logistique", en: "Logistics briefing" },
        ],
      },
      {
        day: 2,
        title: { fr: "Activités Professionnelles", en: "Professional Activities" },
        description: {
          fr: "Accompagnement lors de vos réunions, visites d'entreprises et démarches administratives avec interprète si nécessaire.",
          en: "Accompaniment during meetings, company visits and administrative processes with interpreter if needed.",
        },
        activities: [
          { fr: "Accompagnement réunions", en: "Meeting accompaniment" },
          { fr: "Interprétariat si besoin", en: "Interpreting if needed" },
          { fr: "Assistance démarches", en: "Process assistance" },
        ],
      },
    ],
    destinations: ["kinshasa", "lubumbashi"],
    tags: ["Business", "VIP", "Logistique", "Professionnel", "Interprétariat"],
  },
];

export function getPackageBySlug(slug: string): PackageData | undefined {
  return packages.find((p) => p.slug === slug);
}
