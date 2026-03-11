"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "#experience", label: "Experience" },
  { href: "#properties", label: "Properties" },
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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-700",
        isScrolled
          ? "bg-cream/98 backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex items-center justify-between px-8 py-6 lg:px-16 lg:py-8">
        {/* Logo - Minimal */}
        <Link href="/" className="flex items-center">
          <span
            className={cn(
              "font-serif text-lg font-normal tracking-[0.15em] transition-colors duration-500 lg:text-xl",
              isScrolled ? "text-charcoal" : "text-white"
            )}
          >
            DiStefano
          </span>
        </Link>

        {/* Desktop Navigation - Ultra Minimal */}
        <div className="hidden items-center gap-12 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-[13px] font-light tracking-[0.2em] uppercase transition-all duration-500 hover:opacity-60",
                isScrolled ? "text-charcoal" : "text-white"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            className={cn(
              "ml-8 text-[13px] font-light tracking-[0.15em] transition-all duration-500 border-b pb-0.5",
              isScrolled 
                ? "text-charcoal border-charcoal/30 hover:border-charcoal" 
                : "text-white border-white/30 hover:border-white"
            )}
          >
            Begin Your Journey
          </Link>
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
          {isMobileMenuOpen ? <X size={20} strokeWidth={1} /> : <Menu size={20} strokeWidth={1} />}
        </button>
      </nav>

      {/* Mobile Menu - Full Screen Overlay */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 bg-cream z-40 transition-all duration-700 ease-in-out flex flex-col justify-center items-center",
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-6 right-8 text-charcoal p-2"
          aria-label="Close menu"
        >
          <X size={24} strokeWidth={1} />
        </button>
        
        <div className="flex flex-col items-center gap-8">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={cn(
                "text-charcoal text-2xl font-serif font-light tracking-[0.1em] transition-all duration-300",
                isMobileMenuOpen && "animate-fade-in-up",
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-8 text-charcoal text-sm font-light tracking-[0.2em] uppercase border-b border-charcoal/30 pb-1 hover:border-charcoal transition-all duration-300"
          >
            Begin Your Journey
          </Link>
        </div>
      </div>
    </header>
  )
}
