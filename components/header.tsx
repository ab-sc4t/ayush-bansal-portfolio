"use client"

import { Github } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [activeItem, setActiveItem] = useState("Home")

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Tech Stack", href: "#techstack" },
    { name: "Work", href: "#work" },
    { name: "Projects", href: "#project" },
  ]

  return (
    <header className="fixed top-0 left-0 w-full z-50 py-2 pointer-events-none">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Left: Ayush Bansal */}
        <div className="flex-1 flex items-center pointer-events-auto">
          <span className="text-white text-xl font-semibold font-sans tracking-wide ml-4 select-none">
            Ayush Bansal
          </span>
        </div>
        {/* Center: Nav */}
        <nav className="relative pointer-events-auto">
          <div className="relative flex items-center px-2 py-0 rounded-full shadow-[0_2px_18px_0_rgba(0,0,0,0.18)] bg-[rgba(44,44,44,0.56)] border border-white/10 backdrop-blur-[10px] min-h-[44px]">
            {/* Glow */}
            <span className="absolute -inset-1 z-0 rounded-full bg-gradient-to-r from-white/5 via-white/10 to-white/5 blur-xl pointer-events-none" />
            <div className="relative z-20 flex items-center">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    setActiveItem(item.name)
                    const el = document.querySelector(item.href)
                    if (el) el.scrollIntoView({ behavior: "smooth" })
                  }}
                  className={`relative flex items-center justify-center h-10 px-6 text-base font-semibold transition-all duration-200 outline-none
                    ${activeItem === item.name 
                      ? "text-white border-b-2 border-white" 
                      : "text-white/80 hover:text-white hover:border-b-2 hover:border-white/50"
                    }
                  `}
                  tabIndex={0}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </nav>
        {/* Right: ⌘ Icon */}
        <div className="flex-1 flex justify-end items-center pointer-events-auto">
        <a href="https://github.com/ab-sc4t" target="_blank" rel="noopener noreferrer">
          <Github className="h-5 w-5" />
        </a>
        </div>
      </div>
    </header>
  )
}
