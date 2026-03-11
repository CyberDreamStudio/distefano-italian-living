"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Play } from "lucide-react"
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
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-end">
      {/* Video/Image Placeholder Background - Warm Tone */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-sage" />
        
        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-charcoal/40" />
      </div>

      {/* Content - Left Aligned, Bottom Position */}
      <div className="relative z-10 w-full px-8 pb-32 pt-48 lg:px-16 lg:pb-40 lg:pt-64">
        <div className="max-w-4xl">
          {/* Small Tagline */}
          <p 
            className={`text-[11px] sm:text-xs text-white/70 font-light tracking-[0.3em] uppercase mb-6 lg:mb-8 transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Private Property Advisory
          </p>
          
          {/* Main Headline - Light Weight */}
          <h1 
            className={`font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-white leading-[1.1] tracking-[-0.02em] transition-all duration-1000 delay-200 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <span className="block">Own a Piece</span>
            <span className="block">of Italy</span>
          </h1>
          
          {/* Subheadline */}
          <p 
            className={`mt-8 lg:mt-12 text-base sm:text-lg text-white/70 font-light leading-relaxed max-w-xl transition-all duration-1000 delay-400 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Curated property acquisition and lifestyle advisory for international buyers seeking Italian living.
          </p>

          {/* Links - Text Style */}
          <div 
            className={`mt-10 lg:mt-14 flex flex-col sm:flex-row items-start gap-6 sm:gap-10 transition-all duration-1000 delay-500 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <Link 
              href="#contact"
              className="text-white text-[13px] font-light tracking-[0.15em] border-b border-white/40 pb-1 hover:border-white transition-all duration-500"
            >
              Begin Your Journey
            </Link>
            
            <button
              onClick={() => setIsVideoModalOpen(true)}
              className="flex items-center gap-3 text-white/70 text-[13px] font-light tracking-[0.15em] hover:text-white transition-all duration-500"
            >
              <span className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center">
                <Play size={10} className="ml-0.5" fill="white" />
              </span>
              Watch the Film
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Minimal Line */}
      <div className="absolute bottom-12 left-8 lg:left-16 z-10">
        <Link 
          href="#experience"
          className="flex items-center gap-4 text-white/40 hover:text-white/70 transition-all duration-500 group"
        >
          <span className="w-8 h-px bg-white/40 group-hover:w-12 group-hover:bg-white/70 transition-all duration-500" />
          <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        </Link>
      </div>

      {/* Video Modal */}
      <Dialog open={isVideoModalOpen} onOpenChange={setIsVideoModalOpen}>
        <DialogContent className="sm:max-w-5xl bg-charcoal border-none p-0 rounded-none">
          <DialogHeader className="sr-only">
            <DialogTitle>DiStefano Italian Living Film</DialogTitle>
          </DialogHeader>
          <div className="aspect-video bg-charcoal flex items-center justify-center">
            <div className="text-center text-white/30">
              <div className="w-20 h-20 mx-auto mb-6 border border-white/20 rounded-full flex items-center justify-center">
                <Play size={28} className="ml-1" fill="white" fillOpacity={0.3} />
              </div>
              <p className="text-xs tracking-[0.3em] uppercase">Video Placeholder</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
