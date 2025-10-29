"use client"

import { useEffect, useState } from "react"

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  const slides = [
    {
      id: 1,
      title: "Welcome to Sri Lanka",
      subtitle: "The Pearl of the Indian Ocean",
      image: "Sri%20Lanka%20tropical%20beach%20sunset%20paradise",
      description: "Discover ancient temples, pristine beaches, and vibrant culture",
    },
    {
      id: 2,
      title: "Ancient Wonders",
      subtitle: "Sigiriya Rock Fortress",
      image: "Sigiriya%20Rock%20ancient%20fortress%20landscape",
      description: "Explore UNESCO World Heritage sites and historical treasures",
    },
    {
      id: 3,
      title: "Culinary Paradise",
      subtitle: "Taste Authentic Flavors",
      image: "Sri%20Lankan%20spices%20traditional%20curry%20food",
      description: "Experience the rich and diverse flavors of Sri Lankan cuisine",
    },
    {
      id: 4,
      title: "Cultural Heritage",
      subtitle: "Living Traditions",
      image: "Sri%20Lankan%20cultural%20festival%20celebration%20dance",
      description: "Immerse yourself in centuries-old customs and celebrations",
    },
  ]

  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlay, slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setIsAutoPlay(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setIsAutoPlay(false)
  }

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={`/.jpg?height=1080&width=1920&query=${slide.image}`}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent flex flex-col justify-center items-start p-8 md:p-16">
            <div className="max-w-2xl animate-fade-in-up">
              <p className="text-accent font-semibold text-lg md:text-xl mb-4" style={{ color: "#F4B41A" }}>
                {slide.subtitle}
              </p>
              <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">{slide.title}</h1>
              <p className="text-white/90 text-lg md:text-xl mb-8 max-w-xl">{slide.description}</p>
              <button
                className="px-8 py-3 bg-accent text-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "#F4B41A" }}
              >
                Explore Now
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all duration-300"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all duration-300"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentSlide(index)
              setIsAutoPlay(false)
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-accent w-8" : "bg-white/50 w-2"
            }`}
            style={index === currentSlide ? { backgroundColor: "#F4B41A" } : {}}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
