'use client'

import { useEffect, useRef } from 'react'
import { Wrench, Star, Phone, Shield } from 'lucide-react'
import Link from 'next/link'
import gsap from 'gsap'

const cards = [
  {
    icon: Wrench,
    title: 'Factory-Trained Installers',
    description:
      'Every crew member is factory-trained and manufacturer-certified, delivering consistent quality on every single job.',
  },
  {
    icon: Star,
    title: 'High Quality Roof Materials',
    description:
      'We source only GAF and Owens Corning premium materials, backed by full manufacturer warranties built to last.',
  },
  {
    icon: Phone,
    title: 'Effective Communication',
    description:
      "We keep you informed at every step — from the first inspection to final cleanup. No surprises, ever.",
  },
  {
    icon: Shield,
    title: 'Prioritizing Safety & Satisfaction',
    description:
      'Your safety and complete satisfaction come first. Every project is done right, or we come back and make it right.',
  },
]

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const cleanupFns: (() => void)[] = []

    const ctx = gsap.context(() => {
      // Card hover: gold line grows, icon rotates 10deg, card lifts y:-5
      const whyCards = gsap.utils.toArray<HTMLElement>('.why-card')
      whyCards.forEach((card) => {
        const line = card.querySelector<HTMLElement>('.why-card-line')
        const icon = card.querySelector<HTMLElement>('.why-card-icon')

        const onEnter = () => {
          gsap.to(card, { y: -5, duration: 0.3, ease: 'power2.out' })
          if (line) gsap.to(line, { width: '100%', duration: 0.4, ease: 'power2.out' })
          if (icon) gsap.to(icon, { rotate: 10, duration: 0.3, ease: 'power2.out' })
        }
        const onLeave = () => {
          gsap.to(card, { y: 0, duration: 0.3, ease: 'power2.out' })
          if (line) gsap.to(line, { width: '0%', duration: 0.3, ease: 'power2.out' })
          if (icon) gsap.to(icon, { rotate: 0, duration: 0.3, ease: 'power2.out' })
        }

        card.addEventListener('mouseenter', onEnter)
        card.addEventListener('mouseleave', onLeave)
        cleanupFns.push(() => {
          card.removeEventListener('mouseenter', onEnter)
          card.removeEventListener('mouseleave', onLeave)
        })
      })
    }, sectionRef)

    return () => {
      ctx.revert()
      cleanupFns.forEach((fn) => fn())
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="why-us"
      className="why-section bg-[#F5F0E8] py-14 lg:py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#6B5000] text-xs font-semibold tracking-widest uppercase mb-3">
            Why Choose Us
          </p>
          <h2
            className="split-headline why-heading text-[#1A1A1A] text-3xl lg:text-[38px] font-bold leading-tight"
            style={{ fontFamily: 'var(--font-sora)' }}
          >
            Why Dallas Homeowners Choose SkyFort
          </h2>
        </div>

        {/* 4 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {cards.map((card, i) => {
            const Icon = card.icon
            return (
              <div
                key={i}
                className="why-card relative bg-white border-b-4 border-b-[#D4A017] rounded-none shadow-md p-4 lg:p-7 flex flex-col cursor-default overflow-hidden"
              >
                <div className="tilt-shine absolute inset-0 pointer-events-none z-10" />
                {/* Icon box */}
                <div className="why-card-icon bg-[#D4A017] text-black p-3 rounded-none inline-flex items-center justify-center mb-5 w-fit">
                  <Icon className="h-5 w-5" />
                </div>

                <h3
                  className="text-[#1A1A1A] font-semibold text-base mb-2.5 leading-snug"
                  style={{ fontFamily: 'var(--font-sora)' }}
                >
                  {card.title}
                </h3>

                <p className="text-[#6B6B6B] text-sm leading-relaxed flex-1 mb-5">
                  {card.description}
                </p>

                <Link
                  href="/contact"
                  className="text-[#D4A017] text-sm font-semibold hover:underline underline-offset-4 mt-auto mb-4"
                >
                  Read More →
                </Link>

                {/* Animated gold line — grows on hover */}
                <div
                  className="why-card-line h-[3px] bg-[#D4A017]"
                  style={{ width: '0%' }}
                />
              </div>
            )
          })}
        </div>

        {/* Stats strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16 pt-12 border-t border-[#1A1A1A]/10">
          {[
            { value: '500+', label: 'Projects Completed' },
            { value: '15+',  label: 'Years Experience' },
            { value: '4.9★', label: 'Google Rating' },
            { value: '24hr', label: 'Emergency Response' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <span
                className="text-5xl font-black text-[#6B5000] block"
                style={{ fontFamily: 'var(--font-sora)' }}
              >
                {value}
              </span>
              <p className="text-[#6B6B6B] text-sm mt-2 font-medium">{label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
