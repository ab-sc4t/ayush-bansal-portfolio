"use client"

import React, { useState, useEffect } from "react"
import techStackData from "@/data/tech-stack.json"

export function PassionateAbout() {
    const techRows = techStackData.techRows
    const [isMobile, setIsMobile] = useState(false)
    const [isTablet, setIsTablet] = useState(false)

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 768)
            setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024)
        }
        
        checkScreenSize()
        window.addEventListener('resize', checkScreenSize)
        
        return () => window.removeEventListener('resize', checkScreenSize)
    }, [])

    const directions = ["right-to-left", "left-to-right", "right-to-left"]

    return (
        <section id="techstack" className="py-20 pt-32 relative overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute top-20 left-20 w-64 h-64 bg-purple-900/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-800/10 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent leading-[1.18] py-2 antialiased">
                        Passionate about cutting-edge technologies
                    </h2>
                </div>

                {/* Moving Technology Rows */}
                <div className="space-y-8 mb-16">
                    {techRows.map((row, rowIndex) => (
                        <div key={rowIndex} className="overflow-hidden">
                            <div
                                className={`flex gap-4 animate-marquee ${directions[rowIndex] === "left-to-right" ? "animate-marquee-reverse" : "animate-marquee"
                                    }`}
                                style={{
                                    animationDuration: isMobile ? "12s" : isTablet ? "10s" : "20s",
                                    animationIterationCount: "infinite",
                                    animationTimingFunction: "linear"
                                }}
                            >
                                {/* Duplicate items for seamless loop */}
                                {[...row, ...row].map((tech, index) => (
                                    <div
                                        key={`${tech.name}-${index}`}
                                        className="border border-gray-700/50 rounded-xl p-4 flex items-center gap-3 backdrop-blur-sm min-w-[200px] flex-shrink-0"
                                    >
                                        <div className={`text-2xl ${tech.color === 'white' ? 'text-white' : tech.color === 'green' ? 'text-green-400' : tech.color === 'orange' ? 'text-orange-400' : tech.color === 'yellow' ? 'text-yellow-400' : tech.color === 'purple' ? 'text-purple-400' : tech.color === 'gray' ? 'text-gray-400' : tech.color === 'black' ? 'text-gray-800' : 'text-blue-400'}`}>
                                            {tech.logo}
                                        </div>
                                        <span className="text-gray-200 font-medium text-sm">{tech.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Custom animations */}
            <style jsx>{`
        @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
        }
        
        @keyframes marquee-reverse {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0%); }
        }
        
        .animate-marquee {
            animation-name: marquee;
        }
        
        .animate-marquee-reverse {
            animation-name: marquee-reverse;
        }
    `}</style>
        </section>
    )
}
