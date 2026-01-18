'use client'

import { Box, Stack, UnstyledButton, Collapse, Anchor, TextInput, Flex } from '@mantine/core'
import { IconChevronRight, IconBrandGithub, IconSearch } from '@tabler/icons-react'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Locale, translations } from '@/lib/i18n/config'
import { NavItem } from '@/lib/navigation/build-nav'

interface SidebarProps {
  locale: Locale
  navigation: NavItem[]
  extraNavigation: NavItem[]
}

interface SidebarItemProps {
  item: NavItem
  locale: Locale
  depth?: number
}

function SidebarItem({ item, locale, depth = 0 }: SidebarItemProps) {
  const pathname = usePathname() || ''
  const [opened, setOpened] = useState(
    pathname.startsWith(item.href) || !!item.children?.some(child => pathname.startsWith(child.href))
  )

  const isActive = pathname === item.href
  const hasChildren = item.children && item.children.length > 0

  // Use the title directly from the item
  const title = item.title

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
              width: 20,
              height: 20,
              borderRadius: 4,
              transition: 'all 0.2s ease',
            }}
          >
            <IconChevronRight
              size={14}
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
          style={{
            display: 'block',
            flex: 1,
            padding: '6px 12px',
            paddingLeft: hasChildren ? 0 : depth * 12 + 12,
            borderRadius: 8,
            color: isActive ? '#12b886' : 'rgba(255, 255, 255, 0.8)',
            background: isActive ? 'rgba(18, 184, 134, 0.1)' : 'transparent',
            textDecoration: 'none',
            fontSize: 14,
            fontWeight: isActive ? 500 : 400,
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            if (!isActive) {
              e.currentTarget.style.color = 'white'
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'
            }
          }}
          onMouseLeave={(e) => {
            if (!isActive) {
              e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)'
              e.currentTarget.style.background = 'transparent'
            }
          }}
        >
          {title}
        </Anchor>
      </Flex>

      {hasChildren && (
        <Collapse in={opened}>
          <Stack gap={2} pl={depth > 0 ? 12 : 8} pt={4}>
            {item.children!.map((child) => (
              <SidebarItem
                key={child.slug}
                item={child}
                locale={locale}
                depth={depth + 1}
              />
            ))}
          </Stack>
        </Collapse>
      )}
    </Box>
  )
}

export function Sidebar({ locale, navigation, extraNavigation }: SidebarProps) {
  const t = translations[locale]

  return (
    <Box
      component="aside"
      style={{
        width: 260,
        minWidth: 260,
        height: 'calc(100vh - 80px)',
        position: 'sticky',
        top: 80,
        overflowY: 'auto',
        background: 'rgba(26, 26, 26, 0.95)',
        borderRight: '1px solid rgba(255, 255, 255, 0.1)',
        padding: '16px 12px',
      }}
      className="tw-block screen-768:tw-hidden"
    >
      {/* Search */}
      <Box mb={16}>
        <TextInput
          placeholder={t.search}
          leftSection={<IconSearch size={16} />}
          styles={{
            input: {
              background: 'rgba(48, 48, 48, 0.4)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: 'white',
              borderRadius: 8,
              '&::placeholder': {
                color: 'rgba(255, 255, 255, 0.5)',
              },
            },
          }}
        />
      </Box>

      {/* Navigation */}
      <Stack gap={4}>
        {navigation.map((item) => (
          <SidebarItem key={item.slug} item={item} locale={locale} />
        ))}
      </Stack>

      {/* Extra Navigation (News, About Docs) */}
      <Box mt={24} mb={60}>
        <Box
          style={{
            fontSize: 11,
            textTransform: 'uppercase',
            color: 'rgba(255, 255, 255, 0.4)',
            marginBottom: 8,
            paddingLeft: 12,
            letterSpacing: 0.5,
          }}
        >
          {t.aboutDocs}
        </Box>
        <Stack gap={4}>
          {extraNavigation.map((item) => (
            <SidebarItem key={item.slug} item={item} locale={locale} />
          ))}
        </Stack>
      </Box>

      {/* GitHub Link */}
      <Anchor
        href="https://github.com/timoncool/artgen_docs"
        target="_blank"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          color: 'rgba(255, 255, 255, 0.8)',
          textDecoration: 'none',
          padding: '8px 12px',
          borderRadius: 8,
          background: 'rgba(48, 48, 48, 0.4)',
          transition: 'all 0.2s ease',
          marginTop: 'auto',
          position: 'absolute',
          bottom: 16,
          left: 12,
          right: 12,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'
          e.currentTarget.style.color = 'white'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgba(48, 48, 48, 0.4)'
          e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)'
        }}
      >
        <IconBrandGithub size={20} />
        <span style={{ fontSize: 14 }}>{t.suggestChanges}</span>
      </Anchor>
    </Box>
  )
}
