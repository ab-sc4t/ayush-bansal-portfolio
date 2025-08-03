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

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
                        <Button
                            size="lg"
                            className="px-8 py-4 bg-gray-900/20 hover:bg-gray-800/30 text-purple-400 border border-purple-400/50 hover:border-purple-400/70 rounded-xl backdrop-blur-md text-base font-medium transition-all duration-300 shadow-lg hover:shadow-purple-500/60 flex items-center gap-3"
                        >
                            <Code className="h-5 w-5" />
                            View Projects
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
} 