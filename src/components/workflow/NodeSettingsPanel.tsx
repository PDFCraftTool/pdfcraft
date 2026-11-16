'use client';

import React, { useState, useEffect } from 'react';
import { useTranslations, useLocale, useMessages } from 'next-intl';
import { WorkflowNode } from '@/types/workflow';
import { getToolContent } from '@/config/tool-content';
import { Locale } from '@/lib/i18n/config';
import { X, Settings, RotateCcw, Check } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface NodeSettingsPanelProps {
    node: WorkflowNode | null;
    onClose: () => void;
    onUpdateSettings: (nodeId: string, settings: Record<string, unknown>) => void;
}

type FieldType = 'text' | 'number' | 'select' | 'checkbox' | 'range' | 'color' | 'file' | 'password';

interface FieldConfig {
    key: string;
    labelKey: string;
    type: FieldType;
    defaultValue: unknown;
    options?: { value: string; labelKey: string; descriptionKey?: string }[];
    min?: number;
    max?: number;
    step?: number;
    placeholderKey?: string;
    descriptionKey?: string;
    /** Show this field only when another field has a specific value */
    showWhen?: { field: string; value: unknown };
    /** Accepted file types for 'file' type fields */
    accept?: string;
}

interface ToolSettingsConfig {
    titleKey: string;
    fields: FieldConfig[];
}

const POSITION_GRID_ITEMS = [
    { value: 'top-left', label: 'TL', title: 'Top Left' },
    { value: 'top-center', label: 'TC', title: 'Top Center' },
    { value: 'top-right', label: 'TR', title: 'Top Right' },
    { value: 'center-left', label: 'CL', title: 'Center Left' },
    { value: 'center', label: 'C', title: 'Center' },
    { value: 'center-right', label: 'CR', title: 'Center Right' },
    { value: 'bottom-left', label: 'BL', title: 'Bottom Left' },
    { value: 'bottom-center', label: 'BC', title: 'Bottom Center' },
    { value: 'bottom-right', label: 'BR', title: 'Bottom Right' },
];

/**
 * Complete tool settings configuration matching original tool components
 */
const getToolSettingsConfig = (): Record<string, ToolSettingsConfig> => ({
    // ==================== Compress PDF ====================
    'compress-pdf': {
        titleKey: 'compressPdf.optionsTitle',
        fields: [
            {
                key: 'algorithm',
                labelKey: 'compressPdf.algorithmLabel',
                type: 'select',
                defaultValue: 'standard',
                options: [
                    { value: 'standard', labelKey: 'compressPdf.algorithmStandard', descriptionKey: 'compressPdf.algorithmStandardDesc' },
                    { value: 'condense', labelKey: 'compressPdf.algorithmCondense', descriptionKey: 'compressPdf.algorithmCondenseDesc' },
                    { value: 'photon', labelKey: 'compressPdf.algorithmPhoton', descriptionKey: 'compressPdf.algorithmPhotonDesc' },
                ],
            },
            {
                key: 'quality',
                labelKey: 'compressPdf.qualityLabel',
                type: 'select',
                defaultValue: 'medium',
                options: [
                    { value: 'low', labelKey: 'compressPdf.qualityLow' },
                    { value: 'medium', labelKey: 'compressPdf.qualityMedium' },
                    { value: 'high', labelKey: 'compressPdf.qualityHigh' },
                    { value: 'maximum', labelKey: 'compressPdf.qualityMaximum' },
                ],
            },
            {
                key: 'photonDpi',
                labelKey: 'compressPdf.photonDpiLabel',
                type: 'select',
                defaultValue: '150',
                descriptionKey: 'compressPdf.photonDpiDesc',
                showWhen: { field: 'algorithm', value: 'photon' },
                options: [
                    { value: '72', labelKey: '72 DPI' },
                    { value: '150', labelKey: '150 DPI' },
                    { value: '200', labelKey: '200 DPI' },
                    { value: '300', labelKey: '300 DPI' },
                ],
            },
            {
                key: 'optimizeImages',
                labelKey: 'compressPdf.optimizeImages',
                type: 'checkbox',
                defaultValue: true,
                showWhen: { field: 'algorithm', value: 'standard' },
            },
            {
                key: 'removeMetadata',
                labelKey: 'compressPdf.removeMetadata',
                type: 'checkbox',
                defaultValue: false,
            },
        ],
    },

    // ==================== Add Watermark ====================
    'add-watermark': {
        titleKey: 'watermark.optionsTitle',
        fields: [
            {
                key: 'watermarkType',
                labelKey: 'watermark.type',
                type: 'select',
                defaultValue: 'text',
                options: [
                    { value: 'text', labelKey: 'watermark.textWatermark' },
                    { value: 'image', labelKey: 'watermark.imageWatermark' },
                ],
            },
            {
                key: 'text',
                labelKey: 'watermark.watermarkText',
                type: 'text',
                defaultValue: 'CONFIDENTIAL',
                placeholderKey: 'watermark.textPlaceholder',
                showWhen: { field: 'watermarkType', value: 'text' },
            },
            {
                key: 'imageFile',
                labelKey: 'watermark.uploadImage',
                type: 'file',
                accept: 'image/*',
                defaultValue: null,
                showWhen: { field: 'watermarkType', value: 'image' },
            },
            {
                key: 'imageScale',
                labelKey: 'watermark.scale',
                type: 'range',
                defaultValue: 1,
                min: 0.1,
                max: 3,
                step: 0.1,
                showWhen: { field: 'watermarkType', value: 'image' },
            },
            {
                key: 'position',
                labelKey: 'watermark.position',
                type: 'select',
                defaultValue: 'center',
                options: [
                    { value: 'center', labelKey: 'watermark.posCenter' },
                    { value: 'diagonal', labelKey: 'watermark.posDiagonal' },
                    { value: 'top-left', labelKey: 'watermark.posTopLeft' },
                    { value: 'top-right', labelKey: 'watermark.posTopRight' },
                    { value: 'bottom-left', labelKey: 'watermark.posBottomLeft' },
                    { value: 'bottom-right', labelKey: 'watermark.posBottomRight' },
                ],
                showWhen: { field: 'repeat', value: false },
            },
            {
                key: 'repeat',
                labelKey: 'watermark.repeatTitle',
                type: 'checkbox',
                defaultValue: false,
            },
            {
                key: 'stagger',
                labelKey: 'watermark.staggerTitle',
                type: 'checkbox',
                defaultValue: true,
                showWhen: { field: 'repeat', value: true },
            },
            {
                key: 'repeatSpacingX',
                labelKey: 'watermark.spacingX',
                type: 'number',
                defaultValue: 200,
                min: 50,
                max: 800,
                showWhen: { field: 'repeat', value: true },
            },
            {
                key: 'repeatSpacingY',
                labelKey: 'watermark.spacingY',
                type: 'number',
                defaultValue: 150,
                min: 50,
                max: 800,
                showWhen: { field: 'repeat', value: true },
            },
            {
                key: 'fontSize',
                labelKey: 'watermark.fontSize',
                type: 'number',
                defaultValue: 48,
                min: 10,
                max: 200,
                showWhen: { field: 'watermarkType', value: 'text' },
            },
            {
                key: 'color',
                labelKey: 'watermark.color',
                type: 'color',
                defaultValue: '#888888',
                showWhen: { field: 'watermarkType', value: 'text' },
            },
            {
                key: 'opacity',
                labelKey: 'watermark.opacity',
                type: 'range',
                defaultValue: 0.3,
                min: 0.05,
                max: 1,
                step: 0.05,
            },
            {
                key: 'rotation',
                labelKey: 'watermark.angle',
                type: 'range',
                defaultValue: -45,
                min: -90,
                max: 90,
                step: 5,
            },
            {
                key: 'flatten',
                labelKey: 'watermark.flattenTitle',
                type: 'checkbox',
                defaultValue: false,
                descriptionKey: 'watermark.flattenDescription',
            },
        ],
    },

    // ==================== Page Numbers ====================
    'page-numbers': {
        titleKey: 'pageNumbers.optionsTitle',
        fields: [
            {
                key: 'position',
                labelKey: 'pageNumbers.positionTitle',
                type: 'select',
                defaultValue: 'bottom-center',
                options: [
                    { value: 'top-left', labelKey: 'pageNumbers.posTopLeft' },
                    { value: 'top-center', labelKey: 'pageNumbers.posTopCenter' },
                    { value: 'top-right', labelKey: 'pageNumbers.posTopRight' },
                    { value: 'bottom-left', labelKey: 'pageNumbers.posBottomLeft' },
                    { value: 'bottom-center', labelKey: 'pageNumbers.posBottomCenter' },
                    { value: 'bottom-right', labelKey: 'pageNumbers.posBottomRight' },
                ],
            },
            {
                key: 'format',
                labelKey: 'pageNumbers.formatTitle',
                type: 'select',
                defaultValue: 'number',
                options: [
                    { value: 'number', labelKey: 'pageNumbers.formatNumber' },
                    { value: 'roman', labelKey: 'pageNumbers.formatRoman' },
                    { value: 'page-of-total', labelKey: 'pageNumbers.formatPageOfTotal' },
                ],
            },
            {
                key: 'startNumber',
                labelKey: 'pageNumbers.startNumber',
                type: 'number',
                defaultValue: 1,
                min: 1,
                max: 9999,
            },
            {
                key: 'fontSize',
                labelKey: 'pageNumbers.fontSize',
                type: 'number',
                defaultValue: 12,
                min: 6,
                max: 72,
            },
            {
                key: 'fontColor',
                labelKey: 'pageNumbers.color',
                type: 'color',
                defaultValue: '#000000',
            },
            {
                key: 'margin',
                labelKey: 'pageNumbers.margin',
                type: 'number',
                defaultValue: 30,
                min: 10,
                max: 100,
            },
            {
                key: 'skipFirstPage',
                labelKey: 'pageNumbers.skipFirstPage',
                type: 'checkbox',
                defaultValue: false,
            },
        ],
    },

    // ==================== Merge PDF ====================
    'merge-pdf': {
        titleKey: 'mergePdf.optionsTitle',
        fields: [
            {
                key: 'preserveBookmarks',
                labelKey: 'mergePdf.preserveBookmarks',
                type: 'checkbox',
                defaultValue: true,
            },
        ],
    },

    // ==================== Split PDF ====================
    'split-pdf': {
        titleKey: 'splitPdf.optionsTitle',
        fields: [
            {
                key: 'splitMode',
                labelKey: 'splitPdf.splitModeLabel',
                type: 'select',
                defaultValue: 'every-page',
                options: [
                    { value: 'every-page', labelKey: 'splitPdf.modeEveryPage' },
                    { value: 'every-n-pages', labelKey: 'splitPdf.modeEveryNPages' },
                    { value: 'ranges', labelKey: 'splitPdf.modeRanges' },
                ],
            },
            {
                key: 'pagesPerSplit',
                labelKey: 'splitPdf.pagesPerFile',
                type: 'number',
                defaultValue: 1,
                min: 1,
                max: 100,
                showWhen: { field: 'splitMode', value: 'every-n-pages' },
            },
            {
                key: 'pageRanges',
                labelKey: 'splitPdf.pageRanges',
                type: 'text',
                defaultValue: '',
                placeholderKey: 'splitPdf.pageRangesPlaceholder',
                showWhen: { field: 'splitMode', value: 'ranges' },
            },
        ],
    },

    // ==================== Rotate PDF ====================
    'rotate-pdf': {
        titleKey: 'rotatePdf.optionsTitle',
        fields: [
            {
                key: 'angle',
                labelKey: 'rotatePdf.angle',
                type: 'select',
                defaultValue: '90',
                options: [
                    { value: '90', labelKey: 'rotatePdf.rotateRight' },
                    { value: '-90', labelKey: 'rotatePdf.rotateLeft' },
                    { value: '180', labelKey: 'rotatePdf.rotate180' },
                ],
            },
            {
                key: 'applyTo',
                labelKey: 'rotatePdf.applyTo',
                type: 'select',
                defaultValue: 'all',
                options: [
                    { value: 'all', labelKey: 'rotatePdf.allPages' },
                    { value: 'odd', labelKey: 'rotatePdf.oddPages' },
                    { value: 'even', labelKey: 'rotatePdf.evenPages' },
                ],
            },
        ],
    },

    // ==================== PDF to Image (JPG/PNG) ====================
    'pdf-to-jpg': {
        titleKey: 'pdfToImage.optionsTitle',
        fields: [
            {
                key: 'quality',
                labelKey: 'pdfToImage.quality',
                type: 'range',
                defaultValue: 0.92,
                min: 0.5,
                max: 1,
                step: 0.05,
            },
            {
                key: 'scale',
                labelKey: 'pdfToImage.resolution',
                type: 'select',
                defaultValue: '2',
                options: [
                    { value: '1', labelKey: '72 DPI' },
                    { value: '2', labelKey: '144 DPI' },
                    { value: '3', labelKey: '216 DPI' },
                    { value: '4', labelKey: '288 DPI' },
                ],
            },
            {
                key: 'pageRange',
                labelKey: 'pdfToImage.pageRange',
                type: 'text',
                defaultValue: '',
                placeholderKey: 'pdfToImage.pageRangePlaceholder',
            },
        ],
    },
    'pdf-to-png': {
        titleKey: 'pdfToImage.optionsTitle',
        fields: [
            {
                key: 'scale',
                labelKey: 'pdfToImage.resolution',
                type: 'select',
                defaultValue: '2',
                options: [
                    { value: '1', labelKey: '72 DPI' },
                    { value: '2', labelKey: '144 DPI' },
                    { value: '3', labelKey: '216 DPI' },
                    { value: '4', labelKey: '288 DPI' },
                ],
            },
            {
                key: 'pageRange',
                labelKey: 'pdfToImage.pageRange',
                type: 'text',
                defaultValue: '',
                placeholderKey: 'pdfToImage.pageRangePlaceholder',
            },
        ],
    },

    // ==================== Encrypt PDF ====================
    'encrypt-pdf': {
        titleKey: 'encryptPdf.permissionsTitle',
        fields: [
            {
                key: 'userPassword',
                labelKey: 'encryptPdf.userPasswordLabel',
                type: 'text',
                defaultValue: '',
                placeholderKey: 'encryptPdf.userPasswordPlaceholder',
            },
            {
                key: 'ownerPassword',
                labelKey: 'encryptPdf.ownerPasswordLabel',
                type: 'text',
                defaultValue: '',
                placeholderKey: 'encryptPdf.ownerPasswordPlaceholder',
            },
            {
                key: 'allowPrinting',
                labelKey: 'encryptPdf.permPrinting',
                type: 'checkbox',
                defaultValue: true,
            },
            {
                key: 'allowModifying',
                labelKey: 'encryptPdf.permModifying',
                type: 'checkbox',
                defaultValue: false,
            },
            {
                key: 'allowCopying',
                labelKey: 'encryptPdf.permCopying',
                type: 'checkbox',
                defaultValue: false,
            },
            {
                key: 'allowAnnotating',
                labelKey: 'encryptPdf.permAnnotating',
                type: 'checkbox',
                defaultValue: true,
            },
        ],
    },

    // ==================== Decrypt PDF ====================
    'decrypt-pdf': {
        titleKey: 'decryptPdf.optionsTitle',
        fields: [
            {
                key: 'password',
                labelKey: 'decryptPdf.passwordLabel',
                type: 'text',
                defaultValue: '',
                placeholderKey: 'decryptPdf.passwordPlaceholder',
            },
        ],
    },

    // ==================== Digital Sign PDF ====================
    'digital-sign-pdf': {
        titleKey: 'digitalSign.signatureOptionsTitle',
        fields: [
            {
                key: 'certFile',
                labelKey: 'digitalSign.uploadCertificateLabel',
                type: 'file',
                defaultValue: null,
                accept: '.pfx,.p12,.pem',
            },
            {
                key: 'certPassword',
                labelKey: 'digitalSign.certificatePasswordLabel',
                type: 'password',
                defaultValue: '',
                placeholderKey: 'digitalSign.enterPassword',
            },
            {
                key: 'reason',
                labelKey: 'digitalSign.reasonLabel',
                type: 'text',
                defaultValue: '',
                placeholderKey: 'digitalSign.reasonPlaceholder',
            },
            {
                key: 'location',
                labelKey: 'digitalSign.locationLabel',
                type: 'text',
                defaultValue: '',
                placeholderKey: 'digitalSign.locationPlaceholder',
            },
            {
                key: 'contactInfo',
                labelKey: 'digitalSign.contactInfoLabel',
                type: 'text',
                defaultValue: '',
                placeholderKey: 'digitalSign.contactInfoPlaceholder',
            },
        ],
    },

    // ==================== Crop PDF ====================
    'crop-pdf': {
        titleKey: 'cropPdf.optionsTitle',
        fields: [
            {
                key: 'marginTop',
                labelKey: 'cropPdf.marginTop',
                type: 'number',
                defaultValue: 0,
                min: 0,
                max: 200,
            },
            {
                key: 'marginBottom',
                labelKey: 'cropPdf.marginBottom',
                type: 'number',
                defaultValue: 0,
                min: 0,
                max: 200,
            },
            {
                key: 'marginLeft',
                labelKey: 'cropPdf.marginLeft',
                type: 'number',
                defaultValue: 0,
                min: 0,
                max: 200,
            },
            {
                key: 'marginRight',
                labelKey: 'cropPdf.marginRight',
                type: 'number',
                defaultValue: 0,
                min: 0,
                max: 200,
            },
        ],
    },

    // ==================== Image to PDF (all variants) ====================
    'jpg-to-pdf': {
        titleKey: 'imageToPdf.optionsTitle',
        fields: [
            {
                key: 'pageSize',
                labelKey: 'imageToPdf.pageSize',
                type: 'select',
                defaultValue: 'A4',
                options: [
                    { value: 'A4', labelKey: 'A4' },
                    { value: 'LETTER', labelKey: 'Letter' },
                    { value: 'LEGAL', labelKey: 'Legal' },
                    { value: 'A3', labelKey: 'A3' },
                    { value: 'A5', labelKey: 'A5' },
                    { value: 'FIT', labelKey: 'imageToPdf.fitToImage' },
                ],
            },
            {
                key: 'orientation',
                labelKey: 'imageToPdf.orientation',
                type: 'select',
                defaultValue: 'auto',
                options: [
                    { value: 'auto', labelKey: 'imageToPdf.orientationAuto' },
                    { value: 'portrait', labelKey: 'imageToPdf.orientationPortrait' },
                    { value: 'landscape', labelKey: 'imageToPdf.orientationLandscape' },
                ],
            },
            {
                key: 'margin',
                labelKey: 'imageToPdf.margin',
                type: 'select',
                defaultValue: '36',
                options: [
                    { value: '0', labelKey: 'imageToPdf.marginNone' },
                    { value: '18', labelKey: 'imageToPdf.marginSmall' },
                    { value: '36', labelKey: 'imageToPdf.marginMedium' },
                    { value: '72', labelKey: 'imageToPdf.marginLarge' },
                ],
            },
            {
                key: 'centerImage',
                labelKey: 'imageToPdf.centerImage',
                type: 'checkbox',
                defaultValue: true,
            },
            {
                key: 'scaleToFit',
                labelKey: 'imageToPdf.scaleToFit',
                type: 'checkbox',
                defaultValue: true,
            },
        ],
    },
    'image-to-pdf': {
        titleKey: 'imageToPdf.optionsTitle',
        fields: [
            {
                key: 'pageSize',
                labelKey: 'imageToPdf.pageSize',
                type: 'select',
                defaultValue: 'A4',
                options: [
                    { value: 'A4', labelKey: 'A4' },
                    { value: 'LETTER', labelKey: 'Letter' },
                    { value: 'LEGAL', labelKey: 'Legal' },
                    { value: 'A3', labelKey: 'A3' },
                    { value: 'A5', labelKey: 'A5' },
                    { value: 'FIT', labelKey: 'imageToPdf.fitToImage' },
                ],
            },
            {
                key: 'orientation',
                labelKey: 'imageToPdf.orientation',
                type: 'select',
                defaultValue: 'auto',
                options: [
                    { value: 'auto', labelKey: 'imageToPdf.orientationAuto' },
                    { value: 'portrait', labelKey: 'imageToPdf.orientationPortrait' },
                    { value: 'landscape', labelKey: 'imageToPdf.orientationLandscape' },
                ],
            },
            {
                key: 'margin',
                labelKey: 'imageToPdf.margin',
                type: 'select',
                defaultValue: '36',
                options: [
                    { value: '0', labelKey: 'imageToPdf.marginNone' },
                    { value: '18', labelKey: 'imageToPdf.marginSmall' },
                    { value: '36', labelKey: 'imageToPdf.marginMedium' },
                    { value: '72', labelKey: 'imageToPdf.marginLarge' },
                ],
            },
            {
                key: 'centerImage',
                labelKey: 'imageToPdf.centerImage',
                type: 'checkbox',
                defaultValue: true,
            },
            {
                key: 'scaleToFit',
                labelKey: 'imageToPdf.scaleToFit',
                type: 'checkbox',
                defaultValue: true,
            },
        ],
    },
    'png-to-pdf': {
        titleKey: 'imageToPdf.optionsTitle',
        fields: [
            {
                key: 'pageSize',
                labelKey: 'imageToPdf.pageSize',
                type: 'select',
                defaultValue: 'A4',
                options: [
                    { value: 'A4', labelKey: 'A4' },
                    { value: 'LETTER', labelKey: 'Letter' },
                    { value: 'LEGAL', labelKey: 'Legal' },
                    { value: 'A3', labelKey: 'A3' },
                    { value: 'A5', labelKey: 'A5' },
                    { value: 'FIT', labelKey: 'imageToPdf.fitToImage' },
                ],
            },
            {
                key: 'orientation',
                labelKey: 'imageToPdf.orientation',
                type: 'select',
                defaultValue: 'auto',
                options: [
                    { value: 'auto', labelKey: 'imageToPdf.orientationAuto' },
                    { value: 'portrait', labelKey: 'imageToPdf.orientationPortrait' },
                    { value: 'landscape', labelKey: 'imageToPdf.orientationLandscape' },
                ],
            },
            {
                key: 'margin',
                labelKey: 'imageToPdf.margin',
                type: 'select',
                defaultValue: '36',
                options: [
                    { value: '0', labelKey: 'imageToPdf.marginNone' },
                    { value: '18', labelKey: 'imageToPdf.marginSmall' },
                    { value: '36', labelKey: 'imageToPdf.marginMedium' },
                    { value: '72', labelKey: 'imageToPdf.marginLarge' },
                ],
            },
            {
                key: 'centerImage',
                labelKey: 'imageToPdf.centerImage',
                type: 'checkbox',
                defaultValue: true,
            },
            {
                key: 'scaleToFit',
                labelKey: 'imageToPdf.scaleToFit',
                type: 'checkbox',
                defaultValue: true,
            },
        ],
    },

    // ==================== Extract Pages ====================
    'extract-pages': {
        titleKey: 'extractPages.optionsTitle',
        fields: [
            {
                key: 'pageRange',
                labelKey: 'extractPages.pageRange',
                type: 'text',
                defaultValue: '',
                placeholderKey: 'extractPages.pageRangePlaceholder',
            },
        ],
    },

    // ==================== Delete Pages ====================
    'delete-pages': {
        titleKey: 'deletePages.optionsTitle',
        fields: [
            {
                key: 'pageRange',
                labelKey: 'deletePages.pageRange',
                type: 'text',
                defaultValue: '',
                placeholderKey: 'deletePages.pageRangePlaceholder',
            },
        ],
    },

    // ==================== OCR PDF ====================
    'ocr-pdf': {
        titleKey: 'ocrPdf.optionsTitle',
        fields: [
            {
                key: 'language',
                labelKey: 'ocrPdf.language',
                type: 'select',
                defaultValue: 'eng',
                options: [
                    { value: 'eng', labelKey: 'English' },
                    { value: 'chi_sim', labelKey: '简体中文' },
                    { value: 'chi_tra', labelKey: '繁體中文' },
                    { value: 'jpn', labelKey: '日本語（横書き）' },
                    { value: 'jpn+eng', labelKey: '日本語（横書き）＋English' },
                    { value: 'jpn_vert', labelKey: '日本語（縦書き）' },
                    { value: 'jpn+jpn_vert', labelKey: '日本語（横書き・縦書き混在）' },
                    { value: 'kor', labelKey: '한국어' },
                    { value: 'deu', labelKey: 'Deutsch' },
                    { value: 'fra', labelKey: 'Français' },
                    { value: 'spa', labelKey: 'Español' },
                    { value: 'por', labelKey: 'Português' },
                    { value: 'ara', labelKey: 'العربية' },
                    { value: 'hun', labelKey: 'Magyar' },
                    { value: 'ori', labelKey: 'Odia (ଓଡ଼ିଆ)' },
                ],
            },
        ],
    },

    // ==================== Flatten PDF ====================
    'flatten-pdf': {
        titleKey: 'flattenPdf.optionsTitle',
        fields: [
            {
                key: 'flattenForms',
                labelKey: 'flattenPdf.flattenForms',
                type: 'checkbox',
                defaultValue: true,
            },
            {
                key: 'flattenAnnotations',
                labelKey: 'flattenPdf.flattenAnnotations',
                type: 'checkbox',
                defaultValue: true,
            },
        ],
    },

    // ==================== Linearize PDF ====================
    'linearize-pdf': {
        titleKey: 'linearizePdf.optionsTitle',
        fields: [],
    },

    // ==================== PDF to Grayscale ====================
    'pdf-to-greyscale': {
        titleKey: 'pdfToGreyscale.optionsTitle',
        fields: [],
    },

    // ==================== Header Footer ====================
    'header-footer': {
        titleKey: 'headerFooter.headerTitle',
        fields: [
            {
                key: 'headerText',
                labelKey: 'headerFooter.headerText',
                type: 'text',
                defaultValue: '',
                placeholderKey: 'headerFooter.headerTextPlaceholder',
            },
            {
                key: 'footerText',
                labelKey: 'headerFooter.footerText',
                type: 'text',
                defaultValue: '',
                placeholderKey: 'headerFooter.footerTextPlaceholder',
            },
            {
                key: 'fontSize',
                labelKey: 'headerFooter.fontSize',
                type: 'number',
                defaultValue: 10,
                min: 6,
                max: 24,
            },
            {
                key: 'fontColor',
                labelKey: 'headerFooter.fontColor',
                type: 'color',
                defaultValue: '#000000',
            },
        ],
    },

    // ==================== Word to PDF ====================
    'word-to-pdf': {
        titleKey: 'wordToPdf.optionsTitle',
        fields: [],
    },

    // ==================== Excel to PDF ====================
    'excel-to-pdf': {
        titleKey: 'excelToPdf.optionsTitle',
        fields: [],
    },

    // ==================== PowerPoint to PDF ====================
    'ppt-to-pdf': {
        titleKey: 'pptToPdf.optionsTitle',
        fields: [],
    },
    'pptx-to-pdf': {
        titleKey: 'pptToPdf.optionsTitle',
        fields: [],
    },

    // ==================== PDF to Word ====================
    'pdf-to-docx': {
        titleKey: 'pdfToDocx.optionsTitle',
        fields: [
            {
                key: 'preserveFormatting',
                labelKey: 'pdfToDocx.preserveFormatting',
                type: 'checkbox',
                defaultValue: true,
            },
            {
                key: 'extractImages',
                labelKey: 'pdfToDocx.extractImages',
                type: 'checkbox',
                defaultValue: true,
            },
        ],
    },

    // ==================== PDF to Excel ====================
    'pdf-to-excel': {
        titleKey: 'pdfToExcel.optionsTitle',
        fields: [
            {
                key: 'detectTables',
                labelKey: 'pdfToExcel.detectTables',
                type: 'checkbox',
                defaultValue: true,
            },
        ],
    },

    // ==================== PDF to PowerPoint ====================
    'pdf-to-pptx': {
        titleKey: 'pdfToPptx.optionsTitle',
        fields: [],
    },

    // ==================== EPUB to PDF ====================
    'epub-to-pdf': {
        titleKey: 'epubToPdf.optionsTitle',
        fields: [],
    },

    // ==================== Image to PDF variants ====================
    'webp-to-pdf': {
        titleKey: 'imageToPdf.optionsTitle',
        fields: [
            {
                key: 'pageSize',
                labelKey: 'imageToPdf.pageSize',
                type: 'select',
                defaultValue: 'A4',
                options: [
                    { value: 'A4', labelKey: 'A4' },
                    { value: 'LETTER', labelKey: 'Letter' },
                    { value: 'LEGAL', labelKey: 'Legal' },
                    { value: 'A3', labelKey: 'A3' },
                    { value: 'A5', labelKey: 'A5' },
                    { value: 'FIT', labelKey: 'imageToPdf.fitToImage' },
                ],
            },
            {
                key: 'orientation',
                labelKey: 'imageToPdf.orientation',
                type: 'select',
                defaultValue: 'auto',
                options: [
                    { value: 'auto', labelKey: 'imageToPdf.orientationAuto' },
                    { value: 'portrait', labelKey: 'imageToPdf.orientationPortrait' },
                    { value: 'landscape', labelKey: 'imageToPdf.orientationLandscape' },
                ],
            },
            {
                key: 'margin',
                labelKey: 'imageToPdf.margin',
                type: 'select',
                defaultValue: '36',
                options: [
                    { value: '0', labelKey: 'imageToPdf.marginNone' },
                    { value: '18', labelKey: 'imageToPdf.marginSmall' },
                    { value: '36', labelKey: 'imageToPdf.marginMedium' },
                    { value: '72', labelKey: 'imageToPdf.marginLarge' },
                ],
            },
            {
                key: 'centerImage',
                labelKey: 'imageToPdf.centerImage',
                type: 'checkbox',
                defaultValue: true,
            },
            {
                key: 'scaleToFit',
                labelKey: 'imageToPdf.scaleToFit',
                type: 'checkbox',
                defaultValue: true,
            },
        ],
    },
    'bmp-to-pdf': {
        titleKey: 'imageToPdf.optionsTitle',
        fields: [
            {
                key: 'pageSize',
                labelKey: 'imageToPdf.pageSize',
                type: 'select',
                defaultValue: 'A4',
                options: [
                    { value: 'A4', labelKey: 'A4' },
                    { value: 'LETTER', labelKey: 'Letter' },
                    { value: 'LEGAL', labelKey: 'Legal' },
                    { value: 'A3', labelKey: 'A3' },
                    { value: 'A5', labelKey: 'A5' },
                    { value: 'FIT', labelKey: 'imageToPdf.fitToImage' },
                ],
            },
            {
                key: 'orientation',
                labelKey: 'imageToPdf.orientation',
                type: 'select',
                defaultValue: 'auto',
                options: [
                    { value: 'auto', labelKey: 'imageToPdf.orientationAuto' },
                    { value: 'portrait', labelKey: 'imageToPdf.orientationPortrait' },
                    { value: 'landscape', labelKey: 'imageToPdf.orientationLandscape' },
                ],
            },
            {
                key: 'margin',
                labelKey: 'imageToPdf.margin',
                type: 'select',
                defaultValue: '36',
                options: [
                    { value: '0', labelKey: 'imageToPdf.marginNone' },
                    { value: '18', labelKey: 'imageToPdf.marginSmall' },
                    { value: '36', labelKey: 'imageToPdf.marginMedium' },
                    { value: '72', labelKey: 'imageToPdf.marginLarge' },
                ],
            },
            {
                key: 'centerImage',
                labelKey: 'imageToPdf.centerImage',
                type: 'checkbox',
                defaultValue: true,
            },
            {
                key: 'scaleToFit',
                labelKey: 'imageToPdf.scaleToFit',
                type: 'checkbox',
                defaultValue: true,
            },
        ],
    },
    'heic-to-pdf': {
        titleKey: 'imageToPdf.optionsTitle',
        fields: [
            {
                key: 'pageSize',
                labelKey: 'imageToPdf.pageSize',
                type: 'select',
                defaultValue: 'A4',
                options: [
                    { value: 'A4', labelKey: 'A4' },
                    { value: 'LETTER', labelKey: 'Letter' },
                    { value: 'LEGAL', labelKey: 'Legal' },
                    { value: 'A3', labelKey: 'A3' },
                    { value: 'A5', labelKey: 'A5' },
                    { value: 'FIT', labelKey: 'imageToPdf.fitToImage' },
                ],
            },
            {
                key: 'orientation',
                labelKey: 'imageToPdf.orientation',
                type: 'select',
                defaultValue: 'auto',
                options: [
                    { value: 'auto', labelKey: 'imageToPdf.orientationAuto' },
                    { value: 'portrait', labelKey: 'imageToPdf.orientationPortrait' },
                    { value: 'landscape', labelKey: 'imageToPdf.orientationLandscape' },
                ],
            },
            {
                key: 'margin',
                labelKey: 'imageToPdf.margin',
                type: 'select',
                defaultValue: '36',
                options: [
                    { value: '0', labelKey: 'imageToPdf.marginNone' },
                    { value: '18', labelKey: 'imageToPdf.marginSmall' },
                    { value: '36', labelKey: 'imageToPdf.marginMedium' },
                    { value: '72', labelKey: 'imageToPdf.marginLarge' },
                ],
            },
            {
                key: 'centerImage',
                labelKey: 'imageToPdf.centerImage',
                type: 'checkbox',
                defaultValue: true,
            },
            {
                key: 'scaleToFit',
                labelKey: 'imageToPdf.scaleToFit',
                type: 'checkbox',
                defaultValue: true,
            },
        ],
    },
    'tiff-to-pdf': {
        titleKey: 'imageToPdf.optionsTitle',
        fields: [
            {
                key: 'pageSize',
                labelKey: 'imageToPdf.pageSize',
                type: 'select',
                defaultValue: 'A4',
                options: [
                    { value: 'A4', labelKey: 'A4' },
                    { value: 'LETTER', labelKey: 'Letter' },
                    { value: 'LEGAL', labelKey: 'Legal' },
                    { value: 'A3', labelKey: 'A3' },
                    { value: 'A5', labelKey: 'A5' },
                    { value: 'FIT', labelKey: 'imageToPdf.fitToImage' },
                ],
            },
            {
                key: 'orientation',
                labelKey: 'imageToPdf.orientation',
                type: 'select',
                defaultValue: 'auto',
                options: [
                    { value: 'auto', labelKey: 'imageToPdf.orientationAuto' },
                    { value: 'portrait', labelKey: 'imageToPdf.orientationPortrait' },
                    { value: 'landscape', labelKey: 'imageToPdf.orientationLandscape' },
                ],
            },
            {
                key: 'margin',
                labelKey: 'imageToPdf.margin',
                type: 'select',
                defaultValue: '36',
                options: [
                    { value: '0', labelKey: 'imageToPdf.marginNone' },
                    { value: '18', labelKey: 'imageToPdf.marginSmall' },
                    { value: '36', labelKey: 'imageToPdf.marginMedium' },
                    { value: '72', labelKey: 'imageToPdf.marginLarge' },
                ],
            },
            {
                key: 'centerImage',
                labelKey: 'imageToPdf.centerImage',
                type: 'checkbox',
                defaultValue: true,
            },
            {
                key: 'scaleToFit',
                labelKey: 'imageToPdf.scaleToFit',
                type: 'checkbox',
                defaultValue: true,
            },
        ],
    },
    'psd-to-pdf': {
        titleKey: 'imageToPdf.optionsTitle',
        fields: [
            {
                key: 'pageSize',
                labelKey: 'imageToPdf.pageSize',
                type: 'select',
                defaultValue: 'A4',
                options: [
                    { value: 'A4', labelKey: 'A4' },
                    { value: 'LETTER', labelKey: 'Letter' },
                    { value: 'LEGAL', labelKey: 'Legal' },
                    { value: 'A3', labelKey: 'A3' },
                    { value: 'A5', labelKey: 'A5' },
                    { value: 'FIT', labelKey: 'imageToPdf.fitToImage' },
                ],
            },
            {
                key: 'orientation',
                labelKey: 'imageToPdf.orientation',
                type: 'select',
                defaultValue: 'auto',
                options: [
                    { value: 'auto', labelKey: 'imageToPdf.orientationAuto' },
                    { value: 'portrait', labelKey: 'imageToPdf.orientationPortrait' },
                    { value: 'landscape', labelKey: 'imageToPdf.orientationLandscape' },
                ],
            },
            {
                key: 'margin',
                labelKey: 'imageToPdf.margin',
                type: 'select',
                defaultValue: '36',
                options: [
                    { value: '0', labelKey: 'imageToPdf.marginNone' },
                    { value: '18', labelKey: 'imageToPdf.marginSmall' },
                    { value: '36', labelKey: 'imageToPdf.marginMedium' },
                    { value: '72', labelKey: 'imageToPdf.marginLarge' },
                ],
            },
            {
                key: 'centerImage',
                labelKey: 'imageToPdf.centerImage',
                type: 'checkbox',
                defaultValue: true,
            },
            {
                key: 'scaleToFit',
                labelKey: 'imageToPdf.scaleToFit',
                type: 'checkbox',
                defaultValue: true,
            },
        ],
    },
    'svg-to-pdf': {
        titleKey: 'imageToPdf.optionsTitle',
        fields: [
            {
                key: 'pageSize',
                labelKey: 'imageToPdf.pageSize',
                type: 'select',
                defaultValue: 'A4',
                options: [
                    { value: 'A4', labelKey: 'A4' },
                    { value: 'LETTER', labelKey: 'Letter' },
                    { value: 'LEGAL', labelKey: 'Legal' },
                    { value: 'A3', labelKey: 'A3' },
                    { value: 'A5', labelKey: 'A5' },
                    { value: 'FIT', labelKey: 'imageToPdf.fitToImage' },
                ],
            },
            {
                key: 'scale',
                labelKey: 'imageToPdf.scale',
                type: 'select',
                defaultValue: '1',
                options: [
                    { value: '0.5', labelKey: '50%' },
                    { value: '1', labelKey: '100%' },
                    { value: '1.5', labelKey: '150%' },
                    { value: '2', labelKey: '200%' },
                ],
            },
        ],
    },

    // ==================== PDF to Image variants ====================
    'pdf-to-webp': {
        titleKey: 'pdfToImage.optionsTitle',
        fields: [
            {
                key: 'quality',
                labelKey: 'pdfToImage.quality',
                type: 'range',
                defaultValue: 0.92,
                min: 0.5,
                max: 1,
                step: 0.05,
            },
            {
                key: 'scale',
                labelKey: 'pdfToImage.resolution',
                type: 'select',
                defaultValue: '2',
                options: [
                    { value: '1', labelKey: '72 DPI' },
                    { value: '2', labelKey: '144 DPI' },
                    { value: '3', labelKey: '216 DPI' },
                    { value: '4', labelKey: '288 DPI' },
                ],
            },
            {
                key: 'pageRange',
                labelKey: 'pdfToImage.pageRange',
                type: 'text',
                defaultValue: '',
                placeholderKey: 'pdfToImage.pageRangePlaceholder',
            },
        ],
    },
    'pdf-to-bmp': {
        titleKey: 'pdfToImage.optionsTitle',
        fields: [
            {
                key: 'scale',
                labelKey: 'pdfToImage.resolution',
                type: 'select',
                defaultValue: '2',
                options: [
                    { value: '1', labelKey: '72 DPI' },
                    { value: '2', labelKey: '144 DPI' },
                    { value: '3', labelKey: '216 DPI' },
                    { value: '4', labelKey: '288 DPI' },
                ],
            },
            {
                key: 'pageRange',
                labelKey: 'pdfToImage.pageRange',
                type: 'text',
                defaultValue: '',
                placeholderKey: 'pdfToImage.pageRangePlaceholder',
            },
        ],
    },
    'pdf-to-tiff': {
        titleKey: 'pdfToImage.optionsTitle',
        fields: [
            {
                key: 'scale',
                labelKey: 'pdfToImage.resolution',
                type: 'select',
                defaultValue: '2',
                options: [
                    { value: '1', labelKey: '72 DPI' },
                    { value: '2', labelKey: '144 DPI' },
                    { value: '3', labelKey: '216 DPI' },
                    { value: '4', labelKey: '288 DPI' },
                ],
            },
            {
                key: 'pageRange',
                labelKey: 'pdfToImage.pageRange',
                type: 'text',
                defaultValue: '',
                placeholderKey: 'pdfToImage.pageRangePlaceholder',
            },
        ],
    },
    'pdf-to-svg': {
        titleKey: 'pdfToImage.optionsTitle',
        fields: [
            {
                key: 'pageRange',
                labelKey: 'pdfToImage.pageRange',
                type: 'text',
                defaultValue: '',
                placeholderKey: 'pdfToImage.pageRangePlaceholder',
            },
        ],
    },

    // ==================== Organize Tools ====================
    'divide-pages': {
        titleKey: 'dividePages.optionsTitle',
        fields: [
            {
                key: 'divisionType',
                labelKey: 'dividePages.divisionType',
                type: 'select',
                defaultValue: 'vertical',
                options: [
                    { value: 'vertical', labelKey: 'dividePages.vertical' },
                    { value: 'horizontal', labelKey: 'dividePages.horizontal' },
                    { value: 'grid-2x2', labelKey: 'dividePages.grid2x2' },
                    { value: 'grid-3x3', labelKey: 'dividePages.grid3x3' },
                ],
            },
        ],
    },
    'alternate-merge': {
        titleKey: 'alternateMerge.optionsTitle',
        fields: [
            {
                key: 'reverseSecond',
                labelKey: 'alternateMerge.reverseSecond',
                type: 'checkbox',
                defaultValue: false,
            },
        ],
    },
    'n-up-pdf': {
        titleKey: 'nUpPdf.optionsTitle',
        fields: [
            {
                key: 'pagesPerSheet',
                labelKey: 'nUpPdf.pagesPerSheet',
                type: 'select',
                defaultValue: '4',
                options: [
                    { value: '2', labelKey: '2-up (2×1)' },
                    { value: '4', labelKey: '4-up (2×2)' },
                    { value: '9', labelKey: '9-up (3×3)' },
                    { value: '16', labelKey: '16-up (4×4)' },
                ],
            },
            {
                key: 'pageSize',
                labelKey: 'nUpPdf.pageSize',
                type: 'select',
                defaultValue: 'A4',
                options: [
                    { value: 'A4', labelKey: 'A4' },
                    { value: 'Letter', labelKey: 'Letter' },
                    { value: 'Legal', labelKey: 'Legal' },
                    { value: 'A3', labelKey: 'A3' },
                ],
            },
            {
                key: 'orientation',
                labelKey: 'nUpPdf.orientation',
                type: 'select',
                defaultValue: 'auto',
                options: [
                    { value: 'auto', labelKey: 'imageToPdf.orientationAuto' },
                    { value: 'portrait', labelKey: 'imageToPdf.orientationPortrait' },
                    { value: 'landscape', labelKey: 'imageToPdf.orientationLandscape' },
                ],
            },
            {
                key: 'useMargins',
                labelKey: 'nUpPdf.useMargins',
                type: 'checkbox',
                defaultValue: true,
            },
            {
                key: 'addBorder',
                labelKey: 'nUpPdf.addBorder',
                type: 'checkbox',
                defaultValue: false,
            },
        ],
    },
    'posterize-pdf': {
        titleKey: 'posterizePdf.optionsTitle',
        fields: [
            {
                key: 'columns',
                labelKey: 'posterizePdf.columns',
                type: 'number',
                defaultValue: 2,
                min: 1,
                max: 10,
            },
            {
                key: 'rows',
                labelKey: 'posterizePdf.rows',
                type: 'number',
                defaultValue: 2,
                min: 1,
                max: 10,
            },
            {
                key: 'overlap',
                labelKey: 'posterizePdf.overlap',
                type: 'number',
                defaultValue: 10,
                min: 0,
                max: 50,
            },
        ],
    },
    'grid-combine': {
        titleKey: 'gridCombine.optionsTitle',
        fields: [
            {
                key: 'gridLayout',
                labelKey: 'gridCombine.gridLayout',
                type: 'select',
                defaultValue: '2x2',
                options: [
                    { value: '1x2', labelKey: '1×2 (2 cells)' },
                    { value: '2x1', labelKey: '2×1 (2 cells)' },
                    { value: '2x2', labelKey: '2×2 (4 cells)' },
                    { value: '2x3', labelKey: '2×3 (6 cells)' },
                    { value: '3x2', labelKey: '3×2 (6 cells)' },
                    { value: '3x3', labelKey: '3×3 (9 cells)' },
                    { value: '4x4', labelKey: '4×4 (16 cells)' },
                ],
            },
            {
                key: 'pageMode',
                labelKey: 'gridCombine.pageMode',
                type: 'select',
                defaultValue: 'first-page-only',
                options: [
                    { value: 'first-page-only', labelKey: 'gridCombine.firstPageOnly' },
                    { value: 'all-pages', labelKey: 'gridCombine.allPages' },
                ],
            },
            {
                key: 'fillMode',
                labelKey: 'gridCombine.fillMode',
                type: 'select',
                defaultValue: 'leave-empty',
                options: [
                    { value: 'leave-empty', labelKey: 'gridCombine.leaveEmpty' },
                    { value: 'repeat', labelKey: 'gridCombine.repeat' },
                    { value: 'stretch-last', labelKey: 'gridCombine.stretchLast' },
                ],
            },
            {
                key: 'pageSize',
                labelKey: 'gridCombine.pageSize',
                type: 'select',
                defaultValue: 'A4',
                options: [
                    { value: 'A4', labelKey: 'A4' },
                    { value: 'Letter', labelKey: 'Letter' },
                    { value: 'Legal', labelKey: 'Legal' },
                    { value: 'A3', labelKey: 'A3' },
                ],
            },
            {
                key: 'orientation',
                labelKey: 'gridCombine.orientation',
                type: 'select',
                defaultValue: 'landscape',
                options: [
                    { value: 'landscape', labelKey: 'common.options.landscape' },
                    { value: 'portrait', labelKey: 'common.options.portrait' },
                ],
            },
            {
                key: 'spacing',
                labelKey: 'gridCombine.spacing',
                type: 'range',
                defaultValue: 10,
                min: 0,
                max: 50,
                step: 1,
            },
            {
                key: 'useMargins',
                labelKey: 'gridCombine.useMargins',
                type: 'checkbox',
                defaultValue: true,
            },
            {
                key: 'addBorder',
                labelKey: 'gridCombine.addBorder',
                type: 'checkbox',
                defaultValue: true,
            },
            {
                key: 'borderColor',
                labelKey: 'gridCombine.borderColor',
                type: 'color',
                defaultValue: '#CCCCCC',
            },
        ],
    },
    'add-blank-page': {
        titleKey: 'addBlankPage.optionsTitle',
        fields: [
            {
                key: 'position',
                labelKey: 'addBlankPage.position',
                type: 'select',
                defaultValue: 'end',
                options: [
                    { value: 'start', labelKey: 'addBlankPage.positionStart' },
                    { value: 'end', labelKey: 'addBlankPage.positionEnd' },
                    { value: 'after-each', labelKey: 'addBlankPage.positionAfterEach' },
                ],
            },
            {
                key: 'count',
                labelKey: 'addBlankPage.countLabel',
                type: 'number',
                defaultValue: 1,
                min: 1,
                max: 100,
            },
            {
                key: 'pageSize',
                labelKey: 'addBlankPage.pageSize',
                type: 'select',
                defaultValue: 'A4',
                options: [
                    { value: 'A4', labelKey: 'A4' },
                    { value: 'LETTER', labelKey: 'Letter' },
                    { value: 'LEGAL', labelKey: 'Legal' },
                    { value: 'AUTO', labelKey: 'addBlankPage.matchSource' },
                ],
            },
        ],
    },
    'edit-metadata': {
        titleKey: 'editMetadata.optionsTitle',
        fields: [
            {
                key: 'title',
                labelKey: 'editMetadata.title',
                type: 'text',
                defaultValue: '',
                placeholderKey: 'editMetadata.titlePlaceholder',
            },
            {
                key: 'author',
                labelKey: 'editMetadata.author',
                type: 'text',
                defaultValue: '',
                placeholderKey: 'editMetadata.authorPlaceholder',
            },
            {
                key: 'subject',
                labelKey: 'editMetadata.subject',
                type: 'text',
                defaultValue: '',
                placeholderKey: 'editMetadata.subjectPlaceholder',
            },
            {
                key: 'keywords',
                labelKey: 'editMetadata.keywords',
                type: 'text',
                defaultValue: '',
                placeholderKey: 'editMetadata.keywordsPlaceholder',
            },
        ],
    },
    'compare-pdfs': {
        titleKey: 'comparePdfs.optionsTitle',
        fields: [
            {
                key: 'mode',
                labelKey: 'comparePdfs.mode',
                type: 'select',
                defaultValue: 'visual',
                options: [
                    { value: 'visual', labelKey: 'comparePdfs.modeVisual' },
                    { value: 'text', labelKey: 'comparePdfs.modeText' },
                    { value: 'overlay', labelKey: 'comparePdfs.modeOverlay' },
                ],
            },
        ],
    },

    // ==================== Edit Tools ====================
    'table-of-contents': {
        titleKey: 'tableOfContents.options',
        fields: [
            {
                key: 'title',
                labelKey: 'tableOfContents.tocTitle',
                type: 'text',
                defaultValue: 'Table of Contents',
                placeholderKey: 'tableOfContents.tocTitlePlaceholder',
            },
            {
                key: 'fontSize',
                labelKey: 'tableOfContents.fontSize',
                type: 'select',
                defaultValue: '12',
                options: [
                    { value: '8', labelKey: '8pt' },
                    { value: '10', labelKey: '10pt' },
                    { value: '12', labelKey: '12pt' },
                    { value: '14', labelKey: '14pt' },
                    { value: '16', labelKey: '16pt' },
                ],
            },
            {
                key: 'fontFamily',
                labelKey: 'tableOfContents.fontFamily',
                type: 'select',
                defaultValue: 'helv',
                options: [
                    { value: 'times', labelKey: 'Times Roman' },
                    { value: 'helv', labelKey: 'Helvetica' },
                    { value: 'cour', labelKey: 'Courier' },
                ],
            },
            {
                key: 'addBookmark',
                labelKey: 'tableOfContents.addBookmark',
                type: 'checkbox',
                defaultValue: true,
            },
        ],
    },
    'background-color': {
        titleKey: 'backgroundColor.optionsTitle',
        fields: [
            {
                key: 'color',
                labelKey: 'backgroundColor.color',
                type: 'color',
                defaultValue: '#FFFFFF',
            },
            {
                key: 'applyTo',
                labelKey: 'backgroundColor.applyTo',
                type: 'select',
                defaultValue: 'all',
                options: [
                    { value: 'all', labelKey: 'rotatePdf.allPages' },
                    { value: 'odd', labelKey: 'rotatePdf.oddPages' },
                    { value: 'even', labelKey: 'rotatePdf.evenPages' },
                ],
            },
        ],
    },
    'text-color': {
        titleKey: 'textColor.optionsTitle',
        fields: [
            {
                key: 'color',
                labelKey: 'textColor.color',
                type: 'color',
                defaultValue: '#000000',
            },
        ],
    },
    'add-stamps': {
        titleKey: 'addStamps.optionsTitle',
        fields: [
            {
                key: 'stampType',
                labelKey: 'addStamps.stampType',
                type: 'select',
                defaultValue: 'approved',
                options: [
                    { value: 'approved', labelKey: 'addStamps.typeApproved' },
                    { value: 'confidential', labelKey: 'addStamps.typeConfidential' },
                    { value: 'draft', labelKey: 'addStamps.typeDraft' },
                    { value: 'final', labelKey: 'addStamps.typeFinal' },
                    { value: 'custom', labelKey: 'addStamps.typeCustom' },
                ],
            },
            {
                key: 'position',
                labelKey: 'addStamps.position',
                type: 'select',
                defaultValue: 'center',
                options: [
                    { value: 'top-left', labelKey: 'pageNumbers.posTopLeft' },
                    { value: 'top-center', labelKey: 'pageNumbers.posTopCenter' },
                    { value: 'top-right', labelKey: 'pageNumbers.posTopRight' },
                    { value: 'center', labelKey: 'addStamps.posCenter' },
                    { value: 'bottom-left', labelKey: 'pageNumbers.posBottomLeft' },
                    { value: 'bottom-center', labelKey: 'pageNumbers.posBottomCenter' },
                    { value: 'bottom-right', labelKey: 'pageNumbers.posBottomRight' },
                ],
            },
            {
                key: 'scale',
                labelKey: 'addStamps.scale',
                type: 'range',
                defaultValue: 1,
                min: 0.5,
                max: 2,
                step: 0.1,
            },
        ],
    },
    'remove-annotations': {
        titleKey: 'removeAnnotations.optionsTitle',
        fields: [
            {
                key: 'removeComments',
                labelKey: 'removeAnnotations.removeComments',
                type: 'checkbox',
                defaultValue: true,
            },
            {
                key: 'removeHighlights',
                labelKey: 'removeAnnotations.removeHighlights',
                type: 'checkbox',
                defaultValue: true,
            },
            {
                key: 'removeLinks',
                labelKey: 'removeAnnotations.removeLinks',
                type: 'checkbox',
                defaultValue: false,
            },
        ],
    },
    'remove-blank-pages': {
        titleKey: 'removeBlankPages.optionsTitle',
        fields: [
            {
                key: 'threshold',
                labelKey: 'removeBlankPages.threshold',
                type: 'range',
                defaultValue: 0.99,
                min: 0.9,
                max: 1,
                step: 0.01,
            },
        ],
    },
    'invert-colors': {
        titleKey: 'invertColors.optionsTitle',
        fields: [],
    },

    // ==================== Text/Document to PDF ====================
    'txt-to-pdf': {
        titleKey: 'txtToPdf.optionsTitle',
        fields: [
            {
                key: 'fontSize',
                labelKey: 'txtToPdf.fontSize',
                type: 'number',
                defaultValue: 12,
                min: 8,
                max: 24,
            },
            {
                key: 'fontFamily',
                labelKey: 'txtToPdf.fontFamily',
                type: 'select',
                defaultValue: 'Courier',
                options: [
                    { value: 'Courier', labelKey: 'Courier' },
                    { value: 'Helvetica', labelKey: 'Helvetica' },
                    { value: 'Times-Roman', labelKey: 'Times Roman' },
                ],
            },
            {
                key: 'pageSize',
                labelKey: 'txtToPdf.pageSize',
                type: 'select',
                defaultValue: 'A4',
                options: [
                    { value: 'A4', labelKey: 'A4' },
                    { value: 'LETTER', labelKey: 'Letter' },
                    { value: 'LEGAL', labelKey: 'Legal' },
                ],
            },
            {
                key: 'margin',
                labelKey: 'txtToPdf.margin',
                type: 'number',
                defaultValue: 50,
                min: 20,
                max: 100,
            },
        ],
    },
    'json-to-pdf': {
        titleKey: 'jsonToPdf.optionsTitle',
        fields: [
            {
                key: 'fontSize',
                labelKey: 'jsonToPdf.fontSize',
                type: 'number',
                defaultValue: 10,
                min: 8,
                max: 18,
            },
            {
                key: 'pageSize',
                labelKey: 'jsonToPdf.pageSize',
                type: 'select',
                defaultValue: 'A4',
                options: [
                    { value: 'A4', labelKey: 'A4' },
                    { value: 'LETTER', labelKey: 'Letter' },
                    { value: 'LEGAL', labelKey: 'Legal' },
                ],
            },
        ],
    },

    // ==================== Secure Tools ====================
    'sanitize-pdf': {
        titleKey: 'sanitizePdf.optionsTitle',
        fields: [
            {
                key: 'removeJavaScript',
                labelKey: 'sanitizePdf.removeJavaScript',
                type: 'checkbox',
                defaultValue: true,
            },
            {
                key: 'removeAttachments',
                labelKey: 'sanitizePdf.removeAttachments',
                type: 'checkbox',
                defaultValue: true,
            },
            {
                key: 'removeLinks',
                labelKey: 'sanitizePdf.removeLinks',
                type: 'checkbox',
                defaultValue: true,
            },
            {
                key: 'flattenForms',
                labelKey: 'sanitizePdf.flattenForms',
                type: 'checkbox',
                defaultValue: true,
            },
            {
                key: 'removeMetadata',
                labelKey: 'sanitizePdf.removeMetadata',
                type: 'checkbox',
                defaultValue: true,
            },
            {
                key: 'removeAnnotations',
                labelKey: 'sanitizePdf.removeAnnotations',
                type: 'checkbox',
                defaultValue: false,
            },
        ],
    },
    'change-permissions': {
        titleKey: 'changePermissions.optionsTitle',
        fields: [
            {
                key: 'allowPrinting',
                labelKey: 'changePermissions.allowPrinting',
                type: 'checkbox',
                defaultValue: true,
            },
            {
                key: 'allowCopying',
                labelKey: 'changePermissions.allowCopying',
                type: 'checkbox',
                defaultValue: false,
            },
            {
                key: 'allowModifying',
                labelKey: 'changePermissions.allowModifying',
                type: 'checkbox',
                defaultValue: false,
            },
            {
                key: 'allowAnnotating',
                labelKey: 'changePermissions.allowAnnotating',
                type: 'checkbox',
                defaultValue: true,
            },
        ],
    },
    'remove-metadata': {
        titleKey: 'removeMetadata.optionsTitle',
        fields: [],
    },

    // ==================== Optimize Tools ====================
    'fix-page-size': {
        titleKey: 'fixPageSize.optionsTitle',
        fields: [
            {
                key: 'targetSize',
                labelKey: 'fixPageSize.targetSize',
                type: 'select',
                defaultValue: 'A4',
                options: [
                    { value: 'A4', labelKey: 'A4' },
                    { value: 'LETTER', labelKey: 'Letter' },
                    { value: 'LEGAL', labelKey: 'Legal' },
                    { value: 'A3', labelKey: 'A3' },
                    { value: 'A5', labelKey: 'A5' },
                    { value: 'ENVELOPE-10', labelKey: '#10 Envelope' },
                ],
            },
        ],
    },
    'remove-restrictions': {
        titleKey: 'removeRestrictions.optionsTitle',
        fields: [
            {
                key: 'password',
                labelKey: 'removeRestrictions.password',
                type: 'text',
                defaultValue: '',
            },
        ],
    },
    'repair-pdf': {
        titleKey: 'repairPdf.optionsTitle',
        fields: [],
    },

    // ==================== Other Convert Tools ====================
    'pdf-to-json': {
        titleKey: 'pdfToJson.optionsTitle',
        fields: [
            {
                key: 'extractText',
                labelKey: 'pdfToJson.extractText',
                type: 'checkbox',
                defaultValue: true,
            },
            {
                key: 'extractMetadata',
                labelKey: 'pdfToJson.extractMetadata',
                type: 'checkbox',
                defaultValue: true,
            },
        ],
    },
    'extract-images': {
        titleKey: 'extractImages.optionsTitle',
        fields: [
            {
                key: 'format',
                labelKey: 'extractImages.format',
                type: 'select',
                defaultValue: 'png',
                options: [
                    { value: 'png', labelKey: 'PNG' },
                    { value: 'jpg', labelKey: 'JPEG' },
                    { value: 'webp', labelKey: 'WebP' },
                ],
            },
            {
                key: 'minSize',
                labelKey: 'extractImages.minSize',
                type: 'number',
                defaultValue: 100,
                min: 0,
                max: 10000,
            },
        ],
    },

    // ==================== No-param tools placeholders ====================
    'pdf-multi-tool': {
        titleKey: 'pdfMultiTool.optionsTitle',
        fields: [],
    },
    'organize-pdf': {
        titleKey: 'organizePdf.optionsTitle',
        fields: [],
    },
    'reverse-pages': {
        titleKey: 'reversePages.optionsTitle',
        fields: [],
    },
    'view-metadata': {
        titleKey: 'viewMetadata.optionsTitle',
        fields: [],
    },
    'pdf-to-zip': {
        titleKey: 'pdfToZip.optionsTitle',
        fields: [
            {
                key: 'filename',
                labelKey: 'pdfToZip.filename',
                type: 'text',
                defaultValue: 'pdfs.zip',
                placeholderKey: 'pdfToZip.filenamePlaceholder',
            },
            {
                key: 'compressionLevel',
                labelKey: 'pdfToZip.compressionLevel',
                type: 'select',
                defaultValue: '6',
                options: [
                    { value: '1', labelKey: 'pdfToZip.compressionFast' },
                    { value: '6', labelKey: 'pdfToZip.compressionNormal' },
                    { value: '9', labelKey: 'pdfToZip.compressionMax' },
                ],
            },
        ],
    },
    'edit-pdf': {
        titleKey: 'editPdf.optionsTitle',
        fields: [],
    },
    'sign-pdf': {
        titleKey: 'signPdf.optionsTitle',
        fields: [],
    },
    'bookmark': {
        titleKey: 'bookmark.optionsTitle',
        fields: [],
    },
    'form-filler': {
        titleKey: 'formFiller.optionsTitle',
        fields: [],
    },
    'form-creator': {
        titleKey: 'formCreator.optionsTitle',
        fields: [],
    },
    'add-attachments': {
        titleKey: 'addAttachments.optionsTitle',
        fields: [],
    },
    'extract-attachments': {
        titleKey: 'extractAttachments.optionsTitle',
        fields: [],
    },
    'edit-attachments': {
        titleKey: 'editAttachments.optionsTitle',
        fields: [],
    },
    'page-dimensions': {
        titleKey: 'pageDimensions.optionsTitle',
        fields: [],
    },
    'xps-to-pdf': {
        titleKey: 'xpsToPdf.optionsTitle',
        fields: [],
    },
    'rtf-to-pdf': {
        titleKey: 'rtfToPdf.optionsTitle',
        fields: [],
    },
    'mobi-to-pdf': {
        titleKey: 'mobiToPdf.optionsTitle',
        fields: [],
    },
    'fb2-to-pdf': {
        titleKey: 'fb2ToPdf.optionsTitle',
        fields: [],
    },
    'rotate-custom': {
        titleKey: 'rotateCustom.optionsTitle',
        fields: [
            {
                key: 'batchAngle',
                labelKey: 'rotateCustom.batchAngle',
                type: 'number',
                defaultValue: 0,
                min: -360,
                max: 360,
            },
        ],
    },
    'combine-single-page': {
        titleKey: 'combineSinglePage.optionsTitle',
        fields: [
            {
                key: 'orientation',
                labelKey: 'combineSinglePage.orientation',
                type: 'select',
                defaultValue: 'vertical',
                options: [
                    { value: 'vertical', labelKey: 'combineSinglePage.vertical' },
                    { value: 'horizontal', labelKey: 'combineSinglePage.horizontal' },
                ],
            },
            {
                key: 'spacing',
                labelKey: 'combineSinglePage.spacing',
                type: 'number',
                defaultValue: 0,
                min: 0,
                max: 200,
            },
            {
                key: 'backgroundColor',
                labelKey: 'combineSinglePage.backgroundColor',
                type: 'color',
                defaultValue: '#FFFFFF',
            },
            {
                key: 'addSeparator',
                labelKey: 'combineSinglePage.addSeparator',
                type: 'checkbox',
                defaultValue: false,
            },
        ],
    },

    // ==================== Missing tools with settings ====================
    'deskew-pdf': {
        titleKey: 'deskewPdf.optionsTitle',
        fields: [
            {
                key: 'threshold',
                labelKey: 'deskewPdf.thresholdLabel',
                type: 'number',
                defaultValue: 10,
                min: 1,
                max: 45,
            },
            {
                key: 'dpi',
                labelKey: 'deskewPdf.dpiLabel',
                type: 'select',
                defaultValue: '150',
                options: [
                    { value: '72', labelKey: '72 DPI' },
                    { value: '150', labelKey: '150 DPI' },
                    { value: '300', labelKey: '300 DPI' },
                ],
            },
        ],
    },
    'email-to-pdf': {
        titleKey: 'emailToPdf.optionsTitle',
        fields: [
            {
                key: 'pageSize',
                labelKey: 'emailToPdf.pageSizeLabel',
                type: 'select',
                defaultValue: 'a4',
                options: [
                    { value: 'a4', labelKey: 'A4' },
                    { value: 'letter', labelKey: 'Letter' },
                    { value: 'legal', labelKey: 'Legal' },
                ],
            },
            {
                key: 'includeCcBcc',
                labelKey: 'emailToPdf.includeCcBccLabel',
                type: 'checkbox',
                defaultValue: true,
            },
            {
                key: 'embedAttachments',
                labelKey: 'emailToPdf.embedAttachments',
                type: 'checkbox',
                defaultValue: true,
            },
            {
                key: 'includeAttachmentsList',
                labelKey: 'emailToPdf.includeAttachmentsLabel',
                type: 'checkbox',
                defaultValue: true,
            },
        ],
    },
    'font-to-outline': {
        titleKey: 'fontToOutline.optionsTitle',
        fields: [
            {
                key: 'dpi',
                labelKey: 'fontToOutline.dpiLabel',
                type: 'select',
                defaultValue: '300',
                options: [
                    { value: '150', labelKey: '150 DPI' },
                    { value: '300', labelKey: '300 DPI' },
                    { value: '600', labelKey: '600 DPI' },
                ],
            },
            {
                key: 'preserveSelectableText',
                labelKey: 'fontToOutline.preserveSelectableText',
                type: 'checkbox',
                defaultValue: false,
            },
            {
                key: 'pageRange',
                labelKey: 'fontToOutline.pageRange',
                type: 'text',
                defaultValue: '',
                placeholderKey: 'extractPages.pageRangePlaceholder',
            },
        ],
    },
    'pdf-booklet': {
        titleKey: 'pdfBooklet.optionsTitle',
        fields: [
            {
                key: 'pageSize',
                labelKey: 'pdfBooklet.paperSizeLabel',
                type: 'select',
                defaultValue: 'A4',
                options: [
                    { value: 'A4', labelKey: 'A4' },
                    { value: 'LETTER', labelKey: 'Letter' },
                    { value: 'LEGAL', labelKey: 'Legal' },
                ],
            },
            {
                key: 'bindingEdge',
                labelKey: 'pdfBooklet.bindingEdge',
                type: 'select',
                defaultValue: 'left',
                options: [
                    { value: 'left', labelKey: 'pdfBooklet.bindingLeft' },
                    { value: 'right', labelKey: 'pdfBooklet.bindingRight' },
                ],
            },
        ],
    },
    'rasterize-pdf': {
        titleKey: 'rasterizePdf.optionsTitle',
        fields: [
            {
                key: 'dpi',
                labelKey: 'rasterizePdf.dpiLabel',
                type: 'select',
                defaultValue: '150',
                options: [
                    { value: '72', labelKey: '72 DPI' },
                    { value: '150', labelKey: '150 DPI' },
                    { value: '300', labelKey: '300 DPI' },
                    { value: '600', labelKey: '600 DPI' },
                ],
            },
            {
                key: 'imageFormat',
                labelKey: 'rasterizePdf.formatLabel',
                type: 'select',
                defaultValue: 'jpeg',
                options: [
                    { value: 'jpeg', labelKey: 'JPEG' },
                    { value: 'png', labelKey: 'PNG' },
                ],
            },
        ],
    },
    'markdown-to-pdf': {
        titleKey: 'markdownToPdf.optionsTitle',
        fields: [
            {
                key: 'fontSize',
                labelKey: 'markdownToPdf.fontSize',
                type: 'number',
                defaultValue: 12,
                min: 8,
                max: 24,
            },
            {
                key: 'pageSize',
                labelKey: 'markdownToPdf.pageSizeLabel',
                type: 'select',
                defaultValue: 'A4',
                options: [
                    { value: 'A4', labelKey: 'A4' },
                    { value: 'LETTER', labelKey: 'Letter' },
                    { value: 'LEGAL', labelKey: 'Legal' },
                ],
            },
        ],
    },
    'extract-tables': {
        titleKey: 'extractTables.optionsTitle',
        fields: [
            {
                key: 'outputFormat',
                labelKey: 'extractTables.formatLabel',
                type: 'select',
                defaultValue: 'csv',
                options: [
                    { value: 'csv', labelKey: 'CSV' },
                    { value: 'json', labelKey: 'JSON' },
                    { value: 'excel', labelKey: 'Excel' },
                ],
            },
        ],
    },
    'pdf-to-pdfa': {
        titleKey: 'pdfToPdfa.optionsTitle',
        fields: [
            {
                key: 'conformanceLevel',
                labelKey: 'pdfToPdfa.levelLabel',
                type: 'select',
                defaultValue: 'A-2b',
                options: [
                    { value: 'A-1b', labelKey: 'PDF/A-1b' },
                    { value: 'A-2b', labelKey: 'PDF/A-2b' },
                    { value: 'A-3b', labelKey: 'PDF/A-3b' },
                ],
            },
        ],
    },
    'cbz-to-pdf': {
        titleKey: 'cbzToPdf.optionsTitle',
        fields: [
            {
                key: 'pageSize',
                labelKey: 'cbzToPdf.pageSizeLabel',
                type: 'select',
                defaultValue: 'A4',
                options: [
                    { value: 'A4', labelKey: 'A4' },
                    { value: 'LETTER', labelKey: 'Letter' },
                    { value: 'LEGAL', labelKey: 'Legal' },
                ],
            },
            {
                key: 'fitToPage',
                labelKey: 'cbzToPdf.preserveAspectLabel',
                type: 'checkbox',
                defaultValue: true,
            },
        ],
    },
    'djvu-to-pdf': {
        titleKey: 'djvuToPdf.optionsTitle',
        fields: [
            {
                key: 'dpi',
                labelKey: 'djvuToPdf.dpiLabel',
                type: 'select',
                defaultValue: '150',
                options: [
                    { value: '100', labelKey: '100 DPI' },
                    { value: '150', labelKey: '150 DPI' },
                    { value: '200', labelKey: '200 DPI' },
                    { value: '300', labelKey: '300 DPI' },
                ],
            },
            {
                key: 'quality',
                labelKey: 'djvuToPdf.qualityLabel',
                type: 'range',
                defaultValue: 0.92,
                min: 0.5,
                max: 1,
                step: 0.05,
            },
        ],
    },

    // ==================== Output Nodes ====================
    'download-pdf': {
        titleKey: 'workflow.downloadPdf',
        fields: [
            {
                key: 'filename',
                labelKey: 'workflow.filenameLabel',
                type: 'text',
                defaultValue: 'output.pdf',
            },
        ],
    },
    'download-zip': {
        titleKey: 'workflow.downloadZip',
        fields: [
            {
                key: 'filename',
                labelKey: 'workflow.filenameLabel',
                type: 'text',
                defaultValue: 'output.zip',
            },
        ],
    },
});

/**
 * Node Settings Panel Component
 */
export function NodeSettingsPanel({ node, onClose, onUpdateSettings }: NodeSettingsPanelProps) {
    const t = useTranslations('tools');
    const tWorkflow = useTranslations('workflow');
    const tCommon = useTranslations('common');
    const tRoot = useTranslations(); // Root level translations for tool-specific settings
    const messages = useMessages(); // Get raw messages for nested key lookup
    const locale = useLocale() as Locale;

    const [settings, setSettings] = useState<Record<string, unknown>>({});

    const toolSettingsConfigs = getToolSettingsConfig();

    const config = node?.data.toolId
        ? toolSettingsConfigs[node.data.toolId]
        : null;

    const isConditionGateway = node?.data.toolId === 'condition-gateway';

    const getToolTitle = (): string => {
        if (!node) return '';
        if (node.data.toolId === 'condition-gateway') {
            return locale === 'zh' ? '条件分支配置' : 'Condition Gateway';
        }
        if (node.data.toolId === 'download-pdf') {
            return tWorkflow('downloadPdf') || (locale === 'zh' ? '下载 PDF' : 'Download PDF');
        }
        if (node.data.toolId === 'download-zip') {
            return tWorkflow('downloadZip') || (locale === 'zh' ? '打包 ZIP 下载' : 'Download ZIP');
        }
        const content = getToolContent(locale, node.data.toolId);
        return content?.title || node.data.label;
    };

    const getTranslation = (key: string, fallback?: string): string => {
        // If the key doesn't contain a dot, it might be a literal value (like 'A4', 'PNG', 'Letter')
        // These are not translation keys, just direct values to display
        if (!key.includes('.')) {
            // Return the key directly as it's likely a literal value
            return fallback || key;
        }

        // Handle common namespace keys
        if (key.startsWith('common.')) {
            const commonKey = key.replace('common.', '');
            try {
                const result = tCommon(commonKey);
                if (result && typeof result === 'string' && !result.startsWith('MISSING') && result !== commonKey) {
                    return result;
                }
            } catch {
                // Continue
            }
        }

        // Try tools namespace with explicit path navigation for nested keys
        try {
            // For keys like "watermark.optionsTitle", try to access nested structure
            const parts = key.split('.');
            if (parts.length > 1) {
                // Try to get the raw object and navigate using messages from useMessages()
                try {
                    // Access the tools namespace from messages
                    const toolsMessages = messages?.tools as Record<string, unknown> | undefined;
                    if (toolsMessages && typeof toolsMessages === 'object') {
                        let value: unknown = toolsMessages;
                        for (const part of parts) {
                            value = (value as Record<string, unknown>)?.[part];
                        }
                        if (value && typeof value === 'string') {
                            return value;
                        }
                    }
                } catch {
                    // Continue to simple lookup
                }
            }

            // Try simple lookup - with existence check to avoid console errors
            try {
                // Check if the key exists in the current namespace (tools)
                const toolsMessages = messages?.tools as Record<string, unknown> | undefined;
                let exists = false;
                if (toolsMessages && typeof toolsMessages === 'object') {
                    let current: any = toolsMessages;
                    const parts = key.split('.');
                    for (const part of parts) {
                        if (current && typeof current === 'object' && part in current) {
                            current = current[part];
                            exists = true;
                        } else {
                            exists = false;
                            break;
                        }
                    }
                }

                if (exists) {
                    const result = t(key);
                    if (result && typeof result === 'string' && !result.startsWith('MISSING') && result !== key) {
                        return result;
                    }
                }
            } catch {
                // Continue
            }
        } catch {
            // Continue
        }

        // Try root namespace for tools not in tools namespace (like compressPdf, mergePdf)
        try {
            const result = tRoot(key);
            if (result && typeof result === 'string' && !result.startsWith('MISSING') && result !== key) {
                return result;
            }
        } catch {
            // Continue to fallback
        }

        // Return fallback or extract last part of key as readable label
        const extracted = key.split('.').pop()?.replace(/([A-Z])/g, ' $1').trim() || key;
        return fallback || extracted;
    };

    useEffect(() => {
        if (node) {
            if (node.data.toolId === 'condition-gateway') {
                setSettings({
                    conditionType: node.data.settings?.conditionType ?? 'file-count',
                    operator: node.data.settings?.operator ?? 'greater-than',
                    value: node.data.settings?.value ?? 1,
                    sizeUnit: node.data.settings?.sizeUnit ?? 'MB',
                });
            } else if (config) {
                const initialSettings: Record<string, unknown> = {};
                config.fields.forEach(field => {
                    initialSettings[field.key] = node.data.settings?.[field.key] ?? field.defaultValue;
                });
                setSettings(initialSettings);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [node?.id, node?.data.toolId]);

    const handleFieldChange = (key: string, value: unknown) => {
        setSettings(prev => {
            return { ...prev, [key]: value };
        });
        if (node) {
            const nextSettings = { ...settings, [key]: value };
            setTimeout(() => {
                onUpdateSettings(node.id, nextSettings);
            }, 0);
        }
    };

    const handleApply = () => {
        if (node) {
            onUpdateSettings(node.id, settings);
        }
        onClose();
    };

    const handleReset = () => {
        let defaultSettings: Record<string, unknown> = {};
        if (node?.data.toolId === 'condition-gateway') {
            defaultSettings = {
                conditionType: 'file-count',
                operator: 'greater-than',
                value: 1,
                sizeUnit: 'MB',
            };
        } else if (config) {
            config.fields.forEach(field => {
                defaultSettings[field.key] = field.defaultValue;
            });
        }
        setSettings(defaultSettings);
        if (node) {
            setTimeout(() => {
                onUpdateSettings(node.id, defaultSettings);
            }, 0);
        }
    };

    if (!node) return null;

    return (
        <div className="fixed right-0 top-0 h-full w-80 bg-[hsl(var(--color-background))] border-l border-[hsl(var(--color-border))] shadow-xl z-[100] flex flex-col animate-in slide-in-from-right duration-200">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-[hsl(var(--color-border))] bg-[hsl(var(--color-muted)/0.3)]">
                <div className="flex items-center gap-2">
                    <Settings className="w-5 h-5 text-[hsl(var(--color-primary))]" />
                    <h3 className="font-medium text-[hsl(var(--color-foreground))] truncate max-w-[180px]">
                        {getToolTitle()}
                    </h3>
                </div>
                <button
                    onClick={onClose}
                    className="p-1.5 rounded-md hover:bg-[hsl(var(--color-muted))] transition-colors"
                >
                    <X className="w-4 h-4 text-[hsl(var(--color-muted-foreground))]" />
                </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-4">
                {isConditionGateway ? (
                    <div className="space-y-4">
                        <div className="p-3 rounded-lg bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 text-xs text-indigo-900 dark:text-indigo-200 leading-relaxed">
                            {locale === 'zh'
                                ? '根据流经此节点的文件特征进行规则判定。满足条件的文件流向 True 端口，不满足的文件流向 False 端口。'
                                : 'Evaluates files dynamically based on your rule. Matching files flow to the True port, otherwise to False.'}
                        </div>

                        {/* Condition Type */}
                        <div className="space-y-1.5">
                            <label className="block text-sm font-medium text-[hsl(var(--color-foreground))]">
                                {locale === 'zh' ? '判断维度 (Type)' : 'Dimension'}
                            </label>
                            <select
                                value={(settings.conditionType as string) || 'file-count'}
                                onChange={(e) => {
                                    const nextType = e.target.value;
                                    setSettings(prev => ({
                                        ...prev,
                                        conditionType: nextType,
                                        operator: nextType === 'file-format' ? 'equals' : 'greater-than',
                                        value: nextType === 'file-format' ? 'pdf' : (nextType === 'file-size' ? 10 : 1),
                                    }));
                                }}
                                className="w-full px-3 py-2 text-sm rounded-md border border-[hsl(var(--color-border))] bg-[hsl(var(--color-background))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--color-primary))]"
                            >
                                <option value="file-count">{locale === 'zh' ? '文件数量 (File Count)' : 'File Count'}</option>
                                <option value="file-size">{locale === 'zh' ? '总文件体积 (File Size)' : 'Total File Size'}</option>
                                <option value="file-format">{locale === 'zh' ? '文件格式 (File Format / Ext)' : 'File Format / Ext'}</option>
                            </select>
                        </div>

                        {/* Operator */}
                        <div className="space-y-1.5">
                            <label className="block text-sm font-medium text-[hsl(var(--color-foreground))]">
                                {locale === 'zh' ? '比较规则 (Operator)' : 'Operator'}
                            </label>
                            <select
                                value={(settings.operator as string) || (settings.conditionType === 'file-format' ? 'equals' : 'greater-than')}
                                onChange={(e) => handleFieldChange('operator', e.target.value)}
                                className="w-full px-3 py-2 text-sm rounded-md border border-[hsl(var(--color-border))] bg-[hsl(var(--color-background))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--color-primary))]"
                            >
                                {settings.conditionType === 'file-format' ? (
                                    <>
                                        <option value="equals">{locale === 'zh' ? '等于 (Equals)' : 'Equals'}</option>
                                        <option value="not-equals">{locale === 'zh' ? '不等于 (Not Equals)' : 'Not Equals'}</option>
                                        <option value="contains">{locale === 'zh' ? '包含 (Contains)' : 'Contains'}</option>
                                        <option value="matches">{locale === 'zh' ? '正则匹配 (Regex Matches)' : 'Regex Matches'}</option>
                                    </>
                                ) : (
                                    <>
                                        <option value="greater-than">{locale === 'zh' ? '> 大于 (Greater Than)' : '> Greater Than'}</option>
                                        <option value="less-than">{locale === 'zh' ? '< 小于 (Less Than)' : '< Less Than'}</option>
                                        <option value="greater-or-equal">{locale === 'zh' ? '≥ 大于等于 (Greater or Equal)' : '≥ Greater or Equal'}</option>
                                        <option value="less-or-equal">{locale === 'zh' ? '≤ 小于等于 (Less or Equal)' : '≤ Less or Equal'}</option>
                                        <option value="equals">{locale === 'zh' ? '= 等于 (Equals)' : '= Equals'}</option>
                                        <option value="not-equals">{locale === 'zh' ? '≠ 不等于 (Not Equals)' : '≠ Not Equals'}</option>
                                    </>
                                )}
                            </select>
                        </div>

                        {/* Value Input */}
                        <div className="space-y-1.5">
                            <label className="block text-sm font-medium text-[hsl(var(--color-foreground))]">
                                {locale === 'zh' ? '目标阈值 (Target Value)' : 'Target Value'}
                            </label>

                            {settings.conditionType === 'file-count' && (
                                <input
                                    type="number"
                                    min={0}
                                    step={1}
                                    value={Number(settings.value ?? 1)}
                                    onChange={(e) => handleFieldChange('value', Number(e.target.value))}
                                    className="w-full px-3 py-2 text-sm rounded-md border border-[hsl(var(--color-border))] bg-[hsl(var(--color-background))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--color-primary))]"
                                />
                            )}

                            {settings.conditionType === 'file-size' && (
                                <div className="flex gap-2">
                                    <input
                                        type="number"
                                        min={0}
                                        step={0.1}
                                        value={Number(settings.value ?? 10)}
                                        onChange={(e) => handleFieldChange('value', Number(e.target.value))}
                                        className="flex-1 px-3 py-2 text-sm rounded-md border border-[hsl(var(--color-border))] bg-[hsl(var(--color-background))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--color-primary))]"
                                    />
                                    <select
                                        value={(settings.sizeUnit as string) || 'MB'}
                                        onChange={(e) => handleFieldChange('sizeUnit', e.target.value)}
                                        className="w-24 px-2 py-2 text-sm rounded-md border border-[hsl(var(--color-border))] bg-[hsl(var(--color-background))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--color-primary))]"
                                    >
                                        <option value="MB">MB</option>
                                        <option value="KB">KB</option>
                                        <option value="Bytes">Bytes</option>
                                    </select>
                                </div>
                            )}

                            {settings.conditionType === 'file-format' && (
                                <input
                                    type="text"
                                    placeholder="例如: pdf, docx, png, jpg"
                                    value={(settings.value as string) || ''}
                                    onChange={(e) => handleFieldChange('value', e.target.value)}
                                    className="w-full px-3 py-2 text-sm rounded-md border border-[hsl(var(--color-border))] bg-[hsl(var(--color-background))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--color-primary))]"
                                />
                            )}
                        </div>

                        {/* Branch Route Explanation */}
                        <div className="mt-4 p-3 rounded-lg border border-[hsl(var(--color-border))] bg-[hsl(var(--color-muted)/0.3)] space-y-2 text-xs">
                            <p className="font-medium text-[hsl(var(--color-foreground))]">
                                {locale === 'zh' ? '分支流向指引:' : 'Routing Guide:'}
                            </p>
                            <div className="flex items-start gap-1.5 text-emerald-700 dark:text-emerald-300">
                                <span className="font-bold">✓ True:</span>
                                <span>{locale === 'zh' ? '满足条件时流入此端口下游节点' : 'Files proceed here if condition is met'}</span>
                            </div>
                            <div className="flex items-start gap-1.5 text-amber-700 dark:text-amber-300">
                                <span className="font-bold">✗ False:</span>
                                <span>{locale === 'zh' ? '不满足条件时流入此端口下游节点' : 'Files proceed here if condition is not met'}</span>
                            </div>
                            <p className="text-[10px] text-[hsl(var(--color-muted-foreground))] pt-1 border-t border-[hsl(var(--color-border)/0.5)]">
                                {locale === 'zh'
                                    ? '* 执行时未命中的下游分支将被自动跳过并置灰，无需担心额外开销。'
                                    : '* Inactive branch nodes will be skipped during execution.'}
                            </p>
                        </div>
                    </div>
                ) : !config || config.fields.length === 0 ? (
                    <div className="text-center py-8">
                        <Settings className="w-12 h-12 mx-auto text-[hsl(var(--color-muted-foreground))] opacity-50" />
                        <p className="mt-3 text-sm text-[hsl(var(--color-muted-foreground))]">
                            {tWorkflow('noSettings') || 'No configurable settings for this tool'}
                        </p>
                    </div>
                ) : (
                    <div className="space-y-4">
                        <p className="text-sm text-[hsl(var(--color-muted-foreground))]">
                            {getTranslation(config.titleKey, 'Settings')}
                        </p>

                        {config.fields.map(field => {
                            // Check showWhen condition with defaultValue fallback
                            if (field.showWhen) {
                                const depField = config.fields.find(f => f.key === field.showWhen!.field);
                                const depValue = settings[field.showWhen.field] !== undefined
                                    ? settings[field.showWhen.field]
                                    : depField?.defaultValue;
                                if (depValue !== field.showWhen.value) return null;
                            }

                            return (
                            <div key={field.key} className="space-y-1.5">
                                <label className="block text-sm font-medium text-[hsl(var(--color-foreground))]">
                                    {getTranslation(field.labelKey)}
                                </label>

                                {field.descriptionKey && (
                                    <p className="text-xs text-[hsl(var(--color-muted-foreground))]">
                                        {getTranslation(field.descriptionKey)}
                                    </p>
                                )}

                                {field.type === 'text' && (
                                    <>
                                    <input
                                        type="text"
                                        value={(settings[field.key] as string) || ''}
                                        onChange={(e) => handleFieldChange(field.key, e.target.value)}
                                        placeholder={field.placeholderKey ? getTranslation(field.placeholderKey) : undefined}
                                        className="w-full px-3 py-2 text-sm rounded-md border border-[hsl(var(--color-border))] bg-[hsl(var(--color-background))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--color-primary))] placeholder:text-[hsl(var(--color-muted-foreground))]"
                                    />
                                    {field.key === 'filename' && (
                                        <div className="pt-1">
                                            <div className="flex items-center gap-1 text-[11px] text-[hsl(var(--color-muted-foreground))] mb-1">
                                                <span>{locale === 'zh' ? '点击插入动态变量:' : 'Insert variable:'}</span>
                                            </div>
                                            <div className="flex flex-wrap gap-1">
                                                {[
                                                    { token: '{filename}', label: '{filename}', desc: locale === 'zh' ? '原文件名' : 'Original file name' },
                                                    { token: '{date}', label: '{date}', desc: locale === 'zh' ? '当前日期 (YYYY-MM-DD)' : 'Date' },
                                                    { token: '{time}', label: '{time}', desc: locale === 'zh' ? '当前时间' : 'Time' },
                                                    { token: '{index}', label: '{index}', desc: locale === 'zh' ? '文件序号' : 'File Index' },
                                                    { token: '{total}', label: '{total}', desc: locale === 'zh' ? '文件总数' : 'Total Count' },
                                                ].map(({ token, desc }) => (
                                                    <button
                                                        key={token}
                                                        type="button"
                                                        title={desc}
                                                        onClick={() => {
                                                            const current = (settings[field.key] as string) || '';
                                                            const extMatch = current.match(/(\.[a-zA-Z0-9]+)$/);
                                                            let next: string;
                                                            if (extMatch) {
                                                                const ext = extMatch[1];
                                                                const base = current.slice(0, -ext.length);
                                                                next = `${base}_${token}${ext}`;
                                                            } else {
                                                                next = `${current}_${token}`;
                                                            }
                                                            handleFieldChange(field.key, next);
                                                        }}
                                                        className="px-1.5 py-0.5 text-[10px] font-mono rounded bg-[hsl(var(--color-muted))] hover:bg-[hsl(var(--color-primary)/0.15)] text-[hsl(var(--color-foreground))] hover:text-[hsl(var(--color-primary))] border border-[hsl(var(--color-border))] transition-colors"
                                                    >
                                                        + {token}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                    </>
                                )}

                                {field.type === 'number' && (
                                    <input
                                        type="number"
                                        value={(settings[field.key] as number) ?? field.defaultValue}
                                        onChange={(e) => handleFieldChange(field.key, Number(e.target.value))}
                                        min={field.min}
                                        max={field.max}
                                        placeholder={field.placeholderKey ? getTranslation(field.placeholderKey) : undefined}
                                        className="w-full px-3 py-2 text-sm rounded-md border border-[hsl(var(--color-border))] bg-[hsl(var(--color-background))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--color-primary))] placeholder:text-[hsl(var(--color-muted-foreground))]"
                                    />
                                )}

                                {field.type === 'select' && (
                                    <>
                                    {field.key === 'position' && field.options?.some(o => o.value === 'top-left' || o.value === 'center') && (
                                        <div className="mb-2 p-2 bg-[hsl(var(--color-muted)/0.4)] rounded-lg border border-[hsl(var(--color-border))]">
                                            <div className="text-[11px] text-[hsl(var(--color-muted-foreground))] mb-1.5 font-medium text-center">
                                                {locale === 'zh' ? '九宫格快速定位' : 'Position Grid'}
                                            </div>
                                            <div className="grid grid-cols-3 gap-1.5 max-w-[150px] mx-auto">
                                                {POSITION_GRID_ITEMS.map(pos => {
                                                    const isAvailable = field.options?.some(o => o.value === pos.value);
                                                    const isSelected = (settings[field.key] as string) === pos.value;
                                                    if (!isAvailable) {
                                                        return (
                                                            <div
                                                                key={pos.value}
                                                                className="h-7 rounded border border-dashed border-[hsl(var(--color-border)/0.5)] bg-[hsl(var(--color-muted)/0.2)] opacity-30 cursor-not-allowed"
                                                            />
                                                        );
                                                    }
                                                    return (
                                                        <button
                                                            key={pos.value}
                                                            type="button"
                                                            title={getTranslation(field.options?.find(o => o.value === pos.value)?.labelKey || pos.title)}
                                                            onClick={() => handleFieldChange(field.key, pos.value)}
                                                            className={`h-7 text-xs font-semibold rounded border transition-all flex items-center justify-center ${
                                                                isSelected
                                                                    ? 'bg-[hsl(var(--color-primary))] text-[hsl(var(--color-primary-foreground))] border-[hsl(var(--color-primary))] shadow-sm scale-105'
                                                                    : 'bg-[hsl(var(--color-background))] text-[hsl(var(--color-foreground))] border-[hsl(var(--color-border))] hover:border-[hsl(var(--color-primary)/0.6)] hover:bg-[hsl(var(--color-primary)/0.05)]'
                                                            }`}
                                                        >
                                                            {pos.label}
                                                        </button>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    )}
                                    <select
                                        value={(settings[field.key] as string) || ''}
                                        onChange={(e) => handleFieldChange(field.key, e.target.value)}
                                        className="w-full px-3 py-2 text-sm rounded-md border border-[hsl(var(--color-border))] bg-[hsl(var(--color-background))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--color-primary))]"
                                    >
                                        {field.options?.map(opt => (
                                            <option key={opt.value} value={opt.value}>
                                                {getTranslation(opt.labelKey, opt.labelKey)}
                                            </option>
                                        ))}
                                    </select>
                                    {(() => {
                                        const selectedOpt = field.options?.find(o => o.value === (settings[field.key] as string));
                                        return selectedOpt?.descriptionKey ? (
                                            <p className="text-xs text-[hsl(var(--color-muted-foreground))] mt-1">
                                                {getTranslation(selectedOpt.descriptionKey)}
                                            </p>
                                        ) : null;
                                    })()}
                                    </>
                                )}

                                {field.type === 'checkbox' && (
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={(settings[field.key] as boolean) || false}
                                            onChange={(e) => handleFieldChange(field.key, e.target.checked)}
                                            className="w-4 h-4 rounded border-[hsl(var(--color-border))] text-[hsl(var(--color-primary))] focus:ring-[hsl(var(--color-primary))]"
                                        />
                                    </label>
                                )}

                                {field.type === 'range' && (
                                    <div className="space-y-1">
                                        <input
                                            type="range"
                                            value={(settings[field.key] as number) ?? field.defaultValue}
                                            onChange={(e) => handleFieldChange(field.key, Number(e.target.value))}
                                            min={field.min}
                                            max={field.max}
                                            step={field.step}
                                            className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-[hsl(var(--color-muted))]"
                                        />
                                        <div className="flex justify-between text-xs text-[hsl(var(--color-muted-foreground))]">
                                            <span>{field.min}</span>
                                            <span className="font-medium text-[hsl(var(--color-foreground))]">
                                                {field.key.includes('opacity') || field.key.includes('quality')
                                                    ? `${Math.round((settings[field.key] as number || 0) * 100)}%`
                                                    : settings[field.key] as number
                                                }
                                            </span>
                                            <span>{field.max}</span>
                                        </div>
                                    </div>
                                )}

                                {field.type === 'color' && (
                                    <div className="flex items-center gap-2">
                                        <input
                                            type="color"
                                            value={(settings[field.key] as string) || '#000000'}
                                            onChange={(e) => handleFieldChange(field.key, e.target.value)}
                                            className="w-10 h-10 rounded border border-[hsl(var(--color-border))] cursor-pointer"
                                        />
                                        <input
                                            type="text"
                                            value={(settings[field.key] as string) || ''}
                                            onChange={(e) => handleFieldChange(field.key, e.target.value)}
                                            className="flex-1 px-3 py-2 text-sm rounded-md border border-[hsl(var(--color-border))] bg-[hsl(var(--color-background))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--color-primary))]"
                                        />
                                    </div>
                                )}

                                {field.type === 'file' && (
                                    <div className="space-y-1">
                                        <input
                                            type="file"
                                            accept={field.accept}
                                            onChange={(e) => {
                                                const file = e.target.files?.[0] || null;
                                                handleFieldChange(field.key, file);
                                            }}
                                            className="w-full text-sm file:mr-3 file:py-1.5 file:px-3 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-[hsl(var(--color-primary))] file:text-[hsl(var(--color-primary-foreground))] hover:file:opacity-90 cursor-pointer"
                                        />
                                        {settings[field.key] instanceof File && (
                                            <p className="text-xs text-[hsl(var(--color-muted-foreground))]">
                                                {(settings[field.key] as File).name}
                                            </p>
                                        )}
                                    </div>
                                )}

                                {field.type === 'password' && (
                                    <input
                                        type="password"
                                        value={(settings[field.key] as string) || ''}
                                        onChange={(e) => handleFieldChange(field.key, e.target.value)}
                                        placeholder={field.placeholderKey ? getTranslation(field.placeholderKey) : undefined}
                                        className="w-full px-3 py-2 text-sm rounded-md border border-[hsl(var(--color-border))] bg-[hsl(var(--color-background))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--color-primary))] placeholder:text-[hsl(var(--color-muted-foreground))]"
                                    />
                                )}
                            </div>
                            );
                        })}
                    </div>
                )}
            </div>

            {/* Footer */}
            {(isConditionGateway || (config && config.fields.length > 0)) && (
                <div className="flex items-center justify-between gap-3 px-4 py-3 border-t border-[hsl(var(--color-border))] bg-[hsl(var(--color-muted)/0.3)]">
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={handleReset}
                    >
                        <RotateCcw className="w-4 h-4 mr-1.5" />
                        {tWorkflow('reset') || 'Reset'}
                    </Button>
                    <div className="flex items-center gap-2.5">
                        <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">
                            {locale === 'zh' ? '即时已同步' : 'Auto-synced'}
                        </span>
                        <Button
                            variant="primary"
                            size="sm"
                            onClick={handleApply}
                        >
                            <Check className="w-4 h-4 mr-1.5" />
                            {locale === 'zh' ? '完成' : (tWorkflow('done') || 'Done')}
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default NodeSettingsPanel;
