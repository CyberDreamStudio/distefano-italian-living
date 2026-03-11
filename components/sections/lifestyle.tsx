"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

const lifestyles = [
  {
    title: "Coastal Living",
    subtitle: "Amalfi, Sardinia, Puglia",
    bgColor: "bg-[#E5E8EB]", // Soft blue-gray
  },
  {
    title: "Countryside Retreats",
    subtitle: "Tuscany, Umbria, Piedmont",
    bgColor: "bg-sage-light", // Sage
  },
  {
    title: "Historic Estates",
    subtitle: "Rome, Florence, Milan",
    bgColor: "bg-terracotta-light", // Warm terracotta
  },
]

export function Lifestyle() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref} className="py-32 lg:py-48 bg-cream">
      <div className="mx-auto max-w-7xl px-8 lg:px-16">
        {/* Section Header */}
        <div className="mb-16 lg:mb-24">
          <p 
            className={cn(
              "text-[11px] text-stone tracking-[0.3em] uppercase mb-6 transition-all duration-1000",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            Regions
          </p>
          <h2 
            className={cn(
              "font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-charcoal leading-[1.15] tracking-[-0.01em] max-w-xl transition-all duration-1000 delay-100",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            )}
          >
            Experience the Italy Few Truly Know
          </h2>
        </div>

        {/* Asymmetric Lifestyle Grid */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Large Left Image */}
          <div
            className={cn(
              "group relative overflow-hidden cursor-pointer lg:row-span-2 transition-all duration-1000 delay-200",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <div className={cn("aspect-[3/4] lg:aspect-auto lg:h-full", lifestyles[0].bgColor)}>
              <div className="absolute inset-0 group-hover:scale-105 transition-transform duration-700 ease-out" />
            </div>
            
            {/* Content Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
              <h3 className="font-serif text-2xl lg:text-3xl font-light text-charcoal group-hover:text-white transition-colors duration-500">
                {lifestyles[0].title}
              </h3>
              <p className="mt-2 text-sm text-charcoal/60 group-hover:text-white/70 font-light tracking-[0.1em] transition-colors duration-500">
                {lifestyles[0].subtitle}
              </p>
            </div>
          </div>

          {/* Right Column - Two Stacked */}
          {lifestyles.slice(1).map((lifestyle, index) => (
            <div
              key={lifestyle.title}
              className={cn(
                "group relative overflow-hidden cursor-pointer transition-all duration-1000",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className={cn("aspect-[4/3]", lifestyle.bgColor)}>
                <div className="absolute inset-0 group-hover:scale-105 transition-transform duration-700 ease-out" />
              </div>
              
              {/* Content Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="font-serif text-xl lg:text-2xl font-light text-charcoal group-hover:text-white transition-colors duration-500">
                  {lifestyle.title}
                </h3>
                <p className="mt-2 text-sm text-charcoal/60 group-hover:text-white/70 font-light tracking-[0.1em] transition-colors duration-500">
                  {lifestyle.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
