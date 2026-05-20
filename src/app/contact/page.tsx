import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Contact from '@/components/sections/Contact'

export const metadata = {
  title: 'Contact Us | SkyFort Roofing & Exteriors',
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <div className="bg-[#111111] pt-24 pb-8 md:pt-32 md:pb-16 flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white" style={{ fontFamily: 'var(--font-sora)' }}>
            Contact Us
          </h1>
        </div>
      </div>
      <Contact />
      <Footer />
    </>
  )
}
