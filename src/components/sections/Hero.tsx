'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const avatars = [
  { bg: '#D4A017', initials: 'SR', color: '#1A1A1A' },
  { bg: '#1E4D8C', initials: 'MK', color: '#FFFFFF' },
  { bg: '#2E7D52', initials: 'AL', color: '#FFFFFF' },
]

const stats = [
  { value: '500+', label: 'Projects Done' },
  { value: '15+', label: 'Years Experience' },
  { value: '4.9★', label: 'Google Rating' },
]

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null)
  const scrollDotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Scroll dot bounce animation
    if (scrollDotRef.current) {
      gsap.to(scrollDotRef.current, {
        y: 24,
        duration: 1,
        ease: 'power1.inOut',
        repeat: -1,
        yoyo: true,
      })
    }

    const introDelay = sessionStorage.getItem('sf-done') ? 100 : 2500
    const delay = setTimeout(() => {
      const tl = gsap.timeline()

      // hero-headline is NOT animated — it renders immediately for LCP
      tl.from('.hero-buttons', {
        y: 20, opacity: 0, duration: 0.5
      })
      .from('.hero-social', {
        y: 12, opacity: 0, duration: 0.4
      }, '-=0.3')
      .from('.hero-stats-card', {
        x: 40, opacity: 0, duration: 0.6, stagger: 0.15, ease: 'power2.out'
      }, '-=0.4')

      // Hero background parallax on scroll
      gsap.to('.hero-bg-img', {
        yPercent: 25,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero-section',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        }
      })
    }, introDelay)

    return () => clearTimeout(delay)
  }, [])

  return (
    <section
      ref={heroRef}
      className="hero-section relative w-full flex items-center"
      style={{ height: '100vh', maxHeight: '100vh' }}
    >
      {/* Background image wrapper */}
      <div className="absolute inset-0 w-full h-full" style={{ overflow: 'hidden' }}>
        <img
          className="hero-bg-img w-full h-full object-cover object-center"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
          src="/images/hero-bg.webp"
          srcSet="/images/hero-bg-mobile.webp 768w, /images/hero-bg.webp 1200w"
          sizes="100vw"
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          decoding="async"
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Left gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

      {/* Floating stats bar — right side, desktop only */}
      <div className="hidden lg:flex absolute right-12 top-1/2 -translate-y-1/2 flex-col z-20">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="hero-stats-card bg-black/50 backdrop-blur-sm border border-[#D4A017]/30 rounded-xl p-5 w-44 text-center mb-4 last:mb-0"
          >
            <div
              className="text-[#D4A017] font-black leading-none mb-1"
              style={{ fontFamily: 'var(--font-sora)', fontSize: '32px', fontWeight: 800 }}
            >
              {stat.value}
            </div>
            <div className="text-white text-sm">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Scroll indicator — bottom center, hidden on mobile */}
      <div className="hidden sm:flex absolute bottom-24 left-1/2 -translate-x-1/2 flex-col items-center z-20">
        <span
          className="text-white/50 text-xs tracking-widest mb-2"
          style={{ fontFamily: 'var(--font-dm-sans)' }}
        >
          SCROLL
        </span>
        <div className="relative h-10 flex justify-center">
          <div className="w-px h-full bg-[#D4A017]/40" />
          <div
            ref={scrollDotRef}
            className="absolute top-0 w-1.5 h-1.5 rounded-full bg-[#D4A017] -translate-x-1/2 left-1/2"
          />
        </div>
      </div>

      {/* Bottom info strip — hidden on mobile */}
      <div className="hidden sm:block absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-sm py-4 px-8 z-20">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
          <span className="text-white/80 text-sm" style={{ fontFamily: 'var(--font-dm-sans)' }}>
            📍 Serving Dallas–Fort Worth Area
          </span>
          <span className="text-white/80 text-sm" style={{ fontFamily: 'var(--font-dm-sans)' }}>
            ⚡ 24/7 Emergency Service Available
          </span>
          <span className="text-white/80 text-sm" style={{ fontFamily: 'var(--font-dm-sans)' }}>
            🛡 Licensed &amp; Insured · TX Lic. #RC-2024-8821
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div>

          {/* Headline */}
          <h1
            className="hero-headline text-white font-black mb-8 leading-tight text-4xl sm:text-5xl lg:text-6xl"
            style={{ fontFamily: 'var(--font-sora)' }}
          >
            Find The Best
            <br />
            Roofing Solutions
          </h1>

          {/* Buttons */}
          <div className="hero-buttons flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8">
            <Link
              href="/contact"
              className="magnetic-btn inline-flex items-center justify-center bg-[#D4A017] text-black font-bold text-sm px-6 py-3 lg:px-8 lg:py-4 w-full sm:w-auto whitespace-nowrap hover:bg-[#B8860B] transition-colors duration-200 cursor-pointer select-none"
            >
              Book A Free Consultation
            </Link>
            <Link
              href="/services"
              className="magnetic-btn inline-flex items-center justify-center border-2 border-white text-white font-bold text-sm px-6 py-3 lg:px-8 lg:py-4 w-full sm:w-auto whitespace-nowrap hover:bg-white hover:text-black transition-colors duration-200 cursor-pointer select-none"
            >
              Explore Our Services
            </Link>
          </div>

          {/* Social proof */}
          <div className="hero-social flex items-center gap-4 mt-8">
            {/* Overlapping avatars */}
            <div className="flex -space-x-3">
              {avatars.map((avatar, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-[#D4A017] flex items-center justify-center text-xs font-bold flex-shrink-0"
                  style={{ backgroundColor: avatar.bg, color: avatar.color, zIndex: avatars.length - i }}
                >
                  {avatar.initials}
                </div>
              ))}
            </div>

            {/* Label */}
            <div>
              <div className="text-white font-semibold text-sm leading-none mb-1">
                1,000+ Satisfied Customers
              </div>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#D4A017] text-xs leading-none">
                    ★
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
