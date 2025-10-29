"use client"

import { useRef, useEffect, useState } from "react"

const events = [
  {
    id: 1,
    name: "Kandy Perahera",
    date: "July - August",
    description: "Grand procession with elephants and dancers",
    image: "Kandy%20Perahera%20festival%20elephants",
  },
  {
    id: 2,
    name: "Vesak Festival",
    date: "May",
    description: "Celebration of Buddha's birth and enlightenment",
    image: "Vesak%20Festival%20lanterns%20celebrations",
  },
  {
    id: 3,
    name: "Colombo Carnival",
    date: "February",
    description: "Vibrant street celebrations and performances",
    image: "Colombo%20Carnival%20street%20festival",
  },
  {
    id: 4,
    name: "Nuwara Eliya Festival",
    date: "August",
    description: "Hill country cultural extravaganza",
    image: "Nuwara%20Eliya%20festival%20celebrations",
  },
  {
    id: 5,
    name: "Galle Literary Festival",
    date: "January",
    description: "International literary and cultural event",
    image: "Galle%20Literary%20Festival%20event",
  },
]

export default function CulturalHighlights() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    checkScroll()
    window.addEventListener("resize", checkScroll)
    return () => window.removeEventListener("resize", checkScroll)
  }, [])

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
      setTimeout(checkScroll, 300)
    }
  }

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-16 scroll-fade-in">
          Cultural Highlights
        </h2>

        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-4 scroll-smooth"
            onScroll={checkScroll}
          >
            {events.map((event) => (
              <div key={event.id} className="flex-shrink-0 w-80 group cursor-pointer">
                <div className="relative h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <img
                    src={`/.jpg?height=256&width=320&query=${event.image}`}
                    alt={event.name}
                    className="w-full h-full object-cover zoom-on-hover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                    <h3 className="font-serif text-xl font-bold text-white mb-1">{event.name}</h3>
                    <p className="text-accent font-semibold text-sm mb-2" style={{ color: "#F4B41A" }}>
                      {event.date}
                    </p>
                    <p className="text-white/80 text-sm">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Buttons */}
          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-primary text-white p-2 rounded-full hover:bg-teal-light transition-colors z-10"
              style={{ backgroundColor: "#0E918C" }}
            >
              ←
            </button>
          )}
          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-primary text-white p-2 rounded-full hover:bg-teal-light transition-colors z-10"
              style={{ backgroundColor: "#0E918C" }}
            >
              →
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
