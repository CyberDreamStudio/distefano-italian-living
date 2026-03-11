import { ImageIcon } from "lucide-react"

export function Emotional() {
  return (
    <section id="experience" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal tracking-tight">
            More Than Property.
          </h2>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal tracking-tight mt-2">
            A Way of Living.
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Image Placeholder */}
          <div className="relative">
            <div className="aspect-[4/5] bg-muted flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <ImageIcon size={48} className="mx-auto mb-4 opacity-40" />
                <p className="text-sm tracking-widest uppercase">Editorial Image</p>
                <p className="text-xs mt-2 opacity-60">Italian Villa or Landscape</p>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-gold/30 hidden lg:block" />
          </div>

          {/* Right: Text Content */}
          <div className="lg:pl-8">
            <div className="space-y-6 text-lg text-charcoal/80 font-light leading-relaxed">
              <p className="text-xl lg:text-2xl text-charcoal font-normal">
                For many, Italy is a destination.
              </p>
              <p className="text-xl lg:text-2xl text-charcoal font-normal">
                For a few, it becomes home.
              </p>
              
              <div className="w-16 h-px bg-gold my-8" />
              
              <p>
                DiStefano Italian Living guides international buyers through the journey of discovering, experiencing, and ultimately owning a piece of Italy.
              </p>
              
              <p>
                From the moment you arrive to the moment you receive the keys to your home, every detail is curated.
              </p>
              
              <p className="text-charcoal font-medium italic">
                This is not real estate. This is Italian living.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
