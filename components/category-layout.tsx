"use client"

import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useEffect, useState } from "react"

interface SubCategory {
  id: string
  title: string
  description: string
  image: string
  content: string
  highlights: string[]
}

interface CategoryLayoutProps {
  categoryName: string
  categoryTitle: string
  categoryDescription: string
  categoryImage: string
  subcategories: SubCategory[]
  parentHref: string
}

export default function CategoryLayout({
  categoryName,
  categoryTitle,
  categoryDescription,
  categoryImage,
  subcategories,
  parentHref,
}: CategoryLayoutProps) {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
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

  return (
    <main className="min-h-screen bg-background">
      <Header scrollY={scrollY} />

      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <img
          src={`/.jpg?height=400&width=1920&query=${categoryImage}`}
          alt={categoryTitle}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 flex flex-col justify-center items-start p-8 md:p-16">
          <Link href="/" className="text-white/70 hover:text-white mb-4 transition-colors">
            Home
          </Link>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-4">{categoryTitle}</h1>
          <p className="text-white/90 text-lg max-w-2xl">{categoryDescription}</p>
        </div>
      </section>

      {/* Subcategories Grid */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-4 scroll-fade-in">
            Explore {categoryTitle}
          </h2>
          <p className="text-center text-foreground/70 mb-16 scroll-fade-in">
            Discover the diverse aspects of {categoryName.toLowerCase()}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subcategories.map((subcategory, index) => (
              <Link
                key={subcategory.id}
                href={`${parentHref}/${subcategory.id}`}
                className="scroll-fade-in group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-80 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <img
                    src={`/.jpg?height=320&width=400&query=${subcategory.image}`}
                    alt={subcategory.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                    <h3 className="font-serif text-2xl font-bold text-white mb-2">{subcategory.title}</h3>
                    <p className="text-white/90 text-sm line-clamp-2">{subcategory.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
