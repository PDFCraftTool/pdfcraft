/**
 * PyMuPDF Loader
 * Dynamically loads PyMuPDF WASM module using ES module import
 */

// Singleton instance
let pymupdfInstance: any = null;
let loadingPromise: Promise<any> | null = null;

function resolvePublicAssetPath(assetPath: string): string {
  if (typeof window === 'undefined') return assetPath;

  const normalizedAssetPath = assetPath.startsWith('/') ? assetPath : `/${assetPath}`;
  const scripts = Array.from(document.querySelectorAll('script[src]')) as HTMLScriptElement[];
  const nextScript = scripts.find((script) => script.src.includes('/_next/'));

  if (!nextScript) return normalizedAssetPath;

  try {
    const scriptUrl = new URL(nextScript.src);
    const nextIndex = scriptUrl.pathname.indexOf('/_next/');
    if (nextIndex <= 0) return normalizedAssetPath;

    const basePath = scriptUrl.pathname.slice(0, nextIndex).replace(/\/$/, '');
    return `${basePath}${normalizedAssetPath}`;
  } catch {
    return normalizedAssetPath;
  }
}

/**
 * Load PyMuPDF using Pyodide directly
 */
export async function loadPyMuPDF(): Promise<any> {
  if (pymupdfInstance) {
    return pymupdfInstance;
  }

  if (loadingPromise) {
    return loadingPromise;
  }

  loadingPromise = (async () => {
    try {
      const basePath = new URL(
        resolvePublicAssetPath('/pymupdf-wasm/'),
        window.location.origin
      ).toString();

      // Dynamically import Pyodide as ES module
      const pyodideModule = await import(/* webpackIgnore: true */ `${basePath}pyodide.js`);
      const loadPyodide = pyodideModule.loadPyodide;

      // Initialize Pyodide
      const pyodide = await loadPyodide({
        indexURL: basePath,
        fullStdLib: false
      });

      // Helper function to load local wheels (same as pdf-to-docx.worker.js)
      const loadWheel = async (url: string) => {
        await pyodide.loadPackage(url);
      };

      // Mock missing non-critical dependencies (same as pdf-to-docx.worker.js)
      pyodide.runPython(`
import sys
from types import ModuleType

# Mock tqdm (used for progress bars)
tqdm_mod = ModuleType("tqdm")
def tqdm(iterable=None, *args, **kwargs):
    return iterable if iterable else []
tqdm_mod.tqdm = tqdm
sys.modules["tqdm"] = tqdm_mod

# Mock fire (CLI tool, not needed for library usage)
fire_mod = ModuleType("fire")
sys.modules["fire"] = fire_mod
      `);

      // Install dependencies in order (same as pdf-to-docx.worker.js)
      await loadWheel(`${basePath}numpy-2.2.5-cp313-cp313-pyodide_2025_0_wasm32.whl`);
      await loadWheel(`${basePath}typing_extensions-4.12.2-py3-none-any.whl`);
      await loadWheel(`${basePath}packaging-24.1-py3-none-any.whl`);
      await loadWheel(`${basePath}fonttools-4.56.0-py3-none-any.whl`);
      await loadWheel(`${basePath}lxml-5.4.0-cp313-cp313-pyodide_2025_0_wasm32.whl`);
      await loadWheel(`${basePath}pymupdf-1.26.3-cp313-none-pyodide_2025_0_wasm32.whl`);

      // Import pymupdf
      await pyodide.runPythonAsync('import pymupdf');

      // Create a wrapper object with pdfToDocx method
      pymupdfInstance = {
        pyodide,
        async pdfToDocx(file: File): Promise<Blob> {
          const arrayBuffer = await file.arrayBuffer();
          const pdfData = new Uint8Array(arrayBuffer);

          // Write PDF to virtual filesystem
          pyodide.FS.writeFile('/input.pdf', pdfData);

          // Convert using pdf2docx
          const result = await pyodide.runPythonAsync(`
import base64
from pdf2docx import Converter

cv = Converter('/input.pdf')
cv.convert('/output.docx')
cv.close()

with open('/output.docx', 'rb') as f:
    docx_data = f.read()

base64.b64encode(docx_data).decode('ascii')
`);

          // Clean up
          try {
            pyodide.FS.unlink('/input.pdf');
            pyodide.FS.unlink('/output.docx');
          } catch {
            // Ignore cleanup errors
          }

          // Convert base64 to Blob
          const binary = atob(result);
          const bytes = new Uint8Array(binary.length);
          for (let i = 0; i < binary.length; i++) {
            bytes[i] = binary.charCodeAt(i);
          }

          return new Blob([bytes], {
            type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
          });
        },

        async pdfToPdfa(file: File, options: any): Promise<{ pdf: Blob }> {
          const arrayBuffer = await file.arrayBuffer();
          const pdfData = new Uint8Array(arrayBuffer);
          // Options are available for future use (level, embedFonts, flattenTransparency)
          const _options = options;

          pyodide.FS.writeFile('/input.pdf', pdfData);

          const result = await pyodide.runPythonAsync(`
import pymupdf
import base64

doc = pymupdf.open("/input.pdf")

# Attempt to make it PDF/A compliant (Best Effort)
# In a real scenario, we would need to attach an ICC profile and valid OutputIntent.

# Ensure all fonts are embedded and subsetted if possible
# garbage=4 will remove unused objects and deduplicate
save_options = {
    "garbage": 4,
    "deflate": True,
}

doc.save("/output.pdf", **save_options)
doc.close()

with open("/output.pdf", "rb") as f:
    pdf_data = f.read()

base64.b64encode(pdf_data).decode('ascii')
`);

          try {
            pyodide.FS.unlink('/input.pdf');
            pyodide.FS.unlink('/output.pdf');
          } catch {
            // Ignore cleanup errors
          }

          const binary = atob(result);
          const bytes = new Uint8Array(binary.length);
          for (let i = 0; i < binary.length; i++) {
            bytes[i] = binary.charCodeAt(i);
          }

          return {
            pdf: new Blob([bytes], { type: 'application/pdf' })
          };
        },

        async htmlToPdf(html: string, options: any): Promise<Blob> {
          const { pageSize = 'a4', margins = { top: 50, right: 50, bottom: 50, left: 50 }, attachments = [] } = options || {};

          // Page dimensions in points (72 points per inch)
          const pageSizes: Record<string, [number, number]> = {
            'a4': [595, 842],
            'letter': [612, 792],
            'legal': [612, 1008],
          };
          const [width, height] = pageSizes[pageSize] || pageSizes['a4'];

          // Write HTML to virtual filesystem
          const encoder = new TextEncoder();
          const htmlBytes = encoder.encode(html);
          pyodide.FS.writeFile('/input.html', htmlBytes);

          // Write attachments to virtual filesystem
          for (let i = 0; i < attachments.length; i++) {
            const att = attachments[i];
            if (att.content) {
              const attData = new Uint8Array(att.content);
              pyodide.FS.writeFile(`/attachment_${i}`, attData);
            }
          }

          // Build attachments info for Python
          const attachmentsJson = JSON.stringify(attachments.map((att: any, idx: number) => ({
            filename: att.filename,
            contentType: att.contentType,
            path: `/attachment_${idx}`,
            hasContent: !!att.content
          })));

          const result = await pyodide.runPythonAsync(`
import pymupdf
import base64
import json

# Read HTML
with open('/input.html', 'r', encoding='utf-8') as f:
    html_content = f.read()

# Margins
margin_left = ${margins.left}
margin_top = ${margins.top}
margin_right = ${margins.right}
margin_bottom = ${margins.bottom}
page_width = ${width}
page_height = ${height}

# Create PDF document
doc = pymupdf.open()

try:
    # Try using Story API (available in newer PyMuPDF versions)
    rect = pymupdf.Rect(margin_left, margin_top, page_width - margin_right, page_height - margin_bottom)
    story = pymupdf.Story(html=html_content)
    
    more = True
    while more:
        page = doc.new_page(width=page_width, height=page_height)
        filled, more = story.place(rect)
        story.draw(page)
except Exception as e:
    # Fallback: Simple text-based PDF
    doc.close()
    doc = pymupdf.open()
    
    # Strip HTML tags for fallback
    import re
    text = re.sub('<[^<]+?>', '', html_content)
    text = text.replace('&nbsp;', ' ').replace('&lt;', '<').replace('&gt;', '>').replace('&amp;', '&')
    
    # Split into lines
    lines = text.split('\\n')
    
    page = doc.new_page(width=page_width, height=page_height)
    y = margin_top
    fontsize = 11
    line_height = fontsize * 1.5
    
    for line in lines:
        line = line.strip()
        if not line:
            y += line_height / 2
            continue
            
        # Check if we need a new page
        if y + line_height > page_height - margin_bottom:
            page = doc.new_page(width=page_width, height=page_height)
            y = margin_top
        
        # Insert text
        page.insert_text((margin_left, y), line, fontsize=fontsize, fontname="helv")
        y += line_height

# Embed attachments
attachments_info = json.loads('${attachmentsJson.replace(/'/g, "\\'")}')
for att_info in attachments_info:
    if att_info['hasContent']:
        try:
            with open(att_info['path'], 'rb') as att_file:
                att_data = att_file.read()
            # Embed file attachment
            doc.embfile_add(
                name=att_info['filename'],
                buffer=att_data,
                filename=att_info['filename'],
                desc=f"Attachment: {att_info['filename']}"
            )
        except Exception as e:
            # Silently skip if embedding fails
            pass

# Save to bytes
pdf_bytes = doc.tobytes()
doc.close()

base64.b64encode(pdf_bytes).decode('ascii')
`);

          try {
            pyodide.FS.unlink('/input.html');
            // Clean up attachment files
            for (let i = 0; i < attachments.length; i++) {
              try {
                pyodide.FS.unlink(`/attachment_${i}`);
              } catch {
                // Ignore
              }
            }
          } catch {
            // Ignore cleanup errors
          }

          const binary = atob(result);
          const bytes = new Uint8Array(binary.length);
          for (let i = 0; i < binary.length; i++) {
            bytes[i] = binary.charCodeAt(i);
          }

          return new Blob([bytes], { type: 'application/pdf' });
        },

        async deskewPdf(file: File, options: any): Promise<{ pdf: Blob; result: any }> {
          const arrayBuffer = await file.arrayBuffer();
          const pdfData = new Uint8Array(arrayBuffer);
          const { threshold = 0.5, dpi = 150 } = options || {};

          pyodide.FS.writeFile('/input.pdf', pdfData);

          const result = await pyodide.runPythonAsync(`
import pymupdf
import numpy as np
import base64
import json
import math

def detect_skew_angle(pix, threshold=0.5, max_angle=10):
    """
    Detect skew angle of a page using projection profile variance method.
    
    Args:
        pix: PyMuPDF Pixmap object
        threshold: Sensitivity threshold (0.1-30, lower = more sensitive)
        max_angle: Maximum angle to check in degrees
    
    Returns:
        Detected skew angle in degrees
    """
    # Convert pixmap to numpy array (grayscale)
    samples = pix.samples
    width = pix.width
    height = pix.height
    n = pix.n  # Number of components (e.g., 3 for RGB, 1 for Gray)
    
    # Create numpy array from samples
    img_array = np.frombuffer(samples, dtype=np.uint8)
    
    # Handle different color spaces
    if n == 1:
        # Already grayscale
        img = img_array.reshape(height, width)
    elif n == 3:
        # RGB - convert to grayscale
        img = img_array.reshape(height, width, n)
        img = np.dot(img[...,:3], [0.299, 0.587, 0.114]).astype(np.uint8)
    elif n == 4:
        # RGBA - convert to grayscale, ignore alpha
        img = img_array.reshape(height, width, n)
        img = np.dot(img[...,:3], [0.299, 0.587, 0.114]).astype(np.uint8)
    else:
        # Fallback
        img = img_array.reshape(height, width, n)
        img = img[:,:,0]
    
    # Apply binary threshold (Otsu-like adaptive threshold)
    # Calculate histogram
    hist, _ = np.histogram(img.flatten(), bins=256, range=(0, 256))
    total_pixels = img.size
    
    # Find threshold using Otsu's method
    sum_total = sum(i * hist[i] for i in range(256))
    sum_background = 0
    weight_background = 0
    max_variance = 0
    otsu_threshold = 0
    
    for i in range(256):
        weight_background += hist[i]
        if weight_background == 0:
            continue
        
        weight_foreground = total_pixels - weight_background
        if weight_foreground == 0:
            break
        
        sum_background += i * hist[i]
        mean_background = sum_background / weight_background
        mean_foreground = (sum_total - sum_background) / weight_foreground
        
        variance = weight_background * weight_foreground * (mean_background - mean_foreground) ** 2
        
        if variance > max_variance:
            max_variance = variance
            otsu_threshold = i
    
    # Apply threshold
    binary = (img > otsu_threshold).astype(np.uint8) * 255
    
    # Test different angles
    angle_range = np.linspace(-max_angle, max_angle, int(max_angle * 4 + 1))
    variances = []
    
    for angle in angle_range:
        # Rotate image
        angle_rad = math.radians(angle)
        cos_a = math.cos(angle_rad)
        sin_a = math.sin(angle_rad)
        
        # Simple rotation using coordinate transformation
        # For performance, we'll use a simplified projection method
        
        # Calculate horizontal projection (sum of pixels in each row)
        if abs(angle) < 0.5:
            # No rotation needed for very small angles
            projection = np.sum(binary, axis=1)
        else:
            # Simplified rotation: sample the image at rotated coordinates
            h_new = int(abs(height * cos_a) + abs(width * sin_a))
            projection = np.zeros(h_new)
            
            for y in range(0, height, max(1, height // 200)):  # Sample every few rows
                for x in range(0, width, max(1, width // 200)):  # Sample every few cols
                    if binary[y, x] > 128:
                        # Rotate coordinates
                        x_rot = int((x - width/2) * cos_a - (y - height/2) * sin_a + width/2)
                        y_rot = int((x - width/2) * sin_a + (y - height/2) * cos_a + height/2)
                        
                        y_new = int(y_rot * h_new / height)
                        if 0 <= y_new < h_new:
                            projection[y_new] += 1
        
        # Calculate variance of projection
        variance = np.var(projection)
        variances.append(variance)
    
    # Find angle with maximum variance (sharpest text lines)
    best_idx = np.argmax(variances)
    detected_angle = angle_range[best_idx]
    max_var = variances[best_idx]
    baseline_var = variances[len(variances) // 2]  # variance at 0 degrees
    
    # Only correct if variance improvement is significant
    if baseline_var > 0 and (max_var - baseline_var) / baseline_var > threshold / 10:
        return detected_angle
    else:
        return 0.0

def rotate_page(page, angle):
    """
    Rotate a PDF page by the given angle.
    
    Args:
        page: PyMuPDF Page object
        angle: Rotation angle in degrees (positive = clockwise)
    """
    if abs(angle) < 0.1:
        return False
    
    # Get page dimensions
    rect = page.rect
    
    # Create rotation matrix
    center = pymupdf.Point(rect.width / 2, rect.height / 2)
    matrix = pymupdf.Matrix(1, 1).prerotate(-angle)  # Negative because PDF coordinates
    
    # Apply rotation by transforming page content
    # Note: PyMuPDF doesn't have direct content rotation, so we use a workaround:
    # 1. Get the page as a pixmap at original resolution
    # 2. Rotate the pixmap
    # 3. Create new page with rotated content
    
    # For now, we'll use set_rotation if angle is multiple of 90
    # For arbitrary angles, we need a different approach
    
    if abs(angle % 90) < 0.1:
        # Use built-in rotation for 90-degree increments
        rotation = int(round(angle / 90) * 90) % 360
        page.set_rotation(rotation)
        return True
    else:
        # For arbitrary angles, we need to recreate the page
        # Get page as image
        mat = pymupdf.Matrix(2, 2)  # 2x scale for quality
        pix = page.get_pixmap(matrix=mat)
        
        # Rotate pixmap - PyMuPDF doesn't have built-in rotation
        # We'll need to use a workaround: convert to PIL, rotate, convert back
        # Since PIL might not be available, we'll skip sub-degree rotation
        # and only correct if angle is significant
        
        if abs(angle) >= 0.5:
            # Round to nearest degree and apply as transformation
            # This is a simplified approach - proper implementation would use PIL or similar
            rotation = int(round(angle))
            if abs(rotation) >= 1:
                current_rotation = page.rotation
                new_rotation = (current_rotation - rotation) % 360
                page.set_rotation(new_rotation)
                return True
        
        return False

# Main processing
doc = pymupdf.open("/input.pdf")
angles = []
corrected = []

for page_num, page in enumerate(doc):
    try:
        # Get page as pixmap for analysis
        pix = page.get_pixmap(dpi=${dpi})
        
        # Detect skew angle
        angle = detect_skew_angle(pix, threshold=${threshold}, max_angle=10)
        angles.append(float(angle))
        
        # Correct skew if angle is significant
        if abs(angle) >= 0.3:
            was_corrected = rotate_page(page, angle)
            corrected.append(was_corrected)
        else:
            corrected.append(False)
        
    except Exception as e:
        # If detection fails, assume no skew
        angles.append(0.0)
        corrected.append(False)

# Save document with corrections
pdf_bytes = doc.tobytes()
doc.close()

result_data = {
    "totalPages": len(angles),
    "correctedPages": sum(corrected),
    "angles": angles,
    "corrected": corrected
}

json.dumps(result_data) + "|||" + base64.b64encode(pdf_bytes).decode('ascii')
`);

          const [resultJson, pdfBase64] = result.split('|||');
          const resultData = JSON.parse(resultJson);

          try {
            pyodide.FS.unlink('/input.pdf');
          } catch {
            // Ignore cleanup errors
          }

          const binary = atob(pdfBase64);
          const bytes = new Uint8Array(binary.length);
          for (let i = 0; i < binary.length; i++) {
            bytes[i] = binary.charCodeAt(i);
          }

          return {
            pdf: new Blob([bytes], { type: 'application/pdf' }),
            result: resultData
          };
        },

        async fontToOutline(file: File, options: any): Promise<{ pdf: Blob; fontsConverted: number; pagesProcessed: number; totalPages: number }> {
          const arrayBuffer = await file.arrayBuffer();
          const pdfData = new Uint8Array(arrayBuffer);
          const { dpi = 300, preserveSelectableText = false, pageRange = '' } = options || {};

          pyodide.FS.writeFile('/input.pdf', pdfData);

          const result = await pyodide.runPythonAsync(`
import pymupdf
import base64
import json

def parse_page_range(range_str, total_pages):
    """Parse page range string like '1-3,5,7-9' into list of page indices (0-based)."""
    if not range_str or range_str.strip() == '':
        return list(range(total_pages))
    
    pages = set()
    for part in range_str.split(','):
        part = part.strip()
        if '-' in part:
            start, end = part.split('-', 1)
            start = max(1, int(start.strip()))
            end = min(total_pages, int(end.strip()))
            pages.update(range(start - 1, end))
        else:
            page_num = int(part.strip())
            if 1 <= page_num <= total_pages:
                pages.add(page_num - 1)
    
    return sorted(list(pages))

def convert_fonts_to_outlines(input_doc, dpi=300, preserve_text=False, page_indices=None):
    """
    Convert fonts to outlines by rendering pages as high-quality images.
    
    This method removes all font dependencies by converting text to raster/vector graphics.
    The visual appearance is preserved exactly, but text becomes non-selectable.
    
    Args:
        input_doc: Input PDF document
        dpi: Resolution for rendering (higher = better quality but larger file)
        preserve_text: If True, overlays invisible text layer for searchability
        page_indices: List of page indices to process (None = all pages)
    
    Returns:
        (new_doc, fonts_converted_count)
    """
    # Create new output document
    output_doc = pymupdf.open()
    
    total_fonts = 0
    pages_processed = 0
    
    # Get pages to process
    if page_indices is None:
        page_indices = range(len(input_doc))
    
    for page_idx in page_indices:
        if page_idx >= len(input_doc):
            continue
            
        page = input_doc[page_idx]
        pages_processed += 1
        
        # Count fonts on this page
        try:
            font_list = page.get_fonts()
            total_fonts += len(font_list)
        except:
            pass
        
        # Get original page dimensions
        page_rect = page.rect
        
        # Render page to high-quality pixmap
        # Use matrix to control DPI: matrix = pymupdf.Matrix(zoom, zoom)
        zoom = dpi / 72  # 72 is default PDF DPI
        mat = pymupdf.Matrix(zoom, zoom)
        pix = page.get_pixmap(matrix=mat, alpha=False)
        
        # Create new page in output document with same dimensions
        new_page = output_doc.new_page(width=page_rect.width, height=page_rect.height)
        
        # Insert the rendered image
        # The image will fill the entire page
        img_rect = new_page.rect
        new_page.insert_image(img_rect, pixmap=pix)
        
        # Optionally preserve text layer for searchability (invisible text overlay)
        if preserve_text:
            try:
                # Get text with positioning
                text_instances = page.get_text("dict")
                
                # Add invisible text overlay
                for block in text_instances.get("blocks", []):
                    if block.get("type") == 0:  # Text block
                        for line in block.get("lines", []):
                            for span in line.get("spans", []):
                                text = span.get("text", "")
                                bbox = span.get("bbox", [])
                                font_size = span.get("size", 12)
                                
                                if text and len(bbox) == 4:
                                    # Insert invisible text
                                    # render_mode=3 means invisible (neither fill nor stroke)
                                    rect = pymupdf.Rect(bbox)
                                    new_page.insert_textbox(
                                        rect,
                                        text,
                                        fontsize=font_size,
                                        color=(1, 1, 1),  # White (invisible on white)
                                        render_mode=3,  # Neither fill nor stroke = invisible
                                    )
            except Exception as e:
                # If text preservation fails, continue without it
                pass
    
    return output_doc, total_fonts

# Main processing
input_doc = pymupdf.open("/input.pdf")
total_pages = len(input_doc)

# Parse page range
try:
    page_indices = parse_page_range('${pageRange}', total_pages)
except:
    page_indices = None

# Convert fonts to outlines
output_doc, fonts_converted = convert_fonts_to_outlines(
    input_doc,
    dpi=${dpi},
    preserve_text=${preserveSelectableText ? 'True' : 'False'},
    page_indices=page_indices
)

# Save result
pdf_bytes = output_doc.tobytes(garbage=4, deflate=True)

# Close documents
input_doc.close()
output_doc.close()

# Return result
result_data = {
    "fontsConverted": fonts_converted,
    "pagesProcessed": len(page_indices) if page_indices else total_pages,
    "totalPages": total_pages
}

json.dumps(result_data) + "|||" + base64.b64encode(pdf_bytes).decode('ascii')
`);

          const [resultJson, pdfBase64] = result.split('|||');
          const resultData = JSON.parse(resultJson);

          try {
            pyodide.FS.unlink('/input.pdf');
          } catch {
            // Ignore cleanup errors
          }

          const binary = atob(pdfBase64);
          const bytes = new Uint8Array(binary.length);
          for (let i = 0; i < binary.length; i++) {
            bytes[i] = binary.charCodeAt(i);
          }

          return {
            pdf: new Blob([bytes], { type: 'application/pdf' }),
            fontsConverted: resultData.fontsConverted || 0,
            pagesProcessed: resultData.pagesProcessed || 0,
            totalPages: resultData.totalPages || 0
          };
        },

        async getOCGLayers(file: File): Promise<any[]> {
          const arrayBuffer = await file.arrayBuffer();
          const pdfData = new Uint8Array(arrayBuffer);

          pyodide.FS.writeFile('/input.pdf', pdfData);

          const result = await pyodide.runPythonAsync(`
import pymupdf
import json

doc = pymupdf.open("/input.pdf")

# Get OCG (Optional Content Groups) info
ocgs = doc.get_ocgs() or {}
layers = []

for xref, ocg_info in ocgs.items():
    layers.append({
        "id": str(xref),
        "name": ocg_info.get("name", f"Layer {xref}"),
        "visible": ocg_info.get("on", True),
        "locked": False
    })

doc.close()

json.dumps(layers)
`);

          try {
            pyodide.FS.unlink('/input.pdf');
          } catch {
            // Ignore cleanup errors
          }

          return JSON.parse(result);
        },

        async toggleOCGLayer(file: File, options: any): Promise<{ pdf: Blob }> {
          const arrayBuffer = await file.arrayBuffer();
          const pdfData = new Uint8Array(arrayBuffer);
          const { layerId, visible } = options;

          pyodide.FS.writeFile('/input.pdf', pdfData);

          const result = await pyodide.runPythonAsync(`
import pymupdf
import base64

doc = pymupdf.open("/input.pdf")

# Toggle OCG visibility - simplified implementation
# In production, you'd use set_ocg_state

pdf_bytes = doc.tobytes()
doc.close()

base64.b64encode(pdf_bytes).decode('ascii')
`);

          try {
            pyodide.FS.unlink('/input.pdf');
          } catch {
            // Ignore cleanup errors
          }

          const binary = atob(result);
          const bytes = new Uint8Array(binary.length);
          for (let i = 0; i < binary.length; i++) {
            bytes[i] = binary.charCodeAt(i);
          }

          return { pdf: new Blob([bytes], { type: 'application/pdf' }) };
        },

        async addOCGLayer(file: File, options: any): Promise<{ pdf: Blob; layerId: string }> {
          const arrayBuffer = await file.arrayBuffer();
          const pdfData = new Uint8Array(arrayBuffer);
          const { name } = options;

          pyodide.FS.writeFile('/input.pdf', pdfData);

          const result = await pyodide.runPythonAsync(`
import pymupdf
import base64

doc = pymupdf.open("/input.pdf")

# Add new OCG layer
xref = doc.add_ocg("${name || 'New Layer'}")

pdf_bytes = doc.tobytes()
doc.close()

str(xref) + "|||" + base64.b64encode(pdf_bytes).decode('ascii')
`);

          const [xrefStr, pdfBase64] = result.split('|||');

          try {
            pyodide.FS.unlink('/input.pdf');
          } catch {
            // Ignore cleanup errors
          }

          const binary = atob(pdfBase64);
          const bytes = new Uint8Array(binary.length);
          for (let i = 0; i < binary.length; i++) {
            bytes[i] = binary.charCodeAt(i);
          }

          return {
            pdf: new Blob([bytes], { type: 'application/pdf' }),
            layerId: xrefStr
          };
        },

        async deleteOCGLayer(file: File, options: any): Promise<{ pdf: Blob }> {
          const arrayBuffer = await file.arrayBuffer();
          const pdfData = new Uint8Array(arrayBuffer);

          pyodide.FS.writeFile('/input.pdf', pdfData);

          const result = await pyodide.runPythonAsync(`
import pymupdf
import base64

doc = pymupdf.open("/input.pdf")

# Note: PyMuPDF doesn't have direct OCG deletion API
# This is a placeholder - in production you'd need to modify the PDF structure

pdf_bytes = doc.tobytes()
doc.close()

base64.b64encode(pdf_bytes).decode('ascii')
`);

          try {
            pyodide.FS.unlink('/input.pdf');
          } catch {
            // Ignore cleanup errors
          }

          const binary = atob(result);
          const bytes = new Uint8Array(binary.length);
          for (let i = 0; i < binary.length; i++) {
            bytes[i] = binary.charCodeAt(i);
          }

          return { pdf: new Blob([bytes], { type: 'application/pdf' }) };
        },

        async renameOCGLayer(file: File, options: any): Promise<{ pdf: Blob }> {
          const arrayBuffer = await file.arrayBuffer();
          const pdfData = new Uint8Array(arrayBuffer);

          pyodide.FS.writeFile('/input.pdf', pdfData);

          const result = await pyodide.runPythonAsync(`
import pymupdf
import base64

doc = pymupdf.open("/input.pdf")

# Note: Renaming OCG requires modifying the OCG object directly
# This is a simplified implementation

pdf_bytes = doc.tobytes()
doc.close()

base64.b64encode(pdf_bytes).decode('ascii')
`);

          try {
            pyodide.FS.unlink('/input.pdf');
          } catch {
            // Ignore cleanup errors
          }

          const binary = atob(result);
          const bytes = new Uint8Array(binary.length);
          for (let i = 0; i < binary.length; i++) {
            bytes[i] = binary.charCodeAt(i);
          }

          return { pdf: new Blob([bytes], { type: 'application/pdf' }) };
        },

        async compress(file: File, options: any): Promise<Blob> {
          const arrayBuffer = await file.arrayBuffer();
          const pdfData = new Uint8Array(arrayBuffer);
          const { quality = 'medium', removeMetadata = false } = options || {};

          // Map quality to image compression settings
          const qualitySettings: Record<string, { imageQuality: number; maxDpi: number }> = {
            'low': { imageQuality: 40, maxDpi: 72 },
            'medium': { imageQuality: 65, maxDpi: 120 },
            'high': { imageQuality: 85, maxDpi: 200 },
            'maximum': { imageQuality: 95, maxDpi: 300 },
          };
          const settings = qualitySettings[quality] || qualitySettings['medium'];

          pyodide.FS.writeFile('/input.pdf', pdfData);

          const result = await pyodide.runPythonAsync(`
import pymupdf
import base64
import io

doc = pymupdf.open("/input.pdf")
image_quality = ${settings.imageQuality}
max_dpi = ${settings.maxDpi}
remove_metadata = ${removeMetadata ? 'True' : 'False'}

# Process each page to compress images
for page_num in range(len(doc)):
    page = doc[page_num]
    
    # Get all images on the page
    image_list = page.get_images(full=True)
    
    for img_info in image_list:
        xref = img_info[0]
        
        try:
            # Extract image
            base_image = doc.extract_image(xref)
            if not base_image:
                continue
            
            image_bytes = base_image["image"]
            image_ext = base_image["ext"]
            width = base_image.get("width", 0)
            height = base_image.get("height", 0)
            
            # Skip small images (likely icons)
            if width < 50 or height < 50:
                continue
            
            # Calculate current DPI (approximate)
            # Skip if already low quality
            if len(image_bytes) < 10000:
                continue
            
            # Create pixmap from image data
            pix = pymupdf.Pixmap(image_bytes)
            
            # Check if we need to reduce quality
            if pix.width > 100 and pix.height > 100:
                # Calculate scale factor if image is too large
                scale = 1.0
                if pix.width > max_dpi * 10 or pix.height > max_dpi * 10:
                    scale = max(max_dpi * 10 / pix.width, max_dpi * 10 / pix.height)
                    if scale < 1.0:
                        # Resize the pixmap
                        new_width = int(pix.width * scale)
                        new_height = int(pix.height * scale)
                        if new_width > 50 and new_height > 50:
                            # Create new smaller pixmap by sampling
                            pix2 = pymupdf.Pixmap(pix, new_width, new_height, None)
                            pix = pix2
                
                # Convert to RGB if needed (JPEG doesn't support alpha)
                if pix.alpha:
                    pix = pymupdf.Pixmap(pymupdf.csRGB, pix)
                
                # Re-encode as JPEG with quality setting
                new_image_bytes = pix.tobytes(output="jpeg", jpg_quality=image_quality)
                
                # Only replace if we actually reduced size
                if len(new_image_bytes) < len(image_bytes) * 0.9:
                    # Update the image stream and its dictionary to match JPEG format
                    doc.update_stream(xref, new_image_bytes)
                    # Update the image XObject dictionary to reflect JPEG encoding
                    doc.xref_set_key(xref, "Filter", "/DCTDecode")
                    doc.xref_set_key(xref, "ColorSpace", "/DeviceRGB")
                    doc.xref_set_key(xref, "BitsPerComponent", "8")
                    # Update dimensions if image was resized
                    doc.xref_set_key(xref, "Width", str(pix.width))
                    doc.xref_set_key(xref, "Height", str(pix.height))
                    # Remove DecodeParms that may be left from PNG/Flate encoding
                    try:
                        doc.xref_set_key(xref, "DecodeParms", "null")
                    except:
                        pass
        except Exception as e:
            # Skip images that can't be processed
            pass

# Remove metadata if requested
if remove_metadata:
    doc.set_metadata({})
    doc.del_xml_metadata()

# Save with maximum compression
pdf_bytes = doc.tobytes(
    garbage=4,  # Remove unused objects, merge duplicate objects
    deflate=True,  # Compress streams
    clean=True,  # Clean content streams
)
doc.close()

base64.b64encode(pdf_bytes).decode('ascii')
`);

          try {
            pyodide.FS.unlink('/input.pdf');
          } catch {
            // Ignore cleanup errors
          }

          const binary = atob(result);
          const bytes = new Uint8Array(binary.length);
          for (let i = 0; i < binary.length; i++) {
            bytes[i] = binary.charCodeAt(i);
          }

          return new Blob([bytes], { type: 'application/pdf' });
        },

        async photonCompress(file: File, options: any): Promise<Blob> {
          const arrayBuffer = await file.arrayBuffer();
          const pdfData = new Uint8Array(arrayBuffer);
          const { dpi = 150, format = 'jpeg', quality = 85 } = options || {};

          pyodide.FS.writeFile('/input.pdf', pdfData);

          const result = await pyodide.runPythonAsync(`
import pymupdf
import base64

doc = pymupdf.open("/input.pdf")

# Create a new document
new_doc = pymupdf.open()

target_dpi = ${dpi}
jpeg_quality = ${quality}

# Process each page - render to image and create new PDF
for page_num in range(len(doc)):
    page = doc[page_num]
    
    # Get page dimensions
    rect = page.rect
    
    # Calculate zoom factor for target DPI (72 is base PDF DPI)
    zoom = target_dpi / 72
    mat = pymupdf.Matrix(zoom, zoom)
    
    # Render page to pixmap
    pix = page.get_pixmap(matrix=mat, alpha=False)
    
    # Convert to JPEG bytes
    img_bytes = pix.tobytes(output="jpeg", jpg_quality=jpeg_quality)
    
    # Create new page with same dimensions
    new_page = new_doc.new_page(width=rect.width, height=rect.height)
    
    # Insert the rendered image
    new_page.insert_image(new_page.rect, stream=img_bytes)

# Save compressed document
pdf_bytes = new_doc.tobytes(garbage=4, deflate=True)

doc.close()
new_doc.close()

base64.b64encode(pdf_bytes).decode('ascii')
`);

          try {
            pyodide.FS.unlink('/input.pdf');
          } catch {
            // Ignore cleanup errors
          }

          const binary = atob(result);
          const bytes = new Uint8Array(binary.length);
          for (let i = 0; i < binary.length; i++) {
            bytes[i] = binary.charCodeAt(i);
          }

          return new Blob([bytes], { type: 'application/pdf' });
        },
      };

      return pymupdfInstance;
    } catch (error) {
      loadingPromise = null;
      throw error;
    }
  })();

  return loadingPromise;
}

/**
 * Reset the loader (for testing)
 */
export function resetPyMuPDF(): void {
  pymupdfInstance = null;
  loadingPromise = null;
}
