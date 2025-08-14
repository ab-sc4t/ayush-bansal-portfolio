import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ayush Bansal Portfolio",
  description: "Ayush Bansal | Full Stack Developer | Portfolio",
  icons: {
    icon: "/logo.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {/* Black background layer */}
        <div className="fixed inset-0 bg-black"></div>
        
        {/* Purple gradient layer */}
        <div 
          className="fixed inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 30% 20%, rgba(147,51,234,0.15), transparent 50%)'
          }}
        ></div>
        
        {/* Blue gradient layer */}
        <div 
          className="fixed inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 70% 80%, rgba(59,130,246,0.15), transparent 50%)'
          }}
        ></div>
        
        {/* Grid pattern layer */}
        <div className="fixed inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
