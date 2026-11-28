import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { locales, type Locale } from '@/lib/i18n/config';
import { generateBaseMetadata } from '@/lib/seo';
import StudioPageClient from './StudioPageClient';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

interface StudioPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: StudioPageProps): Promise<Metadata> {
  const { locale } = await params;
  const validLocale = locales.includes(locale as Locale) ? (locale as Locale) : 'en';
  const isZh = validLocale === 'zh';

  return generateBaseMetadata({
    locale: validLocale,
    path: '/studio',
    title: isZh ? 'PDFCraft Studio - 紧凑一体化 PDF 编辑工作台' : 'PDFCraft Studio - All-in-One Compact PDF Editor Workspace',
    description: isZh
      ? '全新紧凑单视窗工作台：集中查看、就地链式编辑、旋转、水印、压缩与统一导出，无需反复上传跳转。'
      : 'Compact all-in-one PDF workspace: view, edit, rotate, watermark, compress, and export in a single view without re-uploading.',
  });
}

export default async function StudioPage({ params }: StudioPageProps) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  return <StudioPageClient locale={locale as Locale} />;
}
