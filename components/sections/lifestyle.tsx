import { ImageIcon } from "lucide-react"

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
    <section className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal tracking-tight">
            Experience the Italy
          </h2>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal tracking-tight mt-2">
            Few Truly Know
          </h2>
        </div>

        {/* Lifestyle Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {lifestyles.map((lifestyle) => (
            <div
              key={lifestyle.title}
              className="group relative overflow-hidden cursor-pointer"
            >
              {/* Image Placeholder */}
              <div className="aspect-[3/4] bg-muted flex items-center justify-center relative">
                <div className="text-center text-muted-foreground z-10">
                  <ImageIcon size={48} className="mx-auto mb-4 opacity-40" />
                  <p className="text-sm tracking-widest uppercase">{lifestyle.title}</p>
                  <p className="text-xs mt-2 opacity-60">Image Placeholder</p>
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-all duration-500" />
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="font-serif text-2xl text-charcoal group-hover:text-white transition-colors duration-500">
                    {lifestyle.title}
                  </h3>
                  <p className="mt-2 text-sm text-charcoal/60 group-hover:text-white/70 font-light tracking-wide transition-colors duration-500">
                    {lifestyle.subtitle}
                  </p>
                </div>
                
                {/* Decorative Line */}
                <div className="mt-4 w-0 group-hover:w-16 h-px bg-gold transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
