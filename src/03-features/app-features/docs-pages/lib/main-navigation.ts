import type { MainNavigationItem } from '@/src/01-shared/types/app/docs-pages';
import { Lng } from '@/src/01-shared/types/app/lng';

const mainNavigationObj: Record<string, MainNavigationItem> = {
  index: {
    [Lng.RU]: 'Обзор',
    [Lng.EN]: 'Overview',
    path: '/docs',
  },
  gallery: {
    [Lng.RU]: 'Галерея',
    [Lng.EN]: 'Gallery',
    path: '/docs/gallery',
  },
  start: {
    [Lng.RU]: 'Вход и первые шаги',
    [Lng.EN]: 'Signing in and first steps',
    path: '/docs/start',
  },
  coins: {
    [Lng.RU]: 'Монеты и лимиты',
    [Lng.EN]: 'Coins and limits',
    path: '/docs/coins',
  },
  generator: {
    [Lng.RU]: 'Генератор',
    [Lng.EN]: 'Generator',
    path: '/docs/generator',
  },
  'my-works': {
    [Lng.RU]: 'Свои работы',
    [Lng.EN]: 'Your works',
    path: '/docs/my-works',
  },
  chat: {
    [Lng.RU]: 'ИИ-чат',
    [Lng.EN]: 'AI Chat',
    path: '/docs/chat',
  },
  catalogs: {
    [Lng.RU]: 'Каталоги моделей',
    [Lng.EN]: 'Model catalogs',
    path: '/docs/catalogs',
  },
  editor: {
    [Lng.RU]: 'Редактор и логотипы',
    [Lng.EN]: 'Editor and logos',
    path: '/docs/editor',
  },
  billing: {
    [Lng.RU]: 'Тарифы и оплата',
    [Lng.EN]: 'Plans and payment',
    path: '/docs/billing',
  },
  profile: {
    [Lng.RU]: 'Профиль и настройки',
    [Lng.EN]: 'Profile and settings',
    path: '/docs/profile',
  },
  special: {
    [Lng.RU]: 'Особые возможности моделей',
    [Lng.EN]: 'Special model features',
    path: '/docs/special',
  },
  troubleshooting: {
    [Lng.RU]: 'Если что-то не работает',
    [Lng.EN]: "When something doesn't work",
    path: '/docs/troubleshooting',
  },
  faq: {
    [Lng.RU]: 'Часто задаваемые вопросы',
    [Lng.EN]: 'FAQ',
    path: '/docs/faq',
  },
  rules: {
    [Lng.RU]: 'Правила сервиса',
    [Lng.EN]: 'Service Rules',
    path: '/docs/rules',
  },
  news: {
    [Lng.RU]: 'Новости',
    [Lng.EN]: 'News',
    path: '/news',
  },
  contributing: {
    [Lng.RU]: 'Как редактировать документацию',
    [Lng.EN]: 'How to Edit Documentation',
    path: '/about-docs/contributing',
  },
  contributors: {
    [Lng.RU]: 'Авторы документации',
    [Lng.EN]: 'Documentation Contributors',
    path: '/about-docs/contributors',
  },
};

// Порядок — тот, в котором пользователь знакомится с сервисом:
// сначала галерея, потом вход, потом первая работа, потом всё остальное.
export const mainNavigation: MainNavigationItem[] = [
  mainNavigationObj['index'],
  mainNavigationObj['gallery'],
  mainNavigationObj['start'],
  mainNavigationObj['coins'],
  mainNavigationObj['generator'],
  mainNavigationObj['my-works'],
  mainNavigationObj['chat'],
  mainNavigationObj['catalogs'],
  mainNavigationObj['editor'],
  mainNavigationObj['billing'],
  mainNavigationObj['profile'],
  mainNavigationObj['special'],
  mainNavigationObj['troubleshooting'],
  mainNavigationObj['faq'],
  mainNavigationObj['rules'],
  mainNavigationObj['news'],
  mainNavigationObj['contributing'],
  mainNavigationObj['contributors'],
];
