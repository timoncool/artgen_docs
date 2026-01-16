import { useRouter } from 'next/router'
import { IconWorld, IconUser, IconMenu2 } from '@tabler/icons-react'

export default {
  logo: (
    <img
      src="https://artgeneration.me/artgeneration_me/assets/ru/logo/logo.png"
      alt="ArtGeneration.me"
      className="logo-image"
    />
  ),
  logoLink: 'https://artgeneration.me',
  navbar: {
    extraContent: (
      <div className="header-content">
        <div className="intl-menu">
          <IconWorld className="intl-icon" size={25} stroke={1.5} />
        </div>
        <div className="nav-center">
          <a href="https://artgeneration.me/gallery/category/all/new" className="nav-link">Галерея</a>
          <a href="https://artgeneration.me/generator" className="nav-link">Создать</a>
          <a href="https://artgeneration.me/editor" className="nav-link">Редактор</a>
          <a href="https://artgeneration.me/about" className="nav-link">О Сервисе</a>
          <a href="/ru/docs" className="nav-link nav-link-active">Руководство</a>
        </div>
        <div className="user-menu">
          <span className="user-nickname">Пользователь</span>
          <IconUser className="user-icon" size={24} stroke={2} />
          <IconMenu2 className="burger-icon" size={24} stroke={2} />
        </div>
      </div>
    )
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
  primaryHue: 162,
  useNextSeoProps() {
    return {
      titleTemplate: '%s | ArtGeneration.me'
    }
  }
};
