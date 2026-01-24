import i18next from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { initReactI18next } from 'react-i18next/initReactI18next';

import { fallback_lng, fallback_ns, lngs } from './i18next-settings';

const isSSR = typeof window === 'undefined';

void i18next
  .use(initReactI18next)
  .use(resourcesToBackend((language: string, namespace: string) => import(`./locales/${language}/${namespace}.json`)))
  .init({
    supportedLngs: lngs,
    fallbackLng: fallback_lng,
    lng: undefined,
    fallbackNS: fallback_ns,
    defaultNS: fallback_ns,
    preload: isSSR ? lngs : [],
  });

export default i18next;
