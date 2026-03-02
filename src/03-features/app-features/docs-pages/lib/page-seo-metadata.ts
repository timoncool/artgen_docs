import { siteAssetsFolder, siteName, siteUrl } from '@/src/01-shared/API/entry/entry';
import { Lng } from '@/src/01-shared/types/app/lng';

export const pageSeoMetadata = {
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
