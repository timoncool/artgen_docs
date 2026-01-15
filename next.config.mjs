import nextra from 'nextra'

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
  staticImage: true,
  defaultShowCopyCode: true
})

export default withNextra({
  i18n: {
    locales: ['ru', 'en'],
    defaultLocale: 'ru'
  },
  images: { unoptimized: true }
})
