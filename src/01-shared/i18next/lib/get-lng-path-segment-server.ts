import { fallback_lng } from './i18next-settings';

export function getLngPathSegmentServer(lng: string): string {
  if (lng === fallback_lng) {
    return '';
  }

  return `/${lng}`;
}
