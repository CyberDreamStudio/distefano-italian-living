const steps = [
  {
    number: "01",
    title: "Initial Consultation",
    description: "Understanding your goals and vision.",
  },
  {
    number: "02",
    title: "Curated Property Discovery",
    description: "Private property selection across Italy.",
  },
  {
    number: "03",
    title: "Italy Experience",
    description: "Visit Italy and explore properties.",
  },
  {
    number: "04",
    title: "Secure Acquisition",
    description: "Legal process and ownership completion.",
  },
]

export function Process() {
  return (
    <section id="process" className="py-24 lg:py-32 bg-muted">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal tracking-tight">
            A Discreet and Personal Process
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Desktop Timeline Line */}
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-border" />

          {/* Steps Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Mobile Timeline Connector */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden absolute top-16 left-4 w-px h-full bg-border -z-10" />
                )}

                {/* Step Number Circle */}
                <div className="relative z-10 w-16 h-16 rounded-full bg-background border border-gold/40 flex items-center justify-center mb-6">
                  <span className="font-serif text-lg text-charcoal">{step.number}</span>
                </div>

                {/* Step Content */}
                <div>
                  <h3 className="font-serif text-xl text-charcoal mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground font-light text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
