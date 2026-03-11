"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

export function Inquiry() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { ref, isVisible } = useScrollAnimation()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // TODO: Connect to backend API
    // const formData = new FormData(e.currentTarget)
    // await fetch('/api/inquiry', { method: 'POST', body: formData })

    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <section id="contact" ref={ref} className="py-32 lg:py-48 bg-cream">
      <div className="mx-auto max-w-7xl px-8 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Header Content */}
          <div>
            <p 
              className={cn(
                "text-[11px] text-stone tracking-[0.3em] uppercase mb-6 transition-all duration-1000",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
            >
              Get in Touch
            </p>
            <h2 
              className={cn(
                "font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-charcoal leading-[1.15] tracking-[-0.01em] mb-8 transition-all duration-1000 delay-100",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              )}
            >
              Begin Your Italian Journey
            </h2>
            <p 
              className={cn(
                "text-base lg:text-lg text-charcoal/60 font-light leading-relaxed max-w-md transition-all duration-1000 delay-200",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
            >
              Share your vision with us. Every journey begins with a conversation.
            </p>
          </div>

          {/* Right: Form */}
          <div 
            className={cn(
              "transition-all duration-1000 delay-300",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >

        {isSubmitted ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full border border-gold/40 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-gold"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="font-serif text-2xl text-cream mb-4">
              Thank You
            </h3>
            <p className="text-cream/60 font-light">
              We will be in touch with you shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm text-cream/60 font-light tracking-wide mb-2"
              >
                Name
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                className="bg-transparent border-cream/20 text-cream placeholder:text-cream/30 rounded-none focus:border-gold/60 focus:ring-0"
                placeholder="Your full name"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm text-cream/60 font-light tracking-wide mb-2"
              >
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                className="bg-transparent border-cream/20 text-cream placeholder:text-cream/30 rounded-none focus:border-gold/60 focus:ring-0"
                placeholder="your@email.com"
              />
            </div>

            {/* Country */}
            <div>
              <label
                htmlFor="country"
                className="block text-sm text-cream/60 font-light tracking-wide mb-2"
              >
                Country
              </label>
              <Input
                id="country"
                name="country"
                type="text"
                required
                className="bg-transparent border-cream/20 text-cream placeholder:text-cream/30 rounded-none focus:border-gold/60 focus:ring-0"
                placeholder="Your country of residence"
              />
            </div>

            {/* Property Budget Range */}
            <div>
              <label
                htmlFor="budget"
                className="block text-sm text-cream/60 font-light tracking-wide mb-2"
              >
                Property Budget Range
              </label>
              <Select name="budget">
                <SelectTrigger className="bg-transparent border-cream/20 text-cream rounded-none focus:border-gold/60 focus:ring-0">
                  <SelectValue placeholder="Select budget range" />
                </SelectTrigger>
                <SelectContent className="bg-charcoal border-cream/20">
                  <SelectItem value="500k-1m" className="text-cream">500K - 1M EUR</SelectItem>
                  <SelectItem value="1m-3m" className="text-cream">1M - 3M EUR</SelectItem>
                  <SelectItem value="3m-5m" className="text-cream">3M - 5M EUR</SelectItem>
                  <SelectItem value="5m+" className="text-cream">5M+ EUR</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm text-cream/60 font-light tracking-wide mb-2"
              >
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                rows={4}
                className="bg-transparent border-cream/20 text-cream placeholder:text-cream/30 rounded-none focus:border-gold/60 focus:ring-0 resize-none"
                placeholder="Tell us about your vision for Italian living..."
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-none bg-cream text-charcoal hover:bg-cream/90 py-6 text-sm font-light tracking-wider mt-8"
            >
              {isSubmitting ? "Sending..." : "Request Private Consultation"}
            </Button>

            {/* Privacy Note */}
            <p className="text-center text-xs text-cream/40 font-light mt-6">
              All inquiries are handled privately and confidentially.
            </p>
          </form>
        )}
      </div>
    </section>
  )
}
