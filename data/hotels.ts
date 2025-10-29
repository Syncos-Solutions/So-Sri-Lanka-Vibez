export interface Hotel {
  id: number
  name: string
  location: string
  price: number
  rating: number
  reviews: number
  image: string
  amenities: string[]
  description: string
  slug: string
  fullDescription?: string
  rooms?: number
  guestCapacity?: number
  features?: string[]
}

export const hotels: Hotel[] = [
  {
    id: 1,
    name: "Sigiriya Luxury Resort",
    location: "Sigiriya, Central Province",
    price: 250,
    rating: 4.8,
    reviews: 342,
    image: "Luxury%20resort%20Sri%20Lanka%20Sigiriya%20mountain%20view",
    amenities: ["WiFi", "Restaurant", "Pool", "Spa"],
    description: "Stunning views of Sigiriya Rock with world-class amenities",
    slug: "sigiriya-luxury-resort",
    fullDescription:
      "Experience luxury at its finest with breathtaking views of the iconic Sigiriya Rock. Our resort offers world-class amenities, exceptional service, and unforgettable experiences.",
    rooms: 45,
    guestCapacity: 120,
    features: ["Mountain Views", "Infinity Pool", "Fine Dining", "Spa & Wellness", "Adventure Tours"],
  },
  {
    id: 2,
    name: "Mirissa Beach Paradise",
    location: "Mirissa, Southern Province",
    price: 180,
    rating: 4.6,
    reviews: 289,
    image: "Beach%20resort%20Sri%20Lanka%20Mirissa%20sunset%20ocean",
    amenities: ["WiFi", "Beach Access", "Restaurant", "Water Sports"],
    description: "Beachfront paradise with water sports and sunset views",
    slug: "mirissa-beach-paradise",
    fullDescription:
      "Relax on pristine sandy beaches with crystal-clear waters. Our beachfront resort offers water sports, sunset views, and authentic Sri Lankan hospitality.",
    rooms: 38,
    guestCapacity: 100,
    features: ["Beach Access", "Water Sports", "Sunset Views", "Seafood Restaurant", "Whale Watching Tours"],
  },
  {
    id: 3,
    name: "Tea Country Estate",
    location: "Nuwara Eliya, Central Highlands",
    price: 200,
    rating: 4.7,
    reviews: 256,
    image: "Tea%20plantation%20resort%20Sri%20Lanka%20mountain%20lodge",
    amenities: ["WiFi", "Restaurant", "Tea Tours", "Hiking"],
    description: "Nestled in tea plantations with scenic mountain views",
    slug: "tea-country-estate",
    fullDescription:
      "Immerse yourself in the lush tea plantations of Sri Lanka's central highlands. Our estate offers guided tea tours, hiking trails, and panoramic mountain views.",
    rooms: 32,
    guestCapacity: 85,
    features: ["Tea Plantation Tours", "Hiking Trails", "Mountain Views", "Organic Restaurant", "Wellness Center"],
  },
  {
    id: 4,
    name: "Kandy Heritage Hotel",
    location: "Kandy, Central Province",
    price: 160,
    rating: 4.5,
    reviews: 198,
    image: "Heritage%20hotel%20Kandy%20Sri%20Lanka%20temple%20view",
    amenities: ["WiFi", "Restaurant", "Cultural Tours", "Spa"],
    description: "Historic hotel with views of the Temple of the Tooth",
    slug: "kandy-heritage-hotel",
    fullDescription:
      "Stay in the heart of Kandy with views of the sacred Temple of the Tooth. Our historic hotel combines colonial charm with modern comfort and cultural experiences.",
    rooms: 28,
    guestCapacity: 75,
    features: ["Temple Views", "Cultural Tours", "Heritage Architecture", "Traditional Spa", "Local Cuisine"],
  },
  {
    id: 5,
    name: "Jungle Safari Lodge",
    location: "Yala, Eastern Province",
    price: 220,
    rating: 4.7,
    reviews: 312,
    image: "Safari%20lodge%20Sri%20Lanka%20wildlife%20jungle%20nature",
    amenities: ["WiFi", "Restaurant", "Safari Tours", "Nature Walks"],
    description: "Adventure lodge with wildlife safari experiences",
    slug: "jungle-safari-lodge",
    fullDescription:
      "Experience thrilling wildlife safaris in Yala National Park. Our lodge offers expert guides, comfortable accommodations, and unforgettable encounters with Sri Lanka's wildlife.",
    rooms: 42,
    guestCapacity: 110,
    features: ["Safari Tours", "Wildlife Viewing", "Expert Guides", "Nature Walks", "Photography Opportunities"],
  },
  {
    id: 6,
    name: "Colombo City Boutique",
    location: "Colombo, Western Province",
    price: 190,
    rating: 4.6,
    reviews: 267,
    image: "Boutique%20hotel%20Colombo%20Sri%20Lanka%20city%20modern",
    amenities: ["WiFi", "Restaurant", "Gym", "Business Center"],
    description: "Modern boutique hotel in the heart of Colombo",
    slug: "colombo-city-boutique",
    fullDescription:
      "Discover urban luxury in the heart of Colombo. Our boutique hotel offers contemporary design, excellent dining, and convenient access to the city's attractions.",
    rooms: 35,
    guestCapacity: 90,
    features: ["City Center Location", "Modern Design", "Fine Dining", "Fitness Center", "Business Facilities"],
  },
  {
    id: 7,
    name: "Ella Mountain Retreat",
    location: "Ella, Central Highlands",
    price: 140,
    rating: 4.4,
    reviews: 201,
    image: "Mountain%20retreat%20Ella%20Sri%20Lanka%20hiking%20views",
    amenities: ["WiFi", "Restaurant", "Hiking Tours", "Yoga"],
    description: "Cozy retreat perfect for hiking and mountain activities",
    slug: "ella-mountain-retreat",
    fullDescription:
      "Escape to the misty mountains of Ella. Our cozy retreat offers hiking tours, yoga sessions, and stunning views of the surrounding tea plantations and valleys.",
    rooms: 24,
    guestCapacity: 65,
    features: ["Hiking Tours", "Yoga Classes", "Mountain Views", "Vegetarian Restaurant", "Meditation Space"],
  },
  {
    id: 8,
    name: "Galle Fort Boutique",
    location: "Galle, Southern Province",
    price: 210,
    rating: 4.8,
    reviews: 334,
    image: "Boutique%20hotel%20Galle%20Fort%20Sri%20Lanka%20historic",
    amenities: ["WiFi", "Restaurant", "Beach Access", "Cultural Tours"],
    description: "Charming hotel within the historic Galle Fort",
    slug: "galle-fort-boutique",
    fullDescription:
      "Stay within the UNESCO World Heritage Galle Fort. Our charming boutique hotel offers historic charm, beach access, and authentic cultural experiences.",
    rooms: 30,
    guestCapacity: 80,
    features: ["Historic Fort Location", "Beach Access", "Cultural Tours", "Heritage Restaurant", "Sunset Views"],
  },
  {
    id: 9,
    name: "Arugambe Surfer's Haven",
    location: "Arugambe, Western Province",
    price: 120,
    rating: 4.3,
    reviews: 156,
    image: "Surfer%20hotel%20Arugambe%20Sri%20Lanka%20beach%20waves",
    amenities: ["WiFi", "Restaurant", "Surf Lessons", "Beach Bar"],
    description: "Laid-back surfer's paradise with beach vibes",
    slug: "arugambe-surfers-haven",
    fullDescription:
      "Catch the waves at Arugambe Beach. Our laid-back resort offers surf lessons, beach bar, and a vibrant community of surfers and beach lovers.",
    rooms: 20,
    guestCapacity: 55,
    features: ["Surf Lessons", "Beach Bar", "Wave Forecasting", "Casual Vibe", "Beach Access"],
  },
  {
    id: 10,
    name: "Anuradhapura Ancient Stays",
    location: "Anuradhapura, North Central Province",
    price: 130,
    rating: 4.5,
    reviews: 189,
    image: "Ancient%20temple%20hotel%20Anuradhapura%20Sri%20Lanka%20historical",
    amenities: ["WiFi", "Restaurant", "Temple Tours", "Cycling"],
    description: "Historic hotel near ancient Buddhist temples",
    slug: "anuradhapura-ancient-stays",
    fullDescription:
      "Explore ancient Buddhist heritage near sacred temples. Our historic hotel offers temple tours, cycling adventures, and insights into Sri Lanka's spiritual history.",
    rooms: 26,
    guestCapacity: 70,
    features: ["Temple Tours", "Cycling Adventures", "Historical Significance", "Spiritual Atmosphere", "Local Guides"],
  },
]
