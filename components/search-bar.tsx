"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Search, X } from "lucide-react"
import { placeSubcategories, placeDetails } from "@/data/places"
import { foodSubcategories, foodDetails } from "@/data/foods"
import { traditionSubcategories, traditionDetails } from "@/data/traditions"
import { festivalSubcategories, festivalDetails } from "@/data/festivals"
import { hotels } from "@/data/hotels"

interface SearchResult {
  id: string
  title: string
  category: string
  href: string
  description: string
  type: "subcategory" | "item" | "hotel"
}

interface SearchBarProps {
  placeholder?: string
  onSearch?: (query: string) => void
}

export default function SearchBar({ placeholder = "Search places, foods, traditions...", onSearch }: SearchBarProps) {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<SearchResult[]>([])
  const [isOpen, setIsOpen] = useState(false)

  // Build comprehensive search index from all data
  const buildSearchIndex = (): SearchResult[] => {
    const allResults: SearchResult[] = []

    // Add Places
    placeSubcategories.forEach((place) => {
      allResults.push({
        id: `place-${place.id}`,
        title: place.title,
        category: "Places",
        href: `/places/${place.id}`,
        description: place.description,
        type: "subcategory",
      })
    })

    // Add Place Details
    Object.entries(placeDetails).forEach(([categoryId, items]) => {
      items.forEach((item) => {
        allResults.push({
          id: `place-detail-${item.id}`,
          title: item.title,
          category: `Places - ${placeSubcategories.find((p) => p.id === categoryId)?.title || ""}`,
          href: `/places/${categoryId}/${item.id}`,
          description: item.description,
          type: "item",
        })
      })
    })

    // Add Foods
    foodSubcategories.forEach((food) => {
      allResults.push({
        id: `food-${food.id}`,
        title: food.title,
        category: "Foods",
        href: `/foods/${food.id}`,
        description: food.description,
        type: "subcategory",
      })
    })

    // Add Food Details
    Object.entries(foodDetails).forEach(([categoryId, items]) => {
      items.forEach((item) => {
        allResults.push({
          id: `food-detail-${item.id}`,
          title: item.title,
          category: `Foods - ${foodSubcategories.find((f) => f.id === categoryId)?.title || ""}`,
          href: `/foods/${categoryId}/${item.id}`,
          description: item.description,
          type: "item",
        })
      })
    })

    // Add Traditions
    traditionSubcategories.forEach((tradition) => {
      allResults.push({
        id: `tradition-${tradition.id}`,
        title: tradition.title,
        category: "Traditions",
        href: `/traditions/${tradition.id}`,
        description: tradition.description,
        type: "subcategory",
      })
    })

    // Add Tradition Details
    Object.entries(traditionDetails).forEach(([categoryId, items]) => {
      items.forEach((item) => {
        allResults.push({
          id: `tradition-detail-${item.id}`,
          title: item.title,
          category: `Traditions - ${traditionSubcategories.find((t) => t.id === categoryId)?.title || ""}`,
          href: `/traditions/${categoryId}/${item.id}`,
          description: item.description,
          type: "item",
        })
      })
    })

    // Add Festivals
    festivalSubcategories.forEach((festival) => {
      allResults.push({
        id: `festival-${festival.id}`,
        title: festival.title,
        category: "Festivals",
        href: `/festivals/${festival.id}`,
        description: festival.description,
        type: "subcategory",
      })
    })

    // Add Festival Details
    Object.entries(festivalDetails).forEach(([categoryId, items]) => {
      items.forEach((item) => {
        allResults.push({
          id: `festival-detail-${item.id}`,
          title: item.title,
          category: `Festivals - ${festivalSubcategories.find((f) => f.id === categoryId)?.title || ""}`,
          href: `/festivals/${categoryId}/${item.id}`,
          description: item.description,
          type: "item",
        })
      })
    })

    // Add Hotels
    hotels.forEach((hotel) => {
      allResults.push({
        id: `hotel-${hotel.id}`,
        title: hotel.name,
        category: "Hotels",
        href: `/hotels/${hotel.slug}`,
        description: hotel.description,
        type: "hotel",
      })
    })

    return allResults
  }

  const allItems = buildSearchIndex()

  useEffect(() => {
    if (query.trim() === "") {
      setResults([])
      return
    }

    const lowerQuery = query.toLowerCase()
    const filtered = allItems.filter(
      (item) =>
        item.title.toLowerCase().includes(lowerQuery) ||
        item.description.toLowerCase().includes(lowerQuery) ||
        item.category.toLowerCase().includes(lowerQuery),
    )

    setResults(filtered.slice(0, 10))
    onSearch?.(query)
  }, [query, onSearch])

  return (
    <div className="relative w-full max-w-md">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
        <input
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
            setIsOpen(true)
          }}
          onFocus={() => setIsOpen(true)}
          className="w-full pl-10 pr-10 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        />
        {query && (
          <button
            onClick={() => {
              setQuery("")
              setResults([])
              setIsOpen(false)
            }}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {isOpen && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
          {results.map((result) => (
            <Link
              key={result.id}
              href={result.href}
              onClick={() => {
                setQuery("")
                setResults([])
                setIsOpen(false)
              }}
              className="block px-4 py-3 hover:bg-muted border-b border-border last:border-b-0 transition-colors"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground">{result.title}</h4>
                  <p className="text-sm text-muted-foreground">{result.description}</p>
                </div>
                <span className="ml-2 px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded">
                  {result.type === "item" ? "Item" : result.type === "hotel" ? "Hotel" : result.category}
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}

      {isOpen && query && results.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-lg shadow-lg z-50 p-4 text-center text-muted-foreground">
          No results found for "{query}"
        </div>
      )}
    </div>
  )
}
