"use client"

const destinations = [
  {
    id: 1,
    name: "Sigiriya",
    tagline: "Ancient Rock Fortress",
    image: "Sigiriya%20Rock%20ancient%20fortress",
  },
  {
    id: 2,
    name: "Kandy",
    tagline: "Cultural Heart",
    image: "Kandy%20Temple%20of%20Tooth",
  },
  {
    id: 3,
    name: "Mirissa",
    tagline: "Coastal Paradise",
    image: "Mirissa%20beach%20southern%20coast",
  },
  {
    id: 4,
    name: "Ella",
    tagline: "Mountain Serenity",
    image: "Ella%20tea%20plantations%20mountains",
  },
  {
    id: 5,
    name: "Galle",
    tagline: "Historic Fort",
    image: "Galle%20Fort%20historic%20architecture",
  },
  {
    id: 6,
    name: "Nuwara Eliya",
    tagline: "Hill Country Charm",
    image: "Nuwara%20Eliya%20hill%20station",
  },
]

export default function PopularDestinations() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-16 scroll-fade-in">
          Popular Destinations
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <div
              key={destination.id}
              className="scroll-fade-in group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-72 rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <img
                  src={`/.jpg?height=288&width=400&query=${destination.image}`}
                  alt={destination.name}
                  className="w-full h-full object-cover zoom-on-hover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-6">
                  <h3 className="font-serif text-2xl font-bold text-white mb-1">{destination.name}</h3>
                  <p className="text-white/80 text-sm">{destination.tagline}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
