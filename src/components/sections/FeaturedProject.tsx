'use client'

import { CheckCircle, XCircle } from 'lucide-react'

const beforeItems = [
  'Old 3-tab shingles, 22 years worn',
  'Multiple active leaks in master bedroom',
  'Hail damage from 2022 storm',
  'Failed DIY patch repairs visible',
]

const afterItems = [
  'GAF Timberline HDZ architectural shingles',
  'Full ice & water shield installation',
  'New ridge cap and pipe boot seals',
  'Completed in 1 day, zero mess left behind',
]

export default function FeaturedProject() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className="text-center mb-12"
        >
          <p className="text-[#8B6914] text-xs font-semibold tracking-widest uppercase mb-3">
            Featured Project
          </p>
          <h2
            className="text-[#1A1A1A] text-3xl lg:text-[40px] font-bold"
            style={{ fontFamily: 'var(--font-sora)' }}
          >
            Complete Roof Replacement — McKinney, TX
          </h2>
        </div>

        {/* Before / After Panels */}
        <div
          className="grid md:grid-cols-2 gap-5 mb-8"
        >
          {/* Before */}
          <div className="relative bg-[#111111] rounded-2xl p-8 overflow-hidden">
            {/* Diagonal pattern */}
            <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern
                    id="diagBefore"
                    x="0"
                    y="0"
                    width="30"
                    height="30"
                    patternUnits="userSpaceOnUse"
                    patternTransform="rotate(45)"
                  >
                    <line x1="0" y1="0" x2="0" y2="30" stroke="white" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#diagBefore)" />
              </svg>
            </div>

            <div className="relative">
              <span className="inline-flex items-center gap-1.5 bg-red-900/60 text-red-300 text-xs font-bold tracking-widest px-3 py-1.5 rounded-full uppercase mb-7 border border-red-800/50">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 inline-block" />
                Before
              </span>
              <ul className="space-y-3.5">
                {beforeItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                    <XCircle className="h-4 w-4 text-red-400 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* After */}
          <div className="relative bg-[#D4A017]/5 border border-[#D4A017]/20 rounded-2xl p-8">
            <span className="inline-flex items-center gap-1.5 bg-green-100 text-green-700 text-xs font-bold tracking-widest px-3 py-1.5 rounded-full uppercase mb-7 border border-green-200">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
              After
            </span>
            <ul className="space-y-3.5">
              {afterItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[#1A1A1A] text-sm">
                  <CheckCircle className="h-4 w-4 text-[#D4A017] mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Result / Testimonial Card */}
        <div
          className="bg-[#F5F0E8] rounded-2xl p-8 max-w-3xl mx-auto"
          style={{ borderLeft: '4px solid #D4A017' }}
        >
          <p className="text-[#1A1A1A] text-lg font-medium italic mb-5 leading-relaxed">
            &ldquo;The SkyFort team replaced our entire roof in a single day. The quality is
            outstanding — and our energy bill dropped.&rdquo;
          </p>
          <div className="flex items-center gap-3">
            <img
              src="/images/reviewer-mark-80.webp"
              alt="Mark T."
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                objectFit: 'cover',
                objectPosition: 'top',
              }}
            />
            <div>
              <p className="text-[#1A1A1A] font-semibold text-sm">Mark T.</p>
              <p className="text-[#6B6B6B] text-xs">McKinney, TX</p>
            </div>
            <div className="ml-auto text-yellow-400 text-base">★★★★★</div>
          </div>
        </div>
      </div>
    </section>
  )
}
