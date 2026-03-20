import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/sections/hero"
import { TheOffer } from "@/components/sections/theoffer"
import { Services } from "@/components/sections/services"
import { Lifestyle } from "@/components/sections/lifestyle"
import { Process } from "@/components/sections/process"
import { Authority } from "@/components/sections/authority"
import { Inquiry } from "@/components/sections/inquiry"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TheOffer />
        <Services />
        <Lifestyle />
        <Process />
        <Authority />
        <Inquiry />
      </main>
      <Footer />
    </>
  )
}
