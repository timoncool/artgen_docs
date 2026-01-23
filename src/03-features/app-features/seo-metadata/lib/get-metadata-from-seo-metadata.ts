import type { Metadata } from 'next';

import { siteUrl } from '@/src/01-shared/API/entry/entry';
import { fallback_lng, getLngPathSegmentServer } from '@/src/01-shared/i18next';
import type { SeoMetadata } from '@/src/01-shared/types/app/seo-metadata';

export const getMetadataFromSeoMetadata = ({
  seoMetadata,
  lng = fallback_lng,
}: {
  seoMetadata: SeoMetadata;
  lng?: string;
}): Metadata => {
  const {
    locale,
    title,
    description,
    og_description,
    twitter_description,

    page_url: pageUrl,
    image_url,
    image_type,
    image_alt,
    image_width,
    image_height,
  } = seoMetadata;

  const lngPathSegment = getLngPathSegmentServer(lng);
  const page_url = pageUrl.replace(siteUrl, `${siteUrl}${lngPathSegment}`);

  return {
    title,
    description,

    openGraph: {
      type: 'website',

      locale,
      title,
      description: og_description || description,

      siteName: title,
      url: page_url,

      images: [
        {
          url: image_url,
          type: image_type,
          alt: image_alt,
          width: image_width,
          height: image_height,
        },
      ],
    },

    twitter: {
      card: 'summary_large_image',

      title,
      description: twitter_description || description,

      site: page_url,

      images: [
        {
          url: image_url,
          type: image_type,
          alt: image_alt,
          width: image_width,
          height: image_height,
        },
      ],
    },
  };
};
