import sharp from 'sharp'
import { readdir } from 'fs/promises'
import { join } from 'path'

const inputDir = './public/images'
const files = await readdir(inputDir)

for (const file of files) {
  if (!file.match(/\.(png|jpg|jpeg)$/i)) continue

  const inputPath = join(inputDir, file)
  const outputPath = join(inputDir, file)

  await sharp(inputPath)
    .resize(1200, null, {
      withoutEnlargement: true
    })
    .webp({ quality: 80 })
    .toFile(outputPath.replace(/\.(png|jpg|jpeg)$/i, '.webp'))

  console.log(`Optimized: ${file}`)
}

console.log('Done!')
