"use client"

import { ImageIcon, ArrowRight } from "lucide-react"
import { FadeIn } from "@/components/ui/fade-in"

const pillars = [
  {
    number: "01",
    title: "Discovery",
    subtitle: "Finding Your Place",
    description: "Private consultation to understand your vision. We listen to your lifestyle goals, preferences, and dreams for Italian living.",
    cta: "Begin discovery",
  },
  {
    number: "02", 
    title: "Experience",
    subtitle: "Immersive Italy",
    description: "Private tours and lifestyle immersion across Italy's most coveted regions. Taste, explore, and feel the life that awaits.",
    cta: "Plan your visit",
  },
  {
    number: "03",
    title: "Ownership",
    subtitle: "Seamless Transition",
    description: "Complete legal assistance including notarial processes, negotiations, and ownership completion. Your home, secured.",
    cta: "Learn more",
  },
]

export function Services() {
  return (
    <section id="properties" className="py-40 lg:py-56 bg-background border-b border-charcoal/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn className="text-center mb-24 lg:mb-32">
          <p className="text-[10px] tracking-[0.3em] uppercase text-charcoal/40 font-light mb-6">
            The Journey
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-charcoal tracking-wide font-normal">
            Your Journey to Italy
          </h2>
        </FadeIn>

        {/* Three Pillars - Six Senses Style */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {pillars.map((pillar, index) => (
            <FadeIn
              key={pillar.title}
              delay={index * 150}
              className="group relative"
            >
              {/* Image Placeholder */}
              <div className="aspect-[4/5] bg-muted border border-border flex items-center justify-center relative overflow-hidden mb-8">
                <div className="text-center text-muted-foreground z-10">
                  <ImageIcon size={32} className="mx-auto mb-3 opacity-30" />
                  <p className="text-[10px] tracking-[0.2em] uppercase">{pillar.title}</p>
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/10 transition-all duration-700" />
              </div>

              {/* Content */}
              <div className="space-y-4">
                <span className="text-[10px] text-charcoal/30 tracking-[0.2em]">
                  {pillar.number}
                </span>
                
                <h3 className="font-serif text-xl lg:text-2xl text-charcoal font-normal tracking-wide">
                  {pillar.title}
                </h3>
                
                <p className="text-[11px] tracking-[0.15em] uppercase text-charcoal/40">
                  {pillar.subtitle}
                </p>
                
                <p className="text-charcoal/55 font-light text-sm leading-relaxed pt-2">
                  {pillar.description}
                </p>
                
                {/* CTA */}
                <button className="group/btn flex items-center gap-2 text-charcoal/45 hover:text-charcoal pt-4 transition-colors duration-500">
                  <span className="text-[10px] tracking-[0.2em] uppercase font-light">
                    {pillar.cta}
                  </span>
                  <ArrowRight size={12} className="transform group-hover/btn:translate-x-1 transition-transform duration-500" />
                </button>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
