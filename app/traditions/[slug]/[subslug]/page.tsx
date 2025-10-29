"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import { ChevronRight, BookOpen } from "lucide-react"

const traditionItemDetails: Record<string, Record<string, any>> = {
  "performing-arts": {
    "kandyan-dance": {
      title: "Kandyan Dance",
      description: "Classical dance with intricate movements",
      image: "Sri%20Lankan%20traditional%20dance%20culture",
      content: `Kandyan Dance is one of Sri Lanka's most iconic classical dance forms, originating from the Kandyan Kingdom. This dance is characterized by intricate hip movements, hand gestures, and rhythmic footwork. Dancers wear elaborate costumes and perform to traditional drumming, telling stories of gods, kings, and everyday life.`,
      details: {
        origin: "Kandyan Kingdom, Central Province",
        era: "Ancient tradition, preserved for centuries",
        performers: "Professional and amateur dancers",
        occasions: "Festivals, ceremonies, and performances",
      },
      highlights: [
        "Intricate hip and body movements",
        "Elaborate traditional costumes",
        "Rhythmic footwork and gestures",
        "Storytelling through dance",
        "UNESCO recognized art form",
      ],
    },
    "low-country-dance": {
      title: "Low Country Dance",
      description: "Coastal region dance form",
      image: "Sri%20Lankan%20traditional%20dance%20culture",
      content: `Low Country Dance originates from the coastal regions of Sri Lanka and reflects the vibrant culture of fishing communities. This dance form is more energetic and playful compared to Kandyan dance, featuring faster movements and acrobatic elements.`,
      details: {
        origin: "Coastal regions of Sri Lanka",
        era: "Traditional coastal culture",
        performers: "Community dancers and performers",
        occasions: "Festivals and celebrations",
      },
      highlights: [
        "Energetic and playful movements",
        "Acrobatic elements",
        "Faster rhythm and tempo",
        "Community participation",
        "Coastal cultural expression",
      ],
    },
    "traditional-drumming": {
      title: "Traditional Drumming",
      description: "Rhythmic percussion performances",
      image: "Sri%20Lankan%20traditional%20dance%20culture",
      content: `Traditional Sri Lankan drumming is an essential component of cultural performances and ceremonies. Various drums produce different rhythms and sounds, creating complex polyrhythmic patterns. Drummers are highly skilled musicians who have trained for years to master their craft.`,
      details: {
        origin: "Ancient Sri Lankan tradition",
        era: "Thousands of years old",
        performers: "Professional drummers and musicians",
        occasions: "Festivals, ceremonies, and performances",
      },
      highlights: [
        "Complex polyrhythmic patterns",
        "Various traditional drums",
        "Skilled musicianship",
        "Accompaniment to dance",
        "Cultural significance",
      ],
    },
    "fire-dancing": {
      title: "Fire Dancing",
      description: "Spectacular fire performance art",
      image: "Sri%20Lankan%20traditional%20dance%20culture",
      content: `Fire dancing is a spectacular and daring performance art where dancers perform acrobatic movements while handling fire. This ancient tradition requires years of training and exceptional skill. Fire dancers often perform at festivals and special events, creating mesmerizing displays.`,
      details: {
        origin: "Ancient performance tradition",
        era: "Traditional art form",
        performers: "Highly trained fire dancers",
        occasions: "Festivals and special events",
      },
      highlights: [
        "Acrobatic fire handling",
        "Spectacular visual display",
        "Years of training required",
        "Dangerous and thrilling",
        "Festival performances",
      ],
    },
  },
  crafts: {
    "mask-making": {
      title: "Mask Making",
      description: "Wooden masks for performances",
      image: "Sri%20Lankan%20mask%20making%20traditional%20art",
      content: `Mask making is a traditional craft in Sri Lanka, with masks used in classical dance performances and rituals. Artisans carve wooden masks with intricate details and paint them with vibrant colors. Each mask represents different characters and emotions in traditional stories.`,
      details: {
        origin: "Ancient Sri Lankan tradition",
        material: "Wood, paint, and natural dyes",
        artisans: "Skilled mask makers",
        uses: "Dance performances and rituals",
      },
      highlights: [
        "Intricate wooden carvings",
        "Vibrant traditional colors",
        "Character representation",
        "Ritual significance",
        "Artistic craftsmanship",
      ],
    },
    "wood-carving": {
      title: "Wood Carving",
      description: "Intricate wooden sculptures",
      image: "Sri%20Lankan%20mask%20making%20traditional%20art",
      content: `Wood carving is a highly respected craft in Sri Lanka, with artisans creating intricate sculptures and decorative items. Traditional designs often feature religious motifs, animals, and geometric patterns. These carved pieces are both functional and artistic.`,
      details: {
        origin: "Ancient craft tradition",
        material: "Local and imported woods",
        artisans: "Master wood carvers",
        products: "Sculptures, furniture, and decorations",
      },
      highlights: [
        "Intricate detail work",
        "Religious and cultural motifs",
        "Functional and artistic",
        "Master craftsmanship",
        "Decorative excellence",
      ],
    },
    "lacquer-work": {
      title: "Lacquer Work",
      description: "Decorative lacquered items",
      image: "Sri%20Lankan%20mask%20making%20traditional%20art",
      content: `Lacquer work is a decorative craft where items are coated with lacquer and often embellished with gold leaf or painted designs. This technique creates beautiful, durable, and glossy finishes on wooden items.`,
      details: {
        origin: "Traditional decorative craft",
        material: "Lacquer, gold leaf, and paint",
        artisans: "Lacquer craftspeople",
        products: "Boxes, trays, and decorative items",
      },
      highlights: [
        "Glossy decorative finish",
        "Gold leaf embellishment",
        "Intricate painted designs",
        "Durable and beautiful",
        "Decorative excellence",
      ],
    },
    brassware: {
      title: "Brassware",
      description: "Copper and brass crafted items",
      image: "Sri%20Lankan%20mask%20making%20traditional%20art",
      content: `Brassware crafting involves shaping and decorating copper and brass into functional and decorative items. Artisans use traditional techniques to create intricate designs and patterns on these metal items.`,
      details: {
        origin: "Ancient metalworking tradition",
        material: "Copper and brass",
        artisans: "Metal craftspeople",
        products: "Vessels, decorations, and functional items",
      },
      highlights: [
        "Intricate metal designs",
        "Functional and decorative",
        "Traditional techniques",
        "Durable metalwork",
        "Artistic excellence",
      ],
    },
  },
}

export default function TraditionItemDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  const subslug = params.subslug as string
  const item = traditionItemDetails[slug]?.[subslug]

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
            <Link href="/traditions" className="text-primary hover:underline whitespace-nowrap">
              Traditions
            </Link>
            <ChevronRight className="w-4 h-4 text-muted-foreground flex-shrink-0" />
            <Link href={`/traditions/${slug}`} className="text-primary hover:underline whitespace-nowrap">
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
          {Object.entries(item.details).map(([key, value]) => (
            <div key={key} className="bg-white p-4 rounded-lg border border-border">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="w-5 h-5 text-primary" />
                <span className="font-semibold text-foreground capitalize">{key.replace(/-/g, " ")}</span>
              </div>
              <p className="text-sm text-muted-foreground">{value}</p>
            </div>
          ))}
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
          href={`/traditions/${slug}`}
          className="inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
        >
          Back to {slug.replace(/-/g, " ")}
        </Link>
      </div>
    </div>
  )
}
