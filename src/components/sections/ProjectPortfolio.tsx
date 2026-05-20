'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  { title: 'Applewood Pointe Roofing', location: 'Dallas, TX', type: 'Roof Repair', image: '/images/project-1.webp' },
  { title: 'Downway House Replacement', location: 'Plano, TX', type: 'Replacement', image: '/images/project-2.webp' },
  { title: 'Lakewood Estate Storm Repair', location: 'Frisco, TX', type: 'Storm Damage', image: '/images/project-3.webp' },
]

export default function ProjectPortfolio() {
  const trackRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const track = trackRef.current
    const section = sectionRef.current
    if (!track || !section) return

    // Only run horizontal scroll on large screens
    if (window.innerWidth < 1024) return

    const totalWidth = track.scrollWidth - window.innerWidth

    if (totalWidth <= 0) return

    const triggers: ScrollTrigger[] = []

    const tween = gsap.to(track, {
      x: -totalWidth,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: () => '+=' + totalWidth,
        pin: true,
        scrub: 1,
        anticipatePin: 1,
        onToggle: (self) => triggers.push(self),
      }
    })

    if (tween.scrollTrigger) triggers.push(tween.scrollTrigger)

    return () => {
      tween.kill()
      triggers.forEach(t => t.kill())
    }
  }, [])

  return (
    <>
      {/* Mobile / tablet: vertical stack */}
      <div className="lg:hidden bg-[#111111] py-14 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col gap-5">
          {projects.map((project) => (
            <div
              key={project.title}
              className="portfolio-card relative w-full h-64 sm:h-80 overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <p className="text-[#D4A017] text-xs uppercase tracking-widest mb-1">
                  {project.location}
                </p>
                <h3
                  className="text-white font-bold text-xl mb-2"
                  style={{ fontFamily: 'var(--font-sora)' }}
                >
                  {project.title}
                </h3>
                <span className="bg-[#D4A017] text-black text-xs px-3 py-1 font-semibold uppercase">
                  {project.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop: GSAP horizontal scroll */}
      <div ref={sectionRef} className="hidden lg:block portfolio-section relative overflow-hidden bg-[#111111]">
        <div className="sticky top-0 h-screen flex items-center">
          <div ref={trackRef} className="flex gap-6 pl-20 will-change-transform">
            {projects.map((project) => (
              <div
                key={project.title}
                className="portfolio-card relative flex-none w-[600px] h-[500px] rounded-none overflow-hidden"
              >
                <div className="tilt-shine absolute inset-0 pointer-events-none z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-8 left-8">
                  <p className="text-[#D4A017] text-xs uppercase tracking-widest mb-2">
                    {project.location}
                  </p>
                  <h3
                    className="text-white font-bold text-2xl mb-3"
                    style={{ fontFamily: 'var(--font-sora)' }}
                  >
                    {project.title}
                  </h3>
                  <span className="bg-[#D4A017] text-black text-xs px-3 py-1 font-semibold uppercase">
                    {project.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
