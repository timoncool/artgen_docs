'use client'

import { Box, Title, Text, Button, Stack } from '@mantine/core'
import { IconArrowLeft, IconSearch } from '@tabler/icons-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { translations } from '@/lib/i18n/config'

export default function NotFound() {
  const params = useParams()
  const locale = (params?.locale as 'ru' | 'en') || 'ru'
  const t = translations[locale]

  return (
    <Box
      style={{
        minHeight: 'calc(100vh - 80px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
      }}
    >
      <Stack align="center" gap={24}>
        <Box
          style={{
            fontSize: 120,
            fontWeight: 700,
            background: 'linear-gradient(100.87deg, #11b785 -0.74%, #49a1f2 55.84%, #3a4eff 100.3%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            lineHeight: 1,
          }}
        >
          404
        </Box>

        <Title order={2} style={{ color: 'white', textAlign: 'center' }}>
          {locale === 'ru' ? 'Страница не найдена' : 'Page Not Found'}
        </Title>

        <Text
          size="lg"
          style={{ color: 'rgba(255, 255, 255, 0.7)', textAlign: 'center', maxWidth: 400 }}
        >
          {locale === 'ru'
            ? 'Запрашиваемая страница не существует или была перемещена.'
            : 'The page you requested does not exist or has been moved.'}
        </Text>

        <Box style={{ display: 'flex', gap: 16, marginTop: 16 }}>
          <Button
            component={Link}
            href={`/${locale}/docs`}
            leftSection={<IconArrowLeft size={18} />}
            variant="filled"
            style={{
              background: 'linear-gradient(100.87deg, #11b785 -0.74%, #49a1f2 55.84%, #3a4eff 100.3%)',
            }}
          >
            {locale === 'ru' ? 'К документации' : 'Back to Docs'}
          </Button>

          <Button
            component={Link}
            href={`/${locale}/docs`}
            leftSection={<IconSearch size={18} />}
            variant="outline"
            style={{
              borderColor: 'rgba(255, 255, 255, 0.3)',
              color: 'white',
            }}
          >
            {t.search}
          </Button>
        </Box>
      </Stack>
    </Box>
  )
}
