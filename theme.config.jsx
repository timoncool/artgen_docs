import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'
import { IconWorld, IconUser, IconMenu2 } from '@tabler/icons-react'

const SITE_URL = 'https://artgeneration.me'
const DEFAULT_IMAGE = 'https://artgeneration.me/artgeneration_me/assets/ru/logo/og-image.png'

const translations = {
  ru: {
    siteName: 'ArtGeneration.me — Документация',
    description: 'Официальная документация сервиса ArtGeneration.me — генерация изображений с помощью ИИ',
    docTitle: 'Документация',
    gallery: 'Галерея',
    create: 'Создать',
    editor: 'Редактор',
    about: 'О Сервисе',
    guide: 'Руководство',
    user: 'Пользователь'
  },
  en: {
    siteName: 'ArtGeneration.me — Documentation',
    description: 'Official documentation for ArtGeneration.me — AI image generation service',
    docTitle: 'Documentation',
    gallery: 'Gallery',
    create: 'Create',
    editor: 'Editor',
    about: 'About',
    guide: 'Guide',
    user: 'User'
  }
}

function NavbarContent() {
  const { locale } = useRouter()
  const t = translations[locale] || translations.ru
  const docsPath = `/${locale}/docs`
  const siteBase = locale === 'en' ? 'https://artgeneration.co' : 'https://artgeneration.me'

  return (
    <div className="header-content">
      <div className="intl-menu">
        <IconWorld className="intl-icon" size={25} stroke={1.5} />
      </div>
      <div className="nav-center">
        <a href={`${siteBase}/gallery/category/all/new`} className="nav-link">{t.gallery}</a>
        <a href={`${siteBase}/generator`} className="nav-link">{t.create}</a>
        <a href={`${siteBase}/editor`} className="nav-link">{t.editor}</a>
        <a href={`${siteBase}/about`} className="nav-link">{t.about}</a>
        <a href={docsPath} className="nav-link nav-link-active">{t.guide}</a>
      </div>
      <div className="user-menu">
        <span className="user-nickname">{t.user}</span>
        <IconUser className="user-icon" size={24} stroke={2} />
        <IconMenu2 className="burger-icon" size={24} stroke={2} />
      </div>
    </div>
  )
}

export default {
  head: function useHead() {
    const { asPath, locale } = useRouter()
    const { frontMatter, title } = useConfig()
    const t = translations[locale] || translations.ru

    const pageTitle = frontMatter.title || title || t.docTitle
    const description = frontMatter.description || t.description
    const image = frontMatter.image || DEFAULT_IMAGE
    const url = `${SITE_URL}${asPath}`

    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={description} />
        <meta name="author" content="ArtGeneration.me" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={t.siteName} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={url} />
        <meta property="og:locale" content={locale === 'en' ? 'en_US' : 'ru_RU'} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />

        {/* Canonical */}
        <link rel="canonical" href={url} />

        {/* Favicon */}
        <link rel="icon" href="https://artgeneration.me/favicon.ico" />
        <link rel="apple-touch-icon" href="https://artgeneration.me/apple-touch-icon.png" />
      </>
    )
  },
  logo: (
    <img
      src="https://artgeneration.me/artgeneration_me/assets/ru/logo/logo.png"
      alt="ArtGeneration.me"
      className="logo-image"
    />
  ),
  logoLink: 'https://artgeneration.me',
  navbar: {
    extraContent: <NavbarContent />
  },
  search: {
    placeholder: function usePlaceholder() {
      const { locale } = useRouter()
      return locale === 'en' ? 'Search...' : 'Поиск...'
    }
  },
  project: {
    link: null
  },
  docsRepositoryBase: 'https://github.com/timoncool/artgen_docs/tree/main',
  editLink: {
    content: function useEditLink() {
      const { locale } = useRouter()
      return locale === 'en' ? 'Edit this page on GitHub' : 'Редактировать страницу на GitHub'
    }
  },
  feedback: {
    content: null
  },
  footer: {
    component: null
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true
  },
  toc: {
    backToTop: true,
    title: function useTocTitle() {
      const { locale } = useRouter()
      return locale === 'en' ? 'On This Page' : 'На этой странице'
    }
  },
  i18n: [
    { locale: 'ru', name: 'Русский' },
    { locale: 'en', name: 'English' }
  ],
  darkMode: false,
  nextThemes: {
    forcedTheme: 'dark',
    defaultTheme: 'dark'
  },
  primaryHue: 162,
  useNextSeoProps() {
    return {
      titleTemplate: '%s | ArtGeneration.me'
    }
  }
};
