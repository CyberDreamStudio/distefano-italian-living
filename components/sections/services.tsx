import { Compass, MapPin, Home, Scale } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: Compass,
    title: "Discovery",
    description: "Private consultation to understand lifestyle goals.",
  },
  {
    icon: MapPin,
    title: "Curated Italy Experience",
    description: "Private tours and lifestyle immersion across Italy.",
  },
  {
    icon: Home,
    title: "Property Acquisition",
    description: "Access to exclusive properties and negotiation support.",
  },
  {
    icon: Scale,
    title: "Legal & Ownership Support",
    description: "Complete legal assistance including notarial processes.",
  },
]

export function Services() {
  return (
    <section id="properties" className="py-24 lg:py-32 bg-charcoal">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-cream tracking-tight">
            Your Journey to Italy
          </h2>
          <p className="mt-6 text-lg text-cream/60 font-light max-w-2xl mx-auto">
            A fully curated path from discovery to ownership.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="bg-transparent border border-cream/10 rounded-none group hover:border-gold/40 transition-all duration-500"
            >
              <CardContent className="p-8">
                {/* Number */}
                <span className="text-xs text-gold/60 tracking-widest">
                  0{index + 1}
                </span>
                
                {/* Icon */}
                <div className="mt-6 mb-6">
                  <service.icon
                    size={32}
                    strokeWidth={1}
                    className="text-cream/80 group-hover:text-gold transition-colors duration-500"
                  />
                </div>
                
                {/* Title */}
                <h3 className="font-serif text-xl text-cream mb-4">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-cream/50 font-light text-sm leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
