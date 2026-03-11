import Link from "next/link"

const footerLinks = [
  { href: "#experience", label: "Experience" },
  { href: "#process", label: "Process" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-16 lg:py-20 bg-charcoal border-t border-cream/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block">
              <span className="font-serif text-xl text-cream tracking-wide">
                DiStefano
              </span>
              <span className="ml-2 text-sm text-cream/60 font-light tracking-widest uppercase">
                Italian Living
              </span>
            </Link>
            <p className="mt-4 text-sm text-cream/40 font-light">
              Private Property & Lifestyle Advisory
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap gap-6 lg:gap-10">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-cream/60 font-light tracking-wide hover:text-cream transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Divider */}
        <div className="mt-12 pt-8 border-t border-cream/10">
          <p className="text-xs text-cream/30 font-light text-center lg:text-left">
            © {currentYear} DiStefano Italian Living. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
