'use client'

import { Box, SimpleGrid, Text, Flex } from '@mantine/core'
import { IconArrowRight } from '@tabler/icons-react'
import Link from 'next/link'
import { ReactNode } from 'react'

interface CardProps {
  title: string
  href: string
  icon?: ReactNode
  description?: string
  arrow?: boolean
}

interface CardsProps {
  children: ReactNode
  cols?: 1 | 2 | 3 | 4
}

const cardStyle = {
  display: 'block',
  textDecoration: 'none',
  background: 'rgba(48, 48, 48, 0.4)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  borderRadius: 12,
  padding: 16,
  backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(20px)',
  transition: 'all 0.2s ease',
  cursor: 'pointer',
}

function CardContent({ title, icon, description, arrow = true }: Omit<CardProps, 'href'>) {
  return (
    <Flex align="center" gap={12}>
      {icon && (
        <Box style={{ color: '#12b886', flexShrink: 0 }}>{icon}</Box>
      )}
      <Box style={{ flex: 1 }}>
        <Text
          fw={500}
          style={{
            color: 'white',
            fontSize: 15,
            lineHeight: 1.4,
          }}
        >
          {title}
        </Text>
        {description && (
          <Text
            size="sm"
            mt={4}
            style={{
              color: 'rgba(255, 255, 255, 0.6)',
              lineHeight: 1.4,
            }}
          >
            {description}
          </Text>
        )}
      </Box>
      {arrow && (
        <IconArrowRight
          size={18}
          style={{
            color: 'rgba(255, 255, 255, 0.4)',
            flexShrink: 0,
          }}
        />
      )}
    </Flex>
  )
}

function Card({ title, href, icon, description, arrow = true }: CardProps) {
  const isExternal = href.startsWith('http')

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'
    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)'
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.background = 'rgba(48, 48, 48, 0.4)'
    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)'
  }

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        style={cardStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <CardContent title={title} icon={icon} description={description} arrow={arrow} />
      </a>
    )
  }

  return (
    <Link
      href={href}
      style={cardStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <CardContent title={title} icon={icon} description={description} arrow={arrow} />
    </Link>
  )
}

function Cards({ children, cols = 2 }: CardsProps) {
  return (
    <SimpleGrid
      cols={{ base: 1, sm: Math.min(cols, 2), md: cols }}
      spacing={16}
      mt={16}
      mb={16}
    >
      {children}
    </SimpleGrid>
  )
}

// Attach Card as static property
Cards.Card = Card

export { Cards, Card }
