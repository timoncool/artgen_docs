import { Locale, translations } from '../i18n/config'

export interface NavItem {
  slug: string
  titleKey: keyof typeof translations.ru
  href: string
  children?: NavItem[]
}

export interface NavSection {
  slug: string
  titleKey: keyof typeof translations.ru
  items: NavItem[]
}

export function getDocsNavigation(locale: Locale): NavItem[] {
  const t = translations[locale]
  const prefix = `/${locale}/docs`

  return [
    {
      slug: 'index',
      titleKey: 'overview',
      href: prefix,
    },
    {
      slug: 'registration',
      titleKey: 'registration',
      href: `${prefix}/registration`,
      children: [
        { slug: 'process', titleKey: 'overview', href: `${prefix}/registration/process` },
        { slug: 'why-register', titleKey: 'overview', href: `${prefix}/registration/why-register` },
        { slug: 'welcome-bonus', titleKey: 'overview', href: `${prefix}/registration/welcome-bonus` },
      ],
    },
    {
      slug: 'main-page',
      titleKey: 'mainPage',
      href: `${prefix}/main-page`,
      children: [
        { slug: 'navigation', titleKey: 'overview', href: `${prefix}/main-page/navigation` },
        { slug: 'getting-generations', titleKey: 'overview', href: `${prefix}/main-page/getting-generations` },
        { slug: 'generation-counter', titleKey: 'overview', href: `${prefix}/main-page/generation-counter` },
        { slug: 'payment-window', titleKey: 'overview', href: `${prefix}/main-page/payment-window` },
      ],
    },
    {
      slug: 'gallery',
      titleKey: 'mainGallery',
      href: `${prefix}/gallery`,
      children: [
        { slug: 'categories', titleKey: 'overview', href: `${prefix}/gallery/categories` },
        { slug: 'search-categories', titleKey: 'overview', href: `${prefix}/gallery/search-categories` },
        { slug: 'gallery-view', titleKey: 'overview', href: `${prefix}/gallery/gallery-view` },
        { slug: 'image-view', titleKey: 'overview', href: `${prefix}/gallery/image-view` },
        { slug: 'interactive-elements', titleKey: 'overview', href: `${prefix}/gallery/interactive-elements` },
        { slug: 'view-elements', titleKey: 'overview', href: `${prefix}/gallery/view-elements` },
        { slug: 'cover-interaction', titleKey: 'overview', href: `${prefix}/gallery/cover-interaction` },
        { slug: 'generation-details', titleKey: 'overview', href: `${prefix}/gallery/generation-details` },
        { slug: 'create-version', titleKey: 'overview', href: `${prefix}/gallery/create-version` },
        { slug: 'similar-images', titleKey: 'overview', href: `${prefix}/gallery/similar-images` },
      ],
    },
    {
      slug: 'generator',
      titleKey: 'imageGenerator',
      href: `${prefix}/generator`,
      children: [
        { slug: 'query-language', titleKey: 'overview', href: `${prefix}/generator/query-language` },
        { slug: 'query-tips', titleKey: 'overview', href: `${prefix}/generator/query-tips` },
        { slug: 'left-panel', titleKey: 'overview', href: `${prefix}/generator/left-panel` },
        { slug: 'right-panel', titleKey: 'overview', href: `${prefix}/generator/right-panel` },
        { slug: 'additional-actions', titleKey: 'overview', href: `${prefix}/generator/additional-actions` },
      ],
    },
    {
      slug: 'editor',
      titleKey: 'imageEditor',
      href: `${prefix}/editor`,
    },
    {
      slug: 'user-menu',
      titleKey: 'userMenu',
      href: `${prefix}/user-menu`,
    },
  ]
}
