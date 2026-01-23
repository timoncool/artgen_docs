import { Lng } from '@/src/01-shared/types/app/lng';

import { aboutDocsMapEN, docsMapEN, newsMapEN } from './ui/en';
import { aboutDocsMapRU, docsMapRU, newsMapRU } from './ui/ru';

const aboutDocsPages = {
  index: {
    [Lng.RU]: null,
    [Lng.EN]: null,
  },

  contributing: {
    [Lng.RU]: <aboutDocsMapRU.contributingDoc />,
    [Lng.EN]: <aboutDocsMapEN.contributingDoc />,
  },
  contributors: {
    [Lng.RU]: <aboutDocsMapRU.contributorsDoc />,
    [Lng.EN]: <aboutDocsMapEN.contributorsDoc />,
  },
};

const docsPages = {
  index: {
    [Lng.RU]: <docsMapRU.introDoc />,
    [Lng.EN]: <docsMapEN.introDoc />,
  },

  editor: {
    [Lng.RU]: <docsMapRU.editorDoc />,
    [Lng.EN]: <docsMapEN.editorDoc />,
  },
  faq: {
    [Lng.RU]: <docsMapRU.faqDoc />,
    [Lng.EN]: <docsMapEN.faqDoc />,
  },
  gallery: {
    [Lng.RU]: <docsMapRU.galleryDoc />,
    [Lng.EN]: <docsMapEN.galleryDoc />,
  },
  generator: {
    [Lng.RU]: <docsMapRU.generatorDoc />,
    [Lng.EN]: <docsMapEN.generatorDoc />,
  },
  'main-page': {
    [Lng.RU]: <docsMapRU.mainPageDoc />,
    [Lng.EN]: <docsMapEN.mainPageDoc />,
  },
  registration: {
    [Lng.RU]: <docsMapRU.registrationDoc />,
    [Lng.EN]: <docsMapEN.registrationDoc />,
  },
  rules: {
    [Lng.RU]: <docsMapRU.rulesDoc />,
    [Lng.EN]: <docsMapEN.rulesDoc />,
  },
  'user-menu': {
    [Lng.RU]: <docsMapRU.userMenuDoc />,
    [Lng.EN]: <docsMapEN.userMenuDoc />,
  },

  'editor/index': {
    [Lng.RU]: <docsMapRU.editor.intro />,
    [Lng.EN]: <docsMapEN.editor.intro />,
  },

  'gallery/index': {
    [Lng.RU]: <docsMapRU.gallery.intro />,
    [Lng.EN]: <docsMapEN.gallery.intro />,
  },
  'gallery/categories': {
    [Lng.RU]: <docsMapRU.gallery.categories />,
    [Lng.EN]: <docsMapEN.gallery.categories />,
  },
  'gallery/cover-interaction': {
    [Lng.RU]: <docsMapRU.gallery.coverInteraction />,
    [Lng.EN]: <docsMapEN.gallery.coverInteraction />,
  },
  'gallery/create-version': {
    [Lng.RU]: <docsMapRU.gallery.createVersion />,
    [Lng.EN]: <docsMapEN.gallery.createVersion />,
  },
  'gallery/gallery-view': {
    [Lng.RU]: <docsMapRU.gallery.galleryView />,
    [Lng.EN]: <docsMapEN.gallery.galleryView />,
  },
  'gallery/generation-details': {
    [Lng.RU]: <docsMapRU.gallery.generationDetails />,
    [Lng.EN]: <docsMapEN.gallery.generationDetails />,
  },
  'gallery/image-view': {
    [Lng.RU]: <docsMapRU.gallery.imageView />,
    [Lng.EN]: <docsMapEN.gallery.imageView />,
  },
  'gallery/interactive-elements': {
    [Lng.RU]: <docsMapRU.gallery.interactiveElements />,
    [Lng.EN]: <docsMapEN.gallery.interactiveElements />,
  },
  'gallery/search-categories': {
    [Lng.RU]: <docsMapRU.gallery.searchCategories />,
    [Lng.EN]: <docsMapEN.gallery.searchCategories />,
  },
  'gallery/similar-images': {
    [Lng.RU]: <docsMapRU.gallery.similarImages />,
    [Lng.EN]: <docsMapEN.gallery.similarImages />,
  },
  'gallery/view-elements': {
    [Lng.RU]: <docsMapRU.gallery.viewElements />,
    [Lng.EN]: <docsMapEN.gallery.viewElements />,
  },

  'generator/index': {
    [Lng.RU]: <docsMapRU.generator.intro />,
    [Lng.EN]: <docsMapEN.generator.intro />,
  },
  'generator/additional-actions': {
    [Lng.RU]: <docsMapRU.generator.additionalActions.intro />,
    [Lng.EN]: <docsMapEN.generator.additionalActions.intro />,
  },
  'generator/additional-actions/copy-link': {
    [Lng.RU]: <docsMapRU.generator.additionalActions.copyLink />,
    [Lng.EN]: <docsMapEN.generator.additionalActions.copyLink />,
  },
  'generator/additional-actions/create-similar': {
    [Lng.RU]: <docsMapRU.generator.additionalActions.createSimilar />,
    [Lng.EN]: <docsMapEN.generator.additionalActions.createSimilar />,
  },
  'generator/additional-actions/face-restoration': {
    [Lng.RU]: <docsMapRU.generator.additionalActions.faceRestoration />,
    [Lng.EN]: <docsMapEN.generator.additionalActions.faceRestoration />,
  },
  'generator/additional-actions/fullscreen': {
    [Lng.RU]: <docsMapRU.generator.additionalActions.fullscreen />,
    [Lng.EN]: <docsMapEN.generator.additionalActions.fullscreen />,
  },
  'generator/additional-actions/outpainting': {
    [Lng.RU]: <docsMapRU.generator.additionalActions.outpainting />,
    [Lng.EN]: <docsMapEN.generator.additionalActions.outpainting />,
  },
  'generator/additional-actions/own-image': {
    [Lng.RU]: <docsMapRU.generator.additionalActions.ownImage />,
    [Lng.EN]: <docsMapEN.generator.additionalActions.ownImage />,
  },
  'generator/additional-actions/restoration-upscale': {
    [Lng.RU]: <docsMapRU.generator.additionalActions.restorationUpscale />,
    [Lng.EN]: <docsMapEN.generator.additionalActions.restorationUpscale />,
  },
  'generator/additional-actions/upscale-2x': {
    [Lng.RU]: <docsMapRU.generator.additionalActions.upscale2x />,
    [Lng.EN]: <docsMapEN.generator.additionalActions.upscale2x />,
  },
  'generator/left-panel': {
    [Lng.RU]: <docsMapRU.generator.leftPanel.intro />,
    [Lng.EN]: <docsMapEN.generator.leftPanel.intro />,
  },
  'generator/left-panel/favorites': {
    [Lng.RU]: <docsMapRU.generator.leftPanel.favorites />,
    [Lng.EN]: <docsMapEN.generator.leftPanel.favorites />,
  },
  'generator/left-panel/folders': {
    [Lng.RU]: <docsMapRU.generator.leftPanel.folders />,
    [Lng.EN]: <docsMapEN.generator.leftPanel.folders />,
  },
  'generator/left-panel/history': {
    [Lng.RU]: <docsMapRU.generator.leftPanel.history />,
    [Lng.EN]: <docsMapEN.generator.leftPanel.history />,
  },
  'generator/left-panel/quick-actions': {
    [Lng.RU]: <docsMapRU.generator.leftPanel.quickActions />,
    [Lng.EN]: <docsMapEN.generator.leftPanel.quickActions />,
  },
  'generator/right-panel': {
    [Lng.RU]: <docsMapRU.generator.rightPanel.intro />,
    [Lng.EN]: <docsMapEN.generator.rightPanel.intro />,
  },
  'generator/right-panel/face-swap': {
    [Lng.RU]: <docsMapRU.generator.rightPanel.faceSwap />,
    [Lng.EN]: <docsMapEN.generator.rightPanel.faceSwap />,
  },
  'generator/right-panel/init-image': {
    [Lng.RU]: <docsMapRU.generator.rightPanel.initImage />,
    [Lng.EN]: <docsMapEN.generator.rightPanel.initImage />,
  },
  'generator/right-panel/loras': {
    [Lng.RU]: <docsMapRU.generator.rightPanel.loras />,
    [Lng.EN]: <docsMapEN.generator.rightPanel.loras />,
  },
  'generator/right-panel/models': {
    [Lng.RU]: <docsMapRU.generator.rightPanel.models />,
    [Lng.EN]: <docsMapEN.generator.rightPanel.models />,
  },
  'generator/right-panel/negative-prompt': {
    [Lng.RU]: <docsMapRU.generator.rightPanel.negativePrompt />,
    [Lng.EN]: <docsMapEN.generator.rightPanel.negativePrompt />,
  },
  'generator/right-panel/parameters': {
    [Lng.RU]: <docsMapRU.generator.rightPanel.parameters />,
    [Lng.EN]: <docsMapEN.generator.rightPanel.parameters />,
  },
  'generator/right-panel/performance-mode': {
    [Lng.RU]: <docsMapRU.generator.rightPanel.performanceMode />,
    [Lng.EN]: <docsMapEN.generator.rightPanel.performanceMode />,
  },
  'generator/right-panel/resolution': {
    [Lng.RU]: <docsMapRU.generator.rightPanel.resolution />,
    [Lng.EN]: <docsMapEN.generator.rightPanel.resolution />,
  },
  'generator/right-panel/styles': {
    [Lng.RU]: <docsMapRU.generator.rightPanel.styles />,
    [Lng.EN]: <docsMapEN.generator.rightPanel.styles />,
  },
  'generator/query-language': {
    [Lng.RU]: <docsMapRU.generator.queryLanguage />,
    [Lng.EN]: <docsMapEN.generator.queryLanguage />,
  },
  'generator/query-tips': {
    [Lng.RU]: <docsMapRU.generator.queryTips />,
    [Lng.EN]: <docsMapEN.generator.queryTips />,
  },

  'main-page/index': {
    [Lng.RU]: <docsMapRU.mainPage.intro />,
    [Lng.EN]: <docsMapEN.mainPage.intro />,
  },
  'main-page/generation-counter': {
    [Lng.RU]: <docsMapRU.mainPage.generationCounter />,
    [Lng.EN]: <docsMapEN.mainPage.generationCounter />,
  },
  'main-page/getting-generations': {
    [Lng.RU]: <docsMapRU.mainPage.gettingGenerarions />,
    [Lng.EN]: <docsMapEN.mainPage.gettingGenerarions />,
  },
  'main-page/navigation': {
    [Lng.RU]: <docsMapRU.mainPage.navigation />,
    [Lng.EN]: <docsMapEN.mainPage.navigation />,
  },
  'main-page/payment-window': {
    [Lng.RU]: <docsMapRU.mainPage.paymentWindow />,
    [Lng.EN]: <docsMapEN.mainPage.paymentWindow />,
  },

  'registration/index': {
    [Lng.RU]: <docsMapRU.registration.intro />,
    [Lng.EN]: <docsMapEN.registration.intro />,
  },
  'registration/process': {
    [Lng.RU]: <docsMapRU.registration.process />,
    [Lng.EN]: <docsMapEN.registration.process />,
  },
  'registration/welcome-bonus': {
    [Lng.RU]: <docsMapRU.registration.welcomeBonus />,
    [Lng.EN]: <docsMapEN.registration.welcomeBonus />,
  },
  'registration/why-register': {
    [Lng.RU]: <docsMapRU.registration.whyRegister />,
    [Lng.EN]: <docsMapEN.registration.whyRegister />,
  },

  'user-menu/index': {
    [Lng.RU]: <docsMapRU.userMenu.intro />,
    [Lng.EN]: <docsMapEN.userMenu.intro />,
  },
};

const newsPages = {
  index: {
    [Lng.RU]: <newsMapRU.introDoc />,
    [Lng.EN]: <newsMapEN.introDoc />,
  },
};

export { createLocalizedDocsSlugPage } from './ui/page';
export { aboutDocsPages, docsPages, newsPages };
