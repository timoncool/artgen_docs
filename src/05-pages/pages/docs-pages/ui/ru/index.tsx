import dynamic from 'next/dynamic';

import { type AboutDocsMap, type DocsMap, type NewsMap } from '@/src/01-shared/types/app/docs-pages';

const aboutDocsMapRU: AboutDocsMap = {
  contributingDoc: dynamic(() => import('./about-docs/contributing.mdx')),
  contributorsDoc: dynamic(() => import('./about-docs/contributors.mdx')),
};

const docsMapRU: DocsMap = {
  introDoc: dynamic(() => import('./docs/index.mdx')),
  billingDoc: dynamic(() => import('./docs/billing.mdx')),
  catalogsDoc: dynamic(() => import('./docs/catalogs.mdx')),
  chatDoc: dynamic(() => import('./docs/chat.mdx')),
  coinsDoc: dynamic(() => import('./docs/coins.mdx')),
  editorDoc: dynamic(() => import('./docs/editor.mdx')),
  faqDoc: dynamic(() => import('./docs/faq.mdx')),
  galleryDoc: dynamic(() => import('./docs/gallery.mdx')),
  generatorDoc: dynamic(() => import('./docs/generator.mdx')),
  myWorksDoc: dynamic(() => import('./docs/my-works.mdx')),
  profileDoc: dynamic(() => import('./docs/profile.mdx')),
  rulesDoc: dynamic(() => import('./docs/rules.mdx')),
  specialDoc: dynamic(() => import('./docs/special.mdx')),
  startDoc: dynamic(() => import('./docs/start.mdx')),
  troubleshootingDoc: dynamic(() => import('./docs/troubleshooting.mdx')),
};

const newsMapRU: NewsMap = {
  introDoc: dynamic(() => import('./news/index.mdx')),
};

export { aboutDocsMapRU, docsMapRU, newsMapRU };
