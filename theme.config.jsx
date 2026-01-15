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
        <div className="lang-switcher">
          <a href="/ru/docs" className="lang-link" title="Русский">RU</a>
          <span className="lang-separator">|</span>
          <a href="/en/docs" className="lang-link" title="English">EN</a>
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
          <svg className="user-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2"/>
            <path d="M4 20C4 16.6863 7.58172 14 12 14C16.4183 14 20 16.6863 20 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <div className="burger-menu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    )
  },
  search: {
    component: null
  },
  project: {
    link: null
  },
  docsRepositoryBase: 'https://github.com/timoncool/artgen_docs/tree/main',
  editLink: {
    text: 'Редактировать страницу на GitHub'
  },
  feedback: {
    content: null
  },
  footer: {
    text: (
      <div style={{ textAlign: 'center', width: '100%' }}>
        <p>{new Date().getFullYear()} ArtGeneration.me - Платформа для генерации изображений с помощью ИИ</p>
        <p style={{ fontSize: '14px', opacity: 0.7, marginTop: '8px' }}>
          <a href="https://artgeneration.me">Главная</a>
          {' | '}
          <a href="https://artgeneration.me/gallery/category/all/new">Галерея</a>
          {' | '}
          <a href="https://artgeneration.me/generator">Генератор</a>
          {' | '}
          <a href="https://t.me/ArtGenerationMe">Telegram</a>
        </p>
      </div>
    )
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true
  },
  toc: {
    backToTop: true
  },
  i18n: [
    { locale: 'ru', text: 'Русский' },
    { locale: 'en', text: 'English' }
  ],
  darkMode: true,
  primaryHue: 162
};
