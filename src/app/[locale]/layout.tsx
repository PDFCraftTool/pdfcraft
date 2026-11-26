import type { Viewport } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { localeConfig, type Locale, locales } from '@/lib/i18n/config';
import { fontVariablesFor } from '@/lib/fonts';
import { SkipLink } from '@/components/common/SkipLink';
import '@/app/globals.css';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

/**
 * Viewport configuration for performance
 * Requirements: 8.1 - Lighthouse performance score 90+
 */
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f4f3ec' },
    { media: '(prefers-color-scheme: dark)', color: '#14161c' },
  ],
};

/**
 * Sidebar shell navigation (added 2026-11-21).
 * The shell chrome lives here in the layout, one of the six theme
 * files, so every locale page (home, tools, studio, workflow,
 * info pages) gets the same frame without touching upstream page or
 * component files. Structure and styling: globals.css, DESIGN.md in
 * ~/workspace/pdfcraft-theme/. The nav is plain links, so it works
 * with no JavaScript; the small script at the bottom only adds the
 * active state and the sidebar fold (button, or Cmd/Ctrl+B).
 *
 * Icons are inline SVG (lucide-style strokes). Never put the shell
 * container's class names on the buttons themselves: a container
 * class carrying position:fixed once stacked every dock button on
 * one spot on another page (2026-11-21 school page bug).
 */
const SHELL_ICONS: Record<string, React.ReactNode> = {
  home: (
    <>
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </>
  ),
  tools: (
    <>
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
    </>
  ),
  studio: (
    <>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M10 4v4" />
      <path d="M2 8h20" />
      <path d="M6 4v4" />
    </>
  ),
  workflow: (
    <>
      <rect x="3" y="3" width="6" height="6" rx="1" />
      <rect x="15" y="15" width="6" height="6" rx="1" />
      <path d="M9 6h7a2 2 0 0 1 2 2v7" />
    </>
  ),
  about: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </>
  ),
  faq: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3" />
      <path d="M12 17h.01" />
    </>
  ),
  contact: (
    <>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.5 6a2 2 0 0 1-3 0L2 7" />
    </>
  ),
};

function ShellIcon({ name, size }: { name: string; size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {SHELL_ICONS[name]}
    </svg>
  );
}

/* Runs after the shell markup. Marks the nav link for the current
   path active in both the sidebar and the dock, and wires the fold. */
const SHELL_SCRIPT = `
(function () {
  var shell = document.querySelector('[data-nb-shell]');
  if (!shell) return;
  try {
    if (localStorage.getItem('nb-shell-folded') === '1') shell.classList.add('nb-folded');
  } catch (e) {}
  function setFold(f) {
    shell.classList.toggle('nb-folded', f);
    try { localStorage.setItem('nb-shell-folded', f ? '1' : '0'); } catch (e) {}
  }
  var fold = shell.querySelector('[data-nb-fold]');
  if (fold) {
    fold.setAttribute('aria-expanded', shell.classList.contains('nb-folded') ? 'false' : 'true');
    fold.addEventListener('click', function () {
      var f = !shell.classList.contains('nb-folded');
      setFold(f);
      fold.setAttribute('aria-expanded', f ? 'false' : 'true');
    });
  }
  document.addEventListener('keydown', function (e) {
    if ((e.metaKey || e.ctrlKey) && (e.key === 'b' || e.key === 'B')) {
      e.preventDefault();
      setFold(!shell.classList.contains('nb-folded'));
    }
  });
  var path = location.pathname.replace(/\\/+$/, '');
  var links = Array.prototype.slice.call(shell.querySelectorAll('[data-nb-nav]'));
  var bestLen = -1;
  links.forEach(function (a) {
    var href = (a.getAttribute('href') || '').replace(/\\/+$/, '');
    var match = path === href || (href.split('/').length > 2 && path.indexOf(href + '/') === 0);
    a.__nbMatch = match;
    if (match && href.length > bestLen) bestLen = href.length;
  });
  links.forEach(function (a) {
    var href = (a.getAttribute('href') || '').replace(/\\/+$/, '');
    if (a.__nbMatch && href.length === bestLen) {
      a.classList.add('active');
      a.setAttribute('aria-current', 'page');
    }
  });
})();
`;

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Validate locale
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  // Get messages for the locale
  const messages = await getMessages();
  const t = await getTranslations('common');

  // Get direction for the locale
  const direction = localeConfig[locale as Locale]?.direction || 'ltr';

  // Shell views: the tool catalog is the working surface, Studio and
  // Workflow are the other app views, the rest are the info views.
  // "Studio" is a literal label, matching the upstream Header.
  const navItems = [
    { key: 'home', href: `/${locale}`, label: t('navigation.home'), short: t('navigation.home') },
    { key: 'tools', href: `/${locale}/tools`, label: t('navigation.tools'), short: t('navigation.tools') },
    { key: 'studio', href: `/${locale}/studio`, label: 'Studio', short: 'Studio' },
    { key: 'workflow', href: `/${locale}/workflow`, label: t('navigation.workflow'), short: t('navigation.workflow') },
    { key: 'about', href: `/${locale}/about`, label: t('navigation.about'), short: t('navigation.about') },
    { key: 'faq', href: `/${locale}/faq`, label: t('navigation.faq'), short: t('navigation.faq') },
    { key: 'contact', href: `/${locale}/contact`, label: t('navigation.contact'), short: t('navigation.contact') },
  ];
  const dockItems = navItems.slice(0, 5);

  return (
    <NextIntlClientProvider messages={messages}>
      <div lang={locale} dir={direction} className={`${fontVariablesFor(direction)} min-h-screen bg-background text-foreground antialiased font-sans`}>
        <SkipLink targetId="main-content">Skip to main content</SkipLink>
        <div className="nb-shell" data-nb-shell>
          <aside className="nb-sidebar">
            <a className="nb-brand" href={`/${locale}`} aria-label={`${t('brand')} - ${t('navigation.home')}`}>
              <span className="nb-brand-mark">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
              </span>
              <span className="nb-brand-text">
                <span className="nb-brand-name">{t('brand')}</span>
              </span>
            </a>
            <nav className="nb-nav" aria-label="Primary">
              {navItems.map((item) => (
                <a key={item.key} className="nb-navbtn" data-nb-nav href={item.href}>
                  <ShellIcon name={item.key} size={20} />
                  <span className="nb-navlabel">{item.label}</span>
                  <span className="nb-navshort">{item.short}</span>
                </a>
              ))}
            </nav>
            <button type="button" className="nb-foldbtn" data-nb-fold aria-expanded="true" aria-label="Fold or unfold the sidebar">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="14 6 8 12 14 18" />
              </svg>
            </button>
          </aside>
          <div className="nb-main">{children}</div>
          <nav className="nb-dock" aria-label="Primary">
            {dockItems.map((item) => (
              <a key={item.key} className="nb-dockbtn" data-nb-nav href={item.href}>
                <ShellIcon name={item.key} size={20} />
                <span className="nb-docklabel">{item.short}</span>
              </a>
            ))}
          </nav>
          <script dangerouslySetInnerHTML={{ __html: SHELL_SCRIPT }} />
        </div>
      </div>
    </NextIntlClientProvider>
  );
}
