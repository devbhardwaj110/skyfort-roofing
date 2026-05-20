'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface OdometerProps {
  target: number
  suffix?: string
  duration?: number
  className?: string
}

export default function Odometer({
  target,
  suffix = '+',
  duration = 2.5,
  className = ''
}: OdometerProps) {
  const ref = useRef<HTMLDivElement>(null)
  const triggered = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Build digit columns
    const digits = String(target).split('')
    el.innerHTML = ''
    el.style.display = 'flex'
    el.style.alignItems = 'flex-start'
    el.style.overflow = 'hidden'
    el.style.lineHeight = '1'

    digits.forEach((digit, index) => {
      const col = document.createElement('div')
      col.style.overflow = 'hidden'
      col.style.height = '1em'

      const strip = document.createElement('div')
      strip.style.display = 'flex'
      strip.style.flexDirection = 'column'

      // Add numbers 0-9 then the target digit
      for (let i = 0; i <= 9; i++) {
        const num = document.createElement('span')
        num.style.display = 'block'
        num.style.height = '1em'
        num.textContent = String(i)
        strip.appendChild(num)
      }

      col.appendChild(strip)
      el.appendChild(col)

      ScrollTrigger.create({
        trigger: el,
        start: 'top 85%',
        onEnter: () => {
          if (triggered.current) return
          triggered.current = true

          const targetDigit = parseInt(digit)
          gsap.to(strip, {
            y: -(targetDigit * 1) + 'em',
            duration: duration - index * 0.15,
            ease: 'power4.out',
            delay: index * 0.08,
          })
        }
      })
    })

    // Add suffix
    const suf = document.createElement('span')
    suf.textContent = suffix
    suf.style.alignSelf = 'flex-start'
    el.appendChild(suf)

  }, [target, suffix, duration])

  return (
    <div
      ref={ref}
      className={className}
    />
  )
}
