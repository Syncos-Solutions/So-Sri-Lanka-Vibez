"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

const traditionSubCategories: Record<string, any> = {
  "performing-arts": {
    title: "Performing Arts",
    description: "Traditional dance, music, and theatrical performances",
    image: "Sri%20Lankan%20traditional%20dance%20culture",
    subItems: [
      {
        slug: "kandyan-dance",
        title: "Kandyan Dance",
        description: "Classical dance with intricate movements",
        image: "Sri%20Lankan%20traditional%20dance%20culture",
      },
      {
        slug: "low-country-dance",
        title: "Low Country Dance",
        description: "Coastal region dance form",
        image: "Sri%20Lankan%20traditional%20dance%20culture",
      },
      {
        slug: "traditional-drumming",
        title: "Traditional Drumming",
        description: "Rhythmic percussion performances",
        image: "Sri%20Lankan%20traditional%20dance%20culture",
      },
      {
        slug: "fire-dancing",
        title: "Fire Dancing",
        description: "Spectacular fire performance art",
        image: "Sri%20Lankan%20traditional%20dance%20culture",
      },
    ],
  },
  crafts: {
    title: "Traditional Crafts",
    description: "Handmade arts and crafts passed through generations",
    image: "Sri%20Lankan%20mask%20making%20traditional%20art",
    subItems: [
      {
        slug: "mask-making",
        title: "Mask Making",
        description: "Wooden masks for performances",
        image: "Sri%20Lankan%20mask%20making%20traditional%20art",
      },
      {
        slug: "wood-carving",
        title: "Wood Carving",
        description: "Intricate wooden sculptures",
        image: "Sri%20Lankan%20mask%20making%20traditional%20art",
      },
      {
        slug: "lacquer-work",
        title: "Lacquer Work",
        description: "Decorative lacquered items",
        image: "Sri%20Lankan%20mask%20making%20traditional%20art",
      },
      {
        slug: "brassware",
        title: "Brassware",
        description: "Copper and brass crafted items",
        image: "Sri%20Lankan%20mask%20making%20traditional%20art",
      },
    ],
  },
  textiles: {
    title: "Textiles & Weaving",
    description: "Traditional textile arts and weaving techniques",
    image: "Batik%20weaving%20Sri%20Lankan%20textile%20art",
    subItems: [
      {
        slug: "batik",
        title: "Batik",
        description: "Wax-resist dyeing technique",
        image: "Batik%20weaving%20Sri%20Lankan%20textile%20art",
      },
      {
        slug: "hand-weaving",
        title: "Hand Weaving",
        description: "Traditional loom weaving",
        image: "Batik%20weaving%20Sri%20Lankan%20textile%20art",
      },
      {
        slug: "tie-dye",
        title: "Tie-Dye",
        description: "Traditional tie-dye patterns",
        image: "Batik%20weaving%20Sri%20Lankan%20textile%20art",
      },
      {
        slug: "embroidery",
        title: "Embroidery",
        description: "Intricate embroidered designs",
        image: "Batik%20weaving%20Sri%20Lankan%20textile%20art",
      },
    ],
  },
  pottery: {
    title: "Pottery & Ceramics",
    description: "Ancient pottery techniques and ceramic art",
    image: "Sri%20Lankan%20pottery%20traditional%20craft",
    subItems: [
      {
        slug: "hand-thrown-pottery",
        title: "Hand-Thrown Pottery",
        description: "Traditional wheel pottery",
        image: "Sri%20Lankan%20pottery%20traditional%20craft",
      },
      {
        slug: "decorative-ceramics",
        title: "Decorative Ceramics",
        description: "Artistic ceramic pieces",
        image: "Sri%20Lankan%20pottery%20traditional%20craft",
      },
      {
        slug: "functional-pottery",
        title: "Functional Pottery",
        description: "Everyday pottery items",
        image: "Sri%20Lankan%20pottery%20traditional%20craft",
      },
      {
        slug: "glazed-ceramics",
        title: "Glazed Ceramics",
        description: "Colored and glazed pieces",
        image: "Sri%20Lankan%20pottery%20traditional%20craft",
      },
    ],
  },
  fishing: {
    title: "Traditional Fishing",
    description: "Unique fishing methods and maritime traditions",
    image: "Stilt%20fishing%20Sri%20Lanka%20traditional",
    subItems: [
      {
        slug: "stilt-fishing",
        title: "Stilt Fishing",
        description: "Fishermen balanced on wooden stilts",
        image: "Stilt%20fishing%20Sri%20Lanka%20traditional",
      },
      {
        slug: "net-fishing",
        title: "Net Fishing",
        description: "Traditional net fishing methods",
        image: "Stilt%20fishing%20Sri%20Lanka%20traditional",
      },
      {
        slug: "trap-fishing",
        title: "Trap Fishing",
        description: "Fish trap construction and use",
        image: "Stilt%20fishing%20Sri%20Lanka%20traditional",
      },
      {
        slug: "coracle-fishing",
        title: "Coracle Fishing",
        description: "Small round boat fishing",
        image: "Stilt%20fishing%20Sri%20Lanka%20traditional",
      },
    ],
  },
  medicine: {
    title: "Ayurveda & Medicine",
    description: "Ancient healing practices and traditional medicine",
    image: "Ayurveda%20Sri%20Lanka%20traditional%20medicine",
    subItems: [
      {
        slug: "herbal-treatments",
        title: "Herbal Treatments",
        description: "Natural herb-based remedies",
        image: "Ayurveda%20Sri%20Lanka%20traditional%20medicine",
      },
      {
        slug: "oil-massage",
        title: "Oil Massage",
        description: "Therapeutic massage with oils",
        image: "Ayurveda%20Sri%20Lanka%20traditional%20medicine",
      },
      {
        slug: "detox-treatments",
        title: "Detox Treatments",
        description: "Cleansing and purification",
        image: "Ayurveda%20Sri%20Lanka%20traditional%20medicine",
      },
      {
        slug: "meditation",
        title: "Meditation",
        description: "Mindfulness and spiritual practices",
        image: "Ayurveda%20Sri%20Lanka%20traditional%20medicine",
      },
    ],
  },
  "martial-arts": {
    title: "Martial Arts",
    description: "Traditional combat and martial art forms",
    image: "Sri%20Lankan%20martial%20arts%20traditional%20combat",
    subItems: [
      {
        slug: "angampora",
        title: "Angampora",
        description: "Ancient martial art form",
        image: "Sri%20Lankan%20martial%20arts%20traditional%20combat",
      },
      {
        slug: "adithada",
        title: "Adithada",
        description: "Bare-hand combat technique",
        image: "Sri%20Lankan%20martial%20arts%20traditional%20combat",
      },
      {
        slug: "stick-fighting",
        title: "Stick Fighting",
        description: "Traditional stick combat",
        image: "Sri%20Lankan%20martial%20arts%20traditional%20combat",
      },
      {
        slug: "wrestling",
        title: "Wrestling",
        description: "Traditional grappling techniques",
        image: "Sri%20Lankan%20martial%20arts%20traditional%20combat",
      },
    ],
  },
  rituals: {
    title: "Rituals & Ceremonies",
    description: "Sacred rituals and ceremonial practices",
    image: "Sri%20Lankan%20ritual%20ceremony%20traditional",
    subItems: [
      {
        slug: "religious-ceremonies",
        title: "Religious Ceremonies",
        description: "Buddhist and Hindu rituals",
        image: "Sri%20Lankan%20ritual%20ceremony%20traditional",
      },
      {
        slug: "life-rituals",
        title: "Life Rituals",
        description: "Birth, marriage, and death ceremonies",
        image: "Sri%20Lankan%20ritual%20ceremony%20traditional",
      },
      {
        slug: "seasonal-rituals",
        title: "Seasonal Rituals",
        description: "Harvest and seasonal celebrations",
        image: "Sri%20Lankan%20ritual%20ceremony%20traditional",
      },
      {
        slug: "temple-rituals",
        title: "Temple Rituals",
        description: "Sacred temple ceremonies",
        image: "Sri%20Lankan%20ritual%20ceremony%20traditional",
      },
    ],
  },
  clothing: {
    title: "Traditional Clothing",
    description: "Ethnic dress and traditional garments",
    image: "Sri%20Lankan%20traditional%20clothing%20dress",
    subItems: [
      {
        slug: "sari",
        title: "Sari",
        description: "Traditional women's garment",
        image: "Sri%20Lankan%20traditional%20clothing%20dress",
      },
      {
        slug: "sarong",
        title: "Sarong",
        description: "Traditional men's wrap",
        image: "Sri%20Lankan%20traditional%20clothing%20dress",
      },
      {
        slug: "kandyan-dress",
        title: "Kandyan Dress",
        description: "Formal traditional attire",
        image: "Sri%20Lankan%20traditional%20clothing%20dress",
      },
      {
        slug: "jewelry",
        title: "Jewelry",
        description: "Traditional ornaments and accessories",
        image: "Sri%20Lankan%20traditional%20clothing%20dress",
      },
    ],
  },
  customs: {
    title: "Cultural Customs",
    description: "Social customs and cultural practices",
    image: "Sri%20Lankan%20cultural%20customs%20tradition",
    subItems: [
      {
        slug: "greeting-customs",
        title: "Greeting Customs",
        description: "Traditional ways of greeting",
        image: "Sri%20Lankan%20cultural%20customs%20tradition",
      },
      {
        slug: "hospitality",
        title: "Hospitality Traditions",
        description: "Guest reception practices",
        image: "Sri%20Lankan%20cultural%20customs%20tradition",
      },
      {
        slug: "dining-etiquette",
        title: "Dining Etiquette",
        description: "Traditional meal customs",
        image: "Sri%20Lankan%20cultural%20customs%20tradition",
      },
      {
        slug: "social-hierarchy",
        title: "Social Hierarchy",
        description: "Respect for elders and authority",
        image: "Sri%20Lankan%20cultural%20customs%20tradition",
      },
    ],
  },
}

export default function TraditionSubCategoryPage() {
  const params = useParams()
  const slug = params.slug as string
  const category = traditionSubCategories[slug]

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
            <Link href="/traditions" className="text-primary hover:underline">
              Traditions
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
            <Link key={item.slug} href={`/traditions/${slug}/${item.slug}`} className="group">
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
