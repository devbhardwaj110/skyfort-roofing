'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Phone, Menu, X } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Why Us', href: '/why-us' },
  { label: 'Our Process', href: '/process' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Contact Us', href: '/contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    if (!navRef.current) return

    const ctx = gsap.context(() => {
      // Staggered load-in of all nav items
      gsap.from('.nav-item', {
        y: -20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        delay: 0.1,
      })

      // Compact navbar + darker bg on scroll past 50px
      ScrollTrigger.create({
        start: 'top -50',
        onEnter: () => {
          gsap.to(navRef.current, {
            backgroundColor: 'rgba(0,0,0,0.95)',
            duration: 0.3,
            ease: 'power2.out',
          })
          gsap.to('.navbar-inner', {
            height: '52px',
            duration: 0.3,
            ease: 'power2.out',
          })
        },
        onLeaveBack: () => {
          gsap.to(navRef.current, {
            backgroundColor: '#111111',
            duration: 0.3,
            ease: 'power2.out',
          })
          gsap.to('.navbar-inner', {
            height: '64px',
            duration: 0.3,
            ease: 'power2.out',
          })
        },
      })
    }, navRef)

    return () => ctx.revert()
  }, [])

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 bg-[#111111] border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="navbar-inner flex items-center justify-between"
          style={{ height: '64px' }}
        >
          {/* Logo */}
          <Link href="/" prefetch={true} className="nav-item flex items-center gap-2 flex-shrink-0 cursor-pointer select-none">
            <Home className="h-5 w-5 text-[#D4A017]" />
            <span className="font-bold text-base sm:text-xl" style={{ fontFamily: 'var(--font-sora)' }}>
              <span className="text-white">SkyFort</span>
              <span className="text-[#D4A017]"> Roofing</span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-4 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                prefetch={true}
                className={`nav-item text-sm font-medium transition-colors duration-200 cursor-pointer select-none ${pathname === link.href ? 'text-[#D4A017] border-b-2 border-[#D4A017]' : 'text-[#A0A0A0] hover:text-white'}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right: Phone + CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <a
              href="tel:+12145550182"
              className="nav-item hidden lg:flex items-center gap-2 text-white hover:text-[#D4A017] transition-colors cursor-pointer select-none"
            >
              <Phone size={16} className="text-[#D4A017]" />
              <span className="text-sm font-medium">(214) 555-0182</span>
            </a>
            <Link
              href="/contact"
              prefetch={true}
              className="magnetic-btn hidden md:inline-flex items-center justify-center bg-[#D4A017] text-black font-bold text-sm px-5 py-2.5 whitespace-nowrap shrink-0 hover:bg-[#B8860B] transition-colors duration-200 cursor-pointer select-none"
            >
              Get Free Inspection
            </Link>
            <button
              className="nav-item md:hidden text-[#A0A0A0] hover:text-white p-1.5 transition-colors cursor-pointer select-none"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Full-Screen Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-[#111111] z-50 flex flex-col">
          {/* Header row matching navbar height */}
          <div
            className="flex items-center justify-between px-4 sm:px-6 border-b border-white/10 flex-shrink-0"
            style={{ height: '64px' }}
          >
            <Link
              href="/"
              prefetch={true}
              className="flex items-center gap-2 flex-shrink-0 cursor-pointer select-none"
              onClick={() => setIsOpen(false)}
            >
              <Home className="h-5 w-5 text-[#D4A017]" />
              <span className="font-bold text-xl" style={{ fontFamily: 'var(--font-sora)' }}>
                <span className="text-white">SkyFort</span>
                <span className="text-[#D4A017]"> Roofing</span>
              </span>
            </Link>
            <button
              className="text-[#A0A0A0] hover:text-white p-2 transition-colors cursor-pointer select-none"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Links */}
          <div className="flex flex-col px-6 py-4 flex-1 overflow-y-auto">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                prefetch={true}
                className={`text-lg font-medium py-4 border-b border-white/5 transition-colors cursor-pointer select-none ${pathname === link.href ? 'text-[#D4A017]' : 'text-[#A0A0A0] hover:text-white'}`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+12145550182"
              className="flex items-center gap-2 text-[#D4A017] text-lg font-medium py-4 border-b border-white/5 cursor-pointer select-none"
              onClick={() => setIsOpen(false)}
            >
              <Phone className="h-4 w-4" />
              (214) 555-0182
            </a>
            <div className="pt-5">
              <Link
                href="/contact"
                prefetch={true}
                className="magnetic-btn block w-full bg-[#D4A017] hover:bg-[#B8860B] text-black font-bold text-base text-center py-4 rounded-none transition-colors duration-200 cursor-pointer select-none"
                onClick={() => setIsOpen(false)}
              >
                Get Free Inspection
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
