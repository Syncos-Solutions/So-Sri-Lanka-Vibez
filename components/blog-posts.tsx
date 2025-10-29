"use client"

const blogPosts = [
  {
    id: 1,
    title: "Hidden Gems of the Central Highlands",
    author: "Sarah Chen",
    excerpt: "Discover the lesser-known trails and viewpoints that make Sri Lanka's highlands truly magical.",
    image: "Central%20Highlands%20Sri%20Lanka%20mountains",
    date: "March 15, 2024",
  },
  {
    id: 2,
    title: "A Culinary Journey Through Colombo",
    author: "Marcus Williams",
    excerpt: "From street food to fine dining, explore the diverse flavors that define Sri Lanka's capital city.",
    image: "Colombo%20street%20food%20market",
    date: "March 10, 2024",
  },
  {
    id: 3,
    title: "Whale Watching in Mirissa: A Complete Guide",
    author: "Emma Rodriguez",
    excerpt: "Everything you need to know about spotting blue whales and sperm whales off the southern coast.",
    image: "Mirissa%20whale%20watching%20ocean",
    date: "March 5, 2024",
  },
  {
    id: 4,
    title: "Tea Plantations and Mountain Views",
    author: "James Mitchell",
    excerpt: "Experience the serene beauty of Nuwara Eliya and the surrounding tea estates.",
    image: "Tea%20plantations%20Nuwara%20Eliya",
    date: "February 28, 2024",
  },
]

export default function BlogPosts() {
  return (
    <section className="py-20 px-4 bg-background" id="blog">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-16 scroll-fade-in">Latest Stories</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={post.id}
              className="scroll-fade-in group cursor-pointer bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={`/.jpg?height=192&width=400&query=${post.image}`}
                  alt={post.title}
                  className="w-full h-full object-cover zoom-on-hover"
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-primary mb-2" style={{ color: "#0E918C" }}>
                  {post.date}
                </p>
                <h3 className="font-serif text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-foreground/70 mb-4 line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-primary" style={{ color: "#0E918C" }}>
                    By {post.author}
                  </span>
                  <span className="text-accent font-semibold" style={{ color: "#F4B41A" }}>
                    Read More →
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
