export interface PlaceSubcategory {
  id: string
  title: string
  description: string
  image: string
}

export interface PlaceDetail {
  id: string
  title: string
  description: string
  image: string
  highlights: string[]
}

export const placeSubcategories: PlaceSubcategory[] = [
  {
    id: "ancient-wonders",
    title: "Ancient Wonders",
    description: "Explore UNESCO World Heritage Sites and ancient ruins",
    image: "Sigiriya%20Rock%20ancient%20fortress%20Sri%20Lanka",
  },
  {
    id: "beaches",
    title: "Beaches",
    description: "Discover pristine sandy shores and coastal paradise",
    image: "Sri%20Lanka%20tropical%20beach%20sunset%20paradise",
  },
  {
    id: "mountains",
    title: "Mountains",
    description: "Experience misty peaks and mountain landscapes",
    image: "Sri%20Lanka%20mountain%20range%20scenic%20landscape",
  },
  {
    id: "temples",
    title: "Sacred Temples",
    description: "Visit spiritual and religious landmarks",
    image: "Sri%20Lankan%20temple%20architecture%20sacred",
  },
  {
    id: "national-parks",
    title: "National Parks",
    description: "Encounter wildlife and natural reserves",
    image: "Sri%20Lanka%20national%20park%20wildlife%20safari",
  },
  {
    id: "waterfalls",
    title: "Waterfalls",
    description: "Marvel at cascading waters and natural beauty",
    image: "Sri%20Lanka%20waterfall%20scenic%20nature",
  },
  {
    id: "lakes",
    title: "Lakes & Reservoirs",
    description: "Relax by serene lakes and water bodies",
    image: "Sri%20Lanka%20lake%20scenic%20water%20landscape",
  },
  {
    id: "gardens",
    title: "Botanical Gardens",
    description: "Stroll through lush gardens and green spaces",
    image: "Sri%20Lanka%20botanical%20garden%20flowers",
  },
  {
    id: "historical-sites",
    title: "Historical Sites",
    description: "Discover colonial architecture and heritage",
    image: "Sri%20Lanka%20historical%20fort%20colonial%20architecture",
  },
  {
    id: "adventure-spots",
    title: "Adventure Spots",
    description: "Seek thrills with outdoor activities",
    image: "Sri%20Lanka%20adventure%20hiking%20outdoor%20activities",
  },
]

export const placeDetails: Record<string, PlaceDetail[]> = {
  "ancient-wonders": [
    {
      id: "sigiriya",
      title: "Sigiriya Rock",
      description: "Ancient rock fortress with stunning views",
      image: "Sigiriya%20Rock%20ancient%20fortress%20Sri%20Lanka",
      highlights: ["UNESCO World Heritage Site", "Ancient Palace", "Panoramic Views", "Archaeological Significance"],
    },
    {
      id: "polonnaruwa",
      title: "Polonnaruwa",
      description: "Medieval capital with ancient ruins",
      image: "Polonnaruwa%20ancient%20ruins%20Sri%20Lanka",
      highlights: ["Ancient Kingdom", "Stone Sculptures", "Historical Temples", "Royal Palace"],
    },
    {
      id: "anuradhapura",
      title: "Anuradhapura",
      description: "Sacred Buddhist city with ancient temples",
      image: "Anuradhapura%20ancient%20temple%20Sri%20Lanka",
      highlights: ["Sacred Bodhi Tree", "Ancient Stupas", "Buddhist Heritage", "Historical Significance"],
    },
    {
      id: "dambulla",
      title: "Dambulla Cave Temple",
      description: "Ancient cave temple complex",
      image: "Dambulla%20cave%20temple%20Sri%20Lanka",
      highlights: ["Five Cave Temples", "Buddha Statues", "Ancient Paintings", "Religious Site"],
    },
  ],
  beaches: [
    {
      id: "mirissa",
      title: "Mirissa Beach",
      description: "Pristine sandy beach with sunset views",
      image: "Mirissa%20Beach%20Sri%20Lanka%20sunset",
      highlights: ["Golden Sand", "Whale Watching", "Sunset Views", "Water Sports"],
    },
    {
      id: "unawatuna",
      title: "Unawatuna Beach",
      description: "Crescent-shaped beach near Galle Fort",
      image: "Unawatuna%20Beach%20Sri%20Lanka",
      highlights: ["Crescent Bay", "Coral Reef", "Historic Fort", "Beach Bars"],
    },
    {
      id: "arugambe",
      title: "Arugambe Beach",
      description: "Popular surfing destination",
      image: "Arugambe%20Beach%20Sri%20Lanka%20surfing",
      highlights: ["Surfing Waves", "Laid-back Vibe", "Beach Bars", "Sunset Spot"],
    },
    {
      id: "hikkaduwa",
      title: "Hikkaduwa Beach",
      description: "Vibrant beach with coral reef",
      image: "Hikkaduwa%20Beach%20Sri%20Lanka",
      highlights: ["Coral Reef", "Snorkeling", "Beach Restaurants", "Nightlife"],
    },
  ],
  mountains: [
    {
      id: "adams-peak",
      title: "Adam's Peak",
      description: "Sacred mountain with pilgrimage trail",
      image: "Adams%20Peak%20Sri%20Lanka%20mountain",
      highlights: ["Sacred Summit", "Pilgrimage Trail", "Sunrise Views", "Religious Significance"],
    },
    {
      id: "ella-rock",
      title: "Ella Rock",
      description: "Scenic hiking destination with panoramic views",
      image: "Ella%20Rock%20Sri%20Lanka%20hiking",
      highlights: ["Hiking Trail", "Panoramic Views", "Tea Plantations", "Photography Spot"],
    },
    {
      id: "pidurutalagala",
      title: "Pidurutalagala",
      description: "Highest mountain in Sri Lanka",
      image: "Pidurutalagala%20Sri%20Lanka%20highest%20mountain",
      highlights: ["Highest Peak", "Mountain Views", "Cool Climate", "Scenic Beauty"],
    },
    {
      id: "horton-plains",
      title: "Horton Plains",
      description: "Misty plateau with scenic trails",
      image: "Horton%20Plains%20Sri%20Lanka%20plateau",
      highlights: ["Misty Plateau", "Hiking Trails", "World's End", "Wildlife"],
    },
  ],
  temples: [
    {
      id: "tooth-temple",
      title: "Temple of the Tooth",
      description: "Sacred Buddhist temple in Kandy",
      image: "Temple%20of%20the%20Tooth%20Kandy%20Sri%20Lanka",
      highlights: ["Sacred Relic", "Buddhist Heritage", "Architecture", "Pilgrimage Site"],
    },
    {
      id: "kelaniya",
      title: "Kelaniya Raja Maha Vihara",
      description: "Ancient Buddhist temple near Colombo",
      image: "Kelaniya%20temple%20Sri%20Lanka",
      highlights: ["Ancient Temple", "Buddhist Art", "Historical Significance", "Pilgrimage"],
    },
    {
      id: "ruwanwella",
      title: "Ruwanwella Maha Vihara",
      description: "Ancient stupa in Anuradhapura",
      image: "Ruwanwella%20stupa%20Sri%20Lanka",
      highlights: ["Ancient Stupa", "Buddhist Heritage", "Sacred Site", "Architecture"],
    },
    {
      id: "lankatilaka",
      title: "Lankatilaka Temple",
      description: "Ancient temple in Kandy district",
      image: "Lankatilaka%20temple%20Sri%20Lanka",
      highlights: ["Ancient Architecture", "Buddha Statue", "Scenic Location", "Religious Site"],
    },
  ],
  "national-parks": [
    {
      id: "yala",
      title: "Yala National Park",
      description: "Wildlife sanctuary with leopards and elephants",
      image: "Yala%20National%20Park%20Sri%20Lanka%20wildlife",
      highlights: ["Leopard Sightings", "Elephant Herds", "Safari Tours", "Biodiversity"],
    },
    {
      id: "udawalawe",
      title: "Udawalawe National Park",
      description: "Elephant sanctuary and wildlife reserve",
      image: "Udawalawe%20National%20Park%20Sri%20Lanka%20elephants",
      highlights: ["Elephant Population", "Safari Tours", "Bird Watching", "Nature Reserve"],
    },
    {
      id: "wilpattu",
      title: "Wilpattu National Park",
      description: "Largest national park with diverse wildlife",
      image: "Wilpattu%20National%20Park%20Sri%20Lanka",
      highlights: ["Largest Park", "Wildlife Diversity", "Safari Tours", "Natural Lakes"],
    },
    {
      id: "bundala",
      title: "Bundala National Park",
      description: "Wetland sanctuary for migratory birds",
      image: "Bundala%20National%20Park%20Sri%20Lanka%20birds",
      highlights: ["Bird Sanctuary", "Migratory Birds", "Wetlands", "Photography"],
    },
  ],
  waterfalls: [
    {
      id: "diyaluma",
      title: "Diyaluma Falls",
      description: "Tallest waterfall in Sri Lanka",
      image: "Diyaluma%20Falls%20Sri%20Lanka",
      highlights: ["Tallest Waterfall", "Swimming Pool", "Scenic Beauty", "Hiking Trail"],
    },
    {
      id: "baker",
      title: "Baker's Falls",
      description: "Waterfall in Horton Plains",
      image: "Bakers%20Falls%20Horton%20Plains%20Sri%20Lanka",
      highlights: ["Horton Plains", "Scenic Views", "Hiking Trail", "Photography"],
    },
    {
      id: "ravana",
      title: "Ravana Falls",
      description: "Legendary waterfall with cultural significance",
      image: "Ravana%20Falls%20Sri%20Lanka",
      highlights: ["Legendary Site", "Cultural Significance", "Swimming", "Scenic Beauty"],
    },
    {
      id: "st-clairs",
      title: "St. Clair's Falls",
      description: "Twin waterfall in tea country",
      image: "St%20Clairs%20Falls%20Sri%20Lanka",
      highlights: ["Twin Falls", "Tea Plantations", "Scenic Views", "Photography"],
    },
  ],
  lakes: [
    {
      id: "gregory",
      title: "Gregory Lake",
      description: "Scenic lake in Nuwara Eliya",
      image: "Gregory%20Lake%20Nuwara%20Eliya%20Sri%20Lanka",
      highlights: ["Mountain Lake", "Boating", "Scenic Views", "Picnic Spot"],
    },
    {
      id: "kandy",
      title: "Kandy Lake",
      description: "Sacred lake in the heart of Kandy",
      image: "Kandy%20Lake%20Sri%20Lanka",
      highlights: ["Sacred Lake", "Temple Views", "Walking Trail", "Photography"],
    },
    {
      id: "beira",
      title: "Beira Lake",
      description: "Historic lake in Colombo",
      image: "Beira%20Lake%20Colombo%20Sri%20Lanka",
      highlights: ["Historic Lake", "City Views", "Walking Trail", "Relaxation"],
    },
    {
      id: "victoria",
      title: "Victoria Reservoir",
      description: "Large reservoir in central highlands",
      image: "Victoria%20Reservoir%20Sri%20Lanka",
      highlights: ["Large Reservoir", "Scenic Views", "Boating", "Nature"],
    },
  ],
  gardens: [
    {
      id: "royal-botanical",
      title: "Royal Botanical Gardens",
      description: "Largest botanical garden in Sri Lanka",
      image: "Royal%20Botanical%20Gardens%20Peradeniya%20Sri%20Lanka",
      highlights: ["Largest Garden", "Exotic Plants", "Orchids", "Scenic Beauty"],
    },
    {
      id: "hakgala",
      title: "Hakgala Botanical Garden",
      description: "Mountain botanical garden",
      image: "Hakgala%20Botanical%20Garden%20Sri%20Lanka",
      highlights: ["Mountain Garden", "Roses", "Scenic Views", "Cool Climate"],
    },
    {
      id: "colombo-botanical",
      title: "Colombo Botanical Garden",
      description: "Historic garden in Colombo",
      image: "Colombo%20Botanical%20Garden%20Sri%20Lanka",
      highlights: ["Historic Garden", "Tropical Plants", "Walking Paths", "Relaxation"],
    },
    {
      id: "spice-garden",
      title: "Spice Garden",
      description: "Aromatic spice plantation garden",
      image: "Spice%20Garden%20Sri%20Lanka",
      highlights: ["Spice Plantation", "Aromatic Plants", "Tours", "Shopping"],
    },
  ],
  "historical-sites": [
    {
      id: "galle-fort",
      title: "Galle Fort",
      description: "Historic colonial fort",
      image: "Galle%20Fort%20Sri%20Lanka%20historic",
      highlights: ["Colonial Architecture", "Historic Walls", "Museum", "Scenic Views"],
    },
    {
      id: "jaffna-fort",
      title: "Jaffna Fort",
      description: "Historic fort in northern Sri Lanka",
      image: "Jaffna%20Fort%20Sri%20Lanka",
      highlights: ["Historic Fort", "Colonial Architecture", "Historical Significance", "Views"],
    },
    {
      id: "matara-fort",
      title: "Matara Fort",
      description: "Coastal fort with historical importance",
      image: "Matara%20Fort%20Sri%20Lanka",
      highlights: ["Coastal Fort", "Historic Walls", "Ocean Views", "Photography"],
    },
    {
      id: "colombo-fort",
      title: "Colombo Fort",
      description: "Historic district in Colombo",
      image: "Colombo%20Fort%20Sri%20Lanka%20historic",
      highlights: ["Historic District", "Colonial Buildings", "Shopping", "Dining"],
    },
  ],
  "adventure-spots": [
    {
      id: "white-water-rafting",
      title: "White Water Rafting",
      description: "Thrilling rafting on mountain rivers",
      image: "White%20water%20rafting%20Sri%20Lanka%20adventure",
      highlights: ["Rafting Adventure", "Mountain Rivers", "Adrenaline Rush", "Scenic Routes"],
    },
    {
      id: "rock-climbing",
      title: "Rock Climbing",
      description: "Rock climbing in scenic locations",
      image: "Rock%20climbing%20Sri%20Lanka%20adventure",
      highlights: ["Climbing Routes", "Scenic Views", "Professional Guides", "Adrenaline"],
    },
    {
      id: "paragliding",
      title: "Paragliding",
      description: "Aerial adventure over mountains",
      image: "Paragliding%20Sri%20Lanka%20adventure",
      highlights: ["Aerial Views", "Mountain Scenery", "Thrilling Experience", "Photography"],
    },
    {
      id: "zip-lining",
      title: "Zip-lining",
      description: "Zip-line through forests and valleys",
      image: "Zip%20lining%20Sri%20Lanka%20adventure",
      highlights: ["Forest Canopy", "Adrenaline Rush", "Scenic Views", "Safe Adventure"],
    },
  ],
}
