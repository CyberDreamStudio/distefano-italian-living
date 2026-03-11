"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "#experience", label: "Experience" },
  { href: "#properties", label: "Properties" },
  { href: "#process", label: "Process" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-cream/95 backdrop-blur-sm border-b border-border shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span
            className={cn(
              "font-serif text-xl font-semibold tracking-wide transition-colors duration-300 lg:text-2xl",
              isScrolled ? "text-charcoal" : "text-white"
            )}
          >
            DiStefano
          </span>
          <span
            className={cn(
              "ml-2 hidden font-sans text-sm font-light tracking-widest uppercase sm:inline-block transition-colors duration-300",
              isScrolled ? "text-charcoal/70" : "text-white/80"
            )}
          >
            Italian Living
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-light tracking-wide transition-colors duration-300 hover:opacity-70",
                isScrolled ? "text-charcoal" : "text-white"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Button
            asChild
            className={cn(
              "ml-4 rounded-none px-6 py-2 text-sm font-light tracking-wider transition-all duration-300",
              isScrolled
                ? "bg-charcoal text-cream hover:bg-charcoal/90"
                : "bg-white/10 text-white backdrop-blur-sm border border-white/30 hover:bg-white/20"
            )}
          >
            <Link href="#contact">Start Your Journey</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={cn(
            "lg:hidden p-2 transition-colors duration-300",
            isScrolled ? "text-charcoal" : "text-white"
          )}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-500 ease-in-out",
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="bg-cream/95 backdrop-blur-sm border-t border-border px-6 py-6">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-charcoal text-base font-light tracking-wide py-2 border-b border-border/50 last:border-0"
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              className="mt-4 rounded-none bg-charcoal text-cream hover:bg-charcoal/90 px-6 py-3 text-sm font-light tracking-wider"
            >
              <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                Start Your Journey
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
