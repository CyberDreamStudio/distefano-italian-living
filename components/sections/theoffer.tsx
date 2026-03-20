import { ImageIcon } from "lucide-react"
import { FadeIn } from "@/components/ui/fade-in"

const pillars = [
  "Sourcing",
  "Due diligence",
  "Negotiation",
  "Closing",
] as const

export function TheOffer() {
  return (
    <section id="offer" className="py-40 lg:py-56 bg-background border-b border-charcoal/10">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <FadeIn delay={100} direction="left">
            <div className="aspect-[4/5] bg-muted flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <ImageIcon size={32} className="mx-auto mb-3 opacity-30" />
                <p className="text-[10px] tracking-[0.2em] uppercase">Editorial Image</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={200} direction="right" className="lg:pl-8">
            <p className="text-[10px] tracking-[0.3em] uppercase text-charcoal/40 font-light mb-8">
              The Offer
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-charcoal tracking-wide font-normal leading-snug mb-10 lg:mb-12">
              A Complete Italian Property
              <br />
              Acquisition
            </h2>
            <div className="space-y-6">
              <p className="text-charcoal/65 font-light text-sm lg:text-[15px] leading-[1.85]">
                DiStefano Italian Living serves international clients seeking property in Italy with
                clarity and care. From the first exploration to final transfer, the entire acquisition
                is managed as one continuous, structured process.
              </p>
              <p className="text-charcoal/65 font-light text-sm lg:text-[15px] leading-[1.85]">
                Property sourcing, legal due diligence, negotiation, and closing remain under the same
                counsel. Clients are never asked to coordinate multiple intermediaries or navigate
                foreign procedures alone.
              </p>
              <p className="text-charcoal/65 font-light text-sm lg:text-[15px] leading-[1.85]">
                This is not conventional real estate. It is a curated acquisition experience —
                discreet, exacting, and entirely aligned with your interests.
              </p>
            </div>
            <div className="mt-14 lg:mt-16 pt-10 border-t border-charcoal/10">
              <ul
                className="flex flex-wrap gap-x-10 gap-y-3"
                aria-label="Acquisition scope"
              >
                {pillars.map((label) => (
                  <li
                    key={label}
                    className="text-[10px] sm:text-[11px] tracking-[0.22em] uppercase text-charcoal/40 font-light"
                  >
                    {label}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
