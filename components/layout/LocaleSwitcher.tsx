'use client'

import { Menu, UnstyledButton, Flex } from '@mantine/core'
import { IconWorld, IconCheck } from '@tabler/icons-react'
import { usePathname, useRouter } from 'next/navigation'
import { Locale, i18nConfig } from '@/lib/i18n/config'

interface LocaleSwitcherProps {
  locale: Locale
}

export function LocaleSwitcher({ locale }: LocaleSwitcherProps) {
  const pathname = usePathname()
  const router = useRouter()

  const switchLocale = (newLocale: Locale) => {
    if (!pathname) return
    // Replace current locale in path
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`)

    // Set cookie for persistence
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`

    router.push(newPath)
  }

  return (
    <Menu
      shadow="md"
      width={160}
      position="bottom-start"
      styles={{
        dropdown: {
          background: 'rgba(48, 48, 48, 0.95)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: 8,
        },
        item: {
          color: 'rgba(255, 255, 255, 0.8)',
          '&:hover': {
            background: 'rgba(255, 255, 255, 0.1)',
            color: 'white',
          },
        },
      }}
    >
      <Menu.Target>
        <UnstyledButton
          className="tw-hidden screen-768:tw-flex"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            padding: 4,
            borderRadius: '50%',
            transition: 'background-color 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent'
          }}
        >
          <IconWorld size={25} stroke={1.5} color="white" />
        </UnstyledButton>
      </Menu.Target>

      <Menu.Dropdown>
        {i18nConfig.locales.map((loc) => (
          <Menu.Item
            key={loc}
            onClick={() => switchLocale(loc)}
            rightSection={locale === loc ? <IconCheck size={16} /> : null}
            style={{
              fontWeight: locale === loc ? 500 : 400,
              color: locale === loc ? '#12b886' : 'rgba(255, 255, 255, 0.8)',
            }}
          >
            {i18nConfig.localeLabels[loc]}
          </Menu.Item>
        ))}
      </Menu.Dropdown>
    </Menu>
  )
}
