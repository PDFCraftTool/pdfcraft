# PDFaro Redesign — Implementation Plan

_Phase 2 document. Depends on: `PDFARO_CODEBASE_MAP.md`._
_Design source of truth: `Redesign-figma/` (16 PNG mockups)._

---

## Design Analysis Summary

From the Figma PNGs, the redesign introduces:

### Brand & Identity
- Brand renamed from "PDFCraft" → **"PDFaro"** (logo: purple `PF` monogram in a rounded square)
- Tagline: **"Every PDF tool you need. Fast, private, and simple."** (bold, split-colour heading)
- Primary accent colour shifts from blue → **indigo/violet** (`#4F46E5` range)

### Navigation
- Header: `PDFaro | Tools | Workflow | Pricing | FAQ` left-aligned nav links (no pill)
- Right side: language selector, theme toggle, **Sign in** link, **Get started →** CTA button (blue/indigo filled)
- No GitHub link in header

### Homepage (screens 01 & 02)
- Split-colour h1: "Every PDF tool you need." (black/white) + "Fast, private, and simple." (indigo)
- Search bar centered under headline; quick-action chips below (Merge, Compress, PDF to Word, Sign, Edit)
- Two CTA buttons: "Choose a PDF tool ▼" (indigo filled) + "✦ Try Workflow Builder" (outline)
- Feature badges row: "Browser-processed & private", "No file uploads", "90+ tools", "Free forever"
- Popular tools section with horizontal scroll / grid cards
- Category hub: 6 category cards in a 3×2 grid with icons, names, and sub-tool tags
- Privacy CTA section with feature bullets + recent activity sidebar
- Workflow CTA section at bottom

### Tools Directory (screen 03)
- Full-width heading: "The full PDF toolkit" with `90+ tools` subtitle
- Search bar + Filters button row
- Category tabs: All | Organize | Edit & Annotate | Convert to PDF | Convert from PDF | Optimize | Secure
- Left sidebar: category list with counts + filter checkboxes (Popular / New / Free / Premium)
- 3-column card grid; cards show: icon, badge (Popular/New/Premium), tool name, description, "Open tool →" link
- Card badges use distinct colours: Popular=amber, New=blue, Premium=purple

### Individual Tool Page (screens 05–10)
- `PDFaro > Tools > Compress PDF` breadcrumb
- Tool icon (coloured rounded square) + bold h1 + description paragraph
- Trust badges: "Processed locally" • "Free" • "Popular"
- "Save tool" bookmark link top-right
- **Two-column layout** on desktop:
  - Left column (wider): upload zone / file list / progress / result
  - Right column: tool-specific settings panel
- Upload zone (screen 05): clean dashed border, upload icon, "Drop your PDF here or click to browse", "Up to 100 MB · Single or multiple files", blue "Select PDF" button
- File selected (screen 07): file row with icon, name, page count, size; "+ Add more" link
- Processing (screen 08): blue progress bar, percentage, engine info, estimated time, worker count; "Compressing..." disabled button
- Success (screen 09): green check "Your file is ready"; before/after size comparison; blue full-width "Download PDF" button + "Start over" text link; "What's next?" related tools
- Error (screen 10): red/orange error state

### Workflow Editor (screens 11 & 12)
- Top bar: workflow name + "Beta" badge + timestamp + undo/redo + Preview + Save + Run
- Left panel: file list (INPUTS section) + collapsible tool sidebar (categorised)
- Canvas: nodes with status indicators (COMPLETED, RUNNING %, READY)
- Right panel: node settings (preset, DPI, toggles) + execution history log
- Bottom: zoom controls

### Mobile (screens 13–16)
- Header: `PF` logo + hamburger only
- Hero: single-column, larger text, full-width CTA button
- Tool page: stacked single column; settings collapsible accordion below upload zone
- "Tap to select a PDF" label on upload zone

---

## 1. Screens / Components to Update

| # | Screen / Component | Figma Reference | Priority |
|---|-------------------|-----------------|----------|
| 1 | Design tokens (colours, typography, radius, shadows) | All screens | P0 |
| 2 | `Header.tsx` | All screens | P0 |
| 3 | `Footer.tsx` | Implied | P1 |
| 4 | `HomePageClient.tsx` | 01, 02, 13, 14 | P0 |
| 5 | `ToolCard.tsx` | 03 | P0 |
| 6 | `ToolGrid.tsx` | 03 | P1 |
| 7 | `ToolsPageClient.tsx` | 03 | P0 |
| 8 | `ToolPage.tsx` | 05–10 | P0 |
| 9 | `FileUploader.tsx` (common + tools shared) | 05, 06, 15 | P0 |
| 10 | `ProcessingProgress.tsx` | 08 | P1 |
| 11 | `DownloadButton.tsx` + success state | 09 | P1 |
| 12 | Error state UI | 10 | P1 |
| 13 | Workflow editor styling | 11, 12 | P2 |
| 14 | `ToolNode.tsx` | 11, 12 | P2 |
| 15 | Mobile layout polish | 13–16 | P1 |
| 16 | `globals.css` (new token values) | All | P0 |

---

## 2. Exact Files Likely to Be Edited

```
src/app/globals.css                              # design tokens — primary colour, typography
src/components/layout/Header.tsx                 # nav restructure, new CTA button
src/components/layout/Footer.tsx                 # minor styling refresh
src/app/[locale]/HomePageClient.tsx              # hero, search, quick-actions, category hub
src/components/tools/ToolCard.tsx                # badge support, new card layout
src/components/tools/ToolGrid.tsx                # grid spacing
src/app/[locale]/tools/ToolsPageClient.tsx       # sidebar filters, tabs
src/components/tools/ToolPage.tsx                # two-column layout, trust badges
src/components/common/FileUploader.tsx           # new upload zone design
src/components/tools/ProcessingProgress.tsx      # new progress bar style
src/components/tools/DownloadButton.tsx          # before/after comparison, success state
src/components/ui/Button.tsx                     # "Get started" variant if needed
src/components/workflow/WorkflowEditor.tsx       # top-bar, panel headers
src/components/workflow/ToolNode.tsx             # node status badge colours
```

Files that must NOT be changed during redesign (content/logic):
```
src/lib/pdf/**                    # all PDF processors
src/lib/workflow/**               # workflow engine
src/lib/storage/**                # IndexedDB / localStorage
src/config/tools.ts               # tool registry
next.config.js                    # build config
src/app/[locale]/*/page.tsx       # server components — only touch when necessary for metadata
messages/**                       # translation files (unless adding new keys)
```

---

## 3. Reusable Components to Create

| Component | Purpose | Location |
|-----------|---------|----------|
| `TrustBadges.tsx` | "Processed locally • Free • Popular" pill row | `src/components/ui/` |
| `ToolBadge.tsx` | Popular/New/Premium coloured badge pill | `src/components/ui/` |
| `BeforeAfterStat.tsx` | Before/after file size comparison block | `src/components/tools/` |
| `QuickActions.tsx` | Homepage chip row (Merge, Compress…) | `src/components/ui/` |
| `CategoryHub.tsx` | 6-card category grid for homepage | `src/components/ui/` |
| `SectionHeader.tsx` | Reusable `<heading + subtext + cta>` block | `src/components/ui/` |

These should be **thin presentational components** — no business logic, no data fetching.

---

## 4. Components to Avoid Touching

- All 90+ PDF processor files in `src/lib/pdf/processors/`
- `src/lib/workflow/engine.ts`, `executor.ts`, `execution-utils.ts`
- `src/lib/storage/project-db.ts`
- `src/components/workflow/WorkflowEditor.tsx` — layout changes only; leave ReactFlow internals alone
- All tool-specific logic files inside `src/components/tools/<tool>/`
- `src/i18n/request.ts` and `src/lib/i18n/`
- `src/config/tools.ts` and `src/config/tool-content/`
- `next.config.js`
- All existing test files

---

## 5. Risk Level Per Change

| Change | Risk | Mitigation |
|--------|------|-----------|
| Design token values in `globals.css` | **LOW** — CSS vars cascade cleanly | Check dark mode contrast after changing |
| Header restructure | **MEDIUM** — search, keyboard shortcut, mobile menu must still work | Test Cmd+K, mobile nav, language selector |
| Homepage sections | **LOW** — presentational only | Keep existing `ToolGrid`, `getPopularTools()` calls |
| ToolCard redesign | **LOW** — presentational | Keep existing `localizedContent` prop, `FavoriteButton` |
| ToolsPageClient sidebar | **MEDIUM** — filtering logic must stay wired | Touch only JSX structure; preserve `filteredTools`, `useFavorites` calls |
| ToolPage two-column layout | **MEDIUM** — wraps child tool components; changes affect all 80+ tools | Use CSS Grid only; do not change ToolProvider or children slot |
| FileUploader upload zone | **LOW** — presentational restyle | Keep all event handlers, validation logic untouched |
| ProcessingProgress | **LOW** | Style only |
| DownloadButton / success state | **LOW** | Add before/after block above existing download button; keep Blob URL logic |
| WorkflowEditor styling | **MEDIUM** — ReactFlow has its own CSS | Use className overrides only; do not touch `onConnect`, `onDrop`, execution triggers |

---

## 6. Test Plan

### Before starting
```bash
npm run test        # baseline — all must pass
npm run build       # baseline — must succeed
```

### After each commit group
```bash
npm run lint
npm run test
```

### After implementation complete
```bash
npm install
npm run lint
npm run test
npm run build
```

### Manual verification checklist
- [ ] Homepage loads at `http://localhost:3000/en`
- [ ] Tools directory loads at `/en/tools`
- [ ] At least 5 tools open: Merge, Compress, Split, Encrypt, OCR
- [ ] Upload box accepts a PDF via click and drag
- [ ] Processing state appears and progress bar animates
- [ ] Result/download state appears and file downloads
- [ ] Error state appears for invalid file
- [ ] Mobile layout (≤ 640px): nav hamburger, stacked tool page
- [ ] Workflow editor opens at `/en/workflow`
- [ ] Dark mode toggle works on homepage and tool page
- [ ] Cmd+K / Ctrl+K opens search in header
- [ ] Language selector changes locale

---

## 7. Rollback Plan

All work happens on branch `feature/pdfaro-redesign`. The `main` branch is untouched.

**Per-commit rollback:** Each logical group (tokens, header, homepage…) is a separate commit. Reverting a specific commit is safe because changes are scoped.

**Full rollback:** `git checkout main` restores the original design instantly.

**Design token rollback:** `globals.css` changes are isolated. Reverting that single file restores all colour/typography changes.

**Component rollback:** Since business logic is untouched, reverting any component file cannot break PDF processing or routing.

---

## 8. Branch Strategy & Commit Groups

Branch name: `feature/pdfaro-redesign`

| Commit group | Files | Description |
|--------------|-------|-------------|
| 1. tokens | `globals.css` | Update CSS custom properties: primary violet, typography, radius |
| 2. shared-atoms | `Button.tsx`, new `TrustBadges`, `ToolBadge`, `BeforeAfterStat`, `QuickActions`, `SectionHeader` | New reusable atoms |
| 3. header-footer | `Header.tsx`, `Footer.tsx` | PDFaro branding, new nav, Sign in / Get started buttons |
| 4. homepage | `HomePageClient.tsx` | New hero, quick actions, category hub, privacy section, workflow CTA |
| 5. tools-directory | `ToolsPageClient.tsx`, `ToolCard.tsx`, `ToolGrid.tsx` | Sidebar filters, badge support, new card layout |
| 6. tool-page | `ToolPage.tsx` | Two-column layout, trust badges, Save tool button, breadcrumb |
| 7. upload-process-result | `FileUploader.tsx`, `ProcessingProgress.tsx`, `DownloadButton.tsx` | Upload zone redesign, processing bar, success/error states |
| 8. workflow-styling | `WorkflowEditor.tsx`, `ToolNode.tsx` | Top-bar, panel headers, node status badges |
| 9. mobile-polish | All layout components | Responsive fixes, mobile upload zone, accordion settings |
| 10. a11y-qa | Various | Focus states, contrast fixes, ARIA labels |
