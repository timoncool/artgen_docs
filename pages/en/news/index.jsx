import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import Link from 'next/link'

export default function NewsIndex({ news }) {
  return (
    <div className="news-page">
      <h1>News and Updates</h1>
      <p>Follow the development of ArtGeneration.me platform. Here you'll find all service updates.</p>

      <hr />

      {news.map((item, index) => (
        <div key={item.slug}>
          <h2>
            <Link href={`/en/news/${item.slug}`}>
              {item.frontmatter.title}
            </Link>
          </h2>
          <p><strong>Date:</strong> {item.frontmatter.date}</p>
          <MDXRemote {...item.content} />
          {index < news.length - 1 && <hr />}
        </div>
      ))}

      <hr />

      <h2>Subscribe to Updates</h2>
      <p>
        Don't miss important updates — subscribe to our{' '}
        <a href="https://t.me/ArtGenerationMe">Telegram channel</a>.
      </p>
      <p>
        Full update archive is also available on our blog:{' '}
        <a href="https://blog.artgeneration.me">blog.artgeneration.me</a>
      </p>
    </div>
  )
}

export async function getStaticProps() {
  const newsDir = path.join(process.cwd(), 'pages/en/news')
  const files = fs.readdirSync(newsDir)

  const newsFiles = files
    .filter(file => file.endsWith('.mdx') && file !== 'index.mdx')
    .sort((a, b) => b.localeCompare(a)) // Sort by date (newest first)

  const news = await Promise.all(
    newsFiles.map(async (filename) => {
      const filePath = path.join(newsDir, filename)
      const fileContent = fs.readFileSync(filePath, 'utf-8')
      const { data: frontmatter, content: rawContent } = matter(fileContent)

      // Remove h1 heading from content (it's already in frontmatter.title)
      const contentWithoutH1 = rawContent.replace(/^#\s+.+$/m, '').trim()

      const content = await serialize(contentWithoutH1)

      return {
        slug: filename.replace('.mdx', ''),
        frontmatter,
        content
      }
    })
  )

  return {
    props: { news }
  }
}
