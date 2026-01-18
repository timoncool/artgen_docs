'use client'

import { Box, Stack, Anchor, Text, UnstyledButton } from '@mantine/core'
import { IconArrowUp } from '@tabler/icons-react'
import { useEffect, useState } from 'react'
import { Locale, translations } from '@/lib/i18n/config'

interface TOCItem {
  id: string
  text: string
  level: number
}

interface TableOfContentsProps {
  locale: Locale
}

export function TableOfContents({ locale }: TableOfContentsProps) {
  const t = translations[locale]
  const [activeId, setActiveId] = useState<string>('')
  const [headings, setHeadings] = useState<TOCItem[]>([])

  // Extract headings from DOM on mount
  useEffect(() => {
    const article = document.querySelector('article')
    if (!article) return

    const elements = article.querySelectorAll('h2, h3, h4')
    const items: TOCItem[] = []

    elements.forEach((el) => {
      if (el.id && el.textContent) {
        items.push({
          id: el.id,
          text: el.textContent.trim(),
          level: parseInt(el.tagName[1]),
        })
      }
    })

    setHeadings(items)
  }, [])

  // Scroll spy for active heading
  useEffect(() => {
    if (headings.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-100px 0px -80% 0px',
        threshold: 0,
      }
    )

    headings.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [headings])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (headings.length === 0) return null

  return (
    <Box
      component="nav"
      style={{
        width: 200,
        minWidth: 200,
        height: 'calc(100vh - 80px)',
        position: 'sticky',
        top: 80,
        overflowY: 'auto',
        borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
        padding: '16px',
      }}
    >
      <Text
        size="sm"
        fw={600}
        c="white"
        mb={12}
        style={{ textTransform: 'uppercase', letterSpacing: '0.05em' }}
      >
        {t.onThisPage}
      </Text>

      <Stack gap={4}>
        {headings.map((heading) => (
          <Anchor
            key={heading.id}
            href={`#${heading.id}`}
            onClick={(e) => {
              e.preventDefault()
              document.getElementById(heading.id)?.scrollIntoView({
                behavior: 'smooth',
              })
            }}
            style={{
              display: 'block',
              paddingLeft: (heading.level - 2) * 12,
              paddingTop: 4,
              paddingBottom: 4,
              color:
                activeId === heading.id ? '#12b886' : 'rgba(255, 255, 255, 0.6)',
              textDecoration: 'none',
              fontSize: 13,
              lineHeight: 1.4,
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) => {
              if (activeId !== heading.id) {
                e.currentTarget.style.color = 'white'
              }
            }}
            onMouseLeave={(e) => {
              if (activeId !== heading.id) {
                e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)'
              }
            }}
          >
            {heading.text}
          </Anchor>
        ))}
      </Stack>

      {/* Back to Top */}
      <UnstyledButton
        onClick={scrollToTop}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          color: 'rgba(255, 255, 255, 0.6)',
          fontSize: 13,
          marginTop: 16,
          paddingTop: 12,
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          transition: 'color 0.2s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = '#12b886'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)'
        }}
      >
        <IconArrowUp size={14} />
        {t.backToTop}
      </UnstyledButton>
    </Box>
  )
}
