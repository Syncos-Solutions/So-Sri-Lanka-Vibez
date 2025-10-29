"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

interface GalleryItem {
  id: number
  title: string
  category: string
  image: string
  href: string
}

interface GalleryGridProps {
  items: GalleryItem[]
}

export default function GalleryGrid({ items }: GalleryGridProps) {
  const [visibleItems, setVisibleItems] = useState<number[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleItems((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.1 },
    )

    document.querySelectorAll(".gallery-item").forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-4 scroll-fade-in">
          Featured Highlights
        </h2>
        <p className="text-center text-foreground/70 mb-16 scroll-fade-in">
          Discover the most captivating experiences across Sri Lanka
        </p>

        {/* Masonry-style grid with different sizes */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-max">
          {items.map((item, index) => {
            // Vary the grid span for different sizes
            const spanClass =
              index === 0 || index === 3
                ? "md:col-span-2 md:row-span-2"
                : index === 1
                  ? "md:col-span-1 md:row-span-2"
                  : "md:col-span-1"

            return (
              <Link
                key={item.id}
                href={item.href}
                className={`gallery-item group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${spanClass}`}
                data-index={index}
              >
                <div
                  className={`relative h-64 ${
                    index === 0 || index === 3 ? "md:h-96" : index === 1 ? "md:h-96" : "md:h-64"
                  } overflow-hidden`}
                  style={{
                    opacity: visibleItems.includes(index) ? 1 : 0,
                    transform: visibleItems.includes(index) ? "translateY(0)" : "translateY(20px)",
                    transition: "all 0.6s ease-out",
                  }}
                >
                  <img
                    src={`/.jpg?height=400&width=400&query=${item.image}`}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-accent font-semibold text-sm mb-2" style={{ color: "#F4B41A" }}>
                      {item.category}
                    </p>
                    <h3 className="font-serif text-2xl font-bold text-white">{item.title}</h3>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
