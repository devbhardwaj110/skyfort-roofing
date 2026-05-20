'use client'
import Link from 'next/link'

const bullets = [
  '32k Partners Have Worked With Us',
  'Professional And Experienced Team',
  'Provide The Best Roof Services',
]

export default function AboutCollage() {
  return (
    <section className="about-section bg-[#111111] py-14 lg:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left — Image collage ── */}
          <div className="relative">
            {/* Top large image */}
            <div
              className="about-img-1 w-full h-[280px] sm:h-[300px] bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: "url('/images/about-1.webp')" }}
            />

            {/* Bottom row — single col on mobile, two cols on sm+ */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[3px] mt-[3px]">
              <div
                className="about-img-2 h-[185px] bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/images/about-2.webp')" }}
              />
              <div
                className="about-img-3 h-[185px] bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/images/about-3.webp')" }}
              />
            </div>

            {/* Floating stat card */}
            <div className="about-stat-card absolute bottom-4 left-4 z-10 bg-[#D4A017] text-black p-4 rounded-none shadow-2xl">
              <div className="text-3xl font-black" style={{ fontFamily: 'var(--font-sora)' }}>500+</div>
              <div className="text-sm font-semibold uppercase tracking-wide mt-1">
                Projects Completed
              </div>
            </div>
          </div>

          {/* ── Right — Content ── */}
          <div className="about-content">
            <p className="text-[#D4A017] text-xs font-semibold tracking-widest uppercase mb-4">
              About Us
            </p>

            <h2
              className="split-headline text-white text-3xl lg:text-[36px] font-bold leading-tight mb-5"
              style={{ fontFamily: 'var(--font-sora)' }}
            >
              We&apos;re Committed To Roofing Excellence
            </h2>

            <p className="text-[#A0A0A0] text-sm leading-relaxed mb-8">
              SkyFort Roofing &amp; Exteriors was built on a simple belief: homeowners
              deserve honest work, fair pricing, and a crew they can trust. For over 15
              years we&apos;ve delivered exactly that across every neighborhood in DFW.
            </p>

            <ul className="space-y-4 mb-9">
              {bullets.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className="flex-shrink-0 mt-[5px]"
                    style={{
                      width: '8px',
                      height: '8px',
                      backgroundColor: '#D4A017',
                      display: 'inline-block',
                    }}
                  />
                  <span className="text-[#A0A0A0] text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <div className="about-cta-wrap mt-6">
              <Link
                href="/contact"
                className="magnetic-btn inline-flex items-center gap-2 border-2 border-[#D4A017] text-[#D4A017] font-bold px-6 py-3 hover:bg-[#D4A017] hover:text-black transition-colors duration-200 cursor-pointer whitespace-nowrap"
              >
                Our Story →
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
