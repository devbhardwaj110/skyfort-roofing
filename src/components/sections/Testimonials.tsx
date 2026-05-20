'use client'

import { useState, useCallback } from 'react'
import Image from 'next/image'

interface Review {
  stars: number
  quote: string
  name: string
  location: string
  project: string
  initials: string
  image?: string
}

const reviews: Review[] = [
  {
    stars: 5,
    quote:
      'SkyFort responded the same day after our roof started leaking from the storm. Had it fully repaired by evening. Absolutely professional from start to finish.',
    name: 'Brian H.',
    location: 'Dallas, TX',
    project: 'Roof Repair after hail storm',
    initials: 'BH',
    image: '/images/reviewer-brian-80.webp',
  },
  {
    stars: 5,
    quote:
      "They handled everything with our insurance company — I barely had to lift a finger. New roof looks incredible and was done in one day.",
    name: 'Jennifer M.',
    location: 'Frisco, TX',
    project: 'Full Roof Replacement + Insurance Claim',
    initials: 'JM',
    image: '/images/reviewer-jennifer-80.webp',
  },
  {
    stars: 5,
    quote:
      "I've used three roofing companies over the years. SkyFort is in a completely different league. On time, clean, honest pricing. Won't use anyone else.",
    name: 'David K.',
    location: 'Plano, TX',
    project: 'Roof Replacement — Owens Corning Duration',
    initials: 'DK',
    image: '/images/reviewer-david-80.webp',
  },
  {
    stars: 5,
    quote:
      'Emergency call at 9pm after a big storm — they were on site within the hour to tarp our roof. Replaced it two days later. Saved us from serious water damage.',
    name: 'Lisa R.',
    location: 'Allen, TX',
    project: 'Emergency Tarping + Replacement',
    initials: 'LR',
    image: '/images/reviewer-lisa-80.webp',
  },
]

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-7 flex flex-col gap-5 h-full">
      <div className="text-yellow-400 text-xl tracking-wider">
        {'★'.repeat(review.stars)}
      </div>
      <p className="text-slate-300 text-sm leading-relaxed flex-1">
        &ldquo;{review.quote}&rdquo;
      </p>
      <div className="flex items-start gap-3 pt-4 border-t border-white/10">
        {review.image ? (
          <Image
            src={review.image}
            alt={review.name}
            width={80}
            height={80}
            style={{ width: 40, height: 40, borderRadius: '50%', objectFit: 'cover', objectPosition: 'top', flexShrink: 0 }}
          />
        ) : (
          <div
            className="w-10 h-10 rounded-full bg-[#D4A017] flex items-center justify-center text-[#1A1A1A] font-bold text-xs flex-shrink-0"
            style={{ fontFamily: 'var(--font-sora)' }}
          >
            {review.initials}
          </div>
        )}
        <div className="flex-1 min-w-0">
          <p className="text-white font-semibold text-sm">{review.name}</p>
          <p className="text-slate-500 text-xs">{review.location}</p>
        </div>
        <p className="text-slate-600 text-xs text-right leading-tight hidden sm:block max-w-[120px]">
          {review.project}
        </p>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const prev = useCallback(() =>
    setCurrent(i => (i === 0 ? reviews.length - 1 : i - 1)), [])
  const next = useCallback(() =>
    setCurrent(i => (i === reviews.length - 1 ? 0 : i + 1)), [])

  return (
    <section id="reviews" className="testimonials-section bg-[#111111] py-14 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#D4A017] text-xs font-semibold tracking-widest uppercase mb-3">
            Reviews
          </p>
          <h2
            className="split-headline text-white text-3xl lg:text-[40px] font-bold mb-3"
            style={{ fontFamily: 'var(--font-sora)' }}
          >
            What Dallas Homeowners Say
          </h2>
          <p className="text-slate-400 text-base">
            ★★★★★ 4.9/5 across 200+ verified Google reviews
          </p>
        </div>

        {/* Desktop: 3-column grid */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6">
          {reviews.slice(0, 3).map((review, i) => (
            <div key={i} className="testimonial-card">
              <ReviewCard review={review} />
            </div>
          ))}
        </div>

        {/* Tablet: 2-column grid */}
        <div className="hidden md:grid lg:hidden md:grid-cols-2 gap-6">
          {reviews.map((review, i) => (
            <div key={i} className="testimonial-card">
              <ReviewCard review={review} />
            </div>
          ))}
        </div>

        {/* Mobile: one-at-a-time carousel */}
        <div className="md:hidden">
          {/* Track */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {reviews.map((review, i) => (
                <div key={i} className="flex-none w-full px-1 testimonial-card">
                  <ReviewCard review={review} />
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-5 mt-7">
            <button
              onClick={prev}
              aria-label="Previous review"
              className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-[#D4A017] hover:text-[#D4A017] transition-colors"
            >
              ‹
            </button>

            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to review ${i + 1}`}
                  className={`rounded-full transition-all duration-200 ${
                    i === current
                      ? 'w-5 h-2 bg-[#D4A017]'
                      : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next review"
              className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-[#D4A017] hover:text-[#D4A017] transition-colors"
            >
              ›
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}
