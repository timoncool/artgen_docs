'use client'

import { Box } from '@mantine/core'
import { ReactNode } from 'react'

interface StepsProps {
  children: ReactNode
}

export function Steps({ children }: StepsProps) {
  return (
    <Box
      className="steps-container"
      style={{
        borderLeft: '2px solid rgba(18, 184, 134, 0.5)',
        paddingLeft: 24,
        marginLeft: 12,
        marginTop: 16,
        marginBottom: 16,
        counterReset: 'step',
      }}
    >
      {children}
    </Box>
  )
}
