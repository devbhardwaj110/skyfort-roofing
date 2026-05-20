'use client'

import Link from 'next/link'

const steps = [
  {
    number: '01',
    title: 'Book Your Free Inspection',
    description:
      "Schedule online or call us. We'll send a licensed inspector within 24 hours — no pressure, no obligation.",
  },
  {
    number: '02',
    title: 'Get a Transparent Estimate',
    description:
      'We deliver a detailed, written estimate with material options, timeline, and full pricing. No guesswork.',
  },
  {
    number: '03',
    title: 'Fast, Clean Installation',
    description:
      'Our crew arrives on time, works efficiently, and leaves your property spotless. Most jobs completed in 1–2 days.',
  },
]

export default function Process() {
  return (
    <section id="process" className="bg-[#F5F0E8] py-14 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className="text-center mb-16"
        >
          <p className="text-[#8B6914] text-xs font-semibold tracking-widest uppercase mb-3">
            How It Works
          </p>
          <h2
            className="text-[#1A1A1A] text-3xl lg:text-[40px] font-bold mb-4 leading-tight"
            style={{ fontFamily: 'var(--font-sora)' }}
          >
            Getting a New Roof is Easier Than You Think
          </h2>
          <p className="text-[#6B6B6B] text-lg max-w-2xl mx-auto">
            Our 3-step process is designed to be simple, transparent, and stress-free.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Dashed connecting line (desktop only) */}
          <div className="hidden lg:block absolute top-8 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-px border-t-2 border-dashed border-[#D4A017]/40 z-0" />

          <div className="grid lg:grid-cols-3 gap-10 lg:gap-8 relative z-10">
            {steps.map((step, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center"
              >
                {/* Number Circle */}
                <div
                  className="w-16 h-16 rounded-full bg-[#D4A017] flex items-center justify-center text-black font-extrabold text-lg mb-6 shadow-lg shadow-[#D4A017]/25 flex-shrink-0"
                  style={{ fontFamily: 'var(--font-sora)' }}
                >
                  {step.number}
                </div>

                <h3
                  className="text-[#1A1A1A] text-xl font-bold mb-3"
                  style={{ fontFamily: 'var(--font-sora)' }}
                >
                  {step.title}
                </h3>
                <p className="text-[#6B6B6B] text-sm leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          className="text-center mt-14"
        >
          <Link
            href="/contact"
            className="magnetic-btn inline-flex items-center justify-center bg-[#D4A017] text-black font-bold px-8 py-4 w-full sm:w-auto hover:bg-[#B8860B] transition-colors cursor-pointer"
          >
            Start with a Free Inspection
          </Link>
        </div>
      </div>
    </section>
  )
}
