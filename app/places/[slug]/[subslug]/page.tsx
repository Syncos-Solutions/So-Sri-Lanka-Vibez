"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import { ChevronRight, MapPin, Clock, Users } from "lucide-react"

const itemDetails: Record<string, Record<string, any>> = {
  "ancient-wonders": {
    "sigiriya-rock": {
      title: "Sigiriya Rock Fortress",
      description: "5th century palace and fortress with stunning views",
      image: "Sigiriya%20Rock%20ancient%20fortress%20Sri%20Lanka",
      content: `Sigiriya, also known as the Lion Rock, is one of Sri Lanka's most iconic landmarks. This ancient fortress was built in the 5th century by King Kasyapa and stands 200 meters above the surrounding plains. The site features intricate frescoes, mirror walls, and a palace complex at the summit.`,
      details: {
        location: "Central Province, Matale District",
        bestTime: "December to March",
        visitDuration: "3-4 hours",
        entryFee: "LKR 4,500 (Adults)",
      },
      highlights: [
        "Climb 1,200 steps to the summit",
        "View ancient frescoes and mirror walls",
        "Explore the palace ruins",
        "Panoramic views of the surrounding landscape",
        "UNESCO World Heritage Site",
      ],
    },
    "temple-of-tooth": {
      title: "Temple of the Tooth",
      description: "Sacred Buddhist temple in Kandy",
      image: "Sri%20Lankan%20temple%20architecture%20sacred",
      content: `The Temple of the Tooth, or Sri Dalada Maligawa, is one of the most sacred Buddhist temples in the world. Located in Kandy, it houses the relic of the Buddha's tooth and is a major pilgrimage site for Buddhists worldwide.`,
      details: {
        location: "Kandy, Central Province",
        bestTime: "Year-round",
        visitDuration: "1-2 hours",
        entryFee: "LKR 1,500 (Adults)",
      },
      highlights: [
        "View the sacred tooth relic",
        "Witness daily puja ceremonies",
        "Explore the temple complex",
        "Learn about Buddhist traditions",
        "Attend evening rituals",
      ],
    },
    polonnaruwa: {
      title: "Polonnaruwa",
      description: "Ancient medieval capital with impressive ruins",
      image: "Sri%20Lanka%20historical%20fort%20colonial%20architecture",
      content: `Polonnaruwa was the medieval capital of Sri Lanka and is home to some of the finest examples of ancient Sri Lankan architecture. The site features temples, palaces, and sculptures dating back to the 12th century.`,
      details: {
        location: "North Central Province",
        bestTime: "December to March",
        visitDuration: "3-4 hours",
        entryFee: "LKR 3,500 (Adults)",
      },
      highlights: [
        "Explore ancient temples and palaces",
        "View the Gal Vihara rock carvings",
        "Visit the Royal Palace ruins",
        "See the Rankot Vihara stupa",
        "UNESCO World Heritage Site",
      ],
    },
    anuradhapura: {
      title: "Anuradhapura",
      description: "Sacred Buddhist city with ancient stupas",
      image: "Sri%20Lanka%20historical%20fort%20colonial%20architecture",
      content: `Anuradhapura is one of the oldest continuously inhabited cities in the world and was the capital of Sri Lanka for over 1,400 years. It is home to some of the most important Buddhist sites on the island.`,
      details: {
        location: "North Central Province",
        bestTime: "December to March",
        visitDuration: "Full day",
        entryFee: "LKR 3,500 (Adults)",
      },
      highlights: [
        "Visit the sacred Bodhi Tree",
        "Explore ancient stupas and temples",
        "See the Jetavana Stupa",
        "Visit the Abhayagiri Monastery",
        "UNESCO World Heritage Site",
      ],
    },
  },
  beaches: {
    "mirissa-beach": {
      title: "Mirissa Beach",
      description: "Popular for whale watching and sunset views",
      image: "Sri%20Lanka%20tropical%20beach%20sunset%20paradise",
      content: `Mirissa is one of Sri Lanka's most popular beach destinations, known for its golden sands and vibrant atmosphere. The beach is famous for whale watching tours and stunning sunset views.`,
      details: {
        location: "Southern Province, Matara District",
        bestTime: "November to April",
        visitDuration: "Full day",
        entryFee: "Free",
      },
      highlights: [
        "Whale watching tours",
        "Sunset views",
        "Beach restaurants and bars",
        "Water sports activities",
        "Vibrant beach culture",
      ],
    },
    "unawatuna-beach": {
      title: "Unawatuna Beach",
      description: "Vibrant beach with water sports and nightlife",
      image: "Sri%20Lanka%20tropical%20beach%20sunset%20paradise",
      content: `Unawatuna is a lively beach destination with a crescent-shaped bay, clear waters, and a vibrant atmosphere. It's perfect for swimming, snorkeling, and enjoying the beach culture.`,
      details: {
        location: "Southern Province, Galle District",
        bestTime: "November to April",
        visitDuration: "Full day",
        entryFee: "Free",
      },
      highlights: [
        "Swimming and snorkeling",
        "Beach bars and restaurants",
        "Water sports",
        "Nightlife and entertainment",
        "Close to Galle Fort",
      ],
    },
    "arugambe-beach": {
      title: "Arugambe Beach",
      description: "Surfer's paradise with laid-back vibe",
      image: "Sri%20Lanka%20tropical%20beach%20sunset%20paradise",
      content: `Arugambe is a laid-back beach town known for its excellent surfing conditions and relaxed atmosphere. It's a favorite among backpackers and surfers from around the world.`,
      details: {
        location: "Western Province, Negombo District",
        bestTime: "March to October",
        visitDuration: "Full day",
        entryFee: "Free",
      },
      highlights: [
        "Surfing lessons and rentals",
        "Laid-back beach culture",
        "Budget-friendly accommodations",
        "Beach restaurants",
        "Nearby fishing villages",
      ],
    },
    "bentota-beach": {
      title: "Bentota Beach",
      description: "Luxury resort destination with water activities",
      image: "Sri%20Lanka%20tropical%20beach%20sunset%20paradise",
      content: `Bentota is a upscale beach destination known for its luxury resorts and water sports facilities. The beach offers a more refined atmosphere compared to other beach towns.`,
      details: {
        location: "Western Province, Galle District",
        bestTime: "November to April",
        visitDuration: "Full day",
        entryFee: "Free",
      },
      highlights: [
        "Luxury resorts and spas",
        "Water sports activities",
        "Scenic lagoon",
        "Beach restaurants",
        "Nearby attractions",
      ],
    },
  },
  mountains: {
    "adams-peak": {
      title: "Adam's Peak",
      description: "Sacred mountain with pilgrimage trail",
      image: "Sri%20Lanka%20mountain%20range%20scenic%20landscape",
      content: `Adam's Peak, also known as Sri Pada, is a sacred mountain in Sri Lanka with a pilgrimage trail that attracts thousands of visitors annually. The summit offers breathtaking views and is considered a holy site by multiple religions.`,
      details: {
        location: "Central Province, Ratnapura District",
        bestTime: "December to May",
        visitDuration: "6-8 hours",
        entryFee: "LKR 500",
      },
      highlights: [
        "Climb 5,500 steps to the summit",
        "Sacred footprint at the top",
        "Sunrise views",
        "Pilgrimage experience",
        "Spiritual significance",
      ],
    },
    "ella-rock": {
      title: "Ella Rock",
      description: "Popular hiking destination with panoramic views",
      image: "Sri%20Lanka%20mountain%20range%20scenic%20landscape",
      content: `Ella Rock is a popular hiking destination in the central highlands offering panoramic views of the surrounding valleys and tea plantations. The hike is relatively easy and suitable for most fitness levels.`,
      details: {
        location: "Uva Province, Badulla District",
        bestTime: "December to March",
        visitDuration: "2-3 hours",
        entryFee: "Free",
      },
      highlights: [
        "Easy hiking trail",
        "Panoramic valley views",
        "Tea plantation scenery",
        "Sunrise hikes",
        "Photography opportunities",
      ],
    },
    pidurutalagala: {
      title: "Pidurutalagala",
      description: "Highest mountain in Sri Lanka",
      image: "Sri%20Lanka%20mountain%20range%20scenic%20landscape",
      content: `Pidurutalagala, also known as Pedro, is the highest mountain in Sri Lanka at 2,524 meters. The mountain is located in the central highlands and offers stunning views of the surrounding landscape.`,
      details: {
        location: "Central Province, Nuwara Eliya District",
        bestTime: "December to March",
        visitDuration: "4-5 hours",
        entryFee: "Free",
      },
      highlights: [
        "Highest peak in Sri Lanka",
        "Scenic hiking trails",
        "Panoramic views",
        "Cool mountain climate",
        "Tea plantations",
      ],
    },
    "horton-plains": {
      title: "Horton Plains",
      description: "Scenic plateau with hiking trails and World's End",
      image: "Sri%20Lanka%20mountain%20range%20scenic%20landscape",
      content: `Horton Plains is a scenic plateau in the central highlands known for its hiking trails and the famous "World's End" viewpoint. The area is a UNESCO World Heritage Site and offers stunning natural beauty.`,
      details: {
        location: "Central Province, Nuwara Eliya District",
        bestTime: "December to March",
        visitDuration: "4-5 hours",
        entryFee: "LKR 1,500 (Adults)",
      },
      highlights: [
        "World's End viewpoint",
        "Baker's Falls",
        "Scenic hiking trails",
        "Endemic flora and fauna",
        "UNESCO World Heritage Site",
      ],
    },
  },
}

export default function ItemDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  const subslug = params.subslug as string
  const item = itemDetails[slug]?.[subslug]

  if (!item) {
    return <div>Item not found</div>
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm overflow-x-auto">
            <Link href="/" className="text-primary hover:underline whitespace-nowrap">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 text-muted-foreground flex-shrink-0" />
            <Link href="/places" className="text-primary hover:underline whitespace-nowrap">
              Places
            </Link>
            <ChevronRight className="w-4 h-4 text-muted-foreground flex-shrink-0" />
            <Link href={`/places/${slug}`} className="text-primary hover:underline whitespace-nowrap">
              {slug.replace(/-/g, " ")}
            </Link>
            <ChevronRight className="w-4 h-4 text-muted-foreground flex-shrink-0" />
            <span className="text-muted-foreground whitespace-nowrap">{item.title}</span>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative h-96 bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
        <img
          src={`/.jpg?height=400&width=1200&query=${item.image}`}
          alt={item.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{item.title}</h1>
        <p className="text-lg text-muted-foreground mb-8">{item.description}</p>

        {/* Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <div className="bg-white p-4 rounded-lg border border-border">
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="font-semibold text-foreground">Location</span>
            </div>
            <p className="text-sm text-muted-foreground">{item.details.location}</p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-border">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="w-5 h-5 text-primary" />
              <span className="font-semibold text-foreground">Best Time</span>
            </div>
            <p className="text-sm text-muted-foreground">{item.details.bestTime}</p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-border">
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-5 h-5 text-primary" />
              <span className="font-semibold text-foreground">Duration</span>
            </div>
            <p className="text-sm text-muted-foreground">{item.details.visitDuration}</p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-border">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-semibold text-foreground">Entry Fee</span>
            </div>
            <p className="text-sm text-muted-foreground">{item.details.entryFee}</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg p-8 border border-border mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">About</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">{item.content}</p>

          <h3 className="text-xl font-bold text-foreground mb-4">Highlights</h3>
          <ul className="space-y-2">
            {item.highlights.map((highlight: string, index: number) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">•</span>
                <span className="text-muted-foreground">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Back Button */}
        <Link
          href={`/places/${slug}`}
          className="inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
        >
          Back to {slug.replace(/-/g, " ")}
        </Link>
      </div>
    </div>
  )
}
