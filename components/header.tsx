"use client"

import { Github, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"

export function Header() {
  const [activeItem, setActiveItem] = useState("Home")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Tech Stack", href: "#techstack" },
    { name: "Work", href: "#work" },
    { name: "Projects", href: "#project" },
  ]

  // Scroll spy functionality
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => ({
        name: item.name,
        element: document.querySelector(item.href)
      })).filter(section => section.element)

      if (sections.length === 0) return

      const scrollPosition = window.scrollY + 100 // Offset for header height

      // Find which section is currently in view
      let currentSection = sections[0].name
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section.element) {
          const rect = section.element.getBoundingClientRect()
          if (rect.top <= 100) { // 100px offset for header
            currentSection = section.name
            break
          }
        }
      }

      setActiveItem(currentSection)
    }

    // Add scroll listener
    window.addEventListener('scroll', handleScroll)
    
    // Initial check
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (item: { name: string; href: string }) => {
    setActiveItem(item.name)
    setIsMobileMenuOpen(false)
    const el = document.querySelector(item.href)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header className="fixed top-0 left-0 w-full z-50 py-2 pointer-events-none">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Left: Ayush Bansal */}
        <div className="flex-1 flex items-center pointer-events-auto">
          <span className="text-white text-xl font-semibold font-sans tracking-wide ml-4 select-none">
            Ayush Bansal
          </span>
        </div>
        
        {/* Center: Desktop Nav - Hidden on mobile */}
        <nav className="relative pointer-events-auto hidden md:block">
          <div className="relative flex items-center px-2 py-0 rounded-full shadow-[0_2px_18px_0_rgba(0,0,0,0.18)] bg-[rgba(44,44,44,0.56)] border border-white/10 backdrop-blur-[10px] min-h-[44px]">
            {/* Glow */}
            <span className="absolute -inset-1 z-0 rounded-full bg-gradient-to-r from-white/5 via-white/10 to-white/5 blur-xl pointer-events-none" />
            <div className="relative z-20 flex items-center">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item)}
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

        {/* Right: GitHub Icon + Mobile Menu Button */}
        <div className="flex-1 flex justify-end items-center pointer-events-auto gap-4 mr-4">
          <a href="https://github.com/ab-sc4t" target="_blank" rel="noopener noreferrer">
            <Github className="h-5 w-5" />
          </a>
          
          {/* Mobile Menu Button - Only visible on mobile */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Side Navbar */}
      <div className={`fixed inset-0 z-50 md:hidden ${isMobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Side Menu */}
        <div className={`absolute right-0 top-0 h-full w-64 bg-[rgba(44,44,44,0.95)] border-l border-white/10 backdrop-blur-[10px] shadow-2xl transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          {/* Close Button */}
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Close mobile menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          
          {/* Navigation Items */}
          <nav className="px-4 py-8">
            <div className="space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-lg font-semibold transition-all duration-200 ${
                    activeItem === item.name
                      ? "text-white bg-white/10 border-l-4 border-white"
                      : "text-white/80 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
