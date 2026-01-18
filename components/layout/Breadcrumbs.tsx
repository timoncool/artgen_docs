'use client'

import { Box, Breadcrumbs as MantineBreadcrumbs, Anchor } from '@mantine/core'
import { IconChevronRight, IconHome } from '@tabler/icons-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Locale, translations } from '@/lib/i18n/config'
import { NavItem } from '@/lib/navigation/build-nav'

interface BreadcrumbsProps {
  locale: Locale
  navigation: NavItem[]
}

function findNavItem(items: NavItem[], href: string): NavItem | null {
  for (const item of items) {
    if (item.href === href) {
      return item
    }
    if (item.children) {
      const found = findNavItem(item.children, href)
      if (found) return found
    }
  }
  return null
}

function buildBreadcrumbPath(items: NavItem[], targetHref: string, path: NavItem[] = []): NavItem[] | null {
  for (const item of items) {
    if (item.href === targetHref) {
      return [...path, item]
    }
    if (item.children) {
      const result = buildBreadcrumbPath(item.children, targetHref, [...path, item])
      if (result) return result
    }
  }
  return null
}

export function Breadcrumbs({ locale, navigation }: BreadcrumbsProps) {
  const pathname = usePathname()
  const t = translations[locale]

  if (!pathname) return null

  // Build breadcrumb path from navigation
  const breadcrumbPath = buildBreadcrumbPath(navigation, pathname)

  // If not found in navigation, try to build from URL segments
  if (!breadcrumbPath) {
    return null
  }

  const items = [
    // Home/Docs root
    <Anchor
      key="home"
      component={Link}
      href={`/${locale}/docs`}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 4,
        color: 'rgba(255, 255, 255, 0.6)',
        textDecoration: 'none',
        fontSize: 13,
        transition: 'color 0.2s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = '#12b886'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)'
      }}
    >
      <IconHome size={14} />
      {t.docTitle}
    </Anchor>,
    // Dynamic path segments
    ...breadcrumbPath.slice(1).map((item, index) => {
      const isLast = index === breadcrumbPath.length - 2

      return (
        <Anchor
          key={item.href}
          component={Link}
          href={item.href}
          style={{
            color: isLast ? '#12b886' : 'rgba(255, 255, 255, 0.6)',
            textDecoration: 'none',
            fontSize: 13,
            fontWeight: isLast ? 500 : 400,
            transition: 'color 0.2s ease',
          }}
          onMouseEnter={(e) => {
            if (!isLast) {
              e.currentTarget.style.color = '#12b886'
            }
          }}
          onMouseLeave={(e) => {
            if (!isLast) {
              e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)'
            }
          }}
        >
          {item.title}
        </Anchor>
      )
    }),
  ]

  if (items.length <= 1) return null

  return (
    <Box mb={16}>
      <MantineBreadcrumbs
        separator={
          <IconChevronRight
            size={14}
            style={{ color: 'rgba(255, 255, 255, 0.3)' }}
          />
        }
        styles={{
          root: {
            flexWrap: 'wrap',
            gap: 4,
          },
          separator: {
            margin: '0 4px',
          },
        }}
      >
        {items}
      </MantineBreadcrumbs>
    </Box>
  )
}
