"use client"

import { useEffect, useState } from "react"

export default function AboutSriLanka() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    const element = document.getElementById("about-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about-section" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div
            className="relative h-96 rounded-lg overflow-hidden shadow-lg"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(-50px)",
              transition: "all 0.8s ease-out",
            }}
          >
            <img src="/sri-lanka-landscape-mountains-tea-plantations.jpg" alt="Sri Lanka landscape" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
          </div>

          {/* Right side - Content */}
          <div
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(50px)",
              transition: "all 0.8s ease-out",
            }}
          >
            <p className="text-accent font-semibold text-lg mb-4" style={{ color: "#F4B41A" }}>
              About Sri Lanka
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-foreground">
              The Pearl of the Indian Ocean
            </h2>

            <div className="space-y-4 text-foreground/80 mb-8">
              <p>
                Sri Lanka, an island nation in South Asia, is renowned for its stunning natural beauty, rich cultural
                heritage, and warm hospitality. With a history spanning over 2,500 years, this island has been a
                crossroads of civilizations and religions.
              </p>
              <p>
                From the ancient rock fortress of Sigiriya to the sacred Temple of the Tooth in Kandy, Sri Lanka is home
                to numerous UNESCO World Heritage Sites. The island's diverse landscapes include pristine beaches, lush
                tea plantations, misty mountains, and tropical rainforests.
              </p>
              <p>
                The vibrant culture of Sri Lanka is reflected in its festivals, traditional arts, and delicious cuisine.
                Whether you're seeking adventure, relaxation, or cultural immersion, Sri Lanka offers an unforgettable
                experience.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white rounded-lg shadow-md">
                <p className="font-serif text-3xl font-bold text-primary" style={{ color: "#0E918C" }}>
                  2500+
                </p>
                <p className="text-sm text-foreground/70 mt-2">Years of History</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-md">
                <p className="font-serif text-3xl font-bold text-primary" style={{ color: "#0E918C" }}>
                  8
                </p>
                <p className="text-sm text-foreground/70 mt-2">UNESCO Sites</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-md">
                <p className="font-serif text-3xl font-bold text-primary" style={{ color: "#0E918C" }}>
                  65K
                </p>
                <p className="text-sm text-foreground/70 mt-2">Sq. Kilometers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
