'use client'

import { Phone, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function FinalCTA() {
  return (
    <section
      className="relative overflow-hidden py-20 lg:py-24 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/emergency-bg.webp')" }}
    >
      {/* Orange gradient overlay — preserves existing brand color */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#D4A017]/90 to-[#B8860B]/90" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="text-center"
        >
          <h2
            className="text-white font-extrabold mb-5 max-w-3xl mx-auto leading-tight"
            style={{
              fontFamily: 'var(--font-sora)',
              fontSize: 'clamp(1.875rem, 4vw, 2.75rem)',
            }}
          >
            Don&apos;t Let a Damaged Roof Become a Bigger Problem.
          </h2>
          <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Get a free professional inspection from Dallas&apos;s most trusted roofing crew —
            no obligation, no pressure.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-7">
            <Link
              href="/contact"
              className="magnetic-btn inline-flex items-center justify-center font-bold shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 bg-white text-[#8B6914] px-8 py-4 w-full sm:w-auto whitespace-nowrap cursor-pointer"
            >
              Book Free Inspection
            </Link>
            <a
              href="tel:+12145550182"
              className="magnetic-btn inline-flex items-center justify-center gap-2 rounded-md font-semibold border-2 border-white text-white px-8 py-4 w-full sm:w-auto whitespace-nowrap hover:bg-white hover:text-[#D4A017] transition-colors duration-200 cursor-pointer"
            >
              <Phone size={16} />
              Call (214) 555-0182
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-white/75 text-sm">
            <span className="flex items-center gap-1.5">
              <CheckCircle className="h-4 w-4" />
              No obligation
            </span>
            <span className="text-white/30">·</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="h-4 w-4" />
              Response within 2 hours
            </span>
            <span className="text-white/30">·</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="h-4 w-4" />
              Licensed &amp; Insured
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
