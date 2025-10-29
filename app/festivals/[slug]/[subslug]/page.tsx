"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import { ChevronRight, Calendar, MapPin, Users } from "lucide-react"

const festivalItemDetails: Record<string, Record<string, any>> = {
  "religious-celebrations": {
    "vesak-festival": {
      title: "Vesak Festival",
      description: "Celebration of Buddha's birth and enlightenment",
      image: "Kandy%20Perahera%20festival%20elephants",
      content: `Vesak is the most important festival in the Buddhist calendar, celebrating the birth, enlightenment, and death of Buddha. Throughout Sri Lanka, temples are decorated with colorful lanterns and flags. Devotees gather for prayers, meditation, and acts of charity. The festival typically lasts several days and attracts thousands of pilgrims.`,
      details: {
        date: "May (Full Moon)",
        location: "Throughout Sri Lanka",
        duration: "3-5 days",
        significance: "Most important Buddhist festival",
      },
      highlights: [
        "Colorful lanterns and decorations",
        "Temple prayers and ceremonies",
        "Meditation sessions",
        "Acts of charity and kindness",
        "Processions and celebrations",
      ],
    },
    "kandy-perahera": {
      title: "Kandy Perahera",
      description: "Grand procession with decorated elephants",
      image: "Kandy%20Perahera%20festival%20elephants",
      content: `The Kandy Perahera is one of the world's most spectacular festivals, featuring a grand procession with decorated elephants, dancers, and musicians. The festival honors the sacred tooth relic of Buddha housed in the Temple of the Tooth. The procession takes place over several nights with thousands of participants.`,
      details: {
        date: "July-August",
        location: "Kandy, Central Province",
        duration: "10-14 days",
        significance: "UNESCO Intangible Cultural Heritage",
      },
      highlights: [
        "Decorated elephants",
        "Traditional dancers and musicians",
        "Elaborate costumes",
        "Torch-lit processions",
        "Sacred tooth relic honor",
      ],
    },
    deepavali: {
      title: "Deepavali",
      description: "Hindu festival of lights",
      image: "Kandy%20Perahera%20festival%20elephants",
      content: `Deepavali, also known as Diwali, is the Hindu festival of lights celebrated by Tamil communities in Sri Lanka. Homes and temples are illuminated with oil lamps and colorful lights. The festival symbolizes the victory of light over darkness and good over evil.`,
      details: {
        date: "October-November",
        location: "Throughout Sri Lanka",
        duration: "1-2 days",
        significance: "Hindu festival of lights",
      },
      highlights: [
        "Oil lamps and lights",
        "Colorful decorations",
        "Temple celebrations",
        "Family gatherings",
        "Traditional sweets",
      ],
    },
    christmas: {
      title: "Christmas",
      description: "Christian celebration with local traditions",
      image: "Kandy%20Perahera%20festival%20elephants",
      content: `Christmas is celebrated by Christian communities in Sri Lanka with a blend of Western traditions and local customs. Churches hold special services, and families gather for festive meals. The celebration reflects the multicultural nature of Sri Lankan society.`,
      details: {
        date: "December 25",
        location: "Throughout Sri Lanka",
        duration: "1-2 days",
        significance: "Christian celebration",
      },
      highlights: [
        "Church services",
        "Family celebrations",
        "Festive meals",
        "Decorations and lights",
        "Gift exchanges",
      ],
    },
  },
  "cultural-events": {
    "colombo-carnival": {
      title: "Colombo Carnival",
      description: "Street celebrations with performances",
      image: "Sri%20Lankan%20cultural%20festival%20celebration%20dance",
      content: `The Colombo Carnival is a vibrant street festival featuring performances, parades, and cultural celebrations. The event showcases Sri Lankan music, dance, and art forms. Streets are filled with colorful floats, performers, and enthusiastic crowds.`,
      details: {
        date: "February",
        location: "Colombo, Western Province",
        duration: "2-3 days",
        significance: "Urban cultural celebration",
      },
      highlights: [
        "Street performances",
        "Colorful parades",
        "Cultural showcases",
        "Live music and dance",
        "Community participation",
      ],
    },
    "galle-literary-festival": {
      title: "Galle Literary Festival",
      description: "International literary event",
      image: "Sri%20Lankan%20cultural%20festival%20celebration%20dance",
      content: `The Galle Literary Festival is an international literary event held in the historic Galle Fort. The festival brings together authors, poets, and literary enthusiasts from around the world. It features readings, discussions, and cultural performances.`,
      details: {
        date: "January-February",
        location: "Galle Fort, Southern Province",
        duration: "3-4 days",
        significance: "International literary event",
      },
      highlights: [
        "Author readings",
        "Literary discussions",
        "Book exhibitions",
        "Cultural performances",
        "International participation",
      ],
    },
    "nuwara-eliya-festival": {
      title: "Nuwara Eliya Festival",
      description: "Hill country cultural extravaganza",
      image: "Sri%20Lankan%20cultural%20festival%20celebration%20dance",
      content: `The Nuwara Eliya Festival celebrates the culture and heritage of the central highlands. The festival features traditional music, dance, crafts, and local cuisine. It's a celebration of hill country traditions and community spirit.`,
      details: {
        date: "August",
        location: "Nuwara Eliya, Central Province",
        duration: "3-5 days",
        significance: "Hill country cultural celebration",
      },
      highlights: [
        "Traditional performances",
        "Craft exhibitions",
        "Local cuisine",
        "Cultural showcases",
        "Community celebrations",
      ],
    },
    "arts-festivals": {
      title: "Arts Festivals",
      description: "Celebrations of visual and performing arts",
      image: "Sri%20Lankan%20cultural%20festival%20celebration%20dance",
      content: `Arts festivals throughout Sri Lanka celebrate visual and performing arts. These events feature exhibitions, performances, and workshops showcasing local and international artists.`,
      details: {
        date: "Various throughout year",
        location: "Throughout Sri Lanka",
        duration: "Variable",
        significance: "Artistic and cultural celebration",
      },
      highlights: ["Art exhibitions", "Live performances", "Workshops", "Artist showcases", "Cultural exchange"],
    },
  },
}

export default function FestivalItemDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  const subslug = params.subslug as string
  const item = festivalItemDetails[slug]?.[subslug]

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
            <Link href="/festivals" className="text-primary hover:underline whitespace-nowrap">
              Festivals
            </Link>
            <ChevronRight className="w-4 h-4 text-muted-foreground flex-shrink-0" />
            <Link href={`/festivals/${slug}`} className="text-primary hover:underline whitespace-nowrap">
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
              <Calendar className="w-5 h-5 text-primary" />
              <span className="font-semibold text-foreground">Date</span>
            </div>
            <p className="text-sm text-muted-foreground">{item.details.date}</p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-border">
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="font-semibold text-foreground">Location</span>
            </div>
            <p className="text-sm text-muted-foreground">{item.details.location}</p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-border">
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-5 h-5 text-primary" />
              <span className="font-semibold text-foreground">Duration</span>
            </div>
            <p className="text-sm text-muted-foreground">{item.details.duration}</p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-border">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-semibold text-foreground">Significance</span>
            </div>
            <p className="text-sm text-muted-foreground">{item.details.significance}</p>
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
          href={`/festivals/${slug}`}
          className="inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
        >
          Back to {slug.replace(/-/g, " ")}
        </Link>
      </div>
    </div>
  )
}
