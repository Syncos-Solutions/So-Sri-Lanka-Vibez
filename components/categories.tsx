"use client"

const categories = [
  {
    id: 1,
    title: "Places",
    icon: "🏔️",
    description: "Explore stunning locations",
    color: "from-teal to-teal-light",
  },
  {
    id: 2,
    title: "Foods",
    icon: "🍛",
    description: "Taste authentic cuisine",
    color: "from-saffron to-saffron-light",
  },
  {
    id: 3,
    title: "Traditions",
    icon: "🎭",
    description: "Experience rich culture",
    color: "from-green to-green-light",
  },
  {
    id: 4,
    title: "Festivals",
    icon: "🎉",
    description: "Celebrate vibrant events",
    color: "from-teal to-green",
  },
]

export default function Categories() {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-16 scroll-fade-in">
          Explore Sri Lanka
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="scroll-fade-in group cursor-pointer"
              style={{ animationDelay: `${category.id * 0.1}s` }}
            >
              <div className="relative h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src={`/.jpg?height=256&width=256&query=${category.title}%20Sri%20Lanka`}
                  alt={category.title}
                  className="w-full h-full object-cover zoom-on-hover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                  <h3 className="font-serif text-2xl font-bold text-white mb-2">{category.title}</h3>
                  <p className="text-white/90 text-sm">{category.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
