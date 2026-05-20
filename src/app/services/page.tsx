'use client'
import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Services from '@/components/sections/Services'

gsap.registerPlugin(ScrollTrigger)

export default function ServicesPage() {
  useEffect(() => {
    const t = setTimeout(() => {
      // Card scroll animations
      gsap.from('.service-card', {
        y: 50,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.services-section',
          start: 'top 80%',
        },
      })

      // Card tilt effect
      const cards = document.querySelectorAll('.service-card')
      cards.forEach((card) => {
        const el = card as HTMLElement
        el.style.transformStyle = 'preserve-3d'
        el.style.transition = 'transform 0.1s ease'

        el.addEventListener('mousemove', (e: MouseEvent) => {
          const rect = el.getBoundingClientRect()
          const x = e.clientX - rect.left
          const y = e.clientY - rect.top
          const rotateX = ((y - rect.height / 2) / rect.height / 2) * -10
          const rotateY = ((x - rect.width / 2) / rect.width / 2) * 10
          el.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`
        })

        el.addEventListener('mouseleave', () => {
          el.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)'
          el.style.transition = 'transform 0.6s cubic-bezier(0.23,1,0.32,1)'
        })
      })
    }, 300)

    return () => clearTimeout(t)
  }, [])

  return (
    <>
      <Navbar />
      <div className="bg-[#111111] pt-24 pb-8 md:pt-32 md:pb-16 flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white" style={{ fontFamily: 'var(--font-sora)' }}>
            Our Services
          </h1>
        </div>
      </div>
      <Services />
      <Footer />
    </>
  )
}
