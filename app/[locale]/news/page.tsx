import { Metadata } from 'next'
import { Locale, translations } from '@/lib/i18n/config'

interface NewsPageProps {
  params: Promise<{ locale: Locale }>
}

export async function generateMetadata({ params }: NewsPageProps): Promise<Metadata> {
  const { locale } = await params
  const t = translations[locale]

  return {
    title: `${t.news} — ${t.siteName}`,
    description: t.description,
  }
}

export async function generateStaticParams() {
  return [{ locale: 'ru' }, { locale: 'en' }]
}

export default async function NewsPage({ params }: NewsPageProps) {
  const { locale } = await params

  let MDXContent
  try {
    MDXContent = (await import(`@/content/${locale}/news/index.mdx`)).default
  } catch {
    return (
      <div style={{ padding: '48px 24px', textAlign: 'center' }}>
        <h1>News page not found</h1>
      </div>
    )
  }

  return (
    <article>
      <MDXContent />
    </article>
  )
}
