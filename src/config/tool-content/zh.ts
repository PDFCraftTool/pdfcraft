/**
 * Chinese Tool Content
 * Requirements: 3.1 - Multi-language support
 * 
 * 中文工具内容 - 包含所有67个PDF工具的详细描述、使用说明、用例和常见问题
 */

import type { ToolContent } from '@/types/tool';

export const toolContentZh: Record<string, ToolContent> = {
  // ==================== 热门工具 ====================
  'pdf-multi-tool': {
    title: 'PDF多功能工具',
    metaDescription: '一站式PDF编辑器：合并、拆分、整理、删除、旋转和提取页面，功能强大。',
    keywords: ['pdf多功能工具', 'pdf编辑器', '合并pdf', '拆分pdf', '整理pdf', '一站式pdf'],
    description: `
      <p>PDF多功能工具是您处理所有PDF页面管理任务的综合解决方案。这款强大的一站式工具将多种PDF操作整合到一个直观的界面中，为您节省时间和精力。</p>
      <p>无论您需要合并多个文档、将大型PDF拆分成小文件、重新整理页面、删除不需要的内容、旋转页面还是提取特定部分，这个工具都能轻松处理，无需在不同应用程序之间切换。</p>
      <p>所有处理都直接在您的浏览器中完成，确保您的文档保持私密和安全。不会将任何文件上传到服务器。</p>
    `,
    howToUse: [
      { step: 1, title: '上传PDF文件', description: '将PDF文件拖放到上传区域，或点击浏览并从设备中选择文件。' },
      { step: 2, title: '选择操作', description: '从可用操作中选择：合并、拆分、整理、删除页面、旋转、添加空白页或提取页面。' },
      { step: 3, title: '配置选项', description: '根据所选操作调整设置，如页面范围、旋转角度或合并顺序。' },
      { step: 4, title: '处理并下载', description: '点击处理按钮，操作完成后下载修改后的PDF。' },
    ],
    useCases: [
      { title: '文档准备', description: '通过删除不必要的页面、重新排序内容和合并多个文件来准备提交文档。', icon: 'file-check' },
      { title: '报告汇编', description: '合并多个报告部分，添加封面页，将章节整理成一个专业文档。', icon: 'book-open' },
      { title: '档案管理', description: '将大型档案文件拆分成可管理的部分，提取相关页面，重新整理历史文档。', icon: 'archive' },
    ],
    faq: [
      { question: '一次可以处理多少个PDF？', answer: '您可以同时上传和处理最多10个PDF文件，合并最大大小为500MB。' },
      { question: '书签会被保留吗？', answer: '是的，合并PDF时，工具会保留现有书签，并可选择将它们合并成统一的书签结构。' },
      { question: '有页数限制吗？', answer: '没有严格的页数限制。该工具可以处理数百页的文档，但非常大的文件可能需要更长的处理时间。' },
    ],
  },

  'merge-pdf': {
    title: '合并 PDF 与多格式文件',
    metaDescription: '将多个 PDF、图片（JPG/PNG/WebP）、Office 文档（Word/Excel/PPT）和文本文件快速合并为一个统一的 PDF 文档。免费在线文件合并器，支持拖拽排序与书签保留。',
    keywords: ['合并pdf', '组合文件', '图片合并为pdf', 'word合并为pdf', 'pdf合并器', '拼接pdf', '多格式合并', 'combine files'],
    description: `
      <p>合并工具允许您快速轻松地将多个 PDF 文档、各类图片（JPG、PNG、WebP、BMP 等）、Office 文档（Word、Excel、PowerPoint）以及纯文本文件整合成一个连贯统一的 PDF 文件。无论是汇总商业报告、整合图文资料、合并扫描收据，还是组装汇报幻灯片，都能一站式搞定。</p>
      <p>只需上传文件，使用拖放功能按所需顺序直观排列，系统会在本地自动将图片与文档转换为高质量 PDF 页面并无缝拼接。该工具完整保留原图画质，并可智能为每个子文件生成目录书签以便于查阅。</p>
      <p>所有转换与合并操作均在您的浏览器本地沙箱中安全运行，无需上传第三方服务器，确保私密文档绝对安全。</p>
    `,
    howToUse: [
      { step: 1, title: '上传多种格式文件', description: '将 PDF、图片（JPG/PNG）、Office 文档（Word/Excel/PPT）或文本文件拖放到上传区域，支持混选添加。' },
      { step: 2, title: '拖拽排列顺序', description: '通过拖放卡片调整文件先后顺序，图片文件支持实时缩略图预览。' },
      { step: 3, title: '合并并下载 PDF', description: '点击合并按钮，系统会自动将所有内容转换为页面并组合成单一 PDF，即可立即下载。' },
    ],
    useCases: [
      { title: '图文混排归档', description: '将 PDF 合同、身份证件图片、收据发票与说明文档一次性整合为一份完整的归档文件。', icon: 'briefcase' },
      { title: '汇总多格式报告', description: '将 Word 分析报告、Excel 财务表格和 PPT 幻灯片一键拼接进同一个 PDF 便于呈阅。', icon: 'file-text' },
      { title: '组装设计与作品集', description: '将多张设计效果图（JPG/PNG）与文字说明组合为高规格的作品集 PDF。', icon: 'image' },
    ],
    faq: [
      { question: '支持合并哪些类型的文件？', answer: '支持标准 PDF 文件、常见图片（JPG、PNG、WebP、BMP、SVG 等）、Office 文档（Word .docx/.doc、Excel .xlsx/.xls、PowerPoint .pptx/.ppt）以及纯文本（.txt、.md）。' },
      { question: '可以合并多少个文件？', answer: '您可以一次合并最多 100 个文件，总大小最高可达 500MB。' },
      { question: '非 PDF 文件合并后的质量如何？', answer: '系统会按自适应页面和原始高分辨率渲染图片和文档，不进行破坏性压缩，确保打印与阅读清晰度。' },
      { question: '可以合并受密码保护的 PDF 吗？', answer: '受密码保护的 PDF 需要先解密。请使用我们的解密 PDF 工具在合并前移除密码。' },
    ],
  },

  'rotate-custom': {
    title: '自定义旋转 PDF',
    metaDescription: '按任意角度旋转PDF页面。精确的自定义旋转，用于校正扫描文档。',
    keywords: ['自定义旋转pdf', 'pdf旋转任意角度', '校正pdf', 'pdf歪斜校正'],
    description: `
      <p>自定义旋转 PDF 工具让您可以精确控制PDF页面的方向。与仅支持90度增量的标准旋转工具不同，此工具允许您按任何特定角度旋转页面。</p>
      <p>非常适合校正扫描时稍微倾斜的文档，或将图表和图纸调整到正确的方向。您可以校正单个页面或对整个文档应用相同的旋转。</p>
      <p>所有处理都在您的浏览器本地进行，确保您的文档在实现完美对齐的同时保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上传PDF文件', description: '上传包含需要旋转页面的PDF文件。' },
      { step: 2, title: '设置旋转角度', description: '为每个页面输入精确的旋转度数，或为所有页面设置批量角度。' },
      { step: 3, title: '预览和调整', description: '使用实时预览确保页面完美对齐。' },
      { step: 4, title: '应用并下载', description: '点击旋转应用更改并下载校正后的PDF。' },
    ],
    useCases: [
      { title: '扫描文档', description: '校正扫描时进纸倾斜的页面。', icon: 'scan' },
      { title: '技术图纸', description: '精确调整技术图表和平面图的方向。', icon: 'ruler' },
      { title: '创意排版', description: '通过将页面旋转到特定艺术角度来创建独特的布局。', icon: 'pen-tool' },
    ],
    faq: [
      { question: '可以按小数旋转吗，例如45.5度？', answer: '目前工具支持整数度数，但我们正在努力启用小数精度。' },
      { question: '这会影响页面内容吗？', answer: '内容会被视觉旋转。页面大小会自动调整以适应旋转后的内容。' },
      { question: '可以只旋转一个页面吗？', answer: '是的，您可以为任何单个页面设置自定义旋转角度，同时保持其他页面不变。' },
    ],
  },

  'grid-combine': {
    title: '网格组合 PDF',
    metaDescription: '将多个PDF文件组合到单页面上的灵活网格布局中。每页排列2、4、6、9个或更多PDF，支持边框和间距。',
    keywords: ['网格组合', '合并pdf网格', 'pdf拼贴', '多pdf一页', 'pdf n-up', '组合pdf网格'],
    description: `
      <p>网格组合工具提供了一种将多个独立的PDF文件合并到单页面上的独特方式。与简单追加页面的标准“合并PDF”工具或重新排列单个文档页面的“N-Up”工具不同，网格组合获取多个输入文件并将它们并排排列在可自定义的网格布局中。</p>
      <p>您可以选择各种网格配置，如2x1、2x2、3x3等。这非常适合比较多个文档、从不同来源创建讲义或打印多个文件的紧凑版本。</p>
      <p>通过控制页面大小、方向、边距、间距和边框来自定义输出。所有处理都在您的浏览器本地进行，以实现最大的隐私保护。</p>
    `,
    howToUse: [
      { step: 1, title: '上传PDF文件', description: '上传两个或更多您想要组合的PDF文件。您可以按所需顺序重新排列它们。' },
      { step: 2, title: '选择网格布局', description: '选择您想要的网格布局（例如，2x2表示每页4个文件，3x3表示每页9个文件）。' },
      { step: 3, title: '自定义外观', description: '调整设置，如页面大小（A4、Letter）、方向、项目之间的间距和边框。' },
      { step: 4, title: '组合并下载', description: '点击“组合PDF”生成您的新网格布局文档并下载结果。' },
    ],
    useCases: [
      { title: '视觉比较', description: '将设计或文档的不同版本并排放置在单个页面上以便于比较。', icon: 'layout-grid' },
      { title: '打印讲义', description: '将多个短文档或幻灯片合并到单张纸上以节省打印成本。', icon: 'printer' },
      { title: '作品集创建', description: '在清晰、有组织的网格概览中展示多个项目文件。', icon: 'image' },
    ],
    faq: [
      { question: '这与N-Up有什么不同？', answer: 'N-Up从一个PDF中获取页面并将它们放在一张纸上。网格组合获取多个不同的PDF文件并将它们放在一张纸上。' },
      { question: '我可以组合多少个文件？', answer: '您可以根据浏览器内存组合多达100个文件，但像4x4这样的布局每页最多可容纳16个文件。' },
      { question: '我可以添加边框吗？', answer: '是的，您可以在每个PDF文件周围添加边框并自定义边框颜色。' },
    ],
  },

  'split-pdf': {
    title: '拆分PDF',
    metaDescription: '将PDF文件拆分成多个文档。提取特定页面或按页面范围分割。',
    keywords: ['拆分pdf', '分割pdf', '分离pdf', '提取页面', 'pdf拆分器'],
    description: `
      <p>拆分PDF使您能够将单个PDF文档分成多个较小的文件。这非常适合提取特定章节、分离合并的文档或从多页PDF创建单独的文件。</p>
      <p>您可以按特定页面范围拆分、提取单个页面或按固定间隔分割文档。该工具提供页面的可视预览，使您能够轻松选择所需的内容。</p>
      <p>所有处理都在您的浏览器本地完成，确保您的文档保持私密和安全。</p>
    `,
    howToUse: [
      { step: 1, title: '上传PDF文件', description: '拖放您的PDF文件或点击浏览并选择要拆分的文件。' },
      { step: 2, title: '选择拆分方式', description: '选择拆分方式：按页面范围、提取特定页面或按固定间隔拆分。' },
      { step: 3, title: '定义页面范围', description: '输入要提取的页码或范围（例如：1-5, 8, 10-15）。' },
      { step: 4, title: '拆分并下载', description: '点击拆分创建新的PDF文件，单独下载或作为ZIP压缩包下载。' },
    ],
    useCases: [
      { title: '提取章节', description: '将书籍或手册拆分成单独的章节，便于阅读或分发。', icon: 'book' },
      { title: '分离合并扫描', description: '将批量扫描的文档分成每个原始文档的单独文件。', icon: 'copy' },
      { title: '创建讲义', description: '从演示文稿中提取特定幻灯片或页面以创建重点讲义。', icon: 'presentation' },
    ],
    faq: [
      { question: '可以将PDF拆分成单独的页面吗？', answer: '是的，您可以通过选择"每页拆分"选项将PDF拆分成单独的单页文件。' },
      { question: '拆分时书签会怎样？', answer: '落在提取页面范围内的书签会保留在生成的PDF文件中。' },
      { question: '可以拆分受密码保护的PDF吗？', answer: '您需要先使用我们的解密PDF工具解密PDF，然后再进行拆分。' },
    ],
  },

  'compress-pdf': {
    title: '压缩PDF',
    metaDescription: '减小PDF文件大小同时保持质量。免费在线PDF压缩器，生成更小的文件。',
    keywords: ['压缩pdf', '减小pdf大小', 'pdf压缩器', '缩小pdf', '优化pdf'],
    description: `
      <p>压缩PDF在保持可接受质量的同时减小PDF文档的文件大小。这对于电子邮件附件、网络上传或节省存储空间至关重要。</p>
      <p>该工具提供多种压缩级别，以平衡文件大小减少和质量保持。您可以选择激进压缩以获得最大的大小减少，或选择轻度压缩以保持更高的质量。</p>
      <p>所有压缩都在您的浏览器中进行，确保您的文档永远不会离开您的设备。</p>
    `,
    howToUse: [
      { step: 1, title: '上传PDF文件', description: '拖放您的PDF文件或点击选择要压缩的文档。' },
      { step: 2, title: '选择压缩级别', description: '选择您偏好的压缩级别：低（最佳质量）、中（平衡）或高（最小文件）。' },
      { step: 3, title: '压缩并下载', description: '点击压缩以减小文件大小，然后下载优化后的PDF。' },
    ],
    useCases: [
      { title: '电子邮件附件', description: '减小PDF大小以满足电子邮件附件限制并确保更快的发送。', icon: 'mail' },
      { title: '网络发布', description: '优化PDF以供网络下载，提高页面加载时间和用户体验。', icon: 'globe' },
      { title: '存储优化', description: '压缩存档文档以节省磁盘空间同时保持可访问性。', icon: 'hard-drive' },
    ],
    faq: [
      { question: '可以减少多少文件大小？', answer: '压缩结果因PDF内容而异。图像密集的PDF通常可以减少50-80%，而纯文本PDF可能减少较少。' },
      { question: '压缩会影响文本质量吗？', answer: '文本在所有压缩级别下都保持清晰可读。只有图像和图形会受到压缩影响。' },
      { question: '可以一次压缩多个PDF吗？', answer: '是的，您可以同时上传和压缩最多10个PDF文件。' },
    ],
  },

  'edit-pdf': {
    title: '编辑PDF',
    metaDescription: '在线直接编辑PDF正文文本与图像。支持点击段落原位修改、实时自动排版折行，同时保留经典批注与高亮标记。',
    keywords: ['编辑pdf', 'pdf文本编辑', '原位修改pdf', 'pdf直接编辑', 'pdf修改文字', 'pdf正文修改', 'pdf编辑器'],
    description: `
      <p>全新的直接编辑模式采用先进的 PDFium 原生引擎，支持像 Word 一样直接点击 PDF 正文段落进行原位编辑与文字修改，并具备实时智能折行（Live Reflow）排版能力。</p>
      <p>同时提供右侧属性控制坞（文本字号、颜色、行高、对齐方式）、图片原位替换与翻转，以及全文档批量查找替换功能。如需签名或标注审阅，也可随时一键切换至经典批注模式。</p>
      <p>全流程纯本地客户端安全处理，无需上传云端服务器，保障您的文档隐私与安全。</p>
    `,
    howToUse: [
      { step: 1, title: '上传PDF文件', description: '拖放或选择需要编辑正文的 PDF 文件。' },
      { step: 2, title: '原位点击修改正文', description: '直接点击或双击 PDF 上的文字段落即可光标输入修改，支持实时智能换行。' },
      { step: 3, title: '样式调节与图像编辑', description: '在右侧检查器调整字体样式、段落对齐，或右键点击图片进行替换、翻转。' },
      { step: 4, title: '保存并下载', description: '点击右上方“保存修改”按钮，即可导出完美保持原始排版的新 PDF。' },
    ],
    useCases: [
      { title: '直接修改正文错误', description: '无需重新导出源文件，直接在 PDF 原位更正错别字、日期或金额。', icon: 'edit-3' },
      { title: '全文档查找替换', description: '跨页面批量查找关键词并一键原位替换，大幅提升合同修改效率。', icon: 'search' },
      { title: '图片替换与排版', description: '一键替换 PDF 中的老旧图片、印章或 Logo，保持版面规范整齐。', icon: 'image' },
    ],
    faq: [
      { question: '可以直接修改PDF现有的文字吗？', answer: '是的！本工具现已全面支持原位正文直接编辑。点击任意正文段落即可直接光标输入编辑，系统会自动计算字距并进行实时排版重排。' },
      { question: '如何进行经典的批注与签名？', answer: '您可以随时点击编辑器顶部的“模式切换”药丸按钮，无缝切换到经典批注模式添加画笔、图章、形状与文本框。' },
      { question: '我的文件安全吗？', answer: '非常安全。所有核心解析、文本重排和 PDF 保存均在您的浏览器本地 WASM 引擎中运行，文档不会上传至任何远程服务器。' },
    ],
  },

  'jpg-to-pdf': {
    title: 'JPG转PDF',
    metaDescription: '将JPG图像转换为PDF。将多个JPG文件合并成一个PDF文档。',
    keywords: ['jpg转pdf', 'jpeg转pdf', '转换jpg', '图像转pdf', '照片转pdf'],
    description: `
      <p>JPG转PDF可以快速轻松地将您的JPEG图像转换为PDF文档。无论您有单张照片还是多张图像，这个工具都能创建专业外观的PDF文件。</p>
      <p>您可以将多个JPG文件合并成一个PDF，按任意顺序排列，并自定义页面大小和方向。转换过程保留图像质量，同时创建紧凑、可共享的PDF文件。</p>
      <p>所有转换都在您的浏览器中进行，确保您的照片保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上传JPG图像', description: '拖放您的JPG文件或点击从设备中选择图像。' },
      { step: 2, title: '排列和配置', description: '通过拖动重新排序图像，选择页面大小和方向选项。' },
      { step: 3, title: '转换并下载', description: '点击转换创建PDF并下载结果。' },
    ],
    useCases: [
      { title: '照片相册', description: '从假期照片或活动照片创建PDF相册，便于分享。', icon: 'image' },
      { title: '文档扫描', description: '将手机拍摄的文档照片转换为正式的PDF文件。', icon: 'camera' },
      { title: '作品集创建', description: '将摄影作品或设计样本编译成专业的PDF作品集。', icon: 'folder' },
    ],
    faq: [
      { question: '可以转换多少张图像？', answer: '您可以将最多100张JPG图像转换成一个PDF文档。' },
      { question: '图像质量会保留吗？', answer: '是的，图像以原始质量嵌入。您可以选择压缩它们以减小文件大小。' },
      { question: '可以为不同图像设置不同的页面大小吗？', answer: '该工具对所有页面应用统一的页面大小。每张图像都会缩放以适应所选页面大小，同时保持纵横比。' },
    ],
  },

  'sign-pdf': {
    title: '签署PDF',
    metaDescription: '为PDF文档添加电子签名。绘制、输入或上传您的签名。',
    keywords: ['签署pdf', '电子签名', '电子签章', 'pdf签名', '数字签名'],
    description: `
      <p>签署PDF允许您快速安全地为PDF文档添加电子签名。通过绘制、输入或上传图像创建您的签名，然后将其放置在文档的任何位置。</p>
      <p>您可以在单个文档中添加多个签名，精确调整大小和位置，并保存签名以供将来使用。该工具非常适合合同、协议、表单和任何需要签名的文档。</p>
      <p>所有签名操作都在您的浏览器本地进行，确保您的文档和签名保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上传PDF文件', description: '拖放您的PDF文件或点击选择需要签名的文档。' },
      { step: 2, title: '创建签名', description: '用鼠标或触摸绘制签名，输入姓名生成签名，或上传签名图像。也可以扫描写在纸上的签名照片。' },
      { step: 3, title: '放置和调整', description: '点击文档放置签名，然后拖动定位和调整大小。' },
      { step: 4, title: '保存并下载', description: '点击保存应用签名并下载已签名的PDF。' },
    ],
    useCases: [
      { title: '合同签署', description: '电子签署合同和协议，无需打印和扫描。', icon: 'file-signature' },
      { title: '表单填写', description: '为申请表、同意书和官方文档添加签名。', icon: 'clipboard' },
      { title: '审批流程', description: '作为审阅和审批流程的一部分签署文档。', icon: 'check-circle' },
    ],
    faq: [
      { question: '电子签名具有法律效力吗？', answer: '电子签名在大多数国家都被法律认可。但是，某些文档可能需要特定类型的数字签名。请查阅当地法规。' },
      { question: '可以保存签名以供将来使用吗？', answer: '是的，您可以将签名保存到浏览器的本地存储中，以便在签署未来文档时快速访问。' },
      { question: '可以在一个文档中添加多个签名吗？', answer: '是的，您可以添加任意数量的签名，在任何页面上独立定位每个签名。' },
    ],
  },

  'crop-pdf': {
    title: '裁剪PDF',
    metaDescription: '裁剪PDF页面以删除边距和不需要的区域。精确修剪PDF文档。',
    keywords: ['裁剪pdf', '修剪pdf', '剪切pdf边距', '调整pdf页面大小', 'pdf裁剪器'],
    description: `
      <p>裁剪PDF允许您修剪边距并从PDF页面中删除不需要的区域。这对于删除多余的空白、聚焦特定内容区域或标准化页面尺寸非常有用。</p>
      <p>您可以统一裁剪所有页面或单独调整每个页面。可视界面准确显示将保留的内容，使您能够轻松获得精确的结果。</p>
      <p>所有裁剪操作都在您的浏览器本地进行，确保您的文档保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上传PDF文件', description: '拖放您的PDF文件或点击选择要裁剪的文档。' },
      { step: 2, title: '定义裁剪区域', description: '拖动裁剪手柄定义要保留的区域，或输入精确的尺寸。' },
      { step: 3, title: '应用到页面', description: '选择将裁剪应用到所有页面或选择特定页面进行裁剪。' },
      { step: 4, title: '裁剪并下载', description: '点击裁剪应用更改并下载裁剪后的PDF。' },
    ],
    useCases: [
      { title: '删除边距', description: '修剪扫描文档或具有大边框的PDF的过多边距。', icon: 'maximize-2' },
      { title: '聚焦内容', description: '裁剪以突出特定内容区域，删除页眉、页脚或侧边栏。', icon: 'target' },
      { title: '标准化页面', description: '通过裁剪到统一尺寸使所有页面大小相同。', icon: 'square' },
    ],
    faq: [
      { question: '裁剪会永久删除内容吗？', answer: '是的，裁剪会删除裁剪区域外的内容。请确保保留原始文件的备份。' },
      { question: '可以对不同页面进行不同的裁剪吗？', answer: '是的，您可以对单个页面或页面组应用不同的裁剪设置。' },
      { question: '裁剪会影响文本质量吗？', answer: '不会，裁剪只删除裁剪边界外的区域。剩余内容保持原始质量。' },
    ],
  },

  'extract-pages': {
    title: '提取页面',
    metaDescription: '从PDF文件中提取特定页面。选择并保存单个页面为新文档。',
    keywords: ['提取pdf页面', '保存pdf页面', '复制pdf页面', 'pdf页面提取器'],
    description: `
      <p>提取页面允许您从PDF文档中选择并保存特定页面为新文件。这非常适合提取相关部分、创建摘录或分离合并的文档。</p>
      <p>您可以提取单个页面、页面范围或多个不连续的页面。可视页面预览使您能够轻松识别和选择所需的页面。</p>
      <p>所有提取操作都在您的浏览器本地进行，确保您的文档保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上传PDF文件', description: '拖放您的PDF文件或点击选择要从中提取页面的文档。' },
      { step: 2, title: '选择页面', description: '点击页面缩略图选择它们，或在输入字段中输入页码和范围。' },
      { step: 3, title: '提取并下载', description: '点击提取创建包含所选页面的新PDF并下载。' },
    ],
    useCases: [
      { title: '创建摘录', description: '从报告或书籍中提取相关页面以创建重点参考文档。', icon: 'file-minus' },
      { title: '分享特定内容', description: '提取特定页面进行分享，无需发送整个文档。', icon: 'share-2' },
      { title: '存档重要页面', description: '提取并保存文档中的关键页面以供长期存档。', icon: 'archive' },
    ],
    faq: [
      { question: '可以提取不连续的页面吗？', answer: '是的，您可以选择任意页面组合，无论是连续的还是分散在整个文档中的。' },
      { question: '书签会保留吗？', answer: '指向提取页面的书签会保留在新文档中。' },
      { question: '可以从多个PDF中提取页面吗？', answer: '此工具一次处理一个PDF。要合并来自多个PDF的页面，请使用合并PDF工具。' },
    ],
  },

  'organize-pdf': {
    title: '整理PDF',
    metaDescription: '重新排序、复制和删除PDF页面。拖放重新整理您的文档。',
    keywords: ['整理pdf', '重新排序pdf页面', '重新排列pdf', 'pdf页面整理器'],
    description: `
      <p>整理PDF提供直观的拖放界面来重新排列PDF文档中的页面。轻松重新排序页面、复制重要部分或删除不需要的页面。</p>
      <p>可视页面缩略图使您能够轻松识别内容并按需排列页面。非常适合重组文档、创建自定义页面顺序或清理扫描文件。</p>
      <p>所有整理操作都在您的浏览器本地进行，确保您的文档保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上传PDF文件', description: '拖放您的PDF文件或点击选择要整理的文档。' },
      { step: 2, title: '重新排列页面', description: '拖动页面缩略图重新排序。根据需要点击每个页面上的复制或删除按钮。' },
      { step: 3, title: '保存并下载', description: '点击保存应用更改并下载重新整理的PDF。' },
    ],
    useCases: [
      { title: '修复页面顺序', description: '纠正扫描或合并错误的页面顺序。', icon: 'arrow-up-down' },
      { title: '创建自定义顺序', description: '为演示文稿或报告按特定顺序排列页面。', icon: 'list' },
      { title: '删除不需要的页面', description: '从文档中删除空白页、重复页或不相关的内容。', icon: 'trash-2' },
    ],
    faq: [
      { question: '可以复制页面吗？', answer: '是的，您可以复制任何页面并将副本放置在文档中的任何位置。' },
      { question: '有撤销功能吗？', answer: '是的，您可以撤销和重做更改。您也可以随时重置为原始顺序。' },
      { question: '可以同时整理多个PDF吗？', answer: '此工具一次处理一个PDF。要合并和整理多个PDF，请先使用合并PDF工具合并它们。' },
    ],
  },

  'delete-pages': {
    title: '删除页面',
    metaDescription: '从PDF文件中删除不需要的页面。轻松选择和删除特定页面。',
    keywords: ['删除pdf页面', '移除pdf页面', 'pdf页面删除器', '从pdf删除页面'],
    description: `
      <p>删除页面允许您快速轻松地从PDF文档中删除不需要的页面。无论您需要删除空白页、过时内容还是敏感信息，这个工具都能简化操作。</p>
      <p>可视页面缩略图帮助您准确识别要删除的页面。您可以删除单个页面或一次删除多个页面。</p>
      <p>所有处理都在您的浏览器本地进行，确保您的文档保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上传PDF文件', description: '拖放您的PDF文件或点击选择要从中删除页面的文档。' },
      { step: 2, title: '选择要删除的页面', description: '点击页面缩略图标记要删除的页面，或在输入字段中输入页码。' },
      { step: 3, title: '删除并下载', description: '点击删除移除所选页面并下载更新后的PDF。' },
    ],
    useCases: [
      { title: '删除空白页', description: '通过删除意外包含的空白页来清理文档。', icon: 'file-x' },
      { title: '删除敏感内容', description: '在共享文档前删除包含机密信息的页面。', icon: 'shield' },
      { title: '精简文档', description: '删除过时或不相关的页面以创建更集中的文档。', icon: 'filter' },
    ],
    faq: [
      { question: '可以恢复已删除的页面吗？', answer: '删除在输出文件中是永久的。如果以后可能需要这些页面，请保留原始文档的备份。' },
      { question: '可以一次删除多个页面吗？', answer: '是的，您可以同时选择和删除多个页面。' },
      { question: '删除页面会影响书签吗？', answer: '指向已删除页面的书签将被移除。指向剩余页面的书签会保留。' },
    ],
  },

  // ==================== 编辑与注释 ====================
  'bookmark': {
    title: '编辑书签',
    metaDescription: '添加、编辑和管理PDF书签。为您的文档创建导航结构。',
    keywords: ['pdf书签', '编辑书签', '添加书签', 'pdf导航', '目录'],
    description: `
      <p>编辑书签允许您在PDF文档中创建、修改和整理书签。书签提供快速导航到特定部分的功能，使长文档更易于使用。</p>
      <p>您可以添加新书签、编辑现有书签、重新整理书签层次结构或从外部来源导入书签。这个工具对于创建专业、可导航的文档至关重要。</p>
      <p>所有编辑都在您的浏览器本地进行，确保您的文档保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上传PDF文件', description: '拖放您的PDF文件或点击选择要编辑的文档。' },
      { step: 2, title: '管理书签', description: '添加新书签、编辑现有书签或拖动重新整理层次结构。' },
      { step: 3, title: '保存并下载', description: '点击保存应用更改并下载带有更新书签的PDF。' },
    ],
    useCases: [
      { title: '创建导航', description: '为长文档添加书签，帮助读者快速导航到特定部分。', icon: 'navigation' },
      { title: '整理章节', description: '创建反映文档章节组织的层次书签结构。', icon: 'book-open' },
      { title: '提高可访问性', description: '添加书签使文档更易于访问和用户友好。', icon: 'accessibility' },
    ],
    faq: [
      { question: '可以创建嵌套书签吗？', answer: '是的，您可以创建具有父书签和子书签的层次结构。' },
      { question: '可以从文件导入书签吗？', answer: '是的，您可以从JSON或文本文件导入书签结构。' },
      { question: '书签在所有PDF阅读器中都能工作吗？', answer: '是的，书签是所有主要PDF阅读器都支持的标准PDF功能。' },
    ],
  },

  'table-of-contents': {
    title: '目录',
    metaDescription: '为您的PDF生成目录。从书签创建可点击的导航。',
    keywords: ['pdf目录', '目录生成器', 'pdf索引', '文档导航'],
    description: `
      <p>目录为您的PDF文档生成可导航的目录页面。目录可以从现有书签或自定义条目创建，为读者提供概览和快速导航。</p>
      <p>使用不同的样式、字体和布局自定义外观。生成的目录包含可点击的链接，直接跳转到引用的页面。</p>
      <p>所有处理都在您的浏览器本地进行，确保您的文档保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上传PDF文件', description: '拖放您的PDF文件或点击选择文档。' },
      { step: 2, title: '配置目录', description: '选择从书签生成或创建自定义条目。选择样式和位置选项。' },
      { step: 3, title: '生成并下载', description: '点击生成创建目录并下载更新后的PDF。' },
    ],
    useCases: [
      { title: '学术论文', description: '为论文、学位论文和研究报告添加专业目录。', icon: 'graduation-cap' },
      { title: '商业报告', description: '为利益相关者创建具有清晰章节列表的可导航报告。', icon: 'bar-chart' },
      { title: '用户手册', description: '为技术文档和用户指南生成全面的目录。', icon: 'book' },
    ],
    faq: [
      { question: '可以自定义目录外观吗？', answer: '是的，您可以为目录选择不同的样式、字体和布局。' },
      { question: '目录插入在哪里？', answer: '默认情况下，目录插入在文档开头，但您可以选择不同的位置。' },
      { question: '目录条目可以点击吗？', answer: '是的，每个条目都是可点击的链接，导航到相应的页面。' },
    ],
  },

  'page-numbers': {
    title: '页码',
    metaDescription: '为PDF文档添加页码。自定义位置、格式和起始编号。',
    keywords: ['添加页码', 'pdf页码', '编号pdf页面', 'pdf分页'],
    description: `
      <p>页码为您的PDF文档添加可自定义的页码编号。从各种格式、位置和样式中选择以匹配您文档的设计。</p>
      <p>您可以设置起始编号、跳过某些页面并使用不同的编号格式（1, 2, 3 或 i, ii, iii）。非常适合创建具有正确分页的专业文档。</p>
      <p>所有处理都在您的浏览器本地进行，确保您的文档保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上传PDF文件', description: '拖放您的PDF文件或点击选择文档。' },
      { step: 2, title: '配置编号', description: '选择位置、格式、起始编号以及要编号的页面。' },
      { step: 3, title: '应用并下载', description: '点击应用添加页码并下载更新后的PDF。' },
    ],
    useCases: [
      { title: '专业文档', description: '为报告、提案和商业文档添加页码。', icon: 'file-text' },
      { title: '学术论文', description: '根据学术格式要求编号页面。', icon: 'graduation-cap' },
      { title: '法律文档', description: '为合同和法律文件添加正确的分页。', icon: 'scale' },
    ],
    faq: [
      { question: '可以跳过第一页吗？', answer: '是的，您可以指定要编号的页面和要跳过的页面，如标题页或封面页。' },
      { question: '有哪些编号格式可用？', answer: '您可以使用阿拉伯数字（1, 2, 3）、罗马数字（i, ii, iii 或 I, II, III）或字母（a, b, c）。' },
      { question: '可以添加"第X页，共Y页"格式吗？', answer: '是的，您可以在编号格式中包含总页数。' },
    ],
  },

  'add-watermark': {
    title: '添加水印',
    metaDescription: '为PDF文件添加文本或图像水印。保护和品牌化您的文档。',
    keywords: ['添加水印', 'pdf水印', '盖章pdf', '品牌pdf', '保护pdf'],
    description: `
      <p>添加水印允许您在PDF文档上放置文本或图像水印。水印可以指示文档状态（草稿、机密）、添加品牌或阻止未经授权的复制。</p>
      <p>自定义水印的位置、大小、不透明度、旋转和颜色。应用到所有页面或选择特定页面。该工具支持文本水印和图像水印。</p>
      <p>所有处理都在您的浏览器本地进行，确保您的文档保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上传PDF文件', description: '拖放您的PDF文件或点击选择文档。' },
      { step: 2, title: '创建水印', description: '输入文本或上传图像作为水印。调整位置、大小、不透明度和旋转。' },
      { step: 3, title: '应用并下载', description: '点击应用添加水印并下载更新后的PDF。' },
    ],
    useCases: [
      { title: '文档保护', description: '添加"机密"或"草稿"水印以指示文档状态。', icon: 'shield' },
      { title: '品牌文档', description: '为官方文档添加公司标志或名称。', icon: 'award' },
      { title: '版权声明', description: '添加版权信息以保护知识产权。', icon: 'copyright' },
    ],
    faq: [
      { question: '可以使用图像作为水印吗？', answer: '是的，您可以上传PNG、JPG或SVG图像作为水印。' },
      { question: '可以使水印半透明吗？', answer: '是的，您可以调整不透明度，从完全透明到完全不透明。' },
      { question: '可以对不同页面应用不同的水印吗？', answer: '该工具对选定的页面应用相同的水印。对于不同的水印，需要多次处理文档。' },
    ],
  },

  'header-footer': {
    title: '页眉页脚',
    metaDescription: '为PDF文档添加页眉和页脚。包含页码、日期和自定义文本。',
    keywords: ['pdf页眉', 'pdf页脚', '添加页眉页脚', 'pdf信头'],
    description: `
      <p>页眉页脚为您的PDF文档添加可自定义的页眉和页脚。在页眉或页脚区域包含页码、日期、文档标题或任何自定义文本。</p>
      <p>将内容定位在页眉/页脚的左侧、中间或右侧。如果需要，可以为奇数页和偶数页使用不同的内容。非常适合创建具有一致格式的专业文档。</p>
      <p>所有处理都在您的浏览器本地进行，确保您的文档保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上传PDF文件', description: '拖放您的PDF文件或点击选择文档。' },
      { step: 2, title: '配置页眉/页脚', description: '为页眉和页脚区域输入文本。添加页码、日期或自定义文本。' },
      { step: 3, title: '应用并下载', description: '点击应用添加页眉/页脚并下载更新后的PDF。' },
    ],
    useCases: [
      { title: '商业文档', description: '为专业文档添加公司名称和页码。', icon: 'briefcase' },
      { title: '法律文档', description: '在法律文件中包含案件编号、日期和页面引用。', icon: 'scale' },
      { title: '学术论文', description: '添加带有论文标题和作者姓名的页眉。', icon: 'graduation-cap' },
    ],
    faq: [
      { question: '可以在奇数页和偶数页上有不同的页眉吗？', answer: '是的，您可以为奇数页和偶数页配置不同的内容。' },
      { question: '可以包含当前日期吗？', answer: '是的，您可以插入显示当前日期的动态日期字段。' },
      { question: '可以在某些页面上跳过页眉/页脚吗？', answer: '是的，您可以指定哪些页面应该有页眉/页脚，哪些应该跳过。' },
    ],
  },

  'invert-colors': {
    title: '反转颜色',
    metaDescription: '反转PDF颜色以进行暗模式阅读。将文档转换为负片颜色。',
    keywords: ['反转pdf颜色', 'pdf暗模式', '负片pdf', '反转颜色'],
    description: `
      <p>反转颜色可以反转PDF文档中的颜色，创建负片图像效果。这对于创建文档的暗模式版本特别有用，便于在低光条件下阅读。</p>
      <p>该工具可以反转所有颜色或选择性地保留某些元素（如图像）。非常适合在夜间阅读文档时减少眼睛疲劳。</p>
      <p>所有处理都在您的浏览器本地进行，确保您的文档保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上传PDF文件', description: '拖放您的PDF文件或点击选择文档。' },
      { step: 2, title: '配置选项', description: '选择是反转所有内容还是保留图像。' },
      { step: 3, title: '反转并下载', description: '点击反转处理文档并下载结果。' },
    ],
    useCases: [
      { title: '夜间阅读', description: '创建文档的暗模式版本，便于夜间舒适阅读。', icon: 'moon' },
      { title: '减少眼睛疲劳', description: '反转明亮的文档以减少长时间阅读时的眼睛疲劳。', icon: 'eye' },
      { title: '节省打印', description: '反转文档以减少打印草稿时的墨水使用。', icon: 'printer' },
    ],
    faq: [
      { question: '图像也会被反转吗？', answer: '默认情况下会。您可以选择在反转文本和背景的同时保留原始图像。' },
      { question: '可以只反转特定页面吗？', answer: '是的，您可以选择要反转的页面。' },
      { question: '反转是可逆的吗？', answer: '您可以再次反转文档以大致恢复原始颜色。' },
    ],
  },

  'background-color': {
    title: '背景颜色',
    metaDescription: '更改PDF背景颜色。为文档页面添加彩色背景。',
    keywords: ['pdf背景颜色', '更改pdf背景', '彩色pdf', 'pdf页面颜色'],
    description: `
      <p>背景颜色允许您更改或添加PDF页面的背景颜色。这可以提高可读性、增加视觉趣味或满足您的品牌要求。</p>
      <p>为背景选择任何颜色并应用到所有页面或选定的页面。该工具在添加背景图层的同时保留所有现有内容。</p>
      <p>所有处理都在您的浏览器本地进行，确保您的文档保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上传PDF文件', description: '拖放您的PDF文件或点击选择文档。' },
      { step: 2, title: '选择颜色', description: '使用颜色选择器选择背景颜色或输入十六进制代码。' },
      { step: 3, title: '应用并下载', description: '点击应用添加背景并下载更新后的PDF。' },
    ],
    useCases: [
      { title: '提高可读性', description: '添加浅奶油色或棕褐色背景以减少眼睛疲劳。', icon: 'eye' },
      { title: '品牌文档', description: '使用品牌颜色作为营销材料的背景。', icon: 'palette' },
      { title: '突出部分', description: '使用不同的背景颜色来区分文档部分。', icon: 'layers' },
    ],
    faq: [
      { question: '背景会覆盖现有内容吗？', answer: '不会，背景添加在现有内容后面，保留所有文本和图像。' },
      { question: '可以为不同页面使用不同的颜色吗？', answer: '您需要多次处理文档才能在不同页面上使用不同的颜色。' },
      { question: '可以删除现有背景吗？', answer: '此工具添加背景。要删除背景，您可能需要使用编辑PDF工具。' },
    ],
  },

  'text-color': {
    title: '更改文本颜色',
    metaDescription: '更改PDF文档中的文本颜色。修改所有文本内容的颜色。',
    keywords: ['更改pdf文本颜色', 'pdf文本颜色', '修改文本颜色', '重新着色pdf文本'],
    description: `
      <p>更改文本颜色允许您修改PDF文档中文本的颜色。这对于改善对比度、匹配品牌或创建文档的视觉变体非常有用。</p>
      <p>选择新颜色并应用到文档中的所有文本。该工具处理文本元素的同时保留图像和其他内容。</p>
      <p>所有处理都在您的浏览器本地进行，确保您的文档保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上传PDF文件', description: '拖放您的PDF文件或点击选择文档。' },
      { step: 2, title: '选择颜色', description: '使用颜色选择器选择新的文本颜色或输入十六进制代码。' },
      { step: 3, title: '应用并下载', description: '点击应用更改文本颜色并下载更新后的PDF。' },
    ],
    useCases: [
      { title: '改善对比度', description: '更改文本颜色以提高与背景的可读性。', icon: 'contrast' },
      { title: '品牌一致性', description: '更新文本颜色以匹配品牌指南。', icon: 'palette' },
      { title: '无障碍性', description: '调整文本颜色以满足无障碍对比度要求。', icon: 'accessibility' },
    ],
    faq: [
      { question: '所有文本都会被更改吗？', answer: '是的，该工具更改文档中所有文本元素的颜色。' },
      { question: '可以只更改特定文本吗？', answer: '此工具更改所有文本。对于选择性更改，请使用编辑PDF工具。' },
      { question: '格式化的文本（粗体、斜体）会保留吗？', answer: '是的，文本格式会保留；只有颜色会更改。' },
    ],
  },

  'add-stamps': {
    title: '添加印章',
    metaDescription: '为PDF文档添加印章。使用预设或自定义印章进行审批、审阅等。',
    keywords: ['pdf印章', '添加印章', '审批印章', 'pdf橡皮章'],
    description: `
      <p>添加印章允许您在PDF文档上放置印章图像。使用预设印章如"已批准"、"已拒绝"、"草稿"，或上传自定义印章图像。</p>
      <p>将印章定位在页面的任何位置，调整大小，并应用到单个或多个页面。非常适合文档工作流程、审批和状态指示。</p>
      <p>所有处理都在您的浏览器本地进行，确保您的文档保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上传PDF文件', description: '拖放您的PDF文件或点击选择文档。' },
      { step: 2, title: '选择印章', description: '选择预设印章或上传自定义印章图像。' },
      { step: 3, title: '定位并应用', description: '点击放置印章，调整位置和大小，然后下载。' },
    ],
    useCases: [
      { title: '文档审批', description: '在审阅工作流程中为文档添加"已批准"或"已拒绝"印章。', icon: 'check-circle' },
      { title: '状态指示', description: '将文档标记为"草稿"、"最终版"或"机密"。', icon: 'tag' },
      { title: '质量控制', description: '添加质检印章以指示检查或审阅完成。', icon: 'clipboard-check' },
    ],
    faq: [
      { question: '有哪些预设印章可用？', answer: '预设包括已批准、已拒绝、草稿、最终版、机密、副本等。' },
      { question: '可以上传自定义印章吗？', answer: '是的，您可以上传PNG或JPG图像作为自定义印章。' },
      { question: '可以在一个文档中添加多个印章吗？', answer: '是的，您可以添加多个印章并独立定位每个印章。' },
    ],
  },

  'remove-annotations': {
    title: '删除注释',
    metaDescription: '从PDF文件中删除注释。删除评论、高亮和标记。',
    keywords: ['删除pdf注释', '删除评论', '删除高亮', '清理pdf'],
    description: `
      <p>删除注释可以从PDF文档中去除评论、高亮、便签和其他注释。这将创建一个没有标记的干净文档版本。</p>
      <p>您可以删除所有注释或选择性地删除特定类型。非常适合创建已审阅文档的最终版本或删除敏感评论。</p>
      <p>所有处理都在您的浏览器本地进行，确保您的文档保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上传PDF文件', description: '拖放您的PDF文件或点击选择文档。' },
      { step: 2, title: '选择注释类型', description: '选择要删除的注释类型：评论、高亮、链接等。' },
      { step: 3, title: '删除并下载', description: '点击删除去除注释并下载干净的PDF。' },
    ],
    useCases: [
      { title: '完成文档', description: '在发布最终文档前删除审阅评论和标记。', icon: 'file-check' },
      { title: '隐私保护', description: '在共享前删除可能包含敏感信息的评论。', icon: 'shield' },
      { title: '干净分发', description: '创建已注释文档的干净副本以供分发。', icon: 'copy' },
    ],
    faq: [
      { question: '可以删除哪些类型的注释？', answer: '评论、高亮、下划线、删除线、便签、印章和链接都可以删除。' },
      { question: '可以保留一些注释吗？', answer: '是的，您可以选择要删除的注释类型和要保留的类型。' },
      { question: '这是可逆的吗？', answer: '不，注释删除是永久的。如果需要，请保留原始文件的备份。' },
    ],
  },

  'form-filler': {
    title: '表单填写',
    metaDescription: '在线填写PDF表单。无需打印即可完成交互式PDF表单。',
    keywords: ['填写pdf表单', 'pdf表单填写器', '完成pdf表单', '交互式pdf'],
    description: `
      <p>表单填写允许您直接在浏览器中完成交互式PDF表单。填写文本字段、勾选复选框、选择选项并添加签名，无需打印文档。</p>
      <p>该工具支持标准PDF表单和XFA表单。您填写的数据可以保存，表单可以扁平化以防止进一步编辑。</p>
      <p>所有处理都在您的浏览器本地进行，确保您的表单数据保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上传PDF表单', description: '拖放您的PDF表单或点击选择文件。' },
      { step: 2, title: '填写表单', description: '点击表单字段输入文本、勾选复选框或选择选项。' },
      { step: 3, title: '保存并下载', description: '点击保存保留您的输入并下载已填写的表单。' },
    ],
    useCases: [
      { title: '申请表', description: '完成工作申请、许可申请和注册表单。', icon: 'clipboard' },
      { title: '税务表单', description: '电子填写税务文件和财务表单。', icon: 'file-text' },
      { title: '合同', description: '在签署前用您的信息完成合同表单。', icon: 'file-signature' },
    ],
    faq: [
      { question: '可以保存进度吗？', answer: '是的，您可以保存部分填写的表单并稍后继续。' },
      { question: '什么是表单扁平化？', answer: '扁平化将表单字段转换为静态内容，防止进一步编辑。' },
      { question: '支持XFA表单吗？', answer: '是的，该工具支持标准AcroForms和XFA表单。' },
    ],
  },

  'form-creator': {
    title: '表单创建',
    metaDescription: '创建可填写的PDF表单。添加文本字段、复选框和下拉菜单到文档。',
    keywords: ['创建pdf表单', 'pdf表单创建器', '可填写pdf', '添加表单字段'],
    description: `
      <p>表单创建将静态PDF文档转换为交互式可填写表单。添加文本字段、复选框、单选按钮、下拉菜单等以创建专业表单。</p>
      <p>将表单元素拖放到文档上，配置字段属性，创建可以电子填写的表单。非常适合创建申请表、调查问卷和数据收集表单。</p>
      <p>所有处理都在您的浏览器本地进行，确保您的文档保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上传PDF文件', description: '拖放您的PDF文件或点击选择要转换为表单的文档。' },
      { step: 2, title: '添加表单字段', description: '从工具栏选择字段类型并点击将其放置在文档上。' },
      { step: 3, title: '配置并保存', description: '设置字段属性，然后保存并下载可填写的PDF表单。' },
    ],
    useCases: [
      { title: '申请表', description: '创建可填写的工作申请、会员表单和注册表。', icon: 'user-plus' },
      { title: '调查问卷', description: '构建用于数据收集的交互式调查和问卷。', icon: 'clipboard-list' },
      { title: '订单表', description: '创建带有数量字段和复选框的产品订单表。', icon: 'shopping-cart' },
    ],
    faq: [
      { question: '可以添加哪些字段类型？', answer: '文本字段、复选框、单选按钮、下拉菜单、日期选择器和签名字段。' },
      { question: '可以将字段设为必填吗？', answer: '是的，您可以将字段标记为必填并添加验证规则。' },
      { question: '可以添加计算吗？', answer: '可以为数字字段添加基本计算，如求和和平均值。' },
    ],
  },

  'remove-blank-pages': {
    title: '删除空白页',
    metaDescription: '自动检测并从PDF文档中删除空白页。',
    keywords: ['删除空白页', '删除空页', '清理pdf', 'pdf空白页删除器'],
    description: `
      <p>删除空白页自动检测并从PDF文档中删除空页。这对于清理扫描文档、删除分隔页或消除意外包含的空白页非常有用。</p>
      <p>该工具使用智能检测来识别真正的空白页，同时保留内容最少的页面。您可以调整灵敏度阈值来控制什么算作"空白"。</p>
      <p>所有处理都在您的浏览器本地进行，确保您的文档保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上传PDF文件', description: '拖放您的PDF文件或点击选择文档。' },
      { step: 2, title: '调整阈值', description: '如果需要，设置空白检测阈值（默认值适用于大多数文档）。' },
      { step: 3, title: '删除并下载', description: '点击删除删除空白页并下载清理后的PDF。' },
    ],
    useCases: [
      { title: '清理扫描文档', description: '从批量扫描的文档中删除空白页。', icon: 'scan' },
      { title: '删除分隔符', description: '从合并文档中删除空白分隔页。', icon: 'minus' },
      { title: '减小文件大小', description: '删除不必要的空白页以减小文档大小。', icon: 'minimize-2' },
    ],
    faq: [
      { question: '空白检测如何工作？', answer: '该工具分析页面内容，将内容最少或没有可见内容的页面视为空白。' },
      { question: '可以预览哪些页面将被删除吗？', answer: '是的，检测到的空白页在删除前会高亮显示以供审阅。' },
      { question: '如果页面只有页眉/页脚怎么办？', answer: '您可以调整阈值来确定内容最少的页面是否应被视为空白。' },
    ],
  },

  // ==================== 转换为PDF ====================
  'image-to-pdf': {
    title: '图像转PDF',
    metaDescription: '将任何图像转换为PDF。支持JPG、PNG、WebP、BMP、TIFF、SVG和HEIC格式。',
    keywords: ['图像转pdf', '转换图像', '照片转pdf', '图片转pdf'],
    description: `
      <p>图像转PDF将任何格式的图像转换为PDF文档。支持JPG、PNG、WebP、BMP、TIFF、SVG和HEIC格式，使其成为通用的图像转换器。</p>
      <p>将多个图像合并成一个PDF，按任意顺序排列，并自定义页面大小和方向。非常适合创建照片相册、文档存档或作品集。</p>
      <p>所有转换都在您的浏览器中进行，确保您的图像保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上传图像', description: '拖放任何支持格式的图像或点击选择文件。' },
      { step: 2, title: '排列和配置', description: '重新排序图像并选择页面大小和方向选项。' },
      { step: 3, title: '转换并下载', description: '点击转换创建PDF并下载结果。' },
    ],
    useCases: [
      { title: '照片集', description: '将来自各种来源的照片合并成一个PDF相册。', icon: 'images' },
      { title: '混合格式文档', description: '将不同格式的图像转换为统一的PDF。', icon: 'file-stack' },
      { title: '存档创建', description: '从图像集创建PDF存档以供长期存储。', icon: 'archive' },
    ],
    faq: [
      { question: '支持哪些图像格式？', answer: '支持JPG、JPEG、PNG、WebP、BMP、TIFF、TIF、SVG、HEIC和HEIF格式。' },
      { question: '可以混合不同的图像格式吗？', answer: '是的，您可以将不同格式的图像合并成一个PDF。' },
      { question: '图像质量会保留吗？', answer: '是的，除非您选择压缩，否则图像以原始质量嵌入。' },
    ],
  },

  'png-to-pdf': {
    title: 'PNG转PDF',
    metaDescription: '将PNG图像转换为PDF。保留透明度并合并多个PNG文件。',
    keywords: ['png转pdf', '转换png', 'png转换器', '透明图像转pdf'],
    description: `
      <p>PNG转PDF将您的PNG图像转换为PDF文档，同时保留透明度。非常适合图形、标志、截图和具有透明背景的图像。</p>
      <p>将多个PNG文件合并成一个PDF，按任意顺序排列，并自定义页面设置。转换过程保持原始图像的高质量。</p>
      <p>所有转换都在您的浏览器中进行，确保您的图像保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上传PNG文件', description: '拖放您的PNG图像或点击选择文件。' },
      { step: 2, title: '排列和配置', description: '重新排序图像并选择页面大小选项。' },
      { step: 3, title: '转换并下载', description: '点击转换创建PDF并下载。' },
    ],
    useCases: [
      { title: '图形作品集', description: '将PNG图形和设计编译成专业作品集。', icon: 'palette' },
      { title: '截图文档', description: '将截图转换为PDF文档。', icon: 'monitor' },
      { title: '标志集', description: '创建标志和品牌资产的PDF目录。', icon: 'award' },
    ],
    faq: [
      { question: '透明度会保留吗？', answer: 'PNG透明度在PDF输出中会保留。' },
      { question: 'PNG动画怎么办？', answer: '动画PNG使用第一帧转换为静态图像。' },
      { question: '可以设置背景颜色吗？', answer: '是的，您可以为透明区域选择背景颜色。' },
    ],
  },

  'webp-to-pdf': {
    title: 'WebP转PDF',
    metaDescription: '将WebP图像转换为PDF。现代图像格式转换，保持质量。',
    keywords: ['webp转pdf', '转换webp', 'webp转换器', '网络图像转pdf'],
    description: `
      <p>WebP转PDF将现代WebP图像转换为PDF文档。WebP是一种流行的网络图像格式，这个工具使转换这些图像变得简单，便于打印或存档。</p>
      <p>将多个WebP文件合并成一个PDF，并可自定义页面设置。转换过程在创建紧凑PDF文件的同时保留图像质量。</p>
      <p>所有转换都在您的浏览器中进行，确保您的图像保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上传WebP文件', description: '拖放您的WebP图像或点击选择文件。' },
      { step: 2, title: '配置选项', description: '排列图像并选择页面大小和方向。' },
      { step: 3, title: '转换并下载', description: '点击转换创建PDF。' },
    ],
    useCases: [
      { title: '网络内容存档', description: '将网络图像转换为PDF以供离线存档。', icon: 'globe' },
      { title: '打印准备', description: '将WebP图像转换为PDF以供打印。', icon: 'printer' },
      { title: '格式标准化', description: '将现代WebP转换为通用兼容的PDF。', icon: 'file-check' },
    ],
    faq: [
      { question: '什么是WebP格式？', answer: 'WebP是Google开发的现代图像格式，为网络图像提供卓越的压缩。' },
      { question: '质量会保留吗？', answer: '是的，转换过程保留原始图像质量。' },
      { question: '可以转换动画WebP吗？', answer: '动画WebP文件转换为静态图像。' },
    ],
  },

  'svg-to-pdf': {
    title: 'SVG转PDF',
    metaDescription: '将SVG矢量图形转换为PDF。保留可缩放性和质量。',
    keywords: ['svg转pdf', '转换svg', '矢量转pdf', '可缩放图形转pdf'],
    description: `
      <p>SVG转PDF将可缩放矢量图形转换为PDF文档，同时保留其矢量质量。SVG文件在任何尺寸下都保持清晰，这种质量在PDF输出中得以保持。</p>
      <p>非常适合转换标志、图标、插图和技术图纸。生成的PDF保持原始矢量图形的可缩放性。</p>
      <p>所有转换都在您的浏览器中进行，确保您的文件保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上传SVG文件', description: '拖放您的SVG文件或点击选择。' },
      { step: 2, title: '配置设置', description: '选择页面大小和排列选项。' },
      { step: 3, title: '转换并下载', description: '点击转换创建矢量PDF。' },
    ],
    useCases: [
      { title: '标志转换', description: '将SVG标志转换为PDF以供印刷材料使用。', icon: 'award' },
      { title: '技术图纸', description: '将CAD导出和技术插图转换为PDF。', icon: 'ruler' },
      { title: '图标集', description: '创建图标集和图形的PDF目录。', icon: 'grid' },
    ],
    faq: [
      { question: '矢量质量会保留吗？', answer: '是的，SVG矢量质量在PDF输出中完全保留。' },
      { question: '可以转换复杂的SVG吗？', answer: '是的，支持带有渐变、滤镜和效果的复杂SVG。' },
      { question: '嵌入字体怎么办？', answer: 'SVG文件中的嵌入字体在PDF中会保留。' },
    ],
  },

  'bmp-to-pdf': {
    title: 'BMP转PDF',
    metaDescription: '将BMP位图图像转换为PDF。传统格式支持，保持质量。',
    keywords: ['bmp转pdf', '转换bmp', '位图转pdf', 'bmp转换器'],
    description: `
      <p>BMP转PDF将位图图像转换为PDF文档。BMP是Windows环境中常用的传统图像格式，这个工具使将这些文件转换为现代PDF格式变得简单。</p>
      <p>将多个BMP文件合并成一个PDF，并可自定义设置。转换过程在保持图像质量的同时压缩通常较大的BMP文件。</p>
      <p>所有转换都在您的浏览器中进行，确保您的图像保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上传BMP文件', description: '拖放您的BMP图像或点击选择文件。' },
      { step: 2, title: '配置选项', description: '排列图像并选择页面设置。' },
      { step: 3, title: '转换并下载', description: '点击转换创建PDF。' },
    ],
    useCases: [
      { title: '传统文件转换', description: '将旧的BMP文件转换为现代PDF格式。', icon: 'history' },
      { title: 'Windows截图', description: '将Windows位图截图转换为PDF。', icon: 'monitor' },
      { title: '存档现代化', description: '将传统图像存档更新为PDF格式。', icon: 'archive' },
    ],
    faq: [
      { question: '文件大小会减小吗？', answer: '是的，BMP文件在转换为PDF时通常会显著压缩。' },
      { question: '质量会保留吗？', answer: '是的，转换过程中图像质量得以保持。' },
      { question: '支持哪些BMP颜色深度？', answer: '支持所有标准BMP颜色深度，包括24位和32位。' },
    ],
  },

  'heic-to-pdf': {
    title: 'HEIC转PDF',
    metaDescription: '将iPhone HEIC照片转换为PDF。Apple图像格式转换变得简单。',
    keywords: ['heic转pdf', '转换heic', 'iphone照片转pdf', 'apple图像转pdf'],
    description: `
      <p>HEIC转PDF将Apple的高效图像格式照片转换为PDF文档。HEIC是iPhone和iPad上的默认照片格式，这个工具使分享这些照片变得简单。</p>
      <p>将多张HEIC照片合并成一个PDF，非常适合从iPhone照片创建照片相册或文档存档。</p>
      <p>所有转换都在您的浏览器中进行，确保您的照片保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上传HEIC文件', description: '拖放您的HEIC照片或点击选择文件。' },
      { step: 2, title: '排列照片', description: '重新排序照片并选择页面设置。' },
      { step: 3, title: '转换并下载', description: '点击转换创建PDF。' },
    ],
    useCases: [
      { title: 'iPhone照片相册', description: '从iPhone照片创建PDF相册以供分享。', icon: 'smartphone' },
      { title: '文档扫描', description: '将iPhone文档扫描转换为PDF格式。', icon: 'scan' },
      { title: '跨平台分享', description: '将HEIC转换为PDF以实现通用兼容性。', icon: 'share-2' },
    ],
    faq: [
      { question: '什么是HEIC格式？', answer: 'HEIC（高效图像容器）是Apple的图像格式，比JPEG提供更好的压缩。' },
      { question: '支持实况照片吗？', answer: '实况照片使用关键帧转换为静态图像。' },
      { question: 'EXIF数据会保留吗？', answer: '照片元数据可以在转换过程中选择性保留或删除。' },
    ],
  },

  'tiff-to-pdf': {
    title: 'TIFF转PDF',
    metaDescription: '将TIFF图像转换为PDF。支持多页TIFF文件和高质量转换。',
    keywords: ['tiff转pdf', '转换tiff', 'tif转pdf', '多页tiff'],
    description: `
      <p>TIFF转PDF将TIFF图像（包括多页TIFF文件）转换为PDF文档。TIFF常用于高质量扫描和专业图形。</p>
      <p>多页TIFF文件自动转换为多页PDF。转换过程保留原始图像的高质量。</p>
      <p>所有转换都在您的浏览器中进行，确保您的文件保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上传TIFF文件', description: '拖放您的TIFF文件或点击选择。' },
      { step: 2, title: '配置选项', description: '选择页面设置和压缩选项。' },
      { step: 3, title: '转换并下载', description: '点击转换创建PDF。' },
    ],
    useCases: [
      { title: '扫描文档', description: '将高质量扫描从TIFF转换为PDF。', icon: 'scan' },
      { title: '专业图形', description: '转换专业TIFF图形以供分发。', icon: 'image' },
      { title: '存档转换', description: '将TIFF存档转换为更易访问的PDF格式。', icon: 'archive' },
    ],
    faq: [
      { question: '支持多页TIFF吗？', answer: '是的，多页TIFF文件自动转换为多页PDF。' },
      { question: '质量会保留吗？', answer: '是的，TIFF质量在PDF输出中完全保留。' },
      { question: '使用什么压缩？', answer: '您可以选择无损和有损压缩选项。' },
    ],
  },

  'txt-to-pdf': {
    title: '文本转PDF',
    metaDescription: '将纯文本文件转换为PDF。自定义字体、边距和页面布局。',
    keywords: ['txt转pdf', '文本转pdf', '转换文本文件', '纯文本转pdf'],
    description: `
      <p>文本转PDF将纯文本文件转换为格式化的PDF文档。自定义字体、大小、边距和页面布局，从简单文本创建专业外观的文档。</p>
      <p>非常适合转换代码文件、日志、笔记或任何纯文本内容为可共享的PDF格式。</p>
      <p>所有转换都在您的浏览器中进行，确保您的文件保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上传文本文件', description: '拖放您的.txt文件或点击选择。' },
      { step: 2, title: '自定义格式', description: '选择字体、大小、边距和页面设置。' },
      { step: 3, title: '转换并下载', description: '点击转换创建格式化的PDF。' },
    ],
    useCases: [
      { title: '代码文档', description: '将源代码文件转换为PDF以供文档使用。', icon: 'code' },
      { title: '日志存档', description: '将日志文件转换为PDF以供存档。', icon: 'file-text' },
      { title: '笔记转换', description: '将纯文本笔记转换为格式化的PDF文档。', icon: 'sticky-note' },
    ],
    faq: [
      { question: '有哪些字体可用？', answer: '有多种字体可用，包括用于代码的等宽字体。' },
      { question: '自动换行吗？', answer: '是的，长行会自动换行以适应页面。' },
      { question: '可以保留格式吗？', answer: '原始文本中的空白和缩进会保留。' },
    ],
  },

  'json-to-pdf': {
    title: 'JSON转PDF',
    metaDescription: '将JSON文件转换为格式化的PDF。语法高亮和结构化输出。',
    keywords: ['json转pdf', '转换json', 'json查看器', 'json格式化器'],
    description: `
      <p>JSON转PDF将JSON数据文件转换为格式化、可读的PDF文档。输出包括语法高亮和正确的缩进，便于阅读。</p>
      <p>非常适合记录API响应、配置文件或任何需要以可读格式共享或存档的JSON数据。</p>
      <p>所有转换都在您的浏览器中进行，确保您的数据保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上传JSON文件', description: '拖放您的.json文件或点击选择。' },
      { step: 2, title: '配置显示', description: '选择格式化选项和语法高亮。' },
      { step: 3, title: '转换并下载', description: '点击转换创建格式化的PDF。' },
    ],
    useCases: [
      { title: 'API文档', description: '将API响应转换为PDF以供文档使用。', icon: 'code' },
      { title: '配置存档', description: '以可读的PDF格式存档配置文件。', icon: 'settings' },
      { title: '数据报告', description: '从JSON数据导出创建PDF报告。', icon: 'bar-chart' },
    ],
    faq: [
      { question: '包含语法高亮吗？', answer: '是的，JSON语法用颜色高亮显示键、值和类型。' },
      { question: '嵌套数据如何处理？', answer: '嵌套对象和数组会正确缩进以提高可读性。' },
      { question: '大型JSON文件怎么办？', answer: '大文件会自动分页到多个页面。' },
    ],
  },

  'word-to-pdf': {
    title: 'Word转PDF',
    metaDescription: '将Word文档（DOCX）转换为PDF。保留格式和布局。',
    keywords: ['word转pdf', 'docx转pdf', '转换word', 'word转换器', '微软word转pdf'],
    description: `
      <p>Word转PDF将Microsoft Word文档转换为PDF格式，同时保留原始格式、布局和内容结构。</p>
      <p>上传您的DOCX文件，获得适合分享、打印或存档的高质量PDF输出。转换过程保持文本格式、段落样式和基本文档结构。</p>
      <p>所有转换都在您的浏览器本地进行，确保您的文档保持私密和安全。</p>
    `,
    howToUse: [
      { step: 1, title: '上传Word文档', description: '拖放您的.docx文件或点击从设备中选择。' },
      { step: 2, title: '等待处理', description: '工具将加载文档并准备进行转换。' },
      { step: 3, title: '下载PDF', description: '点击下载保存转换后的PDF文档。' },
    ],
    useCases: [
      { title: '文档分享', description: '将Word文档转换为PDF以便通用分享和查看。', icon: 'share-2' },
      { title: '打印准备', description: '从Word文档创建可打印的PDF。', icon: 'printer' },
      { title: '文档存档', description: '以稳定的PDF格式存档Word文档以供长期保存。', icon: 'archive' },
    ],
    faq: [
      { question: '支持.doc格式吗？', answer: '目前仅支持.docx格式。请先使用Microsoft Word或LibreOffice将.doc文件转换为.docx。' },
      { question: '图像会保留吗？', answer: '文本内容和基本格式会保留。包含许多图像的复杂布局可能会简化渲染。' },
      { question: '转换安全吗？', answer: '是的，所有处理都在您的浏览器中进行。您的文档永远不会离开您的设备。' },
    ],
  },

  'excel-to-pdf': {
    title: 'Excel转PDF',
    metaDescription: '将Excel电子表格（XLSX）转换为PDF。保留表格和数据。',
    keywords: ['excel转pdf', 'xlsx转pdf', '转换excel', '电子表格转pdf', '微软excel转pdf'],
    description: `
      <p>Excel转PDF将Microsoft Excel电子表格转换为PDF格式，同时保留表格结构和数据组织。</p>
      <p>上传您的XLSX文件，获得具有正确格式化表格的清晰PDF输出。工作簿中的每个工作表都会成为PDF中的单独部分。</p>
      <p>所有转换都在您的浏览器本地进行，确保您的数据保持私密和安全。</p>
    `,
    howToUse: [
      { step: 1, title: '上传Excel文件', description: '拖放您的.xlsx文件或点击从设备中选择。' },
      { step: 2, title: '等待处理', description: '工具将加载电子表格并转换所有工作表。' },
      { step: 3, title: '下载PDF', description: '点击下载保存转换后的PDF文档。' },
    ],
    useCases: [
      { title: '报告分享', description: '将Excel报告转换为PDF以供利益相关者分发。', icon: 'file-text' },
      { title: '数据存档', description: '以稳定的PDF格式存档电子表格数据。', icon: 'archive' },
      { title: '打印准备', description: '从Excel工作表创建可打印的PDF。', icon: 'printer' },
    ],
    faq: [
      { question: '支持多个工作表吗？', answer: '是的，工作簿中的所有工作表都会被转换并包含在PDF中。' },
      { question: '支持.xls格式吗？', answer: '目前仅支持.xlsx格式。请先将.xls文件另存为.xlsx。' },
      { question: '公式会保留吗？', answer: 'PDF显示计算值。公式在PDF格式中不可执行。' },
    ],
  },

  'pptx-to-pdf': {
    title: 'PowerPoint转PDF',
    metaDescription: '将PowerPoint演示文稿（PPTX）转换为PDF。保留幻灯片内容便于分享。',
    keywords: ['powerpoint转pdf', 'pptx转pdf', '转换pptx', '演示文稿转pdf', '幻灯片转pdf'],
    description: `
      <p>PowerPoint转PDF将Microsoft PowerPoint演示文稿转换为PDF格式，保留幻灯片内容和文本以便轻松分享和查看。</p>
      <p>每张幻灯片成为PDF中的一页，保持演示流。非常适合与没有安装PowerPoint的人分享演示文稿。</p>
      <p>所有转换都在您的浏览器本地进行，确保您的演示文稿保持私密和安全。</p>
    `,
    howToUse: [
      { step: 1, title: '上传PowerPoint文件', description: '拖放您的.pptx文件或点击从设备中选择。' },
      { step: 2, title: '等待处理', description: '工具将提取幻灯片内容并创建PDF。' },
      { step: 3, title: '下载PDF', description: '点击下载保存转换后的PDF文档。' },
    ],
    useCases: [
      { title: '演示文稿分享', description: '与任何人分享演示文稿，无需PowerPoint。', icon: 'share-2' },
      { title: '讲义创建', description: '从演示幻灯片创建PDF讲义。', icon: 'file-text' },
      { title: '存档演示文稿', description: '以稳定的PDF格式存档演示文稿。', icon: 'archive' },
    ],
    faq: [
      { question: '动画会保留吗？', answer: 'PDF是静态格式，因此动画和过渡不会保留。每张幻灯片变成静态页面。' },
      { question: '支持.ppt格式吗？', answer: '目前仅支持.pptx格式。请先将.ppt文件转换为.pptx。' },
      { question: '演讲者备注会包含吗？', answer: '目前演讲者备注不会包含在PDF输出中。' },
    ],
  },

  'add-page-labels': {
    title: '添加页面标签',
    metaDescription: '为 PDF 添加自定义页面标签。支持罗马数字、阿拉伯数字、大写/小写字母和自定义前缀，并且支持非连续的不相交页码范围。',
    keywords: ['pdf页面标签', '罗马数字页码', 'pdf分卷标签', '不相交范围页码', 'pdf前缀页码'],
    description: `
      <p>PDF 页面标签工具允许您修改 PDF 树的 Catalog 目录，写入完全符合 PDF 标准规范的 /PageLabels 属性。它可以让 PDF 阅读器的导航框中清晰地显示诸如罗马数字的前言、阿拉伯数字的正文，以及带有特定前缀（如 A-0, A-1）的分册标签。</p>
      <p>支持多条规则动态合并。最重要的是，我们开发了创新的<strong>不相交页码分裂算法</strong>，即使您设置了极其复杂的非连续规则（例如：奇数页应用样式 A，偶数页应用样式 B），系统也能智能进行边界切片，保证转换出的 PDF 在任意专业阅读器中完美呈现，绝不发生样式溢出。</p>
      <p>所有操作均在浏览器本地安全运行，绝不上传文件，给您极致的安全保障。</p>
    `,
    howToUse: [
      { step: 1, title: '上传 PDF 文档', description: '上传您想要注入页面标签的 PDF 文件。' },
      { step: 2, title: '配置多标签规则', description: '添加一条或多条标签规则，指定页码范围（如 1-5, odd 等）、前缀、起始数值及编号样式。' },
      { step: 3, title: '实时预览与下载', description: '在下方预览每一页被注入的最终标签效果，确认无误后点击开始，即可一键下载已注入标签的 PDF。' },
    ],
    useCases: [
      { title: '正规书籍与论文排版', description: '为前言/目录部分应用罗马数字 (i, ii, iii)，为主体部分恢复阿拉伯数字，呈现极其专业的排版效果。', icon: 'book' },
      { title: '工程图纸与分册前缀', description: '在图纸中为指定页面添加如 "A-100", "E-200" 等大类前缀，便于工程师在阅读器中极速检索。', icon: 'layout' },
      { title: '特殊页码跳跃与奇偶映射', description: '为奇数页与偶数页或 disjoint 的页码段映射完全不同的前缀与编码，极富定制自由度。', icon: 'shuffle' },
    ],
    faq: [
      { question: '什么是页面标签？它和普通的页码（Page Numbers）有什么区别？', answer: '普通的页码是在 PDF 页面内容层直接绘制的文本（打印可见）；而页面标签则是写入 PDF 字典的元数据（物理标签）。它决定了用户在使用 Adobe Acrobat 等 PDF 阅读器时，缩略图下方以及顶部页码跳转框内显示什么，更方便电子化检索。' },
      { question: '留空“页码范围”会发生什么？', answer: '如果您将页码范围留空，则该条规则将自动应用到文档的所有页面中。' },
      { question: '如果我不小心定义了重叠的页码规则，系统会如何处理？', answer: '我们的算法会按照规则的添加顺序进行最终覆盖，后添加的规则若与先前的规则范围重叠，会优先覆盖重叠的页面，其余部分继续正常保留。' },
    ],
  },

  'xps-to-pdf': {
    title: 'XPS转PDF',
    metaDescription: '将XPS文档转换为PDF格式。高保真转换，保留布局和图形。',
    keywords: ['xps转pdf', '转换xps', 'xps转换器', '微软xps转pdf', 'oxps转pdf'],
    description: `
      <p>XPS转PDF将Microsoft XPS（XML纸规范）文档转换为PDF格式，同时保留原始布局、文本和矢量图形。</p>
      <p>XPS是一种类似于PDF的固定文档格式。此工具使用原生XPS解析提供高保真转换，确保文档的准确再现。</p>
      <p>所有转换都在您的浏览器本地进行，确保您的文档保持私密和安全。</p>
    `,
    howToUse: [
      { step: 1, title: '上传XPS文件', description: '拖放您的.xps文件或点击从设备中选择。' },
      { step: 2, title: '等待处理', description: '工具将解析并转换XPS文档。' },
      { step: 3, title: '下载PDF', description: '点击下载保存转换后的PDF文档。' },
    ],
    useCases: [
      { title: '格式转换', description: '将XPS文档转换为更广泛支持的PDF格式。', icon: 'file' },
      { title: '文档分享', description: '与没有XPS查看器的用户分享XPS文档。', icon: 'share-2' },
      { title: '存档迁移', description: '将XPS存档迁移到PDF格式以获得更好的兼容性。', icon: 'archive' },
    ],
    faq: [
      { question: '什么是XPS格式？', answer: 'XPS（XML纸规范）是Microsoft的固定文档格式，类似于PDF。它常用于Windows打印。' },
      { question: '转换是无损的吗？', answer: '是的，转换以高保真度保留文本、图形和布局。' },
      { question: '支持多页XPS文件吗？', answer: '是的，XPS文档中的所有页面都会转换到PDF中。' },
    ],
  },

  'rtf-to-pdf': {
    title: 'RTF转PDF',
    metaDescription: '将RTF（富文本格式）文件转换为PDF。保留文档中的文本格式。',
    keywords: ['rtf转pdf', '转换rtf', '富文本转pdf', 'rtf转换器'],
    description: `
      <p>RTF转PDF将富文本格式文件转换为PDF文档。RTF是一种广泛支持的文本格式，包含基本格式如字体、颜色和样式。</p>
      <p>上传您的RTF文件，获得干净的PDF输出，同时保留文本内容和基本格式。非常适合将旧文档转换为现代PDF格式。</p>
      <p>所有转换都在您的浏览器本地进行，确保您的文档保持私密和安全。</p>
    `,
    howToUse: [
      { step: 1, title: '上传RTF文件', description: '拖放您的.rtf文件或点击从设备中选择。' },
      { step: 2, title: '等待处理', description: '工具将解析并转换RTF内容。' },
      { step: 3, title: '下载PDF', description: '点击下载保存转换后的PDF文档。' },
    ],
    useCases: [
      { title: '旧版转换', description: '将旧的RTF文档转换为现代PDF格式。', icon: 'history' },
      { title: '文档分享', description: '以通用可查看的PDF格式分享RTF文档。', icon: 'share-2' },
      { title: '存档文档', description: '以稳定的PDF格式存档RTF文件以供长期保存。', icon: 'archive' },
    ],
    faq: [
      { question: '保留哪些格式？', answer: '包括字体、段落和样式在内的基本文本格式会被转换。复杂的RTF功能可能会被简化。' },
      { question: '可以转换多个RTF文件吗？', answer: '目前一次只能转换一个文件。使用合并PDF来合并多个转换后的文件。' },
      { question: '支持嵌入图像吗？', answer: '文本内容是主要焦点。嵌入对象可能无法渲染。' },
    ],
  },

  'epub-to-pdf': {
    title: 'EPUB转PDF',
    metaDescription: '将EPUB电子书转换为PDF。保留格式、图片和章节结构。',
    keywords: ['epub转pdf', '转换epub', '电子书转pdf', 'epub转换器'],
    description: `
      <p>EPUB转PDF将电子书文件转换为高质量的PDF文档。EPUB是最流行的电子书格式，被大多数电子阅读器和数字图书馆使用。</p>
      <p>此工具可保留电子书的文本格式、图片和章节结构。非常适合打印、存档或以通用格式分享电子书。</p>
      <p>所有转换都在您的浏览器本地进行，使用先进的渲染技术，确保您的书籍保持私密，转换速度快。</p>
    `,
    howToUse: [
      { step: 1, title: '上传EPUB文件', description: '拖放您的.epub文件或点击从设备中选择。' },
      { step: 2, title: '等待转换', description: '工具将渲染并转换电子书的所有页面。' },
      { step: 3, title: '下载PDF', description: '点击下载保存转换后的PDF文档。' },
    ],
    useCases: [
      { title: '打印电子书', description: '将电子书转换为PDF以便物理打印。', icon: 'printer' },
      { title: '存档书籍', description: '以长期稳定的PDF格式存储电子书。', icon: 'archive' },
      { title: '分享文档', description: '与任何人分享电子书，即使没有电子阅读器。', icon: 'share-2' },
    ],
    faq: [
      { question: '格式会保留吗？', answer: '是的！此工具使用原生EPUB渲染，以高保真度保留文本格式、图片和布局。' },
      { question: '支持受DRM保护的EPUB吗？', answer: '不支持，受DRM保护的电子书无法转换。仅支持无DRM的EPUB文件。' },
      { question: '页面大小是如何确定的？', answer: 'EPUB内容被渲染为标准A4页面大小，以获得最佳可读性。' },
    ],
  },

  'mobi-to-pdf': {
    title: 'MOBI转PDF',
    metaDescription: '将MOBI电子书转换为PDF。支持Kindle格式的高质量渲染。',
    keywords: ['mobi转pdf', '转换mobi', 'kindle转pdf', 'azw转pdf', 'mobi转换器'],
    description: `
      <p>MOBI转PDF将亚马逊Kindle电子书文件转换为高质量的PDF文档。MOBI格式（包括AZW和AZW3）是亚马逊专有的电子书格式，用于Kindle设备。</p>
      <p>此工具可保留Kindle书籍的文本格式、图片和结构。非常适合打印、存档或在不支持MOBI格式的设备上阅读。</p>
      <p>所有转换都在您的浏览器本地进行，使用先进的渲染技术，确保您的书籍保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上传MOBI文件', description: '拖放您的.mobi、.azw或.azw3文件，或点击从设备中选择。' },
      { step: 2, title: '等待转换', description: '工具将渲染并转换电子书的所有页面。' },
      { step: 3, title: '下载PDF', description: '点击下载保存转换后的PDF文档。' },
    ],
    useCases: [
      { title: '打印Kindle书籍', description: '将Kindle电子书转换为PDF以便物理打印。', icon: 'printer' },
      { title: '存档书籍', description: '以通用PDF格式存储Kindle书籍。', icon: 'archive' },
      { title: '跨设备阅读', description: '在只支持PDF的设备上阅读Kindle书籍。', icon: 'tablet-smartphone' },
    ],
    faq: [
      { question: '支持哪些MOBI格式？', answer: '此工具支持.mobi、.azw和.azw3文件（非DRM版本）。' },
      { question: '支持受DRM保护的Kindle书籍吗？', answer: '不支持，受DRM保护的电子书无法转换。仅支持无DRM的文件。' },
      { question: '格式会保留吗？', answer: '是的！该工具使用原生MOBI渲染来保留文本、图片和布局。' },
    ],
  },

  'djvu-to-pdf': {
    title: 'DJVU转PDF',
    metaDescription: '将DJVU文档文件转换为PDF。扫描文档和书籍的高质量渲染。',
    keywords: ['djvu转pdf', '转换djvu', 'djvu转换器', 'djvu pdf', 'djv转pdf'],
    description: `
      <p>DJVU转PDF将DjVu文档文件转换为高质量的PDF文档。DjVu是一种计算机文件格式，主要用于存储扫描文档，特别是包含文本、线条图和照片组合的文档。</p>
      <p>此工具以您选择的DPI（每英寸点数）渲染DJVU文件的每一页，并将它们合并为PDF文档。非常适合转换扫描书籍、技术手册和档案文档。</p>
      <p>所有转换都在您的浏览器本地进行，确保您的文档保持私密和安全。</p>
    `,
    howToUse: [
      { step: 1, title: '上传DJVU文件', description: '拖放您的.djvu或.djv文件，或点击从设备中选择。' },
      { step: 2, title: '配置选项', description: '选择输出DPI（72、150或300）和PDF的图像质量。' },
      { step: 3, title: '转换并下载', description: '点击转换为PDF并下载转换后的文档。' },
    ],
    useCases: [
      { title: '存档文档', description: '将DJVU档案转换为通用PDF格式。', icon: 'archive' },
      { title: '分享扫描书籍', description: '以PDF格式分享扫描书籍以获得更广泛的兼容性。', icon: 'share-2' },
      { title: '打印文档', description: '将DJVU转换为高质量PDF以进行打印。', icon: 'printer' },
    ],
    faq: [
      { question: '什么是DJVU格式？', answer: 'DjVu是一种文件格式，设计用于存储扫描文档，特别是包含文本、图形和图像的文档。它为扫描内容提供比PDF更好的压缩。' },
      { question: '我应该选择多少DPI？', answer: '72 DPI适合网页浏览，150 DPI适合标准文档，300 DPI适合高质量打印。' },
      { question: '文字是否可搜索？', answer: '文字将渲染为图像。如果您需要可搜索的文字，请在转换后使用我们的OCR PDF工具。' },
    ],
  },

  'fb2-to-pdf': {
    title: 'FB2转PDF',
    metaDescription: '将FictionBook (FB2)电子书转换为PDF。支持多个文件的高质量渲染。',
    keywords: ['fb2转pdf', '转换fb2', 'fictionbook转pdf', 'fb2转换器', 'fb2.zip转pdf'],
    description: `
      <p>FB2转PDF将FictionBook (FB2)电子书文件转换为高质量的PDF文档。FB2是一种流行的基于XML的电子书格式，在俄罗斯和东欧广泛使用。</p>
      <p>此工具支持.fb2和.fb2.zip文件，并可一次处理多个文件。它保留电子书的文本格式、图片和章节结构。</p>
      <p>所有转换都在您的浏览器本地进行，使用先进的渲染技术，确保您的书籍保持私密，转换速度快。</p>
    `,
    howToUse: [
      { step: 1, title: '上传FB2文件', description: '拖放一个或多个.fb2或.fb2.zip文件，或点击从设备中选择。' },
      { step: 2, title: '选择质量', description: '选择输出质量：低（72 DPI）、中（150 DPI）或高（300 DPI）。' },
      { step: 3, title: '转换并下载', description: '点击转换为PDF并下载转换后的文档。' },
    ],
    useCases: [
      { title: '打印电子书', description: '将FB2电子书转换为PDF以便物理打印。', icon: 'printer' },
      { title: '批量转换', description: '一次将多个FB2文件转换为PDF。', icon: 'layers' },
      { title: '通用格式', description: '以适用于任何设备的PDF格式分享电子书。', icon: 'share-2' },
    ],
    faq: [
      { question: '可以一次转换多个FB2文件吗？', answer: '可以！此工具支持同时批量转换最多20个FB2文件。' },
      { question: '支持.fb2.zip文件吗？', answer: '支持，该工具会自动从.fb2.zip压缩包中提取并转换FB2文件。' },
      { question: '格式会保留吗？', answer: '是的！该工具使用原生FB2渲染，以高保真度保留文本格式、图片和章节结构。' },
    ],
  },

  // ==================== 从PDF转换 ====================

  'pdf-to-jpg': {
    title: 'PDF转JPG',
    metaDescription: '将PDF页面转换为JPG图像。高质量提取，可自定义分辨率。',
    keywords: ['pdf转jpg', 'pdf转jpeg', '转换pdf为图像', '提取pdf图像'],
    description: `
      <p>PDF转JPG将PDF文档页面转换为高质量的JPG图像。提取所有页面或选择特定页面进行转换，可自定义分辨率和质量设置。</p>
      <p>非常适合从PDF中提取图像、创建缩略图或转换文档以供网络使用。</p>
      <p>所有转换都在您的浏览器中进行，确保您的文档保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上传PDF文件', description: '拖放您的PDF文件或点击选择。' },
      { step: 2, title: '选择页面和质量', description: '选择要转换的页面并设置质量/DPI选项。' },
      { step: 3, title: '转换并下载', description: '点击转换提取图像并作为ZIP下载。' },
    ],
    useCases: [
      { title: '网络发布', description: '将PDF页面转换为图像以供网站使用。', icon: 'globe' },
      { title: '社交媒体', description: '提取页面作为图像以供社交媒体分享。', icon: 'share-2' },
      { title: '演示文稿', description: '将PDF幻灯片转换为图像以供演示。', icon: 'presentation' },
    ],
    faq: [
      { question: '有哪些质量设置可用？', answer: '您可以设置72到300的DPI和1-100的JPEG质量。' },
      { question: '可以只转换特定页面吗？', answer: '是的，您可以选择单个页面或页面范围进行转换。' },
      { question: '多个页面如何处理？', answer: '每个页面成为单独的JPG文件，作为ZIP压缩包下载。' },
    ],
  },

  'pdf-to-png': {
    title: 'PDF转PNG',
    metaDescription: '将PDF页面转换为PNG图像。无损质量，支持透明度。',
    keywords: ['pdf转png', '转换pdf为png', 'pdf图像提取', '无损pdf转换'],
    description: `
      <p>PDF转PNG将PDF文档页面转换为具有无损压缩的高质量PNG图像。PNG格式完美保留图像质量并支持透明度。</p>
      <p>非常适合提取图形、图表或任何质量保持至关重要的内容。</p>
      <p>所有转换都在您的浏览器中进行，确保您的文档保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上传PDF文件', description: '拖放您的PDF文件或点击选择。' },
      { step: 2, title: '配置选项', description: '选择页面并设置分辨率（DPI）选项。' },
      { step: 3, title: '转换并下载', description: '点击转换提取PNG图像。' },
    ],
    useCases: [
      { title: '图形提取', description: '以完美质量提取图表和图形。', icon: 'image' },
      { title: '设计资产', description: '将PDF设计转换为PNG以供编辑软件使用。', icon: 'palette' },
      { title: '文档', description: '为技术文档创建高质量图像。', icon: 'file-text' },
    ],
    faq: [
      { question: '为什么选择PNG而不是JPG？', answer: 'PNG提供无损压缩和透明度支持，非常适合图形和文本。' },
      { question: '支持透明背景吗？', answer: '是的，具有透明度的PDF页面在PNG输出中会保留。' },
      { question: '应该使用什么DPI？', answer: '屏幕查看使用150 DPI，打印使用300 DPI。' },
    ],
  },

  'pdf-to-webp': {
    title: 'PDF转WebP',
    metaDescription: '将PDF页面转换为WebP图像。现代格式，出色的压缩。',
    keywords: ['pdf转webp', '转换pdf为webp', '现代图像格式', '网络优化图像'],
    description: `
      <p>PDF转WebP将PDF文档页面转换为WebP图像，这是Google的现代图像格式，提供出色的压缩和高质量。</p>
      <p>WebP图像比JPG或PNG更小，同时保持相当的质量，非常适合网络使用。</p>
      <p>所有转换都在您的浏览器中进行，确保您的文档保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上传PDF文件', description: '拖放您的PDF文件或点击选择。' },
      { step: 2, title: '设置质量选项', description: '选择页面并设置质量/压缩设置。' },
      { step: 3, title: '转换并下载', description: '点击转换创建WebP图像。' },
    ],
    useCases: [
      { title: '网络优化', description: '从PDF内容创建网络优化的图像。', icon: 'globe' },
      { title: '带宽节省', description: '减小图像文件大小以加快加载速度。', icon: 'zap' },
      { title: '现代网站', description: '为现代网络项目使用现代图像格式。', icon: 'layout' },
    ],
    faq: [
      { question: '什么是WebP格式？', answer: 'WebP是Google的现代图像格式，提供卓越的压缩。' },
      { question: 'WebP被广泛支持吗？', answer: '是的，所有现代浏览器都支持WebP格式。' },
      { question: 'WebP文件小多少？', answer: 'WebP文件通常比同等JPG文件小25-35%。' },
    ],
  },

  'pdf-to-bmp': {
    title: 'PDF转BMP',
    metaDescription: '将PDF页面转换为BMP位图图像。未压缩格式，最大兼容性。',
    keywords: ['pdf转bmp', '转换pdf为位图', '未压缩图像', '传统格式'],
    description: `
      <p>PDF转BMP将PDF文档页面转换为BMP位图图像。BMP是一种未压缩格式，确保与传统系统和应用程序的最大兼容性。</p>
      <p>虽然BMP文件比压缩格式大，但它们提供完美的质量和通用兼容性。</p>
      <p>所有转换都在您的浏览器中进行，确保您的文档保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上传PDF文件', description: '拖放您的PDF文件或点击选择。' },
      { step: 2, title: '选择页面', description: '选择要转换的页面并设置DPI。' },
      { step: 3, title: '转换并下载', description: '点击转换创建BMP图像。' },
    ],
    useCases: [
      { title: '传统系统', description: '创建与旧软件兼容的图像。', icon: 'history' },
      { title: 'Windows应用程序', description: '为Windows特定应用程序生成BMP文件。', icon: 'monitor' },
      { title: '未压缩存档', description: '从PDF创建未压缩的图像存档。', icon: 'archive' },
    ],
    faq: [
      { question: '为什么使用BMP格式？', answer: 'BMP提供未压缩的质量和与传统系统的最大兼容性。' },
      { question: 'BMP文件更大吗？', answer: '是的，BMP文件未压缩，比JPG或PNG大得多。' },
      { question: '支持哪些颜色深度？', answer: '支持24位和32位颜色深度。' },
    ],
  },

  'pdf-to-tiff': {
    title: 'PDF转TIFF',
    metaDescription: '将PDF转换为TIFF图像。专业质量，支持多页。',
    keywords: ['pdf转tiff', '转换pdf为tiff', '专业图像', '多页tiff'],
    description: `
      <p>PDF转TIFF将PDF文档转换为高质量的TIFF图像。由于其无损压缩，TIFF是专业打印和存档的首选格式。</p>
      <p>创建单页TIFF或将所有页面合并成多页TIFF文件。非常适合专业和存档目的。</p>
      <p>所有转换都在您的浏览器中进行，确保您的文档保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上传PDF文件', description: '拖放您的PDF文件或点击选择。' },
      { step: 2, title: '配置输出', description: '选择单页或多页TIFF并设置DPI。' },
      { step: 3, title: '转换并下载', description: '点击转换创建TIFF图像。' },
    ],
    useCases: [
      { title: '专业打印', description: '从PDF文档创建可打印的TIFF文件。', icon: 'printer' },
      { title: '文档存档', description: '以高质量TIFF格式存档文档。', icon: 'archive' },
      { title: '出版', description: '将PDF转换为TIFF以供出版工作流程使用。', icon: 'book' },
    ],
    faq: [
      { question: '可以创建多页TIFF吗？', answer: '是的，您可以将所有PDF页面合并成一个多页TIFF。' },
      { question: '有哪些压缩选项？', answer: 'LZW、ZIP和无压缩选项可用。' },
      { question: '打印应该使用什么DPI？', answer: '专业打印使用300 DPI或更高。' },
    ],
  },

  'pdf-to-cbz': {
    title: 'PDF 转 CBZ 漫画包',
    metaDescription: '将 PDF 转换为高清漫画压缩包 (.cbz)。集成 Calibre OPF、ComicInfo XML 及 Comment 三合一元数据，完美兼容各大漫画阅读器。',
    keywords: ['pdf转cbz', 'pdf转漫画', 'cbz打包', 'calibre漫画', 'comicinfo xml'],
    description: `
      <p>PDF 转 CBZ 工具专为漫画爱好者及数字化归档设计。它能将您的 PDF 电子书/扫描本的每一页渲染为高清图像，打包为标准的漫画压缩包（.cbz 文件）。</p>
      <p>为了打通 Calibre、Komga、Kavita、CDisplayEx 等所有主流漫画管理和阅读软件，我们自动在压缩包内注入了 <strong>ComicInfo.xml</strong>、<strong>metadata.opf</strong> 规范数据，并把 <strong>ComicBookInfo JSON</strong> 作为 ZIP 文件的全局注释写入，实现全方位的元数据秒级识别分类。</p>
      <p>支持从右向左阅读切换（Manga 读向）、全彩/灰度双模式、画质和缩放比例调节，给您殿堂级的掌上漫画享受。</p>
    `,
    howToUse: [
      { step: 1, title: '上传漫画 PDF', description: '上传您想要转换为 CBZ 格式的漫画、画集或插页 PDF 原始文件。' },
      { step: 2, title: '完善漫画元数据', description: '录入漫画的书名、系列、期数、作者、发行商，勾选读向（从左至右 / 从右至左）并按需开启灰度处理。' },
      { step: 3, title: '生成并下载', description: '点击开始打包，转换出的 .cbz 文件可导入任意漫画阅读器或 Calibre 中完美归类。' },
    ],
    useCases: [
      { title: '漫画与画集转档', description: '将扫描版的 PDF 格式漫画极速转换为各大漫画软件完美兼容 of CBZ 归档格式。', icon: 'book' },
      { title: 'Calibre 漫画柜完美管理', description: '自动生成的 metadata.opf 可让 Calibre 完美提取分类，避免手动刮削，强迫症福音。', icon: 'database' },
      { title: '墨水屏阅读器深度优化', description: '开启灰度脱色功能，预先过滤电子书色彩，大幅提升墨水屏阅读器在刷新和对比度上的视觉表现。', icon: 'eye' },
    ],
    faq: [
      { question: '什么是 .cbz 格式？', answer: 'CBZ (Comic Book Zip) 是标准的漫画图像归档文件，本质上是一个包含图像序列以及元数据 XML 文件的 ZIP 压缩包，被主流电子书和漫画阅读器普遍采用。' },
      { question: '元数据是如何生效的？', answer: '我们在导出的 ZIP 内部直接写入了 ComicInfo.xml（Komga/Kavita 识别）、metadata.opf（Calibre 识别）并将 ComicBookInfo 写入 ZIP 注释，真正做到了对全平台多端阅读工具的元数据 100% 极速兼容。' },
      { question: '为什么要开启灰度处理？', answer: '如果您的阅读设备是黑白电子墨水屏（E-ink），开启灰度脱色处理会在输出时直接在底层将图片渲染为灰阶，以极优的对比度提升漫画的实际表现，并同时缩小压缩包体积。' },
    ],
  },

  'pdf-to-svg': {
    title: 'PDF转SVG',
    metaDescription: '将PDF页面转换为SVG矢量图形。任意尺寸完美缩放，支持单独导出每页。',
    keywords: ['pdf转svg', '转换pdf为svg', '矢量图形', '可缩放pdf', 'svg转换器'],
    description: `
      <p>PDF转SVG将您的PDF文档的每一页转换为可缩放矢量图形（SVG）。SVG是一种矢量格式，在任何缩放级别或打印尺寸下都能保持完美质量。</p>
      <p>与光栅格式（JPG、PNG）不同，SVG图形在缩放时永远不会变得模糊。这使其非常适合标志、图表、技术图纸以及任何需要以不同尺寸显示的内容。</p>
      <p>预览每个转换后的页面，可以单独下载或作为ZIP文件下载。所有处理都在您的浏览器本地进行，确保您的文档完全隐私。</p>
    `,
    howToUse: [
      { step: 1, title: '上传PDF文件', description: '拖放您的PDF文件或点击浏览选择。' },
      { step: 2, title: '配置选项', description: '设置分辨率质量，可选择指定页面范围。' },
      { step: 3, title: '预览和转换', description: '点击转换进行处理。点击缩略图预览每个页面。' },
      { step: 4, title: '下载', description: '下载单个SVG文件或将所有页面打包为ZIP压缩包。' },
    ],
    useCases: [
      { title: '标志和图形', description: '从PDF中提取标志和矢量图形，用于设计软件。', icon: 'pen-tool' },
      { title: '技术图纸', description: '将技术图纸和图表转换为可缩放的SVG格式。', icon: 'ruler' },
      { title: '网页开发', description: '从PDF内容创建网页友好的SVG文件，用于响应式网站。', icon: 'globe' },
      { title: '任意尺寸打印', description: '生成可以任意尺寸完美打印的矢量图形。', icon: 'printer' },
    ],
    faq: [
      { question: '什么是SVG格式？', answer: 'SVG（可缩放矢量图形）是一种可以缩放到任意尺寸而不损失质量的矢量图像格式。它广泛用于标志、图标和网页图形。' },
      { question: 'SVG是真正的矢量吗？', answer: 'SVG包含PDF页面的高分辨率渲染。对于具有矢量内容的PDF，您可以在任何缩放级别获得清晰的输出。' },
      { question: '可以在下载前预览吗？', answer: '可以！点击任何缩略图查看SVG的完整尺寸预览。您可以下载单个页面或全部下载。' },
      { question: '应该选择什么分辨率？', answer: '更高的分辨率（216或288 DPI）会产生更大、更详细的SVG。使用较低设置可以加快处理速度并获得更小的文件。' },
    ],
  },

  'pdf-to-greyscale': {
    title: 'PDF转灰度',
    metaDescription: '将彩色PDF转换为灰度。减小文件大小并准备黑白打印。',
    keywords: ['pdf转灰度', '灰度pdf', '黑白pdf', '删除颜色'],
    description: `
      <p>PDF转灰度将彩色PDF文档转换为灰度（黑白）。这可以减小文件大小并为黑白打印准备文档。</p>
      <p>转换过程在删除颜色信息的同时保留文本清晰度和图像细节。非常适合草稿打印或创建打印机友好版本。</p>
      <p>所有转换都在您的浏览器中进行，确保您的文档保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上传PDF文件', description: '拖放您的彩色PDF文件或点击选择。' },
      { step: 2, title: '预览转换', description: '预览灰度版本的外观。' },
      { step: 3, title: '转换并下载', description: '点击转换创建灰度PDF。' },
    ],
    useCases: [
      { title: '节省打印', description: '转换为灰度以节省彩色打印成本。', icon: 'printer' },
      { title: '草稿文档', description: '创建黑白草稿以供审阅。', icon: 'file-text' },
      { title: '减小文件大小', description: '通过删除颜色信息减小PDF大小。', icon: 'minimize-2' },
    ],
    faq: [
      { question: '文本会保持可读吗？', answer: '是的，灰度转换过程中文本清晰度得以保留。' },
      { question: '文件会小多少？', answer: '文件大小减少因情况而异，但对于颜色密集的文档可以减少20-50%。' },
      { question: '可以只转换特定页面吗？', answer: '是的，您可以选择要转换为灰度的页面。' },
    ],
  },

  'pdf-to-json': {
    title: 'PDF转JSON',
    metaDescription: '将PDF内容提取为JSON格式。从PDF文档获取结构化数据。',
    keywords: ['pdf转json', '提取pdf数据', 'pdf解析器', '结构化pdf数据'],
    description: `
      <p>PDF转JSON将PDF文档中的内容提取为结构化的JSON格式。提取文本、元数据、页面信息和文档结构以供程序化使用。</p>
      <p>非常适合数据提取、文档分析或将PDF内容集成到应用程序和工作流程中。</p>
      <p>所有提取都在您的浏览器中进行，确保您的文档保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上传PDF文件', description: '拖放您的PDF文件或点击选择。' },
      { step: 2, title: '选择要提取的数据', description: '选择要提取的内容：文本、元数据、结构。' },
      { step: 3, title: '提取并下载', description: '点击提取生成JSON并下载。' },
    ],
    useCases: [
      { title: '数据提取', description: '从PDF文档中提取结构化数据。', icon: 'database' },
      { title: '文档分析', description: '以编程方式分析PDF结构和内容。', icon: 'search' },
      { title: '集成', description: '通过JSON将PDF内容导入应用程序。', icon: 'plug' },
    ],
    faq: [
      { question: '提取哪些数据？', answer: '文本内容、元数据、页面尺寸、字体和文档结构。' },
      { question: 'JSON格式有文档吗？', answer: '是的，JSON模式是一致且有良好文档的。' },
      { question: '可以从扫描的PDF中提取吗？', answer: '扫描的PDF需要先进行OCR。在提取前使用我们的OCR PDF工具。' },
    ],
  },

  'pdf-to-pptx': {
    title: 'PDF转PowerPoint',
    metaDescription: '将PDF转换为PowerPoint (PPTX)演示文稿。每一页转为高质量幻灯片。',
    keywords: ['pdf转ppt', 'pdf转pptx', 'pdf转powerpoint', 'pdf演示文稿'],
    description: `
      <p>PDF转PowerPoint将您的PDF文档转换为可编辑的PowerPoint演示文稿(PPTX)。每个PDF页面都会转换为保持完美视觉布局的高质量幻灯片。</p>
      <p>此工具非常适合将报告、讲义或任何PDF内容转换为演示格式。</p>
      <p>所有转换都在您的浏览器中进行，确保您的文档隐私安全。</p>
    `,
    howToUse: [
      { step: 1, title: '上传PDF文件', description: '拖放您的PDF文件或点击选择。' },
      { step: 2, title: '选择质量', description: '选择幻灯片的图像质量(DPI)。' },
      { step: 3, title: '转换并下载', description: '点击转换创建PowerPoint演示文稿。' },
    ],
    useCases: [
      { title: '创建演示', description: '将PDF文档转换为会议幻灯片。', icon: 'presentation' },
      { title: '培训材料', description: '将教材转换为交互式演示文稿。', icon: 'book-open' },
      { title: '内容复用', description: '将现有内容转换为可编辑幻灯片。', icon: 'refresh-cw' },
    ],
    faq: [
      { question: '幻灯片可编辑吗？', answer: '每张幻灯片包含PDF页面的图像。您可以在顶部添加内容。' },
      { question: '应该选什么DPI？', answer: '屏幕展示选150 DPI，打印选300 DPI。' },
      { question: '支持多页吗？', answer: '是的，每一页都会成为一张单独的幻灯片。' },
    ],
  },

  'pdf-to-excel': {
    title: 'PDF转Excel',
    metaDescription: '将PDF转换为Excel表格。将表格提取为XLSX格式。',
    keywords: ['pdf转excel', 'pdf转xlsx', '提取表格', 'pdf数据提取'],
    description: `
      <p>PDF转Excel将您的PDF文档转换为可编辑的Excel电子表格(XLSX)。工具自动检测并提取表格。</p>
      <p>非常适合分析财务报告或数据表。每页的表格提取到单独的Sheet中。</p>
      <p>所有转换都在您的浏览器中进行，确保您的数据隐私安全。</p>
    `,
    howToUse: [
      { step: 1, title: '上传PDF文件', description: '拖放您的PDF文件或点击选择。' },
      { step: 2, title: '处理', description: '工具将自动识别表格。' },
      { step: 3, title: '下载Excel', description: '下载包含提取表格的文件。' },
    ],
    useCases: [
      { title: '财务分析', description: '转换银行账单或发票。', icon: 'trending-up' },
      { title: '数据提取', description: '从报告中提取数据表。', icon: 'database' },
      { title: '清单转换', description: '将PDF库存清单转换为表格。', icon: 'clipboard' },
    ],
    faq: [
      { question: '如何处理表格？', answer: '每页的表格提取到对应的Excel工作表中。' },
      { question: '如果没有表格？', answer: '将创建一个提示信息工作表。' },
      { question: '保留格式吗？', answer: '数据保留，视觉格式可能简化。' },
    ],
  },

  'psd-to-pdf': {
    title: 'PSD转PDF',
    metaDescription: '将Adobe Photoshop (PSD)文件转换为PDF。保留图层和高质量。',
    keywords: ['psd转pdf', '转换psd', 'photoshop转pdf', 'adobe psd转pdf'],
    description: `
      <p>直接在浏览器中将Adobe Photoshop (PSD)文件转换为PDF格式。此工具处理复杂的PSD文件，并在转换过程中保持高质量的视觉效果。</p>
      <p>非常适合设计师和艺术家与没有安装Photoshop的客户或同事分享他们的作品。转换生成干净、可视化的PDF文档。</p>
      <p>所有处理都在本地完成，确保您的设计和作品保留在设备上，保持私密和安全。</p>
    `,
    howToUse: [
      { step: 1, title: '上传PSD文件', description: '将PSD文件拖放到上传区域。支持大文件。' },
      { step: 2, title: '处理', description: '工具将读取PSD数据并将其转换为PDF格式。' },
      { step: 3, title: '下载', description: '立即下载转换后的PDF文件。' },
    ],
    useCases: [
      { title: '客户预览', description: '以通用的PDF格式向客户发送设计稿。', icon: 'image' },
      { title: '作品集创建', description: '将Photoshop作品编译成PDF作品集以供求职申请。', icon: 'briefcase' },
      { title: '打印准备', description: '将PSD设计转换为PDF，以便打印服务更好地处理。', icon: 'printer' },
    ],
    faq: [
      { question: '需要安装Photoshop吗？', answer: '不需要，此工具完全在浏览器中运行，无需Adobe Photoshop。' },
      { question: '图层会保留吗？', answer: '生成的PDF是用于查看的PSD扁平化版本。' },
      { question: '有文件大小限制吗？', answer: '我们支持大文件，但非常大的高分辨率PSD可能需要更长的处理时间。' },
    ],
  },

  // ==================== 整理与管理 ====================
  'ocr-pdf': {
    title: 'OCR PDF',
    metaDescription: '使用OCR使扫描的PDF可搜索。从图像和扫描文档中提取文本。',
    keywords: ['ocr pdf', '可搜索pdf', '文本识别', '扫描转文本'],
    description: `
      <p>OCR PDF使用光学字符识别从PDF中的扫描文档和图像中提取文本。将基于图像的PDF转换为可搜索、可选择文本的文档。</p>
      <p>支持多种语言，确保无论文档语言如何都能准确识别文本。在添加可搜索文本层的同时保留原始布局。</p>
      <p>所有OCR处理都在您的浏览器中进行，确保您的文档保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上传扫描的PDF', description: '拖放您的扫描PDF或点击选择。' },
      { step: 2, title: '选择语言', description: '选择文档语言以获得准确识别。' },
      { step: 3, title: '处理并下载', description: '点击处理运行OCR并下载可搜索的PDF。' },
    ],
    useCases: [
      { title: '数字化存档', description: '使扫描的文档存档可搜索。', icon: 'archive' },
      { title: '文档搜索', description: '在扫描文档中启用文本搜索。', icon: 'search' },
      { title: '文本提取', description: '从扫描文档中提取文本以供编辑。', icon: 'type' },
    ],
    faq: [
      { question: '支持哪些语言？', answer: '支持100多种语言，包括英语、中文、日语、韩语等。' },
      { question: '原始布局会保留吗？', answer: '是的，原始视觉布局会保留，并添加可搜索的文本层。' },
      { question: 'OCR有多准确？', answer: '准确性取决于扫描质量，但对于清晰的文档通常超过95%。' },
    ],
  },

  'alternate-merge': {
    title: '交替合并',
    metaDescription: '通过交替页面合并PDF。将正面和背面扫描合并成一个文档。',
    keywords: ['交替合并', '交错pdf', '合并扫描', '正反面合并'],
    description: `
      <p>交替合并通过交替交错两个PDF的页面来合并它们。这非常适合将分别扫描的正面和背面页面合并成一个文档。</p>
      <p>上传两个PDF，工具将通过交替从每个PDF中取一页来合并它们。您还可以反转其中一个文档的顺序以适应从后到前的扫描。</p>
      <p>所有处理都在您的浏览器本地进行，确保您的文档保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上传两个PDF', description: '上传正面页面PDF和背面页面PDF。' },
      { step: 2, title: '配置顺序', description: '选择是否为从后到前的扫描反转第二个文档。' },
      { step: 3, title: '合并并下载', description: '点击合并交错页面并下载。' },
    ],
    useCases: [
      { title: '双面扫描', description: '合并分别扫描的正面和背面页面。', icon: 'copy' },
      { title: '文档组装', description: '交错来自两个相关文档的页面。', icon: 'layers' },
      { title: '书籍扫描', description: '将奇数页和偶数页扫描合并成完整的书籍。', icon: 'book' },
    ],
    faq: [
      { question: '如果文档页数不同怎么办？', answer: '较长文档的额外页面会附加在末尾。' },
      { question: '可以反转页面顺序吗？', answer: '是的，您可以在合并前反转任一文档。' },
      { question: '这与普通合并有什么不同？', answer: '是的，普通合并是追加文档；交替合并是交错页面。' },
    ],
  },

  'add-attachments': {
    title: '添加附件',
    metaDescription: '在PDF文档中嵌入文件。将任何文件类型附加到您的PDF。',
    keywords: ['pdf附件', '嵌入文件', '附加到pdf', 'pdf组合'],
    description: `
      <p>添加附件将任何类型的文件嵌入到您的PDF文档中。附加电子表格、图像、源文件或任何其他文档以创建全面的PDF包。</p>
      <p>附件嵌入在PDF中，收件人可以使用任何PDF阅读器提取。非常适合将相关文件一起分发。</p>
      <p>所有处理都在您的浏览器本地进行，确保您的文件保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上传PDF文件', description: '拖放您的PDF文件或点击选择。' },
      { step: 2, title: '添加附件', description: '选择要附加到PDF的文件。' },
      { step: 3, title: '保存并下载', description: '点击保存嵌入附件并下载。' },
    ],
    useCases: [
      { title: '项目包', description: '将项目文件与文档PDF捆绑在一起。', icon: 'package' },
      { title: '报告分发', description: '将源数据文件附加到报告PDF。', icon: 'paperclip' },
      { title: '合同包', description: '在合同中包含支持文档。', icon: 'file-text' },
    ],
    faq: [
      { question: '可以附加哪些文件类型？', answer: '任何文件类型都可以附加到PDF。' },
      { question: '有大小限制吗？', answer: '包括附件在内的PDF总大小不应超过500MB。' },
      { question: '收件人可以提取附件吗？', answer: '是的，任何PDF阅读器都可以提取嵌入的附件。' },
    ],
  },

  'extract-attachments': {
    title: '提取附件',
    metaDescription: '从PDF中提取嵌入的文件。从PDF文档下载所有附件。',
    keywords: ['提取附件', 'pdf附件', '下载嵌入文件', 'pdf提取'],
    description: `
      <p>提取附件从PDF文档中检索所有嵌入的文件。单独下载附件或作为包含所有文件的ZIP压缩包下载。</p>
      <p>非常适合访问嵌入在PDF包中的源文件、数据或补充材料。</p>
      <p>所有提取都在您的浏览器中进行，确保您的文档保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上传PDF文件', description: '拖放您的PDF文件或点击选择。' },
      { step: 2, title: '查看附件', description: '查看PDF中所有嵌入文件的列表。' },
      { step: 3, title: '提取并下载', description: '下载单个文件或全部作为ZIP。' },
    ],
    useCases: [
      { title: '访问源文件', description: '从PDF报告中提取原始数据文件。', icon: 'download' },
      { title: '恢复附件', description: '从PDF包中检索嵌入的文件。', icon: 'folder-open' },
      { title: '批量提取', description: '一次从多个PDF中提取附件。', icon: 'layers' },
    ],
    faq: [
      { question: '如果没有附件怎么办？', answer: '如果没有找到嵌入文件，工具会提示。' },
      { question: '支持所有附件类型吗？', answer: '是的，所有嵌入的文件类型都可以提取。' },
      { question: '可以从多个PDF中提取吗？', answer: '是的，您可以处理多个PDF并下载所有附件。' },
    ],
  },

  'edit-attachments': {
    title: '编辑附件',
    metaDescription: '管理PDF附件。查看、重命名和删除嵌入的文件。',
    keywords: ['编辑附件', '管理pdf文件', '删除附件', '重命名附件'],
    description: `
      <p>编辑附件让您管理PDF文档中的嵌入文件。查看所有附件、重命名它们或从PDF中删除不需要的文件。</p>
      <p>非常适合在分发前清理PDF包或更新附件信息。</p>
      <p>所有编辑都在您的浏览器中进行，确保您的文档保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上传PDF文件', description: '拖放您的PDF文件或点击选择。' },
      { step: 2, title: '管理附件', description: '查看、重命名或删除嵌入的文件。' },
      { step: 3, title: '保存并下载', description: '点击保存应用更改并下载。' },
    ],
    useCases: [
      { title: '清理PDF', description: '从PDF包中删除不必要的附件。', icon: 'trash-2' },
      { title: '重命名文件', description: '更新附件名称以提高清晰度。', icon: 'edit' },
      { title: '审阅内容', description: '在分发前审核嵌入的文件。', icon: 'eye' },
    ],
    faq: [
      { question: '可以在这里添加新附件吗？', answer: '使用添加附件工具嵌入新文件。' },
      { question: '删除是永久的吗？', answer: '是的，删除的附件无法从输出文件中恢复。' },
      { question: '可以预览附件吗？', answer: '您可以看到文件名和大小；使用提取附件查看内容。' },
    ],
  },

  'divide-pages': {
    title: '分割页面',
    metaDescription: '将PDF页面分割成多个部分。水平或垂直分割页面。',
    keywords: ['分割pdf页面', '拆分页面', '剪切pdf页面', '页面部分'],
    description: `
      <p>分割页面将单个PDF页面分割成多个部分。水平、垂直或网格分割页面，从一页创建多页。</p>
      <p>非常适合分割每页包含多个项目的扫描文档，或将大幅面页面分割成标准尺寸。</p>
      <p>所有处理都在您的浏览器本地进行，确保您的文档保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上传PDF文件', description: '拖放您的PDF文件或点击选择。' },
      { step: 2, title: '设置分割', description: '选择水平、垂直或网格分割并设置部分数量。' },
      { step: 3, title: '分割并下载', description: '点击分割拆分页面并下载。' },
    ],
    useCases: [
      { title: '分割扫描', description: '分割包含多个文档的扫描页面。', icon: 'scissors' },
      { title: '调整页面大小', description: '将大页面分割成标准纸张尺寸。', icon: 'maximize-2' },
      { title: '创建卡片', description: '将页面分割成卡片大小的部分以供打印。', icon: 'grid' },
    ],
    faq: [
      { question: '可以分割成不等的部分吗？', answer: '目前分割是等分的。使用裁剪PDF进行自定义部分。' },
      { question: '分割线处的内容会怎样？', answer: '内容在分割线处被分割；确保重要内容不在边界处。' },
      { question: '可以只分割特定页面吗？', answer: '是的，您可以选择要分割的页面。' },
    ],
  },

  'add-blank-page': {
    title: '添加空白页',
    metaDescription: '在PDF文档中插入空白页。在任何位置添加空页。',
    keywords: ['添加空白页', '插入页面', '空页', 'pdf页面插入'],
    description: `
      <p>添加空白页在PDF文档的任何位置插入空页。在现有页面之前、之后或之间添加页面，可自定义页面大小。</p>
      <p>非常适合添加笔记空间、创建章节分隔符或为打印准备文档。</p>
      <p>所有处理都在您的浏览器本地进行，确保您的文档保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上传PDF文件', description: '拖放您的PDF文件或点击选择。' },
      { step: 2, title: '选择位置', description: '选择在哪里插入空白页以及插入多少页。' },
      { step: 3, title: '添加并下载', description: '点击添加插入页面并下载。' },
    ],
    useCases: [
      { title: '笔记空间', description: '添加空白页以供手写笔记。', icon: 'edit-3' },
      { title: '章节分隔符', description: '在文档章节之间插入空白页。', icon: 'minus' },
      { title: '打印准备', description: '添加页面以对齐双面打印。', icon: 'printer' },
    ],
    faq: [
      { question: '可以选择页面大小吗？', answer: '是的，空白页可以匹配现有页面或使用自定义尺寸。' },
      { question: '可以添加多个空白页吗？', answer: '是的，您可以一次添加任意数量的空白页。' },
      { question: '可以添加彩色页面吗？', answer: '添加空白页后使用背景颜色工具添加颜色。' },
    ],
  },

  'reverse-pages': {
    title: '反转页面',
    metaDescription: '反转PDF页面顺序。将文档页面从最后翻到最前。',
    keywords: ['反转pdf', '翻转页面顺序', '倒置页面', '反转文档'],
    description: `
      <p>反转页面翻转PDF文档中页面的顺序，将最后一页放在最前，第一页放在最后。对于以相反顺序扫描的文档或特定打印需求非常有用。</p>
      <p>该工具处理整个文档或选定的页面范围，保持所有内容和格式。</p>
      <p>所有处理都在您的浏览器本地进行，确保您的文档保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上传PDF文件', description: '拖放您的PDF文件或点击选择。' },
      { step: 2, title: '选择页面', description: '选择反转所有页面或特定范围。' },
      { step: 3, title: '反转并下载', description: '点击反转翻转页面顺序并下载。' },
    ],
    useCases: [
      { title: '修复扫描顺序', description: '纠正以相反顺序扫描的文档。', icon: 'refresh-cw' },
      { title: '打印准备', description: '为特定打印要求反转页面。', icon: 'printer' },
      { title: '文档重新排序', description: '快速翻转文档顺序以供审阅。', icon: 'arrow-up-down' },
    ],
    faq: [
      { question: '书签会更新吗？', answer: '是的，书签会更新以指向正确的反转页面。' },
      { question: '可以只反转部分页面吗？', answer: '是的，您可以选择要反转的页面范围。' },
      { question: '这和旋转一样吗？', answer: '不，反转改变页面顺序；旋转改变页面方向。' },
    ],
  },

  'rotate-pdf': {
    title: '旋转PDF',
    metaDescription: '旋转PDF页面。将页面旋转90、180或270度。',
    keywords: ['旋转pdf', '转动pdf页面', 'pdf旋转', '修复方向'],
    description: `
      <p>旋转PDF将文档中的页面旋转90、180或270度。修复方向不正确的扫描、旋转横向页面或调整页面方向以供查看。</p>
      <p>统一旋转所有页面或选择特定页面单独旋转。该工具保留所有内容和格式。</p>
      <p>所有处理都在您的浏览器本地进行，确保您的文档保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上传PDF文件', description: '拖放您的PDF文件或点击选择。' },
      { step: 2, title: '选择旋转', description: '选择旋转角度和要旋转的页面。' },
      { step: 3, title: '旋转并下载', description: '点击旋转应用更改并下载。' },
    ],
    useCases: [
      { title: '修复扫描', description: '纠正扫描文档的方向。', icon: 'rotate-cw' },
      { title: '横向页面', description: '旋转横向页面以正确查看。', icon: 'monitor' },
      { title: '混合方向', description: '标准化混合文档中的页面方向。', icon: 'layout' },
    ],
    faq: [
      { question: '可以对不同页面进行不同的旋转吗？', answer: '是的，您可以对不同页面应用不同的旋转。' },
      { question: '旋转会影响打印质量吗？', answer: '不会，旋转保留所有内容质量。' },
      { question: '可以按自定义角度旋转吗？', answer: '旋转限于90度增量（90、180、270）。' },
    ],
  },

  'overlay-pdf': {
    title: 'PDF 覆叠与垫底',
    metaDescription: '将一个 PDF 的页面作为前景覆叠或背景垫底合并到另一个 PDF 上。非常适合添加公章、信头或图层拼版。',
    keywords: ['pdf覆叠', 'pdf垫底', 'pdf盖章', 'pdf信笺', '合并图层'],
    description: `
      <p>PDF 覆叠与垫底工具允许您将一个 PDF 的页面以图层形式覆盖在另一个 PDF 的页面上方或下方。它非常适合为发票添加精美的公司信笺抬头、盖章、添加图纸背景网格或融合不同的排版草案。</p>
      <p>支持前景覆叠 (Overlay) 和背景垫底 (Underlay) 两种堆叠顺序。您可以指定复杂非连续的目标页面范围，也可以在覆叠文档较短时选择自动循环套用，从而完美对齐文档。</p>
      <p>所有处理都在您的浏览器本地完成，绝对确保您的设计和文件保持私密与安全。</p>
    `,
    howToUse: [
      { step: 1, title: '上传主文档', description: '上传您作为骨架的主要 base PDF 文件。' },
      { step: 2, title: '上传图层文档', description: '上传需要作为前景或背景叠放的图层 PDF 文件。' },
      { step: 3, title: '配置覆叠规则', description: '选择叠放层级、指定适用的页码范围并选择是否开启循环套用。' },
      { step: 4, title: '拼版编译并下载', description: '点击开始按钮，生成覆叠好的 PDF 并一键下载。' },
    ],
    useCases: [
      { title: '公司正规信笺抬头', description: '将发票或报告内容完美覆叠到标准的信头信尾模版上。', icon: 'file-text' },
      { title: '电子签章与水印', description: '在指定的页面上覆叠公章、签名印记或防伪背景。', icon: 'shield' },
      { title: '设计草稿比对', description: '将背景网格或测绘底图垫在文字和图表下方以供校验。', icon: 'layout' },
    ],
    faq: [
      { question: '前景覆叠 (Overlay) 和背景垫底 (Underlay) 有什么区别？', answer: '前景覆叠会将图层覆盖在您原有的文字和图像上方；背景垫底则是将图层放在最底层作为背景图版，原有的文字和图形会在其上方显示。' },
      { question: '图层文件的页数少于主文件时会怎样？', answer: '如果开启了“循环重复”，系统会自动循环套用图层页面（如 1、2、1、2 页交替）；如果关闭，则超出图层页数的后续页面将不进行任何覆盖。' },
      { question: '页码范围怎么填写？', answer: '您可留空应用到全部页面，或输入如 "1-5", "odd" (奇数页), "even" (偶数页) 或用逗号分隔的不连续页码如 "1-3, 5, 8"。' },
    ],
  },

  'timestamp-pdf': {
    title: 'PDF 可信时间戳',
    metaDescription: '为 PDF 文档添加 RFC 3161 可信时间戳。无需证书，即可在司法上确凿证明文档在特定时间点存在且未被篡改。',
    keywords: ['pdf时间戳', 'rfc 3161', 'tsa服务器', '可信时间戳', '存在性证明'],
    description: `
      <p>PDF 可信时间戳工具利用外部权威时间戳机构 (TSA)，为您的 PDF 文件追加符合 RFC 3161 标准的安全时间戳。这能为您的电子文件在司法、知识产权确权或合规审计上，提供无可辩驳的数学和法律凭证，客观证明该文件在某个精确的历史时间点就已完整存在且未经任何改动。</p>
      <p>支持选择 MeSign、DigiCert、Sectigo、SSL.com、FreeTSA 等全球知名时间戳服务器。整个签名操作不依赖任何个人私钥证书，轻松对文档加锁，保障长久安全性。</p>
      <p>安全加密原则：在与外部服务器通信握手前，只会在本地计算文档的安全 SHA-256 哈希值并发送，您的文档具体内容绝对不会泄露给任何外部网络。</p>
    `,
    howToUse: [
      { step: 1, title: '上传待签名 PDF', description: '选择并上传您要进行时间戳确权签名的 PDF 文件。' },
      { step: 2, title: '选择时间戳服务器', description: '在列表中选择一家全球受信任的权威时间戳服务商 (TSA)。' },
      { step: 3, title: '签署并下载', description: '点击开始签署，系统会快速向 TSA 握手获取可信 TST 令牌并完美嵌入 PDF 中。' },
    ],
    useCases: [
      { title: '知识产权与版权证明', description: '在发明、设计底稿、小说草稿公开发布前抢先签署，提供绝对的原创时间证明。', icon: 'lightbulb' },
      { title: '电子合同与法律文书', description: '为双方签署的电子协议加上可信时间锁，防止发生任何篡改或事后倒签日期的纠纷。', icon: 'file-check' },
      { title: '财务报表与合规日志', description: '对历史账目、合规审计日志进行时间戳锚定，满足行业严苛的档案完整性审查。', icon: 'activity' },
    ],
    faq: [
      { question: '什么是 RFC 3161 可信时间戳？', answer: 'RFC 3161 时间戳是由第三方权威时间戳服务商 (TSA) 采用私钥对您的文件哈希值和权威原子钟时间联合签署生成的加密令牌，具有极高的法律证明效力。' },
      { question: '我需要自己去申请数字证书吗？', answer: '完全不需要。签名证书是由 TSA 时间戳机构提供的，您作为文档拥有者不需要具备任何证书，只需一键点击即可完成签署。' },
      { question: '时间戳服务器会看到我的机密文件内容吗？', answer: '绝对不会。该工具在浏览器本地计算文件的哈希摘要（SHA-256），只把这串无规律的 64 位字符发送给时间戳服务器，服务器无法倒推出您的任何文件内容，隐私万无一失。' },
    ],
  },

  'n-up-pdf': {
    title: 'N合一PDF',
    metaDescription: '每张纸打印多个PDF页面。创建2合1、4合1或自定义布局。',
    keywords: ['n合一pdf', '每张多页', '2合1打印', '页面拼版'],
    description: `
      <p>N合一PDF将多个页面排列到单张纸上，创建2合1、4合1、6合1、9合1或自定义布局。非常适合打印时节省纸张或创建讲义。</p>
      <p>从预设布局中选择或创建自定义排列。该工具自动缩放和定位页面以获得最佳效果。</p>
      <p>所有处理都在您的浏览器本地进行，确保您的文档保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上传PDF文件', description: '拖放您的PDF文件或点击选择。' },
      { step: 2, title: '选择布局', description: '选择2合1、4合1、6合1、9合1或自定义网格。' },
      { step: 3, title: '创建并下载', description: '点击创建生成N合一PDF并下载。' },
    ],
    useCases: [
      { title: '节省纸张', description: '每张纸打印多页以减少纸张使用。', icon: 'leaf' },
      { title: '创建讲义', description: '从演示幻灯片制作紧凑的讲义。', icon: 'file-text' },
      { title: '审阅文档', description: '以缩小尺寸打印文档以供审阅。', icon: 'eye' },
    ],
    faq: [
      { question: '有哪些布局可用？', answer: '2合1、4合1、6合1、9合1和自定义网格布局可用。' },
      { question: '可以在页面之间添加边框吗？', answer: '是的，您可以在页面之间添加边框和间距。' },
      { question: '页面顺序会保留吗？', answer: '是的，页面按阅读顺序排列（从左到右，从上到下）。' },
    ],
  },

  'combine-single-page': {
    title: '合并为单页',
    metaDescription: '将PDF页面拼接成一个连续页面。创建可滚动的单页文档。',
    keywords: ['合并页面', '单页pdf', '拼接页面', '连续滚动'],
    description: `
      <p>合并为单页将所有PDF页面拼接成一个连续页面。创建非常适合网络查看或连续阅读的可滚动文档。</p>
      <p>页面垂直连接，间距可自定义。结果是包含所有内容的单个长页面。</p>
      <p>所有处理都在您的浏览器本地进行，确保您的文档保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上传PDF文件', description: '拖放您的PDF文件或点击选择。' },
      { step: 2, title: '设置间距', description: '选择拼接页面之间的间隙。' },
      { step: 3, title: '合并并下载', description: '点击合并创建单页PDF。' },
    ],
    useCases: [
      { title: '网络文档', description: '创建可滚动的PDF以供网页嵌入。', icon: 'globe' },
      { title: '连续阅读', description: '将分页文档转换为连续滚动。', icon: 'scroll' },
      { title: '长篇内容', description: '合并页面以实现无缝的长篇阅读。', icon: 'file-text' },
    ],
    faq: [
      { question: '有页数限制吗？', answer: '非常长的文档可能受浏览器内存限制。' },
      { question: '可以在页面之间添加分隔符吗？', answer: '是的，您可以在原始页面之间添加间距或线条。' },
      { question: '这适合打印吗？', answer: '结果最适合屏幕查看；打印布局请使用N合一。' },
    ],
  },

  'view-metadata': {
    title: '查看元数据',
    metaDescription: '查看PDF文档属性。查看作者、标题、日期和其他元数据。',
    keywords: ['pdf元数据', '文档属性', 'pdf信息', '查看pdf详情'],
    description: `
      <p>查看元数据显示PDF文件中的所有文档属性和元数据。查看作者、标题、主题、关键词、创建日期、修改日期等。</p>
      <p>对于审核文档、检查文件信息或验证文档真实性非常有用。</p>
      <p>所有查看都在您的浏览器中进行，确保您的文档保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上传PDF文件', description: '拖放您的PDF文件或点击选择。' },
      { step: 2, title: '查看属性', description: '查看以有组织格式显示的所有元数据。' },
      { step: 3, title: '如需导出', description: '可选择将元数据导出为JSON。' },
    ],
    useCases: [
      { title: '文档审核', description: '审阅文档属性以确保合规性。', icon: 'clipboard-check' },
      { title: '验证真实性', description: '检查创建日期和作者信息。', icon: 'shield' },
      { title: '文件信息', description: '获取PDF文件的详细信息。', icon: 'info' },
    ],
    faq: [
      { question: '显示哪些元数据？', answer: '标题、作者、主题、关键词、创建者、生产者、日期和PDF版本。' },
      { question: '可以在这里编辑元数据吗？', answer: '使用编辑元数据工具修改文档属性。' },
      { question: '包含XMP元数据吗？', answer: '是的，标准和XMP元数据都会显示。' },
    ],
  },

  'edit-metadata': {
    title: '编辑元数据',
    metaDescription: '编辑PDF文档属性。更改标题、作者、主题和关键词。',
    keywords: ['编辑pdf元数据', '更改pdf属性', 'pdf作者', '文档信息'],
    description: `
      <p>编辑元数据允许您修改PDF文件中的文档属性。更改标题、作者、主题、关键词和其他元数据字段。</p>
      <p>非常适合纠正文档信息、添加正确的归属或为分发准备文件。</p>
      <p>所有编辑都在您的浏览器中进行，确保您的文档保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上传PDF文件', description: '拖放您的PDF文件或点击选择。' },
      { step: 2, title: '编辑属性', description: '修改标题、作者、主题、关键词和其他字段。' },
      { step: 3, title: '保存并下载', description: '点击保存应用更改并下载。' },
    ],
    useCases: [
      { title: '添加归属', description: '设置正确的作者和创建者信息。', icon: 'user' },
      { title: 'SEO优化', description: '添加关键词和描述以提高可搜索性。', icon: 'search' },
      { title: '文档准备', description: '在共享前准备具有正确元数据的文档。', icon: 'file-check' },
    ],
    faq: [
      { question: '可以编辑哪些字段？', answer: '标题、作者、主题、关键词、创建者和生产者字段。' },
      { question: '可以清除所有元数据吗？', answer: '使用删除元数据工具去除所有文档属性。' },
      { question: '日期可以编辑吗？', answer: '创建和修改日期会自动更新。' },
    ],
  },

  'pdf-to-zip': {
    title: 'PDF转ZIP',
    metaDescription: '将多个PDF打包成ZIP压缩包。压缩和捆绑PDF文件。',
    keywords: ['pdf转zip', '压缩pdf', '捆绑pdf', '存档pdf'],
    description: `
      <p>PDF转ZIP将多个PDF文件打包成一个ZIP压缩包。压缩和捆绑您的PDF以便于共享、存储或备份。</p>
      <p>该工具创建包含所有PDF文件的压缩存档，减少总大小并简化文件管理。</p>
      <p>所有处理都在您的浏览器中进行，确保您的文件保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上传PDF', description: '拖放多个PDF文件或点击选择。' },
      { step: 2, title: '配置存档', description: '可选设置存档名称和压缩级别。' },
      { step: 3, title: '创建并下载', description: '点击创建生成ZIP压缩包。' },
    ],
    useCases: [
      { title: '文件共享', description: '捆绑多个PDF以便于共享。', icon: 'share-2' },
      { title: '创建备份', description: '创建PDF集合的压缩备份。', icon: 'archive' },
      { title: '电子邮件附件', description: '将PDF合并成一个附件以供电子邮件使用。', icon: 'mail' },
    ],
    faq: [
      { question: '应用多少压缩？', answer: 'ZIP压缩通常将总大小减少10-30%。' },
      { question: '有文件限制吗？', answer: '您可以在单个存档中包含最多100个PDF。' },
      { question: '可以设置密码吗？', answer: '目前不支持创建受密码保护的ZIP。' },
    ],
  },

  'compare-pdfs': {
    title: '比较PDF',
    metaDescription: '比较两个PDF文档。高亮显示版本之间的差异。',
    keywords: ['比较pdf', 'pdf差异', '文档比较', '版本比较'],
    description: `
      <p>比较PDF分析两个PDF文档并高亮显示它们之间的差异。非常适合审阅文档修订、检查合同更改或验证编辑。</p>
      <p>以并排或叠加模式查看文档，差异会高亮显示。该工具识别文本更改、添加和删除。</p>
      <p>所有比较都在您的浏览器中进行，确保您的文档保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上传两个PDF', description: '上传原始和修改后的PDF文档。' },
      { step: 2, title: '比较文档', description: '以并排或叠加模式查看高亮显示的差异。' },
      { step: 3, title: '导出结果', description: '下载比较报告或带注释的PDF。' },
    ],
    useCases: [
      { title: '合同审阅', description: '比较合同版本以识别更改。', icon: 'file-text' },
      { title: '文档修订', description: '审阅文档版本之间的编辑。', icon: 'git-compare' },
      { title: '质量保证', description: '验证只进行了预期的更改。', icon: 'check-circle' },
    ],
    faq: [
      { question: '检测哪些类型的差异？', answer: '文本添加、删除、修改和格式更改。' },
      { question: '可以比较扫描的文档吗？', answer: '扫描的文档应先进行OCR处理以进行文本比较。' },
      { question: '有视觉比较吗？', answer: '是的，叠加模式显示页面之间的视觉差异。' },
    ],
  },

  'posterize-pdf': {
    title: '海报化PDF',
    metaDescription: '将大型PDF页面分割成可打印的瓷砖。从PDF页面创建海报。',
    keywords: ['海报化pdf', '瓷砖pdf', '大幅面打印', 'pdf海报'],
    description: `
      <p>海报化PDF将大型PDF页面分割成可以在标准纸张上打印并组装成海报的较小瓷砖。非常适合打印大型图表、地图或艺术品。</p>
      <p>配置网格大小和重叠以便于组装。该工具自动计算目标输出尺寸的瓷砖尺寸。</p>
      <p>所有处理都在您的浏览器本地进行，确保您的文档保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上传PDF文件', description: '拖放您的大幅面PDF或点击选择。' },
      { step: 2, title: '配置瓷砖', description: '设置网格大小、重叠和输出纸张尺寸。' },
      { step: 3, title: '创建并下载', description: '点击创建生成可打印的瓷砖。' },
    ],
    useCases: [
      { title: '海报打印', description: '在标准纸张上打印大型海报。', icon: 'maximize-2' },
      { title: '地图打印', description: '分段打印大型地图以供组装。', icon: 'map' },
      { title: '艺术品复制', description: '从PDF艺术品创建大型打印品。', icon: 'image' },
    ],
    faq: [
      { question: '应该使用多少重叠？', answer: '建议10-20mm的重叠以便于组装时对齐。' },
      { question: '可以添加裁切标记吗？', answer: '是的，可以添加裁切标记以帮助切割和对齐。' },
      { question: '支持哪些纸张尺寸？', answer: '支持A4、Letter、A3和自定义尺寸。' },
    ],
  },

  // ==================== 优化与修复 ====================
  'fix-page-size': {
    title: '修复页面大小',
    metaDescription: '标准化PDF页面大小。将所有页面转换为统一尺寸。',
    keywords: ['修复页面大小', '标准化pdf', '统一页面', '调整pdf页面大小'],
    description: `
      <p>修复页面大小将PDF中的所有页面标准化为统一尺寸。将混合尺寸文档转换为一致的页面大小，以便专业展示或打印。</p>
      <p>从标准尺寸（A4、Letter等）中选择或设置自定义尺寸。内容会缩放或定位以适应新的页面大小。</p>
      <p>所有处理都在您的浏览器本地进行，确保您的文档保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上传PDF文件', description: '拖放您的PDF文件或点击选择。' },
      { step: 2, title: '选择目标大小', description: '选择标准尺寸或输入自定义尺寸。' },
      { step: 3, title: '应用并下载', description: '点击应用标准化页面并下载。' },
    ],
    useCases: [
      { title: '打印准备', description: '标准化页面以实现一致的打印。', icon: 'printer' },
      { title: '文档清理', description: '修复页面大小不一致的文档。', icon: 'file-check' },
      { title: '专业文档', description: '创建统一的文档以供分发。', icon: 'briefcase' },
    ],
    faq: [
      { question: '内容如何处理？', answer: '内容会缩放以适应或居中在新页面大小上。' },
      { question: '可以保持纵横比吗？', answer: '是的，内容可以按比例缩放以适应。' },
      { question: '有哪些标准尺寸可用？', answer: 'A4、A3、Letter、Legal和其他常见尺寸。' },
    ],
  },

  'linearize-pdf': {
    title: '线性化PDF',
    metaDescription: '优化PDF以实现快速网络查看。启用渐进式加载。',
    keywords: ['线性化pdf', '快速网络查看', '优化pdf', '渐进式pdf'],
    description: `
      <p>线性化PDF优化您的文档以实现快速网络查看。线性化的PDF可以在整个文件下载完成之前开始显示，改善用户体验。</p>
      <p>也称为"快速网络查看"，此优化重新组织PDF结构以实现网络浏览器中的渐进式加载。</p>
      <p>所有处理都在您的浏览器本地进行，确保您的文档保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上传PDF文件', description: '拖放您的PDF文件或点击选择。' },
      { step: 2, title: '线性化', description: '点击线性化优化以供网络查看。' },
      { step: 3, title: '下载', description: '下载优化后的PDF。' },
    ],
    useCases: [
      { title: '网络发布', description: '优化PDF以供网站下载。', icon: 'globe' },
      { title: '电子邮件附件', description: '创建为收件人更快打开的PDF。', icon: 'mail' },
      { title: '在线文档', description: '改善在线文档的查看体验。', icon: 'cloud' },
    ],
    faq: [
      { question: '什么是线性化？', answer: '线性化重新组织PDF数据以实现渐进式加载。' },
      { question: '会减小文件大小吗？', answer: '线性化可能由于添加的结构而略微增加文件大小。' },
      { question: '与所有查看器兼容吗？', answer: '是的，线性化的PDF在所有PDF阅读器中都能工作。' },
    ],
  },

  'page-dimensions': {
    title: '页面尺寸',
    metaDescription: '分析PDF页面大小。查看文档中所有页面的尺寸。',
    keywords: ['pdf页面大小', '页面尺寸', 'pdf测量', '文档大小'],
    description: `
      <p>页面尺寸分析并显示PDF文档中每个页面的大小。以各种单位（英寸、毫米、点）查看尺寸并识别非标准大小的页面。</p>
      <p>对于打印准备、文档分析或识别不一致的页面大小非常有用。</p>
      <p>所有分析都在您的浏览器中进行，确保您的文档保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上传PDF文件', description: '拖放您的PDF文件或点击选择。' },
      { step: 2, title: '查看尺寸', description: '查看所有页面显示的页面大小。' },
      { step: 3, title: '导出报告', description: '可选择将尺寸导出为JSON。' },
    ],
    useCases: [
      { title: '打印规划', description: '打印前检查页面大小。', icon: 'printer' },
      { title: '文档分析', description: '识别尺寸异常的页面。', icon: 'search' },
      { title: '质量控制', description: '验证页面大小符合规格。', icon: 'check-circle' },
    ],
    faq: [
      { question: '有哪些单位可用？', answer: '英寸、毫米、厘米和点。' },
      { question: '会显示方向吗？', answer: '是的，会指示纵向或横向方向。' },
      { question: '可以修复不一致的大小吗？', answer: '使用修复页面大小工具标准化尺寸。' },
    ],
  },

  'remove-restrictions': {
    title: '删除限制',
    metaDescription: '删除PDF限制。解锁打印、复制和编辑权限。',
    keywords: ['删除pdf限制', '解锁pdf', 'pdf权限', '取消pdf限制'],
    description: `
      <p>删除限制解锁具有权限限制的PDF，这些限制阻止打印、复制或编辑。此工具在保留文档内容的同时删除所有者密码限制。</p>
      <p>注意：此工具无法删除阻止打开文档的用户密码。对于受密码保护的文件，请使用解密PDF。</p>
      <p>所有处理都在您的浏览器本地进行，确保您的文档保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上传受限PDF', description: '拖放您的受限PDF或点击选择。' },
      { step: 2, title: '删除限制', description: '点击删除解锁文档。' },
      { step: 3, title: '下载', description: '下载不受限制的PDF。' },
    ],
    useCases: [
      { title: '启用打印', description: '解锁阻止打印的PDF。', icon: 'printer' },
      { title: '启用复制', description: '允许文本选择和复制。', icon: 'copy' },
      { title: '启用编辑', description: '删除文档编辑限制。', icon: 'edit' },
    ],
    faq: [
      { question: '这合法吗？', answer: '从您拥有或有权使用的文档中删除限制通常是合法的。' },
      { question: '可以删除打开密码吗？', answer: '不能，对于受密码保护的文档请使用解密PDF。' },
      { question: '内容会受影响吗？', answer: '不会，只删除限制；内容保持不变。' },
    ],
  },

  'repair-pdf': {
    title: '修复PDF',
    metaDescription: '修复损坏的PDF文件。恢复和修复受损文档。',
    keywords: ['修复pdf', '修复pdf', '恢复pdf', '损坏的pdf'],
    description: `
      <p>修复PDF尝试修复损坏或受损的PDF文件。该工具分析文档结构并重建它以尽可能多地恢复内容。</p>
      <p>对于恢复无法打开、显示错误或由于损坏而缺少内容的文件非常有用。</p>
      <p>所有修复都在您的浏览器中进行，确保您的文档保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上传损坏的PDF', description: '拖放您损坏的PDF或点击选择。' },
      { step: 2, title: '修复文档', description: '点击修复尝试恢复。' },
      { step: 3, title: '下载', description: '如果成功，下载修复后的PDF。' },
    ],
    useCases: [
      { title: '恢复文件', description: '恢复无法正常打开的PDF。', icon: 'refresh-cw' },
      { title: '修复错误', description: '修复显示错误消息的文件。', icon: 'wrench' },
      { title: '恢复内容', description: '从部分损坏的文件中恢复内容。', icon: 'file-check' },
    ],
    faq: [
      { question: '所有PDF都可以修复吗？', answer: '成功取决于损坏的类型和程度。' },
      { question: '所有内容都会恢复吗？', answer: '该工具尽可能多地恢复；严重损坏的文件可能有损失。' },
      { question: '应该保留原件吗？', answer: '是的，始终保留原始文件作为备份。' },
    ],
  },

  // ==================== 安全PDF ====================
  'encrypt-pdf': {
    title: '加密PDF',
    metaDescription: '为PDF文件添加密码保护。添加加密并设置权限。',
    keywords: ['加密pdf', '密码保护pdf', '安全pdf', 'pdf加密'],
    description: `
      <p>加密PDF为您的PDF文档添加密码保护和加密。设置用户密码以防止打开，设置所有者密码以控制打印和复制等权限。</p>
      <p>根据不同的安全需求选择不同的加密级别（128位或256位AES）。</p>
      <p>所有加密都在您的浏览器中进行，确保您的密码和文档保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上传PDF文件', description: '拖放您的PDF文件或点击选择。' },
      { step: 2, title: '设置密码', description: '输入用户密码和/或所有者密码。配置权限。' },
      { step: 3, title: '加密并下载', description: '点击加密保护您的PDF并下载。' },
    ],
    useCases: [
      { title: '机密文档', description: '保护敏感的商业文档。', icon: 'lock' },
      { title: '个人文件', description: '保护个人文档如税务申报表。', icon: 'shield' },
      { title: '受控分发', description: '限制收件人对文档的操作。', icon: 'key' },
    ],
    faq: [
      { question: '用户密码和所有者密码有什么区别？', answer: '用户密码防止打开；所有者密码控制权限。' },
      { question: '使用什么加密？', answer: '提供128位或256位AES加密选项。' },
      { question: '可以只设置权限而不设置用户密码吗？', answer: '是的，您可以只设置所有者密码来控制权限。' },
    ],
  },

  'sanitize-pdf': {
    title: '清理PDF',
    metaDescription: '从PDF中删除隐藏数据。清除元数据、脚本和敏感信息。',
    keywords: ['清理pdf', '清洁pdf', '删除隐藏数据', 'pdf隐私'],
    description: `
      <p>清理PDF从您的文档中删除隐藏数据和潜在敏感信息。去除元数据、嵌入脚本、附件、评论和其他隐藏内容。</p>
      <p>对于准备公开分发的文档或当隐私是关注点时至关重要。</p>
      <p>所有清理都在您的浏览器中进行，确保您的文档保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上传PDF文件', description: '拖放您的PDF文件或点击选择。' },
      { step: 2, title: '选择要删除的内容', description: '选择要去除的隐藏数据类型。' },
      { step: 3, title: '清理并下载', description: '点击清理清洁PDF并下载。' },
    ],
    useCases: [
      { title: '公开发布', description: '准备文档以供公开分发。', icon: 'globe' },
      { title: '隐私保护', description: '在共享前删除个人信息。', icon: 'shield' },
      { title: '安全合规', description: '满足文档处理的安全要求。', icon: 'check-circle' },
    ],
    faq: [
      { question: '删除哪些隐藏数据？', answer: '元数据、脚本、附件、评论、表单数据和隐藏图层。' },
      { question: '可见内容会受影响吗？', answer: '不会，只删除隐藏数据；可见内容保持不变。' },
      { question: '这是可逆的吗？', answer: '不，删除的数据无法恢复。保留原件的备份。' },
    ],
  },

  'find-and-redact': {
    title: '查找并遮盖',
    metaDescription: '搜索并批量遮盖PDF中的敏感文本。支持正则表达式匹配账号、姓名等敏感信息。',
    keywords: ['遮盖pdf', '查找并遮盖', '批量遮盖', '删除文本', 'pdf脱敏', '隐藏敏感数据'],
    description: `
      <p>查找并遮盖允许您在PDF的所有页面中搜索特定文本、数字或模式，并一次性遮盖所有匹配项。非常适合删除敏感信息，如账号、姓名、地址或任何机密数据。</p>
      <p>在应用遮盖前预览所有匹配项，并选择性地选择要遮盖的出现次数。支持区分大小写搜索、全词匹配和正则表达式以进行高级模式匹配。</p>
      <p>所有处理都在您的浏览器中进行，确保您的文档保持私密和安全。</p>
    `,
    howToUse: [
      { step: 1, title: '上传PDF文件', description: '拖放您的PDF文件或点击选择。' },
      { step: 2, title: '搜索文本', description: '输入要查找和遮盖的文本、数字或正则表达式模式。' },
      { step: 3, title: '审查并选择', description: '预览所有匹配项并选择要遮盖的项目。' },
      { step: 4, title: '应用遮盖', description: '自定义遮盖外观并应用于所选匹配项。' },
    ],
    useCases: [
      { title: '隐私合规', description: '遮盖个人信息以符合GDPR、HIPAA或其他法规。', icon: 'shield' },
      { title: '法律文档', description: '在共享前从法律文档中删除机密数据。', icon: 'scale' },
      { title: '财务记录', description: '从报表中遮盖账号、社保号或财务数据。', icon: 'credit-card' },
    ],
    faq: [
      { question: '遮盖是永久的吗？', answer: '是的，遮盖会永久删除底层文本。原始内容无法恢复。请始终保留原始文件的备份。' },
      { question: '可以遮盖图像或扫描文本吗？', answer: '此工具适用于基于文本的PDF。对于扫描文档，您需要使用基于区域的手动遮盖。' },
      { question: '可以自定义遮盖外观吗？', answer: '是的，您可以设置遮盖颜色、添加边框，并可选择包含替换文本如"[已遮盖]"。' },
      { question: '正则表达式搜索如何工作？', answer: '启用"使用正则表达式"以使用正则模式搜索。例如，\\d{4}-\\d{4}-\\d{4}-\\d{4}可查找信用卡号。' },
    ],
  },
  'redact-pdf': {
    title: 'PDF 涂黑与马赛克脱敏',
    metaDescription: '可视化对 PDF 进行抹黑遮盖、马赛克打码或高斯模糊。物理像素级不可逆销毁与深度元数据清理，100% 本地离线保障隐私安全。',
    keywords: ['PDF脱敏', 'PDF抹黑', 'PDF打码', 'PDF马赛克', 'PDF隐私保护', 'PDF涂黑', '安全PDF编辑器'],
    description: `
      <p>PDF 涂黑与马赛克脱敏工具为您提供直观的可视化交互编辑能力，帮助您永久遮蔽并清除文档中的各类隐私与涉密信息。只需使用鼠标拖拽框选敏感内容（如身份证号、姓名、住址、公章、签名、财务流水、证件照等），即可应用纯黑遮蔽、白条遮盖、马赛克或高斯模糊效果。</p>
      <p>与仅在文字上方覆盖矢量矩形的常规工具不同，本工具采用<strong>物理像素级不可逆固化与栅格化技术</strong>，将遮蔽区域直接融合烧录进页面，彻底销毁底层的文字对象、矢量路径与 OCR 文本流，任何人均无法通过复制、文本提取或反编译逆向还原原始内容。</p>
      <p>同时，工具提供深度元数据清理功能，彻底抹除作者、软件历史指纹与 XMP 扩展流。所有运算均在您的浏览器本地内存中完成，零文件上传，全面满足企业与法务的严苛合规要求。</p>
    `,
    howToUse: [
      { step: 1, title: '上传 PDF 文档', description: '拖拽或点击选择需要进行隐私脱敏的 PDF 文件。' },
      { step: 2, title: '框选敏感区域', description: '在页面上按住鼠标左键拖拽画出需要遮蔽的区域，支持拖拽手柄缩放调整与移动。' },
      { step: 3, title: '选择脱敏效果', description: '选择涂黑遮蔽、白条遮盖、马赛克打码（可调颗粒度）或高斯模糊，可随时开启实时预览验证效果。' },
      { step: 4, title: '生成并下载安全文档', description: '点击“生成脱敏安全 PDF”，系统自动完成物理像素固化与元数据深度清理，即可一键下载。' },
    ],
    useCases: [
      { title: '法规合规与隐私保护', description: '对身份证号、手机号、人脸肖像等敏感个人信息 (PII) 进行合规脱敏，满足数据保护法规。', icon: 'shield' },
      { title: '涉密与法务公文披露', description: '在向外部共享合同、法务文书或调查报告前，对商业机密、签名公章与调解条款进行永久遮蔽。', icon: 'file-text' },
      { title: '财务凭证与票据分享', description: '对银行回单、薪资表、发票流水等财务单据中的敏感账号与金额进行安全打码。', icon: 'lock' },
    ],
    faq: [
      { question: '脱敏后的内容能否被复制或技术手段还原？', answer: '绝对无法还原。工具采用了物理不可逆像素栅格化技术，底层的文本图元已被彻底物理抹除，复制文本或使用反编译软件也无法提取任何底层信息。' },
      { question: '涂黑遮蔽、马赛克与高斯模糊有什么区别？', answer: '涂黑为标准的公文涉密黑框（最严肃正规）；白条遮盖保持页面底色干净；马赛克具有现代化数码打码效果；高斯模糊则带来柔和的毛玻璃磨砂质感。' },
      { question: '我的文件会被上传到云端服务器吗？', answer: '不会。整个渲染、打码、元数据清理和新文档生成过程 100% 运行在您本地浏览器的内存中，无任何网络上传请求。' },
      { question: '系统会清理哪些文档元数据？', answer: '包括文档标题 (Title)、作者 (Author)、主题 (Subject)、关键词 (Keywords)、制作者 (Producer)、创建与修改时间，以及 XMP 扩展元数据流。' },
    ],
  },
  'decrypt-pdf': {
    title: '解密PDF',
    metaDescription: '从PDF文件中删除密码。解锁受密码保护的文档。',
    keywords: ['解密pdf', '删除pdf密码', '解锁pdf', 'pdf密码删除器'],
    description: `
      <p>解密PDF从PDF文档中删除密码保护。输入当前密码以解锁文件并创建不受保护的副本。</p>
      <p>此工具要求您知道当前密码。它无法破解或绕过未知密码。</p>
      <p>所有解密都在您的浏览器中进行，确保您的密码和文档保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上传受保护的PDF', description: '拖放您受密码保护的PDF。' },
      { step: 2, title: '输入密码', description: '输入当前文档密码。' },
      { step: 3, title: '解密并下载', description: '点击解密删除保护并下载。' },
    ],
    useCases: [
      { title: '删除旧密码', description: '当不再需要密码时解锁文档。', icon: 'unlock' },
      { title: '简化访问', description: '创建不受保护的副本以便于共享。', icon: 'share-2' },
      { title: '存档文档', description: '在长期存档前删除密码。', icon: 'archive' },
    ],
    faq: [
      { question: '可以破解未知密码吗？', answer: '不能，您必须知道当前密码才能解密。' },
      { question: '原始文件会被修改吗？', answer: '不会，会创建一个新的不受保护的副本。' },
      { question: '如果忘记密码怎么办？', answer: '很遗憾，我们无法恢复忘记的密码。' },
    ],
  },

  'flatten-pdf': {
    title: '扁平化PDF',
    metaDescription: '扁平化PDF表单和注释。使内容不可编辑。',
    keywords: ['扁平化pdf', '扁平化表单', '扁平化注释', '不可编辑pdf'],
    description: `
      <p>扁平化PDF将表单字段和注释等交互元素转换为静态内容。扁平化的PDF看起来相同，但不能再编辑。</p>
      <p>非常适合完成已填写的表单、保留注释或创建不可编辑的文档版本。</p>
      <p>所有处理都在您的浏览器本地进行，确保您的文档保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上传PDF文件', description: '拖放您带有表单或注释的PDF。' },
      { step: 2, title: '选择要扁平化的内容', description: '选择扁平化表单、注释或两者。' },
      { step: 3, title: '扁平化并下载', description: '点击扁平化创建静态PDF。' },
    ],
    useCases: [
      { title: '完成表单', description: '锁定已填写的表单数据以防止更改。', icon: 'lock' },
      { title: '保留注释', description: '使注释在文档中永久化。', icon: 'check-circle' },
      { title: '存档文档', description: '创建不可编辑的版本以供存档。', icon: 'archive' },
    ],
    faq: [
      { question: '扁平化是可逆的吗？', answer: '不，扁平化是永久的。保留原件的备份。' },
      { question: '外观会改变吗？', answer: '不会，文档看起来相同，但不再是交互式的。' },
      { question: '会减小文件大小吗？', answer: '有时会，因为交互元素被转换为更简单的内容。' },
    ],
  },

  'remove-metadata-full': {
    title: '元数据的完全删除',
    metaDescription: '从 PDF 文件中剥离所有元数据和属性。清理以增加匿名性。',
    keywords: ['pdf 元数据 删除', 'pdf 属性 清除', 'pdf 匿名化', 'pdf 隐私'],
    description: `
      <p>删除 PDF 文件中隐藏的所有信息，如作者、创建软件和创建日期/时间。这在从公开发布的材料中清除内部信息时非常重要。</p>
    `,
    howToUse: [
      { step: 1, title: '选择 PDF', description: '上传您想要清理的 PDF 文件。' },
      { step: 2, title: '执行删除', description: '点击“删除元数据”按钮。' },
      { step: 3, title: '保存', description: '下载属性为空的 PDF。' },
    ],
    useCases: [
      { title: '公共文档分发', description: '在互联网上发布之前删除作者的个人姓名。', icon: 'shield' },
      { title: '企业对企业交易', description: '清除不必要的元数据（如创建历史记录）以保持机密性。', icon: 'briefcase' },
      { title: '匿名材料创建', description: '确保无法通过属性识别身份。', icon: 'user-x' },
    ],
    faq: [
      { question: '文件内容会改变吗？', answer: '不会，任何可见内容（如文本或图像）都不会改变。' },
      { question: '哪些项目会消失？', answer: '标题、作者、主题、关键词、创建日期、修改日期、PDF 创建程序名称等将被删除。' },
      { question: '可以恢复吗？', answer: '删除后的文件中的元数据无法恢复。' },
    ],
  },

  'remove-metadata': {
    title: '删除元数据',
    metaDescription: '从PDF文件中去除元数据。删除作者、日期和文档属性。',
    keywords: ['删除pdf元数据', '去除元数据', 'pdf隐私', '匿名pdf'],
    description: `
      <p>删除元数据从您的PDF文件中去除所有文档属性和元数据。删除作者姓名、创建日期、软件信息和其他识别数据。</p>
      <p>在共享文档或当元数据可能泄露敏感信息时，对于隐私至关重要。</p>
      <p>所有处理都在您的浏览器本地进行，确保您的文档保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上传PDF文件', description: '拖放您的PDF文件或点击选择。' },
      { step: 2, title: '删除元数据', description: '点击删除去除所有元数据。' },
      { step: 3, title: '下载', description: '下载无元数据的PDF。' },
    ],
    useCases: [
      { title: '隐私保护', description: '在共享前删除个人信息。', icon: 'shield' },
      { title: '匿名文档', description: '创建没有作者归属的文档。', icon: 'user-x' },
      { title: '干净分发', description: '分发没有内部元数据的文档。', icon: 'send' },
    ],
    faq: [
      { question: '删除哪些元数据？', answer: '作者、标题、主题、关键词、日期、创建者和生产者信息。' },
      { question: 'XMP元数据会删除吗？', answer: '是的，标准和XMP元数据都会去除。' },
      { question: '内容会受影响吗？', answer: '不会，只删除元数据；文档内容保持不变。' },
    ],
  },

  'change-permissions': {
    title: '更改权限',
    metaDescription: '修改PDF权限。控制打印、复制和编辑访问。',
    keywords: ['pdf权限', '更改pdf访问', '限制pdf', 'pdf安全'],
    description: `
      <p>更改权限修改PDF文档的访问控制。启用或禁用打印、复制、编辑和注释权限。</p>
      <p>设置所有者密码以强制执行这些限制。收件人可以查看文档，但在可执行的操作上受到限制。</p>
      <p>所有处理都在您的浏览器本地进行，确保您的文档保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上传PDF文件', description: '拖放您的PDF文件或点击选择。' },
      { step: 2, title: '设置权限', description: '启用或禁用打印、复制、编辑和注释。' },
      { step: 3, title: '应用并下载', description: '设置所有者密码并下载受限PDF。' },
    ],
    useCases: [
      { title: '防止复制', description: '禁用文本复制以保护内容。', icon: 'copy' },
      { title: '控制打印', description: '限制或允许文档打印。', icon: 'printer' },
      { title: '限制编辑', description: '防止对文档的修改。', icon: 'edit-3' },
    ],
    faq: [
      { question: '需要密码吗？', answer: '需要所有者密码来强制执行权限。' },
      { question: '权限可以删除吗？', answer: '是的，使用所有者密码或删除限制工具。' },
      { question: '所有PDF阅读器都兼容吗？', answer: '大多数PDF阅读器尊重权限，但有些可能不强制执行。' },
    ],
  },
  'pdf-to-docx': {
    title: 'PDF转Word',
    metaDescription: '将PDF转换为可编辑的Word文档（DOCX）。保留原始布局、格式和图像。',
    keywords: ['pdf转word', 'pdf转docx', 'pdf转可编辑文档', 'pdf转换器'],
    description: `
      <p>PDF转Word工具可将您的PDF文档转换为完全可编辑的Microsoft Word (DOCX)文件。该工具采用先进的解析技术，能够最大限度地保留原始文档的排版、字体、表格和图像。</p>
      <p>无需重新打字，即可轻松修改PDF内容。非常适合处理合同、报告、简历以及任何需要深度编辑的文档。</p>
      <p>所有转换均在您的浏览器本地完成，确保您的商业机密和个人隐私不会被泄露。</p>
    `,
    howToUse: [
      { step: 1, title: '上传PDF文件', description: '拖放PDF文件或点击选择要转换的文档。' },
      { step: 2, title: '开始转换', description: '等待系统自动解析并重建文档结构。' },
      { step: 3, title: '下载Word文档', description: '点击下载生成的DOCX文件，并在Microsoft Word或WPS中打开。' },
    ],
    useCases: [
      { title: '合同修改', description: '将PDF格式的合同转回Word，以便进行条款修订和版本对比。', icon: 'file-text' },
      { title: '简历更新', description: '找回以前制作的PDF简历，转换为Word格式快速更新工作经历。', icon: 'user' },
      { title: '资料整理', description: '从大型PDF报告中提取文本和表格，用于撰写新的文档或分析报告。', icon: 'copy' },
    ],
    faq: [
      { question: '转换后的排版会乱吗？', answer: '对于标准文档，我们的算法能实现极高的还原度。但如果原PDF是由图片生成的扫描件，建议先使用OCR工具。' },
      { question: '支持WPS或Google Docs吗？', answer: '生成的.docx文件是国际标准格式，完全兼容Microsoft Word、WPS Office、Google Docs和LibreOffice。' },
      { question: '转换受保护的PDF吗？', answer: '如果PDF设置了打开权限，您需要先使用"解密PDF"工具移除密码。' },
    ],
  },



  'pdf-to-txt': {
    title: 'PDF转文本',
    metaDescription: '从PDF中提取纯文本。移除所有格式和图像，获取最简洁的文字内容。',
    keywords: ['pdf转txt', 'pdf提取文本', '获取pdf文字', 'pdf纯文本'],
    description: `
      <p>PDF转文本工具旨在为您提供最纯粹的文字提取体验。它会剥离文档中的背景、图像、链接和复杂的排版，仅保留最核心的文字内容。</p>
      <p>适合需要将PDF内容导入文本编辑器、进行代码分析或准备机器翻译语料的用户。</p>
    `,
    howToUse: [
      { step: 1, title: '上传PDF文件', description: '拖放PDF文件到此处。' },
      { step: 2, title: '提取文字', description: '系统将快速扫描所有页面的字符流。' },
      { step: 3, title: '下载文本文件', description: '获取.txt格式的纯文本文件。' },
    ],
    useCases: [
      { title: '电子书转文本', description: '将PDF格式的小说转换为纯文本，方便在旧款电子书阅读器上使用。', icon: 'book' },
      { title: '语料库建设', description: '批量从PDF文档中提取文字内容，用于AI训练或大数据分析。', icon: 'code' },
      { title: '翻译准备', description: '提取纯文本内容，方便导入CAT工具或网页翻译器。', icon: 'languages' },
    ],
    faq: [
      { question: '扫描件能转成文本吗？', answer: '普通转换工具无法处理扫描件，请点击导航栏中的"OCR PDF"进行识别。' },
      { question: '排版会乱吗？', answer: 'TXT不支持样式，但我们会尽力通过空格和换行保留原始文本的逻辑顺序。' },
      { question: '支持特殊字符吗？', answer: '支持。提取出的文本默认采用UTF-8编码，兼容中文、韩文、日文等全球语言。' },
    ],
  },

  'deskew-pdf': {
    title: '校正PDF倾斜',
    metaDescription: '自动校正扫描或倾斜的PDF页面。使用精确的角度检测修复倾斜文档。',
    keywords: ['校正pdf倾斜', '修正pdf', '修复倾斜扫描', '自动旋转pdf', '校正pdf角度'],
    description: `
      <p>校正PDF倾斜使用先进的投影轮廓方差分析自动检测并校正PDF文档中的倾斜或歪斜页面。这对于以一定角度送入扫描仪的扫描文档至关重要。</p>
      <p>该工具分析不同角度下的文本和内容对齐情况，找到最佳旋转角度，然后应用校正。您可以调整敏感度阈值（1-30）和DPI设置（72-300）以获得最佳结果。</p>
      <p>所有处理都在您的浏览器中使用WebAssembly技术本地进行，确保您的文档保持私密和安全。</p>
    `,
    howToUse: [
      { step: 1, title: '上传PDF文件', description: '拖放您的扫描PDF文件或点击选择。' },
      { step: 2, title: '配置设置', description: '如需要，调整阈值敏感度和DPI以获得更好的检测效果。' },
      { step: 3, title: '处理并下载', description: '点击校正以拉直页面并下载校正后的PDF。' },
    ],
    useCases: [
      { title: '扫描文档', description: '修复从文档进纸器以一定角度扫描的页面。', icon: 'scan' },
      { title: '手机扫描', description: '校正使用智能手机拍摄的倾斜文档照片。', icon: 'smartphone' },
      { title: '档案修复', description: '拉直旧扫描档案以提高可读性。', icon: 'archive' },
    ],
    faq: [
      { question: '角度检测有多准确？', answer: '该工具使用投影轮廓方差分析来检测高达±10度的倾斜角度，具有高精度。它会自动跳过角度小于0.3度的页面。' },
      { question: '文本质量会受到影响吗？', answer: '对于90度的倍数旋转，不会发生质量损失。对于其他角度，工具会四舍五入到最近的度数并保持良好的质量。' },
      { question: '我可以只校正特定页面吗？', answer: '该工具会分析所有页面，但只校正检测到的倾斜超过敏感度阈值的页面。倾斜最小的页面保持不变。' },
      { question: '什么是敏感度阈值？', answer: '值1-10仅校正明显的倾斜，11-20检测中等倾斜，21-30捕获细微角度。默认值为10，用于平衡检测。' },
      { question: '处理需要多长时间？', answer: '处理时间取决于文件大小和DPI。150 DPI（默认值）在速度和准确性之间提供了良好的平衡。更高的DPI更准确但更慢。' },
    ],
  },
  'pdf-to-pdfa': {
    title: 'PDF转PDF/A',
    metaDescription: '将普通PDF转换为适合长期存档的PDF/A格式。符合ISO标准。',
    keywords: ['pdf转pdfa', 'pdf长期存档', '符合性转换', 'iso标准pdf'],
    description: `
      <p>PDF/A是PDF的ISO标准化版本，专门用于电子文档的长期保存和存档。它确保了文档在未来几十年内即使软件环境发生变化，其显示效果依然保持一致。</p>
      <p>该工具会嵌入所有字体并移除不符合存档规范的动态元素（如JavaScript），使文档变得更加稳健和透明。</p>
    `,
    howToUse: [
      { step: 1, title: '上传PDF', description: '选择需要永久存档的重要文件。' },
      { step: 2, title: '转换标准', description: '系统将自动调整文档属性以符合PDF/A-1b、2b或3b规范。' },
      { step: 3, title: '下载存档文件', description: '获取适用于政府、法律或学术要求的存档PDF。' },
    ],
    useCases: [
      { title: '法律文书存档', description: '将合同和裁决书转换为PDF/A，确保长期司法效力。', icon: 'scale' },
      { title: '政府公文递交', description: '满足政府部门对递交文件必须为PDF/A格式的要求。', icon: 'landmark' },
      { title: '论文提交', description: '高校图书馆通常要求毕业论文采用PDF/A格式以进行永久馆藏。', icon: 'graduation-cap' },
    ],
    faq: [
      { question: 'PDF/A有什么好处？', answer: '它具有自包含性，这意味着显示文档所需的所有信息（如字体）都已保存在文件内，不依赖外部链接。' },
      { question: '普通PDF查看器能打开吗？', answer: '完全可以。PDF/A与所有现有的PDF阅读器完美兼容。' },
      { question: '转换后文件会变大吗？', answer: '通常会，因为必须嵌入所有字体文件以确保长期显示的准确性。' },
    ],
  },

  'pdf-to-html': {
    title: 'PDF转HTML',
    metaDescription: '将PDF页面转换为网页格式（HTML）。支持自适应布局和跨平台浏览。',
    keywords: ['pdf转html', 'pdf转网页', 'pdf在线发布', 'pdf发布为网页'],
    description: `
      <p>PDF转HTML工具可以将您的静态PDF文档转化为可直接在浏览器中浏览的网页。转换后的内容支持文字检索，并能自适应不同的屏幕尺寸。</p>
      <p>非常适合将PDF手册、宣传册或研究论文发布到网站上，提供比下载PDF文件更好的用户体验。</p>
    `,
    howToUse: [
      { step: 1, title: '上传PDF', description: '选择要网页化的PDF文件。' },
      { step: 2, title: '生成HTML', description: '系统将页面结构、样式和图片重新编码为HTML/CSS。' },
      { step: 3, title: '下载或查看', description: '下载包含HTML文件和资源的压缩包。' },
    ],
    useCases: [
      { title: '在线展示手册', description: '将产品手册转换为网页，方便客户直接通过手机浏览器查阅。', icon: 'monitor' },
      { title: 'SEO增强', description: '将PDF内容转为HTML页面，更容易被搜索引擎索引，提高网站流量。', icon: 'search' },
      { title: '内容分发', description: '制作可以在不安装PDF阅读器的情况下就能查看的轻量化内容。', icon: 'share-2' },
    ],
    faq: [
      { question: '转换后的网页支持响应式吗？', answer: '是的，我们生成的代码能适应手机、平板和桌面设备。' },
      { question: '图片能保留吗？', answer: '可以，PDF中的所有插图和照片都会被优化并保存为网页适用的图像格式。' },
      { question: 'HTML文件里会有乱码吗？', answer: '不会。系统会正确映射编码，确保转换后的文字内容准确无误。' },
    ],
  },

  'extract-images': {
    title: '从PDF提取图片',
    metaDescription: '从PDF文件中提取所有嵌入的图片。支持单独下载或打包成ZIP下载。自动过滤小尺寸图片。',
    keywords: ['提取pdf图片', 'pdf图片提取', '从pdf获取图片', '下载pdf图片', 'pdf转图片'],
    description: `
      <p>从PDF提取图片工具可以从您的PDF文档中检索所有嵌入的图片。您可以单独下载高质量图片，也可以将所有图片打包成ZIP压缩包一次性下载。</p>
      <p>该工具会根据可自定义的尺寸阈值自动过滤掉小图片（如图标和装饰图案）。支持批量处理多个PDF文件，高效便捷。</p>
      <p>所有提取过程都在您的浏览器中进行，确保您的文档保持私密和安全。</p>
    `,
    howToUse: [
      { step: 1, title: '上传PDF文件', description: '拖放一个或多个PDF文件，或点击从设备中选择文件。' },
      { step: 2, title: '设置过滤选项', description: '调整最小宽度、高度和文件大小，过滤掉不需要的小图片。' },
      { step: 3, title: '提取图片', description: '点击提取按钮，查找PDF中所有嵌入的图片。' },
      { step: 4, title: '下载', description: '单独下载每张图片，或将所有图片打包成ZIP压缩包下载。' },
    ],
    useCases: [
      { title: '图片恢复', description: '从PDF文档中提取照片和图片，用于重复使用或存档。', icon: 'image' },
      { title: '素材收集', description: '收集PDF报告、演示文稿或宣传册中的所有图形和图片。', icon: 'folder' },
      { title: '内容再利用', description: '从PDF中提取图片，用于其他文档、网站或演示文稿。', icon: 'refresh-cw' },
    ],
    faq: [
      { question: '提取的图片是什么格式？', answer: '图片会尽可能保持原始格式（JPEG、PNG等）提取，原始像素数据会转换为PNG格式。' },
      { question: '为什么有些图片没有提取出来？', answer: '小于设定尺寸阈值的图片会被过滤掉。调整过滤设置可以提取更小的图片。' },
      { question: '可以从扫描的PDF中提取图片吗？', answer: '扫描的PDF通常每页包含一张大图片。如需逐页转换，请使用"PDF转图片"工具。' },
    ],
  },

  'ocg-manager': {
    title: 'PDF图层管理器',
    metaDescription: '管理PDF图层。查看、切换、添加、删除和重命名图层。',
    keywords: ['pdf图层', 'ocg管理器'],
    description: '<p>管理PDF文档中的可选内容组（OCG）。</p>',
    howToUse: [
      { step: 1, title: '上传PDF', description: '上传包含图层的PDF文件。' },
      { step: 2, title: '查看图层', description: '工具自动列出所有图层。' },
      { step: 3, title: '管理图层', description: '切换、添加或删除图层。' },
    ],
    useCases: [
      { title: '技术图纸', description: '管理CAD导出中的图层。', icon: 'ruler' },
      { title: '地图编辑', description: '切换地图图层。', icon: 'map' },
      { title: '印刷准备', description: '准备分层PDF进行打印。', icon: 'printer' },
    ],
    faq: [
      { question: '什么是PDF图层？', answer: 'OCG是PDF中可以显示或隐藏的图层。' },
      { question: '为什么没有图层？', answer: '并非所有PDF都包含图层。' },
      { question: '会影响原始内容吗？', answer: '图层可见性更改仅影响显示。' },
    ],
  },

  'pdf-reader': {
    title: 'PDF阅读器',
    metaDescription: '免费在线PDF阅读器。在浏览器中查看PDF。',
    keywords: ['pdf阅读器', 'pdf查看器'],
    description: '<p>在浏览器中查看PDF文档。</p>',
    howToUse: [
      { step: 1, title: '打开PDF', description: '上传PDF文件。' },
      { step: 2, title: '导航页面', description: '使用页面控制导航。' },
      { step: 3, title: '调整视图', description: '放大、缩小或旋转。' },
    ],
    useCases: [
      { title: '文档审阅', description: '快速审阅PDF文档。', icon: 'book-open' },
      { title: '移动阅读', description: '在任何设备上阅读PDF。', icon: 'smartphone' },
      { title: '快速预览', description: '预览PDF。', icon: 'eye' },
    ],
    faq: [
      { question: '文档安全吗？', answer: '是的，完全在浏览器中处理。' },
      { question: '可以编辑吗？', answer: '此工具仅用于查看。' },
      { question: '支持移动设备吗？', answer: '是的。' },
    ],
  },

  'digital-sign-pdf': {
    title: '数字签名',
    metaDescription: '为PDF文档添加X.509数字签名。使用PFX、P12或PEM证书签署PDF，具有法律效力。',
    keywords: ['pdf数字签名', 'x509证书', 'pfx签名', 'p12签名', 'pem签名', '电子签名'],
    description: `
      <p>数字签名工具允许您为PDF文档添加加密的X.509数字签名。与简单的手绘签名不同，数字签名提供法律效力和文档完整性验证。</p>
      <p>上传您的证书文件（PFX、P12或PEM格式），输入密码，即可签署PDF。您可以添加带有自定义文本、图像和位置的可见签名，或仅用于文档完整性的不可见签名。</p>
      <p>所有签名操作都在浏览器本地进行，您的证书和文档永远不会上传到任何服务器。</p>
    `,
    howToUse: [
      { step: 1, title: '上传PDF', description: '上传需要数字签名的PDF文档。' },
      { step: 2, title: '加载证书', description: '上传X.509证书文件（.pfx、.p12或.pem）并输入密码。' },
      { step: 3, title: '配置签名', description: '可选添加签名原因、位置，以及带有自定义文本或图像的可见签名。' },
      { step: 4, title: '签名并下载', description: '点击签名PDF应用数字签名并下载签名后的文档。' },
    ],
    useCases: [
      { title: '法律文件', description: '使用具有法律约束力的数字签名签署合同、协议和法律文件。', icon: 'scale' },
      { title: '商业审批', description: '数字签署发票、采购订单和审批文件以建立审计跟踪。', icon: 'briefcase' },
      { title: '文档完整性', description: '确保文档在签名后未被篡改。', icon: 'shield-check' },
    ],
    faq: [
      { question: '支持哪些证书格式？', answer: '支持PFX（.pfx）、PKCS#12（.p12）和PEM（.pem）证书格式。' },
      { question: '签名具有法律效力吗？', answer: '是的，使用有效证书的X.509数字签名在大多数司法管辖区具有法律认可。' },
      { question: '可以添加可见签名吗？', answer: '是的，您可以添加带有自定义文本、图像、位置和样式的可见签名。' },
    ],
  },

  'validate-signature': {
    title: '验证签名',
    metaDescription: '验证PDF文档中的数字签名。检查证书有效性、签名者信息和文档完整性。',
    keywords: ['验证pdf签名', '验证数字签名', '检查pdf证书', '签名验证'],
    description: `
      <p>验证签名工具允许您验证PDF文档中的数字签名。检查签名是否有效，查看证书信息，并确认文档完整性。</p>
      <p>上传已签名的PDF，查看所有签名、其有效性状态、签名者信息，以及文档在签名后是否被修改。</p>
      <p>所有验证都在浏览器本地进行，您的文档永远不会上传到任何服务器。</p>
    `,
    howToUse: [
      { step: 1, title: '上传已签名PDF', description: '上传包含数字签名的PDF文档。' },
      { step: 2, title: '查看结果', description: '查看文档中找到的所有签名及其有效性状态。' },
      { step: 3, title: '检查详情', description: '查看证书信息、签名者详情和签名时间戳。' },
      { step: 4, title: '导出报告', description: '可选下载验证结果的JSON报告。' },
    ],
    useCases: [
      { title: '文档验证', description: '验证签名文档是否真实且未被篡改。', icon: 'shield-check' },
      { title: '合规审计', description: '检查签名有效性以满足合规和审计要求。', icon: 'clipboard-check' },
      { title: '证书审查', description: '查看已签名文档的证书详情和到期日期。', icon: 'award' },
    ],
    faq: [
      { question: '"有效"是什么意思？', answer: '有效签名意味着文档自签名以来未被修改，且证书链完整。' },
      { question: '可以验证多个PDF吗？', answer: '是的，您可以上传多个PDF并批量验证所有签名。' },
      { question: '为什么签名可能无效？', answer: '如果文档被修改、证书过期或证书不受信任，签名可能无效。' },
    ],
  },
  'email-to-pdf': {
    title: '邮件转PDF',
    metaDescription: '将邮件文件（.eml、.msg）转换为PDF文档。保留格式、内联图像、可点击链接和嵌入附件。',
    keywords: ['邮件转pdf', 'eml转pdf', 'msg转pdf', '转换邮件', '邮件转换器', '保存邮件为pdf', 'outlook转pdf'],
    description: `
      <p>邮件转PDF将您的邮件文件（.eml和.msg格式）转换为格式良好的PDF文档。该工具保留邮件头信息、正文内容、内联图像（CID替换）、可点击链接，并将附件直接嵌入PDF中。</p>
      <p>自定义输出选项，包括页面大小（A4、Letter、Legal）、带时区支持的日期格式，以及是否包含抄送/密送字段和附件信息。</p>
      <p>所有转换都在您的浏览器本地进行，确保您的邮件保持私密和安全。</p>
    `,
    howToUse: [
      { step: 1, title: '上传邮件文件', description: '上传您的.eml或.msg邮件文件。' },
      { step: 2, title: '配置选项', description: '设置页面大小、日期格式、时区，并选择要包含的字段。' },
      { step: 3, title: '转换并下载', description: '转换为PDF并下载包含嵌入附件的结果。' },
    ],
    useCases: [
      { title: '法律记录', description: '将重要邮件存档为PDF，并嵌入附件用于法律文档。', icon: 'scale' },
      { title: '商业档案', description: '将商业往来转换为PDF以进行长期记录保存。', icon: 'briefcase' },
      { title: '证据保存', description: '以不可编辑的PDF格式保存包含内联图像和附件的邮件证据。', icon: 'shield' },
    ],
    faq: [
      { question: '支持哪些邮件格式？', answer: '.eml（RFC 822）和.msg（Microsoft Outlook）文件都完全支持。' },
      { question: '是否包含附件？', answer: '是的！附件直接嵌入到PDF文件中。您可以使用兼容的PDF阅读器从PDF中提取它们。' },
      { question: '内联图像是否显示？', answer: '是的，通过CID（Content-ID）引用的内联图像会自动转换为base64数据URI并在PDF中显示。' },
      { question: '链接是否可点击？', answer: '是的，所有HTML链接（<a>标签）和纯文本邮件中的URL都会转换为PDF中的可点击链接。' },
      { question: '邮件格式是否保留？', answer: '是的，HTML邮件尽可能保留其格式，包括样式、图像和链接。' },
    ],
  },

  'cbz-to-pdf': {
    title: 'CBZ转PDF',
    metaDescription: '将漫画书归档文件（CBZ）转换为PDF。保留图像顺序和质量，适用于数字漫画。',
    keywords: ['cbz转pdf', '漫画转pdf', '转换cbz', '漫画书转换器', 'cbz转换器'],
    description: `
      <p>CBZ转PDF将漫画书归档文件转换为PDF文档。该工具从CBZ归档中提取所有图像，并将它们编译成PDF，同时保持正确的阅读顺序。</p>
      <p>从各种页面大小选项中选择，包括原始图像尺寸或标准化的漫画书尺寸。非常适合在支持PDF但不支持CBZ的设备上阅读漫画。</p>
      <p>所有转换都在您的浏览器本地进行，确保您的漫画保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上传CBZ文件', description: '上传您的.cbz漫画书归档文件。' },
      { step: 2, title: '选择选项', description: '选择页面大小和图像质量设置。' },
      { step: 3, title: '转换并下载', description: '转换为PDF并下载您的漫画。' },
    ],
    useCases: [
      { title: '电子阅读器兼容性', description: '将CBZ转换为PDF，适用于仅支持PDF的电子阅读器。', icon: 'book' },
      { title: '漫画归档', description: '为您的数字漫画收藏创建PDF归档。', icon: 'archive' },
      { title: '打印准备', description: '将数字漫画转换为PDF以供打印。', icon: 'printer' },
    ],
    faq: [
      { question: '什么是CBZ格式？', answer: 'CBZ是一个包含漫画书页面图像文件的ZIP归档，重命名为.cbz扩展名。' },
      { question: '图像质量是否保留？', answer: '是的，图像以原始质量嵌入到PDF中。' },
      { question: '是否支持嵌套文件夹？', answer: '是的，归档中所有文件夹的图像都会被提取和排序。' },
    ],
  },

  'pdf-booklet': {
    title: 'PDF小册子制作',
    metaDescription: '从PDF创建小册子布局以供打印。为骑马钉装订排列页面，支持多种网格选项。',
    keywords: ['pdf小册子', '小册子制作', '打印小册子', '骑马钉', '拼版'],
    description: `
      <p>PDF小册子制作将您的PDF页面排列成适合打印和折叠制作的小册子布局。非常适合创建宣传册、杂志、小册子和骑马钉装订出版物。</p>
      <p>从各种网格模式（1x2、2x2、2x4、4x4）、纸张尺寸和方向选项中选择。该工具自动处理页面拼版以实现正确的折叠顺序。</p>
      <p>所有处理都在您的浏览器本地进行，确保您的文档保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上传PDF文件', description: '上传您想要转换为小册子的PDF文档。' },
      { step: 2, title: '选择布局', description: '选择网格模式、纸张大小、方向和旋转选项。' },
      { step: 3, title: '创建并下载', description: '生成小册子布局并下载以供打印。' },
    ],
    useCases: [
      { title: '宣传册', description: '从标准PDF文档创建可折叠的宣传册。', icon: 'book-open' },
      { title: '杂志', description: '制作具有正确页面拼版的自出版杂志。', icon: 'book' },
      { title: '活动手册', description: '为活动创建专业的手册小册子。', icon: 'calendar' },
    ],
    faq: [
      { question: '什么是骑马钉装订？', answer: '骑马钉是一种装订方法，将折叠的纸张嵌套并通过折痕钉合。' },
      { question: '我应该使用哪种网格模式？', answer: '1x2是小册子的标准模式。使用2x2或更大的模式进行多页打印以节省纸张。' },
      { question: '可以预览布局吗？', answer: '是的，该工具在生成最终小册子之前提供可视预览。' },
    ],
  },

  'rasterize-pdf': {
    title: '光栅化PDF',
    metaDescription: '将PDF页面转换为高质量图像。导出为PNG、JPEG或WebP，支持自定义DPI设置。',
    keywords: ['光栅化pdf', 'pdf转图像', 'pdf转png', 'pdf转jpeg', '转换pdf页面'],
    description: `
      <p>光栅化PDF将您的PDF页面转换为高质量的光栅图像。从PNG、JPEG或WebP输出格式中选择，完全控制DPI和质量设置。</p>
      <p>非常适合创建缩略图、社交媒体图形或将PDF内容归档为图像。支持页面范围选择和批量处理。</p>
      <p>所有处理都在您的浏览器本地进行，确保您的文档保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上传PDF文件', description: '拖放您的PDF文件或点击选择。' },
      { step: 2, title: '配置输出', description: '选择DPI、输出格式（PNG/JPEG/WebP）、质量和页面范围。' },
      { step: 3, title: '转换并下载', description: '处理页面并单独下载图像或作为ZIP归档下载。' },
    ],
    useCases: [
      { title: '社交媒体', description: '将PDF幻灯片转换为图像以在社交媒体上发布。', icon: 'share-2' },
      { title: '缩略图', description: '为PDF文档生成预览缩略图。', icon: 'image' },
      { title: '网络发布', description: '将PDF内容转换为网络友好的图像格式。', icon: 'globe' },
    ],
    faq: [
      { question: '我应该使用什么DPI？', answer: '屏幕使用72 DPI，一般使用150 DPI，打印质量使用300 DPI。' },
      { question: '哪种格式最好？', answer: 'PNG用于质量/透明度，JPEG用于小尺寸，WebP用于现代网络使用。' },
      { question: '可以转换特定页面吗？', answer: '是的，指定页面范围如"1-5, 8, 10-15"以仅转换这些页面。' },
    ],
  },

  'markdown-to-pdf': {
    title: 'Markdown转PDF',
    metaDescription: '将Markdown文件转换为格式精美的PDF文档。支持GitHub风格Markdown和语法高亮。',
    keywords: ['markdown转pdf', 'md转pdf', '转换markdown', 'gfm转pdf', 'markdown转换器'],
    description: `
      <p>Markdown转PDF将您的Markdown文件转换为专业样式的PDF文档。支持CommonMark和GitHub风格Markdown（GFM），包括表格、任务列表和代码块。</p>
      <p>从多个主题（浅色、深色、GitHub）中选择，并自定义页面大小和边距。代码块具有语法高亮以提高可读性。</p>
      <p>所有转换都在您的浏览器本地进行，确保您的内容保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上传Markdown文件', description: '上传您的.md或.markdown文件。' },
      { step: 2, title: '选择主题', description: '选择视觉主题并配置页面设置。' },
      { step: 3, title: '转换并下载', description: '生成样式化的PDF并下载。' },
    ],
    useCases: [
      { title: '文档', description: '将README文件和文档转换为可共享的PDF。', icon: 'file-text' },
      { title: '笔记导出', description: '将Markdown笔记导出为PDF以供打印或共享。', icon: 'edit-3' },
      { title: '报告', description: '从Markdown创建具有专业样式的报告。', icon: 'bar-chart' },
    ],
    faq: [
      { question: '是否支持GitHub风格Markdown？', answer: '是的，支持表格、任务列表、删除线和其他GFM功能。' },
      { question: '可以自定义样式吗？', answer: '从预设主题中选择或添加自定义CSS以完全控制。' },
      { question: '代码块是否高亮？', answer: '是的，代码块包含常见语言的语法高亮。' },
    ],
  },

  'font-to-outline': {
    title: '字体转轮廓',
    metaDescription: '通过将页面转换为高质量图像来删除PDF文档的字体依赖。确保在所有系统上的兼容性。',
    keywords: ['字体转轮廓', '轮廓字体', '删除字体', '字体兼容性', '扁平化pdf字体', 'pdf字体删除'],
    description: `
      <p>字体转轮廓通过将每个页面转换为高质量的光栅化内容来删除PDF中的所有字体依赖。这确保您的文档在任何系统上看起来完全相同，即使未安装原始字体。</p>
      <p>该工具以您选择的DPI（150-600）渲染每个页面，删除嵌入的字体同时保留确切的视觉外观。可选地，您可以添加不可见的文本层以保持可搜索性。</p>
      <p>这对于打印准备、跨平台兼容性以及在共享文档时避免字体许可问题至关重要。所有处理都在您的浏览器本地进行。</p>
    `,
    howToUse: [
      { step: 1, title: '上传PDF文件', description: '上传包含要删除字体的PDF。' },
      { step: 2, title: '配置质量', description: '选择DPI（打印推荐300，屏幕推荐150）。如需要，启用可搜索文本。' },
      { step: 3, title: '转换并下载', description: '处理文件并下载独立于字体的PDF。' },
    ],
    useCases: [
      { title: '打印准备', description: '通过删除所有字体依赖来消除商业打印机的字体问题。', icon: 'printer' },
      { title: '跨平台共享', description: '共享在任何设备上看起来相同的文档，无论安装了什么字体。', icon: 'share-2' },
      { title: '字体许可', description: '删除嵌入的字体以避免分发文档时的许可问题。', icon: 'shield' },
    ],
    faq: [
      { question: '这是如何工作的？', answer: '该工具以高分辨率（您选择的DPI）渲染每个页面，并从这些图像重新创建PDF，删除所有字体依赖同时保留视觉外观。' },
      { question: '转换后还能选择文本吗？', answer: '默认情况下不能。文本成为图像的一部分。但是，您可以启用"保留可搜索文本"以添加不可见的文本层用于搜索和复制功能。' },
      { question: '我应该使用什么DPI？', answer: '打印质量输出推荐300 DPI。屏幕查看150 DPI就足够了，并产生较小的文件。600 DPI用于最高质量但会创建大文件。' },
      { question: '文件大小会增加吗？', answer: '文件大小取决于DPI和内容。150 DPI通常产生较小的文件，300 DPI可能增加大小，600 DPI显著增加大小。会自动应用压缩。' },
      { question: '这是可逆的吗？', answer: '不，字体数据被永久删除。如果需要使用原始字体的可编辑文本，请保留原始文件的备份。' },
      { question: '矢量图形怎么办？', answer: '原始PDF中的矢量图形（形状、线条）将与文本一起转换为光栅。视觉质量在您选择的DPI下得以保留。' },
    ],
  },

  'pdf-to-markdown': {
    title: 'PDF转Markdown',
    metaDescription: '将PDF转换为Markdown格式。提取文本并保留标题和列表等格式。',
    keywords: ['pdf转markdown', 'pdf转md', 'pdf文本提取', 'markdown转换器', 'pdf转文本'],
    description: `
      <p>PDF转Markdown将您的PDF文档转换为干净、结构良好的Markdown文件。该工具智能提取文本内容，并尝试保留标题、列表和段落等格式。</p>
      <p>非常适合将PDF文档转换为可编辑格式，用于文档编写、笔记记录或支持Markdown的内容管理系统。</p>
      <p>所有转换都在您的浏览器本地进行，确保您的文档保持私密和安全。</p>
    `,
    howToUse: [
      { step: 1, title: '上传PDF文件', description: '拖放您的PDF文件或点击选择。' },
      { step: 2, title: '配置选项', description: '设置页面范围，选择是否包含页码，并调整换行设置。' },
      { step: 3, title: '转换并下载', description: '点击转换生成Markdown文件并下载。' },
    ],
    useCases: [
      { title: '文档编写', description: '将PDF手册和指南转换为Markdown，用于版本控制的文档。', icon: 'file-text' },
      { title: '笔记记录', description: '从PDF文章和书籍中提取内容到您的笔记系统。', icon: 'edit-3' },
      { title: '内容迁移', description: '将PDF内容迁移到支持Markdown的CMS平台。', icon: 'copy' },
    ],
    faq: [
      { question: '格式会保留吗？', answer: '该工具会根据字体大小检测标题，以及项目符号/编号列表。复杂布局可能需要手动调整。' },
      { question: '可以转换特定页面吗？', answer: '是的，您可以指定页面范围如"1-3, 5, 7"以仅转换这些页面。' },
      { question: '扫描的PDF能用吗？', answer: '扫描的PDF包含图像而非文本。请先使用我们的OCR工具提取文本，然后再转换为Markdown。' },
    ],
  },
  'extract-tables': {
    title: '从PDF提取表格',
    metaDescription: '检测并从PDF文档中提取表格。导出为JSON、Markdown或CSV格式。',
    keywords: ['提取表格', 'pdf表格提取', 'pdf转csv', 'pdf转excel', '表格检测'],
    description: `
      <p>从PDF提取表格检测PDF文档中的表格数据并以结构化格式导出。选择JSON用于数据集成，Markdown用于文档，或CSV用于电子表格。</p>
      <p>该工具使用智能检测算法来识别表格结构，即使在复杂文档中也是如此。指定页面范围并调整检测参数以获得最佳结果。</p>
      <p>所有处理都在您的浏览器本地进行，确保您的文档保持私密。</p>
    `,
    howToUse: [
      { step: 1, title: '上传PDF文件', description: '上传包含要提取表格的PDF。' },
      { step: 2, title: '配置检测', description: '设置页面范围和最小列/行阈值。' },
      { step: 3, title: '导出并下载', description: '选择输出格式（JSON/Markdown/CSV）并下载。' },
    ],
    useCases: [
      { title: '数据分析', description: '提取表格数据以在电子表格或数据库中进行分析。', icon: 'bar-chart' },
      { title: '报告处理', description: '从PDF报告中提取表格以进行进一步处理。', icon: 'file-text' },
      { title: '文档', description: '将PDF表格转换为Markdown用于技术文档。', icon: 'book' },
    ],
    faq: [
      { question: '可以检测复杂表格吗？', answer: '该工具最适合简单的网格表格。复杂的合并单元格可能需要手动调整。' },
      { question: '如果找不到表格怎么办？', answer: '尝试调整最小列/行阈值或检查PDF是否包含实际的表格结构。' },
      { question: '可以从特定页面提取吗？', answer: '是的，指定页面范围以将提取限制在某些页面。' },
    ],
  },
  'ai-pdf-reflower': {
    title: 'AI 智能自适应重排',
    metaDescription: '将PDF文档重新排版为响应式移动端布局，支持Markdown和EPUB导出，改善小屏阅读体验。',
    keywords: ['pdf重排', '自适应pdf', 'pdf转markdown', 'epub导出', '移动端阅读pdf'],
    description: `
      <p>AI 智能自适应重排工具是您在移动设备上阅读PDF的最佳伴侣。传统的PDF文档采用固定版面，在手机或平板电脑上查看时往往需要不断缩放和横向滚动，体验极差。</p>
      <p>该工具智能解析PDF页面上的文本流、行高以及空间分布坐标，重建段落与标题结构。如果是多栏或双栏文档，它会智能归并栏目顺序，输出为自适应宽度的文字流。</p>
      <p>此外，它支持将数学公式完美转化为 MathJax 格式渲染，并提供多种阅读主题（纸张黄、极客黑、护眼绿），支持一键导出为 EPUB 电子书或 Markdown 格式。</p>
    `,
    howToUse: [
      { step: 1, title: '上传PDF文件', description: '将PDF拖放到上传区或点击浏览选择文件。' },
      { step: 2, title: '选择阅读主题', description: '在右侧3D移动端模拟器中配置字号和阅读配色方案。' },
      { step: 3, title: '导出文档', description: '预览满意后，点击拉绳按钮导出为Markdown或EPUB格式。' },
    ],
    useCases: [
      { title: '手机端文献阅读', description: '在手机上轻松流畅地阅读学术论文与研究报告，告别频繁缩放。', icon: 'smartphone' },
      { title: '电子书转换', description: '将文字类PDF转换为EPUB格式，导入到Kindle等电子书阅读器中。', icon: 'book' },
      { title: '笔记整理', description: '将结构化的PDF内容直接导出为干净的Markdown文件进行笔记归档。', icon: 'file-text' },
    ],
    faq: [
      { question: '双栏PDF能正确识别阅读顺序吗？', answer: '是的，重排算法会分析文本块的横坐标区间，将双栏布局拆解为左栏和右栏的纵向级联，不会出现左右行错乱。' },
      { question: '图片和公式会丢失吗？', answer: '数学公式会被转换为可被前端渲染的LaTeX/MathJax语法，图片会保留其上下文关联位置。' },
      { question: '转换是在云端进行的吗？', answer: '不，所有的排版解析和EPUB/Markdown编译都在您的浏览器本地完成，保护敏感文档的绝对私密。' },
    ],
  },
  'citation-linker': {
    title: '引文链接激活器',
    metaDescription: '扫描并激活PDF中的引文标记，将其转化为可点击的DOI或页内跳转链接。',
    keywords: ['引文激活', 'pdf超链接', 'doi匹配', '学术pdf助手', 'pdf引文'],
    description: `
      <p>引文链接激活器专为学术科研人员打造。许多PDF格式的论文中，正文里的引用符号（如[1]、[2]）仅仅是普通的纯文本，读者需要反复手动翻页到最末尾寻找对应的参考文献，极大打断了阅读流。</p>
      <p>本工具在本地读取PDF文本，通过模式识别自动抓取正文中的引用符号并与末尾的“参考文献（References）”条目一一关联。通过智能匹配DOI或识别引用页码，为纯文本引文添加可点击的PDF链接注释。</p>
      <p>同时，我们提供直观的可视化关系拓扑星图，让文档内的引用网络一目了然。</p>
    `,
    howToUse: [
      { step: 1, title: '上传学术PDF', description: '上传带有参考文献列表的PDF论文文档。' },
      { step: 2, title: '引文校验与编辑', description: '在右侧玻璃态关系星图中查看识别到的引文对，可手动编辑或修改链接。' },
      { step: 3, title: '注入链接并下载', description: '点击激活按钮，系统将超链接直接写入PDF中，生成全新PDF。' },
    ],
    useCases: [
      { title: '论文精读', description: '在阅读PDF文献时，一键点击引用即可在侧边弹出原作者及DOI链接，极速追溯。', icon: 'link' },
      { title: '论文出版准备', description: '确保您撰写的学术论文在转为PDF交付前，所有的交叉引用都具备超链接导航功能。', icon: 'award' },
      { title: '文献关系梳理', description: '通过交互式拓扑图梳理复杂文献之间的层级网络关系。', icon: 'git-network' },
    ],
    faq: [
      { question: '如果没有DOI，链接能用吗？', answer: '如果参考文献条目中不包含DOI，工具会自动配置为“页内跳转”（GoTo 动作），点击依然可直接翻滚到参考文献所在的页面。' },
      { question: '它支持哪些引文格式？', answer: '目前支持常见的数字格式（如 [1], [1-3]）以及哈佛格式（如 Author et al., 202X）。' },
      { question: '会破坏原来的文档样式吗？', answer: '不会。添加链接是在上层注入透明的Link Annotation，不会修改任何现有的文本内容、字体或布局。' },
    ],
  },
  'vector-extractor': {
    title: 'PDF矢量提取器',
    metaDescription: '将PDF转换为高保真SVG，允许鼠标拖动、框选并无损提取文档中的任意矢量图形和图表。',
    keywords: ['pdf提取矢量', 'svg导出', 'pdf矢量图表', '提取logo', 'pdf矢量画'],
    description: `
      <p>PDF矢量提取器能够将PDF文档中蕴含的矢量路径和图形还原。无论您是想提取PDF学术海报中的折线图、文档插图，还是提取公司的Logo矢量源文件，本工具都能帮您达成目的。</p>
      <p>在底层，我们调用高保真 SVGGraphics 将PDF的矢量路径完全解构为标准的 SVG 元素树，保持无损精度。</p>
      <p>前端运用 3D 爆照图层分离效果，在鼠标悬停时令图形以浮雕高亮脱出，并提供色彩替换面板，方便设计师直接提取和二次加工。</p>
    `,
    howToUse: [
      { step: 1, title: '上传PDF文件', description: '拖入包含矢量插图、表格或Logo的PDF文件。' },
      { step: 2, title: '浮空框选元素', description: '鼠标移动到画布上，矢量组会被3D浮空高亮包裹，点击将其激活。' },
      { step: 3, title: '调色并导出', description: '使用右侧面板调节图形属性，一键导出为SVG或复制SVG源码。' },
    ],
    useCases: [
      { title: '设计师素材提取', description: '快速提取宣传册、招商书PDF中高质量矢量图标与原创插图。', icon: 'bezier' },
      { title: '科研图表导出', description: '提取论文PDF中复杂图表的矢量源文件，用于高分辨率排版印刷。', icon: 'presentation' },
      { title: '企业品牌搜集', description: '从合同或报告中提取矢量格式的公司商标和标识，防止失真。', icon: 'crown' },
    ],
    faq: [
      { question: '为什么有些图片无法提取为矢量？', answer: 'PDF中的图片分为位图（如照片、JPG扫描件）和矢量图（如线条、填充区域、数学图表）。位图无法提取为矢量元素，只能提取为图片文件。' },
      { question: '提取的SVG是否带有CSS样式？', answer: '是的，提取的SVG完全继承并规范了原始PDF里的填充色、描边粗细、渐变以及变换属性。' },
      { question: '大文件解析会卡顿吗？', answer: '我们使用了WebAssembly进行加速绘制，但页数极多且路径极其复杂的PDF可能需要一些渲染时间。' },
    ],
  },
  'deep-sanitize': {
    title: '深度元数据清洗',
    metaDescription: '彻底擦除PDF文档中的作者信息、修改历史、隐藏图层以及未引用的冗余数据，完美保护隐私。',
    keywords: ['pdf脱敏', '清除元数据', '防溯源', '安全pdf', '擦除水印'],
    description: `
      <p>深度元数据清洗是保护商业秘密和个人隐私的终极防线。PDF文件在创建和编辑过程中，往往会在底层默默嵌入大量的敏感隐性信息，仅在视觉上涂黑是远远不够的。</p>
      <p>该工具深入PDF的二进制对象树，彻底抹除作者、创建软件、修改历史（XMP Metadata）、特定编辑器的 PieceInfo 缓存，以及可选内容图层（OCG，隐性数字水印常用载体）。</p>
      <p>同时，它会强制全量重构对象交叉引用表（xref），完全抹去任何历史增量更新留下的旧版本数据，确保无法通过“撤销/恢复”来回溯敏感信息。</p>
    `,
    howToUse: [
      { step: 1, title: '上传待脱敏文件', description: '上传需要发布或共享的PDF文件。' },
      { step: 2, title: '运行粒子扫描', description: '触发3D消毒舱激光扫描，检测文档内隐藏的安全隐患与残留。' },
      { step: 3, title: '执行净化并下载', description: '点击执行脱敏，伴随消融动效瞬间清空无用残留，生成极致干净的PDF文件。' },
    ],
    useCases: [
      { title: '商业合同共享', description: '在将合同PDF发送给外部伙伴前，抹去起草人、系统路径和以前版本的协商修改记录。', icon: 'file-signature' },
      { title: '防溯源文件发布', description: '清除文档底层的隐藏图层与不可见批注水印，保护信源隐私。', icon: 'eye-off' },
      { title: 'PDF优化与瘦身', description: '剥离PDF文件中无用、孤立的废弃对象，加快网络加载速度。', icon: 'zap' },
    ],
    faq: [
      { question: '它和“删除元数据”有什么区别？', answer: '普通“删除元数据”仅修改常规属性（如Title, Author）。“深度元数据清洗”会对整棵PDF对象树执行全面扫描，重构xref，物理剔除 PieceInfo、隐藏图层与增量更新，杜绝一切隐形泄密路径。' },
      { question: '清洗后文档内容会变吗？', answer: '绝对不会。此工具仅剔除文档描述性的底层元数据，不会修改PDF的可视文本、图形布局和图像。' },
      { question: '这可以移除密码吗？', answer: '不可以，如果文件有打开密码，请先输入密码解锁后，再使用此工具清洗。' },
    ],
  },
  'booklet-folding-simulator': {
    title: '3D装订拼版与折页模拟器',
    metaDescription: '将PDF多页拼版为可折叠的大版，提供3D物理折页和骑马钉装订仿真动效预览。',
    keywords: ['3D拼版', '折页模拟', '骑马钉装订', '书籍排版', '大版打样'],
    description: `
      <p>3D装订拼版与折页模拟器是一款专为印刷设计与出版排版人员打造的高级工具。传统的书籍排版需要精确计算页码的物理重叠和拼大版顺序，本项目将这一过程彻底可视化与自动化。</p>
      <p>在底层，我们设计了强大的排版拼大版算法，将原本顺序的PDF页码映射为印张拼大版页序（例如4页风琴折、8页骑马钉折叠模式），将多页自动合并到物理大版（Sheet）的正反两面。</p>
      <p>在前端，我们借助纯 CSS 3D Matrix 变换和弹簧回弹物理曲线，生动呈现纸张的水平/垂直折叠全过程，带给您极具 WOW 效应的逼真物理装订感。</p>
    `,
    howToUse: [
      { step: 1, title: '上传PDF文件', description: '拖入要排版成册的PDF文档。' },
      { step: 2, title: '选择折叠装订方案', description: '在控制面板选择拼大版模式（如4页对折、8页骑马钉、4页风琴折等）。' },
      { step: 3, title: '3D物理交互预览', description: '拖动滑轨观察纸张在3D空间中如何进行多次对折及折叠后的页码排布。' },
      { step: 4, title: '输出拼版PDF', description: '点击生成，下载重新排列并合并好的物理大版PDF，可直接进行双面打印。' },
    ],
    useCases: [
      { title: '宣传小册子制作', description: '为折页宣传册、产品手册进行折叠顺序预演，防止打印后正反面颠倒。', icon: 'book-open' },
      { title: '图书骑马钉排版', description: '为多页画册快速生成骑马钉印刷所需的折页拼大版文件。', icon: 'layers' },
      { title: '工业折页大样设计', description: '帮助印刷厂客户经理直观展示各种复杂折页方式的页面物理分布。', icon: 'printer' },
    ],
    faq: [
      { question: '什么是“拼大版”？', answer: '拼大版（Imposition）是印刷过程中的关键步骤。因为印刷机纸张很大，我们不会一页一页印刷，而是将多页排在一张大纸上，印刷后经过折叠、裁切才装订成书。本工具能自动计算折叠后页码连续所需的排版顺序。' },
      { question: '折叠预览会改变我的原PDF内容吗？', answer: '不会。原PDF的页面内容仅作为3D纸张表面的纹理渲染，输出的拼版PDF只是调整了页序和合并位置，页面内容保持不变。' },
      { question: '如果文件页数不是4或8的倍数怎么办？', answer: '系统会自动在末尾补足空白页，以确保能够满足所选折叠模式的数学排列要求。' },
    ],
  },
  'pdf-to-slide': {
    title: 'PDF 转 Slide',
    metaDescription: '智能分析PDF大纲，提取矢量图表与重点内容并无损重建为可编辑的PPTX演示文稿。',
    keywords: ['PDF转PPT', '幻灯片重建', '图表提取', '学术汇报', 'PPTX生成'],
    description: `
      <p>学术与商业幻灯片重建器能够将静态的PDF文档重新激活，重塑为极具现代感、可深度编辑的幻灯片演示文稿（PPTX）。</p>
      <p>该工具采用先进的排版大纲提取算法，自动解析文档中的标题级数、文本行间距，划分幻灯片逻辑骨架；同时分离提取矢量图表和高分辨率表格，自动去除无关背景，以独立的插图形式嵌入幻灯片中。</p>
      <p>所有生成的 PPTX 都采用标准 Open XML 元素重建，文本可编辑，图形无失真。前端配合炫酷的星流卡片渐变过渡动画，使静态文字拆解并重建为PPT的过程震撼人心。'</p>
    `,
    howToUse: [
      { step: 1, title: '上传论文或报告PDF', description: '选择包含丰富大纲和图表的学术或商业PDF文件上传。' },
      { step: 2, title: '分析幻灯片大纲', description: '预览提取的各个大纲卡片，可自定义删减、调整每张幻灯片的主题。' },
      { step: 3, title: '一键生成并下载', description: '启动重建引擎，自动生成格式规范、文本和图表皆可编辑的 PPTX 演示文稿。' },
    ],
    useCases: [
      { title: '学术论文转汇报PPT', description: '将长篇学术论文中的文字大纲与矢量折线图、柱状图一键重组为演讲幻灯片。', icon: 'graduation-cap' },
      { title: '商业白皮书转演示', description: '把冗长的年度行业报告提取出精炼的主标题和要点，作为宣讲PPT底稿。', icon: 'presentation' },
      { title: '多设备跨平台演示', description: '免去手动截图复制的烦恼，极速得到排版整洁、文字可编辑的幻灯片框架。', icon: 'laptop' },
    ],
    faq: [
      { question: '生成的 PPTX 在 Microsoft Office 中可以编辑吗？', answer: '可以。我们完全基于标准的 Office Open XML (OOXML) 格式在内存中重新构建了文档，文本、表格、占位符在 PowerPoint、Keynote 或 WPS 中均可无缝编辑。' },
      { question: '图表是如何被提取的？', answer: '系统会扫描PDF的矢量路径和图像层，识别具有图表特征的封闭边界区域，以高精度图像或独立SVG节点的方式切分提取出来。' },
      { question: '对扫描件 PDF 效果如何？', answer: '对于没有文本层和矢量路径的扫描PDF，我们建议先使用 OCR 工具识别文本，之后再使用幻灯片重建器效果更佳。' },
    ],
  },
  'form-logic-designer': {
    title: '表单逻辑设计',
    metaDescription: '使用毛玻璃节点图连线设计交互逻辑，向PDF表单注入可编程联动 JavaScript 脚本。',
    keywords: ['PDF表单逻辑', 'AcroJS注入', '节点连线', '交互式PDF', '表单联动'],
    description: `
      <p>可编程PDF表单逻辑设计舱是填补PDF高级交互空白的革新性工具。传统的PDF表单都是死板的静态字段，而本工具能让您的PDF表单像现代Web应用一样具备动态交互逻辑。</p>
      <p>通过基于 React Flow 构建的“毛玻璃发光节点”可视化画布，您的PDF表单字段会变成可交互的逻辑节点。你可以通过拖拽连线，为它们定义各种触发条件与行为动作（如：当复选框被勾选 ➜ 启用原本禁用的输入框 ➜ 自动计算总价并填充）。</p>
      <p>设计完毕后，底层的 AcroJS 脚本注入引擎会将逻辑完全编译为标准的 Acrobat JavaScript 并埋入 PDF 的交互表单字典 '/AA' 中，使该文档在任意标准 PDF 阅读器中均能生效。</p>
    `,
    howToUse: [
      { step: 1, title: '上传交互式PDF表单', description: '上传已包含交互表单字段（AcroForm）的PDF文件。' },
      { step: 2, title: '在画布设计逻辑连线', description: '各个字段自动呈现为节点，从源字段事件（如改变、失去焦点）拉出连线，指向目标字段的动作（如隐藏、禁用、设值）。' },
      { step: 3, title: '编译注入并下载', description: '点击编译，系统生成 JavaScript 脚本并注入 PDF 字典，输出具备高交互性的智能PDF。' },
    ],
    useCases: [
      { title: '智能商业合同样本', description: '根据用户勾选的条款，动态显示或隐藏附加补充协议输入框，保持界面清爽。', icon: 'file-signature' },
      { title: '动态财务报销单', description: '多行报销金额自动求和，并根据填写的税率自动计算最终扣税，完全零手动输入。', icon: 'calculator' },
      { title: '交互式问卷调研表', description: '利用条件跳转逻辑，跳过不适用的问题，提升用户在移动端填写表单的体验。', icon: 'form-input' },
    ],
    faq: [
      { question: '这需要我的 PDF 预先有表单字段吗？', answer: '是的。该工具用于为已有的 PDF 表单字段添加高级逻辑。如果您没有表单字段，可以先使用我们的表单创建工具添加输入框和复选框。' },
      { question: '生成的交互逻辑在所有 PDF 阅读器上都能运行吗？', answer: '只要阅读器遵循 Adobe PDF 标准并支持 Acrobat JavaScript（如 Adobe Reader, Foxit Reader, Chrome/Edge 浏览器内置阅读器等），联动逻辑均能完美执行。部分精简版移动端阅读器可能支持有限。' },
      { question: '会影响 PDF 的正常打印吗？', answer: '完全不会。注入的脚本只在屏幕交互时运行，打印时会根据当前的表单内容静态度量打印，不包含任何连线痕迹。' },
    ],
  },
  'eink-optimizer': {
    title: '电子墨水屏护眼调色舱',
    metaDescription: '针对电子墨水屏设备优化PDF：去噪、直方图二值化、字迹膨胀加粗，带来极致的纸感阅读。',
    keywords: ['墨水屏优化', '二值化去噪', '字迹加粗', '护眼阅读', '大津法二值化'],
    description: `
      <p>电子墨水屏护眼调色舱是一款专为 Kindles, Onyx Boox, Kobo 等 E-reader 狂热读者定制的福音工具。</p>
      <p>许多扫描版 PDF 电子书在墨水屏上阅读时存在字迹淡浅、底色发灰、边缘布满噪点和扫描阴影的问题。本工具通过灰度像素直方图分析，应用经典的大津法 (Otsu's Thresholding) 自动计算最优阈值进行页面二值化，瞬间将灰暗的背景剥离为纯白，保留纯黑的文字。</p>
      <p>同时，我们融入了数学形态学膨胀 (Dilation) 算法，能对纤细模糊的古籍或手写字迹进行智能加粗加宽，配合前端的重力对比滑条，让您亲眼见证纸质视网膜般的字迹跃然纸上。</p>
    `,
    howToUse: [
      { step: 1, title: '上传扫描PDF文档', description: '上传字迹不清晰、底色发暗的电子书或古籍PDF。' },
      { step: 2, title: '滑动调节二值化阈值', description: '拖动重力滑轨实时预览去底色和字迹加粗效果，找到最舒服的纸感平衡。' },
      { step: 3, title: '优化处理并下载', description: '点击执行，系统对全书页面应用图像优化，输出极致适配墨水屏的护眼PDF。' },
    ],
    useCases: [
      { title: '古籍文献字迹加粗', description: '解决扫描版线装古籍字迹因年代久远而浅淡模糊、难以辨认的问题。', icon: 'scroll' },
      { title: '教材试卷底色漂白', description: '消除扫描或拍照试卷纸张的偏色、手写阴影，还原干净整洁的白纸黑字。', icon: 'file-text' },
      { title: '墨水屏电纸书适配', description: '将带有彩色插图的文档转化为高对比度的黑白灰阶图，避免在墨水屏上显示出大片难看的杂乱网格。', icon: 'tablet' },
    ],
    faq: [
      { question: '“字迹加粗”的原理是什么？', answer: '在图像处理中这被称为形态学膨胀（Dilation）。它以一定的结构元素扫描字迹边缘，将文字笔画向外扩展一个像素，从而使得淡细的字迹在物理上变粗、更显眼。' },
      { question: '这会增加 PDF 的体积吗？', answer: '恰恰相反。由于二值化将彩色的或多灰度的页面转换为了极简的单色黑白图像，在压缩算法（如 CCITT Group 4）作用下，PDF 文件体积通常会大幅度瘦身。' },
      { question: '这个工具支持文字版 PDF 吗？', answer: '支持。对于包含矢量文本的PDF，我们会在后台将其进行高保真光栅化，然后对其进行调色和字迹加粗，以达成统一的强对比护眼阅读效果。' },
    ],
  },
  'cert-cryptor': {
    title: '证书加密与签名',
    metaDescription: '使用非对称公钥证书加密PDF，配合3D实体黄金火漆按压盖印及PKCS#7数字证书签名。',
    keywords: ['证书加密', '火漆签名', '数字签名', '非对称加密', 'PKCS7签名'],
    description: `
      <p>3D物理蜡封证书签名与双钥加密锁为敏感企业文档、毕业证书或加密合同提供了军工级的安全保卫与极富尊贵仪式感的物理级视觉呈现。</p>
      <p>技术上，本工具提供非对称公钥加密锁，允许您导入接收方的公钥证书（.cer/.crt），对PDF的文档密钥流进行封装加密，只有持有对应私钥（.pfx）的受信任终端才可开启。同时支持生成标准的 PKCS#7 隐式数字证书签名，防篡改、防伪造。</p>
      <p>视觉上，我们呈现了一枚极致奢华的 3D 物理黄金/红蜡火漆印章。当您按下签名键，3D印章伴随庄重的盖印声从天而降，在文档上烙下具有法线高度起伏、边缘随机溢出、质感逼真的立体物理火漆蜡封，并辅以密钥链发光轨道特效，将数字安全打造成一种视觉盛宴。</p>
    `,
    howToUse: [
      { step: 1, title: '上传PDF及证书文件', description: '拖入待加密/签名的PDF，并导入您的数字签名证书 (.pfx) 或接收方的加密证书 (.cer)。' },
      { step: 2, title: '放置3D火漆印章', description: '在PDF预览图上拖拽确定火漆印章盖下的物理坐标与颜色（如古铜金、复古红）。' },
      { step: 3, title: '按压印章并签署', description: '点击执行，观看3D蜡封盖印仪式，伴随按压声和发光解密轨道生成物理级数字签名。' },
      { step: 4, title: '下载受保护的PDF', description: '保存文件。此时文档已被证书锁定，并带有不可篡改的加密印记。' },
    ],
    useCases: [
      { title: '电子毕业证书/奖状', description: '在结业证书或商业奖状上打上立体火漆印记，并附带学校/企业的官方数字签名，极具分量。', icon: 'award' },
      { title: '涉密合同传输', description: '使用合作方的公钥证书加密合同，确保只有接收方的安全密钥卡能解密查看，防止邮箱劫持泄密。', icon: 'shield-alert' },
      { title: '官方防伪发文', description: '对企业正式通知文件进行数字签名，防范别有用心者通过编辑文本来篡改文告内容。', icon: 'stamp' },
    ],
    faq: [
      { question: '火漆印章是图片还是真的数字签名？', answer: '两者皆是。系统不仅在 PDF 上渲染了一个具有逼真法线纹理和立体阴影的火漆印外观（外观层），而且在 PDF 内部对象中真正写入了符合 PKCS#7 规范、不可伪造的数字签名（数据层）。' },
      { question: '什么是“双钥证书加密”？', answer: '这是一种比普通口令密码更高级的加密方式。您不需要向接收方发送密码，只需用他们的公钥证书加密文档。他们只需双击打开，PDF 阅读器会自动查找其本机的私钥证书进行静默解密，安全性极高。' },
      { question: '火漆印章的压花可以自定义吗？', answer: '可以。我们默认提供 PDFCraft 防伪标识、Royal 徽章等多种压花图案，并支持您在控制面板调节火漆的蜡熔范围及凹凸深度。' },
    ],
  },
  'passport-id-composer': {
    title: '证件双面拼版',
    metaDescription: '一键将身份证或护照正反两面快速拼版渲染到单张 A4 纸张的上下区域，支持加防伪透明水印。',
    keywords: ['身份证拼版', '护照拼大版', '证件复印合成', '证件双面拼版', '身份证水印'],
    description: `
      <p>证件双面拼版与复印合成器是一个非常实用的办公神器。</p>
      <p>我们在申请银行卡、办理入职或签署合同时，经常需要提供身份证正反面的复印件。本工具允许您直接上传身份证的正反两面图片或PDF，一键将其按国标分辨率精准排列渲染在单张 A4 纸张的上下中央区域。</p>
      <p>同时，您能自定义防伪水印（如“仅供入职使用”），以防证件被挪作他用。系统甚至提供了 3D 霓虹扫描光效，让每一次上传拼版都充满仪式感。</p>
    `,
    howToUse: [
      { step: 1, title: '上传证件照片', description: '上传身份证或护照的正面和反面图片/PDF（最多2个文件）。' },
      { step: 2, title: '设置防伪水印', description: '输入您需要平铺加盖的防伪水印文字（例如“仅用于XX业务”）。' },
      { step: 3, title: '一键拼合下载', description: '点击开始拼版，系统自动将其导出为单页高品质 A4 复印件 PDF。' },
    ],
    useCases: [
      { title: '企业入职申请', description: '员工提交身份证复印件，一键合成并添加“仅限入职”防伪水印。', icon: 'user' },
      { title: '银行/政务业务办理', description: '快速将身份证正反面规整拼接打印，满足政务物理存档规范。', icon: 'landmark' },
      { title: '出国证件备份', description: '将护照与附页拼合成一页，方便出境备份和物理打印。', icon: 'plane' },
    ],
    faq: [
      { question: '水印会遮挡证件上的文字吗？', answer: '完全不会。我们采用了精确调整过的 15% 极低透明度，使水印文字既清晰防伪，又不影响证件本身字迹和头像的阅读。' },
      { question: '拼合后的尺寸是真实尺寸吗？', answer: '是的。系统默认按照国标二代身份证的 85.6mm × 54mm 真实物理尺寸进行 A4 比例缩放绘制，可以直接用于物理打印。' },
      { question: '支持护照或者驾照吗？', answer: '支持。只要您上传相应的扫描照片，它同样会以规整的布局将其排列到 A4 页面上。' },
    ],
  },
  'annotation-exporter': {
    title: '批注与高亮导出',
    metaDescription: '深度反序列化 PDF 的批注、高亮和划线流，智能提炼导出为结构化 Markdown/JSON 大纲笔记本。',
    keywords: ['批注提取', '高亮导出', 'pdf高亮整理', 'pdf批注反序列化', 'markdown笔记本'],
    description: `
      <p>智能批注/高亮提取与大纲笔记本是一个深度挖掘 PDF 批注价值的效率舱。</p>
      <p>当您在阅读大部头 PDF 电子书或进行文献调研时，通常会划下大量的重点和高亮。本工具能够物理反序列化 PDF 的 <code>/Annots</code> 批注树，将所有高亮、波浪线、笔记、Sticky Notes 和手写印记捕获。</p>
      <p>它将提取的内容与其所在的章节大纲树（Outline）进行语义对齐，一键导出为带页码锚点的 Markdown 或 JSON 结构化大纲笔记本。让您的阅读高亮线条化作抛物线光轨飘入右侧的毛玻璃笔记本中，美轮美奂。</p>
    `,
    howToUse: [
      { step: 1, title: '上传已批注的PDF', description: '导入含有您阅读时涂鸦、高亮或下划线批注的 PDF 论文或电子书。' },
      { step: 2, title: '选择过滤和格式', description: '勾选需要提取的批注类型（如高亮、文本笔记），并选择导出为 MD 还是 JSON。' },
      { step: 3, title: '一键提取导出', description: '点击执行，系统瞬间完成对批注流的解析与大纲重组。' },
    ],
    useCases: [
      { title: '科研文献综述提炼', description: '将多篇论文的阅读高亮一键整合为 Markdown 提纲，极速撰写文献综述。', icon: 'graduation-cap' },
      { title: '读书笔记高效整理', description: '提取电子书中的精彩句段和个人感悟，汇聚成个人知识库或 Obsidian 节点。', icon: 'book' },
      { title: '协作文档审核收集', description: '批量收集多位审核人在 PDF 方案上标记的修改意见，形成任务清单。', icon: 'users' },
    ],
    faq: [
      { question: '可以提取手写平板上的笔迹批注吗？', answer: '可以。只要您的手写笔迹在 PDF 中保存为标准的 Ink 注解，该工具都能完整捕获其类型和坐标，并以结构化记录导出。' },
      { question: '为什么有些高亮提取出来没有文字内容？', answer: '部分 PDF 的文字由于本身不是矢量文本（如纯图片扫描版且未经 OCR），其高亮注解只包含坐标而无底层字符流。建议先使用我们的 OCR 工具处理后再提取批注。' },
      { question: '导出的 Markdown 支持返回 PDF 吗？', answer: '导出的笔记包含详细的页码和原标题注释，能够帮您快速检索定位回源 PDF 文档。' },
    ],
  },
  'batch-watermark-remover': {
    title: '批量去水印',
    metaDescription: '采用内容流物理擦除技术（Content Stream Purge），无损擦除 PDF 底层文本或矢量水印流。',
    keywords: ['水印擦除', 'pdf去水印', '批量水印删除', '物理内容流擦除', '图片水印删除'],
    description: `
      <p>PDF 水印批量一键智能擦除器是业内罕见的无损 PDF 净化引擎。</p>
      <p>普通工具去水印往往只是加个白盒子盖住，或者导致 PDF 排版彻底崩塌。本工具采用硬核的 <strong>内容流物理擦除 (Content Stream Purge)</strong> 策略。</p>
      <p>它深入解析 PDF 页面的底层内容算子流，匹配与水印文字（如 "Confidential"、"DRAFT"）或图片相关的底层操作指令，将其物理剔除或用空格无损替换。水印瞬间消解，完全保留原文档排版和文字质量。</p>
    `,
    howToUse: [
      { step: 1, title: '上传有水印的PDF', description: '上传含有系统防伪水印或商业标识的 PDF 报告。' },
      { step: 2, title: '设定擦除关键词', description: '输入您要擦除的水印文字，或开启图像水印一键物理脱敏。' },
      { step: 3, title: '一键物理净化', description: '点击执行，伴随微型量子解构粉碎波效，水印瞬间被物理清空。' },
    ],
    useCases: [
      { title: '机密报告净化存档', description: '将废弃或公开报告上的“机密”或“草稿”水印无损擦除，用于归档和重新分发。', icon: 'archive' },
      { title: '背景图片干扰消除', description: '快速物理擦除 PDF 各页底部的半透明大图水印，让页面文本阅读更加清爽。', icon: 'eye' },
      { title: '企业模板二次开发', description: '物理擦除旧版官方文件的页脚水印，以便快速套用新的企业标准。', icon: 'copy' },
    ],
    faq: [
      { question: '擦除水印后会被重新复原吗？', answer: '绝对不会。与视觉遮挡不同，我们是直接修改了 PDF 页面的二进制内容流（Content Stream），将相关算子物理清除，不留任何痕迹。' },
      { question: '能擦除复杂的彩色渐变背景水印吗？', answer: '如果水印在 PDF 中是作为独立的 XObject 图像或特定文本算子存在，该工具可以精准物理定位并擦除。' },
      { question: '会破坏 PDF 中的原有文字和排版吗？', answer: '不会。擦除动作仅仅针对匹配水印特性的操作码，非匹配的主体文字和矢量插图会得到 100% 的保留。' },
    ],
  },
  'smart-data-redactor': {
    title: '敏感信息脱敏',
    metaDescription: '利用 NLP 敏感词定位与内容流物理覆盖，一键物理擦除手机号、邮箱、身份证等隐私。',
    keywords: ['自动脱敏', '敏感词模糊', 'pdf隐私遮蔽', '内容流物理擦除', '电话号码脱敏'],
    description: `
      <p>敏感信息自动模糊与脱敏引擎是一款保障信息安全与合规的利器。</p>
      <p>简单在 PDF 上画个黑框，别人通过复制依然能拿到遮挡下的文字。本工具采用高阶的 <strong>NLP 敏感词提取与物理流擦除</strong> 技术。</p>
      <p>自动扫描 PDF 中的手机号、身份证、电子邮箱、银行卡号等，在指定坐标绘制极其高级的暗黑磨砂遮蔽 mask，同时深入 PDF 对象流中，将对应坐标的敏感底层文本块直接写为空或 <code>[REDACTED]</code>，完全隔绝复制泄漏漏洞。</p>
    `,
    howToUse: [
      { step: 1, title: '上传待脱敏PDF', description: '导入包含员工薪酬、客户电话或隐私信息的合同和发票 PDF。' },
      { step: 2, title: '选择自动识别规则', description: '勾选需要脱敏的类型（邮箱、电话、身份证），或填入自定义敏感字词。' },
      { step: 3, title: '一键扫描覆盖', description: '点击执行，敏感词瞬间被红外交叉准星锁定，物理覆盖并彻底脱敏。' },
    ],
    useCases: [
      { title: '敏感商业合同公开', description: '在向第三方公开合同前，自动擦除其中的产品价格、核心人员联系方式等隐私。', icon: 'file-signature' },
      { title: '简历库去标识化', description: '对批量简历进行处理，隐藏求职者的真实姓名、手机、家庭住址，符合 GDPR 规范。', icon: 'user-check' },
      { title: '财务报表对外发布', description: '隐藏非公开财务报表中的特定股东姓名及敏感利润数字，防止竞争对手搜集。', icon: 'pie-chart' },
    ],
    faq: [
      { question: '脱敏后的 PDF 真的无法通过复制获取隐私吗？', answer: '真的。我们不仅画了黑盒，而且在 PDF 页面流（Page Stream）中将原敏感字串彻底重写为了 `[REDACTED]`。即使他人用文本提取工具，也绝对无法获取。' },
      { question: '支持扫描版 PDF（纯图片）的敏感遮蔽吗？', answer: '本工具专门用于矢量 PDF 的深度字符流擦除。如果是扫描版 PDF，建议先使用我们的 OCR 识别工具，或手动裁剪工具。' },
      { question: '“红外交叉准星”是最终文件里的效果吗？', answer: '不是。这只是我们在前端展示分析进度时的 HUD 全息动效。导出的 PDF 中会按照您的设置，显示为标准的规整黑盒。' },
    ],
  },
  'bookmarks-auto-generator': {
    title: '自动生成书签',
    metaDescription: '分析 PDF 排版字号与正则标题（如第一章），自动反推树形大纲，物理注入 /Outline 编目。',
    keywords: ['大纲自动生成', '书签生成器', 'pdf书签注入', '字号大纲推导', '物理目录注入'],
    description: `
      <p>多层级书签自动生成与目录编目器能够瞬间将“乱麻”般的 PDF 文档整理得丝丝入扣。</p>
      <p>没有大纲书签的 PDF 阅读起来极其痛苦，尤其是数百页的说明书或论文。本工具通过解析页面字符的字体大小 (font-size)、加粗特征，配合章节正则表达式（如“第X章”、“Chapter X”），自动理清并还原出完整的树状大纲。</p>
      <p>随后，系统物理重构 PDF 并注入 <code>/Outline</code> 编目字典，使导出的 PDF 在任何阅读器中打开时都自带完整的多级侧边栏书签，还配有极具黑客色彩的 3D 大纲晶格树展开效果。</p>
    `,
    howToUse: [
      { step: 1, title: '上传无书签的PDF', description: '上传没有左侧导航书签或章节大纲的大型 PDF 手册、论文。' },
      { step: 2, title: '调整字号推导规则', description: '设置检测策略，可指定字号阈值及自定义正则表达。' },
      { step: 3, title: '生成并物理注入', description: '点击执行，大纲树在晶格沙盘上如树叶般舒展开，一键写入 PDF 二进制中。' },
    ],
    useCases: [
      { title: '大型技术手册整理', description: '为几百页的无目录仪器说明书或标准文件自动生成多级大纲书签，大幅提升工作效率。', icon: 'tool' },
      { title: '学位论文整理归档', description: '在提交学位论文前，自动推导构建一级、二级书签大纲，满足高校归档的规范要求。', icon: 'graduation-cap' },
      { title: '电子书精排阅读', description: '在导入 Kindle/平板阅读前，将扫描版的无大纲电子书梳理注入完整章节目录。', icon: 'tablet' },
    ],
    faq: [
      { question: '有些偏僻的章节标题格式能被识别吗？', answer: '能。您只需在右侧的“自定义匹配正则”中填入对应的规律（如 `^[一二三]、`），系统即可自动应用该规则进行精准提取。' },
      { question: '这会改变 PDF 原来的排版外观吗？', answer: '完全不会。本工具仅仅是在 PDF 文件底层结构中增加了一个 Outline 关联索引字典，不改变任何页面内容的渲染。' },
      { question: '最大支持几层大纲？', answer: '系统目前支持多级深度的嵌套大纲，能够完美映射“篇-章-节-小节”等四级及以上的超复杂文档树。' },
    ],
  },
  'batch-barcode-injector': {
    title: '批量注入条码',
    metaDescription: '接收资产链接或列表，批量生成高保真 QR/Code128 码，精确定位批量注入 PDF 页。',
    keywords: ['二维码批量生成', '条码注入pdf', '资产标签pdf', 'pdf二维码对齐', '批量条码添加'],
    description: `
      <p>PDF 批量二维码/条形码生成与资产注入器是连接数字资产与实体纸张的物理桥梁。</p>
      <p>在库管、合同审核或固定资产盘点中，我们需要为大量的 PDF 文档（如出库单、合同、设备卡）打上唯一的条码或二维码。本工具让这一过程变得极其轻松。</p>
      <p>您可以自定义二维码或 Code128 条形码，使用我们极其震撼、带绿色物理激光对齐导轨的可视化对齐舱，精确配置其在各页上的物理坐标。拖放定位释放时甚至伴随一声清脆的“滴”收银扫码音，流光闪烁，高级感拉满。</p>
    `,
    howToUse: [
      { step: 1, title: '上传目标PDF', description: '拖入需要印盖二维码/条形码的单页或多页 PDF 合同、出库单。' },
      { step: 2, title: '设置条码文本与坐标', description: '选择条码类型（QR 或 Code128），输入条码值，利用滑条或拖拽框对齐坐标。' },
      { step: 3, title: '批量注入并下载', description: '点击执行，生成的条形码精准覆盖渲染在所有页面的指定位置。' },
    ],
    useCases: [
      { title: '合同防伪溯源', description: '在合同首页右上角批量印盖带有合同编号、防伪链接的专属二维码。', icon: 'file-check' },
      { title: '物流出库单批量贴码', description: '快速在出库单指定位置打上 Code128 条形码，方便手持扫描枪扫码自动入库。', icon: 'truck' },
      { title: '固定资产卡片建档', description: '为每一页资产设备卡物理添加一个包含设备参数和盘点链接的二维码。', icon: 'archive' },
    ],
    faq: [
      { question: '生成的二维码扫码识别率高吗？', answer: '极高。我们采用的是纯矢量到高分辨率无损 PNG 的渲染，在 PDF 内部作为高精度图像嵌入，即使打印成很小尺寸也极易被扫描枪和手机识别。' },
      { question: '能在不同的页面印盖不同的条码吗？', answer: '目前单次处理会在所有指定页面的同一坐标印盖相同的条码。如果需要为每页盖不同的条码，可期待我们即将推出的批量 Excel 导入模式。' },
      { question: '坐标点 `pt` 代表什么？', answer: '`pt`（Point）是 PDF 国际标准物理度量单位。1 英寸 = 72 pt。A4 纸的物理尺寸换算为 PDF 点数为 595 × 842 pt，我们的可视化对齐舱会自动帮您计算。' },
    ],
  },
  'signature-ink-optimizer': {
    title: '签名印章提取',
    metaDescription: '提取照片中手写签名和红色印章，过滤白黄色阴影褶皱纸张杂噪，输出透明 Alpha 通道 PNG。',
    keywords: ['手写签名抠图', '印章透明背景', '签名背景变透明', '签名对比度增强', '笔迹净化'],
    description: `
      <p>手写签名/印章色彩还原与背景透化舱是一间极具硬核图像底蕴的“笔迹净化离心机”。</p>
      <p>当我们在手机上给手写签名或盖章拍照时，图片往往夹杂着泛黄的纸张底色、室内灯光的灰黑投影、以及纸张表面的褶皱。直接贴到电子合同上会显得极其不专业。</p>
      <p>本工具提取图像像素的色彩空间与灰度直方图，应用自适应 Alpha 通道抠图滤镜，将所有发白、泛黄的底色强力漂白并转化为 100% 透明背景。同时智能识别红色印泥（Chroma Ink）及黑蓝字迹并进行对比度大幅增强，余下具有饱满墨水纹理的微浮雕笔划，质感强烈。</p>
    `,
    howToUse: [
      { step: 1, title: '上传签名/印章照片', description: '上传您手机拍下的手写签名或者企业红色公章图片。' },
      { step: 2, title: '调节去噪净化滑块', description: '拉动去噪阈值及笔迹加粗滑条，在左侧实时观察背景消融和字迹显现。' },
      { step: 3, title: '生成透明PNG贴', description: '点击执行，净化完成并生成带透明 Alpha 通道的无损 PNG，可直接用于电子签名。' },
    ],
    useCases: [
      { title: '电子合同高专业度签名', description: '将手机拍的灰色签名转化为干干净净、可直接盖在红字上面的透明手写签章。', icon: 'file-signature' },
      { title: '企业电子印章规范化', description: '净化实物公章照片，剔除复杂纸质纤维阴影，形成高纯净度的无损透明电子公章。', icon: 'stamp' },
      { title: '插画手稿线条提取', description: '提取白纸手绘线稿中的纯黑线条并透明化，便于导入 Photoshop 进行二次上色。', icon: 'edit' },
    ],
    faq: [
      { question: '“自适应 Alpha 抠图”和普通的去底色有什么不同？', answer: '普通去底色会把字迹内部的浅色也扣成透明，导致字迹看起来残缺发虚。本算法只过滤背景的低对比度发白发黄区域，并对属于字迹的笔锋边缘进行像素增强，边缘光滑柔和。' },
      { question: '支持哪些图片格式？', answer: '支持 JPG, JPEG, PNG 格式。我们建议在拍照时尽可能让光线均匀，这会让抠图净化效果更加完美。' },
      { question: '字迹会失真变形吗？', answer: '完全不会。我们的图像增强算法是在像素原位进行色彩过滤与对比度重映射，100% 保留了您手写字迹的转折和笔画细节。' },
    ],
  },
  'dead-link-debugger': {
    title: '失效链接修复',
    metaDescription: '全局探测 PDF 中所有 `/URI` 动作，支持死链批量替换，重构注入回写。',
    keywords: ['pdf死链检测', 'pdf超链接修改', 'pdf链接失效检测', 'pdf重定向注入', '超链接替换'],
    description: `
      <p>全局超链接/失效网址自动修复器是一款保障 PDF 文档交互品质的底层编辑器。</p>
      <p>发布的报告、白皮书或产品指南中如果包含大量的失效超链接（如 404、500、或重定向网址），会极大降低专业度。本工具帮助您重新掌控外链命脉。</p>
      <p>系统批量解析 PDF 页面的 <code>/Link</code> 注解字典，在后台构建多线程 URL 检测，并在左侧以红（死链）、橙（重定向）交互式网格的形式呈现出来。用户可以直接像填写表单一样输入新的网址，系统会将全新的链接一键重构写回 PDF 的二进制对象流中，原地复活！</p>
    `,
    howToUse: [
      { step: 1, title: '上传待检测PDF', description: '上传含有超链接、需要调试网址的 PDF 说明书或报告。' },
      { step: 2, title: '一键扫描与修改', description: '点击开始探测，系统自动抽取所有外链。在被标记为死链的条目旁边填入您要重定向的新网址。' },
      { step: 3, title: '回写二进制并下载', description: '点击写入修复，系统瞬间将超链接替换回写并生成修正后的 PDF。' },
    ],
    useCases: [
      { title: '宣传册死链热修复', description: '发现已经发出去的宣传册 PDF 中官网链接填错，不用重新排版，直接热替换修复链接。', icon: 'refresh-cw' },
      { title: '电子书引用网址订正', description: '批量扫描学术论文电子书中的参考文献网址，订正死链以保证引用的学术严谨性。', icon: 'book' },
      { title: '企业迁移网址批量更新', description: '当公司域名更换后，批量将几百份旧版 PDF 文件中的旧链接全部更新为新网址。', icon: 'globe' },
    ],
    faq: [
      { question: '为什么不直接用网络请求自动在线探测死链？', answer: '在浏览器端直接发送请求探测死链会遇到跨域 CORS 协议阻断。因此我们完美地采用“提取列表 + 支持原地高灵活性热修改”的设计，将重定向权限100%交给用户。' },
      { question: '这会破坏 PDF 中的文字链接显示外观吗？', answer: '不会。这只是修改了 PDF 注解中 `/URI` 实际跳转的底层行为，页面上原本印盖的超链接文字内容和排版样式不受任何影响。' },
      { question: '支持内部跳转页码的锚点链接修改吗？', answer: '本工具专门用于扫描和修复指向外部因特网的 `/URI` 链接。如需创建指向内部页面的链接，可使用我们的双向互动目录工具。' },
    ],
  },
  'interactive-toc-generator': {
    title: '生成互动目录',
    metaDescription: '提取大纲标题，生成具有极高现代排版美学的互动目录页插入，注入 double-way /GoTo 动作。',
    keywords: ['自动生成目录', 'pdf互动目录', '双向锚定链接', 'pdf目录生成器', 'goto动作'],
    description: `
      <p>生成互动目录工具是 PDF 翻页体验的一场颠覆性革命。</p>
      <p>在阅读数十页甚至上百页的无目录 PDF 报告时，反复滑动翻页去寻找某一章节极其令人崩溃。本工具实现了完美的 <strong>TOC 目录拼接与双向锚定</strong>。</p>
      <p>系统自动扫描正文中的标题大纲，动态生成一个前置、极具现代美术排版感（Pop-up Origami）的前置目录页插入到 PDF 第 2 页。在此目录的每一行注入精确指向目标页面的内部 <code>/GoTo</code> 锚点。更令人惊叹的是，系统会在目标正文页的边缘物理盖印一个“Back to TOC ↩”的小巧悬浮按钮，支持随时双向返回，带来如网页导航般丝滑的翻页体验。</p>
    `,
    howToUse: [
      { step: 1, title: '上传待建目录的PDF', description: '上传没有前置目录页的 PDF 说明书、论文或财务分析。' },
      { step: 2, title: '设定目录标题与位置', description: '可自定义目录大标题，以及选择目录页插在第几页（默认第1页）。' },
      { step: 3, title: '织入双向目录并下载', description: '点击执行，伴随精致折纸飞舞动效，包含双向跳转的高级互动 PDF 瞬间诞生。' },
    ],
    useCases: [
      { title: '企业年度报告精排', description: '为财报一键加盖高颜值封面后的互动目录页，让投资者阅读时能够极速双向跳转。', icon: 'file-bar' },
      { title: '毕业论文前置编目', description: '在毕业论文正文前，自动快速织入规范排版的页码目录，并确保双向链接高可用。', icon: 'bookmark' },
      { title: '产品说明书操作优化', description: '让产品手册的用户在阅读到具体故障排查页时，可以通过“TOC ↩”按钮一键返回主菜单。', icon: 'check-circle' },
    ],
    faq: [
      { question: '“双向锚定”的原理是什么？', answer: '我们在目录页的对应位置写入了跳转至目标页的 `/Link` 动作；同时，在每个被锚定的目标正文页右上角，物理印盖了一个微型的跳转按钮链接回目录页。这都是通过低级对象树回写实现的。' },
      { question: '插入目录页后，原 PDF 后面的页码会错乱吗？', answer: '完全不会。我们的目录生成器在计算跳转和绘制目录时，已经自动将插入的目录页本身计入了偏移量，所有跳转和页码标注依然保持 100% 精准对齐。' },
      { question: '发行的 PDF 打印出来后目录还有效吗？', answer: '打印为物理纸张后，前置的目录页上会规整地标明“第几页”，您可以直接对照页码翻阅；而在屏幕阅读时，可以用鼠标直接点击超链接跳转。' },
    ],
  },
  'global-invoice-parser': {
    title: '发票翻译与折算',
    metaDescription: '智能识别多国发票，原地翻译表格条目，按实时国际汇率覆盖高端三维立体折算账本。',
    keywords: ['发票翻译', '发票汇率折算', '外币账单换算', '发票原地替换', '多币种发票'],
    description: `
      <p>发票翻译与折算工具是跨国财务人员与海淘用户的“掌控感福音”。</p>
      <p>拿到美元、欧元、日元等外币发票时，繁杂的汇率计算和语种障碍令人头疼。本工具不仅实现了 <strong>发票表格条目的原地翻译</strong>，更接入了实时国际汇率机制。</p>
      <p>自动在发票右下角或页脚留白位置，物理覆盖印盖一个 HSL 毛玻璃效果、印有三维货币符号发光的“Exchange Rate ledger”汇率折算账本，并伴随老虎机滚轮数字翻转的震撼特效。不破坏原有发票排版格式，清晰呈现本币合计及汇率，财务掌控感满分。</p>
    `,
    howToUse: [
      { step: 1, title: '上传外币发票PDF', description: '拖入一张包含美元 ($)、欧元 (€) 或日元 (¥) 的 PDF 发票或账单。' },
      { step: 2, title: '设定本币与汇率', description: '选择您希望折算的目标本币（如 CNY），可手动填入自定义汇率或使用实时汇率。' },
      { step: 3, title: '生成折算账本', description: '点击折算，发票总额旁边被优雅 stamped 本地汇率账本并开放下载。' },
    ],
    useCases: [
      { title: '跨国差旅费报销', description: '员工海外出差的发票（如美元计价），一键折算为人民币总额，并物理印盖汇率快照，方便财务极速报销。', icon: 'plane' },
      { title: '跨境海淘对账结算', description: '将海淘账单上的欧元/日元原地折算，一眼看清真实的本地货币支出。', icon: 'credit-card' },
      { title: '外贸企业发票建档', description: '为日常繁杂的外币结算单加盖本币标记及核算快照，统一财务归档度量衡。', icon: 'folder-open' },
    ],
    faq: [
      { question: '它是如何自动获取发票金额的？', answer: '系统后台利用 PDFJS 文本字符流分析，通过金钱正则匹配带有 `$`、`€`、`£` 等符号 of 的数字。同时分析 `Total` 等关键词以锁定真实的发票最终金额。' },
      { question: '汇率是实时的吗？', answer: '是的。默认情况下，系统会基于国际汇率接口自动拉取当天的基准汇率。当然，您也可以完全自由地手动填入公司财务统一要求的内部结算汇率。' },
      { question: '盖印的“转换账本”会遮挡原发票的关键信息吗？', answer: '系统会智能探测发票底部的空白位置进行盖印。同时，该账本背景具有高品质半透明毛玻璃特效，能够以优雅、不破坏原文档格式的形态贴在页面上。' },
    ],
  },
  'pdf-deskew-aligner': {
    title: '扫描件自动纠偏',
    metaDescription: '智能检测手机拍摄或扫描版 PDF 的倾斜角度，物理纠偏并重新水平对齐，恢复完美排版。',
    keywords: ['pdf纠偏', '扫描件对齐', '自动旋转对齐', 'pdf水平校正', '纠正歪斜文档'],
    description: `
      <p>扫描件自动纠偏工具是数字化纸质档案和处理手机照片 PDF 的“强迫症终结者”。</p>
      <p>当您使用手机摄像头快速拍摄合同，或从老旧扫描仪中导出一叠文件时，页面往往会有几度的微小倾斜。这不仅影响屏显阅读体验，在重新打印时更会使版面杂乱无章。</p>
      <p>本工具采用顶尖的<strong>拉东变换（Radon Transform）与霍夫直线提取算法</strong>。系统在后台以毫秒级对页面图像的投影梯度和边缘直角特征进行扫射，计算出精细到 0.01 度的倾斜角 $\theta$，并在 Canvas 离线沙箱中完成像素级的反向旋转纠偏，瞬间让您的合同、收据和手稿重归完美的水平几何线。</p>
    `,
    howToUse: [
      { step: 1, title: '上传歪斜的扫描 PDF', description: '拖入手机拍摄倾斜、或扫描仪导出的任意 PDF 文档。' },
      { step: 2, title: '自动检测与微调', description: '系统将瞬间检测倾斜角度并投射几何网格。您可以一键对齐，也可微调角度。' },
      { step: 3, title: '执行纠偏并下载', description: '点击执行，页面伴随丝滑物理陀螺仪摆动，下载完美水平对齐的 PDF。' },
    ],
    useCases: [
      { title: '合同及收据归档', description: '将随手用手机拍摄的倾斜合同照片，极速一键拉直归档，复印打印如原件般整洁。', icon: 'file-text' },
      { title: '老旧书籍数字化', description: '修复扫描古旧书籍或字画时由于翻开不平整导致的文字倾斜，统一排版。', icon: 'book' },
      { title: '考卷及作业扫描', description: '自动校正学生拍摄上传的歪斜作业，大大降低批改时的视觉疲劳。', icon: 'edit-3' },
    ],
    faq: [
      { question: '“拉东变换检测”的原理是什么？', answer: '它通过对页面进行多角度的积分投影，寻找投影方差最大的那个特定角度。由于印刷排版在水平方向上的文字行具有极强的梯度，这个最大方差角就是精准的倾斜角。' },
      { question: '校正后会裁剪掉页面边缘的内容吗？', answer: '算法采用“自适应外接圆扩展”机制。旋转后会自动略微扩大画布尺寸并进行智能白边补全，绝对不会裁剪或丢失任何原本的文字或图片边缘信息。' },
      { question: '支持带有复杂图表的页面吗？', answer: '支持。只要页面上有规整的横向文字行或明显的边界线，算法就能高精度提取水平基线，完美进行倾斜校正。' },
    ],
  },
  'pdf-two-column-reflower': {
    title: '双栏论文重排',
    metaDescription: '智能识别 PDF 论文或期刊的双栏排版格式，无损切分并重组为单栏自适应布局，畅享手机阅读。',
    keywords: ['双栏转单栏', '论文重排', '手机看论文', 'pdf自适应阅读', '重组双栏pdf'],
    description: `
      <p>双栏论文重排工具是解决移动端阅读学术文献痛点的“终极利器”。</p>
      <p>在手机、Kindle 或 iPad Mini 上阅读 IEEE、ACM、Nature 等经典双栏排版（Two-column）PDF 论文时，读者需要频繁地将视口放大、左滑阅读、下移、再右滑回到右栏顶部。这种碎片化、反复折腾的交互方式极易打断阅读思绪。</p>
      <p>本工具基于高精度<strong>段落流空间提取与中缝识别定位内核</strong>。它在客户端自动计算字符流的横向密集度，精确定位双栏之间的白色中缝屏障。将物理页面完美拆解为左、右半版，并根据文章逻辑流向，自动按“先左后右、先上后下”的规则纵向编织成一张自适应单栏向下滚动的全新 PDF，让论文直读一气呵成！</p>
    `,
    howToUse: [
      { step: 1, title: '导入双栏排版 PDF', description: '上传需要重排的 ACM、IEEE 或其他双栏排版的学术论文或期刊。' },
      { step: 2, title: '中缝预览与核对', description: '查看系统自动标注的红色垂直中缝切线，确保图表和文字区域没有发生粘连。' },
      { step: 3, title: '流式编织并导出', description: '点击执行，双栏页面在 3D 折扇卷轴动效中重排为单栏版式并极速下载。' },
    ],
    useCases: [
      { title: 'Kindle/电子书阅读', description: '将厚重难读的双栏论文一键重排，导入墨水屏设备，享受如读小说一般的流式排版。', icon: 'tablet' },
      { title: '手机端直读文献', description: '在地铁或户外用手机看论文时，无需双指频繁拖拽放大，直接单手顺畅下拉阅读。', icon: 'smartphone' },
      { title: '老旧期刊整理', description: '将古老双栏报纸、行业期刊重塑为单栏排版，方便视力不佳的年长读者无障碍扫描。', icon: 'book-open' },
    ],
    faq: [
      { question: '跨栏的超大图表和数学公式会怎么处理？', answer: '我们的段落编排器包含“跨栏检测（Span detection）”。对于宽度超过页面单栏上限的大插图、三线表或长数学公式，系统会自动将其判定为“跨栏元素”，在单栏中独占一行进行完整保留，绝不发生错位裁切。' },
      { question: '这会破坏原 PDF 的矢量文字清晰度吗？', answer: '完全不会。这并非把页面截图后剪切，而是在 low-level PDF 树中直接调整各文本组和图片 XObject 的绘制视口和包围盒（Clipping path），100% 保持原本的矢量清晰度和可复制性。' },
      { question: '所有的 PDF 论文都能用吗？', answer: '本工具针对双栏排版的文本类 PDF 文档效果完美。如果是纯扫描版的图片 PDF，建议先运行我们的 OCR 识别，之后再进行单栏重排。' },
    ],
  },
  'pdf-page-resizer-uniform': {
    title: 'PDF 尺寸统一',
    metaDescription: '批量将混合有 A4、A3、Letter 等异型大小的 PDF 页面智能等比缩放、对齐至统一规格（如 A4），方便打印 and 阅览。',
    keywords: ['pdf尺寸统一', 'pdf等比缩放', 'pdf合并对齐', '统一mediabox', '批量规范尺寸'],
    description: `
      <p>PDF 尺寸统一工具是规范凌乱 PDF 文档、保障高可用打印的“排版精算师”。</p>
      <p>在日常办公中，我们经常需要合并多个不同来源的 PDF 报告。有的页面是标准 A4，有的是美国信纸 (Letter)，有的甚至混杂着超大 A3 报表。合并后，阅读时页面时大时小、左右跳动；在物理打印时更会遇到纸张不匹配、内容缺失的尴尬。</p>
      <p>本工具能够在底层彻底重写页面的 <code>/MediaBox</code> 与 <code>/CropBox</code> 尺寸矩阵。它读取每一个物理页面的真实宽高，根据您指定的目标尺寸（如 A4），通过**高精度等比缩放与坐标置中算法**，将页面内容无损投影在新画布上。自动为过窄或过宽的页面添加优雅、绝对一致的四周空白，让整份 PDF 如出一人之手！</p>
    `,
    howToUse: [
      { step: 1, title: '添加异型尺寸 PDF', description: '上传包含 A4、Letter、A3 等大小不一、尺寸凌乱的 PDF 页面。' },
      { step: 2, title: '挑选目标规格', description: '选择希望统一归一的目标尺寸（如 A4、A3 等），并指定是等比缩放还是物理裁剪。' },
      { step: 3, title: '一键归一并下载', description: '点击执行，伴随 3D 纸张叠齐卡位动效，下载整齐划一、100% 尺寸一致的 PDF。' },
    ],
    useCases: [
      { title: '标书与标书附件合并', description: '将扫描资质证书（异型图纸）与标准 A4 投标文件无缝合并，统一尺寸后再行物理打印，避免卡纸。', icon: 'file-text' },
      { title: '设计画册与图表整合', description: '把超宽的 A3 财务数据统计表智能缩放折合到 A4 报告中，保持打印输出时的长宽规范。', icon: 'layout' },
      { title: '电子书统一裁边', description: '将不同章节大小有些许微小参差的扫描版电子书，一键强制归一到同一尺寸，提升翻页直观感。', icon: 'book' },
    ],
    faq: [
      { question: '“尺寸归一”是粗暴拉伸画面吗？', answer: '绝不。我们提供“等比缩放并留白（Contain）”和“居中对齐裁剪（Cover）”两种模式。默认等比缩放绝对不会导致字体或插图发生扁平、变高的形变。' },
      { question: '原有的注释、超链接在缩放后还能用吗？', answer: '可以。算法在缩放页面内容的同时，会智能遍历该页上的所有 Annotations 动作定位字典，将其相对坐标系乘以相同的缩放比例因子，确保表单、链接、签名在缩放后 100% 依然可用且完全对齐。' },
      { question: '最大支持多少个页面同时归一处理？', answer: '由于是在您本地浏览器沙箱中由高性能编译引擎处理，本工具支持一次性对多达数百页的超大 PDF 进行闪电般的归一化重绘。' },
    ],
  },
  'handwriting-ink-contrast-booster': {
    title: '手写笔迹增强',
    metaDescription: '自动识别扫描合同或手写笔记上的蓝/黑色笔迹，彻底剔除纸张杂色和泛黄霉斑，大幅增强字迹对比度。',
    keywords: ['签名笔迹增强', '合同笔迹加黑', '笔迹净化提取', '扫描件漂白', '增强手写合同'],
    description: `
      <p>手写笔迹增强工具是让扫描签名和手写文稿恢复“跃然纸上”质感的物理纯化器。</p>
      <p>商业合同被手写签字盖章并再次扫描后，签名笔迹往往因为扫描仪灯光反射、泛黄的纸张底色而显得苍白无力，再次打印或复印时极易模糊成一片。普通的对比度调节又会导致背景变黑，难以直视。</p>
      <p>本工具采用顶尖的<strong>局域对比度受限自适应增强（CLAHE）与高阶通道色彩分离技术</strong>。在 Canvas 离线处理中，它通过动态直方图色彩阈值判定，精准识别纯手写笔迹（无论是钢笔蓝还是中性笔黑），彻底将纸面上发黄的霉斑、阴影、折痕全部“物理压平”抹去，同时将手写笔迹进行微米级的局域对比度拉伸与饱和度加深，让每一个手写折角重现墨水浸润般的立体饱满！</p>
    `,
    howToUse: [
      { step: 1, title: '导入手写或扫描 PDF', description: '上传带有手写签名、会议纪要或手绘草稿、且字迹暗淡背景杂乱的 PDF。' },
      { step: 2, title: '设定纯化色彩模式', description: '选择希望保留的笔迹色彩（如深黑、深蓝、或混合），并拉动对比增强滑杆。' },
      { step: 3, title: '物理增强并下载', description: '点击执行，伴随发光色彩扫描透镜，下载字迹纯净、对比强烈的 PDF。' },
    ],
    useCases: [
      { title: '签字合同及协议整理', description: '将扫描质量堪忧、签名暗淡的销售合同，一键还原出纯白背景和高对比度签字，方便归档和分发。', icon: 'file-check' },
      { title: '手写课堂笔记电子化', description: '将笔记本上的数学推导、手绘草图一键清除灰色背景和纸张折痕，完美融入电子笔记本。', icon: 'book' },
      { title: '历史文献及墨迹加深', description: '为年代久远、字迹淡化的历史宗卷重塑墨水深度，抢旧模糊的文字信息。', icon: 'archive' },
    ],
    faq: [
      { question: '它与普通的灰度化有什么区别？', answer: '普通灰度化会连同纸面阴影一起变灰，而我们的算法能够精细提取手写笔迹的“光谱边缘”，将背景纸张剥离为绝对纯白，只保留并加浓手写线条本身。' },
      { question: '这会丢失原签名中的手写质感吗？', answer: '不会。算法不是生硬的矢量描边，而是进行亚像素的局部对比度灰度级拉伸，保留了笔锋在纸张边缘留下的自然磨损、飞白和墨迹深浅变化。' },
      { question: '支持处理带有盖印红章的文档吗？', answer: '支持。您可以勾选“保留彩色（Chroma Red/Blue）”选项，这能保证在将黑色字迹加浓、背景完全漂白的同时，红色的印章和蓝色的签名依然保留它们鲜艳的彩色光谱。' },
    ],
  },
  'pdf-spine-bookbinder': {
    title: '书脊厚度计算',
    metaDescription: '依据 PDF 总页数与纸张克重规格，自动精准计算胶装/线装书脊物理厚度，一键生成带对齐折痕的书脊封面。',
    keywords: ['计算书脊厚度', '物理书脊生成', '标书封面排版', '折页痕计算', '胶装书 binder'],
    description: `
      <p>书脊厚度计算工具是出版排版和工程标书制作团队的“物理力学精装师”。</p>
      <p>在书籍出版、高档画册装订或厚重招投标书打印的最后一环，设计师必须为书本胶装定制专属的“书脊”（Spine）封面。如果书脊宽度设计有几毫米的偏差，装订出来的书就会发生封面歪斜、折痕起皱，极度影响专业度。而手动计算厚度繁琐易错，因为不同克数的纸张厚度完全不同。</p>
      <p>本工具基于精准的<strong>纸张克数-厚度物理建模库</strong>。您只需输入 PDF 的正文总页数，挑选纸张材质（如 80g 复印纸、100g 铜版纸、哑粉纸等），系统便能精确到微米级算出书脊的物理宽度。并利用 <code>pdf-lib</code> 动态渲染生成一张带有完美正封面、书脊和后封面，且含有精确物理对齐折痕（Spine marks）的打印级 PDF 书套！</p>
    `,
    howToUse: [
      { step: 1, title: '设定正文页数与纸张', description: '输入您 PDF 正文的真实页数，选择纸张克重参数（例如：双面打印/80g 纸）。' },
      { step: 2, title: '设计书脊图文', description: '在预览区中输入书脊大标题、作者信息和配色方案。' },
      { step: 3, title: '动态 3D 预览并导出', description: '在 3D 旋转书籍模型中查看厚度和折痕是否完美，点击执行导出高精度印刷级 PDF。' },
    ],
    useCases: [
      { title: '招投标文件封面设计', description: '为几百页厚的厚重标书一键量身定做带物理折线书脊的封面，保证装订效果绝对严密。', icon: 'layers' },
      { title: '毕业论文精装版装订', description: '计算硕士/博士论文胶装硬壳所需的书脊尺寸，防止印装封面位移。', icon: 'award' },
      { title: '自出版图书封面设计', description: '独立作家出版实体书籍时，精确计算各厚度纸张的折页痕宽度，高保真排版。', icon: 'book-open' },
    ],
    faq: [
      { question: '“克重厚度模型”的计算精准吗？', answer: '非常精准。我们收集并固化了工业级造纸工艺的平均纸厚比（例如：70g 纸 = 0.09mm；80g 纸 = 0.10mm；157g 铜版纸 = 0.13mm 等）。并且提供“双面打印”开关，自动减半计算物理页数。' },
      { question: '生成的封面可以直接拿去打印店打印吗？', answer: '完全可以。本工具导出的 PDF 封面是无损矢量格式，并且带有标准十字套印裁剪准星（Crop Marks）和书脊物理折线，打印店的切纸机和胶装机可以直接读取。' },
      { question: '支持为书脊添加背景色或图片吗？', answer: '支持。您可以自由挑选高雅的渐变色背景，也可以上传一张图片使其平铺覆盖整个封面，系统会自动将图片在书脊边缘进行高精度折角裁切适配。' },
    ],
  },
  'pdf-signature-anchor-helper': {
    title: '签名位置引导',
    metaDescription: '智能检索合同中的签字/盖章标志词，自动精准注入带高亮脉冲光晕和图标的 PDF 可点击交互跳转指引图层。',
    keywords: ['签名位置指引', '注入签名锚点', '合同签字助手', 'pdf指示图层', '防止合同漏签'],
    description: `
      <p>签名位置引导工具是保障商业合同和跨国多方协议完美合规签署的“流程守护神”。</p>
      <p>面对动辄几十页的复杂融资协议、保密合同或合伙协议，客户在打印或电子签署时，经常因为找不到具体的签字栏，导致“漏签”或“错签”，不得不反复沟通重寄，极大拖延了商业进程。</p>
      <p>本工具采用先进的<strong>文本流正向正则语义匹配技术</strong>。它扫描 PDF 底层字符空间，智能锁定 <code>Signature</code>、<code>签字</code>、<code>受让方盖章</code>、<code>签署日期</code> 等物理坐标。利用 <code>pdf-lib</code> 的低级注释树（Annotation Tree）在这些坐标的空白外延，一键注入带优雅高亮霓虹框和钢笔动效的 Link 跳转锚点！当客户打开 PDF 时，签字位置会伴随炫酷的光晕呼吸脉冲，引导其无漏完成签署！</p>
    `,
    howToUse: [
      { step: 1, title: '导入商务合同 PDF', description: '上传需要多方签署、页数繁多、签字位置隐蔽的 PDF 合同文档。' },
      { step: 2, title: '智能扫描与标记', description: '系统将列出所有自动检测到的签名栏坐标。您可以一键启用，也可手动增补指引标记。' },
      { step: 3, title: '注入指引层并下载', description: '点击执行，将呼吸指引图层物理织入 PDF 结构中并极速下载。' },
    ],
    useCases: [
      { title: '大型融资合作协议', description: '在涉及数十个签名位置的多人合伙协议中，为每位签署人注入醒目的专属跳转标记，防止漏签。', icon: 'users' },
      { title: '入职合同与保密协议', description: '新员工入职签署时，快速标注多处骑缝章、紧急联系人签字区，流畅引导电子化入职。', icon: 'file-text' },
      { title: '跨国商贸采购单签署', description: '多币种、多条款的大额订单中，将双方盖章栏坐标加盖显眼的蓝色飞翼跳转指示。', icon: 'briefcase' },
    ],
    faq: [
      { question: '“指引图层”会在打印时显示吗？', answer: '我们特别配置了 PDF 规范的 `Printable` 标志字典。默认情况下，这些交互指引卡片在电脑、手机屏幕上翻阅时会有高亮动画，而在物理纸张打印时则会自动隐形，不留任何痕迹。' },
      { question: '支持在签字位置之间快速跳转吗？', answer: '支持。我们注入的是双向内部 GoTo 超链接。客户打开 PDF 后，只需点击左侧或顶部的“快速引导”快捷标签，便能以翻书动画般丝滑地顺次在各个签名空缺处跳转。' },
      { question: '如果签名栏是图片格式的它能匹配吗？', answer: '我们不仅扫描文本流字符，还会智能提取页面最下方的虚线区域和留白框，对于纯扫描图的合同，依然能在预估签字位置位置精准注入锚点。' },
    ],
  },
  'pdf-lossless-slicer': {
    title: '大图纸无损裁剪',
    metaDescription: '在 PDF 树底层重写视口包围盒矩阵，高保真裁剪超大 CAD 工程蓝图的局部区域，完全保持矢量曲线且文件体积暴降。',
    keywords: ['pdf矢量裁剪', '无损pdf切片', '修改mediabox', 'cad局部提取', '高保真裁剪图纸'],
    description: `
      <p>大图纸无损裁剪工具是针对 engineering 工程师和精密图纸审计人员的“低级矩阵手术刀”。</p>
      <p>当需要从一张高达数米宽、包含数十万个矢量线条的超大 CAD 机械图纸、电路图或建筑蓝图 PDF 中，切分并提取其中一个局部的泵房或芯片核心区时，常规的“截图”会彻底丢失原本的矢量曲线，导致局部模糊得无法看清参数；而普通的 PDF 裁剪工具通常只是加上一层掩膜，文件的体积依然是几百兆，且隐藏的图层随时会被不安全地拉伸出来。</p>
      <p>本工具能够在底层彻底重塑页面的 <code>/MediaBox</code>、<code>/CropBox</code>、<code>/BleedBox</code> 物理裁剪矩阵，并物理过滤包围盒外的冗余 XObject 与矢量路径节点。在完全保持矢量精度（无论放大多少万倍依然绝对平滑清晰）的同时，物理性抛弃剪裁区外的庞杂数据，瞬间将百兆超大文件精简到几十 KB！</p>
    `,
    howToUse: [
      { step: 1, title: '导入超大图纸 PDF', description: '上传高解析度的 CAD 蓝图、精密图表或超大规格画册。' },
      { step: 2, title: '拉拽发光激光裁切框', description: '在预览界面中拉伸发光的绿色裁剪选框，锁定您需要无损切片的局部区域。' },
      { step: 3, title: '物理物理切割并保存', description: '点击裁剪，伴随两道炫酷激光束交叉扫过，瞬间下载完美局部无损的 PDF。' },
    ],
    useCases: [
      { title: 'CAD工程图局部提取', description: '从浩瀚的几百兆全套厂房设计图纸中，一键剥离出“冷却系统”局部，发送给分包商讨论。', icon: 'crop' },
      { title: '地图与高精度遥感分析', description: '截取巨幅高清矢量卫星地图的指定街区，作为分析报告的无损高清插图。', icon: 'map' },
      { title: '电子书插图高质量收藏', description: '无损提取医学或理工科电子书中高清晰度的复杂原理结构图，保持超清缩放。', icon: 'image' },
    ],
    faq: [
      { question: '这里的“物理裁切”和截图有什么区别？', answer: '截图是丢失全部原字样、曲线信息的栅格像素图；本工具则是对原 PDF 矢量线条进行“包围盒投影过滤”，保留原文字段可搜索性以及全部矢量顶点，理论上可以无限放大。' },
      { question: '被裁剪区外的内容还会残留在文件里吗？', answer: '绝对不会。我们的净化引擎会对超出裁剪选区边界 50pt 外的所有孤立节点、隐秘图片对象进行真正的 binary 链条截断和废弃数据物理清除，保障文件物理尺度的真正瘦身。' },
      { question: '支持导出为其他矢量格式（如 SVG）吗？', answer: '默认导出为标准高清晰度 PDF 图纸。您可以无缝将裁剪出来的高清局部通过我们的“PDF-to-SVG”工具一键转为标准的网页可缩放矢量格式。' },
    ],
  },
  'pdf-scratchpad-canvas': {
    title: '草稿拼接画布',
    metaDescription: '重新规划页面尺寸，在每一页 PDF 的右侧或底侧拼接精美发光的网格/横线笔记画布，专为备考和公式推导设计。',
    keywords: ['pdf加草稿页', '页面横向拼接', 'cornell笔记网格', '低级物理重绘', '备考pdf笔记本'],
    description: `
      <p>草稿拼接画布工具是为广大学生党、考研考公一族和科研人员定制的“公式演算伴侣”。</p>
      <p>在 iPad、平板或电脑上翻阅 PDF 课件、英语真题或专业书做笔记时，原文档紧凑的排版几乎没有留下任何写字演算的空间。如果额外打开一个笔记软件，又需要在两个应用之间频繁切屏，极度破坏专注度。而直接加一页空白页，又无法在看到题目的一瞬间在旁边演算。</p>
      <p>本工具运用了神奇的<strong>页面物理维度拓宽与平铺拼接技术</strong>。在底层无损调整原页面的 <code>/MediaBox</code> 矩阵，使页面宽度横向或高度纵向增加 200~250 pt。在这片全新拓宽的纯净“物理留白区域”内，自动绘制高画质的三维发光微网格纸、英文四线三格线或康奈尔笔记格，让您可以在题目正旁边尽情纵情手写、勾画演算！</p>
    `,
    howToUse: [
      { step: 1, title: '上传学习课件 PDF', description: '提供您需要写批注、做推演或打草稿的学习教材或英语真题。' },
      { step: 2, title: '挑选拼接方向与格线', description: '选择拼接在右侧（横屏推荐）或底部，并挑选网格、横线或空白底纹。' },
      { step: 3, title: '一键拼贴并下载', description: '点击执行，伴随精致折页展开音效，下载拥有专属草稿画板的 PDF。' },
    ],
    useCases: [
      { title: '数学/理工科课件学习', description: '在每一页讲义的右侧拼接精细网格纸，一边看老师的公式，一边在右侧进行原位推导演算。', icon: 'edit-3' },
      { title: '外语真题及阅读精读', description: '将考博、考研英语阅读真题右侧拼接横线便签，逐段进行单词解释、语法结构拆解和长难句剖析。', icon: 'book' },
      { title: '设计稿侧边批注', description: '为产品设计图或分析报告的外延增加草稿图层，方便在审图时在右边直接加盖修改注释。', icon: 'columns' },
    ],
    faq: [
      { question: '拼接草稿纸后，原来的文档内容会被挤压吗？', answer: '完全不会。算法是“向外拓宽页面物理尺寸”，而不是在原有页面内画网格。原本的书籍文字、排版和清晰度 100% 保持一模一样，只是画布边缘变宽了。' },
      { question: '所有的手写笔（如 Apple Pencil）在拼接区都能写字吗？', answer: '是的。因为拼接后产生的是一个标准的 PDF 页面整体，任何支持标准 PDF 批注涂鸦的阅读软件（如 Goodnotes、Notability、Acrobat Reader、Xodo 等）都可以完美把拼接区当作原生可书写区域。' },
      { question: '可以自定义网格的颜色和线条粗细吗？', answer: '支持。我们精心调配了浅蓝灰色、淡雅棕色和三维晶莹绿三种护眼网格线条，您可以根据阅读习惯自由挑选，线条细腻柔和，绝对不抢正文的视觉。' },
    ],
  },
  'photo-tiling-prepress': {
    title: '证件照自助拼版',
    metaDescription: '智能裁剪多规格证件照，在 5/6 寸主流相纸网格内精准计算平铺贴版，自动盖印高画质物理裁切虚线。',
    keywords: ['证件照排版', '6寸相纸平铺', '身份证排版打印', '登记照prepress', '照片自动拼版'],
    description: `
      <p>证件照自助拼版工具是实现照片和卡证极速自助拼版打印的“印前排版精算师”。</p>
      <p>日常生活中，我们经常需要打印 1 寸、2 寸登记照，或者需要复印/打印身份证、驾驶证正反面。而普通的图片打印不仅难以控制物理实际长宽尺寸（往往印出来过大或过小），而且排版凌乱，极度浪费纸张，甚至去相馆花钱让人排版也是费时费钱。</p>
      <p>本工具包含一个高精度的<strong>Prepress（印前）拼版矩阵引擎</strong>。当您拖入一张或多张人像照、证件图时，算法会自动识别其轮廓（支持自适应裁剪到标准 1 寸/2 寸规格或原始高分辨率），根据您选定的主流相纸尺寸（如 5 寸/89x127mm，6 寸/102x152mm），精准计算平铺行数和列数。并在贴版页面拼缝处自动叠加绘制极细的高画质物理裁切虚线（Crop Marks），一键输出打印分辨率 100% 对应、毫米级精准的 PDF！</p>
    `,
    howToUse: [
      { step: 1, title: '导入照片或证件图片', description: '上传您自己手机拍摄的人像登记照、身份证正反面图或驾驶证照片。' },
      { step: 2, title: '挑选相纸与裁剪规格', description: '设定要打印的相纸（如 6 寸），选择排版类型（如 8 张 1 寸，或 1 张身份证正反面对齐）。' },
      { step: 3, title: '磁力卡位并生成 PDF', description: '在带有仿真木质格调的贴版台上预览，照片会以高仿真磁力吸附排好，点击执行导出 PDF。' },
    ],
    useCases: [
      { title: '登记照自助冲印', description: '将用手机自拍的白色背景证件照，一键排满一张 6 寸相纸，用普通照片打印机即可冲印出 8 张一寸照，省去高额相馆费。', icon: 'user' },
      { title: '身份证件双面复印', description: '将身份证正面、反面照片自动规范排列在一张 Letter/A4 复印纸的同侧，直接打印即是物理复印件。', icon: 'file-text' },
      { title: '批量照片小样排版', description: '把多张家庭旅游照、聚会照按照网格贴满相纸，进行缩略小样印前预览排版，节省相纸资源。', icon: 'grid' },
    ],
    faq: [
      { question: '打印出来的照片物理尺寸真的和 1 寸/2 寸一致吗？', answer: '绝对一致。我们的排版引擎在计算贴版布局时，使用的是标准 PDF 精高精物理物理度量单位（72 pt = 1 英寸），严格将 1 寸定格在 25x35 毫米，2 寸定格在 35x49 毫米。只要在打印时选择“实际大小 / 100% 缩放”即可完美对齐。' },
      { question: '支持在同一张相纸上混合排版 1 寸和 2 寸照片吗？', answer: '支持。我们提供了多款业界主流的“混合贴版网格模板”，您可以轻松勾选“4张一寸 + 4张二寸”等经典混合贴案，让一张相纸的冲印效率拉满。' },
      { question: '相纸边缘会有裁切留白吗？', answer: '是的。算法在设计拼版矩阵时，已经自动预留了 standard 4 毫米的“物理打印边距（Print Safe Margin）”，避免各类家用和商业相纸打印机由于物理边缘卡位导致照片边缘被切。' },
    ],
  },
};


