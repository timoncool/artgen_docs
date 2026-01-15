export default {
  logo: (
    <a href="https://artgeneration.me/ru/generator" style={{ display: 'flex', alignItems: 'center' }}>
      <img
        src="https://artgeneration.me/artgeneration_me/assets/ru/logo/logo.png"
        alt="ArtGeneration.me"
        style={{ height: '32px' }}
      />
    </a>
  ),
  project: {
    link: 'https://artgeneration.me',
  },
  docsRepositoryBase: 'https://github.com/timoncool/artgen_docs',
  footer: {
    text: `${new Date().getFullYear()} ArtGeneration.me`,
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  toc: {
    backToTop: true,
  },
  i18n: [
    { locale: 'ru', text: 'Русский' },
    { locale: 'en', text: 'English' },
  ],
  darkMode: true,
  primaryHue: 162,
};
