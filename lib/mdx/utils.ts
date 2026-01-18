import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { Locale } from '../i18n/config'

const CONTENT_PATH = path.join(process.cwd(), 'content')

export interface DocMeta {
  title: string
  description?: string
  image?: string
  lastModified?: string
}

export interface DocContent {
  meta: DocMeta
  content: string
  slug: string[]
}

export function getDocBySlug(locale: Locale, slugPath: string[]): DocContent | null {
  const basePath = path.join(CONTENT_PATH, locale, 'docs')

  // Try exact file match
  let filePath = path.join(basePath, ...slugPath) + '.mdx'

  // Try index file in directory
  if (!fs.existsSync(filePath)) {
    filePath = path.join(basePath, ...slugPath, 'index.mdx')
  }

  // Also check for section overview files (e.g., generator.mdx for /generator)
  if (!fs.existsSync(filePath) && slugPath.length > 0) {
    const parentPath = slugPath.slice(0, -1)
    const sectionFile = path.join(basePath, ...parentPath, slugPath[slugPath.length - 1] + '.mdx')
    if (fs.existsSync(sectionFile)) {
      filePath = sectionFile
    }
  }

  if (!fs.existsSync(filePath)) {
    return null
  }

  const source = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(source)

  return {
    meta: {
      title: data.title || slugPath[slugPath.length - 1] || 'Documentation',
      description: data.description,
      image: data.image,
      lastModified: data.lastModified,
    },
    content,
    slug: slugPath,
  }
}

export function getAllDocSlugs(locale: Locale): string[][] {
  const basePath = path.join(CONTENT_PATH, locale, 'docs')
  const slugs: string[][] = []

  function scanDirectory(dir: string, currentPath: string[] = []) {
    if (!fs.existsSync(dir)) return

    const items = fs.readdirSync(dir)

    for (const item of items) {
      const itemPath = path.join(dir, item)
      const stat = fs.statSync(itemPath)

      if (stat.isDirectory()) {
        // Add the directory as a slug (for index pages)
        slugs.push([...currentPath, item])
        scanDirectory(itemPath, [...currentPath, item])
      } else if (item.endsWith('.mdx')) {
        const slug = item.replace('.mdx', '')
        if (slug !== 'index') {
          slugs.push([...currentPath, slug])
        } else if (currentPath.length === 0) {
          // Root index
          slugs.push([])
        }
      }
    }
  }

  scanDirectory(basePath)

  // Add root docs page
  if (!slugs.some(s => s.length === 0)) {
    slugs.unshift([])
  }

  return slugs
}

export function getDocContent(locale: Locale, slug: string[]): string | null {
  const doc = getDocBySlug(locale, slug)
  return doc?.content || null
}

export function extractHeadings(content: string): { id: string; text: string; level: number }[] {
  const headingRegex = /^(#{2,4})\s+(.+)$/gm
  const headings: { id: string; text: string; level: number }[] = []

  let match
  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length
    const text = match[2].trim()
    const id = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')

    headings.push({ id, text, level })
  }

  return headings
}
