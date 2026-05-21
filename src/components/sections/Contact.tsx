'use client'

import { useEffect, useRef, useState } from 'react'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import gsap from 'gsap'

const contactDetails = [
  {
    icon: MapPin,
    label: 'Address',
    value: '4820 Lemmon Ave, Suite 200, Dallas TX',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '(214) 555-0182',
    href: 'tel:+12145550182',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@skyfortroofing.com',
    href: 'mailto:info@skyfortroofing.com',
  },
  {
    icon: Clock,
    label: 'Hours',
    value: 'Mon–Fri 7AM–7PM  |  24/7 Emergency',
  },
]

const serviceOptions = [
  'Roof Repair',
  'Roof Replacement',
  'Storm Damage',
  'Emergency Roofing',
  'Insurance Claim Assistance',
]

// Base classes without GSAP-managed focus border (GSAP handles that)
const inputClass =
  'contact-input w-full bg-[#111111] border border-white/10 text-white text-sm placeholder-white/30 rounded-none px-4 py-3 focus:outline-none transition-colors duration-200'

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  useEffect(() => {
    if (!sectionRef.current) return

    const cleanupFns: (() => void)[] = []

    const ctx = gsap.context(() => {
      // Input focus: GSAP animates border to gold
      const inputs = gsap.utils.toArray<HTMLElement>('.contact-input')
      inputs.forEach((input) => {
        const onFocus = () =>
          gsap.to(input, { borderColor: '#D4A017', duration: 0.2, ease: 'power2.out' })
        const onBlur = () =>
          gsap.to(input, {
            borderColor: 'rgba(255,255,255,0.1)',
            duration: 0.2,
            ease: 'power2.out',
          })

        input.addEventListener('focus', onFocus)
        input.addEventListener('blur', onBlur)
        cleanupFns.push(() => {
          input.removeEventListener('focus', onFocus)
          input.removeEventListener('blur', onBlur)
        })
      })

      // Submit button hover: scale:1.02
      const submitBtn = document.querySelector<HTMLElement>('.contact-submit')
      if (submitBtn) {
        const onEnter = () =>
          gsap.to(submitBtn, { scale: 1.02, duration: 0.2, ease: 'power2.out' })
        const onLeave = () =>
          gsap.to(submitBtn, { scale: 1, duration: 0.2, ease: 'power2.out' })

        submitBtn.addEventListener('mouseenter', onEnter)
        submitBtn.addEventListener('mouseleave', onLeave)
        cleanupFns.push(() => {
          submitBtn.removeEventListener('mouseenter', onEnter)
          submitBtn.removeEventListener('mouseleave', onLeave)
        })
      }
    }, sectionRef)

    return () => {
      ctx.revert()
      cleanupFns.forEach((fn) => fn())
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="contact-form"
      className="contact-section bg-[#1A1A1A] py-14 lg:py-20 overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[45%_55%] gap-12 lg:gap-16 items-start">

          {/* ── Left — Contact info ── */}
          <div className="contact-left">
            <p className="text-[#D4A017] text-xs font-semibold tracking-widest uppercase mb-4">
              Contact Us
            </p>
            <h2
              className="split-headline text-white text-3xl lg:text-[38px] font-bold leading-tight mb-5"
              style={{ fontFamily: 'var(--font-sora)' }}
            >
              Get Your Free Inspection
            </h2>
            <p className="text-[#A0A0A0] text-sm leading-relaxed mb-10">
              Reach out today and one of our licensed roofing specialists will be
              in touch within 2 hours — no pressure, no obligation.
            </p>

            <ul className="space-y-7">
              {contactDetails.map((item, i) => {
                const Icon = item.icon
                return (
                  <li key={i} className="flex items-start gap-4">
                    <div className="bg-[#D4A017]/15 border border-[#D4A017]/25 p-2.5 flex-shrink-0">
                      <Icon className="h-4 w-4 text-[#D4A017]" />
                    </div>
                    <div>
                      <p className="text-white/40 text-xs uppercase tracking-wide mb-0.5">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-white text-sm font-medium hover:text-[#D4A017] transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-white text-sm font-medium">{item.value}</p>
                      )}
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* ── Right — Form card ── */}
          <div className="contact-right contact-form-card">
            <div className="bg-[#2C2C2C] rounded-none p-8">
              <h3
                className="text-white text-xl font-bold mb-6"
                style={{ fontFamily: 'var(--font-sora)' }}
              >
                Send Us a Message
              </h3>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="text-[#D4A017] text-5xl mb-4">✓</div>
                  <h3 className="text-white text-2xl font-bold mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-[#A0A0A0]">
                    We&apos;ll contact you within 2 hours.
                  </p>
                </div>
              ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-white/50 text-xs uppercase tracking-wide mb-1.5">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Smith"
                    required
                    className={inputClass}
                  />
                </div>

                {/* Phone + Email */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/50 text-xs uppercase tracking-wide mb-1.5">
                      Phone
                    </label>
                    <input
                      type="tel"
                      placeholder="(214) 000-0000"
                      required
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-white/50 text-xs uppercase tracking-wide mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      required
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Service */}
                <div>
                  <label htmlFor="service-select" className="block text-white/50 text-xs uppercase tracking-wide mb-1.5">
                    Service Needed
                  </label>
                  <select
                    id="service-select"
                    defaultValue=""
                    required
                    className={`${inputClass} cursor-pointer`}
                  >
                    <option value="" disabled className="bg-[#111111]">
                      Select a service…
                    </option>
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-[#111111]">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-white/50 text-xs uppercase tracking-wide mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your roof…"
                    required
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="magnetic-btn contact-submit w-full bg-[#D4A017] hover:bg-[#B8860B] text-black font-bold py-4 rounded-none text-sm focus:outline-none cursor-pointer mt-2"
                >
                  Send Message →
                </button>
              </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
