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
        {
          slug: 'left-panel',
          titleKey: 'overview',
          href: `${prefix}/generator/left-panel`,
          children: [
            { slug: 'favorites', titleKey: 'overview', href: `${prefix}/generator/left-panel/favorites` },
            { slug: 'folders', titleKey: 'overview', href: `${prefix}/generator/left-panel/folders` },
            { slug: 'history', titleKey: 'overview', href: `${prefix}/generator/left-panel/history` },
            { slug: 'quick-actions', titleKey: 'overview', href: `${prefix}/generator/left-panel/quick-actions` },
          ],
        },
        {
          slug: 'right-panel',
          titleKey: 'overview',
          href: `${prefix}/generator/right-panel`,
          children: [
            { slug: 'models', titleKey: 'overview', href: `${prefix}/generator/right-panel/models` },
            { slug: 'styles', titleKey: 'overview', href: `${prefix}/generator/right-panel/styles` },
            { slug: 'loras', titleKey: 'overview', href: `${prefix}/generator/right-panel/loras` },
            { slug: 'resolution', titleKey: 'overview', href: `${prefix}/generator/right-panel/resolution` },
            { slug: 'parameters', titleKey: 'overview', href: `${prefix}/generator/right-panel/parameters` },
            { slug: 'negative-prompt', titleKey: 'overview', href: `${prefix}/generator/right-panel/negative-prompt` },
            { slug: 'init-image', titleKey: 'overview', href: `${prefix}/generator/right-panel/init-image` },
            { slug: 'face-swap', titleKey: 'overview', href: `${prefix}/generator/right-panel/face-swap` },
            { slug: 'performance-mode', titleKey: 'overview', href: `${prefix}/generator/right-panel/performance-mode` },
          ],
        },
        {
          slug: 'additional-actions',
          titleKey: 'overview',
          href: `${prefix}/generator/additional-actions`,
          children: [
            { slug: 'copy-link', titleKey: 'overview', href: `${prefix}/generator/additional-actions/copy-link` },
            { slug: 'download', titleKey: 'overview', href: `${prefix}/generator/additional-actions/download` },
            { slug: 'fullscreen', titleKey: 'overview', href: `${prefix}/generator/additional-actions/fullscreen` },
            { slug: 'create-similar', titleKey: 'overview', href: `${prefix}/generator/additional-actions/create-similar` },
            { slug: 'own-image', titleKey: 'overview', href: `${prefix}/generator/additional-actions/own-image` },
            { slug: 'upscale', titleKey: 'overview', href: `${prefix}/generator/additional-actions/upscale` },
            { slug: 'upscale-2x', titleKey: 'overview', href: `${prefix}/generator/additional-actions/upscale-2x` },
            { slug: 'face-restoration', titleKey: 'overview', href: `${prefix}/generator/additional-actions/face-restoration` },
            { slug: 'restoration-upscale', titleKey: 'overview', href: `${prefix}/generator/additional-actions/restoration-upscale` },
            { slug: 'outpainting', titleKey: 'overview', href: `${prefix}/generator/additional-actions/outpainting` },
            { slug: 'inpainting', titleKey: 'overview', href: `${prefix}/generator/additional-actions/inpainting` },
            { slug: 'image-to-image', titleKey: 'overview', href: `${prefix}/generator/additional-actions/image-to-image` },
            { slug: 'variations', titleKey: 'overview', href: `${prefix}/generator/additional-actions/variations` },
          ],
        },
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

export function getExtraNavigation(locale: Locale): NavItem[] {
  const prefix = `/${locale}`

  return [
    {
      slug: 'news',
      titleKey: 'news',
      href: `${prefix}/news`,
    },
    {
      slug: 'about-docs',
      titleKey: 'aboutDocs',
      href: `${prefix}/about-docs`,
      children: [
        { slug: 'contributing', titleKey: 'contributing', href: `${prefix}/about-docs/contributing` },
        { slug: 'contributors', titleKey: 'contributors', href: `${prefix}/about-docs/contributors` },
      ],
    },
  ]
}
