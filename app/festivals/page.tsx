"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Search, X } from "lucide-react"
import { festivalSubcategories } from "@/data/festivals"

export default function FestivalsPage() {
  const [scrollY, setScrollY] = useState(0)
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredSubcategories, setFilteredSubcategories] = useState(festivalSubcategories)

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

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredSubcategories(festivalSubcategories)
    } else {
      const filtered = festivalSubcategories.filter(
        (item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase()),
      )
      setFilteredSubcategories(filtered)
    }
  }, [searchQuery])

  return (
    <main className="min-h-screen bg-background">
      <Header scrollY={scrollY} />

      <section className="relative h-96 overflow-hidden">
        <img
          src="/.jpg?height=400&width=1920&query=Sri%20Lankan%20festival%20celebration%20colorful%20vibrant"
          alt="Sri Lankan Festivals"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 flex flex-col justify-center items-start p-8 md:p-16">
          <Link href="/" className="text-white/70 hover:text-white mb-4 transition-colors">
            Home
          </Link>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-4">Sri Lankan Festivals</h1>
          <p className="text-white/90 text-lg max-w-2xl">
            Celebrate the vibrant and colorful festivals of Sri Lanka throughout the year
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-4 scroll-fade-in">
            Festival Categories
          </h2>
          <p className="text-center text-foreground/70 mb-8 scroll-fade-in">
            Explore different types of festivals celebrated in Sri Lanka
          </p>

          <div className="max-w-md mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <input
                type="text"
                placeholder="Search festivals..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-10 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSubcategories.length > 0 ? (
              filteredSubcategories.map((subcategory, index) => (
                <Link
                  key={subcategory.id}
                  href={`/festivals/${subcategory.id}`}
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
                      <p className="text-white/90 text-sm">{subcategory.description}</p>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-lg text-muted-foreground">No festivals found matching "{searchQuery}"</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
