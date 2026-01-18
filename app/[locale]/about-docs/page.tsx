import { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { Locale, translations } from '@/lib/i18n/config'

interface AboutDocsPageProps {
  params: Promise<{ locale: Locale }>
}

export async function generateMetadata({ params }: AboutDocsPageProps): Promise<Metadata> {
  const { locale } = await params
  const t = translations[locale]

  return {
    title: `${t.aboutDocs} — ${t.siteName}`,
    description: t.description,
  }
}

export async function generateStaticParams() {
  return [{ locale: 'ru' }, { locale: 'en' }]
}

export default async function AboutDocsPage({ params }: AboutDocsPageProps) {
  const { locale } = await params
  redirect(`/${locale}/about-docs/contributing`)
}
