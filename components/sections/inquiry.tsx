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

export function Inquiry() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

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
    <section id="contact" className="py-32 lg:py-48 bg-charcoal">
      <div className="mx-auto max-w-2xl px-6 lg:px-8">
        {/* Section Header - Minimal */}
        <div className="text-center mb-16 lg:mb-24">
          <p className="text-[10px] tracking-[0.3em] uppercase text-gold/50 font-light mb-6">
            Contact
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-cream tracking-wide font-normal">
            Begin Your Italian Journey
          </h2>
          <p className="mt-6 text-sm text-cream/40 font-light tracking-wide">
            Tell us about your vision.
          </p>
        </div>

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
                className="block text-[10px] tracking-[0.2em] uppercase text-cream/50 font-light mb-3"
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
                className="block text-[10px] tracking-[0.2em] uppercase text-cream/50 font-light mb-3"
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
                className="block text-[10px] tracking-[0.2em] uppercase text-cream/50 font-light mb-3"
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
                className="block text-[10px] tracking-[0.2em] uppercase text-cream/50 font-light mb-3"
              >
                Budget Range
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
                className="block text-[10px] tracking-[0.2em] uppercase text-cream/50 font-light mb-3"
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
              className="w-full rounded-none bg-cream/10 border border-cream/20 text-cream hover:bg-cream/20 py-6 text-[10px] font-light tracking-[0.2em] uppercase mt-10 transition-all duration-500"
            >
              {isSubmitting ? "Sending..." : "Request Consultation"}
            </Button>

            {/* Privacy Note */}
            <p className="text-center text-[10px] text-cream/30 font-light mt-8 tracking-wide">
              All inquiries are handled privately and confidentially.
            </p>
          </form>
        )}
      </div>
    </section>
  )
}
