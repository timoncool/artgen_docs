import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { Locale } from '../i18n/config'

export interface NavItem {
  slug: string
  title: string
  href: string
  children?: NavItem[]
}

// Meta files for ordering and custom titles (like Nextra _meta.js)
const metaConfig: Record<string, Record<string, string>> = {
  // Root docs level
  'docs': {
    'index': 'Обзор',
    'registration': 'Приветствие и регистрация',
    'main-page': 'Главная страница',
    'gallery': 'Главная Галерея',
    'generator': 'Генератор изображений',
    'editor': 'Редактор изображений',
    'user-menu': 'Меню пользователя',
    'faq': 'Часто задаваемые вопросы',
    'rules': 'Правила сервиса',
  },
  'docs/registration': {
    'index': 'Обзор',
    'process': 'Процесс регистрации',
    'why-register': 'Зачем регистрироваться?',
    'welcome-bonus': 'Приветственный бонус',
  },
  'docs/main-page': {
    'index': 'Обзор',
    'navigation': 'Навигация',
    'getting-generations': 'Получение генераций',
    'generation-counter': 'Счётчик генераций',
    'payment-window': 'Окно оплаты',
  },
  'docs/gallery': {
    'index': 'Обзор',
    'search-categories': 'Поиск и категории',
    'cover-interaction': 'Взаимодействие с обложкой',
    'categories': 'Категории галереи',
    'gallery-view': 'Просмотр галереи',
    'interactive-elements': 'Интерактивные элементы',
    'image-view': 'Просмотр изображения',
    'view-elements': 'Элементы просмотра',
    'generation-details': 'Детали генерации',
    'similar-images': 'Похожие изображения',
    'create-version': 'Создать свою версию',
  },
  'docs/generator': {
    'index': 'Обзор',
    'query-language': 'Язык запросов',
    'query-tips': 'Советы по запросам',
    'left-panel': 'Левая панель',
    'right-panel': 'Правая панель',
    'additional-actions': 'Дополнительные действия',
  },
  'docs/generator/left-panel': {
    'index': 'Обзор',
    'history': 'История генераций',
    'favorites': 'Избранное',
    'folders': 'Папки',
    'quick-actions': 'Быстрые действия',
  },
  'docs/generator/right-panel': {
    'index': 'Обзор',
    'models': 'Модели',
    'styles': 'Стили',
    'loras': 'LoRA',
    'init-image': 'Исходное изображение',
    'face-swap': 'Face Swap',
    'parameters': 'Параметры генерации',
    'negative-prompt': 'Негативный промпт',
    'resolution': 'Разрешение',
    'performance-mode': 'Режим производительности',
  },
  'docs/generator/additional-actions': {
    'index': 'Обзор',
    'own-image': 'Своё изображение',
    'create-similar': 'Создать похожее',
    'upscale-2x': 'Увеличение 2x',
    'face-restoration': 'Восстановление лица',
    'restoration-upscale': 'Восстановление + увеличение',
    'outpainting': 'Расширение границ',
    'copy-link': 'Копировать ссылку',
    'download': 'Скачать',
    'fullscreen': 'Полноэкранный режим',
  },
  'docs/editor': {
    'index': 'Обзор',
  },
  'docs/user-menu': {
    'index': 'Обзор',
  },
  'about-docs': {
    'contributing': 'Как редактировать',
    'contributors': 'Авторы документации',
  },
}

// English translations
const metaConfigEn: Record<string, Record<string, string>> = {
  'docs': {
    'index': 'Overview',
    'registration': 'Welcome & Registration',
    'main-page': 'Main Page',
    'gallery': 'Main Gallery',
    'generator': 'Image Generator',
    'editor': 'Image Editor',
    'user-menu': 'User Menu',
    'faq': 'FAQ',
    'rules': 'Service Rules',
  },
  'docs/registration': {
    'index': 'Overview',
    'process': 'Registration Process',
    'why-register': 'Why Register?',
    'welcome-bonus': 'Welcome Bonus',
  },
  'docs/main-page': {
    'index': 'Overview',
    'navigation': 'Navigation',
    'getting-generations': 'Getting Generations',
    'generation-counter': 'Generation Counter',
    'payment-window': 'Payment Window',
  },
  'docs/gallery': {
    'index': 'Overview',
    'search-categories': 'Search and Categories',
    'cover-interaction': 'Cover Interaction',
    'categories': 'Gallery Categories',
    'gallery-view': 'Gallery View',
    'interactive-elements': 'Interactive Elements',
    'image-view': 'Image View',
    'view-elements': 'View Elements',
    'generation-details': 'Generation Details',
    'similar-images': 'Similar Images',
    'create-version': 'Create Your Version',
  },
  'docs/generator': {
    'index': 'Overview',
    'query-language': 'Query Language',
    'query-tips': 'Query Tips',
    'left-panel': 'Left Panel',
    'right-panel': 'Right Panel',
    'additional-actions': 'Additional Actions',
  },
  'docs/generator/left-panel': {
    'index': 'Overview',
    'history': 'Generation History',
    'favorites': 'Favorites',
    'folders': 'Folders',
    'quick-actions': 'Quick Actions',
  },
  'docs/generator/right-panel': {
    'index': 'Overview',
    'models': 'Models',
    'styles': 'Styles',
    'loras': 'LoRA',
    'init-image': 'Init Image',
    'face-swap': 'Face Swap',
    'parameters': 'Generation Parameters',
    'negative-prompt': 'Negative Prompt',
    'resolution': 'Resolution',
    'performance-mode': 'Performance Mode',
  },
  'docs/generator/additional-actions': {
    'index': 'Overview',
    'own-image': 'Own Image',
    'create-similar': 'Create Similar',
    'upscale-2x': 'Upscale 2x',
    'face-restoration': 'Face Restoration',
    'restoration-upscale': 'Restoration + Upscale',
    'outpainting': 'Outpainting',
    'copy-link': 'Copy Link',
    'download': 'Download',
    'fullscreen': 'Fullscreen',
  },
  'docs/editor': {
    'index': 'Overview',
  },
  'docs/user-menu': {
    'index': 'Overview',
  },
  'about-docs': {
    'contributing': 'How to Contribute',
    'contributors': 'Contributors',
  },
}

function getTitle(locale: Locale, section: string, slug: string, fallback: string): string {
  const config = locale === 'en' ? metaConfigEn : metaConfig
  return config[section]?.[slug] || fallback
}

function getTitleFromFile(filePath: string): string | null {
  try {
    const content = fs.readFileSync(filePath, 'utf-8')
    const { data } = matter(content)
    return data.title || null
  } catch {
    return null
  }
}

export function buildNavigation(locale: Locale, basePath: string = 'docs'): NavItem[] {
  const contentDir = path.join(process.cwd(), 'content', locale, basePath)

  if (!fs.existsSync(contentDir)) {
    return []
  }

  const items: NavItem[] = []
  const entries = fs.readdirSync(contentDir, { withFileTypes: true })

  // Get order from meta config
  const sectionKey = basePath
  const config = locale === 'en' ? metaConfigEn : metaConfig
  const orderConfig = config[sectionKey] || {}
  const orderedSlugs = Object.keys(orderConfig)

  // Process files and directories
  const processedSlugs = new Set<string>()

  // First, add items in order from config
  for (const slug of orderedSlugs) {
    const mdxFile = path.join(contentDir, `${slug}.mdx`)
    const indexFile = path.join(contentDir, slug, 'index.mdx')
    const dirPath = path.join(contentDir, slug)

    if (slug === 'index') {
      // Handle index file
      if (fs.existsSync(path.join(contentDir, 'index.mdx'))) {
        const title = getTitle(locale, sectionKey, 'index', 'Обзор')
        items.push({
          slug: 'index',
          title,
          href: `/${locale}/${basePath}`,
        })
        processedSlugs.add('index')
      }
    } else if (fs.existsSync(mdxFile)) {
      // Single file
      const title = getTitleFromFile(mdxFile) || getTitle(locale, sectionKey, slug, slug)
      items.push({
        slug,
        title,
        href: `/${locale}/${basePath}/${slug}`,
      })
      processedSlugs.add(slug)
    } else if (fs.existsSync(dirPath) && fs.statSync(dirPath).isDirectory()) {
      // Directory with children
      const title = getTitle(locale, sectionKey, slug, slug)
      const children = buildNavigation(locale, `${basePath}/${slug}`)
      items.push({
        slug,
        title,
        href: `/${locale}/${basePath}/${slug}`,
        children: children.length > 0 ? children : undefined,
      })
      processedSlugs.add(slug)
    }
  }

  // Add any remaining items not in config
  for (const entry of entries) {
    const name = entry.name.replace('.mdx', '')
    if (processedSlugs.has(name) || name === 'index') continue

    if (entry.isFile() && entry.name.endsWith('.mdx')) {
      const filePath = path.join(contentDir, entry.name)
      const title = getTitleFromFile(filePath) || name
      items.push({
        slug: name,
        title,
        href: `/${locale}/${basePath}/${name}`,
      })
    } else if (entry.isDirectory()) {
      const children = buildNavigation(locale, `${basePath}/${entry.name}`)
      const indexPath = path.join(contentDir, entry.name, 'index.mdx')
      const title = getTitleFromFile(indexPath) || entry.name
      items.push({
        slug: entry.name,
        title,
        href: `/${locale}/${basePath}/${entry.name}`,
        children: children.length > 0 ? children : undefined,
      })
    }
  }

  return items
}

export function buildExtraNavigation(locale: Locale): NavItem[] {
  const t = locale === 'en'
    ? { news: 'News', aboutDocs: 'About Docs' }
    : { news: 'Новости', aboutDocs: 'О документации' }

  const items: NavItem[] = [
    {
      slug: 'news',
      title: t.news,
      href: `/${locale}/news`,
    },
  ]

  // Check if about-docs exists
  const aboutDocsDir = path.join(process.cwd(), 'content', locale, 'about-docs')
  if (fs.existsSync(aboutDocsDir)) {
    const children = buildNavigation(locale, 'about-docs')
    items.push({
      slug: 'about-docs',
      title: t.aboutDocs,
      href: `/${locale}/about-docs`,
      children: children.length > 0 ? children : undefined,
    })
  }

  return items
}
