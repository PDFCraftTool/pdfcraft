'use client';

import dynamic from 'next/dynamic';
import { type Locale } from '@/lib/i18n/config';

// Dynamically import PDFStudio to prevent SSR issues and optimize code splitting
const PDFStudio = dynamic(
  () => import('@/components/studio/PDFStudio').then((mod) => mod.PDFStudio),
  {
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[hsl(var(--color-background))]">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-3 border-[hsl(var(--color-primary))] border-t-transparent rounded-full animate-spin" />
          <p className="text-sm font-medium text-[hsl(var(--color-muted-foreground))]">
            Loading PDFCraft Studio...
          </p>
        </div>
      </div>
    ),
  }
);

interface StudioPageClientProps {
  locale?: Locale;
}

export default function StudioPageClient({ locale = 'en' }: StudioPageClientProps) {
  return <PDFStudio locale={locale} />;
}
