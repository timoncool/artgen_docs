'use client';

import { Box, Tabs as MantineTabs } from '@mantine/core';
import type { ReactNode } from 'react';
import { Children, isValidElement } from 'react';

interface TabsProps {
  items: string[];
  defaultValue?: string;
  children: ReactNode;
}

interface TabProps {
  children: ReactNode;
}

function Tab({ children }: TabProps) {
  return <Box>{children}</Box>;
}

function Tabs({ items, defaultValue, children }: TabsProps) {
  const childArray = Children.toArray(children);

  return (
    <MantineTabs
      defaultValue={defaultValue || items[0]}
      variant='pills'
      mt={16}
      mb={16}
      styles={{
        root: {
          background: 'rgba(48, 48, 48, 0.4)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: 12,
          padding: 16,
          backdropFilter: 'blur(20px)',
        },
        list: {
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          paddingBottom: 12,
          marginBottom: 16,
          gap: 8,
        },
        tab: {
          color: 'rgba(255, 255, 255, 0.8)',
          background: 'rgba(48, 48, 48, 0.4)',
          border: 'none',
          borderRadius: 8,
          padding: '6px 16px',
          fontWeight: 400,
          fontSize: 14,
          transition: 'all 0.2s ease',
          '&:hover': {
            background: 'rgba(255, 255, 255, 0.2)',
            color: 'white',
          },
          '&[dataActive]': {
            background: 'rgba(255, 255, 255, 0.2)',
            color: 'white',
            fontWeight: 500,
          },
        },
        panel: {
          color: 'rgba(255, 255, 255, 0.9)',
          fontSize: 14,
          lineHeight: 1.6,
        },
      }}
    >
      <MantineTabs.List>
        {items.map((item) => (
          <MantineTabs.Tab key={item} value={item}>
            {item}
          </MantineTabs.Tab>
        ))}
      </MantineTabs.List>

      {items.map((item, index) => (
        <MantineTabs.Panel key={item} value={item}>
          {isValidElement(childArray[index]) ? childArray[index] : childArray[index]}
        </MantineTabs.Panel>
      ))}
    </MantineTabs>
  );
}

// Attach Tab as static property
Tabs.Tab = Tab;

export { Tabs, Tab };
