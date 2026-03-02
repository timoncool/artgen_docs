import type { MDXComponents } from 'mdx/types';
import Link from 'next/link';
import type { ComponentPropsWithoutRef } from 'react';
import { JSX } from 'react';

import cls from '@/src/01-shared/ui/mdx/mdx.module.scss';

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type HeadingBaseProps = ComponentPropsWithoutRef<'h2'>; // одинаково для h1..h6

type HeadingWithAnchorProps = HeadingBaseProps & {
  as: HeadingTag;
};

function HeadingWithAnchor({ as: Tag, id, children, ...props }: HeadingWithAnchorProps): JSX.Element {
  return (
    <Tag id={id} {...props}>
      {id ? (
        <Link href={`#${id}`} aria-label='Anchor link' style={{ textDecoration: 'none' }}>
          {children}
        </Link>
      ) : (
        children
      )}
    </Tag>
  );
}

function MdxLink({ href = '', ...props }: ComponentPropsWithoutRef<'a'>) {
  const isExternal = href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:');
  const isAnchor = href.startsWith('#');

  if (isExternal || isAnchor) {
    return <a href={href} {...props} />;
  }

  return <Link href={href} {...props} />;
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    wrapper: ({ children }) => <div className={cls.wrapper}>{children}</div>,

    a: (p) => <MdxLink {...p} />,

    h1: (p) => <HeadingWithAnchor as='h1' {...p} />,
    h2: (p) => <HeadingWithAnchor as='h2' {...p} />,
    h3: (p) => <HeadingWithAnchor as='h3' {...p} />,
    h4: (p) => <HeadingWithAnchor as='h4' {...p} />,
    h5: (p) => <HeadingWithAnchor as='h5' {...p} />,
    h6: (p) => <HeadingWithAnchor as='h6' {...p} />,

    ...components,
  };
}
