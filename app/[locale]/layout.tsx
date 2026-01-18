import { ReactNode } from 'react'
import { Header } from '@/components/layout'
import { Providers } from '@/components/Providers'
import { buildNavigation, buildExtraNavigation } from '@/lib/navigation/build-nav'
import { Locale } from '@/lib/i18n/config'
import '../globals.css'

interface LocaleLayoutProps {
  children: ReactNode
  params: { locale: string }
}

export default function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const locale = params.locale as Locale

  // Build navigation server-side
  const navigation = buildNavigation(locale, 'docs')
  const extraNavigation = buildExtraNavigation(locale)

  return (
    <html lang={locale}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700&family=Fira+Code:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Providers>
          <Header locale={locale} navigation={navigation} extraNavigation={extraNavigation} />
          {children}
        </Providers>
      </body>
    </html>
  )
}
