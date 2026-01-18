'use client'

import { useState } from 'react'
import { Box, Flex, Anchor } from '@mantine/core'
import { IconUser, IconMenu2 } from '@tabler/icons-react'
import { Locale, translations, getSiteBase } from '@/lib/i18n/config'
import { LocaleSwitcher } from './LocaleSwitcher'
import { MobileMenu } from './MobileMenu'
import { NavItem } from '@/lib/navigation/build-nav'

interface HeaderProps {
  locale: Locale
  navigation: NavItem[]
  extraNavigation: NavItem[]
}

export function Header({ locale, navigation, extraNavigation }: HeaderProps) {
  const [mobileMenuOpened, setMobileMenuOpened] = useState(false)
  const t = translations[locale]
  const siteBase = getSiteBase(locale)
  const docsPath = `/${locale}/docs`

  const navLinks = [
    { label: t.gallery, href: `${siteBase}/gallery/category/all/new` },
    { label: t.create, href: `${siteBase}/generator` },
    { label: t.editor, href: `${siteBase}/editor` },
    { label: t.about, href: `${siteBase}/about` },
    { label: t.guide, href: docsPath, active: true },
  ]

  return (
    <>
      <Box
        component="header"
        className="tw-sticky tw-top-0 tw-z-50"
        style={{
          background: 'rgba(48, 48, 48, 0.55)',
          border: '1px solid rgba(255, 255, 255, 0.4)',
          borderTop: 0,
          borderRadius: '0 0 30px 30px',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          padding: '12px 24px',
          margin: '0 auto',
          maxWidth: '100%',
        }}
      >
        <Flex align="center" justify="space-between" gap={24}>
          {/* Logo */}
          <Anchor
            href="https://artgeneration.me"
            target="_self"
            style={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
            }}
          >
            <img
              src="https://artgeneration.me/artgeneration_me/assets/ru/logo/logo.png"
              alt="ArtGeneration.me"
              style={{
                height: 34,
                minWidth: 120,
                maxWidth: 240,
                objectFit: 'contain',
              }}
            />
          </Anchor>

          {/* Language Switcher */}
          <LocaleSwitcher locale={locale} />

          {/* Navigation Center - Hidden on mobile */}
          <Flex
            gap={12}
            align="center"
            justify="center"
            wrap="wrap"
            className="tw-flex screen-768:tw-hidden"
            style={{ flex: 1 }}
          >
            {navLinks.map((link) => (
              <Anchor
                key={link.href}
                href={link.href}
                target="_self"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  color: 'white',
                  fontWeight: 400,
                  fontSize: 16,
                  lineHeight: '28px',
                  padding: '3px 16px',
                  borderRadius: 8,
                  background: link.active
                    ? 'rgba(255, 255, 255, 0.2)'
                    : 'rgba(48, 48, 48, 0.4)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  transition: 'background-color 0.2s ease',
                  textDecoration: 'none',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = link.active
                    ? 'rgba(255, 255, 255, 0.2)'
                    : 'rgba(48, 48, 48, 0.4)'
                }}
              >
                {link.label}
              </Anchor>
            ))}
          </Flex>

          {/* User Menu - Desktop */}
          <Flex
            align="center"
            gap={8}
            className="tw-flex screen-768:tw-hidden"
            style={{
              cursor: 'pointer',
              padding: '4px 8px',
              borderRadius: 8,
              transition: 'background-color 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent'
            }}
          >
            <span
              className="tw-inline screen-1000:tw-hidden"
              style={{
                color: 'white',
                fontSize: 14,
                lineHeight: '20px',
                fontWeight: 400,
                maxWidth: 150,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
              {t.user}
            </span>
            <IconUser
              size={24}
              stroke={2}
              color="white"
              style={{ flexShrink: 0 }}
            />
          </Flex>

          {/* Mobile Menu Button */}
          <Box
            className="tw-hidden screen-768:tw-block"
            role="button"
            aria-label="Open navigation menu"
            onClick={() => setMobileMenuOpened(true)}
            style={{
              cursor: 'pointer',
              padding: 8,
              borderRadius: 8,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <IconMenu2
              size={24}
              stroke={2}
              color="white"
            />
          </Box>
        </Flex>
      </Box>

      {/* Mobile Menu Drawer */}
      <MobileMenu
        locale={locale}
        opened={mobileMenuOpened}
        onClose={() => setMobileMenuOpened(false)}
        navigation={navigation}
        extraNavigation={extraNavigation}
      />
    </>
  )
}
