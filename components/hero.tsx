"use client"

import { Button } from "@/components/ui/button"
import { ArrowUpRight, Mail, Copy } from "lucide-react"
import { useState } from "react"
import Image from "next/image"
import { toast } from "@/hooks/use-toast"

export function Hero() {
  const [copied, setCopied] = useState(false)

  const email = "hello@aayushbharti.in"

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      toast({
        title: "Email copied!",
        description: "Email address copied to clipboard",
      })
      setTimeout(() => setCopied(false), 2000)
    } catch {
      toast({
        title: "Failed to copy email",
        description: `Please copy manually: ${email}`,
        variant: "destructive",
      })
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-2"
      style={{
        background: "radial-gradient(ellipse at 50% 90%,rgba(147,51,234,0.15) 0%,transparent 80%)"
      }}
    >
      {/* Starfield dots (optional, for visual polish) */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {/* Generate a few random dots via pseudo-elements or use a canvas for starfield */}
      </div>

      {/* Glow Horizon/Arc */}
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 z-10 w-full max-w-[100vw] h-[28vw] pointer-events-none select-none overflow-hidden"
        style={{
          background: "radial-gradient(ellipse 70% 50% at 50% 100%,rgba(147,51,234,0.35) 0%,rgba(147,51,234,0.12) 80%,transparent 100%)",
          filter: "blur(2px)",
        }}
      ></div>
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 z-20 w-full max-w-[100vw] h-[11vw] pointer-events-none select-none overflow-hidden"
        style={{
          background: "radial-gradient(ellipse 100% 100% at 50% 100%,rgba(255,255,255,0.12) 0%,transparent 80%)"
        }}
      ></div>

      {/* Main container */}
      <div className="relative z-30 flex flex-col items-center justify-center min-h-[60vh]">

        {/* Main headline */}
        <h1 className="text-center text-white font-bold leading-[1.15] text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-8">
          Full Stack Developer
          <br />
          <span className="font-light" >Enhancing digital experiences that are</span>
          <br />
          <span className="italic font-light bg-gradient-to-r from-purple-300 via-white to-purple-600 bg-clip-text text-transparent">
            smooth, scalable, and made to impress.
          </span>
        </h1>

        {/* Subtitle: name, avatar, badge */}
        <div className="flex flex-col md:flex-row items-center gap-2 mb-6">
          <span className="text-lg text-white">
            Hello, I'm <span className="font-semibold italic">Ayush Bansal</span>
          </span>
          <span className="text-lg text-white">a Full Stack Developer</span>
        </div>

        {/* Call To Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-4">
          <Button
            size="lg"
            onClick={() => {
              const element = document.querySelector('#contact')
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            className="bg-purple-600 hover:bg-purple-700 text-white px-7 py-4 text-base font-semibold rounded-xl transition-all duration-200 shadow-lg"
          >
            Let&apos;s Connect
            <ArrowUpRight className="h-5 w-5 ml-2" />
          </Button>
          <Button
            size="lg"
            variant="ghost"
            onClick={copyEmail}
            className="text-white px-7 py-4 text-base font-semibold rounded-xl transition-all duration-200 hover:bg-transparent"
          >
            {copied ? "Copied to clipboard!" : <div className="flex items-center gap-2"><Copy className="h-5 w-5" /> hello.ayushbansal@gmail.com</div>}
          </Button>
        </div>
      </div>
    </section>
  )
}
