"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

export function Emotional() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="experience" className="py-32 lg:py-48 bg-cream">
      <div className="mx-auto max-w-7xl px-8 lg:px-16">
        {/* Two Column Layout */}
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Image Placeholder - Warm Sand Tone */}
          <div 
            className={cn(
              "relative transition-all duration-1000",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <div className="aspect-[3/4] bg-sand" />
          </div>

          {/* Right: Text Content */}
          <div className="lg:pt-16">
            {/* Section Label */}
            <p 
              className={cn(
                "text-[11px] text-stone tracking-[0.3em] uppercase mb-8 transition-all duration-1000 delay-100",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
            >
              Our Philosophy
            </p>
            
            {/* Main Title */}
            <h2 
              className={cn(
                "font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-charcoal leading-[1.2] tracking-[-0.01em] mb-12 lg:mb-16 transition-all duration-1000 delay-200",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              )}
            >
              More Than Property.<br />
              A Way of Living.
            </h2>
            
            <div className="space-y-8 text-base lg:text-lg text-charcoal/70 font-light leading-relaxed">
              <p 
                className={cn(
                  "text-xl lg:text-2xl text-charcoal/90 font-light leading-snug transition-all duration-1000 delay-300",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                )}
              >
                For many, Italy is a destination.<br />
                For a few, it becomes home.
              </p>
              
              <div 
                className={cn(
                  "w-12 h-px bg-sage my-10 transition-all duration-1000 delay-400",
                  isVisible ? "opacity-100 w-12" : "opacity-0 w-0"
                )}
              />
              
              <p 
                className={cn(
                  "transition-all duration-1000 delay-500",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                )}
              >
                DiStefano Italian Living guides international buyers through the journey of discovering, experiencing, and ultimately owning a piece of Italy.
              </p>
              
              <p 
                className={cn(
                  "transition-all duration-1000 delay-600",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                )}
              >
                From the moment you arrive to the moment you receive the keys to your home, every detail is curated.
              </p>
              
              <p 
                className={cn(
                  "text-charcoal/90 font-serif italic text-lg lg:text-xl pt-4 transition-all duration-1000 delay-700",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                )}
              >
                This is not real estate. This is Italian living.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
