"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ExternalLink, Sparkles } from "lucide-react"
import experiencesData from "@/data/experiences.json"

interface Experience {
    id: number
    company: string
    role: string
    duration: string
    description: string
    achievements: string[]
    techStack: { name: string; color: string }[]
    companyUrl?: string
}

export function ExperienceSection() {
    const [activeExperience, setActiveExperience] = useState(0)

    const experiences: Experience[] = experiencesData.experiences

    useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById('work')
            if (!section) return
            const rect = section.getBoundingClientRect()
            const scrollTop = window.scrollY
            const sectionTop = section.offsetTop
            const sectionHeight = section.offsetHeight
            const windowHeight = window.innerHeight

            // Progress through the section
            const scrollPos = scrollTop + windowHeight / 2
            const progress = (scrollPos - sectionTop) / sectionHeight
            const index = Math.floor(progress * experiences.length)
            const clampedIndex = Math.max(0, Math.min(index, experiences.length - 1))
            setActiveExperience(clampedIndex)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [experiences.length])

    return (
        <section
            id="work"
            className="relative py-20 min-h-[150vh] overflow-visible"
        >
            <div className="container mx-auto px-8 sm:px-12 lg:px-24 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                        <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent italic">Work</span>{" "}
                        <span className="text-white">Experience</span>
                    </h2>
                </div>

                {/* Experience Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start relative">
                    {/* Left: Experience Cards */}
                    <div className="space-y-6 pb-32">
                        {experiences.map((experience, index) => (
                            <div
                                key={experience.id}
                                className={`relative rounded-2xl border transition-all duration-500`}
                            >
                                <div className="p-6">
                                    <div className="aspect-video rounded-xl mb-4 overflow-hidden">
                                        <h3 className={`text-xl font-bold transition-colors duration-300 mb-2 ${
                                            activeExperience === index ? 'text-yellow-400' : 'text-white'
                                        }`}>
                                            {experience.company}
                                        </h3>
                                        <p className="text-gray-300 text-sm">{experience.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right: Sticky Info Panel */}
                    <div className="h-fit lg:sticky lg:top-24 xl:top-32">
                        <div className="space-y-6">
                            {/* Experience Title */}
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-px bg-white"></div>
                                <h3 className="text-2xl font-bold text-white">{experiences[activeExperience].company}</h3>
                            </div>
                            <div className="space-y-2">
                                <p className="text-purple-400 text-lg font-semibold">{experiences[activeExperience].role}</p>
                                <p className="text-gray-400 text-sm">{experiences[activeExperience].duration}</p>
                            </div>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                {experiences[activeExperience].description}
                            </p>
                            <div className="space-y-3">
                                <h4 className="text-white font-semibold">Key Achievements</h4>
                                {experiences[activeExperience].achievements.map((achievement, idx) => (
                                    <div key={idx} className="flex items-start gap-3">
                                        <Sparkles className="h-4 w-4 text-yellow-400 mt-1 flex-shrink-0" />
                                        <span className="text-gray-300 text-sm">{achievement}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="space-y-4"> 
                                <h4 className="text-white font-semibold">Technologies Used</h4>
                                <div className="grid grid-cols-3 gap-3">
                                    {experiences[activeExperience].techStack.map((tech, idx) => (
                                        <div
                                            key={idx}
                                            className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-700/50 bg-gray-900/20 backdrop-blur-sm"
                                        >
                                            {/* <span className={`text-sm ${tech.color === 'white' ? 'text-white' : tech.color === 'green' ? 'text-green-400' : tech.color === 'blue' ? 'text-blue-400' : tech.color === 'yellow' ? 'text-yellow-400' : tech.color === 'purple' ? 'text-purple-400' : tech.color === 'gray' ? 'text-gray-400' : 'text-white'}`}>
                                                {tech.icon}
                                            </span> */}
                                            <span className="text-gray-300 text-xs font-medium">{tech.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {experiences[activeExperience].companyUrl && (
                                <div className="flex gap-4 pt-4">
                                    <Button
                                        asChild
                                        size="sm"
                                        variant="outline"
                                        className="border-gray-700/50 text-gray-300 hover:text-white hover:border-gray-600/50"
                                    >
                                        <a href={experiences[activeExperience].companyUrl} target="_blank" rel="noopener noreferrer">
                                            <ExternalLink className="h-4 w-4 mr-2" />
                                            Visit Company
                                        </a>
                                    </Button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
