"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const steps = [
  {
    number: "01",
    title: "Initial Consultation",
    summary: "Understanding your vision",
    details: "We begin with a private conversation to understand your goals, preferences, and dreams for Italian living. Every journey is unique, and we take time to listen before we guide.",
  },
  {
    number: "02",
    title: "Curated Property Discovery",
    summary: "Private selection across Italy",
    details: "Based on your vision, we curate a selection of properties from our exclusive network. Each property is vetted for quality, authenticity, and alignment with your lifestyle.",
  },
  {
    number: "03",
    title: "Italy Experience",
    summary: "Visit and explore",
    details: "Experience Italy firsthand with our curated visits. Beyond property tours, immerse yourself in the local culture, cuisine, and community that will become your new home.",
  },
  {
    number: "04",
    title: "Secure Acquisition",
    summary: "Legal process and completion",
    details: "Our team handles every legal detail, from notarial processes to final documentation. We ensure a seamless transition from discovery to ownership.",
  },
]

export function Process() {
  const [expandedStep, setExpandedStep] = useState<string | null>(null)

  return (
    <section id="process" className="py-32 lg:py-48 bg-background">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-24 lg:mb-32">
          <p className="text-[10px] tracking-[0.3em] uppercase text-charcoal/40 font-light mb-6">
            The Process
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-charcoal tracking-wide font-normal">
            A Discreet and Personal Journey
          </h2>
        </div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 lg:left-1/2 top-0 bottom-0 w-px bg-border lg:-translate-x-px" />

          {/* Steps */}
          <div className="space-y-16 lg:space-y-24">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={cn(
                  "relative pl-12 lg:pl-0",
                  index % 2 === 0 ? "lg:pr-1/2 lg:text-right" : "lg:pl-1/2 lg:text-left"
                )}
              >
                {/* Number Circle */}
                <div 
                  className={cn(
                    "absolute top-0 w-8 h-8 bg-background border border-charcoal/15 flex items-center justify-center",
                    "left-0 lg:left-1/2 lg:-translate-x-1/2"
                  )}
                >
                  <span className="text-[10px] text-charcoal/60 tracking-wider">{step.number}</span>
                </div>

                {/* Content */}
                <div className={cn(
                  "pt-1",
                  index % 2 === 0 ? "lg:pr-16" : "lg:pl-16"
                )}>
                  <h3 className="font-serif text-lg lg:text-xl text-charcoal font-normal tracking-wide mb-2">
                    {step.title}
                  </h3>
                  
                  <p className="text-[11px] tracking-[0.15em] uppercase text-charcoal/40 mb-4">
                    {step.summary}
                  </p>
                  
                  {/* Expandable Details */}
                  <button
                    onClick={() => setExpandedStep(expandedStep === step.number ? null : step.number)}
                    className={cn(
                      "flex items-center gap-2 text-charcoal/50 hover:text-charcoal transition-colors duration-500",
                      index % 2 === 0 ? "lg:ml-auto" : ""
                    )}
                  >
                    <span className="text-[10px] tracking-[0.2em] uppercase font-light">
                      {expandedStep === step.number ? "Less" : "Learn more"}
                    </span>
                    <ChevronDown 
                      size={12} 
                      className={cn(
                        "transition-transform duration-500",
                        expandedStep === step.number ? "rotate-180" : ""
                      )} 
                    />
                  </button>
                  
                  {/* Expanded Content */}
                  <div className={cn(
                    "overflow-hidden transition-all duration-700 ease-in-out",
                    expandedStep === step.number ? "max-h-40 opacity-100 mt-6" : "max-h-0 opacity-0"
                  )}>
                    <p className="text-charcoal/60 font-light text-sm leading-relaxed">
                      {step.details}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
