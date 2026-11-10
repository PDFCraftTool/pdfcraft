'use client';

import React, { useState, useCallback, useRef, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Save, FolderOpen, Trash2, Copy, Undo2, Redo2, AlignLeft, AlignCenterHorizontal, AlignRight, AlignStartVertical, AlignCenterVertical, AlignEndVertical, FilePlus2 } from 'lucide-react';
import { PDFDocument, PageSizes } from 'pdf-lib';
import { FileUploader } from '../FileUploader';
import { ProcessingProgress, ProcessingStatus } from '../ProcessingProgress';
import { DownloadButton } from '../DownloadButton';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { createForm, FormField } from '@/lib/pdf/processors/form-creator';
import type { ProcessOutput } from '@/types/pdf';

// Store pdfjs module reference
let pdfjsModule: typeof import('pdfjs-dist') | null = null;

// Load pdfjs module dynamically
const loadPdfjsLib = async () => {
  if (pdfjsModule) return pdfjsModule;

  const pdfjsLib = await import('pdfjs-dist');
  const { configurePdfjsWorker } = await import('@/lib/pdf/loader');

  if (typeof window !== 'undefined' && !pdfjsLib.GlobalWorkerOptions.workerSrc) {
    configurePdfjsWorker(pdfjsLib);
  }

  pdfjsModule = pdfjsLib;
  return pdfjsLib;
};

export interface FormCreatorToolProps {
  className?: string;
}

type FieldType = 'text' | 'checkbox' | 'dropdown' | 'radio' | 'button' | 'signature' | 'date' | 'listbox';

interface VisualField extends FormField {
  id: string;
  selected?: boolean;
}

// Template definitions
interface FormTemplate {
  id: string;
  name: string;
  description: string;
  icon: string;
  fields: Omit<VisualField, 'id'>[];
}

const formTemplates: FormTemplate[] = [
  {
    id: 'contact',
    name: 'Contact Form',
    description: 'Basic contact form with name, email, and message fields',
    icon: '📧',
    fields: [
      { name: 'full_name', type: 'text', x: 50, y: 700, width: 200, height: 24, pageNumber: 1, label: 'Full Name' },
      { name: 'email', type: 'text', x: 50, y: 650, width: 200, height: 24, pageNumber: 1, label: 'Email Address' },
      { name: 'phone', type: 'text', x: 50, y: 600, width: 200, height: 24, pageNumber: 1, label: 'Phone Number' },
      { name: 'subject', type: 'dropdown', x: 50, y: 550, width: 200, height: 24, pageNumber: 1, options: ['General Inquiry', 'Support', 'Feedback', 'Other'], label: 'Subject' },
      { name: 'message', type: 'text', x: 50, y: 450, width: 400, height: 80, pageNumber: 1, multiline: true, label: 'Message' },
      { name: 'submit', type: 'button', x: 50, y: 380, width: 100, height: 30, pageNumber: 1, buttonLabel: 'Submit' },
    ],
  },
  {
    id: 'registration',
    name: 'Registration Form',
    description: 'User registration form with account details',
    icon: '📝',
    fields: [
      { name: 'first_name', type: 'text', x: 50, y: 700, width: 150, height: 24, pageNumber: 1, label: 'First Name' },
      { name: 'last_name', type: 'text', x: 220, y: 700, width: 150, height: 24, pageNumber: 1, label: 'Last Name' },
      { name: 'email', type: 'text', x: 50, y: 650, width: 320, height: 24, pageNumber: 1, label: 'Email Address' },
      { name: 'date_of_birth', type: 'date', x: 50, y: 600, width: 150, height: 24, pageNumber: 1, label: 'Date of Birth' },
      { name: 'gender', type: 'dropdown', x: 220, y: 600, width: 150, height: 24, pageNumber: 1, options: ['Male', 'Female', 'Other', 'Prefer not to say'], label: 'Gender' },
      { name: 'terms_accepted', type: 'checkbox', x: 50, y: 550, width: 20, height: 20, pageNumber: 1, label: 'I accept the terms and conditions', labelPosition: 'left' },
      { name: 'newsletter', type: 'checkbox', x: 50, y: 520, width: 20, height: 20, pageNumber: 1, label: 'Subscribe to newsletter', labelPosition: 'left' },
      { name: 'register', type: 'button', x: 50, y: 460, width: 120, height: 30, pageNumber: 1, buttonLabel: 'Register' },
    ],
  },
  {
    id: 'feedback',
    name: 'Feedback Form',
    description: 'Customer feedback and survey form',
    icon: '⭐',
    fields: [
      { name: 'customer_name', type: 'text', x: 50, y: 700, width: 200, height: 24, pageNumber: 1, label: 'Your Name' },
      { name: 'satisfaction', type: 'dropdown', x: 50, y: 650, width: 200, height: 24, pageNumber: 1, options: ['Very Satisfied', 'Satisfied', 'Neutral', 'Dissatisfied', 'Very Dissatisfied'], label: 'Satisfaction Level' },
      { name: 'recommend', type: 'radio', x: 50, y: 600, width: 150, height: 24, pageNumber: 1, options: ['Yes', 'No', 'Maybe'], label: 'Would you recommend us?' },
      { name: 'comments', type: 'text', x: 50, y: 500, width: 400, height: 80, pageNumber: 1, multiline: true, label: 'Comments' },
      { name: 'submit_date', type: 'date', x: 50, y: 420, width: 150, height: 24, pageNumber: 1, label: 'Date' },
      { name: 'submit', type: 'button', x: 50, y: 360, width: 100, height: 30, pageNumber: 1, buttonLabel: 'Submit' },
    ],
  },
  {
    id: 'order',
    name: 'Order Form',
    description: 'Product order form with quantities',
    icon: '🛒',
    fields: [
      { name: 'customer_name', type: 'text', x: 50, y: 720, width: 200, height: 24, pageNumber: 1, label: 'Customer Name' },
      { name: 'company', type: 'text', x: 280, y: 720, width: 200, height: 24, pageNumber: 1, label: 'Company' },
      { name: 'address', type: 'text', x: 50, y: 670, width: 430, height: 24, pageNumber: 1, label: 'Address' },
      { name: 'city', type: 'text', x: 50, y: 630, width: 150, height: 24, pageNumber: 1, label: 'City' },
      { name: 'postal_code', type: 'text', x: 220, y: 630, width: 100, height: 24, pageNumber: 1, label: 'Postal Code' },
      { name: 'country', type: 'dropdown', x: 340, y: 630, width: 140, height: 24, pageNumber: 1, options: ['USA', 'Canada', 'UK', 'Germany', 'France', 'Other'], label: 'Country' },
      { name: 'product', type: 'listbox', x: 50, y: 520, width: 200, height: 80, pageNumber: 1, options: ['Product A', 'Product B', 'Product C', 'Product D'], multiSelect: true, label: 'Select Products' },
      { name: 'quantity', type: 'text', x: 280, y: 540, width: 80, height: 24, pageNumber: 1, label: 'Quantity' },
      { name: 'rush_delivery', type: 'checkbox', x: 50, y: 420, width: 20, height: 20, pageNumber: 1, label: 'Rush Delivery', labelPosition: 'left' },
      { name: 'order', type: 'button', x: 50, y: 360, width: 120, height: 30, pageNumber: 1, buttonLabel: 'Place Order' },
    ],
  },
  {
    id: 'consent',
    name: 'Consent Form',
    description: 'Legal consent form with signature',
    icon: '✍️',
    fields: [
      { name: 'full_name', type: 'text', x: 50, y: 700, width: 250, height: 24, pageNumber: 1, label: 'Full Name' },
      { name: 'date', type: 'date', x: 320, y: 700, width: 150, height: 24, pageNumber: 1, label: 'Date' },
      { name: 'id_number', type: 'text', x: 50, y: 650, width: 200, height: 24, pageNumber: 1, label: 'ID Number' },
      { name: 'consent_1', type: 'checkbox', x: 50, y: 580, width: 20, height: 20, pageNumber: 1, label: 'I agree to the terms of service', labelPosition: 'left' },
      { name: 'consent_2', type: 'checkbox', x: 50, y: 540, width: 20, height: 20, pageNumber: 1, label: 'I agree to data processing', labelPosition: 'left' },
      { name: 'consent_3', type: 'checkbox', x: 50, y: 500, width: 20, height: 20, pageNumber: 1, label: 'I am 18 years or older', labelPosition: 'left' },
      { name: 'signature', type: 'signature', x: 50, y: 380, width: 250, height: 60, pageNumber: 1, signatureLabel: 'Sign here', label: 'Signature' },
      { name: 'submit', type: 'button', x: 50, y: 300, width: 100, height: 30, pageNumber: 1, buttonLabel: 'Submit' },
    ],
  },
  {
    id: 'invoice',
    name: 'Invoice',
    description: 'Professional invoice with itemized billing',
    icon: '🧾',
    fields: [
      // Header - Company info
      { name: 'company_name', type: 'text', x: 50, y: 750, width: 200, height: 24, pageNumber: 1, label: 'Company Name' },
      { name: 'company_address', type: 'text', x: 50, y: 720, width: 250, height: 24, pageNumber: 1, label: 'Company Address' },
      { name: 'company_phone', type: 'text', x: 50, y: 690, width: 150, height: 24, pageNumber: 1, label: 'Phone' },
      { name: 'company_email', type: 'text', x: 220, y: 690, width: 180, height: 24, pageNumber: 1, label: 'Email' },
      // Invoice details
      { name: 'invoice_number', type: 'text', x: 400, y: 750, width: 120, height: 24, pageNumber: 1, label: 'Invoice #' },
      { name: 'invoice_date', type: 'date', x: 400, y: 720, width: 120, height: 24, pageNumber: 1, label: 'Invoice Date' },
      { name: 'due_date', type: 'date', x: 400, y: 690, width: 120, height: 24, pageNumber: 1, label: 'Due Date' },
      // Bill to
      { name: 'client_name', type: 'text', x: 50, y: 620, width: 200, height: 24, pageNumber: 1, label: 'Bill To' },
      { name: 'client_address', type: 'text', x: 50, y: 590, width: 250, height: 24, pageNumber: 1, label: 'Client Address' },
      { name: 'client_email', type: 'text', x: 50, y: 560, width: 200, height: 24, pageNumber: 1, label: 'Client Email' },
      // Items (simplified - 3 rows)
      { name: 'item_1_desc', type: 'text', x: 50, y: 480, width: 250, height: 24, pageNumber: 1, label: 'Item 1 Description' },
      { name: 'item_1_qty', type: 'text', x: 320, y: 480, width: 60, height: 24, pageNumber: 1, label: 'Qty' },
      { name: 'item_1_price', type: 'text', x: 400, y: 480, width: 80, height: 24, pageNumber: 1, label: 'Price' },
      { name: 'item_2_desc', type: 'text', x: 50, y: 450, width: 250, height: 24, pageNumber: 1, label: 'Item 2 Description' },
      { name: 'item_2_qty', type: 'text', x: 320, y: 450, width: 60, height: 24, pageNumber: 1, label: 'Qty' },
      { name: 'item_2_price', type: 'text', x: 400, y: 450, width: 80, height: 24, pageNumber: 1, label: 'Price' },
      { name: 'item_3_desc', type: 'text', x: 50, y: 420, width: 250, height: 24, pageNumber: 1, label: 'Item 3 Description' },
      { name: 'item_3_qty', type: 'text', x: 320, y: 420, width: 60, height: 24, pageNumber: 1, label: 'Qty' },
      { name: 'item_3_price', type: 'text', x: 400, y: 420, width: 80, height: 24, pageNumber: 1, label: 'Price' },
      // Totals
      { name: 'subtotal', type: 'text', x: 400, y: 360, width: 80, height: 24, pageNumber: 1, label: 'Subtotal' },
      { name: 'tax', type: 'text', x: 400, y: 330, width: 80, height: 24, pageNumber: 1, label: 'Tax' },
      { name: 'total', type: 'text', x: 400, y: 300, width: 80, height: 24, pageNumber: 1, label: 'Total' },
      // Payment
      { name: 'payment_method', type: 'dropdown', x: 50, y: 250, width: 150, height: 24, pageNumber: 1, options: ['Bank Transfer', 'Credit Card', 'PayPal', 'Check', 'Cash'], label: 'Payment Method' },
      { name: 'notes', type: 'text', x: 50, y: 180, width: 430, height: 50, pageNumber: 1, multiline: true, label: 'Notes' },
    ],
  },
];

export function FormCreatorTool({ className = '' }: FormCreatorToolProps) {
  const t = useTranslations('common');
  const tTools = useTranslations('tools');

  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<ProcessingStatus>('idle');
  const [progress, setProgress] = useState(0);
  const [progressMessage, setProgressMessage] = useState('');
  const [result, setResult] = useState<Blob | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Visual editor state
  const [fields, setFields] = useState<VisualField[]>([]);
  const [selectedFieldId, setSelectedFieldId] = useState<string | null>(null);
  const [currentTool, setCurrentTool] = useState<FieldType | 'select'>('select');
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState({ width: 0, height: 0 });
  const [scale, setScale] = useState(1);

  // Form options
  const [flattenForm, setFlattenForm] = useState(false);

  // Saved projects state
  const [savedProjects, setSavedProjects] = useState<Array<{
    id: string;
    name: string;
    fileName: string;
    fields: VisualField[];
    savedAt: number;
  }>>([]);
  const [showSaveDialog, setShowSaveDialog] = useState(false);
  const [projectName, setProjectName] = useState('');

  // Undo/Redo history
  const [history, setHistory] = useState<VisualField[][]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const maxHistoryLength = 50;

  // Multi-select state
  const [selectedFieldIds, setSelectedFieldIds] = useState<Set<string>>(new Set());

  // Right panel tab state
  const [activeTab, setActiveTab] = useState<'properties' | 'fields' | 'options'>('properties');

  // Create blank PDF dialog state
  const [showBlankPdfDialog, setShowBlankPdfDialog] = useState(false);
  const [blankPdfPageSize, setBlankPdfPageSize] = useState<'A4' | 'Letter' | 'Legal' | 'A3' | 'A5'>('A4');
  const [blankPdfPageCount, setBlankPdfPageCount] = useState(1);

  // Template dialog state
  const [showTemplateDialog, setShowTemplateDialog] = useState(false);

  // Adding page loading state
  const [isAddingPage, setIsAddingPage] = useState(false);

  // Add page menu state (for delayed hide)
  const [showAddPageMenu, setShowAddPageMenu] = useState(false);
  const addPageMenuTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Drag state
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const cancelledRef = useRef(false);
  const pdfDocRef = useRef<any>(null);

  // Generate unique ID
  const generateId = () => `field_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

  // Load PDF
  const loadPdf = useCallback(async (pdfFile: File) => {
    try {
      const pdfjsLib = await loadPdfjsLib();
      const arrayBuffer = await pdfFile.arrayBuffer();
      const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
      pdfDocRef.current = pdf;
      setTotalPages(pdf.numPages);
      setCurrentPage(1);
      renderPage(pdf, 1);
    } catch (err) {
      console.error('Failed to load PDF:', err);
      setError('Failed to load PDF file.');
    }
  }, []);

  // Create blank PDF
  const createBlankPdf = useCallback(async () => {
    try {
      const pdfDoc = await PDFDocument.create();

      // Map page size names to pdf-lib PageSizes
      const pageSizeMap: Record<string, [number, number]> = {
        'A4': PageSizes.A4,
        'Letter': PageSizes.Letter,
        'Legal': PageSizes.Legal,
        'A3': PageSizes.A3,
        'A5': PageSizes.A5,
      };

      const size = pageSizeMap[blankPdfPageSize] || PageSizes.A4;

      // Add pages
      for (let i = 0; i < blankPdfPageCount; i++) {
        pdfDoc.addPage(size);
      }

      // Generate PDF bytes
      const pdfBytes = await pdfDoc.save();

      // Create a File object from the PDF bytes
      const blob = new Blob([new Uint8Array(pdfBytes)], { type: 'application/pdf' });
      const fileName = `blank_form_${blankPdfPageSize}_${blankPdfPageCount}p.pdf`;
      const pdfFile = new File([blob], fileName, { type: 'application/pdf' });

      // Set the file and load it
      setFile(pdfFile);
      setFields([]);
      setSelectedFieldId(null);
      setResult(null);
      setStatus('idle');
      setShowBlankPdfDialog(false);

      // Load the PDF for preview
      await loadPdf(pdfFile);
    } catch (err) {
      console.error('Failed to create blank PDF:', err);
      setError('Failed to create blank PDF.');
    }
  }, [blankPdfPageSize, blankPdfPageCount, loadPdf]);

  // Create form from template
  const createFromTemplate = useCallback(async (template: FormTemplate) => {
    try {
      // Create blank A4 PDF
      const pdfDoc = await PDFDocument.create();
      pdfDoc.addPage(PageSizes.A4);

      // Generate PDF bytes
      const pdfBytes = await pdfDoc.save();

      // Create a File object from the PDF bytes
      const blob = new Blob([new Uint8Array(pdfBytes)], { type: 'application/pdf' });
      const fileName = `${template.id}_form.pdf`;
      const pdfFile = new File([blob], fileName, { type: 'application/pdf' });

      // Create fields from template with unique IDs
      const templateFields: VisualField[] = template.fields.map(field => ({
        ...field,
        id: generateId(),
      }));

      // Set the file and fields
      setFile(pdfFile);
      setFields(templateFields);
      setSelectedFieldId(null);
      setResult(null);
      setStatus('idle');
      setShowTemplateDialog(false);

      // Load the PDF for preview
      await loadPdf(pdfFile);
    } catch (err) {
      console.error('Failed to create form from template:', err);
      setError('Failed to create form from template.');
    }
  }, [loadPdf]);

  // Add blank page to existing PDF
  const addBlankPage = useCallback(async (position: 'before' | 'after' | 'end') => {
    if (!file || isAddingPage) return;

    setIsAddingPage(true);
    try {
      // Load current PDF with pdf-lib
      const arrayBuffer = await file.arrayBuffer();
      const pdfDoc = await PDFDocument.load(arrayBuffer);

      // Get current page size to match (use the current page's size)
      const pageIndex = currentPage > 0 ? currentPage - 1 : 0;
      const currentPdfPage = pdfDoc.getPage(pageIndex);
      const { width, height } = currentPdfPage.getSize();

      // Determine insertion index
      let insertIndex: number;
      if (position === 'before') {
        insertIndex = pageIndex;
      } else if (position === 'after') {
        insertIndex = currentPage;
      } else {
        insertIndex = pdfDoc.getPageCount();
      }

      // Insert blank page
      pdfDoc.insertPage(insertIndex, [width, height]);

      // Update field page numbers for fields after the inserted page
      if (position !== 'end') {
        const updatedFields = fields.map(field => {
          if (field.pageNumber > insertIndex) {
            return { ...field, pageNumber: field.pageNumber + 1 };
          }
          return field;
        });
        setFields(updatedFields);
      }

      // Save the modified PDF
      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([new Uint8Array(pdfBytes)], { type: 'application/pdf' });
      const newFile = new File([blob], file.name, { type: 'application/pdf' });

      // Update file state
      setFile(newFile);

      // Calculate the new page number to navigate to
      let newPageNum: number;
      if (position === 'before') {
        newPageNum = insertIndex + 1;
      } else if (position === 'after') {
        newPageNum = insertIndex + 1;
      } else {
        newPageNum = pdfDoc.getPageCount();
      }

      // Load and render the new PDF without resetting currentPage
      const pdfjsLib = await loadPdfjsLib();
      const newArrayBuffer = await newFile.arrayBuffer();
      const newPdf = await pdfjsLib.getDocument({ data: newArrayBuffer }).promise;
      pdfDocRef.current = newPdf;
      setTotalPages(newPdf.numPages);
      setCurrentPage(newPageNum);
      await renderPage(newPdf, newPageNum);
    } catch (err) {
      console.error('Failed to add blank page:', err);
      setError('Failed to add blank page.');
    } finally {
      setIsAddingPage(false);
    }
  }, [file, currentPage, fields, isAddingPage]);

  // Render page
  const renderPage = async (pdf: any, pageNum: number) => {
    if (!canvasRef.current) return;

    try {
      const page = await pdf.getPage(pageNum);
      const viewport = page.getViewport({ scale: 1 });

      // Calculate scale to fit container
      const containerWidth = containerRef.current?.clientWidth || 600;
      const displayScale = Math.min(containerWidth / viewport.width, 1);
      setScale(displayScale);

      // Use higher resolution for better quality (2x for high DPI displays)
      const renderScale = displayScale * 2;
      const renderViewport = page.getViewport({ scale: renderScale });

      // Set display size (CSS size)
      const displayViewport = page.getViewport({ scale: displayScale });
      setPageSize({ width: displayViewport.width, height: displayViewport.height });

      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // Set canvas internal resolution (higher for quality)
      canvas.width = renderViewport.width;
      canvas.height = renderViewport.height;

      // Set display size via CSS
      canvas.style.width = `${displayViewport.width}px`;
      canvas.style.height = `${displayViewport.height}px`;

      await page.render({ canvasContext: ctx, viewport: renderViewport }).promise;
    } catch (err) {
      console.error('Failed to render page:', err);
    }
  };

  // Re-render when page changes
  useEffect(() => {
    if (pdfDocRef.current && currentPage > 0) {
      renderPage(pdfDocRef.current, currentPage);
    }
  }, [currentPage]);

  // Handle canvas click to add field
  const handleCanvasClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (currentTool === 'select' || !canvasRef.current) return;

    const rect = canvasRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / scale;
    const y = (e.clientY - rect.top) / scale;

    // Convert to PDF coordinates (origin at bottom-left)
    const pdfY = (pageSize.height / scale) - y;

    const defaultSizes: Record<FieldType, { width: number; height: number }> = {
      text: { width: 200, height: 24 },
      checkbox: { width: 20, height: 20 },
      dropdown: { width: 200, height: 24 },
      radio: { width: 20, height: 20 },
      button: { width: 100, height: 30 },
      signature: { width: 200, height: 60 },
      date: { width: 150, height: 24 },
      listbox: { width: 200, height: 80 },
    };

    const newField: VisualField = {
      id: generateId(),
      type: currentTool,
      name: `${currentTool}_${fields.filter(f => f.type === currentTool).length + 1}`,
      pageNumber: currentPage,
      x: x,
      y: pdfY,
      width: defaultSizes[currentTool].width,
      height: defaultSizes[currentTool].height,
      options: ['dropdown', 'radio', 'listbox'].includes(currentTool) ? ['Option 1', 'Option 2', 'Option 3'] : undefined,
      buttonLabel: currentTool === 'button' ? 'Submit' : undefined,
      signatureLabel: currentTool === 'signature' ? 'Sign here' : undefined,
      dateFormat: currentTool === 'date' ? 'YYYY-MM-DD' : undefined,
      multiSelect: currentTool === 'listbox' ? false : undefined,
    };

    setFields(prev => [...prev, newField]);
    setSelectedFieldId(newField.id);
    setCurrentTool('select');
  }, [currentTool, currentPage, fields, pageSize, scale]);

  // Handle field selection
  const handleFieldClick = useCallback((e: React.MouseEvent, fieldId: string) => {
    e.stopPropagation();
    if (currentTool === 'select') {
      setSelectedFieldId(fieldId);
    }
  }, [currentTool]);

  // Handle field drag start
  const handleFieldMouseDown = useCallback((e: React.MouseEvent, fieldId: string, isResize: boolean = false) => {
    e.stopPropagation();
    e.preventDefault();

    if (currentTool !== 'select') return;

    const field = fields.find(f => f.id === fieldId);
    if (!field) return;

    setSelectedFieldId(fieldId);
    setDragStart({ x: e.clientX, y: e.clientY });
    setDragOffset({ x: field.x, y: field.y });

    if (isResize) {
      setIsResizing(true);
    } else {
      setIsDragging(true);
    }
  }, [currentTool, fields]);

  // Handle mouse move for drag/resize
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging && !isResizing) return;
      if (!selectedFieldId) return;

      const deltaX = (e.clientX - dragStart.x) / scale;
      const deltaY = (e.clientY - dragStart.y) / scale;

      setFields(prev => prev.map(field => {
        if (field.id !== selectedFieldId) return field;

        if (isResizing) {
          return {
            ...field,
            width: Math.max(20, field.width + deltaX),
            height: Math.max(20, field.height + deltaY),
          };
        } else {
          return {
            ...field,
            x: dragOffset.x + deltaX,
            y: dragOffset.y - deltaY, // Invert Y for PDF coordinates
          };
        }
      }));

      setDragStart({ x: e.clientX, y: e.clientY });
      if (!isResizing) {
        setDragOffset(prev => ({ x: prev.x + deltaX, y: prev.y - deltaY }));
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      setIsResizing(false);
    };

    if (isDragging || isResizing) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, isResizing, selectedFieldId, dragStart, dragOffset, scale]);

  // Delete selected field
  const handleDeleteField = useCallback(() => {
    if (!selectedFieldId) return;
    setFields(prev => prev.filter(f => f.id !== selectedFieldId));
    setSelectedFieldId(null);
  }, [selectedFieldId]);

  // Update selected field
  const updateSelectedField = useCallback((updates: Partial<VisualField>) => {
    if (!selectedFieldId) return;
    setFields(prev => prev.map(f => f.id === selectedFieldId ? { ...f, ...updates } : f));
  }, [selectedFieldId]);

  // Add to history for undo/redo
  const addToHistory = useCallback((newFields: VisualField[]) => {
    setHistory(prev => {
      const newHistory = prev.slice(0, historyIndex + 1);
      newHistory.push([...newFields]);
      if (newHistory.length > maxHistoryLength) {
        newHistory.shift();
      }
      return newHistory;
    });
    setHistoryIndex(prev => Math.min(prev + 1, maxHistoryLength - 1));
  }, [historyIndex, maxHistoryLength]);

  // Undo
  const handleUndo = useCallback(() => {
    if (historyIndex > 0) {
      setHistoryIndex(prev => prev - 1);
      setFields(history[historyIndex - 1]);
      setSelectedFieldId(null);
      setSelectedFieldIds(new Set());
    }
  }, [historyIndex, history]);

  // Redo
  const handleRedo = useCallback(() => {
    if (historyIndex < history.length - 1) {
      setHistoryIndex(prev => prev + 1);
      setFields(history[historyIndex + 1]);
      setSelectedFieldId(null);
      setSelectedFieldIds(new Set());
    }
  }, [historyIndex, history]);

  // Duplicate selected field
  const handleDuplicateField = useCallback(() => {
    if (!selectedFieldId) return;
    const fieldToDuplicate = fields.find(f => f.id === selectedFieldId);
    if (!fieldToDuplicate) return;

    const newField: VisualField = {
      ...fieldToDuplicate,
      id: generateId(),
      name: `${fieldToDuplicate.name}_copy`,
      x: fieldToDuplicate.x + 20,
      y: fieldToDuplicate.y - 20,
    };

    const newFields = [...fields, newField];
    setFields(newFields);
    addToHistory(newFields);
    setSelectedFieldId(newField.id);
  }, [selectedFieldId, fields, addToHistory]);

  // Toggle field selection for multi-select (Ctrl+Click)
  const toggleFieldSelection = useCallback((fieldId: string, ctrlKey: boolean) => {
    if (ctrlKey) {
      setSelectedFieldIds(prev => {
        const newSet = new Set(prev);
        if (newSet.has(fieldId)) {
          newSet.delete(fieldId);
        } else {
          newSet.add(fieldId);
        }
        return newSet;
      });
    } else {
      setSelectedFieldIds(new Set([fieldId]));
      setSelectedFieldId(fieldId);
    }
  }, []);

  // Select all fields on current page
  const handleSelectAll = useCallback(() => {
    const pageFieldIds = fields.filter(f => f.pageNumber === currentPage).map(f => f.id);
    setSelectedFieldIds(new Set(pageFieldIds));
  }, [fields, currentPage]);

  // Align selected fields
  const handleAlignFields = useCallback((alignment: 'left' | 'center' | 'right' | 'top' | 'middle' | 'bottom') => {
    const selectedIds = selectedFieldIds.size > 1 ? selectedFieldIds : (selectedFieldId ? new Set([selectedFieldId]) : new Set());
    if (selectedIds.size < 2) return;

    const selectedFields = fields.filter(f => selectedIds.has(f.id));
    if (selectedFields.length < 2) return;

    let alignValue: number;

    switch (alignment) {
      case 'left':
        alignValue = Math.min(...selectedFields.map(f => f.x));
        break;
      case 'center':
        const minX = Math.min(...selectedFields.map(f => f.x));
        const maxX = Math.max(...selectedFields.map(f => f.x + f.width));
        alignValue = (minX + maxX) / 2;
        break;
      case 'right':
        alignValue = Math.max(...selectedFields.map(f => f.x + f.width));
        break;
      case 'top':
        alignValue = Math.max(...selectedFields.map(f => f.y));
        break;
      case 'middle':
        const minY = Math.min(...selectedFields.map(f => f.y - f.height));
        const maxY = Math.max(...selectedFields.map(f => f.y));
        alignValue = (minY + maxY) / 2;
        break;
      case 'bottom':
        alignValue = Math.min(...selectedFields.map(f => f.y - f.height));
        break;
    }

    const newFields = fields.map(f => {
      if (!selectedIds.has(f.id)) return f;

      switch (alignment) {
        case 'left':
          return { ...f, x: alignValue };
        case 'center':
          return { ...f, x: alignValue - f.width / 2 };
        case 'right':
          return { ...f, x: alignValue - f.width };
        case 'top':
          return { ...f, y: alignValue };
        case 'middle':
          return { ...f, y: alignValue + f.height / 2 };
        case 'bottom':
          return { ...f, y: alignValue + f.height };
        default:
          return f;
      }
    });

    setFields(newFields);
    addToHistory(newFields);
  }, [fields, selectedFieldId, selectedFieldIds, addToHistory]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!file) return;

      // Ctrl+Z: Undo
      if (e.ctrlKey && e.key === 'z' && !e.shiftKey) {
        e.preventDefault();
        handleUndo();
      }
      // Ctrl+Shift+Z or Ctrl+Y: Redo
      if ((e.ctrlKey && e.shiftKey && e.key === 'z') || (e.ctrlKey && e.key === 'y')) {
        e.preventDefault();
        handleRedo();
      }
      // Ctrl+D: Duplicate
      if (e.ctrlKey && e.key === 'd') {
        e.preventDefault();
        handleDuplicateField();
      }
      // Ctrl+A: Select all
      if (e.ctrlKey && e.key === 'a') {
        e.preventDefault();
        handleSelectAll();
      }
      // Delete: Delete selected field
      if (e.key === 'Delete' && selectedFieldId) {
        e.preventDefault();
        handleDeleteField();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [file, handleUndo, handleRedo, handleDuplicateField, handleSelectAll, handleDeleteField, selectedFieldId]);

  // Handle file selection
  const handleFilesSelected = useCallback((files: File[]) => {
    if (files.length > 0) {
      setFile(files[0]);
      setError(null);
      setResult(null);
      setFields([]);
      setSelectedFieldId(null);
      loadPdf(files[0]);
    }
  }, [loadPdf]);

  // Clear file
  const handleClearFile = useCallback(() => {
    setFile(null);
    setResult(null);
    setError(null);
    setStatus('idle');
    setFields([]);
    setSelectedFieldId(null);
    setTotalPages(0);
    setCurrentPage(1);
    pdfDocRef.current = null;
  }, []);

  // Load saved projects from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('formCreator_savedProjects');
      if (saved) {
        setSavedProjects(JSON.parse(saved));
      }
    } catch (err) {
      console.error('Failed to load saved projects:', err);
    }
  }, []);

  // Save project to localStorage
  const handleSaveProject = useCallback(() => {
    if (!file || fields.length === 0) return;

    const projectId = `project_${Date.now()}`;
    const newProject = {
      id: projectId,
      name: projectName || `Form Project ${savedProjects.length + 1}`,
      fileName: file.name,
      fields: fields,
      savedAt: Date.now(),
    };

    const updatedProjects = [...savedProjects, newProject];
    setSavedProjects(updatedProjects);

    try {
      localStorage.setItem('formCreator_savedProjects', JSON.stringify(updatedProjects));
    } catch (err) {
      console.error('Failed to save project:', err);
    }

    setShowSaveDialog(false);
    setProjectName('');
  }, [file, fields, projectName, savedProjects]);

  // Load a saved project
  const handleLoadProject = useCallback((project: typeof savedProjects[0]) => {
    setFields(project.fields);
    setSelectedFieldId(null);
    setShowSaveDialog(false);
  }, []);

  // Delete a saved project
  const handleDeleteProject = useCallback((projectId: string) => {
    const updatedProjects = savedProjects.filter(p => p.id !== projectId);
    setSavedProjects(updatedProjects);

    try {
      localStorage.setItem('formCreator_savedProjects', JSON.stringify(updatedProjects));
    } catch (err) {
      console.error('Failed to save projects:', err);
    }
  }, [savedProjects]);

  // Format date for display
  const formatDate = (timestamp: number): string => {
    return new Date(timestamp).toLocaleString();
  };

  // Process PDF
  const handleProcess = useCallback(async () => {
    if (!file || fields.length === 0) return;

    cancelledRef.current = false;
    setStatus('processing');
    setProgress(0);
    setError(null);
    setResult(null);

    try {
      // Convert visual fields to form fields
      const formFields: FormField[] = fields.map(({ id, selected, ...field }) => field);

      const output: ProcessOutput = await createForm(file, { fields: formFields, flattenForm }, (prog, message) => {
        if (!cancelledRef.current) {
          setProgress(prog);
          setProgressMessage(message || '');
        }
      });

      if (output.success && output.result) {
        setResult(output.result as Blob);
        setStatus('complete');
      } else {
        setError(output.error?.message || 'Failed to create form.');
        setStatus('error');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred.');
      setStatus('error');
    }
  }, [file, fields, flattenForm]);

  const formatSize = (bytes: number): string => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  const isProcessing = status === 'processing';
  const selectedField = fields.find(f => f.id === selectedFieldId);
  const currentPageFields = fields.filter(f => f.pageNumber === currentPage);

  // Tool buttons
  const tools = [
    { type: 'select' as const, icon: '↖', labelKey: 'selectTool' },
    { type: 'text' as const, icon: '📝', labelKey: 'textFieldTool' },
    { type: 'checkbox' as const, icon: '☑', labelKey: 'checkboxTool' },
    { type: 'dropdown' as const, icon: '▼', labelKey: 'dropdownTool' },
    { type: 'radio' as const, icon: '◉', labelKey: 'radioTool' },
    { type: 'button' as const, icon: '🔘', labelKey: 'buttonTool' },
    { type: 'signature' as const, icon: '✍', labelKey: 'signatureTool' },
    { type: 'date' as const, icon: '📅', labelKey: 'dateTool' },
    { type: 'listbox' as const, icon: '📋', labelKey: 'listboxTool' },
  ];

  // Get field style for overlay
  const getFieldStyle = (field: VisualField): React.CSSProperties => {
    const pdfHeight = pageSize.height / scale;
    const screenY = (pdfHeight - field.y) * scale;

    return {
      position: 'absolute',
      left: field.x * scale,
      top: screenY - (field.height * scale),
      width: field.width * scale,
      height: field.height * scale,
      border: field.id === selectedFieldId ? '2px solid #3b82f6' : '2px dashed #6b7280',
      backgroundColor: field.id === selectedFieldId ? 'rgba(59, 130, 246, 0.1)' : 'rgba(107, 114, 128, 0.1)',
      cursor: currentTool === 'select' ? 'move' : 'default',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '10px',
      color: '#374151',
      userSelect: 'none',
    };
  };

  // Get field icon
  const getFieldIcon = (type: FieldType) => {
    switch (type) {
      case 'text': return '📝';
      case 'checkbox': return '☑';
      case 'dropdown': return '▼';
      case 'radio': return '◉';
      case 'button': return '🔘';
      case 'signature': return '✍';
      case 'date': return '📅';
      case 'listbox': return '📋';
      default: return '📄';
    }
  };

  return (
    <div className={`space-y-6 ${className}`.trim()}>
      {!file && (
        <div className="space-y-4">
          <FileUploader
            accept={['application/pdf', '.pdf']}
            multiple={false}
            maxFiles={1}
            onFilesSelected={handleFilesSelected}
            onError={setError}
            disabled={isProcessing}
            label={tTools('formCreator.uploadLabel') || 'Upload PDF File'}
            description={tTools('formCreator.uploadDescription') || 'Drag and drop a PDF file here.'}
          />

          {/* Or create blank PDF */}
          <div className="flex items-center gap-4">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-sm text-gray-400">{tTools('formCreator.orCreateBlank') || 'Or'}</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          <button
            onClick={() => setShowBlankPdfDialog(true)}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition-colors"
          >
            <FilePlus2 className="w-5 h-5 text-blue-500" />
            <span className="text-sm font-medium text-gray-600">{tTools('formCreator.createBlankPdf') || 'Create Blank PDF'}</span>
          </button>

          {/* Templates */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {formTemplates.map(template => (
              <button
                key={template.id}
                onClick={() => createFromTemplate(template)}
                className="flex flex-col items-center justify-center gap-2 p-4 border border-gray-200 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition-colors group"
              >
                <span className="text-2xl">{template.icon}</span>
                <span className="text-xs font-medium text-gray-600 text-center group-hover:text-blue-600">{tTools(`formCreator.template.${template.id}`) || template.name}</span>
              </button>
            ))}
          </div>

          <p className="text-xs text-gray-400 text-center">
            {tTools('formCreator.templateHint') || 'Or choose a template to get started quickly'}
          </p>
        </div>
      )}

      {error && (
        <div className="p-4 rounded-[var(--radius-md)] bg-red-50 border border-red-200 text-red-700">
          <p className="text-sm">{error}</p>
        </div>
      )}

      {file && (
        <div className="grid lg:grid-cols-[1fr_320px] gap-4">
          {/* Visual Editor */}
          <div className="space-y-2">
            {/* Simplified Toolbar */}
            <div className="flex flex-wrap items-center gap-3 p-2 bg-white border border-gray-200 rounded-lg shadow-sm">
              {/* Tool Selector */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-gray-500">{tTools('formCreator.addField') || 'Add'}:</span>
                <select
                  value={currentTool}
                  onChange={(e) => setCurrentTool(e.target.value as FieldType | 'select')}
                  className="px-2 py-1.5 text-sm border rounded-md bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="select">↖ {tTools('formCreator.selectTool')}</option>
                  <optgroup label={tTools('formCreator.basicTools') || 'Basic'}>
                    <option value="text">📝 {tTools('formCreator.textFieldTool')}</option>
                    <option value="checkbox">☑ {tTools('formCreator.checkboxTool')}</option>
                    <option value="dropdown">▼ {tTools('formCreator.dropdownTool')}</option>
                    <option value="radio">◉ {tTools('formCreator.radioTool')}</option>
                  </optgroup>
                  <optgroup label={tTools('formCreator.advancedTools') || 'Advanced'}>
                    <option value="button">🔘 {tTools('formCreator.buttonTool')}</option>
                    <option value="signature">✍ {tTools('formCreator.signatureTool')}</option>
                    <option value="date">📅 {tTools('formCreator.dateTool')}</option>
                    <option value="listbox">📋 {tTools('formCreator.listboxTool')}</option>
                  </optgroup>
                </select>
              </div>

              {/* Template Selector */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-gray-500">{tTools('formCreator.templates') || 'Template'}:</span>
                <select
                  value=""
                  onChange={(e) => {
                    const templateId = e.target.value;
                    if (templateId) {
                      const template = formTemplates.find(t => t.id === templateId);
                      if (template) {
                        const templateFields: VisualField[] = template.fields.map(field => ({
                          ...field,
                          id: generateId(),
                          pageNumber: currentPage,
                        }));
                        setFields(prev => [...prev, ...templateFields]);
                        addToHistory([...fields, ...templateFields]);
                      }
                      e.target.value = '';
                    }
                  }}
                  className="px-2 py-1.5 text-sm border rounded-md bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">{tTools('formCreator.selectTemplate') || 'Select...'}</option>
                  {formTemplates.map(template => (
                    <option key={template.id} value={template.id}>
                      {template.icon} {tTools(`formCreator.template.${template.id}`) || template.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="w-px h-6 bg-gray-200" />

              {/* Quick Actions */}
              <div className="flex items-center gap-1">
                <button
                  onClick={handleUndo}
                  disabled={historyIndex <= 0}
                  className={`p-1.5 rounded transition-colors ${historyIndex > 0 ? 'hover:bg-gray-100 text-gray-600' : 'text-gray-300 cursor-not-allowed'}`}
                  title={tTools('formCreator.undo') || 'Undo'}
                >
                  <Undo2 className="w-4 h-4" />
                </button>
                <button
                  onClick={handleRedo}
                  disabled={historyIndex >= history.length - 1}
                  className={`p-1.5 rounded transition-colors ${historyIndex < history.length - 1 ? 'hover:bg-gray-100 text-gray-600' : 'text-gray-300 cursor-not-allowed'}`}
                  title={tTools('formCreator.redo') || 'Redo'}
                >
                  <Redo2 className="w-4 h-4" />
                </button>
                {selectedFieldId && (
                  <>
                    <button
                      onClick={handleDuplicateField}
                      className="p-1.5 rounded hover:bg-gray-100 text-gray-600 transition-colors"
                      title={tTools('formCreator.duplicate') || 'Duplicate'}
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                    <button
                      onClick={handleDeleteField}
                      className="p-1.5 rounded hover:bg-red-50 text-red-500 transition-colors"
                      title={tTools('formCreator.deleteTool') || 'Delete'}
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </>
                )}
              </div>

              {/* Page Navigation */}
              <div className="flex items-center gap-1 ml-auto">
                <button
                  onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                  disabled={currentPage <= 1}
                  className={`px-2 py-1 rounded text-sm ${currentPage > 1 ? 'hover:bg-gray-100 text-gray-600' : 'text-gray-300 cursor-not-allowed'}`}
                >
                  ←
                </button>
                <span className="text-sm text-gray-600 px-2">
                  {currentPage} / {totalPages}
                </span>
                <button
                  onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                  disabled={currentPage >= totalPages}
                  className={`px-2 py-1 rounded text-sm ${currentPage < totalPages ? 'hover:bg-gray-100 text-gray-600' : 'text-gray-300 cursor-not-allowed'}`}
                >
                  →
                </button>

                {/* Add Blank Page dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => {
                    if (addPageMenuTimerRef.current) {
                      clearTimeout(addPageMenuTimerRef.current);
                      addPageMenuTimerRef.current = null;
                    }
                    if (!isAddingPage) {
                      setShowAddPageMenu(true);
                    }
                  }}
                  onMouseLeave={() => {
                    addPageMenuTimerRef.current = setTimeout(() => {
                      setShowAddPageMenu(false);
                    }, 300); // 300ms delay before hiding
                  }}
                >
                  <button
                    className={`p-1.5 rounded transition-colors ${isAddingPage ? 'text-gray-300 cursor-not-allowed' : 'hover:bg-gray-100 text-gray-600'}`}
                    title={tTools('formCreator.addBlankPage') || 'Add Blank Page'}
                    disabled={isAddingPage}
                  >
                    <FilePlus2 className="w-4 h-4" />
                  </button>
                  <div className={`absolute right-0 top-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg py-1 min-w-[140px] z-10 transition-opacity duration-150 ${showAddPageMenu && !isAddingPage ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                    <button
                      onClick={() => { addBlankPage('before'); setShowAddPageMenu(false); }}
                      disabled={isAddingPage}
                      className="w-full px-3 py-1.5 text-left text-sm hover:bg-gray-50 disabled:opacity-50"
                    >
                      {tTools('formCreator.addPageBefore') || 'Before current'}
                    </button>
                    <button
                      onClick={() => { addBlankPage('after'); setShowAddPageMenu(false); }}
                      disabled={isAddingPage}
                      className="w-full px-3 py-1.5 text-left text-sm hover:bg-gray-50 disabled:opacity-50"
                    >
                      {tTools('formCreator.addPageAfter') || 'After current'}
                    </button>
                    <button
                      onClick={() => { addBlankPage('end'); setShowAddPageMenu(false); }}
                      disabled={isAddingPage}
                      className="w-full px-3 py-1.5 text-left text-sm hover:bg-gray-50 disabled:opacity-50"
                    >
                      {tTools('formCreator.addPageEnd') || 'At end'}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Canvas with field overlays */}
            <Card variant="outlined" size="sm">
              <div
                ref={containerRef}
                className="relative bg-gray-100 rounded-[var(--radius-md)] overflow-auto"
                style={{ maxHeight: '600px' }}
              >
                <div
                  className="relative inline-block"
                  onClick={handleCanvasClick}
                  style={{ cursor: currentTool !== 'select' ? 'crosshair' : 'default' }}
                >
                  <canvas
                    ref={canvasRef}
                    className="shadow-lg bg-white"
                  />

                  {/* Field overlays */}
                  {currentPageFields.map(field => (
                    <div
                      key={field.id}
                      style={getFieldStyle(field)}
                      onClick={(e) => handleFieldClick(e, field.id)}
                      onMouseDown={(e) => handleFieldMouseDown(e, field.id)}
                    >
                      <span>{getFieldIcon(field.type)} {field.name}</span>

                      {/* Label indicator */}
                      {field.label && (
                        <span
                          className="absolute text-[8px] text-blue-600 bg-blue-50 px-1 rounded whitespace-nowrap"
                          style={{
                            ...(field.labelPosition === 'left'
                              ? { right: '100%', top: '50%', transform: 'translateY(-50%)', marginRight: '2px' }
                              : { bottom: '100%', left: 0, marginBottom: '1px' }
                            )
                          }}
                        >
                          {field.label}
                        </span>
                      )}

                      {/* Resize handle */}
                      {field.id === selectedFieldId && (
                        <div
                          className="absolute bottom-0 right-0 w-3 h-3 bg-blue-500 cursor-se-resize"
                          onMouseDown={(e) => handleFieldMouseDown(e, field.id, true)}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Simple hint */}
              <p className="text-xs text-gray-400 text-center mt-2">
                {currentTool === 'select'
                  ? tTools('formCreator.selectHint')
                  : tTools('formCreator.clickToAdd') || 'Click on PDF to add field'
                }
              </p>
            </Card>
          </div>

          {/* Right Panel - Tabbed Interface */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden flex flex-col" style={{ maxHeight: 'calc(100vh - 200px)' }}>
            {/* Header with file info */}
            <div className="flex items-center justify-between px-3 py-2 border-b border-gray-100 bg-gray-50">
              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm truncate">{file.name}</p>
                <p className="text-xs text-gray-500">{formatSize(file.size)} • {totalPages} {tTools('formCreator.pages') || 'pages'}</p>
              </div>
              <Button variant="ghost" size="sm" onClick={handleClearFile} disabled={isProcessing} className="shrink-0 ml-2">
                ✕
              </Button>
            </div>

            {/* Tab Navigation */}
            <div className="flex border-b border-gray-200">
              <button
                onClick={() => setActiveTab('properties')}
                className={`flex-1 px-3 py-2 text-sm font-medium transition-colors ${activeTab === 'properties'
                  ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50/50'
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                  }`}
              >
                {tTools('formCreator.properties') || 'Properties'}
              </button>
              <button
                onClick={() => setActiveTab('fields')}
                className={`flex-1 px-3 py-2 text-sm font-medium transition-colors ${activeTab === 'fields'
                  ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50/50'
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                  }`}
              >
                {tTools('formCreator.fieldsTab') || 'Fields'} ({fields.length})
              </button>
              <button
                onClick={() => setActiveTab('options')}
                className={`flex-1 px-3 py-2 text-sm font-medium transition-colors ${activeTab === 'options'
                  ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50/50'
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                  }`}
              >
                {tTools('formCreator.optionsTab') || 'Options'}
              </button>
            </div>

            {/* Tab Content */}
            <div className="flex-1 overflow-y-auto p-3">
              {/* Properties Tab */}
              {activeTab === 'properties' && (
                <>
                  {selectedField ? (
                    <div className="space-y-3">
                      {/* Field header */}
                      <div className="flex items-center gap-2 pb-2 border-b border-gray-100">
                        <span className="text-xl">{getFieldIcon(selectedField.type)}</span>
                        <input
                          type="text"
                          value={selectedField.name}
                          onChange={(e) => updateSelectedField({ name: e.target.value })}
                          className="flex-1 px-2 py-1 text-sm font-medium border-0 bg-transparent focus:ring-1 focus:ring-blue-500 rounded"
                        />
                      </div>

                      {/* Type selector */}
                      <select
                        value={selectedField.type}
                        onChange={(e) => updateSelectedField({ type: e.target.value as FieldType })}
                        className="w-full px-2 py-1.5 text-sm border rounded bg-white"
                      >
                        <option value="text">📝 {tTools('formCreator.textFieldTool')}</option>
                        <option value="checkbox">☑ {tTools('formCreator.checkboxTool')}</option>
                        <option value="dropdown">▼ {tTools('formCreator.dropdownTool')}</option>
                        <option value="radio">◉ {tTools('formCreator.radioTool')}</option>
                        <option value="button">🔘 {tTools('formCreator.buttonTool')}</option>
                        <option value="signature">✍ {tTools('formCreator.signatureTool')}</option>
                        <option value="date">📅 {tTools('formCreator.dateTool')}</option>
                        <option value="listbox">📋 {tTools('formCreator.listboxTool')}</option>
                      </select>

                      {/* Label */}
                      <div>
                        <label className="block text-sm font-medium mb-1">{tTools('formCreator.fieldLabel') || 'Label'}</label>
                        <input
                          type="text"
                          value={selectedField.label || ''}
                          onChange={(e) => updateSelectedField({ label: e.target.value })}
                          placeholder={tTools('formCreator.fieldLabelPlaceholder') || 'Enter label text...'}
                          className="w-full px-3 py-2 border rounded-[var(--radius-md)] text-sm"
                        />
                      </div>

                      {/* Label Position */}
                      {selectedField.label && (
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-500">{tTools('formCreator.labelPosition') || 'Position'}:</span>
                          <label className="flex items-center gap-1 text-sm">
                            <input
                              type="radio"
                              name="labelPosition"
                              checked={selectedField.labelPosition !== 'left'}
                              onChange={() => updateSelectedField({ labelPosition: 'above' })}
                              className="w-3 h-3"
                            />
                            {tTools('formCreator.labelAbove') || 'Above'}
                          </label>
                          <label className="flex items-center gap-1 text-sm">
                            <input
                              type="radio"
                              name="labelPosition"
                              checked={selectedField.labelPosition === 'left'}
                              onChange={() => updateSelectedField({ labelPosition: 'left' })}
                              className="w-3 h-3"
                            />
                            {tTools('formCreator.labelLeft') || 'Left'}
                          </label>
                        </div>
                      )}

                      {/* Position/Size */}
                      <div className="grid grid-cols-4 gap-1">
                        {['x', 'y', 'width', 'height'].map((prop, idx) => (
                          <div key={prop}>
                            <label className="block text-[10px] text-gray-400 uppercase">{['X', 'Y', 'W', 'H'][idx]}</label>
                            <input
                              type="number"
                              value={Math.round(selectedField[prop as keyof typeof selectedField] as number)}
                              onChange={(e) => updateSelectedField({ [prop]: parseInt(e.target.value) || 0 })}
                              className="w-full px-1 py-1 text-xs text-center border rounded"
                            />
                          </div>
                        ))}
                      </div>

                      {selectedField.type === 'text' && (
                        <label className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            checked={selectedField.multiline || false}
                            onChange={(e) => updateSelectedField({ multiline: e.target.checked })}
                            className="w-4 h-4"
                          />
                          <span className="text-sm">{tTools('formCreator.multiline')}</span>
                        </label>
                      )}

                      {/* Default value for text fields */}
                      {selectedField.type === 'text' && (
                        <div>
                          <label className="block text-sm font-medium mb-1">{tTools('formCreator.defaultValue') || 'Default Value'}</label>
                          <input
                            type="text"
                            value={String(selectedField.defaultValue || '')}
                            onChange={(e) => updateSelectedField({ defaultValue: e.target.value })}
                            placeholder={tTools('formCreator.defaultValuePlaceholder') || 'Enter default text...'}
                            className="w-full px-3 py-2 border rounded-[var(--radius-md)] text-sm"
                          />
                        </div>
                      )}

                      {/* Default value for checkbox */}
                      {selectedField.type === 'checkbox' && (
                        <label className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            checked={selectedField.defaultValue === true}
                            onChange={(e) => updateSelectedField({ defaultValue: e.target.checked })}
                            className="w-4 h-4"
                          />
                          <span className="text-sm">{tTools('formCreator.defaultChecked') || 'Checked by default'}</span>
                        </label>
                      )}

                      {(selectedField.type === 'dropdown' || selectedField.type === 'radio' || selectedField.type === 'listbox') && (
                        <div>
                          <label className="block text-sm font-medium mb-1">{tTools('formCreator.options')}</label>
                          <textarea
                            value={(selectedField.options || []).join('\n')}
                            onChange={(e) => updateSelectedField({ options: e.target.value.split('\n').filter(o => o.trim()) })}
                            className="w-full px-3 py-2 border rounded-[var(--radius-md)] text-sm"
                            rows={4}
                          />
                        </div>
                      )}

                      {/* Default selection for dropdown/radio/listbox */}
                      {(selectedField.type === 'dropdown' || selectedField.type === 'radio' || selectedField.type === 'listbox') && selectedField.options && selectedField.options.length > 0 && (
                        <div>
                          <label className="block text-sm font-medium mb-1">{tTools('formCreator.defaultSelection') || 'Default Selection'}</label>
                          <select
                            value={String(selectedField.defaultValue || '')}
                            onChange={(e) => updateSelectedField({ defaultValue: e.target.value })}
                            className="w-full px-3 py-2 border rounded-[var(--radius-md)] text-sm"
                          >
                            <option value="">{tTools('formCreator.noDefault') || '-- None --'}</option>
                            {selectedField.options.map((opt, idx) => (
                              <option key={idx} value={opt}>{opt}</option>
                            ))}
                          </select>
                        </div>
                      )}

                      {/* Listbox multi-select option */}
                      {selectedField.type === 'listbox' && (
                        <label className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            checked={selectedField.multiSelect || false}
                            onChange={(e) => updateSelectedField({ multiSelect: e.target.checked })}
                            className="w-4 h-4"
                          />
                          <span className="text-sm">{tTools('formCreator.multiSelect') || 'Allow multiple selection'}</span>
                        </label>
                      )}

                      {/* Button label */}
                      {selectedField.type === 'button' && (
                        <div>
                          <label className="block text-sm font-medium mb-1">{tTools('formCreator.buttonLabel') || 'Button Label'}</label>
                          <input
                            type="text"
                            value={selectedField.buttonLabel || ''}
                            onChange={(e) => updateSelectedField({ buttonLabel: e.target.value })}
                            placeholder={tTools('formCreator.buttonLabelPlaceholder') || 'Submit'}
                            className="w-full px-3 py-2 border rounded-[var(--radius-md)] text-sm"
                          />
                        </div>
                      )}

                      {/* Signature label */}
                      {selectedField.type === 'signature' && (
                        <div>
                          <label className="block text-sm font-medium mb-1">{tTools('formCreator.signatureLabel') || 'Signature Label'}</label>
                          <input
                            type="text"
                            value={selectedField.signatureLabel || ''}
                            onChange={(e) => updateSelectedField({ signatureLabel: e.target.value })}
                            placeholder={tTools('formCreator.signatureLabelPlaceholder') || 'Sign here'}
                            className="w-full px-3 py-2 border rounded-[var(--radius-md)] text-sm"
                          />
                        </div>
                      )}

                      {/* Date format */}
                      {selectedField.type === 'date' && (
                        <div>
                          <label className="block text-sm font-medium mb-1">{tTools('formCreator.dateFormat') || 'Date Format'}</label>
                          <select
                            value={selectedField.dateFormat || 'YYYY-MM-DD'}
                            onChange={(e) => updateSelectedField({ dateFormat: e.target.value })}
                            className="w-full px-3 py-2 border rounded-[var(--radius-md)] text-sm"
                          >
                            <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                            <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                            <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                            <option value="YYYY/MM/DD">YYYY/MM/DD</option>
                          </select>
                        </div>
                      )}

                      {/* Date default value */}
                      {selectedField.type === 'date' && (
                        <div>
                          <label className="block text-sm font-medium mb-1">{tTools('formCreator.defaultDate') || 'Default Date'}</label>
                          <input
                            type="date"
                            value={String(selectedField.defaultValue || '')}
                            onChange={(e) => updateSelectedField({ defaultValue: e.target.value })}
                            className="w-full px-3 py-2 border rounded-[var(--radius-md)] text-sm"
                          />
                        </div>
                      )}

                      {/* Required field option */}
                      <label className="flex items-center gap-2 pt-2 border-t border-gray-100">
                        <input
                          type="checkbox"
                          checked={selectedField.required || false}
                          onChange={(e) => updateSelectedField({ required: e.target.checked })}
                          className="w-4 h-4"
                        />
                        <span className="text-sm">{tTools('formCreator.required') || 'Required field'}</span>
                      </label>

                      <button
                        onClick={handleDeleteField}
                        className="w-full py-1.5 text-sm text-red-500 hover:bg-red-50 rounded border border-red-200"
                      >
                        {tTools('formCreator.deleteField')}
                      </button>
                    </div>
                  ) : (
                    <div className="text-center py-8 text-gray-400">
                      <p className="text-sm">{tTools('formCreator.noFieldSelected')}</p>
                    </div>
                  )}
                </>
              )}

              {/* Fields Tab */}
              {activeTab === 'fields' && (
                <div className="space-y-2">
                  {fields.length === 0 ? (
                    <div className="text-center py-8 text-gray-400">
                      <p className="text-sm">{tTools('formCreator.noFieldsYet')}</p>
                    </div>
                  ) : (
                    fields.map(field => (
                      <div
                        key={field.id}
                        onClick={() => {
                          setSelectedFieldId(field.id);
                          setCurrentPage(field.pageNumber);
                          setActiveTab('properties');
                        }}
                        className={`
                          p-2 rounded cursor-pointer text-sm flex items-center justify-between
                          ${field.id === selectedFieldId
                            ? 'bg-blue-50 border border-blue-200'
                            : 'bg-gray-50 hover:bg-gray-100'
                          }
                        `}
                      >
                        <span className="flex items-center gap-1">
                          <span>{getFieldIcon(field.type)}</span>
                          <span className="truncate">{field.name}</span>
                        </span>
                        <span className="text-xs text-gray-400 shrink-0">P{field.pageNumber}</span>
                      </div>
                    ))
                  )}
                </div>
              )}

              {/* Options Tab */}
              {activeTab === 'options' && (
                <div className="space-y-4">
                  {/* Flatten Form Option */}
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={flattenForm}
                      onChange={(e) => setFlattenForm(e.target.checked)}
                      className="w-4 h-4 mt-0.5 rounded border-gray-300"
                    />
                    <div>
                      <span className="text-sm font-medium">{tTools('formCreator.flattenForm') || 'Flatten Form'}</span>
                      <p className="text-xs text-gray-500">{tTools('formCreator.flattenFormHint')}</p>
                    </div>
                  </label>

                  {/* Save Project */}
                  <div className="pt-3 border-t border-gray-100">
                    <button
                      onClick={() => setShowSaveDialog(true)}
                      disabled={fields.length === 0}
                      className="w-full flex items-center justify-center gap-2 px-3 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded disabled:opacity-50"
                    >
                      <Save className="w-4 h-4" />
                      {tTools('formCreator.saveProject') || 'Save Project'}
                    </button>
                  </div>

                  {/* Saved Projects List */}
                  {savedProjects.length > 0 && (
                    <div className="space-y-2">
                      <p className="text-xs text-gray-500 font-medium">{tTools('formCreator.savedProjects')}</p>
                      {savedProjects.map(project => (
                        <div
                          key={project.id}
                          className="flex items-center justify-between p-2 bg-gray-50 rounded text-xs"
                        >
                          <div className="flex-1 min-w-0 mr-2">
                            <p className="font-medium truncate">{project.name}</p>
                            <p className="text-gray-400 truncate">{project.fields.length} fields</p>
                          </div>
                          <div className="flex gap-1">
                            <button
                              onClick={() => handleLoadProject(project)}
                              className="p-1 text-blue-600 hover:bg-blue-50 rounded"
                            >
                              <FolderOpen className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => handleDeleteProject(project.id)}
                              className="p-1 text-red-500 hover:bg-red-50 rounded"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Action Button */}
            <div className="p-3 border-t border-gray-100 bg-gray-50">
              <Button
                variant="primary"
                size="md"
                onClick={handleProcess}
                disabled={isProcessing || fields.length === 0}
                className="w-full"
              >
                {isProcessing ? (tTools('formCreator.processingButton') || 'Processing...') : tTools('formCreator.createButton')}
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Processing Progress */}
      {isProcessing && (
        <ProcessingProgress
          progress={progress}
          status={status}
          message={progressMessage}
          onCancel={() => { cancelledRef.current = true; setStatus('idle'); }}
          showPercentage
        />
      )}

      {/* Success Message & Download */}
      {status === 'complete' && result && (
        <div className="flex items-center gap-4 p-4 rounded-lg bg-green-50 border border-green-200">
          <p className="text-sm font-medium text-green-700">
            {tTools('formCreator.successMessage') || 'Form created successfully!'}
          </p>
          <DownloadButton
            file={result}
            filename={file?.name.replace(/\.pdf$/i, '_form.pdf') || 'form.pdf'}
            variant="secondary"
            size="sm"
            showFileSize
          />
        </div>
      )}

      {/* Save Project Dialog */}
      {showSaveDialog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <Card variant="outlined" size="lg" className="w-full max-w-md mx-4 bg-white shadow-xl">
            <h3 className="text-lg font-medium mb-4">{tTools('formCreator.saveProjectTitle') || 'Save Project'}</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">{tTools('formCreator.projectName') || 'Project Name'}</label>
                <input
                  type="text"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  placeholder={tTools('formCreator.projectNamePlaceholder') || 'Enter project name...'}
                  className="w-full px-3 py-2 border rounded-[var(--radius-md)] text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  autoFocus
                />
              </div>
              <div className="text-xs text-gray-500">
                <p>{tTools('formCreator.saveInfo', { fields: fields.length })}</p>
              </div>
              <div className="flex justify-end gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setShowSaveDialog(false);
                    setProjectName('');
                  }}
                >
                  {tTools('formCreator.cancelButton') || 'Cancel'}
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={handleSaveProject}
                  disabled={fields.length === 0}
                >
                  <Save className="w-4 h-4 mr-2" />
                  {tTools('formCreator.saveButton') || 'Save'}
                </Button>
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* Create Blank PDF Dialog */}
      {showBlankPdfDialog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <Card variant="outlined" size="lg" className="w-full max-w-md mx-4 bg-white shadow-xl">
            <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
              <FilePlus2 className="w-5 h-5 text-blue-500" />
              {tTools('formCreator.createBlankPdfTitle') || 'Create Blank PDF'}
            </h3>
            <div className="space-y-4">
              {/* Page Size */}
              <div>
                <label className="block text-sm font-medium mb-1">{tTools('formCreator.pageSize') || 'Page Size'}</label>
                <select
                  value={blankPdfPageSize}
                  onChange={(e) => setBlankPdfPageSize(e.target.value as 'A4' | 'Letter' | 'Legal' | 'A3' | 'A5')}
                  className="w-full px-3 py-2 border rounded-[var(--radius-md)] text-sm"
                >
                  <option value="A4">A4 (210 × 297 mm)</option>
                  <option value="Letter">Letter (8.5 × 11 in)</option>
                  <option value="Legal">Legal (8.5 × 14 in)</option>
                  <option value="A3">A3 (297 × 420 mm)</option>
                  <option value="A5">A5 (148 × 210 mm)</option>
                </select>
              </div>

              {/* Page Count */}
              <div>
                <label className="block text-sm font-medium mb-1">{tTools('formCreator.pageCount') || 'Number of Pages'}</label>
                <input
                  type="number"
                  min="1"
                  max="100"
                  value={blankPdfPageCount}
                  onChange={(e) => setBlankPdfPageCount(Math.max(1, Math.min(100, parseInt(e.target.value) || 1)))}
                  className="w-full px-3 py-2 border rounded-[var(--radius-md)] text-sm"
                />
              </div>

              <div className="text-xs text-gray-500">
                <p>{tTools('formCreator.blankPdfNote') || 'A blank PDF will be created for you to add form fields.'}</p>
              </div>

              <div className="flex justify-end gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setShowBlankPdfDialog(false);
                    setBlankPdfPageSize('A4');
                    setBlankPdfPageCount(1);
                  }}
                >
                  {tTools('formCreator.cancelButton') || 'Cancel'}
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={createBlankPdf}
                >
                  <FilePlus2 className="w-4 h-4 mr-2" />
                  {tTools('formCreator.createButton') || 'Create'}
                </Button>
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}

export default FormCreatorTool;
