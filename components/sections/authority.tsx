"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

export function Authority() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="about" ref={ref} className="py-32 lg:py-48 bg-charcoal">
      <div className="mx-auto max-w-7xl px-8 lg:px-16">
        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-5 gap-16 lg:gap-24 items-center">
          {/* Left: Image Placeholder */}
          <div 
            className={cn(
              "lg:col-span-2 order-2 lg:order-1 transition-all duration-1000",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <div className="aspect-[3/4] bg-charcoal-light max-w-sm mx-auto lg:mx-0" />
          </div>

          {/* Right: Quote & Content */}
          <div className="lg:col-span-3 order-1 lg:order-2">
            <p 
              className={cn(
                "text-[11px] text-cream/40 tracking-[0.3em] uppercase mb-8 transition-all duration-1000",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
            >
              Our Expertise
            </p>
            
            <blockquote 
              className={cn(
                "font-serif text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light text-cream leading-[1.3] tracking-[-0.01em] mb-12 transition-all duration-1000 delay-100",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              )}
            >
              <span className="italic">{"\"Our approach combines the precision of legal expertise with the warmth of Italian hospitality.\""}</span>
            </blockquote>

            <div 
              className={cn(
                "space-y-6 text-base lg:text-lg text-cream/60 font-light leading-relaxed max-w-xl transition-all duration-1000 delay-200",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
            >
              <p>
                DiStefano Italian Living is founded by an Italian legal professional with deep experience in property law and international transactions.
              </p>
              
              <p>
                Clients benefit from legal expertise, trusted local connections, and personalized guidance throughout their entire journey.
              </p>
            </div>

            <div 
              className={cn(
                "mt-12 pt-8 border-t border-cream/10 transition-all duration-1000 delay-300",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
            >
              <p className="text-[11px] text-cream/40 tracking-[0.2em] uppercase">
                Founder, DiStefano Italian Living
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
