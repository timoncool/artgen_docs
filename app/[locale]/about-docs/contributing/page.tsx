import { Metadata } from 'next'
import { Locale, translations } from '@/lib/i18n/config'

interface ContributingPageProps {
  params: Promise<{ locale: Locale }>
}

export async function generateMetadata({ params }: ContributingPageProps): Promise<Metadata> {
  const { locale } = await params
  const t = translations[locale]

  return {
    title: `${locale === 'ru' ? 'Как редактировать документацию' : 'How to contribute'} — ${t.siteName}`,
    description: t.description,
  }
}

export async function generateStaticParams() {
  return [{ locale: 'ru' }, { locale: 'en' }]
}

export default async function ContributingPage({ params }: ContributingPageProps) {
  const { locale } = await params

  let MDXContent
  try {
    MDXContent = (await import(`@/content/${locale}/about-docs/contributing.mdx`)).default
  } catch {
    return (
      <div style={{ padding: '48px 24px', textAlign: 'center' }}>
        <h1>Page not found</h1>
      </div>
    )
  }

  return (
    <article style={{ padding: '24px 48px', maxWidth: 900, margin: '0 auto' }}>
      <MDXContent />
    </article>
  )
}
