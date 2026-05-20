import sharp from 'sharp'
import { join } from 'path'

const dir = './public/images'

// Re-compress large background/scene images from their PNG sources at lower quality
const targets = [
  { src: 'hero-bg.png',           quality: 60, maxW: 1400 },
  { src: 'project-1.png',         quality: 60, maxW: 1200 },
  { src: 'service-replacement.png', quality: 60, maxW: 1200 },
  { src: 'services-bg.png',       quality: 60, maxW: 1400 },
  { src: 'about-1.png',           quality: 60, maxW: 1200 },
  { src: 'about-2.png',           quality: 60, maxW: 1200 },
  { src: 'about-3.png',           quality: 60, maxW: 1200 },
  { src: 'project-2.png',         quality: 60, maxW: 1200 },
  { src: 'project-3.png',         quality: 60, maxW: 1200 },
  { src: 'service-repair.png',    quality: 60, maxW: 1200 },
  { src: 'service-storm.png',     quality: 60, maxW: 1200 },
  { src: 'service-insurance.png', quality: 60, maxW: 1200 },
  { src: 'service-emergency.png', quality: 60, maxW: 1200 },
  { src: 'emergency-bg.png',      quality: 60, maxW: 1400 },
]

for (const { src, quality, maxW } of targets) {
  const inputPath = join(dir, src)
  const outputPath = join(dir, src.replace(/\.(png|jpg|jpeg)$/i, '.webp'))

  const info = await sharp(inputPath)
    .resize(maxW, null, { withoutEnlargement: true })
    .webp({ quality })
    .toFile(outputPath)

  console.log(`${src} → ${(info.size / 1024).toFixed(1)} KB  (q${quality})`)
}

console.log('Done!')
