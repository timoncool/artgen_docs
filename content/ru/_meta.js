export default {
  index: {
    title: 'Главная',
    type: 'page'
  },
  docs: {
    title: 'Руководство',
    type: 'page'
  },
  news: {
    title: 'Новости',
    type: 'page'
  },
  '---': {
    type: 'separator'
  },
  artgeneration: {
    title: 'ArtGeneration.me',
    type: 'menu',
    items: {
      gallery: {
        title: 'Галерея',
        href: 'https://artgeneration.me/gallery/category/all/new'
      },
      generator: {
        title: 'Создать',
        href: 'https://artgeneration.me/generator'
      },
      editor: {
        title: 'Редактор',
        href: 'https://artgeneration.me/editor'
      },
      about: {
        title: 'О Сервисе',
        href: 'https://artgeneration.me/about'
      }
    }
  }
}
