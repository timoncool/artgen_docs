import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'ArtGeneration Docs',
    short_name: 'ArtGen Docs',
    description: 'Documentation for ArtGeneration.me - AI art generation platform',
    start_url: '/ru/docs',
    display: 'standalone',
    background_color: '#1a1a1a',
    theme_color: '#12b886',
    icons: [
      {
        src: '/favicon.ico',
        sizes: '48x48',
        type: 'image/x-icon',
      },
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
