export default {
  index: {
    title: 'Home',
    type: 'page'
  },
  docs: {
    title: 'Guide',
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
        title: 'Gallery',
        href: 'https://artgeneration.me/gallery/category/all/new'
      },
      generator: {
        title: 'Create',
        href: 'https://artgeneration.me/generator'
      },
      editor: {
        title: 'Editor',
        href: 'https://artgeneration.me/editor'
      },
      about: {
        title: 'About',
        href: 'https://artgeneration.me/about'
      }
    }
  }
}
