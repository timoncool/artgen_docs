import nextra from 'nextra'

const withNextra = nextra({
  latex: true,
  search: { codeblocks: false },
  contentDirBasePath: '/'
})

export default withNextra({
  i18n: {
    locales: ['ru', 'en'],
    defaultLocale: 'ru'
  },
  images: { unoptimized: true }
})
