/**
 * Site configuration
 */
export const siteConfig = {
  name: 'PDFCraft',
  description: 'Professional PDF Tools - Free, Private & Browser-Based. Merge, split, compress, convert, and edit PDF files online without uploading to servers.',
  url: 'https://pdfcraft.devtoolcafe.com',
  ogImage: '/images/og-image.png',
  links: {
    github: 'https://github.com/spankyno/pdfcraft',
    twitter: 'https://x.com/Kalbo___',
    email: 'blog.cottage627@passinbox.com',
  },
  creator: 'PDFCraft Team',
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
    titleTemplate: '%s | PDFCraft',
    defaultTitle: 'PDFCraft - Professional PDF Tools',
    twitterHandle: '@Kalbo___',
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
