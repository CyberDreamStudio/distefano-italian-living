import { ImageIcon } from "lucide-react"
import { FadeIn } from "@/components/ui/fade-in"

export function Emotional() {
  return (
    <section id="experience" className="py-40 lg:py-56 bg-background border-b border-charcoal/10">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Section Header - More minimal */}
        <FadeIn className="text-center mb-24 lg:mb-32">
          <p className="text-[10px] tracking-[0.3em] uppercase text-charcoal/40 font-light mb-6">
            The Vision
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-charcoal tracking-wide font-normal leading-relaxed">
            More Than Property.<br />
            A Way of Living.
          </h2>
        </FadeIn>

        {/* Two Column Layout - More breathing room */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Image Placeholder */}
          <FadeIn delay={100} direction="left">
            <div className="aspect-[4/5] bg-muted flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <ImageIcon size={32} className="mx-auto mb-3 opacity-30" />
                <p className="text-[10px] tracking-[0.2em] uppercase">Editorial Image</p>
              </div>
            </div>
          </FadeIn>

          {/* Right: Text Content - Lighter, more space */}
          <FadeIn delay={200} direction="right" className="lg:pl-8">
            <div className="space-y-8">
              <p className="text-lg lg:text-xl text-charcoal font-light leading-relaxed">
                For many, Italy is a destination.
              </p>
              <p className="text-lg lg:text-xl text-charcoal font-light leading-relaxed">
                For a few, it becomes home.
              </p>
              
              <div className="w-12 h-px bg-charcoal/20 my-10" />
              
              <p className="text-charcoal/60 font-light text-sm leading-loose">
                DiStefano Italian Living guides international buyers through the journey of discovering, experiencing, and ultimately owning a piece of Italy.
              </p>
              
              <p className="text-charcoal/60 font-light text-sm leading-loose">
                From the moment you arrive to the moment you receive the keys to your home, every detail is curated.
              </p>
              
              <p className="text-charcoal/80 font-light text-sm italic tracking-wide pt-4">
                This is not real estate. This is Italian living.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
