"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

const festivalSubCategories: Record<string, any> = {
  "religious-celebrations": {
    title: "Religious Celebrations",
    description: "Sacred festivals and religious observances",
    image: "Kandy%20Perahera%20festival%20elephants",
    subItems: [
      {
        slug: "vesak-festival",
        title: "Vesak Festival",
        description: "Celebration of Buddha's birth and enlightenment",
        image: "Kandy%20Perahera%20festival%20elephants",
      },
      {
        slug: "kandy-perahera",
        title: "Kandy Perahera",
        description: "Grand procession with decorated elephants",
        image: "Kandy%20Perahera%20festival%20elephants",
      },
      {
        slug: "deepavali",
        title: "Deepavali",
        description: "Hindu festival of lights",
        image: "Kandy%20Perahera%20festival%20elephants",
      },
      {
        slug: "christmas",
        title: "Christmas",
        description: "Christian celebration with local traditions",
        image: "Kandy%20Perahera%20festival%20elephants",
      },
    ],
  },
  "cultural-events": {
    title: "Cultural Events",
    description: "Celebrations of Sri Lankan culture and heritage",
    image: "Sri%20Lankan%20cultural%20festival%20celebration%20dance",
    subItems: [
      {
        slug: "colombo-carnival",
        title: "Colombo Carnival",
        description: "Street celebrations with performances",
        image: "Sri%20Lankan%20cultural%20festival%20celebration%20dance",
      },
      {
        slug: "galle-literary-festival",
        title: "Galle Literary Festival",
        description: "International literary event",
        image: "Sri%20Lankan%20cultural%20festival%20celebration%20dance",
      },
      {
        slug: "nuwara-eliya-festival",
        title: "Nuwara Eliya Festival",
        description: "Hill country cultural extravaganza",
        image: "Sri%20Lankan%20cultural%20festival%20celebration%20dance",
      },
      {
        slug: "arts-festivals",
        title: "Arts Festivals",
        description: "Celebrations of visual and performing arts",
        image: "Sri%20Lankan%20cultural%20festival%20celebration%20dance",
      },
    ],
  },
  "seasonal-festivals": {
    title: "Seasonal Festivals",
    description: "Festivals marking seasons and harvests",
    image: "Sri%20Lanka%20harvest%20festival%20celebration",
    subItems: [
      {
        slug: "thai-pongal",
        title: "Thai Pongal",
        description: "Tamil harvest festival",
        image: "Sri%20Lanka%20harvest%20festival%20celebration",
      },
      {
        slug: "sinhala-new-year",
        title: "Sinhala New Year",
        description: "Spring celebration",
        image: "Sri%20Lanka%20harvest%20festival%20celebration",
      },
      {
        slug: "monsoon-festivals",
        title: "Monsoon Festivals",
        description: "Seasonal celebrations",
        image: "Sri%20Lanka%20harvest%20festival%20celebration",
      },
      {
        slug: "harvest-festivals",
        title: "Harvest Festivals",
        description: "Agricultural abundance celebrations",
        image: "Sri%20Lanka%20harvest%20festival%20celebration",
      },
    ],
  },
  "temple-festivals": {
    title: "Temple Festivals",
    description: "Festivals held at sacred temples",
    image: "Sri%20Lankan%20temple%20festival%20celebration",
    subItems: [
      {
        slug: "temple-peraheras",
        title: "Temple Peraheras",
        description: "Processions with decorated elephants",
        image: "Sri%20Lankan%20temple%20festival%20celebration",
      },
      {
        slug: "vesak-temples",
        title: "Vesak at Temples",
        description: "Buddha's birthday celebrations",
        image: "Sri%20Lankan%20temple%20festival%20celebration",
      },
      {
        slug: "full-moon-festivals",
        title: "Full Moon Festivals",
        description: "Monthly temple observances",
        image: "Sri%20Lankan%20temple%20festival%20celebration",
      },
      {
        slug: "annual-temple-festivals",
        title: "Annual Temple Festivals",
        description: "Year-round temple celebrations",
        image: "Sri%20Lankan%20temple%20festival%20celebration",
      },
    ],
  },
  "new-year": {
    title: "New Year Celebrations",
    description: "Traditional New Year festivities",
    image: "Sri%20Lankan%20New%20Year%20celebration%20traditional",
    subItems: [
      {
        slug: "sinhala-new-year",
        title: "Sinhala New Year",
        description: "April 13-14 celebrations",
        image: "Sri%20Lankan%20New%20Year%20celebration%20traditional",
      },
      {
        slug: "tamil-new-year",
        title: "Tamil New Year",
        description: "April 14 celebrations",
        image: "Sri%20Lankan%20New%20Year%20celebration%20traditional",
      },
      {
        slug: "traditional-games",
        title: "Traditional Games",
        description: "Avurudu games and competitions",
        image: "Sri%20Lankan%20New%20Year%20celebration%20traditional",
      },
      {
        slug: "new-year-feasts",
        title: "New Year Feasts",
        description: "Traditional meal preparations",
        image: "Sri%20Lankan%20New%20Year%20celebration%20traditional",
      },
    ],
  },
  "harvest-festivals": {
    title: "Harvest Festivals",
    description: "Celebrations of agricultural abundance",
    image: "Sri%20Lanka%20harvest%20festival%20agricultural",
    subItems: [
      {
        slug: "rice-harvest",
        title: "Rice Harvest Festival",
        description: "Celebration of rice harvest",
        image: "Sri%20Lanka%20harvest%20festival%20agricultural",
      },
      {
        slug: "fruit-harvest",
        title: "Fruit Harvest Festival",
        description: "Celebration of fruit abundance",
        image: "Sri%20Lanka%20harvest%20festival%20agricultural",
      },
      {
        slug: "vegetable-harvest",
        title: "Vegetable Harvest Festival",
        description: "Agricultural produce celebration",
        image: "Sri%20Lanka%20harvest%20festival%20agricultural",
      },
      {
        slug: "thanksgiving-rituals",
        title: "Thanksgiving Rituals",
        description: "Gratitude ceremonies",
        image: "Sri%20Lanka%20harvest%20festival%20agricultural",
      },
    ],
  },
  "music-festivals": {
    title: "Music Festivals",
    description: "Celebrations of music and performing arts",
    image: "Sri%20Lankan%20music%20festival%20concert",
    subItems: [
      {
        slug: "traditional-music",
        title: "Traditional Music Festivals",
        description: "Classical music celebrations",
        image: "Sri%20Lankan%20music%20festival%20concert",
      },
      {
        slug: "jazz-festivals",
        title: "Jazz Festivals",
        description: "Contemporary jazz performances",
        image: "Sri%20Lankan%20music%20festival%20concert",
      },
      {
        slug: "world-music",
        title: "World Music Festivals",
        description: "International music events",
        image: "Sri%20Lankan%20music%20festival%20concert",
      },
      {
        slug: "concert-series",
        title: "Concert Series",
        description: "Regular music performances",
        image: "Sri%20Lankan%20music%20festival%20concert",
      },
    ],
  },
  "sports-events": {
    title: "Sports Events",
    description: "Traditional and modern sports celebrations",
    image: "Sri%20Lanka%20sports%20event%20festival",
    subItems: [
      {
        slug: "cricket-tournaments",
        title: "Cricket Tournaments",
        description: "National and international cricket",
        image: "Sri%20Lanka%20sports%20event%20festival",
      },
      {
        slug: "traditional-sports",
        title: "Traditional Sports",
        description: "Avurudu games and competitions",
        image: "Sri%20Lanka%20sports%20event%20festival",
      },
      {
        slug: "athletic-competitions",
        title: "Athletic Competitions",
        description: "Track and field events",
        image: "Sri%20Lanka%20sports%20event%20festival",
      },
      {
        slug: "water-sports",
        title: "Water Sports",
        description: "Surfing and water sports festivals",
        image: "Sri%20Lanka%20sports%20event%20festival",
      },
    ],
  },
  "art-festivals": {
    title: "Art Festivals",
    description: "Celebrations of visual and performing arts",
    image: "Sri%20Lankan%20art%20festival%20exhibition",
    subItems: [
      {
        slug: "art-exhibitions",
        title: "Art Exhibitions",
        description: "Visual art showcases",
        image: "Sri%20Lankan%20art%20festival%20exhibition",
      },
      {
        slug: "theater-festivals",
        title: "Theater Festivals",
        description: "Dramatic performances",
        image: "Sri%20Lankan%20art%20festival%20exhibition",
      },
      {
        slug: "dance-festivals",
        title: "Dance Festivals",
        description: "Traditional and contemporary dance",
        image: "Sri%20Lankan%20art%20festival%20exhibition",
      },
      {
        slug: "film-festivals",
        title: "Film Festivals",
        description: "Cinema and documentary screenings",
        image: "Sri%20Lankan%20art%20festival%20exhibition",
      },
    ],
  },
  "community-celebrations": {
    title: "Community Celebrations",
    description: "Local and community-based festivals",
    image: "Sri%20Lankan%20community%20festival%20celebration",
    subItems: [
      {
        slug: "village-festivals",
        title: "Village Festivals",
        description: "Local community celebrations",
        image: "Sri%20Lankan%20community%20festival%20celebration",
      },
      {
        slug: "neighborhood-events",
        title: "Neighborhood Events",
        description: "District-level festivals",
        image: "Sri%20Lankan%20community%20festival%20celebration",
      },
      {
        slug: "school-celebrations",
        title: "School Celebrations",
        description: "Educational institution events",
        image: "Sri%20Lankan%20community%20festival%20celebration",
      },
      {
        slug: "market-festivals",
        title: "Market Festivals",
        description: "Marketplace celebrations",
        image: "Sri%20Lankan%20community%20festival%20celebration",
      },
    ],
  },
}

export default function FestivalSubCategoryPage() {
  const params = useParams()
  const slug = params.slug as string
  const category = festivalSubCategories[slug]

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
            <Link href="/festivals" className="text-primary hover:underline">
              Festivals
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
            <Link key={item.slug} href={`/festivals/${slug}/${item.slug}`} className="group">
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
