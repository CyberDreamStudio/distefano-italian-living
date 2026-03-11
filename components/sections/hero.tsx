"use client"

import { useState } from "react"
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

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-white leading-tight tracking-tight">
          <span className="block">Own a Piece</span>
          <span className="block mt-2">of Italy</span>
        </h1>
        
        <p className="mt-8 text-lg sm:text-xl text-white/80 font-light leading-relaxed max-w-2xl mx-auto">
          Private property acquisition and Italian lifestyle advisory for international buyers.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="rounded-none bg-white text-charcoal hover:bg-white/90 px-8 py-6 text-sm font-light tracking-wider min-w-[200px]"
          >
            <Link href="#contact">Start Your Journey</Link>
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            onClick={() => setIsVideoModalOpen(true)}
            className="rounded-none bg-transparent text-white border-white/40 hover:bg-white/10 hover:text-white px-8 py-6 text-sm font-light tracking-wider min-w-[200px]"
          >
            <Play size={16} className="mr-2" />
            Watch the Film
          </Button>
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
