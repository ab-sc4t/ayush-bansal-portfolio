"use client"

import { Github } from "lucide-react"
import { useState, useRef, useLayoutEffect } from "react"

export function Header() {
  const [activeItem, setActiveItem] = useState("Home")
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0 })

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Tech Stack", href: "#techstack" },
    { name: "Work", href: "#work" },
    { name: "Projects", href: "#project" },
  ]

  const btnRefs = useRef<(HTMLButtonElement | null)[]>([])

  useLayoutEffect(() => {
    const idx = navItems.findIndex(item => item.name === activeItem)
    const btn = btnRefs.current[idx]
    if (btn) {
      setPillStyle({
        left: btn.offsetLeft,
        width: btn.offsetWidth
      })
    }
  }, [activeItem, navItems.length])

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
            {/* Pill */}
            <span
              className="absolute top-0 bottom-0 rounded-full bg-white/18 z-10 transition-all duration-300"
              style={{
                left: pillStyle.left,
                width: pillStyle.width,
                height: "100%",
                boxShadow: "0 0 12px 2px rgba(255,255,255,0.10)",
                backdropFilter: "blur(6px)",
              }}
            />
            <div className="relative z-20 flex items-center">
              {navItems.map((item, i) => (
                <button
                  key={item.name}
                  ref={el => {btnRefs.current[i] = el}}
                  onClick={() => {
                    setActiveItem(item.name)
                    const el = document.querySelector(item.href)
                    if (el) el.scrollIntoView({ behavior: "smooth" })
                  }}
                  className={`relative flex items-center justify-center h-10 px-6 text-base font-semibold transition-colors duration-200 outline-none
                    ${activeItem === item.name ? "text-white" : "text-white/80 hover:text-white"}
                  `}
                  tabIndex={0}
                  style={{
                    zIndex: 30,
                  }}
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
