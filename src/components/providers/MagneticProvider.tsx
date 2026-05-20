'use client'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function MagneticProvider({
  children
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  useEffect(() => {
    const init = () => {
      const buttons = document.querySelectorAll('.magnetic-btn')

      buttons.forEach((btn) => {
        const el = btn as HTMLElement

        // Skip if already initialized
        if (el.dataset.magnetic) return
        el.dataset.magnetic = 'true'

        const onMove = (e: MouseEvent) => {
          const rect = el.getBoundingClientRect()
          const x = (e.clientX - rect.left - rect.width / 2) * 0.3
          const y = (e.clientY - rect.top - rect.height / 2) * 0.3
          el.style.transform = `translate(${x}px, ${y}px)`
          el.style.transition = 'transform 0.2s ease'
        }

        const onLeave = () => {
          el.style.transform = 'translate(0,0)'
          el.style.transition = 'transform 0.6s cubic-bezier(0.23,1,0.32,1)'
        }

        el.addEventListener('mousemove', onMove)
        el.addEventListener('mouseleave', onLeave)
      })
    }

    const t1 = setTimeout(init, 300)
    const t2 = setTimeout(init, 800)
    const t3 = setTimeout(init, 1500)

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
    }
  }, [pathname])

  return <>{children}</>
}
