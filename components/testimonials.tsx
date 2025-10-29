"use client"

import { useEffect, useState } from "react"

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "United States",
      text: "Sri Lanka exceeded all my expectations! The combination of stunning landscapes, warm people, and incredible food made this the best trip of my life.",
      rating: 5,
      image: "woman%20smiling%20portrait%20professional",
    },
    {
      id: 2,
      name: "Marco Rossi",
      location: "Italy",
      text: "From the beaches of Mirissa to the mountains of Nuwara Eliya, every moment was magical. The cultural experiences were truly unforgettable.",
      rating: 5,
      image: "man%20smiling%20portrait%20professional",
    },
    {
      id: 3,
      name: "Yuki Tanaka",
      location: "Japan",
      text: "The hospitality of the Sri Lankan people is unmatched. I felt welcomed everywhere I went. This island is a hidden gem that everyone should visit.",
      rating: 5,
      image: "asian%20woman%20smiling%20portrait",
    },
    {
      id: 4,
      name: "Emma Wilson",
      location: "Australia",
      text: "The food was absolutely delicious! Every meal was an adventure. I especially loved the street food and traditional curries.",
      rating: 5,
      image: "woman%20portrait%20smiling%20outdoor",
    },
  ]

  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [isAutoPlay, testimonials.length])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlay(false)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlay(false)
  }

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-4 scroll-fade-in">Traveler Stories</h2>
        <p className="text-center text-foreground/70 mb-16 scroll-fade-in">
          Hear from travelers who have experienced the magic of Sri Lanka
        </p>

        <div className="relative">
          {/* Testimonial Cards */}
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`absolute inset-0 transition-all duration-700 ${
                index === currentTestimonial
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4 pointer-events-none"
              }`}
            >
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-lg shadow-lg p-8 md:p-12">
                <div className="flex flex-col items-center text-center">
                  {/* Avatar */}
                  <div className="w-20 h-20 rounded-full overflow-hidden mb-6 shadow-md">
                    <img
                      src={`/.jpg?height=80&width=80&query=${testimonial.image}`}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        style={{ color: "#F4B41A" }}
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-lg md:text-xl text-foreground/80 mb-6 italic">"{testimonial.text}"</p>

                  {/* Name and Location */}
                  <h3 className="font-serif text-xl font-bold text-foreground">{testimonial.name}</h3>
                  <p className="text-sm text-foreground/60">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}

          {/* Spacer for height */}
          <div className="h-80 md:h-96" />

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-primary text-white hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#0E918C" }}
              aria-label="Previous testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-primary text-white hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#0E918C" }}
              aria-label="Next testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentTestimonial(index)
                  setIsAutoPlay(false)
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? "bg-primary w-8" : "bg-gray-300 w-2"
                }`}
                style={index === currentTestimonial ? { backgroundColor: "#0E918C" } : {}}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
