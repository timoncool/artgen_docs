import { ComponentType } from 'react';
import { MDXProps } from 'mdx/types';

export interface AboutDocsMap {
  contributingDoc: ComponentType<MDXProps>;
  contributorsDoc: ComponentType<MDXProps>;
}

export interface DocsMap {
  introDoc: ComponentType<MDXProps>;
  editorDoc: ComponentType<MDXProps>;
  faqDoc: ComponentType<MDXProps>;
  galleryDoc: ComponentType<MDXProps>;
  generatorDoc: ComponentType<MDXProps>;
  mainPageDoc: ComponentType<MDXProps>;
  registrationDoc: ComponentType<MDXProps>;
  rulesDoc: ComponentType<MDXProps>;
  userMenuDoc: ComponentType<MDXProps>;

  editor: {
    intro: ComponentType<MDXProps>;
  };

  gallery: {
    intro: ComponentType<MDXProps>;
    categories: ComponentType<MDXProps>;
    coverInteraction: ComponentType<MDXProps>;
    createVersion: ComponentType<MDXProps>;
    galleryView: ComponentType<MDXProps>;
    generationDetails: ComponentType<MDXProps>;
    imageView: ComponentType<MDXProps>;
    interactiveElements: ComponentType<MDXProps>;
    searchCategories: ComponentType<MDXProps>;
    similarImages: ComponentType<MDXProps>;
    viewElements: ComponentType<MDXProps>;
  };

  generator: {
    intro: ComponentType<MDXProps>;
    queryLanguage: ComponentType<MDXProps>;
    queryTips: ComponentType<MDXProps>;

    additionalActions: {
      intro: ComponentType<MDXProps>;
      copyLink: ComponentType<MDXProps>;
      createSimilar: ComponentType<MDXProps>;
      download: ComponentType<MDXProps>;
      faceRestoration: ComponentType<MDXProps>;
      fullscreen: ComponentType<MDXProps>;
      outpainting: ComponentType<MDXProps>;
      ownImage: ComponentType<MDXProps>;
      restorationUpscale: ComponentType<MDXProps>;
      upscale2x: ComponentType<MDXProps>;
    };

    leftPanel: {
      intro: ComponentType<MDXProps>;
      favorites: ComponentType<MDXProps>;
      folders: ComponentType<MDXProps>;
      history: ComponentType<MDXProps>;
      quickActions: ComponentType<MDXProps>;
    };

    rightPanel: {
      intro: ComponentType<MDXProps>;
      faceSwap: ComponentType<MDXProps>;
      initImage: ComponentType<MDXProps>;
      loras: ComponentType<MDXProps>;
      models: ComponentType<MDXProps>;
      negativePrompt: ComponentType<MDXProps>;
      parameters: ComponentType<MDXProps>;
      performanceMode: ComponentType<MDXProps>;
      resolution: ComponentType<MDXProps>;
      styles: ComponentType<MDXProps>;
    };
  };

  mainPage: {
    intro: ComponentType<MDXProps>;
    generationCounter: ComponentType<MDXProps>;
    gettingGenerarions: ComponentType<MDXProps>;
    navigation: ComponentType<MDXProps>;
    paymentWindow: ComponentType<MDXProps>;
  };

  registration: {
    intro: ComponentType<MDXProps>;
    process: ComponentType<MDXProps>;
    welcomeBonus: ComponentType<MDXProps>;
    whyRegister: ComponentType<MDXProps>;
  };

  userMenu: {
    intro: ComponentType<MDXProps>;
  };
}

export interface NewsMap {
  introDoc: ComponentType<MDXProps>;
}
