import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://docs.artgeneration.me'
const locales = ['ru', 'en']

// Recursively get all MDX files
function getAllMdxFiles(dir: string): string[] {
  const files: string[] = []

  if (!fs.existsSync(dir)) {
    return files
  }

  const entries = fs.readdirSync(dir, { withFileTypes: true })

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)

    if (entry.isDirectory()) {
      files.push(...getAllMdxFiles(fullPath))
    } else if (entry.name.endsWith('.mdx')) {
      files.push(fullPath)
    }
  }

  return files
}

// Get file modification time
function getModTime(filePath: string): Date {
  try {
    const stats = fs.statSync(filePath)
    return stats.mtime
  } catch {
    return new Date()
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const urls: MetadataRoute.Sitemap = []

  for (const locale of locales) {
    // Add home page
    urls.push({
      url: `${BASE_URL}/${locale}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    })

    // Add news page
    const newsDir = path.join(process.cwd(), 'content', locale, 'news')
    if (fs.existsSync(newsDir)) {
      const newsIndex = path.join(newsDir, 'index.mdx')
      urls.push({
        url: `${BASE_URL}/${locale}/news`,
        lastModified: fs.existsSync(newsIndex) ? getModTime(newsIndex) : new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
      })
    }

    // Add about-docs pages
    const aboutDocsDir = path.join(process.cwd(), 'content', locale, 'about-docs')
    if (fs.existsSync(aboutDocsDir)) {
      const aboutDocsFiles = getAllMdxFiles(aboutDocsDir)
      for (const file of aboutDocsFiles) {
        const relativePath = path.relative(aboutDocsDir, file)
        const slug = relativePath
          .replace(/\.mdx$/, '')
          .replace(/\/index$/, '')
          .replace(/\\/g, '/')

        const url = slug
          ? `${BASE_URL}/${locale}/about-docs/${slug}`
          : `${BASE_URL}/${locale}/about-docs`

        if (!urls.some((u) => u.url === url)) {
          urls.push({
            url,
            lastModified: getModTime(file),
            changeFrequency: 'monthly',
            priority: 0.7,
          })
        }
      }
    }

    // Collect from docs content directory
    const contentDir = path.join(process.cwd(), 'content', locale, 'docs')
    if (fs.existsSync(contentDir)) {
      const files = getAllMdxFiles(contentDir)

      for (const file of files) {
        const relativePath = path.relative(contentDir, file)
        const slug = relativePath
          .replace(/\.mdx$/, '')
          .replace(/\/index$/, '')
          .replace(/\\/g, '/')

        const url = slug ? `${BASE_URL}/${locale}/docs/${slug}` : `${BASE_URL}/${locale}/docs`

        // Avoid duplicates
        if (!urls.some((u) => u.url === url)) {
          urls.push({
            url,
            lastModified: getModTime(file),
            changeFrequency: 'weekly',
            priority: slug ? 0.8 : 0.9,
          })
        }
      }
    }
  }

  return urls
}
