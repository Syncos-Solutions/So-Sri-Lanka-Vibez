"use client"

const foods = [
  {
    id: 1,
    name: "Kottu Roti",
    description: "Chopped flatbread with curry",
    image: "Kottu%20Roti%20Sri%20Lankan%20street%20food",
    height: "h-64",
  },
  {
    id: 2,
    name: "Lamprais",
    description: "Rice baked in banana leaf",
    image: "Lamprais%20traditional%20Sri%20Lankan%20dish",
    height: "h-80",
  },
  {
    id: 3,
    name: "Hoppers",
    description: "Bowl-shaped pancakes",
    image: "Hoppers%20Sri%20Lankan%20breakfast",
    height: "h-64",
  },
  {
    id: 4,
    name: "Deviled Dishes",
    description: "Spicy stir-fried delicacies",
    image: "Deviled%20dishes%20Sri%20Lankan%20cuisine",
    height: "h-80",
  },
  {
    id: 5,
    name: "Wambatu Curry",
    description: "Eggplant in coconut curry",
    image: "Wambatu%20Curry%20Sri%20Lankan%20vegetable",
    height: "h-64",
  },
  {
    id: 6,
    name: "Jaggery Sweets",
    description: "Traditional palm sugar treats",
    image: "Jaggery%20sweets%20Sri%20Lankan%20dessert",
    height: "h-80",
  },
]

export default function TasteOfTradition() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-16 scroll-fade-in">
          Taste of Tradition
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-max">
          {foods.map((food, index) => (
            <div
              key={food.id}
              className={`scroll-fade-in group cursor-pointer ${food.height}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-full rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <img
                  src={`/.jpg?height=320&width=400&query=${food.image}`}
                  alt={food.name}
                  className="w-full h-full object-cover zoom-on-hover"
                />
                <div
                  className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 flex flex-col justify-end p-6"
                  style={{
                    backgroundColor: "#F4B41A",
                  }}
                >
                  <h3 className="font-serif text-xl font-bold text-accent-foreground">{food.name}</h3>
                  <p className="text-accent-foreground/90 text-sm">{food.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
