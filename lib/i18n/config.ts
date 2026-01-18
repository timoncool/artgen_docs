export const i18nConfig = {
  defaultLocale: 'ru' as const,
  locales: ['ru', 'en'] as const,
  localeLabels: {
    ru: 'Русский',
    en: 'English',
  },
  localePaths: {
    ru: '',
    en: '/en',
  },
} as const

export type Locale = (typeof i18nConfig.locales)[number]

export const translations = {
  ru: {
    siteName: 'ArtGeneration.me — Документация',
    description: 'Официальная документация сервиса ArtGeneration.me — генерация изображений с помощью ИИ',
    docTitle: 'Документация',
    gallery: 'Галерея',
    create: 'Создать',
    editor: 'Редактор',
    about: 'О Сервисе',
    guide: 'Руководство',
    user: 'Пользователь',
    search: 'Поиск...',
    onThisPage: 'На этой странице',
    backToTop: 'Наверх',
    editPage: 'Редактировать страницу на GitHub',
    suggestChanges: 'Внести правки',
    overview: 'Обзор',
    registration: 'Приветствие и регистрация',
    mainPage: 'Главная страница',
    mainGallery: 'Главная Галерея',
    imageGenerator: 'Генератор изображений',
    imageEditor: 'Редактор изображений',
    userMenu: 'Меню пользователя',
    faq: 'Часто задаваемые вопросы',
    rules: 'Правила сервиса',
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
    user: 'User',
    search: 'Search...',
    onThisPage: 'On This Page',
    backToTop: 'Back to top',
    editPage: 'Edit this page on GitHub',
    suggestChanges: 'Suggest changes',
    overview: 'Overview',
    registration: 'Welcome & Registration',
    mainPage: 'Main Page',
    mainGallery: 'Main Gallery',
    imageGenerator: 'Image Generator',
    imageEditor: 'Image Editor',
    userMenu: 'User Menu',
    faq: 'FAQ',
    rules: 'Service Rules',
  },
} as const

export type TranslationKey = keyof typeof translations.ru

export function getTranslation(locale: Locale, key: TranslationKey): string {
  return translations[locale]?.[key] || translations.ru[key]
}

export function getSiteBase(locale: Locale): string {
  return locale === 'en' ? 'https://artgeneration.co' : 'https://artgeneration.me'
}
