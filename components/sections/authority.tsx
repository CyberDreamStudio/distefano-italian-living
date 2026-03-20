import { ImageIcon } from "lucide-react"
import { FadeIn } from "@/components/ui/fade-in"

export function Authority() {
  return (
    <section id="about" className="py-40 lg:py-56 bg-background">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Section Header - Minimal */}
        <FadeIn className="text-center mb-24 lg:mb-32">
          <p className="text-[10px] tracking-[0.3em] uppercase text-charcoal/40 font-light mb-6">
            About
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-charcoal tracking-wide font-normal">
            Led by Legal Expertise
          </h2>
        </FadeIn>

        {/* Two Column Layout - More space */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Image Placeholder */}
          <FadeIn delay={100} direction="left" className="relative order-2 lg:order-1">
            <div className="aspect-square bg-muted flex items-center justify-center max-w-sm mx-auto">
              <div className="text-center text-muted-foreground">
                <ImageIcon size={32} className="mx-auto mb-3 opacity-30" />
                <p className="text-[10px] tracking-[0.2em] uppercase">Portrait</p>
              </div>
            </div>
          </FadeIn>

          {/* Right: Text Content - Lighter */}
          <FadeIn delay={200} direction="right" className="order-1 lg:order-2">
            <div className="space-y-8">
              <p className="text-charcoal/60 font-light text-sm leading-loose">
                DiStefano Italian Living is founded by an Italian legal professional with experience in property law and international transactions.
              </p>
              
              <p className="text-charcoal/60 font-light text-sm leading-loose">
                Clients benefit from legal expertise, local connections, and trusted guidance throughout the acquisition process.
              </p>

              <div className="w-12 h-px bg-charcoal/20 my-10" />

              <blockquote className="text-lg lg:text-xl text-charcoal font-serif italic font-light leading-relaxed">
                {"\"Our approach combines the precision of legal expertise with the warmth of Italian hospitality.\""}
              </blockquote>

              <p className="text-[11px] tracking-[0.15em] uppercase text-charcoal/40">
                — Founder, DiStefano Italian Living
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
