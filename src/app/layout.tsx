import type { Metadata } from 'next'
import { Sora, DM_Sans } from 'next/font/google'
import './globals.css'
import SmoothScroll from '@/components/providers/SmoothScroll'
import MagneticProvider from '@/components/providers/MagneticProvider'

const sora = Sora({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-sora',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'SkyFort Roofing & Exteriors | Dallas Roofing Experts',
  description:
    "Dallas's most trusted roofing company. Roof repair, replacement, storm damage & emergency roofing. Licensed & insured. Free inspections. Call (214) 555-0182.",
  keywords:
    'roofing dallas tx, roof repair dallas, roof replacement dallas, storm damage roofing dallas, emergency roofer dallas',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'SkyFort Roofing & Exteriors',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '4820 Lemmon Ave, Suite 200',
    addressLocality: 'Dallas',
    addressRegion: 'TX',
    postalCode: '75219',
    addressCountry: 'US',
  },
  telephone: '(214) 555-0182',
  url: 'https://skyfortroofing.com',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '200',
  },
  openingHours: ['Mo-Fr 07:00-19:00', 'Sa 08:00-17:00'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${dmSans.variable} scroll-smooth`}>
      <head>
        <link rel="preload" as="image" href="/images/hero-bg-mobile.webp" media="(max-width: 767px)" fetchPriority="high" />
        <link rel="preload" as="image" href="/images/hero-bg.webp" media="(min-width: 768px)" fetchPriority="high" />
        <script dangerouslySetInnerHTML={{ __html: `
  (function() {
    if (sessionStorage.getItem('sf-done')) return;
    sessionStorage.setItem('sf-done', '1');
    var o = document.createElement('div');
    o.style.cssText = 'position:fixed;inset:0;z-index:99999;background:#D4A017;display:flex;align-items:center;justify-content:center;pointer-events:none';
    o.innerHTML = '<div style="text-align:center"><p style="font-size:48px;font-weight:800;color:#fff;letter-spacing:0.1em;font-family:sans-serif;margin:0">SKYFORT</p><p style="font-size:12px;color:rgba(255,255,255,0.7);letter-spacing:0.3em;font-family:sans-serif;margin:8px 0 0">ROOFING & EXTERIORS</p></div>';
    document.documentElement.appendChild(o);
    setTimeout(function(){
      o.style.transition='transform 0.8s cubic-bezier(0.76,0,0.24,1)';
      o.style.transform='translateY(-100%)';
      setTimeout(function(){ o.remove(); }, 900);
    }, 1500);
  })();
`}} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <SmoothScroll>
          <MagneticProvider>
            {children}
          </MagneticProvider>
        </SmoothScroll>
      </body>
    </html>
  )
}
