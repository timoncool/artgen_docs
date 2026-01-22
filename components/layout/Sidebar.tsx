'use client'

import { Box, Stack, UnstyledButton, Collapse, Anchor, TextInput, Flex, Text } from '@mantine/core'
import { IconChevronRight, IconBrandGithub, IconSearch, IconX } from '@tabler/icons-react'
import { useState, useMemo, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Fuse from 'fuse.js'
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

interface SearchIndexItem {
  title: string
  href: string
  content: string
  section: string
}

interface SearchResult {
  title: string
  href: string
  content?: string
}

function SidebarItem({ item, locale, depth = 0 }: SidebarItemProps) {
  const pathname = usePathname() || ''
  const [opened, setOpened] = useState(
    pathname.startsWith(item.href) || !!item.children?.some(child => pathname.startsWith(child.href))
  )

  const isActive = pathname === item.href
  const hasChildren = item.children && item.children.length > 0

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

function SearchResultItem({ result, query }: { result: SearchResult; query: string }) {
  const pathname = usePathname() || ''
  const isActive = pathname === result.href

  // Highlight matching text in content preview
  const getContentPreview = () => {
    if (!result.content) return null

    const lowerContent = result.content.toLowerCase()
    const lowerQuery = query.toLowerCase()
    const index = lowerContent.indexOf(lowerQuery)

    if (index === -1) return result.content.slice(0, 100) + '...'

    const start = Math.max(0, index - 30)
    const end = Math.min(result.content.length, index + query.length + 50)
    let preview = result.content.slice(start, end)

    if (start > 0) preview = '...' + preview
    if (end < result.content.length) preview = preview + '...'

    return preview
  }

  return (
    <Anchor
      component={Link}
      href={result.href}
      style={{
        display: 'block',
        padding: '8px 12px',
        borderRadius: 8,
        color: isActive ? '#12b886' : 'rgba(255, 255, 255, 0.9)',
        background: isActive ? 'rgba(18, 184, 134, 0.1)' : 'transparent',
        textDecoration: 'none',
        transition: 'all 0.2s ease',
      }}
      onMouseEnter={(e) => {
        if (!isActive) {
          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'
        }
      }}
      onMouseLeave={(e) => {
        if (!isActive) {
          e.currentTarget.style.background = 'transparent'
        }
      }}
    >
      <Text size="sm" fw={500} style={{ color: 'inherit' }}>
        {result.title}
      </Text>
      {result.content && (
        <Text size="xs" style={{ color: 'rgba(255, 255, 255, 0.5)', marginTop: 4, lineHeight: 1.4 }}>
          {getContentPreview()}
        </Text>
      )}
    </Anchor>
  )
}

export function Sidebar({ locale, navigation, extraNavigation }: SidebarProps) {
  const t = translations[locale]
  const [searchQuery, setSearchQuery] = useState('')
  const [searchIndex, setSearchIndex] = useState<SearchIndexItem[]>([])
  const [fuse, setFuse] = useState<Fuse<SearchIndexItem> | null>(null)

  // Load search index on mount
  useEffect(() => {
    fetch(`/search/${locale}.json`)
      .then(res => res.json())
      .then((data: SearchIndexItem[]) => {
        setSearchIndex(data)
        setFuse(new Fuse(data, {
          keys: [
            { name: 'title', weight: 2 },
            { name: 'content', weight: 1 },
          ],
          threshold: 0.3,
          includeMatches: true,
          minMatchCharLength: 2,
        }))
      })
      .catch(err => console.error('Failed to load search index:', err))
  }, [locale])

  // Search results
  const searchResults = useMemo((): SearchResult[] => {
    if (!searchQuery.trim() || !fuse) return []

    const results = fuse.search(searchQuery, { limit: 10 })
    return results.map(r => ({
      title: r.item.title,
      href: r.item.href,
      content: r.item.content,
    }))
  }, [searchQuery, fuse])

  const isSearching = searchQuery.trim().length > 0

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
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          leftSection={<IconSearch size={16} />}
          rightSection={
            searchQuery ? (
              <UnstyledButton
                onClick={() => setSearchQuery('')}
                style={{ display: 'flex', alignItems: 'center' }}
              >
                <IconX size={14} style={{ color: 'rgba(255, 255, 255, 0.5)' }} />
              </UnstyledButton>
            ) : null
          }
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

      {/* Search Results */}
      {isSearching ? (
        <Box>
          {searchResults.length > 0 ? (
            <>
              <Text
                size="xs"
                style={{
                  color: 'rgba(255, 255, 255, 0.5)',
                  marginBottom: 8,
                  paddingLeft: 12,
                }}
              >
                {locale === 'ru' ? `Найдено: ${searchResults.length}` : `Found: ${searchResults.length}`}
              </Text>
              <Stack gap={4}>
                {searchResults.map((result, index) => (
                  <SearchResultItem key={`${result.href}-${index}`} result={result} query={searchQuery} />
                ))}
              </Stack>
            </>
          ) : (
            <Text
              size="sm"
              style={{
                color: 'rgba(255, 255, 255, 0.5)',
                padding: '16px 12px',
                textAlign: 'center',
              }}
            >
              {locale === 'ru' ? 'Ничего не найдено' : 'Nothing found'}
            </Text>
          )}
        </Box>
      ) : (
        <>
          {/* Navigation */}
          <Stack gap={4}>
            {navigation.map((item) => (
              <SidebarItem key={item.slug} item={item} locale={locale} />
            ))}
          </Stack>

          {/* Extra Navigation (News, About Docs) */}
          <Box mt={24}>
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
          <Box mt={24}>
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
        </>
      )}
    </Box>
  )
}
