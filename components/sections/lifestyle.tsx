import { ImageIcon } from "lucide-react"
import { FadeIn } from "@/components/ui/fade-in"

const lifestyles = [
  {
    title: "Coastal Living",
    subtitle: "Amalfi, Sardinia, Puglia",
  },
  {
    title: "Countryside Retreats",
    subtitle: "Tuscany, Umbria, Piedmont",
  },
  {
    title: "Historic Estates",
    subtitle: "Rome, Florence, Milan",
  },
]

export function Lifestyle() {
  return (
    <section className="py-32 lg:py-48 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header - Minimal */}
        <FadeIn className="text-center mb-24 lg:mb-32">
          <p className="text-[10px] tracking-[0.3em] uppercase text-charcoal/40 font-light mb-6">
            Destinations
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-charcoal tracking-wide font-normal leading-relaxed">
            Experience the Italy<br />
            Few Truly Know
          </h2>
        </FadeIn>

        {/* Lifestyle Grid - More breathing room */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {lifestyles.map((lifestyle, index) => (
            <FadeIn
              key={lifestyle.title}
              delay={index * 150}
              className="group relative overflow-hidden cursor-pointer"
            >
              {/* Image Placeholder */}
              <div className="aspect-[3/4] bg-muted flex items-center justify-center relative">
                <div className="text-center text-muted-foreground z-10">
                  <ImageIcon size={32} className="mx-auto mb-3 opacity-30" />
                  <p className="text-[10px] tracking-[0.2em] uppercase">{lifestyle.title}</p>
                </div>
                
                {/* Hover Overlay - Subtle */}
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/30 transition-all duration-700" />
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-10">
                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-700">
                  <h3 className="font-serif text-xl lg:text-2xl text-charcoal group-hover:text-white transition-colors duration-700 font-normal tracking-wide">
                    {lifestyle.title}
                  </h3>
                  <p className="mt-3 text-[11px] tracking-[0.15em] uppercase text-charcoal/50 group-hover:text-white/60 font-light transition-colors duration-700">
                    {lifestyle.subtitle}
                  </p>
                </div>
                
                {/* Decorative Line */}
                <div className="mt-6 w-0 group-hover:w-12 h-px bg-white/60 transition-all duration-700" />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
