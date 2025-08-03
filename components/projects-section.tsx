    "use client"

    import { useState, useEffect } from "react"
    import { Button } from "@/components/ui/button"
    import { ExternalLink, Github, Sparkles } from "lucide-react"
    import projectsData from "@/data/projects.json"

    interface Project {
        id: number
        title: string
        description: string
        features: string[]
        techStack: { name: string; color: string }[]
        image: string
        githubUrl?: string
        liveUrl?: string
    }

    export function ProjectsSection() {
        const [activeProject, setActiveProject] = useState(0)

        const projects: Project[] = projectsData.projects

        useEffect(() => {
            const handleScroll = () => {
                const section = document.getElementById('project')
                if (!section) return
                const rect = section.getBoundingClientRect()
                const scrollTop = window.scrollY
                const sectionTop = section.offsetTop
                const sectionHeight = section.offsetHeight
                const windowHeight = window.innerHeight

                // Progress through the section
                const scrollPos = scrollTop + windowHeight / 2
                const progress = (scrollPos - sectionTop) / sectionHeight
                const index = Math.floor(progress * projects.length)
                const clampedIndex = Math.max(0, Math.min(index, projects.length - 1))
                setActiveProject(clampedIndex)
            }
            window.addEventListener('scroll', handleScroll)
            return () => window.removeEventListener('scroll', handleScroll)
        }, [projects.length])

        return (
            <section
                id="project"
                className="relative py-20 min-h-[200vh] overflow-visible"
            >
                <div className="container mx-auto px-8 sm:px-12 lg:px-24 relative z-10">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                            <span className="text-white">Best</span>{" "}
                            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent italic">projects</span>
                        </h2>
                    </div>

                    {/* Mobile Layout (less than lg) */}
                    <div className="lg:hidden space-y-12">
                        {projects.map((project, index) => (
                            <div key={project.id} className="space-y-6">
                                {/* Project Image */}
                                <div className="aspect-video rounded-xl bg-gray-800 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                
                                {/* Project Title */}
                                <div className="space-y-2">
                                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                                </div>
                                
                                {/* Description */}
                                <p className="text-gray-300 text-lg leading-relaxed">
                                    {project.description}
                                </p>
                                
                                {/* Features */}
                                <div className="space-y-3">
                                    <h4 className="text-white font-semibold">Key Features</h4>
                                    {project.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-start gap-3">
                                            <Sparkles className="h-4 w-4 text-pink-400 mt-1 flex-shrink-0" />
                                            <span className="text-gray-300 text-sm">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                                
                                {/* Tech Stack */}
                                <div className="space-y-4">
                                    <h4 className="text-white font-semibold">Tech Stack</h4>
                                    <div className="grid grid-cols-3 gap-3">
                                        {project.techStack.map((tech, idx) => (
                                            <div
                                                key={idx}
                                                className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-700/50 bg-gray-900/20 backdrop-blur-sm"
                                            >
                                                <span className="text-gray-300 text-xs font-medium">{tech.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                
                                {/* Buttons */}
                                <div className="flex gap-4 pt-4">
                                    {project.githubUrl && (
                                        <Button
                                            asChild
                                            size="sm"
                                            variant="outline"
                                            className="border-gray-700/50 text-gray-300 hover:text-white hover:border-gray-600/50"
                                        >
                                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                                <Github className="h-4 w-4 mr-2" />
                                                View Code
                                            </a>
                                        </Button>
                                    )}
                                    {project.liveUrl && project.liveUrl !== "unavailable" && (
                                        <Button
                                            asChild
                                            size="sm"
                                            className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"
                                        >
                                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                                <ExternalLink className="h-4 w-4 mr-2" />
                                                Live Demo
                                            </a>
                                        </Button>
                                    )}
                                </div>
                                
                                {/* Divider */}
                                {index < projects.length - 1 && (
                                    <div className="border-t border-gray-700/50 pt-8"></div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Desktop Layout (lg and above) */}
                    <div className="hidden lg:grid grid-cols-2 gap-12 items-start relative">
                        {/* Left: Project Cards */}
                        <div className="space-y-6 pb-32">
                            {projects.map((project, index) => (
                                <div
                                    key={project.id}
                                    className={`relative rounded-2xl border transition-all duration-500 ${
                                        activeProject === index
                                            ? 'border-purple-400/50 bg-purple-500/10 backdrop-blur-sm'
                                            : 'border-gray-700/50 bg-gray-900/20 opacity-50'
                                    }`}
                                >
                                    <div className="p-6">
                                        <div className="aspect-video rounded-xl bg-gray-800 mb-4 overflow-hidden">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                        <p className="text-gray-400 text-sm line-clamp-2">{project.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Right: Sticky Info Panel */}
                        <div className="h-fit lg:sticky lg:top-24 xl:top-32">
                            <div className="space-y-6">
                                {/* Project Title */}
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-px bg-white"></div>
                                    <h3 className="text-2xl font-bold text-white">{projects[activeProject].title}</h3>
                                </div>

                                {/* Description */}
                                <p className="text-gray-300 text-lg leading-relaxed">
                                    {projects[activeProject].description}
                                </p>

                                {/* Features */}
                                <div className="space-y-3">
                                    {projects[activeProject].features.map((feature, idx) => (
                                        <div key={idx} className="flex items-start gap-3">
                                            <Sparkles className="h-4 w-4 text-pink-400 mt-1 flex-shrink-0" />
                                            <span className="text-gray-300 text-sm">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Tech Stack */}
                                <div className="space-y-4">
                                    <h4 className="text-white font-semibold">Tech Stack</h4>
                                    <div className="grid grid-cols-3 gap-3">
                                        {projects[activeProject].techStack.map((tech, idx) => (
                                            <div
                                                key={idx}
                                                className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-700/50 bg-gray-900/20 backdrop-blur-sm"
                                            >
                                                <span className="text-gray-300 text-xs font-medium">{tech.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Buttons */}
                                <div className="flex gap-4 pt-4">
                                    {projects[activeProject].githubUrl && (
                                        <Button
                                            asChild
                                            size="sm"
                                            variant="outline"
                                            className="border-gray-700/50 text-gray-300 hover:text-white hover:border-gray-600/50"
                                        >
                                            <a href={projects[activeProject].githubUrl} target="_blank" rel="noopener noreferrer">
                                                <Github className="h-4 w-4 mr-2" />
                                                View Code
                                            </a>
                                        </Button>
                                    )}
                                    {projects[activeProject].liveUrl && projects[activeProject].liveUrl !== "unavailable" && (
                                        <Button
                                            asChild
                                            size="sm"
                                            className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"
                                        >
                                            <a href={projects[activeProject].liveUrl} target="_blank" rel="noopener noreferrer">
                                                <ExternalLink className="h-4 w-4 mr-2" />
                                                Live Demo
                                            </a>
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
