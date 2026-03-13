"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-700",
        isScrolled
          ? "bg-cream/95 backdrop-blur-sm"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8 lg:py-8">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span
            className={cn(
              "font-serif text-lg font-normal tracking-wide transition-colors duration-500 lg:text-xl",
              isScrolled ? "text-charcoal" : "text-white"
            )}
          >
            DiStefano
          </span>
          <span
            className={cn(
              "ml-3 font-sans text-[10px] font-light tracking-[0.25em] uppercase transition-colors duration-500",
              isScrolled ? "text-charcoal/60" : "text-white/60"
            )}
          >
            Italian Living
          </span>
        </Link>

        {/* Desktop Navigation - Minimal */}
        <div className="hidden lg:flex items-center">
          <Button
            asChild
            className={cn(
              "rounded-none px-8 py-5 text-[10px] font-light tracking-[0.2em] uppercase transition-all duration-500",
              isScrolled
                ? "bg-charcoal text-cream hover:bg-charcoal/90"
                : "bg-white/10 text-white backdrop-blur-sm border border-white/20 hover:bg-white/20"
            )}
          >
            <Link href="#contact">Start Your Journey</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={cn(
            "lg:hidden p-2 transition-colors duration-500",
            isScrolled ? "text-charcoal" : "text-white"
          )}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu - Minimal */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-700 ease-in-out",
          isMobileMenuOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="bg-cream/98 backdrop-blur-sm px-6 py-8">
          <Button
            asChild
            className="w-full rounded-none bg-charcoal text-cream hover:bg-charcoal/90 px-6 py-5 text-[10px] font-light tracking-[0.2em] uppercase"
          >
            <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
              Start Your Journey
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
