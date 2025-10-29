"use client"

import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-16 px-4" style={{ backgroundColor: "#0E918C" }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">About</h3>
            <p className="text-white/80 leading-relaxed">
              So Sri Lanka Vibez is your gateway to discovering the vibrant culture, stunning landscapes, and delicious
              cuisine of Sri Lanka.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">Categories</h3>
            <ul className="space-y-2 text-white/80">
              <li>
                <Link href="/places" className="hover:text-accent transition-colors">
                  Places
                </Link>
              </li>
              <li>
                <Link href="/foods" className="hover:text-accent transition-colors">
                  Foods
                </Link>
              </li>
              <li>
                <Link href="/traditions" className="hover:text-accent transition-colors">
                  Traditions
                </Link>
              </li>
              <li>
                <Link href="/festivals" className="hover:text-accent transition-colors">
                  Festivals
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-accent transition-colors"
              >
                f
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-accent transition-colors"
              >
                𝕏
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-accent transition-colors"
              >
                📷
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-accent transition-colors"
              >
                ▶
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-white/60">
          <p>&copy; 2025 So Sri Lanka Vibez. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
