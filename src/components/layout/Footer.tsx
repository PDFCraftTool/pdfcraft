'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Shield, Github, Globe, ChevronDown } from 'lucide-react';
import { type Locale, locales, localeConfig, getLocalizedPath } from '@/lib/i18n/config';
import { saveLanguagePreference } from './LanguageSelector';

export interface FooterProps {
  locale: Locale;
}

/**
 * Footer, consolidated 2026-11-22. This file is one of the six theme
 * files, so the cleanup lives here.
 *
 * What changed from the upstream footer, and why:
 * - Language is ONE dropdown (a native select showing the current
 *   language), not a wall of 18 pill buttons. A native select is the
 *   familiar pattern, and the browser opens its list upward near the
 *   bottom of the page and scrolls it, which a hand-rolled dropdown
 *   in a footer cannot do reliably.
 * - Three columns instead of four. The old Security column and the
 *   Compliance card said the same privacy thing twice; they are now
 *   one privacy block under the language picker.
 * - The brand column keeps only the GitHub link (the project's source,
 *   which the AGPL offer points at). The X icon duplicated it and the
 *   Mail icon was a dead "#" link.
 * - The bottom row's Terms and Cookies links are gone: those routes
 *   do not exist in this app and answered 404. Privacy stays, in the
 *   Resources column where it already was.
 */
export const Footer: React.FC<FooterProps> = ({ locale }) => {
  const t = useTranslations('common');
  const currentYear = new Date().getFullYear();
  const router = useRouter();
  const pathname = usePathname();

  const footerLinks = [
    { href: `/${locale}/about`, label: t('navigation.about') },
    { href: `/${locale}/faq`, label: t('navigation.faq') },
    { href: `/${locale}/privacy`, label: t('navigation.privacy') },
    { href: `/${locale}/contact`, label: t('navigation.contact') },
  ];

  const handleLanguageChange = (newLocale: Locale) => {
    saveLanguagePreference(newLocale);
    const newPath = getLocalizedPath(pathname, newLocale);
    router.push(newPath);
  };

  return (
    <footer
      className="w-full border-t border-[hsl(var(--color-border))] bg-[hsl(var(--color-background))] pt-12 pb-8"
      role="contentinfo"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand Column */}
          <div className="flex flex-col gap-5">
            <Link
              href={`/${locale}`}
              className="group flex items-center gap-2.5 text-xl font-bold text-[hsl(var(--color-foreground))]"
              aria-label={`${t('brand')} - ${t('navigation.home')}`}
            >
              <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-[hsl(var(--color-primary))] text-white shadow-md transition-transform group-hover:scale-105">
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
              </div>
              <span data-testid="footer-brand-name">{t('brand')}</span>
            </Link>
            <p className="text-sm text-[hsl(var(--color-muted-foreground))] leading-relaxed max-w-xs">
              {t('tagline') || 'Professional, secure, and free PDF tools for everyone. No installation required.'}
            </p>
            <div>
              <a
                href="https://github.com/PDFCraftTool/pdfcraft"
                aria-label="PDFCraft on GitHub"
                className="inline-flex p-2 rounded-full bg-[hsl(var(--color-muted))] text-[hsl(var(--color-muted-foreground))] hover:bg-[hsl(var(--color-primary))] hover:text-white transition-all"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[hsl(var(--color-foreground))] mb-5">
              Resources
            </h3>
            <ul className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[hsl(var(--color-muted-foreground))] hover:text-[hsl(var(--color-primary))] transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[hsl(var(--color-muted-foreground))] group-hover:bg-[hsl(var(--color-primary))] transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Language picker + the one privacy block */}
          <div className="flex flex-col gap-6">
            <div>
              <label
                htmlFor="footer-language-select"
                className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[hsl(var(--color-foreground))] mb-4"
              >
                <Globe className="h-4 w-4 text-[hsl(var(--color-muted-foreground))]" aria-hidden="true" />
                {t('buttons.selectLanguage')}
              </label>
              <div className="relative max-w-xs">
                <select
                  id="footer-language-select"
                  value={locale}
                  onChange={(event) => handleLanguageChange(event.target.value as Locale)}
                  className="w-full appearance-none rounded-xl border border-[hsl(var(--color-border))] bg-[hsl(var(--color-card))] px-4 py-2.5 pe-10 text-sm font-medium text-[hsl(var(--color-foreground))] shadow-sm transition-colors hover:border-[hsl(var(--color-primary)/0.5)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--color-ring))]"
                >
                  {locales.map((loc) => (
                    <option key={loc} value={loc}>
                      {localeConfig[loc].nativeName}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  className="pointer-events-none absolute end-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[hsl(var(--color-muted-foreground))]"
                  aria-hidden="true"
                />
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-[hsl(var(--color-card))] border border-[hsl(var(--color-border))] rounded-xl shadow-sm max-w-xs">
              <div className="h-10 w-10 rounded-full bg-[hsl(var(--color-success)/0.1)] flex items-center justify-center flex-shrink-0">
                <Shield className="h-5 w-5 text-[hsl(var(--color-success))]" aria-hidden="true" />
              </div>
              <div>
                <div className="text-sm font-bold text-[hsl(var(--color-foreground))]">GDPR Compliant</div>
                <div className="text-xs text-[hsl(var(--color-muted-foreground))]">{t('footer.privacyBadge')}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar: the copyright line alone. */}
        <div className="pt-6 border-t border-[hsl(var(--color-border))] flex flex-col md:flex-row items-center justify-between gap-3">
          {/* The copyright translation is already the whole line
              ("© {year} PDFCraft. All rights reserved." in every
              locale). The upstream footer prepended its own copy of
              the same text, so the line rendered twice; render the
              translation alone. */}
          <p className="text-sm text-[hsl(var(--color-muted-foreground))]">
            {t('footer.copyright', { year: currentYear })}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
