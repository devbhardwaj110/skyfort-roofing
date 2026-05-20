'use client'

import Link from 'next/link'
import { Wrench, Home, CloudRain, AlertTriangle, FileCheck } from 'lucide-react'

const services = [
  {
    icon: Wrench,
    title: 'Roof Repair',
    description:
      'Fast, precise repairs for leaks, missing shingles, and flashing failures — stopping damage before it spreads.',
    image: '/images/service-repair-800.webp',
  },
  {
    icon: Home,
    title: 'Roof Replacement',
    description:
      'Full tear-off and installation using premium GAF and Owens Corning materials, backed by manufacturer warranty.',
    image: '/images/service-replacement-800.webp',
  },
  {
    icon: CloudRain,
    title: 'Storm Damage Restoration',
    description:
      'Rapid assessment and restoration after hail, wind, or severe weather — we document everything for your claim.',
    image: '/images/service-storm-800.webp',
  },
  {
    icon: AlertTriangle,
    title: 'Emergency Roofing',
    description:
      'Round-the-clock emergency response. We tarp, secure, and repair your roof the same day — any hour, any weather.',
    image: '/images/service-emergency-800.webp',
    badge: '24/7',
  },
  {
    icon: FileCheck,
    title: 'Insurance Claim Assistance',
    description:
      'We work directly with your insurance adjuster, handle the paperwork, and maximize your claim payout.',
    image: '/images/service-insurance-800.webp',
  },
]

export default function Services() {
  return (
    <section
      id="services"
      className="services-section bg-[#1A1A1A] py-14 lg:py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#D4A017] text-xs font-semibold tracking-widest uppercase mb-3">
            Our Services
          </p>
          <h2
            className="split-headline text-white text-3xl lg:text-[38px] font-bold leading-tight"
            style={{ fontFamily: 'var(--font-sora)' }}
          >
            Complete Roofing Solutions for Every Need
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <div
                key={i}
                className="service-card group relative overflow-hidden bg-[#1A1A1A] border border-white/10 rounded-2xl flex flex-col hover:border-[#D4A017]/40 hover:shadow-lg hover:shadow-[#D4A017]/10 hover:-translate-y-1 transition-all duration-200"
              >
                {/* 24/7 badge */}
                {service.badge && (
                  <span className="absolute top-4 right-4 z-10 bg-[#D4A017] text-black text-[10px] font-extrabold px-2 py-0.5 rounded-full tracking-wider uppercase">
                    {service.badge}
                  </span>
                )}

                {/* Image */}
                <div className="relative w-full h-40 sm:h-48 overflow-hidden rounded-t-2xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                    width={800}
                    height={338}
                  />
                </div>

                {/* Content */}
                <div className="p-7 flex flex-col flex-1">
                  {/* Icon */}
                  <div className="bg-[#D4A017]/15 rounded-xl p-3 inline-flex items-center justify-center w-fit mb-5">
                    <Icon className="h-6 w-6 text-[#D4A017]" />
                  </div>

                  {/* Title */}
                  <h3
                    className="text-white font-bold text-xl mb-3 leading-snug"
                    style={{ fontFamily: 'var(--font-sora)' }}
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#A0A0A0] text-sm leading-relaxed flex-1 mb-6">
                    {service.description}
                  </p>

                  {/* Learn more */}
                  <Link
                    href="/contact"
                    className="text-[#D4A017] text-sm font-semibold hover:underline transition-all duration-200 flex items-center gap-1 mt-auto"
                  >
                    Learn More
                    <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA row */}
        <div className="text-center mt-14">
          <p
            className="text-white text-lg font-medium mb-5"
            style={{ fontFamily: 'var(--font-sora)' }}
          >
            Need help choosing the right service?
          </p>
          <Link
            href="/contact"
            className="magnetic-btn inline-flex items-center justify-center bg-[#D4A017] hover:bg-[#B8860B] text-black font-bold px-8 py-4 rounded-none transition-colors duration-200 text-sm"
          >
            Contact Us →
          </Link>
        </div>

      </div>
    </section>
  )
}
