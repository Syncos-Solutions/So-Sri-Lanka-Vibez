export interface TraditionSubcategory {
  id: string
  title: string
  description: string
  image: string
}

export interface TraditionDetail {
  id: string
  title: string
  description: string
  image: string
  highlights: string[]
}

export const traditionSubcategories: TraditionSubcategory[] = [
  {
    id: "performing-arts",
    title: "Performing Arts",
    description: "Traditional dance, music, and theatrical performances",
    image: "Sri%20Lankan%20traditional%20dance%20culture",
  },
  {
    id: "crafts",
    title: "Traditional Crafts",
    description: "Handmade arts and crafts passed through generations",
    image: "Sri%20Lankan%20mask%20making%20traditional%20art",
  },
  {
    id: "textiles",
    title: "Textiles & Weaving",
    description: "Traditional textile arts and weaving techniques",
    image: "Batik%20weaving%20Sri%20Lankan%20textile%20art",
  },
  {
    id: "pottery",
    title: "Pottery & Ceramics",
    description: "Ancient pottery techniques and ceramic art",
    image: "Sri%20Lankan%20pottery%20traditional%20craft",
  },
  {
    id: "fishing",
    title: "Traditional Fishing",
    description: "Unique fishing methods and maritime traditions",
    image: "Stilt%20fishing%20Sri%20Lanka%20traditional",
  },
  {
    id: "medicine",
    title: "Ayurveda & Medicine",
    description: "Ancient healing practices and traditional medicine",
    image: "Ayurveda%20Sri%20Lanka%20traditional%20medicine",
  },
  {
    id: "martial-arts",
    title: "Martial Arts",
    description: "Traditional combat and martial art forms",
    image: "Sri%20Lankan%20martial%20arts%20traditional%20combat",
  },
  {
    id: "rituals",
    title: "Rituals & Ceremonies",
    description: "Sacred rituals and ceremonial practices",
    image: "Sri%20Lankan%20ritual%20ceremony%20traditional",
  },
  {
    id: "clothing",
    title: "Traditional Clothing",
    description: "Ethnic dress and traditional garments",
    image: "Sri%20Lankan%20traditional%20clothing%20dress",
  },
  {
    id: "customs",
    title: "Cultural Customs",
    description: "Social customs and cultural practices",
    image: "Sri%20Lankan%20cultural%20customs%20tradition",
  },
]

export const traditionDetails: Record<string, TraditionDetail[]> = {
  "performing-arts": [
    {
      id: "kandyan-dance",
      title: "Kandyan Dance",
      description: "Ancient royal dance form from Kandy",
      image: "Kandyan%20Dance%20Sri%20Lankan%20traditional",
      highlights: ["Royal Dance", "Ancient Form", "Energetic Movements", "Cultural Heritage"],
    },
    {
      id: "low-country-dance",
      title: "Low Country Dance",
      description: "Dance form from southern regions",
      image: "Low%20country%20dance%20Sri%20Lanka",
      highlights: ["Southern Dance", "Rhythmic", "Cultural", "Traditional"],
    },
    {
      id: "sabaragamuwa-dance",
      title: "Sabaragamuwa Dance",
      description: "Dance from Sabaragamuwa province",
      image: "Sabaragamuwa%20dance%20Sri%20Lanka",
      highlights: ["Regional Dance", "Traditional", "Cultural", "Unique"],
    },
    {
      id: "devil-dance",
      title: "Devil Dance",
      description: "Ritualistic dance with masks",
      image: "Devil%20dance%20Sri%20Lanka%20traditional",
      highlights: ["Masked Dance", "Ritualistic", "Cultural", "Spiritual"],
    },
  ],
  crafts: [
    {
      id: "mask-making",
      title: "Mask Making",
      description: "Traditional wooden mask carving",
      image: "Sri%20Lankan%20mask%20making%20traditional%20art",
      highlights: ["Wooden Masks", "Hand-carved", "Artistic", "Cultural"],
    },
    {
      id: "wood-carving",
      title: "Wood Carving",
      description: "Intricate wooden sculptures and carvings",
      image: "Wood%20carving%20Sri%20Lanka%20traditional",
      highlights: ["Wooden Sculptures", "Intricate", "Artistic", "Handmade"],
    },
    {
      id: "lacquer-work",
      title: "Lacquer Work",
      description: "Decorative lacquer coating on wood",
      image: "Lacquer%20work%20Sri%20Lanka%20traditional",
      highlights: ["Lacquer Coating", "Decorative", "Artistic", "Traditional"],
    },
    {
      id: "brassware",
      title: "Brassware",
      description: "Brass vessels and decorative items",
      image: "Brassware%20Sri%20Lanka%20traditional%20craft",
      highlights: ["Brass Items", "Decorative", "Handmade", "Artistic"],
    },
  ],
  textiles: [
    {
      id: "batik",
      title: "Batik",
      description: "Wax-resist dyeing technique",
      image: "Batik%20weaving%20Sri%20Lankan%20textile%20art",
      highlights: ["Wax-resist Dyeing", "Colorful Patterns", "Artistic", "Traditional"],
    },
    {
      id: "handloom-weaving",
      title: "Handloom Weaving",
      description: "Traditional hand-woven textiles",
      image: "Handloom%20weaving%20Sri%20Lanka%20textile",
      highlights: ["Hand-woven", "Traditional", "Artistic", "Unique Patterns"],
    },
    {
      id: "tie-dye",
      title: "Tie-Dye",
      description: "Traditional tie-dye textile art",
      image: "Tie%20dye%20Sri%20Lanka%20textile%20art",
      highlights: ["Tie-dye Patterns", "Colorful", "Artistic", "Traditional"],
    },
    {
      id: "embroidery",
      title: "Embroidery",
      description: "Hand embroidered textiles",
      image: "Embroidery%20Sri%20Lanka%20textile%20art",
      highlights: ["Hand-embroidered", "Detailed", "Artistic", "Traditional"],
    },
  ],
  pottery: [
    {
      id: "clay-pottery",
      title: "Clay Pottery",
      description: "Hand-molded clay vessels",
      image: "Clay%20pottery%20Sri%20Lanka%20traditional",
      highlights: ["Hand-molded", "Clay", "Artistic", "Traditional"],
    },
    {
      id: "ceramic-art",
      title: "Ceramic Art",
      description: "Decorative ceramic pieces",
      image: "Ceramic%20art%20Sri%20Lanka%20traditional",
      highlights: ["Ceramic", "Decorative", "Artistic", "Handmade"],
    },
    {
      id: "terracotta",
      title: "Terracotta",
      description: "Terracotta sculptures and vessels",
      image: "Terracotta%20Sri%20Lanka%20traditional%20craft",
      highlights: ["Terracotta", "Sculptures", "Artistic", "Ancient Technique"],
    },
    {
      id: "glazed-pottery",
      title: "Glazed Pottery",
      description: "Glazed ceramic vessels",
      image: "Glazed%20pottery%20Sri%20Lanka%20traditional",
      highlights: ["Glazed Ceramic", "Colorful", "Artistic", "Functional"],
    },
  ],
  fishing: [
    {
      id: "stilt-fishing",
      title: "Stilt Fishing",
      description: "Unique fishing method on stilts",
      image: "Stilt%20fishing%20Sri%20Lanka%20traditional",
      highlights: ["Stilt Fishing", "Unique Method", "Traditional", "Iconic"],
    },
    {
      id: "net-fishing",
      title: "Net Fishing",
      description: "Traditional net fishing techniques",
      image: "Net%20fishing%20Sri%20Lanka%20traditional",
      highlights: ["Net Fishing", "Traditional", "Skillful", "Sustainable"],
    },
    {
      id: "trap-fishing",
      title: "Trap Fishing",
      description: "Fish trap and weir fishing",
      image: "Trap%20fishing%20Sri%20Lanka%20traditional",
      highlights: ["Fish Traps", "Traditional", "Sustainable", "Skillful"],
    },
    {
      id: "coracle-fishing",
      title: "Coracle Fishing",
      description: "Fishing from small round boats",
      image: "Coracle%20fishing%20Sri%20Lanka%20traditional",
      highlights: ["Coracle Boats", "Traditional", "Skillful", "Unique"],
    },
  ],
  medicine: [
    {
      id: "ayurveda",
      title: "Ayurveda",
      description: "Ancient Indian healing system",
      image: "Ayurveda%20Sri%20Lanka%20traditional%20medicine",
      highlights: ["Ancient System", "Holistic Healing", "Natural Remedies", "Traditional"],
    },
    {
      id: "herbal-medicine",
      title: "Herbal Medicine",
      description: "Traditional herbal remedies",
      image: "Herbal%20medicine%20Sri%20Lanka%20traditional",
      highlights: ["Herbal Remedies", "Natural", "Traditional", "Healing"],
    },
    {
      id: "massage-therapy",
      title: "Massage Therapy",
      description: "Traditional therapeutic massage",
      image: "Massage%20therapy%20Sri%20Lanka%20traditional",
      highlights: ["Therapeutic Massage", "Healing", "Traditional", "Relaxing"],
    },
    {
      id: "oil-treatments",
      title: "Oil Treatments",
      description: "Traditional oil-based treatments",
      image: "Oil%20treatments%20Sri%20Lanka%20traditional%20medicine",
      highlights: ["Oil Treatments", "Therapeutic", "Traditional", "Healing"],
    },
  ],
  "martial-arts": [
    {
      id: "angampora",
      title: "Angampora",
      description: "Ancient Sri Lankan martial art",
      image: "Angampora%20Sri%20Lanka%20martial%20arts",
      highlights: ["Ancient Martial Art", "Combat", "Traditional", "Skillful"],
    },
    {
      id: "kalaripayattu",
      title: "Kalaripayattu",
      description: "Ancient Indian martial art",
      image: "Kalaripayattu%20martial%20arts%20traditional",
      highlights: ["Ancient Martial Art", "Combat", "Flowing Movements", "Traditional"],
    },
    {
      id: "stick-fighting",
      title: "Stick Fighting",
      description: "Traditional stick combat",
      image: "Stick%20fighting%20Sri%20Lanka%20traditional",
      highlights: ["Stick Combat", "Traditional", "Skillful", "Cultural"],
    },
    {
      id: "wrestling",
      title: "Wrestling",
      description: "Traditional wrestling techniques",
      image: "Wrestling%20Sri%20Lanka%20traditional%20sport",
      highlights: ["Wrestling", "Combat", "Traditional", "Skillful"],
    },
  ],
  rituals: [
    {
      id: "fire-walking",
      title: "Fire Walking",
      description: "Ritualistic fire walking ceremony",
      image: "Fire%20walking%20Sri%20Lanka%20ritual",
      highlights: ["Fire Walking", "Ritualistic", "Spiritual", "Cultural"],
    },
    {
      id: "blessing-ceremony",
      title: "Blessing Ceremony",
      description: "Traditional blessing rituals",
      image: "Blessing%20ceremony%20Sri%20Lanka%20ritual",
      highlights: ["Blessing Ritual", "Spiritual", "Traditional", "Sacred"],
    },
    {
      id: "coming-of-age",
      title: "Coming of Age",
      description: "Traditional coming-of-age ceremonies",
      image: "Coming%20of%20age%20Sri%20Lanka%20ritual",
      highlights: ["Coming-of-age", "Ceremonial", "Traditional", "Cultural"],
    },
    {
      id: "wedding-ceremony",
      title: "Wedding Ceremony",
      description: "Traditional wedding rituals",
      image: "Wedding%20ceremony%20Sri%20Lanka%20traditional",
      highlights: ["Wedding Ritual", "Ceremonial", "Traditional", "Cultural"],
    },
  ],
  clothing: [
    {
      id: "saree",
      title: "Saree",
      description: "Traditional draped garment",
      image: "Saree%20Sri%20Lankan%20traditional%20clothing",
      highlights: ["Draped Garment", "Elegant", "Traditional", "Colorful"],
    },
    {
      id: "sarong",
      title: "Sarong",
      description: "Traditional wrapped skirt",
      image: "Sarong%20Sri%20Lankan%20traditional%20clothing",
      highlights: ["Wrapped Skirt", "Traditional", "Comfortable", "Colorful"],
    },
    {
      id: "kandyan-dress",
      title: "Kandyan Dress",
      description: "Traditional Kandyan attire",
      image: "Kandyan%20dress%20Sri%20Lankan%20traditional",
      highlights: ["Kandyan Attire", "Formal", "Traditional", "Ornate"],
    },
    {
      id: "mundu",
      title: "Mundu",
      description: "Traditional male garment",
      image: "Mundu%20Sri%20Lankan%20traditional%20clothing",
      highlights: ["Male Garment", "Traditional", "Comfortable", "Cultural"],
    },
  ],
  customs: [
    {
      id: "new-year-customs",
      title: "New Year Customs",
      description: "Traditional New Year practices",
      image: "New%20Year%20customs%20Sri%20Lanka%20traditional",
      highlights: ["New Year Traditions", "Cultural", "Festive", "Family"],
    },
    {
      id: "greeting-customs",
      title: "Greeting Customs",
      description: "Traditional greeting practices",
      image: "Greeting%20customs%20Sri%20Lanka%20traditional",
      highlights: ["Greeting Traditions", "Respectful", "Cultural", "Social"],
    },
    {
      id: "dining-customs",
      title: "Dining Customs",
      description: "Traditional dining etiquette",
      image: "Dining%20customs%20Sri%20Lanka%20traditional",
      highlights: ["Dining Etiquette", "Traditional", "Cultural", "Social"],
    },
    {
      id: "hospitality-customs",
      title: "Hospitality Customs",
      description: "Traditional hospitality practices",
      image: "Hospitality%20customs%20Sri%20Lanka%20traditional",
      highlights: ["Hospitality", "Welcoming", "Cultural", "Generous"],
    },
  ],
}
