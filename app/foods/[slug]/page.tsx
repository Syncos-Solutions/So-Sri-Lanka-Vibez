"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

const foodSubCategories: Record<string, any> = {
  "street-food": {
    title: "Street Food",
    description: "Popular quick bites and snacks from Sri Lankan streets",
    image: "Kottu%20Roti%20Sri%20Lankan%20street%20food",
    subItems: [
      {
        slug: "kottu-roti",
        title: "Kottu Roti",
        description: "Chopped flatbread with curry and vegetables",
        image: "Kottu%20Roti%20Sri%20Lankan%20street%20food",
      },
      {
        slug: "lamprais",
        title: "Lamprais",
        description: "Rice baked in banana leaf with meat",
        image: "Lamprais%20Sri%20Lankan%20rice%20dish",
      },
      {
        slug: "hoppers",
        title: "Hoppers",
        description: "Bowl-shaped pancakes with curry",
        image: "Sri%20Lankan%20curry%20traditional%20food",
      },
      {
        slug: "deviled-dishes",
        title: "Deviled Dishes",
        description: "Spicy stir-fried meat or vegetables",
        image: "Sri%20Lankan%20spices%20traditional%20curry%20food",
      },
    ],
  },
  "main-courses": {
    title: "Main Courses",
    description: "Hearty and flavorful main dishes",
    image: "Sri%20Lankan%20curry%20traditional%20food",
    subItems: [
      {
        slug: "chicken-curry",
        title: "Chicken Curry",
        description: "Tender chicken in coconut curry",
        image: "Sri%20Lankan%20curry%20traditional%20food",
      },
      {
        slug: "fish-curry",
        title: "Fish Curry",
        description: "Fresh fish in aromatic spice blend",
        image: "Sri%20Lankan%20seafood%20curry%20fish",
      },
      {
        slug: "beef-curry",
        title: "Beef Curry",
        description: "Slow-cooked beef with traditional spices",
        image: "Sri%20Lankan%20curry%20traditional%20food",
      },
      {
        slug: "biryani",
        title: "Biryani",
        description: "Fragrant rice with meat and spices",
        image: "Lamprais%20Sri%20Lankan%20rice%20dish",
      },
    ],
  },
  desserts: {
    title: "Desserts & Sweets",
    description: "Traditional sweet treats and desserts",
    image: "Jaggery%20sweets%20Sri%20Lankan%20dessert",
    subItems: [
      {
        slug: "jaggery-sweets",
        title: "Jaggery Sweets",
        description: "Palm sugar treats",
        image: "Jaggery%20sweets%20Sri%20Lankan%20dessert",
      },
      {
        slug: "coconut-pudding",
        title: "Coconut Pudding",
        description: "Creamy coconut dessert",
        image: "Jaggery%20sweets%20Sri%20Lankan%20dessert",
      },
      {
        slug: "watalappan",
        title: "Watalappan",
        description: "Steamed custard with jaggery",
        image: "Jaggery%20sweets%20Sri%20Lankan%20dessert",
      },
      {
        slug: "aluwa",
        title: "Aluwa",
        description: "Peanut brittle candy",
        image: "Jaggery%20sweets%20Sri%20Lankan%20dessert",
      },
    ],
  },
  beverages: {
    title: "Beverages",
    description: "Traditional drinks and refreshments",
    image: "Sri%20Lankan%20tea%20beverage%20traditional",
    subItems: [
      {
        slug: "ceylon-tea",
        title: "Ceylon Tea",
        description: "World-renowned black tea",
        image: "Sri%20Lankan%20tea%20beverage%20traditional",
      },
      {
        slug: "jaggery-tea",
        title: "Jaggery Tea",
        description: "Sweet tea with palm sugar",
        image: "Sri%20Lankan%20tea%20beverage%20traditional",
      },
      {
        slug: "lime-juice",
        title: "Lime Juice",
        description: "Refreshing citrus drink",
        image: "Sri%20Lankan%20tea%20beverage%20traditional",
      },
      {
        slug: "herbal-drinks",
        title: "Herbal Drinks",
        description: "Traditional medicinal beverages",
        image: "Sri%20Lankan%20tea%20beverage%20traditional",
      },
    ],
  },
  seafood: {
    title: "Seafood Specialties",
    description: "Fresh seafood dishes from coastal regions",
    image: "Sri%20Lankan%20seafood%20curry%20fish",
    subItems: [
      {
        slug: "fish-curry",
        title: "Fish Curry",
        description: "Fresh fish in coconut curry",
        image: "Sri%20Lankan%20seafood%20curry%20fish",
      },
      {
        slug: "prawn-curry",
        title: "Prawn Curry",
        description: "Succulent prawns with spices",
        image: "Sri%20Lankan%20seafood%20curry%20fish",
      },
      {
        slug: "crab-curry",
        title: "Crab Curry",
        description: "Tender crab meat in rich sauce",
        image: "Sri%20Lankan%20seafood%20curry%20fish",
      },
      {
        slug: "grilled-fish",
        title: "Grilled Fish",
        description: "Fresh fish grilled with spices",
        image: "Sri%20Lankan%20seafood%20curry%20fish",
      },
    ],
  },
  curries: {
    title: "Curries",
    description: "Aromatic and spiced curry preparations",
    image: "Sri%20Lankan%20spices%20traditional%20curry%20food",
    subItems: [
      {
        slug: "red-curry",
        title: "Red Curry",
        description: "Spicy curry with red chili",
        image: "Sri%20Lankan%20spices%20traditional%20curry%20food",
      },
      {
        slug: "yellow-curry",
        title: "Yellow Curry",
        description: "Mild curry with turmeric",
        image: "Sri%20Lankan%20spices%20traditional%20curry%20food",
      },
      {
        slug: "green-curry",
        title: "Green Curry",
        description: "Fresh curry with green chili",
        image: "Sri%20Lankan%20spices%20traditional%20curry%20food",
      },
      {
        slug: "coconut-curry",
        title: "Coconut Curry",
        description: "Rich curry with coconut milk",
        image: "Sri%20Lankan%20spices%20traditional%20curry%20food",
      },
    ],
  },
  breads: {
    title: "Breads & Flatbreads",
    description: "Traditional bread varieties",
    image: "Roti%20bread%20Sri%20Lankan%20traditional",
    subItems: [
      {
        slug: "roti",
        title: "Roti",
        description: "Thin flatbread",
        image: "Roti%20bread%20Sri%20Lankan%20traditional",
      },
      {
        slug: "paratha",
        title: "Paratha",
        description: "Layered flatbread",
        image: "Roti%20bread%20Sri%20Lankan%20traditional",
      },
      {
        slug: "hoppers",
        title: "Hoppers",
        description: "Bowl-shaped bread",
        image: "Roti%20bread%20Sri%20Lankan%20traditional",
      },
      {
        slug: "godamba-roti",
        title: "Godamba Roti",
        description: "Rolled flatbread with filling",
        image: "Roti%20bread%20Sri%20Lankan%20traditional",
      },
    ],
  },
  "rice-dishes": {
    title: "Rice Dishes",
    description: "Rice-based traditional meals",
    image: "Lamprais%20Sri%20Lankan%20rice%20dish",
    subItems: [
      {
        slug: "lamprais",
        title: "Lamprais",
        description: "Rice baked in banana leaf",
        image: "Lamprais%20Sri%20Lankan%20rice%20dish",
      },
      {
        slug: "biryani",
        title: "Biryani",
        description: "Fragrant rice with meat",
        image: "Lamprais%20Sri%20Lankan%20rice%20dish",
      },
      {
        slug: "fried-rice",
        title: "Fried Rice",
        description: "Stir-fried rice with vegetables",
        image: "Lamprais%20Sri%20Lankan%20rice%20dish",
      },
      {
        slug: "yellow-rice",
        title: "Yellow Rice",
        description: "Rice with turmeric",
        image: "Lamprais%20Sri%20Lankan%20rice%20dish",
      },
    ],
  },
  vegetarian: {
    title: "Vegetarian Dishes",
    description: "Plant-based traditional cuisine",
    image: "Wambatu%20Curry%20Sri%20Lankan%20vegetable",
    subItems: [
      {
        slug: "wambatu-curry",
        title: "Wambatu Curry",
        description: "Eggplant in coconut curry",
        image: "Wambatu%20Curry%20Sri%20Lankan%20vegetable",
      },
      {
        slug: "dhal-curry",
        title: "Dhal Curry",
        description: "Lentil curry",
        image: "Wambatu%20Curry%20Sri%20Lankan%20vegetable",
      },
      {
        slug: "vegetable-curry",
        title: "Vegetable Curry",
        description: "Mixed vegetables",
        image: "Wambatu%20Curry%20Sri%20Lankan%20vegetable",
      },
      {
        slug: "okra-fry",
        title: "Okra Fry",
        description: "Crispy fried okra",
        image: "Wambatu%20Curry%20Sri%20Lankan%20vegetable",
      },
    ],
  },
  "fusion-cuisine": {
    title: "Fusion Cuisine",
    description: "Modern takes on traditional flavors",
    image: "Sri%20Lankan%20fusion%20modern%20cuisine",
    subItems: [
      {
        slug: "spiced-burgers",
        title: "Spiced Burgers",
        description: "Traditional spices in modern form",
        image: "Sri%20Lankan%20fusion%20modern%20cuisine",
      },
      {
        slug: "curry-pasta",
        title: "Curry Pasta",
        description: "Fusion of Italian and Sri Lankan",
        image: "Sri%20Lankan%20fusion%20modern%20cuisine",
      },
      {
        slug: "modern-kottu",
        title: "Modern Kottu",
        description: "Contemporary take on street food",
        image: "Sri%20Lankan%20fusion%20modern%20cuisine",
      },
      {
        slug: "spiced-desserts",
        title: "Spiced Desserts",
        description: "Traditional flavors in new forms",
        image: "Sri%20Lankan%20fusion%20modern%20cuisine",
      },
    ],
  },
}

export default function FoodSubCategoryPage() {
  const params = useParams()
  const slug = params.slug as string
  const category = foodSubCategories[slug]

  if (!category) {
    return <div>Category not found</div>
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-primary hover:underline">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
            <Link href="/foods" className="text-primary hover:underline">
              Foods
            </Link>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
            <span className="text-muted-foreground">{category.title}</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{category.title}</h1>
        <p className="text-lg text-muted-foreground">{category.description}</p>
      </div>

      {/* Sub-items Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {category.subItems.map((item: any) => (
            <Link key={item.slug} href={`/foods/${slug}/${item.slug}`} className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden">
                  <img
                    src={`/.jpg?height=200&width=300&query=${item.image}`}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2">{item.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
