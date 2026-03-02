'use client';

import { Box, Button, Stack } from '@mantine/core';
import { IconChevronLeft, IconChevronRight, IconHeading, IconHeadingOff } from '@tabler/icons-react';
import { FunctionComponent } from 'react';

import { useLocalStorageState } from '@/src/01-shared/hooks/useLocalStorageState';
import { HeadingItem } from '@/src/01-shared/types/app/docs-pages';
import HeadingsSidebarItem from './headings-sidebar-item';

interface HeadingsSidebarProps {
  items: HeadingItem[];
}

const SIDEBAR_WIDTH = 260;

const HeadingsSidebar: FunctionComponent<HeadingsSidebarProps> = ({ items }) => {
  const [opened, setOpened, hydrated] = useLocalStorageState('docs-headings-sidebar-opened', false);

  const toggleOpened = (): void => {
    setOpened(!opened);
  };

  if (!hydrated) {
    return null;
  }

  return (
    <Box pos={'relative'}>
      <Box
        style={{
          width: opened ? SIDEBAR_WIDTH : 0,
          minWidth: opened ? SIDEBAR_WIDTH : 0,
          height: '100vh',
          position: 'absolute',
          right: 0,
          overflowY: 'auto',
          background: 'rgba(26, 26, 26, 0.95)',
          borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
          padding: opened ? '16px 12px' : 0,
          zIndex: 1,
        }}
      >
        <Stack gap={4}>
          {items.map((item) => (
            <HeadingsSidebarItem key={item.id} item={item} />
          ))}
        </Stack>
      </Box>
      <Button
        pos={'absolute'}
        top={75}
        right={opened ? SIDEBAR_WIDTH : 0}
        onClick={toggleOpened}
        w={35}
        h={75}
        variant={'filled'}
        styles={{
          root: {
            padding: 0,
            border: '1px solid var(--mantine-color-dark-4)',
            borderRadius: '8px 0px 0px 8px',
            backgroundColor: 'var(--mantine-color-dark-5)',
            zIndex: 1,
          },
        }}
      >
        <Stack gap={6}>
          {opened ? (
            <>
              <IconHeadingOff />
              <IconChevronRight />
            </>
          ) : (
            <>
              <IconHeading />
              <IconChevronLeft />
            </>
          )}
        </Stack>
      </Button>
    </Box>
  );
};

export default HeadingsSidebar;
