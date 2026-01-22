import { ReactNode } from 'react'
import { Box } from '@mantine/core'
import { Sidebar, TableOfContents } from '@/components/layout'
import { buildNavigation, buildExtraNavigation } from '@/lib/navigation/build-nav'
import { Locale } from '@/lib/i18n/config'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'

interface AboutDocsLayoutProps {
  children: ReactNode
  params: { locale: string }
}

export default function AboutDocsLayout({ children, params }: AboutDocsLayoutProps) {
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
        <Breadcrumbs locale={locale} navigation={navigation} />
        <article>{children}</article>
      </Box>
      <Box className="docs-toc">
        <TableOfContents locale={locale} />
      </Box>
    </Box>
  )
}
