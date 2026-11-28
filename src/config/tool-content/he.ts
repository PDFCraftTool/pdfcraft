/**
 * English tool content for SEO
 * Contains detailed descriptions, how-to steps, use cases, and FAQs for all 67 tools
 * Requirements: 4.2-4.5 - Tool page content (description, how-to, use cases, FAQ)
 */

import { ToolContent } from '@/types/tool';

/**
 * English tool content map
 * Each tool has: title, metaDescription, keywords, description, howToUse (3+ steps), useCases (3+ scenarios), faq (3+ questions)
 */
export const toolContentHe: Record<string, ToolContent> = {
  // ==================== POPULAR TOOLS ====================
  'pdf-multi-tool': {
    title: 'PDF Multi Tool',
    metaDescription: 'All-in-one PDF editor: merge, split, organize, delete, rotate, and extract pages in one powerful tool.',
    keywords: ['pdf multi tool', 'pdf editor', 'merge pdf', 'split pdf', 'organize pdf', 'all in one pdf'],
    description: `
      <p>The PDF Multi Tool is your comprehensive solution for all PDF page management tasks. This powerful all-in-one tool combines multiple PDF operations into a single, intuitive interface, saving you time and effort.</p>
      <p>Whether you need to merge multiple documents, split a large PDF into smaller files, reorganize pages, delete unwanted content, rotate pages, or extract specific sections, this tool handles it all without switching between different applications.</p>
      <p>All processing happens directly in your browser, ensuring your documents remain private and secure. No files are uploaded to any server.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Drag and drop your PDF file into the upload area, or click to browse and select files from your device.' },
      { step: 2, title: 'Choose Your Operation', description: 'Select from the available operations: merge, split, organize, delete pages, rotate, add blank pages, or extract pages.' },
      { step: 3, title: 'Configure Options', description: 'Adjust settings specific to your chosen operation, such as page ranges, rotation angles, or merge order.' },
      { step: 4, title: 'Process and Download', description: 'Click the process button and download your modified PDF once the operation completes.' },
    ],
    useCases: [
      { title: 'Document Preparation', description: 'Prepare documents for submission by removing unnecessary pages, reordering content, and combining multiple files.', icon: 'file-check' },
      { title: 'Report Assembly', description: 'Combine multiple report sections, add cover pages, and organize chapters into a single professional document.', icon: 'book-open' },
      { title: 'Archive Management', description: 'Split large archive files into manageable sections, extract relevant pages, and reorganize historical documents.', icon: 'archive' },
    ],
    faq: [
      { question: 'How many PDFs can I process at once?', answer: 'You can upload and process up to 10 PDF files simultaneously, with a combined maximum size of 500MB.' },
      { question: 'Will my bookmarks be preserved?', answer: 'Yes, when merging PDFs, the tool preserves existing bookmarks and can optionally combine them into a unified bookmark structure.' },
      { question: 'Is there a page limit?', answer: 'There is no strict page limit. The tool can handle documents with hundreds of pages, though very large files may take longer to process.' },
    ],
  },

  'merge-pdf': {
    title: 'Combine Files & Merge PDF',
    metaDescription: 'Combine multiple PDF files, images (JPG/PNG), Office documents (Word/Excel/PPT), and text into one unified PDF document. Free online tool with drag-and-drop reordering.',
    keywords: ['merge pdf', 'combine files', 'combine pdf', 'join pdf', 'images to pdf', 'word to pdf merge', 'pdf merger', 'concatenate pdf'],
    description: `
      <p>Combine Files allows you to merge multiple PDF documents, images (JPG, PNG, WebP, BMP), Office documents (Word, Excel, PowerPoint), and plain text into a single cohesive PDF file quickly and easily. Whether you're consolidating multi-format reports, combining scanned receipts, or assembling presentations, this tool makes the process seamless.</p>
      <p>Simply upload your files, arrange them in your desired order using drag-and-drop, and merge them into one document. Non-PDF files are automatically converted to high-quality PDF pages on the fly, and bookmarks can optionally be maintained from each source file's name.</p>
      <p>All conversions and merging happen locally in your browser sandbox, ensuring complete privacy for your sensitive documents without uploading to remote servers.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Files', description: 'Drag and drop PDFs, images (JPG/PNG), Office documents (Word/Excel/PPT), or text files into the upload area.' },
      { step: 2, title: 'Arrange Order', description: 'Drag and drop the file cards to arrange them in your desired order. Live thumbnails are previewed for images.' },
      { step: 3, title: 'Merge and Download', description: 'Click the Merge button to automatically convert and combine all files into a single PDF, then download your result.' },
    ],
    useCases: [
      { title: 'Mixed-Media Archiving', description: 'Combine contracts, identification photos, invoice receipts, and memo notes into a complete archive dossier.', icon: 'briefcase' },
      { title: 'Consolidate Business Reports', description: 'Merge Word analyses, Excel financial tables, and PowerPoint presentation slides into one report deck.', icon: 'file-text' },
      { title: 'Assemble Portfolios', description: 'Combine multiple design graphics (JPG/PNG) and textual descriptions into a polished professional portfolio.', icon: 'image' },
    ],
    faq: [
      { question: 'What file formats can I combine?', answer: 'You can combine standard PDF files, images (JPG, PNG, WebP, BMP, SVG), Office documents (Word .docx/.doc, Excel .xlsx/.xls, PowerPoint .pptx/.ppt), and text files (.txt, .md).' },
      { question: 'How many files can I merge at once?', answer: 'You can merge up to 100 files at once, with a total combined size of up to 500MB.' },
      { question: 'Will non-PDF files maintain their visual quality?', answer: 'Yes! Images and documents are rendered at high resolution and fitted to standard pages without lossy compression.' },
      { question: 'Can I merge password-protected PDFs?', answer: 'Password-protected PDFs need to be decrypted first. Use our Decrypt PDF tool to remove the password before merging.' },
    ],
  },

  'rotate-custom': {
    title: 'Rotate by Custom Degrees',
    metaDescription: 'Rotate PDF pages by any angle. Precise custom rotation for straightening scanned documents.',
    keywords: ['rotate pdf custom angle', 'straighten pdf', 'deskew pdf', 'pdf custom rotation'],
    description: `
      <p>Rotate by Custom Degrees gives you precise control over your PDF page orientation. Unlike standard rotation tools that only support 90-degree increments, this tool allows you to rotate pages by any specific angle.</p>
      <p>Perfect for straightening scanned documents that were fed slightly askew, or adjusting diagrams and charts to their correct orientation. You can correct individual pages or apply the same rotation to the entire document.</p>
      <p>All processing happens locally in your browser, ensuring your documents remain private while achieving perfect alignment.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload PDF', description: 'Upload the PDF file containing pages you need to rotate.' },
      { step: 2, title: 'Set Rotation Angle', description: 'Enter the exact degree of rotation for each page, or set a batch angle for all pages.' },
      { step: 3, title: 'Preview and Adjust', description: 'Use the real-time preview to ensure pages are perfectly aligned.' },
      { step: 4, title: 'Apply and Download', description: 'Click Rotate to apply the changes and download your straightened PDF.' },
    ],
    useCases: [
      { title: 'Scanned Documents', description: 'Straighten scanned pages that were fed into the scanner at an angle.', icon: 'scan' },
      { title: 'Technical Drawings', description: 'Adjust the orientation of technical diagrams and plans with precision.', icon: 'ruler' },
      { title: 'Creative Layouts', description: 'Create unique layouts by rotating pages to specific artistic angles.', icon: 'pen-tool' },
    ],
    faq: [
      { question: 'Can I rotate by decimals, e.g., 45.5 degrees?', answer: 'Currently the tool supports integer degrees, but we are working on enabling decimal precision.' },
      { question: 'Does this affect the page content?', answer: 'The content is visually rotated. The page size is automatically adjusted to fit the rotated content.' },
      { question: 'Can I rotate just one page?', answer: 'Yes, you can set a custom rotation angle for any individual page while leaving others unchanged.' },
    ],
  },

  'grid-combine': {
    title: 'Grid Combine PDF',
    metaDescription: 'Combine multiple PDF files onto single pages with a flexible grid layout. Arrange 2, 4, 6, 9 or more PDFs per page with borders and spacing.',
    keywords: ['grid combine', 'merge pdf grid', 'pdf collage', 'multiple pdfs one page', 'pdf n-up', 'combine pdfs grid'],
    description: `
      <p>The Grid Combine tool offers a unique way to merge multiple separate PDF files onto single pages. Unlike the standard "Merge PDF" tool which simply appends pages, or the "N-Up" tool which rearranges pages from a single document, Grid Combine takes multiple input files and arranges them side-by-side in a customizable grid layout.</p>
      <p>You can choose from various grid configurations such as 2x1, 2x2, 3x3, etc. This is perfect for comparing multiple documents, creating handouts from different sources, or printing compact versions of several files.</p>
      <p>Customize the output with control over page size, orientation, margins, spacing, and borders. All processing happens locally in your browser for maximum privacy.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload PDF Files', description: 'Upload two or more PDF files you want to combine. You can rearrange them in your desired order.' },
      { step: 2, title: 'Choose Grid Layout', description: 'Select your desired grid layout (e.g., 2x2 for 4 files per page, 3x3 for 9 files per page).' },
      { step: 3, title: 'Customize Appearance', description: 'Adjust settings like page size (A4, Letter), orientation, spacing between items, and borders.' },
      { step: 4, title: 'Combine and Download', description: 'Click "Combine PDFs" to generate your new grid layout document and download the result.' },
    ],
    useCases: [
      { title: 'Visual Comparison', description: 'Place different versions of a design or document side-by-side on a single page for easy comparison.', icon: 'layout-grid' },
      { title: 'Printing Handouts', description: 'Combine multiple short documents or slides onto a single sheet of paper to save printing costs.', icon: 'printer' },
      { title: 'Portfolio Creation', description: 'Showcase multiple project files in a clean, organized grid overview.', icon: 'image' },
    ],
    faq: [
      { question: 'How is this different from N-Up?', answer: 'N-Up takes pages from ONE PDF and puts them on a sheet. Grid Combine takes MULTIPLE DIFFERENT PDF files and puts them on a sheet.' },
      { question: 'How many files can I combine?', answer: 'You can combine up to 100 files depending on your browser memory, but layouts like 4x4 accommodate up to 16 files per page.' },
      { question: 'Can I add borders?', answer: 'Yes, you can add borders around each PDF file and customize the border color.' },
    ],
  },

  'split-pdf': {
    title: 'Split PDF',
    metaDescription: 'Split PDF files into multiple documents. Extract specific pages or divide by page ranges.',
    keywords: ['split pdf', 'divide pdf', 'separate pdf', 'extract pages', 'pdf splitter'],
    description: `
      <p>Split PDF enables you to divide a single PDF document into multiple smaller files. This is perfect for extracting specific chapters, separating combined documents, or creating individual files from a multi-page PDF.</p>
      <p>You can split by specific page ranges, extract individual pages, or divide the document at regular intervals. The tool provides a visual preview of your pages, making it easy to select exactly what you need.</p>
      <p>All processing is done locally in your browser, ensuring your documents remain private and secure.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Drag and drop your PDF file or click to browse and select the file you want to split.' },
      { step: 2, title: 'Select Split Method', description: 'Choose how to split: by page ranges, extract specific pages, or split at regular intervals.' },
      { step: 3, title: 'Define Page Ranges', description: 'Enter the page numbers or ranges you want to extract (e.g., 1-5, 8, 10-15).' },
      { step: 4, title: 'Split and Download', description: 'Click Split to create your new PDF files and download them individually or as a ZIP archive.' },
    ],
    useCases: [
      { title: 'Extract Chapters', description: 'Split a book or manual into individual chapters for easier reading or distribution.', icon: 'book' },
      { title: 'Separate Combined Scans', description: 'Divide a batch-scanned document into individual files for each original document.', icon: 'copy' },
      { title: 'Create Handouts', description: 'Extract specific slides or pages from a presentation to create focused handouts.', icon: 'presentation' },
    ],
    faq: [
      { question: 'Can I split a PDF into individual pages?', answer: 'Yes, you can split a PDF into individual single-page files by selecting the "Split every page" option.' },
      { question: 'What happens to bookmarks when splitting?', answer: 'Bookmarks that fall within the extracted page range are preserved in the resulting PDF files.' },
      { question: 'Can I split password-protected PDFs?', answer: 'You need to decrypt the PDF first using our Decrypt PDF tool before splitting.' },
    ],
  },

  'compress-pdf': {
    title: 'Compress PDF',
    metaDescription: 'Reduce PDF file size while maintaining quality. Free online PDF compressor for smaller files.',
    keywords: ['compress pdf', 'reduce pdf size', 'pdf compressor', 'shrink pdf', 'optimize pdf'],
    description: `
      <p>Compress PDF reduces the file size of your PDF documents while maintaining acceptable quality. This is essential for email attachments, web uploads, or saving storage space.</p>
      <p>The tool offers multiple compression levels to balance between file size reduction and quality preservation. You can choose aggressive compression for maximum size reduction or light compression to maintain higher quality.</p>
      <p>All compression happens in your browser, ensuring your documents never leave your device.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Drag and drop your PDF file or click to select the document you want to compress.' },
      { step: 2, title: 'Choose Compression Level', description: 'Select your preferred compression level: Low (best quality), Medium (balanced), or High (smallest size).' },
      { step: 3, title: 'Compress and Download', description: 'Click Compress to reduce the file size, then download your optimized PDF.' },
    ],
    useCases: [
      { title: 'Email Attachments', description: 'Reduce PDF size to meet email attachment limits and ensure faster delivery.', icon: 'mail' },
      { title: 'Web Publishing', description: 'Optimize PDFs for web download to improve page load times and user experience.', icon: 'globe' },
      { title: 'Storage Optimization', description: 'Compress archived documents to save disk space while maintaining accessibility.', icon: 'hard-drive' },
    ],
    faq: [
      { question: 'How much can I reduce the file size?', answer: 'Compression results vary based on the PDF content. Image-heavy PDFs can often be reduced by 50-80%, while text-only PDFs may see smaller reductions.' },
      { question: 'Will compression affect text quality?', answer: 'Text remains sharp and readable at all compression levels. Only images and graphics are affected by compression.' },
      { question: 'Can I compress multiple PDFs at once?', answer: 'Yes, you can upload and compress up to 10 PDF files simultaneously.' },
    ],
  },

  'edit-pdf': {
    title: 'Edit PDF',
    metaDescription: 'Directly edit PDF text and images online. Click paragraphs to edit in-place with live reflow, replace images, and find & replace across documents.',
    keywords: ['edit pdf', 'pdf editor', 'edit pdf text', 'direct pdf editing', 'in-place pdf editor', 'modify pdf text'],
    description: `
      <p>Edit PDF provides high-fidelity in-place text and image editing powered by WebAssembly PDFium engine. Click directly into existing paragraphs to edit text just like a word processor, with automatic line re-wrapping and reflow.</p>
      <p>Fine-tune your layout using the property inspector dock (font size, color, line height, alignment), replace or flip images, or batch find and replace text across the entire document. Switch to Classic Annotation mode anytime if you need freehand drawing, stamps, or form signatures.</p>
      <p>All edits run strictly client-side inside your browser, guaranteeing 100% privacy and security for your files.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Drag and drop your PDF file or click to select the document you want to edit.' },
      { step: 2, title: 'Click to Edit Text Directly', description: 'Click or double-click any paragraph or heading to start editing with live reflow.' },
      { step: 3, title: 'Format & Modify Images', description: 'Adjust typography via the inspector dock, or right-click images to replace or flip them.' },
      { step: 4, title: 'Save & Download', description: 'Click Save Changes in the top right toolbar to export the updated PDF.' },
    ],
    useCases: [
      { title: 'Fix Typographical Errors', description: 'Correct typos, names, dates, or prices directly on the original document without opening source files.', icon: 'edit-3' },
      { title: 'Global Find & Replace', description: 'Search keywords across all pages and replace them seamlessly in-place.', icon: 'search' },
      { title: 'Update Graphics & Logos', description: 'Swap out outdated logos, diagrams, or signatures with newly uploaded images.', icon: 'image' },
    ],
    faq: [
      { question: 'Can I directly edit existing text in the PDF?', answer: 'Yes! The editor features direct content editing. Simply click any existing text block or paragraph to type, delete, and reformat with live reflow.' },
      { question: 'Can I still add annotations, stamps, and signatures?', answer: 'Yes! Use the mode switch toggle in the header anytime to switch to Classic Annotation mode for stamps, freehand drawing, and forms.' },
      { question: 'Are my files kept private and secure?', answer: 'Absolutely. All PDF decoding, text clustering, re-wrapping, and stream splicing run entirely in your local browser through WebAssembly.' },
    ],
  },

  'jpg-to-pdf': {
    title: 'JPG to PDF',
    metaDescription: 'Convert JPG images to PDF. Combine multiple JPG files into a single PDF document.',
    keywords: ['jpg to pdf', 'jpeg to pdf', 'convert jpg', 'image to pdf', 'photo to pdf'],
    description: `
      <p>JPG to PDF converts your JPEG images into PDF documents quickly and easily. Whether you have a single photo or multiple images, this tool creates professional-looking PDF files.</p>
      <p>You can combine multiple JPG files into a single PDF, arrange them in any order, and customize page size and orientation. The conversion preserves image quality while creating compact, shareable PDF files.</p>
      <p>All conversion happens in your browser, ensuring your photos remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload JPG Images', description: 'Drag and drop your JPG files or click to select images from your device.' },
      { step: 2, title: 'Arrange and Configure', description: 'Reorder images by dragging, and select page size and orientation options.' },
      { step: 3, title: 'Convert and Download', description: 'Click Convert to create your PDF and download the result.' },
    ],
    useCases: [
      { title: 'Photo Albums', description: 'Create PDF photo albums from vacation pictures or event photos for easy sharing.', icon: 'image' },
      { title: 'Document Scanning', description: 'Convert phone camera photos of documents into proper PDF files.', icon: 'camera' },
      { title: 'Portfolio Creation', description: 'Compile photography work or design samples into a professional PDF portfolio.', icon: 'folder' },
    ],
    faq: [
      { question: 'How many images can I convert?', answer: 'You can convert up to 100 JPG images into a single PDF document.' },
      { question: 'Will the image quality be preserved?', answer: 'Yes, images are embedded at their original quality. You can optionally compress them to reduce file size.' },
      { question: 'Can I set different page sizes for different images?', answer: 'The tool applies a uniform page size to all pages. Each image is scaled to fit the selected page size while maintaining aspect ratio.' },
    ],
  },

  'sign-pdf': {
    title: 'Sign PDF',
    metaDescription: 'Add electronic signatures to PDF documents. Draw, type, or upload your signature.',
    keywords: ['sign pdf', 'electronic signature', 'e-signature', 'pdf signature', 'digital signature'],
    description: `
      <p>Sign PDF allows you to add electronic signatures to your PDF documents quickly and securely. Create your signature by drawing, typing, or uploading an image, then place it anywhere on your document.</p>
      <p>You can add multiple signatures to a single document, resize and position them precisely, and save your signature for future use. The tool is perfect for contracts, agreements, forms, and any document requiring your signature.</p>
      <p>All signing happens locally in your browser, ensuring your documents and signature remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Drag and drop your PDF file or click to select the document you need to sign.' },
      { step: 2, title: 'Create Your Signature', description: 'Draw your signature with mouse or touch, type your name to generate a signature, or upload a signature image. You can also scan a photo of a signature written on paper.' },
      { step: 3, title: 'Place and Adjust', description: 'Click on the document to place your signature, then drag to position and resize as needed.' },
      { step: 4, title: 'Save and Download', description: 'Click Save to apply your signature and download the signed PDF.' },
    ],
    useCases: [
      { title: 'Contract Signing', description: 'Sign contracts and agreements electronically without printing and scanning.', icon: 'file-signature' },
      { title: 'Form Completion', description: 'Add your signature to application forms, consent forms, and official documents.', icon: 'clipboard' },
      { title: 'Approval Workflows', description: 'Sign off on documents as part of review and approval processes.', icon: 'check-circle' },
    ],
    faq: [
      { question: 'Is an electronic signature legally binding?', answer: 'Electronic signatures are legally recognized in most countries. However, some documents may require specific types of digital signatures. Check your local regulations.' },
      { question: 'Can I save my signature for future use?', answer: 'Yes, you can save your signature to your browser\'s local storage for quick access when signing future documents.' },
      { question: 'Can I add multiple signatures to one document?', answer: 'Yes, you can add as many signatures as needed, positioning each one independently on any page.' },
    ],
  },

  'crop-pdf': {
    title: 'Crop PDF',
    metaDescription: 'Crop PDF pages to remove margins and unwanted areas. Trim PDF documents precisely.',
    keywords: ['crop pdf', 'trim pdf', 'cut pdf margins', 'resize pdf pages', 'pdf cropper'],
    description: `
      <p>Crop PDF allows you to trim margins and remove unwanted areas from your PDF pages. This is useful for removing excess whitespace, focusing on specific content areas, or standardizing page dimensions.</p>
      <p>You can crop all pages uniformly or adjust each page individually. The visual interface shows exactly what will be kept, making it easy to achieve precise results.</p>
      <p>All cropping happens locally in your browser, ensuring your documents remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Drag and drop your PDF file or click to select the document you want to crop.' },
      { step: 2, title: 'Define Crop Area', description: 'Drag the crop handles to define the area you want to keep, or enter precise measurements.' },
      { step: 3, title: 'Apply to Pages', description: 'Choose to apply the crop to all pages or select specific pages to crop.' },
      { step: 4, title: 'Crop and Download', description: 'Click Crop to apply the changes and download your cropped PDF.' },
    ],
    useCases: [
      { title: 'Remove Margins', description: 'Trim excessive margins from scanned documents or PDFs with large borders.', icon: 'maximize-2' },
      { title: 'Focus Content', description: 'Crop to highlight specific content areas, removing headers, footers, or sidebars.', icon: 'target' },
      { title: 'Standardize Pages', description: 'Make all pages the same size by cropping to uniform dimensions.', icon: 'square' },
    ],
    faq: [
      { question: 'Does cropping permanently remove content?', answer: 'Yes, cropping removes the content outside the crop area. Make sure to keep a backup of your original file.' },
      { question: 'Can I crop different pages differently?', answer: 'Yes, you can apply different crop settings to individual pages or groups of pages.' },
      { question: 'Will cropping affect the text quality?', answer: 'No, cropping only removes areas outside the crop boundary. The remaining content maintains its original quality.' },
    ],
  },

  'extract-pages': {
    title: 'Extract Pages',
    metaDescription: 'Extract specific pages from PDF files. Select and save individual pages as new documents.',
    keywords: ['extract pdf pages', 'save pdf pages', 'copy pdf pages', 'pdf page extractor'],
    description: `
      <p>Extract Pages allows you to select and save specific pages from a PDF document as new files. This is perfect for pulling out relevant sections, creating excerpts, or separating combined documents.</p>
      <p>You can extract individual pages, page ranges, or multiple non-consecutive pages. The visual page preview makes it easy to identify and select exactly the pages you need.</p>
      <p>All extraction happens locally in your browser, ensuring your documents remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Drag and drop your PDF file or click to select the document from which you want to extract pages.' },
      { step: 2, title: 'Select Pages', description: 'Click on page thumbnails to select them, or enter page numbers and ranges in the input field.' },
      { step: 3, title: 'Extract and Download', description: 'Click Extract to create a new PDF with your selected pages and download it.' },
    ],
    useCases: [
      { title: 'Create Excerpts', description: 'Extract relevant pages from reports or books to create focused reference documents.', icon: 'file-minus' },
      { title: 'Share Specific Content', description: 'Pull out specific pages to share without sending the entire document.', icon: 'share-2' },
      { title: 'Archive Important Pages', description: 'Extract and save key pages from documents for long-term archival.', icon: 'archive' },
    ],
    faq: [
      { question: 'Can I extract non-consecutive pages?', answer: 'Yes, you can select any combination of pages, whether consecutive or scattered throughout the document.' },
      { question: 'Will bookmarks be preserved?', answer: 'Bookmarks that point to extracted pages are preserved in the new document.' },
      { question: 'Can I extract pages from multiple PDFs?', answer: 'This tool works with one PDF at a time. For combining pages from multiple PDFs, use the Merge PDF tool.' },
    ],
  },

  'organize-pdf': {
    title: 'Organize PDF',
    metaDescription: 'Reorder, duplicate, and delete PDF pages. Drag and drop to reorganize your documents.',
    keywords: ['organize pdf', 'reorder pdf pages', 'rearrange pdf', 'pdf page organizer'],
    description: `
      <p>Organize PDF provides an intuitive drag-and-drop interface for rearranging pages in your PDF documents. Reorder pages, duplicate important sections, or remove unwanted pages with ease.</p>
      <p>The visual page thumbnails make it easy to identify content and arrange pages exactly as you need them. Perfect for restructuring documents, creating custom page orders, or cleaning up scanned files.</p>
      <p>All organization happens locally in your browser, ensuring your documents remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Drag and drop your PDF file or click to select the document you want to organize.' },
      { step: 2, title: 'Rearrange Pages', description: 'Drag page thumbnails to reorder them. Click the duplicate or delete buttons on each page as needed.' },
      { step: 3, title: 'Save and Download', description: 'Click Save to apply your changes and download the reorganized PDF.' },
    ],
    useCases: [
      { title: 'Fix Page Order', description: 'Correct the order of pages that were scanned or combined incorrectly.', icon: 'arrow-up-down' },
      { title: 'Create Custom Order', description: 'Arrange pages in a specific sequence for presentations or reports.', icon: 'list' },
      { title: 'Remove Unwanted Pages', description: 'Delete blank pages, duplicates, or irrelevant content from documents.', icon: 'trash-2' },
    ],
    faq: [
      { question: 'Can I duplicate pages?', answer: 'Yes, you can duplicate any page and place the copy anywhere in the document.' },
      { question: 'Is there an undo function?', answer: 'Yes, you can undo and redo changes. You can also reset to the original order at any time.' },
      { question: 'Can I organize multiple PDFs together?', answer: 'This tool works with one PDF at a time. To combine and organize multiple PDFs, first merge them using the Merge PDF tool.' },
    ],
  },

  'delete-pages': {
    title: 'Delete Pages',
    metaDescription: 'Remove unwanted pages from PDF files. Select and delete specific pages easily.',
    keywords: ['delete pdf pages', 'remove pdf pages', 'pdf page remover', 'delete pages from pdf'],
    description: `
      <p>Delete Pages allows you to remove unwanted pages from your PDF documents quickly and easily. Whether you need to remove blank pages, outdated content, or sensitive information, this tool makes it simple.</p>
      <p>Visual page thumbnails help you identify exactly which pages to remove. You can delete individual pages or multiple pages at once.</p>
      <p>All processing happens locally in your browser, ensuring your documents remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Drag and drop your PDF file or click to select the document from which you want to delete pages.' },
      { step: 2, title: 'Select Pages to Delete', description: 'Click on page thumbnails to mark them for deletion, or enter page numbers in the input field.' },
      { step: 3, title: 'Delete and Download', description: 'Click Delete to remove the selected pages and download your updated PDF.' },
    ],
    useCases: [
      { title: 'Remove Blank Pages', description: 'Clean up documents by removing accidentally included blank pages.', icon: 'file-x' },
      { title: 'Remove Sensitive Content', description: 'Delete pages containing confidential information before sharing documents.', icon: 'shield' },
      { title: 'Streamline Documents', description: 'Remove outdated or irrelevant pages to create more focused documents.', icon: 'filter' },
    ],
    faq: [
      { question: 'Can I recover deleted pages?', answer: 'Deletion is permanent in the output file. Keep a backup of your original document if you might need the pages later.' },
      { question: 'Can I delete multiple pages at once?', answer: 'Yes, you can select and delete multiple pages simultaneously.' },
      { question: 'Will deleting pages affect bookmarks?', answer: 'Bookmarks pointing to deleted pages will be removed. Bookmarks to remaining pages are preserved.' },
    ],
  },


  // ==================== EDIT & ANNOTATE ====================
  'bookmark': {
    title: 'Edit Bookmarks',
    metaDescription: 'Add, edit, and manage PDF bookmarks. Create navigation structure for your documents.',
    keywords: ['pdf bookmarks', 'edit bookmarks', 'add bookmarks', 'pdf navigation', 'table of contents'],
    description: `
      <p>Edit Bookmarks allows you to create, modify, and organize bookmarks in your PDF documents. Bookmarks provide quick navigation to specific sections, making long documents easier to use.</p>
      <p>You can add new bookmarks, edit existing ones, reorganize the bookmark hierarchy, or import bookmarks from external sources. This tool is essential for creating professional, navigable documents.</p>
      <p>All editing happens locally in your browser, ensuring your documents remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Drag and drop your PDF file or click to select the document you want to edit.' },
      { step: 2, title: 'Manage Bookmarks', description: 'Add new bookmarks, edit existing ones, or drag to reorganize the hierarchy.' },
      { step: 3, title: 'Save and Download', description: 'Click Save to apply your changes and download the PDF with updated bookmarks.' },
    ],
    useCases: [
      { title: 'Create Navigation', description: 'Add bookmarks to long documents to help readers navigate to specific sections quickly.', icon: 'navigation' },
      { title: 'Organize Chapters', description: 'Create a hierarchical bookmark structure that mirrors your document\'s chapter organization.', icon: 'book-open' },
      { title: 'Improve Accessibility', description: 'Add bookmarks to make documents more accessible and user-friendly.', icon: 'accessibility' },
    ],
    faq: [
      { question: 'Can I create nested bookmarks?', answer: 'Yes, you can create a hierarchical structure with parent and child bookmarks.' },
      { question: 'Can I import bookmarks from a file?', answer: 'Yes, you can import bookmark structures from JSON or text files.' },
      { question: 'Will bookmarks work in all PDF readers?', answer: 'Yes, bookmarks are a standard PDF feature supported by all major PDF readers.' },
    ],
  },

  'table-of-contents': {
    title: 'Table of Contents',
    metaDescription: 'Generate a table of contents for your PDF. Create clickable navigation from bookmarks.',
    keywords: ['pdf table of contents', 'toc generator', 'pdf index', 'document navigation'],
    description: `
      <p>Table of Contents generates a navigable table of contents page for your PDF documents. The TOC can be created from existing bookmarks or custom entries, providing readers with an overview and quick navigation.</p>
      <p>Customize the appearance with different styles, fonts, and layouts. The generated TOC includes clickable links that jump directly to the referenced pages.</p>
      <p>All processing happens locally in your browser, ensuring your documents remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Drag and drop your PDF file or click to select the document.' },
      { step: 2, title: 'Configure TOC', description: 'Choose to generate from bookmarks or create custom entries. Select style and positioning options.' },
      { step: 3, title: 'Generate and Download', description: 'Click Generate to create the table of contents and download your updated PDF.' },
    ],
    useCases: [
      { title: 'Academic Papers', description: 'Add a professional table of contents to theses, dissertations, and research papers.', icon: 'graduation-cap' },
      { title: 'Business Reports', description: 'Create navigable reports with clear section listings for stakeholders.', icon: 'bar-chart' },
      { title: 'User Manuals', description: 'Generate comprehensive TOCs for technical documentation and user guides.', icon: 'book' },
    ],
    faq: [
      { question: 'Can I customize the TOC appearance?', answer: 'Yes, you can choose from different styles, fonts, and layouts for your table of contents.' },
      { question: 'Where is the TOC inserted?', answer: 'By default, the TOC is inserted at the beginning of the document, but you can choose a different location.' },
      { question: 'Are the TOC entries clickable?', answer: 'Yes, each entry is a clickable link that navigates to the corresponding page.' },
    ],
  },

  'page-numbers': {
    title: 'Page Numbers',
    metaDescription: 'Add page numbers to PDF documents. Customize position, format, and starting number.',
    keywords: ['add page numbers', 'pdf page numbers', 'number pdf pages', 'pdf pagination'],
    description: `
      <p>Page Numbers adds customizable page numbering to your PDF documents. Choose from various formats, positions, and styles to match your document's design.</p>
      <p>You can set the starting number, skip certain pages, and use different numbering formats (1, 2, 3 or i, ii, iii). Perfect for creating professional documents with proper pagination.</p>
      <p>All processing happens locally in your browser, ensuring your documents remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Drag and drop your PDF file or click to select the document.' },
      { step: 2, title: 'Configure Numbering', description: 'Choose position, format, starting number, and which pages to number.' },
      { step: 3, title: 'Apply and Download', description: 'Click Apply to add page numbers and download your updated PDF.' },
    ],
    useCases: [
      { title: 'Professional Documents', description: 'Add page numbers to reports, proposals, and business documents.', icon: 'file-text' },
      { title: 'Academic Papers', description: 'Number pages according to academic formatting requirements.', icon: 'graduation-cap' },
      { title: 'Legal Documents', description: 'Add proper pagination to contracts and legal filings.', icon: 'scale' },
    ],
    faq: [
      { question: 'Can I skip the first page?', answer: 'Yes, you can specify which pages to number and which to skip, such as title pages or cover pages.' },
      { question: 'What number formats are available?', answer: 'You can use Arabic numerals (1, 2, 3), Roman numerals (i, ii, iii or I, II, III), or letters (a, b, c).' },
      { question: 'Can I add "Page X of Y" format?', answer: 'Yes, you can include the total page count in your numbering format.' },
    ],
  },

  'add-watermark': {
    title: 'Add Watermark',
    metaDescription: 'Add text or image watermarks to PDF files. Protect and brand your documents.',
    keywords: ['add watermark', 'pdf watermark', 'stamp pdf', 'brand pdf', 'protect pdf'],
    description: `
      <p>Add Watermark allows you to place text or image watermarks on your PDF documents. Watermarks can indicate document status (Draft, Confidential), add branding, or deter unauthorized copying.</p>
      <p>Customize the watermark's position, size, opacity, rotation, and color. Apply to all pages or select specific pages. The tool supports both text watermarks and image watermarks.</p>
      <p>All processing happens locally in your browser, ensuring your documents remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Drag and drop your PDF file or click to select the document.' },
      { step: 2, title: 'Create Watermark', description: 'Enter text or upload an image for your watermark. Adjust position, size, opacity, and rotation.' },
      { step: 3, title: 'Apply and Download', description: 'Click Apply to add the watermark and download your updated PDF.' },
    ],
    useCases: [
      { title: 'Document Protection', description: 'Add "Confidential" or "Draft" watermarks to indicate document status.', icon: 'shield' },
      { title: 'Brand Documents', description: 'Add company logos or names to official documents.', icon: 'award' },
      { title: 'Copyright Notice', description: 'Add copyright information to protect intellectual property.', icon: 'copyright' },
    ],
    faq: [
      { question: 'Can I use an image as a watermark?', answer: 'Yes, you can upload PNG, JPG, or SVG images to use as watermarks.' },
      { question: 'Can I make the watermark semi-transparent?', answer: 'Yes, you can adjust the opacity from fully transparent to fully opaque.' },
      { question: 'Can I apply different watermarks to different pages?', answer: 'The tool applies the same watermark to selected pages. For different watermarks, process the document multiple times.' },
    ],
  },

  'header-footer': {
    title: 'Header & Footer',
    metaDescription: 'Add headers and footers to PDF documents. Include page numbers, dates, and custom text.',
    keywords: ['pdf header', 'pdf footer', 'add header footer', 'pdf letterhead'],
    description: `
      <p>Header & Footer adds customizable headers and footers to your PDF documents. Include page numbers, dates, document titles, or any custom text in the header or footer areas.</p>
      <p>Position content on the left, center, or right of the header/footer. Use different content for odd and even pages if needed. Perfect for creating professional documents with consistent formatting.</p>
      <p>All processing happens locally in your browser, ensuring your documents remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Drag and drop your PDF file or click to select the document.' },
      { step: 2, title: 'Configure Header/Footer', description: 'Enter text for header and footer areas. Add page numbers, dates, or custom text.' },
      { step: 3, title: 'Apply and Download', description: 'Click Apply to add headers/footers and download your updated PDF.' },
    ],
    useCases: [
      { title: 'Business Documents', description: 'Add company name and page numbers to professional documents.', icon: 'briefcase' },
      { title: 'Legal Documents', description: 'Include case numbers, dates, and page references in legal filings.', icon: 'scale' },
      { title: 'Academic Papers', description: 'Add running headers with paper title and author name.', icon: 'graduation-cap' },
    ],
    faq: [
      { question: 'Can I have different headers on odd and even pages?', answer: 'Yes, you can configure different content for odd and even pages.' },
      { question: 'Can I include the current date?', answer: 'Yes, you can insert dynamic date fields that show the current date.' },
      { question: 'Can I skip the header/footer on certain pages?', answer: 'Yes, you can specify which pages should have headers/footers and which should be skipped.' },
    ],
  },

  'invert-colors': {
    title: 'Invert Colors',
    metaDescription: 'Invert PDF colors for dark mode reading. Convert documents to negative colors.',
    keywords: ['invert pdf colors', 'pdf dark mode', 'negative pdf', 'reverse colors'],
    description: `
      <p>Invert Colors reverses the colors in your PDF documents, creating a negative image effect. This is particularly useful for creating dark mode versions of documents for easier reading in low-light conditions.</p>
      <p>The tool can invert all colors or selectively preserve certain elements like images. Perfect for reducing eye strain when reading documents at night.</p>
      <p>All processing happens locally in your browser, ensuring your documents remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Drag and drop your PDF file or click to select the document.' },
      { step: 2, title: 'Configure Options', description: 'Choose whether to invert all content or preserve images.' },
      { step: 3, title: 'Invert and Download', description: 'Click Invert to process the document and download the result.' },
    ],
    useCases: [
      { title: 'Night Reading', description: 'Create dark mode versions of documents for comfortable reading at night.', icon: 'moon' },
      { title: 'Reduce Eye Strain', description: 'Invert bright documents to reduce eye fatigue during extended reading.', icon: 'eye' },
      { title: 'Print Savings', description: 'Invert documents to reduce ink usage when printing drafts.', icon: 'printer' },
    ],
    faq: [
      { question: 'Will images be inverted too?', answer: 'By default, yes. You can choose to preserve original images while inverting text and backgrounds.' },
      { question: 'Can I invert only specific pages?', answer: 'Yes, you can select which pages to invert.' },
      { question: 'Is the inversion reversible?', answer: 'You can invert the document again to return to approximately the original colors.' },
    ],
  },

  'background-color': {
    title: 'Background Color',
    metaDescription: 'Change PDF background color. Add colored backgrounds to document pages.',
    keywords: ['pdf background color', 'change pdf background', 'colored pdf', 'pdf page color'],
    description: `
      <p>Background Color allows you to change or add background colors to your PDF pages. This can improve readability, add visual interest, or match your branding requirements.</p>
      <p>Choose any color for the background and apply it to all pages or selected pages. The tool preserves all existing content while adding the background layer.</p>
      <p>All processing happens locally in your browser, ensuring your documents remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Drag and drop your PDF file or click to select the document.' },
      { step: 2, title: 'Choose Color', description: 'Select a background color using the color picker or enter a hex code.' },
      { step: 3, title: 'Apply and Download', description: 'Click Apply to add the background and download your updated PDF.' },
    ],
    useCases: [
      { title: 'Improve Readability', description: 'Add a light cream or sepia background to reduce eye strain.', icon: 'eye' },
      { title: 'Brand Documents', description: 'Use brand colors as backgrounds for marketing materials.', icon: 'palette' },
      { title: 'Highlight Sections', description: 'Use different background colors to distinguish document sections.', icon: 'layers' },
    ],
    faq: [
      { question: 'Will the background cover existing content?', answer: 'No, the background is added behind existing content, preserving all text and images.' },
      { question: 'Can I use different colors for different pages?', answer: 'You would need to process the document multiple times for different colors on different pages.' },
      { question: 'Can I remove an existing background?', answer: 'This tool adds backgrounds. To remove backgrounds, you may need to use the Edit PDF tool.' },
    ],
  },

  'text-color': {
    title: 'Change Text Color',
    metaDescription: 'Change text color in PDF documents. Modify the color of all text content.',
    keywords: ['change pdf text color', 'pdf text color', 'modify text color', 'recolor pdf text'],
    description: `
      <p>Change Text Color allows you to modify the color of text in your PDF documents. This is useful for improving contrast, matching branding, or creating visual variations of documents.</p>
      <p>Select a new color and apply it to all text in the document. The tool processes text elements while preserving images and other content.</p>
      <p>All processing happens locally in your browser, ensuring your documents remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Drag and drop your PDF file or click to select the document.' },
      { step: 2, title: 'Choose Color', description: 'Select a new text color using the color picker or enter a hex code.' },
      { step: 3, title: 'Apply and Download', description: 'Click Apply to change the text color and download your updated PDF.' },
    ],
    useCases: [
      { title: 'Improve Contrast', description: 'Change text color to improve readability against the background.', icon: 'contrast' },
      { title: 'Brand Consistency', description: 'Update text colors to match brand guidelines.', icon: 'palette' },
      { title: 'Accessibility', description: 'Adjust text colors to meet accessibility contrast requirements.', icon: 'accessibility' },
    ],
    faq: [
      { question: 'Will all text be changed?', answer: 'Yes, the tool changes the color of all text elements in the document.' },
      { question: 'Can I change only specific text?', answer: 'This tool changes all text. For selective changes, use the Edit PDF tool.' },
      { question: 'Will formatted text (bold, italic) be preserved?', answer: 'Yes, text formatting is preserved; only the color is changed.' },
    ],
  },

  'add-stamps': {
    title: 'Add Stamps',
    metaDescription: 'Add stamps to PDF documents. Use preset or custom stamps for approval, review, and more.',
    keywords: ['pdf stamps', 'add stamp', 'approval stamp', 'pdf rubber stamp'],
    description: `
      <p>Add Stamps allows you to place stamp images on your PDF documents. Use preset stamps like "Approved", "Rejected", "Draft", or upload custom stamp images.</p>
      <p>Position stamps anywhere on the page, resize them, and apply to single or multiple pages. Perfect for document workflows, approvals, and status indicators.</p>
      <p>All processing happens locally in your browser, ensuring your documents remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Drag and drop your PDF file or click to select the document.' },
      { step: 2, title: 'Select Stamp', description: 'Choose a preset stamp or upload a custom stamp image.' },
      { step: 3, title: 'Position and Apply', description: 'Click to place the stamp, adjust position and size, then download.' },
    ],
    useCases: [
      { title: 'Document Approval', description: 'Add "Approved" or "Rejected" stamps to documents in review workflows.', icon: 'check-circle' },
      { title: 'Status Indication', description: 'Mark documents as "Draft", "Final", or "Confidential".', icon: 'tag' },
      { title: 'Quality Control', description: 'Add QC stamps to indicate inspection or review completion.', icon: 'clipboard-check' },
    ],
    faq: [
      { question: 'What preset stamps are available?', answer: 'Presets include Approved, Rejected, Draft, Final, Confidential, Copy, and more.' },
      { question: 'Can I upload custom stamps?', answer: 'Yes, you can upload PNG or JPG images to use as custom stamps.' },
      { question: 'Can I add multiple stamps to one document?', answer: 'Yes, you can add multiple stamps and position each one independently.' },
    ],
  },

  'remove-annotations': {
    title: 'Remove Annotations',
    metaDescription: 'Remove annotations from PDF files. Delete comments, highlights, and markup.',
    keywords: ['remove pdf annotations', 'delete comments', 'remove highlights', 'clean pdf'],
    description: `
      <p>Remove Annotations strips comments, highlights, sticky notes, and other annotations from your PDF documents. This creates a clean version of the document without markup.</p>
      <p>You can remove all annotations or selectively remove specific types. Perfect for creating final versions of reviewed documents or removing sensitive comments.</p>
      <p>All processing happens locally in your browser, ensuring your documents remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Drag and drop your PDF file or click to select the document.' },
      { step: 2, title: 'Select Annotation Types', description: 'Choose which types of annotations to remove: comments, highlights, links, etc.' },
      { step: 3, title: 'Remove and Download', description: 'Click Remove to strip annotations and download the clean PDF.' },
    ],
    useCases: [
      { title: 'Finalize Documents', description: 'Remove review comments and markup before publishing final documents.', icon: 'file-check' },
      { title: 'Privacy Protection', description: 'Remove comments that may contain sensitive information before sharing.', icon: 'shield' },
      { title: 'Clean Distribution', description: 'Create clean copies of annotated documents for distribution.', icon: 'copy' },
    ],
    faq: [
      { question: 'What types of annotations can be removed?', answer: 'Comments, highlights, underlines, strikethroughs, sticky notes, stamps, and links can all be removed.' },
      { question: 'Can I keep some annotations?', answer: 'Yes, you can select which types of annotations to remove and which to keep.' },
      { question: 'Is this reversible?', answer: 'No, annotation removal is permanent. Keep a backup of the original if needed.' },
    ],
  },

  'form-filler': {
    title: 'Form Filler',
    metaDescription: 'Fill PDF forms online. Complete interactive PDF forms without printing.',
    keywords: ['fill pdf form', 'pdf form filler', 'complete pdf form', 'interactive pdf'],
    description: `
      <p>Form Filler allows you to complete interactive PDF forms directly in your browser. Fill text fields, check boxes, select options, and add signatures without printing the document.</p>
      <p>The tool supports standard PDF forms and XFA forms. Your filled data can be saved and the form can be flattened to prevent further editing.</p>
      <p>All processing happens locally in your browser, ensuring your form data remains private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF Form', description: 'Drag and drop your PDF form or click to select the file.' },
      { step: 2, title: 'Fill the Form', description: 'Click on form fields to enter text, check boxes, or select options.' },
      { step: 3, title: 'Save and Download', description: 'Click Save to preserve your entries and download the filled form.' },
    ],
    useCases: [
      { title: 'Application Forms', description: 'Complete job applications, permit applications, and registration forms.', icon: 'clipboard' },
      { title: 'Tax Forms', description: 'Fill out tax documents and financial forms electronically.', icon: 'file-text' },
      { title: 'Contracts', description: 'Complete contract forms with your information before signing.', icon: 'file-signature' },
    ],
    faq: [
      { question: 'Can I save my progress?', answer: 'Yes, you can save partially filled forms and continue later.' },
      { question: 'What is form flattening?', answer: 'Flattening converts form fields to static content, preventing further editing.' },
      { question: 'Are XFA forms supported?', answer: 'Yes, the tool supports both standard AcroForms and XFA forms.' },
    ],
  },

  'form-creator': {
    title: 'Form Creator',
    metaDescription: 'Create fillable PDF forms. Add text fields, checkboxes, and dropdowns to documents.',
    keywords: ['create pdf form', 'pdf form creator', 'fillable pdf', 'add form fields'],
    description: `
      <p>Form Creator transforms static PDF documents into interactive fillable forms. Add text fields, checkboxes, radio buttons, dropdowns, and more to create professional forms.</p>
      <p>Drag and drop form elements onto your document, configure field properties, and create forms that can be filled electronically. Perfect for creating applications, surveys, and data collection forms.</p>
      <p>All processing happens locally in your browser, ensuring your documents remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Drag and drop your PDF file or click to select the document to convert into a form.' },
      { step: 2, title: 'Add Form Fields', description: 'Select field types from the toolbar and click to place them on the document.' },
      { step: 3, title: 'Configure and Save', description: 'Set field properties, then save and download your fillable PDF form.' },
    ],
    useCases: [
      { title: 'Application Forms', description: 'Create fillable job applications, membership forms, and registrations.', icon: 'user-plus' },
      { title: 'Surveys', description: 'Build interactive surveys and questionnaires for data collection.', icon: 'clipboard-list' },
      { title: 'Order Forms', description: 'Create product order forms with quantity fields and checkboxes.', icon: 'shopping-cart' },
    ],
    faq: [
      { question: 'What field types can I add?', answer: 'Text fields, checkboxes, radio buttons, dropdowns, date pickers, and signature fields.' },
      { question: 'Can I make fields required?', answer: 'Yes, you can mark fields as required and add validation rules.' },
      { question: 'Can I add calculations?', answer: 'Basic calculations like sum and average can be added to numeric fields.' },
    ],
  },

  'remove-blank-pages': {
    title: 'Remove Blank Pages',
    metaDescription: 'Automatically detect and remove blank pages from PDF documents.',
    keywords: ['remove blank pages', 'delete empty pages', 'clean pdf', 'pdf blank page remover'],
    description: `
      <p>Remove Blank Pages automatically detects and removes empty pages from your PDF documents. This is useful for cleaning up scanned documents, removing separator pages, or eliminating accidentally included blank pages.</p>
      <p>The tool uses intelligent detection to identify truly blank pages while preserving pages with minimal content. You can adjust the sensitivity threshold to control what counts as "blank".</p>
      <p>All processing happens locally in your browser, ensuring your documents remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Drag and drop your PDF file or click to select the document.' },
      { step: 2, title: 'Adjust Threshold', description: 'Set the blank detection threshold if needed (default works for most documents).' },
      { step: 3, title: 'Remove and Download', description: 'Click Remove to delete blank pages and download the cleaned PDF.' },
    ],
    useCases: [
      { title: 'Clean Scanned Documents', description: 'Remove blank pages from batch-scanned documents.', icon: 'scan' },
      { title: 'Remove Separators', description: 'Delete blank separator pages from merged documents.', icon: 'minus' },
      { title: 'Reduce File Size', description: 'Remove unnecessary blank pages to reduce document size.', icon: 'minimize-2' },
    ],
    faq: [
      { question: 'How does blank detection work?', answer: 'The tool analyzes page content and considers pages with minimal or no visible content as blank.' },
      { question: 'Can I preview which pages will be removed?', answer: 'Yes, detected blank pages are highlighted for review before removal.' },
      { question: 'What if a page has only a header/footer?', answer: 'You can adjust the threshold to determine whether pages with minimal content should be considered blank.' },
    ],
  },
  // ==================== CONVERT TO PDF ====================
  'image-to-pdf': {
    title: 'Image to PDF',
    metaDescription: 'Convert any image to PDF. Support for JPG, PNG, WebP, BMP, TIFF, SVG, and HEIC formats.',
    keywords: ['image to pdf', 'convert image', 'photo to pdf', 'picture to pdf'],
    description: `
      <p>Image to PDF converts images of any format into PDF documents. Support for JPG, PNG, WebP, BMP, TIFF, SVG, and HEIC formats makes this the universal image converter.</p>
      <p>Combine multiple images into a single PDF, arrange them in any order, and customize page size and orientation. Perfect for creating photo albums, document archives, or portfolios.</p>
      <p>All conversion happens in your browser, ensuring your images remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Images', description: 'Drag and drop images of any supported format or click to select files.' },
      { step: 2, title: 'Arrange and Configure', description: 'Reorder images and select page size and orientation options.' },
      { step: 3, title: 'Convert and Download', description: 'Click Convert to create your PDF and download the result.' },
    ],
    useCases: [
      { title: 'Photo Collections', description: 'Combine photos from various sources into a single PDF album.', icon: 'images' },
      { title: 'Mixed Format Documents', description: 'Convert images from different formats into a unified PDF.', icon: 'file-stack' },
      { title: 'Archive Creation', description: 'Create PDF archives from image collections for long-term storage.', icon: 'archive' },
    ],
    faq: [
      { question: 'What image formats are supported?', answer: 'JPG, JPEG, PNG, WebP, BMP, TIFF, TIF, SVG, HEIC, and HEIF formats are all supported.' },
      { question: 'Can I mix different image formats?', answer: 'Yes, you can combine images of different formats into a single PDF.' },
      { question: 'Will image quality be preserved?', answer: 'Yes, images are embedded at their original quality unless you choose to compress them.' },
    ],
  },

  'png-to-pdf': {
    title: 'PNG to PDF',
    metaDescription: 'Convert PNG images to PDF. Preserve transparency and combine multiple PNG files.',
    keywords: ['png to pdf', 'convert png', 'png converter', 'transparent image to pdf'],
    description: `
      <p>PNG to PDF converts your PNG images into PDF documents while preserving transparency. Perfect for graphics, logos, screenshots, and images with transparent backgrounds.</p>
      <p>Combine multiple PNG files into a single PDF, arrange them in any order, and customize page settings. The conversion maintains the high quality of your original images.</p>
      <p>All conversion happens in your browser, ensuring your images remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload PNG Files', description: 'Drag and drop your PNG images or click to select files.' },
      { step: 2, title: 'Arrange and Configure', description: 'Reorder images and select page size options.' },
      { step: 3, title: 'Convert and Download', description: 'Click Convert to create your PDF and download.' },
    ],
    useCases: [
      { title: 'Graphics Portfolio', description: 'Compile PNG graphics and designs into a professional portfolio.', icon: 'palette' },
      { title: 'Screenshot Documentation', description: 'Convert screenshots into PDF documentation.', icon: 'monitor' },
      { title: 'Logo Collections', description: 'Create PDF catalogs of logos and brand assets.', icon: 'award' },
    ],
    faq: [
      { question: 'Is transparency preserved?', answer: 'PNG transparency is preserved in the PDF output.' },
      { question: 'What about PNG animations?', answer: 'Animated PNGs are converted as static images using the first frame.' },
      { question: 'Can I set a background color?', answer: 'Yes, you can choose a background color for transparent areas.' },
    ],
  },

  'webp-to-pdf': {
    title: 'WebP to PDF',
    metaDescription: 'Convert WebP images to PDF. Modern image format conversion with quality preservation.',
    keywords: ['webp to pdf', 'convert webp', 'webp converter', 'web image to pdf'],
    description: `
      <p>WebP to PDF converts modern WebP images into PDF documents. WebP is a popular web image format, and this tool makes it easy to convert these images for printing or archiving.</p>
      <p>Combine multiple WebP files into a single PDF with customizable page settings. The conversion preserves image quality while creating compact PDF files.</p>
      <p>All conversion happens in your browser, ensuring your images remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload WebP Files', description: 'Drag and drop your WebP images or click to select files.' },
      { step: 2, title: 'Configure Options', description: 'Arrange images and select page size and orientation.' },
      { step: 3, title: 'Convert and Download', description: 'Click Convert to create your PDF.' },
    ],
    useCases: [
      { title: 'Web Content Archiving', description: 'Convert web images to PDF for offline archiving.', icon: 'globe' },
      { title: 'Print Preparation', description: 'Convert WebP images to PDF for printing purposes.', icon: 'printer' },
      { title: 'Format Standardization', description: 'Convert modern WebP to universally compatible PDF.', icon: 'file-check' },
    ],
    faq: [
      { question: 'What is WebP format?', answer: 'WebP is a modern image format developed by Google that provides superior compression for web images.' },
      { question: 'Is quality preserved?', answer: 'Yes, the conversion preserves the original image quality.' },
      { question: 'Can I convert animated WebP?', answer: 'Animated WebP files are converted as static images.' },
    ],
  },

  'svg-to-pdf': {
    title: 'SVG to PDF',
    metaDescription: 'Convert SVG vector graphics to PDF. Preserve scalability and quality.',
    keywords: ['svg to pdf', 'convert svg', 'vector to pdf', 'scalable graphics to pdf'],
    description: `
      <p>SVG to PDF converts scalable vector graphics into PDF documents while preserving their vector quality. SVG files remain sharp at any size, and this quality is maintained in the PDF output.</p>
      <p>Perfect for converting logos, icons, illustrations, and technical drawings. The resulting PDF maintains the scalability of the original vector graphics.</p>
      <p>All conversion happens in your browser, ensuring your files remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload SVG Files', description: 'Drag and drop your SVG files or click to select.' },
      { step: 2, title: 'Configure Settings', description: 'Select page size and arrangement options.' },
      { step: 3, title: 'Convert and Download', description: 'Click Convert to create your vector PDF.' },
    ],
    useCases: [
      { title: 'Logo Conversion', description: 'Convert SVG logos to PDF for print materials.', icon: 'award' },
      { title: 'Technical Drawings', description: 'Convert CAD exports and technical illustrations to PDF.', icon: 'ruler' },
      { title: 'Icon Collections', description: 'Create PDF catalogs of icon sets and graphics.', icon: 'grid' },
    ],
    faq: [
      { question: 'Is vector quality preserved?', answer: 'Yes, SVG vector quality is fully preserved in the PDF output.' },
      { question: 'Can I convert complex SVGs?', answer: 'Yes, complex SVGs with gradients, filters, and effects are supported.' },
      { question: 'What about embedded fonts?', answer: 'Embedded fonts in SVG files are preserved in the PDF.' },
    ],
  },

  'bmp-to-pdf': {
    title: 'BMP to PDF',
    metaDescription: 'Convert BMP bitmap images to PDF. Legacy format support with quality preservation.',
    keywords: ['bmp to pdf', 'convert bmp', 'bitmap to pdf', 'bmp converter'],
    description: `
      <p>BMP to PDF converts bitmap images into PDF documents. BMP is a legacy image format commonly used in Windows environments, and this tool makes it easy to convert these files to modern PDF format.</p>
      <p>Combine multiple BMP files into a single PDF with customizable settings. The conversion compresses the typically large BMP files while maintaining image quality.</p>
      <p>All conversion happens in your browser, ensuring your images remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload BMP Files', description: 'Drag and drop your BMP images or click to select files.' },
      { step: 2, title: 'Configure Options', description: 'Arrange images and select page settings.' },
      { step: 3, title: 'Convert and Download', description: 'Click Convert to create your PDF.' },
    ],
    useCases: [
      { title: 'Legacy File Conversion', description: 'Convert old BMP files to modern PDF format.', icon: 'history' },
      { title: 'Windows Screenshots', description: 'Convert Windows bitmap screenshots to PDF.', icon: 'monitor' },
      { title: 'Archive Modernization', description: 'Update legacy image archives to PDF format.', icon: 'archive' },
    ],
    faq: [
      { question: 'Will file size be reduced?', answer: 'Yes, BMP files are typically compressed significantly when converted to PDF.' },
      { question: 'Is quality preserved?', answer: 'Yes, image quality is maintained during conversion.' },
      { question: 'What BMP color depths are supported?', answer: 'All standard BMP color depths are supported, including 24-bit and 32-bit.' },
    ],
  },

  'psd-to-pdf': {
    title: 'PSD to PDF',
    metaDescription: 'Convert Adobe Photoshop (PSD) files to PDF format. Supports multiple files and preserves image quality.',
    keywords: ['psd to pdf', 'convert psd', 'photoshop to pdf', 'psd converter', 'adobe psd to pdf'],
    description: `
      <p>PSD to PDF converts Adobe Photoshop (PSD) files into PDF documents. This tool allows you to view and share PSD designs without needing Photoshop installed.</p>
      <p>You can convert multiple PSD files at once and combine them into a single PDF document. The tool processes each PSD file, rendering the visible layers into high-quality PDF pages.</p>
      <p>All conversion happens locally in your browser, ensuring your designs remain private and secure.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload PSD Files', description: 'Drag and drop your PSD or PSB files, or click to select them from your device.' },
      { step: 2, title: 'Arrange Order', description: 'Drag and drop the file thumbnails to arrange them in the desired order.' },
      { step: 3, title: 'Convert and Download', description: 'Click Convert to render the PSDs and download your PDF document.' },
    ],
    useCases: [
      { title: 'Share Designs', description: 'Share Photoshop designs with clients or colleagues who don\'t have Photoshop.', icon: 'share-2' },
      { title: 'Portfolio Creation', description: 'Compile your design work into a professional PDF portfolio.', icon: 'layout' },
      { title: 'Print Preparation', description: 'Convert designs to PDF for printing purposes.', icon: 'printer' },
    ],
    faq: [
      { question: 'Do I need Photoshop installed?', answer: 'No, this tool works entirely in your browser without requiring Adobe Photoshop.' },
      { question: 'Are layers preserved?', answer: 'The tool renders the visible state of the PSD (composite image). Individual layers are flattened in the PDF.' },
      { question: 'What is the maximum file size?', answer: 'You can upload files up to 100MB each. Large PSD files may take a moment to process.' },
    ],
  },

  'heic-to-pdf': {
    title: 'HEIC to PDF',
    metaDescription: 'Convert iPhone HEIC photos to PDF. Apple image format conversion made easy.',
    keywords: ['heic to pdf', 'convert heic', 'iphone photo to pdf', 'apple image to pdf'],
    description: `
      <p>HEIC to PDF converts Apple's High Efficiency Image Format photos into PDF documents. HEIC is the default photo format on iPhones and iPads, and this tool makes sharing these photos easy.</p>
      <p>Combine multiple HEIC photos into a single PDF, perfect for creating photo albums or document archives from your iPhone photos.</p>
      <p>All conversion happens in your browser, ensuring your photos remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload HEIC Files', description: 'Drag and drop your HEIC photos or click to select files.' },
      { step: 2, title: 'Arrange Photos', description: 'Reorder photos and select page settings.' },
      { step: 3, title: 'Convert and Download', description: 'Click Convert to create your PDF.' },
    ],
    useCases: [
      { title: 'iPhone Photo Albums', description: 'Create PDF albums from iPhone photos for sharing.', icon: 'smartphone' },
      { title: 'Document Scanning', description: 'Convert iPhone document scans to PDF format.', icon: 'scan' },
      { title: 'Cross-Platform Sharing', description: 'Convert HEIC to PDF for universal compatibility.', icon: 'share-2' },
    ],
    faq: [
      { question: 'What is HEIC format?', answer: 'HEIC (High Efficiency Image Container) is Apple\'s image format that provides better compression than JPEG.' },
      { question: 'Are Live Photos supported?', answer: 'Live Photos are converted as static images using the key frame.' },
      { question: 'Is EXIF data preserved?', answer: 'Photo metadata can be optionally preserved or removed during conversion.' },
    ],
  },

  'tiff-to-pdf': {
    title: 'TIFF to PDF',
    metaDescription: 'Convert TIFF images to PDF. Support for multi-page TIFF files and high-quality conversion.',
    keywords: ['tiff to pdf', 'convert tiff', 'tif to pdf', 'multi-page tiff'],
    description: `
      <p>TIFF to PDF converts TIFF images, including multi-page TIFF files, into PDF documents. TIFF is commonly used for high-quality scans and professional graphics.</p>
      <p>Multi-page TIFF files are automatically converted to multi-page PDFs. The conversion preserves the high quality of your original images.</p>
      <p>All conversion happens in your browser, ensuring your files remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload TIFF Files', description: 'Drag and drop your TIFF files or click to select.' },
      { step: 2, title: 'Configure Options', description: 'Select page settings and compression options.' },
      { step: 3, title: 'Convert and Download', description: 'Click Convert to create your PDF.' },
    ],
    useCases: [
      { title: 'Scanned Documents', description: 'Convert high-quality scans from TIFF to PDF.', icon: 'scan' },
      { title: 'Professional Graphics', description: 'Convert professional TIFF graphics for distribution.', icon: 'image' },
      { title: 'Archive Conversion', description: 'Convert TIFF archives to more accessible PDF format.', icon: 'archive' },
    ],
    faq: [
      { question: 'Are multi-page TIFFs supported?', answer: 'Yes, multi-page TIFF files are converted to multi-page PDFs automatically.' },
      { question: 'Is quality preserved?', answer: 'Yes, TIFF quality is fully preserved in the PDF output.' },
      { question: 'What compression is used?', answer: 'You can choose between lossless and lossy compression options.' },
    ],
  },

  'txt-to-pdf': {
    title: 'Text to PDF',
    metaDescription: 'Convert plain text files to PDF. Customize fonts, margins, and page layout.',
    keywords: ['txt to pdf', 'text to pdf', 'convert text file', 'plain text to pdf'],
    description: `
      <p>Text to PDF converts plain text files into formatted PDF documents. Customize fonts, sizes, margins, and page layout to create professional-looking documents from simple text.</p>
      <p>Perfect for converting code files, logs, notes, or any plain text content into shareable PDF format.</p>
      <p>All conversion happens in your browser, ensuring your files remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Text File', description: 'Drag and drop your .txt file or click to select.' },
      { step: 2, title: 'Customize Formatting', description: 'Choose font, size, margins, and page settings.' },
      { step: 3, title: 'Convert and Download', description: 'Click Convert to create your formatted PDF.' },
    ],
    useCases: [
      { title: 'Code Documentation', description: 'Convert source code files to PDF for documentation.', icon: 'code' },
      { title: 'Log Archives', description: 'Convert log files to PDF for archival purposes.', icon: 'file-text' },
      { title: 'Note Conversion', description: 'Convert plain text notes to formatted PDF documents.', icon: 'sticky-note' },
    ],
    faq: [
      { question: 'What fonts are available?', answer: 'Multiple fonts are available including monospace fonts for code.' },
      { question: 'Is line wrapping automatic?', answer: 'Yes, long lines are automatically wrapped to fit the page.' },
      { question: 'Can I preserve formatting?', answer: 'Whitespace and indentation from the original text are preserved.' },
    ],
  },

  'json-to-pdf': {
    title: 'JSON to PDF',
    metaDescription: 'Convert JSON files to formatted PDF. Syntax highlighting and structured output.',
    keywords: ['json to pdf', 'convert json', 'json viewer', 'json formatter'],
    description: `
      <p>JSON to PDF converts JSON data files into formatted, readable PDF documents. The output includes syntax highlighting and proper indentation for easy reading.</p>
      <p>Perfect for documenting API responses, configuration files, or any JSON data that needs to be shared or archived in a readable format.</p>
      <p>All conversion happens in your browser, ensuring your data remains private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload JSON File', description: 'Drag and drop your .json file or click to select.' },
      { step: 2, title: 'Configure Display', description: 'Choose formatting options and syntax highlighting.' },
      { step: 3, title: 'Convert and Download', description: 'Click Convert to create your formatted PDF.' },
    ],
    useCases: [
      { title: 'API Documentation', description: 'Convert API responses to PDF for documentation.', icon: 'code' },
      { title: 'Config Archives', description: 'Archive configuration files in readable PDF format.', icon: 'settings' },
      { title: 'Data Reports', description: 'Create PDF reports from JSON data exports.', icon: 'bar-chart' },
    ],
    faq: [
      { question: 'Is syntax highlighting included?', answer: 'Yes, JSON syntax is highlighted with colors for keys, values, and types.' },
      { question: 'How is nested data handled?', answer: 'Nested objects and arrays are properly indented for readability.' },
      { question: 'What about large JSON files?', answer: 'Large files are paginated automatically across multiple pages.' },
    ],
  },

  'word-to-pdf': {
    title: 'Word to PDF',
    metaDescription: 'Convert Word documents (DOCX) to PDF. Preserve formatting and layout in your converted documents.',
    keywords: ['word to pdf', 'docx to pdf', 'convert word', 'word converter', 'microsoft word to pdf'],
    description: `
      <p>Word to PDF converts Microsoft Word documents into PDF format while preserving the original formatting, layout, and content structure.</p>
      <p>Upload your DOCX files and get high-quality PDF output suitable for sharing, printing, or archiving. The conversion maintains text formatting, paragraph styles, and basic document structure.</p>
      <p>All conversion happens locally in your browser, ensuring your documents remain private and secure.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Word Document', description: 'Drag and drop your .docx file or click to select from your device.' },
      { step: 2, title: 'Wait for Processing', description: 'The tool will load the document and prepare it for conversion.' },
      { step: 3, title: 'Download PDF', description: 'Click Download to save your converted PDF document.' },
    ],
    useCases: [
      { title: 'Document Sharing', description: 'Convert Word documents to PDF for universal sharing and viewing.', icon: 'share-2' },
      { title: 'Print Preparation', description: 'Create print-ready PDFs from Word documents.', icon: 'printer' },
      { title: 'Document Archive', description: 'Archive Word documents in stable PDF format for long-term storage.', icon: 'archive' },
    ],
    faq: [
      { question: 'Is .doc format supported?', answer: 'Currently only .docx format is supported. Please convert .doc files to .docx first using Microsoft Word or LibreOffice.' },
      { question: 'Are images preserved?', answer: 'Text content and basic formatting are preserved. Complex layouts with many images may have simplified rendering.' },
      { question: 'Is the conversion secure?', answer: 'Yes, all processing happens in your browser. Your documents never leave your device.' },
    ],
  },

  'excel-to-pdf': {
    title: 'Excel to PDF',
    metaDescription: 'Convert Excel spreadsheets (XLSX) to PDF. Preserve tables and data in your converted documents.',
    keywords: ['excel to pdf', 'xlsx to pdf', 'convert excel', 'spreadsheet to pdf', 'microsoft excel to pdf'],
    description: `
      <p>Excel to PDF converts Microsoft Excel spreadsheets into PDF format while preserving table structure and data organization.</p>
      <p>Upload your XLSX files and get clean PDF output with properly formatted tables. Each sheet in your workbook becomes a separate section in the PDF.</p>
      <p>All conversion happens locally in your browser, ensuring your data remains private and secure.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Excel File', description: 'Drag and drop your .xlsx file or click to select from your device.' },
      { step: 2, title: 'Wait for Processing', description: 'The tool will load the spreadsheet and convert all sheets.' },
      { step: 3, title: 'Download PDF', description: 'Click Download to save your converted PDF document.' },
    ],
    useCases: [
      { title: 'Report Sharing', description: 'Convert Excel reports to PDF for distribution to stakeholders.', icon: 'file-text' },
      { title: 'Data Archiving', description: 'Archive spreadsheet data in stable PDF format.', icon: 'archive' },
      { title: 'Print Preparation', description: 'Create print-ready PDFs from Excel worksheets.', icon: 'printer' },
    ],
    faq: [
      { question: 'Are multiple sheets supported?', answer: 'Yes, all sheets in the workbook are converted and included in the PDF.' },
      { question: 'Is .xls format supported?', answer: 'Currently only .xlsx format is supported. Please save .xls files as .xlsx first.' },
      { question: 'Are formulas preserved?', answer: 'The PDF shows calculated values. Formulas are not executable in PDF format.' },
    ],
  },

  'pptx-to-pdf': {
    title: 'PowerPoint to PDF',
    metaDescription: 'Convert PowerPoint presentations (PPTX) to PDF. Preserve slides and content for easy sharing.',
    keywords: ['powerpoint to pdf', 'pptx to pdf', 'convert pptx', 'presentation to pdf', 'slides to pdf'],
    description: `
      <p>PowerPoint to PDF converts Microsoft PowerPoint presentations into PDF format, preserving slide content and text for easy sharing and viewing.</p>
      <p>Each slide becomes a page in the PDF, maintaining the presentation flow. Perfect for sharing presentations with people who don't have PowerPoint installed.</p>
      <p>All conversion happens locally in your browser, ensuring your presentations remain private and secure.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload PowerPoint File', description: 'Drag and drop your .pptx file or click to select from your device.' },
      { step: 2, title: 'Wait for Processing', description: 'The tool will extract slide content and create the PDF.' },
      { step: 3, title: 'Download PDF', description: 'Click Download to save your converted PDF document.' },
    ],
    useCases: [
      { title: 'Presentation Sharing', description: 'Share presentations with anyone without requiring PowerPoint.', icon: 'share-2' },
      { title: 'Handout Creation', description: 'Create PDF handouts from your presentation slides.', icon: 'file-text' },
      { title: 'Archive Presentations', description: 'Archive presentations in stable PDF format.', icon: 'archive' },
    ],
    faq: [
      { question: 'Are animations preserved?', answer: 'PDF is a static format, so animations and transitions are not preserved. Each slide becomes a static page.' },
      { question: 'Is .ppt format supported?', answer: 'Currently only .pptx format is supported. Please convert .ppt files to .pptx first.' },
      { question: 'Are speaker notes included?', answer: 'Currently, speaker notes are not included in the PDF output.' },
    ],
  },

  'xps-to-pdf': {
    title: 'XPS to PDF',
    metaDescription: 'Convert XPS documents to PDF format. High-fidelity conversion preserving layout and graphics.',
    keywords: ['xps to pdf', 'convert xps', 'xps converter', 'microsoft xps to pdf', 'oxps to pdf'],
    description: `
      <p>XPS to PDF converts Microsoft XPS (XML Paper Specification) documents into PDF format while preserving the original layout, text, and vector graphics.</p>
      <p>XPS is a fixed-document format similar to PDF. This tool provides high-fidelity conversion using native XPS parsing, ensuring accurate reproduction of your documents.</p>
      <p>All conversion happens locally in your browser, ensuring your documents remain private and secure.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload XPS File', description: 'Drag and drop your .xps file or click to select from your device.' },
      { step: 2, title: 'Wait for Processing', description: 'The tool will parse and convert the XPS document.' },
      { step: 3, title: 'Download PDF', description: 'Click Download to save your converted PDF document.' },
    ],
    useCases: [
      { title: 'Format Conversion', description: 'Convert XPS documents to more widely supported PDF format.', icon: 'file' },
      { title: 'Document Sharing', description: 'Share XPS documents with users who don\'t have XPS viewers.', icon: 'share-2' },
      { title: 'Archive Migration', description: 'Migrate XPS archives to PDF format for better compatibility.', icon: 'archive' },
    ],
    faq: [
      { question: 'What is XPS format?', answer: 'XPS (XML Paper Specification) is Microsoft\'s fixed-document format, similar to PDF. It\'s commonly used for Windows printing.' },
      { question: 'Is the conversion lossless?', answer: 'Yes, the conversion preserves text, graphics, and layout with high fidelity.' },
      { question: 'Are multi-page XPS files supported?', answer: 'Yes, all pages in the XPS document are converted to the PDF.' },
    ],
  },

  'rtf-to-pdf': {
    title: 'RTF to PDF',
    metaDescription: 'Convert RTF (Rich Text Format) files to PDF. Preserve text formatting in your documents.',
    keywords: ['rtf to pdf', 'convert rtf', 'rich text to pdf', 'rtf converter'],
    description: `
      <p>RTF to PDF converts Rich Text Format files into PDF documents. RTF is a widely supported text format that includes basic formatting like fonts, colors, and styles.</p>
      <p>Upload your RTF files and get clean PDF output while preserving text content and basic formatting. Perfect for converting legacy documents to modern PDF format.</p>
      <p>All conversion happens locally in your browser, ensuring your documents remain private and secure.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload RTF File', description: 'Drag and drop your .rtf file or click to select from your device.' },
      { step: 2, title: 'Wait for Processing', description: 'The tool will parse and convert the RTF content.' },
      { step: 3, title: 'Download PDF', description: 'Click Download to save your converted PDF document.' },
    ],
    useCases: [
      { title: 'Legacy Conversion', description: 'Convert old RTF documents to modern PDF format.', icon: 'history' },
      { title: 'Document Sharing', description: 'Share RTF documents in universally viewable PDF format.', icon: 'share-2' },
      { title: 'Archive Documents', description: 'Archive RTF files in stable PDF format for long-term storage.', icon: 'archive' },
    ],
    faq: [
      { question: 'What formatting is preserved?', answer: 'Basic text formatting including fonts, paragraphs, and styles are converted. Complex RTF features may be simplified.' },
      { question: 'Can I convert multiple RTF files?', answer: 'Currently, one file is converted at a time. Use Merge PDF to combine multiple converted files.' },
      { question: 'Are embedded images supported?', answer: 'Text content is the primary focus. Embedded objects may not be rendered.' },
    ],
  },

  'epub-to-pdf': {
    title: 'EPUB to PDF',
    metaDescription: 'Convert EPUB e-books to PDF. Preserve formatting, images, and chapter structure.',
    keywords: ['epub to pdf', 'convert epub', 'ebook to pdf', 'epub converter'],
    description: `
      <p>EPUB to PDF converts electronic book files into high-quality PDF documents. EPUB is the most popular e-book format, used by most e-readers and digital libraries.</p>
      <p>This tool preserves text formatting, images, and the chapter structure of your e-books. Perfect for printing, archiving, or sharing e-books in a universally viewable format.</p>
      <p>All conversion happens locally in your browser using advanced rendering technology, ensuring your books remain private and the conversion is fast.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload EPUB File', description: 'Drag and drop your .epub file or click to select from your device.' },
      { step: 2, title: 'Wait for Conversion', description: 'The tool will render and convert all pages of your e-book.' },
      { step: 3, title: 'Download PDF', description: 'Click Download to save your converted PDF document.' },
    ],
    useCases: [
      { title: 'Print E-books', description: 'Convert e-books to PDF for physical printing.', icon: 'printer' },
      { title: 'Archive Books', description: 'Store e-books in long-term stable PDF format.', icon: 'archive' },
      { title: 'Share Documents', description: 'Share e-books with anyone, even without an e-reader.', icon: 'share-2' },
    ],
    faq: [
      { question: 'Is the formatting preserved?', answer: 'Yes! This tool uses native EPUB rendering, preserving text formatting, images, and layout with high fidelity.' },
      { question: 'Are DRM-protected EPUBs supported?', answer: 'No, DRM-protected e-books cannot be converted. Only DRM-free EPUB files are supported.' },
      { question: 'How is page size determined?', answer: 'EPUB content is rendered to standard A4 page size for optimal readability.' },
    ],
  },

  'mobi-to-pdf': {
    title: 'MOBI to PDF',
    metaDescription: 'Convert MOBI e-books to PDF. Support for Kindle format with high-quality rendering.',
    keywords: ['mobi to pdf', 'convert mobi', 'kindle to pdf', 'azw to pdf', 'mobi converter'],
    description: `
      <p>MOBI to PDF converts Amazon Kindle e-book files into high-quality PDF documents. MOBI format (including AZW and AZW3) is Amazon's proprietary e-book format used on Kindle devices.</p>
      <p>This tool preserves text formatting, images, and the structure of your Kindle books. Perfect for printing, archiving, or reading on devices that don't support MOBI format.</p>
      <p>All conversion happens locally in your browser using advanced rendering technology, ensuring your books remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload MOBI File', description: 'Drag and drop your .mobi, .azw, or .azw3 file or click to select from your device.' },
      { step: 2, title: 'Wait for Conversion', description: 'The tool will render and convert all pages of your e-book.' },
      { step: 3, title: 'Download PDF', description: 'Click Download to save your converted PDF document.' },
    ],
    useCases: [
      { title: 'Print Kindle Books', description: 'Convert Kindle e-books to PDF for physical printing.', icon: 'printer' },
      { title: 'Archive Books', description: 'Store Kindle books in universal PDF format.', icon: 'archive' },
      { title: 'Cross-Device Reading', description: 'Read Kindle books on devices that only support PDF.', icon: 'tablet-smartphone' },
    ],
    faq: [
      { question: 'What MOBI formats are supported?', answer: 'This tool supports .mobi, .azw, and .azw3 files (non-DRM versions).' },
      { question: 'Are DRM-protected Kindle books supported?', answer: 'No, DRM-protected e-books cannot be converted. Only DRM-free files are supported.' },
      { question: 'Will my formatting be preserved?', answer: 'Yes! The tool uses native MOBI rendering to preserve text, images, and layout.' },
    ],
  },

  'djvu-to-pdf': {
    title: 'DJVU to PDF',
    metaDescription: 'Convert DJVU document files to PDF. High-quality rendering for scanned documents and books.',
    keywords: ['djvu to pdf', 'convert djvu', 'djvu converter', 'djvu pdf', 'djv to pdf'],
    description: `
      <p>DJVU to PDF converts DjVu document files into high-quality PDF documents. DjVu is a computer file format designed primarily to store scanned documents, especially those containing a combination of text, line drawings, and photographs.</p>
      <p>This tool renders each page of your DJVU file at your chosen DPI (dots per inch) and combines them into a searchable PDF document. Perfect for converting scanned books, technical manuals, and archival documents.</p>
      <p>All conversion happens locally in your browser, ensuring your documents remain private and secure.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload DJVU File', description: 'Drag and drop your .djvu or .djv file, or click to select from your device.' },
      { step: 2, title: 'Configure Options', description: 'Choose output DPI (72, 150, or 300) and image quality for the PDF.' },
      { step: 3, title: 'Convert & Download', description: 'Click Convert to PDF and download your converted document.' },
    ],
    useCases: [
      { title: 'Archive Documents', description: 'Convert DJVU archives to universal PDF format.', icon: 'archive' },
      { title: 'Share Scanned Books', description: 'Share scanned books in PDF format for wider compatibility.', icon: 'share-2' },
      { title: 'Print Documents', description: 'Convert DJVU to high-quality PDF for printing.', icon: 'printer' },
    ],
    faq: [
      { question: 'What is DJVU format?', answer: 'DjVu is a file format designed for storing scanned documents, especially those with text, drawings, and images. It offers better compression than PDF for scanned content.' },
      { question: 'What DPI should I choose?', answer: '72 DPI is suitable for web viewing, 150 DPI for standard documents, and 300 DPI for high-quality printing.' },
      { question: 'Will the text be searchable?', answer: 'The text will be rendered as images. If you need searchable text, consider using our OCR PDF tool after conversion.' },
    ],
  },

  'fb2-to-pdf': {
    title: 'FB2 to PDF',
    metaDescription: 'Convert FictionBook (FB2) e-books to PDF. Supports multiple files with high-quality rendering.',
    keywords: ['fb2 to pdf', 'convert fb2', 'fictionbook to pdf', 'fb2 converter', 'fb2.zip to pdf'],
    description: `
      <p>FB2 to PDF converts FictionBook (FB2) e-book files into high-quality PDF documents. FB2 is a popular XML-based e-book format widely used in Russia and Eastern Europe.</p>
      <p>This tool supports both .fb2 and .fb2.zip files, and can process multiple files at once. It preserves text formatting, images, and the chapter structure of your e-books.</p>
      <p>All conversion happens locally in your browser using advanced rendering technology, ensuring your books remain private and the conversion is fast.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload FB2 Files', description: 'Drag and drop one or more .fb2 or .fb2.zip files, or click to select from your device.' },
      { step: 2, title: 'Select Quality', description: 'Choose output quality: Low (72 DPI), Medium (150 DPI), or High (300 DPI).' },
      { step: 3, title: 'Convert & Download', description: 'Click Convert to PDF and download your converted document(s).' },
    ],
    useCases: [
      { title: 'Print E-books', description: 'Convert FB2 e-books to PDF for physical printing.', icon: 'printer' },
      { title: 'Batch Conversion', description: 'Convert multiple FB2 files to PDF at once.', icon: 'layers' },
      { title: 'Universal Format', description: 'Share e-books in PDF format that works on any device.', icon: 'share-2' },
    ],
    faq: [
      { question: 'Can I convert multiple FB2 files at once?', answer: 'Yes! This tool supports batch conversion of up to 20 FB2 files simultaneously.' },
      { question: 'Are .fb2.zip files supported?', answer: 'Yes, the tool automatically extracts and converts FB2 files from .fb2.zip archives.' },
      { question: 'Is the formatting preserved?', answer: 'Yes! The tool uses native FB2 rendering, preserving text formatting, images, and chapter structure with high fidelity.' },
    ],
  },

  // ==================== CONVERT FROM PDF ====================

  'pdf-to-jpg': {
    title: 'PDF to JPG',
    metaDescription: 'Convert PDF pages to JPG images. High-quality extraction with customizable resolution.',
    keywords: ['pdf to jpg', 'pdf to jpeg', 'convert pdf to image', 'extract pdf images'],
    description: `
      <p>PDF to JPG converts PDF document pages into high-quality JPG images. Extract all pages or select specific pages to convert, with customizable resolution and quality settings.</p>
      <p>Perfect for extracting images from PDFs, creating thumbnails, or converting documents for web use.</p>
      <p>All conversion happens in your browser, ensuring your documents remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Drag and drop your PDF file or click to select.' },
      { step: 2, title: 'Select Pages and Quality', description: 'Choose which pages to convert and set quality/DPI options.' },
      { step: 3, title: 'Convert and Download', description: 'Click Convert to extract images and download as ZIP.' },
    ],
    useCases: [
      { title: 'Web Publishing', description: 'Convert PDF pages to images for website use.', icon: 'globe' },
      { title: 'Social Media', description: 'Extract pages as images for social media sharing.', icon: 'share-2' },
      { title: 'Presentations', description: 'Convert PDF slides to images for presentations.', icon: 'presentation' },
    ],
    faq: [
      { question: 'What quality settings are available?', answer: 'You can set DPI from 72 to 300 and JPEG quality from 1-100.' },
      { question: 'Can I convert specific pages only?', answer: 'Yes, you can select individual pages or page ranges to convert.' },
      { question: 'How are multiple pages handled?', answer: 'Each page becomes a separate JPG file, downloaded as a ZIP archive.' },
    ],
  },

  'pdf-to-png': {
    title: 'PDF to PNG',
    metaDescription: 'Convert PDF pages to PNG images. Lossless quality with transparency support.',
    keywords: ['pdf to png', 'convert pdf to png', 'pdf image extraction', 'lossless pdf conversion'],
    description: `
      <p>PDF to PNG converts PDF document pages into high-quality PNG images with lossless compression. PNG format preserves image quality perfectly and supports transparency.</p>
      <p>Ideal for extracting graphics, diagrams, or any content where quality preservation is critical.</p>
      <p>All conversion happens in your browser, ensuring your documents remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Drag and drop your PDF file or click to select.' },
      { step: 2, title: 'Configure Options', description: 'Select pages and set resolution (DPI) options.' },
      { step: 3, title: 'Convert and Download', description: 'Click Convert to extract PNG images.' },
    ],
    useCases: [
      { title: 'Graphics Extraction', description: 'Extract diagrams and graphics with perfect quality.', icon: 'image' },
      { title: 'Design Assets', description: 'Convert PDF designs to PNG for editing software.', icon: 'palette' },
      { title: 'Documentation', description: 'Create high-quality images for technical documentation.', icon: 'file-text' },
    ],
    faq: [
      { question: 'Why choose PNG over JPG?', answer: 'PNG offers lossless compression and transparency support, ideal for graphics and text.' },
      { question: 'Are transparent backgrounds supported?', answer: 'Yes, PDF pages with transparency are preserved in PNG output.' },
      { question: 'What DPI should I use?', answer: 'Use 150 DPI for screen viewing, 300 DPI for printing.' },
    ],
  },

  'pdf-to-webp': {
    title: 'PDF to WebP',
    metaDescription: 'Convert PDF pages to WebP images. Modern format with excellent compression.',
    keywords: ['pdf to webp', 'convert pdf to webp', 'modern image format', 'web optimized images'],
    description: `
      <p>PDF to WebP converts PDF document pages into WebP images, Google's modern image format that offers excellent compression with high quality.</p>
      <p>WebP images are smaller than JPG or PNG while maintaining comparable quality, making them ideal for web use.</p>
      <p>All conversion happens in your browser, ensuring your documents remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Drag and drop your PDF file or click to select.' },
      { step: 2, title: 'Set Quality Options', description: 'Choose pages and set quality/compression settings.' },
      { step: 3, title: 'Convert and Download', description: 'Click Convert to create WebP images.' },
    ],
    useCases: [
      { title: 'Web Optimization', description: 'Create web-optimized images from PDF content.', icon: 'globe' },
      { title: 'Bandwidth Savings', description: 'Reduce image file sizes for faster loading.', icon: 'zap' },
      { title: 'Modern Websites', description: 'Use modern image formats for contemporary web projects.', icon: 'layout' },
    ],
    faq: [
      { question: 'What is WebP format?', answer: 'WebP is a modern image format by Google offering superior compression.' },
      { question: 'Is WebP widely supported?', answer: 'Yes, all modern browsers support WebP format.' },
      { question: 'How much smaller are WebP files?', answer: 'WebP files are typically 25-35% smaller than equivalent JPG files.' },
    ],
  },

  'pdf-to-bmp': {
    title: 'PDF to BMP',
    metaDescription: 'Convert PDF pages to BMP bitmap images. Uncompressed format for maximum compatibility.',
    keywords: ['pdf to bmp', 'convert pdf to bitmap', 'uncompressed images', 'legacy format'],
    description: `
      <p>PDF to BMP converts PDF document pages into BMP bitmap images. BMP is an uncompressed format that ensures maximum compatibility with legacy systems and applications.</p>
      <p>While BMP files are larger than compressed formats, they offer perfect quality and universal compatibility.</p>
      <p>All conversion happens in your browser, ensuring your documents remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Drag and drop your PDF file or click to select.' },
      { step: 2, title: 'Select Pages', description: 'Choose which pages to convert and set DPI.' },
      { step: 3, title: 'Convert and Download', description: 'Click Convert to create BMP images.' },
    ],
    useCases: [
      { title: 'Legacy Systems', description: 'Create images compatible with older software.', icon: 'history' },
      { title: 'Windows Applications', description: 'Generate BMP files for Windows-specific applications.', icon: 'monitor' },
      { title: 'Uncompressed Archives', description: 'Create uncompressed image archives from PDFs.', icon: 'archive' },
    ],
    faq: [
      { question: 'Why use BMP format?', answer: 'BMP offers uncompressed quality and maximum compatibility with legacy systems.' },
      { question: 'Are BMP files larger?', answer: 'Yes, BMP files are uncompressed and significantly larger than JPG or PNG.' },
      { question: 'What color depths are supported?', answer: '24-bit and 32-bit color depths are supported.' },
    ],
  },

  'pdf-to-tiff': {
    title: 'PDF to TIFF',
    metaDescription: 'Convert PDF to TIFF images. Professional quality with multi-page support.',
    keywords: ['pdf to tiff', 'convert pdf to tiff', 'professional images', 'multi-page tiff'],
    description: `
      <p>PDF to TIFF converts PDF documents into high-quality TIFF images. TIFF is the preferred format for professional printing and archiving due to its lossless compression.</p>
      <p>Create single-page TIFFs or combine all pages into a multi-page TIFF file. Perfect for professional and archival purposes.</p>
      <p>All conversion happens in your browser, ensuring your documents remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Drag and drop your PDF file or click to select.' },
      { step: 2, title: 'Configure Output', description: 'Choose single or multi-page TIFF and set DPI.' },
      { step: 3, title: 'Convert and Download', description: 'Click Convert to create TIFF images.' },
    ],
    useCases: [
      { title: 'Professional Printing', description: 'Create print-ready TIFF files from PDF documents.', icon: 'printer' },
      { title: 'Document Archiving', description: 'Archive documents in high-quality TIFF format.', icon: 'archive' },
      { title: 'Publishing', description: 'Convert PDFs to TIFF for publishing workflows.', icon: 'book' },
    ],
    faq: [
      { question: 'Can I create multi-page TIFFs?', answer: 'Yes, you can combine all PDF pages into a single multi-page TIFF.' },
      { question: 'What compression options are available?', answer: 'LZW, ZIP, and no compression options are available.' },
      { question: 'What DPI should I use for printing?', answer: 'Use 300 DPI or higher for professional printing.' },
    ],
  },

  'pdf-to-cbz': {
    title: 'PDF to CBZ',
    metaDescription: 'Convert PDF documents to high-definition Comic Book ZIP archives (.cbz). Built-in Calibre OPF, ComicInfo XML, and ZIP Comment metadata for perfect multi-reader cataloging.',
    keywords: ['pdf to cbz', 'pdf to comic', 'cbz packaging', 'calibre comic archive', 'comicinfo metadata'],
    description: `
      <p>PDF to CBZ is custom-engineered for comic enthusiasts and digital ebook archivists. It renders every page of your PDF volumes into high-fidelity rasterized graphics and compiles them into a standard Comic Book ZIP (.cbz) bundle.</p>
      <p>To eliminate frustrating manual scraping in systems like Calibre, Komga, Kavita, or CDisplayEx, the processor automatically generates and injects both <strong>ComicInfo.xml</strong> and <strong>metadata.opf</strong> files internally, while simultaneously writing a standardized <strong>ComicBookInfo JSON</strong> payload directly into the ZIP file comment metadata.</p>
      <p>Includes complete configuration sliders for image compression quality, page dimension scale, right-to-left layout reading toggles (Manga mode), and black-and-white grayscale color filtering.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Comic PDF', description: 'Drag and drop your primary comic, artbook, or manga PDF file.' },
      { step: 2, title: 'Input Comic Metadata', description: 'Fill out Series, Volume, Title, Writer, and Publisher fields, and toggle layout or grayscale optimization.' },
      { step: 3, title: 'Compile and Download', description: 'Click Convert to compile and retrieve your metadata-rich .cbz file instantly ready for Calibre.' },
    ],
    useCases: [
      { title: 'Retrograde Comic Packaging', description: 'Transform raw scanned PDF books into compact, standard-compliant CBZ comic files easily scrapable by comic library managers.', icon: 'book' },
      { title: 'Zero-Effort Calibre Integration', description: 'The built-in metadata.opf schema allows Calibre to fetch and classify creators and volume issues without manual lookup.', icon: 'database' },
      { title: 'E-Ink Screen Enhancement', description: 'Pre-filter graphic color channels into high-contrast grayscale on compile, boosting visual refresh and clarity on E-ink screens while saving storage.', icon: 'eye' },
    ],
    faq: [
      { question: 'What is a .cbz file?', answer: 'A CBZ file is a specialized archive container format for comic book series. It is internally formatted as a ZIP package containing sequentially numbered page images alongside structural metadata XML files.' },
      { question: 'How is metadata compatible?', answer: 'We compile and embed ComicInfo.xml, metadata.opf, and ZIP File Comments in one pass. This guarantees absolute compliance across multiple comic and e-book ecosystems.' },
      { question: 'Why use Grayscale mode?', answer: 'If you read on a grayscale E-ink reader (like Kindle or Kobo), compiling directly in Grayscale reduces artifact ghosting, delivers superior contrast levels, and shrinks the final CBZ file size.' },
    ],
  },


  'pdf-to-svg': {
    title: 'PDF to SVG',
    metaDescription: 'Convert PDF pages to SVG vector graphics. Perfect scalability at any size with individual page export.',
    keywords: ['pdf to svg', 'convert pdf to svg', 'vector graphics', 'scalable pdf', 'svg converter'],
    description: `
      <p>PDF to SVG converts each page of your PDF document into a scalable vector graphic (SVG). SVG is a vector format that maintains perfect quality at any zoom level or print size.</p>
      <p>Unlike raster formats (JPG, PNG), SVG graphics never become pixelated when scaled. This makes them ideal for logos, diagrams, technical drawings, and any content that needs to be displayed at different sizes.</p>
      <p>Preview each converted page and download them individually or as a ZIP file. All processing happens locally in your browser, ensuring complete privacy for your documents.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Drag and drop your PDF file or click to browse and select.' },
      { step: 2, title: 'Configure Options', description: 'Set the resolution quality and optionally specify page ranges.' },
      { step: 3, title: 'Preview and Convert', description: 'Click Convert to process. Preview each page by clicking on thumbnails.' },
      { step: 4, title: 'Download', description: 'Download individual SVG files or all pages as a ZIP archive.' },
    ],
    useCases: [
      { title: 'Logos and Graphics', description: 'Extract logos and vector graphics from PDFs for use in design software.', icon: 'pen-tool' },
      { title: 'Technical Diagrams', description: 'Convert technical drawings and diagrams to scalable SVG format.', icon: 'ruler' },
      { title: 'Web Development', description: 'Create web-ready SVG files from PDF content for responsive websites.', icon: 'globe' },
      { title: 'Print at Any Size', description: 'Generate vector graphics that print perfectly at any size.', icon: 'printer' },
    ],
    faq: [
      { question: 'What is SVG format?', answer: 'SVG (Scalable Vector Graphics) is a vector image format that can be scaled to any size without losing quality. It is widely used for logos, icons, and web graphics.' },
      { question: 'Will the SVG be truly vector?', answer: 'The SVG contains a high-resolution rendering of the PDF page. For PDFs with vector content, you get crisp output at any scale.' },
      { question: 'Can I preview before downloading?', answer: 'Yes! Click on any thumbnail to see a full-size preview of the SVG. You can download individual pages or all at once.' },
      { question: 'What resolution should I choose?', answer: 'Higher resolution (216 or 288 DPI) produces larger, more detailed SVGs. Use lower settings for faster processing and smaller files.' },
    ],
  },

  'pdf-to-greyscale': {
    title: 'PDF to Greyscale',
    metaDescription: 'Convert color PDF to greyscale. Reduce file size and prepare for black-and-white printing.',
    keywords: ['pdf to greyscale', 'grayscale pdf', 'black and white pdf', 'remove colors'],
    description: `
      <p>PDF to Greyscale converts color PDF documents to greyscale (black and white). This reduces file size and prepares documents for black-and-white printing.</p>
      <p>The conversion preserves text clarity and image detail while removing color information. Perfect for draft printing or creating printer-friendly versions.</p>
      <p>All conversion happens in your browser, ensuring your documents remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Drag and drop your color PDF file or click to select.' },
      { step: 2, title: 'Preview Conversion', description: 'Preview how the greyscale version will look.' },
      { step: 3, title: 'Convert and Download', description: 'Click Convert to create the greyscale PDF.' },
    ],
    useCases: [
      { title: 'Print Savings', description: 'Convert to greyscale to save on color printing costs.', icon: 'printer' },
      { title: 'Draft Documents', description: 'Create black-and-white drafts for review.', icon: 'file-text' },
      { title: 'File Size Reduction', description: 'Reduce PDF size by removing color information.', icon: 'minimize-2' },
    ],
    faq: [
      { question: 'Will text remain readable?', answer: 'Yes, text clarity is preserved during greyscale conversion.' },
      { question: 'How much smaller will the file be?', answer: 'File size reduction varies but can be 20-50% for color-heavy documents.' },
      { question: 'Can I convert specific pages only?', answer: 'Yes, you can select which pages to convert to greyscale.' },
    ],
  },

  'pdf-to-json': {
    title: 'PDF to JSON',
    metaDescription: 'Extract PDF content to JSON format. Get structured data from PDF documents.',
    keywords: ['pdf to json', 'extract pdf data', 'pdf parser', 'structured pdf data'],
    description: `
      <p>PDF to JSON extracts content from PDF documents into structured JSON format. Extract text, metadata, page information, and document structure for programmatic use.</p>
      <p>Perfect for data extraction, document analysis, or integrating PDF content into applications and workflows.</p>
      <p>All extraction happens in your browser, ensuring your documents remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Drag and drop your PDF file or click to select.' },
      { step: 2, title: 'Select Data to Extract', description: 'Choose what content to extract: text, metadata, structure.' },
      { step: 3, title: 'Extract and Download', description: 'Click Extract to generate JSON and download.' },
    ],
    useCases: [
      { title: 'Data Extraction', description: 'Extract structured data from PDF documents.', icon: 'database' },
      { title: 'Document Analysis', description: 'Analyze PDF structure and content programmatically.', icon: 'search' },
      { title: 'Integration', description: 'Import PDF content into applications via JSON.', icon: 'plug' },
    ],
    faq: [
      { question: 'What data is extracted?', answer: 'Text content, metadata, page dimensions, fonts, and document structure.' },
      { question: 'Is the JSON format documented?', answer: 'Yes, the JSON schema is consistent and well-documented.' },
      { question: 'Can I extract from scanned PDFs?', answer: 'Scanned PDFs require OCR first. Use our OCR PDF tool before extraction.' },
    ],
  },

  'pdf-to-pptx': {
    title: 'PDF to PowerPoint',
    metaDescription: 'Convert PDF to PowerPoint presentation. Each page becomes a high-quality slide.',
    keywords: ['pdf to pptx', 'pdf to powerpoint', 'convert pdf slides', 'pdf presentation'],
    description: `
      <p>PDF to PowerPoint converts your PDF documents into editable PowerPoint presentations (PPTX). Each PDF page is transformed into a high-quality slide, preserving the visual layout perfectly.</p>
      <p>This tool is ideal for converting reports, handouts, or any PDF content into presentation format. You can choose the image quality (DPI) to balance between file size and visual clarity.</p>
      <p>All conversion happens locally in your browser, ensuring your documents remain private and secure.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Drag and drop your PDF file or click to select it from your device.' },
      { step: 2, title: 'Choose Quality Settings', description: 'Select the image quality (DPI) for the slides. Higher DPI means better quality but larger file size.' },
      { step: 3, title: 'Convert and Download', description: 'Click Convert to create your PowerPoint presentation and download the PPTX file.' },
    ],
    useCases: [
      { title: 'Presentation Creation', description: 'Convert PDF reports or documents into presentation slides for meetings.', icon: 'presentation' },
      { title: 'Training Materials', description: 'Transform PDF training documents into interactive PowerPoint presentations.', icon: 'book-open' },
      { title: 'Content Repurposing', description: 'Convert existing PDF content into editable slide format for further customization.', icon: 'refresh-cw' },
    ],
    faq: [
      { question: 'Will the slides be editable?', answer: 'Each slide contains a high-quality image of the PDF page. You can add text, shapes, and annotations on top in PowerPoint.' },
      { question: 'What DPI should I choose?', answer: 'Use 150 DPI for presentations displayed on screens. Use 300 DPI for printing or when you need the highest quality.' },
      { question: 'Can I convert multi-page PDFs?', answer: 'Yes, each page of your PDF becomes a separate slide in the PowerPoint presentation.' },
    ],
  },

  'pdf-to-excel': {
    title: 'PDF to Excel',
    metaDescription: 'Convert PDF to Excel spreadsheet. Extract tables to XLSX format.',
    keywords: ['pdf to excel', 'pdf to xlsx', 'convert pdf tables', 'extract tables'],
    description: `
      <p>PDF to Excel converts your PDF documents into editable Microsoft Excel spreadsheets (XLSX). The tool automatically detects tables in your PDF and extracts them into separate sheets.</p>
      <p>This tool is ideal for analyzing financial reports, invoices, or any data presented in tables. Each page's tables are organized into sheets for easy data manipulation.</p>
      <p>All conversion happens locally in your browser, ensuring your data remains private and secure.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Drag and drop your PDF file or click to select.' },
      { step: 2, title: 'Process', description: 'The tool will automatically identify and extract tables.' },
      { step: 3, title: 'Download Excel', description: 'Download your Excel file with extracted tables.' },
    ],
    useCases: [
      { title: 'Financial Analysis', description: 'Convert bank statements or invoices to Excel for analysis.', icon: 'trending-up' },
      { title: 'Data Extraction', description: 'Pull data tables from research papers or reports.', icon: 'database' },
      { title: 'Inventory Management', description: 'Convert inventory lists from PDF to spreadsheet.', icon: 'clipboard' },
    ],
    faq: [
      { question: 'How are tables handled?', answer: 'Tables detected on each page are extracted to corresponding sheets in the Excel file.' },
      { question: 'What if there are no tables?', answer: 'An info sheet will be created indicating no tables were found.' },
      { question: 'Is formatting preserved?', answer: 'Data is preserved, but complex visual formatting may be simplified for spreadsheet use.' },
    ],
  },

  // ==================== ORGANIZE & MANAGE ====================
  'ocr-pdf': {
    title: 'OCR PDF',
    metaDescription: 'Make scanned PDFs searchable with OCR. Extract text from images and scanned documents.',
    keywords: ['ocr pdf', 'searchable pdf', 'text recognition', 'scan to text'],
    description: `
      <p>OCR PDF uses Optical Character Recognition to extract text from scanned documents and images within PDFs. Convert image-based PDFs into searchable, selectable text documents.</p>
      <p>Support for multiple languages ensures accurate text recognition regardless of the document's language. The original layout is preserved while adding a searchable text layer.</p>
      <p>All OCR processing happens in your browser, ensuring your documents remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Scanned PDF', description: 'Drag and drop your scanned PDF or click to select.' },
      { step: 2, title: 'Select Language', description: 'Choose the document language for accurate recognition.' },
      { step: 3, title: 'Process and Download', description: 'Click Process to run OCR and download the searchable PDF.' },
    ],
    useCases: [
      { title: 'Digitize Archives', description: 'Make scanned document archives searchable.', icon: 'archive' },
      { title: 'Document Search', description: 'Enable text search in scanned documents.', icon: 'search' },
      { title: 'Text Extraction', description: 'Extract text from scanned documents for editing.', icon: 'type' },
    ],
    faq: [
      { question: 'What languages are supported?', answer: 'Over 100 languages are supported including English, Chinese, Japanese, Korean, and more.' },
      { question: 'Will the original layout be preserved?', answer: 'Yes, the original visual layout is preserved with a searchable text layer added.' },
      { question: 'How accurate is the OCR?', answer: 'Accuracy depends on scan quality but typically exceeds 95% for clear documents.' },
    ],
  },

  'alternate-merge': {
    title: 'Alternate Merge',
    metaDescription: 'Merge PDFs by alternating pages. Combine front and back scans into one document.',
    keywords: ['alternate merge', 'interleave pdf', 'combine scans', 'front back merge'],
    description: `
      <p>Alternate Merge combines two PDFs by interleaving their pages alternately. This is perfect for combining separately scanned front and back pages into a single document.</p>
      <p>Upload two PDFs and the tool will merge them by taking one page from each alternately. You can also reverse the order of one document for back-to-front scanning.</p>
      <p>All processing happens in your browser, ensuring your documents remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Two PDFs', description: 'Upload the front pages PDF and back pages PDF.' },
      { step: 2, title: 'Configure Order', description: 'Choose whether to reverse the second document for back-to-front scans.' },
      { step: 3, title: 'Merge and Download', description: 'Click Merge to interleave pages and download.' },
    ],
    useCases: [
      { title: 'Duplex Scanning', description: 'Combine separately scanned front and back pages.', icon: 'copy' },
      { title: 'Document Assembly', description: 'Interleave pages from two related documents.', icon: 'layers' },
      { title: 'Book Scanning', description: 'Combine odd and even page scans into complete books.', icon: 'book' },
    ],
    faq: [
      { question: 'What if documents have different page counts?', answer: 'Extra pages from the longer document are appended at the end.' },
      { question: 'Can I reverse page order?', answer: 'Yes, you can reverse either document before merging.' },
      { question: 'Is this different from regular merge?', answer: 'Yes, regular merge appends documents; alternate merge interleaves pages.' },
    ],
  },

  'add-attachments': {
    title: 'Add Attachments',
    metaDescription: 'Embed files in PDF documents. Attach any file type to your PDFs.',
    keywords: ['pdf attachments', 'embed files', 'attach to pdf', 'pdf portfolio'],
    description: `
      <p>Add Attachments embeds files of any type into your PDF documents. Attach spreadsheets, images, source files, or any other documents to create comprehensive PDF packages.</p>
      <p>Attachments are embedded within the PDF and can be extracted by recipients using any PDF reader. Perfect for distributing related files together.</p>
      <p>All processing happens in your browser, ensuring your files remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Drag and drop your PDF file or click to select.' },
      { step: 2, title: 'Add Attachments', description: 'Select files to attach to the PDF.' },
      { step: 3, title: 'Save and Download', description: 'Click Save to embed attachments and download.' },
    ],
    useCases: [
      { title: 'Project Packages', description: 'Bundle project files with documentation PDFs.', icon: 'package' },
      { title: 'Report Distribution', description: 'Attach source data files to report PDFs.', icon: 'paperclip' },
      { title: 'Contract Bundles', description: 'Include supporting documents with contracts.', icon: 'file-text' },
    ],
    faq: [
      { question: 'What file types can be attached?', answer: 'Any file type can be attached to a PDF.' },
      { question: 'Is there a size limit?', answer: 'Total PDF size including attachments should not exceed 500MB.' },
      { question: 'Can recipients extract attachments?', answer: 'Yes, any PDF reader can extract embedded attachments.' },
    ],
  },

  'extract-attachments': {
    title: 'Extract Attachments',
    metaDescription: 'Extract embedded files from PDFs. Download all attachments from PDF documents.',
    keywords: ['extract attachments', 'pdf attachments', 'download embedded files', 'pdf extraction'],
    description: `
      <p>Extract Attachments retrieves all embedded files from PDF documents. Download attachments individually or as a ZIP archive containing all files.</p>
      <p>Perfect for accessing source files, data, or supplementary materials embedded in PDF packages.</p>
      <p>All extraction happens in your browser, ensuring your documents remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Drag and drop your PDF file or click to select.' },
      { step: 2, title: 'View Attachments', description: 'See a list of all embedded files in the PDF.' },
      { step: 3, title: 'Extract and Download', description: 'Download individual files or all as a ZIP.' },
    ],
    useCases: [
      { title: 'Access Source Files', description: 'Extract original data files from PDF reports.', icon: 'download' },
      { title: 'Recover Attachments', description: 'Retrieve embedded files from PDF packages.', icon: 'folder-open' },
      { title: 'Batch Extraction', description: 'Extract attachments from multiple PDFs at once.', icon: 'layers' },
    ],
    faq: [
      { question: 'What if there are no attachments?', answer: 'The tool will indicate if no embedded files are found.' },
      { question: 'Are all attachment types supported?', answer: 'Yes, all embedded file types can be extracted.' },
      { question: 'Can I extract from multiple PDFs?', answer: 'Yes, you can process multiple PDFs and download all attachments.' },
    ],
  },

  'extract-images': {
    title: 'Extract Images from PDF',
    metaDescription: 'Extract all embedded images from PDF files. Download individually or as a ZIP archive. Filter small images automatically.',
    keywords: ['extract pdf images', 'pdf image extraction', 'get images from pdf', 'download pdf images', 'pdf to images'],
    description: `
      <p>Extract Images from PDF retrieves all embedded images from your PDF documents. Download high-quality images individually or as a convenient ZIP archive.</p>
      <p>The tool automatically filters out small images like icons and decorations based on customizable size thresholds. Process multiple PDFs at once for efficient batch extraction.</p>
      <p>All extraction happens in your browser, ensuring your documents remain private and secure.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDFs', description: 'Drag and drop one or more PDF files or click to select from your device.' },
      { step: 2, title: 'Set Filter Options', description: 'Adjust minimum width, height, and file size to filter out unwanted small images.' },
      { step: 3, title: 'Extract Images', description: 'Click Extract to find all embedded images in your PDFs.' },
      { step: 4, title: 'Download', description: 'Download individual images or all images as a ZIP archive.' },
    ],
    useCases: [
      { title: 'Photo Recovery', description: 'Extract photos and images embedded in PDF documents for reuse or archiving.', icon: 'image' },
      { title: 'Asset Collection', description: 'Gather all graphics and images from PDF reports, presentations, or brochures.', icon: 'folder' },
      { title: 'Content Repurposing', description: 'Extract images from PDFs to use in other documents, websites, or presentations.', icon: 'refresh-cw' },
    ],
    faq: [
      { question: 'What image formats are extracted?', answer: 'Images are extracted in their native format (JPEG, PNG, etc.) when possible, or converted to PNG for raw image data.' },
      { question: 'Why are some images missing?', answer: 'Small images below the size threshold are filtered out. Adjust the filter settings to extract smaller images.' },
      { question: 'Can I extract from scanned PDFs?', answer: 'Scanned PDFs typically contain the scan as one large image per page. Use PDF to Image tool instead for page-by-page conversion.' },
    ],
  },

  'edit-attachments': {
    title: 'Edit Attachments',
    metaDescription: 'Manage PDF attachments. View, rename, and remove embedded files.',
    keywords: ['edit attachments', 'manage pdf files', 'remove attachments', 'rename attachments'],
    description: `
      <p>Edit Attachments lets you manage embedded files in PDF documents. View all attachments, rename them, or remove unwanted files from the PDF.</p>
      <p>Perfect for cleaning up PDF packages or updating attachment information before distribution.</p>
      <p>All editing happens in your browser, ensuring your documents remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Drag and drop your PDF file or click to select.' },
      { step: 2, title: 'Manage Attachments', description: 'View, rename, or delete embedded files.' },
      { step: 3, title: 'Save and Download', description: 'Click Save to apply changes and download.' },
    ],
    useCases: [
      { title: 'Clean Up PDFs', description: 'Remove unnecessary attachments from PDF packages.', icon: 'trash-2' },
      { title: 'Rename Files', description: 'Update attachment names for clarity.', icon: 'edit' },
      { title: 'Review Contents', description: 'Audit embedded files before distribution.', icon: 'eye' },
    ],
    faq: [
      { question: 'Can I add new attachments here?', answer: 'Use the Add Attachments tool to embed new files.' },
      { question: 'Is removal permanent?', answer: 'Yes, removed attachments cannot be recovered from the output file.' },
      { question: 'Can I preview attachments?', answer: 'You can see file names and sizes; use Extract Attachments to view contents.' },
    ],
  },

  'divide-pages': {
    title: 'Divide Pages',
    metaDescription: 'Split PDF pages into multiple sections. Divide pages horizontally or vertically.',
    keywords: ['divide pdf pages', 'split page', 'cut pdf page', 'page sections'],
    description: `
      <p>Divide Pages splits individual PDF pages into multiple sections. Cut pages horizontally, vertically, or into a grid to create multiple pages from one.</p>
      <p>Perfect for splitting scanned documents with multiple items per page, or dividing large format pages into standard sizes.</p>
      <p>All processing happens in your browser, ensuring your documents remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Drag and drop your PDF file or click to select.' },
      { step: 2, title: 'Set Division', description: 'Choose horizontal, vertical, or grid division and set the number of sections.' },
      { step: 3, title: 'Divide and Download', description: 'Click Divide to split pages and download.' },
    ],
    useCases: [
      { title: 'Split Scans', description: 'Divide scanned pages containing multiple documents.', icon: 'scissors' },
      { title: 'Resize Pages', description: 'Split large pages into standard paper sizes.', icon: 'maximize-2' },
      { title: 'Create Cards', description: 'Divide pages into card-sized sections for printing.', icon: 'grid' },
    ],
    faq: [
      { question: 'Can I divide into unequal sections?', answer: 'Currently, divisions are equal. Use Crop PDF for custom sections.' },
      { question: 'What happens to content at division lines?', answer: 'Content is split at the division line; ensure important content is not at boundaries.' },
      { question: 'Can I divide specific pages only?', answer: 'Yes, you can select which pages to divide.' },
    ],
  },

  'add-blank-page': {
    title: 'Add Blank Page',
    metaDescription: 'Insert blank pages into PDF documents. Add empty pages at any position.',
    keywords: ['add blank page', 'insert page', 'empty page', 'pdf page insertion'],
    description: `
      <p>Add Blank Page inserts empty pages into your PDF documents at any position. Add pages before, after, or between existing pages with customizable page size.</p>
      <p>Perfect for adding space for notes, creating section dividers, or preparing documents for printing.</p>
      <p>All processing happens in your browser, ensuring your documents remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Drag and drop your PDF file or click to select.' },
      { step: 2, title: 'Choose Position', description: 'Select where to insert blank pages and how many.' },
      { step: 3, title: 'Add and Download', description: 'Click Add to insert pages and download.' },
    ],
    useCases: [
      { title: 'Note Space', description: 'Add blank pages for handwritten notes.', icon: 'edit-3' },
      { title: 'Section Dividers', description: 'Insert blank pages between document sections.', icon: 'minus' },
      { title: 'Print Preparation', description: 'Add pages for duplex printing alignment.', icon: 'printer' },
    ],
    faq: [
      { question: 'Can I choose the page size?', answer: 'Yes, blank pages can match existing pages or use custom dimensions.' },
      { question: 'Can I add multiple blank pages?', answer: 'Yes, you can add any number of blank pages at once.' },
      { question: 'Can I add colored pages?', answer: 'Use Background Color tool after adding blank pages to add color.' },
    ],
  },

  'reverse-pages': {
    title: 'Reverse Pages',
    metaDescription: 'Reverse PDF page order. Flip document pages from last to first.',
    keywords: ['reverse pdf', 'flip page order', 'invert pages', 'reverse document'],
    description: `
      <p>Reverse Pages flips the order of pages in your PDF document, putting the last page first and the first page last. Useful for documents scanned in reverse order or for specific printing needs.</p>
      <p>The tool processes the entire document or selected page ranges, maintaining all content and formatting.</p>
      <p>All processing happens in your browser, ensuring your documents remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Drag and drop your PDF file or click to select.' },
      { step: 2, title: 'Select Pages', description: 'Choose to reverse all pages or a specific range.' },
      { step: 3, title: 'Reverse and Download', description: 'Click Reverse to flip page order and download.' },
    ],
    useCases: [
      { title: 'Fix Scan Order', description: 'Correct documents scanned in reverse order.', icon: 'refresh-cw' },
      { title: 'Print Preparation', description: 'Reverse pages for specific printing requirements.', icon: 'printer' },
      { title: 'Document Reordering', description: 'Quickly flip document order for review.', icon: 'arrow-up-down' },
    ],
    faq: [
      { question: 'Are bookmarks updated?', answer: 'Yes, bookmarks are updated to point to the correct reversed pages.' },
      { question: 'Can I reverse only some pages?', answer: 'Yes, you can select a page range to reverse.' },
      { question: 'Is this the same as rotating?', answer: 'No, reversing changes page order; rotating changes page orientation.' },
    ],
  },

  'rotate-pdf': {
    title: 'Rotate PDF',
    metaDescription: 'Rotate PDF pages. Turn pages 90, 180, or 270 degrees.',
    keywords: ['rotate pdf', 'turn pdf pages', 'pdf rotation', 'fix orientation'],
    description: `
      <p>Rotate PDF turns pages in your document by 90, 180, or 270 degrees. Fix incorrectly oriented scans, rotate landscape pages, or adjust page orientation for viewing.</p>
      <p>Rotate all pages uniformly or select specific pages to rotate individually. The tool preserves all content and formatting.</p>
      <p>All processing happens in your browser, ensuring your documents remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Drag and drop your PDF file or click to select.' },
      { step: 2, title: 'Select Rotation', description: 'Choose rotation angle and which pages to rotate.' },
      { step: 3, title: 'Rotate and Download', description: 'Click Rotate to apply changes and download.' },
    ],
    useCases: [
      { title: 'Fix Scans', description: 'Correct orientation of scanned documents.', icon: 'rotate-cw' },
      { title: 'Landscape Pages', description: 'Rotate landscape pages for proper viewing.', icon: 'monitor' },
      { title: 'Mixed Orientation', description: 'Standardize page orientation in mixed documents.', icon: 'layout' },
    ],
    faq: [
      { question: 'Can I rotate different pages differently?', answer: 'Yes, you can apply different rotations to different pages.' },
      { question: 'Does rotation affect print quality?', answer: 'No, rotation preserves all content quality.' },
      { question: 'Can I rotate by custom angles?', answer: 'Rotation is limited to 90-degree increments (90, 180, 270).' },
    ],
  },

  'overlay-pdf': {
    title: 'Overlay PDF',
    metaDescription: 'Overlay or underlay pages from one PDF onto another. Perfect for stamps, letterheads, and layout composition.',
    keywords: ['overlay pdf', 'underlay pdf', 'stamp pdf', 'watermark pdf', 'combine layers'],
    description: `
      <p>Overlay PDF allows you to layer pages of one PDF document on top or underneath another PDF document. It is perfect for applying letterheads, adding background grids, stamping watermarks, or fusing layout drafts together.</p>
      <p>Supports both Overlay mode (layer goes on top) and Underlay mode (layer goes underneath). Specify custom target page ranges or loop shorter overlay documents to cover the entire base file automatically.</p>
      <p>All processing is executed entirely inside your web browser locally, guaranteeing total security and data privacy.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Main PDF', description: 'Drag and drop your primary base PDF document.' },
      { step: 2, title: 'Upload Layer PDF', description: 'Provide the overlay/underlay document that acts as the layer.' },
      { step: 3, title: 'Configure Layering', description: 'Choose overlay or underlay mode, specify page ranges, and enable page looping.' },
      { step: 4, title: 'Compile and Download', description: 'Click Compile to process and download the layered result PDF.' },
    ],
    useCases: [
      { title: 'Corporate Letterheads', description: 'Layer invoice contents on top of standard company letterhead templates.', icon: 'file-text' },
      { title: 'Watermarks & Seals', description: 'Overlay security stamps, signature seals, or backgrounds across documents.', icon: 'shield' },
      { title: 'Drawing Blueprints', description: 'Combine draft architectures or layout grids underneath text blocks.', icon: 'layout' },
    ],
    faq: [
      { question: 'What is the difference between Overlay and Underlay?', answer: 'Overlay places the secondary layer on top of your main content. Underlay places it at the very bottom, acting as a background template.' },
      { question: 'Can I loop the overlay layer?', answer: 'Yes, if the layer PDF is shorter than the base document, enabling Loop will cycle it (e.g. page 1, 2, 1, 2) to cover all base pages.' },
      { question: 'Is page range supported?', answer: 'Yes, you can target specific pages using range syntax such as "1-5", "odd", "even", or comma-separated lists.' },
    ],
  },

  'timestamp-pdf': {
    title: 'Timestamp PDF',
    metaDescription: 'Add RFC 3161 trusted timestamps to PDF documents. Prove document existence at a specific point in time without certificates.',
    keywords: ['timestamp pdf', 'rfc 3161', 'tsa server', 'trusted timestamping', 'proof of existence'],
    description: `
      <p>Timestamp PDF adds RFC 3161 compliant trusted timestamps to your PDF documents using external Time Stamping Authorities (TSA). It provides legally-binding mathematical proof that a document existed in a specific, unaltered state at a precise instant in time.</p>
      <p>Select from global trusted TSA servers such as DigiCert, Sectigo, SSL.com, FreeTSA, or MeSign. No personal signing certificates are required to secure your documents against future tampering.</p>
      <p>Supports fully secure local hashing before handshake, guaranteeing absolute document contents remain 100% confidential.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload PDF Document', description: 'Select the target PDF file you want to timestamp.' },
      { step: 2, title: 'Select TSA Server', description: 'Choose a trusted global Time Stamping Authority from the list.' },
      { step: 3, title: 'Apply and Timestamp', description: 'Click Timestamp to fetch secure response from TSA and embed the token.' },
    ],
    useCases: [
      { title: 'Intellectual Property', description: 'Establish clear priority proof of patents, drafts, and ideas before public release.', icon: 'lightbulb' },
      { title: 'Financial Auditing', description: 'Provide certified tamper-proof logging of ledger archives and balance reports.', icon: 'activity' },
      { title: 'Legal Contracts', description: 'Lock legal agreements with a trusted time proof to avoid backdating arguments.', icon: 'file-check' },
    ],
    faq: [
      { question: 'What is a trusted timestamp (RFC 3161)?', answer: 'An RFC 3161 timestamp is a cryptographically signed token issued by a recognized third-party authority (TSA) that links a document hash to a specific, verified clock source.' },
      { question: 'Do I need a digital certificate?', answer: 'No, the cryptographic signature is provided directly by the trusted TSA server, making the process effortless for document owners.' },
      { question: 'Does the TSA see my document contents?', answer: 'Never. The tool only sends a secure SHA-256 hash of your document to the TSA server, keeping your actual document completely private.' },
    ],
  },

  'add-page-labels': {
    title: 'Add Page Labels',
    metaDescription: 'Apply custom page labels to your PDF catalog. Supports Roman numerals, prefixes, and complex disjoint ranges.',
    keywords: ['pdf page labels', 'roman numerals pdf', 'pdf prefix labels', 'disjoint range page labels', 'pdf indexing'],
    description: `
      <p>Add Page Labels allows you to inject custom page labeling metadata (/PageLabels) into your PDF\'s root Catalog dictionary. This customizes the labels displayed in professional PDF reader navigation sidebars and top page number jump panels (e.g. using Roman numerals for front matter, decimal sequences for main body, or custom prefixes such as A-0, A-1 for technical subsections).</p>
      <p>Supports combining multiple custom rules seamlessly. Crucially, we\'ve built a highly optimized <strong>disjoint-range slicing algorithm</strong>: even if you declare complex alternating patterns (e.g., odd pages style A, even pages style B), the tool will elegantly dissect and compose boundaries to ensure proper standard-compliant display without leaking formats into unmapped pages.</p>
      <p>All operations are processed entirely inside your local browser sandbox, securing absolute data privacy.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload PDF Document', description: 'Provide the target PDF document you wish to label.' },
      { step: 2, title: 'Configure Labeling Rules', description: 'Add one or more rules specifying page ranges (e.g., "1-5", "odd", or comma-separated lists), prefix, style, and starting sequence.' },
      { step: 3, title: 'Preview and Download', description: 'Review the live page label list preview below, then compile and download your updated PDF document.' },
    ],
    useCases: [
      { title: 'Academic Thesis Formatting', description: 'Set lowercase Roman numerals (i, ii, iii) for introductory front matter and transition to decimal for main chapters.', icon: 'book' },
      { title: 'Engineering Blueprint Prefixes', description: 'Attach subsystem abbreviations (e.g., "A-1", "M-5") as page label prefixes, letting teams search and locate pages in seconds.', icon: 'layout' },
      { title: 'Custom Alternating Layouts', description: 'Apply highly specific page range indexing to odd/even sequences or non-contiguous sections with maximum freedom.', icon: 'shuffle' },
    ],
    faq: [
      { question: 'What are page labels vs page numbers?', answer: 'Ordinary page numbers are visual text blocks rendered directly on the paper canvas (visible when printed). Page labels, however, are structural metadata injected into the PDF catalog. They control what is displayed underneath thumbnails and in the page lookup box inside software like Adobe Acrobat or Apple Preview.' },
      { question: 'What happens if I leave the Page Range empty?', answer: 'Leaving the page range empty causes the rule to apply globally to all pages of the document.' },
      { question: 'How are overlapping rules handled?', answer: 'Rules are evaluated sequentially in the order they are listed. If a page range of a later rule overlaps with an earlier one, the later rule takes priority and overrides the label for that page.' },
    ],
  },

  'n-up-pdf': {
    title: 'N-Up PDF',
    metaDescription: 'Print multiple PDF pages per sheet. Create 2-up, 4-up, or custom layouts.',
    keywords: ['n-up pdf', 'multiple pages per sheet', '2-up printing', 'page imposition'],
    description: `
      <p>N-Up PDF arranges multiple pages onto single sheets, creating 2-up, 4-up, 6-up, 9-up, or custom layouts. Perfect for saving paper when printing or creating handouts.</p>
      <p>Choose from preset layouts or create custom arrangements. The tool automatically scales and positions pages for optimal results.</p>
      <p>All processing happens in your browser, ensuring your documents remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Drag and drop your PDF file or click to select.' },
      { step: 2, title: 'Choose Layout', description: 'Select 2-up, 4-up, 6-up, 9-up, or custom grid.' },
      { step: 3, title: 'Create and Download', description: 'Click Create to generate the n-up PDF and download.' },
    ],
    useCases: [
      { title: 'Save Paper', description: 'Print multiple pages per sheet to reduce paper usage.', icon: 'leaf' },
      { title: 'Create Handouts', description: 'Make compact handouts from presentation slides.', icon: 'file-text' },
      { title: 'Review Documents', description: 'Print documents in reduced size for review.', icon: 'eye' },
    ],
    faq: [
      { question: 'What layouts are available?', answer: '2-up, 4-up, 6-up, 9-up, and custom grid layouts are available.' },
      { question: 'Can I add borders between pages?', answer: 'Yes, you can add borders and gutters between pages.' },
      { question: 'Is page order preserved?', answer: 'Yes, pages are arranged in reading order (left-to-right, top-to-bottom).' },
    ],
  },

  'combine-single-page': {
    title: 'Combine to Single Page',
    metaDescription: 'Stitch PDF pages into one continuous page. Create scrollable single-page documents.',
    keywords: ['combine pages', 'single page pdf', 'stitch pages', 'continuous scroll'],
    description: `
      <p>Combine to Single Page stitches all PDF pages into one continuous page. Create scrollable documents perfect for web viewing or continuous reading.</p>
      <p>Pages are joined vertically with customizable spacing. The result is a single long page containing all content.</p>
      <p>All processing happens in your browser, ensuring your documents remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Drag and drop your PDF file or click to select.' },
      { step: 2, title: 'Set Spacing', description: 'Choose the gap between stitched pages.' },
      { step: 3, title: 'Combine and Download', description: 'Click Combine to create the single-page PDF.' },
    ],
    useCases: [
      { title: 'Web Documents', description: 'Create scrollable PDFs for web embedding.', icon: 'globe' },
      { title: 'Continuous Reading', description: 'Convert paginated documents to continuous scroll.', icon: 'scroll' },
      { title: 'Long-Form Content', description: 'Combine pages for seamless long-form reading.', icon: 'file-text' },
    ],
    faq: [
      { question: 'Is there a page limit?', answer: 'Very long documents may be limited by browser memory.' },
      { question: 'Can I add separators between pages?', answer: 'Yes, you can add spacing or lines between original pages.' },
      { question: 'Will this work for printing?', answer: 'The result is best for screen viewing; use N-Up for print layouts.' },
    ],
  },

  'view-metadata': {
    title: 'View Metadata',
    metaDescription: 'View PDF document properties. See author, title, dates, and other metadata.',
    keywords: ['pdf metadata', 'document properties', 'pdf info', 'view pdf details'],
    description: `
      <p>View Metadata displays all document properties and metadata from your PDF files. See author, title, subject, keywords, creation date, modification date, and more.</p>
      <p>Useful for auditing documents, checking file information, or verifying document authenticity.</p>
      <p>All viewing happens in your browser, ensuring your documents remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Drag and drop your PDF file or click to select.' },
      { step: 2, title: 'View Properties', description: 'See all metadata displayed in an organized format.' },
      { step: 3, title: 'Export if Needed', description: 'Optionally export metadata as JSON.' },
    ],
    useCases: [
      { title: 'Document Audit', description: 'Review document properties for compliance.', icon: 'clipboard-check' },
      { title: 'Verify Authenticity', description: 'Check creation dates and author information.', icon: 'shield' },
      { title: 'File Information', description: 'Get detailed information about PDF files.', icon: 'info' },
    ],
    faq: [
      { question: 'What metadata is shown?', answer: 'Title, author, subject, keywords, creator, producer, dates, and PDF version.' },
      { question: 'Can I edit metadata here?', answer: 'Use the Edit Metadata tool to modify document properties.' },
      { question: 'Is XMP metadata included?', answer: 'Yes, both standard and XMP metadata are displayed.' },
    ],
  },

  'edit-metadata': {
    title: 'Edit Metadata',
    metaDescription: 'Edit PDF document properties. Change title, author, subject, and keywords.',
    keywords: ['edit pdf metadata', 'change pdf properties', 'pdf author', 'document info'],
    description: `
      <p>Edit Metadata allows you to modify document properties in your PDF files. Change the title, author, subject, keywords, and other metadata fields.</p>
      <p>Perfect for correcting document information, adding proper attribution, or preparing files for distribution.</p>
      <p>All editing happens in your browser, ensuring your documents remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Drag and drop your PDF file or click to select.' },
      { step: 2, title: 'Edit Properties', description: 'Modify title, author, subject, keywords, and other fields.' },
      { step: 3, title: 'Save and Download', description: 'Click Save to apply changes and download.' },
    ],
    useCases: [
      { title: 'Add Attribution', description: 'Set proper author and creator information.', icon: 'user' },
      { title: 'SEO Optimization', description: 'Add keywords and descriptions for searchability.', icon: 'search' },
      { title: 'Document Preparation', description: 'Prepare documents with proper metadata before sharing.', icon: 'file-check' },
    ],
    faq: [
      { question: 'What fields can I edit?', answer: 'Title, author, subject, keywords, creator, and producer fields.' },
      { question: 'Can I clear all metadata?', answer: 'Use Remove Metadata tool to strip all document properties.' },
      { question: 'Are dates editable?', answer: 'Creation and modification dates are updated automatically.' },
    ],
  },

  'pdf-to-zip': {
    title: 'PDFs to ZIP',
    metaDescription: 'Package multiple PDFs into a ZIP archive. Compress and bundle PDF files.',
    keywords: ['pdf to zip', 'compress pdfs', 'bundle pdfs', 'archive pdfs'],
    description: `
      <p>PDFs to ZIP packages multiple PDF files into a single ZIP archive. Compress and bundle your PDFs for easier sharing, storage, or backup.</p>
      <p>The tool creates a compressed archive containing all your PDF files, reducing total size and simplifying file management.</p>
      <p>All processing happens in your browser, ensuring your files remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload PDFs', description: 'Drag and drop multiple PDF files or click to select.' },
      { step: 2, title: 'Configure Archive', description: 'Optionally set archive name and compression level.' },
      { step: 3, title: 'Create and Download', description: 'Click Create to generate the ZIP archive.' },
    ],
    useCases: [
      { title: 'File Sharing', description: 'Bundle multiple PDFs for easier sharing.', icon: 'share-2' },
      { title: 'Backup Creation', description: 'Create compressed backups of PDF collections.', icon: 'archive' },
      { title: 'Email Attachments', description: 'Combine PDFs into one attachment for email.', icon: 'mail' },
    ],
    faq: [
      { question: 'How much compression is applied?', answer: 'ZIP compression typically reduces total size by 10-30%.' },
      { question: 'Is there a file limit?', answer: 'You can include up to 100 PDFs in a single archive.' },
      { question: 'Can I set a password?', answer: 'Password-protected ZIP creation is not currently supported.' },
    ],
  },

  'compare-pdfs': {
    title: 'Compare PDFs',
    metaDescription: 'Compare two PDF documents. Highlight differences between versions.',
    keywords: ['compare pdfs', 'pdf diff', 'document comparison', 'version comparison'],
    description: `
      <p>Compare PDFs analyzes two PDF documents and highlights the differences between them. Perfect for reviewing document revisions, checking contract changes, or verifying edits.</p>
      <p>View documents side-by-side or in overlay mode with differences highlighted. The tool identifies text changes, additions, and deletions.</p>
      <p>All comparison happens in your browser, ensuring your documents remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Two PDFs', description: 'Upload the original and modified PDF documents.' },
      { step: 2, title: 'Compare Documents', description: 'View differences highlighted in side-by-side or overlay mode.' },
      { step: 3, title: 'Export Results', description: 'Download a comparison report or annotated PDF.' },
    ],
    useCases: [
      { title: 'Contract Review', description: 'Compare contract versions to identify changes.', icon: 'file-text' },
      { title: 'Document Revision', description: 'Review edits between document versions.', icon: 'git-compare' },
      { title: 'Quality Assurance', description: 'Verify that only intended changes were made.', icon: 'check-circle' },
    ],
    faq: [
      { question: 'What types of differences are detected?', answer: 'Text additions, deletions, modifications, and formatting changes.' },
      { question: 'Can I compare scanned documents?', answer: 'Scanned documents should be OCR processed first for text comparison.' },
      { question: 'Is visual comparison available?', answer: 'Yes, overlay mode shows visual differences between pages.' },
    ],
  },

  'posterize-pdf': {
    title: 'Posterize PDF',
    metaDescription: 'Split large PDF pages into printable tiles. Create posters from PDF pages.',
    keywords: ['posterize pdf', 'tile pdf', 'large format printing', 'pdf poster'],
    description: `
      <p>Posterize PDF splits large PDF pages into smaller tiles that can be printed on standard paper and assembled into posters. Perfect for printing large diagrams, maps, or artwork.</p>
      <p>Configure the grid size and overlap for easy assembly. The tool automatically calculates tile dimensions for your target output size.</p>
      <p>All processing happens in your browser, ensuring your documents remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Drag and drop your large-format PDF or click to select.' },
      { step: 2, title: 'Configure Tiles', description: 'Set grid size, overlap, and output paper size.' },
      { step: 3, title: 'Create and Download', description: 'Click Create to generate printable tiles.' },
    ],
    useCases: [
      { title: 'Poster Printing', description: 'Print large posters on standard paper.', icon: 'maximize-2' },
      { title: 'Map Printing', description: 'Print large maps in sections for assembly.', icon: 'map' },
      { title: 'Artwork Reproduction', description: 'Create large prints from PDF artwork.', icon: 'image' },
    ],
    faq: [
      { question: 'What overlap should I use?', answer: 'A 10-20mm overlap is recommended for easy alignment during assembly.' },
      { question: 'Can I add crop marks?', answer: 'Yes, crop marks can be added to help with cutting and alignment.' },
      { question: 'What paper sizes are supported?', answer: 'A4, Letter, A3, and custom sizes are supported.' },
    ],
  },

  // ==================== OPTIMIZE & REPAIR ====================
  'fix-page-size': {
    title: 'Fix Page Size',
    metaDescription: 'Standardize PDF page sizes. Convert all pages to uniform dimensions.',
    keywords: ['fix page size', 'standardize pdf', 'uniform pages', 'resize pdf pages'],
    description: `
      <p>Fix Page Size standardizes all pages in your PDF to uniform dimensions. Convert mixed-size documents to consistent page sizes for professional presentation or printing.</p>
      <p>Choose from standard sizes (A4, Letter, etc.) or set custom dimensions. Content is scaled or positioned to fit the new page size.</p>
      <p>All processing happens in your browser, ensuring your documents remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Drag and drop your PDF file or click to select.' },
      { step: 2, title: 'Select Target Size', description: 'Choose a standard size or enter custom dimensions.' },
      { step: 3, title: 'Apply and Download', description: 'Click Apply to standardize pages and download.' },
    ],
    useCases: [
      { title: 'Print Preparation', description: 'Standardize pages for consistent printing.', icon: 'printer' },
      { title: 'Document Cleanup', description: 'Fix documents with inconsistent page sizes.', icon: 'file-check' },
      { title: 'Professional Documents', description: 'Create uniform documents for distribution.', icon: 'briefcase' },
    ],
    faq: [
      { question: 'How is content handled?', answer: 'Content is scaled to fit or centered on the new page size.' },
      { question: 'Can I preserve aspect ratio?', answer: 'Yes, content can be scaled proportionally to fit.' },
      { question: 'What standard sizes are available?', answer: 'A4, A3, Letter, Legal, and other common sizes.' },
    ],
  },

  'linearize-pdf': {
    title: 'Linearize PDF',
    metaDescription: 'Optimize PDF for fast web viewing. Enable progressive loading.',
    keywords: ['linearize pdf', 'fast web view', 'optimize pdf', 'progressive pdf'],
    description: `
      <p>Linearize PDF optimizes your documents for fast web viewing. Linearized PDFs can begin displaying before the entire file is downloaded, improving user experience.</p>
      <p>Also known as "Fast Web View," this optimization reorganizes the PDF structure for progressive loading in web browsers.</p>
      <p>All processing happens in your browser, ensuring your documents remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Drag and drop your PDF file or click to select.' },
      { step: 2, title: 'Linearize', description: 'Click Linearize to optimize for web viewing.' },
      { step: 3, title: 'Download', description: 'Download your optimized PDF.' },
    ],
    useCases: [
      { title: 'Web Publishing', description: 'Optimize PDFs for website downloads.', icon: 'globe' },
      { title: 'Email Attachments', description: 'Create PDFs that open faster for recipients.', icon: 'mail' },
      { title: 'Online Documents', description: 'Improve viewing experience for online documents.', icon: 'cloud' },
    ],
    faq: [
      { question: 'What is linearization?', answer: 'Linearization reorganizes PDF data for progressive loading.' },
      { question: 'Does it reduce file size?', answer: 'Linearization may slightly increase file size due to added structure.' },
      { question: 'Is it compatible with all viewers?', answer: 'Yes, linearized PDFs work in all PDF readers.' },
    ],
  },

  'page-dimensions': {
    title: 'Page Dimensions',
    metaDescription: 'Analyze PDF page sizes. View dimensions of all pages in your document.',
    keywords: ['pdf page size', 'page dimensions', 'pdf measurements', 'document size'],
    description: `
      <p>Page Dimensions analyzes and displays the size of every page in your PDF document. View dimensions in various units (inches, mm, points) and identify pages with non-standard sizes.</p>
      <p>Useful for print preparation, document analysis, or identifying inconsistent page sizes.</p>
      <p>All analysis happens in your browser, ensuring your documents remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Drag and drop your PDF file or click to select.' },
      { step: 2, title: 'View Dimensions', description: 'See page sizes displayed for all pages.' },
      { step: 3, title: 'Export Report', description: 'Optionally export dimensions as JSON.' },
    ],
    useCases: [
      { title: 'Print Planning', description: 'Check page sizes before printing.', icon: 'printer' },
      { title: 'Document Analysis', description: 'Identify pages with unusual dimensions.', icon: 'search' },
      { title: 'Quality Control', description: 'Verify page sizes meet specifications.', icon: 'check-circle' },
    ],
    faq: [
      { question: 'What units are available?', answer: 'Inches, millimeters, centimeters, and points.' },
      { question: 'Does it show orientation?', answer: 'Yes, portrait or landscape orientation is indicated.' },
      { question: 'Can I fix inconsistent sizes?', answer: 'Use Fix Page Size tool to standardize dimensions.' },
    ],
  },

  'remove-restrictions': {
    title: 'Remove Restrictions',
    metaDescription: 'Remove PDF restrictions. Unlock printing, copying, and editing permissions.',
    keywords: ['remove pdf restrictions', 'unlock pdf', 'pdf permissions', 'unrestrict pdf'],
    description: `
      <p>Remove Restrictions unlocks PDFs that have permission restrictions preventing printing, copying, or editing. This tool removes owner password restrictions while preserving document content.</p>
      <p>Note: This tool cannot remove user passwords that prevent opening the document. Use Decrypt PDF for password-protected files.</p>
      <p>All processing happens in your browser, ensuring your documents remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Restricted PDF', description: 'Drag and drop your restricted PDF or click to select.' },
      { step: 2, title: 'Remove Restrictions', description: 'Click Remove to unlock the document.' },
      { step: 3, title: 'Download', description: 'Download the unrestricted PDF.' },
    ],
    useCases: [
      { title: 'Enable Printing', description: 'Unlock PDFs that prevent printing.', icon: 'printer' },
      { title: 'Enable Copying', description: 'Allow text selection and copying.', icon: 'copy' },
      { title: 'Enable Editing', description: 'Remove restrictions on document editing.', icon: 'edit' },
    ],
    faq: [
      { question: 'Is this legal?', answer: 'Removing restrictions from documents you own or have rights to is generally legal.' },
      { question: 'Can it remove open passwords?', answer: 'No, use Decrypt PDF for password-protected documents.' },
      { question: 'Will content be affected?', answer: 'No, only restrictions are removed; content remains unchanged.' },
    ],
  },

  'repair-pdf': {
    title: 'Repair PDF',
    metaDescription: 'Fix corrupted PDF files. Recover and repair damaged documents.',
    keywords: ['repair pdf', 'fix pdf', 'recover pdf', 'corrupted pdf'],
    description: `
      <p>Repair PDF attempts to fix corrupted or damaged PDF files. The tool analyzes the document structure and rebuilds it to recover as much content as possible.</p>
      <p>Useful for recovering files that won't open, display errors, or have missing content due to corruption.</p>
      <p>All repair happens in your browser, ensuring your documents remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Damaged PDF', description: 'Drag and drop your corrupted PDF or click to select.' },
      { step: 2, title: 'Repair Document', description: 'Click Repair to attempt recovery.' },
      { step: 3, title: 'Download', description: 'Download the repaired PDF if successful.' },
    ],
    useCases: [
      { title: 'Recover Files', description: 'Recover PDFs that won\'t open properly.', icon: 'refresh-cw' },
      { title: 'Fix Errors', description: 'Repair files showing error messages.', icon: 'wrench' },
      { title: 'Restore Content', description: 'Recover content from partially corrupted files.', icon: 'file-check' },
    ],
    faq: [
      { question: 'Can all PDFs be repaired?', answer: 'Success depends on the type and extent of corruption.' },
      { question: 'Will all content be recovered?', answer: 'The tool recovers as much as possible; severely damaged files may have losses.' },
      { question: 'Should I keep the original?', answer: 'Yes, always keep the original file as a backup.' },
    ],
  },

  // ==================== SECURE PDF ====================
  'encrypt-pdf': {
    title: 'Encrypt PDF',
    metaDescription: 'Password protect PDF files. Add encryption and set permissions.',
    keywords: ['encrypt pdf', 'password protect pdf', 'secure pdf', 'pdf encryption'],
    description: `
      <p>Encrypt PDF adds password protection and encryption to your PDF documents. Set user passwords to prevent opening, and owner passwords to control permissions like printing and copying.</p>
      <p>Choose from different encryption levels (128-bit or 256-bit AES) for varying security needs.</p>
      <p>All encryption happens in your browser, ensuring your passwords and documents remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Drag and drop your PDF file or click to select.' },
      { step: 2, title: 'Set Passwords', description: 'Enter user password and/or owner password. Configure permissions.' },
      { step: 3, title: 'Encrypt and Download', description: 'Click Encrypt to secure your PDF and download.' },
    ],
    useCases: [
      { title: 'Confidential Documents', description: 'Protect sensitive business documents.', icon: 'lock' },
      { title: 'Personal Files', description: 'Secure personal documents like tax returns.', icon: 'shield' },
      { title: 'Controlled Distribution', description: 'Limit what recipients can do with documents.', icon: 'key' },
    ],
    faq: [
      { question: 'What\'s the difference between user and owner passwords?', answer: 'User password prevents opening; owner password controls permissions.' },
      { question: 'What encryption is used?', answer: '128-bit or 256-bit AES encryption options are available.' },
      { question: 'Can I set permissions without a user password?', answer: 'Yes, you can set an owner password only to control permissions.' },
    ],
  },

  'sanitize-pdf': {
    title: 'Sanitize PDF',
    metaDescription: 'Remove hidden data from PDFs. Clean metadata, scripts, and sensitive information.',
    keywords: ['sanitize pdf', 'clean pdf', 'remove hidden data', 'pdf privacy'],
    description: `
      <p>Sanitize PDF removes hidden data and potentially sensitive information from your documents. Strip metadata, embedded scripts, attachments, comments, and other hidden content.</p>
      <p>Essential for preparing documents for public distribution or when privacy is a concern.</p>
      <p>All sanitization happens in your browser, ensuring your documents remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Drag and drop your PDF file or click to select.' },
      { step: 2, title: 'Select What to Remove', description: 'Choose which types of hidden data to strip.' },
      { step: 3, title: 'Sanitize and Download', description: 'Click Sanitize to clean the PDF and download.' },
    ],
    useCases: [
      { title: 'Public Release', description: 'Prepare documents for public distribution.', icon: 'globe' },
      { title: 'Privacy Protection', description: 'Remove personal information before sharing.', icon: 'shield' },
      { title: 'Security Compliance', description: 'Meet security requirements for document handling.', icon: 'check-circle' },
    ],
    faq: [
      { question: 'What hidden data is removed?', answer: 'Metadata, scripts, attachments, comments, form data, and hidden layers.' },
      { question: 'Will visible content be affected?', answer: 'No, only hidden data is removed; visible content remains.' },
      { question: 'Is this reversible?', answer: 'No, removed data cannot be recovered. Keep a backup of the original.' },
    ],
  },

  'find-and-redact': {
    title: 'Find and Redact',
    metaDescription: 'Search and redact text across all pages of a PDF. Batch redact sensitive information like account numbers, names, and more.',
    keywords: ['redact pdf', 'find and redact', 'batch redact', 'remove text', 'pdf censorship', 'hide sensitive data'],
    description: `
      <p>Find and Redact allows you to search for specific text, numbers, or patterns across all pages of your PDF and redact all matching occurrences at once. Perfect for removing sensitive information like account numbers, names, addresses, or any confidential data.</p>
      <p>Preview all matches before applying redactions, and selectively choose which occurrences to redact. Supports case-sensitive search, whole word matching, and regular expressions for advanced pattern matching.</p>
      <p>All processing happens in your browser, ensuring your documents remain private and secure.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Drag and drop your PDF file or click to select.' },
      { step: 2, title: 'Search for Text', description: 'Enter the text, number, or regex pattern you want to find and redact.' },
      { step: 3, title: 'Review and Select', description: 'Preview all matches and select which ones to redact.' },
      { step: 4, title: 'Apply Redaction', description: 'Customize redaction appearance and apply to selected matches.' },
    ],
    useCases: [
      { title: 'Privacy Compliance', description: 'Redact personal information to comply with GDPR, HIPAA, or other regulations.', icon: 'shield' },
      { title: 'Legal Documents', description: 'Remove confidential data from legal documents before sharing.', icon: 'scale' },
      { title: 'Financial Records', description: 'Redact account numbers, SSNs, or financial data from statements.', icon: 'credit-card' },
    ],
    faq: [
      { question: 'Is redaction permanent?', answer: 'Yes, redaction permanently removes the underlying text. The original content cannot be recovered. Always keep a backup of the original file.' },
      { question: 'Can I redact images or scanned text?', answer: 'This tool works with text-based PDFs. For scanned documents, you would need to use manual area-based redaction.' },
      { question: 'Can I customize the redaction appearance?', answer: 'Yes, you can set the redaction color, add borders, and optionally include replacement text like "[REDACTED]".' },
      { question: 'How does regex search work?', answer: 'Enable "Use Regular Expression" to search using regex patterns. For example, \\d{4}-\\d{4}-\\d{4}-\\d{4} to find credit card numbers.' },
    ],
  },

  'redact-pdf': {
    title: 'Redact PDF',
    metaDescription: 'Visually blackout, mosaic, or blur sensitive information in PDF files. Irreversible physical rasterization and deep metadata sanitization for privacy protection.',
    keywords: ['redact pdf', 'blackout pdf', 'mosaic pdf', 'blur pdf', 'pdf privacy', 'remove sensitive data', 'secure pdf editor'],
    description: `
      <p>Redact PDF provides a visual, interactive editor to permanently conceal and protect sensitive data in your PDF documents. Drag to mark any confidential area—such as names, addresses, ID numbers, signatures, official seals, financial figures, or portraits—and apply blackout, whiteout, mosaic, or blur effects.</p>
      <p>Unlike standard PDF editors that simply superimpose superficial black rectangles over existing text, this tool performs <strong>irreversible physical pixel rasterization</strong>. The underlying text layers, vector graphics, and OCR streams are completely destroyed and cannot be recovered by copy-pasting or reverse-engineering.</p>
      <p>Additionally, the tool performs deep metadata wiping, eliminating author information, creation history, and XMP streams. All processing runs 100% locally in your browser with zero server uploads.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload PDF Document', description: 'Select or drag-and-drop the PDF file you wish to redact.' },
      { step: 2, title: 'Mark Sensitive Areas', description: 'Click and drag on any page to draw redaction boxes around confidential content.' },
      { step: 3, title: 'Choose Redaction Style', description: 'Select blackout, whiteout, mosaic (adjustable pixel size), or blur. Toggle real-time preview to inspect the result.' },
      { step: 4, title: 'Export Secured PDF', description: 'Click "Generate Secured PDF" to execute irreversible flattening, metadata wiping, and download your secured document.' },
    ],
    useCases: [
      { title: 'Privacy & Regulatory Compliance', description: 'Safely mask Personally Identifiable Information (PII) to comply with GDPR, HIPAA, or CCPA requirements.', icon: 'shield' },
      { title: 'Confidential Legal & Business Sharing', description: 'Obscure trade secrets, settlement terms, signatures, and stamps prior to public disclosure or external distribution.', icon: 'file-text' },
      { title: 'Financial & Identity Protection', description: 'Conceal bank account numbers, tax IDs, credit card details, and ID card numbers from statements and invoices.', icon: 'lock' },
    ],
    faq: [
      { question: 'Can anyone recover redacted information by copying text or inspecting layers?', answer: 'No. The redacted areas undergo physical pixel burn-in flattening. Underlying text, vectors, and objects are completely removed from the file structure, making recovery impossible.' },
      { question: 'What is the difference between blackout, mosaic, and blur?', answer: 'Blackout creates a solid black mask (standard for legal documents); whiteout provides a clean white mask; mosaic creates a pixelated grid; and blur produces a soft frosted glass effect.' },
      { question: 'Are files uploaded to your servers?', answer: 'No. All rendering, redaction, flattening, and PDF generation occur entirely within your browser memory. Your documents never leave your device.' },
      { question: 'What metadata is removed?', answer: 'Document Title, Author, Subject, Keywords, Creator, Producer, CreationDate, ModDate, and extended XMP metadata streams are thoroughly erased.' },
    ],
  },

  'decrypt-pdf': {
    title: 'Decrypt PDF',
    metaDescription: 'Remove password from PDF files. Unlock password-protected documents.',
    keywords: ['decrypt pdf', 'remove pdf password', 'unlock pdf', 'pdf password remover'],
    description: `
      <p>Decrypt PDF removes password protection from PDF documents. Enter the current password to unlock the file and create an unprotected copy.</p>
      <p>This tool requires you to know the current password. It cannot crack or bypass unknown passwords.</p>
      <p>All decryption happens in your browser, ensuring your passwords and documents remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Protected PDF', description: 'Drag and drop your password-protected PDF.' },
      { step: 2, title: 'Enter Password', description: 'Enter the current document password.' },
      { step: 3, title: 'Decrypt and Download', description: 'Click Decrypt to remove protection and download.' },
    ],
    useCases: [
      { title: 'Remove Old Passwords', description: 'Unlock documents when password is no longer needed.', icon: 'unlock' },
      { title: 'Simplify Access', description: 'Create unprotected copies for easier sharing.', icon: 'share-2' },
      { title: 'Archive Documents', description: 'Remove passwords before long-term archiving.', icon: 'archive' },
    ],
    faq: [
      { question: 'Can it crack unknown passwords?', answer: 'No, you must know the current password to decrypt.' },
      { question: 'Is the original file modified?', answer: 'No, a new unprotected copy is created.' },
      { question: 'What if I forgot the password?', answer: 'Unfortunately, we cannot recover forgotten passwords.' },
    ],
  },

  'flatten-pdf': {
    title: 'Flatten PDF',
    metaDescription: 'Flatten PDF forms and annotations. Make content non-editable.',
    keywords: ['flatten pdf', 'flatten forms', 'flatten annotations', 'non-editable pdf'],
    description: `
      <p>Flatten PDF converts interactive elements like form fields and annotations into static content. The flattened PDF looks the same but can no longer be edited.</p>
      <p>Perfect for finalizing filled forms, preserving annotations, or creating non-editable document versions.</p>
      <p>All processing happens in your browser, ensuring your documents remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Drag and drop your PDF with forms or annotations.' },
      { step: 2, title: 'Select What to Flatten', description: 'Choose to flatten forms, annotations, or both.' },
      { step: 3, title: 'Flatten and Download', description: 'Click Flatten to create the static PDF.' },
    ],
    useCases: [
      { title: 'Finalize Forms', description: 'Lock filled form data to prevent changes.', icon: 'lock' },
      { title: 'Preserve Annotations', description: 'Make annotations permanent in the document.', icon: 'check-circle' },
      { title: 'Archive Documents', description: 'Create non-editable versions for archiving.', icon: 'archive' },
    ],
    faq: [
      { question: 'Is flattening reversible?', answer: 'No, flattening is permanent. Keep a backup of the original.' },
      { question: 'Will the appearance change?', answer: 'No, the document looks the same but is no longer interactive.' },
      { question: 'Does it reduce file size?', answer: 'Sometimes, as interactive elements are converted to simpler content.' },
    ],
  },

  'remove-metadata': {
    title: 'Remove Metadata',
    metaDescription: 'Strip metadata from PDF files. Remove author, dates, and document properties.',
    keywords: ['remove pdf metadata', 'strip metadata', 'pdf privacy', 'anonymous pdf'],
    description: `
      <p>Remove Metadata strips all document properties and metadata from your PDF files. Remove author names, creation dates, software information, and other identifying data.</p>
      <p>Essential for privacy when sharing documents or when metadata could reveal sensitive information.</p>
      <p>All processing happens in your browser, ensuring your documents remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Drag and drop your PDF file or click to select.' },
      { step: 2, title: 'Remove Metadata', description: 'Click Remove to strip all metadata.' },
      { step: 3, title: 'Download', description: 'Download the metadata-free PDF.' },
    ],
    useCases: [
      { title: 'Privacy Protection', description: 'Remove personal information before sharing.', icon: 'shield' },
      { title: 'Anonymous Documents', description: 'Create documents without author attribution.', icon: 'user-x' },
      { title: 'Clean Distribution', description: 'Distribute documents without internal metadata.', icon: 'send' },
    ],
    faq: [
      { question: 'What metadata is removed?', answer: 'Author, title, subject, keywords, dates, creator, and producer information.' },
      { question: 'Is XMP metadata removed?', answer: 'Yes, both standard and XMP metadata are stripped.' },
      { question: 'Will content be affected?', answer: 'No, only metadata is removed; document content remains unchanged.' },
    ],
  },

  'change-permissions': {
    title: 'Change Permissions',
    metaDescription: 'Modify PDF permissions. Control printing, copying, and editing access.',
    keywords: ['pdf permissions', 'change pdf access', 'restrict pdf', 'pdf security'],
    description: `
      <p>Change Permissions modifies the access controls on your PDF documents. Enable or disable printing, copying, editing, and annotation permissions.</p>
      <p>Set an owner password to enforce these restrictions. Recipients can view the document but are limited in what actions they can perform.</p>
      <p>All processing happens in your browser, ensuring your documents remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Drag and drop your PDF file or click to select.' },
      { step: 2, title: 'Set Permissions', description: 'Enable or disable printing, copying, editing, and annotations.' },
      { step: 3, title: 'Apply and Download', description: 'Set owner password and download the restricted PDF.' },
    ],
    useCases: [
      { title: 'Prevent Copying', description: 'Disable text copying to protect content.', icon: 'copy' },
      { title: 'Control Printing', description: 'Restrict or allow document printing.', icon: 'printer' },
      { title: 'Limit Editing', description: 'Prevent modifications to the document.', icon: 'edit-3' },
    ],
    faq: [
      { question: 'Do I need a password?', answer: 'An owner password is required to enforce permissions.' },
      { question: 'Can permissions be removed?', answer: 'Yes, with the owner password or using Remove Restrictions tool.' },
      { question: 'Are all PDF readers compatible?', answer: 'Most PDF readers respect permissions, but some may not enforce them.' },
    ],
  },

  'pdf-to-docx': {
    title: 'PDF to Word',
    metaDescription: 'Convert PDF to editable Word (DOCX) documents. Preserve formatting and layout.',
    keywords: ['pdf to word', 'convert pdf to docx', 'pdf to doc', 'editable pdf'],
    description: `
      <p>PDF to Word converts your PDF documents into editable Microsoft Word (DOCX) files. The tool preserves the original layout, formatting, images, and text flow.</p>
      <p>Easily edit your PDF content in Word without retyping. Perfect for contracts, reports, and resumes.</p>
      <p>All conversion happens locally in your browser using WebAssembly technology, ensuring your documents never leave your device.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Drag and drop your PDF file or click to select.' },
      { step: 2, title: 'Convert', description: 'Wait for the conversion process to complete.' },
      { step: 3, title: 'Download Word Doc', description: 'Download your fully editable DOCX file.' },
    ],
    useCases: [
      { title: 'Edit Contracts', description: 'Convert PDF contracts to Word for editing and revision.', icon: 'file-text' },
      { title: 'Resume Updates', description: 'Update old PDF resumes by converting them to Word.', icon: 'user' },
      { title: 'Content Repurposing', description: 'Extract content from PDF reports for other documents.', icon: 'copy' },
    ],
    faq: [
      { question: 'Is formatting preserved?', answer: 'Yes, the tool aims to preserve layout, fonts, and images as closely as possible.' },
      { question: 'Can I convert scanned PDFs?', answer: 'Scanned PDFs will be converted as images in Word unless you use OCR first.' },
      { question: 'Is it compatible with Word?', answer: 'Yes, the output is a standard .docx file compatible with Microsoft Word and Google Docs.' },
    ],
  },

  'pdf-to-markdown': {
    title: 'PDF to Markdown',
    metaDescription: 'Convert PDF to Markdown format. Extract text and preserve formatting like headings and lists.',
    keywords: ['pdf to markdown', 'convert pdf to md', 'pdf text extraction', 'markdown converter', 'pdf to text'],
    description: `
      <p>PDF to Markdown converts your PDF documents into clean, well-structured Markdown files. The tool intelligently extracts text content and attempts to preserve formatting like headings, lists, and paragraphs.</p>
      <p>Perfect for converting PDF documents to editable formats for documentation, note-taking, or content management systems that support Markdown.</p>
      <p>All conversion happens locally in your browser, ensuring your documents remain private and secure.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Drag and drop your PDF file or click to select.' },
      { step: 2, title: 'Configure Options', description: 'Set page range, choose to include page numbers, and adjust line break settings.' },
      { step: 3, title: 'Convert and Download', description: 'Click Convert to generate your Markdown file and download.' },
    ],
    useCases: [
      { title: 'Documentation', description: 'Convert PDF manuals and guides to Markdown for version-controlled documentation.', icon: 'file-text' },
      { title: 'Note Taking', description: 'Extract content from PDF articles and books for your note-taking system.', icon: 'edit-3' },
      { title: 'Content Migration', description: 'Migrate PDF content to CMS platforms that support Markdown.', icon: 'copy' },
    ],
    faq: [
      { question: 'Is formatting preserved?', answer: 'The tool attempts to detect headings based on font size and bullet points/numbered lists. Complex layouts may require manual adjustment.' },
      { question: 'Can I convert specific pages?', answer: 'Yes, you can specify a page range like "1-3, 5, 7" to convert only those pages.' },
      { question: 'Does it work with scanned PDFs?', answer: 'Scanned PDFs contain images, not text. Use our OCR tool first to extract text before converting to Markdown.' },
    ],
  },

  // ==================== NEW TOOLS ====================
  'deskew-pdf': {
    title: 'Deskew PDF',
    metaDescription: 'Automatically straighten scanned or tilted PDF pages. Fix skewed documents with precision angle detection.',
    keywords: ['deskew pdf', 'straighten pdf', 'fix tilted scan', 'auto rotate pdf', 'correct pdf angle'],
    description: `
      <p>Deskew PDF automatically detects and corrects tilted or skewed pages in your PDF documents using advanced projection profile variance analysis. This is essential for scanned documents that were fed into the scanner at an angle.</p>
      <p>The tool analyzes the text and content alignment at different angles to find the optimal rotation, then applies the correction. You can adjust the sensitivity threshold (1-30) and DPI settings (72-300) for optimal results.</p>
      <p>All processing happens locally in your browser using WebAssembly technology, ensuring your documents remain private and secure.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Drag and drop your scanned PDF file or click to select.' },
      { step: 2, title: 'Configure Settings', description: 'Adjust threshold sensitivity and DPI if needed for better detection.' },
      { step: 3, title: 'Process and Download', description: 'Click Deskew to straighten pages and download the corrected PDF.' },
    ],
    useCases: [
      { title: 'Scanned Documents', description: 'Fix pages that were scanned at an angle from document feeders.', icon: 'scan' },
      { title: 'Mobile Scans', description: 'Correct tilted photos of documents taken with smartphones.', icon: 'smartphone' },
      { title: 'Archive Restoration', description: 'Straighten old scanned archives for better readability.', icon: 'archive' },
    ],
    faq: [
      { question: 'How accurate is the angle detection?', answer: 'The tool uses projection profile variance analysis to detect skew angles up to ±10 degrees with high accuracy. It automatically skips pages with angles less than 0.3 degrees.' },
      { question: 'Will text quality be affected?', answer: 'For rotations at multiples of 90 degrees, no quality loss occurs. For other angles, the tool rounds to the nearest degree and maintains good quality.' },
      { question: 'Can I deskew specific pages only?', answer: 'The tool analyzes all pages but only corrects those with detected skew above the sensitivity threshold. Pages with minimal skew are left unchanged.' },
      { question: 'What is the sensitivity threshold?', answer: 'Values 1-10 correct obvious tilts only, 11-20 detect moderate skew, and 21-30 catch subtle angles. Default is 10 for balanced detection.' },
      { question: 'How long does processing take?', answer: 'Processing time depends on file size and DPI. 150 DPI (default) provides good balance between speed and accuracy. Higher DPI is more accurate but slower.' },
    ],
  },

  'pdf-booklet': {
    title: 'PDF Booklet Creator',
    metaDescription: 'Create booklet layouts from PDF for printing. Arrange pages for saddle-stitch binding with multiple grid options.',
    keywords: ['pdf booklet', 'booklet creator', 'print booklet', 'saddle stitch', 'imposition'],
    description: `
      <p>PDF Booklet Creator arranges your PDF pages into booklet layouts ready for print-and-fold production. Perfect for creating brochures, zines, booklets, and saddle-stitched publications.</p>
      <p>Choose from various grid modes (1x2, 2x2, 2x4, 4x4), paper sizes, and orientation options. The tool automatically handles page imposition for proper folding sequence.</p>
      <p>All processing happens locally in your browser, ensuring your documents remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Upload the PDF document you want to convert to a booklet.' },
      { step: 2, title: 'Choose Layout', description: 'Select grid mode, paper size, orientation, and rotation options.' },
      { step: 3, title: 'Create and Download', description: 'Generate the booklet layout and download for printing.' },
    ],
    useCases: [
      { title: 'Brochures', description: 'Create fold-ready brochures from standard PDF documents.', icon: 'book-open' },
      { title: 'Zines', description: 'Produce self-published zines with proper page imposition.', icon: 'book' },
      { title: 'Event Programs', description: 'Create professional program booklets for events.', icon: 'calendar' },
    ],
    faq: [
      { question: 'What is saddle-stitch binding?', answer: 'Saddle-stitch is a binding method where folded sheets are nested and stapled through the fold.' },
      { question: 'Which grid mode should I use?', answer: '1x2 is standard for booklets. Use 2x2 or larger for multi-up printing to save paper.' },
      { question: 'Can I preview the layout?', answer: 'Yes, the tool provides a visual preview before generating the final booklet.' },
    ],
  },

  'rasterize-pdf': {
    title: 'Rasterize PDF',
    metaDescription: 'Convert PDF pages to high-quality images. Export as PNG, JPEG, or WebP with custom DPI settings.',
    keywords: ['rasterize pdf', 'pdf to image', 'pdf to png', 'pdf to jpeg', 'convert pdf pages'],
    description: `
      <p>Rasterize PDF converts your PDF pages into high-quality raster images. Choose from PNG, JPEG, or WebP output formats with full control over DPI and quality settings.</p>
      <p>Perfect for creating thumbnails, social media graphics, or archiving PDF content as images. Supports page range selection and batch processing.</p>
      <p>All processing happens locally in your browser, ensuring your documents remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Drag and drop your PDF file or click to select.' },
      { step: 2, title: 'Configure Output', description: 'Select DPI, output format (PNG/JPEG/WebP), quality, and page range.' },
      { step: 3, title: 'Convert and Download', description: 'Process pages and download images individually or as a ZIP archive.' },
    ],
    useCases: [
      { title: 'Social Media', description: 'Convert PDF slides to images for social media posting.', icon: 'share-2' },
      { title: 'Thumbnails', description: 'Generate preview thumbnails for PDF documents.', icon: 'image' },
      { title: 'Web Publishing', description: 'Convert PDF content to web-friendly image formats.', icon: 'globe' },
    ],
    faq: [
      { question: 'What DPI should I use?', answer: '72 DPI for screen, 150 DPI for general use, 300 DPI for print quality.' },
      { question: 'Which format is best?', answer: 'PNG for quality/transparency, JPEG for small size, WebP for modern web use.' },
      { question: 'Can I convert specific pages?', answer: 'Yes, specify page ranges like "1-5, 8, 10-15" to convert only those pages.' },
    ],
  },

  'markdown-to-pdf': {
    title: 'Markdown to PDF',
    metaDescription: 'Convert Markdown files to beautifully formatted PDF documents. Support for GitHub Flavored Markdown and syntax highlighting.',
    keywords: ['markdown to pdf', 'md to pdf', 'convert markdown', 'gfm to pdf', 'markdown converter'],
    description: `
      <p>Markdown to PDF converts your Markdown files into professionally styled PDF documents. Support for CommonMark and GitHub Flavored Markdown (GFM) including tables, task lists, and code blocks.</p>
      <p>Choose from multiple themes (light, dark, GitHub) and customize page size and margins. Code blocks are syntax-highlighted for better readability.</p>
      <p>All conversion happens locally in your browser, ensuring your content remains private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Markdown File', description: 'Upload your .md or .markdown file.' },
      { step: 2, title: 'Choose Theme', description: 'Select a visual theme and configure page settings.' },
      { step: 3, title: 'Convert and Download', description: 'Generate the styled PDF and download.' },
    ],
    useCases: [
      { title: 'Documentation', description: 'Convert README files and docs to shareable PDFs.', icon: 'file-text' },
      { title: 'Notes Export', description: 'Export Markdown notes to PDF for printing or sharing.', icon: 'edit-3' },
      { title: 'Reports', description: 'Create reports from Markdown with professional styling.', icon: 'bar-chart' },
    ],
    faq: [
      { question: 'Is GitHub Flavored Markdown supported?', answer: 'Yes, tables, task lists, strikethrough, and other GFM features are supported.' },
      { question: 'Can I customize the styling?', answer: 'Choose from preset themes or add custom CSS for full control.' },
      { question: 'Are code blocks highlighted?', answer: 'Yes, code blocks include syntax highlighting for common languages.' },
    ],
  },

  'email-to-pdf': {
    title: 'Email to PDF',
    metaDescription: 'Convert email files (.eml, .msg) to PDF documents. Preserve formatting, inline images, clickable links, and embed attachments.',
    keywords: ['email to pdf', 'eml to pdf', 'msg to pdf', 'convert email', 'email converter', 'save email as pdf', 'outlook to pdf'],
    description: `
      <p>Email to PDF converts your email files (.eml and .msg formats) into well-formatted PDF documents. The tool preserves the email header information, body content, inline images with CID replacement, clickable links, and embeds attachments directly into the PDF.</p>
      <p>Customize output options including page size (A4, Letter, Legal), date formatting with timezone support, and whether to include CC/BCC fields and attachment information.</p>
      <p>All conversion happens locally in your browser, ensuring your emails remain private and secure.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Email File', description: 'Upload your .eml or .msg email file.' },
      { step: 2, title: 'Configure Options', description: 'Set page size, date format, timezone, and choose which fields to include.' },
      { step: 3, title: 'Convert and Download', description: 'Convert to PDF with embedded attachments and download the result.' },
    ],
    useCases: [
      { title: 'Legal Records', description: 'Archive important emails as PDF with embedded attachments for legal documentation.', icon: 'scale' },
      { title: 'Business Archives', description: 'Convert business correspondence to PDF for long-term record keeping.', icon: 'briefcase' },
      { title: 'Evidence Preservation', description: 'Save email evidence with inline images and attachments in a non-editable PDF format.', icon: 'shield' },
    ],
    faq: [
      { question: 'What email formats are supported?', answer: 'Both .eml (RFC 822) and .msg (Microsoft Outlook) files are fully supported.' },
      { question: 'Are attachments included?', answer: 'Yes! Attachments are embedded directly into the PDF file. You can extract them from the PDF using a compatible PDF reader.' },
      { question: 'Are inline images displayed?', answer: 'Yes, inline images referenced via CID (Content-ID) are automatically converted to base64 data URIs and displayed in the PDF.' },
      { question: 'Are links clickable?', answer: 'Yes, all HTML links (<a> tags) and URLs in plain text emails are converted to clickable links in the PDF.' },
      { question: 'Is the email formatting preserved?', answer: 'Yes, HTML emails maintain their formatting as closely as possible, including styles, images, and links.' },
    ],
  },

  'cbz-to-pdf': {
    title: 'CBZ to PDF',
    metaDescription: 'Convert comic book archives (CBZ) to PDF. Preserve image order and quality for digital comics.',
    keywords: ['cbz to pdf', 'comic to pdf', 'convert cbz', 'comic book converter', 'cbz converter'],
    description: `
      <p>CBZ to PDF converts Comic Book Archive files into PDF documents. The tool extracts all images from the CBZ archive and compiles them into a PDF while maintaining the correct reading order.</p>
      <p>Choose from various page size options including original image dimensions or standardized comic book sizes. Perfect for reading comics on devices that support PDF but not CBZ.</p>
      <p>All conversion happens locally in your browser, ensuring your comics remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload CBZ File', description: 'Upload your .cbz comic book archive file.' },
      { step: 2, title: 'Select Options', description: 'Choose page size and image quality settings.' },
      { step: 3, title: 'Convert and Download', description: 'Convert to PDF and download your comic.' },
    ],
    useCases: [
      { title: 'E-Reader Compatibility', description: 'Convert CBZ to PDF for e-readers that only support PDF.', icon: 'book' },
      { title: 'Comic Archives', description: 'Create PDF archives of your digital comic collection.', icon: 'archive' },
      { title: 'Print Preparation', description: 'Convert digital comics to PDF for printing.', icon: 'printer' },
    ],
    faq: [
      { question: 'What is CBZ format?', answer: 'CBZ is a ZIP archive containing comic book pages as image files, renamed with .cbz extension.' },
      { question: 'Is image quality preserved?', answer: 'Yes, images are embedded at their original quality in the PDF.' },
      { question: 'Are nested folders supported?', answer: 'Yes, images from all folders within the archive are extracted and sorted.' },
    ],
  },

  'pdf-to-pdfa': {
    title: 'PDF to PDF/A',
    metaDescription: 'Convert PDF to PDF/A archival format. Ensure long-term document preservation with ISO standards.',
    keywords: ['pdf to pdfa', 'pdfa converter', 'archive pdf', 'pdf archival', 'long term preservation'],
    description: `
      <p>PDF to PDF/A converts your PDF documents to PDF/A format, the ISO standard for long-term document archiving. PDF/A ensures that documents will be viewable and reproducible for decades.</p>
      <p>Choose from PDF/A-1b (basic conformance), PDF/A-2b (recommended, supports transparency), or PDF/A-3b (allows embedded files). The tool embeds fonts and flattens transparency as needed.</p>
      <p>All conversion happens locally in your browser, ensuring your documents remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Upload the PDF you want to convert to PDF/A.' },
      { step: 2, title: 'Select PDF/A Level', description: 'Choose PDF/A-1b, PDF/A-2b, or PDF/A-3b conformance level.' },
      { step: 3, title: 'Convert and Download', description: 'Convert to PDF/A and download the archival document.' },
    ],
    useCases: [
      { title: 'Legal Archives', description: 'Convert legal documents to PDF/A for court-admissible long-term storage.', icon: 'scale' },
      { title: 'Government Records', description: 'Comply with government archival requirements using PDF/A.', icon: 'building' },
      { title: 'Business Archives', description: 'Preserve important business documents for future accessibility.', icon: 'archive' },
    ],
    faq: [
      { question: 'Which PDF/A level should I use?', answer: 'PDF/A-2b is recommended for most uses. Use 1b for maximum compatibility or 3b if you need embedded files.' },
      { question: 'What makes PDF/A different?', answer: 'PDF/A embeds fonts, disables encryption, and ensures all elements are self-contained for future viewing.' },
      { question: 'Can I convert back from PDF/A?', answer: 'PDF/A files are standard PDFs and can be opened normally. The archival features add restrictions, not limitations.' },
    ],
  },

  'font-to-outline': {
    title: 'Font to Outline',
    metaDescription: 'Remove font dependencies from PDF documents by converting pages to high-quality images. Ensures compatibility across all systems.',
    keywords: ['font to outline', 'outline fonts', 'remove fonts', 'font compatibility', 'flatten pdf fonts', 'pdf font removal'],
    description: `
      <p>Font to Outline removes all font dependencies from your PDF by converting each page into high-quality rasterized content. This ensures your document looks exactly the same on any system, even if the original fonts are not installed.</p>
      <p>The tool renders each page at your chosen DPI (150-600), removing embedded fonts while preserving the exact visual appearance. Optionally, you can add an invisible text layer to maintain searchability.</p>
      <p>This is essential for print preparation, cross-platform compatibility, and avoiding font licensing issues when sharing documents. All processing happens locally in your browser.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Upload the PDF containing fonts you want to remove.' },
      { step: 2, title: 'Configure Quality', description: 'Choose DPI (300 recommended for print, 150 for screen). Enable searchable text if needed.' },
      { step: 3, title: 'Convert and Download', description: 'Process the file and download the font-independent PDF.' },
    ],
    useCases: [
      { title: 'Print Preparation', description: 'Eliminate font issues at commercial printers by removing all font dependencies.', icon: 'printer' },
      { title: 'Cross-Platform Sharing', description: 'Share documents that look identical on any device, regardless of installed fonts.', icon: 'share-2' },
      { title: 'Font Licensing', description: 'Remove embedded fonts to avoid licensing concerns when distributing documents.', icon: 'shield' },
    ],
    faq: [
      { question: 'How does this work?', answer: 'The tool renders each page at high resolution (your chosen DPI) and recreates the PDF from these images, removing all font dependencies while preserving visual appearance.' },
      { question: 'Can I still select text after conversion?', answer: 'By default, no. Text becomes part of the image. However, you can enable "Preserve searchable text" to add an invisible text layer for search and copy functionality.' },
      { question: 'What DPI should I use?', answer: '300 DPI is recommended for print-quality output. 150 DPI is sufficient for screen viewing and produces smaller files. 600 DPI is for highest quality but creates large files.' },
      { question: 'Will file size increase?', answer: 'File size depends on DPI and content. 150 DPI usually produces smaller files, 300 DPI may increase size, 600 DPI significantly increases size. Compression is automatically applied.' },
      { question: 'Is this reversible?', answer: 'No, font data is permanently removed. Keep a backup of the original if you need editable text with the original fonts.' },
      { question: 'What about vector graphics?', answer: 'Vector graphics (shapes, lines) in the original PDF will be converted to raster along with text. The visual quality is preserved at your chosen DPI.' },
    ],
  },

  'extract-tables': {
    title: 'Extract Tables from PDF',
    metaDescription: 'Detect and extract tables from PDF documents. Export to JSON, Markdown, or CSV formats.',
    keywords: ['extract tables', 'pdf table extraction', 'pdf to csv', 'pdf to excel', 'table detection'],
    description: `
      <p>Extract Tables from PDF detects tabular data within your PDF documents and exports it in structured formats. Choose JSON for data integration, Markdown for documentation, or CSV for spreadsheets.</p>
      <p>The tool uses intelligent detection algorithms to identify table structures even in complex documents. Specify page ranges and adjust detection parameters for optimal results.</p>
      <p>All processing happens locally in your browser, ensuring your documents remain private.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Upload the PDF containing tables you want to extract.' },
      { step: 2, title: 'Configure Detection', description: 'Set page range and minimum column/row thresholds.' },
      { step: 3, title: 'Export and Download', description: 'Choose output format (JSON/Markdown/CSV) and download.' },
    ],
    useCases: [
      { title: 'Data Analysis', description: 'Extract table data for analysis in spreadsheets or databases.', icon: 'bar-chart' },
      { title: 'Report Processing', description: 'Pull tables from PDF reports for further processing.', icon: 'file-text' },
      { title: 'Documentation', description: 'Convert PDF tables to Markdown for technical documentation.', icon: 'book' },
    ],
    faq: [
      { question: 'Can it detect complex tables?', answer: 'The tool works best with simple grid tables. Complex merged cells may require manual adjustment.' },
      { question: 'What if no tables are found?', answer: 'Try adjusting the minimum columns/rows threshold or check if the PDF contains actual table structures.' },
      { question: 'Can I extract from specific pages?', answer: 'Yes, specify a page range to limit extraction to certain pages.' },
    ],
  },

  'ocg-manager': {
    title: 'PDF Layer Manager (OCG)',
    metaDescription: 'Manage PDF layers (Optional Content Groups). View, toggle, add, delete, and rename layers in your PDF documents.',
    keywords: ['pdf layers', 'ocg manager', 'optional content groups', 'pdf layer visibility', 'manage pdf layers'],
    description: `
      <p>PDF Layer Manager allows you to view and manage Optional Content Groups (OCG) in your PDF documents. OCG layers are used in technical drawings, maps, and complex documents to organize content into toggleable layers.</p>
      <p>View all layers in your PDF, toggle their visibility, add new layers, delete unwanted ones, or rename existing layers. This tool is essential for working with layered PDFs like architectural plans, CAD exports, and print-ready documents.</p>
      <p>All processing happens locally in your browser, ensuring your documents remain private and secure.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Your PDF', description: 'Upload a PDF file that contains layers (OCG) or one you want to add layers to.' },
      { step: 2, title: 'View Layers', description: 'The tool automatically lists all layers found in the document with their visibility status.' },
      { step: 3, title: 'Manage Layers', description: 'Toggle layer visibility, rename layers, add new ones, or delete unwanted layers.' },
      { step: 4, title: 'Save and Download', description: 'Download your modified PDF with the layer changes applied.' },
    ],
    useCases: [
      { title: 'Technical Drawings', description: 'Manage layers in CAD exports to show/hide dimensions, annotations, or different views.', icon: 'ruler' },
      { title: 'Map Editing', description: 'Toggle different map layers like topography, roads, and labels for custom map prints.', icon: 'map' },
      { title: 'Print Preparation', description: 'Prepare layered PDFs for printing by toggling appropriate layers for different versions.', icon: 'printer' },
    ],
    faq: [
      { question: 'What are PDF layers (OCG)?', answer: 'Optional Content Groups (OCG) are layers in a PDF that can be shown or hidden. They are commonly used in CAD drawings, maps, and complex documents.' },
      { question: 'Why does my PDF show no layers?', answer: 'Not all PDFs contain layers. Layers are typically added during PDF creation from design software or CAD applications.' },
      { question: 'Will layer changes affect the original content?', answer: 'Layer visibility changes only affect what is displayed or printed. The actual content remains in the document.' },
    ],
  },

  'pdf-reader': {
    title: 'PDF Reader',
    metaDescription: 'Free online PDF reader. View, navigate, zoom, rotate, and print PDF documents directly in your browser.',
    keywords: ['pdf reader', 'pdf viewer', 'view pdf online', 'read pdf', 'pdf browser viewer'],
    description: `
      <p>PDF Reader is a full-featured PDF viewer that lets you read and navigate PDF documents directly in your browser. No software installation required - just upload your PDF and start reading.</p>
      <p>Navigate between pages, zoom in and out, rotate the view, and use fullscreen mode for distraction-free reading. You can also print documents or download them for offline access.</p>
      <p>All viewing happens locally in your browser. Your documents are never uploaded to any server, ensuring complete privacy.</p>
    `,
    howToUse: [
      { step: 1, title: 'Open Your PDF', description: 'Click to upload or drag and drop a PDF file to open it in the reader.' },
      { step: 2, title: 'Navigate Pages', description: 'Use the page controls to go to the previous or next page, or jump to a specific page number.' },
      { step: 3, title: 'Adjust View', description: 'Zoom in or out, rotate the view, or enter fullscreen mode for comfortable reading.' },
      { step: 4, title: 'Print or Download', description: 'Print the document or download it for offline access when needed.' },
    ],
    useCases: [
      { title: 'Document Review', description: 'Quickly review PDF documents without installing any software.', icon: 'book-open' },
      { title: 'Mobile Reading', description: 'Read PDF documents on any device with a web browser.', icon: 'smartphone' },
      { title: 'Quick Preview', description: 'Preview PDFs before deciding to download or print them.', icon: 'eye' },
    ],
    faq: [
      { question: 'Is my document secure?', answer: 'Yes, your document is processed entirely in your browser and is never uploaded to any server.' },
      { question: 'Can I annotate or edit the PDF?', answer: 'This tool is for viewing only. Use our Sign PDF or Annotate PDF tools for editing.' },
      { question: 'Does it work on mobile devices?', answer: 'Yes, the PDF Reader works on all devices with a modern web browser.' },
    ],
  },

  'digital-sign-pdf': {
    title: 'Digital Signature',
    metaDescription: 'Add X.509 digital signatures to PDF documents. Sign PDFs with PFX, P12, or PEM certificates for legal validity.',
    keywords: ['digital signature pdf', 'x509 certificate', 'pfx sign pdf', 'p12 sign pdf', 'pem sign pdf', 'legally sign pdf'],
    description: `
      <p>Digital Signature allows you to add cryptographic X.509 digital signatures to PDF documents. Unlike simple drawn signatures, digital signatures provide legal validity and document integrity verification.</p>
      <p>Upload your certificate file (PFX, P12, or PEM format), enter the password, and sign your PDF. You can add visible signatures with custom text, images, and positioning, or invisible signatures for document integrity only.</p>
      <p>All signing happens locally in your browser. Your certificate and documents are never uploaded to any server.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload PDF', description: 'Upload the PDF document you want to digitally sign.' },
      { step: 2, title: 'Load Certificate', description: 'Upload your X.509 certificate file (.pfx, .p12, or .pem) and enter the password.' },
      { step: 3, title: 'Configure Signature', description: 'Optionally add reason, location, and visible signature with custom text or image.' },
      { step: 4, title: 'Sign and Download', description: 'Click Sign PDF to apply the digital signature and download the signed document.' },
    ],
    useCases: [
      { title: 'Legal Documents', description: 'Sign contracts, agreements, and legal documents with legally binding digital signatures.', icon: 'scale' },
      { title: 'Business Approvals', description: 'Digitally sign invoices, purchase orders, and approval documents for audit trails.', icon: 'briefcase' },
      { title: 'Document Integrity', description: 'Ensure documents have not been tampered with after signing.', icon: 'shield-check' },
    ],
    faq: [
      { question: 'What certificate formats are supported?', answer: 'PFX (.pfx), PKCS#12 (.p12), and PEM (.pem) certificate formats are supported.' },
      { question: 'Is the signature legally valid?', answer: 'Yes, X.509 digital signatures are legally recognized in most jurisdictions when using a valid certificate.' },
      { question: 'Can I add a visible signature?', answer: 'Yes, you can add a visible signature with custom text, image, position, and styling.' },
    ],
  },

  'validate-signature': {
    title: 'Validate Signature',
    metaDescription: 'Verify digital signatures in PDF documents. Check certificate validity, signer information, and document integrity.',
    keywords: ['validate pdf signature', 'verify digital signature', 'check pdf certificate', 'signature verification'],
    description: `
      <p>Validate Signature allows you to verify digital signatures in PDF documents. Check if signatures are valid, view certificate information, and confirm document integrity.</p>
      <p>Upload a signed PDF to see all signatures, their validity status, signer information, and whether the document has been modified after signing.</p>
      <p>All validation happens locally in your browser. Your documents are never uploaded to any server.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Signed PDF', description: 'Upload a PDF document that contains digital signatures.' },
      { step: 2, title: 'View Results', description: 'See all signatures found in the document with their validity status.' },
      { step: 3, title: 'Check Details', description: 'View certificate information, signer details, and signing timestamp.' },
      { step: 4, title: 'Export Report', description: 'Optionally download a JSON report of the validation results.' },
    ],
    useCases: [
      { title: 'Document Verification', description: 'Verify that signed documents are authentic and have not been tampered with.', icon: 'shield-check' },
      { title: 'Compliance Audit', description: 'Check signature validity for compliance and audit purposes.', icon: 'clipboard-check' },
      { title: 'Certificate Review', description: 'View certificate details and expiration dates for signed documents.', icon: 'award' },
    ],
    faq: [
      { question: 'What does "valid" mean?', answer: 'A valid signature means the document has not been modified since signing and the certificate chain is intact.' },
      { question: 'Can I validate multiple PDFs?', answer: 'Yes, you can upload multiple PDFs and validate all signatures in batch.' },
      { question: 'Why might a signature be invalid?', answer: 'Signatures may be invalid if the document was modified, the certificate expired, or the certificate is not trusted.' },
    ],
  },
  'ai-pdf-reflower': {
    title: 'AI PDF Layout Reflower',
    metaDescription: 'Re-typeset PDF documents into responsive mobile-friendly layouts. Support Markdown and EPUB export for enhanced small-screen reading.',
    keywords: ['pdf reflow', 'responsive pdf', 'pdf to markdown', 'epub export', 'mobile pdf reader'],
    description: `
      <p>AI PDF Layout Reflower is your ultimate companion for reading PDF documents on mobile devices. Traditional PDFs use a fixed layout, which often requires endless zooming and horizontal scrolling on smartphones or tablets, resulting in a tedious reading experience.</p>
      <p>This tool intelligently parses the text flow, line spacing, and physical coordinates of the PDF pages, reconstructing the semantic paragraphs and heading hierarchies. For multi-column or dual-column documents, it intelligently merges column flows into a single responsive flow, ensuring smooth reading.</p>
      <p>Additionally, it supports rendering mathematical formulas into LaTeX/MathJax and offers multiple reading themes (Sepia, Dark, Eye-protecting Green). You can export the reflowed layout as Markdown or a standard EPUB ebook with a single click.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload PDF File', description: 'Drag and drop your PDF file or click to browse and select it.' },
      { step: 2, title: 'Select Reading Theme', description: 'Choose your preferred font size and theme colors in the 3D mobile simulator on the right.' },
      { step: 3, title: 'Export Document', description: 'Once satisfied, use the physical pull-rope to export the document as Markdown or EPUB.' },
    ],
    useCases: [
      { title: 'Mobile Literature Reading', description: 'Read academic papers and research reports on your phone seamlessly without constant zooming.', icon: 'smartphone' },
      { title: 'Ebook Conversion', description: 'Convert text-heavy PDFs into EPUB files and import them into Kindle or other ebook readers.', icon: 'book' },
      { title: 'Note Archive', description: 'Directly convert structured PDF content into clean Markdown files for your personal knowledge base.', icon: 'file-text' },
    ],
    faq: [
      { question: 'Does it handle dual-column PDFs correctly?', answer: 'Yes, the layout reflower detects the horizontal coordinates of text blocks and structures left and right columns sequentially, preventing line interleaving.' },
      { question: 'Will images and math formulas be lost?', answer: 'Mathematical formulas are converted to LaTeX/MathJax syntax for clean web rendering, and images are preserved in their corresponding semantic positions.' },
      { question: 'Is the conversion done in the cloud?', answer: 'No, all layout analysis and format packaging are performed locally in your browser to guarantee the absolute privacy of your documents.' },
    ],
  },
  'citation-linker': {
    title: 'Citation Linker',
    metaDescription: 'Scan and activate citation markers in PDFs, converting them into clickable DOI links or page-jump targets.',
    keywords: ['citation linker', 'pdf hyperlink', 'doi matching', 'academic helper', 'pdf references'],
    description: `
      <p>Citation Linker is designed specifically for academic researchers. In many PDF papers, citation markers (e.g., [1], [2]) are plain text, forcing readers to scroll back and forth to the reference list at the end of the document, interrupting their focus.</p>
      <p>This tool reads PDF text locally, uses pattern recognition to match citation markers to their corresponding reference entries, and overlays clickable PDF link annotations using DOI lookups or page-jump coordinates.</p>
      <p>It also generates an interactive citation relationship map to visually navigate the document\'s reference network.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Academic PDF', description: 'Upload a PDF paper or thesis containing a bibliography/reference section.' },
      { step: 2, title: 'Review Citations', description: 'Inspect the citation pairs in the interactive map and manually edit or add DOI links if necessary.' },
      { step: 3, title: 'Inject Links', description: 'Click the activate button to overlay hyperlinks onto the PDF and download the updated document.' },
    ],
    useCases: [
      { title: 'Deep Literature Reading', description: 'Click citation markers to immediately view reference details or navigate to external DOI pages.', icon: 'link' },
      { title: 'Pre-publication Preparation', description: 'Ensure your written academic papers have fully active hyperlink navigations before final submission.', icon: 'award' },
      { title: 'Reference Map Analysis', description: 'Understand literature hierarchies and connections via the interactive network topology map.', icon: 'git-network' },
    ],
    faq: [
      { question: 'What if a reference has no DOI?', answer: 'If a DOI cannot be found, the tool falls back to an internal "GoTo Page" action, allowing you to click the marker and jump directly to the reference page.' },
      { question: 'Which citation formats are supported?', answer: 'It supports common numeric brackets (e.g., [1], [1-3]) and author-year citations (e.g., Author et al., 202X).' },
      { question: 'Will it modify the appearance of my PDF?', answer: 'No, it injects invisible Link annotations on top of the text, preserving the original layout, fonts, and styling of your document.' },
    ],
  },
  'vector-extractor': {
    title: 'PDF Vector Extractor',
    metaDescription: 'Convert PDF into high-fidelity SVG, allowing you to select, recolor, and export vector charts, logos, and graphics.',
    keywords: ['extract vectors from pdf', 'pdf to svg', 'pdf vector charts', 'extract logo', 'vector drawings'],
    description: `
      <p>PDF Vector Extractor unlocks vector paths and artwork embedded inside PDF files. Easily extract vector charts, diagrams, or logos from documents for design work or printing.</p>
      <p>Under the hood, it utilizes high-fidelity SVG rendering to deconstruct PDF vector paths into clean, standard SVG element trees without loss of precision.</p>
      <p>The interface highlights hover elements with a Z-axis 3D layer explosion effect, complete with a color picker panel for designers to adjust and extract vector nodes.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload PDF Document', description: 'Upload a PDF containing vector assets, diagrams, charts, or logos.' },
      { step: 2, title: 'Select Elements', description: 'Hover over the vector canvas to highlight elements, then click to select a node.' },
      { step: 3, title: 'Customize and Export', description: 'Adjust path attributes in the panel, then download as SVG or copy SVG source code.' },
    ],
    useCases: [
      { title: 'Design Asset Extraction', description: 'Quickly extract company logos, icons, and illustrations from brand guidelines or brochures.', icon: 'bezier' },
      { title: 'Scientific Chart Export', description: 'Extract vector charts from research papers to use in high-resolution printing or presentations.', icon: 'presentation' },
      { title: 'Vector Asset Recoloring', description: 'Modify the stroke and fill colors of extracted assets before saving them for web projects.', icon: 'crown' },
    ],
    faq: [
      { question: 'Why can\'t I select certain images?', answer: 'PDFs contain both raster images (like photos or scanned pages) and vector artwork (like shapes and curves). Only vector paths can be deconstructed into SVG paths.' },
      { question: 'Does the output SVG contain styles?', answer: 'Yes, the exported SVG retains all original properties including fills, strokes, opacity, gradients, and coordinate transforms.' },
      { question: 'Will large files lag?', answer: 'We use WebAssembly acceleration, but PDFs with extremely complex CAD drawings or thousands of vector paths may take a few seconds to render.' },
    ],
  },
  'deep-sanitize': {
    title: 'Deep Metadata Sanitizer',
    metaDescription: 'Thoroughly wipe author metadata, modification logs, hidden layers, and orphan objects from PDFs for maximum privacy.',
    keywords: ['pdf sanitization', 'clear metadata', 'anonymize pdf', 'strip hidden watermark', 'secure pdf'],
    description: `
      <p>Deep Metadata Sanitizer is your ultimate defense against metadata leaks and hidden tracking. Simply drawing black boxes over visible text in PDF files is not enough to protect commercial secrets.</p>
      <p>This tool scans the PDF binary structure to completely erase author info, creator software, editing logs (XMP Metadata), proprietary PieceInfo caches, and OCG optional content groups (often used for invisible watermarks).</p>
      <p>It also rewrites the cross-reference tables (xref) completely, discarding all incremental update blocks to ensure that deleted or modified historical data cannot be restored.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload PDF', description: 'Select the PDF file containing sensitive data or modification history.' },
      { step: 2, title: 'Run Scanner', description: 'Trigger the 3D containment scanner to check the file for hidden metadata and layers.' },
      { step: 3, title: 'Deep Sanitize', description: 'Click sanitize to wipe out tracking elements and download the fully clean PDF.' },
    ],
    useCases: [
      { title: 'Contract Sharing', description: 'Remove drafting records, paths, and previous revisions before sharing business contracts with third parties.', icon: 'file-signature' },
      { title: 'Anonymized Publishing', description: 'Wipe invisible annotations and watermarks to publish documents anonymously and securely.', icon: 'eye-off' },
      { title: 'PDF Optimization', description: 'Remove orphaned objects and garbage data streams to make files load faster on the web.', icon: 'zap' },
    ],
    faq: [
      { question: 'How is this different from standard metadata removal?', answer: 'Standard tools only clear basic fields like title or author. Deep Sanitizer reconstructs the entire PDF xref table, wiping PieceInfo, hidden watermarks, and historical incremental revisions.' },
      { question: 'Will this affect document layout or text?', answer: 'No, it only strips hidden description streams and structure data. The visible layout, texts, and graphics remain unchanged.' },
      { question: 'Does this remove PDF passwords?', answer: 'No, if a PDF is encrypted, you must unlock it first before performing a deep sanitization.' },
    ],
  },
  'booklet-folding-simulator': {
    title: '3D Booklet & Folding Simulator',
    metaDescription: 'Impose multi-page PDFs into foldable print sheets, featuring 3D physical folding animations and saddle-stitch previews.',
    keywords: ['3D imposition', 'folding simulator', 'saddle stitch', 'book layout', 'print proofing'],
    description: `
      <p>3D Booklet & Folding Simulator is an advanced tool designed for print designers and publishing professionals. Traditional book layout requires calculating complex page overlays and imposition pagination sequences. This tool visualizes and automates that entire process.</p>
      <p>Under the hood, our custom imposition algorithm maps a sequential PDF page list into standard print sheet layouts (such as 4-page half-folds, 8-page saddle stitches, or accordion folds), merging pages onto the front and back of large physical sheets.</p>
      <p>On the front-end, we utilize pure CSS 3D Matrix transforms and spring-mass physics curves to animate sheet folding horizontally and vertically, delivering a physical-like binding preview with a high WOW factor.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload PDF File', description: 'Drag and drop the PDF document you wish to layout for printing.' },
      { step: 2, title: 'Select Folding Layout', description: 'Choose your preferred imposition scheme (e.g., 4-page fold, 8-page saddle stitch, 4-page accordion).' },
      { step: 3, title: 'Interactive 3D Preview', description: 'Drag the slider to watch the sheet fold in 3D and inspect the final page numbering layout.' },
      { step: 4, title: 'Generate Imposed PDF', description: 'Click generate to download the rearranged and merged physical sheet PDF, ready for double-sided printing.' },
    ],
    useCases: [
      { title: 'Brochure Prototyping', description: 'Pre-visualize the folding sequence of tri-folds and pamphlets to prevent upsidedown pages after printing.', icon: 'book-open' },
      { title: 'Book Saddle-Stitching', description: 'Generate imposed print sheets for multi-page magazines or booklets automatically.', icon: 'layers' },
      { title: 'Print Shop Visual Aids', description: 'Help clients visualize how pages are physically distributed and folded on print sheets.', icon: 'printer' },
    ],
    faq: [
      { question: 'What is "Imposition"?', answer: 'Imposition is a fundamental step in prepress printing. Since commercial presses print on large sheets, pages are arranged out of order so that once printed, folded, and bound, the pages appear in the correct sequential order. This tool automatically calculates that layout.' },
      { question: 'Does the 3D preview alter my PDF content?', answer: 'No, the original PDF content is merely rendered as texture mappings onto the 3D sheet. The generated PDF only adjusts page order and placement; text and graphic qualities are kept intact.' },
      { question: 'What if my PDF page count is not a multiple of 4 or 8?', answer: 'The optimizer automatically appends blank pages at the end to satisfy the mathematical page-count requirements of the selected folding layout.' },
    ],
  },
  'pdf-to-slide': {
    title: 'PDF to Slide',
    metaDescription: 'Intelligently analyze PDF outlines, extract vector charts, and reconstruct them into fully-editable PPTX presentations.',
    keywords: ['PDF to PPT', 'slide reconstruction', 'chart extraction', 'academic presentation', 'PPTX compiler'],
    description: `
      <p>AI PDF-to-Slide Reconstructor breathes new life into static PDF documents, transforming them into modern, highly-customizable PowerPoint slides (PPTX).</p>
      <p>The tool uses an advanced layout outline extractor that automatically parses document heading levels, paragraph lines, and font weights to establish a logical slide framework. It also isolates vector charts and high-resolution tables, stripping background artifacts to embed them cleanly as independent editable assets.</p>
      <p>All PPTX outputs are built using standard Office Open XML elements, meaning all text remains fully editable and vectors do not lose resolution. The front-end showcases a fluid "starfield" card transition animation that visualizes the reconstruction in an engaging manner.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Academic/Business PDF', description: 'Upload a PDF document that contains structured sections and diagrams.' },
      { step: 2, title: 'Analyze Slide Outlines', description: 'Inspect the extracted slide structure, adjust titles, or delete unneeded card blocks.' },
      { step: 3, title: 'Reconstruct to PPTX', description: 'Start the compilation engine to receive a standard, editable presentation file.' },
    ],
    useCases: [
      { title: 'Research Paper Presentation', description: 'Convert academic journal PDFs, text structures, and vector diagrams into slide decks ready for talks.', icon: 'graduation-cap' },
      { title: 'Business Report Summary', description: 'Distill massive annual corporate reports into clean, bulleted presentation drafts instantly.', icon: 'presentation' },
      { title: 'Multi-Device Demos', description: 'Avoid copying screenshots manually. Get a clean, fully-editable layout framework in seconds.', icon: 'laptop' },
    ],
    faq: [
      { question: 'Are the slides editable in Microsoft Office?', answer: 'Yes. The files are generated natively in memory according to the official Office Open XML (OOXML) specification. Texts, tables, and placeholders are fully interactive in PowerPoint, Keynote, and WPS.' },
      { question: 'How are charts extracted?', answer: 'The engine scans vector paths and raster layers in the PDF, detects bounded areas representing graphs, and clips them out as standalone SVG nodes or high-DPI images.' },
      { question: 'Does this work on scanned documents?', answer: 'For scanned PDFs lacking actual text layers, we recommend running our OCR tool first before passing the file to the Slide Reconstructor.' },
    ],
  },
  'form-logic-designer': {
    title: 'Form Logic Designer',
    metaDescription: 'Design dynamic behaviors using a glassmorphic node canvas and inject interactive AcroJS logic into PDF forms.',
    keywords: ['PDF form logic', 'AcroJS injection', 'node flow', 'interactive PDF', 'field dependencies'],
    description: `
      <p>Interactive Form Logic Designer is a pioneering tool that fills a massive gap in PDF capabilities: creating active, responsive fields instead of flat, dead forms.</p>
      <p>Through our visual canvas featuring "glowing glassmorphic nodes" (built on React Flow), form fields are represented as connected modules. You can drag links to define relationships: e.g., when a checkbox is checked ➜ enable a text input ➜ auto-calculate values and update a total field.</p>
      <p>Once designed, the AcroJS engine compiles the logic into official Acrobat JavaScript and injects it into the '/AA' (Additional Actions) dictionaries of the AcroForm. The interactive behaviors are then executed natively inside any standard PDF reader.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Interactive PDF', description: 'Provide a PDF file that already has active form fields (AcroForm).' },
      { step: 2, title: 'Map Out Logic in Canvas', description: 'Connect fields as nodes. Link output events (change, blur) to target actions (show, hide, calculate, disable).' },
      { step: 3, title: 'Compile and Download', description: 'Inject the compiled JavaScript logic into the PDF dictionary and save the final smart document.' },
    ],
    useCases: [
      { title: 'Smart Sales Contracts', description: 'Show or hide supplementary input fields dynamically based on the client\'s selected terms.', icon: 'file-signature' },
      { title: 'Automated Expense Forms', description: 'Sum up multiple expense lines and compute taxes dynamically without manual calculation.', icon: 'calculator' },
      { title: 'Interactive Questionnaires', description: 'Skip irrelevant questions based on previous answers, providing a cleaner mobile filling experience.', icon: 'form-input' },
    ],
    faq: [
      { question: 'Do I need a PDF with pre-existing fields?', answer: 'Yes. This tool is designed to bind logical rules to existing fields. If your PDF does not have interactive fields, use our Form Creator tool to add inputs and check boxes first.' },
      { question: 'Will this logic run on any PDF reader?', answer: 'It runs on all PDF readers that comply with Adobe PDF standards and support Acrobat JavaScript (such as Adobe Acrobat Reader, Foxit Reader, and major web browsers). Minimalist mobile readers might support basic actions only.' },
      { question: 'Does this affect paper printing?', answer: 'Not at all. The injected scripts only run on-screen during form completion. When printing, the current state of fields is printed statically without any node visualization.' },
    ],
  },
  'eink-optimizer': {
    title: 'e-Ink Reader Optimizer',
    metaDescription: 'Optimize PDFs for e-Ink screens via background clearing, Otsu binarization, and morphological text dilation.',
    keywords: ['eink optimizer', 'binarization', 'text bolding', 'eye-friendly reading', 'otsu threshold'],
    description: `
      <p>e-Ink Reader Optimizer is a must-have tool custom-made for e-Reader enthusiasts using Kindle, Onyx Boox, Kobo, or other e-paper devices.</p>
      <p>Many scanned PDF e-books suffer from faint lettering, muddy gray backgrounds, noise, or scan shadows when viewed on e-Ink screens. This tool analyzes gray-value histograms and applies Otsu\'s Binarization Thresholding to separate text from background, converting gray backdrops to clean white.</p>
      <p>Additionally, it integrates morphological dilation to bold and thicken thin, faded characters, providing crisp, high-contrast typography. The inertia-damped contrast slider allows you to fine-tune the paper-like contrast in real-time.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload Scanned PDF', description: 'Upload e-books or scanned documents with faint text or gray backgrounds.' },
      { step: 2, title: 'Adjust Contrast Slider', description: 'Drag the damped slider to balance background removal and character bolding in real-time.' },
      { step: 3, title: 'Optimize and Download', description: 'Process the entire PDF to generate a high-contrast, eye-friendly document tailored for e-Ink.' },
    ],
    useCases: [
      { title: 'Ancient Manuscript Restoration', description: 'Thicken faded text in scans of historical books or handwritten manuscripts to make them readable.', icon: 'scroll' },
      { title: 'Exam Sheet Clean-up', description: 'Bleach background shadows from photocopied or photographed exams, returning clean black text on white paper.', icon: 'file-text' },
      { title: 'E-paper Device Tailoring', description: 'Convert colored PDFs to optimized grayscale, preventing messy, dithering artifacts on monochrome screens.', icon: 'tablet' },
    ],
    faq: [
      { question: 'How does the "character bolding" work?', answer: 'In image processing, this is called dilation. It uses a structuring matrix to expand character margins by a pixel, physically thickening faint strokes to make them legible.' },
      { question: 'Will this process bloat the file size?', answer: 'Quite the opposite. By binarizing complex color/grayscale images to simple black-and-white layouts, standard compression (like CCITT Group 4) can shrink the PDF file size significantly.' },
      { question: 'Does this support native text PDFs?', answer: 'Yes. Native vector PDFs are rasterized at high resolutions in the background, optimized, and compiled back, ensuring unified high-contrast reading.' },
    ],
  },
  'cert-cryptor': {
    title: 'Certificate Encrypt & Sign',
    metaDescription: 'Secure PDFs using asymmetric public-key certificate encryption, paired with a 3D gold wax-seal imprint and PKCS#7 signature.',
    keywords: ['certificate encryption', 'wax seal signature', 'digital signature', 'asymmetric crypt', 'PKCS7 signature'],
    description: `
      <p>3D Wax-Seal & Certificate Cryptor provides military-grade security and premium physical-grade aesthetics for sensitive corporate files, degrees, or agreements.</p>
      <p>Technically, it offers asymmetric public-key encryption: import a recipient\'s public key certificate (.cer/.crt) to lock the PDF stream; only the holder of the matching private key (.pfx) can decrypt it. It also generates standard PKCS#7 digital signatures to ensure document tamper-proof integrity.</p>
      <p>Visually, we feature a 3D physical gold or red wax-seal stamp. When you sign, a beautifully rendered stamp descends with a satisfying mechanical sound, leaving a 3D wax seal with realistic normal-mapped height variations and wax run-offs on the page, surrounded by glowing cryptographic tracks.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload PDF and Cert', description: 'Add your PDF and import your signing certificate (.pfx) or the recipient\'s public certificate (.cer).' },
      { step: 2, title: 'Place the 3D Stamp', description: 'Drag and locate the seal on the document preview, and pick a wax style (e.g., gold, crimson).' },
      { step: 3, title: 'Press and Sign', description: 'Click execute to watch the 3D wax-seal imprint ceremony, generating a physical-grade digital signature.' },
      { step: 4, title: 'Download Secured PDF', description: 'Save the output document, now cryptographically locked and stamped.' },
    ],
    useCases: [
      { title: 'Diplomas and Certificates', description: 'Affix highly-valued 3D wax seal badges to digital diplomas and awards, backed by genuine digital signatures.', icon: 'award' },
      { title: 'Confidential Agreements', description: 'Lock sensitive contracts using the client\'s public certificate so that only their secure physical keycard can unlock it.', icon: 'shield-alert' },
      { title: 'Official Press Releases', description: 'Digitally sign public announcements to prevent malicious text edits or spoofing.', icon: 'stamp' },
    ],
    faq: [
      { question: 'Is the wax seal just an image or a real signature?', answer: 'Both. The system renders an incredibly realistic 3D wax imprint with normal-mapped depth (visual layer) and encodes an authentic, tamper-proof PKCS#7 cryptographic signature inside the PDF (data layer).' },
      { question: 'What is "Certificate-based Encryption"?', answer: 'It is a passwordless encryption technique. You encrypt the file using the recipient\'s public key. The reader automatically searches for their local private certificate to decrypt the file seamlessly, ensuring robust security.' },
      { question: 'Can I customize the stamp design?', answer: 'Yes. We provide multiple designs like the PDFCraft watermark or a Royal crest, and you can adjust the wax melting radius and normal-map indentation depth in the panel.' },
    ],
  },
  'passport-id-composer': {
    title: 'Double-Sided ID Composer',
    metaDescription: 'Instantly compose both front and back sides of ID cards or passports onto a single A4 page with optional anti-counterfeit watermarks.',
    keywords: ['ID card composer', 'passport imposition', 'A4 double-sided copy', 'identity card printing', 'anti-counterfeit watermark'],
    description: `
      <p>The Passport & ID Double-sided Composer is an incredibly useful productivity utility for standard business and personal operations.</p>
      <p>When applying for bank accounts, onboarding, or signing agreements, we frequently need copies of both sides of ID cards. This tool accepts front/back images or PDF pages and precisely arranges them onto a single A4 page complying with national standard layout resolutions.</p>
      <p>Furthermore, you can customize overlapping translucent anti-counterfeit watermarks (e.g. "FOR ONBOARDING ONLY") to prevent unauthorized document reuse. It even features a 3D glow laser sweep copier scanner door visual effect to deliver premium feedback.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload ID files', description: 'Upload front and back photos/scans of your ID or passport (up to 2 files).' },
      { step: 2, title: 'Configure secure watermark', description: 'Input custom text overlay to restrict unauthorized document replication.' },
      { step: 3, title: 'Compose & download', description: 'Click execute to generate a single-page print-ready A4 PDF.' },
    ],
    useCases: [
      { title: 'HR onboarding submission', description: 'Quickly align employee ID copies and apply protective watermarks.', icon: 'user' },
      { title: 'Government & banking service', description: 'Prepare standardized ID prints that meet physical archive requirements.', icon: 'landmark' },
      { title: 'Travel backups', description: 'Arrange passport pages and visa details onto a unified A4 paper.', icon: 'plane' },
    ],
    faq: [
      { question: 'Will watermarks block identity text details?', answer: 'No. The watermark is rendered at a carefully tuned 15% opacity to block forgery without sacrificing the legibility of text or photo fields.' },
      { question: 'Is the composite card size accurate?', answer: 'Yes. It renders the ID card at the standard physical dimension of 85.6mm × 54mm scaled perfectly on the A4 page.' },
      { question: 'Does it support driver licenses?', answer: 'Yes, it works beautifully for any card-based identity scans.' },
    ],
  },
  'annotation-exporter': {
    title: 'Export Annotations',
    metaDescription: 'Extract PDF comments, notes, highlights, and underlines, and structure them into Markdown/JSON notebooks aligned with outline chapters.',
    keywords: ['export annotations', 'extract pdf highlights', 'pdf reader notes', 'markdown outline notebooks', 'study summary helper'],
    description: `
      <p>The Smart Annotation Exporter is a powerful workspace that unlocks full value from your PDF annotations.</p>
      <p>While conducting literature reviews or reading extensive ebooks, we make heavy use of highlights and sticky notes. This tool deserializes the low-level PDF <code>/Annots</code> dictionary and extracts all highlights, notes, underlines, and hand-drawn ink markers.</p>
      <p>It automatically aligns the comments with their respective outline headers, generating a structured Markdown or JSON notebook with page reference anchors. Watch your highlights float beautifully into the frosted-glass notebook panel.</p>
    `,
    howToUse: [
      { step: 1, title: 'Import annotated PDF', description: 'Upload any PDF essay or book containing your underlines, highlights, or comments.' },
      { step: 2, title: 'Configure filters & format', description: 'Select the annotation types you want to extract and choose Markdown or JSON.' },
      { step: 3, title: 'Extract notebook', description: 'Click execute to parse the comments stream and assemble your outline summary.' },
    ],
    useCases: [
      { title: 'Scientific literature synthesis', description: 'Extract reading notes across multiple papers into Markdown templates to compose lit reviews instantly.', icon: 'graduation-cap' },
      { title: 'Study journal compiling', description: 'Collect beautiful insights and personal remarks from textbooks into Obsidian databases.', icon: 'book' },
      { title: 'Document collaborative audit', description: 'Gather review corrections from different team members and establish actionable task lists.', icon: 'users' },
    ],
    faq: [
      { question: 'Can it extract tablet hand-drawn ink strokes?', answer: 'Yes. As long as the hand-drawn marks are stored as standard PDF Ink annotations, the tool can perfectly isolate and structure their page positions.' },
      { question: 'Why are some highlighted extracts empty?', answer: 'If the PDF is a non-searchable image scan lacking underlying text, highlights only store coordinates. Run OCR on the PDF first, then extract annotations.' },
      { question: 'Do the Markdown links jump back to the PDF?', answer: 'The exported file lists precise page numbers and original outline headings to make cross-referencing seamless.' },
    ],
  },
  'batch-watermark-remover': {
    title: 'Batch Remove Watermarks',
    metaDescription: 'Physically scrub watermark strings and XObject images from the PDF content stream without messing up layouts.',
    keywords: ['remove watermark', 'pdf watermark eraser', 'content stream purge', 'batch watermark cleaning', 'remove draft watermark'],
    description: `
      <p>The Batch Watermark Remover is a state-of-the-art PDF sanitizer that physically cleanses documents.</p>
      <p>Generic watermark removers usually just overlay white blocks or distort document spacing. This tool utilizes a robust <strong>Content Stream Purge</strong> technique.</p>
      <p>It parses the low-level rendering operators of each page, identifies specific watermark string commands (e.g. "Confidential", "DRAFT") or background image objects, and physically deletes or overwrites them. The watermarks disappear completely, preserving the original formatting and vector quality.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload watermarked file', description: 'Provide the PDF document showing commercial logos or security labels.' },
      { step: 2, title: 'Define target watermark', description: 'Input the exact string to delete, or toggle translucent XObject image cleanup.' },
      { step: 3, title: 'Run physical purge', description: 'Click execute to scrub the content operators with high fidelity.' },
    ],
    useCases: [
      { title: 'Archiving corporate assets', description: 'Remove expired "Confidential" or "Draft" watermarks for general public distribution.', icon: 'archive' },
      { title: 'Clearing background clutter', description: 'Scrub heavy background pictures that distract readers from scanning text.', icon: 'eye' },
      { title: 'Document reusing', description: 'Cleanse old page footer branding elements to apply new corporate templates easily.', icon: 'copy' },
    ],
    faq: [
      { question: 'Can the purged watermarks be recovered?', answer: 'No. Unlike visual masks, we rewrite the page binary stream to erase the operators, leaving no traces.' },
      { question: 'Does it support complex gradients?', answer: 'If the watermark is stored as a separate text node or image XObject, the tool can isolate and physically wipe it.' },
      { question: 'Will it modify normal page text?', answer: 'No. The scrubbing engine only target operators matching the specified watermark signature; regular text remains untouched.' },
    ],
  },
  'smart-data-redactor': {
    title: 'Sensitive Data Redaction',
    metaDescription: 'Automatically detect phone numbers, emails, and IDs, overlay opaque masks, and physically erase underlying text streams.',
    keywords: ['automatic redaction', 'redact privacy pdf', 'erase email pdf', 'mask phone numbers', 'gdpr compliance tool'],
    description: `
      <p>The Smart Privacy Data Redactor is an automated tool designed to ensure robust document privacy compliance.</p>
      <p>Simply overlaying black boxes in normal editors is unsafe because the underlying text can still be copied. This tool implements true <strong>NLP pattern matching and physical content stream sanitization</strong>.</p>
      <p>It scans the document for emails, phone numbers, SSNs, or custom keywords, places a premium matte black mask over the coordinates, and permanently overwrites the character stream with <code>[REDACTED]</code>, blocking copy-paste leaks.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload target PDF', description: 'Provide the contract or statement showing sensitive customer details.' },
      { step: 2, title: 'Select redaction rules', description: 'Check target patterns (email, phone, ID) or define custom sensitive words.' },
      { step: 3, title: 'Auto redact & download', description: 'Click execute to overlay secure masks and wipe the text streams.' },
    ],
    useCases: [
      { title: 'Commercial agreements sharing', description: 'Safely publish business documents by hiding personal salaries, phone numbers, or emails.', icon: 'file-signature' },
      { title: 'Resume database anonymization', description: 'Strip applicant names, contact info, or addresses to comply with strict privacy regulations.', icon: 'user-check' },
      { title: 'Financial statement distribution', description: 'Conceal specific ledger numbers or shareholder names before publishing reports.', icon: 'pie-chart' },
    ],
    faq: [
      { question: 'Are redacted details truly un-copyable?', answer: 'Yes. We rewrite the page content stream to erase the characters. Copy-pasting from the redacted box will only extract the string "[REDACTED]".' },
      { question: 'Does it work for scanned image PDFs?', answer: 'This tool targets vector text streams. For scanned image files, use our OCR tool first or crop manually.' },
      { question: 'Is the red HUD target scope saved in the file?', answer: 'No, that is a gorgeous frontend interactive loading effect. The output PDF displays standard clean black rectangles.' },
    ],
  },
  'bookmarks-auto-generator': {
    title: 'Auto Generate Bookmarks',
    metaDescription: 'Analyze document layout hierarchy and regex patterns (e.g. Chapter) to generate and inject /Outline bookmark catalogs.',
    keywords: ['generate bookmarks', 'pdf outline builder', 'inject bookmarks pdf', 'font size catalog', 'outline tree builder'],
    description: `
      <p>The Auto Bookmarks Generator brings absolute clarity to lengthy, unstructured PDF documents.</p>
      <p>Scanning through books or booklets with no outline navigation is painful. This tool parses typographic hierarchies (such as font sizes and weights) along with regex rules (like "Chapter 1", "Section 1.1") to automatically deduce headings.</p>
      <p>It then compiles and injects these headings directly into the PDF <code>/Outline</code> dictionary. Any standard viewer will then show a beautifully structured, multi-level navigation sidebar, backed by an interactive 3D outline tree preview.</p>
    `,
    howToUse: [
      { step: 1, title: 'Provide unstructured PDF', description: 'Upload large brochures, academic papers, or ebooks lacking a catalog sidebar.' },
      { step: 2, title: 'Tune heading rules', description: 'Configure strategies specifying minimum font size thresholds and match rules.' },
      { step: 3, title: 'Build and inject', description: 'Click execute to render the outline nodes and physically write the outline bookmarks.' },
    ],
    useCases: [
      { title: 'Technical manuals organizing', description: 'Auto compile multi-level chapters for standard guidelines, saving hours of manual indexing.', icon: 'tool' },
      { title: 'Thesis preparation', description: 'Inject clean nested bookmarks matching exact academic submission standards.', icon: 'graduation-cap' },
      { title: 'Ebook navigation optimization', description: 'Structure scanned text publications into readable chapters for tablets or mobile readers.', icon: 'tablet' },
    ],
    faq: [
      { question: 'Can it match custom chapter formats?', answer: 'Yes. You can add custom regex patterns in the sidebar panel (e.g., `^Part\\s+\\w+`) to target unique layouts.' },
      { question: 'Will this affect the visual page presentation?', answer: 'No. The tool only adds an internal structural bookmark catalog. The text and visual assets of the pages remain untouched.' },
      { question: 'How many bookmark levels are supported?', answer: 'The tool supports deeply nested bookmark structures, allowing chapter, section, and subsection layouts.' },
    ],
  },
  'batch-barcode-injector': {
    title: 'Batch Inject Barcodes',
    metaDescription: 'Generate custom QR/Code128 tags and precisely inject them into bulk PDF pages with aligning guidelines.',
    keywords: ['generate qr pdf', 'barcode injector', 'asset tag pdf', 'qr coordinate positioning', 'stamp barcodes'],
    description: `
      <p>The Batch Barcode precision injector bridges digital asset tracking with physical document indexing.</p>
      <p>In warehousing, contract review, or logistics, we often need to Stamp unique barcodes onto invoices or device cards. This tool makes it incredibly easy.</p>
      <p>Generate highly readable QR codes or Code128 barcodes, and use our gorgeous aligning workspace with green laser guides to position them. A clean scan audio beep triggers on placement, providing highly premium feedback.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload document', description: 'Drag and drop single or multi-page PDFs representing agreements or shipping lists.' },
      { step: 2, title: 'Position barcode coordinates', description: 'Set code type, value, and drag the placement box to specify coordinates.' },
      { step: 3, title: 'Stamps and download', description: 'Click execute to render the code layer onto the targeted page indices.' },
    ],
    useCases: [
      { title: 'Contract validation tracing', description: 'Apply a unique QR code showing anti-counterfeit details onto the header of contracts.', icon: 'file-check' },
      { title: 'Shipping lists coding', description: 'Place Code128 barcodes at target spots for quick warehouse scanning gun validation.', icon: 'truck' },
      { title: 'Asset registration carding', description: 'Add inventory QR codes displaying maintenance specs onto physical equipment sheets.', icon: 'archive' },
    ],
    faq: [
      { question: 'Are the generated barcodes highly scannable?', answer: 'Yes. We embed lossless high-resolution PNG representations that remain sharp even when printed at very small dimensions.' },
      { question: 'Can I inject unique values on each page?', answer: 'Currently, the batch run applies the same configured code onto all selected pages. Multi-valued excel import is planned in a future update.' },
      { question: 'What does the `pt` coordinate represent?', answer: '`pt` (Point) is the standard PDF physical unit (72 pt = 1 inch). A4 pages are represented as 595 × 842 pt.' },
    ],
  },
  'signature-ink-optimizer': {
    title: 'Extract Signature & Stamp',
    metaDescription: 'Extract handwritten signatures and red corporate stamps from photos, remove paper shadow noise, and export transparent PNGs.',
    keywords: ['extract signature', 'transparent signature background', 'clean stamp photo', 'sharpen hand signature', 'png seal maker'],
    description: `
      <p>The Signature & Stamp Chroma Ink Optimizer functions as a professional high-fidelity ink purifier.</p>
      <p>Signatures or corporate seals captured on phones often suffer from yellow paper tint, uneven shadows, and page wrinkles. Pasting them directly onto contract PDFs looks amateur.</p>
      <p>This tool separates the Alpha channel based on luminance and color space. It completely bleaches paper backgrounds while sharpening stamp red (Chroma Ink) and handwriting black. The result is a premium, transparent PNG stamp carrying genuine ink textures.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload seal photo', description: 'Provide a phone-captured photo of your signature or stamp seal.' },
      { step: 2, title: 'Adjust cleaning sliders', description: 'Move contrast and luminance sliders to isolate the background noise in real-time.' },
      { step: 3, title: 'Download clean signature', description: 'Export as transparent PNG ready to be stamped onto formal document agreements.' },
    ],
    useCases: [
      { title: 'Professional e-signature prep', description: 'Convert gray signature photos into beautiful, transparent layers to sign agreements.', icon: 'file-signature' },
      { title: 'Corporate seal sanitizing', description: 'Clean physical stamp scans by discarding paper fiber noise, preparing crisp transparent stamp seals.', icon: 'stamp' },
      { title: 'Drawn line art extraction', description: 'Isolate black strokes from drawing sketchbooks for easy Photoshop coloring workflows.', icon: 'edit' },
    ],
    faq: [
      { question: 'How does self-adaptive Alpha extraction differ from normal keying?', answer: 'Standard chroma-keying often makes signature stroke details look blocky and pixelated. Our algorithm isolates only white/yellow background noise and smooths the ink borders.' },
      { question: 'Which image formats are supported?', answer: 'We support JPG, JPEG, and PNG. For best results, capture your signature photo under bright, even lighting.' },
      { question: 'Will the handwriting detail be modified?', answer: 'No. The pixel filtering acts on original coordinates, sharpening contrast while maintaining genuine stroke textures.' },
    ],
  },
  'dead-link-debugger': {
    title: 'Fix Dead Links',
    metaDescription: 'Scan all URL actions and link annotations in PDF, detect reachability, and inject redirects.',
    keywords: ['dead link pdf', 'edit pdf hyperlinks', 'pdf link validation', 'redirect link pdf', 'update urls in pdf'],
    description: `
      <p>The Dead Link Debugger is a deep structural editor that guarantees link interaction quality in published files.</p>
      <p>Broken urls (404/500) inside manuals, whitepapers, or guides reduce branding authority. This tool lets you manage the hyperlinks database seamlessly.</p>
      <p>It parses the low-level <code>/Link</code> dictionaries on each page, Probes them, and displays link status in an interactive grid (red for dead links, orange for redirects). Simply type the updated redirect URL, and the tool writes the new target directly back into the PDF binary stream.</p>
    `,
    howToUse: [
      { step: 1, title: 'Provide target document', description: 'Upload the PDF manual or catalog containing links to debug.' },
      { step: 2, title: 'Scan and update', description: 'Let the debugger extract all URL entities. Input new redirect URLs for broken items.' },
      { step: 3, title: 'Save redirect updates', description: 'Click execute to rewrite /URI actions and download the corrected PDF.' },
    ],
    useCases: [
      { title: 'Flyer broken links hotfix', description: 'Instantly correct wrong urls on published flyers without reopening original design editors.', icon: 'refresh-cw' },
      { title: 'Bibliography links verification', description: 'Verify academic bibliography links in reports, updating references to maintain authority.', icon: 'book' },
      { title: 'Corporate rebranding updates', description: 'Batch update old URLs across corporate PDFs when company domain names are changed.', icon: 'globe' },
    ],
    faq: [
      { question: 'Why isn\'t link reachability fully checked online?', answer: 'Web browsers enforce strict CORS policies that block direct multi-origin link checking. Our tool lists the links clearly and lets you hot-fix them manually.' },
      { question: 'Will this modify the visual text representation on the page?', answer: 'No. It only alters the underlying `/URI` navigation action. The visual link text remains unchanged.' },
      { question: 'Does it support modifying internal page bookmarks?', answer: 'This tool handles external `/URI` hyperlinks. For internal layout navigation, use our interactive TOC tool.' },
    ],
  },
  'interactive-toc-generator': {
    title: 'Generate Interactive TOC',
    metaDescription: 'Generate aesthetic Table of Contents pages, insert them pre-content, and wire internal bidirectional GoTo anchors.',
    keywords: ['generate table of contents', 'interactive toc pdf', 'bidirectional anchor link', 'pdf index page builder', 'goto page action'],
    description: `
      <p>The Interactive TOC Builder introduces a revolutionary navigation experience to extensive PDFs.</p>
      <p>Flipping through hundreds of pages in unstructured documents to locate target chapters is frustrating. This tool introduces <strong>Bidirectional TOC compilation</strong>.</p>
      <p>It scans headers and generates an origami-inspired, premium Table of Contents page inserted right after the cover. In addition to creating clickable /GoTo links for each index row, it injects a tiny, elegant "TOC ↩" hovering anchor at the corner of each target chapter page. Readers can jump back and forth instantly, enjoying web-like navigation.</p>
    `,
    howToUse: [
      { step: 1, title: 'Provide PDF document', description: 'Upload a report, eBook, or proposal that needs an interactive catalog.' },
      { step: 2, title: 'Set TOC title & index', description: 'Customize the main title and choose the page index to insert the TOC page.' },
      { step: 3, title: 'Weave anchors & save', description: 'Click execute to compile the pages and write the dual-link navigation.' },
    ],
    useCases: [
      { title: 'Annual corporate report polishing', description: 'Inject a beautiful index page after the cover sheet to allow shareholders to jump between financial charts.', icon: 'file-bar' },
      { title: 'Thesis indexing', description: 'Fast compile standard indexes aligned with university formatting rules.', icon: 'bookmark' },
      { title: 'Operation manual navigation', description: 'Help handbook readers quickly jump from troubleshooting sheets back to the main TOC.', icon: 'check-circle' },
    ],
    faq: [
      { question: 'How do the bidirectional anchors work?', answer: 'We create standard Link annotations on the TOC page targeting the respective pages; then we embed a link back to the TOC page on all target chapter sheets.' },
      { question: 'Will inserting the TOC page break existing page numbers?', answer: 'No. The compiler accounts for the offset of the newly inserted TOC page, ensuring all target destinations align.' },
      { question: 'Is the TOC page valid when printed physically?', answer: 'Yes. The generated TOC lists clean physical page numbers to guide paper readers while enabling clickable links on screen.' },
    ],
  },
  'global-invoice-parser': {
    title: 'Invoice Translate & Convert',
    metaDescription: 'Extract currency totals from multi-national invoices, run calculations, and stamp interactive frosted-glass exchange ledgers.',
    keywords: ['translate invoice', 'invoice currency converter', 'exchange rate calculator pdf', 'stamp local currency', 'global invoice tool'],
    description: `
      <p>The Global Invoice Translator provides ultimate clarity for international finance teams and global buyers.</p>
      <p>Handling invoices in multiple currencies ($ , € , ¥) often involves tedious manual arithmetic. This tool enables <strong>in-place label translation and real-time exchange rates conversion</strong>.</p>
      <p>It scans the document for price totals, runs calculations based on currency benchmarks, and physically stamps an elegant semi-transparent frosted-glass "Exchange Rate ledger" at the page margin. It renders with a gorgeous rolling slot-machine numeric visual effect, bringing absolute control to global billing.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload invoice PDF', description: 'Import any invoice billed in foreign currencies (e.g. USD, EUR, JPY).' },
      { step: 2, title: 'Select local currency', description: 'Choose your local currency (e.g. CNY) and specify a custom or real-time exchange rate.' },
      { step: 3, title: 'Apply ledger stamp', description: 'Click execute to overlay the gorgeous exchange rate ledger ready for accounting.' },
    ],
    useCases: [
      { title: 'Foreign business trip reimbursement', description: 'Convert travel bills into local currency and stamp conversion details, easing accounting workflows.', icon: 'plane' },
      { title: 'Cross-border shopping audit', description: 'Translate invoice columns and isolate the true cost of e-commerce goods.', icon: 'credit-card' },
      { title: 'International business bookkeeping', description: 'Stamp consistent conversion ledgers on corporate invoices to streamline year-end audits.', icon: 'folder-open' },
    ],
     faq: [
      { question: 'How does it detect invoice amounts?', answer: 'It scans character streams for currency symbols and analyzes semantic headings like "Total" or "Due" to locate the invoice final sum.' },
      { question: 'Are exchange rates fetched in real-time?', answer: 'Yes. By default, it retrieves base rates from standard financial APIs. You can also specify custom rates for internal audits.' },
      { question: 'Will the stamped ledger cover important invoice details?', answer: 'The engine scans the page margin to find optimal positioning. The ledger is also semi-transparent, aligning elegantly with your layouts.' },
    ],
  },
  'pdf-deskew-aligner': {
    title: 'Auto Scan Deskew',
    metaDescription: 'Detect and auto-correct page rotations and alignments on mobile-photo or scanned PDF sheets instantly.',
    keywords: ['pdf deskew', 'scanned page alignment', 'auto rotate pdf page', 'straighten scanned paper', 'document alignment tool'],
    description: `
      <p>The PDF Scan Aligner is a mandatory utility for sanitizing tilted digital assets and mobile snapshots.</p>
      <p>Documents scanned via physical flatbeds or captured quickly with smartphones often carry subtle rotations. Tilted pages look highly unprofessional, hinder text readability, and cause margins to clip during printing.</p>
      <p>This tool utilizes robust <strong>Radon Transform and Hough Line detection algorithms</strong> to scan gradients and text lines under 20ms. It precisely measures skew down to 0.01 degrees and performs pixel-level Canvas rotation, snapping your receipts, contracts, and booklets back into crisp geometric alignment.</p>
    `,
    howToUse: [
      { step: 1, title: 'Provide skew PDF', description: 'Upload any PDF sheet carrying rotated or poorly aligned scanned documents.' },
      { step: 2, title: 'Analyze and tweak', description: 'The engine auto-detects skew angle and draws aligning grids. Tweak angle manually if needed.' },
      { step: 3, title: 'Straighten & download', description: 'Click execute to swing pages through a smooth gyroscope transition and download aligned PDF.' },
    ],
    useCases: [
      { title: 'Receipt & Contract Archiving', description: 'Straighten quick hand-held mobile contract scans before saving them as formal digital PDF archives.', icon: 'file-text' },
      { title: 'Academic Book Digitizing', description: 'Sanitize microfilm book scans where text lines drift out of horizontal margins.', icon: 'book' },
      { title: 'Student Homework Grading', description: 'Correct homework snapshots taken by student phones, relaxing the eyes of grading teachers.', icon: 'edit-3' },
    ],
    faq: [
      { question: 'How is document skew detected?', answer: 'We run high-speed Hough Line projections on text lines. Since formal prints have clear horizontal spacing patterns, finding the angle with the maximum variance isolates the rotation.' },
      { question: 'Will this process crop away page edges?', answer: 'No. The engine calculates the rotated boundary and extends the Canvas using auto-padding, ensuring all margin text remains intact without cropping.' },
      { question: 'Does it support documents filled with diagrams?', answer: 'Yes, as long as there is an underlying structure of lines or general paragraphs, our algorithms can accurately lock onto the principal reading angle.' },
    ],
  },
  'pdf-two-column-reflower': {
    title: 'Two-Column Paper Reflow',
    metaDescription: 'Analyze IEEE/ACM double-column paper PDF structures and reflow them into responsive single-column layouts for smooth mobile and e-Reader viewing.',
    keywords: ['two-column pdf to single', 'reflow academic paper', 'read papers on smartphone', 'pdf reader reflow', 'mobile friendly papers'],
    description: `
      <p>The Academic Two-Column Reflower solves the most significant pain point of digital research: reading papers on standard mobile screens.</p>
      <p>Double-column layouts (used by IEEE, ACM, Nature, and major reports) are designed for A4 paper. Navigating them on phone screens or Kindle devices requires constant zooming, dragging right, scrolling down, and panning back up. It breaks reading comprehension completely.</p>
      <p>Our processor implements a <strong>smart paragraph reflow and vertical partition barrier scan</strong>. It analyzes character coordinates to map double-column gutters, divides the layout, and weaves segments vertically (left column first, then right). Graphs, formulas, and headings are seamlessly rearranged into a single-column, flowable vertical scroll PDF.</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload double-column PDF', description: 'Provide the IEEE/ACM journal report or multi-column PDF sheet.' },
      { step: 2, title: 'Inspect partition gutter', description: 'Verify the red vertical partition slice guides. Adjust margins to prevent overlapping elements.' },
      { step: 3, title: 'Reflow and save', description: 'Click execute to compile the pages into flowable layouts and download instantly.' },
    ],
    useCases: [
      { title: 'e-Reader Book Import', description: 'Convert dense double-column essays into comfortable single-column documents matching Kindle and Onyx screens.', icon: 'tablet' },
      { title: 'Subway Phone Reading', description: 'Read research literature comfortably with single-hand vertical swipe gestures during transit.', icon: 'smartphone' },
      { title: 'Archival Journal Formatting', description: 'Modernize old narrow-column newspapers into readable, single-column web formats.', icon: 'book-open' },
    ],
    faq: [
      { question: 'How are broad charts and equations handled?', answer: 'Our engine applies "span element detection." When an equation or diagram exceeds normal column widths, it is isolated as a full-width item, maintaining original proportions without clipping.' },
      { question: 'Will this modify the vector text resolution?', answer: 'Not at all. We rewrite PDF text object transform matrices at the object tree level instead of rasterizing, meaning text remains 100% vector and fully selectable.' },
      { question: 'Does this work on scanned image documents?', answer: 'For flat image-based PDFs, we highly recommend running our OCR tool first before executing the Reflow process.' },
    ],
  },
  'pdf-page-resizer-uniform': {
    title: 'Uniform PDF Page Size',
    metaDescription: 'Batch resize and normalize mixed-format A4, A3, and Letter PDF sheets into a uniform target size with proportional centering and margin padding.',
    keywords: ['uniform page size', 'resize pdf pages', 'merge diverse pdf', 'mediabox normalize', 'batch page scale'],
    description: `
      <p>The Multi-Format PDF Resizer is the ultimate standardizer for cluttered, mismatched corporate documents.</p>
      <p>Combining invoices, contracts, and supplementary charts often results in a PDF containing massive A3 ledger pages, standard A4 agreements, and Letter-sized envelopes. Flipping through them is highly distracting, and sending them to physical office printers often causes jam errors due to size mismatch.</p>
      <p>This tool rewrites the low-level <code>/MediaBox</code> and <code>/CropBox</code> grids on each page. It maps existing widths and heights, scales original pages proportionally to match target presets (e.g. standard A4), and introduces elegant, consistent surrounding margins, making the entire file look incredibly polished.</p>
    `,
    howToUse: [
      { step: 1, title: 'Provide mixed-size PDF', description: 'Upload a merged PDF document containing mismatched, messy page sizes.' },
      { step: 2, title: 'Choose target preset', description: 'Select the target uniform size (e.g. A4, Letter, A3) and toggle scale modes.' },
      { step: 3, title: 'Align and download', description: 'Click execute to trigger 3D sheet alignment, downloading a beautifully standardized PDF.' },
    ],
    useCases: [
      { title: 'Corporate RFP Proposals', description: 'Standardize scanned qualification certificates and A4 bidding sheets before physical printing.', icon: 'file-text' },
      { title: 'Financial Chart Integration', description: 'Scale broad A3 financial cash flows into neat A4 pages, preserving printing standards.', icon: 'layout' },
      { title: 'Book Margin Standardization', description: 'Force slightly varied scanned book pages into an absolutely uniform dimension for comfortable reading.', icon: 'book' },
    ],
    faq: [
      { question: 'Will this warp my content?', answer: 'Never. We support both "Contain" (proportional scaling with white bars) and "Cover" (centered crop). The default Contain mode preserves aspect ratios, preventing distortion.' },
      { question: 'Will existing forms and annotations remain clickable?', answer: 'Yes. The algorithm maps the scaling factors to the Annotation coordinate arrays, scaling link boxes, sign boundaries, and inputs to align perfectly after resizing.' },
      { question: 'Is there a limit on how many pages I can resize?', answer: 'No. Since all operations run locally in your client sandbox using native JavaScript, you can process extensive PDFs containing hundreds of pages in seconds.' },
    ],
  },
  'handwriting-ink-contrast-booster': {
    title: 'Enhance Handwriting Ink',
    metaDescription: 'Extract blue or black handwriting signatures from photos, bleach yellow paper grain, and dramatically boost ink contrast for readability.',
    keywords: ['enhance handwritten contract', 'ink contrast boost', 'bleach scanned paper', 'sharpen faded signature', 'signature extraction'],
    description: `
      <p>The Handwriting Ink Contrast Booster is a savior for digitizing signed agreements and historical manuscript archives.</p>
      <p>Scans of hand-signed documents often look dull due to grey scanner glass reflection, yellow paper tint, or faded ink. Re-printing or photocopying these files results in blurry, illegible signatures. Traditional contrast tools darken the entire background, worsening the layout.</p>
      <p>This tool utilizes **Contrast Limited Adaptive Histogram Equalization (CLAHE) and hue-based color separation**. In a secure local Canvas process, it isolates handwriting strokes (both black and blue) from background parchment, bleaches shadow wrinkles completely, and infuses faded inks with deep, saturated contrast, leaving your documents looking incredibly crisp and clean.</p>
    `,
    howToUse: [
      { step: 1, title: 'Import hand-signed document', description: 'Provide a PDF containing faded signatures, handwritten diaries, or sketches.' },
      { step: 2, title: 'Configure ink filter', description: 'Select the color profile to isolate (e.g. blue ink, black ink, or both) and adjust sharpening.' },
      { step: 3, title: 'Sharpen and download', description: 'Click execute to trace colors with a radar scanner effect and download purified PDF.' },
    ],
    useCases: [
      { title: 'Executed Contracts Repair', description: 'Repair poorly scanned agreements, sharpening signatures and bleaching paper background to A4-pure white.', icon: 'file-check' },
      { title: 'Handwritten Manuscripts Archive', description: 'Digitize written journals or diaries, extracting clear black strokes while erasing age-related stains.', icon: 'book' },
      { title: 'Historical Ledger Restoration', description: 'Restore faint ink details on aged archival ledgers, rescuing valuable handwritten coordinates.', icon: 'archive' },
    ],
    faq: [
      { question: 'How does this differ from normal grayscale conversion?', answer: 'Grayscale converts paper shadows into gray values. Our adaptive algorithm separates background luminance and isolates signature "ink spectrums," purifying the backdrop to absolute white while leaving stroke edges sharp.' },
      { question: 'Will I lose handwriting stroke texture?', answer: 'No. The CLAHE algorithm works on a sub-pixel level, preserving natural pen-stroke pressure, ink fading, and dynamic line weights.' },
      { question: 'Can I keep red corporate stamp marks?', answer: 'Yes. By enabling "Chroma Ink Preservation," the booster whitens paper background and darkens writing, while maintaining the bright colors of red seals and blue ink signatures.' },
    ],
  },
  'pdf-spine-bookbinder': {
    title: 'Calculate Book Spine Width',
    metaDescription: 'Calculate book spine width based on page count and paper GSM, and generate a printable cover template with spine fold lines.',
    keywords: ['book spine calculator', 'binding spine thickness', 'generate book cover pdf', 'spine fold marks', 'perfect binding prepress'],
    description: `
      <p>The PDF Spine Bookbinder is a pre-press savior for designers, self-publishing authors, and commercial bidding teams.</p>
      <p>When compiling thick book catalogs, bidding proposals, or annual directories, perfect binding (glue binding) requires a cover with precise spine coordinates. If the spine width is off by even 1mm, the bound cover will warp, shift, or crease. Calculating page counts against paper weight is complex and error-prone.</p>
      <p>This tool utilizes a <strong>physically modeled GSM paper-to-thickness library</strong>. Simply input your PDF page count and select paper stock (e.g. 80 GSM offset, 100 GSM glossy). The engine calculates spine width down to micrometers and compiles a print-ready, extra-wide cover PDF complete with standard front/back flaps and precise fold mark creases.</p>
    `,
    howToUse: [
      { step: 1, title: 'Set pages & stock type', description: 'Input document page count and select the target paper stock specifications.' },
      { step: 2, title: 'Input spine text', description: 'Enter book titles, author details, and customize spine/cover backgrounds.' },
      { step: 3, title: '3D Preview & Export', description: 'Spin and inspect your book cover in an interactive 3D binder. Export high-resolution vector PDF.' },
    ],
    useCases: [
      { title: 'Thick Bidding Proposals', description: 'Design professional cover sheets with precise spine crease alignments for thick tender bids.', icon: 'layers' },
      { title: 'Thesis Hardcover Binding', description: 'Map out perfect spine layout widths for university master/doctorate degree theses.', icon: 'award' },
      { title: 'Self-Publishing Novel Covers', description: 'Calculate book spine width easily before submitting files to Print-on-Demand publishing services.', icon: 'book-open' },
    ],
    faq: [
      { question: 'How accurate is the GSM paper-thickness calculation?', answer: 'Highly accurate. Our physics library matches industry averages (e.g. 70 GSM = 0.09mm, 80 GSM = 0.10mm, 150 GSM glossy = 0.125mm). We also include a "Double-sided printing" toggle to halve calculations automatically.' },
      { question: 'Are the exported covers ready for direct printing?', answer: 'Yes. The files are vector-perfect PDFs carrying standard registration marks, color bars, and spine guides, fully compliant with offset and digital commercial presses.' },
      { question: 'Can I upload a background image spanning the spine?', answer: 'Yes. You can upload custom layouts, and our compositor will wrap and align the graphics across the spine folds automatically.' },
    ],
  },
  'pdf-signature-anchor-helper': {
    title: 'Signature Position Guide',
    metaDescription: 'Automatically locate signature fields in contracts, and inject interactive hovering guides and anchors for quick signing.',
    keywords: ['locate signature pdf', 'inject sign anchor', 'contract signing helper', 'click to sign guide', 'prevent missing signatures'],
    description: `
      <p>The PDF Signature Guide Injector guarantees clean, error-free signing workflows for multi-page agreements.</p>
      <p>When sending multi-page NDA agreements, financial statements, or commercial leases, clients often miss critical signing boxes, requiring endless back-and-forth email loops and delayed business transactions.</p>
      <p>Our tool uses <strong>natural regex semantic mapping</strong>. It scans the PDF character map to locate terms like <code>Signature:</code>, <code>签字：</code>, <code>Witness:</code>, or <code>签署日期：</code>. It then leverages <code>pdf-lib</code> to inject standard PDF interactive Link annotations. When opened in any standard reader, clients see blinking, neon-bordered arrows that instantly guide them to the correct boxes, making signing foolproof.</p>
    `,
    howToUse: [
      { step: 1, title: 'Import business contract', description: 'Upload the PDF contract or NDA that needs signature coordinates.' },
      { step: 2, title: 'Auto-scan signature slots', description: 'Inspect the automatically located signing boxes, and manually add custom sign points if needed.' },
      { step: 3, title: 'Inject anchors & save', description: 'Click execute to write the interactive pointer layers into the PDF structure.' },
    ],
    useCases: [
      { title: 'Corporate NDA Agreements', description: 'Inject clear, flashing guides next to sign blocks to prevent onboarding employees from missing clauses.', icon: 'file-text' },
      { title: 'Commercial Lease Contracts', description: 'Guide multiple co-signers through multi-page real estate documents with custom-colored tabs.', icon: 'users' },
      { title: 'Procurement PO Signatures', description: 'Overlay interactive pointers on invoices and purchase orders to accelerate accounting approval loops.', icon: 'briefcase' },
    ],
    faq: [
      { question: 'Will these guides appear when I print the contract?', answer: 'No. The anchors are injected with the standard PDF `Printable` flag set to false. They display beautifully on computer/tablet screens but remain completely invisible when printed.' },
      { question: 'Can clients jump between signature fields easily?', answer: 'Yes. We weave bidirectional internal anchors. Clients can click the "Sign Guide" bookmark to automatically jump to the next empty signature slot instantly.' },
      { question: 'Does this work on scanned image documents?', answer: 'Yes. Besides looking up text streams, our spatial layout parser estimates signature lines based on horizontal rules and bounding boxes on scanned sheets.' },
    ],
  },
  'pdf-lossless-slicer': {
    title: 'Lossless Drawing Slicing',
    metaDescription: 'Extract a partial region of large PDF CAD drawings, maps, or charts at a low-level, keeping vector resolution intact while dropping file size.',
    keywords: ['pdf vector crop', 'lossless pdf slice', 'cad drawing crop', 'cropbox matrix edit', 'extract map region'],
    description: `
      <p>The PDF Lossless Drawing Slicer is a high-precision, surgical tool built for architects, engineers, and map detailers.</p>
      <p>When extracting a specific pump room or chip core from a massive CAD engineering blueprint or geographic map PDF, traditional screenshots result in pixelated, blurry text. Normal cropping tools simply place a mask over the sheet, meaning the massive 100MB file remains huge, and hidden content can still be extracted.</p>
      <p>This tool edits the page <code>/MediaBox</code>, <code>/CropBox</code>, and <code>/BleedBox</code> matrices at the object tree level. It physically isolates vector nodes outside the selected region, keeping the target area 100% vector-perfect (allowing infinite zoom magnification) while purging redundant off-screen paths and images to shrink the file size by 95%!</p>
    `,
    howToUse: [
      { step: 1, title: 'Import large blueprint', description: 'Upload the vector-rich CAD, GIS map, or high-resolution catalog PDF.' },
      { step: 2, title: 'Draw cutting box', description: 'Drag and scale the green laser-line crop box to target the local region you want to slice.' },
      { step: 3, title: 'Trigger laser crop', description: 'Click execute to trigger our low-level object slicer and download the tiny, lossless PDF.' },
    ],
    useCases: [
      { title: 'CAD Blueprint Isolation', description: 'Slice out a "cooling system" detail from a massive 100MB floor plan blueprint to share with sub-contractors.', icon: 'crop' },
      { title: 'GIS Map Snipping', description: 'Extract a lossless, vector-clear block of a city street map for a presentation slide without resolution loss.', icon: 'map' },
      { title: 'Manual Illustration Tracing', description: 'Lossless isolate scientific book figures to embed into high-quality academic papers.', icon: 'image' },
    ],
    faq: [
      { question: 'How is this different from standard cropping?', answer: 'Standard cropping merely adjusts visual bounds; the hidden vectors remain in the file. Our slicer trims overlapping vector paths and purges out-of-bounds XObject images, ensuring complete data isolation and maximum file compression.' },
      { question: 'Will text layers remain searchable?', answer: 'Yes. Any text characters that fall inside the sliced boundary remain fully vector-clear, searchable, and selectable.' },
      { question: 'Can I export sliced regions to SVG?', answer: 'The output is a standardized vector PDF. You can pass the resulting file to our PDF-to-SVG tool to convert it to a web-scalable vector graphics format.' },
    ],
  },
  'pdf-scratchpad-canvas': {
    title: 'Grid Scratchpad Canvas',
    metaDescription: 'Stitch high-quality grid, ruled, or Cornell note-taking margins to PDF pages for formula derivations and exam note preparation.',
    keywords: ['pdf margin expand', 'add scratchpad page', 'cornell notes grid', 'stitch draft space', 'pdf notes template'],
    description: `
      <p>The PDF Scratchpad Margin Extender is an essential study companion tailored for students, researchers, and professional exam candidates.</p>
      <p>When solving practice test papers, reviewing slides, or reading academic textbooks on digital tablets, page margins are incredibly tight. Opening a separate notes app forces you to toggle screens constantly, breaking focus. Adding flat blank sheets prevents you from viewing the problem and your calculation side-by-side.</p>
      <p>This tool rewrites page width or height dimensions in the low-level PDF structure, expanding <code>/MediaBox</code> margins by 200~250 pt on the right or bottom. It then overlays clean grid lines, college-ruled notebook lines, or Cornell layouts in the new margins, giving you dedicated, adjacent draft boards next to every single slide or question!</p>
    `,
    howToUse: [
      { step: 1, title: 'Upload lecture slides', description: 'Provide the PDF textbook, slides, or study papers.' },
      { step: 2, title: 'Choose margin & grid style', description: 'Pick margin expansion direction (e.g. right side for tablets) and select the grid template.' },
      { step: 3, title: 'Stitch canvas & download', description: 'Click execute to generate expanded pages complete with beautiful draft grids.' },
    ],
    useCases: [
      { title: 'STEM Exam Preparation', description: 'Stitch grid margins next to math and physics exam questions, solving derivations right next to the question.', icon: 'edit-3' },
      { title: 'Language Reading Analysis', description: 'Add ruled notebook margins next to foreign language essays for vocabulary analysis and paragraph translation.', icon: 'book' },
      { title: 'Architectural Blueprint Audit', description: 'Add empty margin spaces on the side of blueprints for engineering calculations and client review comments.', icon: 'columns' },
    ],
    faq: [
      { question: 'Will this squish my original PDF text?', answer: 'Not at all. The algorithm expands the paper dimension outwards. The original content retains its layout, fonts, and resolution; we simply stretch the white space on the borders and draw grids on them.' },
      { question: 'Can standard hand-writing pens write in the scratchpad?', answer: 'Yes. The new PDF pages are compiled natively. Popular tablet note-taking applications like Goodnotes, Notability, Xodo, and Acrobat can write, highlight, and doodle directly in the new grid space.' },
      { question: 'Are grid lines dark and distracting?', answer: 'We curated three subtle, eye-friendly colors (soft blue-gray, warm brown, and glowing green). The lines are thin and gentle, serving as guides without distracting you from the original page content.' },
    ],
  },
  'photo-tiling-prepress': {
    title: 'ID Photo DIY Print Tiler',
    metaDescription: 'Crop and tile passport/ID photos onto standard 5" or 6" photo papers, and stamp precise prepress physical crop marks for easy cutting.',
    keywords: ['id photo tiling', 'print passport photo', 'tile photo standard paper', 'id photo layout prepress', 'stamp crop marks'],
    description: `
      <p>The Prepress Photo Tiling tool is a cost-effective, high-precision layout compiler built for personal registration cards and photography studios.</p>
      <p>Printing passport photos, ID photos, or driver licenses at home often results in incorrect physical dimensions (often printed too large or too small), wasted photo paper, and uneven alignments. Going to professional print shops to get layouts made is time-consuming.</p>
      <p>Our tool integrates a <strong>precision prepress matrix engine</strong>. It accepts portrait photographs or ID card scans, crops them to standard dimensions (e.g. 1" or 2" passport specs), calculates optimal tile counts for standard photo papers (e.g. 5" or 6" sheets), and injects crisp, micro-pixel crop lines for easy physical cutting, generating a perfect printable PDF.</p>
    `,
    howToUse: [
      { step: 1, title: 'Import passport photo', description: 'Upload the camera portrait snapshot or double-sided ID card images.' },
      { step: 2, title: 'Configure paper & layout', description: 'Select the target print paper size (e.g. 6") and choose the grid layouts (e.g. 8 copies of 1" photos).' },
      { step: 3, title: 'Tile and export', description: 'Inspect photo tiles on our grid, and export the high-DPI printable PDF.' },
    ],
    useCases: [
      { title: 'Self-Service Passport Photos', description: 'Arrange your mobile-shot passport portraits onto a single 6" photo paper grid, and print 8 copies for a fraction of standard studio costs.', icon: 'user' },
      { title: 'ID Card Double-sided Copy', description: 'Format front and back scans of national ID cards neatly on standard Letter/A4 sheets for official submissions.', icon: 'file-text' },
      { title: 'Batch Photo Thumbnail Sheets', description: 'Tile multiple family memories or design snapshots onto a grid paper to print thumbnail contact sheets efficiently.', icon: 'grid' },
    ],
    faq: [
      { question: 'Will the printed dimensions match official 1" or 2" specs?', answer: 'Yes. The grid engine measures using standard PDF points (72 pt = 1 inch), rendering 1" photos exactly at 25x35mm, and 2" photos at 35x49mm. Ensure you print at "Actual Size / 100% Scale" in your printer settings.' },
      { question: 'Can I combine 1" and 2" photos on a single sheet?', answer: 'Yes. We provide curated hybrid layout presets (e.g. "4 copies of 1" + 4 copies of 2""), allowing you to maximize photo paper space.' },
      { question: 'Does the template include border bleeds?', answer: 'Yes. The prepress layouts reserve a standard 4mm print-safe margin on the paper borders, preventing physical printer rollers from cropping the photos.' },
    ],
  },
};




