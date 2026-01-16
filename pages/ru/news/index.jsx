import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import Link from 'next/link'

export default function NewsIndex({ news }) {
  return (
    <div className="news-page">
      <h1>Новости и обновления</h1>
      <p>Следите за развитием платформы ArtGeneration.me. Здесь собраны все обновления сервиса.</p>

      <hr />

      {news.map((item, index) => (
        <div key={item.slug}>
          <h2>
            <Link href={`/ru/news/${item.slug}`}>
              {item.frontmatter.title}
            </Link>
          </h2>
          <p><strong>Дата:</strong> {item.frontmatter.date}</p>
          <MDXRemote {...item.content} />
          {index < news.length - 1 && <hr />}
        </div>
      ))}

      <hr />

      <h2>Подписка на новости</h2>
      <p>
        Чтобы не пропустить важные обновления, подписывайтесь на наш{' '}
        <a href="https://t.me/ArtGenerationMe">Telegram канал</a>.
      </p>
      <p>
        Полный архив обновлений также доступен в блоге:{' '}
        <a href="https://blog.artgeneration.me">blog.artgeneration.me</a>
      </p>
    </div>
  )
}

export async function getStaticProps() {
  const newsDir = path.join(process.cwd(), 'pages/ru/news')
  const files = fs.readdirSync(newsDir)

  const newsFiles = files
    .filter(file => file.endsWith('.mdx') && file !== 'index.mdx')
    .sort((a, b) => b.localeCompare(a)) // Сортировка по дате (новые первыми)

  const news = await Promise.all(
    newsFiles.map(async (filename) => {
      const filePath = path.join(newsDir, filename)
      const fileContent = fs.readFileSync(filePath, 'utf-8')
      const { data: frontmatter, content: rawContent } = matter(fileContent)

      // Убираем заголовок h1 из контента (он уже в frontmatter.title)
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
