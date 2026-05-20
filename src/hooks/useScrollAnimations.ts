'use client'
import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(ScrollTrigger, SplitText)

export function useScrollAnimations() {
  useEffect(() => {
    // On mobile (< 768px) skip SplitText entirely — it forces a layout reflow for
    // every element, which is the primary source of TBT on slow mobile connections.
    const isMobile = window.innerWidth < 768
    let rafId: number

    const ctx = gsap.context(() => {

      if (!isMobile) {
        // --- SPLIT TEXT on all section headlines (desktop/tablet only) ---
        document.querySelectorAll('.split-headline').forEach((el) => {
          const split = new SplitText(el, { type: 'words', mask: 'words' })
          gsap.from(split.words, {
            yPercent: 110,
            opacity: 0,
            duration: 0.8,
            stagger: 0.07,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          })
        })
      }

      // --- ABOUT section images ---
      gsap.from('.about-img-1', {
        x: -50, opacity: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: '.about-section', start: 'top 80%' }
      })
      gsap.from('.about-img-2', {
        x: -40, opacity: 0, duration: 0.8, ease: 'power3.out', delay: 0.15,
        scrollTrigger: { trigger: '.about-section', start: 'top 80%' }
      })
      gsap.from('.about-img-3', {
        x: -30, opacity: 0, duration: 0.8, ease: 'power3.out', delay: 0.28,
        scrollTrigger: { trigger: '.about-section', start: 'top 80%' }
      })
      gsap.from('.about-stat-card', {
        scale: 0, opacity: 0, duration: 0.7, ease: 'back.out(1.7)', delay: 0.4,
        scrollTrigger: { trigger: '.about-section', start: 'top 75%' }
      })
      gsap.from('.about-content > *', {
        y: 30, opacity: 0, duration: 0.7, stagger: 0.12, ease: 'power2.out',
        scrollTrigger: { trigger: '.about-section', start: 'top 78%' }
      })

      // --- WHY US cards — batched to avoid per-element reflow reads ---
      ScrollTrigger.batch('.why-card', {
        start: 'top 80%',
        onEnter: (els) =>
          gsap.from(els, { y: 50, opacity: 0, duration: 0.7, stagger: 0.14, ease: 'power2.out' }),
      })

      // --- TESTIMONIAL cards — batched ---
      ScrollTrigger.batch('.testimonial-card', {
        start: 'top 82%',
        onEnter: (els) =>
          gsap.from(els, { y: 40, opacity: 0, duration: 0.7, stagger: 0.15, ease: 'power2.out' }),
      })

      // --- CONTACT columns ---
      gsap.from('.contact-left', {
        x: -40, opacity: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: '.contact-section', start: 'top 80%' }
      })
      gsap.from('.contact-right', {
        x: 40, opacity: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: '.contact-section', start: 'top 80%' }
      })

    })

    // Single refresh after first paint so all trigger offsets use the final layout.
    rafId = requestAnimationFrame(() => ScrollTrigger.refresh())

    return () => {
      cancelAnimationFrame(rafId)
      ctx.revert()
    }
  }, [])
}
