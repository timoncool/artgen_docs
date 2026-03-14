import { Lng } from '@/src/01-shared/types/app/lng';
import { MainNavigationItem } from '@/src/01-shared/types/app/docs-pages';

const mainNavigationObj: Record<string, MainNavigationItem> = {
  index: {
    [Lng.RU]: 'Обзор',
    [Lng.EN]: 'Overview',
    path: '/docs',
  },
  registration: {
    [Lng.RU]: 'Регистрация',
    [Lng.EN]: 'Registration',
    path: '/docs/registration',
  },
  'main-page': {
    [Lng.RU]: 'Главная страница',
    [Lng.EN]: 'Main Page',
    path: '/docs/main-page',
  },
  gallery: {
    [Lng.RU]: 'Главная Галерея',
    [Lng.EN]: 'Main Gallery',
    path: '/docs/gallery',
  },
  generator: {
    [Lng.RU]: 'Генератор изображений',
    [Lng.EN]: 'Image Generator',
    path: '/docs/generator',
  },
  'logo-generator': {
    [Lng.RU]: 'Генератор логотипов',
    [Lng.EN]: 'Logo Generator',
    path: '/docs/logo-generator',
  },
  editor: {
    [Lng.RU]: 'Редактор изображений',
    [Lng.EN]: 'Image Editor',
    path: '/docs/editor',
  },
  'user-menu': {
    [Lng.RU]: 'Меню пользователя',
    [Lng.EN]: 'User Menu',
    path: '/docs/user-menu',
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

export const mainNavigation: MainNavigationItem[] = [
  mainNavigationObj['index'],
  mainNavigationObj['registration'],
  mainNavigationObj['gallery'],
  mainNavigationObj['generator'],
  mainNavigationObj['logo-generator'],
  mainNavigationObj['editor'],
  mainNavigationObj['user-menu'],
  mainNavigationObj['faq'],
  mainNavigationObj['rules'],
  mainNavigationObj['news'],
  mainNavigationObj['contributing'],
  mainNavigationObj['contributors'],
];
