// PDFCraft reading order is independent of the interface/document language.
(function () {
  const button = document.getElementById('spreadRtl');
  const viewer = document.getElementById('viewer');
  // This distribution bundles its Fluent catalogs inside viewer.js. Keep this
  // extension's labels separate so updating the upstream viewer doesn't erase them.
  const labels = {
    zh: ['从右向左排列双页', '从右向左排列双页（水平滚动时不可用）'],
    ar: ['ترتيب الصفحات من اليمين إلى اليسار', 'غير متاح في التمرير الأفقي'],
    he: ['סדר עמודים מימין לשמאל', 'לא זמין בגלילה אופקית'],
    en: ['Right-to-left page order', 'Read spread pages right to left (unavailable in horizontal scrolling)'],
  };
  const label = labels[navigator.language.split('-')[0]] || labels.en;
  button.querySelector('span').textContent = label[0];
  button.title = label[1];
  const key = 'pdfcraft.spreadRtl';
  let rtl = false;
  try { rtl = localStorage.getItem(key) === 'true'; } catch (_) { /* Storage may be disabled. */ }

  function apply() {
    viewer.classList.toggle('spreadRtl', rtl);
    button.classList.toggle('toggled', rtl);
    button.setAttribute('aria-pressed', String(rtl));
  }
  function syncAvailability() {
    // PDF.js 5.x horizontal scrolling assumes ascending page positions within a spread.
    // Keep its existing horizontal layout until that navigation path supports RTL pairs.
    button.disabled = viewer.classList.contains('scrollHorizontal');
  }
  new MutationObserver(syncAvailability).observe(viewer, { attributes: true, attributeFilter: ['class'] });
  syncAvailability();
  apply();
  button.addEventListener('click', function () {
    rtl = !rtl;
    apply();
    try { localStorage.setItem(key, String(rtl)); } catch (_) { /* Keep session choice. */ }
    const app = window.PDFViewerApplication;
    if (app && app.pdfDocument) {
      const pageNumber = app.pdfViewer.currentPageNumber;
      // Recompute fit/visibility and keep the active page visible after swapping sides.
      window.dispatchEvent(new Event('resize'));
      app.pdfViewer.scrollPageIntoView({ pageNumber });
      app.pdfViewer.update();
    }
  });
})();
