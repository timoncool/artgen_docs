'use client'

import { Drawer, Box, Stack, Anchor, UnstyledButton, Collapse, Flex, Group } from '@mantine/core'
import { IconChevronRight, IconBrandGithub, IconWorld } from '@tabler/icons-react'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Locale, translations, getSiteBase, i18nConfig } from '@/lib/i18n/config'
import { getDocsNavigation, getExtraNavigation, NavItem } from '@/lib/navigation/config'

interface MobileMenuProps {
  locale: Locale
  opened: boolean
  onClose: () => void
}

interface MobileNavItemProps {
  item: NavItem
  locale: Locale
  depth?: number
  onClose: () => void
}

function MobileNavItem({ item, locale, depth = 0, onClose }: MobileNavItemProps) {
  const pathname = usePathname() || ''
  const t = translations[locale]
  const [opened, setOpened] = useState(
    pathname.startsWith(item.href) || !!item.children?.some(child => pathname.startsWith(child.href))
  )

  const isActive = pathname === item.href
  const hasChildren = item.children && item.children.length > 0
  const title = t[item.titleKey] || item.slug

  return (
    <Box>
      <Flex align="center" gap={4}>
        {hasChildren && (
          <UnstyledButton
            onClick={() => setOpened(!opened)}
            aria-label={`Toggle ${title} section`}
            aria-expanded={opened}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 24,
              height: 24,
              borderRadius: 4,
            }}
          >
            <IconChevronRight
              size={16}
              style={{
                transform: opened ? 'rotate(90deg)' : 'rotate(0deg)',
                transition: 'transform 0.2s ease',
                color: 'rgba(255, 255, 255, 0.6)',
              }}
            />
          </UnstyledButton>
        )}
        <Anchor
          component={Link}
          href={item.href}
          onClick={onClose}
          style={{
            display: 'block',
            flex: 1,
            padding: '10px 16px',
            paddingLeft: hasChildren ? 8 : depth * 16 + 16,
            borderRadius: 8,
            color: isActive ? '#12b886' : 'rgba(255, 255, 255, 0.9)',
            background: isActive ? 'rgba(18, 184, 134, 0.15)' : 'transparent',
            textDecoration: 'none',
            fontSize: 15,
            fontWeight: isActive ? 500 : 400,
          }}
        >
          {title}
        </Anchor>
      </Flex>

      {hasChildren && (
        <Collapse in={opened}>
          <Stack gap={4} pl={depth > 0 ? 16 : 12} pt={4}>
            {item.children!.map((child) => (
              <MobileNavItem
                key={child.slug}
                item={child}
                locale={locale}
                depth={depth + 1}
                onClose={onClose}
              />
            ))}
          </Stack>
        </Collapse>
      )}
    </Box>
  )
}

export function MobileMenu({ locale, opened, onClose }: MobileMenuProps) {
  const t = translations[locale]
  const siteBase = getSiteBase(locale)
  const navigation = getDocsNavigation(locale)
  const extraNavigation = getExtraNavigation(locale)
  const pathname = usePathname()
  const router = useRouter()

  const switchLocale = (newLocale: Locale) => {
    if (!pathname) return

    // Remove current locale prefix from path
    let basePath = pathname
    if (pathname.startsWith(`/${locale}`)) {
      basePath = pathname.slice(`/${locale}`.length) || '/'
    }

    // Add new locale prefix
    const newPath = `/${newLocale}${basePath === '/' ? '' : basePath}`

    // Set cookie for persistence
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`

    onClose()
    router.push(newPath)
  }

  const mainLinks = [
    { label: t.gallery, href: `${siteBase}/gallery/category/all/new` },
    { label: t.create, href: `${siteBase}/generator` },
    { label: t.editor, href: `${siteBase}/editor` },
    { label: t.about, href: `${siteBase}/about` },
  ]

  return (
    <Drawer
      opened={opened}
      onClose={onClose}
      size="85%"
      position="right"
      title={
        <img
          src="https://artgeneration.me/artgeneration_me/assets/ru/logo/logo.png"
          alt="ArtGeneration.me"
          style={{ height: 28 }}
        />
      }
      styles={{
        root: { zIndex: 1000 },
        header: {
          background: '#1a1a1a',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          padding: '16px 20px',
        },
        title: { margin: 0 },
        close: { color: 'white' },
        body: {
          background: '#1a1a1a',
          padding: 0,
          height: 'calc(100% - 60px)',
          display: 'flex',
          flexDirection: 'column',
        },
        content: { background: '#1a1a1a' },
      }}
    >
      <Box style={{ flex: 1, overflowY: 'auto', padding: '16px' }}>
        {/* Main site links */}
        <Box mb={24}>
          <Box
            style={{
              fontSize: 12,
              textTransform: 'uppercase',
              color: 'rgba(255, 255, 255, 0.5)',
              marginBottom: 12,
              paddingLeft: 16,
              letterSpacing: 0.5,
            }}
          >
            {t.navigation || 'Навигация'}
          </Box>
          <Stack gap={4}>
            {mainLinks.map((link) => (
              <Anchor
                key={link.href}
                href={link.href}
                onClick={onClose}
                style={{
                  display: 'block',
                  padding: '10px 16px',
                  borderRadius: 8,
                  color: 'rgba(255, 255, 255, 0.9)',
                  textDecoration: 'none',
                  fontSize: 15,
                  background: 'rgba(48, 48, 48, 0.4)',
                }}
              >
                {link.label}
              </Anchor>
            ))}
          </Stack>
        </Box>

        {/* Docs navigation */}
        <Box mb={24}>
          <Box
            style={{
              fontSize: 12,
              textTransform: 'uppercase',
              color: 'rgba(255, 255, 255, 0.5)',
              marginBottom: 12,
              paddingLeft: 16,
              letterSpacing: 0.5,
            }}
          >
            {t.guide}
          </Box>
          <Stack gap={4}>
            {navigation.map((item) => (
              <MobileNavItem
                key={item.slug}
                item={item}
                locale={locale}
                onClose={onClose}
              />
            ))}
          </Stack>
        </Box>

        {/* Extra navigation (News, About Docs) */}
        <Box>
          <Box
            style={{
              fontSize: 12,
              textTransform: 'uppercase',
              color: 'rgba(255, 255, 255, 0.5)',
              marginBottom: 12,
              paddingLeft: 16,
              letterSpacing: 0.5,
            }}
          >
            {t.aboutDocs}
          </Box>
          <Stack gap={4}>
            {extraNavigation.map((item) => (
              <MobileNavItem
                key={item.slug}
                item={item}
                locale={locale}
                onClose={onClose}
              />
            ))}
          </Stack>
        </Box>
      </Box>

      {/* Language Switcher */}
      <Box
        style={{
          padding: '12px 20px',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        <Flex align="center" gap={8} mb={8}>
          <IconWorld size={18} color="rgba(255, 255, 255, 0.6)" />
          <Box
            style={{
              fontSize: 12,
              textTransform: 'uppercase',
              color: 'rgba(255, 255, 255, 0.5)',
              letterSpacing: 0.5,
            }}
          >
            {locale === 'ru' ? 'Язык' : 'Language'}
          </Box>
        </Flex>
        <Group gap={8}>
          {i18nConfig.locales.map((loc) => (
            <UnstyledButton
              key={loc}
              onClick={() => switchLocale(loc)}
              aria-label={`Switch to ${i18nConfig.localeLabels[loc]}`}
              style={{
                padding: '8px 16px',
                borderRadius: 8,
                background: locale === loc ? 'rgba(18, 184, 134, 0.2)' : 'rgba(48, 48, 48, 0.4)',
                color: locale === loc ? '#12b886' : 'rgba(255, 255, 255, 0.8)',
                fontWeight: locale === loc ? 500 : 400,
                fontSize: 14,
                border: locale === loc ? '1px solid rgba(18, 184, 134, 0.5)' : '1px solid transparent',
              }}
            >
              {i18nConfig.localeLabels[loc]}
            </UnstyledButton>
          ))}
        </Group>
      </Box>

      {/* GitHub Link */}
      <Anchor
        href="https://github.com/timoncool/artgen_docs"
        target="_blank"
        onClick={onClose}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          color: 'rgba(255, 255, 255, 0.8)',
          textDecoration: 'none',
          padding: '12px 20px',
          background: 'rgba(48, 48, 48, 0.4)',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        <IconBrandGithub size={20} />
        <span style={{ fontSize: 14 }}>{t.suggestChanges}</span>
      </Anchor>
    </Drawer>
  )
}
