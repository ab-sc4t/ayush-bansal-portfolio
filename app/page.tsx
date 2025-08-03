import { Hero } from "@/components/hero"
import { PassionateAbout } from "@/components/passionate-about"
import { AboutMe } from "@/components/about-me"
import { ProjectsSection } from "@/components/projects-section"
import { ExperienceSection } from "@/components/experience-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* Unified Grid Background */}
      <div className="fixed inset-0 bg-black z-0">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        {/* Radial gradients for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(147,51,234,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.15),transparent_50%)]"></div>
      </div>
      
      <div className="relative z-10">
        <Header />
        <Hero />
        <AboutMe />
        <PassionateAbout />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  )
}
