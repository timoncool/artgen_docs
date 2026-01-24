import type { MDXComponents } from 'mdx/types'
import { Callout, Cards, Card, Steps, Tabs, Tab } from '@/components/mdx'
import Link from 'next/link'
import Image from 'next/image'

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
        )
      }
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
          {children}
        </a>
      )
    },

    img: ({ src, alt }) => {
      if (!src) return null

      // Handle relative images with Next.js Image
      if (src.startsWith('/')) {
        return (
          <Image
            src={src}
            alt={alt || ''}
            width={800}
            height={450}
            style={{ width: '100%', height: 'auto' }}
          />
        )
      }

      // External images - use regular img tag
      // eslint-disable-next-line @next/next/no-img-element
      return <img src={src} alt={alt || ''} style={{ maxWidth: '100%', height: 'auto' }} />
    },

    // Heading anchors
    h1: ({ children, id, ...props }) => (
      <h1 id={id} {...props}>
        {children}
        {id && <a href={`#${id}`} className="heading-anchor" aria-hidden="true" />}
      </h1>
    ),

    h2: ({ children, id, ...props }) => (
      <h2 id={id} {...props}>
        {children}
        {id && <a href={`#${id}`} className="heading-anchor" aria-hidden="true" />}
      </h2>
    ),

    h3: ({ children, id, ...props }) => (
      <h3 id={id} {...props}>
        {children}
        {id && <a href={`#${id}`} className="heading-anchor" aria-hidden="true" />}
      </h3>
    ),

    h4: ({ children, id, ...props }) => (
      <h4 id={id} {...props}>
        {children}
        {id && <a href={`#${id}`} className="heading-anchor" aria-hidden="true" />}
      </h4>
    ),

    // Table wrapper for responsiveness
    table: ({ children, ...props }) => (
      <div style={{ overflowX: 'auto' }}>
        <table {...props}>{children}</table>
      </div>
    ),

    ...components,
  }
}
