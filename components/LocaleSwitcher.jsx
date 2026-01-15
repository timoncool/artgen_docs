'use client'

import { usePathname, useRouter } from 'next/navigation'

const locales = [
  { code: 'ru', name: 'RU' },
  { code: 'en', name: 'EN' }
]

export function LocaleSwitcher({ currentLocale }) {
  const pathname = usePathname()
  const router = useRouter()

  const switchLocale = (newLocale) => {
    // Set the NEXT_LOCALE cookie
    document.cookie = `NEXT_LOCALE=${newLocale};path=/;max-age=31536000;SameSite=Lax`

    // Replace current locale in pathname with new locale
    const currentLocalePattern = new RegExp(`^/(${locales.map(l => l.code).join('|')})`)
    const newPathname = pathname.replace(currentLocalePattern, `/${newLocale}`)

    router.push(newPathname)
  }

  return (
    <div className="locale-switcher">
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
        <path d="M2 12h20"/>
      </svg>
      <select
        value={currentLocale}
        onChange={(e) => switchLocale(e.target.value)}
        className="locale-select"
      >
        {locales.map((locale) => (
          <option key={locale.code} value={locale.code}>
            {locale.name}
          </option>
        ))}
      </select>
    </div>
  )
}
