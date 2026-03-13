"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Play, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

export function Hero() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Trigger animations after mount
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Video/Image Placeholder Background */}
      <div className="absolute inset-0 z-0">
        {/* Placeholder for self-hosted video - swap this div with <video> element later */}
        <div className="absolute inset-0 bg-charcoal flex items-center justify-center">
          <div className="text-center text-white/20">
            <div className="w-32 h-32 mx-auto mb-4 border-2 border-white/20 rounded-full flex items-center justify-center">
              <Play size={48} className="ml-2" />
            </div>
            <p className="text-sm tracking-widest uppercase">Video Placeholder</p>
            <p className="text-xs mt-2 text-white/10">Replace with: /public/videos/hero.mp4</p>
          </div>
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
      </div>

      {/* Content - Minimal luxury positioning like Six Senses */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <p 
          className={`text-xs sm:text-sm tracking-[0.3em] uppercase text-white/60 font-light mb-8 transition-all duration-1000 ease-out ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Italy
        </p>
        
        <h1 
          className={`font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-white leading-relaxed tracking-wide transition-all duration-1000 ease-out delay-200 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Own a Piece of Italy
        </h1>
        
        <p 
          className={`mt-6 text-sm sm:text-base text-white/50 font-light leading-relaxed max-w-xl mx-auto tracking-wide transition-all duration-1000 ease-out delay-300 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Private property acquisition and lifestyle advisory
        </p>

        <div 
          className={`mt-16 flex flex-col sm:flex-row items-center justify-center gap-6 transition-all duration-1000 ease-out delay-500 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <Button
            asChild
            size="lg"
            className="rounded-none bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20 px-10 py-6 text-xs font-light tracking-[0.2em] uppercase transition-all duration-500"
          >
            <Link href="#contact">Start Your Journey</Link>
          </Button>
          
          <button
            onClick={() => setIsVideoModalOpen(true)}
            className="group flex items-center gap-3 text-white/60 hover:text-white transition-colors duration-500"
          >
            <span className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover:border-white/60 transition-all duration-500">
              <Play size={14} className="ml-0.5" />
            </span>
            <span className="text-xs tracking-[0.2em] uppercase font-light">Play full video</span>
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <Link 
          href="#experience"
          className="flex flex-col items-center text-white/60 hover:text-white/80 transition-colors duration-300"
        >
          <span className="text-xs tracking-widest uppercase mb-2">Discover</span>
          <ChevronDown size={20} className="animate-bounce" />
        </Link>
      </div>

      {/* Video Modal */}
      <Dialog open={isVideoModalOpen} onOpenChange={setIsVideoModalOpen}>
        <DialogContent className="sm:max-w-4xl bg-charcoal border-charcoal p-0">
          <DialogHeader className="sr-only">
            <DialogTitle>DiStefano Italian Living Film</DialogTitle>
          </DialogHeader>
          {/* Self-hosted video placeholder - ready for video element */}
          <div className="aspect-video bg-black flex items-center justify-center">
            <div className="text-center text-white/40">
              <div className="w-24 h-24 mx-auto mb-4 border border-white/20 rounded-full flex items-center justify-center">
                <Play size={36} className="ml-1" />
              </div>
              <p className="text-sm tracking-widest uppercase">Video Placeholder</p>
              <p className="text-xs mt-2 text-white/20">
                Replace with: {"<video src=\"/videos/film.mp4\" controls />"}
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
