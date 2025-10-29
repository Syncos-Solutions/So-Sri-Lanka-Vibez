"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

interface HeaderProps {
  scrollY: number
}

export default function Header({ scrollY }: HeaderProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show navbar only when scrolling down past 100px
    setIsVisible(scrollY > 100)
  }, [scrollY])

  const navItems = [
    { name: "Places", href: "/places" },
    { name: "Foods", href: "/foods" },
    { name: "Traditions", href: "/traditions" },
    { name: "Festivals", href: "/festivals" },
    { name: "Gallery", href: "/gallery" },
    { name: "Hotels", href: "/hotels" },
  ]

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4"
        >
          <nav className="relative max-w-fit mx-auto rounded-full border border-white/[0.2] bg-black/40 backdrop-blur-xl shadow-2xl">
            {/* Liquid glass gradient overlay */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-50" />
            
            {/* Animated border glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-20 blur-xl animate-pulse" />

            <div className="relative flex items-center gap-2 px-6 py-3">
              {/* Logo */}
              <Link
                href="/"
                className="mr-4 font-serif font-bold text-lg bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent hover:from-purple-400 hover:via-pink-400 hover:to-yellow-400 transition-all duration-500 whitespace-nowrap"
              >
                Sri Lanka Vibez
              </Link>

              {/* Navigation Items with Liquid Glass Effect */}
              {navItems.map((item, idx) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative group px-4 py-2 text-sm font-medium text-white/90 hover:text-white transition-all duration-300"
                >
                  {/* Liquid glass button background */}
                  <span className="absolute inset-0 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Liquid glass shine effect */}
                  <span className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Glow effect */}
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/0 via-purple-400/0 to-pink-400/0 group-hover:from-blue-400/30 group-hover:via-purple-400/30 group-hover:to-pink-400/30 blur-lg transition-all duration-500" />
                  
                  {/* Border shimmer */}
                  <span className="absolute inset-0 rounded-full border border-white/0 group-hover:border-white/30 transition-all duration-300" />
                  
                  <span className="relative z-10">{item.name}</span>
                </Link>
              ))}
            </div>

            {/* Bottom reflection effect */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3/4 h-2 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-sm" />
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  )
}