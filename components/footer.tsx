import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-20 lg:py-28 bg-secondary border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Brand - Minimal */}
          <Link href="/" className="inline-block">
            <span className="font-serif text-lg text-charcoal tracking-wide font-normal">
              DiStefano
            </span>
            <span className="ml-3 text-[10px] text-charcoal/40 font-light tracking-[0.25em] uppercase">
              Italian Living
            </span>
          </Link>
          
          <p className="mt-6 text-[11px] text-charcoal/35 font-light tracking-[0.15em] uppercase">
            Private Property & Lifestyle Advisory
          </p>
        </div>

        {/* Divider */}
        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-[10px] text-charcoal/25 font-light text-center tracking-wide">
            © {currentYear} DiStefano Italian Living
          </p>
        </div>
      </div>
    </footer>
  )
}
