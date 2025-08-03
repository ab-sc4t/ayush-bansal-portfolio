"use client"

import { Button } from "@/components/ui/button"
import { Download, Code } from "lucide-react"

export function AboutMe() {
    return (
        <section id="about" className="py-20 relative">
            <div className="container mx-auto px-8 sm:px-12 lg:px-24 relative z-10">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    {/* Title */}
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        About Me
                    </h2>

                    {/* Description - Simple white text */}
                    <div className="space-y-6 max-w-4xl mx-auto">
                        <p className="text-lg sm:text-xl leading-relaxed tracking-wide text-white">
                            Hello, I'm <span className="font-bold text-white">Ayush Bansal</span> a full-stack developer with a passion for building creative and scalable web solutions.
                            I am currently in my final year of B.Tech (CSE) at JIIT, Noida, and have hands-on experience with the MERN stack, Next.js, and TypeScript.
                            I love working on challenging projects, collaborating with others, and staying updated with the latest in tech. I am driven by continuous learning and aim to make a positive impact through my work.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
} 