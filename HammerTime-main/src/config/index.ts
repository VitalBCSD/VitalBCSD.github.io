import type { AppI18nNamespaces } from 'react-i18next';
import localeConfig from '../../public/locales/config.json';

export const SITE_TITLE = 'HammerTime';
export const CANONICAL_URL = 'https://vitalbcsd.github.io/hammertime.html';
export const REPOSITORY_URL = 'https://github.com/VitalBCSD/VitalBCSD.github.io';
export const CROWDIN_URL = 'https://crowdin.com/project/hammertime';
export const FONTAWESOME_FREE_LICENSE_URL = 'https://fontawesome.com/license/free';

export const IS_CLIENT_SIDE = typeof window !== 'undefined';

export type AvailableLanguage = keyof typeof localeConfig.languages;

type LanguagesConfig = Record<
  AvailableLanguage,
  {
    nativeName: string;
    countryCode: string;
    rtl?: boolean;
    momentLocale?: string;
    crowdinLocale?: string;
    percent?: number;
  }
>;

export const LANGUAGES: LanguagesConfig = localeConfig.languages;

export const DEFAULT_I18N_NAMESPACES: AppI18nNamespaces[] = ['common'];

export const isAvailableLanguage = (language: string): language is AvailableLanguage => language in LANGUAGES;

const DEV_MODE = process.env.NODE_ENV === 'development';

export const CSP_HEADER = [
  `default-src 'self'`,
  `script-src ${DEV_MODE ? `* 'unsafe-inline' 'unsafe-hashes' ` : ''}'self' 'unsafe-eval'`,
  `style-src 'self' 'unsafe-inline' fonts.googleapis.com`,
  `img-src 'self' data: cdn.jsdelivr.net; font-src fonts.gstatic.com`,
  `connect-src 'self' vitals.vercel-insights.com; media-src 'self'`,
  `object-src 'none'`,
  `prefetch-src 'none'`,
  `child-src 'none'`,
  `frame-src 'none'`,
  `worker-src 'self'`,
  `frame-ancestors 'none'`,
  `form-action 'none'`,
  DEV_MODE ? null : `upgrade-insecure-requests`,
  `block-all-mixed-content`,
]
  .filter(Boolean)
  .join('; ');
