export interface DestinationHighlight {
  icon: string;
  title: { fr: string; en: string };
  description: { fr: string; en: string };
}

export interface DestinationData {
  slug: string;
  heroImage: string;
  heroGradient: string;
  heroIcon: string;
  name: { fr: string; en: string };
  tagline: { fr: string; en: string };
  description: { fr: string; en: string };
  longDescription: { fr: string; en: string };
  stats: {
    label: { fr: string; en: string };
    value: string;
  }[];
  highlights: DestinationHighlight[];
  activities: { fr: string; en: string }[];
  practicalInfo: {
    bestTime: { fr: string; en: string };
    climate: { fr: string; en: string };
    howToGetThere: { fr: string; en: string };
    accommodation: { fr: string; en: string };
  };
  tags: string[];
}

export const destinations: DestinationData[] = [
  {
    slug: "kinshasa",
    heroImage: "/images/destinations/kinshasa.jpeg",
    heroGradient: "from-orange-600 via-red-700 to-rose-900",
    heroIcon: "🏙️",
    name: { fr: "Kinshasa", en: "Kinshasa" },
    tagline: {
      fr: "La capitale vibrante au bord du Congo",
      en: "The vibrant capital on the banks of the Congo",
    },
    description: {
      fr: "Kinshasa, mégalopole de plus de 15 millions d'habitants, est l'une des villes les plus dynamiques d'Afrique. Musique, art, gastronomie et histoire s'y mêlent dans un tourbillon d'énergie unique.",
      en: "Kinshasa, a megacity of over 15 million people, is one of Africa's most dynamic cities. Music, art, gastronomy and history combine in a unique whirlwind of energy.",
    },
    longDescription: {
      fr: "Fondée en 1881 par l'explorateur Henry Morton Stanley, Kinshasa — anciennement Léopoldville — est aujourd'hui la plus grande ville francophone du monde. Sur les rives du fleuve Congo, face à Brazzaville, la ville offre une expérience culturelle incomparable : ses marchés colorés, ses musées riches, sa scène musicale mondiale (rumba congolaise, ndombolo) et sa gastronomie distinctive font de chaque visite un souvenir inoubliable.",
      en: "Founded in 1881 by explorer Henry Morton Stanley, Kinshasa — formerly Léopoldville — is today the largest French-speaking city in the world. On the banks of the Congo River, facing Brazzaville, the city offers an unparalleled cultural experience: its colorful markets, rich museums, world music scene (Congolese rumba, ndombolo) and distinctive cuisine make every visit an unforgettable memory.",
    },
    stats: [
      { label: { fr: "Habitants", en: "Inhabitants" }, value: "15M+" },
      { label: { fr: "Altitude", en: "Altitude" }, value: "315 m" },
      { label: { fr: "Fondée", en: "Founded" }, value: "1881" },
      { label: { fr: "Langue", en: "Language" }, value: "Français / Lingala" },
    ],
    highlights: [
      {
        icon: "🎵",
        title: { fr: "Musique Congolaise", en: "Congolese Music" },
        description: {
          fr: "Berceau de la rumba congolaise, classée au patrimoine de l'UNESCO. Vivez les nuits animées de Kinshasa dans ses nombreux bars et clubs.",
          en: "Birthplace of Congolese rumba, listed on UNESCO's heritage. Experience Kinshasa's vibrant nightlife in its many bars and clubs.",
        },
      },
      {
        icon: "🏛️",
        title: { fr: "Musée National", en: "National Museum" },
        description: {
          fr: "Le Musée National de la RDC abrite une collection impressionnante d'art et d'objets historiques témoignant de la richesse culturelle du pays.",
          en: "The National Museum of the DRC houses an impressive collection of art and historical objects reflecting the country's cultural richness.",
        },
      },
      {
        icon: "🌊",
        title: { fr: "Fleuve Congo", en: "Congo River" },
        description: {
          fr: "Promenez-vous sur les berges du deuxième fleuve le plus puissant du monde et profitez d'une vue imprenable sur Brazzaville.",
          en: "Stroll along the banks of the world's second most powerful river and enjoy stunning views of Brazzaville.",
        },
      },
      {
        icon: "🛒",
        title: { fr: "Marchés Colorés", en: "Colorful Markets" },
        description: {
          fr: "Le marché de Kinshasa-Gombe, de Gambela et de Zando sont des incontournables pour découvrir l'artisanat, les épices et la vie locale.",
          en: "The Kinshasa-Gombe, Gambela and Zando markets are must-visits to discover crafts, spices and local life.",
        },
      },
    ],
    activities: [
      { fr: "Visite du Musée National", en: "Visit the National Museum" },
      { fr: "Croisière sur le fleuve Congo", en: "Congo River cruise" },
      { fr: "Concert de musique congolaise", en: "Congolese music concert" },
      { fr: "Tour gastronomique", en: "Gastronomic tour" },
      { fr: "Visite du marché de Zando", en: "Zando market visit" },
      { fr: "Excursion à la Cité des Enfants", en: "Children's City excursion" },
    ],
    practicalInfo: {
      bestTime: {
        fr: "Juin à Septembre (saison sèche)",
        en: "June to September (dry season)",
      },
      climate: {
        fr: "Tropical humide, 25–32°C toute l'année",
        en: "Humid tropical, 25–32°C year-round",
      },
      howToGetThere: {
        fr: "Aéroport International de N'Djili (FIH), vols directs depuis Paris, Bruxelles, Addis-Abeba",
        en: "N'Djili International Airport (FIH), direct flights from Paris, Brussels, Addis Ababa",
      },
      accommodation: {
        fr: "Large choix d'hôtels 3 à 5 étoiles, lodges et guesthouses",
        en: "Wide choice of 3 to 5-star hotels, lodges and guesthouses",
      },
    },
    tags: ["Ville", "Culture", "Gastronomie", "Musique", "Histoire"],
  },
  {
    slug: "virunga",
    heroImage: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1920&q=80",
    heroGradient: "from-green-700 via-emerald-800 to-teal-900",
    heroIcon: "🦍",
    name: { fr: "Parc des Virunga", en: "Virunga National Park" },
    tagline: {
      fr: "Le plus ancien parc d'Afrique, sanctuaire des gorilles",
      en: "Africa's oldest park, sanctuary of the gorillas",
    },
    description: {
      fr: "Classé au patrimoine mondial de l'UNESCO, le Parc des Virunga est un joyau naturel abritant les derniers gorilles de montagne du monde, des volcans actifs et des paysages à couper le souffle.",
      en: "Listed as a UNESCO World Heritage Site, Virunga National Park is a natural jewel home to the world's last mountain gorillas, active volcanoes and breathtaking landscapes.",
    },
    longDescription: {
      fr: "Fondé en 1925, le Parc des Virunga est le plus ancien parc national d'Afrique et l'un des plus riches en biodiversité au monde. S'étendant sur 7 800 km² dans l'est de la RDC, il abrite plus de 700 espèces d'oiseaux, des forêts tropicales denses, des savanes, des glaciers et les volcans Nyiragongo et Nyamuragira. Le trekking pour observer les gorilles de montagne dans leur habitat naturel reste l'expérience phare de tout séjour au Virunga.",
      en: "Founded in 1925, Virunga National Park is Africa's oldest national park and one of the world's richest in biodiversity. Spanning 7,800 km² in eastern DRC, it is home to over 700 bird species, dense tropical forests, savannas, glaciers and the Nyiragongo and Nyamuragira volcanoes. Trekking to observe mountain gorillas in their natural habitat remains the highlight of any Virunga stay.",
    },
    stats: [
      { label: { fr: "Superficie", en: "Area" }, value: "7 800 km²" },
      { label: { fr: "Gorilles", en: "Gorillas" }, value: "480+" },
      { label: { fr: "Espèces d'oiseaux", en: "Bird species" }, value: "700+" },
      { label: { fr: "Fondé", en: "Founded" }, value: "1925" },
    ],
    highlights: [
      {
        icon: "🦍",
        title: { fr: "Safari Gorilles", en: "Gorilla Safari" },
        description: {
          fr: "Une expérience unique au monde : observer les gorilles de montagne dans leur habitat naturel sous la conduite de rangers expérimentés.",
          en: "A once-in-a-lifetime experience: observing mountain gorillas in their natural habitat guided by experienced rangers.",
        },
      },
      {
        icon: "🌋",
        title: { fr: "Nyiragongo", en: "Nyiragongo" },
        description: {
          fr: "Ascension du mythique volcan Nyiragongo pour contempler le plus grand lac de lave du monde depuis son sommet à 3 470 m.",
          en: "Climb the mythical Nyiragongo volcano to behold the world's largest lava lake from its 3,470m summit.",
        },
      },
      {
        icon: "🐘",
        title: { fr: "Faune Exceptionnelle", en: "Exceptional Wildlife" },
        description: {
          fr: "Éléphants, hippopotames, okapis, lions et des centaines d'espèces d'oiseaux peuplent ce sanctuaire naturel unique.",
          en: "Elephants, hippos, okapis, lions and hundreds of bird species inhabit this unique natural sanctuary.",
        },
      },
      {
        icon: "🏔️",
        title: { fr: "Paysages Spectaculaires", en: "Spectacular Landscapes" },
        description: {
          fr: "Des volcans enneigés aux plaines de savane, en passant par les forêts tropicales, chaque paysage du Virunga est une œuvre d'art naturelle.",
          en: "From snow-capped volcanoes to savanna plains and tropical forests, every Virunga landscape is a natural work of art.",
        },
      },
    ],
    activities: [
      { fr: "Trekking gorilles", en: "Gorilla trekking" },
      { fr: "Ascension du Nyiragongo", en: "Nyiragongo ascent" },
      { fr: "Safari en jeep", en: "Jeep safari" },
      { fr: "Observation des oiseaux", en: "Bird watching" },
      { fr: "Visite des sources chaudes", en: "Hot springs visit" },
      { fr: "Randonnée en forêt", en: "Forest hiking" },
    ],
    practicalInfo: {
      bestTime: {
        fr: "Juin à Septembre et Décembre à Février (saisons sèches)",
        en: "June to September and December to February (dry seasons)",
      },
      climate: {
        fr: "Montagnard frais, 15–22°C, plus frais la nuit",
        en: "Cool mountain climate, 15–22°C, cooler at night",
      },
      howToGetThere: {
        fr: "Vol jusqu'à Goma (GOM), puis transfert en véhicule vers le parc (1h)",
        en: "Fly to Goma (GOM), then vehicle transfer to the park (1h)",
      },
      accommodation: {
        fr: "Lodges dans et autour du parc, camping sur place",
        en: "Lodges in and around the park, on-site camping",
      },
    },
    tags: ["Nature", "Safari", "Gorilles", "Volcans", "UNESCO"],
  },
  {
    slug: "goma",
    heroImage: "https://images.unsplash.com/photo-1541795083-ce0e914a9d41?auto=format&fit=crop&w=1920&q=80",
    heroGradient: "from-slate-700 via-gray-800 to-zinc-900",
    heroIcon: "🌋",
    name: { fr: "Goma", en: "Goma" },
    tagline: {
      fr: "La porte des volcans au bord du lac Kivu",
      en: "The gateway to volcanoes on the shores of Lake Kivu",
    },
    description: {
      fr: "Goma, ville frontière avec le Rwanda, est le point de départ idéal pour explorer le Parc des Virunga. Bâtie sur des coulées de lave solidifiée, elle offre un caractère unique entre lac azuré et volcans majestueux.",
      en: "Goma, the border city with Rwanda, is the ideal starting point for exploring Virunga National Park. Built on solidified lava flows, it offers a unique character between an azure lake and majestic volcanoes.",
    },
    longDescription: {
      fr: "Goma est une ville au caractère singulier : construite en partie sur des coulées de lave issues du Nyiragongo, elle présente des rues pavées de basalte noir qui lui confèrent une atmosphère unique en Afrique. Porte d'entrée vers le Parc des Virunga et les gorilles de montagne, elle est aussi le point de départ pour les aventures sur le lac Kivu, dont les îles et les plages sont de véritables joyaux. La ville possède un marché artisanal riche et une scène culturelle en plein essor.",
      en: "Goma is a city with a singular character: built partly on lava flows from Nyiragongo, it has streets paved with black basalt that give it a unique atmosphere in Africa. Gateway to Virunga National Park and mountain gorillas, it is also the starting point for adventures on Lake Kivu, whose islands and beaches are true gems. The city has a rich artisan market and a burgeoning cultural scene.",
    },
    stats: [
      { label: { fr: "Habitants", en: "Inhabitants" }, value: "670K+" },
      { label: { fr: "Altitude", en: "Altitude" }, value: "1 490 m" },
      { label: { fr: "Lac Kivu", en: "Lake Kivu" }, value: "2 700 km²" },
      { label: { fr: "Virunga", en: "Virunga" }, value: "45 min" },
    ],
    highlights: [
      {
        icon: "🏖️",
        title: { fr: "Lac Kivu", en: "Lake Kivu" },
        description: {
          fr: "L'un des plus beaux lacs d'Afrique, aux eaux bleu-vert cristallines bordées de collines verdoyantes. Baignade, kayak et excursions en bateau au programme.",
          en: "One of Africa's most beautiful lakes, with crystal-clear blue-green waters bordered by lush hills. Swimming, kayaking and boat trips on the agenda.",
        },
      },
      {
        icon: "🌋",
        title: { fr: "Lave du Nyiragongo", en: "Nyiragongo Lava" },
        description: {
          fr: "Les rues de lave noire solidifiée témoignent des éruptions passées et créent un décor spectaculaire, mélange de nature brute et vie urbaine.",
          en: "The streets of solidified black lava bear witness to past eruptions and create a spectacular backdrop, blending raw nature with urban life.",
        },
      },
      {
        icon: "🛍️",
        title: { fr: "Artisanat Local", en: "Local Crafts" },
        description: {
          fr: "Le marché artisanal de Goma regorge de sculptures en bois, bijoux traditionnels et tissu wax congolais.",
          en: "Goma's craft market is full of wood sculptures, traditional jewelry and Congolese wax fabric.",
        },
      },
      {
        icon: "🏔️",
        title: { fr: "Vue sur les Volcans", en: "Volcano Views" },
        description: {
          fr: "Par temps clair, la vue sur le Nyiragongo et le Nyamuragira est saisissante depuis les hauteurs de Goma.",
          en: "On clear days, the view of Nyiragongo and Nyamuragira from Goma's heights is breathtaking.",
        },
      },
    ],
    activities: [
      { fr: "Excursion en bateau sur le lac Kivu", en: "Boat trip on Lake Kivu" },
      { fr: "Visite des îles du lac Kivu", en: "Lake Kivu island visit" },
      { fr: "Départ trekking gorilles", en: "Gorilla trekking departure" },
      { fr: "Visite du marché artisanal", en: "Craft market visit" },
      { fr: "Baignade dans le lac", en: "Swimming in the lake" },
      { fr: "Tour de la ville sur lave", en: "City tour on lava" },
    ],
    practicalInfo: {
      bestTime: {
        fr: "Juin à Septembre (saison sèche, meilleure visibilité)",
        en: "June to September (dry season, best visibility)",
      },
      climate: {
        fr: "Tempéré d'altitude, 18–25°C, agréable toute l'année",
        en: "High-altitude temperate, 18–25°C, pleasant year-round",
      },
      howToGetThere: {
        fr: "Aéroport de Goma (GOM), vols depuis Kinshasa, Nairobi, Kigali",
        en: "Goma Airport (GOM), flights from Kinshasa, Nairobi, Kigali",
      },
      accommodation: {
        fr: "Hôtels 3–4 étoiles, guesthouses, lodges avec vue sur le lac",
        en: "3–4 star hotels, guesthouses, lodges with lake views",
      },
    },
    tags: ["Ville", "Lac", "Volcans", "Nature", "Aventure"],
  },
  {
    slug: "kisangani",
    heroImage: "/images/destinations/forest.jpeg",
    heroGradient: "from-green-600 via-teal-700 to-emerald-900",
    heroIcon: "🌿",
    name: { fr: "Kisangani", en: "Kisangani" },
    tagline: {
      fr: "Perle de l'Orientale au cœur de la forêt équatoriale",
      en: "Pearl of the East at the heart of the equatorial forest",
    },
    description: {
      fr: "Kisangani, ancienne Stanleyville, est une ville mystérieuse nichée au cœur de la plus grande forêt tropicale du monde. Les chutes de Boyoma et le fleuve Congo en font une destination d'aventure et de découverte.",
      en: "Kisangani, formerly Stanleyville, is a mysterious city nestled in the heart of the world's largest tropical forest. The Boyoma Falls and the Congo River make it a destination for adventure and discovery.",
    },
    longDescription: {
      fr: "Située à l'équateur même, Kisangani est entourée de la forêt tropicale congolaise, l'une des plus vastes et des plus riches en biodiversité au monde. La ville est traversée par le puissant fleuve Congo et est connue pour les spectaculaires chutes de Boyoma (anciennement chutes Stanley), les plus grandes chutes d'eau par débit au monde. C'est une ville chargée d'histoire, carrefour de cultures et point de départ pour les explorateurs de la forêt équatoriale.",
      en: "Located right on the equator, Kisangani is surrounded by the Congolese tropical forest, one of the world's largest and most biodiverse. The city is crossed by the mighty Congo River and is known for the spectacular Boyoma Falls (formerly Stanley Falls), the world's largest waterfalls by flow rate. It is a city steeped in history, a cultural crossroads and a starting point for equatorial forest explorers.",
    },
    stats: [
      { label: { fr: "Habitants", en: "Inhabitants" }, value: "1.2M+" },
      { label: { fr: "Altitude", en: "Altitude" }, value: "415 m" },
      { label: { fr: "Latitude", en: "Latitude" }, value: "0° équateur" },
      { label: { fr: "Chutes", en: "Falls" }, value: "7 cataractes" },
    ],
    highlights: [
      {
        icon: "💧",
        title: { fr: "Chutes de Boyoma", en: "Boyoma Falls" },
        description: {
          fr: "Les 7 cataractes de Boyoma forment les chutes d'eau les plus puissantes du monde par débit. Un spectacle naturel époustouflant.",
          en: "The 7 cataracts of Boyoma form the world's most powerful waterfalls by flow rate. A breathtaking natural spectacle.",
        },
      },
      {
        icon: "🌳",
        title: { fr: "Forêt Équatoriale", en: "Equatorial Forest" },
        description: {
          fr: "Excursions dans la forêt vierge pour observer une biodiversité exceptionnelle : bonobos, okapis, centaines d'espèces d'oiseaux.",
          en: "Excursions into the virgin forest to observe exceptional biodiversity: bonobos, okapis, hundreds of bird species.",
        },
      },
      {
        icon: "🚢",
        title: { fr: "Navigation sur le Congo", en: "Congo River Navigation" },
        description: {
          fr: "Embarquez sur le fleuve Congo pour une expérience hors du commun, au rythme lent d'un bateau traversant la jungle.",
          en: "Board the Congo River for an extraordinary experience, at the slow pace of a boat crossing the jungle.",
        },
      },
      {
        icon: "🦜",
        title: { fr: "Biodiversité Unique", en: "Unique Biodiversity" },
        description: {
          fr: "La région de Kisangani abrite une faune et une flore parmi les plus diversifiées d'Afrique, dont de nombreuses espèces endémiques.",
          en: "The Kisangani region is home to some of Africa's most diverse fauna and flora, including many endemic species.",
        },
      },
    ],
    activities: [
      { fr: "Visite des chutes de Boyoma", en: "Boyoma Falls visit" },
      { fr: "Excursion en forêt équatoriale", en: "Equatorial forest excursion" },
      { fr: "Observation des bonobos", en: "Bonobo watching" },
      { fr: "Croisière sur le Congo", en: "Congo River cruise" },
      { fr: "Pêche traditionnelle", en: "Traditional fishing" },
      { fr: "Visite des villages locaux", en: "Local village visit" },
    ],
    practicalInfo: {
      bestTime: {
        fr: "Juin à Août (saison moins pluvieuse)",
        en: "June to August (less rainy season)",
      },
      climate: {
        fr: "Équatorial, 24–30°C, pluies fréquentes toute l'année",
        en: "Equatorial, 24–30°C, frequent rainfall year-round",
      },
      howToGetThere: {
        fr: "Aéroport de Kisangani (FKI), vols depuis Kinshasa",
        en: "Kisangani Airport (FKI), flights from Kinshasa",
      },
      accommodation: {
        fr: "Hôtels et guesthouses en centre-ville, lodges en forêt",
        en: "City centre hotels and guesthouses, forest lodges",
      },
    },
    tags: ["Forêt", "Nature", "Chutes", "Aventure", "Faune"],
  },
  {
    slug: "lubumbashi",
    heroImage: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1920&q=80",
    heroGradient: "from-amber-600 via-orange-700 to-red-800",
    heroIcon: "⛏️",
    name: { fr: "Lubumbashi", en: "Lubumbashi" },
    tagline: {
      fr: "La capitale du cuivre, carrefour économique du Sud",
      en: "The copper capital, economic crossroads of the South",
    },
    description: {
      fr: "Lubumbashi, deuxième ville du pays, est le cœur économique de la RDC. Cette métropole dynamique au bord de la Zambie offre un mélange fascinant d'histoire coloniale, d'industrie minière et de cultures africaines.",
      en: "Lubumbashi, the country's second city, is the economic heart of the DRC. This dynamic metropolis on the border of Zambia offers a fascinating mix of colonial history, mining industry and African cultures.",
    },
    longDescription: {
      fr: "Fondée en 1910 sous le nom d'Élisabethville, Lubumbashi est le poumon économique de la RDC. Capitale du Haut-Katanga, elle est entourée de mines de cuivre et de cobalt qui alimentent l'économie mondiale. La ville possède une architecture coloniale belge remarquablement préservée, un zoo et un musée régional parmi les plus riches du continent. Sa position frontalière avec la Zambie en fait un carrefour commercial et culturel unique.",
      en: "Founded in 1910 as Élisabethville, Lubumbashi is the economic lung of the DRC. Capital of Haut-Katanga, it is surrounded by copper and cobalt mines that power the global economy. The city has a remarkably well-preserved Belgian colonial architecture, a zoo and a regional museum among the richest on the continent. Its border position with Zambia makes it a unique commercial and cultural crossroads.",
    },
    stats: [
      { label: { fr: "Habitants", en: "Inhabitants" }, value: "2.5M+" },
      { label: { fr: "Altitude", en: "Altitude" }, value: "1 208 m" },
      { label: { fr: "Fondée", en: "Founded" }, value: "1910" },
      { label: { fr: "Cuivre", en: "Copper" }, value: "Top 5 mondial" },
    ],
    highlights: [
      {
        icon: "🏛️",
        title: { fr: "Musée du Katanga", en: "Katanga Museum" },
        description: {
          fr: "L'un des musées les plus riches d'Afrique centrale, avec des collections d'art traditionnel, d'objets historiques et minéraux exceptionnels.",
          en: "One of Central Africa's richest museums, with collections of traditional art, historical objects and exceptional minerals.",
        },
      },
      {
        icon: "🌿",
        title: { fr: "Zoo de Lubumbashi", en: "Lubumbashi Zoo" },
        description: {
          fr: "L'un des plus grands zoos d'Afrique subsaharienne, accueillant de nombreuses espèces animales endémiques du Katanga.",
          en: "One of the largest zoos in sub-Saharan Africa, hosting many animal species endemic to Katanga.",
        },
      },
      {
        icon: "🏗️",
        title: { fr: "Architecture Coloniale", en: "Colonial Architecture" },
        description: {
          fr: "Les bâtiments coloniaux belges du centre-ville témoignent d'une histoire fascinante et d'une architecture unique en Afrique.",
          en: "The Belgian colonial buildings in the city centre bear witness to a fascinating history and architecture unique to Africa.",
        },
      },
      {
        icon: "🛒",
        title: { fr: "Marché Mzee", en: "Mzee Market" },
        description: {
          fr: "Le grand marché de Lubumbashi est un festival de couleurs et de saveurs, mêlant cultures congolaises, zambiennes et autres.",
          en: "Lubumbashi's grand market is a festival of colors and flavors, blending Congolese, Zambian and other cultures.",
        },
      },
    ],
    activities: [
      { fr: "Visite du Musée du Katanga", en: "Katanga Museum visit" },
      { fr: "Tour du Zoo de Lubumbashi", en: "Lubumbashi Zoo tour" },
      { fr: "Visite des mines de cuivre", en: "Copper mine visit" },
      { fr: "Exploration architecturale coloniale", en: "Colonial architecture exploration" },
      { fr: "Excursion aux chutes de Lupopo", en: "Lupopo Falls excursion" },
      { fr: "Shopping au marché Mzee", en: "Shopping at Mzee Market" },
    ],
    practicalInfo: {
      bestTime: {
        fr: "Mai à Octobre (saison sèche, températures agréables)",
        en: "May to October (dry season, pleasant temperatures)",
      },
      climate: {
        fr: "Tropical d'altitude, 20–28°C, hiver frais et sec",
        en: "High-altitude tropical, 20–28°C, cool dry winter",
      },
      howToGetThere: {
        fr: "Aéroport International de Lubumbashi (FBM), vols depuis Kinshasa, Johannesburg",
        en: "Lubumbashi International Airport (FBM), flights from Kinshasa, Johannesburg",
      },
      accommodation: {
        fr: "Hôtels 4–5 étoiles, guesthouses, résidences de standing",
        en: "4–5 star hotels, guesthouses, upscale residences",
      },
    },
    tags: ["Ville", "Histoire", "Industrie", "Culture", "Commerce"],
  },
  {
    slug: "salonga",
    heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1920&q=80",
    heroGradient: "from-emerald-700 via-green-800 to-teal-900",
    heroIcon: "🌴",
    name: { fr: "Parc de la Salonga", en: "Salonga National Park" },
    tagline: {
      fr: "La plus grande forêt tropicale protégée d'Afrique",
      en: "Africa's largest protected tropical forest",
    },
    description: {
      fr: "Le Parc de la Salonga est le plus grand parc tropical d'Afrique, classé au patrimoine mondial de l'UNESCO. Ce sanctuaire immense au cœur du bassin du Congo abrite le bonobo, l'éléphant de forêt et des milliers d'espèces endémiques.",
      en: "Salonga National Park is Africa's largest tropical park, listed as a UNESCO World Heritage Site. This vast sanctuary in the heart of the Congo Basin is home to the bonobo, forest elephant and thousands of endemic species.",
    },
    longDescription: {
      fr: "Couvrant près de 36 000 km², le Parc National de la Salonga est divisé en deux blocs séparés par une zone tampon. C'est l'un des derniers refuges du bonobo, notre cousin primate le plus proche génétiquement. La forêt primaire intacte, les rivières sinueuses et l'absence presque totale de présence humaine font de ce parc l'un des derniers véritables sanctuaires sauvages de la planète.",
      en: "Covering nearly 36,000 km², Salonga National Park is divided into two blocks separated by a buffer zone. It is one of the last refuges of the bonobo, our genetically closest primate cousin. The intact primary forest, winding rivers and near-total absence of human presence make this park one of the last true wild sanctuaries on the planet.",
    },
    stats: [
      { label: { fr: "Superficie", en: "Area" }, value: "36 000 km²" },
      { label: { fr: "Bonobos", en: "Bonobos" }, value: "Milliers" },
      { label: { fr: "UNESCO", en: "UNESCO" }, value: "1984" },
      { label: { fr: "Forêt primaire", en: "Primary forest" }, value: "99%" },
    ],
    highlights: [
      {
        icon: "🐒",
        title: { fr: "Safari Bonobos", en: "Bonobo Safari" },
        description: {
          fr: "Observer les bonobos, espèce endémique de la RDC et proche parent de l'homme, dans leur habitat naturel intact.",
          en: "Observe bonobos, endemic to the DRC and a close relative of humans, in their intact natural habitat.",
        },
      },
      {
        icon: "🌳",
        title: { fr: "Forêt Primaire Intacte", en: "Intact Primary Forest" },
        description: {
          fr: "L'une des dernières grandes forêts tropicales intactes du monde, avec une canopée de plus de 40 mètres de hauteur.",
          en: "One of the last great intact tropical forests in the world, with a canopy over 40 meters high.",
        },
      },
      {
        icon: "🐊",
        title: { fr: "Faune Rarissime", en: "Rare Wildlife" },
        description: {
          fr: "Éléphants de forêt, crocodiles du Congo, paons congolais et de nombreuses espèces endémiques peuplent ce sanctuaire préservé.",
          en: "Forest elephants, Congo crocodiles, Congo peacocks and many endemic species inhabit this preserved sanctuary.",
        },
      },
      {
        icon: "🚤",
        title: { fr: "Navigation Fluviale", en: "River Navigation" },
        description: {
          fr: "Explorer le parc en pirogue sur les rivières Salonga, Yenge et Lomela pour une immersion totale dans la jungle.",
          en: "Explore the park by dugout canoe on the Salonga, Yenge and Lomela rivers for total jungle immersion.",
        },
      },
    ],
    activities: [
      { fr: "Observation des bonobos", en: "Bonobo observation" },
      { fr: "Randonnée en forêt primaire", en: "Primary forest hiking" },
      { fr: "Navigation en pirogue", en: "Dugout canoe trip" },
      { fr: "Observation des éléphants", en: "Elephant watching" },
      { fr: "Ornithologie (700+ espèces)", en: "Birdwatching (700+ species)" },
      { fr: "Camping en forêt", en: "Forest camping" },
    ],
    practicalInfo: {
      bestTime: {
        fr: "Juillet à Septembre (saison sèche, accès facilité)",
        en: "July to September (dry season, easier access)",
      },
      climate: {
        fr: "Équatorial, 24–30°C, humide toute l'année",
        en: "Equatorial, 24–30°C, humid year-round",
      },
      howToGetThere: {
        fr: "Vol jusqu'à Kinshasa, puis avion charter ou bateau vers le parc (accès limité)",
        en: "Fly to Kinshasa, then charter plane or boat to the park (limited access)",
      },
      accommodation: {
        fr: "Lodges éco-touristiques, camping encadré par des rangers",
        en: "Eco-tourism lodges, camping supervised by rangers",
      },
    },
    tags: ["Forêt", "Bonobos", "UNESCO", "Nature sauvage", "Éco-tourisme"],
  },
  {
    slug: "kahuzi",
    heroImage: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=1920&q=80",
    heroGradient: "from-teal-700 via-cyan-800 to-blue-900",
    heroIcon: "🦍",
    name: { fr: "Parc de Kahuzi-Biéga", en: "Kahuzi-Biéga National Park" },
    tagline: {
      fr: "Royaume des gorilles des plaines orientales",
      en: "Kingdom of the eastern lowland gorillas",
    },
    description: {
      fr: "Le Parc National de Kahuzi-Biéga, site du patrimoine mondial UNESCO, est le dernier refuge des gorilles des plaines orientales. Entre volcans éteints et forêts denses du Sud-Kivu, il offre une expérience wildlife unique.",
      en: "Kahuzi-Biéga National Park, a UNESCO World Heritage Site, is the last refuge of the eastern lowland gorilla. Between extinct volcanoes and dense forests of South Kivu, it offers a unique wildlife experience.",
    },
    longDescription: {
      fr: "Situé à l'ouest de Bukavu dans la région du Sud-Kivu, le Parc de Kahuzi-Biéga s'étend sur 6 000 km² entre forêts de montagne et forêts de basse altitude. Il tire son nom des deux volcans éteints Kahuzi (3 308 m) et Biéga (2 790 m). Ce parc abrite la plus grande population connue de gorilles des plaines orientales (Gorilla beringei graueri), plus grande et moins connue que le gorille de montagne, mais tout aussi fascinante.",
      en: "Located west of Bukavu in South Kivu, Kahuzi-Biéga Park spans 6,000 km² between mountain forests and lowland forests. It takes its name from the two extinct volcanoes Kahuzi (3,308 m) and Biéga (2,790 m). This park is home to the largest known population of eastern lowland gorillas (Gorilla beringei graueri), larger and less known than the mountain gorilla, but just as fascinating.",
    },
    stats: [
      { label: { fr: "Superficie", en: "Area" }, value: "6 000 km²" },
      { label: { fr: "Gorilles", en: "Gorillas" }, value: "250+" },
      { label: { fr: "UNESCO", en: "UNESCO" }, value: "1980" },
      { label: { fr: "Point culminant", en: "Highest peak" }, value: "3 308 m" },
    ],
    highlights: [
      {
        icon: "🦍",
        title: { fr: "Gorilles des Plaines", en: "Lowland Gorillas" },
        description: {
          fr: "Rencontrez les gorilles des plaines orientales, plus grands primates du monde, dans leur habitat naturel.",
          en: "Meet eastern lowland gorillas, the world's largest primates, in their natural habitat.",
        },
      },
      {
        icon: "🏔️",
        title: { fr: "Volcans Kahuzi et Biéga", en: "Kahuzi and Biéga Volcanoes" },
        description: {
          fr: "Ascension des volcans éteints Kahuzi et Biéga pour des panoramas spectaculaires sur les forêts et les lacs du Kivu.",
          en: "Climb the extinct Kahuzi and Biéga volcanoes for spectacular panoramas over the Kivu forests and lakes.",
        },
      },
      {
        icon: "🌿",
        title: { fr: "Forêts de Montagne", en: "Mountain Forests" },
        description: {
          fr: "Des forêts à bambous, des forêts de montagne et des zones marécageuses créent une diversité d'habitats exceptionnelle.",
          en: "Bamboo forests, mountain forests and marshy areas create an exceptional diversity of habitats.",
        },
      },
      {
        icon: "🐦",
        title: { fr: "Ornithologie", en: "Birdwatching" },
        description: {
          fr: "Plus de 349 espèces d'oiseaux recensées, dont plusieurs endémiques du Rift Albertin.",
          en: "Over 349 bird species recorded, including several endemic to the Albertine Rift.",
        },
      },
    ],
    activities: [
      { fr: "Trekking gorilles des plaines", en: "Lowland gorilla trekking" },
      { fr: "Ascension du mont Kahuzi", en: "Mount Kahuzi ascent" },
      { fr: "Randonnée en forêt de montagne", en: "Mountain forest hiking" },
      { fr: "Observation des oiseaux", en: "Birdwatching" },
      { fr: "Visite des villages pygmées Batwa", en: "Batwa Pygmy village visit" },
      { fr: "Safari photo", en: "Photo safari" },
    ],
    practicalInfo: {
      bestTime: {
        fr: "Juin à Septembre (saison sèche, meilleure accessibilité)",
        en: "June to September (dry season, best accessibility)",
      },
      climate: {
        fr: "Tropical d'altitude, 15–25°C selon l'altitude",
        en: "High-altitude tropical, 15–25°C depending on altitude",
      },
      howToGetThere: {
        fr: "Vol jusqu'à Bukavu (BKY), puis transfert vers le parc (30 min)",
        en: "Fly to Bukavu (BKY), then transfer to the park (30 min)",
      },
      accommodation: {
        fr: "Lodges à l'entrée du parc, hôtels à Bukavu",
        en: "Lodges at the park entrance, hotels in Bukavu",
      },
    },
    tags: ["Gorilles", "Volcans", "UNESCO", "Forêt", "Trekking"],
  },
  {
    slug: "boyoma",
    heroImage: "https://images.unsplash.com/photo-1536431311719-398b6704d4cc?auto=format&fit=crop&w=1920&q=80",
    heroGradient: "from-blue-600 via-indigo-700 to-violet-900",
    heroIcon: "💧",
    name: { fr: "Chutes de Boyoma", en: "Boyoma Falls" },
    tagline: {
      fr: "Les chutes d'eau les plus puissantes du monde",
      en: "The world's most powerful waterfalls",
    },
    description: {
      fr: "Les chutes de Boyoma (anciennes chutes Stanley) forment un ensemble de 7 cataractes sur le fleuve Congo près de Kisangani. Avec un débit de 17 000 m³/s, elles sont les plus puissantes au monde en volume d'eau.",
      en: "Boyoma Falls (formerly Stanley Falls) form a series of 7 cataracts on the Congo River near Kisangani. With a flow of 17,000 m³/s, they are the world's most powerful waterfalls by water volume.",
    },
    longDescription: {
      fr: "Étalées sur près de 100 km le long du fleuve Congo, les chutes de Boyoma sont une série de 7 cataractes qui forment ensemble le plus grand débit d'eau au monde — deux fois celui des chutes du Niagara. Nommées d'après l'explorateur Henry Morton Stanley qui les traversa en 1877, elles furent rebaptisées Boyoma en 1966. Ce site spectaculaire est entouré de jungle dense et peuplé d'une faune aquatique et terrestre exceptionnelle.",
      en: "Stretching over nearly 100 km along the Congo River, Boyoma Falls are a series of 7 cataracts that together form the world's highest water flow — twice that of Niagara Falls. Named after explorer Henry Morton Stanley who crossed them in 1877, they were renamed Boyoma in 1966. This spectacular site is surrounded by dense jungle and populated with exceptional aquatic and terrestrial wildlife.",
    },
    stats: [
      { label: { fr: "Cataractes", en: "Cataracts" }, value: "7" },
      { label: { fr: "Débit", en: "Flow rate" }, value: "17 000 m³/s" },
      { label: { fr: "Longueur", en: "Length" }, value: "~100 km" },
      { label: { fr: "Rang mondial", en: "World ranking" }, value: "#1 débit" },
    ],
    highlights: [
      {
        icon: "💧",
        title: { fr: "7 Cataractes", en: "7 Cataracts" },
        description: {
          fr: "Chaque cataracte est unique et offre un panorama différent sur la puissance brute du fleuve Congo en action.",
          en: "Each cataract is unique and offers a different panorama of the Congo River's raw power in action.",
        },
      },
      {
        icon: "🐟",
        title: { fr: "Pêche Traditionnelle", en: "Traditional Fishing" },
        description: {
          fr: "Observer la pêche traditionnelle avec des nasses en vannerie est l'un des spectacles les plus authentiques de la région.",
          en: "Watching traditional fishing with wicker fish traps is one of the most authentic sights in the region.",
        },
      },
      {
        icon: "🌿",
        title: { fr: "Jungle Environnante", en: "Surrounding Jungle" },
        description: {
          fr: "Les forêts denses qui encadrent les chutes abritent une faune riche : singes, oiseaux tropicaux, reptiles et insectes fascinants.",
          en: "The dense forests flanking the falls are home to rich wildlife: monkeys, tropical birds, reptiles and fascinating insects.",
        },
      },
      {
        icon: "📸",
        title: { fr: "Photographie Spectaculaire", en: "Spectacular Photography" },
        description: {
          fr: "Un paradis pour la photographie de nature et de paysage, avec des lumières matinales particulièrement magiques.",
          en: "A paradise for nature and landscape photography, with particularly magical morning light.",
        },
      },
    ],
    activities: [
      { fr: "Visite des 7 cataractes", en: "Visit all 7 cataracts" },
      { fr: "Observation de la pêche traditionnelle", en: "Traditional fishing observation" },
      { fr: "Randonnée en forêt riveraine", en: "Riverside forest hiking" },
      { fr: "Photographie de nature", en: "Nature photography" },
      { fr: "Observation des oiseaux tropicaux", en: "Tropical bird watching" },
      { fr: "Baignade dans les bassins calmes", en: "Swimming in calm pools" },
    ],
    practicalInfo: {
      bestTime: {
        fr: "Juin à Août (saison sèche, niveaux d'eau optimaux)",
        en: "June to August (dry season, optimal water levels)",
      },
      climate: {
        fr: "Équatorial, 24–30°C, humide avec pluies régulières",
        en: "Equatorial, 24–30°C, humid with regular rainfall",
      },
      howToGetThere: {
        fr: "Via Kisangani (FKI), puis 30 min en véhicule jusqu'aux chutes",
        en: "Via Kisangani (FKI), then 30 min by vehicle to the falls",
      },
      accommodation: {
        fr: "Guesthouses et hôtels à Kisangani, camping possible",
        en: "Guesthouses and hotels in Kisangani, camping possible",
      },
    },
    tags: ["Chutes", "Nature", "Fleuve", "Aventure", "Photographie"],
  },
];

export function getDestinationBySlug(slug: string): DestinationData | undefined {
  return destinations.find((d) => d.slug === slug);
}
