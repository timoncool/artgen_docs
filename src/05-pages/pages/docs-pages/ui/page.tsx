import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import React from 'react';

import { siteAssetsFolder, siteName, siteUrl } from '@/src/01-shared/API/entry/entry';
import { fallback_lng, getIsSupportedPathLng } from '@/src/01-shared/i18next';
import { Lng } from '@/src/01-shared/types/app/lng';
import { getMetadataFromSeoMetadata } from '@/src/03-features/app-features/seo-metadata';

type LngPage = Partial<Record<Lng, React.ReactNode>>;
type PagesMap = { index?: LngPage } & Record<string, LngPage>;

interface ServerSideProps {
  params: {
    lng?: string;
    slug?: string[];
  };
}

const pageSeoMetadata = {
  [Lng.RU]: {
    page: {
      locale: 'ru_RU',

      title: `Руководство пользователя | ${siteName} Docs`,
      description: `Полное руководство по использованию ${siteName} - платформы для генерации изображений`,
      page_url: `${siteUrl}/{{slug}}`,

      image_url: `${siteUrl}/assets/docs-pages/${siteAssetsFolder}/ru/main.png`,
      image_type: 'image/png',
      image_alt: 'Начните творить!',
      image_width: '1250',
      image_height: '852',
    },
    notFoundPage: {
      locale: 'ru_RU',

      title: `Ошибка. Проверьте ссылку и попробуйте снова | ${siteName} - Нейросеть для генерации изображений`,
      description: `Ошибка. Проверьте ссылку и попробуйте снова | ${siteName} - Нейросеть для генерации изображений`,
      page_url: `${siteUrl}/{{slug}}`,

      image_url: `${siteUrl}/assets/docs-pages/${siteAssetsFolder}/ru/main.png`,
      image_type: 'image/png',
      image_alt: 'Начните творить!',
      image_width: '1250',
      image_height: '852',
    },
  },
  [Lng.EN]: {
    page: {
      locale: 'en_US',

      title: `User Guide | ${siteName} Docs`,
      description: `Complete guide to using ${siteName} - image generation platform`,
      page_url: `${siteUrl}/{{slug}}`,

      image_url: `${siteUrl}/assets/docs-pages/${siteAssetsFolder}/en/main.png`,
      image_type: 'image/png',
      image_alt: 'Start Creating!',
      image_width: '1250',
      image_height: '852',
    },
    notFoundPage: {
      locale: 'en_US',

      title: `Error. Check the link and try again | ${siteName} - AI Image Generator`,
      description: `Error. Check the link and try again | ${siteName} - AI Image Generator`,
      page_url: `${siteUrl}/{{slug}}`,

      image_url: `${siteUrl}/assets/docs-pages/${siteAssetsFolder}/en/main.png`,
      image_type: 'image/png',
      image_alt: 'Start Creating!',
      image_width: '1250',
      image_height: '852',
    },
  },
};

export const createLocalizedDocsSlugPage = (
  pages: PagesMap,
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
    return getMetadataFromSeoMetadata({ seoMetadata, lng: docLng });
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

    if (!page) {
      notFound();
    }
    return <>{page}</>;
  };

  return {
    generateMetadata,
    Page,
  };
};
