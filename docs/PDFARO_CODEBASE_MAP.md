# PDFaro Codebase Map

_Generated 2026-05-07 — Phase 1 discovery document for the PDFaro redesign._

---

## 1. Project Overview

| Attribute | Value |
|-----------|-------|
| **Framework** | Next.js 15.1.8 (App Router, static export) |
| **Language** | TypeScript 5.6.3 |
| **Runtime** | React 19 |
| **Styling** | Tailwind CSS v4.0 with `@tailwindcss/postcss`, CSS custom properties (HSL-based design tokens) |
| **Build** | Next.js + Turbopack (dev) / Webpack (prod) |
| **Testing** | Vitest 2.1.3 + @testing-library/react 16 |
| **i18n** | next-intl 4.1.0 — locale routing under `/[locale]/` |
| **State** | Zustand 5 (global), React Context (tool context), custom hooks (favorites, undo/redo) |
| **PDF Engine** | pdf-lib, pdfjs-dist, qpdf-wasm, PyMuPDF-wasm, Tesseract.js (OCR), LibreOffice WASM |
| **Desktop** | Tauri v2 — static Next.js export wrapped in a native shell |
| **Main Entry Points** | `src/app/layout.tsx` → `src/app/[locale]/layout.tsx` → page components |

---

## 2. Folder Structure Map

```
pdfcraft/
├── src/
│   ├── app/                    # Next.js 15 App Router
│   │   ├── layout.tsx          # Root layout — font setup, global CSS
│   │   ├── page.tsx            # Redirect: / → /[detected-locale]
│   │   ├── global-error.tsx    # Uncaught error boundary
│   │   ├── globals.css         # Design tokens (CSS vars) + Tailwind import
│   │   ├── manifest.ts         # PWA manifest
│   │   ├── robots.ts / sitemap.ts
│   │   └── [locale]/           # All user-facing pages under locale prefix
│   │       ├── layout.tsx      # Locale layout (next-intl provider, theme, a11y)
│   │       ├── page.tsx        # Homepage (server component → HomePageClient)
│   │       ├── HomePageClient.tsx
│   │       ├── error.tsx / not-found.tsx
│   │       ├── tools/
│   │       │   ├── page.tsx
│   │       │   ├── ToolsPageClient.tsx
│   │       │   ├── [tool]/page.tsx   # Individual tool server component
│   │       │   └── category/[category]/page.tsx
│   │       ├── workflow/
│   │       │   ├── page.tsx
│   │       │   └── WorkflowPageClient.tsx
│   │       ├── about/ contact/ privacy/ faq/   # Static info pages
│   │       └── (each has page.tsx)
│   │
│   ├── components/
│   │   ├── ui/                 # Primitive/base UI atoms
│   │   ├── layout/             # Header, Footer, Navigation, LanguageSelector, MobileMenu
│   │   ├── common/             # Shared functional components (FileUploader, GuidedTour…)
│   │   ├── tools/              # Tool UI — ToolCard, ToolGrid, ToolPage + 80+ tool-specific folders
│   │   ├── workflow/           # Workflow editor components (ReactFlow-based)
│   │   └── seo/                # JsonLd, PerformanceHints
│   │
│   ├── lib/
│   │   ├── pdf/                # PDF processing core (processor.ts routes operations)
│   │   │   └── processors/     # 90+ individual processor files
│   │   ├── hooks/              # PDF-related hooks (usePdfLibrary, useBatchProcessing…)
│   │   ├── contexts/           # ToolContext (current tool slug/name)
│   │   ├── storage/            # IndexedDB (projects), localStorage (recent files)
│   │   ├── workflow/           # Workflow execution engine
│   │   ├── libreoffice/        # LibreOffice WASM wrapper
│   │   ├── i18n/               # i18n config, fallback strings, RTL support
│   │   ├── seo/                # Metadata + JSON-LD generation
│   │   └── utils/              # Accessibility, logger, sanitizer, search, asset-loader
│   │
│   ├── hooks/                  # App-level hooks: useFavorites, useUndoRedo
│   ├── types/                  # TypeScript definitions (pdf, tool, workflow, i18n…)
│   ├── config/                 # tools.ts (tool registry), icons.ts, tool-content/
│   ├── i18n/                   # next-intl request.ts handler
│   └── __tests__/              # All test files (see §7)
│
├── messages/                   # i18n JSON message files (en, es, fr, de, pt, ja, zh, ar, hi)
├── public/                     # Static assets (icons, images, WASM workers)
├── scripts/                    # Build helpers (decompress-wasm, chunk-assets, sync-pdfjs-workers)
├── Redesign-figma/             # 16 PNG design mockups (light + dark per screen)
├── src-tauri/                  # Tauri native shell (Rust config + assets)
├── extension/                  # Browser extension code
├── next.config.js              # Next.js config (static export, WASM, COEP/COOP headers)
├── postcss.config.js           # Tailwind v4 via @tailwindcss/postcss
├── vitest.config.ts            # Vitest setup
└── tsconfig.json
```

---

## 3. Routing Map

All routes live under `src/app/[locale]/`. The locale is detected automatically and the user is redirected from `/` to `/<locale>`.

| Route | File | Notes |
|-------|------|-------|
| `/<locale>` | `[locale]/page.tsx` → `HomePageClient.tsx` | Homepage with hero, popular tools, categories |
| `/<locale>/tools` | `tools/page.tsx` → `ToolsPageClient.tsx` | Full tools directory with search + filter |
| `/<locale>/tools/<slug>` | `tools/[tool]/page.tsx` → per-tool component | Individual tool interface |
| `/<locale>/tools/category/<cat>` | `tools/category/[category]/page.tsx` | Category-filtered tool list |
| `/<locale>/workflow` | `workflow/page.tsx` → `WorkflowPageClient.tsx` | ReactFlow workflow builder |
| `/<locale>/about` | `about/page.tsx` | About page |
| `/<locale>/faq` | `faq/page.tsx` | FAQ page |
| `/<locale>/privacy` | `privacy/page.tsx` | Privacy policy |
| `/<locale>/contact` | `contact/page.tsx` | Contact/feedback |

**Locale routing:** next-intl middleware (in `src/i18n/request.ts`) detects locale from cookie/Accept-Language, falls back to `en`. Supported locales: `en, es, fr, de, pt, ja, zh, ar, hi`.

---

## 4. UI Component Map

### Base UI atoms — `src/components/ui/`
| Component | Purpose |
|-----------|---------|
| `Button.tsx` | Primary/secondary/ghost/outline/destructive variants; size sm/md/lg; loading state; forwardRef |
| `Card.tsx` | Surface container with optional hover lift effect |
| `Modal.tsx` | Dialog overlay with focus trap |
| `Tabs.tsx` | Tab strip for multi-view layouts |
| `FormField.tsx` | Label + input wrapper with error messaging |
| `ThemeToggle.tsx` | Sun/moon toggle that applies `.dark` class to `<html>` |
| `FavoriteButton.tsx` | Star icon toggling a tool as favorite (persisted via useFavorites) |
| `OptimizedImage.tsx` | Next.js Image wrapper with loading states |

### Layout — `src/components/layout/`
| Component | Purpose |
|-----------|---------|
| `Header.tsx` | Fixed top bar; logo, nav pill, search (Cmd+K), recent files, GitHub, theme toggle, mobile menu toggle |
| `Footer.tsx` | 4-column grid: brand/social, tool links, language selector, legal |
| `Navigation.tsx` | Desktop nav items (also used inside Header) |
| `LanguageSelector.tsx` | Dropdown to change locale; persists choice in cookie |
| `MobileMenu.tsx` | Slide-down nav for `md:` breakpoint and below |

### Common shared — `src/components/common/`
| Component | Purpose |
|-----------|---------|
| `FileUploader.tsx` | Drag-drop + click + paste + keyboard file input; multi-file; type/size validation |
| `GuidedTour.tsx` | Onboarding tour overlay (useGuidedTour hook) |
| `BatchProcessingPanel.tsx` | UI for batch file processing |
| `SavedProjectsPanel.tsx` | Saved project browsing (IndexedDB) |
| `RecentFilesDropdown.tsx` | Recent file history from localStorage |
| `LiveRegion.tsx` | `role="status"` ARIA live region for async announcements |
| `SkipLink.tsx` | "Skip to main content" a11y link |
| `PdfLibraryLoader.tsx` | Lazy-load indicator for WASM libraries |

### Tools — `src/components/tools/`
| Component | Purpose |
|-----------|---------|
| `ToolCard.tsx` | Card for tools directory / grid — icon, name, description, favorite, category badge |
| `ToolGrid.tsx` | Responsive grid of ToolCards |
| `ToolPage.tsx` | Full tool page shell — Header, breadcrumb, tool header, children (tool UI), related tools, Footer |
| `ProcessingProgress.tsx` | Progress bar + status text during PDF processing |
| `DownloadButton.tsx` | Download result file; triggers Blob URL download |
| `FilePreview.tsx` | PDF page thumbnail preview |
| `FavoriteToolsSection.tsx` | Section showing favorited tools on homepage |
| `<tool>/` (80+ folders) | Each tool has its own component (e.g., `compress/CompressTool.tsx`) |

### Workflow — `src/components/workflow/`
| Component | Purpose |
|-----------|---------|
| `WorkflowEditor.tsx` | ReactFlow canvas; drag-drop nodes; zoom/pan |
| `WorkflowControls.tsx` | Run/save/undo/redo toolbar |
| `ToolNode.tsx` | Custom ReactFlow node rendering a PDF tool |
| `CustomEdge.tsx` | Animated directed edge between nodes |
| `ToolSidebar.tsx` | Left panel — categorized tool list to drag onto canvas |
| `NodeSettingsPanel.tsx` | Right panel — settings for selected node |
| `FileListPanel.tsx` | Input file list panel |
| `WorkflowLibrary.tsx` | Pre-built workflow templates |
| `WorkflowHistory.tsx` | Execution history log |
| `WorkflowPreview.tsx` | Preview modal for workflow output |

---

## 5. Interaction Map

### User opens a tool
1. User navigates to `/<locale>/tools/<slug>`.
2. `tools/[tool]/page.tsx` (server) resolves tool config + localized content from `src/config/`.
3. Renders `<ToolPage>` which includes `<Header>`, breadcrumb, tool heading, the tool-specific child component, related tools section, and `<Footer>`.
4. The tool component initialises its own local state (files list, status, options).

### User uploads a file
1. `<FileUploader>` renders a dashed drop zone.
2. On drop/click/paste, it validates file type and size, then calls `onFilesSelected(files)`.
3. Tool component adds validated files to its `files` state array.
4. UI transitions from "empty" → "files selected" state.

### Tool processes the file
1. User clicks "Process" button.
2. Tool component calls the relevant `lib/pdf/processors/<tool>.ts` function.
3. Processor uses pdf-lib / pdfjs / WASM as needed; calls `onProgress(pct)` callbacks.
4. `<ProcessingProgress>` shows animated progress bar and status text.
5. On completion, result `Blob` is stored in component state.

### Result/download is generated
1. Tool component stores the output Blob.
2. UI transitions to "success" state.
3. `<DownloadButton>` creates an object URL and triggers `<a download>`.
4. File entry is saved to recent files (localStorage).

### Errors are displayed
1. Processors throw typed errors from `lib/pdf/errors.ts`.
2. Tool components catch and set error state.
3. Error message shown in a destructive-coloured card with optional retry action.
4. `<LiveRegion>` announces the error to screen readers.

### Recent files
1. After each successful download, `useRecentFiles` hook saves metadata to localStorage.
2. `<RecentFilesDropdown>` in header reads this and displays a dropdown list.

### Workflow editor node interactions
1. `WorkflowEditor` mounts ReactFlow with custom node/edge types.
2. `ToolSidebar` lists tools; user drags onto canvas → `onDrop` handler creates a new node.
3. Connecting two nodes creates a directed edge (data flows from node A to node B).
4. Selecting a node opens `NodeSettingsPanel` on the right.
5. "Run workflow" triggers `lib/workflow/engine.ts` which executes nodes topologically.

---

## 6. Data / State Map

### Key state hooks
| Hook | Location | Purpose |
|------|----------|---------|
| `useFavorites` | `src/hooks/useFavorites.ts` | Persist favorited tool IDs in localStorage |
| `useUndoRedo` | `src/hooks/useUndoRedo.ts` | Generic undo/redo stack |
| `usePdfLibrary` | `src/lib/hooks/usePdfLibrary.ts` | Lazy-load pdf-lib/pdfjs; track load status |
| `useBatchProcessing` | `src/lib/hooks/useBatchProcessing.ts` | Orchestrate batch file operations |
| `useProjectStorage` | `src/lib/hooks/useProjectStorage.ts` | CRUD for saved projects in IndexedDB |
| `useRecentFiles` | `src/lib/hooks/useRecentFiles.ts` | Read/write recent files in localStorage |
| `useGuidedTour` | `src/lib/hooks/useGuidedTour.ts` | Onboarding tour step management |
| `useKeyboardNavigation` | `src/lib/hooks/useKeyboardNavigation.ts` | Arrow-key navigation in lists |

### Context providers
| Context | File | Value |
|---------|------|-------|
| `ToolContext` | `src/lib/contexts/ToolContext.tsx` | `{ toolSlug, toolName }` — consumed by child components |
| `AnnouncementContext` | Inside `LiveRegion.tsx` | Function to announce messages to screen readers |
| next-intl `NextIntlClientProvider` | `[locale]/layout.tsx` | All locale messages |
| Theme provider | `[locale]/layout.tsx` | Dark/light class on `<html>` |

### Local storage usage
- `pdfcraft_recent_files` — JSON array of `{ name, size, toolId, timestamp }` (max 20)
- `pdfcraft_favorites` — JSON array of tool IDs
- `pdfcraft_language` — user locale preference string
- `pdfcraft_theme` — `'dark' | 'light'`
- `pdfcraft_tour_completed` — boolean

### IndexedDB
- Database `pdfcraft-projects` (via `lib/storage/project-db.ts`) — saved workflow projects

### File handling utilities
- `lib/pdf/validation.ts` — type, size, page-count checks
- `lib/pdf/errors.ts` — `PDFProcessingError`, `PDFValidationError` typed error classes
- `lib/pdf/loader.ts` — dynamic import of pdf-lib / pdfjs with caching
- `lib/pdf/processor.ts` — top-level router: maps tool ID → processor function

### PDF processing utilities (90+ processors)
Located in `src/lib/pdf/processors/`. Each exports an async function like:
```ts
export async function processMerge(files: File[], options: MergeOptions, onProgress: ProgressCallback): Promise<Blob>
```

---

## 7. Test Map

### Framework
- **Vitest** 2.1.3 with `@testing-library/react` 16
- JSDOM environment
- Setup file: `src/__tests__/setup.ts` (jest-dom matchers, fake-indexeddb, canvas mock)

### Test folders
```
src/__tests__/
├── components/
│   ├── tools/       — DownloadButton, EditPDFTool, FileUploader, ProcessingProgress
│   └── ui/          — Button, Card, Modal, Tabs
│   └── workflow/    — WorkflowControls
├── lib/
│   ├── pdf/         — merge, redact, split processors
│   └── utils.test.ts
├── properties/      — Property-based tests (fast-check): error-messages, i18n, layout, project-storage, seo, tool-components, tools
├── workflow/        — engine, execution-utils, executor
└── accessibility/   — accessibility.test.ts (axe-core)
```

### Test scripts
```
npm run test          # vitest run (all tests once)
npm run test:watch    # vitest --watch
```

### What is covered
- Base UI components (Button, Card, Modal, Tabs) — render + interaction
- FileUploader — drag/drop, validation, keyboard
- ProcessingProgress — progress display
- DownloadButton — download trigger
- Workflow engine logic
- PDF merge, split, redact processors
- i18n completeness (property-based)
- SEO metadata generation
- Accessibility (axe-core scans)

### What is NOT covered
- Most tool-specific components (80+ tools, only a handful tested)
- ToolCard, ToolGrid, ToolPage rendering
- Header / Footer / Navigation
- Full integration tests (upload → process → download flow)
- Workflow editor canvas interactions
- Mobile layout

---

## 8. Risk Map

| Area | Risk | Reason |
|------|------|--------|
| `next.config.js` | **HIGH** | Static export + WASM + COEP/COOP headers + Tauri asset prefix — fragile, touching breaks the build |
| `src/lib/pdf/processors/` | **HIGH** | 90+ processors; each has its own quirks; do not touch during UI redesign |
| `src/lib/workflow/engine.ts` | **HIGH** | Topological execution logic; complex; do not touch |
| `src/app/[locale]/layout.tsx` | **HIGH** | next-intl provider, theme init, font loading; subtle order dependencies |
| `src/components/workflow/WorkflowEditor.tsx` | **HIGH** | ReactFlow instance; custom nodes; complex state |
| `src/lib/pdf/loader.ts` | **HIGH** | Lazy-load / WASM initialisation; race conditions possible |
| `messages/` | **MEDIUM** | Translation key changes must be propagated across all 9 locales |
| `src/config/tools.ts` | **MEDIUM** | Central tool registry — category changes affect routing and filtering |
| `src/components/tools/<tool>/` | **LOW–MEDIUM** | Mostly self-contained; safe to update presentation, not logic |
| `src/components/ui/` | **LOW** | Pure presentational atoms; safe to update styles |
| `src/components/layout/Header.tsx` | **LOW–MEDIUM** | Search, keyboard shortcuts, mobile menu — functional, test after any change |
| CSS custom properties in `globals.css` | **LOW** | Changing token values will cascade across all components — intentional during redesign |
