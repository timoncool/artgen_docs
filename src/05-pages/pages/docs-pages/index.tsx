import React from 'react';

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
  billing: {
    [Lng.RU]: <docsMapRU.billingDoc />,
    [Lng.EN]: <docsMapEN.billingDoc />,
  },
  catalogs: {
    [Lng.RU]: <docsMapRU.catalogsDoc />,
    [Lng.EN]: <docsMapEN.catalogsDoc />,
  },
  chat: {
    [Lng.RU]: <docsMapRU.chatDoc />,
    [Lng.EN]: <docsMapEN.chatDoc />,
  },
  coins: {
    [Lng.RU]: <docsMapRU.coinsDoc />,
    [Lng.EN]: <docsMapEN.coinsDoc />,
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
  'my-works': {
    [Lng.RU]: <docsMapRU.myWorksDoc />,
    [Lng.EN]: <docsMapEN.myWorksDoc />,
  },
  profile: {
    [Lng.RU]: <docsMapRU.profileDoc />,
    [Lng.EN]: <docsMapEN.profileDoc />,
  },
  rules: {
    [Lng.RU]: <docsMapRU.rulesDoc />,
    [Lng.EN]: <docsMapEN.rulesDoc />,
  },
  special: {
    [Lng.RU]: <docsMapRU.specialDoc />,
    [Lng.EN]: <docsMapEN.specialDoc />,
  },
  start: {
    [Lng.RU]: <docsMapRU.startDoc />,
    [Lng.EN]: <docsMapEN.startDoc />,
  },
  troubleshooting: {
    [Lng.RU]: <docsMapRU.troubleshootingDoc />,
    [Lng.EN]: <docsMapEN.troubleshootingDoc />,
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
