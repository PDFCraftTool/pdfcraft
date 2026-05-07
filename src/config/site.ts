/**
 * Site configuration
 */
export const siteConfig = {
  name: 'PDFaro',
  description: 'Professional PDF Tools - Free, Private & Browser-Based. Merge, split, compress, convert, and edit PDF files online without uploading to servers.',
  url: 'https://pdfaro.app',
  ogImage: '/images/png/lockup-color-960.png',
  links: {
    github: 'https://github.com/PDFaroTool/pdfaro',
    twitter: 'https://twitter.com/pdfaro',
  },
  creator: 'PDFaro Team',
  keywords: [
    'PDF tools',
    'PDF editor',
    'merge PDF',
    'split PDF',
    'compress PDF',
    'convert PDF',
    'free PDF tools',
    'online PDF editor',
    'browser-based PDF',
    'private PDF processing',
  ],
  // SEO-related settings
  seo: {
    titleTemplate: '%s | PDFaro',
    defaultTitle: 'PDFaro - Professional PDF Tools',
    twitterHandle: '@pdfaro',
    locale: 'en_US',
  },
};

/**
 * Navigation configuration
 */
export const navConfig = {
  mainNav: [
    { title: 'Home', href: '/' },
    { title: 'Tools', href: '/tools' },
    { title: 'About', href: '/about' },
    { title: 'FAQ', href: '/faq' },
  ],
  footerNav: [
    { title: 'Privacy', href: '/privacy' },
    { title: 'Terms', href: '/terms' },
    { title: 'Contact', href: '/contact' },
  ],
};
