'use client'
import { useEffect } from 'react'
import gsap from 'gsap'

export function useTilt(selector: string) {
  useEffect(() => {
    const cards = document.querySelectorAll(selector)

    const handlers: Array<{
      el: HTMLElement
      onMove: (e: MouseEvent) => void
      onLeave: () => void
    }> = []

    cards.forEach((card) => {
      const el = card as HTMLElement
      el.style.transformStyle = 'preserve-3d'
      el.style.transition = 'transform 0.1s ease'

      const onMove = (e: MouseEvent) => {
        const rect = el.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        const centerX = rect.width / 2
        const centerY = rect.height / 2
        const rotateX = ((y - centerY) / centerY) * -12
        const rotateY = ((x - centerX) / centerX) * 12

        gsap.to(el, {
          rotateX,
          rotateY,
          scale: 1.03,
          duration: 0.4,
          ease: 'power2.out',
          transformPerspective: 800,
        })

        const shine = el.querySelector('.tilt-shine') as HTMLElement
        if (shine) {
          const shineX = (x / rect.width) * 100
          const shineY = (y / rect.height) * 100
          shine.style.background = `radial-gradient(circle at ${shineX}% ${shineY}%, rgba(212,160,23,0.15) 0%, transparent 60%)`
        }
      }

      const onLeave = () => {
        gsap.to(el, {
          rotateX: 0,
          rotateY: 0,
          scale: 1,
          duration: 0.6,
          ease: 'elastic.out(1, 0.5)',
        })
        const shine = el.querySelector('.tilt-shine') as HTMLElement
        if (shine) shine.style.background = 'transparent'
      }

      el.addEventListener('mousemove', onMove)
      el.addEventListener('mouseleave', onLeave)
      handlers.push({ el, onMove, onLeave })
    })

    return () => {
      handlers.forEach(({ el, onMove, onLeave }) => {
        el.removeEventListener('mousemove', onMove)
        el.removeEventListener('mouseleave', onLeave)
      })
    }
  }, [selector])
}
