# PDFCraft

<div align="center">
  <img src="public/images/logo.png" alt="PDFCraft Logo" width="120" height="120" />
  <h1>Professional PDF Tools</h1>
  <p>
    <strong>Free, Private & Browser-Based</strong>
  </p>
  <p>
    Merge, split, compress, convert, and edit PDF files online without uploading to servers.
  </p>
</div>

<div align="center">

[![LibrePDF Desktop](https://img.shields.io/badge/Desktop_App-LibrePDF-2563eb?style=flat-square&logo=github)](https://github.com/PDFCraftTool/LibrePDF)
[![Website](https://img.shields.io/website?url=https%3A%2F%2Fpdfcraft.devtoolcafe.com%2Fen%2F)](https://pdfcraft.devtoolcafe.com/en/)
![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?style=flat-square&logo=tailwindcss)

</div>

> [!TIP]
> ### 🚀 Discover LibrePDF — Private Desktop PDF Suite
> Looking for a cross-platform desktop application with zero network telemetry? Check out our sister project:  
> **[PDFCraftTool/LibrePDF](https://github.com/PDFCraftTool/LibrePDF)**: Open-source, zero-telemetry desktop PDF suite with 53+ tools, direct in-place text editing, offline Ollama AI Copilot, and node-based DAG workflows. A private, subscription-free Acrobat & Stirling-PDF desktop alternative.
> 
> * 🔗 **Project Repository**: [https://github.com/PDFCraftTool/LibrePDF](https://github.com/PDFCraftTool/LibrePDF)
> * ⚖️ **Open-Source License**: [Apache-2.0 License](https://github.com/PDFCraftTool/LibrePDF/blob/main/LICENSE)

## 📖 About

**PDFCraft** is a comprehensive suite of PDF tools designed for privacy and performance. Unlike many online converters, PDFCraft processes your files entirely within your browser using WebAssembly technology. Your documents **never** leave your device, ensuring maximum security for your sensitive data.

This project is built with modern web technologies to provide a slick, app-like experience directly in the browser.

## ✨ Key Features

- **🔒 100% Private**: All processing happens client-side. No file uploads to external servers.
- **🚀 Fast & Responsive**: Powered by Next.js and WebAssembly for near-native performance.
- **🛠️ Comprehensive Toolset**: Over 80+ tools to handle any PDF task.
- **🎨 Modern UI**: Clean, accessible, and responsive design built with Tailwind CSS.
- **🌐 Multi-language**: Supports English, Spanish, French, German, Portuguese, Japanese, Korean, and Chinese.

### Editing bookmark destinations

Editing titles or reorganizing existing local page bookmarks preserves their original position, zoom and fit mode, including named destinations. Changing a bookmark's target page explicitly resets its view to the top of the new page. New bookmarks retain the existing page-top default.
### Editing metadata

Metadata edits preserve fields that were not selected for an update. Disabling automatic modification-date updates retains the existing date; explicitly supplied dates and producer information still take precedence.
### PDF ZIP archives

The PDFs to ZIP tool keeps every selected document, including files with the same name from different folders. Duplicate names receive a numeric suffix before the extension (for example, `report.pdf` and `report (2).pdf`). Existing input names are reserved, so an original `report (2).pdf` is not overwritten by an automatically renamed file. PDF contents are not modified.

## 🔄 Workflow Editor (Beta)

> ⚠️ **Early Development Notice**: This feature is currently in early development stage. You may encounter bugs or incomplete functionality. We appreciate your feedback and patience!

PDFCraft includes a powerful **visual workflow editor** that allows you to chain multiple PDF operations together, creating automated processing pipelines.

<div align="center">
  <img src="public/images/workflow-editor-screenshot.png" alt="Workflow Editor Screenshot" width="800" />
  <p><em>Visual workflow editor with drag-and-drop interface</em></p>
</div>

### Key Capabilities

- **🔗 Visual Node-Based Editor**: Drag and drop tools onto a canvas and connect them to create processing pipelines
- **📋 23+ Pre-built Templates**: Common workflows like "Merge & Compress", "Secure PDF", "Document Preparation", etc.
- **💾 Save & Reuse**: Save your custom workflows for future use
- **🎯 Real-time Validation**: Automatic format compatibility checking between connected tools
- **📁 Batch Processing**: Process multiple files through the same workflow
- **↔️ Collapsible Panels**: Maximize canvas workspace with collapsible tool and library sidebars

### Available Templates

| Category | Templates |
|----------|-----------|
| **Common** | Merge & Compress, Document Preparation, Split & Watermark, Batch Watermark, Report Assembly, Invoice Processing |
| **Conversion** | Images to PDF, PDF to Images, Office to PDF, eBook to PDF, Photo Album Creator |
| **Optimization** | Optimize for Web, Full Optimization, Grayscale & Compress, Archive Preparation |
| **Security** | Create Secure PDF, Confidential Document, Unlock & Edit |

### How to Access

Navigate to `/workflow` or click on "Workflow Editor" in the navigation menu.

## 🧰 Complete Tool List (90+ Tools)

### 📁 Organize & Manage (27 tools)
| Tool | Description |
|------|-------------|
| **PDF Multi Tool** | All-in-one PDF editor for merge, split, organize, delete, rotate, and extract |
| **Merge PDF** | Combine multiple PDFs into one document |
| **Split PDF** | Separate specific pages or divide by page ranges |
| **Extract Pages** | Extract specific pages to a new file |
| **Organize PDF** | Reorder, duplicate, and delete pages with drag-and-drop |
| **Delete Pages** | Remove unwanted pages from PDF files |
| **Rotate PDF** | Rotate pages by 90°, 180°, or 270° |
| **Rotate by Custom Degrees** | Rotate pages by any angle for straightening scans |
| **Reverse Pages** | Reverse the page order of a PDF |
| **Add Blank Page** | Insert blank pages at any position |
| **Divide Pages** | Split pages horizontally or vertically |
| **N-up PDF** | Combine multiple pages on a single sheet (2-up, 4-up, etc.) |
| **Combine to Single Page** | Stitch all pages into one continuous page |
| **Alternate Merge** | Interleave pages from multiple PDFs |
| **OCR PDF** | Make scanned PDFs searchable with text recognition |
| **Add Attachments** | Embed files into PDF documents |
| **Extract Attachments** | Download embedded files from PDFs |
| **Edit Attachments** | View, rename, or remove embedded files |
| **View Metadata** | View PDF properties, author, dates, and keywords |
| **Edit Metadata** | Modify PDF title, author, subject, and keywords |
| **PDF to ZIP** | Package multiple PDFs into a ZIP archive |
| **Compare PDFs** | Compare two PDFs side-by-side with difference highlighting |
| **Posterize PDF** | Split large pages into multiple printable sheets |
| **Grid Combine** | Combine multiple PDFs into a grid layout with custom spacing |
| **PDF Booklet** | Arrange pages for booklet printing (saddle stitch) |
| **PDF Reader** | Read and view PDF documents in a clean interface |

### ✏️ Edit & Annotate (19 tools)
| Tool | Description |
|------|-------------|
| **Edit PDF** | Add text, images, annotations, highlights, and shapes |
| **Sign PDF** | Draw, type, upload, or scan a photo of your handwritten signature |
| **Crop PDF** | Trim margins and remove unwanted areas |
| **Edit Bookmarks** | Add, edit, and manage PDF navigation bookmarks |
| **Table of Contents** | Generate clickable table of contents from bookmarks |
| **Page Numbers** | Add customizable page numbering |
| **Add Watermark** | Apply text or image watermarks |
| **Header & Footer** | Add headers and footers with page numbers and dates |
| **Invert Colors** | Create dark mode versions of documents |
| **Background Color** | Change or add page background colors |
| **Change Text Color** | Modify the color of all text content |
| **Add Stamps** | Apply preset or custom stamps (Approved, Rejected, etc.) |
| **Remove Annotations** | Strip comments, highlights, and markup |
| **Form Filler** | Complete interactive PDF forms |
| **Form Creator** | Add text fields, checkboxes, and dropdowns to create forms |
| **Remove Blank Pages** | Auto-detect and remove empty pages |
| **Deskew PDF** | Automatically straighten skewed scanned pages |
| **OCG Manager** | Manage Optional Content Groups (layers) in PDFs |

### 📤 Convert to PDF (22 tools)
| Tool | Description |
|------|-------------|
| **Image to PDF** | Convert any image format to PDF |
| **JPG to PDF** | Convert JPEG images to PDF |
| **PNG to PDF** | Convert PNG images with transparency support |
| **WebP to PDF** | Convert modern WebP images to PDF |
| **SVG to PDF** | Convert vector graphics to PDF |
| **BMP to PDF** | Convert bitmap images to PDF |
| **HEIC to PDF** | Convert iPhone/iPad photos to PDF |
| **TIFF to PDF** | Convert multi-page TIFF to PDF |
| **TXT to PDF** | Convert plain text files to PDF |
| **JSON to PDF** | Convert JSON data with syntax highlighting |
| **PSD to PDF** | Convert Photoshop files to PDF |
| **Word to PDF** | Convert Microsoft Word documents to PDF |
| **Excel to PDF** | Convert Excel spreadsheets to PDF |
| **PowerPoint to PDF** | Convert PowerPoint presentations to PDF |
| **XPS to PDF** | Convert XPS documents to PDF |
| **RTF to PDF** | Convert Rich Text Format files to PDF |
| **EPUB to PDF** | Convert EPUB ebooks to PDF |
| **MOBI to PDF** | Convert MOBI ebooks to PDF |
| **Markdown to PDF** | Convert Markdown files to PDF with styling |
| **Email to PDF** | Convert email files (EML/MSG) to PDF |
| **CBZ to PDF** | Convert comic book archives to PDF |
| **DjVu to PDF** | Convert DjVu documents to PDF |

### 📥 Convert from PDF (13 tools)
| Tool | Description |
|------|-------------|
| **PDF to JPG** | Extract pages as JPEG images |
| **PDF to PNG** | Export pages as PNG with transparency |
| **PDF to WebP** | Convert to modern WebP format |
| **PDF to BMP** | Export as bitmap images |
| **PDF to TIFF** | Convert to high-quality TIFF |
| **PDF to Greyscale** | Convert colorful PDFs to black and white |
| **PDF to JSON** | Extract text and metadata as JSON |
| **PDF to DOCX** | Convert PDF to editable Word document |
| **PDF to PowerPoint** | Convert PDF to editable slides |
| **PDF to Excel** | Extract tables to spreadsheet format |
| **Extract Images** | Extract all images embedded in a PDF file |
| **PDF to PDF/A** | Convert PDF to archival PDF/A format |
| **Extract Tables** | Extract tables from PDF as structured data |

### ⚡ Optimize & Repair (8 tools)
| Tool | Description |
|------|-------------|
| **Compress PDF** | Reduce file size while maintaining quality |
| **Fix Page Size** | Standardize page dimensions |
| **Page Dimensions** | Analyze and view page sizes |
| **Linearize PDF** | Optimize for fast web viewing |
| **Repair PDF** | Fix corrupted or damaged PDF files |
| **Remove Restrictions** | Remove editing/printing restrictions |
| **Rasterize PDF** | Convert vector elements to images for compatibility |
| **Font to Outline** | Convert text fonts to vector outlines |

### 🔒 Secure PDF (6 tools)
| Tool | Description |
|------|-------------|
| **Encrypt PDF** | Add password protection and encryption |
| **Decrypt PDF** | Remove password from PDFs |
| **Sanitize PDF** | Remove metadata, scripts, and hidden data |
| **Flatten PDF** | Merge annotations and form fields into content |
| **Remove Metadata** | Strip author, dates, and other metadata |
| **Change Permissions** | Set print, copy, and edit permissions |

## 💻 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **PDF Processing**:
  - [PDF.js](https://github.com/mozilla/pdf.js)
  - [pdf-lib](https://github.com/Hopding/pdf-lib)
  - [PyMuPDF (WASM)](https://pymupdf.readthedocs.io/)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)

## 🚀 Getting Started

To run this project locally, follow these steps:

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/PDFCraftTool/pdfcraft.git
    cd pdfcraft
    ```

2.  **Install dependencies**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Start the development server**
    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```

4.  **Open your browser**
    Navigate to [http://localhost:3000](http://localhost:3000) to see the application running.

### 🐳 Docker

PDFCraft provides both pre-built Docker images and Docker Compose for flexible deployment options.

#### Option 1: Use Pre-built Image (Recommended)

The easiest way to run PDFCraft is using our pre-built image from GitHub Container Registry:

```bash
# Pull the latest image
docker pull ghcr.io/pdfcrafttool/pdfcraft:latest

# Run the container
docker run -d -p 8080:80 --name pdfcraft ghcr.io/pdfcrafttool/pdfcraft:latest
```

Open [http://localhost:8080](http://localhost:8080) to access PDFCraft.

**Available tags:**
| Tag | Description |
|-----|-------------|
| `latest` | Latest stable release from main branch |
| `v1.0.0` | Specific version (semantic versioning) |
| `sha-abc1234` | Specific commit |

#### Option 2: Build from Source with Docker Compose

If you want to build from source or need to modify the code:

> ⚠️ **Note**: This method requires cloning the repository first.

```bash
# Clone the repository
git clone https://github.com/PDFCraftTool/pdfcraft.git
cd pdfcraft

# Development mode (with hot reload)
docker compose --profile dev up

# Production mode (static build + Nginx)
docker compose --profile prod up --build
```

- Development: [http://localhost:3000](http://localhost:3000)
- Production: [http://localhost:8080](http://localhost:8080)

To stop containers:

```bash
docker compose down
```

#### 🌐 Subpath Deployment (basePath Support)

PDFCraft supports deployment under a subpath (e.g., `https://your-domain.com/pdfcraft/`). To enable this, you must specify the base path during the build process.

**Using Docker Build:**
```bash
docker build --build-arg BASE_PATH=/pdfcraft -t pdfcraft .
```

**Using Docker Compose:**
```yaml
services:
  pdfcraft:
    build:
      context: .
      args:
        - BASE_PATH=/pdfcraft
    environment:
      - BASE_PATH=/pdfcraft
```

*Note: Since the app is statically exported, the `BASE_PATH` must be provided during the build stage.*

## 📜 Scripts

- `npm run dev`: Starts the development server with Turbopack. Automatically runs `predev` to decompress LibreOffice WASM files.
- `npm run build`: Builds the application for production. Automatically runs `postbuild` to decompress WASM files in `out/`.
- `npm run start`: Starts the production server.
- `npm run lint`: Lints the code using ESLint.
- `npm run test`: Runs tests using Vitest.

## 🚀 Production Deployment Guide

PDFCraft is configured for static export (`output: 'export'`), which means it can be deployed to any service that supports static website hosting without requiring a Node.js server.

> 📖 **For comprehensive deployment instructions, see [DEPLOYMENT.md](DEPLOYMENT.md)**

### Quick Start

1. **Build the project:**
   ```bash
   npm run build
   ```
   All static files will be generated in the `out` directory.

2. **Deploy to your preferred platform:**
   - **Vercel** (Recommended): `vercel --prod`
   - **Netlify**: `netlify deploy --prod --dir=out`
   - **GitHub Pages**: Push to `main` branch (uses GitHub Actions)
   - **Cloudflare Pages**: `wrangler pages deploy out`
   - **Docker + Nginx**: `docker compose --profile prod up --build`

### Deployment Files Included

| File | Platform |
|------|----------|
| `vercel.json` | Vercel |
| `netlify.toml` | Netlify |
| `.github/workflows/deploy.yml` | GitHub Pages |
| `public/_headers` | Cloudflare Pages / Netlify |
| `docker-compose.yml` + `nginx.conf` | Docker / Self-hosted |
| `.htaccess` | Apache |

### Important Notes
- **Headers Configuration**: Security and caching headers are pre-configured in all deployment files.
- **Image Optimization**: Static export uses `images: { unoptimized: true }`.
- **WASM Support**: All deployment configs include proper MIME types for WebAssembly.
- **Subpath Support**: Set `BASE_PATH` environment variable during build to deploy under a subdirectory.

### Verify Deployment
After deployment, please check the following features to ensure everything is working correctly:
- Multi-language routing (e.g., `/en`, `/zh`)
- Tool page loading
- WebAssembly (PDF processing) functionality

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1.  Fork the project
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 🤝 Acknowledgements

PDFCraft stands on the shoulders of giants. We gratefully acknowledge [BentoPDF](https://github.com/alam00000/bentopdf) for their pioneering work in privacy-first, client-side PDF tools.

Their project served as a significant inspiration and reference for our core logic. While PDFCraft has been re-engineered for the Next.js ecosystem and extends functionality with unique features like the *Workflow Editor*, we deeply respect the foundation laid by the BentoPDF team.

## 📄 License

This project is licensed under the AGPL-3.0 License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">
  Built with ❤️ by the PDFCraft Team
</div>

In the PDF reader, open **Tools → Right-to-left page order** to place the first page of a spread on the right. This works in vertical, page-by-page and wrapped scrolling without mirroring page contents or changing the interface language. The toggle is unavailable in horizontal scrolling, which retains its existing page order. The choice is remembered on this device when browser storage is available.
