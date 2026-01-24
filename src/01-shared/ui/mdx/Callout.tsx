'use client'

import { Box, Flex, Text } from '@mantine/core'
import { IconInfoCircle, IconAlertTriangle, IconX, IconBulb } from '@tabler/icons-react'
import { ReactNode } from 'react'

type CalloutType = 'default' | 'info' | 'warning' | 'error' | 'tip'

interface CalloutProps {
  type?: CalloutType
  title?: string
  emoji?: string | ReactNode
  children: ReactNode
}

const typeConfig: Record<
  CalloutType,
  { icon: ReactNode; borderColor: string; bgColor: string }
> = {
  default: {
    icon: <IconInfoCircle size={20} />,
    borderColor: 'rgba(255, 255, 255, 0.4)',
    bgColor: 'rgba(48, 48, 48, 0.4)',
  },
  info: {
    icon: <IconInfoCircle size={20} color="#12b886" />,
    borderColor: '#12b886',
    bgColor: 'rgba(18, 184, 134, 0.1)',
  },
  warning: {
    icon: <IconAlertTriangle size={20} color="#fab005" />,
    borderColor: '#fab005',
    bgColor: 'rgba(250, 176, 5, 0.1)',
  },
  error: {
    icon: <IconX size={20} color="#fa5252" />,
    borderColor: '#fa5252',
    bgColor: 'rgba(250, 82, 82, 0.1)',
  },
  tip: {
    icon: <IconBulb size={20} color="#49a1f2" />,
    borderColor: '#49a1f2',
    bgColor: 'rgba(73, 161, 242, 0.1)',
  },
}

export function Callout({ type = 'default', title, emoji, children }: CalloutProps) {
  const config = typeConfig[type]

  return (
    <Box
      style={{
        background: config.bgColor,
        border: '1px solid rgba(255, 255, 255, 0.2)',
        borderLeft: `3px solid ${config.borderColor}`,
        borderRadius: 8,
        padding: '12px 16px',
        marginTop: 16,
        marginBottom: 16,
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
      }}
    >
      <Flex gap={12} align="flex-start">
        <Box style={{ flexShrink: 0, marginTop: 2 }}>
          {emoji || config.icon}
        </Box>
        <Box style={{ flex: 1 }}>
          {title && (
            <Text fw={600} mb={4} style={{ color: 'white' }}>
              {title}
            </Text>
          )}
          <Box
            style={{
              color: 'rgba(255, 255, 255, 0.9)',
              fontSize: 14,
              lineHeight: 1.6,
            }}
          >
            {children}
          </Box>
        </Box>
      </Flex>
    </Box>
  )
}
