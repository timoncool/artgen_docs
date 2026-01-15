import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { LocaleSwitcher } from '../../components/LocaleSwitcher'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import './styles.css'

export const metadata = {
  metadataBase: new URL('https://docs.artgeneration.me'),
  title: {
    default: 'ArtGeneration.me - Документация',
    template: '%s | ArtGeneration.me'
  },
  description: 'Руководство пользователя ArtGeneration.me - платформы для генерации изображений с помощью искусственного интеллекта',
  openGraph: {
    title: 'ArtGeneration.me - Документация',
    description: 'Руководство пользователя ArtGeneration.me - платформы для генерации изображений с помощью ИИ',
    url: 'https://docs.artgeneration.me',
    siteName: 'ArtGeneration.me Docs',
    locale: 'ru_RU',
    type: 'website',
    images: [{ url: 'https://artgeneration.me/assets/artgeneration_me/og-image.jpg', width: 1200, height: 630 }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ArtGeneration.me - Документация',
    description: 'Руководство пользователя ArtGeneration.me - платформы для генерации изображений с помощью ИИ',
    images: ['https://artgeneration.me/assets/artgeneration_me/og-image.jpg']
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png'
  },
  manifest: '/site.webmanifest'
}

const dictionaries = {
  ru: {
    editPage: 'Редактировать страницу',
    backToTop: 'Наверх',
    lastUpdated: 'Последнее обновление',
    tocTitle: 'На этой странице',
    suggestChanges: 'Внести правки'
  },
  en: {
    editPage: 'Edit this page',
    backToTop: 'Back to top',
    lastUpdated: 'Last updated',
    tocTitle: 'On This Page',
    suggestChanges: 'Suggest changes'
  }
}

export default async function RootLayout({ children, params }) {
  const { lang } = await params
  const dictionary = dictionaries[lang] || dictionaries.ru
  const pageMap = await getPageMap(`/${lang}`)
  
  const navbar = (
    <Navbar
      logo={
        <div className="logo-container">
          <a href="https://artgeneration.me" target="_blank" rel="noreferrer" className="logo-link">
            <img src="https://artgeneration.me/artgeneration_me/assets/ru/logo/logo.png" alt="ArtGeneration.me" className="logo-image" />
          </a>
          <LocaleSwitcher currentLocale={lang} />
        </div>
      }
    >
      <div className="nav-center">
        <a href="https://artgeneration.me/gallery/category/all/new" target="_blank" rel="noreferrer" className="nav-link">Галерея</a>
        <a href="https://artgeneration.me/generator" target="_blank" rel="noreferrer" className="nav-link">Создать</a>
        <a href="https://artgeneration.me/editor" target="_blank" rel="noreferrer" className="nav-link">Редактор</a>
        <a href="https://artgeneration.me/about" target="_blank" rel="noreferrer" className="nav-link">О Сервисе</a>
        <a href={`/${lang}/docs`} className="nav-link nav-link-active">Руководство</a>
      </div>
      <a href="https://artgeneration.me/generator" target="_blank" rel="noreferrer" className="nav-cta">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Начать творить!
      </a>
    </Navbar>
  )

  const footer = (
    <Footer>
      <div style={{ textAlign: 'center', width: '100%' }}>
        <p>{new Date().getFullYear()} ArtGeneration.me - Платформа для генерации изображений с помощью ИИ</p>
        <p style={{ fontSize: '14px', opacity: 0.7, marginTop: '8px' }}>
          <a href="https://artgeneration.me" target="_blank" rel="noreferrer">Главная</a>
          {' | '}
          <a href="https://artgeneration.me/gallery/category/all/new" target="_blank" rel="noreferrer">Галерея</a>
          {' | '}
          <a href="https://artgeneration.me/generator" target="_blank" rel="noreferrer">Генератор</a>
          {' | '}
          <a href="https://t.me/ArtGenerationMe" target="_blank" rel="noreferrer">Telegram</a>
        </p>
      </div>
    </Footer>
  )

  return (
    <html lang={lang} dir="ltr" suppressHydrationWarning>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#12b886" />
      </Head>
      <body>
        <Layout
          navbar={navbar}
          footer={footer}
          sidebar={{ defaultMenuCollapseLevel: 1, toggleButton: true }}
          toc={{
            title: dictionary.tocTitle,
            backToTop: dictionary.backToTop
          }}
          editLink={dictionary.editPage}
          pageMap={pageMap}
          darkMode={false}
          nextThemes={{ defaultTheme: 'dark', forcedTheme: 'dark' }}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
