"use client"

import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useEffect, useState } from "react"

interface SubCategoryDetailProps {
  title: string
  description: string
  image: string
  content: string
  highlights: string[]
  categoryName: string
  categoryHref: string
}

export default function SubCategoryDetail({
  title,
  description,
  image,
  content,
  highlights,
  categoryName,
  categoryHref,
}: SubCategoryDetailProps) {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-background">
      <Header scrollY={scrollY} />

      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <img src={`/.jpg?height=400&width=1920&query=${image}`} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 flex flex-col justify-center items-start p-8 md:p-16">
          <div className="flex gap-2 mb-4">
            <Link href="/" className="text-white/70 hover:text-white transition-colors">
              Home
            </Link>
            <span className="text-white/70">/</span>
            <Link href={categoryHref} className="text-white/70 hover:text-white transition-colors">
              {categoryName}
            </Link>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-4">{title}</h1>
          <p className="text-white/90 text-lg max-w-2xl">{description}</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-foreground/80 leading-relaxed text-lg">{content}</p>
          </div>

          {/* Highlights */}
          {highlights.length > 0 && (
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-bold mb-8 text-foreground">Key Highlights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="p-6 bg-gradient-to-br from-white to-gray-50 rounded-lg border-l-4 shadow-md"
                    style={{ borderColor: "#F4B41A" }}
                  >
                    <p className="text-foreground/80">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Gallery */}
          <div className="mb-12">
            <h2 className="font-serif text-3xl font-bold mb-8 text-foreground">Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <img
                src={`/.jpg?height=300&width=400&query=${image}`}
                alt={title}
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <img
                src={`/.jpg?height=300&width=400&query=${title} scenic view`}
                alt={`${title} scenic`}
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>

          {/* Back Button */}
          <Link
            href={categoryHref}
            className="inline-block px-8 py-3 bg-primary text-white rounded-lg hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#0E918C" }}
          >
            Back to {categoryName}
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
