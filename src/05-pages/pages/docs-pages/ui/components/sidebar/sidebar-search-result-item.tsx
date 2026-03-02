import { Anchor, Text } from '@mantine/core';
import Link from 'next/link';
import type { FunctionComponent } from 'react';

const NOT_FOUND_INDEX = -1;
const PREVIEW_HEAD_TAIL_ELLIPSIS = '...';
const PREVIEW_SLICE_LENGTH = 100;
const PREVIEW_CONTEXT_BEFORE = 30;
const PREVIEW_CONTEXT_AFTER = 50;

const getSearchResultText = ({ result, query }: { result: SearchResult; query: string }): string | null => {
  if (!result.content) {
    return null;
  }

  const lowerContent = result.content.toLowerCase();
  const lowerQuery = query.toLowerCase();
  const index = lowerContent.indexOf(lowerQuery);

  if (index === NOT_FOUND_INDEX) {
    return result.content.slice(0, PREVIEW_SLICE_LENGTH) + PREVIEW_HEAD_TAIL_ELLIPSIS;
  }

  const start = Math.max(0, index - PREVIEW_CONTEXT_BEFORE);
  const end = Math.min(result.content.length, index + query.length + PREVIEW_CONTEXT_AFTER);
  let preview = result.content.slice(start, end);

  if (start > 0) {
    preview = PREVIEW_HEAD_TAIL_ELLIPSIS + preview;
  }
  if (end < result.content.length) {
    preview = preview + PREVIEW_HEAD_TAIL_ELLIPSIS;
  }

  return preview;
};

interface SearchResult {
  title: string;
  href: string;
  content?: string;
}

interface SidebarSearchResultItemProps {
  result: SearchResult;
  query: string;
}

const SidebarSearchResultItem: FunctionComponent<SidebarSearchResultItemProps> = ({ result, query }) => {
  const searchResultText = getSearchResultText({ result, query });

  return (
    <Anchor
      component={Link}
      href={result.href}
      style={{
        display: 'block',
        padding: '8px 12px',
        borderRadius: 8,
        color: 'rgba(255, 255, 255, 0.9)',
        background: 'transparent',
        textDecoration: 'none',
        transition: 'all 0.2s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'transparent';
      }}
    >
      <Text size='sm' fw={500} style={{ color: 'inherit' }}>
        {result.title}
      </Text>
      {result.content && (
        <Text size='xs' style={{ color: 'rgba(255, 255, 255, 0.5)', marginTop: 4, lineHeight: 1.4 }}>
          {searchResultText}
        </Text>
      )}
    </Anchor>
  );
};

export default SidebarSearchResultItem;
