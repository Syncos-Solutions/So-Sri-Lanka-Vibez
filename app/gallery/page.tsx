"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { galleryImages } from "@/data/gallery"
import { MasonryGrid } from '@/components/masonry-grid';
import { MasonryItem } from '@/components/ui/grid-item';

export default function GalleryPage() {
  const [scrollY, setScrollY] = useState(0)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const getSizeClasses = (size: string) => {
    switch (size) {
      case "large":
        return "col-span-2 row-span-2"
      case "medium":
        return "col-span-1 row-span-1"
      default:
        return "col-span-1 row-span-1"
    }
  }
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
  { id: 13, imageUrl: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=800&auto=format&fit=crop', title: 'Misty Mountain Valley' },
  { id: 14, imageUrl: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=800&auto=format&fit=crop', title: 'Lakeside Cabin' },
  { id: 15, imageUrl: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=800&auto=format&fit=crop', title: 'Sunlight Through Forest' },
  { id: 16, imageUrl: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=800&auto=format&fit=crop', title: 'Dramatic Mountain Peak' },
  { id: 17, imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop', title: 'Golden Hour on River' },
  { id: 18, imageUrl: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=800&auto=format&fit=crop', title: 'Green Rolling Hills' },
  { id: 19, imageUrl: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=800&auto=format&fit=crop', title: 'Waterfall Oasis' },
  { id: 20, imageUrl: 'https://images.unsplash.com/photo-1439405326854-014607f694d7?q=80&w=800&auto=format&fit=crop', title: 'Crashing Ocean Waves' },
  { id: 21, imageUrl: 'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?q=80&w=800&auto=format&fit=crop', title: 'Beach Sunset' },
  { id: 22, imageUrl: 'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?q=80&w=800&auto=format&fit=crop', title: 'Path in the Woods' },
  { id: 23, imageUrl: 'https://images.unsplash.com/photo-1505144808419-1957a94ca61e?q=80&w=800&auto=format&fit=crop', title: 'Colorful Hot Air Balloons' },
  { id: 24, imageUrl: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=800&auto=format&fit=crop', title: 'Starry Night Sky' },
];


  return (
    <main className="min-h-screen bg-background">
      <Header scrollY={scrollY} />

      {/* Hero Section */}
      <section className="pt-32 pb-8 px-4 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-4">Sri Lanka Gallery</h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Explore the breathtaking beauty of Sri Lanka through our curated collection of stunning photographs
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
          <MasonryGrid items={initialItems} />
        </div>
      </section>

      <Footer />
    </main>
  )
}