import Link from 'next/link'
import { Home, MapPin, Phone, Mail, Clock } from 'lucide-react'

const services = [
  'Roof Repair',
  'Roof Replacement',
  'Storm Damage Restoration',
  'Emergency Roofing',
  'Insurance Claim Assistance',
]

const serviceAreas = [
  'Dallas',
  'Plano',
  'Frisco',
  'McKinney',
  'Allen',
  'Richardson',
  'Garland',
  'Irving',
  'Arlington',
  'Fort Worth',
]

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-8">

        {/* Top Grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 mb-10 sm:mb-12">

          {/* Column 1 — Brand */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <div className="flex items-center gap-2 mb-3">
              <Home className="h-5 w-5 text-[#D4A017] flex-shrink-0" />
              <span
                className="text-white font-bold text-lg"
                style={{ fontFamily: 'var(--font-sora)' }}
              >
                SkyFort <span className="text-[#D4A017]">Roofing</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm mb-1">
              Dallas&apos;s Most Trusted Roofing Experts
            </p>
            <p className="text-white/50 text-xs mb-6">TX Lic. #RC-2024-8821</p>

            {/* Social Icons */}
            <div className="flex gap-2.5 justify-center md:justify-start">
              <Link
                href="/contact"
                aria-label="Facebook"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-[#D4A017] hover:border-[#D4A017]/40 transition-colors"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </Link>
              <Link
                href="/contact"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-[#D4A017] hover:border-[#D4A017]/40 transition-colors"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </Link>
              <Link
                href="/contact"
                aria-label="Google"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-[#D4A017] hover:border-[#D4A017]/40 transition-colors"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 11h8.533c.044.385.067.784.067 1.2 0 5.52-3.693 9.44-8.6 9.44-5.014 0-9-3.986-9-9s3.986-9 9-9c2.427 0 4.445.88 6.01 2.32l-2.44 2.44C14.44 7.533 13.28 7 12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5c2.56 0 4.267-1.44 4.773-3.467H12V11z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Column 2 — Services */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <h4 className="text-[#D4A017] font-semibold mb-5 text-xs uppercase tracking-widest">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="text-slate-400 text-sm hover:text-white transition-colors"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Service Areas */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <h4 className="text-[#D4A017] font-semibold mb-5 text-xs uppercase tracking-widest">
              Service Areas
            </h4>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2 mx-auto md:mx-0">
              {serviceAreas.map((area) => (
                <span key={area} className="text-slate-400 text-sm hover:text-white transition-colors cursor-default">
                  {area}
                </span>
              ))}
            </div>
            <p className="text-white/50 text-xs mt-4 leading-relaxed">
              Serving all of DFW Metroplex &amp; surrounding areas
            </p>
          </div>

          {/* Column 4 — Contact */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <h4 className="text-[#D4A017] font-semibold mb-5 text-xs uppercase tracking-widest">
              Contact Us
            </h4>
            <ul className="space-y-4 w-full">
              <li className="flex items-start gap-3 justify-center md:justify-start">
                <MapPin className="h-4 w-4 text-[#D4A017] mt-0.5 flex-shrink-0" />
                <span className="text-slate-400 text-sm leading-relaxed">
                  4820 Lemmon Ave, Suite 200
                  <br />
                  Dallas, TX 75219
                </span>
              </li>
              <li className="flex items-center gap-3 justify-center md:justify-start">
                <Phone className="h-4 w-4 text-[#D4A017] flex-shrink-0" />
                <a
                  href="tel:+12145550182"
                  className="text-slate-400 text-sm hover:text-white transition-colors"
                >
                  (214) 555-0182
                </a>
              </li>
              <li className="flex items-center gap-3 justify-center md:justify-start">
                <Mail className="h-4 w-4 text-[#D4A017] flex-shrink-0" />
                <a
                  href="mailto:info@skyfortroofing.com"
                  className="text-slate-400 text-sm hover:text-white transition-colors break-all"
                >
                  info@skyfortroofing.com
                </a>
              </li>
              <li className="flex items-start gap-3 justify-center md:justify-start">
                <Clock className="h-4 w-4 text-[#D4A017] mt-0.5 flex-shrink-0" />
                <div className="text-slate-400 text-sm space-y-0.5 text-left">
                  <div>Mon–Fri: 7AM–7PM</div>
                  <div>Sat: 8AM–5PM</div>
                  <div className="text-[#D4A017] font-medium mt-1">24/7 Emergency</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
          <p className="text-white/50 text-sm text-center">
            © 2026 SkyFort Roofing &amp; Exteriors. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="text-white/50 text-sm hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-white/50 text-sm hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>

      </div>
    </footer>
  )
}
