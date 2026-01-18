'use client'

import { ReactNode } from 'react'
import { Box } from '@mantine/core'
import { Sidebar, TableOfContents } from '@/components/layout'

interface DocsLayoutProps {
  children: ReactNode
  params: { locale: string }
}

export default function DocsLayout({ children, params }: DocsLayoutProps) {
  const locale = params.locale as 'ru' | 'en'

  return (
    <Box className="docs-layout">
      <Box className="docs-sidebar">
        <Sidebar locale={locale} />
      </Box>
      <Box component="main" className="docs-content">
        <article>{children}</article>
      </Box>
      <Box className="docs-toc">
        <TableOfContents locale={locale} />
      </Box>
    </Box>
  )
}
