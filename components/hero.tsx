"use client"

interface HeroProps {
  scrollY: number
}

export default function Hero({ scrollY }: HeroProps) {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(/placeholder.svg?height=1080&width=1920&query=Sigiriya%20Rock%20Sri%20Lanka%20scenic%20landscape)",
          transform: `translateY(${scrollY * 0.5}px)`,
          transition: "transform 0.1s ease-out",
        }}
      />

      {/* Ocean Teal Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-teal/40 via-teal/30 to-teal/50"
        style={{ backgroundColor: "rgba(14, 145, 140, 0.4)" }}
      />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-4 animate-fade-in-up text-balance">
          So Sri Lanka Vibez
        </h1>
        <p
          className="text-xl md:text-2xl text-white/90 max-w-2xl animate-fade-in-up text-balance"
          style={{ animationDelay: "0.2s" }}
        >
          Discover the vibrant spirit of Sri Lanka through its breathtaking locations, exquisite foods, and rich
          traditions
        </p>
        <button
          className="mt-8 px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-saffron-light transition-colors animate-fade-in-up"
          style={{ animationDelay: "0.4s", backgroundColor: "#F4B41A", color: "#1a1a1a" }}
        >
          Explore Now
        </button>
      </div>
    </div>
  )
}
