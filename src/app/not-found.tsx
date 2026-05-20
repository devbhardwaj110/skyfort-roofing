'use client'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="bg-[#111111] min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-[180px] font-black text-[#D4A017] font-sora leading-none opacity-20 select-none">
            404
          </h1>
          <div className="-mt-16 relative z-10">
            <h2 className="text-4xl font-bold text-white font-sora mb-4">
              Page Not Found
            </h2>
            <p className="text-[#A0A0A0] mb-8 text-lg max-w-md mx-auto">
              Looks like this page is missing — just like a damaged roof section.
              Let us help you find your way back.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                href="/"
                className="magnetic-btn bg-[#D4A017] text-black font-bold px-8 py-4 hover:bg-[#B8860B] transition-colors cursor-pointer whitespace-nowrap"
              >
                Back to Home
              </Link>
              <Link
                href="/contact"
                className="magnetic-btn border-2 border-white text-white font-bold px-8 py-4 hover:bg-white hover:text-black transition-colors cursor-pointer whitespace-nowrap"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
