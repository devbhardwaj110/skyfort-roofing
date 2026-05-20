import sharp from 'sharp'

await sharp('./public/images/hero-bg.png')
  .resize(768, null, { withoutEnlargement: true })
  .webp({ quality: 60 })
  .toFile('./public/images/hero-bg-mobile.webp')
  .then(info => console.log(`hero-bg-mobile.webp → ${(info.size / 1024).toFixed(1)} KB`))
