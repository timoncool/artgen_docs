import { fallback_lng, lngs } from './i18next-settings';

export function getIsSupportedPathLng(lng: string): boolean {
  if (lng === fallback_lng) {
    return false;
  }

  const NOT_FOUND_INDEX = -1;
  const lngIndex = lngs.findIndex((lngItem) => lngItem === lng);
  return lngIndex !== NOT_FOUND_INDEX;
}
