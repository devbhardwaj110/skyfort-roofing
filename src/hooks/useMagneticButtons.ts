'use client'
import { useEffect } from 'react'
import gsap from 'gsap'

export function useMagneticButtons() {
  useEffect(() => {
    const buttons = document.querySelectorAll('.magnetic-btn')

    buttons.forEach((btn) => {
      const el = btn as HTMLElement

      const onMove = (e: MouseEvent) => {
        const rect = el.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        const deltaX = (e.clientX - centerX) * 0.35
        const deltaY = (e.clientY - centerY) * 0.35
        gsap.to(el, {
          x: deltaX,
          y: deltaY,
          duration: 0.4,
          ease: 'power2.out',
        })
      }

      const onLeave = () => {
        gsap.to(el, {
          x: 0, y: 0,
          duration: 0.6,
          ease: 'elastic.out(1, 0.4)',
        })
      }

      el.addEventListener('mousemove', onMove)
      el.addEventListener('mouseleave', onLeave)

      return () => {
        el.removeEventListener('mousemove', onMove)
        el.removeEventListener('mouseleave', onLeave)
      }
    })
  }, [])
}
