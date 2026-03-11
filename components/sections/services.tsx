"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

const services = [
  {
    number: "01",
    title: "Discovery",
    description: "Private consultation to understand your lifestyle aspirations and vision for Italian living.",
  },
  {
    number: "02",
    title: "Curated Experience",
    description: "Immersive private tours across Italy's most coveted regions, tailored to your preferences.",
  },
  {
    number: "03",
    title: "Property Acquisition",
    description: "Access to exclusive off-market properties with expert negotiation and due diligence.",
  },
  {
    number: "04",
    title: "Legal & Ownership",
    description: "Complete legal assistance through Italian property law and notarial processes.",
  },
]

export function Services() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="properties" className="py-32 lg:py-48 bg-charcoal">
      <div ref={ref} className="mx-auto max-w-7xl px-8 lg:px-16">
        {/* Section Header */}
        <div className="mb-20 lg:mb-28">
          <p 
            className={cn(
              "text-[11px] text-cream/40 tracking-[0.3em] uppercase mb-6 transition-all duration-1000",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            Our Services
          </p>
          <h2 
            className={cn(
              "font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-cream leading-[1.15] tracking-[-0.01em] max-w-2xl transition-all duration-1000 delay-100",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            )}
          >
            Your Journey to Italy
          </h2>
        </div>

        {/* Services Grid - Minimal Style */}
        <div className="grid md:grid-cols-2 gap-x-16 lg:gap-x-24">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={cn(
                "py-10 lg:py-14 border-t border-cream/10 group transition-all duration-1000",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div className="flex items-start gap-8 lg:gap-12">
                {/* Number */}
                <span className="text-[11px] text-sage tracking-[0.2em] pt-1">
                  {service.number}
                </span>
                
                <div className="flex-1">
                  {/* Title */}
                  <h3 className="font-serif text-xl lg:text-2xl font-light text-cream mb-4 group-hover:text-sage transition-colors duration-500">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-cream/50 font-light text-sm lg:text-base leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
