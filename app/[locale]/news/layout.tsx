import { ReactNode } from 'react'
import { Box } from '@mantine/core'
import { Sidebar } from '@/components/layout'
import { buildNavigation, buildExtraNavigation } from '@/lib/navigation/build-nav'
import { Locale } from '@/lib/i18n/config'

interface NewsLayoutProps {
  children: ReactNode
  params: { locale: string }
}

export default function NewsLayout({ children, params }: NewsLayoutProps) {
  const locale = params.locale as Locale

  // Build navigation server-side
  const navigation = buildNavigation(locale, 'docs')
  const extraNavigation = buildExtraNavigation(locale)

  return (
    <Box className="docs-layout">
      <Box className="docs-sidebar">
        <Sidebar locale={locale} navigation={navigation} extraNavigation={extraNavigation} />
      </Box>
      <Box component="main" className="docs-content">
        {children}
      </Box>
    </Box>
  )
}
