import { ImageIcon } from "lucide-react"

export function Authority() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal tracking-tight">
            Led by Legal Expertise
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Image Placeholder */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-square bg-muted flex items-center justify-center max-w-md mx-auto">
              <div className="text-center text-muted-foreground">
                <ImageIcon size={48} className="mx-auto mb-4 opacity-40" />
                <p className="text-sm tracking-widest uppercase">Portrait</p>
                <p className="text-xs mt-2 opacity-60">Founder Image</p>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -top-6 -left-6 w-full h-full border border-gold/20 -z-10 hidden lg:block" />
          </div>

          {/* Right: Text Content */}
          <div className="order-1 lg:order-2">
            <div className="space-y-6 text-lg text-charcoal/80 font-light leading-relaxed">
              <p>
                DiStefano Italian Living is founded by an Italian legal professional with experience in property law and international transactions.
              </p>
              
              <p>
                Clients benefit from legal expertise, local connections, and trusted guidance throughout the acquisition process.
              </p>

              <div className="w-16 h-px bg-gold my-8" />

              <blockquote className="text-xl lg:text-2xl text-charcoal font-serif italic border-l-2 border-gold/40 pl-6">
                {"\"Our approach combines the precision of legal expertise with the warmth of Italian hospitality.\""}
              </blockquote>

              <p className="text-sm text-muted-foreground tracking-wide">
                — Founder, DiStefano Italian Living
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
