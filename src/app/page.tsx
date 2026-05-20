'use client'
import dynamic from 'next/dynamic'
import { useScrollAnimations } from '@/hooks/useScrollAnimations'
import { useTilt } from '@/hooks/useTilt'
import Navbar from '@/components/layout/Navbar'
import Hero from '@/components/sections/Hero'
import TrustBar from '@/components/sections/TrustBar'
import AboutCollage from '@/components/sections/AboutCollage'
import Services from '@/components/sections/Services'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import Process from '@/components/sections/Process'
import FeaturedProject from '@/components/sections/FeaturedProject'

// Defer the horizontal-scroll pinned section — it owns its own ScrollTrigger
// and is well below the fold, so lazy-loading it saves ~40 KB of initial JS parse.
const ProjectPortfolio = dynamic(
  () => import('@/components/sections/ProjectPortfolio'),
  { ssr: false }
)
import Testimonials from '@/components/sections/Testimonials'
import FinalCTA from '@/components/sections/FinalCTA'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/layout/Footer'

export default function Home() {
  useScrollAnimations()
  useTilt('.portfolio-card')
  useTilt('.why-card')
  useTilt('.service-card')
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustBar />
      <AboutCollage />
      <Services />
      <WhyChooseUs />
      <div className="bg-[#111111] py-8 flex items-center justify-center gap-8 px-4">
        <div className="h-px bg-[#D4A017]/40 flex-1" />
        <div className="flex flex-col items-center gap-2">
          <div className="w-2 h-2 bg-[#D4A017] rotate-45" />
          <span className="text-[#D4A017] text-sm uppercase tracking-[0.4em] font-bold whitespace-nowrap">
            Our Process
          </span>
          <div className="w-2 h-2 bg-[#D4A017] rotate-45" />
        </div>
        <div className="h-px bg-[#D4A017]/40 flex-1" />
      </div>
      <Process />
      <ProjectPortfolio />
      <FeaturedProject />
      <Testimonials />
      <FinalCTA />
      <Contact />
      <Footer />
    </main>
  )
}
