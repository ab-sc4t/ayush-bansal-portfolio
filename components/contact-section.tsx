"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Send, Github, Linkedin, Instagram } from "lucide-react"

export function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    })
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Create mailto link with form data
        const mailtoLink = `mailto:ayushbansal2612@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        )}`

        // Open default email client
        window.location.href = mailtoLink

        // Reset form after a short delay
        setTimeout(() => {
            setFormData({
                name: "",
                email: "",
                subject: "",
                message: ""
            })
            setIsSubmitting(false)
        }, 1000)
    }

    return (
        <section id="contact" className="py-20 relative">
            <div className="container mx-auto px-8 sm:px-12 lg:px-24 relative z-10">
                <div className="max-w-4xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                            <span className="text-white">Get in</span>{" "}
                            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent italic">touch</span>
                        </h2>
                        <p className="text-gray-300 text-lg mt-6 max-w-2xl mx-auto">
                            Let's work together! Feel free to reach out for collaborations, opportunities, or just to say hello.
                        </p>
                    </div>

                    {/* Contact Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
                        {/* Left: Contact Form */}
                        <div className="flex flex-col">
                            <div className="rounded-2xl border border-gray-700/50 bg-gray-900/20 backdrop-blur-sm p-8 flex-1">
                                <h3 className="text-2xl font-bold text-white mb-6">Send me a message</h3>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                            Name
                                        </label>
                                        <Input
                                            id="name"
                                            name="name"
                                            type="text"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            className="bg-gray-800/50 border-gray-700/50 text-white placeholder-gray-400 focus:border-purple-400/50 focus:ring-purple-400/50"
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                                            Subject
                                        </label>
                                        <Input
                                            id="subject"
                                            name="subject"
                                            type="text"
                                            value={formData.subject}
                                            onChange={handleInputChange}
                                            required
                                            className="bg-gray-800/50 border-gray-700/50 text-white placeholder-gray-400 focus:border-purple-400/50 focus:ring-purple-400/50"
                                            placeholder="What's this about?"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                            Message
                                        </label>
                                        <Textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            required
                                            rows={6}
                                            className="bg-gray-800/50 border-gray-700/50 text-white placeholder-gray-400 focus:border-purple-400/50 focus:ring-purple-400/50 resize-none"
                                            placeholder="Tell me about your project, opportunity, or just say hello!"
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-xl text-base font-medium transition-all duration-300 shadow-lg hover:shadow-purple-500/60 flex items-center justify-center gap-3"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                <Send className="h-5 w-5" />
                                                Send Message
                                            </>
                                        )}
                                    </Button>
                                </form>
                            </div>
                        </div>

                        {/* Right: Contact Info */}
                        <div className="flex flex-col space-y-8">
                            {/* Direct Email */}
                            <div className="rounded-2xl border border-gray-700/50 bg-gray-900/20 backdrop-blur-sm p-8 flex-1">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                                        <Mail className="h-6 w-6 text-purple-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white">Email</h3>
                                        <p className="text-gray-300">ayushbansal2612@gmail.com</p>
                                    </div>
                                </div>
                                <Button
                                    asChild
                                    size="lg"
                                    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"
                                >
                                    <a href="mailto:ayushbansal2612@gmail.com">
                                        <Mail className="h-5 w-5 mr-2" />
                                        Send Email Directly
                                    </a>
                                </Button>
                            </div>

                            {/* Social Links */}
                            <div className="rounded-2xl border border-gray-700/50 bg-gray-900/20 backdrop-blur-sm p-8 flex-1">
                                <h3 className="text-xl font-bold text-white mb-6">Connect with me</h3>
                                <div className="grid grid-cols-1 gap-4">
                                    <Button
                                        asChild
                                        variant="outline"
                                        className="border-gray-700/50 text-gray-300 hover:text-white hover:border-gray-600/50 justify-start"
                                    >
                                        <a href="https://github.com/ab-sc4t" target="_blank" rel="noopener noreferrer">
                                            <Github className="h-5 w-5 mr-3" />
                                            GitHub
                                        </a>
                                    </Button>
                                    <Button
                                        asChild
                                        variant="outline"
                                        className="border-gray-700/50 text-gray-300 hover:text-white hover:border-gray-600/50 justify-start"
                                    >
                                        <a href="https://www.linkedin.com/in/ayush-bansal26/" target="_blank" rel="noopener noreferrer">
                                            <Linkedin className="h-5 w-5 mr-3" />
                                            LinkedIn
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
} 