import type { MDXComponents } from 'mdx/types';
import Image from 'next/image';
import Link from 'next/link';

import { Callout, Card, Cards, Steps, Tab, Tabs } from '@/src/01-shared/ui/mdx';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Custom components
    Callout,
    Cards,
    Card,
    Steps,
    Tabs,
    Tab,

    // Override default elements
    a: ({ href, children, ...props }) => {
      if (href?.startsWith('/') || href?.startsWith('#')) {
        return (
          <Link href={href} {...props}>
            {children}
          </Link>
        );
      }
      return (
        <a href={href} target='_blank' rel='noopener noreferrer' {...props}>
          {children}
        </a>
      );
    },

    img: ({ src, alt }) => {
      if (!src) {
        return null;
      }

      const imageElement = src.startsWith('/') ? (
        <Image src={src} alt={alt || ''} width={800} height={450} style={{ width: '100%', height: 'auto' }} />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={alt || ''} style={{ maxWidth: '100%', height: 'auto' }} />
      );

      // If alt text exists and doesn't start with underscore, show as caption
      if (alt && !alt.startsWith('_')) {
        return (
          <figure className='image-container'>
            {imageElement}
            <figcaption className='image-caption'>{alt}</figcaption>
          </figure>
        );
      }

      return imageElement;
    },

    // Heading anchors
    h1: ({ children, id, ...props }) => (
      <h1 id={id} {...props}>
        {children}
        {id && <a href={`#${id}`} className='heading-anchor' aria-hidden='true' />}
      </h1>
    ),

    h2: ({ children, id, ...props }) => (
      <h2 id={id} {...props}>
        {children}
        {id && <a href={`#${id}`} className='heading-anchor' aria-hidden='true' />}
      </h2>
    ),

    h3: ({ children, id, ...props }) => (
      <h3 id={id} {...props}>
        {children}
        {id && <a href={`#${id}`} className='heading-anchor' aria-hidden='true' />}
      </h3>
    ),

    h4: ({ children, id, ...props }) => (
      <h4 id={id} {...props}>
        {children}
        {id && <a href={`#${id}`} className='heading-anchor' aria-hidden='true' />}
      </h4>
    ),

    // Table wrapper for responsiveness
    table: ({ children, ...props }) => (
      <div style={{ overflowX: 'auto' }}>
        <table {...props}>{children}</table>
      </div>
    ),

    ...components,
  };
}
