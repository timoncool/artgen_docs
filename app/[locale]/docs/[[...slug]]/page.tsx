import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

interface DocsPageProps {
  params: {
    locale: string
    slug?: string[]
  }
}

// Check if file exists in content directory
function findContentFile(locale: string, slug?: string[]): string | null {
  const basePath = path.join(process.cwd(), 'content', locale, 'docs')
  const slugPath = slug ? slug.join('/') : ''

  // Try direct path first
  const directPath = path.join(basePath, `${slugPath}.mdx`)
  if (fs.existsSync(directPath)) {
    return directPath
  }

  // Try index file for directories
  const indexPath = path.join(basePath, slugPath, 'index.mdx')
  if (fs.existsSync(indexPath)) {
    return indexPath
  }

  // Try root docs index
  if (!slug || slug.length === 0) {
    const rootIndex = path.join(basePath, 'index.mdx')
    if (fs.existsSync(rootIndex)) {
      return rootIndex
    }
  }

  return null
}

// Generate metadata
export async function generateMetadata({
  params,
}: DocsPageProps): Promise<Metadata> {
  const { locale, slug } = params
  const filePath = findContentFile(locale, slug)

  if (!filePath) {
    return {
      title: 'Not Found',
    }
  }

  try {
    const source = fs.readFileSync(filePath, 'utf-8')
    const { data: frontmatter } = matter(source)

    const title = frontmatter.title || 'Documentation'
    const description = frontmatter.description || 'ArtGeneration documentation'

    return {
      title: `${title} | ArtGeneration Docs`,
      description,
      openGraph: {
        title: `${title} | ArtGeneration Docs`,
        description,
        type: 'article',
        locale: locale === 'ru' ? 'ru_RU' : 'en_US',
        siteName: 'ArtGeneration Docs',
      },
      twitter: {
        card: 'summary_large_image',
        title: `${title} | ArtGeneration Docs`,
        description,
      },
      alternates: {
        languages: {
          ru: `/ru/docs/${slug?.join('/') || ''}`,
          en: `/en/docs/${slug?.join('/') || ''}`,
        },
      },
    }
  } catch {
    return {
      title: 'Documentation | ArtGeneration Docs',
    }
  }
}

// Dynamic MDX page component
export default async function DocsPage({ params }: DocsPageProps) {
  const { locale, slug } = params
  const filePath = findContentFile(locale, slug)

  if (!filePath) {
    notFound()
  }

  try {
    const slugPath = slug ? slug.join('/') : 'index'
    let MDXContent

    // Try to import MDX
    try {
      MDXContent = (await import(`@/content/${locale}/docs/${slugPath}.mdx`)).default
    } catch {
      // Try index file
      MDXContent = (await import(`@/content/${locale}/docs/${slugPath}/index.mdx`)).default
    }

    return <MDXContent />
  } catch (error) {
    console.error('Error loading MDX:', error)
    notFound()
  }
}

// Generate static params for all MDX files
export async function generateStaticParams() {
  const locales = ['ru', 'en']
  const params: { locale: string; slug: string[] }[] = []

  for (const locale of locales) {
    const contentDir = path.join(process.cwd(), 'content', locale, 'docs')
    if (fs.existsSync(contentDir)) {
      const files = getAllMdxFiles(contentDir)
      for (const file of files) {
        const relativePath = path.relative(contentDir, file)
        const slug = relativePath
          .replace(/\.mdx$/, '')
          .replace(/\/index$/, '')
          .split('/')
          .filter(Boolean)

        params.push({ locale, slug })
      }
    }
  }

  // Add empty slug for index pages
  params.push({ locale: 'ru', slug: [] })
  params.push({ locale: 'en', slug: [] })

  return params
}

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
