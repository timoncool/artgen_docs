import { Metadata } from 'next'
import { Locale, translations } from '@/lib/i18n/config'

interface ContributorsPageProps {
  params: Promise<{ locale: Locale }>
}

export async function generateMetadata({ params }: ContributorsPageProps): Promise<Metadata> {
  const { locale } = await params
  const t = translations[locale]

  return {
    title: `${locale === 'ru' ? 'Участники' : 'Contributors'} — ${t.siteName}`,
    description: t.description,
  }
}

export async function generateStaticParams() {
  return [{ locale: 'ru' }, { locale: 'en' }]
}

export default async function ContributorsPage({ params }: ContributorsPageProps) {
  const { locale } = await params

  let MDXContent
  try {
    MDXContent = (await import(`@/content/${locale}/about-docs/contributors.mdx`)).default
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
