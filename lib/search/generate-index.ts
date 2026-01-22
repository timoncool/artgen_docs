import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface SearchItem {
  title: string
  href: string
  content: string
  section: string
}

// Remove MDX/JSX tags and get plain text
function extractPlainText(content: string): string {
  return content
    // Remove import statements
    .replace(/^import\s+.*$/gm, '')
    // Remove JSX components
    .replace(/<[^>]+>/g, ' ')
    // Remove code blocks
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`[^`]+`/g, ' ')
    // Remove markdown links but keep text
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    // Remove images
    .replace(/!\[[^\]]*\]\([^)]+\)/g, '')
    // Remove headers markdown
    .replace(/^#+\s*/gm, '')
    // Remove bold/italic
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/\*([^*]+)\*/g, '$1')
    // Remove extra whitespace
    .replace(/\s+/g, ' ')
    .trim()
}

// Get title from content
function getTitleFromContent(content: string): string | null {
  const match = content.match(/^#\s+(.+)$/m)
  return match ? match[1].trim() : null
}

// Build search index for a locale
export function buildSearchIndex(locale: string): SearchItem[] {
  const items: SearchItem[] = []
  const contentDir = path.join(process.cwd(), 'content', locale)

  function processDirectory(dir: string, basePath: string, section: string) {
    if (!fs.existsSync(dir)) return

    const entries = fs.readdirSync(dir, { withFileTypes: true })

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name)

      if (entry.isDirectory()) {
        processDirectory(fullPath, `${basePath}/${entry.name}`, entry.name)
      } else if (entry.name.endsWith('.mdx')) {
        try {
          const fileContent = fs.readFileSync(fullPath, 'utf-8')
          const { data, content } = matter(fileContent)

          const slug = entry.name === 'index.mdx' ? '' : entry.name.replace('.mdx', '')
          const href = `/${locale}${basePath}${slug ? '/' + slug : ''}`

          const title = data.title || getTitleFromContent(content) || slug || section
          const plainContent = extractPlainText(content)

          // Only add if there's meaningful content
          if (plainContent.length > 50) {
            items.push({
              title,
              href,
              content: plainContent.slice(0, 500), // Limit content length
              section,
            })
          }
        } catch (error) {
          console.error(`Error processing ${fullPath}:`, error)
        }
      }
    }
  }

  // Process docs
  processDirectory(path.join(contentDir, 'docs'), '/docs', 'docs')

  // Process about-docs
  processDirectory(path.join(contentDir, 'about-docs'), '/about-docs', 'about-docs')

  // Process news
  processDirectory(path.join(contentDir, 'news'), '/news', 'news')

  return items
}

// Generate and save search index
export function generateSearchIndexFile() {
  const ruIndex = buildSearchIndex('ru')
  const enIndex = buildSearchIndex('en')

  const outputDir = path.join(process.cwd(), 'public', 'search')

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true })
  }

  fs.writeFileSync(
    path.join(outputDir, 'ru.json'),
    JSON.stringify(ruIndex, null, 2)
  )

  fs.writeFileSync(
    path.join(outputDir, 'en.json'),
    JSON.stringify(enIndex, null, 2)
  )

  console.log(`Search index generated: ${ruIndex.length} RU items, ${enIndex.length} EN items`)
}

// Run if called directly
if (require.main === module) {
  generateSearchIndexFile()
}
