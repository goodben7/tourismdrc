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
  tags: { fr: string; en: string }[];
  gallery?: string[];
}

export const destinations: DestinationData[] = [
  {
    slug: "kinshasa",
    heroImage: "/images/destinations/11.jpg",
    heroGradient: "from-orange-600 via-red-700 to-rose-900",
    heroIcon: "Building2",
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
        icon: "Music",
        title: { fr: "Musique Congolaise", en: "Congolese Music" },
        description: {
          fr: "Berceau de la rumba congolaise, classée au patrimoine de l'UNESCO. Vivez les nuits animées de Kinshasa dans ses nombreux bars et clubs.",
          en: "Birthplace of Congolese rumba, listed on UNESCO's heritage. Experience Kinshasa's vibrant nightlife in its many bars and clubs.",
        },
      },
      {
        icon: "Landmark",
        title: { fr: "Musée National", en: "National Museum" },
        description: {
          fr: "Le Musée National de la RDC abrite une collection impressionnante d'art et d'objets historiques témoignant de la richesse culturelle du pays.",
          en: "The National Museum of the DRC houses an impressive collection of art and historical objects reflecting the country's cultural richness.",
        },
      },
      {
        icon: "Waves",
        title: { fr: "Fleuve Congo", en: "Congo River" },
        description: {
          fr: "Promenez-vous sur les berges du deuxième fleuve le plus puissant du monde et profitez d'une vue imprenable sur Brazzaville.",
          en: "Stroll along the banks of the world's second most powerful river and enjoy stunning views of Brazzaville.",
        },
      },
      {
        icon: "ShoppingBag",
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
    tags: [
      { fr: "Ville", en: "City" },
      { fr: "Culture", en: "Culture" },
      { fr: "Gastronomie", en: "Gastronomy" },
      { fr: "Musique", en: "Music" },
      { fr: "Histoire", en: "History" }
    ],
    gallery: [
      "/images/destinations/k-1.jpg",
      "/images/destinations/k-2.jpg",
      "/images/destinations/k-3.jpg",
      "/images/destinations/11.jpg"
    ]
  },
  {
    slug: "zongo",
    heroImage: "/images/destinations/zongo.jpg",
    heroGradient: "from-blue-600 via-cyan-700 to-teal-900",
    heroIcon: "Waves",
    name: { fr: "Zongo", en: "Zongo" },
    tagline: {
      fr: "Les chutes spectaculaires au cœur du Kongo Central",
      en: "Spectacular waterfalls in the heart of Kongo Central",
    },
    description: {
      fr: "Nichées au cœur d'une forêt tropicale luxuriante, les chutes de Zongo sont un spectacle naturel d'une puissance rare. Une escapade idéale pour se ressourcer loin du tumulte urbain.",
      en: "Nestled in the heart of a lush tropical forest, Zongo Falls are a natural spectacle of rare power. An ideal getaway to recharge away from the urban hustle.",
    },
    longDescription: {
      fr: "À environ 130 km de Kinshasa, dans la province du Kongo Central, les chutes de Zongo s'élèvent majestueusement à 65 mètres de hauteur sur la rivière Inkisi. Le site est une véritable ode à la puissance de la nature : le fracas de l'eau s'écrasant dans le bassin crée un nuage de brume perpétuel et des arcs-en-ciel éblouissants. Le parcours pour atteindre les différents belvédères vous fait traverser une végétation dense, offrant des points de vue variés sur les cataractes. C'est l'endroit rêvé pour les amoureux de randonnée, de photographie de nature et de sérénité. Le soir venu, le calme de la forêt et le chant des oiseaux tropicaux offrent une expérience de déconnexion totale, faisant de Zongo l'une des destinations les plus prisées pour un week-end au vert.",
      en: "About 130 km from Kinshasa, in the Kongo Central province, Zongo Falls rise majestically to 65 meters high on the Inkisi River. The site is a true ode to the power of nature: the roar of the water crashing into the basin creates a perpetual cloud of mist and dazzling rainbows. The path to reach the different viewpoints takes you through dense vegetation, offering varied perspectives on the cataracts. It is the perfect place for lovers of hiking, nature photography, and serenity. In the evening, the calm of the forest and the song of tropical birds offer a total disconnection experience, making Zongo one of the most popular destinations for a green weekend.",
    },
    stats: [
      { label: { fr: "Distance de Kin", en: "Distance from Kin" }, value: "130 km" },
      { label: { fr: "Hauteur des chutes", en: "Falls Height" }, value: "65 m" },
      { label: { fr: "Température eau", en: "Water Temp" }, value: "22°C" },
      { label: { fr: "Rivière", en: "River" }, value: "Inkisi" },
    ],
    highlights: [
      {
        icon: "Waves",
        title: { fr: "Les Chutes Majestueuses", en: "The Majestic Falls" },
        description: {
          fr: "Admirez la chute vertigineuse de 65 mètres et ressentez la puissance de l'eau pulvérisée.",
          en: "Admire the dizzying 65-meter drop and feel the power of the spray.",
        },
      },
      {
        icon: "Camera",
        title: { fr: "Points de Vue Panoramiques", en: "Panoramic Viewpoints" },
        description: {
          fr: "Accédez à plusieurs belvédères offrant des perspectives uniques sur les chutes et la forêt.",
          en: "Access several viewpoints offering unique perspectives on the falls and the forest.",
        },
      },
      {
        icon: "TreeDeciduous",
        title: { fr: "Forêt Tropicale", en: "Tropical Forest" },
        description: {
          fr: "Une immersion dans une flore dense et préservée, idéale pour l'observation de la biodiversité.",
          en: "An immersion in dense and preserved flora, ideal for biodiversity observation.",
        },
      },
      {
        icon: "Tent",
        title: { fr: "Espaces Détente", en: "Relaxation Areas" },
        description: {
          fr: "Des zones aménagées pour le repos, le pique-nique et la contemplation au bord de l'eau.",
          en: "Areas set up for rest, picnicking, and contemplation by the water.",
        },
      },
    ],
    activities: [
      { fr: "Randonnée pédestre guidée", en: "Guided hiking" },
      { fr: "Photographie de paysage et de brume", en: "Landscape and mist photography" },
      { fr: "Baignade surveillée dans les zones calmes", en: "Supervised swimming in calm areas" },
      { fr: "Pique-nique en pleine nature", en: "Nature picnic" },
      { fr: "Observation des oiseaux tropicaux", en: "Tropical bird watching" },
      { fr: "Visite de la centrale hydroélectrique", en: "Hydroelectric power plant visit" },
    ],
    practicalInfo: {
      bestTime: {
        fr: "Saison des pluies pour un débit impressionnant, saison sèche (Juin-Sept) pour un accès plus facile",
        en: "Rainy season for impressive flow, dry season (June-Sept) for easier access",
      },
      climate: {
        fr: "Tropical humide, avec une fraîcheur constante à proximité des chutes",
        en: "Humid tropical, with constant coolness near the falls",
      },
      howToGetThere: {
        fr: "Par la Route Nationale 1, puis piste vers le site (4x4 recommandé en saison des pluies)",
        en: "Via National Road 1, then a track to the site (4x4 recommended in rainy season)",
      },
      accommodation: {
        fr: "Seli Safari Resort (bungalows et chambres) et aires de camping aménagées",
        en: "Seli Safari Resort (bungalows and rooms) and developed camping areas",
      },
    },
    tags: [
      { fr: "Nature", en: "Nature" },
      { fr: "Chutes", en: "Falls" },
      { fr: "Evasion", en: "Escape" }
    ],
  },
  {
    slug: "kisantu",
    heroImage: "/images/destinations/kisantu.jpg",
    heroGradient: "from-green-600 via-emerald-700 to-teal-800",
    heroIcon: "Leaf",
    name: { fr: "Kisantu", en: "Kisantu" },
    tagline: {
      fr: "Un havre de paix et de biodiversité historique",
      en: "A haven of peace and historic biodiversity",
    },
    description: {
      fr: "Célèbre pour son jardin botanique centenaire et sa majestueuse cathédrale en briques rouges, Kisantu est une oasis de paix et de biodiversité nichée au cœur du Kongo Central.",
      en: "Famous for its century-old botanical garden and its majestic red brick cathedral, Kisantu is an oasis of peace and biodiversity nestled in the heart of Kongo Central.",
    },
    longDescription: {
      fr: "À seulement 120 km de Kinshasa, Kisantu offre un voyage dans le temps et dans la nature. Le Jardin Botanique de Kisantu, fondé en 1900 par le frère jésuite Justin Gillet, est l'un des plus anciens d'Afrique. Il abrite sur 225 hectares une collection exceptionnelle de plus de 3 000 espèces végétales, dont des serres de cactus, des collections de palmiers et des arbres centenaires impressionnants. La ville est également célèbre pour sa Cathédrale Notre-Dame des Sept Douleurs, un chef-d'œuvre architectural en briques rouges visible de loin. Entre balades sous les frondaisons, découverte du patrimoine historique et dégustation des produits locaux, Kisantu est l'étape culturelle et naturelle par excellence du Bas-Congo.",
      en: "Just 120 km from Kinshasa, Kisantu offers a journey through time and nature. The Kisantu Botanical Garden, founded in 1900 by Jesuit Brother Justin Gillet, is one of the oldest in Africa. Spread over 225 hectares, it houses an exceptional collection of over 3,000 plant species, including cactus greenhouses, palm collections, and impressive century-old trees. The town is also famous for its Cathedral of Our Lady of Seven Sorrows, a red-brick architectural masterpiece visible from afar. Between strolls under the canopies, discovery of historical heritage, and tasting local products, Kisantu is the quintessential cultural and natural stop in Bas-Congo.",
    },
    stats: [
      { label: { fr: "Distance de Kin", en: "Distance from Kin" }, value: "120 km" },
      { label: { fr: "Fondation du jardin", en: "Garden Founded" }, value: "1900" },
      { label: { fr: "Espèces végétales", en: "Plant Species" }, value: "3000+" },
      { label: { fr: "Superficie du jardin", en: "Garden Area" }, value: "225 ha" },
    ],
    highlights: [
      {
        icon: "TreeDeciduous",
        title: { fr: "Jardin Botanique", en: "Botanical Garden" },
        description: {
          fr: "Une collection unique d'arbres tropicaux, de plantes médicinales et de fleurs exotiques dans un cadre historique.",
          en: "A unique collection of tropical trees, medicinal plants, and exotic flowers in a historic setting.",
        },
      },
      {
        icon: "Church",
        title: { fr: "Cathédrale en Briques", en: "Red Brick Cathedral" },
        description: {
          fr: "L'imposante Cathédrale Notre-Dame des Sept Douleurs, symbole de l'architecture coloniale religieuse.",
          en: "The imposing Cathedral of Our Lady of Seven Sorrows, a symbol of religious colonial architecture.",
        },
      },
      {
        icon: "Leaf",
        title: { fr: "Serres de Cactus", en: "Cactus Greenhouses" },
        description: {
          fr: "Découvrez une variété impressionnante de plantes grasses et succulentes dans des serres magnifiquement préservées.",
          en: "Discover an impressive variety of succulents and cacti in beautifully preserved greenhouses.",
        },
      },
      {
        icon: "Waves",
        title: { fr: "La Rivière Inkisi", en: "Inkisi River" },
        description: {
          fr: "Profitez du calme des berges de la rivière Inkisi qui traverse la région et nourrit cette terre fertile.",
          en: "Enjoy the calm of the banks of the Inkisi River that flows through the region and nourishes this fertile land.",
        },
      },
    ],
    activities: [
      { fr: "Visite guidée du jardin botanique", en: "Guided botanical garden tour" },
      { fr: "Exploration de la cathédrale historique", en: "Historic cathedral exploration" },
      { fr: "Pique-nique sous les arbres centenaires", en: "Picnic under century-old trees" },
      { fr: "Photographie de flore et d'architecture", en: "Flora and architecture photography" },
      { fr: "Achat de miel et confitures locales", en: "Buying local honey and jams" },
      { fr: "Randonnée le long de l'Inkisi", en: "Hiking along the Inkisi" },
    ],
    practicalInfo: {
      bestTime: {
        fr: "Toute l'année, mais particulièrement agréable pendant la saison sèche (Mai à Septembre)",
        en: "Year-round, but particularly pleasant during the dry season (May to September)",
      },
      climate: {
        fr: "Tropical avec une fraîcheur agréable à l'ombre des grands arbres du jardin",
        en: "Tropical with a pleasant coolness under the shade of the garden's large trees",
      },
      howToGetThere: {
        fr: "Par la Route Nationale 1 (environ 2-3 heures de route depuis Kinshasa)",
        en: "Via National Road 1 (about 2-3 hours drive from Kinshasa)",
      },
      accommodation: {
        fr: "Centre d'accueil du jardin, petits hôtels locaux et lodges de charme dans les environs",
        en: "Garden guest center, small local hotels, and charming lodges in the surroundings",
      },
    },
    tags: [
      { fr: "Botanique", en: "Botany" },
      { fr: "Histoire", en: "History" },
      { fr: "Culture", en: "Culture" }
    ],
  },
  {
    slug: "moanda",
    heroImage: "/images/destinations/moanda.jpg",
    heroGradient: "from-blue-500 via-indigo-600 to-purple-800",
    heroIcon: "Palmtree",
    name: { fr: "Moanda", en: "Moanda" },
    tagline: {
      fr: "L'ouverture de la RDC sur l'Océan Atlantique",
      en: "DRC's gateway to the Atlantic Ocean",
    },
    description: {
      fr: "Seule ville côtière de la République Démocratique du Congo, Moanda est un joyau balnéaire où le fleuve Congo rencontre l'océan Atlantique. Plages de sable fin, mangroves mystérieuses et couchers de soleil spectaculaires vous y attendent.",
      en: "The only coastal city in the Democratic Republic of Congo, Moanda is a seaside jewel where the Congo River meets the Atlantic Ocean. Fine sandy beaches, mysterious mangroves, and spectacular sunsets await you.",
    },
    longDescription: {
      fr: "Située à la pointe ouest de la RDC, Moanda offre une expérience unique de détente et de découverte. C'est ici que le deuxième plus puissant fleuve du monde termine sa course dans l'Atlantique, créant un phénomène naturel saisissant. La ville est bordée par le Parc Marin des Mangroves, un sanctuaire de biodiversité où l'on peut observer des lamantins, des tortues marines et une multitude d'oiseaux tropicaux. Entre les plages de Tonde, le port historique de Banana et les balades en pirogue dans les canaux bordés de palétuviers, Moanda est la destination idéale pour ceux qui cherchent à allier nature sauvage et plaisirs balnéaires.",
      en: "Located at the western tip of the DRC, Moanda offers a unique experience of relaxation and discovery. It is here that the world's second most powerful river ends its journey in the Atlantic, creating a striking natural phenomenon. The city is bordered by the Mangrove Marine Park, a biodiversity sanctuary where one can observe manatees, sea turtles, and a multitude of tropical birds. Between the beaches of Tonde, the historic port of Banana, and canoe trips through mangrove-lined canals, Moanda is the ideal destination for those seeking to combine wild nature and seaside pleasures.",
    },
    stats: [
      { label: { fr: "Littoral", en: "Coastline" }, value: "37 km" },
      { label: { fr: "Température moyenne", en: "Average Temp" }, value: "28°C" },
      { label: { fr: "Fondation", en: "Founded" }, value: "1905" },
      { label: { fr: "Type de climat", en: "Climate Type" }, value: "Tropical Maritime" },
    ],
    highlights: [
      {
        icon: "Waves",
        title: { fr: "Embouchure du Fleuve", en: "River Mouth" },
        description: {
          fr: "Le spectacle unique de la rencontre entre les eaux brunes du fleuve Congo et le bleu de l'océan Atlantique.",
          en: "The unique spectacle of the meeting between the brown waters of the Congo River and the blue of the Atlantic Ocean.",
        },
      },
      {
        icon: "Bird",
        title: { fr: "Parc Marin des Mangroves", en: "Mangrove Marine Park" },
        description: {
          fr: "Explorez un écosystème protégé abritant des lamantins, des crocodiles et une flore aquatique exceptionnelle.",
          en: "Explore a protected ecosystem home to manatees, crocodiles, and exceptional aquatic flora.",
        },
      },
      {
        icon: "Sun",
        title: { fr: "Plages de Tonde", en: "Tonde Beaches" },
        description: {
          fr: "Profitez du soleil et de la brise marine sur les plus belles plages de sable fin du pays.",
          en: "Enjoy the sun and the sea breeze on the most beautiful fine sandy beaches in the country.",
        },
      },
      {
        icon: "Anchor",
        title: { fr: "Port de Banana", en: "Banana Port" },
        description: {
          fr: "Visitez le port historique de Banana, l'un des points les plus anciens de la côte congolaise.",
          en: "Visit the historic port of Banana, one of the oldest points on the Congolese coast.",
        },
      },
    ],
    activities: [
      { fr: "Baignade et sports nautiques", en: "Swimming and water sports" },
      { fr: "Safari en bateau dans les mangroves", en: "Boat safari in the mangroves" },
      { fr: "Observation des oiseaux tropicaux", en: "Tropical bird watching" },
      { fr: "Pêche sportive en haute mer", en: "Deep-sea sport fishing" },
      { fr: "Dégustation de fruits de mer frais", en: "Fresh seafood tasting" },
      { fr: "Visite du phare de Banana", en: "Banana lighthouse visit" },
    ],
    practicalInfo: {
      bestTime: {
        fr: "Juin à Septembre (saison sèche et fraîche) ou Décembre à Février",
        en: "June to September (dry and cool season) or December to February",
      },
      climate: {
        fr: "Maritime tropical avec une humidité tempérée par la brise marine",
        en: "Maritime tropical with humidity tempered by the sea breeze",
      },
      howToGetThere: {
        fr: "Vols réguliers depuis Kinshasa (Congo Airways/CAA) ou par la route via Matadi (environ 8-10h)",
        en: "Regular flights from Kinshasa (Congo Airways/CAA) or by road via Matadi (about 8-10h)",
      },
      accommodation: {
        fr: "Hôtels de standing en bord de mer, résidences de vacances et gîtes écologiques",
        en: "Upscale seaside hotels, holiday residences, and ecological lodges",
      },
    },
    tags: [
      { fr: "Plage", en: "Beach" },
      { fr: "Océan", en: "Ocean" },
      { fr: "Nature", en: "Nature" }
    ],
  },
  {
    slug: "matadi",
    heroImage: "/images/destinations/matadi.jpg",
    heroGradient: "from-slate-600 via-gray-700 to-zinc-900",
    heroIcon: "Ship",
    name: { fr: "Matadi", en: "Matadi" },
    tagline: {
      fr: "La cité rocheuse et le poumon portuaire du pays",
      en: "The rocky city and the country's port lung",
    },
    description: {
      fr: "Surnommée la 'Cité de Pierre', Matadi est le poumon économique de la RDC. Bâtie à flanc de colline, cette ville portuaire impressionne par son relief escarpé et son célèbre pont suspendu.",
      en: "Nicknamed the 'City of Stone', Matadi is the economic heart of the DRC. Built on a hillside, this port city impresses with its steep terrain and its famous suspension bridge.",
    },
    longDescription: {
      fr: "Matadi, dont le nom signifie 'pierres' en Kikongo, est une ville au caractère unique, sculptée dans un paysage de collines rocheuses dominant le fleuve Congo. En tant que principal port maritime du pays, elle est le théâtre d'une activité incessante. Le symbole incontesté de la ville est le Pont Maréchal (Pont OEBK), une prouesse d'ingénierie suspendue à 50 mètres au-dessus du fleuve, offrant une vue imprenable sur les rapides et le port. Les visiteurs apprécient particulièrement les belvédères qui parsèment la ville, offrant des panoramas spectaculaires, ainsi que les traces de l'histoire coloniale visibles dans l'architecture de la 'Ville Haute'. C'est une étape dynamique et impressionnante pour comprendre l'énergie du Kongo Central.",
      en: "Matadi, whose name means 'stones' in Kikongo, is a city with a unique character, sculpted in a landscape of rocky hills overlooking the Congo River. As the country's main seaport, it is the scene of constant activity. The undisputed symbol of the city is the Marechal Bridge (OEBK Bridge), an engineering feat suspended 50 meters above the river, offering a breathtaking view of the rapids and the port. Visitors particularly appreciate the viewpoints that dot the city, offering spectacular panoramas, as well as the traces of colonial history visible in the architecture of the 'Upper Town'. It is a dynamic and impressive stop to understand the energy of Kongo Central.",
    },
    stats: [
      { label: { fr: "Altitude", en: "Altitude" }, value: "300 m" },
      { label: { fr: "Capacité portuaire", en: "Port Capacity" }, value: "#1 RDC" },
      { label: { fr: "Longueur du pont", en: "Bridge Length" }, value: "722 m" },
      { label: { fr: "Population", en: "Population" }, value: "300k+" },
    ],
    highlights: [
      {
        icon: "Bridge",
        title: { fr: "Pont Maréchal", en: "Marechal Bridge" },
        description: {
          fr: "L'unique pont suspendu enjambant le fleuve Congo, une structure majestueuse reliant les deux rives.",
          en: "The only suspension bridge spanning the Congo River, a majestic structure connecting the two banks.",
        },
      },
      {
        icon: "Anchor",
        title: { fr: "Le Port Maritime", en: "The Seaport" },
        description: {
          fr: "Le cœur battant de l'économie congolaise, où les navires du monde entier viennent accoster.",
          en: "The beating heart of the Congolese economy, where ships from all over the world come to dock.",
        },
      },
      {
        icon: "Mountain",
        title: { fr: "Les Belvédères", en: "Viewpoints" },
        description: {
          fr: "Des points de vue naturels offrant des panoramas à couper le souffle sur le fleuve et la ville escarpée.",
          en: "Natural viewpoints offering breathtaking panoramas over the river and the steep city.",
        },
      },
      {
        icon: "History",
        title: { fr: "La Ville Haute", en: "Upper Town" },
        description: {
          fr: "Le quartier historique avec ses bâtiments coloniaux et son ambiance rétro dominant le port.",
          en: "The historic district with its colonial buildings and retro atmosphere overlooking the port.",
        },
      },
    ],
    activities: [
      { fr: "Traversée à pied du Pont Maréchal", en: "Walking across the Marechal Bridge" },
      { fr: "Tour panoramique des belvédères", en: "Panoramic tour of the viewpoints" },
      { fr: "Visite guidée du port de Matadi", en: "Guided tour of the Matadi port" },
      { fr: "Exploration des grottes de Lufu", en: "Exploration of Lufu caves" },
      { fr: "Dîner avec vue sur le fleuve", en: "Dinner with a view of the river" },
      { fr: "Découverte du site historique de Vivi", en: "Discovery of Vivi historical site" },
    ],
    practicalInfo: {
      bestTime: {
        fr: "Saison sèche (Mai à Septembre) pour éviter les fortes pluies et profiter de la visibilité",
        en: "Dry season (May to September) to avoid heavy rains and enjoy good visibility",
      },
      climate: {
        fr: "Chaud et humide, avec une brise agréable sur les hauteurs de la ville",
        en: "Hot and humid, with a pleasant breeze on the city heights",
      },
      howToGetThere: {
        fr: "Par la Route Nationale 1 (environ 5-6h de route de Kinshasa) ou par train (Ligne Matadi-Kinshasa)",
        en: "Via National Road 1 (about 5-6h drive from Kinshasa) or by train (Matadi-Kinshasa Line)",
      },
      accommodation: {
        fr: "Hôtels de grand standing (Ledya, Belle-Vue) et nombreux guest-houses confortables",
        en: "Luxury hotels (Ledya, Belle-Vue) and many comfortable guest houses",
      },
    },
    tags: [
      { fr: "Port", en: "Port" },
      { fr: "Commerce", en: "Commerce" },
      { fr: "Architecture", en: "Architecture" }
    ],
  },
  {
    slug: "nsele",
    heroImage: "/images/destinations/nsele.jpg",
    heroGradient: "from-rose-500 via-pink-600 to-orange-700",
    heroIcon: "Binoculars",
    name: { fr: "Parc de la N'Sele", en: "N'Sele Park" },
    tagline: {
      fr: "Safari et détente aux portes de la capitale",
      en: "Safari and relaxation at the gates of the capital",
    },
    description: {
      fr: "Le Parc de la Vallée de la N'Sele est un sanctuaire de biodiversité aux portes de Kinshasa. Safari, détente et activités fluviales vous y attendent pour une évasion familiale parfaite.",
      en: "The N'Sele Valley Park is a biodiversity sanctuary at the gates of Kinshasa. Safari, relaxation, and river activities await you for a perfect family getaway.",
    },
    longDescription: {
      fr: "Situé à seulement une heure de route du centre-ville de Kinshasa, le Parc de la Vallée de la N'Sele est la destination idéale pour ceux qui souhaitent découvrir la faune africaine sans s'éloigner de la capitale. Sur des milliers d'hectares préservés, vous pourrez observer des lions, des zèbres, des girafes, des buffles et diverses espèces d'antilopes lors de safaris guidés en jeep. Le parc ne se limite pas à la faune terrestre : bordé par la rivière N'Sele et proche du fleuve Congo, il offre des panoramas apaisants et des activités nautiques. Avec ses infrastructures modernes, ses piscines et ses restaurants de qualité, c'est le lieu de prédilection des familles kinoises et des visiteurs pour un week-end alliant aventure et confort en plein air.",
      en: "Located just an hour's drive from downtown Kinshasa, the N'Sele Valley Park is the ideal destination for those wishing to discover African wildlife without straying far from the capital. Across thousands of preserved hectares, you can observe lions, zebras, giraffes, buffaloes, and various species of antelopes during guided jeep safaris. The park is not limited to land wildlife: bordered by the N'Sele River and close to the Congo River, it offers soothing panoramas and water activities. With its modern infrastructure, swimming pools, and quality restaurants, it is the favorite spot for Kinshasa families and visitors for a weekend combining adventure and outdoor comfort.",
    },
    stats: [
      { label: { fr: "Distance de Kin", en: "Distance from Kin" }, value: "40 km" },
      { label: { fr: "Superficie", en: "Area" }, value: "10 000 ha" },
      { label: { fr: "Espèces animales", en: "Animal Species" }, value: "20+" },
      { label: { fr: "Temps de trajet", en: "Travel Time" }, value: "1h" },
    ],
    highlights: [
      {
        icon: "Lion",
        title: { fr: "Safari en Jeep", en: "Jeep Safari" },
        description: {
          fr: "Parcourez les pistes du parc pour observer les grands fauves et les mammifères de la savane.",
          en: "Travel the park's tracks to observe large predators and savannah mammals.",
        },
      },
      {
        icon: "Waves",
        title: { fr: "Activités Fluviales", en: "River Activities" },
        description: {
          fr: "Profitez de balades en bateau ou de moments de détente sur les rives de la N'Sele.",
          en: "Enjoy boat rides or moments of relaxation on the banks of the N'Sele.",
        },
      },
      {
        icon: "Binoculars",
        title: { fr: "Observation de la Faune", en: "Wildlife Watching" },
        description: {
          fr: "Approchez des girafes, des zèbres et des impalas dans leur habitat naturel protégé.",
          en: "Get close to giraffes, zebras, and impalas in their protected natural habitat.",
        },
      },
      {
        icon: "Coffee",
        title: { fr: "Loisirs & Détente", en: "Leisure & Relaxation" },
        description: {
          fr: "Des espaces de restauration et des piscines pour une journée de repos complète en famille.",
          en: "Dining areas and swimming pools for a complete family day of rest.",
        },
      },
    ],
    activities: [
      { fr: "Safari guidé en véhicule tout-terrain", en: "Guided 4x4 safari" },
      { fr: "Baignade en piscine de luxe", en: "Swimming in luxury pools" },
      { fr: "Croisière sur la rivière N'Sele", en: "N'Sele river cruise" },
      { fr: "Randonnée pédestre naturaliste", en: "Nature hiking" },
      { fr: "Déjeuner gastronomique en plein air", en: "Outdoor gourmet lunch" },
      { fr: "VTT et activités sportives", en: "Mountain biking and sports" },
    ],
    practicalInfo: {
      bestTime: {
        fr: "Toute l'année, particulièrement les week-ends pour l'animation ou en semaine pour le calme",
        en: "Year-round, especially weekends for the atmosphere or weekdays for peace",
      },
      climate: {
        fr: "Tropical, souvent plus aéré que le centre-ville grâce à la proximité de l'eau et de la végétation",
        en: "Tropical, often airier than downtown thanks to proximity to water and vegetation",
      },
      howToGetThere: {
        fr: "Par la route vers l'Est (boulevard Lumumba), direction l'aéroport international",
        en: "By road towards the East (Lumumba Boulevard), heading towards the international airport",
      },
      accommodation: {
        fr: "Kwilu Lodge, lodges de luxe du parc et diverses options de standing à proximité",
        en: "Kwilu Lodge, park luxury lodges, and various upscale options nearby",
      },
    },
    tags: [
      { fr: "Safari", en: "Safari" },
      { fr: "Famille", en: "Family" },
      { fr: "Weekend", en: "Weekend" }
    ],
  },
];

export const getDestinationBySlug = (slug: string) => {
  return destinations.find((d) => d.slug === slug);
};
