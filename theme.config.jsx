export default {
  logo: (
    <div className="logo-container">
      <a href="https://artgeneration.me" className="logo-link">
        <img
          src="https://artgeneration.me/artgeneration_me/assets/ru/logo/logo.png"
          alt="ArtGeneration.me"
          className="logo-image"
        />
      </a>
    </div>
  ),
  navbar: {
    extraContent: (
      <div className="nav-center">
        <a href="https://artgeneration.me/gallery/category/all/new" className="nav-link">Галерея</a>
        <a href="https://artgeneration.me/generator" className="nav-link">Создать</a>
        <a href="https://artgeneration.me/editor" className="nav-link">Редактор</a>
        <a href="https://artgeneration.me/about" className="nav-link">О Сервисе</a>
        <a href="/ru/docs" className="nav-link nav-link-active">Руководство</a>
        <a href="https://artgeneration.me/generator" className="nav-cta">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Начать творить!
        </a>
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
