"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

const steps = [
  {
    number: "01",
    title: "Initial Consultation",
    description: "Understanding your goals and vision for Italian living.",
  },
  {
    number: "02",
    title: "Curated Discovery",
    description: "Private property selection across Italy's finest regions.",
  },
  {
    number: "03",
    title: "Italy Experience",
    description: "Visit and explore properties with expert guidance.",
  },
  {
    number: "04",
    title: "Secure Acquisition",
    description: "Complete legal process and ownership transfer.",
  },
]

export function Process() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="process" ref={ref} className="py-32 lg:py-48 bg-sand">
      <div className="mx-auto max-w-7xl px-8 lg:px-16">
        {/* Section Header */}
        <div className="text-center mb-20 lg:mb-28">
          <p 
            className={cn(
              "text-[11px] text-stone tracking-[0.3em] uppercase mb-6 transition-all duration-1000",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            The Process
          </p>
          <h2 
            className={cn(
              "font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-charcoal leading-[1.15] tracking-[-0.01em] transition-all duration-1000 delay-100",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            )}
          >
            A Discreet and Personal Journey
          </h2>
        </div>

        {/* Horizontal Steps - Desktop */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-0">
          {steps.map((step, index) => (
            <div 
              key={step.number} 
              className={cn(
                "relative text-center transition-all duration-1000",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div className="absolute top-6 left-1/2 w-full h-px bg-charcoal/10" />
              )}
              
              {/* Step Number */}
              <div className="relative z-10 inline-block mb-8">
                <span className="font-serif text-4xl lg:text-5xl font-light text-charcoal/20">
                  {step.number}
                </span>
              </div>

              {/* Step Content */}
              <div className="px-6">
                <h3 className="font-serif text-lg lg:text-xl font-light text-charcoal mb-3">
                  {step.title}
                </h3>
                <p className="text-charcoal/50 font-light text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Vertical Steps - Mobile */}
        <div className="lg:hidden space-y-12">
          {steps.map((step, index) => (
            <div 
              key={step.number} 
              className={cn(
                "flex gap-8 transition-all duration-1000",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              {/* Step Number */}
              <span className="font-serif text-3xl font-light text-charcoal/20 shrink-0">
                {step.number}
              </span>

              {/* Step Content */}
              <div className="pt-1">
                <h3 className="font-serif text-xl font-light text-charcoal mb-2">
                  {step.title}
                </h3>
                <p className="text-charcoal/50 font-light text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
