import type { MDXProps } from 'mdx/types';
import type { ComponentType } from 'react';

import type { Lng } from '@/src/01-shared/types/app/lng';

export interface SearchIndexItem {
  title: string;
  href: string;
  content: string;
  section: string;
}

export interface SearchResultItem {
  title: string;
  href: string;
  content?: string;
}

export interface MainNavigationItem {
  [Lng.RU]: string;
  [Lng.EN]: string;
  path: string;
}

export interface HeadingItem {
  level: number;
  text: string;
  id: string;
}

export enum PagesFolder {
  DOCS = 'docs',
  ABOUT_DOCS = 'about-docs',
  NEWS = 'news',
}

export interface AboutDocsMap {
  contributingDoc: ComponentType<MDXProps>;
  contributorsDoc: ComponentType<MDXProps>;
}

export interface DocsMap {
  introDoc: ComponentType<MDXProps>;
  billingDoc: ComponentType<MDXProps>;
  catalogsDoc: ComponentType<MDXProps>;
  chatDoc: ComponentType<MDXProps>;
  coinsDoc: ComponentType<MDXProps>;
  editorDoc: ComponentType<MDXProps>;
  faqDoc: ComponentType<MDXProps>;
  galleryDoc: ComponentType<MDXProps>;
  generatorDoc: ComponentType<MDXProps>;
  myWorksDoc: ComponentType<MDXProps>;
  profileDoc: ComponentType<MDXProps>;
  rulesDoc: ComponentType<MDXProps>;
  specialDoc: ComponentType<MDXProps>;
  startDoc: ComponentType<MDXProps>;
  troubleshootingDoc: ComponentType<MDXProps>;
}

export interface NewsMap {
  introDoc: ComponentType<MDXProps>;
}
