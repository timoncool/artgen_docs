import { APIenv } from '@/src/01-shared/types/API';
import { Lng } from '@/src/01-shared/types/app/lng';
import { SiteName } from '@/src/01-shared/types/app/site';

export const selectedSiteNameEnv = process.env.NEXT_PUBLIC_SITE_NAME_ENV as SiteName;
export const selectedSiteUrlEnv = process.env.NEXT_PUBLIC_SITE_URL_ENV as APIenv;

const siteNamesMap = {
  [SiteName.ARTGENERATION_CO]: 'ArtGeneration.co',
  [SiteName.ARTGENERATION_ME]: 'ArtGeneration.me',
};

const siteFallbackLngsMap = {
  [SiteName.ARTGENERATION_CO]: Lng.EN,
  [SiteName.ARTGENERATION_ME]: Lng.RU,
};

const siteLngsMap = {
  [SiteName.ARTGENERATION_CO]: [Lng.EN, Lng.RU],
  [SiteName.ARTGENERATION_ME]: [Lng.RU, Lng.EN],
};

const siteAssetsFoldersMap = {
  [SiteName.ARTGENERATION_CO]: 'artgeneration_co',
  [SiteName.ARTGENERATION_ME]: 'artgeneration_me',
};

const siteUrlsMap = {
  prod_global: 'https://artgeneration.co',
  prod: 'https://artgeneration.me',
};

export const siteName = siteNamesMap[selectedSiteNameEnv];
export const siteFallbackLng = siteFallbackLngsMap[selectedSiteNameEnv];
export const siteLngs = siteLngsMap[selectedSiteNameEnv];

export const siteAssetsFolder = siteAssetsFoldersMap[selectedSiteNameEnv];

export const siteUrl = siteUrlsMap[selectedSiteUrlEnv];
