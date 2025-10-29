"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import { ChevronRight, Clock, Users, Utensils } from "lucide-react"

const foodItemDetails: Record<string, Record<string, any>> = {
  "street-food": {
    "kottu-roti": {
      title: "Kottu Roti",
      description: "Chopped flatbread with curry and vegetables",
      image: "Kottu%20Roti%20Sri%20Lankan%20street%20food",
      content: `Kottu Roti is one of Sri Lanka's most popular street foods. This dish consists of chopped roti (flatbread) mixed with curry, vegetables, and meat or seafood. It's cooked on a hot griddle with a distinctive chopping sound that gives it its name. The combination of crispy bread, flavorful curry, and fresh ingredients makes it an irresistible snack.`,
      details: {
        prepTime: "10-15 minutes",
        servings: "1-2 people",
        difficulty: "Easy",
        cost: "Budget-friendly",
      },
      highlights: [
        "Crispy chopped roti",
        "Flavorful curry sauce",
        "Fresh vegetables",
        "Meat or seafood options",
        "Perfect street food",
      ],
    },
    lamprais: {
      title: "Lamprais",
      description: "Rice baked in banana leaf with meat",
      image: "Lamprais%20Sri%20Lankan%20rice%20dish",
      content: `Lamprais is a unique Sri Lankan dish that combines rice, meat, and spices baked inside a banana leaf. The banana leaf imparts a subtle flavor to the dish while keeping it moist. This dish is often served at special occasions and celebrations.`,
      details: {
        prepTime: "45 minutes",
        servings: "2-3 people",
        difficulty: "Medium",
        cost: "Moderate",
      },
      highlights: ["Fragrant rice", "Tender meat", "Banana leaf wrapping", "Aromatic spices", "Special occasion dish"],
    },
    hoppers: {
      title: "Hoppers",
      description: "Bowl-shaped pancakes with curry",
      image: "Sri%20Lankan%20curry%20traditional%20food",
      content: `Hoppers are bowl-shaped pancakes made from rice flour and coconut milk. They're crispy on the outside and soft on the inside, perfect for scooping up curry. Often served with a fried egg in the center, hoppers are a popular breakfast or light meal.`,
      details: {
        prepTime: "20 minutes",
        servings: "2-3 people",
        difficulty: "Easy",
        cost: "Budget-friendly",
      },
      highlights: ["Crispy exterior", "Soft interior", "Bowl-shaped", "Fried egg topping", "Perfect with curry"],
    },
    "deviled-dishes": {
      title: "Deviled Dishes",
      description: "Spicy stir-fried meat or vegetables",
      image: "Sri%20Lankan%20spices%20traditional%20curry%20food",
      content: `Deviled dishes are spicy stir-fried preparations of meat or vegetables. The term "deviled" refers to the high level of spiciness and the cooking method. These dishes are quick to prepare and packed with flavor, making them popular street food and home-cooked meals.`,
      details: {
        prepTime: "15 minutes",
        servings: "2-3 people",
        difficulty: "Easy",
        cost: "Budget-friendly",
      },
      highlights: [
        "Highly spiced",
        "Quick cooking",
        "Meat or vegetable options",
        "Stir-fried preparation",
        "Flavorful and aromatic",
      ],
    },
  },
  "main-courses": {
    "chicken-curry": {
      title: "Chicken Curry",
      description: "Tender chicken in coconut curry",
      image: "Sri%20Lankan%20curry%20traditional%20food",
      content: `Chicken Curry is a staple of Sri Lankan cuisine. Tender chicken pieces are cooked in a rich coconut curry sauce with aromatic spices. The slow cooking process allows the flavors to develop fully, creating a delicious and satisfying dish.`,
      details: {
        prepTime: "45 minutes",
        servings: "4 people",
        difficulty: "Easy",
        cost: "Moderate",
      },
      highlights: ["Tender chicken", "Coconut curry sauce", "Aromatic spices", "Rich flavor", "Comfort food"],
    },
    "fish-curry": {
      title: "Fish Curry",
      description: "Fresh fish in aromatic spice blend",
      image: "Sri%20Lankan%20seafood%20curry%20fish",
      content: `Fish Curry showcases Sri Lanka's fresh seafood. Fresh fish is cooked in a flavorful spice blend with coconut milk and local ingredients. The delicate flavor of the fish is enhanced by the aromatic spices, creating a light yet satisfying dish.`,
      details: {
        prepTime: "30 minutes",
        servings: "3-4 people",
        difficulty: "Easy",
        cost: "Moderate",
      },
      highlights: ["Fresh fish", "Aromatic spices", "Coconut milk", "Light and healthy", "Coastal specialty"],
    },
    "beef-curry": {
      title: "Beef Curry",
      description: "Slow-cooked beef with traditional spices",
      image: "Sri%20Lankan%20curry%20traditional%20food",
      content: `Beef Curry is a hearty and flavorful dish made with slow-cooked beef and traditional Sri Lankan spices. The long cooking time ensures the beef becomes tender and absorbs all the flavors of the curry sauce.`,
      details: {
        prepTime: "90 minutes",
        servings: "4-5 people",
        difficulty: "Easy",
        cost: "Moderate",
      },
      highlights: ["Slow-cooked beef", "Tender and flavorful", "Traditional spices", "Rich sauce", "Hearty meal"],
    },
    biryani: {
      title: "Biryani",
      description: "Fragrant rice with meat and spices",
      image: "Lamprais%20Sri%20Lankan%20rice%20dish",
      content: `Biryani is a fragrant rice dish cooked with meat and aromatic spices. Each grain of rice is infused with flavor, creating a complete meal in one dish. This dish is often served at special occasions and celebrations.`,
      details: {
        prepTime: "60 minutes",
        servings: "4-5 people",
        difficulty: "Medium",
        cost: "Moderate",
      },
      highlights: ["Fragrant rice", "Aromatic spices", "Tender meat", "Complete meal", "Special occasion dish"],
    },
  },
}

export default function FoodItemDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  const subslug = params.subslug as string
  const item = foodItemDetails[slug]?.[subslug]

  if (!item) {
    return <div>Item not found</div>
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm overflow-x-auto">
            <Link href="/" className="text-primary hover:underline whitespace-nowrap">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 text-muted-foreground flex-shrink-0" />
            <Link href="/foods" className="text-primary hover:underline whitespace-nowrap">
              Foods
            </Link>
            <ChevronRight className="w-4 h-4 text-muted-foreground flex-shrink-0" />
            <Link href={`/foods/${slug}`} className="text-primary hover:underline whitespace-nowrap">
              {slug.replace(/-/g, " ")}
            </Link>
            <ChevronRight className="w-4 h-4 text-muted-foreground flex-shrink-0" />
            <span className="text-muted-foreground whitespace-nowrap">{item.title}</span>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative h-96 bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
        <img
          src={`/.jpg?height=400&width=1200&query=${item.image}`}
          alt={item.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{item.title}</h1>
        <p className="text-lg text-muted-foreground mb-8">{item.description}</p>

        {/* Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <div className="bg-white p-4 rounded-lg border border-border">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="w-5 h-5 text-primary" />
              <span className="font-semibold text-foreground">Prep Time</span>
            </div>
            <p className="text-sm text-muted-foreground">{item.details.prepTime}</p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-border">
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-5 h-5 text-primary" />
              <span className="font-semibold text-foreground">Servings</span>
            </div>
            <p className="text-sm text-muted-foreground">{item.details.servings}</p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-border">
            <div className="flex items-center gap-2 mb-2">
              <Utensils className="w-5 h-5 text-primary" />
              <span className="font-semibold text-foreground">Difficulty</span>
            </div>
            <p className="text-sm text-muted-foreground">{item.details.difficulty}</p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-border">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-semibold text-foreground">Cost</span>
            </div>
            <p className="text-sm text-muted-foreground">{item.details.cost}</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg p-8 border border-border mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">About</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">{item.content}</p>

          <h3 className="text-xl font-bold text-foreground mb-4">Highlights</h3>
          <ul className="space-y-2">
            {item.highlights.map((highlight: string, index: number) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">•</span>
                <span className="text-muted-foreground">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Back Button */}
        <Link
          href={`/foods/${slug}`}
          className="inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
        >
          Back to {slug.replace(/-/g, " ")}
        </Link>
      </div>
    </div>
  )
}
