/**
 * Web App Manifest Generation
 * Configures PWA settings for the application
 * 
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/manifest
 */

import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';

// Required for static export
export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: 'PDFCraft',
    description: siteConfig.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#f4f3ec', /* Paper */
    theme_color: '#14161c', /* Ink */
    orientation: 'portrait-primary',
    categories: ['productivity', 'utilities'],
    icons: [
      {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'any',
      },
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
    screenshots: [
      {
        src: '/screenshots/home.png',
        sizes: '1280x720',
        type: 'image/png',
      },
    ],
    shortcuts: [
      {
        name: 'Merge PDF',
        short_name: 'Merge',
        description: 'Combine multiple PDF files',
        url: '/en/tools/merge-pdf',
        icons: [{ src: '/icons/merge.png', sizes: '96x96' }],
      },
      {
        name: 'Split PDF',
        short_name: 'Split',
        description: 'Split PDF into multiple files',
        url: '/en/tools/split-pdf',
        icons: [{ src: '/icons/split.png', sizes: '96x96' }],
      },
      {
        name: 'Compress PDF',
        short_name: 'Compress',
        description: 'Reduce PDF file size',
        url: '/en/tools/compress-pdf',
        icons: [{ src: '/icons/compress.png', sizes: '96x96' }],
      },
    ],
  };
}
