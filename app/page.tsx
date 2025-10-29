"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import HeroSlider from "@/components/hero-slider"
import TestimonialsSection from "@/components/testimonials"
import AboutSriLanka from "@/components/about-sri-lanka"
import GalleryGrid from "@/components/gallery-grid"
import DraggableCardDemo from "@/components/draggable-card-demo-2"
import { MasonryGrid } from '@/components/masonry-grid';
import { MasonryItem } from '@/components/ui/grid-item';
import { VideoText } from '@/components/video-text';
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

export default function Home() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)

      // Trigger fade-in animations for elements
      const elements = document.querySelectorAll(".scroll-fade-in")
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect()
        if (rect.top < window.innerHeight * 0.75) {
          el.classList.add("visible")
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const initialItems: MasonryItem[] = [
  { id: 1, imageUrl: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=800&auto=format&fit=crop', title: 'Misty Mountain Valley' },
  { id: 2, imageUrl: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=800&auto=format&fit=crop', title: 'Lakeside Cabin' },
  { id: 3, imageUrl: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=800&auto=format&fit=crop', title: 'Sunlight Through Forest' },
  { id: 4, imageUrl: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=800&auto=format&fit=crop', title: 'Dramatic Mountain Peak' },
  { id: 5, imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop', title: 'Golden Hour on River' },
  { id: 6, imageUrl: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=800&auto=format&fit=crop', title: 'Green Rolling Hills' },
  { id: 7, imageUrl: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=800&auto=format&fit=crop', title: 'Waterfall Oasis' },
  { id: 8, imageUrl: 'https://images.unsplash.com/photo-1439405326854-014607f694d7?q=80&w=800&auto=format&fit=crop', title: 'Crashing Ocean Waves' },
  { id: 9, imageUrl: 'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?q=80&w=800&auto=format&fit=crop', title: 'Beach Sunset' },
  { id: 10, imageUrl: 'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?q=80&w=800&auto=format&fit=crop', title: 'Path in the Woods' },
  { id: 11, imageUrl: 'https://images.unsplash.com/photo-1505144808419-1957a94ca61e?q=80&w=800&auto=format&fit=crop', title: 'Colorful Hot Air Balloons' },
  { id: 12, imageUrl: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=800&auto=format&fit=crop', title: 'Starry Night Sky' },
];

  const categories = [
    {
      id: 1,
      title: "Places",
      icon: "🏔️",
      description: "Explore stunning locations",
      href: "/places",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Foods",
      icon: "🍛",
      description: "Taste authentic cuisine",
      href: "/foods",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Traditions",
      icon: "🎭",
      description: "Experience rich culture",
      href: "/traditions",
      image: "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 4,
      title: "Festivals",
      icon: "🎉",
      description: "Celebrate vibrant events",
      href: "/festivals",
      image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=800&auto=format&fit=crop",
    },
  ]

  const featuredItems = [
    {
      id: 1,
      title: "Sigiriya",
      category: "Places",
      image: "Sigiriya%20Rock%20ancient%20fortress",
      href: "/places/ancient-wonders",
    },
    {
      id: 2,
      title: "Kottu Roti",
      category: "Foods",
      image: "Kottu%20Roti%20Sri%20Lankan%20street%20food",
      href: "/foods/street-food",
    },
    {
      id: 3,
      title: "Kandy Perahera",
      category: "Festivals",
      image: "Kandy%20Perahera%20festival%20elephants",
      href: "/festivals/religious-celebrations",
    },
    {
      id: 4,
      title: "Traditional Dance",
      category: "Traditions",
      image: "Sri%20Lankan%20traditional%20dance%20culture",
      href: "/traditions/performing-arts",
    },
    {
      id: 5,
      title: "Tea Plantations",
      category: "Places",
      image: "Sri%20Lanka%20tea%20plantations%20green%20hills",
      href: "/places/natural-wonders",
    },
    {
      id: 6,
      title: "Lamprais",
      category: "Foods",
      image: "Lamprais%20Sri%20Lankan%20rice%20dish",
      href: "/foods/main-courses",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header scrollY={scrollY} />

      {/* Text Hover Effect Hero Section */}
  <section className="relative w-full h-screen flex flex-col items-center justify-center ">
  {/* Background Image with Overlay */}
  <div className="absolute inset-0 z-2">
    <img 
      src="/image2.jpg"  
      alt="Background" 
      className="w-full h-full object-cover"
    />
    {/* Light overlay to make text more visible */}
    <div className="absolute inset-0 bg-white/30"></div>
  </div>

  {/* Text Content - with higher z-index */}
  <div className="relative z-10 w-full max-w-7xl mx-auto px-4 h-1/2 flex items-center justify-center">
    <TextHoverEffect text="SRI LANKAN" />
  </div>
  <div className="relative z-10 w-full max-w-7xl mx-auto px-4 h-1/2 flex items-center justify-center -mt-20">
    <TextHoverEffect text="VIBEZ" />
  </div>
</section>

      {/* <HeroSlider /> */}

      <section className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-4 scroll-fade-in">
            Explore Sri Lanka
          </h2>
          <p className="text-center text-foreground/70 mb-16 scroll-fade-in">
            Discover the vibrant spirit of Sri Lanka through its stunning places, delicious foods, rich traditions, and
            colorful festivals
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Link
                key={category.id}
                href={category.href}
                className="scroll-fade-in group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <img
                    src={`/.jpg?height=256&width=256&query=${category.image}`}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-6">
                    <h3 className="font-serif text-2xl font-bold text-white mb-2">{category.title}</h3>
                    <p className="text-white/90 text-sm">{category.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry Grid Section with spacing */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
          <MasonryGrid items={initialItems} />
        </div>
      </section>

      <GalleryGrid items={featuredItems} />

      <DraggableCardDemo />

      <AboutSriLanka />

      <TestimonialsSection />

      <Footer />
    </main>
  )
}