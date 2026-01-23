import dynamic from 'next/dynamic';

import { type AboutDocsMap, type DocsMap, type NewsMap } from '@/src/01-shared/types/app/docs-pages';

const aboutDocsMapRU: AboutDocsMap = {
  contributingDoc: dynamic(() => import('./about-docs/contributing.mdx')),
  contributorsDoc: dynamic(() => import('./about-docs/contributors.mdx')),
};

const docsMapRU: DocsMap = {
  introDoc: dynamic(() => import('./docs/index.mdx')),
  editorDoc: dynamic(() => import('./docs/editor.mdx')),
  faqDoc: dynamic(() => import('./docs/faq.mdx')),
  galleryDoc: dynamic(() => import('./docs/gallery.mdx')),
  generatorDoc: dynamic(() => import('./docs/generator.mdx')),
  mainPageDoc: dynamic(() => import('./docs/main-page.mdx')),
  registrationDoc: dynamic(() => import('./docs/registration.mdx')),
  rulesDoc: dynamic(() => import('./docs/rules.mdx')),
  userMenuDoc: dynamic(() => import('./docs/user-menu.mdx')),

  editor: {
    intro: dynamic(() => import('./docs/editor/index.mdx')),
  },

  gallery: {
    intro: dynamic(() => import('./docs/gallery/index.mdx')),
    categories: dynamic(() => import('./docs/gallery/categories.mdx')),
    coverInteraction: dynamic(() => import('./docs/gallery/cover-interaction.mdx')),
    createVersion: dynamic(() => import('./docs/gallery/create-version.mdx')),
    galleryView: dynamic(() => import('./docs/gallery/gallery-view.mdx')),
    generationDetails: dynamic(() => import('./docs/gallery/generation-details.mdx')),
    imageView: dynamic(() => import('./docs/gallery/image-view.mdx')),
    interactiveElements: dynamic(() => import('./docs/gallery/interactive-elements.mdx')),
    searchCategories: dynamic(() => import('./docs/gallery/search-categories.mdx')),
    similarImages: dynamic(() => import('./docs/gallery/similar-images.mdx')),
    viewElements: dynamic(() => import('./docs/gallery/view-elements.mdx')),
  },

  generator: {
    intro: dynamic(() => import('./docs/generator/index.mdx')),
    queryLanguage: dynamic(() => import('./docs/generator/query-language.mdx')),
    queryTips: dynamic(() => import('./docs/generator/query-tips.mdx')),

    additionalActions: {
      intro: dynamic(() => import('./docs/generator/additional-actions/index.mdx')),
      copyLink: dynamic(() => import('./docs/generator/additional-actions/copy-link.mdx')),
      createSimilar: dynamic(() => import('./docs/generator/additional-actions/create-similar.mdx')),
      download: dynamic(() => import('./docs/generator/additional-actions/download.mdx')),
      faceRestoration: dynamic(() => import('./docs/generator/additional-actions/face-restoration.mdx')),
      fullscreen: dynamic(() => import('./docs/generator/additional-actions/fullscreen.mdx')),
      outpainting: dynamic(() => import('./docs/generator/additional-actions/outpainting.mdx')),
      ownImage: dynamic(() => import('./docs/generator/additional-actions/own-image.mdx')),
      restorationUpscale: dynamic(() => import('./docs/generator/additional-actions/restoration-upscale.mdx')),
      upscale2x: dynamic(() => import('./docs/generator/additional-actions/upscale-2x.mdx')),
    },

    leftPanel: {
      intro: dynamic(() => import('./docs/generator/left-panel/index.mdx')),
      favorites: dynamic(() => import('./docs/generator/left-panel/favorites.mdx')),
      folders: dynamic(() => import('./docs/generator/left-panel/folders.mdx')),
      history: dynamic(() => import('./docs/generator/left-panel/history.mdx')),
      quickActions: dynamic(() => import('./docs/generator/left-panel/quick-actions.mdx')),
    },

    rightPanel: {
      intro: dynamic(() => import('./docs/generator/right-panel/index.mdx')),
      faceSwap: dynamic(() => import('./docs/generator/right-panel/face-swap.mdx')),
      initImage: dynamic(() => import('./docs/generator/right-panel/init-image.mdx')),
      loras: dynamic(() => import('./docs/generator/right-panel/loras.mdx')),
      models: dynamic(() => import('./docs/generator/right-panel/models.mdx')),
      negativePrompt: dynamic(() => import('./docs/generator/right-panel/negative-prompt.mdx')),
      parameters: dynamic(() => import('./docs/generator/right-panel/parameters.mdx')),
      performanceMode: dynamic(() => import('./docs/generator/right-panel/performance-mode.mdx')),
      resolution: dynamic(() => import('./docs/generator/right-panel/resolution.mdx')),
      styles: dynamic(() => import('./docs/generator/right-panel/styles.mdx')),
    },
  },

  mainPage: {
    intro: dynamic(() => import('./docs/main-page/index.mdx')),
    generationCounter: dynamic(() => import('./docs/main-page/generation-counter.mdx')),
    gettingGenerarions: dynamic(() => import('./docs/main-page/getting-generations.mdx')),
    navigation: dynamic(() => import('./docs/main-page/navigation.mdx')),
    paymentWindow: dynamic(() => import('./docs/main-page/payment-window.mdx')),
  },

  registration: {
    intro: dynamic(() => import('./docs/registration/index.mdx')),
    process: dynamic(() => import('./docs/registration/process.mdx')),
    welcomeBonus: dynamic(() => import('./docs/registration/welcome-bonus.mdx')),
    whyRegister: dynamic(() => import('./docs/registration/why-register.mdx')),
  },

  userMenu: {
    intro: dynamic(() => import('./docs/user-menu/index.mdx')),
  },
};

const newsMapRU: NewsMap = {
  introDoc: dynamic(() => import('./news/index.mdx')),
};

export { aboutDocsMapRU, docsMapRU, newsMapRU };
