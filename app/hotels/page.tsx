"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Star, MapPin, Wifi, Utensils, Waves } from "lucide-react"
import { hotels } from "@/data/hotels"

interface Hotel {
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
}

export default function HotelsPage() {
  const [scrollY, setScrollY] = useState(0)
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredHotels, setFilteredHotels] = useState<Hotel[]>([])

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredHotels(hotels)
    } else {
      const filtered = hotels.filter(
        (hotel) =>
          hotel.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          hotel.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
          hotel.amenities.some((a) => a.toLowerCase().includes(searchQuery.toLowerCase())),
      )
      setFilteredHotels(filtered)
    }
  }, [searchQuery])

  const getAmenityIcon = (amenity: string) => {
    switch (amenity) {
      case "WiFi":
        return <Wifi className="w-4 h-4" />
      case "Restaurant":
        return <Utensils className="w-4 h-4" />
      case "Beach Access":
      case "Water Sports":
        return <Waves className="w-4 h-4" />
      default:
        return <MapPin className="w-4 h-4" />
    }
  }

  return (
    <main className="min-h-screen bg-background">
      <Header scrollY={scrollY} />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-4">Discover Sri Lanka Hotels</h1>
          <p className="text-xl text-foreground/70 mb-8 max-w-2xl">
            Find the perfect accommodation for your Sri Lankan adventure
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl">
            <input
              type="text"
              placeholder="Search hotels by name, location, or amenities..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-3 rounded-lg border border-border bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>
      </section>

      {/* Hotels Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {filteredHotels.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredHotels.map((hotel) => (
                <Link key={hotel.id} href={`/hotels/${hotel.slug}`} className="group">
                  <div className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                    {/* Hotel Image */}
                    <div className="relative h-64 overflow-hidden bg-muted">
                      <img
                        src={`/.jpg?height=256&width=400&query=${hotel.image}`}
                        alt={hotel.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full font-semibold">
                        ${hotel.price}/night
                      </div>
                    </div>

                    {/* Hotel Info */}
                    <div className="p-6">
                      <h3 className="font-serif text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {hotel.name}
                      </h3>

                      {/* Location */}
                      <div className="flex items-center gap-2 text-muted-foreground mb-3">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{hotel.location}</span>
                      </div>

                      {/* Rating */}
                      <div className="flex items-center gap-2 mb-4">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(hotel.rating) ? "fill-accent text-accent" : "text-muted-foreground"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="font-semibold text-foreground">{hotel.rating}</span>
                        <span className="text-muted-foreground text-sm">({hotel.reviews} reviews)</span>
                      </div>

                      {/* Description */}
                      <p className="text-foreground/70 text-sm mb-4">{hotel.description}</p>

                      {/* Amenities */}
                      <div className="flex flex-wrap gap-2">
                        {hotel.amenities.slice(0, 3).map((amenity, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                          >
                            {getAmenityIcon(amenity)}
                            {amenity}
                          </div>
                        ))}
                        {hotel.amenities.length > 3 && (
                          <div className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs font-medium">
                            +{hotel.amenities.length - 3} more
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">No hotels found matching your search.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
