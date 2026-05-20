'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const items = [
  '✓ Trusted by 500+ Dallas Homeowners',
  '★ 4.9/5 Rated on Google',
  '🛡 Licensed & Fully Insured',
  '⚡ Same-Day Emergency Response',
  '📋 Free Roof Inspection',
  '✓ Trusted by 500+ Dallas Homeowners',
  '★ 4.9/5 Rated on Google',
  '🛡 Licensed & Fully Insured',
  '⚡ Same-Day Emergency Response',
  '📋 Free Roof Inspection',
]

export default function TrustBar() {
  const trackRef = useRef<HTMLDivElement>(null)
  const tweenRef = useRef<gsap.core.Tween | null>(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const totalWidth = track.scrollWidth / 2

    tweenRef.current = gsap.to(track, {
      x: -totalWidth,
      duration: 25,
      ease: 'none',
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize(
          (x) => parseFloat(x) % totalWidth
        )
      }
    })

    return () => { tweenRef.current?.kill() }
  }, [])

  return (
    <div className="relative bg-[#D4A017] py-4 overflow-hidden">
      {/* Gradient fade left */}
      <div
        className="absolute left-0 top-0 bottom-0 w-24 z-10"
        style={{ background: 'linear-gradient(to right, #D4A017, transparent)' }}
      />
      {/* Gradient fade right */}
      <div
        className="absolute right-0 top-0 bottom-0 w-24 z-10"
        style={{ background: 'linear-gradient(to left, #D4A017, transparent)' }}
      />

      <div
        ref={trackRef}
        className="flex gap-12 whitespace-nowrap will-change-transform"
        onMouseEnter={() => tweenRef.current?.pause()}
        onMouseLeave={() => tweenRef.current?.resume()}
      >
        {items.map((item, i) => (
          <span
            key={i}
            className="text-black font-semibold text-sm flex items-center gap-2 shrink-0"
          >
            {item}
            <span className="text-black/40 mx-4">|</span>
          </span>
        ))}
      </div>
    </div>
  )
}
