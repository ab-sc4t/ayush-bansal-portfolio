"use client"

import { Github, Linkedin, Instagram, Mail, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <footer className="relative overflow-hidden border-t border-gray-800/50">
            {/* Background with gradients */}
            <div className="absolute inset-0 bg-black"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(147,51,234,0.1),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_50%)]"></div>

            <div className="container mx-auto px-8 sm:px-12 lg:px-24 relative z-10">
                <div className="py-16">
                    {/* Main Footer Content */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                        {/* Brand Section */}
                        <div className="md:col-span-2">
                            <h3 className="text-2xl font-bold text-white mb-4">Ayush Bansal</h3>
                            <p className="text-gray-300 text-lg mb-6 max-w-md">
                                Full-stack developer passionate about creating innovative web solutions and building scalable applications.
                            </p>
                            <div className="flex gap-4">
                                <Button
                                    asChild
                                    variant="outline"
                                    size="icon"
                                    className="border-gray-700/50 text-gray-300 hover:text-white hover:border-gray-600/50"
                                >
                                    <a href="https://github.com/ab-sc4t" target="_blank" rel="noopener noreferrer">
                                        <Github className="h-5 w-5" />
                                    </a>
                                </Button>
                                <Button
                                    asChild
                                    variant="outline"
                                    size="icon"
                                    className="border-gray-700/50 text-gray-300 hover:text-white hover:border-gray-600/50"
                                >
                                    <a href="https://www.linkedin.com/in/ayush-bansal26/" target="_blank" rel="noopener noreferrer">
                                        <Linkedin className="h-5 w-5" />
                                    </a>
                                </Button>
                                <Button
                                    asChild
                                    variant="outline"
                                    size="icon"
                                    className="border-gray-700/50 text-gray-300 hover:text-white hover:border-gray-600/50"
                                >
                                    <a href="mailto:ayushbansal2612@gmail.com">
                                        <Mail className="h-5 w-5" />
                                    </a>
                                </Button>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#home" className="text-gray-300 hover:text-white transition-colors duration-200">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-200">
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a href="#techstack" className="text-gray-300 hover:text-white transition-colors duration-200">
                                        Tech Stack
                                    </a>
                                </li>
                                <li>
                                    <a href="#work" className="text-gray-300 hover:text-white transition-colors duration-200">
                                        Work
                                    </a>
                                </li>
                                <li>
                                    <a href="#project" className="text-gray-300 hover:text-white transition-colors duration-200">
                                        Projects
                                    </a>
                                </li>
                                <li>
                                    <a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-200">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
                            <div className="space-y-3">
                                <p className="text-gray-300">
                                    <span className="text-purple-400">Email:</span><br />
                                    ayushbansal2612@gmail.com
                                </p>
                                <p className="text-gray-300">
                                    <span className="text-purple-400">Location:</span><br />
                                    Noida, India
                                </p>
                                <p className="text-gray-300">
                                    <span className="text-purple-400">Available:</span><br />
                                    For new opportunities
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-gray-800/50">
                        {/* Copyright */}
                        <div className="text-gray-400 text-sm mb-4 sm:mb-0">
                            © 2025 Ayush Bansal. All rights reserved.
                        </div>

                        {/* Back to Top Button */}
                        <Button
                            onClick={scrollToTop}
                            variant="outline"
                            size="sm"
                            className="border-gray-700/50 text-gray-300 hover:text-white hover:border-gray-600/50"
                        >
                            <ArrowUp className="h-4 w-4 mr-2" />
                            Back to Top
                        </Button>
                    </div>
                </div>
            </div>
        </footer>
    )
} 