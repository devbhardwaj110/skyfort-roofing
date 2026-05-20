'use client'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Star, Shield, Award } from 'lucide-react'

export default function ReviewsPage() {
  return (
    <>
      <Navbar />

      {/* Hero Banner — dark bg */}
      <div className="bg-[#111111] pt-24 pb-10 md:pt-32 md:pb-16 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-[#D4A017]/30" />

        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <p className="text-[#D4A017] text-sm uppercase tracking-[0.3em] font-semibold mb-4">
            Customer Reviews
          </p>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6" style={{ fontFamily: 'var(--font-sora)' }}>
            What Our Clients Say
          </h1>
          <p className="text-[#A0A0A0] text-lg max-w-xl mx-auto mb-10">
            Trusted by <strong className="text-white">500+ Dallas</strong> homeowners — here&apos;s
            what they say about <strong className="text-white">SkyFort.</strong>
          </p>

          {/* Stats row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="bg-[#1A1A1A] border border-[#D4A017]/20 rounded-xl px-8 py-5 flex items-center gap-4">
              <Star className="text-[#D4A017]" size={32} fill="#D4A017" />
              <div className="text-left">
                <div className="text-3xl font-black text-[#D4A017]" style={{ fontFamily: 'var(--font-sora)' }}>
                  4.9 <span className="text-lg">★★★★★</span>
                </div>
                <div className="text-[#A0A0A0] text-sm">200+ Google Reviews</div>
              </div>
            </div>
            <div className="bg-[#1A1A1A] border border-[#D4A017]/20 rounded-xl px-8 py-5 flex items-center gap-4">
              <Shield className="text-[#D4A017]" size={32} />
              <div className="text-left">
                <div className="text-3xl font-black text-[#D4A017]" style={{ fontFamily: 'var(--font-sora)' }}>500+</div>
                <div className="text-[#A0A0A0] text-sm">Happy Homeowners</div>
              </div>
            </div>
            <div className="bg-[#1A1A1A] border border-[#D4A017]/20 rounded-xl px-8 py-5 flex items-center gap-4">
              <Award className="text-[#D4A017]" size={32} />
              <div className="text-left">
                <div className="text-3xl font-black text-[#D4A017]" style={{ fontFamily: 'var(--font-sora)' }}>15+</div>
                <div className="text-[#A0A0A0] text-sm">Years Serving Dallas</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="bg-[#D4A017]/20 h-px" />

      {/* Reviews on cream background */}
      <div className="bg-[#F5F0E8] py-16 px-4">
        <div className="max-w-7xl mx-auto">

          {/* Section header */}
          <div className="text-center mb-12">
            <p className="text-[#D4A017] text-sm uppercase tracking-widest font-semibold mb-3">Reviews</p>
            <h2 className="text-4xl font-black text-[#1A1A1A] mb-3" style={{ fontFamily: 'var(--font-sora)' }}>
              What Dallas Homeowners Say
            </h2>
            <p className="text-[#6B6B6B]">★★★★★ 4.9/5 across 200+ verified Google reviews</p>
          </div>

          {/* Review cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                stars: 5,
                review: 'SkyFort responded the same day after our roof started leaking from the storm. Had it fully repaired by evening. Absolutely professional from start to finish.',
                initials: 'BH',
                image: '/images/reviewer-brian-80.webp',
                name: 'Brian H.',
                location: 'Dallas, TX',
                project: 'Roof Repair after hail storm',
              },
              {
                stars: 5,
                review: 'They handled everything with our insurance company — I barely had to lift a finger. New roof looks incredible and was done in one day.',
                initials: 'JM',
                image: '/images/reviewer-jennifer-80.webp',
                name: 'Jennifer M.',
                location: 'Frisco, TX',
                project: 'Full Roof Replacement + Insurance Claim',
              },
              {
                stars: 5,
                review: "I've used three roofing companies over the years. SkyFort is in a completely different league. On time, clean, honest pricing. Won't use anyone else.",
                initials: 'DK',
                image: '/images/reviewer-david-80.webp',
                name: 'David K.',
                location: 'Plano, TX',
                project: 'Roof Replacement — Owens Corning Duration',
              },
            ].map((r) => (
              <div key={r.name} className="bg-white rounded-2xl p-7 shadow-sm border border-[#E2E8F0]">
                <div className="text-[#D4A017] text-xl mb-4">{'★'.repeat(r.stars)}</div>
                <p className="text-[#1A1A1A] mb-6 leading-relaxed text-sm">&ldquo;{r.review}&rdquo;</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {r.image ? (
                      <img
                        src={r.image}
                        alt={r.name}
                        style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover', objectPosition: 'top', flexShrink: 0 }}
                      />
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-[#D4A017] flex items-center justify-center text-black font-bold text-sm">
                        {r.initials}
                      </div>
                    )}
                    <div>
                      <p className="font-bold text-[#1A1A1A] text-sm">{r.name}</p>
                      <p className="text-[#6B6B6B] text-xs">{r.location}</p>
                    </div>
                  </div>
                  <p className="text-[#6B6B6B] text-xs text-right max-w-[120px]">{r.project}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Banner */}
          <div className="bg-white border border-[#E2E8F0] rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
            <div className="flex items-center gap-4">
              <div className="text-3xl">📅</div>
              <div>
                <h3 className="text-[#1A1A1A] font-bold text-lg">Ready for a roof you can trust?</h3>
                <p className="text-[#6B6B6B] text-sm">Join 500+ Dallas homeowners who chose SkyFort.</p>
              </div>
            </div>
            <Link
              href="/contact"
              className="magnetic-btn bg-[#D4A017] text-black font-bold px-8 py-4 rounded-xl whitespace-nowrap flex items-center gap-2 hover:bg-[#B8860B] transition-colors cursor-pointer"
            >
              Get Free Inspection →
            </Link>
          </div>

          {/* Trust badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-[#E2E8F0] pt-10">
            {[
              { icon: '🛡', title: 'Licensed & Insured', desc: 'Fully licensed for your peace of mind' },
              { icon: '⭐', title: 'Top-Rated Local Company', desc: '4.9 stars across 200+ reviews' },
              { icon: '🤝', title: 'Honest & Transparent', desc: 'No hidden fees. Ever.' },
              { icon: '⏰', title: 'Fast & Reliable Service', desc: 'On time. Every time.' },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <p className="text-[#1A1A1A] font-semibold text-sm">{item.title}</p>
                  <p className="text-[#6B6B6B] text-xs mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      <Footer />
    </>
  )
}
