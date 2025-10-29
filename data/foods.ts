export interface FoodSubcategory {
  id: string
  title: string
  description: string
  image: string
}

export interface FoodDetail {
  id: string
  title: string
  description: string
  image: string
  highlights: string[]
}

export const foodSubcategories: FoodSubcategory[] = [
  {
    id: "street-food",
    title: "Street Food",
    description: "Popular quick bites and snacks from Sri Lankan streets",
    image: "Kottu%20Roti%20Sri%20Lankan%20street%20food",
  },
  {
    id: "main-courses",
    title: "Main Courses",
    description: "Hearty and flavorful main dishes",
    image: "Sri%20Lankan%20curry%20traditional%20food",
  },
  {
    id: "desserts",
    title: "Desserts & Sweets",
    description: "Traditional sweet treats and desserts",
    image: "Jaggery%20sweets%20Sri%20Lankan%20dessert",
  },
  {
    id: "beverages",
    title: "Beverages",
    description: "Traditional drinks and refreshments",
    image: "Sri%20Lankan%20tea%20beverage%20traditional",
  },
  {
    id: "seafood",
    title: "Seafood Specialties",
    description: "Fresh seafood dishes from coastal regions",
    image: "Sri%20Lankan%20seafood%20curry%20fish",
  },
  {
    id: "curries",
    title: "Curries",
    description: "Aromatic and spiced curry preparations",
    image: "Sri%20Lankan%20spices%20traditional%20curry%20food",
  },
  {
    id: "breads",
    title: "Breads & Flatbreads",
    description: "Traditional bread varieties",
    image: "Roti%20bread%20Sri%20Lankan%20traditional",
  },
  {
    id: "rice-dishes",
    title: "Rice Dishes",
    description: "Rice-based traditional meals",
    image: "Lamprais%20Sri%20Lankan%20rice%20dish",
  },
  {
    id: "vegetarian",
    title: "Vegetarian Dishes",
    description: "Plant-based traditional cuisine",
    image: "Wambatu%20Curry%20Sri%20Lankan%20vegetable",
  },
  {
    id: "fusion-cuisine",
    title: "Fusion Cuisine",
    description: "Modern takes on traditional flavors",
    image: "Sri%20Lankan%20fusion%20modern%20cuisine",
  },
]

export const foodDetails: Record<string, FoodDetail[]> = {
  "street-food": [
    {
      id: "kottu-roti",
      title: "Kottu Roti",
      description: "Chopped flatbread with vegetables and meat",
      image: "Kottu%20Roti%20Sri%20Lankan%20street%20food",
      highlights: ["Street Food Favorite", "Chopped Flatbread", "Spiced Vegetables", "Quick Meal"],
    },
    {
      id: "short-eats",
      title: "Short Eats",
      description: "Variety of fried snacks and pastries",
      image: "Short%20eats%20Sri%20Lankan%20snacks",
      highlights: ["Fried Snacks", "Pastries", "Quick Bites", "Variety"],
    },
    {
      id: "deviled-dishes",
      title: "Deviled Dishes",
      description: "Spicy stir-fried street food",
      image: "Deviled%20dishes%20Sri%20Lankan%20street%20food",
      highlights: ["Spicy Stir-fry", "Street Food", "Quick Meal", "Flavorful"],
    },
    {
      id: "hoppers",
      title: "Hoppers",
      description: "Bowl-shaped pancakes with curry",
      image: "Hoppers%20Sri%20Lankan%20breakfast",
      highlights: ["Bowl-shaped Pancakes", "Breakfast Favorite", "Curry Filling", "Traditional"],
    },
  ],
  "main-courses": [
    {
      id: "lamprais",
      title: "Lamprais",
      description: "Rice baked in banana leaf with meat",
      image: "Lamprais%20Sri%20Lankan%20rice%20dish",
      highlights: ["Baked Rice", "Banana Leaf", "Meat Filling", "Traditional"],
    },
    {
      id: "biryani",
      title: "Biryani",
      description: "Fragrant rice with spiced meat",
      image: "Biryani%20Sri%20Lankan%20rice%20dish",
      highlights: ["Fragrant Rice", "Spiced Meat", "Aromatic", "Festive Dish"],
    },
    {
      id: "pilau",
      title: "Pilau",
      description: "Rice cooked with meat and spices",
      image: "Pilau%20Sri%20Lankan%20rice%20dish",
      highlights: ["Spiced Rice", "Meat Dish", "Aromatic", "Traditional"],
    },
    {
      id: "chicken-curry",
      title: "Chicken Curry",
      description: "Tender chicken in aromatic curry sauce",
      image: "Chicken%20curry%20Sri%20Lankan%20traditional",
      highlights: ["Tender Chicken", "Aromatic Sauce", "Spiced", "Popular Dish"],
    },
  ],
  desserts: [
    {
      id: "jaggery-sweets",
      title: "Jaggery Sweets",
      description: "Traditional sweets made with jaggery",
      image: "Jaggery%20sweets%20Sri%20Lankan%20dessert",
      highlights: ["Jaggery Based", "Traditional", "Sweet Treats", "Festive"],
    },
    {
      id: "watalappan",
      title: "Watalappan",
      description: "Steamed custard pudding with jaggery",
      image: "Watalappan%20Sri%20Lankan%20dessert",
      highlights: ["Custard Pudding", "Jaggery", "Steamed", "Traditional"],
    },
    {
      id: "dodol",
      title: "Dodol",
      description: "Sticky sweet made with jaggery and flour",
      image: "Dodol%20Sri%20Lankan%20sweet",
      highlights: ["Sticky Sweet", "Jaggery", "Traditional", "Festive"],
    },
    {
      id: "coconut-candy",
      title: "Coconut Candy",
      description: "Sweet coconut confection",
      image: "Coconut%20candy%20Sri%20Lankan%20sweet",
      highlights: ["Coconut Based", "Sweet Treat", "Traditional", "Popular"],
    },
  ],
  beverages: [
    {
      id: "ceylon-tea",
      title: "Ceylon Tea",
      description: "World-famous Sri Lankan black tea",
      image: "Ceylon%20tea%20Sri%20Lanka%20beverage",
      highlights: ["World-famous", "Black Tea", "Aromatic", "Premium Quality"],
    },
    {
      id: "jaggery-tea",
      title: "Jaggery Tea",
      description: "Tea sweetened with jaggery",
      image: "Jaggery%20tea%20Sri%20Lankan%20beverage",
      highlights: ["Jaggery Sweetened", "Traditional", "Warm Drink", "Comforting"],
    },
    {
      id: "king-coconut",
      title: "King Coconut",
      description: "Fresh coconut water from young coconuts",
      image: "King%20coconut%20Sri%20Lanka%20beverage",
      highlights: ["Fresh Coconut Water", "Refreshing", "Natural", "Tropical"],
    },
    {
      id: "toddy",
      title: "Toddy",
      description: "Traditional fermented palm drink",
      image: "Toddy%20Sri%20Lankan%20traditional%20drink",
      highlights: ["Fermented Palm", "Traditional", "Local Drink", "Cultural"],
    },
  ],
  seafood: [
    {
      id: "fish-curry",
      title: "Fish Curry",
      description: "Fresh fish in aromatic curry sauce",
      image: "Fish%20curry%20Sri%20Lankan%20seafood",
      highlights: ["Fresh Fish", "Aromatic Sauce", "Coastal Specialty", "Flavorful"],
    },
    {
      id: "prawn-curry",
      title: "Prawn Curry",
      description: "Succulent prawns in spiced sauce",
      image: "Prawn%20curry%20Sri%20Lankan%20seafood",
      highlights: ["Fresh Prawns", "Spiced Sauce", "Coastal Specialty", "Delicious"],
    },
    {
      id: "crab-curry",
      title: "Crab Curry",
      description: "Tender crab meat in rich curry",
      image: "Crab%20curry%20Sri%20Lankan%20seafood",
      highlights: ["Fresh Crab", "Rich Curry", "Coastal Specialty", "Premium"],
    },
    {
      id: "grilled-fish",
      title: "Grilled Fish",
      description: "Fresh fish grilled with spices",
      image: "Grilled%20fish%20Sri%20Lankan%20seafood",
      highlights: ["Grilled Fresh Fish", "Spiced", "Coastal Specialty", "Healthy"],
    },
  ],
  curries: [
    {
      id: "dhal-curry",
      title: "Dhal Curry",
      description: "Lentil curry with aromatic spices",
      image: "Dhal%20curry%20Sri%20Lankan%20traditional",
      highlights: ["Lentil Based", "Aromatic Spices", "Vegetarian", "Nutritious"],
    },
    {
      id: "vegetable-curry",
      title: "Vegetable Curry",
      description: "Mixed vegetables in spiced sauce",
      image: "Vegetable%20curry%20Sri%20Lankan%20traditional",
      highlights: ["Mixed Vegetables", "Spiced Sauce", "Vegetarian", "Healthy"],
    },
    {
      id: "meat-curry",
      title: "Meat Curry",
      description: "Tender meat in rich curry sauce",
      image: "Meat%20curry%20Sri%20Lankan%20traditional",
      highlights: ["Tender Meat", "Rich Sauce", "Aromatic", "Traditional"],
    },
    {
      id: "jackfruit-curry",
      title: "Jackfruit Curry",
      description: "Young jackfruit in aromatic curry",
      image: "Jackfruit%20curry%20Sri%20Lankan%20traditional",
      highlights: ["Young Jackfruit", "Aromatic Curry", "Unique", "Vegetarian"],
    },
  ],
  breads: [
    {
      id: "roti",
      title: "Roti",
      description: "Traditional flatbread",
      image: "Roti%20bread%20Sri%20Lankan%20traditional",
      highlights: ["Flatbread", "Traditional", "Daily Staple", "Versatile"],
    },
    {
      id: "paratha",
      title: "Paratha",
      description: "Layered flatbread with ghee",
      image: "Paratha%20Sri%20Lankan%20bread",
      highlights: ["Layered Bread", "Ghee", "Flaky", "Traditional"],
    },
    {
      id: "puttu",
      title: "Puttu",
      description: "Steamed cylindrical cake",
      image: "Puttu%20Sri%20Lankan%20bread",
      highlights: ["Steamed Cake", "Cylindrical", "Breakfast", "Traditional"],
    },
    {
      id: "pol-roti",
      title: "Pol Roti",
      description: "Coconut flatbread",
      image: "Pol%20roti%20Sri%20Lankan%20coconut%20bread",
      highlights: ["Coconut Bread", "Flatbread", "Sweet", "Traditional"],
    },
  ],
  "rice-dishes": [
    {
      id: "white-rice",
      title: "White Rice",
      description: "Plain steamed rice",
      image: "White%20rice%20Sri%20Lankan%20staple",
      highlights: ["Staple Food", "Plain Rice", "Daily Meal", "Versatile"],
    },
    {
      id: "yellow-rice",
      title: "Yellow Rice",
      description: "Rice cooked with turmeric",
      image: "Yellow%20rice%20Sri%20Lankan%20turmeric",
      highlights: ["Turmeric Rice", "Golden Color", "Aromatic", "Festive"],
    },
    {
      id: "fried-rice",
      title: "Fried Rice",
      description: "Stir-fried rice with vegetables",
      image: "Fried%20rice%20Sri%20Lankan%20dish",
      highlights: ["Stir-fried", "Vegetables", "Quick Meal", "Popular"],
    },
    {
      id: "rice-and-curry",
      title: "Rice and Curry",
      description: "Rice served with multiple curries",
      image: "Rice%20and%20curry%20Sri%20Lankan%20meal",
      highlights: ["Complete Meal", "Multiple Curries", "Traditional", "Nutritious"],
    },
  ],
  vegetarian: [
    {
      id: "wambatu-curry",
      title: "Wambatu Curry",
      description: "Eggplant curry with spices",
      image: "Wambatu%20Curry%20Sri%20Lankan%20vegetable",
      highlights: ["Eggplant", "Spiced", "Vegetarian", "Flavorful"],
    },
    {
      id: "okra-curry",
      title: "Okra Curry",
      description: "Okra in aromatic curry sauce",
      image: "Okra%20curry%20Sri%20Lankan%20vegetable",
      highlights: ["Okra", "Aromatic", "Vegetarian", "Healthy"],
    },
    {
      id: "bean-curry",
      title: "Bean Curry",
      description: "Mixed beans in spiced sauce",
      image: "Bean%20curry%20Sri%20Lankan%20vegetable",
      highlights: ["Mixed Beans", "Spiced", "Vegetarian", "Nutritious"],
    },
    {
      id: "potato-curry",
      title: "Potato Curry",
      description: "Potatoes in aromatic curry",
      image: "Potato%20curry%20Sri%20Lankan%20vegetable",
      highlights: ["Potatoes", "Aromatic", "Vegetarian", "Popular"],
    },
  ],
  "fusion-cuisine": [
    {
      id: "sri-lankan-pizza",
      title: "Sri Lankan Pizza",
      description: "Pizza with local Sri Lankan toppings",
      image: "Sri%20Lankan%20pizza%20fusion%20cuisine",
      highlights: ["Local Toppings", "Fusion", "Modern", "Creative"],
    },
    {
      id: "spice-burger",
      title: "Spice Burger",
      description: "Burger with Sri Lankan spices",
      image: "Spice%20burger%20Sri%20Lankan%20fusion",
      highlights: ["Sri Lankan Spices", "Burger", "Fusion", "Flavorful"],
    },
    {
      id: "curry-pasta",
      title: "Curry Pasta",
      description: "Pasta with Sri Lankan curry sauce",
      image: "Curry%20pasta%20Sri%20Lankan%20fusion",
      highlights: ["Curry Sauce", "Pasta", "Fusion", "Unique"],
    },
    {
      id: "spiced-sushi",
      title: "Spiced Sushi",
      description: "Sushi with Sri Lankan spice blend",
      image: "Spiced%20sushi%20Sri%20Lankan%20fusion",
      highlights: ["Sushi", "Sri Lankan Spices", "Fusion", "Creative"],
    },
  ],
}
