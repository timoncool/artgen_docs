import fs from 'node:fs';
import path from 'node:path';

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import React from 'react';

import { fallback_lng, getIsSupportedPathLng } from '@/src/01-shared/i18next';
import { Lng } from '@/src/01-shared/types/app/lng';
import { getMetadataFromSeoMetadata } from '@/src/03-features/app-features/seo-metadata';
import matter from 'gray-matter';
import { PagesFolder } from '@/src/01-shared/types/app/docs-pages';
import { getHeadingItems, pageSeoMetadata } from '@/src/03-features/app-features/docs-pages';

import Sidebar from './components/sidebar/sidebar';
import HeadingsSidebar from './components/headings-sidebar/headings-sidebar';
import ToTopControl from './components/to-top-control';
import { Anchor, Box } from '@mantine/core';
import { IconBrandGithub } from '@tabler/icons-react';

type LngPage = Partial<Record<Lng, React.ReactNode>>;
type PagesMap = { index?: LngPage } & Record<string, LngPage>;

interface ServerSideProps {
  params: {
    lng?: string;
    slug?: string[];
  };
}

const DOCS_REPOSITORY = 'https://github.com/timoncool/artgen_docs';
const DOCS_BRANCH = 'main';
const DOCS_PAGES_FOLDER = 'src/05-pages/pages/docs-pages/ui';
const DOCS_PAGES_FOLDER_PATH = `${DOCS_REPOSITORY}/tree/${DOCS_BRANCH}/${DOCS_PAGES_FOLDER}`;
const DOCS_PAGE_EDIT_TITLE = {
  [Lng.RU]: 'Редактировать на GitHub',
  [Lng.EN]: 'Edit on GitHub',
};

const DOCS_ROOT = path.join(process.cwd(), 'src', '05-pages', 'pages', 'docs-pages', 'ui');

const resolveMdxPath = (baseDir: string, docKey: string): string | null => {
  if (!docKey) {
    const home = path.join(baseDir, 'index.mdx');
    return fs.existsSync(home) ? home : null;
  }

  const direct = path.join(baseDir, `${docKey}.mdx`);
  if (fs.existsSync(direct)) return direct;

  const nestedIndex = path.join(baseDir, docKey, 'index.mdx');
  if (fs.existsSync(nestedIndex)) return nestedIndex;

  return null;
};

const getMdxFilePath = (slug: string[], lng: string, pagesFolder: string): string | null => {
  const segments = (slug ?? []).map((s) => s.toLowerCase()).filter(Boolean);
  const docPagesFolderKey = segments.join('/');
  const baseDir = path.join(DOCS_ROOT, lng ?? fallback_lng, pagesFolder);

  return resolveMdxPath(baseDir, docPagesFolderKey);
};

export const createLocalizedDocsSlugPage = (
  pages: PagesMap,
  pagesFolder: PagesFolder,
): {
  generateMetadata: (props: ServerSideProps) => Metadata;
  Page: (props: ServerSideProps) => React.ReactNode;
} => {
  const { index, ...Pages } = pages;

  const generateMetadata = ({ params }: ServerSideProps): Metadata => {
    const { lng, slug } = params;
    const docKey = (slug ?? []).join('/').toLowerCase();

    if (lng !== undefined && !getIsSupportedPathLng(lng)) {
      const seoMetadata = pageSeoMetadata[fallback_lng].notFoundPage;
      seoMetadata.page_url = seoMetadata.page_url.replace('{{slug}}', docKey);
      return getMetadataFromSeoMetadata({ seoMetadata, lng: fallback_lng });
    }

    const docLng = (lng ?? fallback_lng) as Lng;
    const seoMetadata = pageSeoMetadata[docLng].page;
    seoMetadata.page_url = seoMetadata.page_url.replace('{{slug}}', docKey);

    const filePath = getMdxFilePath(slug ?? [], lng ?? fallback_lng, pagesFolder) as string;
    const { data } = matter(fs.readFileSync(filePath, 'utf8'));

    let metadata = getMetadataFromSeoMetadata({ seoMetadata, lng: docLng });
    metadata = { ...metadata, ...data };

    return metadata;
  };

  const Page = ({ params }: ServerSideProps): React.ReactNode => {
    const { lng, slug } = params;

    if (lng !== undefined && !getIsSupportedPathLng(lng)) {
      notFound();
    }

    const docLng = (lng ?? fallback_lng) as Lng;
    const docKey = (slug ?? []).join('/').toLowerCase();

    const docPage = docKey ? Pages[docKey] : index;
    const page = docPage?.[docLng];

    const filePath = getMdxFilePath(slug ?? [], lng ?? fallback_lng, pagesFolder) as string;
    const githubFilePath = `${DOCS_PAGES_FOLDER_PATH}/${filePath.replace(DOCS_ROOT, '')}`;

    const { content } = matter(fs.readFileSync(filePath, 'utf8'));

    const headingItems = getHeadingItems(content);

    if (!page) {
      notFound();
    }

    return (
      <Box>
        <Box
          style={{
            position: 'sticky',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 2,
          }}
        >
          <Box
            style={{
              position: 'absolute',
              display: 'flex',
              justifyContent: 'space-between',
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
            }}
          >
            <Sidebar lng={docLng} />
            <HeadingsSidebar items={headingItems} />
          </Box>
        </Box>

        <Box m={'0 auto'} p={'24px 48px'} maw={900}>
          {page}
          <Anchor
            href={githubFilePath}
            target='_blank'
            styles={{
              root: {
                display: 'flex',
                justifyContent: 'flex-end',
                gap: 8,
                marginTop: '1.5em',
                marginBottom: 16,
                fontSize: 16,
                lineHeight: 1.7,
                color: '#12b886',
              },
            }}
          >
            {DOCS_PAGE_EDIT_TITLE[docLng]} <IconBrandGithub />
          </Anchor>
        </Box>

        <ToTopControl />
      </Box>
    );
  };

  return {
    generateMetadata,
    Page,
  };
};
