'use client';

import { FunctionComponent } from 'react';
import { HeadingItem } from '@/src/01-shared/types/app/docs-pages';
import { Anchor } from '@mantine/core';
import Link from 'next/link';

interface HeadingsSidebarItem {
  item: HeadingItem;
}

const HeadingsSidebarItem: FunctionComponent<HeadingsSidebarItem> = ({ item }) => {
  const { level, text, id } = item;

  return (
    <Anchor
      component={Link}
      href={`#${id}`}
      style={{
        padding: '6px 12px',
        paddingLeft: level * 12,
        borderRadius: 8,
        color: 'rgba(255, 255, 255, 0.8)',
        background: 'transparent',
        textDecoration: 'none',
        fontSize: 14,
        fontWeight: 400,
        transition: 'all 0.2s ease',
      }}
      onMouseEnter={(evt) => {
        evt.currentTarget.style.color = 'white';
        evt.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
      }}
      onMouseLeave={(evt) => {
        evt.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)';
        evt.currentTarget.style.background = 'transparent';
      }}
    >
      {text}
    </Anchor>
  );
};

export default HeadingsSidebarItem;
