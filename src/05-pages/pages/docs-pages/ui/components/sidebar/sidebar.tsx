'use client';

import { Box, Button, Stack, Text, TextInput, UnstyledButton } from '@mantine/core';
import { IconBookmarks, IconBookmarksOff, IconChevronLeft, IconChevronRight, IconSearch, IconX } from '@tabler/icons-react';
import Fuse from 'fuse.js';
import type { ChangeEvent } from 'react';
import { type FunctionComponent, useEffect, useMemo, useState } from 'react';

import { useLocalStorageState } from '@/src/01-shared/hooks/useLocalStorageState';
import { getLngPathSegmentServer } from '@/src/01-shared/i18next';
import { type SearchIndexItem, type SearchResultItem } from '@/src/01-shared/types/app/docs-pages';
import { Lng } from '@/src/01-shared/types/app/lng';
import { mainNavigation } from '@/src/03-features/app-features/docs-pages';

import SidebarItem from './sidebar-item';
import SidebarSearchResultItem from './sidebar-search-result-item';

interface SidebarProps {
  lng: Lng;
}

const SIDEBAR_WIDTH = 260;
const TRANSLATIONS = {
  [Lng.RU]: {
    search: {
      placeholder: 'Поиск...',
      resultCount: 'Найдено: {{count}}',
      notFound: 'Ничего не найдено',
    },
  },
  [Lng.EN]: {
    search: {
      placeholder: 'Search...',
      resultCount: 'Found: {{count}}',
      notFound: 'Nothing found',
    },
  },
};
const Sidebar: FunctionComponent<SidebarProps> = ({ lng }) => {
  const [opened, setOpened, hydrated] = useLocalStorageState('docs-sidebar-opened', true);
  const [searchQuery, setSearchQuery] = useLocalStorageState('docs-sidebar-search', '');
  const [fuse, setFuse] = useState<Fuse<SearchResultItem> | null>(null);

  useEffect(() => {
    fetch(`/assets/docs-pages/search/${lng}.json`)
      .then((res) => res.json())
      .then((data: SearchIndexItem[]) => {
        setFuse(
          new Fuse(data, {
            keys: [
              { name: 'title', weight: 2 },
              { name: 'content', weight: 1 },
            ],
            threshold: 0.3,
            includeMatches: true,
            minMatchCharLength: 2,
          }),
        );
      })
      // eslint-disable-next-line no-console
      .catch((error) => console.error('Failed to load search index:', error));
  }, []);

  const searchResults = useMemo((): SearchResultItem[] => {
    if (!searchQuery.trim() || !fuse) {
      return [];
    }

    const results = fuse.search(searchQuery, { limit: 10 });

    return results.map((res) => ({
      title: res.item.title,
      href: `${getLngPathSegmentServer(lng)}${res.item.href}`,
      content: res.item.content,
    }));
  }, [searchQuery, fuse]);

  const toggleOpened = (): void => {
    setOpened(!opened);
  };
  const submitSearch = (evt: ChangeEvent<HTMLInputElement>): void => {
    setSearchQuery(evt.target.value);
  };
  const resetSearch = (): void => {
    setSearchQuery('');
  };

  const isSearching = searchQuery.trim().length > 0;

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
          left: 0,
          overflowY: 'auto',
          background: 'rgba(26, 26, 26, 0.95)',
          borderRight: '1px solid rgba(255, 255, 255, 0.1)',
          padding: opened ? '16px 12px' : 0,
          zIndex: 1,
        }}
      >
        <Box mb={16}>
          <TextInput
            placeholder={TRANSLATIONS[lng].search.placeholder}
            value={searchQuery}
            onChange={submitSearch}
            leftSection={<IconSearch size={16} />}
            rightSection={
              searchQuery ? (
                <UnstyledButton
                  onClick={resetSearch}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <IconX size={14} style={{ color: 'rgba(255, 255, 255, 0.5)' }} />
                </UnstyledButton>
              ) : null
            }
            styles={{
              input: {
                background: 'rgba(48, 48, 48, 0.4)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: 'white',
                borderRadius: 8,
                '&::placeholder': {
                  color: 'rgba(255, 255, 255, 0.5)',
                },
              },
            }}
          />
        </Box>

        {isSearching && (
          <Box>
            {searchResults.length > 0 && (
              <>
                <Text
                  size='xs'
                  style={{
                    color: 'rgba(255, 255, 255, 0.5)',
                    marginBottom: 8,
                    paddingLeft: 12,
                  }}
                >
                  {TRANSLATIONS[lng].search.resultCount.replace('{{count}}', String(searchResults.length))}
                </Text>
                <Stack gap={4}>
                  {searchResults.map((result, index) => (
                    <SidebarSearchResultItem key={`${result.href}-${index}`} result={result} query={searchQuery} />
                  ))}
                </Stack>
              </>
            )}

            {searchResults.length === 0 && (
              <Text
                size='sm'
                style={{
                  color: 'rgba(255, 255, 255, 0.5)',
                  padding: '16px 12px',
                  textAlign: 'center',
                }}
              >
                {TRANSLATIONS[lng].search.notFound}
              </Text>
            )}
          </Box>
        )}

        {!isSearching && (
          <Stack gap={4}>
            {mainNavigation.map((item) => (
              <SidebarItem key={item.path} lng={lng} item={item} />
            ))}
          </Stack>
        )}
      </Box>

      <Button
        pos={'absolute'}
        top={75}
        left={opened ? SIDEBAR_WIDTH : 0}
        onClick={toggleOpened}
        w={35}
        h={75}
        variant={'filled'}
        styles={{
          root: {
            padding: 0,
            border: '1px solid var(--mantine-color-dark-4)',
            borderRadius: '0 8px 8px 0',
            backgroundColor: 'var(--mantine-color-dark-5)',
            zIndex: 1,
          },
        }}
      >
        <Stack gap={6}>
          {opened ? (
            <>
              <IconBookmarksOff />
              <IconChevronLeft />
            </>
          ) : (
            <>
              <IconBookmarks />
              <IconChevronRight />
            </>
          )}
        </Stack>
      </Button>
    </Box>
  );
};

export default Sidebar;
