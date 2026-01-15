import { useRouter } from 'next/router'
import Link from 'next/link'

export function LocaleSwitcher() {
  const { locale, asPath } = useRouter()
  const otherLocale = locale === 'ru' ? 'en' : 'ru'
  const label = locale === 'ru' ? 'EN' : 'RU'

  return (
    <Link
      href={asPath}
      locale={otherLocale}
      className="locale-switcher-btn"
      title={otherLocale === 'en' ? 'Switch to English' : 'Переключить на русский'}
    >
      <svg className="intl-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
        <ellipse cx="12" cy="12" rx="4" ry="10" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M2 12h20" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
      <span>{label}</span>
    </Link>
  )
}
