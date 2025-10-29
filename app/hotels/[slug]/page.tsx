"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Star, MapPin, ChevronLeft, Check } from "lucide-react"

interface HotelDetail {
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
  fullDescription: string
  rooms: number
  guests: number
  features: string[]
}

export default function HotelDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  const [scrollY, setScrollY] = useState(0)

  const hotels: Record<string, HotelDetail> = {
    "sigiriya-luxury-resort": {
      id: 1,
      name: "Sigiriya Luxury Resort",
      location: "Sigiriya, Central Province",
      price: 250,
      rating: 4.8,
      reviews: 342,
      image: "Luxury%20resort%20Sri%20Lanka%20Sigiriya%20mountain%20view",
      amenities: ["WiFi", "Restaurant", "Pool", "Spa", "Gym", "Concierge"],
      description: "Stunning views of Sigiriya Rock with world-class amenities",
      slug: "sigiriya-luxury-resort",
      fullDescription:
        "Experience luxury at its finest with breathtaking views of the iconic Sigiriya Rock. Our resort offers world-class amenities, exceptional service, and authentic Sri Lankan hospitality. Perfect for travelers seeking comfort and adventure.",
      rooms: 45,
      guests: 120,
      features: [
        "Panoramic mountain views",
        "Infinity pool overlooking Sigiriya",
        "Award-winning spa",
        "Fine dining restaurant",
        "Guided cultural tours",
        "Adventure activities",
      ],
    },
    "mirissa-beach-paradise": {
      id: 2,
      name: "Mirissa Beach Paradise",
      location: "Mirissa, Southern Province",
      price: 180,
      rating: 4.6,
      reviews: 289,
      image: "Beach%20resort%20Sri%20Lanka%20Mirissa%20sunset%20ocean",
      amenities: ["WiFi", "Beach Access", "Restaurant", "Water Sports", "Bar", "Yoga"],
      description: "Beachfront paradise with water sports and sunset views",
      slug: "mirissa-beach-paradise",
      fullDescription:
        "Wake up to the sound of waves at our beachfront resort. Enjoy pristine sandy beaches, water sports, and spectacular sunsets. Our friendly staff ensures a memorable tropical getaway.",
      rooms: 38,
      guests: 100,
      features: [
        "Private beach access",
        "Surfing lessons",
        "Whale watching tours",
        "Beach bar",
        "Yoga classes",
        "Sunset dining",
      ],
    },
    "tea-country-estate": {
      id: 3,
      name: "Tea Country Estate",
      location: "Nuwara Eliya, Central Highlands",
      price: 200,
      rating: 4.7,
      reviews: 256,
      image: "Tea%20plantation%20resort%20Sri%20Lanka%20mountain%20lodge",
      amenities: ["WiFi", "Restaurant", "Tea Tours", "Hiking", "Fireplace", "Library"],
      description: "Nestled in tea plantations with scenic mountain views",
      slug: "tea-country-estate",
      fullDescription:
        "Immerse yourself in the lush green tea plantations of Sri Lanka's central highlands. Our estate offers guided tea tours, hiking adventures, and cozy accommodations with stunning mountain vistas.",
      rooms: 32,
      guests: 85,
      features: [
        "Tea plantation tours",
        "Mountain hiking trails",
        "Tea tasting sessions",
        "Fireplace lounge",
        "Local cuisine",
        "Photography tours",
      ],
    },
    "kandy-heritage-hotel": {
      id: 4,
      name: "Kandy Heritage Hotel",
      location: "Kandy, Central Province",
      price: 160,
      rating: 4.5,
      reviews: 198,
      image: "Heritage%20hotel%20Kandy%20Sri%20Lanka%20temple%20view",
      amenities: ["WiFi", "Restaurant", "Cultural Tours", "Spa", "Garden", "Terrace"],
      description: "Historic hotel with views of the Temple of the Tooth",
      slug: "kandy-heritage-hotel",
      fullDescription:
        "Stay in the heart of Kandy's cultural district with views of the sacred Temple of the Tooth. Our heritage hotel blends traditional architecture with modern comfort.",
      rooms: 28,
      guests: 75,
      features: [
        "Temple of the Tooth views",
        "Cultural tours",
        "Traditional spa",
        "Heritage architecture",
        "Local restaurant",
        "Terrace overlooking the lake",
      ],
    },
    "jungle-safari-lodge": {
      id: 5,
      name: "Jungle Safari Lodge",
      location: "Yala, Eastern Province",
      price: 220,
      rating: 4.7,
      reviews: 312,
      image: "Safari%20lodge%20Sri%20Lanka%20wildlife%20jungle%20nature",
      amenities: ["WiFi", "Restaurant", "Safari Tours", "Nature Walks", "Binoculars", "Guide"],
      description: "Adventure lodge with wildlife safari experiences",
      slug: "jungle-safari-lodge",
      fullDescription:
        "Experience the thrill of wildlife safari in Yala National Park. Our lodge offers expert-guided safaris, nature walks, and comfortable accommodations in the heart of the jungle.",
      rooms: 35,
      guests: 95,
      features: [
        "Guided safari tours",
        "Wildlife photography",
        "Jungle trekking",
        "Bird watching",
        "Nature documentation",
        "Campfire experiences",
      ],
    },
    "colombo-city-boutique": {
      id: 6,
      name: "Colombo City Boutique",
      location: "Colombo, Western Province",
      price: 190,
      rating: 4.6,
      reviews: 267,
      image: "Boutique%20hotel%20Colombo%20Sri%20Lanka%20city%20modern",
      amenities: ["WiFi", "Restaurant", "Gym", "Business Center", "Rooftop Bar", "Concierge"],
      description: "Modern boutique hotel in the heart of Colombo",
      slug: "colombo-city-boutique",
      fullDescription:
        "Discover modern luxury in the vibrant heart of Colombo. Our boutique hotel offers stylish rooms, excellent dining, and easy access to the city's best attractions.",
      rooms: 42,
      guests: 110,
      features: [
        "Rooftop bar with city views",
        "Modern gym",
        "Business facilities",
        "City tours",
        "Fine dining",
        "Shopping nearby",
      ],
    },
    "ella-mountain-retreat": {
      id: 7,
      name: "Ella Mountain Retreat",
      location: "Ella, Central Highlands",
      price: 140,
      rating: 4.4,
      reviews: 201,
      image: "Mountain%20retreat%20Ella%20Sri%20Lanka%20hiking%20views",
      amenities: ["WiFi", "Restaurant", "Hiking Tours", "Yoga", "Garden", "Meditation"],
      description: "Cozy retreat perfect for hiking and mountain activities",
      slug: "ella-mountain-retreat",
      fullDescription:
        "Find peace and adventure at our mountain retreat in Ella. Perfect for hikers, yoga enthusiasts, and nature lovers seeking a tranquil escape.",
      rooms: 24,
      guests: 65,
      features: [
        "Hiking trails",
        "Yoga classes",
        "Meditation sessions",
        "Mountain views",
        "Local cuisine",
        "Photography tours",
      ],
    },
    "galle-fort-boutique": {
      id: 8,
      name: "Galle Fort Boutique",
      location: "Galle, Southern Province",
      price: 210,
      rating: 4.8,
      reviews: 334,
      image: "Boutique%20hotel%20Galle%20Fort%20Sri%20Lanka%20historic",
      amenities: ["WiFi", "Restaurant", "Beach Access", "Cultural Tours", "Spa", "Library"],
      description: "Charming hotel within the historic Galle Fort",
      slug: "galle-fort-boutique",
      fullDescription:
        "Stay within the UNESCO World Heritage Galle Fort. Our boutique hotel offers historic charm, modern comfort, and direct access to the fort's cultural attractions.",
      rooms: 30,
      guests: 80,
      features: [
        "Historic fort location",
        "Beach access",
        "Cultural tours",
        "Fort wall walks",
        "Local artisan shops",
        "Sunset views",
      ],
    },
    "arugambe-surfers-haven": {
      id: 9,
      name: "Arugambe Surfer's Haven",
      location: "Arugambe, Western Province",
      price: 120,
      rating: 4.3,
      reviews: 156,
      image: "Surfer%20hotel%20Arugambe%20Sri%20Lanka%20beach%20waves",
      amenities: ["WiFi", "Restaurant", "Surf Lessons", "Beach Bar", "Lounge", "Equipment Rental"],
      description: "Laid-back surfer's paradise with beach vibes",
      slug: "arugambe-surfers-haven",
      fullDescription:
        "Join the surfer community at our laid-back beach lodge. Perfect for beginners and experienced surfers alike, with lessons, equipment rental, and a vibrant social scene.",
      rooms: 20,
      guests: 55,
      features: [
        "Surf lessons",
        "Equipment rental",
        "Beach bar",
        "Social events",
        "Beginner-friendly",
        "Local surf culture",
      ],
    },
    "anuradhapura-ancient-stays": {
      id: 10,
      name: "Anuradhapura Ancient Stays",
      location: "Anuradhapura, North Central Province",
      price: 130,
      rating: 4.5,
      reviews: 189,
      image: "Ancient%20temple%20hotel%20Anuradhapura%20Sri%20Lanka%20historical",
      amenities: ["WiFi", "Restaurant", "Temple Tours", "Cycling", "Garden", "Library"],
      description: "Historic hotel near ancient Buddhist temples",
      slug: "anuradhapura-ancient-stays",
      fullDescription:
        "Explore ancient Buddhist heritage at our historic hotel. Located near sacred temples and archaeological sites, perfect for cultural and spiritual journeys.",
      rooms: 26,
      guests: 70,
      features: [
        "Temple tours",
        "Cycling routes",
        "Archaeological sites",
        "Meditation spaces",
        "Local guides",
        "Cultural experiences",
      ],
    },
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const hotel = hotels[slug]

  if (!hotel) {
    return (
      <main className="min-h-screen bg-background">
        <Header scrollY={scrollY} />
        <div className="pt-32 pb-20 px-4 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Hotel not found</h1>
          <Link href="/hotels" className="text-primary hover:text-primary/80">
            Back to Hotels
          </Link>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <Header scrollY={scrollY} />

      {/* Hero Image */}
      <section className="pt-24 pb-0">
        <div className="relative h-96 overflow-hidden">
          <img
            src={`/.jpg?height=400&width=1200&query=${hotel.image}`}
            alt={hotel.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
      </section>

      {/* Hotel Details */}
      <section className="py-12 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link href="/hotels" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6">
            <ChevronLeft className="w-5 h-5" />
            Back to Hotels
          </Link>

          {/* Header */}
          <div className="mb-8">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-3">{hotel.name}</h1>

            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-lg text-foreground/70">{hotel.location}</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(hotel.rating) ? "fill-accent text-accent" : "text-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
                <span className="font-semibold text-foreground">{hotel.rating}</span>
                <span className="text-muted-foreground">({hotel.reviews} reviews)</span>
              </div>
            </div>

            <div className="text-3xl font-bold text-accent mb-4">
              ${hotel.price} <span className="text-lg text-foreground/70">per night</span>
            </div>
          </div>

          {/* Description */}
          <div className="mb-12">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-4">About</h2>
            <p className="text-lg text-foreground/70 leading-relaxed">{hotel.fullDescription}</p>
          </div>

          {/* Features */}
          <div className="mb-12">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Features & Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {hotel.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg">
                  <Check className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Amenities */}
          <div className="mb-12">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Amenities</h2>
            <div className="flex flex-wrap gap-3">
              {hotel.amenities.map((amenity, index) => (
                <div key={index} className="px-4 py-2 bg-primary/10 text-primary rounded-full font-medium">
                  {amenity}
                </div>
              ))}
            </div>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 bg-card border border-border rounded-lg">
              <h3 className="font-semibold text-foreground mb-2">Rooms</h3>
              <p className="text-3xl font-bold text-primary">{hotel.rooms}</p>
            </div>
            <div className="p-6 bg-card border border-border rounded-lg">
              <h3 className="font-semibold text-foreground mb-2">Guest Capacity</h3>
              <p className="text-3xl font-bold text-primary">{hotel.guests}</p>
            </div>
            <div className="p-6 bg-card border border-border rounded-lg">
              <h3 className="font-semibold text-foreground mb-2">Rating</h3>
              <p className="text-3xl font-bold text-accent">{hotel.rating}/5</p>
            </div>
          </div>

          {/* CTA Button */}
          <button className="w-full md:w-auto px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors text-lg">
            Book Now
          </button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
