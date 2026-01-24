export interface SeoMetadata {
  result?: 'error';
  status?: number;

  locale: string;
  title: string;
  description: string;

  og_description?: string;
  twitter_description?: string;

  page_url: string;
  image_url: string;
  image_type: string;
  image_alt: string;
  image_width: string;
  image_height: string;
}

export enum SeoMetadataPageName {
  PAGE = 'page',
  MAIN_PAGE = 'main-page',
  ABOUT_PAGE = 'about-page',
  GENERATOR_PAGE = 'generator-page',
  FAST_IMAGE_EDITOR_PAGE = 'fast-image-editor-page',
  PAYMENT_PAGE = 'payment-page',
  PAYMENT_HISTORY_PAGE = 'payment-history-page',
  REFERRAL_PAGE = 'referral-page',
  AGREEMENT_TERMS_PAGE = 'agreement-terms-page',
  CONFIDENTIAL_TERMS_PAGE = 'confidential-terms-page',
  CONDITIONS_TERMS_PAGE = 'conditions-terms-page',
  NOT_FOUND_PAGE = 'not-found-page',

  MAIN_GALLERY_CATEGORY_PAGE = 'main-gallery-category-page',
  USER_GALLERY_PAGE = 'user-gallery-page',
  IMAGE_PAGE = 'image-page',

  NEW_YEAR_PAGE = 'new-year-page',
}
