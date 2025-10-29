export interface FestivalSubcategory {
  id: string
  title: string
  description: string
  image: string
}

export interface FestivalDetail {
  id: string
  title: string
  description: string
  image: string
  highlights: string[]
}

export const festivalSubcategories: FestivalSubcategory[] = [
  {
    id: "religious-celebrations",
    title: "Religious Celebrations",
    description: "Sacred festivals and religious observances",
    image: "Kandy%20Perahera%20festival%20elephants",
  },
  {
    id: "cultural-events",
    title: "Cultural Events",
    description: "Celebrations of Sri Lankan culture and heritage",
    image: "Sri%20Lankan%20cultural%20festival%20celebration%20dance",
  },
  {
    id: "seasonal-festivals",
    title: "Seasonal Festivals",
    description: "Festivals marking seasons and harvests",
    image: "Sri%20Lanka%20harvest%20festival%20celebration",
  },
  {
    id: "temple-festivals",
    title: "Temple Festivals",
    description: "Festivals held at sacred temples",
    image: "Sri%20Lankan%20temple%20festival%20celebration",
  },
  {
    id: "new-year",
    title: "New Year Celebrations",
    description: "Traditional New Year festivities",
    image: "Sri%20Lankan%20New%20Year%20celebration%20traditional",
  },
  {
    id: "harvest-festivals",
    title: "Harvest Festivals",
    description: "Celebrations of agricultural abundance",
    image: "Sri%20Lanka%20harvest%20festival%20agricultural",
  },
  {
    id: "music-festivals",
    title: "Music Festivals",
    description: "Celebrations of music and performing arts",
    image: "Sri%20Lankan%20music%20festival%20concert",
  },
  {
    id: "sports-events",
    title: "Sports Events",
    description: "Traditional and modern sports celebrations",
    image: "Sri%20Lanka%20sports%20event%20festival",
  },
  {
    id: "art-festivals",
    title: "Art Festivals",
    description: "Celebrations of visual and performing arts",
    image: "Sri%20Lankan%20art%20festival%20exhibition",
  },
  {
    id: "community-celebrations",
    title: "Community Celebrations",
    description: "Local and community-based festivals",
    image: "Sri%20Lankan%20community%20festival%20celebration",
  },
]

export const festivalDetails: Record<string, FestivalDetail[]> = {
  "religious-celebrations": [
    {
      id: "kandy-perahera",
      title: "Kandy Perahera",
      description: "Grand procession with decorated elephants",
      image: "Kandy%20Perahera%20festival%20elephants",
      highlights: ["Decorated Elephants", "Grand Procession", "Sacred Relic", "Cultural Spectacle"],
    },
    {
      id: "vesak-festival",
      title: "Vesak Festival",
      description: "Buddhist festival celebrating Buddha's birth",
      image: "Vesak%20Festival%20Sri%20Lanka%20celebration",
      highlights: ["Buddha's Birth", "Lanterns", "Spiritual", "Colorful"],
    },
    {
      id: "poson-festival",
      title: "Poson Festival",
      description: "Buddhist festival celebrating arrival of Buddhism",
      image: "Poson%20Festival%20Sri%20Lanka%20Buddhist",
      highlights: ["Buddhism Arrival", "Spiritual", "Religious", "Cultural"],
    },
    {
      id: "deepavali",
      title: "Deepavali",
      description: "Hindu festival of lights",
      image: "Deepavali%20festival%20Sri%20Lanka%20lights",
      highlights: ["Festival of Lights", "Hindu", "Colorful", "Spiritual"],
    },
  ],
  "cultural-events": [
    {
      id: "colombo-arts-festival",
      title: "Colombo Arts Festival",
      description: "Annual celebration of arts and culture",
      image: "Colombo%20Arts%20Festival%20Sri%20Lanka",
      highlights: ["Arts Celebration", "Cultural", "Annual", "Diverse"],
    },
    {
      id: "galle-literary-festival",
      title: "Galle Literary Festival",
      description: "International literary festival",
      image: "Galle%20Literary%20Festival%20Sri%20Lanka",
      highlights: ["Literary Festival", "International", "Cultural", "Educational"],
    },
    {
      id: "negombo-festival",
      title: "Negombo Festival",
      description: "Coastal cultural celebration",
      image: "Negombo%20Festival%20Sri%20Lanka%20cultural",
      highlights: ["Coastal Festival", "Cultural", "Community", "Festive"],
    },
    {
      id: "matara-festival",
      title: "Matara Festival",
      description: "Southern coastal cultural event",
      image: "Matara%20Festival%20Sri%20Lanka%20cultural",
      highlights: ["Coastal Festival", "Cultural", "Community", "Traditional"],
    },
  ],
  "seasonal-festivals": [
    {
      id: "thai-pongal",
      title: "Thai Pongal",
      description: "Harvest festival celebrating new harvest",
      image: "Thai%20Pongal%20harvest%20festival%20Sri%20Lanka",
      highlights: ["Harvest Festival", "New Harvest", "Thanksgiving", "Traditional"],
    },
    {
      id: "spring-festival",
      title: "Spring Festival",
      description: "Celebration of spring season",
      image: "Spring%20Festival%20Sri%20Lanka%20seasonal",
      highlights: ["Spring Season", "Renewal", "Colorful", "Festive"],
    },
    {
      id: "monsoon-festival",
      title: "Monsoon Festival",
      description: "Festival celebrating monsoon season",
      image: "Monsoon%20Festival%20Sri%20Lanka%20seasonal",
      highlights: ["Monsoon Season", "Rain Celebration", "Cultural", "Traditional"],
    },
    {
      id: "summer-festival",
      title: "Summer Festival",
      description: "Summer season celebration",
      image: "Summer%20Festival%20Sri%20Lanka%20seasonal",
      highlights: ["Summer Season", "Beach Events", "Outdoor", "Festive"],
    },
  ],
  "temple-festivals": [
    {
      id: "tooth-temple-festival",
      title: "Tooth Temple Festival",
      description: "Festival at Temple of the Tooth",
      image: "Tooth%20Temple%20Festival%20Kandy%20Sri%20Lanka",
      highlights: ["Sacred Temple", "Religious", "Spiritual", "Cultural"],
    },
    {
      id: "kelaniya-festival",
      title: "Kelaniya Festival",
      description: "Festival at Kelaniya Raja Maha Vihara",
      image: "Kelaniya%20Festival%20Sri%20Lanka%20temple",
      highlights: ["Ancient Temple", "Religious", "Spiritual", "Cultural"],
    },
    {
      id: "ruwanwella-festival",
      title: "Ruwanwella Festival",
      description: "Festival at Ruwanwella Maha Vihara",
      image: "Ruwanwella%20Festival%20Sri%20Lanka%20temple",
      highlights: ["Ancient Stupa", "Religious", "Spiritual", "Cultural"],
    },
    {
      id: "lankatilaka-festival",
      title: "Lankatilaka Festival",
      description: "Festival at Lankatilaka Temple",
      image: "Lankatilaka%20Festival%20Sri%20Lanka%20temple",
      highlights: ["Ancient Temple", "Religious", "Spiritual", "Cultural"],
    },
  ],
  "new-year": [
    {
      id: "sinhala-new-year",
      title: "Sinhala New Year",
      description: "Traditional Sinhala New Year celebration",
      image: "Sinhala%20New%20Year%20Sri%20Lanka%20celebration",
      highlights: ["New Year", "Traditional", "Family", "Festive"],
    },
    {
      id: "tamil-new-year",
      title: "Tamil New Year",
      description: "Traditional Tamil New Year celebration",
      image: "Tamil%20New%20Year%20Sri%20Lanka%20celebration",
      highlights: ["New Year", "Traditional", "Family", "Festive"],
    },
    {
      id: "new-year-games",
      title: "New Year Games",
      description: "Traditional games during New Year",
      image: "New%20Year%20games%20Sri%20Lanka%20traditional",
      highlights: ["Traditional Games", "Family", "Fun", "Cultural"],
    },
    {
      id: "new-year-food",
      title: "New Year Food",
      description: "Traditional New Year food preparations",
      image: "New%20Year%20food%20Sri%20Lanka%20traditional",
      highlights: ["Traditional Food", "Family", "Festive", "Delicious"],
    },
  ],
  "harvest-festivals": [
    {
      id: "rice-harvest",
      title: "Rice Harvest Festival",
      description: "Celebration of rice harvest",
      image: "Rice%20harvest%20festival%20Sri%20Lanka",
      highlights: ["Rice Harvest", "Agricultural", "Thanksgiving", "Traditional"],
    },
    {
      id: "coconut-harvest",
      title: "Coconut Harvest Festival",
      description: "Celebration of coconut harvest",
      image: "Coconut%20harvest%20festival%20Sri%20Lanka",
      highlights: ["Coconut Harvest", "Agricultural", "Thanksgiving", "Traditional"],
    },
    {
      id: "tea-harvest",
      title: "Tea Harvest Festival",
      description: "Celebration of tea harvest",
      image: "Tea%20harvest%20festival%20Sri%20Lanka",
      highlights: ["Tea Harvest", "Agricultural", "Thanksgiving", "Traditional"],
    },
    {
      id: "spice-harvest",
      title: "Spice Harvest Festival",
      description: "Celebration of spice harvest",
      image: "Spice%20harvest%20festival%20Sri%20Lanka",
      highlights: ["Spice Harvest", "Agricultural", "Thanksgiving", "Traditional"],
    },
  ],
  "music-festivals": [
    {
      id: "colombo-music-festival",
      title: "Colombo Music Festival",
      description: "Annual music festival in Colombo",
      image: "Colombo%20Music%20Festival%20Sri%20Lanka",
      highlights: ["Music Festival", "Annual", "Performances", "Cultural"],
    },
    {
      id: "kandy-music-festival",
      title: "Kandy Music Festival",
      description: "Music festival in Kandy",
      image: "Kandy%20Music%20Festival%20Sri%20Lanka",
      highlights: ["Music Festival", "Performances", "Cultural", "Traditional"],
    },
    {
      id: "jazz-festival",
      title: "Jazz Festival",
      description: "International jazz music festival",
      image: "Jazz%20Festival%20Sri%20Lanka%20music",
      highlights: ["Jazz Music", "International", "Performances", "Modern"],
    },
    {
      id: "traditional-music-festival",
      title: "Traditional Music Festival",
      description: "Festival celebrating traditional music",
      image: "Traditional%20Music%20Festival%20Sri%20Lanka",
      highlights: ["Traditional Music", "Cultural", "Performances", "Heritage"],
    },
  ],
  "sports-events": [
    {
      id: "cricket-festival",
      title: "Cricket Festival",
      description: "Cricket matches and celebrations",
      image: "Cricket%20Festival%20Sri%20Lanka%20sports",
      highlights: ["Cricket", "Sports", "National Sport", "Exciting"],
    },
    {
      id: "rugby-tournament",
      title: "Rugby Tournament",
      description: "Rugby sports tournament",
      image: "Rugby%20Tournament%20Sri%20Lanka%20sports",
      highlights: ["Rugby", "Tournament", "Sports", "Competitive"],
    },
    {
      id: "athletics-meet",
      title: "Athletics Meet",
      description: "Track and field athletics event",
      image: "Athletics%20Meet%20Sri%20Lanka%20sports",
      highlights: ["Athletics", "Track and Field", "Sports", "Competitive"],
    },
    {
      id: "surfing-competition",
      title: "Surfing Competition",
      description: "International surfing competition",
      image: "Surfing%20Competition%20Sri%20Lanka%20sports",
      highlights: ["Surfing", "Competition", "Beach Sports", "International"],
    },
  ],
  "art-festivals": [
    {
      id: "colombo-art-exhibition",
      title: "Colombo Art Exhibition",
      description: "Annual art exhibition",
      image: "Colombo%20Art%20Exhibition%20Sri%20Lanka",
      highlights: ["Art Exhibition", "Annual", "Visual Arts", "Cultural"],
    },
    {
      id: "sculpture-festival",
      title: "Sculpture Festival",
      description: "Festival celebrating sculpture art",
      image: "Sculpture%20Festival%20Sri%20Lanka%20art",
      highlights: ["Sculpture", "Art Festival", "Cultural", "Creative"],
    },
    {
      id: "photography-festival",
      title: "Photography Festival",
      description: "Photography exhibition and festival",
      image: "Photography%20Festival%20Sri%20Lanka%20art",
      highlights: ["Photography", "Art Festival", "Exhibition", "Creative"],
    },
    {
      id: "craft-festival",
      title: "Craft Festival",
      description: "Festival celebrating traditional crafts",
      image: "Craft%20Festival%20Sri%20Lanka%20art",
      highlights: ["Traditional Crafts", "Art Festival", "Cultural", "Handmade"],
    },
  ],
  "community-celebrations": [
    {
      id: "village-festival",
      title: "Village Festival",
      description: "Local village community celebration",
      image: "Village%20Festival%20Sri%20Lanka%20community",
      highlights: ["Community", "Local", "Festive", "Traditional"],
    },
    {
      id: "neighborhood-fair",
      title: "Neighborhood Fair",
      description: "Local neighborhood fair and celebration",
      image: "Neighborhood%20Fair%20Sri%20Lanka%20community",
      highlights: ["Community", "Fair", "Local", "Family"],
    },
    {
      id: "school-festival",
      title: "School Festival",
      description: "School community celebration",
      image: "School%20Festival%20Sri%20Lanka%20community",
      highlights: ["School", "Community", "Educational", "Family"],
    },
    {
      id: "charity-festival",
      title: "Charity Festival",
      description: "Community charity event and celebration",
      image: "Charity%20Festival%20Sri%20Lanka%20community",
      highlights: ["Charity", "Community", "Giving", "Celebration"],
    },
  ],
}
