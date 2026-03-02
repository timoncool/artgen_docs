import { Lng } from '@/src/01-shared/types/app/lng';
import { MainNavigationItem } from '@/src/01-shared/types/app/docs-pages';
import type { FunctionComponent } from 'react';
import { usePathname } from 'next/navigation';
import { getLngPathSegmentServer } from '@/src/01-shared/i18next';
import { Anchor } from '@mantine/core';
import Link from 'next/link';

interface SidebarItemProps {
  lng: Lng;
  item: MainNavigationItem;
}

const SidebarItem: FunctionComponent<SidebarItemProps> = ({ item, lng }) => {
  const pathname = usePathname();

  const title = item[lng];
  const href = `${getLngPathSegmentServer(lng)}${item.path}`;

  const isActive = pathname === href;

  return (
    <Anchor
      component={Link}
      href={href}
      style={{
        padding: '6px 12px',
        paddingLeft: 12,
        borderRadius: 8,
        color: isActive ? '#12b886' : 'rgba(255, 255, 255, 0.8)',
        background: isActive ? 'rgba(18, 184, 134, 0.1)' : 'transparent',
        textDecoration: 'none',
        fontSize: 14,
        fontWeight: 400,
        transition: 'all 0.2s ease',
      }}
      onMouseEnter={(e) => {
        if (!isActive) {
          e.currentTarget.style.color = 'white';
          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
        }
      }}
      onMouseLeave={(e) => {
        if (!isActive) {
          e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)';
          e.currentTarget.style.background = 'transparent';
        }
      }}
    >
      {title}
    </Anchor>
  );
};

export default SidebarItem;
