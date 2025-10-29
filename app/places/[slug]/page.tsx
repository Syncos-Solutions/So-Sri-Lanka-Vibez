"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

const placeSubCategories: Record<string, any> = {
  "ancient-wonders": {
    title: "Ancient Wonders",
    description: "Explore UNESCO World Heritage Sites and ancient ruins",
    image: "Sigiriya%20Rock%20ancient%20fortress%20Sri%20Lanka",
    subItems: [
      {
        slug: "sigiriya-rock",
        title: "Sigiriya Rock Fortress",
        description: "5th century palace and fortress with stunning views",
        image: "Sigiriya%20Rock%20ancient%20fortress%20Sri%20Lanka",
      },
      {
        slug: "temple-of-tooth",
        title: "Temple of the Tooth",
        description: "Sacred Buddhist temple in Kandy",
        image: "Sri%20Lankan%20temple%20architecture%20sacred",
      },
      {
        slug: "polonnaruwa",
        title: "Polonnaruwa",
        description: "Ancient medieval capital with impressive ruins",
        image: "Sri%20Lanka%20historical%20fort%20colonial%20architecture",
      },
      {
        slug: "anuradhapura",
        title: "Anuradhapura",
        description: "Sacred Buddhist city with ancient stupas",
        image: "Sri%20Lanka%20historical%20fort%20colonial%20architecture",
      },
    ],
  },
  beaches: {
    title: "Beaches",
    description: "Discover pristine sandy shores and coastal paradise",
    image: "Sri%20Lanka%20tropical%20beach%20sunset%20paradise",
    subItems: [
      {
        slug: "mirissa-beach",
        title: "Mirissa Beach",
        description: "Popular for whale watching and sunset views",
        image: "Sri%20Lanka%20tropical%20beach%20sunset%20paradise",
      },
      {
        slug: "unawatuna-beach",
        title: "Unawatuna Beach",
        description: "Vibrant beach with water sports and nightlife",
        image: "Sri%20Lanka%20tropical%20beach%20sunset%20paradise",
      },
      {
        slug: "arugambe-beach",
        title: "Arugambe Beach",
        description: "Surfer's paradise with laid-back vibe",
        image: "Sri%20Lanka%20tropical%20beach%20sunset%20paradise",
      },
      {
        slug: "bentota-beach",
        title: "Bentota Beach",
        description: "Luxury resort destination with water activities",
        image: "Sri%20Lanka%20tropical%20beach%20sunset%20paradise",
      },
    ],
  },
  mountains: {
    title: "Mountains",
    description: "Experience misty peaks and mountain landscapes",
    image: "Sri%20Lanka%20mountain%20range%20scenic%20landscape",
    subItems: [
      {
        slug: "adams-peak",
        title: "Adam's Peak",
        description: "Sacred mountain with pilgrimage trail",
        image: "Sri%20Lanka%20mountain%20range%20scenic%20landscape",
      },
      {
        slug: "ella-rock",
        title: "Ella Rock",
        description: "Popular hiking destination with panoramic views",
        image: "Sri%20Lanka%20mountain%20range%20scenic%20landscape",
      },
      {
        slug: "pidurutalagala",
        title: "Pidurutalagala",
        description: "Highest mountain in Sri Lanka",
        image: "Sri%20Lanka%20mountain%20range%20scenic%20landscape",
      },
      {
        slug: "horton-plains",
        title: "Horton Plains",
        description: "Scenic plateau with hiking trails and World's End",
        image: "Sri%20Lanka%20mountain%20range%20scenic%20landscape",
      },
    ],
  },
  temples: {
    title: "Sacred Temples",
    description: "Visit spiritual and religious landmarks",
    image: "Sri%20Lankan%20temple%20architecture%20sacred",
    subItems: [
      {
        slug: "temple-of-tooth",
        title: "Temple of the Tooth",
        description: "Most sacred Buddhist temple in Kandy",
        image: "Sri%20Lankan%20temple%20architecture%20sacred",
      },
      {
        slug: "ruwanwella",
        title: "Ruwanwella Maha Vihara",
        description: "Ancient Buddhist temple with golden dome",
        image: "Sri%20Lankan%20temple%20architecture%20sacred",
      },
      {
        slug: "kelaniya",
        title: "Kelaniya Raja Maha Vihara",
        description: "Historic temple near Colombo with rich history",
        image: "Sri%20Lankan%20temple%20architecture%20sacred",
      },
      {
        slug: "dambulla",
        title: "Dambulla Cave Temple",
        description: "Ancient rock temple complex with Buddha statues",
        image: "Sri%20Lankan%20temple%20architecture%20sacred",
      },
    ],
  },
  "national-parks": {
    title: "National Parks",
    description: "Encounter wildlife and natural reserves",
    image: "Sri%20Lanka%20national%20park%20wildlife%20safari",
    subItems: [
      {
        slug: "yala-national-park",
        title: "Yala National Park",
        description: "Largest national park with leopards and wildlife",
        image: "Sri%20Lanka%20national%20park%20wildlife%20safari",
      },
      {
        slug: "udawalawe",
        title: "Udawalawe National Park",
        description: "Elephant sanctuary with diverse wildlife",
        image: "Sri%20Lanka%20national%20park%20wildlife%20safari",
      },
      {
        slug: "wilpattu",
        title: "Wilpattu National Park",
        description: "Largest national park with lakes and wildlife",
        image: "Sri%20Lanka%20national%20park%20wildlife%20safari",
      },
      {
        slug: "bundala",
        title: "Bundala National Park",
        description: "Wetland sanctuary for migratory birds",
        image: "Sri%20Lanka%20national%20park%20wildlife%20safari",
      },
    ],
  },
  waterfalls: {
    title: "Waterfalls",
    description: "Marvel at cascading waters and natural beauty",
    image: "Sri%20Lanka%20waterfall%20scenic%20nature",
    subItems: [
      {
        slug: "diyaluma-falls",
        title: "Diyaluma Falls",
        description: "Highest waterfall in Sri Lanka with swimming pools",
        image: "Sri%20Lanka%20waterfall%20scenic%20nature",
      },
      {
        slug: "dunbar-falls",
        title: "Dunbar Falls",
        description: "Scenic waterfall in Kandy district",
        image: "Sri%20Lanka%20waterfall%20scenic%20nature",
      },
      {
        slug: "ramboda-falls",
        title: "Ramboda Falls",
        description: "Beautiful waterfall near Nuwara Eliya",
        image: "Sri%20Lanka%20waterfall%20scenic%20nature",
      },
      {
        slug: "bambarakanda-falls",
        title: "Bambarakanda Falls",
        description: "Impressive multi-tiered waterfall",
        image: "Sri%20Lanka%20waterfall%20scenic%20nature",
      },
    ],
  },
  lakes: {
    title: "Lakes & Reservoirs",
    description: "Relax by serene lakes and water bodies",
    image: "Sri%20Lanka%20lake%20scenic%20water%20landscape",
    subItems: [
      {
        slug: "gregory-lake",
        title: "Gregory Lake",
        description: "Scenic lake in Nuwara Eliya with boating",
        image: "Sri%20Lanka%20lake%20scenic%20water%20landscape",
      },
      {
        slug: "kandy-lake",
        title: "Kandy Lake",
        description: "Historic lake in the heart of Kandy",
        image: "Sri%20Lanka%20lake%20scenic%20water%20landscape",
      },
      {
        slug: "beira-lake",
        title: "Beira Lake",
        description: "Urban lake in Colombo with scenic walks",
        image: "Sri%20Lanka%20lake%20scenic%20water%20landscape",
      },
      {
        slug: "minneriya-reservoir",
        title: "Minneriya Reservoir",
        description: "Important wildlife habitat and scenic views",
        image: "Sri%20Lanka%20lake%20scenic%20water%20landscape",
      },
    ],
  },
  gardens: {
    title: "Botanical Gardens",
    description: "Stroll through lush gardens and green spaces",
    image: "Sri%20Lanka%20botanical%20garden%20flowers",
    subItems: [
      {
        slug: "royal-botanical",
        title: "Royal Botanical Gardens",
        description: "Largest garden in Peradeniya with exotic plants",
        image: "Sri%20Lanka%20botanical%20garden%20flowers",
      },
      {
        slug: "hakgala-botanical",
        title: "Hakgala Botanical Gardens",
        description: "Mountain garden with alpine plants",
        image: "Sri%20Lanka%20botanical%20garden%20flowers",
      },
      {
        slug: "henarathgoda",
        title: "Henarathgoda Botanical Gardens",
        description: "Historic garden near Colombo",
        image: "Sri%20Lanka%20botanical%20garden%20flowers",
      },
      {
        slug: "kandy-flower-garden",
        title: "Kandy Flower Garden",
        description: "Colorful garden with seasonal flowers",
        image: "Sri%20Lanka%20botanical%20garden%20flowers",
      },
    ],
  },
  "historical-sites": {
    title: "Historical Sites",
    description: "Discover colonial architecture and heritage",
    image: "Sri%20Lanka%20historical%20fort%20colonial%20architecture",
    subItems: [
      {
        slug: "galle-fort",
        title: "Galle Fort",
        description: "UNESCO World Heritage Site with colonial architecture",
        image: "Sri%20Lanka%20historical%20fort%20colonial%20architecture",
      },
      {
        slug: "colombo-fort",
        title: "Colombo Fort",
        description: "Historic fort in the capital city",
        image: "Sri%20Lanka%20historical%20fort%20colonial%20architecture",
      },
      {
        slug: "matara-fort",
        title: "Matara Fort",
        description: "Coastal fort with historical significance",
        image: "Sri%20Lanka%20historical%20fort%20colonial%20architecture",
      },
      {
        slug: "nuwara-eliya",
        title: "Nuwara Eliya Colonial Town",
        description: "Victorian-era hill station with colonial buildings",
        image: "Sri%20Lanka%20historical%20fort%20colonial%20architecture",
      },
    ],
  },
  "adventure-spots": {
    title: "Adventure Spots",
    description: "Seek thrills with outdoor activities",
    image: "Sri%20Lanka%20adventure%20hiking%20outdoor%20activities",
    subItems: [
      {
        slug: "ella-rock-climbing",
        title: "Ella Rock Climbing",
        description: "Popular rock climbing destination",
        image: "Sri%20Lanka%20adventure%20hiking%20outdoor%20activities",
      },
      {
        slug: "kitulgala-rafting",
        title: "Kitulgala White-Water Rafting",
        description: "Exciting river adventure with rapids",
        image: "Sri%20Lanka%20adventure%20hiking%20outdoor%20activities",
      },
      {
        slug: "paragliding",
        title: "Paragliding from Ella",
        description: "Aerial views of the landscape",
        image: "Sri%20Lanka%20adventure%20hiking%20outdoor%20activities",
      },
      {
        slug: "surfing",
        title: "Surfing at Arugambe",
        description: "Wave riding on pristine beaches",
        image: "Sri%20Lanka%20adventure%20hiking%20outdoor%20activities",
      },
    ],
  },
}

export default function PlaceSubCategoryPage() {
  const params = useParams()
  const slug = params.slug as string
  const category = placeSubCategories[slug]

  if (!category) {
    return <div>Category not found</div>
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-primary hover:underline">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
            <Link href="/places" className="text-primary hover:underline">
              Places
            </Link>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
            <span className="text-muted-foreground">{category.title}</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{category.title}</h1>
        <p className="text-lg text-muted-foreground">{category.description}</p>
      </div>

      {/* Sub-items Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {category.subItems.map((item: any) => (
            <Link key={item.slug} href={`/places/${slug}/${item.slug}`} className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden">
                  <img
                    src={`/.jpg?height=200&width=300&query=${item.image}`}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2">{item.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
