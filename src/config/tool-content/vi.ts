/**
 * Vietnamese Tool Content
 * Requirements: 3.1 - Multi-language support
 *
 * Vietnamese tool content - contains detailed descriptions, usage instructions, use cases and FAQs for all 67 PDF tools
 */

import type { ToolContent } from '@/types/tool';

/**
 * Vietnamese tool content map
 * Each tool has: title, metaDescription, keywords, description, howToUse (3+ steps), useCases (3+ scenarios), faq (3+ questions)
 */
export const toolContentVn: Record<string, ToolContent> = {
  // ==================== CÔNG CỤ PHỔ BIẾN ====================
  'pdf-multi-tool': {
    title: 'Công cụ đa năng PDF',
    metaDescription: 'Công cụ chỉnh sửa PDF toàn diện: hợp nhất, tách, tổ chức, xóa, xoay và trích xuất trang trong một công cụ mạnh mẽ.',
    keywords: ['công cụ đa năng pdf', 'chỉnh sửa pdf', 'hợp nhất pdf', 'tách pdf', 'tổ chức pdf', 'tất cả trong một pdf'],
    description: `
      <p>Công cụ đa năng PDF là giải pháp toàn diện của bạn cho tất cả các tác vụ quản lý trang PDF. Công cụ toàn diện này kết hợp nhiều thao tác PDF thành một giao diện trực quan duy nhất, tiết kiệm thời gian và công sức của bạn.</p>
      <p>Cho dù bạn cần hợp nhất nhiều tài liệu, tách PDF lớn thành các tệp nhỏ hơn, tổ chức lại các trang, xóa nội dung không mong muốn, xoay trang hoặc trích xuất các phần cụ thể, công cụ này xử lý tất cả mà không cần chuyển đổi giữa các ứng dụng khác nhau.</p>
      <p>Tất cả quá trình xử lý diễn ra trực tiếp trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư và an toàn. Không có tệp nào được tải lên bất kỳ máy chủ nào.</p>
    `,
    howToUse: [
      { step: 1, title: 'Tải lên PDF của bạn', description: 'Kéo và thả tệp PDF của bạn vào khu vực tải lên, hoặc nhấp để duyệt và chọn tệp từ thiết bị của bạn.' },
      { step: 2, title: 'Chọn thao tác của bạn', description: 'Chọn từ các thao tác có sẵn: hợp nhất, tách, tổ chức, xóa trang, xoay, thêm trang trống hoặc trích xuất trang.' },
      { step: 3, title: 'Định cấu hình tùy chọn', description: 'Điều chỉnh cài đặt cụ thể cho thao tác đã chọn của bạn, chẳng hạn như phạm vi trang, góc xoay hoặc thứ tự hợp nhất.' },
      { step: 4, title: 'Xử lý và tải xuống', description: 'Nhấp nút xử lý và tải xuống PDF đã sửa đổi của bạn sau khi thao tác hoàn thành.' },
    ],
    useCases: [
      { title: 'Chuẩn bị tài liệu', description: 'Chuẩn bị tài liệu để nộp bằng cách loại bỏ các trang không cần thiết, sắp xếp lại nội dung và kết hợp nhiều tệp thành một tài liệu chuyên nghiệp.', icon: 'file-check' },
      { title: 'Lắp ráp báo cáo', description: 'Kết hợp nhiều phần báo cáo, thêm trang bìa và tổ chức các chương thành một tài liệu mạch lạc duy nhất.', icon: 'book-open' },
      { title: 'Quản lý lưu trữ', description: 'Tách các tệp lưu trữ lớn thành các phần có thể quản lý, trích xuất các trang liên quan và sắp xếp lại tài liệu lịch sử.', icon: 'archive' },
    ],
    faq: [
      { question: 'Tôi có thể xử lý bao nhiêu PDF cùng lúc?', answer: 'Bạn có thể tải lên và xử lý tối đa 10 tệp PDF cùng lúc, với tổng kích thước kết hợp tối đa 500MB.' },
      { question: 'Đánh dấu trang của tôi có được bảo toàn không?', answer: 'Có, khi hợp nhất PDF, công cụ bảo toàn đánh dấu trang hiện có và có thể kết hợp chúng thành cấu trúc đánh dấu trang thống nhất.' },
      { question: 'Có giới hạn trang không?', answer: 'Không có giới hạn trang nghiêm ngặt. Công cụ có thể xử lý tài liệu có hàng trăm trang, mặc dù các tệp lớn hơn có thể mất nhiều thời gian hơn để xử lý.' },
    ],
  },

  'merge-pdf': {
    title: 'Hợp nhất PDF',
    metaDescription: 'Kết hợp nhiều tệp PDF thành một tài liệu. Công cụ hợp nhất PDF trực tuyến miễn phí với kéo và thả để sắp xếp lại.',
    keywords: ['hợp nhất pdf', 'kết hợp pdf', 'nối pdf', 'công cụ hợp nhất pdf', 'ghép pdf'],
    description: `
      <p>Hợp nhất PDF cho phép bạn kết hợp nhiều tài liệu PDF thành một tệp một cách nhanh chóng và dễ dàng. Cho dù bạn đang hợp nhất báo cáo, kết hợp tài liệu đã quét hay lắp ráp bản trình bày, công cụ này làm cho quá trình trở nên liền mạch.</p>
      <p>Chỉ cần tải lên tệp của bạn, sắp xếp chúng theo thứ tự mong muốn bằng cách kéo và thả, và hợp nhất chúng thành một tài liệu mạch lạc. Công cụ bảo toàn chất lượng của tệp gốc và có thể bảo toàn đánh dấu trang từ mỗi tài liệu nguồn.</p>
      <p>Tất cả quá trình hợp nhất diễn ra cục bộ trong trình duyệt của bạn, đảm bảo quyền riêng tư hoàn toàn cho tài liệu nhạy cảm của bạn.</p>
    `,
    howToUse: [
      { step: 1, title: 'Tải lên tệp PDF', description: 'Kéo và thả nhiều tệp PDF vào khu vực tải lên, hoặc nhấp để chọn tệp từ thiết bị của bạn.' },
      { step: 2, title: 'Sắp xếp thứ tự', description: 'Kéo và thả hình thu nhỏ tệp để sắp xếp chúng theo thứ tự mong muốn.' },
      { step: 3, title: 'Hợp nhất và tải xuống', description: 'Nhấp nút Hợp nhất để kết hợp tất cả tệp, sau đó tải xuống PDF đã hợp nhất của bạn.' },
    ],
    useCases: [
      { title: 'Kết hợp báo cáo', description: 'Hợp nhất báo cáo hàng tháng hoặc hàng quý thành một tài liệu hàng năm duy nhất để phân phối và lưu trữ dễ dàng hơn.', icon: 'file-text' },
      { title: 'Lắp ráp danh mục đầu tư', description: 'Kết hợp nhiều tài liệu dự án, chứng chỉ hoặc mẫu công việc thành một danh mục đầu tư chuyên nghiệp.', icon: 'briefcase' },
      { title: 'Hợp nhất hóa đơn', description: 'Hợp nhất nhiều hóa đơn hoặc biên lai thành một tài liệu duy nhất để kế toán và lưu trữ hồ sơ.', icon: 'receipt' },
    ],
    faq: [
      { question: 'Tôi có thể hợp nhất bao nhiêu PDF?', answer: 'Bạn có thể hợp nhất tối đa 100 tệp PDF cùng lúc, với tổng kích thước kết hợp tối đa 500MB.' },
      { question: 'PDF đã hợp nhất có bảo toàn chất lượng gốc không?', answer: 'Có, quá trình hợp nhất bảo toàn chất lượng gốc của tất cả tài liệu mà không có bất kỳ nén hoặc mất chất lượng nào.' },
      { question: 'Tôi có thể hợp nhất PDF được bảo vệ bằng mật khẩu không?', answer: 'PDF được bảo vệ bằng mật khẩu cần được giải mã trước. Sử dụng công cụ Giải mã PDF của chúng tôi để xóa mật khẩu trước khi hợp nhất.' },
    ],
  },

  'rotate-custom': {
    title: 'Xoay theo độ tùy chỉnh',
    metaDescription: 'Xoay trang PDF theo bất kỳ góc độ nào. Xoay tùy chỉnh chính xác cho tài liệu đã quét bị lệch.',
    keywords: ['xoay pdf tùy chỉnh góc', 'làm thẳng pdf', 'hiệu chỉnh pdf', 'xoay tùy chỉnh pdf'],
    description: `
      <p>Xoay theo độ tùy chỉnh mang lại cho bạn khả năng kiểm soát chính xác định hướng trang PDF. Không giống như các công cụ xoay tiêu chuẩn chỉ hỗ trợ gia số 90 độ, công cụ này cho phép bạn xoay trang theo bất kỳ góc cụ thể nào.</p>
      <p>Hoàn hảo để làm thẳng tài liệu đã quét được đưa vào máy quét hơi lệch, hoặc điều chỉnh sơ đồ và biểu đồ theo định hướng chính xác của chúng. Bạn có thể sửa từng trang riêng lẻ hoặc áp dụng cùng một xoay cho toàn bộ tài liệu.</p>
      <p>Tất cả quá trình xử lý diễn ra cục bộ trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư trong khi đạt được sự căn chỉnh hoàn hảo.</p>
    `,
    howToUse: [
      { step: 1, title: 'Tải lên PDF', description: 'Tải lên tệp PDF chứa các trang bạn cần xoay.' },
      { step: 2, title: 'Đặt góc xoay', description: 'Nhập độ xoay chính xác cho từng trang, hoặc đặt góc hàng loạt cho tất cả trang.' },
      { step: 3, title: 'Xem trước và điều chỉnh', description: 'Sử dụng xem trước thời gian thực để đảm bảo các trang được căn chỉnh hoàn hảo.' },
      { step: 4, title: 'Áp dụng và tải xuống', description: 'Nhấp Xoay để áp dụng các thay đổi và tải xuống PDF đã làm thẳng của bạn.' },
    ],
    useCases: [
      { title: 'Tài liệu đã quét', description: 'Làm thẳng các trang đã quét được đưa vào máy quét theo góc độ.', icon: 'scan' },
      { title: 'Bản vẽ kỹ thuật', description: 'Điều chỉnh định hướng của bản vẽ kỹ thuật và kế hoạch với độ chính xác.', icon: 'ruler' },
      { title: 'Bố cục sáng tạo', description: 'Tạo bố cục độc đáo bằng cách xoay trang theo góc nghệ thuật cụ thể.', icon: 'pen-tool' },
    ],
    faq: [
      { question: 'Tôi có thể xoay theo số thập phân, ví dụ 45.5 độ không?', answer: 'Hiện tại công cụ hỗ trợ độ nguyên, nhưng chúng tôi đang làm việc để kích hoạt độ chính xác thập phân.' },
      { question: 'Điều này có ảnh hưởng đến nội dung trang không?', answer: 'Nội dung được xoay trực quan. Kích thước trang được điều chỉnh tự động để phù hợp với nội dung đã xoay.' },
      { question: 'Tôi có thể xoay chỉ một trang không?', answer: 'Có, bạn có thể đặt góc xoay tùy chỉnh cho bất kỳ trang riêng lẻ nào trong khi để các trang khác không thay đổi.' },
    ],
  },

  'grid-combine': {
    title: 'Kết hợp lưới PDF',
    metaDescription: 'Kết hợp nhiều tệp PDF lên các trang đơn với bố cục lưới linh hoạt. Sắp xếp 2, 4, 6, 9 hoặc nhiều PDF hơn mỗi trang với đường viền và khoảng cách.',
    keywords: ['kết hợp lưới', 'hợp nhất pdf lưới', 'bố cục pdf', 'nhiều pdf trên một trang', 'pdf n-up', 'kết hợp pdf lưới'],
    description: `
      <p>Công cụ Kết hợp lưới cung cấp cách độc đáo để hợp nhất nhiều tệp PDF riêng biệt lên các trang đơn. Không giống như công cụ "Hợp nhất PDF" tiêu chuẩn chỉ đơn giản là nối các trang, hoặc công cụ "N-Up" chỉ sắp xếp lại các trang từ một tài liệu duy nhất, Kết hợp lưới lấy nhiều tệp đầu vào và sắp xếp chúng cạnh nhau trong bố cục lưới có thể tùy chỉnh.</p>
      <p>Bạn có thể chọn từ các cấu hình lưới khác nhau như 2x1, 2x2, 3x3, v.v. Điều này hoàn hảo để so sánh nhiều tài liệu, tạo tài liệu phân phát từ các nguồn khác nhau, hoặc in phiên bản nhỏ gọn của một số tệp.</p>
      <p>Tùy chỉnh đầu ra với khả năng kiểm soát kích thước trang, định hướng, lề, khoảng cách và đường viền. Tất cả quá trình xử lý diễn ra cục bộ trong trình duyệt của bạn để đảm bảo quyền riêng tư tối đa.</p>
    `,
    howToUse: [
      { step: 1, title: 'Tải lên tệp PDF', description: 'Tải lên hai hoặc nhiều tệp PDF bạn muốn kết hợp. Bạn có thể sắp xếp lại chúng theo thứ tự mong muốn.' },
      { step: 2, title: 'Chọn bố cục lưới', description: 'Chọn bố cục lưới mong muốn của bạn (ví dụ: 2x2 cho 4 tệp mỗi trang, 3x3 cho 9 tệp mỗi trang).' },
      { step: 3, title: 'Tùy chỉnh giao diện', description: 'Điều chỉnh cài đặt như kích thước trang (A4, Letter), định hướng, khoảng cách giữa các mục và đường viền.' },
      { step: 4, title: 'Kết hợp và tải xuống', description: 'Nhấp "Kết hợp PDF" để tạo bố cục lưới mới của bạn và tải xuống kết quả.' },
    ],
    useCases: [
      { title: 'So sánh trực quan', description: 'Đặt các phiên bản khác nhau của thiết kế hoặc tài liệu cạnh nhau trên một trang để so sánh dễ dàng.', icon: 'layout-grid' },
      { title: 'In tài liệu phân phát', description: 'Kết hợp nhiều tài liệu ngắn hoặc trang trình bày lên một tờ giấy để tiết kiệm chi phí in ấn.', icon: 'printer' },
      { title: 'Tạo danh mục đầu tư', description: 'Trưng bày nhiều tệp dự án trong tổng quan lưới sạch sẽ, có tổ chức.', icon: 'image' },
    ],
    faq: [
      { question: 'Điều này khác với N-Up như thế nào?', answer: 'N-Up lấy trang từ MỘT PDF và đặt chúng lên một tờ. Kết hợp lưới lấy NHIỀU tệp PDF khác nhau và đặt chúng lên một tờ.' },
      { question: 'Tôi có thể kết hợp bao nhiêu tệp?', answer: 'Bạn có thể kết hợp tối đa 100 tệp tùy thuộc vào bộ nhớ trình duyệt của bạn, nhưng các bố cục như 4x4 có thể chứa tối đa 16 tệp mỗi trang.' },
      { question: 'Tôi có thể thêm đường viền không?', answer: 'Có, bạn có thể thêm đường viền xung quanh mỗi tệp PDF và tùy chỉnh màu đường viền.' },
    ],
  },

  'split-pdf': {
    title: 'Tách PDF',
    metaDescription: 'Tách tệp PDF thành nhiều tài liệu. Trích xuất trang cụ thể hoặc chia theo phạm vi trang.',
    keywords: ['tách pdf', 'chia pdf', 'tách riêng pdf', 'trích xuất trang', 'công cụ tách pdf'],
    description: `
      <p>Tách PDF cho phép bạn chia một tài liệu PDF duy nhất thành nhiều tệp nhỏ hơn. Điều này hoàn hảo để trích xuất các chương cụ thể, tách các tài liệu kết hợp hoặc tạo tệp riêng cho mỗi PDF nhiều trang.</p>
      <p>Bạn có thể tách theo phạm vi trang cụ thể, trích xuất trang riêng lẻ hoặc chia tài liệu theo khoảng thời gian đều đặn. Công cụ cung cấp xem trước trực quan của các trang của bạn, giúp dễ dàng chọn chính xác những gì bạn cần.</p>
      <p>Tất cả quá trình xử lý được thực hiện cục bộ trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư và an toàn.</p>
    `,
    howToUse: [
      { step: 1, title: 'Tải lên PDF của bạn', description: 'Kéo và thả tệp PDF của bạn hoặc nhấp để duyệt và chọn tệp bạn muốn tách.' },
      { step: 2, title: 'Chọn phương pháp tách', description: 'Chọn cách tách: theo phạm vi trang, trích xuất trang cụ thể hoặc tách theo khoảng thời gian đều đặn.' },
      { step: 3, title: 'Xác định phạm vi trang', description: 'Nhập số trang hoặc phạm vi bạn muốn trích xuất (ví dụ: 1-5, 8, 10-15).' },
      { step: 4, title: 'Tách và tải xuống', description: 'Nhấp Tách để tạo tệp PDF mới của bạn và tải xuống chúng riêng lẻ hoặc dưới dạng kho lưu trữ ZIP.' },
    ],
    useCases: [
      { title: 'Trích xuất chương', description: 'Tách một cuốn sách hoặc hướng dẫn thành các chương riêng để đọc hoặc phân phối dễ dàng hơn.', icon: 'book' },
      { title: 'Tách quét kết hợp', description: 'Chia tài liệu quét hàng loạt thành tệp riêng cho mỗi tài liệu gốc.', icon: 'copy' },
      { title: 'Tạo tài liệu phân phát', description: 'Trích xuất trang trình bày hoặc trang cụ thể để tạo tài liệu phân phát tập trung.', icon: 'presentation' },
    ],
    faq: [
      { question: 'Tôi có thể tách PDF thành trang riêng lẻ không?', answer: 'Có, bạn có thể tách PDF thành tệp trang đơn bằng cách chọn tùy chọn "Tách mỗi trang".' },
      { question: 'Điều gì xảy ra với đánh dấu trang khi tách?', answer: 'Đánh dấu trang rơi trong phạm vi trang được trích xuất được bảo toàn trong tệp PDF kết quả.' },
      { question: 'Tôi có thể tách PDF được bảo vệ bằng mật khẩu không?', answer: 'Bạn cần giải mã PDF trước bằng công cụ Giải mã PDF của chúng tôi.' },
    ],
  },

  'compress-pdf': {
    title: 'Nén PDF',
    metaDescription: 'Giảm kích thước tệp PDF trong khi duy trì chất lượng. Công cụ nén PDF trực tuyến miễn phí cho tệp nhỏ hơn.',
    keywords: ['nén pdf', 'giảm kích thước pdf', 'công cụ nén pdf', 'thu nhỏ pdf', 'tối ưu hóa pdf'],
    description: `
      <p>Nén PDF giảm kích thước tệp của tài liệu PDF của bạn trong khi duy trì chất lượng chấp nhận được. Điều này cần thiết cho tệp đính kèm email, tải lên web hoặc tiết kiệm dung lượng lưu trữ.</p>
      <p>Công cụ cung cấp nhiều mức nén để cân bằng giữa giảm kích thước tệp và bảo toàn chất lượng. Bạn có thể chọn nén tích cực để giảm kích thước tối đa hoặc nén nhẹ để duy trì chất lượng cao hơn.</p>
      <p>Tất cả nén diễn ra trong trình duyệt của bạn, đảm bảo tài liệu của bạn không bao giờ rời khỏi thiết bị của bạn.</p>
    `,
    howToUse: [
      { step: 1, title: 'Tải lên PDF của bạn', description: 'Kéo và thả tệp PDF của bạn hoặc nhấp để chọn tài liệu bạn muốn nén.' },
      { step: 2, title: 'Chọn mức nén', description: 'Chọn mức nén ưa thích của bạn: Thấp (chất lượng tốt nhất), Trung bình (cân bằng) hoặc Cao (kích thước nhỏ nhất).' },
      { step: 3, title: 'Nén và tải xuống', description: 'Nhấp Nén để giảm kích thước tệp, sau đó tải xuống PDF đã tối ưu hóa của bạn.' },
    ],
    useCases: [
      { title: 'Tệp đính kèm email', description: 'Giảm kích thước PDF để đáp ứng giới hạn tệp đính kèm email và đảm bảo giao hàng nhanh hơn.', icon: 'mail' },
      { title: 'Xuất bản web', description: 'Tối ưu hóa PDF cho tải xuống web để cải thiện tốc độ tải trang và trải nghiệm người dùng.', icon: 'globe' },
      { title: 'Tối ưu hóa lưu trữ', description: 'Nén tài liệu lưu trữ để tiết kiệm dung lượng đĩa trong khi vẫn duy trì khả năng truy cập.', icon: 'hard-drive' },
    ],
    faq: [
      { question: 'Tôi có thể giảm kích thước tệp bao nhiêu?', answer: 'Kết quả nén thay đổi dựa trên nội dung PDF. PDF nặng hình ảnh có thể giảm 50-80%, trong khi PDF chỉ văn bản có thể giảm ít hơn.' },
      { question: 'Nén có ảnh hưởng đến chất lượng văn bản không?', answer: 'Văn bản vẫn sắc nét và có thể đọc được ở tất cả mức nén. Chỉ hình ảnh và đồ họa bị ảnh hưởng bởi nén.' },
      { question: 'Tôi có thể nén nhiều PDF cùng lúc không?', answer: 'Có, bạn có thể tải lên và nén tối đa 10 tệp PDF cùng lúc.' },
    ],
  },

  'edit-pdf': {
    title: 'Chỉnh sửa PDF',
    metaDescription: 'Chỉnh sửa tệp PDF trực tuyến. Thêm văn bản, hình ảnh, chú thích, đánh dấu và hình dạng vào tài liệu của bạn.',
    keywords: ['chỉnh sửa pdf', 'trình chỉnh sửa pdf', 'chú thích pdf', 'thêm văn bản vào pdf', 'đánh dấu pdf'],
    description: `
      <p>Chỉnh sửa PDF cung cấp bộ công cụ toàn diện để sửa đổi và chú thích tài liệu PDF của bạn. Thêm văn bản, hình ảnh, hình dạng, đánh dấu, nhận xét và nhiều hơn nữa mà không cần phần mềm máy tính để bàn đắt tiền.</p>
      <p>Giao diện trình chỉnh sửa trực quan giúp dễ dàng đánh dấu tài liệu để xem xét, thêm ghi chú để cộng tác hoặc xóa thông tin nhạy cảm. Công cụ hoàn hảo để đánh dấu tài liệu để xem xét, thêm ghi chú để cộng tác hoặc xóa thông tin nhạy cảm.</p>
      <p>Tất cả chỉnh sửa diễn ra cục bộ trong trình duyệt của bạn, đảm bảo quyền riêng tư hoàn toàn cho tài liệu nhạy cảm của bạn.</p>
    `,
    howToUse: [
      { step: 1, title: 'Tải lên PDF của bạn', description: 'Kéo và thả tệp PDF của bạn hoặc nhấp để chọn tài liệu bạn muốn chỉnh sửa.' },
      { step: 2, title: 'Chọn công cụ chỉnh sửa', description: 'Chọn từ thanh công cụ: văn bản, đánh dấu, hình dạng, hình ảnh, nhận xét hoặc công cụ xóa.' },
      { step: 3, title: 'Thực hiện chỉnh sửa của bạn', description: 'Nhấp vào tài liệu để thêm chú thích, kéo để định vị phần tử và sử dụng bảng thuộc tính để tùy chỉnh.' },
      { step: 4, title: 'Lưu và tải xuống', description: 'Nhấp Lưu để áp dụng thay đổi của bạn và tải xuống PDF đã chỉnh sửa.' },
    ],
    useCases: [
      { title: 'Xem xét tài liệu', description: 'Thêm nhận xét, đánh dấu và đánh dấu vào tài liệu để xem xét cộng tác.', icon: 'message-square' },
      { title: 'Điền biểu mẫu', description: 'Điền văn bản, thêm chữ ký và hoàn thành biểu mẫu PDF mà không cần in ấn.', icon: 'edit-3' },
      { title: 'Xóa nội dung', description: 'Loại bỏ vĩnh viễn thông tin nhạy cảm khỏi tài liệu trước khi chia sẻ.', icon: 'eye-off' },
    ],
    faq: [
      { question: 'Tôi có thể chỉnh sửa văn bản gốc trong PDF không?', answer: 'Công cụ này tập trung vào việc thêm chú thích và nội dung mới. Để chỉnh sửa văn bản hiện có, bạn có thể cần sử dụng tài liệu nguồn gốc.' },
      { question: 'Chỉnh sửa của tôi có vĩnh viễn không?', answer: 'Chú thích có thể được làm phẳng để vĩnh viễn, hoặc được giữ dưới dạng lớp có thể chỉnh sửa tùy thuộc vào sở thích của bạn.' },
      { question: 'Tôi có thể hoàn tác thay đổi của mình không?', answer: 'Có, trình chỉnh sửa hỗ trợ hoàn tác/làm lại. Bạn cũng có thể đặt lại về tài liệu gốc bất kỳ lúc nào trước khi lưu.' },
    ],
  },

  'jpg-to-pdf': {
    title: 'JPG sang PDF',
    metaDescription: 'Chuyển đổi hình ảnh JPG sang PDF. Kết hợp nhiều tệp JPG thành một tài liệu PDF duy nhất.',
    keywords: ['jpg sang pdf', 'jpeg sang pdf', 'chuyển đổi jpg', 'hình ảnh sang pdf', 'ảnh sang pdf'],
    description: `
      <p>JPG sang PDF chuyển đổi hình ảnh JPEG của bạn thành tài liệu PDF một cách nhanh chóng và dễ dàng. Cho dù bạn có một ảnh duy nhất hay nhiều hình ảnh, công cụ này tạo tệp PDF có vẻ ngoài chuyên nghiệp.</p>
      <p>Bạn có thể kết hợp nhiều tệp JPG thành một PDF duy nhất, sắp xếp chúng theo bất kỳ thứ tự nào và tùy chỉnh kích thước trang và định hướng. Việc chuyển đổi bảo toàn chất lượng hình ảnh trong khi tạo tệp PDF nhỏ gọn, có thể chia sẻ.</p>
      <p>Tất cả chuyển đổi diễn ra trong trình duyệt của bạn, đảm bảo ảnh của bạn vẫn riêng tư.</p>
    `,
    howToUse: [
      { step: 1, title: 'Tải lên hình ảnh JPG', description: 'Kéo và thả tệp JPG của bạn hoặc nhấp để chọn hình ảnh từ thiết bị của bạn.' },
      { step: 2, title: 'Sắp xếp và định cấu hình', description: 'Sắp xếp lại hình ảnh bằng cách kéo, và chọn tùy chọn kích thước trang và định hướng.' },
      { step: 3, title: 'Chuyển đổi và tải xuống', description: 'Nhấp Chuyển đổi để tạo PDF của bạn và tải xuống kết quả.' },
    ],
    useCases: [
      { title: 'Album ảnh', description: 'Tạo album PDF từ ảnh kỳ nghỉ hoặc ảnh sự kiện để chia sẻ dễ dàng.', icon: 'image' },
      { title: 'Quét tài liệu', description: 'Chuyển đổi ảnh máy ảnh điện thoại của tài liệu thành tệp PDF thích hợp.', icon: 'camera' },
      { title: 'Tạo danh mục đầu tư', description: 'Sắp xếp công việc nhiếp ảnh hoặc mẫu thiết kế thành danh mục PDF chuyên nghiệp.', icon: 'folder' },
    ],
    faq: [
      { question: 'Tôi có thể chuyển đổi bao nhiêu hình ảnh?', answer: 'Bạn có thể chuyển đổi tối đa 100 hình ảnh JPG thành một tài liệu PDF duy nhất.' },
      { question: 'Chất lượng hình ảnh có được bảo toàn không?', answer: 'Có, hình ảnh được nhúng ở chất lượng gốc của chúng. Bạn có thể tùy chọn nén chúng để giảm kích thước tệp.' },
      { question: 'Tôi có thể đặt kích thước trang khác nhau cho hình ảnh khác nhau không?', answer: 'Công cụ áp dụng kích thước trang thống nhất cho tất cả trang. Mỗi hình ảnh được chia tỷ lệ để vừa với kích thước trang đã chọn trong khi duy trì tỷ lệ khung hình.' },
    ],
  },

  'sign-pdf': {
    title: 'Ký PDF',
    metaDescription: 'Thêm chữ ký điện tử vào tài liệu PDF. Vẽ, nhập hoặc tải lên chữ ký của bạn.',
    keywords: ['ký pdf', 'chữ ký điện tử', 'e-ký', 'chữ ký pdf', 'chữ ký số'],
    description: `
      <p>Ký PDF cho phép bạn thêm chữ ký điện tử vào tài liệu PDF của mình một cách nhanh chóng và an toàn. Tạo chữ ký của bạn bằng cách vẽ, nhập hoặc tải lên hình ảnh, sau đó đặt nó ở bất kỳ đâu trên tài liệu của bạn.</p>
      <p>Bạn có thể thêm nhiều chữ ký vào một tài liệu duy nhất, thay đổi kích thước và định vị chúng một cách chính xác và lưu chữ ký của bạn để sử dụng trong tương lai. Công cụ hoàn hảo cho hợp đồng, thỏa thuận, biểu mẫu và bất kỳ tài liệu nào yêu cầu chữ ký của bạn.</p>
      <p>Tất cả ký diễn ra cục bộ trong trình duyệt của bạn, đảm bảo tài liệu và chữ ký của bạn vẫn riêng tư.</p>
    `,
    howToUse: [
      { step: 1, title: 'Tải lên PDF của bạn', description: 'Kéo và thả tệp PDF của bạn hoặc nhấp để chọn tài liệu bạn cần ký.' },
      { step: 2, title: 'Tạo chữ ký của bạn', description: 'Vẽ chữ ký của bạn bằng chuột hoặc chạm, nhập tên của bạn để tạo chữ ký hoặc tải lên hình ảnh chữ ký.' },
      { step: 3, title: 'Đặt và điều chỉnh', description: 'Nhấp vào tài liệu để đặt chữ ký của bạn, sau đó kéo để định vị và thay đổi kích thước nếu cần.' },
      { step: 4, title: 'Lưu và tải xuống', description: 'Nhấp Lưu để áp dụng chữ ký của bạn và tải xuống PDF đã ký.' },
    ],
    useCases: [
      { title: 'Ký hợp đồng', description: 'Ký hợp đồng và thỏa thuận điện tử mà không cần in và quét.', icon: 'file-signature' },
      { title: 'Điền biểu mẫu', description: 'Thêm chữ ký của bạn vào biểu mẫu ứng dụng, biểu mẫu đồng ý và tài liệu chính thức.', icon: 'clipboard' },
      { title: 'Quy trình phê duyệt', description: 'Ký tắt tài liệu trong quy trình xem xét và phê duyệt.', icon: 'check-circle' },
    ],
    faq: [
      { question: 'Chữ ký điện tử có ràng buộc pháp lý không?', answer: 'Chữ ký điện tử được công nhận pháp lý ở hầu hết các quốc gia. Tuy nhiên, một số tài liệu có thể yêu cầu loại chữ ký số cụ thể. Kiểm tra quy định địa phương của bạn.' },
      { question: 'Tôi có thể lưu chữ ký của mình để sử dụng trong tương lai không?', answer: 'Có, bạn có thể lưu chữ ký của mình vào bộ nhớ cục bộ của trình duyệt để truy cập nhanh khi ký tài liệu trong tương lai.' },
      { question: 'Tôi có thể thêm nhiều chữ ký vào một tài liệu không?', answer: 'Có, bạn có thể thêm bao nhiêu chữ ký tùy thích, định vị từng chữ ký một cách độc lập trên bất kỳ trang nào.' },
    ],
  },

  'crop-pdf': {
    title: 'Cắt PDF',
    metaDescription: 'Cắt trang PDF để loại bỏ lề và khu vực không mong muốn. Cắt tài liệu PDF một cách chính xác.',
    keywords: ['cắt pdf', 'cắt tỉa pdf', 'cắt lề pdf', 'thay đổi kích thước trang pdf', 'công cụ cắt pdf'],
    description: `
      <p>Cắt PDF cho phép bạn cắt tỉa lề và loại bỏ khu vực không mong muốn từ trang PDF của bạn. Điều này hữu ích để loại bỏ khoảng trắng dư thừa, tập trung vào khu vực nội dung cụ thể hoặc chuẩn hóa kích thước trang.</p>
      <p>Bạn có thể cắt tất cả trang thống nhất hoặc điều chỉnh từng trang riêng lẻ. Giao diện trực quan hiển thị chính xác những gì sẽ được giữ, giúp dễ dàng đạt được kết quả chính xác.</p>
      <p>Tất cả cắt diễn ra cục bộ trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư.</p>
    `,
    howToUse: [
      { step: 1, title: 'Tải lên PDF của bạn', description: 'Kéo và thả tệp PDF của bạn hoặc nhấp để chọn tài liệu bạn muốn cắt.' },
      { step: 2, title: 'Xác định khu vực cắt', description: 'Kéo tay cầm cắt để xác định khu vực bạn muốn giữ, hoặc nhập số đo chính xác.' },
      { step: 3, title: 'Áp dụng cho trang', description: 'Chọn áp dụng cắt cho tất cả trang hoặc chọn trang cụ thể để cắt.' },
      { step: 4, title: 'Cắt và tải xuống', description: 'Nhấp Cắt để áp dụng thay đổi và tải xuống PDF đã cắt của bạn.' },
    ],
    useCases: [
      { title: 'Loại bỏ lề', description: 'Cắt tỉa lề dư thừa từ tài liệu đã quét hoặc PDF có đường viền lớn.', icon: 'maximize-2' },
      { title: 'Tập trung nội dung', description: 'Cắt để làm nổi bật khu vực nội dung cụ thể, loại bỏ tiêu đề, chân trang hoặc thanh bên.', icon: 'target' },
      { title: 'Chuẩn hóa trang', description: 'Làm cho tất cả trang có cùng kích thước bằng cách cắt theo kích thước thống nhất.', icon: 'square' },
    ],
    faq: [
      { question: 'Cắt có loại bỏ nội dung vĩnh viễn không?', answer: 'Có, cắt loại bỏ nội dung bên ngoài khu vực cắt. Đảm bảo giữ bản sao của tệp gốc của bạn.' },
      { question: 'Tôi có thể cắt các trang khác nhau khác nhau không?', answer: 'Có, bạn có thể áp dụng cài đặt cắt khác nhau cho từng trang hoặc nhóm trang.' },
      { question: 'Cắt có ảnh hưởng đến chất lượng văn bản không?', answer: 'Không, cắt chỉ loại bỏ khu vực bên ngoài ranh giới cắt. Nội dung còn lại duy trì chất lượng gốc.' },
    ],
  },

  'extract-pages': {
    title: 'Trích xuất trang',
    metaDescription: 'Trích xuất trang cụ thể từ tệp PDF. Chọn và lưu trang riêng lẻ dưới dạng tài liệu mới.',
    keywords: ['trích xuất trang pdf', 'lưu trang pdf', 'sao chép trang pdf', 'công cụ trích xuất trang pdf'],
    description: `
      <p>Trích xuất trang cho phép bạn chọn và lưu trang cụ thể từ tài liệu PDF dưới dạng tệp mới. Điều này hoàn hảo để kéo ra các phần liên quan, tạo đoạn trích hoặc tách tài liệu kết hợp.</p>
      <p>Bạn có thể trích xuất trang riêng lẻ, phạm vi trang hoặc nhiều trang không liên tiếp. Xem trước trang trực quan giúp dễ dàng xác định và chọn chính xác các trang bạn cần.</p>
      <p>Tất cả trích xuất diễn ra cục bộ trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư.</p>
    `,
    howToUse: [
      { step: 1, title: 'Tải lên PDF của bạn', description: 'Kéo và thả tệp PDF của bạn hoặc nhấp để chọn tài liệu bạn muốn trích xuất trang từ đó.' },
      { step: 2, title: 'Chọn trang', description: 'Nhấp vào hình thu nhỏ trang để chọn chúng, hoặc nhập số trang trong trường nhập liệu.' },
      { step: 3, title: 'Trích xuất và tải xuống', description: 'Nhấp Trích xuất để tạo PDF mới với các trang đã chọn của bạn và tải xuống.' },
    ],
    useCases: [
      { title: 'Tạo đoạn trích', description: 'Trích xuất trang liên quan từ báo cáo hoặc sách để tạo tài liệu tham khảo tập trung.', icon: 'file-minus' },
      { title: 'Chia sẻ nội dung cụ thể', description: 'Kéo ra trang cụ thể để chia sẻ mà không gửi toàn bộ tài liệu.', icon: 'share-2' },
      { title: 'Lưu trữ trang quan trọng', description: 'Trích xuất và lưu trang chính từ tài liệu để lưu trữ lâu dài.', icon: 'archive' },
    ],
    faq: [
      { question: 'Tôi có thể trích xuất trang không liên tiếp không?', answer: 'Có, bạn có thể chọn bất kỳ kết hợp trang nào, cho dù liên tiếp hay rải rác trong tài liệu.' },
      { question: 'Đánh dấu trang có được bảo toàn không?', answer: 'Đánh dấu trang trỏ đến trang được trích xuất được bảo toàn trong tài liệu PDF mới.' },
      { question: 'Tôi có thể trích xuất từ nhiều PDF không?', answer: 'Công cụ này hoạt động với một PDF tại một thời điểm. Để kết hợp trang từ nhiều PDF, hãy sử dụng công cụ Hợp nhất PDF trước.' },
    ],
  },

  'organize-pdf': {
    title: 'Tổ chức PDF',
    metaDescription: 'Sắp xếp lại, sao chép và xóa trang PDF. Kéo và thả để tổ chức tài liệu của bạn.',
    keywords: ['tổ chức pdf', 'sắp xếp lại trang pdf', 'sắp xếp lại pdf', 'công cụ tổ chức trang pdf'],
    description: `
      <p>Tổ chức PDF cung cấp giao diện kéo và thả trực quan để sắp xếp lại trang trong tài liệu PDF của bạn. Sắp xếp lại trang, sao chép phần quan trọng hoặc loại bỏ trang không mong muốn với sự dễ dàng.</p>
      <p>Hình thu nhỏ trang trực quan giúp dễ dàng xác định nội dung và sắp xếp trang chính xác theo cách bạn cần. Hoàn hảo để cấu trúc lại tài liệu, tạo thứ tự trang tùy chỉnh hoặc dọn dẹp tệp đã quét.</p>
      <p>Tất cả tổ chức diễn ra cục bộ trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư.</p>
    `,
    howToUse: [
      { step: 1, title: 'Tải lên PDF của bạn', description: 'Kéo và thả tệp PDF của bạn hoặc nhấp để chọn tài liệu bạn muốn tổ chức.' },
      { step: 2, title: 'Sắp xếp lại trang', description: 'Kéo hình thu nhỏ trang để sắp xếp lại chúng. Nhấp vào nút sao chép hoặc xóa trên mỗi trang nếu cần.' },
      { step: 3, title: 'Lưu và tải xuống', description: 'Nhấp Lưu để áp dụng thay đổi của bạn và tải xuống PDF đã tổ chức lại.' },
    ],
    useCases: [
      { title: 'Khắc phục thứ tự trang', description: 'Sửa thứ tự trang đã được quét hoặc kết hợp sai.', icon: 'arrow-up-down' },
      { title: 'Tạo thứ tự tùy chỉnh', description: 'Sắp xếp trang theo thứ tự cụ thể cho bản trình bày hoặc báo cáo.', icon: 'list' },
      { title: 'Loại bỏ trang không mong muốn', description: 'Xóa trang trống, bản sao hoặc nội dung không liên quan khỏi tài liệu.', icon: 'trash-2' },
    ],
    faq: [
      { question: 'Tôi có thể sao chép trang không?', answer: 'Có, bạn có thể sao chép bất kỳ trang nào và đặt bản sao ở bất kỳ đâu trong tài liệu.' },
      { question: 'Có chức năng hoàn tác không?', answer: 'Có, bạn có thể hoàn tác và làm lại thay đổi. Bạn cũng có thể đặt lại về thứ tự gốc bất kỳ lúc nào.' },
      { question: 'Tôi có thể tổ chức nhiều PDF cùng nhau không?', answer: 'Công cụ này hoạt động với một PDF tại một thời điểm. Để kết hợp và tổ chức nhiều PDF, hãy hợp nhất chúng bằng công cụ Hợp nhất PDF trước.' },
    ],
  },

  'delete-pages': {
    title: 'Xóa trang',
    metaDescription: 'Loại bỏ trang không mong muốn khỏi tệp PDF. Chọn và xóa trang cụ thể dễ dàng.',
    keywords: ['xóa trang pdf', 'loại bỏ trang pdf', 'công cụ xóa trang pdf', 'xóa trang khỏi pdf'],
    description: `
      <p>Xóa trang cho phép bạn loại bỏ trang không mong muốn khỏi tài liệu PDF của mình một cách nhanh chóng và dễ dàng. Cho dù bạn cần loại bỏ trang trống, nội dung lỗi thời hoặc thông tin nhạy cảm, công cụ này giúp đơn giản hóa.</p>
      <p>Hình thu nhỏ trang trực quan giúp bạn xác định chính xác trang nào cần loại bỏ. Bạn có thể xóa trang riêng lẻ hoặc nhiều trang cùng lúc.</p>
      <p>Tất cả quá trình xử lý diễn ra cục bộ trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư.</p>
    `,
    howToUse: [
      { step: 1, title: 'Tải lên PDF của bạn', description: 'Kéo và thả tệp PDF của bạn hoặc nhấp để chọn tài liệu bạn muốn xóa trang từ đó.' },
      { step: 2, title: 'Chọn trang để xóa', description: 'Nhấp vào hình thu nhỏ trang để đánh dấu chúng để xóa, hoặc nhập số trang trong trường nhập liệu.' },
      { step: 3, title: 'Xóa và tải xuống', description: 'Nhấp Xóa để loại bỏ trang đã chọn và tải xuống PDF đã cập nhật của bạn.' },
    ],
    useCases: [
      { title: 'Loại bỏ trang trống', description: 'Dọn dẹp tài liệu bằng cách loại bỏ trang trống được bao gồm một cách tình cờ.', icon: 'file-x' },
      { title: 'Loại bỏ nội dung nhạy cảm', description: 'Xóa trang chứa thông tin bí mật trước khi chia sẻ tài liệu.', icon: 'shield' },
      { title: 'Hợp lý hóa tài liệu', description: 'Loại bỏ trang lỗi thời hoặc không liên quan để tạo tài liệu tập trung hơn.', icon: 'filter' },
    ],
    faq: [
      { question: 'Tôi có thể khôi phục trang đã xóa không?', answer: 'Xóa là vĩnh viễn trong tệp đầu ra. Giữ bản sao của tài liệu gốc của bạn nếu bạn có thể cần trang sau này.' },
      { question: 'Tôi có thể xóa nhiều trang cùng lúc không?', answer: 'Có, bạn có thể chọn và xóa nhiều trang đồng thời.' },
      { question: 'Xóa trang có ảnh hưởng đến đánh dấu trang không?', answer: 'Đánh dấu trang trỏ đến trang đã xóa sẽ bị xóa. Đánh dấu trang đến trang còn lại được bảo toàn.' },
    ],
  },

  // ==================== CHỈNH SỬA & CHÚ THÍCH ====================
  'bookmark': {
    title: 'Chỉnh sửa đánh dấu trang',
    metaDescription: 'Thêm, chỉnh sửa và quản lý đánh dấu trang PDF. Tạo cấu trúc điều hướng cho tài liệu của bạn.',
    keywords: ['đánh dấu trang pdf', 'chỉnh sửa đánh dấu trang', 'thêm đánh dấu trang', 'điều hướng pdf', 'mục lục'],
    description: `
      <p>Chỉnh sửa đánh dấu trang cho phép bạn tạo, sửa đổi và tổ chức đánh dấu trang trong tài liệu PDF của mình. Đánh dấu trang cung cấp điều hướng nhanh đến các phần cụ thể, giúp tài liệu dài dễ sử dụng hơn.</p>
      <p>Bạn có thể thêm đánh dấu trang mới, chỉnh sửa đánh dấu trang hiện có, tổ chức lại cấu trúc phân cấp đánh dấu trang hoặc nhập đánh dấu trang từ nguồn bên ngoài. Công cụ này thiết yếu để tạo tài liệu chuyên nghiệp, có thể điều hướng.</p>
      <p>Tất cả chỉnh sửa diễn ra cục bộ trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư.</p>
    `,
    howToUse: [
      { step: 1, title: 'Tải lên PDF của bạn', description: 'Kéo và thả tệp PDF của bạn hoặc nhấp để chọn tài liệu bạn muốn chỉnh sửa.' },
      { step: 2, title: 'Quản lý đánh dấu trang', description: 'Thêm đánh dấu trang mới, chỉnh sửa đánh dấu trang hiện có hoặc kéo để tổ chức lại cấu trúc phân cấp.' },
      { step: 3, title: 'Lưu và tải xuống', description: 'Nhấp Lưu để áp dụng thay đổi của bạn và tải xuống PDF với đánh dấu trang đã cập nhật.' },
    ],
    useCases: [
      { title: 'Tạo điều hướng', description: 'Thêm đánh dấu trang vào tài liệu dài để giúp người đọc điều hướng nhanh đến các phần cụ thể.', icon: 'navigation' },
      { title: 'Tổ chức chương', description: 'Tạo cấu trúc đánh dấu trang phân cấp phản ánh tổ chức chương của tài liệu của bạn.', icon: 'book-open' },
      { title: 'Cải thiện khả năng truy cập', description: 'Thêm đánh dấu trang để làm cho tài liệu dễ truy cập và thân thiện với người dùng hơn.', icon: 'accessibility' },
    ],
    faq: [
      { question: 'Tôi có thể tạo đánh dấu trang lồng nhau không?', answer: 'Có, bạn có thể tạo cấu trúc phân cấp với đánh dấu trang cha và con.' },
      { question: 'Tôi có thể nhập đánh dấu trang từ tệp không?', answer: 'Có, bạn có thể nhập cấu trúc đánh dấu trang từ tệp JSON hoặc văn bản.' },
      { question: 'Đánh dấu trang có hoạt động trong tất cả trình đọc PDF không?', answer: 'Có, đánh dấu trang là tính năng PDF tiêu chuẩn được hỗ trợ bởi tất cả trình đọc PDF chính.' },
    ],
  },

  'table-of-contents': {
    title: 'Mục lục',
    metaDescription: 'Tạo mục lục cho PDF của bạn. Tạo điều hướng có thể nhấp từ đánh dấu trang.',
    keywords: ['mục lục pdf', 'trình tạo toc', 'chỉ mục pdf', 'điều hướng tài liệu'],
    description: `
      <p>Mục lục tạo trang mục lục có thể điều hướng cho tài liệu PDF của bạn. TOC có thể được tạo từ đánh dấu trang hiện có hoặc mục nhập tùy chỉnh, cung cấp cho người đọc tổng quan và điều hướng nhanh.</p>
      <p>Tùy chỉnh giao diện với các kiểu dáng, phông chữ và bố cục khác nhau. TOC được tạo bao gồm liên kết có thể nhấp nhảy trực tiếp đến trang được tham chiếu.</p>
      <p>Tất cả quá trình xử lý diễn ra cục bộ trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư.</p>
    `,
    howToUse: [
      { step: 1, title: 'Tải lên PDF của bạn', description: 'Kéo và thả tệp PDF của bạn hoặc nhấp để chọn tài liệu.' },
      { step: 2, title: 'Định cấu hình TOC', description: 'Chọn tạo từ đánh dấu trang hoặc tạo mục nhập tùy chỉnh. Chọn tùy chọn kiểu dáng và định vị.' },
      { step: 3, title: 'Tạo và tải xuống', description: 'Nhấp Tạo để tạo mục lục và tải xuống PDF đã cập nhật của bạn.' },
    ],
    useCases: [
      { title: 'Bài báo học thuật', description: 'Thêm mục lục chuyên nghiệp vào luận án, luận văn và bài nghiên cứu.', icon: 'graduation-cap' },
      { title: 'Báo cáo kinh doanh', description: 'Tạo báo cáo có thể điều hướng với danh sách phần rõ ràng cho các bên liên quan.', icon: 'bar-chart' },
      { title: 'Hướng dẫn sử dụng', description: 'Tạo TOC toàn diện cho tài liệu kỹ thuật và hướng dẫn sử dụng.', icon: 'book' },
    ],
    faq: [
      { question: 'Tôi có thể tùy chỉnh giao diện TOC không?', answer: 'Có, bạn có thể chọn từ các kiểu dáng, phông chữ và bố cục khác nhau cho mục lục của mình.' },
      { question: 'TOC được chèn ở đâu?', answer: 'Theo mặc định, TOC được chèn ở đầu tài liệu, nhưng bạn có thể chọn vị trí khác.' },
      { question: 'Các mục nhập TOC có thể nhấp không?', answer: 'Có, mỗi mục nhập là liên kết có thể nhấp điều hướng đến trang tương ứng.' },
    ],
  },

  'page-numbers': {
    title: 'Số trang',
    metaDescription: 'Thêm số trang vào tài liệu PDF. Tùy chỉnh vị trí, định dạng và số bắt đầu.',
    keywords: ['thêm số trang', 'số trang pdf', 'đánh số trang pdf', 'phân trang pdf'],
    description: `
      <p>Số trang thêm đánh số trang có thể tùy chỉnh vào tài liệu PDF của bạn. Chọn từ các định dạng khác nhau, vị trí và kiểu dáng để phù hợp với thiết kế tài liệu của bạn.</p>
      <p>Đặt số bắt đầu, bỏ qua các trang nhất định và sử dụng các định dạng đánh số khác nhau (1, 2, 3 hoặc i, ii, iii). Hoàn hảo để tạo tài liệu chuyên nghiệp với phân trang thích hợp.</p>
      <p>Tất cả quá trình xử lý diễn ra cục bộ trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư.</p>
    `,
    howToUse: [
      { step: 1, title: 'Tải lên PDF của bạn', description: 'Kéo và thả tệp PDF của bạn hoặc nhấp để chọn tài liệu.' },
      { step: 2, title: 'Định cấu hình đánh số', description: 'Chọn vị trí, định dạng, số bắt đầu và trang nào để đánh số.' },
      { step: 3, title: 'Áp dụng và tải xuống', description: 'Nhấp Áp dụng để thêm số trang và tải xuống PDF đã cập nhật của bạn.' },
    ],
    useCases: [
      { title: 'Tài liệu chuyên nghiệp', description: 'Thêm số trang vào báo cáo, đề xuất và tài liệu kinh doanh.', icon: 'file-text' },
      { title: 'Bài báo học thuật', description: 'Đánh số trang theo yêu cầu định dạng học thuật.', icon: 'graduation-cap' },
      { title: 'Tài liệu pháp lý', description: 'Thêm phân trang thích hợp vào hợp đồng và hồ sơ tòa án.', icon: 'scale' },
    ],
    faq: [
      { question: 'Tôi có thể bỏ qua trang đầu không?', answer: 'Có, bạn có thể chỉ định trang nào có số trang và trang nào được bỏ qua, chẳng hạn như trang tiêu đề hoặc trang bìa.' },
      { question: 'Định dạng số nào có sẵn?', answer: 'Bạn có thể sử dụng chữ số Ả Rập (1, 2, 3), chữ số La Mã (i, ii, iii hoặc I, II, III) hoặc chữ cái (a, b, c).' },
      { question: 'Tôi có thể thêm định dạng "Trang X của Y" không?', answer: 'Có, bạn có thể bao gồm số trang tổng trong định dạng đánh số của mình.' },
    ],
  },

  'add-watermark': {
    title: 'Thêm hình mờ',
    metaDescription: 'Thêm hình mờ văn bản hoặc hình ảnh vào tệp PDF. Bảo vệ và thương hiệu tài liệu của bạn.',
    keywords: ['thêm hình mờ', 'hình mờ pdf', 'đóng dấu pdf', 'thương hiệu pdf', 'bảo vệ pdf'],
    description: `
      <p>Thêm hình mờ cho phép bạn đặt hình mờ văn bản hoặc hình ảnh trên tài liệu PDF của mình. Hình mờ có thể chỉ ra trạng thái tài liệu (Bản nháp, Bí mật), thêm thương hiệu hoặc ngăn chặn sao chép trái phép.</p>
      <p>Tùy chỉnh vị trí hình mờ, kích thước, độ trong suốt, xoay và màu sắc. Áp dụng cho tất cả trang hoặc trang đã chọn. Công cụ hỗ trợ cả hình mờ văn bản và hình ảnh.</p>
      <p>Tất cả quá trình xử lý diễn ra cục bộ trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư.</p>
    `,
    howToUse: [
      { step: 1, title: 'Tải lên PDF của bạn', description: 'Kéo và thả tệp PDF của bạn hoặc nhấp để chọn tài liệu.' },
      { step: 2, title: 'Tạo hình mờ', description: 'Nhập văn bản hoặc tải lên hình ảnh cho hình mờ của bạn. Điều chỉnh vị trí, kích thước, độ trong suốt và xoay.' },
      { step: 3, title: 'Áp dụng và tải xuống', description: 'Nhấp Áp dụng để thêm hình mờ và tải xuống PDF đã cập nhật của bạn.' },
    ],
    useCases: [
      { title: 'Bảo vệ tài liệu', description: 'Thêm hình mờ "Bí mật" hoặc "Bản nháp" để chỉ ra trạng thái tài liệu.', icon: 'shield' },
      { title: 'Thương hiệu tài liệu', description: 'Thêm logo công ty hoặc tên vào tài liệu chính thức.', icon: 'award' },
      { title: 'Thông báo bản quyền', description: 'Thêm thông tin bản quyền để bảo vệ tài sản trí tuệ.', icon: 'copyright' },
    ],
    faq: [
      { question: 'Tôi có thể sử dụng hình ảnh làm hình mờ không?', answer: 'Có, bạn có thể tải lên hình ảnh PNG, JPG hoặc SVG để sử dụng làm hình mờ.' },
      { question: 'Tôi có thể làm cho hình mờ bán trong suốt không?', answer: 'Có, bạn có thể điều chỉnh độ trong suốt từ hoàn toàn trong suốt đến hoàn toàn mờ.' },
      { question: 'Tôi có thể áp dụng hình mờ khác nhau cho các trang khác nhau không?', answer: 'Công cụ áp dụng cùng một hình mờ cho các trang đã chọn. Để có hình mờ khác nhau, hãy xử lý tài liệu nhiều lần.' },
    ],
  },

  'header-footer': {
    title: 'Tiêu đề & Chân trang',
    metaDescription: 'Thêm tiêu đề và chân trang vào tài liệu PDF. Bao gồm số trang, ngày tháng và văn bản tùy chỉnh.',
    keywords: ['tiêu đề pdf', 'chân trang pdf', 'thêm tiêu đề chân trang', 'giấy tiêu đề pdf'],
    description: `
      <p>Tiêu đề & Chân trang thêm tiêu đề và chân trang có thể tùy chỉnh vào tài liệu PDF của bạn. Bao gồm số trang, ngày tháng, tiêu đề tài liệu hoặc bất kỳ văn bản tùy chỉnh nào trong khu vực tiêu đề hoặc chân trang.</p>
      <p>Định vị nội dung ở bên trái, giữa hoặc bên phải của tiêu đề/chân trang. Sử dụng nội dung khác nhau cho trang lẻ và chẵn nếu cần. Hoàn hảo để tạo tài liệu chuyên nghiệp với định dạng nhất quán.</p>
      <p>Tất cả quá trình xử lý diễn ra cục bộ trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư.</p>
    `,
    howToUse: [
      { step: 1, title: 'Tải lên PDF của bạn', description: 'Kéo và thả tệp PDF của bạn hoặc nhấp để chọn tài liệu.' },
      { step: 2, title: 'Định cấu hình Tiêu đề/Chân trang', description: 'Nhập văn bản cho khu vực tiêu đề và chân trang. Thêm số trang, ngày tháng hoặc văn bản tùy chỉnh.' },
      { step: 3, title: 'Áp dụng và tải xuống', description: 'Nhấp Áp dụng để thêm tiêu đề/chân trang và tải xuống PDF đã cập nhật của bạn.' },
    ],
    useCases: [
      { title: 'Tài liệu kinh doanh', description: 'Thêm tên công ty và số trang vào tài liệu chuyên nghiệp.', icon: 'briefcase' },
      { title: 'Tài liệu pháp lý', description: 'Bao gồm số trường hợp, ngày tháng và tham chiếu trang trong hồ sơ tòa án.', icon: 'scale' },
      { title: 'Bài báo học thuật', description: 'Thêm tiêu đề chạy với tiêu đề bài báo và tên tác giả.', icon: 'graduation-cap' },
    ],
    faq: [
      { question: 'Tôi có thể có tiêu đề khác nhau trên trang lẻ và chẵn không?', answer: 'Có, bạn có thể định cấu hình nội dung khác nhau cho trang lẻ và chẵn.' },
      { question: 'Tôi có thể bao gồm ngày hiện tại không?', answer: 'Có, bạn có thể chèn trường ngày động hiển thị ngày hiện tại.' },
      { question: 'Tôi có thể bỏ qua tiêu đề/chân trang trên các trang nhất định không?', answer: 'Có, bạn có thể chỉ định trang nào có tiêu đề/chân trang và trang nào được bỏ qua.' },
    ],
  },

  'invert-colors': {
    title: 'Đảo ngược màu sắc',
    metaDescription: 'Đảo ngược màu sắc PDF để đọc chế độ tối. Chuyển đổi tài liệu thành màu âm.',
    keywords: ['đảo ngược màu sắc pdf', 'chế độ tối pdf', 'âm bản pdf', 'đảo ngược màu sắc'],
    description: `
      <p>Đảo ngược màu sắc đảo ngược màu sắc trong tài liệu PDF của bạn, tạo hiệu ứng hình ảnh âm. Điều này đặc biệt hữu ích để tạo phiên bản chế độ tối của tài liệu để đọc thoải mái trong điều kiện ánh sáng thấp.</p>
      <p>Công cụ có thể đảo ngược tất cả màu sắc hoặc loại trừ có chọn lọc một số phần tử như hình ảnh. Hoàn hảo để giảm mỏi mắt khi đọc tài liệu trong thời gian dài vào ban đêm.</p>
      <p>Tất cả quá trình xử lý diễn ra cục bộ trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư.</p>
    `,
    howToUse: [
      { step: 1, title: 'Tải lên PDF của bạn', description: 'Kéo và thả tệp PDF của bạn hoặc nhấp để chọn tài liệu.' },
      { step: 2, title: 'Định cấu hình tùy chọn', description: 'Chọn đảo ngược tất cả nội dung hoặc bảo toàn hình ảnh.' },
      { step: 3, title: 'Đảo ngược và tải xuống', description: 'Nhấp Đảo ngược để xử lý tài liệu và tải xuống kết quả.' },
    ],
    useCases: [
      { title: 'Đọc ban đêm', description: 'Tạo phiên bản chế độ tối của tài liệu để đọc thoải mái vào ban đêm.', icon: 'moon' },
      { title: 'Giảm mỏi mắt', description: 'Đảo ngược tài liệu sáng để giảm mỏi mắt trong khi đọc kéo dài.', icon: 'eye' },
      { title: 'Tiết kiệm in ấn', description: 'Đảo ngược tài liệu để giảm mức sử dụng mực khi in bản nháp.', icon: 'printer' },
    ],
    faq: [
      { question: 'Hình ảnh có bị đảo ngược không?', answer: 'Theo mặc định, có. Bạn có thể chọn bảo toàn hình ảnh gốc trong khi đảo ngược văn bản và nền.' },
      { question: 'Tôi có thể đảo ngược chỉ một số trang không?', answer: 'Có, bạn có thể chọn trang nào để đảo ngược.' },
      { question: 'Việc đảo ngược có thể đảo ngược không?', answer: 'Bạn có thể đảo ngược tài liệu lại để trở về màu sắc gần như gốc.' },
    ],
  },

  'background-color': {
    title: 'Màu nền',
    metaDescription: 'Thay đổi màu nền PDF. Thêm nền màu cho trang tài liệu.',
    keywords: ['màu nền pdf', 'thay đổi nền pdf', 'pdf màu', 'màu trang pdf'],
    description: `
      <p>Màu nền cho phép bạn thay đổi hoặc thêm màu nền cho trang PDF của mình. Điều này có thể cải thiện độ tương phản, thêm sự hấp dẫn trực quan hoặc đáp ứng yêu cầu thương hiệu của bạn.</p>
      <p>Chọn bất kỳ màu nào cho nền và áp dụng cho tất cả trang hoặc trang đã chọn. Công cụ bảo toàn tất cả nội dung hiện có trong khi thêm lớp nền.</p>
      <p>Tất cả quá trình xử lý diễn ra cục bộ trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư.</p>
    `,
    howToUse: [
      { step: 1, title: 'Tải lên PDF của bạn', description: 'Kéo và thả tệp PDF của bạn hoặc nhấp để chọn tài liệu.' },
      { step: 2, title: 'Chọn màu', description: 'Chọn màu nền bằng bộ chọn màu hoặc nhập mã hex.' },
      { step: 3, title: 'Áp dụng và tải xuống', description: 'Nhấp Áp dụng để thêm nền và tải xuống PDF đã cập nhật của bạn.' },
    ],
    useCases: [
      { title: 'Cải thiện độ tương phản', description: 'Thêm nền kem nhạt hoặc sepia để giảm mỏi mắt.', icon: 'eye' },
      { title: 'Thương hiệu tài liệu', description: 'Sử dụng màu thương hiệu làm nền cho tài liệu marketing.', icon: 'palette' },
      { title: 'Làm nổi bật phần', description: 'Sử dụng màu nền khác nhau để phân biệt phần tài liệu.', icon: 'layers' },
    ],
    faq: [
      { question: 'Nền có che nội dung hiện có không?', answer: 'Không, nền được thêm phía sau nội dung hiện có, bảo toàn tất cả văn bản và hình ảnh.' },
      { question: 'Tôi có thể sử dụng màu khác nhau cho các trang khác nhau không?', answer: 'Bạn sẽ cần xử lý tài liệu nhiều lần cho màu khác nhau trên các trang khác nhau.' },
      { question: 'Tôi có thể xóa nền hiện có không?', answer: 'Công cụ này thêm nền. Để xóa nền, bạn có thể cần sử dụng công cụ Chỉnh sửa PDF.' },
    ],
  },

  'text-color': {
    title: 'Thay đổi màu văn bản',
    metaDescription: 'Thay đổi màu văn bản trong tài liệu PDF. Sửa đổi màu của tất cả nội dung văn bản.',
    keywords: ['thay đổi màu văn bản pdf', 'màu văn bản pdf', 'sửa đổi màu văn bản', 'tái màu văn bản pdf'],
    description: `
      <p>Thay đổi màu văn bản cho phép bạn sửa đổi màu của văn bản trong tài liệu PDF của mình. Điều này hữu ích để cải thiện độ tương phản, phù hợp thương hiệu hoặc tạo biến thể trực quan của tài liệu.</p>
      <p>Chọn màu mới và áp dụng cho tất cả văn bản trong tài liệu. Công cụ xử lý các phần tử văn bản trong khi bảo toàn hình ảnh và nội dung khác.</p>
      <p>Tất cả quá trình xử lý diễn ra cục bộ trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư.</p>
    `,
    howToUse: [
      { step: 1, title: 'Tải lên PDF của bạn', description: 'Kéo và thả tệp PDF của bạn hoặc nhấp để chọn tài liệu.' },
      { step: 2, title: 'Chọn màu', description: 'Chọn màu văn bản mới bằng bộ chọn màu hoặc nhập mã hex.' },
      { step: 3, title: 'Áp dụng và tải xuống', description: 'Nhấp Áp dụng để thay đổi màu văn bản và tải xuống PDF đã cập nhật của bạn.' },
    ],
    useCases: [
      { title: 'Cải thiện độ tương phản', description: 'Thay đổi màu văn bản để cải thiện khả năng đọc so với nền.', icon: 'contrast' },
      { title: 'Nhất quán thương hiệu', description: 'Cập nhật màu văn bản để phù hợp với hướng dẫn thương hiệu.', icon: 'palette' },
      { title: 'Khả năng truy cập', description: 'Điều chỉnh màu văn bản để đáp ứng yêu cầu độ tương phản về khả năng truy cập.', icon: 'accessibility' },
    ],
    faq: [
      { question: 'Tất cả văn bản có bị thay đổi không?', answer: 'Có, công cụ thay đổi màu của tất cả phần tử văn bản trong tài liệu.' },
      { question: 'Tôi có thể thay đổi chỉ văn bản cụ thể không?', answer: 'Công cụ này thay đổi tất cả văn bản. Để thay đổi có chọn lọc, hãy sử dụng công cụ Chỉnh sửa PDF.' },
      { question: 'Định dạng văn bản (đậm, nghiêng) có được bảo toàn không?', answer: 'Có, định dạng văn bản được bảo toàn; chỉ màu sắc bị thay đổi.' },
    ],
  },

  'add-stamps': {
    title: 'Thêm dấu',
    metaDescription: 'Thêm dấu vào tài liệu PDF. Sử dụng dấu đặt sẵn hoặc tùy chỉnh cho phê duyệt, xem xét và hơn thế nữa.',
    keywords: ['dấu pdf', 'thêm dấu', 'dấu phê duyệt', 'dấu cao su pdf'],
    description: `
      <p>Thêm dấu cho phép bạn đặt hình ảnh dấu trên tài liệu PDF của mình. Sử dụng dấu đặt sẵn như "Đã phê duyệt", "Từ chối", "Bản nháp" hoặc tải lên hình ảnh dấu tùy chỉnh.</p>
      <p>Định vị dấu ở bất kỳ đâu trên trang, thay đổi kích thước chúng và áp dụng cho một hoặc nhiều trang. Hoàn hảo cho quy trình tài liệu, phê duyệt và chỉ báo trạng thái.</p>
      <p>Tất cả quá trình xử lý diễn ra cục bộ trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư.</p>
    `,
    howToUse: [
      { step: 1, title: 'Tải lên PDF của bạn', description: 'Kéo và thả tệp PDF của bạn hoặc nhấp để chọn tài liệu.' },
      { step: 2, title: 'Chọn dấu', description: 'Chọn dấu đặt sẵn hoặc tải lên hình ảnh dấu tùy chỉnh.' },
      { step: 3, title: 'Định vị và áp dụng', description: 'Nhấp để đặt dấu, điều chỉnh vị trí và kích thước, sau đó tải xuống.' },
    ],
    useCases: [
      { title: 'Phê duyệt tài liệu', description: 'Thêm dấu "Đã phê duyệt" hoặc "Từ chối" vào tài liệu trong quy trình xem xét.', icon: 'check-circle' },
      { title: 'Chỉ báo trạng thái', description: 'Đánh dấu tài liệu là "Bản nháp", "Cuối cùng" hoặc "Bí mật".', icon: 'tag' },
      { title: 'Kiểm soát chất lượng', description: 'Thêm dấu QC để chỉ ra hoàn thành kiểm tra hoặc xem xét.', icon: 'clipboard-check' },
    ],
    faq: [
      { question: 'Dấu đặt sẵn nào có sẵn?', answer: 'Đặt sẵn bao gồm Đã phê duyệt, Từ chối, Bản nháp, Cuối cùng, Bí mật, Sao chép và nhiều hơn nữa.' },
      { question: 'Tôi có thể tải lên dấu tùy chỉnh không?', answer: 'Có, bạn có thể tải lên hình ảnh PNG hoặc JPG để sử dụng làm dấu tùy chỉnh.' },
      { question: 'Tôi có thể thêm nhiều dấu vào một tài liệu không?', answer: 'Có, bạn có thể thêm nhiều dấu và định vị từng dấu một cách độc lập.' },
    ],
  },

  'remove-annotations': {
    title: 'Loại bỏ chú thích',
    metaDescription: 'Loại bỏ chú thích khỏi tệp PDF. Xóa nhận xét, đánh dấu và đánh dấu.',
    keywords: ['loại bỏ chú thích pdf', 'xóa nhận xét', 'loại bỏ đánh dấu', 'dọn dẹp pdf'],
    description: `
      <p>Loại bỏ chú thích loại bỏ nhận xét, đánh dấu, ghi chú dính và chú thích khác khỏi tài liệu PDF của bạn. Điều này tạo phiên bản sạch của tài liệu mà không có đánh dấu.</p>
      <p>Bạn có thể loại bỏ tất cả chú thích hoặc loại bỏ có chọn lọc các loại cụ thể. Hoàn hảo để tạo phiên bản cuối cùng của tài liệu đã xem xét hoặc loại bỏ nhận xét nhạy cảm.</p>
      <p>Tất cả quá trình xử lý diễn ra cục bộ trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư.</p>
    `,
    howToUse: [
      { step: 1, title: 'Tải lên PDF của bạn', description: 'Kéo và thả tệp PDF của bạn hoặc nhấp để chọn tài liệu.' },
      { step: 2, title: 'Chọn loại chú thích', description: 'Chọn loại chú thích nào để loại bỏ: nhận xét, đánh dấu, liên kết, v.v.' },
      { step: 3, title: 'Loại bỏ và tải xuống', description: 'Nhấp Loại bỏ để loại bỏ chú thích và tải xuống PDF sạch.' },
    ],
    useCases: [
      { title: 'Hoàn thiện tài liệu', description: 'Loại bỏ nhận xét xem xét và đánh dấu trước khi xuất bản tài liệu cuối cùng.', icon: 'file-check' },
      { title: 'Bảo vệ quyền riêng tư', description: 'Loại bỏ nhận xét có thể chứa thông tin nhạy cảm trước khi chia sẻ.', icon: 'shield' },
      { title: 'Phân phối sạch', description: 'Tạo bản sao sạch của tài liệu đã chú thích để phân phối.', icon: 'copy' },
    ],
    faq: [
      { question: 'Loại chú thích nào có thể loại bỏ?', answer: 'Nhận xét, đánh dấu, gạch dưới, gạch ngang, ghi chú dính, dấu và liên kết đều có thể loại bỏ.' },
      { question: 'Tôi có thể giữ một số chú thích không?', answer: 'Có, bạn có thể chọn loại chú thích nào để loại bỏ và loại nào để giữ.' },
      { question: 'Điều này có thể đảo ngược không?', answer: 'Không, việc loại bỏ chú thích là vĩnh viễn. Giữ bản sao của bản gốc nếu cần.' },
    ],
  },

  'form-filler': {
    title: 'Điền biểu mẫu',
    metaDescription: 'Điền biểu mẫu PDF trực tuyến. Hoàn thành biểu mẫu PDF tương tác mà không cần in ấn.',
    keywords: ['điền biểu mẫu pdf', 'trình điền biểu mẫu pdf', 'hoàn thành biểu mẫu pdf', 'pdf tương tác'],
    description: `
      <p>Điền biểu mẫu cho phép bạn hoàn thành biểu mẫu PDF tương tác trực tiếp trong trình duyệt của mình. Điền trường văn bản, đánh dấu hộp kiểm, chọn tùy chọn và thêm chữ ký mà không cần in tài liệu.</p>
      <p>Công cụ hỗ trợ biểu mẫu PDF tiêu chuẩn và biểu mẫu XFA. Dữ liệu đã điền của bạn có thể được lưu và biểu mẫu có thể được làm phẳng để ngăn chặn chỉnh sửa thêm.</p>
      <p>Tất cả quá trình xử lý diễn ra cục bộ trong trình duyệt của bạn, đảm bảo dữ liệu biểu mẫu của bạn vẫn riêng tư.</p>
    `,
    howToUse: [
      { step: 1, title: 'Tải lên biểu mẫu PDF của bạn', description: 'Kéo và thả biểu mẫu PDF của bạn hoặc nhấp để chọn tệp.' },
      { step: 2, title: 'Điền biểu mẫu', description: 'Nhấp vào trường biểu mẫu để nhập văn bản, đánh dấu hộp kiểm hoặc chọn tùy chọn.' },
      { step: 3, title: 'Lưu và tải xuống', description: 'Nhấp Lưu để bảo toàn mục nhập của bạn và tải xuống biểu mẫu đã điền.' },
    ],
    useCases: [
      { title: 'Biểu mẫu ứng dụng', description: 'Hoàn thành đơn xin việc, đơn xin phép và đơn đăng ký.', icon: 'clipboard' },
      { title: 'Biểu mẫu thuế', description: 'Điền tài liệu thuế và biểu mẫu tài chính điện tử.', icon: 'file-text' },
      { title: 'Hợp đồng', description: 'Hoàn thành biểu mẫu hợp đồng với thông tin của bạn trước khi ký.', icon: 'file-signature' },
    ],
    faq: [
      { question: 'Tôi có thể lưu tiến trình của mình không?', answer: 'Có, bạn có thể lưu biểu mẫu đã điền một phần và tiếp tục sau.' },
      { question: 'Làm phẳng biểu mẫu là gì?', answer: 'Làm phẳng chuyển đổi trường biểu mẫu thành nội dung tĩnh, ngăn chặn chỉnh sửa thêm.' },
      { question: 'Biểu mẫu XFA có được hỗ trợ không?', answer: 'Có, công cụ hỗ trợ cả biểu mẫu AcroForms tiêu chuẩn và biểu mẫu XFA.' },
    ],
  },

  'form-creator': {
    title: 'Tạo biểu mẫu',
    metaDescription: 'Tạo biểu mẫu PDF có thể điền. Thêm trường văn bản, hộp kiểm và menu thả xuống vào tài liệu.',
    keywords: ['tạo biểu mẫu pdf', 'trình tạo biểu mẫu pdf', 'pdf có thể điền', 'thêm trường biểu mẫu'],
    description: `
      <p>Tạo biểu mẫu biến đổi tài liệu PDF tĩnh thành biểu mẫu tương tác có thể điền. Thêm trường văn bản, hộp kiểm, nút radio, menu thả xuống và nhiều hơn nữa để tạo biểu mẫu chuyên nghiệp.</p>
      <p>Kéo và thả phần tử biểu mẫu lên tài liệu của bạn, định cấu hình thuộc tính trường và tạo biểu mẫu có thể điền điện tử. Hoàn hảo để tạo ứng dụng, khảo sát và thu thập dữ liệu.</p>
      <p>Tất cả quá trình xử lý diễn ra cục bộ trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư.</p>
    `,
    howToUse: [
      { step: 1, title: 'Tải lên PDF của bạn', description: 'Kéo và thả tệp PDF của bạn hoặc nhấp để chọn tài liệu để chuyển đổi thành biểu mẫu.' },
      { step: 2, title: 'Thêm trường biểu mẫu', description: 'Chọn loại trường từ thanh công cụ và nhấp để đặt chúng trên tài liệu.' },
      { step: 3, title: 'Định cấu hình và lưu', description: 'Đặt thuộc tính trường, sau đó lưu và tải xuống PDF biểu mẫu có thể điền của bạn.' },
    ],
    useCases: [
      { title: 'Biểu mẫu ứng dụng', description: 'Tạo đơn xin việc có thể điền, biểu mẫu thành viên và đăng ký.', icon: 'user-plus' },
      { title: 'Khảo sát', description: 'Xây dựng khảo sát và bảng câu hỏi tương tác để thu thập dữ liệu.', icon: 'clipboard-list' },
      { title: 'Biểu mẫu đặt hàng', description: 'Tạo biểu mẫu đặt hàng sản phẩm với trường số lượng và hộp kiểm.', icon: 'shopping-cart' },
    ],
    faq: [
      { question: 'Loại trường nào tôi có thể thêm?', answer: 'Trường văn bản, hộp kiểm, nút radio, menu thả xuống, bộ chọn ngày và trường chữ ký.' },
      { question: 'Tôi có thể làm cho trường bắt buộc không?', answer: 'Có, bạn có thể đánh dấu trường là bắt buộc và thêm quy tắc xác thực.' },
      { question: 'Tôi có thể thêm tính toán không?', answer: 'Tính toán cơ bản như tổng và trung bình có thể được thêm vào trường số.' },
    ],
  },

  'remove-blank-pages': {
    title: 'Loại bỏ trang trống',
    metaDescription: 'Tự động phát hiện và loại bỏ trang trống khỏi tài liệu PDF.',
    keywords: ['loại bỏ trang trống', 'xóa trang trống', 'dọn dẹp pdf', 'công cụ loại bỏ trang trống pdf'],
    description: `
      <p>Loại bỏ trang trống tự động phát hiện và loại bỏ trang trống khỏi tài liệu PDF của bạn. Điều này hữu ích để dọn dẹp tài liệu đã quét, loại bỏ trang ngăn cách hoặc loại bỏ trang trống được bao gồm một cách tình cờ.</p>
      <p>Công cụ sử dụng phát hiện thông minh để xác định trang thực sự trống trong khi bảo toàn trang có nội dung tối thiểu. Bạn có thể điều chỉnh ngưỡng độ nhạy để kiểm soát những gì được coi là "trống".</p>
      <p>Tất cả quá trình xử lý diễn ra cục bộ trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư.</p>
    `,
    howToUse: [
      { step: 1, title: 'Tải lên PDF của bạn', description: 'Kéo và thả tệp PDF của bạn hoặc nhấp để chọn tài liệu.' },
      { step: 2, title: 'Điều chỉnh ngưỡng', description: 'Đặt ngưỡng phát hiện trống nếu cần (mặc định hoạt động cho hầu hết tài liệu).' },
      { step: 3, title: 'Loại bỏ và tải xuống', description: 'Nhấp Loại bỏ để xóa trang trống và tải xuống PDF đã dọn dẹp.' },
    ],
    useCases: [
      { title: 'Dọn dẹp tài liệu đã quét', description: 'Loại bỏ trang trống từ tài liệu quét hàng loạt.', icon: 'scan' },
      { title: 'Loại bỏ ngăn cách', description: 'Xóa trang ngăn cách trống từ tài liệu đã hợp nhất.', icon: 'minus' },
      { title: 'Giảm kích thước tệp', description: 'Loại bỏ trang trống không cần thiết để giảm kích thước tài liệu.', icon: 'minimize-2' },
    ],
    faq: [
      { question: 'Phát hiện trống hoạt động như thế nào?', answer: 'Công cụ phân tích nội dung trang và coi trang có nội dung tối thiểu hoặc không có nội dung hiển thị là trống.' },
      { question: 'Tôi có thể xem trước trang nào sẽ bị loại bỏ không?', answer: 'Có, trang trống được phát hiện được đánh dấu để xem xét trước khi loại bỏ.' },
      { question: 'Điều gì nếu một trang chỉ có tiêu đề/chân trang?', answer: 'Bạn có thể điều chỉnh ngưỡng để xác định xem trang có nội dung tối thiểu có được coi là trống không.' },
    ],
  },

  // ==================== CHUYỂN ĐỔI THÀNH PDF ====================
  'image-to-pdf': {
    title: 'Hình ảnh sang PDF',
    metaDescription: 'Chuyển đổi bất kỳ hình ảnh nào sang PDF. Hỗ trợ định dạng JPG, PNG, WebP, BMP, TIFF, SVG và HEIC.',
    keywords: ['hình ảnh sang pdf', 'chuyển đổi hình ảnh', 'ảnh sang pdf', 'hình ảnh sang pdf'],
    description: `
      <p>Hình ảnh sang PDF chuyển đổi hình ảnh của bất kỳ định dạng nào thành tài liệu PDF. Hỗ trợ định dạng JPG, PNG, WebP, BMP, TIFF, SVG và HEIC giúp công cụ này trở thành trình chuyển đổi hình ảnh phổ quát.</p>
      <p>Kết hợp nhiều tệp hình ảnh thành một PDF duy nhất, sắp xếp chúng theo bất kỳ thứ tự nào và tùy chỉnh kích thước trang và định hướng. Hoàn hảo để tạo album ảnh, lưu trữ tài liệu hoặc danh mục đầu tư.</p>
      <p>Tất cả chuyển đổi diễn ra trong trình duyệt của bạn, đảm bảo hình ảnh của bạn vẫn riêng tư.</p>
    `,
    howToUse: [
      { step: 1, title: 'Tải lên hình ảnh', description: 'Kéo và thả hình ảnh của bất kỳ định dạng được hỗ trợ nào hoặc nhấp để chọn tệp.' },
      { step: 2, title: 'Sắp xếp và định cấu hình', description: 'Sắp xếp lại hình ảnh bằng cách kéo, và chọn tùy chọn kích thước trang và định hướng.' },
      { step: 3, title: 'Chuyển đổi và tải xuống', description: 'Nhấp Chuyển đổi để tạo PDF của bạn và tải xuống kết quả.' },
    ],
    useCases: [
      { title: 'Bộ sưu tập ảnh', description: 'Kết hợp ảnh từ nhiều nguồn khác nhau thành một album PDF duy nhất.', icon: 'images' },
      { title: 'Tài liệu định dạng hỗn hợp', description: 'Chuyển đổi hình ảnh từ định dạng khác nhau thành PDF thống nhất.', icon: 'file-stack' },
      { title: 'Tạo lưu trữ', description: 'Tạo lưu trữ PDF từ bộ sưu tập hình ảnh để lưu trữ lâu dài.', icon: 'archive' },
    ],
    faq: [
      { question: 'Định dạng hình ảnh nào được hỗ trợ?', answer: 'Định dạng JPG, JPEG, PNG, WebP, BMP, TIFF, TIF, SVG, HEIC và HEIF đều được hỗ trợ.' },
      { question: 'Tôi có thể trộn các định dạng hình ảnh khác nhau không?', answer: 'Có, bạn có thể kết hợp hình ảnh của các định dạng khác nhau thành một PDF duy nhất.' },
      { question: 'Chất lượng hình ảnh có được bảo toàn không?', answer: 'Có, hình ảnh được nhúng ở chất lượng gốc của chúng trừ khi bạn chọn nén chúng để giảm kích thước tệp.' },
    ],
  },

  'png-to-pdf': {
    title: 'PNG sang PDF',
    metaDescription: 'Chuyển đổi hình ảnh PNG sang PDF. Bảo toàn độ trong suốt và kết hợp nhiều tệp PNG.',
    keywords: ['png sang pdf', 'chuyển đổi png', 'trình chuyển đổi png', 'hình ảnh trong suốt sang pdf'],
    description: `
      <p>PNG sang PDF chuyển đổi hình ảnh PNG của bạn thành tài liệu PDF trong khi bảo toàn độ trong suốt. Hoàn hảo cho đồ họa, logo, ảnh chụp màn hình, và hình ảnh với nền trong suốt.</p>
      <p>Kết hợp nhiều tệp PNG thành một PDF duy nhất với cài đặt trang có thể tùy chỉnh. Việc chuyển đổi bảo toàn chất lượng cao của hình ảnh gốc của bạn.</p>
      <p>Tất cả chuyển đổi diễn ra trong trình duyệt của bạn, đảm bảo hình ảnh của bạn vẫn riêng tư.</p>
    `,
    howToUse: [
      { step: 1, title: 'Tải lên tệp PNG', description: 'Kéo và thả hình ảnh PNG của bạn hoặc nhấp để chọn tệp.' },
      { step: 2, title: 'Sắp xếp và định cấu hình', description: 'Sắp xếp lại hình ảnh và chọn tùy chọn kích thước trang.' },
      { step: 3, title: 'Chuyển đổi và tải xuống', description: 'Nhấp Chuyển đổi để tạo PDF của bạn và tải xuống.' },
    ],
    useCases: [
      { title: 'Danh mục đồ họa', description: 'Sắp xếp đồ họa PNG và thiết kế thành danh mục chuyên nghiệp.', icon: 'palette' },
      { title: 'Tài liệu ảnh chụp màn hình', description: 'Chuyển đổi ảnh chụp màn hình thành định dạng PDF.', icon: 'monitor' },
      { title: 'Bộ sưu tập logo', description: 'Tạo danh mục PDF của bộ logo và tài sản thương hiệu.', icon: 'award' },
    ],
    faq: [
      { question: 'Độ trong suốt có được bảo toàn không?', answer: 'Độ trong suốt PNG được bảo toàn trong đầu ra PDF.' },
      { question: 'Điều gì về PNG động?', answer: 'PNG động được chuyển đổi dưới dạng hình ảnh tĩnh bằng khung đầu tiên.' },
      { question: 'Tôi có thể đặt màu nền không?', answer: 'Có, bạn có thể chọn màu nền cho khu vực trong suốt.' },
    ],
  },

  'webp-to-pdf': {
    title: 'WebP sang PDF',
    metaDescription: 'Chuyển đổi hình ảnh WebP sang PDF. Chuyển đổi định dạng hình ảnh hiện đại với bảo toàn chất lượng.',
    keywords: ['webp sang pdf', 'chuyển đổi webp', 'trình chuyển đổi webp', 'hình ảnh web sang pdf'],
    description: `
      <p>WebP sang PDF chuyển đổi hình ảnh WebP hiện đại thành tài liệu PDF. WebP là định dạng hình ảnh web phổ biến, và công cụ này giúp chia sẻ những hình ảnh này dễ dàng.</p>
      <p>Kết hợp nhiều tệp WebP thành một PDF duy nhất với cài đặt trang có thể tùy chỉnh. Việc chuyển đổi bảo toàn chất lượng hình ảnh trong khi tạo tệp PDF nhỏ gọn.</p>
      <p>Tất cả chuyển đổi diễn ra trong trình duyệt của bạn, đảm bảo hình ảnh của bạn vẫn riêng tư.</p>
    `,
    howToUse: [
      { step: 1, title: 'Tải lên tệp WebP', description: 'Kéo và thả hình ảnh WebP của bạn hoặc nhấp để chọn tệp.' },
      { step: 2, title: 'Định cấu hình tùy chọn', description: 'Sắp xếp hình ảnh và chọn kích thước trang và định hướng.' },
      { step: 3, title: 'Chuyển đổi và tải xuống', description: 'Nhấp Chuyển đổi để tạo PDF của bạn.' },
    ],
    useCases: [
      { title: 'Lưu trữ nội dung web', description: 'Chuyển đổi hình ảnh web sang PDF để lưu trữ ngoại tuyến.', icon: 'globe' },
      { title: 'Chuẩn bị in ấn', description: 'Chuyển đổi hình ảnh WebP sang PDF cho mục đích in ấn.', icon: 'printer' },
      { title: 'Chuẩn hóa định dạng', description: 'Chuyển đổi WebP hiện đại sang PDF tương thích phổ quát.', icon: 'file-check' },
    ],
    faq: [
      { question: 'Định dạng WebP là gì?', answer: 'WebP là định dạng hình ảnh được phát triển bởi Google cung cấp nén tốt hơn JPEG.' },
      { question: 'Chất lượng có được bảo toàn không?', answer: 'Có, việc chuyển đổi bảo toàn chất lượng hình ảnh gốc.' },
      { question: 'Tôi có thể chuyển đổi WebP động không?', answer: 'WebP động được chuyển đổi dưới dạng hình ảnh tĩnh.' },
    ],
  },

  'svg-to-pdf': {
    title: 'SVG sang PDF',
    metaDescription: 'Chuyển đổi đồ họa vector SVG sang PDF. Bảo toàn khả năng mở rộng và chất lượng.',
    keywords: ['svg sang pdf', 'chuyển đổi svg', 'vector sang pdf', 'đồ họa có thể mở rộng sang pdf'],
    description: `
      <p>SVG sang PDF chuyển đổi đồ họa vector có thể mở rộng thành tài liệu PDF trong khi bảo toàn chất lượng vector. Tệp SVG vẫn sắc nét ở bất kỳ kích thước nào, và chất lượng này được duy trì trong đầu ra PDF.</p>
      <p>Hoàn hảo để chuyển đổi logo, biểu tượng, minh họa và bản vẽ kỹ thuật. PDF kết quả duy trì khả năng mở rộng của đồ họa vector gốc.</p>
      <p>Tất cả chuyển đổi diễn ra trong trình duyệt của bạn, đảm bảo tệp của bạn vẫn riêng tư.</p>
    `,
    howToUse: [
      { step: 1, title: 'Tải lên tệp SVG', description: 'Kéo và thả tệp SVG của bạn hoặc nhấp để chọn.' },
      { step: 2, title: 'Định cấu hình cài đặt', description: 'Chọn kích thước trang và tùy chọn sắp xếp.' },
      { step: 3, title: 'Chuyển đổi và tải xuống', description: 'Nhấp Chuyển đổi để tạo PDF vector của bạn.' },
    ],
    useCases: [
      { title: 'Chuyển đổi logo', description: 'Chuyển đổi logo SVG sang PDF cho tài liệu in ấn.', icon: 'award' },
      { title: 'Bản vẽ kỹ thuật', description: 'Chuyển đổi bản vẽ kỹ thuật và minh họa xuất CAD sang PDF.', icon: 'ruler' },
      { title: 'Bộ sưu tập biểu tượng', description: 'Tạo danh mục PDF của bộ biểu tượng và đồ họa.', icon: 'grid' },
    ],
    faq: [
      { question: 'Chất lượng vector có được bảo toàn không?', answer: 'Có, chất lượng vector SVG được bảo toàn hoàn toàn trong đầu ra PDF.' },
      { question: 'Tôi có thể chuyển đổi SVG phức tạp không?', answer: 'Có, SVG phức tạp với gradient, bộ lọc và hiệu ứng được hỗ trợ.' },
      { question: 'Điều gì về phông chữ nhúng?', answer: 'Phông chữ nhúng trong tệp SVG được bảo toàn trong PDF.' },
    ],
  },

  'bmp-to-pdf': {
    title: 'BMP sang PDF',
    metaDescription: 'Chuyển đổi hình ảnh bitmap BMP sang PDF. Hỗ trợ định dạng kế thừa với bảo toàn chất lượng.',
    keywords: ['bmp sang pdf', 'chuyển đổi bmp', 'bitmap sang pdf', 'trình chuyển đổi bmp'],
    description: `
      <p>BMP sang PDF chuyển đổi hình ảnh bitmap thành tài liệu PDF. BMP là định dạng hình ảnh kế thừa thường được sử dụng trong môi trường Windows, và công cụ này giúp chuyển đổi những tệp này sang định dạng PDF hiện đại.</p>
      <p>Kết hợp nhiều tệp BMP thành một PDF duy nhất với cài đặt có thể tùy chỉnh. Việc chuyển đổi nén các tệp BMP thường lớn trong khi duy trì chất lượng hình ảnh.</p>
      <p>Tất cả chuyển đổi diễn ra trong trình duyệt của bạn, đảm bảo hình ảnh của bạn vẫn riêng tư.</p>
    `,
    howToUse: [
      { step: 1, title: 'Tải lên tệp BMP', description: 'Kéo và thả hình ảnh BMP của bạn hoặc nhấp để chọn tệp.' },
      { step: 2, title: 'Định cấu hình tùy chọn', description: 'Sắp xếp hình ảnh và chọn cài đặt trang.' },
      { step: 3, title: 'Chuyển đổi và tải xuống', description: 'Nhấp Chuyển đổi để tạo PDF của bạn.' },
    ],
    useCases: [
      { title: 'Chuyển đổi định dạng kế thừa', description: 'Chuyển đổi tệp BMP cũ sang định dạng PDF hiện đại.', icon: 'history' },
      { title: 'Ảnh chụp màn hình Windows', description: 'Chuyển đổi ảnh chụp màn hình bitmap Windows sang PDF.', icon: 'monitor' },
      { title: 'Hiện đại hóa lưu trữ', description: 'Cập nhật lưu trữ kế thừa sang định dạng PDF để tương thích tốt hơn.', icon: 'archive' },
    ],
    faq: [
      { question: 'Kích thước tệp có được giảm không?', answer: 'Có, tệp BMP thường được nén đáng kể khi chuyển đổi sang PDF.' },
      { question: 'Chất lượng có được bảo toàn không?', answer: 'Có, chất lượng hình ảnh được duy trì trong quá trình chuyển đổi.' },
      { question: 'Độ sâu màu BMP nào được hỗ trợ?', answer: 'Độ sâu màu tiêu chuẩn BMP, bao gồm 24-bit và 32-bit, được hỗ trợ.' },
    ],
  },

  'psd-to-pdf': {
    title: 'PSD sang PDF',
    metaDescription: 'Chuyển đổi tệp Adobe Photoshop (PSD) sang định dạng PDF. Hỗ trợ nhiều tệp và bảo toàn chất lượng hình ảnh.',
    keywords: ['psd sang pdf', 'chuyển đổi psd', 'photoshop sang pdf', 'trình chuyển đổi psd', 'adobe psd sang pdf'],
    description: `
      <p>PSD sang PDF chuyển đổi tệp Adobe Photoshop (PSD) thành tài liệu PDF chất lượng cao. Công cụ này cho phép bạn xem và chia sẻ thiết kế PSD mà không cần cài đặt Photoshop.</p>
      <p>Bạn có thể chuyển đổi nhiều tệp PSD cùng lúc và kết hợp chúng thành một tài liệu PDF duy nhất. Công cụ xử lý từng tệp PSD, kết xuất các lớp hiển thị thành trang PDF chất lượng cao.</p>
      <p>Tất cả chuyển đổi diễn ra cục bộ trong trình duyệt của bạn, đảm bảo thiết kế của bạn vẫn riêng tư và an toàn.</p>
    `,
    howToUse: [
      { step: 1, title: 'Tải lên tệp PSD', description: 'Kéo và thả tệp PSD hoặc PSB của bạn, hoặc nhấp để chọn từ thiết bị của bạn.' },
      { step: 2, title: 'Sắp xếp thứ tự', description: 'Kéo và thả hình thu nhỏ tệp để sắp xếp chúng theo thứ tự mong muốn.' },
      { step: 3, title: 'Chuyển đổi và tải xuống', description: 'Nhấp Chuyển đổi để kết xuất PSD và tải xuống tài liệu PDF của bạn.' },
    ],
    useCases: [
      { title: 'Chia sẻ thiết kế', description: 'Chia sẻ thiết kế Photoshop với khách hàng hoặc đồng nghiệp không có Photoshop.', icon: 'share-2' },
      { title: 'Tạo danh mục đầu tư', description: 'Sắp xếp công việc thiết kế của bạn thành danh mục PDF chuyên nghiệp.', icon: 'layout' },
      { title: 'Chuẩn bị in ấn', description: 'Chuyển đổi thiết kế sang PDF cho mục đích in ấn.', icon: 'printer' },
    ],
    faq: [
      { question: 'Tôi có cần cài đặt Photoshop không?', answer: 'Không, công cụ này hoạt động hoàn toàn trong trình duyệt của bạn mà không yêu cầu Adobe Photoshop.' },
      { question: 'Lớp có được bảo toàn không?', answer: 'Công cụ kết xuất trạng thái hiển thị của PSD (hình ảnh tổng hợp). Các lớp riêng lẻ được làm phẳng trong PDF.' },
      { question: 'Kích thước tệp tối đa là bao nhiêu?', answer: 'Bạn có thể tải lên tệp lên đến 100MB mỗi tệp. Tệp PSD lớn có thể mất một chút thời gian để xử lý.' },
    ],
  },

  'heic-to-pdf': {
    title: 'HEIC sang PDF',
    metaDescription: 'Chuyển đổi ảnh iPhone HEIC sang PDF. Chuyển đổi định dạng hình ảnh Apple dễ dàng.',
    keywords: ['heic sang pdf', 'chuyển đổi heic', 'ảnh iPhone sang pdf', 'hình ảnh apple sang pdf'],
    description: `
      <p>HEIC sang PDF chuyển đổi ảnh High Efficiency Image Format của Apple thành tài liệu PDF. HEIC là định dạng ảnh mặc định trên iPhone và iPad, và công cụ này giúp chia sẻ những ảnh này dễ dàng.</p>
      <p>Kết hợp nhiều ảnh HEIC thành một PDF duy nhất, hoàn hảo để tạo album ảnh hoặc lưu trữ tài liệu từ ảnh iPhone của bạn.</p>
      <p>Tất cả chuyển đổi diễn ra trong trình duyệt của bạn, đảm bảo ảnh của bạn vẫn riêng tư.</p>
    `,
    howToUse: [
      { step: 1, title: 'Tải lên tệp HEIC', description: 'Kéo và thả ảnh HEIC của bạn hoặc nhấp để chọn tệp.' },
      { step: 2, title: 'Sắp xếp ảnh', description: 'Sắp xếp lại ảnh và chọn cài đặt trang.' },
      { step: 3, title: 'Chuyển đổi và tải xuống', description: 'Nhấp Chuyển đổi để tạo PDF của bạn.' },
    ],
    useCases: [
      { title: 'Album ảnh iPhone', description: 'Tạo album PDF từ ảnh iPhone để chia sẻ.', icon: 'smartphone' },
      { title: 'Quét tài liệu', description: 'Chuyển đổi ảnh quét tài liệu iPhone sang định dạng PDF.', icon: 'scan' },
      { title: 'Chia sẻ đa nền tảng', description: 'Chuyển đổi HEIC sang PDF để tương thích phổ quát.', icon: 'share-2' },
    ],
    faq: [
      { question: 'Định dạng HEIC là gì?', answer: 'HEIC (High Efficiency Image Container) là định dạng hình ảnh của Apple cung cấp nén tốt hơn JPEG.' },
      { question: 'Ảnh động có được hỗ trợ không?', answer: 'Ảnh động được chuyển đổi dưới dạng hình ảnh tĩnh bằng khung chính.' },
      { question: 'Dữ liệu EXIF có được bảo toàn không?', answer: 'Siêu dữ liệu ảnh có thể được bảo toàn hoặc loại bỏ trong quá trình chuyển đổi.' },
    ],
  },

  'tiff-to-pdf': {
    title: 'TIFF sang PDF',
    metaDescription: 'Chuyển đổi hình ảnh TIFF sang PDF. Chất lượng chuyên nghiệp với hỗ trợ đa trang.',
    keywords: ['tiff sang pdf', 'chuyển đổi tiff', 'tif sang pdf', 'tiff đa trang'],
    description: `
      <p>TIFF sang PDF chuyển đổi hình ảnh TIFF, bao gồm tệp TIFF đa trang, thành tài liệu PDF. TIFF thường được sử dụng cho quét chất lượng cao và đồ họa chuyên nghiệp.</p>
      <p>Tệp TIFF đa trang được chuyển đổi tự động thành PDF đa trang. Việc chuyển đổi bảo toàn chất lượng cao của hình ảnh gốc của bạn.</p>
      <p>Tất cả chuyển đổi diễn ra trong trình duyệt của bạn, đảm bảo tệp của bạn vẫn riêng tư.</p>
    `,
    howToUse: [
      { step: 1, title: 'Tải lên tệp TIFF', description: 'Kéo và thả tệp TIFF của bạn hoặc nhấp để chọn.' },
      { step: 2, title: 'Định cấu hình tùy chọn', description: 'Chọn cài đặt trang và tùy chọn nén.' },
      { step: 3, title: 'Chuyển đổi và tải xuống', description: 'Nhấp Chuyển đổi để tạo PDF của bạn.' },
    ],
    useCases: [
      { title: 'Tài liệu đã quét', description: 'Chuyển đổi quét chất lượng cao từ TIFF sang PDF.', icon: 'scan' },
      { title: 'Đồ họa chuyên nghiệp', description: 'Chuyển đổi đồ họa TIFF chuyên nghiệp để phân phối.', icon: 'image' },
      { title: 'Chuyển đổi lưu trữ', description: 'Chuyển đổi lưu trữ TIFF sang định dạng PDF dễ truy cập hơn.', icon: 'archive' },
    ],
    faq: [
      { question: 'Tệp TIFF đa trang có được hỗ trợ không?', answer: 'Có, tệp TIFF đa trang được chuyển đổi thành PDF đa trang tự động.' },
      { question: 'Chất lượng có được bảo toàn không?', answer: 'Có, chất lượng TIFF được bảo toàn hoàn toàn trong đầu ra PDF.' },
      { question: 'Tùy chọn nén nào có sẵn?', answer: 'Tùy chọn LZW, ZIP và không nén có sẵn.' },
    ],
  },

  'txt-to-pdf': {
    title: 'Văn bản sang PDF',
    metaDescription: 'Chuyển đổi tệp văn bản thuần túy sang PDF. Tùy chỉnh phông chữ, lề và bố cục trang.',
    keywords: ['txt sang pdf', 'văn bản sang pdf', 'chuyển đổi tệp văn bản', 'văn bản thuần túy sang pdf'],
    description: `
      <p>Văn bản sang PDF chuyển đổi tệp văn bản thuần túy thành tài liệu PDF được định dạng. Tùy chỉnh phông chữ, kích thước, lề và bố cục trang để tạo tài liệu có vẻ ngoài chuyên nghiệp từ văn bản đơn giản.</p>
      <p>Hoàn hảo để chuyển đổi tệp mã, nhật ký, ghi chú hoặc bất kỳ nội dung văn bản thuần túy nào thành định dạng PDF có thể chia sẻ.</p>
      <p>Tất cả chuyển đổi diễn ra trong trình duyệt của bạn, đảm bảo tệp của bạn vẫn riêng tư.</p>
    `,
    howToUse: [
      { step: 1, title: 'Tải lên tệp văn bản', description: 'Kéo và thả tệp .txt của bạn hoặc nhấp để chọn.' },
      { step: 2, title: 'Tùy chỉnh định dạng', description: 'Chọn phông chữ, kích thước, lề và cài đặt trang.' },
      { step: 3, title: 'Chuyển đổi và tải xuống', description: 'Nhấp Chuyển đổi để tạo PDF được định dạng của bạn.' },
    ],
    useCases: [
      { title: 'Tài liệu mã', description: 'Chuyển đổi tệp mã nguồn sang PDF để tài liệu.', icon: 'code' },
      { title: 'Lưu trữ nhật ký', description: 'Chuyển đổi tệp nhật ký sang PDF để lưu trữ.', icon: 'file-text' },
      { title: 'Chuyển đổi ghi chú', description: 'Chuyển đổi ghi chú văn bản thuần túy sang tài liệu PDF được định dạng.', icon: 'sticky-note' },
    ],
    faq: [
      { question: 'Phông chữ nào có sẵn?', answer: 'Nhiều phông chữ có sẵn bao gồm phông chữ monospace cho mã.' },
      { question: 'Ngắt dòng có tự động không?', answer: 'Có, dòng dài được tự động ngắt để vừa với trang.' },
      { question: 'Tôi có thể bảo toàn định dạng không?', answer: 'Khoảng trắng và thụt lề từ văn bản gốc được bảo toàn.' },
    ],
  },

  'json-to-pdf': {
    title: 'JSON sang PDF',
    metaDescription: 'Chuyển đổi tệp JSON sang định dạng PDF. Làm nổi bật cú pháp và đầu ra có cấu trúc.',
    keywords: ['json sang pdf', 'chuyển đổi json', 'trình xem json', 'định dạng json'],
    description: `
      <p>JSON sang PDF chuyển đổi dữ liệu tệp JSON thành tài liệu PDF có thể đọc được. Đầu ra bao gồm làm nổi bật cú pháp và thụt lề thích hợp để dễ đọc.</p>
      <p>Hoàn hảo để ghi lại phản hồi API, tệp cấu hình hoặc bất kỳ dữ liệu JSON nào cần được chia sẻ hoặc lưu trữ ở định dạng có thể đọc được.</p>
      <p>Tất cả chuyển đổi diễn ra trong trình duyệt của bạn, đảm bảo dữ liệu của bạn vẫn riêng tư.</p>
    `,
    howToUse: [
      { step: 1, title: 'Tải lên tệp JSON', description: 'Kéo và thả tệp .json của bạn hoặc nhấp để chọn.' },
      { step: 2, title: 'Hiển thị cấu hình', description: 'Chọn tùy chọn định dạng và làm nổi bật cú pháp.' },
      { step: 3, title: 'Chuyển đổi và tải xuống', description: 'Nhấp Chuyển đổi để tạo PDF được định dạng của bạn.' },
    ],
    useCases: [
      { title: 'Tài liệu API', description: 'Chuyển đổi phản hồi API sang PDF để tài liệu.', icon: 'code' },
      { title: 'Lưu trữ cấu hình', description: 'Lưu trữ tệp cấu hình ở định dạng PDF có thể đọc được.', icon: 'settings' },
      { title: 'Báo cáo dữ liệu', description: 'Tạo báo cáo PDF từ dữ liệu xuất JSON.', icon: 'bar-chart' },
    ],
    faq: [
      { question: 'Làm nổi bật cú pháp có được bao gồm không?', answer: 'Có, cú pháp JSON được làm nổi bật với màu sắc cho khóa, giá trị và kiểu.' },
      { question: 'Dữ liệu lồng nhau được xử lý như thế nào?', answer: 'Đối tượng và mảng lồng nhau được thụt lề thích hợp để dễ đọc.' },
      { question: 'Điều gì về tệp JSON lớn?', answer: 'Tệp lớn được phân trang tự động trên nhiều trang.' },
    ],
  },

  'word-to-pdf': {
    title: 'Word sang PDF',
    metaDescription: 'Chuyển đổi tài liệu Word (DOCX) sang PDF. Bảo toàn định dạng và bố cục trong tài liệu đã chuyển đổi của bạn.',
    keywords: ['word sang pdf', 'docx sang pdf', 'chuyển đổi word', 'trình chuyển đổi word', 'microsoft word sang pdf'],
    description: `
      <p>Word sang PDF chuyển đổi tài liệu Microsoft Word thành định dạng PDF trong khi bảo toàn định dạng, bố cục và cấu trúc nội dung gốc.</p>
      <p>Tải lên tệp DOCX của bạn và nhận đầu ra PDF chất lượng cao phù hợp để chia sẻ, in ấn hoặc lưu trữ. Việc chuyển đổi duy trì định dạng văn bản, kiểu đoạn văn và cấu trúc tài liệu cơ bản.</p>
      <p>Tất cả chuyển đổi diễn ra cục bộ trong trình duyệt của bạn, đảm bảo tài liệu của bạn không bao giờ rời khỏi thiết bị của bạn.</p>
    `,
    howToUse: [
      { step: 1, title: 'Tải lên tài liệu Word', description: 'Kéo và thả tệp .docx của bạn hoặc nhấp để chọn từ thiết bị của bạn.' },
      { step: 2, title: 'Chờ xử lý', description: 'Công cụ sẽ tải tài liệu và chuẩn bị chuyển đổi.' },
      { step: 3, title: 'Tải xuống PDF', description: 'Nhấp Tải xuống để lưu tài liệu PDF đã chuyển đổi của bạn.' },
    ],
    useCases: [
      { title: 'Chia sẻ tài liệu', description: 'Chuyển đổi tài liệu Word sang PDF để chia sẻ và xem phổ quát.', icon: 'share-2' },
      { title: 'Chuẩn bị in ấn', description: 'Tạo PDF sẵn sàng in từ tài liệu Word.', icon: 'printer' },
      { title: 'Lưu trữ tài liệu', description: 'Lưu trữ tài liệu Word ở định dạng PDF ổn định để lưu trữ lâu dài.', icon: 'archive' },
    ],
    faq: [
      { question: 'Định dạng .doc có được hỗ trợ không?', answer: 'Hiện tại chỉ định dạng .docx được hỗ trợ. Vui lòng chuyển đổi tệp .doc sang .docx trước bằng Microsoft Word hoặc LibreOffice.' },
      { question: 'Hình ảnh có được bảo toàn không?', answer: 'Nội dung văn bản và định dạng cơ bản được bảo toàn. Bố cục phức tạp với nhiều hình ảnh có thể có kết xuất đơn giản hóa.' },
      { question: 'Việc chuyển đổi có an toàn không?', answer: 'Có, tất cả xử lý diễn ra trong trình duyệt của bạn. Tài liệu của bạn không bao giờ được tải lên máy chủ nào.' },
    ],
  },

  'excel-to-pdf': {
    title: 'Excel sang PDF',
    metaDescription: 'Chuyển đổi bảng tính Excel (XLSX) sang PDF. Bảo toàn bảng và dữ liệu trong tài liệu đã chuyển đổi của bạn.',
    keywords: ['excel sang pdf', 'xlsx sang pdf', 'chuyển đổi excel', 'bảng tính sang pdf', 'microsoft excel sang pdf'],
    description: `
      <p>Excel sang PDF chuyển đổi bảng tính Microsoft Excel thành định dạng PDF trong khi bảo toàn cấu trúc bảng và tổ chức dữ liệu.</p>
      <p>Tải lên tệp XLSX của bạn và nhận đầu ra PDF sạch với bảng được định dạng đúng. Mỗi trang tính trong sổ làm việc của bạn trở thành một phần riêng biệt trong PDF.</p>
      <p>Tất cả chuyển đổi diễn ra cục bộ trong trình duyệt của bạn, đảm bảo dữ liệu của bạn vẫn riêng tư và an toàn.</p>
    `,
    howToUse: [
      { step: 1, title: 'Tải lên tệp Excel', description: 'Kéo và thả tệp .xlsx của bạn hoặc nhấp để chọn từ thiết bị của bạn.' },
      { step: 2, title: 'Chờ xử lý', description: 'Công cụ sẽ tải bảng tính và chuyển đổi tất cả trang tính.' },
      { step: 3, title: 'Tải xuống PDF', description: 'Nhấp Tải xuống để lưu tài liệu PDF đã chuyển đổi của bạn.' },
    ],
    useCases: [
      { title: 'Chia sẻ báo cáo', description: 'Chuyển đổi báo cáo Excel sang PDF để phân phối cho các bên liên quan.', icon: 'file-text' },
      { title: 'Lưu trữ dữ liệu', description: 'Lưu trữ dữ liệu bảng tính ở định dạng PDF ổn định.', icon: 'archive' },
      { title: 'Chuẩn bị in ấn', description: 'Tạo PDF sẵn sàng in từ trang tính Excel.', icon: 'printer' },
    ],
    faq: [
      { question: 'Nhiều trang tính có được hỗ trợ không?', answer: 'Có, tất cả trang tính trong sổ làm việc được chuyển đổi và bao gồm trong PDF.' },
      { question: 'Định dạng .xls có được hỗ trợ không?', answer: 'Hiện tại chỉ định dạng .xlsx được hỗ trợ. Vui lòng lưu tệp .xls dưới dạng .xlsx trước.' },
      { question: 'Công thức có được bảo toàn không?', answer: 'PDF hiển thị giá trị được tính toán. Công thức không thể thực thi được trong định dạng PDF.' },
    ],
  },

  'pptx-to-pdf': {
    title: 'PowerPoint sang PDF',
    metaDescription: 'Chuyển đổi bản trình bày PowerPoint (PPTX) sang PDF. Bảo toàn trang trình bày và nội dung để chia sẻ dễ dàng.',
    keywords: ['powerpoint sang pdf', 'pptx sang pdf', 'chuyển đổi pptx', 'bản trình bày sang pdf', 'trang trình bày sang pdf'],
    description: `
      <p>PowerPoint sang PDF chuyển đổi bản trình bày Microsoft PowerPoint thành định dạng PDF, bảo toàn nội dung trang trình bày để chia sẻ và xem dễ dàng.</p>
      <p>Mỗi trang trình bày trở thành một trang trong PDF, duy trì luồng bản trình bày. Hoàn hảo để chia sẻ bản trình bày với những người không có PowerPoint.</p>
      <p>Tất cả chuyển đổi diễn ra cục bộ trong trình duyệt của bạn, đảm bảo bản trình bày của bạn vẫn riêng tư và an toàn.</p>
    `,
    howToUse: [
      { step: 1, title: 'Tải lên tệp PowerPoint', description: 'Kéo và thả tệp .pptx của bạn hoặc nhấp để chọn từ thiết bị của bạn.' },
      { step: 2, title: 'Chờ xử lý', description: 'Công cụ sẽ trích xuất nội dung trang trình bày và tạo PDF.' },
      { step: 3, title: 'Tải xuống PDF', description: 'Nhấp Tải xuống để lưu tài liệu PDF đã chuyển đổi của bạn.' },
    ],
    useCases: [
      { title: 'Chia sẻ bản trình bày', description: 'Chia sẻ bản trình bày với bất kỳ ai mà không yêu cầu PowerPoint.', icon: 'share-2' },
      { title: 'Tạo tài liệu phân phát', description: 'Tạo tài liệu phân phát PDF từ trang trình bày của bạn.', icon: 'file-text' },
      { title: 'Lưu trữ bản trình bày', description: 'Lưu trữ bản trình bày ở định dạng PDF ổn định.', icon: 'archive' },
    ],
    faq: [
      { question: 'Hoạt hình có được bảo toàn không?', answer: 'PDF là định dạng tĩnh, vì vậy hoạt hình và chuyển tiếp không được bảo toàn. Mỗi trang trình bày trở thành một trang tĩnh.' },
      { question: 'Định dạng .ppt có được hỗ trợ không?', answer: 'Hiện tại chỉ định dạng .pptx được hỗ trợ. Vui lòng chuyển đổi tệp .ppt sang .pptx trước.' },
      { question: 'Ghi chú của người trình bày có được bao gồm không?', answer: 'Hiện tại, ghi chú của người trình bày không được bao gồm trong đầu ra PDF.' },
    ],
  },

  'xps-to-pdf': {
    title: 'XPS sang PDF',
    metaDescription: 'Chuyển đổi tài liệu XPS sang định dạng PDF. Chuyển đổi độ trung thực cao bảo toàn bố cục và đồ họa.',
    keywords: ['xps sang pdf', 'chuyển đổi xps', 'trình chuyển đổi xps', 'microsoft xps sang pdf', 'oxps sang pdf'],
    description: `
      <p>XPS sang PDF chuyển đổi tài liệu Microsoft XPS (XML Paper Specification) thành định dạng PDF trong khi bảo toàn bố cục, văn bản và đồ họa vector gốc.</p>
      <p>XPS là định dạng tài liệu cố định tương tự như PDF. Công cụ này cung cấp chuyển đổi độ trung thực cao bằng cách phân tích cú pháp XPS gốc, đảm bảo tái tạo chính xác tài liệu của bạn.</p>
      <p>Tất cả chuyển đổi diễn ra cục bộ trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư và an toàn.</p>
    `,
    howToUse: [
      { step: 1, title: 'Tải lên tệp XPS', description: 'Kéo và thả tệp .xps của bạn hoặc nhấp để chọn từ thiết bị của bạn.' },
      { step: 2, title: 'Chờ xử lý', description: 'Công cụ sẽ phân tích cú pháp và chuyển đổi tài liệu XPS.' },
      { step: 3, title: 'Tải xuống PDF', description: 'Nhấp Tải xuống để lưu tài liệu PDF đã chuyển đổi của bạn.' },
    ],
    useCases: [
      { title: 'Chuyển đổi định dạng', description: 'Chuyển đổi tài liệu XPS sang định dạng PDF được hỗ trợ rộng hơn.', icon: 'file' },
      { title: 'Chia sẻ tài liệu', description: 'Chia sẻ tài liệu XPS với người dùng không có trình xem XPS.', icon: 'share-2' },
      { title: 'Di chuyển lưu trữ', description: 'Di chuyển lưu trữ XPS sang PDF để tương thích tốt hơn.', icon: 'archive' },
    ],
    faq: [
      { question: 'Định dạng XPS là gì?', answer: 'XPS (XML Paper Specification) là định dạng tài liệu cố định của Microsoft, thường được sử dụng cho in ấn Windows.' },
      { question: 'Việc chuyển đổi có không mất mát không?', answer: 'Có, việc chuyển đổi bảo toàn văn bản, đồ họa và bố cục với độ trung thực cao.' },
      { question: 'Tệp XPS đa trang có được hỗ trợ không?', answer: 'Có, tất cả trang trong tài liệu XPS được chuyển đổi sang PDF.' },
    ],
  },

  'rtf-to-pdf': {
    title: 'RTF sang PDF',
    metaDescription: 'Chuyển đổi tệp RTF (Rich Text Format) sang PDF. Bảo toàn định dạng văn bản trong tài liệu của bạn.',
    keywords: ['rtf sang pdf', 'chuyển đổi rtf', 'văn bản giàu sang pdf', 'trình chuyển đổi rtf'],
    description: `
      <p>RTF sang PDF chuyển đổi tệp Rich Text Format thành tài liệu PDF. RTF là định dạng văn bản được hỗ trợ rộng rãi bao gồm định dạng cơ bản như phông chữ, màu sắc và kiểu dáng.</p>
      <p>Tải lên tệp RTF của bạn và nhận đầu ra PDF sạch trong khi bảo toàn nội dung văn bản và định dạng cơ bản. Hoàn hảo để chuyển đổi tài liệu kế thừa sang định dạng PDF hiện đại.</p>
      <p>Tất cả chuyển đổi diễn ra cục bộ trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư và an toàn.</p>
    `,
    howToUse: [
      { step: 1, title: 'Tải lên tệp RTF', description: 'Kéo và thả tệp .rtf của bạn hoặc nhấp để chọn từ thiết bị của bạn.' },
      { step: 2, title: 'Chờ xử lý', description: 'Công cụ sẽ phân tích cú pháp và chuyển đổi nội dung RTF.' },
      { step: 3, title: 'Tải xuống PDF', description: 'Nhấp Tải xuống để lưu tài liệu PDF đã chuyển đổi của bạn.' },
    ],
    useCases: [
      { title: 'Chuyển đổi kế thừa', description: 'Chuyển đổi tài liệu RTF cũ sang định dạng PDF hiện đại.', icon: 'history' },
      { title: 'Chia sẻ tài liệu', description: 'Chia sẻ tài liệu RTF ở định dạng PDF có thể xem phổ quát.', icon: 'share-2' },
      { title: 'Lưu trữ tài liệu', description: 'Lưu trữ tệp RTF ở định dạng PDF ổn định để lưu trữ lâu dài.', icon: 'archive' },
    ],
    faq: [
      { question: 'Định dạng nào được bảo toàn?', answer: 'Định dạng văn bản cơ bản bao gồm phông chữ, đoạn văn và kiểu dáng được chuyển đổi. Tính năng RTF phức tạp có thể được đơn giản hóa.' },
      { question: 'Tôi có thể chuyển đổi nhiều tệp RTF cùng lúc không?', answer: 'Hiện tại, một tệp được chuyển đổi tại một thời điểm. Sử dụng Hợp nhất PDF để kết hợp nhiều tệp đã chuyển đổi.' },
      { question: 'Hình ảnh nhúng có được hỗ trợ không?', answer: 'Nội dung văn bản là trọng tâm chính. Đối tượng nhúng có thể không được kết xuất.' },
    ],
  },

  'epub-to-pdf': {
    title: 'EPUB sang PDF',
    metaDescription: 'Chuyển đổi sách điện tử EPUB sang PDF. Bảo toàn định dạng, hình ảnh và cấu trúc chương.',
    keywords: ['epub sang pdf', 'chuyển đổi epub', 'sách điện tử sang pdf', 'trình chuyển đổi epub'],
    description: `
      <p>EPUB sang PDF chuyển đổi tệp sách điện tử thành tài liệu PDF chất lượng cao. EPUB là định dạng sách điện tử phổ biến nhất, được sử dụng bởi hầu hết các thiết bị đọc sách điện tử và thư viện kỹ thuật số.</p>
      <p>Công cụ này bảo toàn định dạng văn bản, hình ảnh và cấu trúc chương của sách điện tử của bạn. Hoàn hảo để in ấn, lưu trữ hoặc chia sẻ sách điện tử ở định dạng có thể xem phổ quát.</p>
      <p>Tất cả chuyển đổi diễn ra cục bộ trong trình duyệt của bạn bằng công nghệ kết xuất nâng cao, đảm bảo sách của bạn vẫn riêng tư và chuyển đổi nhanh chóng.</p>
    `,
    howToUse: [
      { step: 1, title: 'Tải lên tệp EPUB', description: 'Kéo và thả tệp .epub của bạn hoặc nhấp để chọn từ thiết bị của bạn.' },
      { step: 2, title: 'Chờ chuyển đổi', description: 'Công cụ sẽ kết xuất và chuyển đổi tất cả trang của sách điện tử của bạn.' },
      { step: 3, title: 'Tải xuống PDF', description: 'Nhấp Tải xuống để lưu tài liệu PDF đã chuyển đổi của bạn.' },
    ],
    useCases: [
      { title: 'In sách điện tử', description: 'Chuyển đổi sách điện tử sang PDF để in ấn vật lý.', icon: 'printer' },
      { title: 'Lưu trữ sách', description: 'Lưu trữ sách điện tử ở định dạng PDF ổn định lâu dài.', icon: 'archive' },
      { title: 'Chia sẻ tài liệu', description: 'Chia sẻ sách điện tử với bất kỳ ai, ngay cả khi không có thiết bị đọc sách điện tử.', icon: 'share-2' },
    ],
    faq: [
      { question: 'Định dạng có được bảo toàn không?', answer: 'Có! Công cụ này sử dụng kết xuất EPUB gốc, bảo toàn định dạng văn bản, hình ảnh và bố cục với độ trung thực cao.' },
      { question: 'Sách điện tử được bảo vệ DRM có được hỗ trợ không?', answer: 'Không, sách điện tử được bảo vệ DRM không thể chuyển đổi. Chỉ tệp EPUB không DRM được hỗ trợ.' },
      { question: 'Kích thước trang được xác định như thế nào?', answer: 'Nội dung EPUB được kết xuất thành kích thước trang A4 tiêu chuẩn để đọc tối ưu.' },
    ],
  },

  'mobi-to-pdf': {
    title: 'MOBI sang PDF',
    metaDescription: 'Chuyển đổi sách điện tử MOBI sang PDF. Hỗ trợ định dạng Kindle với kết xuất chất lượng cao.',
    keywords: ['mobi sang pdf', 'chuyển đổi mobi', 'kindle sang pdf', 'azw sang pdf', 'trình chuyển đổi mobi'],
    description: `
      <p>MOBI sang PDF chuyển đổi tệp sách điện tử Amazon Kindle thành tài liệu PDF chất lượng cao. MOBI (bao gồm AZW và AZW3) là định dạng sách điện tử độc quyền của Amazon được sử dụng trên thiết bị Kindle.</p>
      <p>Công cụ này bảo toàn định dạng văn bản, hình ảnh và cấu trúc của sách Kindle của bạn. Hoàn hảo để in ấn, lưu trữ hoặc đọc sách Kindle trên thiết bị không hỗ trợ MOBI.</p>
      <p>Tất cả chuyển đổi diễn ra cục bộ trong trình duyệt của bạn bằng công nghệ kết xuất nâng cao, đảm bảo sách của bạn vẫn riêng tư.</p>
    `,
    howToUse: [
      { step: 1, title: 'Tải lên tệp MOBI', description: 'Kéo và thả tệp .mobi, .azw hoặc .azw3 của bạn hoặc nhấp để chọn từ thiết bị của bạn.' },
      { step: 2, title: 'Chờ chuyển đổi', description: 'Công cụ sẽ kết xuất và chuyển đổi tất cả trang của sách điện tử của bạn.' },
      { step: 3, title: 'Tải xuống PDF', description: 'Nhấp Tải xuống để lưu tài liệu PDF đã chuyển đổi của bạn.' },
    ],
    useCases: [
      { title: 'In sách Kindle', description: 'Chuyển đổi sách điện tử Kindle sang PDF để in ấn vật lý.', icon: 'printer' },
      { title: 'Lưu trữ sách', description: 'Lưu trữ sách Kindle ở định dạng PDF phổ quát.', icon: 'archive' },
      { title: 'Đọc đa thiết bị', description: 'Đọc sách Kindle trên thiết bị chỉ hỗ trợ PDF.', icon: 'tablet-smartphone' },
    ],
    faq: [
      { question: 'Định dạng MOBI nào được hỗ trợ?', answer: 'Công cụ này hỗ trợ .mobi, .azw và .azw3 (phiên bản không DRM).' },
      { question: 'Sách Kindle được bảo vệ DRM có được hỗ trợ không?', answer: 'Không, sách điện tử được bảo vệ DRM không thể chuyển đổi. Chỉ tệp không DRM được hỗ trợ.' },
      { question: 'Định dạng của tôi có được bảo toàn không?', answer: 'Có! Công cụ sử dụng kết xuất MOBI gốc để bảo toàn văn bản, hình ảnh và bố cục.' },
    ],
  },

  'djvu-to-pdf': {
    title: 'DJVU sang PDF',
    metaDescription: 'Chuyển đổi tệp tài liệu DJVU sang PDF. Kết xuất chất lượng cao cho tài liệu đã quét và sách.',
    keywords: ['djvu sang pdf', 'chuyển đổi djvu', 'trình chuyển đổi djvu', 'djvu pdf', 'djv sang pdf'],
    description: `
      <p>DJVU sang PDF chuyển đổi tệp tài liệu DjVu thành tài liệu PDF chất lượng cao. DjVu là định dạng tệp máy tính được thiết kế chủ yếu để lưu trữ tài liệu đã quét, đặc biệt là những tài liệu chứa sự kết hợp của văn bản, bản vẽ đường và ảnh chụp.</p>
      <p>Công cụ này kết xuất từng trang của tệp DJVU của bạn ở DPI (điểm trên inch) đã chọn và kết hợp chúng thành tài liệu PDF có thể tìm kiếm. Hoàn hảo để chuyển đổi sách đã quét, hướng dẫn kỹ thuật và tài liệu lưu trữ.</p>
      <p>Tất cả chuyển đổi diễn ra cục bộ trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư và an toàn.</p>
    `,
    howToUse: [
      { step: 1, title: 'Tải lên tệp DJVU', description: 'Kéo và thả tệp .djvu hoặc .djv của bạn, hoặc nhấp để chọn từ thiết bị của bạn.' },
      { step: 2, title: 'Định cấu hình tùy chọn', description: 'Chọn DPI đầu ra (72, 150 hoặc 300) và chất lượng hình ảnh cho PDF.' },
      { step: 3, title: 'Chuyển đổi & Tải xuống', description: 'Nhấp Chuyển đổi sang PDF và tải xuống tài liệu đã chuyển đổi của bạn.' },
    ],
    useCases: [
      { title: 'Lưu trữ tài liệu', description: 'Chuyển đổi lưu trữ DJVU sang định dạng PDF phổ quát.', icon: 'archive' },
      { title: 'Chia sẻ sách đã quét', description: 'Chia sẻ sách đã quét ở định dạng PDF để tương thích rộng hơn.', icon: 'share-2' },
      { title: 'In tài liệu', description: 'Chuyển đổi DJVU sang PDF chất lượng cao để in ấn.', icon: 'printer' },
    ],
    faq: [
      { question: 'Định dạng DJVU là gì?', answer: 'DjVu là định dạng tệp được thiết kế để lưu trữ tài liệu đã quét, đặc biệt là những tài liệu có văn bản, bản vẽ và hình ảnh. Nó cung cấp nén tốt hơn PDF cho nội dung đã quét.' },
      { question: 'Tôi nên chọn DPI nào?', answer: '72 DPI phù hợp cho xem web, 150 DPI cho tài liệu tiêu chuẩn, và 300 DPI cho in ấn chất lượng cao.' },
      { question: 'Văn bản có thể tìm kiếm không?', answer: 'Văn bản được kết xuất dưới dạng hình ảnh. Nếu bạn cần văn bản có thể tìm kiếm, hãy sử dụng công cụ OCR PDF của chúng tôi sau khi chuyển đổi.' },
    ],
  },

  'fb2-to-pdf': {
    title: 'FB2 sang PDF',
    metaDescription: 'Chuyển đổi sách điện tử FictionBook (FB2) sang PDF. Hỗ trợ nhiều tệp với kết xuất chất lượng cao.',
    keywords: ['fb2 sang pdf', 'chuyển đổi fb2', 'fictionbook sang pdf', 'trình chuyển đổi fb2', 'fb2.zip sang pdf'],
    description: `
      <p>FB2 sang PDF chuyển đổi tệp sách điện tử FictionBook (FB2) thành tài liệu PDF chất lượng cao. FB2 là định dạng sách điện tử XML phổ biến được sử dụng rộng rãi ở Nga và Đông Âu.</p>
      <p>Công cụ này hỗ trợ cả tệp .fb2 và .fb2.zip, và có thể xử lý nhiều tệp cùng lúc. Nó bảo toàn định dạng văn bản, hình ảnh và cấu trúc chương của sách điện tử của bạn.</p>
      <p>Tất cả chuyển đổi diễn ra cục bộ trong trình duyệt của bạn bằng công nghệ kết xuất nâng cao, đảm bảo sách của bạn vẫn riêng tư và chuyển đổi nhanh chóng.</p>
    `,
    howToUse: [
      { step: 1, title: 'Tải lên tệp FB2', description: 'Kéo và thả một hoặc nhiều tệp .fb2 hoặc .fb2.zip, hoặc nhấp để chọn từ thiết bị của bạn.' },
      { step: 2, title: 'Chọn chất lượng', description: 'Chọn chất lượng đầu ra: Thấp (72 DPI), Trung bình (150 DPI) hoặc Cao (300 DPI).' },
      { step: 3, title: 'Chuyển đổi & Tải xuống', description: 'Nhấp Chuyển đổi sang PDF và tải xuống tài liệu đã chuyển đổi của bạn.' },
    ],
    useCases: [
      { title: 'In sách điện tử', description: 'Chuyển đổi sách điện tử FB2 sang PDF để in ấn vật lý.', icon: 'printer' },
      { title: 'Chuyển đổi hàng loạt', description: 'Chuyển đổi nhiều tệp FB2 sang PDF cùng lúc.', icon: 'layers' },
      { title: 'Định dạng phổ quát', description: 'Chia sẻ sách điện tử ở định dạng PDF hoạt động trên mọi thiết bị.', icon: 'share-2' },
    ],
    faq: [
      { question: 'Tôi có thể chuyển đổi nhiều tệp FB2 cùng lúc không?', answer: 'Có! Công cụ này hỗ trợ chuyển đổi hàng loạt lên đến 20 tệp FB2 cùng lúc.' },
      { question: 'Tệp .fb2.zip có được hỗ trợ không?', answer: 'Có, công cụ tự động trích xuất và chuyển đổi tệp FB2 từ kho lưu trữ .fb2.zip.' },
      { question: 'Định dạng có được bảo toàn không?', answer: 'Có! Công cụ sử dụng kết xuất FB2 gốc, bảo toàn định dạng văn bản, hình ảnh và cấu trúc chương với độ trung thực cao.' },
    ],
  },

  // ==================== CHUYỂN ĐỔI TỪ PDF ====================

  'pdf-to-jpg': {
    title: 'PDF sang JPG',
    metaDescription: 'Chuyển đổi trang PDF sang hình ảnh JPG. Trích xuất chất lượng cao với DPI có thể tùy chỉnh.',
    keywords: ['pdf sang jpg', 'pdf sang jpeg', 'chuyển đổi pdf sang hình ảnh', 'trích xuất hình ảnh pdf'],
    description: `
      <p>PDF sang JPG chuyển đổi trang tài liệu PDF thành hình ảnh JPG chất lượng cao. Trích xuất tất cả trang hoặc chọn trang cụ thể để chuyển đổi, với cài đặt DPI và chất lượng có thể tùy chỉnh.</p>
      <p>Hoàn hảo để trích xuất hình ảnh từ PDF, tạo hình thu nhỏ hoặc chuyển đổi tài liệu để sử dụng web.</p>
      <p>Tất cả chuyển đổi diễn ra trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư.</p>
    `,
    howToUse: [
      { step: 1, title: 'Tải lên PDF của bạn', description: 'Kéo và thả tệp PDF của bạn hoặc nhấp để chọn.' },
      { step: 2, title: 'Chọn trang và chất lượng', description: 'Chọn trang nào để chuyển đổi và đặt tùy chọn DPI/chất lượng.' },
      { step: 3, title: 'Chuyển đổi và tải xuống', description: 'Nhấp Chuyển đổi để trích xuất hình ảnh và tải xuống dưới dạng ZIP.' },
    ],
    useCases: [
      { title: 'Xuất bản web', description: 'Chuyển đổi trang PDF sang hình ảnh để sử dụng trên trang web.', icon: 'globe' },
      { title: 'Mạng xã hội', description: 'Trích xuất trang dưới dạng hình ảnh để chia sẻ trên mạng xã hội.', icon: 'share-2' },
      { title: 'Bản trình bày', description: 'Chuyển đổi trang trình bày PDF sang hình ảnh cho bản trình bày.', icon: 'presentation' },
    ],
    faq: [
      { question: 'Cài đặt chất lượng nào có sẵn?', answer: 'Bạn có thể đặt DPI từ 72 đến 300 và chất lượng JPEG từ 1-100.' },
      { question: 'Tôi có thể chuyển đổi chỉ trang cụ thể không?', answer: 'Có, bạn có thể chọn trang riêng lẻ hoặc phạm vi trang để chuyển đổi.' },
      { question: 'Trang nhiều được xử lý như thế nào?', answer: 'Mỗi trang trở thành một tệp JPG riêng biệt, được tải xuống dưới dạng kho lưu trữ ZIP.' },
    ],
  },

  'pdf-to-png': {
    title: 'PDF sang PNG',
    metaDescription: 'Chuyển đổi trang PDF sang hình ảnh PNG. Chất lượng không mất mát với hỗ trợ độ trong suốt.',
    keywords: ['pdf sang png', 'chuyển đổi pdf sang png', 'trích xuất hình ảnh pdf', 'chuyển đổi pdf không mất mát'],
    description: `
      <p>PDF sang PNG chuyển đổi trang tài liệu PDF thành hình ảnh PNG chất lượng cao với nén không mất mát. Định dạng PNG bảo toàn chất lượng hình ảnh hoàn hảo và hỗ trợ độ trong suốt.</p>
      <p>Lý tưởng để trích xuất đồ họa, sơ đồ hoặc bất kỳ nội dung nào mà việc bảo toàn chất lượng là quan trọng.</p>
      <p>Tất cả chuyển đổi diễn ra trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư.</p>
    `,
    howToUse: [
      { step: 1, title: 'Tải lên PDF của bạn', description: 'Kéo và thả tệp PDF của bạn hoặc nhấp để chọn.' },
      { step: 2, title: 'Định cấu hình tùy chọn', description: 'Chọn trang và đặt cài đặt DPI (điểm trên inch).' },
      { step: 3, title: 'Chuyển đổi và tải xuống', description: 'Nhấp Chuyển đổi để trích xuất hình ảnh PNG.' },
    ],
    useCases: [
      { title: 'Trích xuất đồ họa', description: 'Trích xuất sơ đồ và đồ họa với chất lượng hoàn hảo.', icon: 'image' },
      { title: 'Tài sản thiết kế', description: 'Chuyển đổi PDF thiết kế sang PNG cho phần mềm chỉnh sửa.', icon: 'palette' },
      { title: 'Tài liệu', description: 'Tạo hình ảnh chất lượng cao cho tài liệu kỹ thuật.', icon: 'file-text' },
    ],
    faq: [
      { question: 'Tại sao chọn PNG thay vì JPG?', answer: 'PNG cung cấp nén không mất mát và hỗ trợ độ trong suốt, lý tưởng cho đồ họa và văn bản.' },
      { question: 'Độ trong suốt nền có được hỗ trợ không?', answer: 'Có, trang PDF với độ trong suốt được bảo toàn trong đầu ra PNG.' },
      { question: 'Tôi nên dùng DPI nào?', answer: 'Dùng 150 DPI cho xem màn hình, 300 DPI cho in ấn.' },
    ],
  },

  'pdf-to-webp': {
    title: 'PDF sang WebP',
    metaDescription: 'Chuyển đổi trang PDF sang hình ảnh WebP. Định dạng hiện đại với nén tuyệt vời.',
    keywords: ['pdf sang webp', 'chuyển đổi pdf sang webp', 'định dạng hình ảnh hiện đại', 'hình ảnh web được tối ưu hóa'],
    description: `
      <p>PDF sang WebP chuyển đổi trang tài liệu PDF thành hình ảnh WebP, định dạng hình ảnh hiện đại của Google cung cấp nén tuyệt vời với chất lượng cao.</p>
      <p>Hình ảnh WebP nhỏ hơn JPG hoặc PNG trong khi duy trì chất lượng tương đương, khiến chúng lý tưởng cho sử dụng web.</p>
      <p>Tất cả chuyển đổi diễn ra trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư.</p>
    `,
    howToUse: [
      { step: 1, title: 'Tải lên PDF của bạn', description: 'Kéo và thả tệp PDF của bạn hoặc nhấp để chọn.' },
      { step: 2, title: 'Đặt tùy chọn chất lượng', description: 'Chọn trang và đặt cài đặt chất lượng/nén.' },
      { step: 3, title: 'Chuyển đổi và tải xuống', description: 'Nhấp Chuyển đổi để tạo hình ảnh WebP.' },
    ],
    useCases: [
      { title: 'Tối ưu hóa web', description: 'Tạo hình ảnh web được tối ưu hóa từ nội dung PDF.', icon: 'globe' },
      { title: 'Tiết kiệm băng thông', description: 'Giảm kích thước tệp hình ảnh để tải nhanh hơn.', icon: 'zap' },
      { title: 'Trang web hiện đại', description: 'Sử dụng định dạng hình ảnh hiện đại cho dự án web đương đại.', icon: 'layout' },
    ],
    faq: [
      { question: 'Định dạng WebP là gì?', answer: 'WebP là định dạng hình ảnh của Google cung cấp nén vượt trội.' },
      { question: 'WebP có được hỗ trợ rộng rãi không?', answer: 'Có, tất cả trình duyệt hiện đại hỗ trợ định dạng WebP.' },
      { question: 'Hình ảnh WebP nhỏ hơn bao nhiêu?', answer: 'Hình ảnh WebP thường nhỏ hơn 25-35% so với hình ảnh JPG tương đương.' },
    ],
  },

  'pdf-to-bmp': {
    title: 'PDF sang BMP',
    metaDescription: 'Chuyển đổi trang PDF sang hình ảnh bitmap BMP. Định dạng không nén để tương thích tối đa.',
    keywords: ['pdf sang bmp', 'chuyển đổi pdf sang bitmap', 'hình ảnh không nén', 'định dạng kế thừa'],
    description: `
      <p>PDF sang BMP chuyển đổi trang tài liệu PDF thành hình ảnh bitmap BMP. BMP là định dạng không nén đảm bảo tương thích tối đa với hệ thống và ứng dụng kế thừa.</p>
      <p>Mặc dù tệp BMP lớn hơn định dạng nén, chúng cung cấp chất lượng hoàn hảo và tương thích phổ quát.</p>
      <p>Tất cả chuyển đổi diễn ra trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư.</p>
    `,
    howToUse: [
      { step: 1, title: 'Tải lên PDF của bạn', description: 'Kéo và thả tệp PDF của bạn hoặc nhấp để chọn.' },
      { step: 2, title: 'Chọn trang', description: 'Chọn trang nào để chuyển đổi và đặt DPI.' },
      { step: 3, title: 'Chuyển đổi và tải xuống', description: 'Nhấp Chuyển đổi để tạo hình ảnh BMP.' },
    ],
    useCases: [
      { title: 'Hệ thống kế thừa', description: 'Tạo hình ảnh tương thích với phần mềm cũ.', icon: 'history' },
      { title: 'Ứng dụng Windows', description: 'Tạo tệp BMP cho ứng dụng cụ thể của Windows.', icon: 'monitor' },
      { title: 'Lưu trữ không nén', description: 'Tạo lưu trữ hình ảnh không nén từ PDF.', icon: 'archive' },
    ],
    faq: [
      { question: 'Tại sao dùng định dạng BMP?', answer: 'BMP cung cấp chất lượng không nén và tương thích tối đa với hệ thống kế thừa.' },
      { question: 'Tệp BMP có lớn không?', answer: 'Có, tệp BMP không nén và lớn đáng kể hơn JPG hoặc PNG.' },
      { question: 'Độ sâu màu nào được hỗ trợ?', answer: 'Độ sâu màu 24-bit và 32-bit được hỗ trợ.' },
    ],
  },

  'pdf-to-tiff': {
    title: 'PDF sang TIFF',
    metaDescription: 'Chuyển đổi PDF sang hình ảnh TIFF. Chất lượng chuyên nghiệp với hỗ trợ đa trang.',
    keywords: ['pdf sang tiff', 'chuyển đổi pdf sang tiff', 'hình ảnh chuyên nghiệp', 'tiff đa trang'],
    description: `
      <p>PDF sang TIFF chuyển đổi tài liệu PDF thành hình ảnh TIFF chất lượng cao. TIFF là định dạng ưa thích cho in ấn chuyên nghiệp và lưu trữ do nén không mất mát.</p>
      <p>Tạo tệp TIFF trang đơn hoặc kết hợp tất cả trang thành một tệp TIFF đa trang. Hoàn hảo cho mục đích chuyên nghiệp và lưu trữ.</p>
      <p>Tất cả chuyển đổi diễn ra trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư.</p>
    `,
    howToUse: [
      { step: 1, title: 'Tải lên PDF của bạn', description: 'Kéo và thả tệp PDF của bạn hoặc nhấp để chọn.' },
      { step: 2, title: 'Định cấu hình đầu ra', description: 'Chọn TIFF trang đơn hoặc đa trang và đặt DPI.' },
      { step: 3, title: 'Chuyển đổi và tải xuống', description: 'Nhấp Chuyển đổi để tạo hình ảnh TIFF.' },
    ],
    useCases: [
      { title: 'In ấn chuyên nghiệp', description: 'Tạo tệp TIFF sẵn sàng in từ tài liệu PDF.', icon: 'printer' },
      { title: 'Lưu trữ tài liệu', description: 'Lưu trữ tài liệu ở định dạng TIFF chất lượng cao.', icon: 'archive' },
      { title: 'Xuất bản', description: 'Chuyển đổi PDF sang TIFF cho quy trình xuất bản.', icon: 'book' },
    ],
    faq: [
      { question: 'Tôi có thể tạo TIFF đa trang không?', answer: 'Có, bạn có thể kết hợp tất cả trang PDF thành một tệp TIFF đa trang duy nhất.' },
      { question: 'Tùy chọn nén nào có sẵn?', answer: 'Tùy chọn LZW, ZIP và không nén có sẵn.' },
      { question: 'Tôi nên dùng DPI nào cho in ấn?', answer: 'Dùng 300 DPI hoặc cao hơn cho in ấn chuyên nghiệp.' },
    ],
  },

  'pdf-to-svg': {
    title: 'PDF sang SVG',
    metaDescription: 'Chuyển đổi trang PDF sang đồ họa vector SVG. Khả năng mở rộng hoàn hảo ở mọi kích thước với xuất trang riêng lẻ.',
    keywords: ['pdf sang svg', 'chuyển đổi pdf sang svg', 'đồ họa vector', 'pdf có thể mở rộng', 'trình chuyển đổi svg'],
    description: `
      <p>PDF sang SVG chuyển đổi từng trang của PDF tài liệu thành đồ họa vector có thể mở rộng (SVG). SVG là định dạng hình ảnh vector có thể mở rộng hoàn hảo ở mọi mức thu phóng hoặc kích thước in.</p>
      <p>Không giống như định dạng raster (JPG, PNG), đồ họa SVG không bao giờ trở nên pixelated khi được mở rộng. Điều này làm cho chúng lý tưởng cho logo, sơ đồ, bản vẽ kỹ thuật và bất kỳ nội dung nào cần được hiển thị ở các kích thước khác nhau.</p>
      <p>Xem trước từng trang đã chuyển đổi và tải xuống chúng riêng lẻ hoặc dưới dạng tệp ZIP. Tất cả xử lý diễn ra cục bộ trong trình duyệt của bạn, đảm bảo quyền riêng tư hoàn toàn cho tài liệu của bạn.</p>
    `,
    howToUse: [
      { step: 1, title: 'Tải lên PDF của bạn', description: 'Kéo và thả tệp PDF của bạn hoặc nhấp để duyệt và chọn.' },
      { step: 2, title: 'Định cấu hình tùy chọn', description: 'Đặt chất lượng DPI và tùy chọn chỉ định phạm vi trang.' },
      { step: 3, title: 'Xem trước và chuyển đổi', description: 'Nhấp Chuyển đổi để xử lý. Nhấp vào hình thu nhỏ để xem trang SVG ở kích thước đầy đủ.' },
      { step: 4, title: 'Tải xuống', description: 'Tải xuống tệp SVG riêng lẻ hoặc tất cả dưới dạng kho lưu trữ ZIP.' },
    ],
    useCases: [
      { title: 'Logo và đồ họa', description: 'Trích xuất logo và đồ họa vector từ PDF để sử dụng lại trong phần mềm thiết kế.', icon: 'pen-tool' },
      { title: 'Sơ đồ kỹ thuật', description: 'Chuyển đổi bản vẽ kỹ thuật và sơ đồ sang định dạng SVG có thể mở rộng.', icon: 'ruler' },
      { title: 'Phát triển web', description: 'Tạo tệp SVG sẵn sàng web từ nội dung PDF cho trang web đáp ứng.', icon: 'globe' },
      { title: 'In ở mọi kích thước', description: 'Tạo đồ họa vector in hoàn hảo ở mọi kích thước.', icon: 'printer' },
    ],
    faq: [
      { question: 'Định dạng SVG là gì?', answer: 'SVG (Scalable Vector Graphics) là định dạng hình ảnh vector có thể mở rộng ở mọi kích thước mà không mất chất lượng. Nó được sử dụng rộng rãi cho logo, biểu tượng và đồ họa web.' },
      { question: 'SVG có thực sự vector không?', answer: 'SVG chứa kết xuất độ phân giải cao của trang PDF. Đối với PDF có nội dung vector, bạn nhận được đầu ra sắc nét ở mọi tỷ lệ.' },
      { question: 'Tôi có thể xem trước trước khi tải xuống không?', answer: 'Có! Nhấp vào bất kỳ hình thu nhỏ nào để xem SVG ở kích thước đầy đủ. Bạn có thể tải xuống trang riêng lẻ hoặc tất cả cùng lúc.' },
      { question: 'Tôi nên chọn chất lượng DPI nào?', answer: 'Chất lượng DPI cao hơn (216 hoặc 288 DPI) tạo SVG lớn hơn, chi tiết hơn. Dùng cài đặt thấp hơn cho xử lý nhanh hơn và tệp nhỏ hơn.' },
    ],
  },

  'pdf-to-greyscale': {
    title: 'PDF sang Xám',
    metaDescription: 'Chuyển đổi PDF màu sang xám. Giảm kích thước tệp và chuẩn bị cho in ấn đen trắng.',
    keywords: ['pdf sang xám', 'pdf xám', 'đen trắng pdf', 'loại bỏ màu sắc'],
    description: `
      <p>PDF sang Xám chuyển đổi tài liệu PDF màu thành xám (đen trắng). Điều này giảm kích thước tệp và chuẩn bị tài liệu cho in ấn đen trắng.</p>
      <p>Việc chuyển đổi bảo toàn độ rõ ràng của văn bản và chi tiết hình ảnh trong khi loại bỏ thông tin màu sắc. Hoàn hảo để in bản nháp hoặc tạo phiên bản thân thiện với máy in.</p>
      <p>Tất cả chuyển đổi diễn ra trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư.</p>
    `,
    howToUse: [
      { step: 1, title: 'Tải lên PDF màu của bạn', description: 'Kéo và thả tệp PDF màu của bạn hoặc nhấp để chọn.' },
      { step: 2, title: 'Xem trước chuyển đổi', description: 'Xem trước phiên bản xám sẽ trông như thế nào.' },
      { step: 3, title: 'Chuyển đổi và tải xuống', description: 'Nhấp Chuyển đổi để tạo PDF xám.' },
    ],
    useCases: [
      { title: 'Tiết kiệm in ấn', description: 'Chuyển đổi sang xám để tiết kiệm chi phí in màu.', icon: 'printer' },
      { title: 'Tài liệu bản nháp', description: 'Tạo bản nháp đen trắng để xem xét.', icon: 'file-text' },
      { title: 'Giảm kích thước tệp', description: 'Giảm kích thước PDF bằng cách loại bỏ thông tin màu sắc.', icon: 'minimize-2' },
    ],
    faq: [
      { question: 'Văn bản có vẫn rõ ràng không?', answer: 'Có, độ rõ ràng của văn bản được bảo toàn trong chuyển đổi xám.' },
      { question: 'Kích thước tệp giảm bao nhiêu?', answer: 'Kết quả thay đổi dựa trên nội dung PDF. PDF nặng màu có thể giảm 20-50%.' },
      { question: 'Tôi có thể chuyển đổi chỉ trang cụ thể không?', answer: 'Có, bạn có thể chọn trang nào để chuyển đổi sang xám.' },
    ],
  },

  'pdf-to-json': {
    title: 'PDF sang JSON',
    metaDescription: 'Trích xuất nội dung PDF sang định dạng JSON. Nhận dữ liệu có cấu trúc từ tài liệu PDF.',
    keywords: ['pdf sang json', 'trích xuất dữ liệu pdf', 'trình phân tích cú pháp pdf', 'dữ liệu pdf có cấu trúc'],
    description: `
      <p>PDF sang JSON trích xuất nội dung từ tài liệu PDF thành định dạng JSON có cấu trúc. Trích xuất văn bản, siêu dữ liệu, thông tin trang và cấu trúc tài liệu để sử dụng lập trình.</p>
      <p>Hoàn hảo để trích xuất dữ liệu, phân tích tài liệu hoặc tích hợp nội dung PDF vào ứng dụng và quy trình làm việc.</p>
      <p>Tất cả trích xuất diễn ra trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư.</p>
    `,
    howToUse: [
      { step: 1, title: 'Tải lên PDF của bạn', description: 'Kéo và thả tệp PDF của bạn hoặc nhấp để chọn.' },
      { step: 2, title: 'Chọn nội dung để trích xuất', description: 'Chọn nội dung nào để trích xuất: văn bản, siêu dữ liệu, cấu trúc.' },
      { step: 3, title: 'Trích xuất và tải xuống', description: 'Nhấp Trích xuất để tạo JSON và tải xuống.' },
    ],
    useCases: [
      { title: 'Trích xuất dữ liệu', description: 'Trích xuất dữ liệu có cấu trúc từ tài liệu PDF.', icon: 'database' },
      { title: 'Phân tích tài liệu', description: 'Phân tích cấu trúc và nội dung PDF theo lập trình.', icon: 'search' },
      { title: 'Tích hợp', description: 'Nhập nội dung PDF vào ứng dụng qua JSON.', icon: 'plug' },
    ],
    faq: [
      { question: 'Dữ liệu nào được trích xuất?', answer: 'Nội dung văn bản, siêu dữ liệu, kích thước trang, phông chữ và cấu trúc tài liệu.' },
      { question: 'Định dạng JSON có được ghi lại không?', answer: 'Có, lược đồ JSON nhất quán và được ghi lại đầy đủ.' },
      { question: 'Tôi có thể trích xuất từ PDF đã quét không?', answer: 'PDF đã quét cần OCR trước. Sử dụng công cụ OCR PDF của chúng tôi trước khi trích xuất.' },
    ],
  },

  'pdf-to-pptx': {
    title: 'PDF sang PowerPoint',
    metaDescription: 'Chuyển đổi PDF sang bản trình bày PowerPoint. Mỗi trang trở thành trang trình bày chất lượng cao.',
    keywords: ['pdf sang pptx', 'pdf sang powerpoint', 'chuyển đổi trang trình bày pdf', 'pdf bản trình bày'],
    description: `
      <p>PDF sang PowerPoint chuyển đổi tài liệu PDF của bạn thành bản trình bày PowerPoint có thể chỉnh sửa (PPTX). Mỗi trang PDF được biến đổi thành trang trình bày chất lượng cao, bảo toàn bố cục trực quan hoàn hảo.</p>
      <p>Công cụ này lý tưởng để chuyển đổi báo cáo, tài liệu phân phát hoặc bất kỳ nội dung PDF nào thành định dạng trang trình bày. Bạn có thể chọn chất lượng hình ảnh (DPI) để cân bằng giữa kích thước tệp và độ rõ ràng trực quan.</p>
      <p>Tất cả chuyển đổi diễn ra cục bộ trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư và an toàn.</p>
    `,
    howToUse: [
      { step: 1, title: 'Tải lên PDF của bạn', description: 'Kéo và thả tệp PDF của bạn hoặc nhấp để chọn từ thiết bị của bạn.' },
      { step: 2, title: 'Chọn cài đặt chất lượng', description: 'Chọn chất lượng hình ảnh (DPI) cho các trang trình bày. DPI cao hơn có nghĩa là chất lượng tốt hơn nhưng kích thước tệp lớn hơn.' },
      { step: 3, title: 'Chuyển đổi và tải xuống', description: 'Nhấp Chuyển đổi để tạo bản trình bày PowerPoint của bạn và tải xuống tệp PPTX.' },
    ],
    useCases: [
      { title: 'Tạo bản trình bày', description: 'Chuyển đổi báo cáo PDF thành trang trình bày cho các cuộc họp.', icon: 'presentation' },
      { title: 'Tài liệu đào tạo', description: 'Biến đổi tài liệu đào tạo PDF thành bản trình bày PowerPoint tương tác.', icon: 'book-open' },
      { title: 'Tái sử dụng nội dung', description: 'Chuyển đổi nội dung PDF hiện có thành định dạng trang trình bày có thể chỉnh sửa để tùy chỉnh thêm.', icon: 'refresh-cw' },
    ],
    faq: [
      { question: 'Các trang trình bày có thể chỉnh sửa không?', answer: 'Mỗi trang trình bày chứa hình ảnh chất lượng cao của trang PDF. Bạn có thể thêm văn bản, hình dạng và chú thích lên trên trong PowerPoint.' },
      { question: 'Tôi nên chọn DPI nào?', answer: 'Dùng 150 DPI cho bản trình bày hiển thị trên màn hình. Dùng 300 DPI cho in ấn hoặc khi bạn cần chất lượng cao nhất.' },
      { question: 'Tôi có thể chuyển đổi PDF đa trang không?', answer: 'Có, mỗi trang của PDF trở thành một trang trình bày riêng biệt trong bản trình bày PowerPoint.' },
    ],
  },

  'pdf-to-excel': {
    title: 'PDF sang Excel',
    metaDescription: 'Chuyển đổi PDF sang bảng tính Excel. Trích xuất bảng sang định dạng XLSX.',
    keywords: ['pdf sang excel', 'pdf sang xlsx', 'chuyển đổi bảng pdf', 'trích xuất bảng'],
    description: `
      <p>PDF sang Excel chuyển đổi tài liệu PDF của bạn thành bảng tính Microsoft Excel có thể chỉnh sửa (XLSX). Công cụ tự động phát hiện bảng trong PDF và trích xuất chúng thành các trang tính riêng biệt.</p>
      <p>Công cụ này lý tưởng để phân tích báo cáo tài chính, hóa đơn hoặc bất kỳ dữ liệu nào được trình bày ở định dạng bảng. Mỗi trang của bảng tính được tổ chức thành các trang tính để thao tác dữ liệu dễ dàng.</p>
      <p>Tất cả chuyển đổi diễn ra cục bộ trong trình duyệt của bạn, đảm bảo dữ liệu của bạn vẫn riêng tư và an toàn.</p>
    `,
    howToUse: [
      { step: 1, title: 'Tải lên PDF của bạn', description: 'Kéo và thả tệp PDF của bạn hoặc nhấp để chọn.' },
      { step: 2, title: 'Xử lý', description: 'Công cụ sẽ tự động xác định và trích xuất bảng.' },
      { step: 3, title: 'Tải xuống Excel', description: 'Tải xuống tệp Excel của bạn với bảng đã trích xuất.' },
    ],
    useCases: [
      { title: 'Phân tích tài chính', description: 'Chuyển đổi sao kê ngân hàng hoặc hóa đơn sang Excel để phân tích.', icon: 'trending-up' },
      { title: 'Trích xuất dữ liệu', description: 'Kéo dữ liệu bảng từ báo cáo nghiên cứu hoặc tài liệu.', icon: 'database' },
      { title: 'Quản lý hàng tồn kho', description: 'Chuyển đổi danh sách hàng tồn kho từ PDF sang bảng tính.', icon: 'clipboard' },
    ],
    faq: [
      { question: 'Bảng được xử lý như thế nào?', answer: 'Bảng được phát hiện trên mỗi trang được trích xuất thành các trang tính tương ứng trong tệp Excel.' },
      { question: 'Điều gì nếu không có bảng?', answer: 'Một trang tính thông tin sẽ được tạo để chỉ ra không tìm thấy bảng.' },
      { question: 'Định dạng có được bảo toàn không?', answer: 'Dữ liệu được bảo toàn, nhưng định dạng trực quan phức tạp có thể được đơn giản hóa cho bảng tính.' },
    ],
  },

  // ==================== TỔ CHỨC & QUẢN LÝ ====================
  'ocr-pdf': {
    title: 'OCR PDF',
    metaDescription: 'Làm cho PDF đã quét có thể tìm kiếm với OCR. Trích xuất văn bản từ hình ảnh và tài liệu đã quét.',
    keywords: ['ocr pdf', 'pdf có thể tìm kiếm', 'nhận dạng văn bản', 'quét sang văn bản'],
    description: `
      <p>OCR PDF sử dụng Nhận dạng ký tự quang học để trích xuất văn bản từ tài liệu đã quét và hình ảnh trong PDF. Chuyển đổi PDF dựa trên hình ảnh thành tài liệu văn bản có thể chọn và tìm kiếm.</p>
      <p>Hỗ trợ nhiều ngôn ngữ đảm bảo nhận dạng văn bản chính xác bất kể ngôn ngữ của tài liệu. Bố cục gốc được bảo toàn trong khi thêm lớp văn bản có thể tìm kiếm.</p>
      <p>Tất cả xử lý OCR diễn ra trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư.</p>
    `,
    howToUse: [
      { step: 1, title: 'Tải lên PDF đã quét', description: 'Kéo và thả PDF đã quét của bạn hoặc nhấp để chọn.' },
      { step: 2, title: 'Chọn ngôn ngữ', description: 'Chọn ngôn ngữ tài liệu để nhận dạng chính xác.' },
      { step: 3, title: 'Xử lý và tải xuống', description: 'Nhấp Xử lý để chạy OCR và tải xuống PDF có thể tìm kiếm.' },
    ],
    useCases: [
      { title: 'Số hóa lưu trữ', description: 'Làm cho lưu trữ tài liệu đã quét có thể tìm kiếm.', icon: 'archive' },
      { title: 'Tìm kiếm tài liệu', description: 'Bật tìm kiếm văn bản trong tài liệu đã quét.', icon: 'search' },
      { title: 'Trích xuất văn bản', description: 'Trích xuất văn bản từ tài liệu đã quét để chỉnh sửa.', icon: 'type' },
    ],
    faq: [
      { question: 'Ngôn ngữ nào được hỗ trợ?', answer: 'Hơn 100 ngôn ngữ được hỗ trợ bao gồm tiếng Anh, tiếng Trung, tiếng Nhật, tiếng Hàn và nhiều hơn nữa.' },
      { question: 'Bố cục gốc có được bảo toàn không?', answer: 'Có, bố cục trực quan gốc được bảo toàn với lớp văn bản có thể tìm kiếm được thêm vào.' },
      { question: 'OCR chính xác đến mức nào?', answer: 'Độ chính xác phụ thuộc vào chất lượng quét nhưng thường vượt quá 95% cho tài liệu rõ ràng.' },
    ],
  },

  'alternate-merge': {
    title: 'Hợp nhất xen kẽ',
    metaDescription: 'Hợp nhất PDF theo trang xen kẽ. Kết hợp quét mặt trước và mặt sau thành một tài liệu.',
    keywords: ['hợp nhất xen kẽ', 'xen kẽ pdf', 'kết hợp quét', 'hợp nhất mặt trước mặt sau'],
    description: `
      <p>Hợp nhất xen kẽ kết hợp hai PDF bằng cách xen kẽ các trang của chúng. Điều này hoàn hảo để kết hợp các trang mặt trước và mặt sau được quét riêng biệt thành một tài liệu duy nhất.</p>
      <p>Tải lên hai PDF và công cụ sẽ hợp nhất chúng bằng cách lấy một trang từ mỗi trang xen kẽ. Bạn cũng có thể đảo ngược thứ tự của một tài liệu cho quét mặt sau.</p>
      <p>Tất cả xử lý diễn ra trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư.</p>
    `,
    howToUse: [
      { step: 1, title: 'Tải lên hai PDF', description: 'Tải lên PDF trang mặt trước và trang mặt sau.' },
      { step: 2, title: 'Định cấu hình thứ tự', description: 'Chọn có đảo ngược tài liệu thứ hai cho quét mặt sau không.' },
      { step: 3, title: 'Hợp nhất và tải xuống', description: 'Nhấp Hợp nhất để xen kẽ trang và tải xuống.' },
    ],
    useCases: [
      { title: 'Quét duplex', description: 'Kết hợp mặt trước và mặt sau được quét riêng biệt.', icon: 'copy' },
      { title: 'Lắp ráp tài liệu', description: 'Xen kẽ trang từ hai tài liệu liên quan.', icon: 'layers' },
      { title: 'Quét sách', description: 'Kết hợp trang lẻ và chẵn đã quét thành sách hoàn chỉnh.', icon: 'book' },
    ],
    faq: [
      { question: 'Điều gì nếu tài liệu có số trang khác nhau?', answer: 'Trang dư từ tài liệu dài hơn được thêm vào cuối.' },
      { question: 'Tôi có thể đảo ngược thứ tự trang không?', answer: 'Có, bạn có thể đảo ngược tài liệu nào để hợp nhất.' },
      { question: 'Điều này khác với hợp nhất thông thường như thế nào?', answer: 'Hợp nhất thông thường nối tài liệu; hợp nhất xen kẽ xen kẽ trang.' },
    ],
  },

  'add-attachments': {
    title: 'Thêm tệp đính kèm',
    metaDescription: 'Nhúng tệp vào tài liệu PDF. Đính kèm bất kỳ loại tệp nào vào PDF của bạn.',
    keywords: ['tệp đính kèm pdf', 'nhúng tệp', 'đính kèm vào pdf', 'công cụ pdf'],
    description: `
      <p>Thêm tệp đính kèm nhúng tệp của bất kỳ loại nào vào tài liệu PDF của bạn. Đính kèm bảng tính, hình ảnh, tệp nguồn hoặc bất kỳ tài liệu nào khác để tạo gói PDF toàn diện.</p>
      <p>Tệp đính kèm được nhúng trong PDF và có thể được trích xuất bởi người nhận bằng bất kỳ trình đọc PDF nào. Hoàn hảo để phân phối tệp liên quan cùng nhau.</p>
      <p>Tất cả xử lý diễn ra trong trình duyệt của bạn, đảm bảo tệp của bạn vẫn riêng tư.</p>
    `,
    howToUse: [
      { step: 1, title: 'Tải lên PDF của bạn', description: 'Kéo và thả tệp PDF của bạn hoặc nhấp để chọn.' },
      { step: 2, title: 'Thêm tệp đính kèm', description: 'Chọn tệp để đính kèm vào PDF.' },
      { step: 3, title: 'Lưu và tải xuống', description: 'Nhấp Lưu để nhúng tệp đính kèm và tải xuống.' },
    ],
    useCases: [
      { title: 'Gói dự án', description: 'Gói tệp dự án với tài liệu PDF.', icon: 'package' },
      { title: 'Phân phối báo cáo', description: 'Đính kèm tệp dữ liệu nguồn với báo cáo PDF.', icon: 'paperclip' },
      { title: 'Gói hợp đồng', description: 'Bao gồm tài liệu hỗ trợ với hợp đồng.', icon: 'file-text' },
    ],
    faq: [
      { question: 'Loại tệp nào có thể đính kèm?', answer: 'Bất kỳ loại tệp nào có thể được đính kèm vào PDF.' },
      { question: 'Có giới hạn kích thước không?', answer: 'Tổng kích thước PDF bao gồm tệp đính kèm không được vượt quá 500MB.' },
      { question: 'Người nhận có thể trích xuất tệp đính kèm không?', answer: 'Có, bất kỳ trình đọc PDF nào cũng có thể trích xuất tệp đính kèm nhúng.' },
    ],
  },

  'extract-attachments': {
    title: 'Trích xuất tệp đính kèm',
    metaDescription: 'Trích xuất tệp nhúng từ PDF. Tải xuống tất cả tệp đính kèm từ tài liệu PDF.',
    keywords: ['trích xuất tệp đính kèm', 'tệp đính kèm pdf', 'tải xuống tệp nhúng', 'trích xuất pdf'],
    description: `
      <p>Trích xuất tệp đính kèm lấy tất cả tệp nhúng từ tài liệu PDF. Tải xuống tệp đính kèm riêng lẻ hoặc dưới dạng kho lưu trữ ZIP chứa tất cả tệp.</p>
      <p>Hoàn hảo để truy cập tệp nguồn, dữ liệu hoặc tài liệu bổ sung được nhúng trong gói PDF.</p>
      <p>Tất cả trích xuất diễn ra trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư.</p>
    `,
    howToUse: [
      { step: 1, title: 'Tải lên PDF của bạn', description: 'Kéo và thả tệp PDF của bạn hoặc nhấp để chọn.' },
      { step: 2, title: 'Xem tệp đính kèm', description: 'Xem danh sách tất cả tệp nhúng trong PDF.' },
      { step: 3, title: 'Trích xuất và tải xuống', description: 'Tải xuống tệp riêng lẻ hoặc tất cả dưới dạng ZIP.' },
    ],
    useCases: [
      { title: 'Truy cập tệp nguồn', description: 'Trích xuất tệp dữ liệu gốc từ báo cáo PDF.', icon: 'download' },
      { title: 'Khôi phục tệp đính kèm', description: 'Trích xuất tệp nhúng từ gói PDF.', icon: 'folder-open' },
      { title: 'Trích xuất hàng loạt', description: 'Trích xuất tệp đính kèm từ nhiều PDF cùng lúc.', icon: 'layers' },
    ],
    faq: [
      { question: 'Điều gì nếu không có tệp đính kèm?', answer: 'Công cụ sẽ chỉ ra nếu không tìm thấy tệp nhúng.' },
      { question: 'Tất cả loại tệp đính kèm có được hỗ trợ không?', answer: 'Có, tất cả loại tệp nhúng có thể được trích xuất.' },
      { question: 'Tôi có thể trích xuất từ nhiều PDF không?', answer: 'Có, bạn có thể xử lý nhiều PDF và tải xuống tất cả tệp đính kèm.' },
    ],
  },

  'extract-images': {
    title: 'Trích xuất hình ảnh từ PDF',
    metaDescription: 'Trích xuất tất cả hình ảnh nhúng từ tệp PDF. Tải xuống riêng lẻ hoặc dưới dạng kho lưu trữ ZIP. Lọc hình ảnh nhỏ tự động.',
    keywords: ['trích xuất hình ảnh pdf', 'trích xuất hình ảnh pdf', 'nhận hình ảnh từ pdf', 'tải xuống hình ảnh pdf', 'pdf sang hình ảnh'],
    description: `
      <p>Trích xuất hình ảnh từ PDF lấy tất cả hình ảnh nhúng từ tài liệu PDF của bạn. Tải xuống hình ảnh chất lượng cao riêng lẻ hoặc dưới dạng kho lưu trữ ZIP tiện lợi.</p>
      <p>Công cụ tự động lọc hình ảnh nhỏ như biểu tượng và trang trí dựa trên ngưỡng kích thước có thể tùy chỉnh. Xử lý nhiều PDF cùng lúc để trích xuất hàng loạt hiệu quả.</p>
      <p>Tất cả trích xuất diễn ra cục bộ trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư và an toàn.</p>
    `,
    howToUse: [
      { step: 1, title: 'Tải lên PDF của bạn', description: 'Kéo và thả một hoặc nhiều tệp PDF hoặc nhấp để chọn từ thiết bị của bạn.' },
      { step: 2, title: 'Đặt tùy chọn lọc', description: 'Điều chỉnh chiều rộng tối thiểu, chiều cao và kích thước tệp để lọc hình ảnh nhỏ không mong muốn.' },
      { step: 3, title: 'Trích xuất hình ảnh', description: 'Nhấp Trích xuất để tìm tất cả hình ảnh nhúng trong PDF của bạn.' },
      { step: 4, title: 'Tải xuống', description: 'Tải xuống hình ảnh riêng lẻ hoặc tất cả hình ảnh dưới dạng kho lưu trữ ZIP.' },
    ],
    useCases: [
      { title: 'Khôi phục ảnh', description: 'Trích xuất ảnh và hình ảnh nhúng trong tài liệu PDF để sử dụng lại hoặc lưu trữ.', icon: 'image' },
      { title: 'Thu thập tài sản', description: 'Thu thập tất cả đồ họa và hình ảnh từ báo cáo PDF, bản trình bày hoặc brochure.', icon: 'folder' },
      { title: 'Tái sử dụng nội dung', description: 'Trích xuất hình ảnh từ PDF để sử dụng trong tài liệu, trang web hoặc bản trình bày khác.', icon: 'refresh-cw' },
    ],
    faq: [
      { question: 'Định dạng hình ảnh nào được trích xuất?', answer: 'Hình ảnh được trích xuất ở định dạng gốc của chúng (JPEG, PNG, v.v.) khi có thể, hoặc chuyển đổi sang PNG cho dữ liệu hình ảnh thô.' },
      { question: 'Tại sao một số hình ảnh bị thiếu?', answer: 'Hình ảnh nhỏ dưới ngưỡng kích thước bị lọc. Điều chỉnh cài đặt lọc để trích xuất hình ảnh nhỏ hơn.' },
      { question: 'Tôi có thể trích xuất từ PDF đã quét không?', answer: 'PDF đã quét thường chứa quét dưới dạng hình ảnh lớn mỗi trang. Sử dụng công cụ PDF sang Hình ảnh thay thế để chuyển đổi trang theo trang.' },
    ],
  },

  'edit-attachments': {
    title: 'Chỉnh sửa tệp đính kèm',
    metaDescription: 'Quản lý tệp đính kèm PDF. Xem, đổi tên và xóa tệp nhúng.',
    keywords: ['chỉnh sửa tệp đính kèm', 'quản lý tệp pdf', 'xóa tệp đính kèm', 'đổi tên tệp đính kèm'],
    description: `
      <p>Chỉnh sửa tệp đính kèm cho phép bạn quản lý tệp nhúng trong tài liệu PDF. Xem tất cả tệp đính kèm, đổi tên chúng hoặc xóa tệp không mong muốn khỏi PDF.</p>
      <p>Hoàn hảo để dọn dẹp gói PDF hoặc cập nhật thông tin tệp đính kèm trước khi phân phối.</p>
      <p>Tất cả chỉnh sửa diễn ra cục bộ trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư.</p>
    `,
    howToUse: [
      { step: 1, title: 'Tải lên PDF của bạn', description: 'Kéo và thả tệp PDF của bạn hoặc nhấp để chọn.' },
      { step: 2, title: 'Quản lý tệp đính kèm', description: 'Xem, đổi tên hoặc xóa tệp nhúng.' },
      { step: 3, title: 'Lưu và tải xuống', description: 'Nhấp Lưu để áp dụng thay đổi và tải xuống.' },
    ],
    useCases: [
      { title: 'Dọn dẹp PDF', description: 'Xóa tệp đính kèm không cần thiết khỏi gói PDF.', icon: 'trash-2' },
      { title: 'Đổi tên tệp', description: 'Cập nhật tên tệp đính kèm để rõ ràng.', icon: 'edit' },
      { title: 'Xem xét nội dung', description: 'Kiểm tra tệp nhúng trước khi phân phối.', icon: 'eye' },
    ],
    faq: [
      { question: 'Tôi có thể thêm tệp đính kèm mới ở đây không?', answer: 'Sử dụng công cụ Thêm tệp đính kèm để nhúng tệp mới.' },
      { question: 'Việc xóa có vĩnh viễn không?', answer: 'Có, tệp đính kèm đã xóa không thể khôi phục từ tệp đầu ra.' },
      { question: 'Tôi có thể xem trước tệp đính kèm không?', answer: 'Bạn có thể xem tên và kích thước tệp; sử dụng Trích xuất tệp đính kèm để xem nội dung.' },
    ],
  },

  'divide-pages': {
    title: 'Chia trang',
    metaDescription: 'Chia trang PDF thành nhiều phần. Chia trang theo chiều ngang hoặc dọc.',
    keywords: ['chia trang pdf', 'tách trang', 'cắt trang pdf', 'phần trang'],
    description: `
      <p>Chia trang chia trang PDF riêng lẻ thành nhiều phần. Cắt trang theo chiều ngang, dọc hoặc theo lưới để tạo nhiều trang từ một trang.</p>
      <p>Hoàn hảo để chia tài liệu đã quét có nhiều mục mỗi trang, hoặc chia trang khổ lớn thành khổ tiêu chuẩn.</p>
      <p>Tất cả xử lý diễn ra trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư.</p>
    `,
    howToUse: [
      { step: 1, title: 'Tải lên PDF của bạn', description: 'Kéo và thả tệp PDF của bạn hoặc nhấp để chọn.' },
      { step: 2, title: 'Đặt chia', description: 'Chọn chia theo chiều ngang, dọc hoặc lưới và đặt số phần.' },
      { step: 3, title: 'Chia và tải xuống', description: 'Nhấp Chia để tách trang và tải xuống.' },
    ],
    useCases: [
      { title: 'Chia quét', description: 'Chia trang đã quét chứa nhiều tài liệu.', icon: 'scissors' },
      { title: 'Thay đổi kích thước trang', description: 'Chia trang lớn thành khổ giấy tiêu chuẩn.', icon: 'maximize-2' },
      { title: 'Tạo thẻ', description: 'Chia trang thành phần kích thước thẻ để in.', icon: 'grid' },
    ],
    faq: [
      { question: 'Tôi có thể chia thành phần không đều không?', answer: 'Hiện tại, các phần chia đều. Sử dụng Cắt PDF cho phần tùy chỉnh.' },
      { question: 'Nội dung ở đường chia được xử lý như thế nào?', answer: 'Nội dung được tách ở đường chia; đảm bảo nội dung quan trọng không ở ranh giới.' },
      { question: 'Tôi có thể chia chỉ trang cụ thể không?', answer: 'Có, bạn có thể chọn trang nào để chia.' },
    ],
  },

  'add-blank-page': {
    title: 'Thêm trang trống',
    metaDescription: 'Chèn trang trống vào tài liệu PDF. Thêm trang trống ở bất kỳ vị trí nào.',
    keywords: ['thêm trang trống', 'chèn trang', 'trang trống', 'chèn trang pdf'],
    description: `
      <p>Thêm trang trống chèn trang trống vào tài liệu PDF của bạn ở bất kỳ vị trí nào. Thêm trang trước, sau hoặc giữa các trang hiện có với kích thước trang có thể tùy chỉnh.</p>
      <p>Hoàn hảo để thêm không gian cho ghi chú, tạo ngăn cách phần hoặc chuẩn bị tài liệu để in ấn.</p>
      <p>Tất cả xử lý diễn ra trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư.</p>
    `,
    howToUse: [
      { step: 1, title: 'Tải lên PDF của bạn', description: 'Kéo và thả tệp PDF của bạn hoặc nhấp để chọn.' },
      { step: 2, title: 'Chọn vị trí', description: 'Chọn nơi chèn trang trống và bao nhiêu trang.' },
      { step: 3, title: 'Thêm và tải xuống', description: 'Nhấp Thêm để chèn trang và tải xuống.' },
    ],
    useCases: [
      { title: 'Không gian ghi chú', description: 'Thêm trang trống cho ghi chú viết tay.', icon: 'edit-3' },
      { title: 'Ngăn cách phần', description: 'Chèn trang trống giữa các phần tài liệu.', icon: 'minus' },
      { title: 'Chuẩn bị in ấn', description: 'Thêm trang để căn chỉnh in duplex.', icon: 'printer' },
    ],
    faq: [
      { question: 'Tôi có thể chọn kích thước trang không?', answer: 'Có, trang trống có thể khớp với trang hiện có hoặc sử dụng kích thước tùy chỉnh.' },
      { question: 'Tôi có thể thêm nhiều trang trống không?', answer: 'Có, bạn có thể thêm bất kỳ số trang trống nào cùng lúc.' },
      { question: 'Tôi có thể thêm trang màu không?', answer: 'Sử dụng công cụ Màu nền sau khi thêm trang trống để thêm màu.' },
    ],
  },

  'reverse-pages': {
    title: 'Đảo ngược trang',
    metaDescription: 'Đảo ngược thứ tự trang PDF. Lật trang tài liệu từ cuối lên đầu.',
    keywords: ['đảo ngược pdf', 'lật thứ tự trang', 'đảo ngược trang', 'đảo ngược tài liệu'],
    description: `
      <p>Đảo ngược trang lật thứ tự trang trong tài liệu PDF của bạn, đặt trang cuối cùng lên đầu và trang đầu tiên xuống cuối. Hữu ích cho tài liệu được quét theo thứ tự ngược hoặc cho nhu cầu in ấn cụ thể.</p>
      <p>Công cụ xử lý toàn bộ tài liệu hoặc phạm vi trang đã chọn, duy trì tất cả nội dung và định dạng.</p>
      <p>Tất cả xử lý diễn ra cục bộ trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư.</p>
    `,
    howToUse: [
      { step: 1, title: 'Tải lên PDF của bạn', description: 'Kéo và thả tệp PDF của bạn hoặc nhấp để chọn.' },
      { step: 2, title: 'Chọn trang', description: 'Chọn đảo ngược tất cả trang hoặc phạm vi cụ thể.' },
      { step: 3, title: 'Đảo ngược và tải xuống', description: 'Nhấp Đảo ngược để lật thứ tự trang và tải xuống.' },
    ],
    useCases: [
      { title: 'Khắc phục thứ tự quét', description: 'Sửa tài liệu được quét theo thứ tự ngược.', icon: 'refresh-cw' },
      { title: 'Chuẩn bị in ấn', description: 'Đảo ngược trang cho yêu cầu in ấn cụ thể.', icon: 'printer' },
      { title: 'Sắp xếp lại tài liệu', description: 'Lật thứ tự tài liệu nhanh chóng để xem xét.', icon: 'arrow-up-down' },
    ],
    faq: [
      { question: 'Đánh dấu trang có được cập nhật không?', answer: 'Có, đánh dấu trang được cập nhật để trỏ đến trang đảo ngược chính xác.' },
      { question: 'Tôi có thể đảo ngược chỉ một số trang không?', answer: 'Có, bạn có thể chọn phạm vi trang để đảo ngược.' },
      { question: 'Điều này giống với xoay không?', answer: 'Không, đảo ngược thay đổi thứ tự trang; xoay thay đổi định hướng trang.' },
    ],
  },

  'rotate-pdf': {
    title: 'Xoay PDF',
    metaDescription: 'Xoay trang PDF. Quay trang 90, 180 hoặc 270 độ.',
    keywords: ['xoay pdf', 'quay trang pdf', 'pdf xoay', 'khắc phục định hướng'],
    description: `
      <p>Xoay PDF quay trang trong tài liệu của bạn theo 90, 180 hoặc 270 độ. Khắc phục trang được định hướng sai, quay trang ngang hoặc điều chỉnh định hướng trang để xem.</p>
      <p>Xoay tất cả trang thống nhất hoặc chọn trang cụ thể để xoay riêng lẻ. Công cụ bảo toàn tất cả nội dung và định dạng.</p>
      <p>Tất cả xử lý diễn ra cục bộ trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư.</p>
    `,
    howToUse: [
      { step: 1, title: 'Tải lên PDF của bạn', description: 'Kéo và thả tệp PDF của bạn hoặc nhấp để chọn.' },
      { step: 2, title: 'Chọn xoay', description: 'Chọn góc xoay và trang nào để xoay.' },
      { step: 3, title: 'Xoay và tải xuống', description: 'Nhấp Xoay để áp dụng thay đổi và tải xuống.' },
    ],
    useCases: [
      { title: 'Khắc phục quét', description: 'Sửa định hướng của tài liệu đã quét.', icon: 'rotate-cw' },
      { title: 'Trang ngang', description: 'Xoay trang ngang để xem đúng.', icon: 'monitor' },
      { title: 'Định hướng hỗn hợp', description: 'Chuẩn hóa định hướng trang trong tài liệu hỗn hợp.', icon: 'layout' },
    ],
    faq: [
      { question: 'Tôi có thể xoay các trang khác nhau khác nhau không?', answer: 'Có, bạn có thể áp dụng xoay khác nhau cho các trang khác nhau.' },
      { question: 'Xoay có ảnh hưởng đến chất lượng in ấn không?', answer: 'Không, xoay bảo toàn tất cả chất lượng nội dung.' },
      { question: 'Tôi có thể xoay theo góc tùy chỉnh không?', answer: 'Xoay bị giới hạn ở gia số 90 độ (90, 180, 270).' },
    ],
  },

  'n-up-pdf': {
    title: 'N-Up PDF',
    metaDescription: 'In nhiều trang PDF mỗi tờ. Tạo bố cục 2-up, 4-up hoặc tùy chỉnh.',
    keywords: ['n-up pdf', 'nhiều trang mỗi tờ', 'in 2-up', 'imposition'],
    description: `
      <p>N-Up PDF sắp xếp nhiều trang lên các tờ đơn, tạo bố cục 2-up, 4-up, 6-up, 9-up hoặc tùy chỉnh. Hoàn hảo để tiết kiệm giấy khi in ấn hoặc tạo tài liệu phân phát.</p>
      <p>Chọn từ bố cục đặt sẵn hoặc tạo sắp xếp tùy chỉnh. Công cụ tự động chia tỷ lệ và định vị trang để kết quả tối ưu.</p>
      <p>Tất cả xử lý diễn ra cục bộ trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư.</p>
    `,
    howToUse: [
      { step: 1, title: 'Tải lên PDF của bạn', description: 'Kéo và thả tệp PDF của bạn hoặc nhấp để chọn.' },
      { step: 2, title: 'Chọn bố cục', description: 'Chọn 2-up, 4-up, 6-up, 9-up hoặc lưới tùy chỉnh.' },
      { step: 3, title: 'Tạo và tải xuống', description: 'Nhấp Tạo để tạo PDF n-up và tải xuống.' },
    ],
    useCases: [
      { title: 'Tiết kiệm giấy', description: 'In nhiều trang mỗi tờ để giảm sử dụng giấy.', icon: 'leaf' },
      { title: 'Tạo tài liệu phân phát', description: 'Làm tài liệu phân phát nhỏ gọn từ trang trình bày.', icon: 'file-text' },
      { title: 'Xem xét tài liệu', description: 'In tài liệu ở kích thước giảm để xem xét.', icon: 'eye' },
    ],
    faq: [
      { question: 'Bố cục nào có sẵn?', answer: 'Bố cục 2-up, 4-up, 6-up, 9-up và lưới tùy chỉnh có sẵn.' },
      { question: 'Tôi có thể thêm đường viền giữa các trang không?', answer: 'Có, bạn có thể thêm đường viền và kênh giữa các trang.' },
      { question: 'Thứ tự trang có được bảo toàn không?', answer: 'Có, trang được sắp xếp theo thứ tự đọc (trái sang phải, trên xuống dưới).' },
    ],
  },

  'combine-single-page': {
    title: 'Kết hợp thành trang đơn',
    metaDescription: 'Ghép trang PDF thành trang liên tục. Tạo tài liệu cuộn trang đơn.',
    keywords: ['kết hợp trang', 'trang đơn pdf', 'ghép trang', 'cuộn liên tục'],
    description: `
      <p>Kết hợp thành trang đơn ghép tất cả trang PDF thành một trang liên tục. Tạo tài liệu cuộn hoàn hảo để xem trên web hoặc đọc liên tục.</p>
      <p>Trang được nối dọc với khoảng cách có thể tùy chỉnh. Kết quả là một trang dài chứa tất cả nội dung.</p>
      <p>Tất cả xử lý diễn ra cục bộ trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư.</p>
    `,
    howToUse: [
      { step: 1, title: 'Tải lên PDF của bạn', description: 'Kéo và thả tệp PDF của bạn hoặc nhấp để chọn.' },
      { step: 2, title: 'Đặt khoảng cách', description: 'Chọn khoảng trống giữa trang được ghép.' },
      { step: 3, title: 'Kết hợp và tải xuống', description: 'Nhấp Kết hợp để tạo PDF trang đơn.' },
    ],
    useCases: [
      { title: 'Tài liệu web', description: 'Tạo PDF cuộn để nhúng web.', icon: 'globe' },
      { title: 'Đọc liên tục', description: 'Chuyển đổi tài liệu phân trang thành cuộn liên tục.', icon: 'scroll' },
      { title: 'Nội dung dài dạng', description: 'Kết hợp trang để đọc liên tục dài dạng.', icon: 'file-text' },
    ],
    faq: [
      { question: 'Có giới hạn trang không?', answer: 'Tài liệu rất dài có thể bị giới hạn bởi bộ nhớ trình duyệt.' },
      { question: 'Tôi có thể thêm ngăn cách giữa trang không?', answer: 'Có, bạn có thể thêm khoảng cách hoặc đường giữa trang gốc.' },
      { question: 'Điều này có hoạt động cho in ấn không?', answer: 'Kết quả tốt nhất cho xem màn hình; sử dụng N-Up cho bố cục in.' },
    ],
  },

  'view-metadata': {
    title: 'Xem siêu dữ liệu',
    metaDescription: 'Xem thuộc tính tài liệu PDF. Xem tác giả, tiêu đề, ngày tháng và siêu dữ liệu khác.',
    keywords: ['siêu dữ liệu pdf', 'thuộc tính tài liệu', 'thông tin pdf', 'xem chi tiết pdf'],
    description: `
      <p>Xem siêu dữ liệu hiển thị tất cả thuộc tính và siêu dữ liệu từ tệp PDF của bạn. Xem tác giả, tiêu đề, chủ đề, từ khóa, ngày tạo, ngày sửa đổi và nhiều hơn nữa.</p>
      <p>Hữu ích để kiểm tra tài liệu, xem thông tin tệp hoặc xác minh tính xác thực của tài liệu.</p>
      <p>Tất cả xem diễn ra cục bộ trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư.</p>
    `,
    howToUse: [
      { step: 1, title: 'Tải lên PDF của bạn', description: 'Kéo và thả tệp PDF của bạn hoặc nhấp để chọn.' },
      { step: 2, title: 'Xem thuộc tính', description: 'Xem tất cả siêu dữ liệu được hiển thị ở định dạng có tổ chức.' },
      { step: 3, title: 'Xuất nếu cần', description: 'Tùp chọn xuất siêu dữ liệu dưới dạng JSON.' },
    ],
    useCases: [
      { title: 'Kiểm tra tài liệu', description: 'Xem xét thuộc tính tài liệu để tuân thủ.', icon: 'clipboard-check' },
      { title: 'Xác minh tính xác thực', description: 'Kiểm tra ngày tạo và thông tin tác giả.', icon: 'shield' },
      { title: 'Thông tin tệp', description: 'Nhận thông tin chi tiết về tệp PDF.', icon: 'info' },
    ],
    faq: [
      { question: 'Siêu dữ liệu nào được hiển thị?', answer: 'Tiêu đề, tác giả, chủ đề, từ khóa, người tạo, nhà sản xuất, ngày tháng và phiên bản PDF.' },
      { question: 'Siêu dữ liệu XMP có được bao gồm không?', answer: 'Có, cả siêu dữ liệu tiêu chuẩn và XMP được hiển thị.' },
      { question: 'Tôi có thể chỉnh sửa siêu dữ liệu ở đây không?', answer: 'Sử dụng công cụ Chỉnh sửa siêu dữ liệu để sửa đổi thuộc tính tài liệu.' },
    ],
  },

  'edit-metadata': {
    title: 'Chỉnh sửa siêu dữ liệu',
    metaDescription: 'Chỉnh sửa thuộc tính tài liệu PDF. Thay đổi tiêu đề, tác giả, chủ đề và từ khóa.',
    keywords: ['chỉnh sửa siêu dữ liệu pdf', 'thay đổi thuộc tính pdf', 'tác giả pdf', 'thông tin tài liệu'],
    description: `
      <p>Chỉnh sửa siêu dữ liệu cho phép bạn sửa đổi thuộc tính trong tệp PDF của mình. Thay đổi tiêu đề, tác giả, chủ đề, từ khóa và các trường siêu dữ liệu khác.</p>
      <p>Hoàn hảo để sửa thông tin tài liệu, thêm ghi công thích hợp hoặc chuẩn bị tệp để phân phối.</p>
      <p>Tất cả chỉnh sửa diễn ra cục bộ trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư.</p>
    `,
    howToUse: [
      { step: 1, title: 'Tải lên PDF của bạn', description: 'Kéo và thả tệp PDF của bạn hoặc nhấp để chọn.' },
      { step: 2, title: 'Chỉnh sửa thuộc tính', description: 'Sửa đổi tiêu đề, tác giả, chủ đề, từ khóa và các trường khác.' },
      { step: 3, title: 'Lưu và tải xuống', description: 'Nhấp Lưu để áp dụng thay đổi và tải xuống.' },
    ],
    useCases: [
      { title: 'Thêm ghi công', description: 'Đặt thông tin tác giả và người tạo thích hợp.', icon: 'user' },
      { title: 'Tối ưu hóa SEO', description: 'Thêm từ khóa và mô tả để tìm kiếm.', icon: 'search' },
      { title: 'Chuẩn bị tài liệu', description: 'Chuẩn bị tài liệu với siêu dữ liệu thích hợp trước khi chia sẻ.', icon: 'file-check' },
    ],
    faq: [
      { question: 'Trường nào tôi có thể chỉnh sửa?', answer: 'Tiêu đề, tác giả, chủ đề, từ khóa, người tạo và trường nhà sản xuất.' },
      { question: 'Tôi có thể xóa tất cả siêu dữ liệu không?', answer: 'Sử dụng công cụ Xóa siêu dữ liệu để loại bỏ tất cả thuộc tính tài liệu.' },
      { question: 'Ngày tháng có thể chỉnh sửa không?', answer: 'Ngày tạo và sửa đổi được cập nhật tự động.' },
    ],
  },

  'pdf-to-zip': {
    title: 'PDF sang ZIP',
    metaDescription: 'Gói nhiều PDF vào kho lưu trữ ZIP. Nén và gói tệp PDF.',
    keywords: ['pdf sang zip', 'nén pdf', 'gói pdf', 'lưu trữ pdf'],
    description: `
      <p>PDF sang ZIP gói nhiều tệp PDF vào một kho lưu trữ ZIP duy nhất. Nén và gói PDF của bạn để chia sẻ, lưu trữ hoặc sao lưu dễ dàng hơn.</p>
      <p>Công cụ tạo kho lưu trữ nén chứa tất cả tệp PDF của bạn, giảm kích thước tổng và đơn giản hóa quản lý tệp.</p>
      <p>Tất cả xử lý diễn ra cục bộ trong trình duyệt của bạn, đảm bảo tệp của bạn vẫn riêng tư.</p>
    `,
    howToUse: [
      { step: 1, title: 'Tải lên PDF', description: 'Kéo và thả nhiều tệp PDF hoặc nhấp để chọn.' },
      { step: 2, title: 'Định cấu hình kho lưu trữ', description: 'Tùp chọn đặt tên kho lưu trữ và mức nén.' },
      { step: 3, title: 'Tạo và tải xuống', description: 'Nhấp Tạo để tạo kho lưu trữ ZIP.' },
    ],
    useCases: [
      { title: 'Chia sẻ tệp', description: 'Gói nhiều PDF để chia sẻ dễ dàng.', icon: 'share-2' },
      { title: 'Tạo sao lưu', description: 'Tạo sao lưu nén của bộ sưu tập PDF.', icon: 'archive' },
      { title: 'Đính kèm email', description: 'Kết hợp PDF thành một tệp đính kèm cho email.', icon: 'mail' },
    ],
    faq: [
      { question: 'Mức nén nào được áp dụng?', answer: 'Nén ZIP thường giảm kích thước tổng 10-30%.' },
      { question: 'Có giới hạn tệp không?', answer: 'Bạn có thể bao gồm tối đa 100 PDF trong một kho lưu trữ.' },
      { question: 'Tôi có thể đặt mật khẩu không?', answer: 'Tạo ZIP được bảo vệ bằng mật khẩu hiện không được hỗ trợ.' },
    ],
  },

  'compare-pdfs': {
    title: 'So sánh PDF',
    metaDescription: 'So sánh hai tài liệu PDF. Làm nổi bật sự khác biệt giữa các phiên bản.',
    keywords: ['so sánh pdf', 'pdf diff', 'so sánh tài liệu', 'so sánh phiên bản'],
    description: `
      <p>So sánh PDF phân tích hai tài liệu PDF và làm nổi bật sự khác biệt giữa chúng. Hoàn hảo để xem xét sửa đổi tài liệu, kiểm tra thay đổi hợp đồng hoặc xác minh chỉnh sửa.</p>
      <p>Xem tài liệu cạnh nhau hoặc chế độ chồng lên với sự khác biệt được làm nổi bật. Công cụ xác định thay đổi văn bản, bổ sung và xóa.</p>
      <p>Tất cả so sánh diễn ra cục bộ trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư.</p>
    `,
    howToUse: [
      { step: 1, title: 'Tải lên hai PDF', description: 'Tải lên tài liệu gốc và đã sửa đổi.' },
      { step: 2, title: 'So sánh tài liệu', description: 'Xem sự khác biệt được làm nổi bật ở chế độ cạnh nhau hoặc chồng lên.' },
      { step: 3, title: 'Xuất kết quả', description: 'Tải xuống báo cáo so sánh hoặc PDF có chú thích.' },
    ],
    useCases: [
      { title: 'Xem xét hợp đồng', description: 'So sánh phiên bản hợp đồng để xác định thay đổi.', icon: 'file-text' },
      { title: 'Sửa đổi tài liệu', description: 'Xem xét chỉnh sửa giữa các phiên bản tài liệu.', icon: 'git-compare' },
      { title: 'Kiểm soát chất lượng', description: 'Xác minh rằng chỉ thay đổi dự định được thực hiện.', icon: 'check-circle' },
    ],
    faq: [
      { question: 'Loại sự khác biệt nào được phát hiện?', answer: 'Bổ sung văn bản, xóa, sửa đổi và thay đổi định dạng.' },
      { question: 'Tôi có thể so sánh tài liệu đã quét không?', answer: 'Tài liệu đã quét nên được xử lý OCR trước để so sánh văn bản.' },
      { question: 'So sánh trực quan có sẵn không?', answer: 'Có, chế độ chồng lên hiển thị sự khác biệt trực quan giữa các trang.' },
    ],
  },

  'posterize-pdf': {
    title: 'Posterize PDF',
    metaDescription: 'Chia trang PDF lớn thành ô in. Tạo áp phích từ trang PDF.',
    keywords: ['posterize pdf', 'ô pdf', 'in khổ lớn', 'áp phích pdf'],
    description: `
      <p>Posterize PDF chia trang PDF lớn thành ô nhỏ hơn có thể in trên giấy tiêu chuẩn và lắp ráp thành áp phích. Hoàn hảo để in sơ đồ lớn, bản đồ hoặc nghệ thuật.</p>
      <p>Định cấu hình kích thước lưới và chồng lên để lắp ráp dễ dàng. Công cụ tự động tính toán kích thước ô cho đầu ra mục tiêu của bạn.</p>
      <p>Tất cả xử lý diễn ra cục bộ trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư.</p>
    `,
    howToUse: [
      { step: 1, title: 'Tải lên PDF của bạn', description: 'Kéo và thả PDF khổ lớn của bạn hoặc nhấp để chọn.' },
      { step: 2, title: 'Định cấu hình ô', description: 'Đặt kích thước lưới, chồng lên và kích thước giấy đầu ra.' },
      { step: 3, title: 'Tạo và tải xuống', description: 'Nhấp Tạo để tạo ô in và tải xuống.' },
    ],
    useCases: [
      { title: 'In áp phích', description: 'In áp phích lớn trên giấy tiêu chuẩn.', icon: 'maximize-2' },
      { title: 'In bản đồ', description: 'In bản đồ lớn theo phần để lắp ráp.', icon: 'map' },
      { title: 'Sản xuất nghệ thuật', description: 'Tạo bản in lớn từ nghệ thuật PDF.', icon: 'image' },
    ],
    faq: [
      { question: 'Chồng lên bao nhiêu là đủ?', answer: 'Chồng lên 10-20mm được khuyến nghị để căn chỉnh dễ dàng trong quá trình lắp ráp.' },
      { question: 'Tôi có thể thêm dấu cắt không?', answer: 'Có, dấu cắt có thể được thêm để giúp cắt và căn chỉnh.' },
      { question: 'Kích thước giấy nào được hỗ trợ?', answer: 'A4, Letter, A3 và kích thước tùy chỉnh được hỗ trợ.' },
    ],
  },

  // ==================== TỐI ƯU HÓA & SỬA CHỮA ====================
  'fix-page-size': {
    title: 'Khắc phục kích thước trang',
    metaDescription: 'Chuẩn hóa kích thước trang PDF. Chuyển đổi tất cả trang thành kích thước thống nhất.',
    keywords: ['khắc phục kích thước trang', 'chuẩn hóa pdf', 'trang thống nhất', 'thay đổi kích thước trang pdf'],
    description: `
      <p>Khắc phục kích thước trang chuẩn hóa tất cả trang trong PDF của bạn thành kích thước thống nhất. Chuyển đổi tài liệu kích thước hỗn hợp thành kích thước trang nhất quán để trình bày chuyên nghiệp hoặc in ấn.</p>
      <p>Chọn từ kích thước tiêu chuẩn (A4, Letter, v.v.) hoặc đặt kích thước tùy chỉnh. Nội dung được chia tỷ lệ hoặc định vị để vừa với kích thước trang mới.</p>
      <p>Tất cả xử lý diễn ra cục bộ trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư.</p>
    `,
    howToUse: [
      { step: 1, title: 'Tải lên PDF của bạn', description: 'Kéo và thả tệp PDF của bạn hoặc nhấp để chọn.' },
      { step: 2, title: 'Chọn kích thước mục tiêu', description: 'Chọn kích thước tiêu chuẩn hoặc nhập kích thước tùy chỉnh.' },
      { step: 3, title: 'Áp dụng và tải xuống', description: 'Nhấp Áp dụng để chuẩn hóa trang và tải xuống.' },
    ],
    useCases: [
      { title: 'Chuẩn bị in ấn', description: 'Chuẩn hóa trang để in nhất quán.', icon: 'printer' },
      { title: 'Dọn dẹp tài liệu', description: 'Khắc phục tài liệu có kích thước trang không nhất quán.', icon: 'file-check' },
      { title: 'Tài liệu chuyên nghiệp', description: 'Tạo tài liệu thống nhất để phân phối.', icon: 'briefcase' },
    ],
    faq: [
      { question: 'Nội dung được xử lý như thế nào?', answer: 'Nội dung được chia tỷ lệ để vừa hoặc căn giữa kích thước trang mới.' },
      { question: 'Tôi có thể bảo toàn tỷ lệ khung hình không?', answer: 'Có, nội dung có thể được chia tỷ lệ theo tỷ lệ để vừa.' },
      { question: 'Kích thước tiêu chuẩn nào có sẵn?', answer: 'A4, A3, Letter, Legal và các kích thước phổ biến khác.' },
    ],
  },

  'linearize-pdf': {
    title: 'Linearize PDF',
    metaDescription: 'Tối ưu hóa PDF để xem web nhanh. Bật tải tiến triển.',
    keywords: ['linearize pdf', 'xem web nhanh', 'tối ưu hóa pdf', 'pdf tiến triển'],
    description: `
      <p>Linearize PDF tối ưu hóa tài liệu của bạn để xem web nhanh. PDF được linearize có thể bắt đầu hiển thị trước khi toàn bộ tệp được tải xuống, cải thiện trải nghiệm người dùng.</p>
      <p>Cũng được gọi là "Fast Web View," tối ưu hóa này sắp xếp lại cấu trúc PDF để tải tiến triển trong trình duyệt web.</p>
      <p>Tất cả xử lý diễn ra cục bộ trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư.</p>
    `,
    howToUse: [
      { step: 1, title: 'Tải lên PDF của bạn', description: 'Kéo và thả tệp PDF của bạn hoặc nhấp để chọn.' },
      { step: 2, title: 'Linearize', description: 'Nhấp Linearize để tối ưu hóa cho xem web.' },
      { step: 3, title: 'Tải xuống', description: 'Tải xuống PDF đã tối ưu hóa của bạn.' },
    ],
    useCases: [
      { title: 'Xuất bản web', description: 'Tối ưu hóa PDF cho tải xuống trang web.', icon: 'globe' },
      { title: 'Đính kèm email', description: 'Tạo PDF mở nhanh hơn cho người nhận.', icon: 'mail' },
      { title: 'Tài liệu trực tuyến', description: 'Cải thiện trải nghiệm xem cho tài liệu trực tuyến.', icon: 'cloud' },
    ],
    faq: [
      { question: 'Linearization là gì?', answer: 'Linearization sắp xếp lại dữ liệu PDF để tải tiến triển.' },
      { question: 'Nó có giảm kích thước tệp không?', answer: 'Linearization có thể tăng nhẹ kích thước tệp do cấu trúc được thêm.' },
      { question: 'Nó tương thích với tất cả trình xem không?', answer: 'Có, PDF được linearize hoạt động trong tất cả trình đọc PDF.' },
    ],
  },

  'page-dimensions': {
    title: 'Kích thước trang',
    metaDescription: 'Phân tích kích thước trang PDF. Xem kích thước của tất cả trang trong tài liệu của bạn.',
    keywords: ['kích thước trang pdf', 'đo lường pdf', 'kích thước tài liệu', 'kích thước trang'],
    description: `
      <p>Kích thước trang phân tích và hiển thị kích thước của mọi trang trong tài liệu PDF của bạn. Xem kích thước ở các đơn vị khác nhau (inch, mm, điểm) và xác định trang có kích thước không tiêu chuẩn.</p>
      <p>Hữu ích cho chuẩn bị in ấn, phân tích tài liệu hoặc xác định kích thước trang không nhất quán.</p>
      <p>Tất cả phân tích diễn ra cục bộ trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư.</p>
    `,
    howToUse: [
      { step: 1, title: 'Tải lên PDF của bạn', description: 'Kéo và thả tệp PDF của bạn hoặc nhấp để chọn.' },
      { step: 2, title: 'Xem kích thước', description: 'Xem kích thước trang được hiển thị cho tất cả trang.' },
      { step: 3, title: 'Xuất báo cáo', description: 'Tùp chọn xuất kích thước dưới dạng JSON.' },
    ],
    useCases: [
      { title: 'Lập kế hoạch in ấn', description: 'Kiểm tra kích thước trang trước khi in.', icon: 'printer' },
      { title: 'Phân tích tài liệu', description: 'Xác định trang có kích thước bất thường.', icon: 'search' },
      { title: 'Kiểm soát chất lượng', description: 'Xác minh kích thước trang đáp ứng thông số kỹ thuật.', icon: 'check-circle' },
    ],
    faq: [
      { question: 'Đơn vị nào có sẵn?', answer: 'Inch, millimeter, centimeter và điểm.' },
      { question: 'Nó có hiển thị định hướng không?', answer: 'Có, định hướng dọc hoặc ngang được chỉ ra.' },
      { question: 'Tôi có thể khắc phục kích thước không nhất quán không?', answer: 'Sử dụng công cụ Khắc phục kích thước trang để chuẩn hóa kích thước.' },
    ],
  },

  'remove-restrictions': {
    title: 'Loại bỏ hạn chế',
    metaDescription: 'Loại bỏ hạn chế PDF. Mở khóa quyền in ấn, sao chép và chỉnh sửa.',
    keywords: ['loại bỏ hạn chế pdf', 'mở khóa pdf', 'quyền pdf', 'bỏ hạn chế pdf'],
    description: `
      <p>Loại bỏ hạn chế mở khóa PDF có hạn chế quyền ngăn cản in ấn, sao chép hoặc chỉnh sửa. Công cụ này loại bỏ mật khẩu chủ sở hữu trong khi bảo toàn nội dung tài liệu.</p>
      <p>Lưu ý: Công cụ này không thể loại bỏ mật khẩu người dùng ngăn mở tài liệu. Sử dụng Giải mã PDF cho tệp được bảo vệ bằng mật khẩu.</p>
      <p>Tất cả xử lý diễn ra cục bộ trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư.</p>
    `,
    howToUse: [
      { step: 1, title: 'Tải lên PDF bị hạn chế', description: 'Kéo và thả PDF bị hạn chế của bạn hoặc nhấp để chọn.' },
      { step: 2, title: 'Loại bỏ hạn chế', description: 'Nhấp Loại bỏ để mở khóa tài liệu.' },
      { step: 3, title: 'Tải xuống', description: 'Tải xuống PDF không hạn chế.' },
    ],
    useCases: [
      { title: 'Bật in ấn', description: 'Mở khóa PDF ngăn in ấn.', icon: 'printer' },
      { title: 'Bật sao chép', description: 'Cho phép chọn và sao chép văn bản.', icon: 'copy' },
      { title: 'Bật chỉnh sửa', description: 'Loại bỏ hạn chế trên chỉnh sửa tài liệu.', icon: 'edit' },
    ],
    faq: [
      { question: 'Điều này có hợp pháp không?', answer: 'Loại bỏ hạn chế từ tài liệu bạn sở hữu hoặc có quyền thường hợp pháp.' },
      { question: 'Nó có thể loại bỏ mật khẩu mở không?', answer: 'Không, bạn phải biết mật khẩu hiện tại để giải mã.' },
      { question: 'Nội dung có bị ảnh hưởng không?', answer: 'Không, chỉ hạn chế bị loại bỏ; nội dung không thay đổi.' },
    ],
  },

  'repair-pdf': {
    title: 'Sửa chữa PDF',
    metaDescription: 'Khắc phục tệp PDF bị hỏng. Khôi phục và sửa chữa tài liệu bị hỏng.',
    keywords: ['sửa chữa pdf', 'khắc phục pdf', 'khôi phục pdf', 'pdf bị hỏng'],
    description: `
      <p>Sửa chữa PDF cố gắng khắc phục tệp PDF bị hỏng hoặc bị hỏng. Công cụ phân tích cấu trúc tài liệu và xây dựng lại để khôi phục nhiều nội dung nhất có thể.</p>
      <p>Hữu ích để khôi phục tệp không mở được, hiển thị lỗi hoặc có nội dung bị thiếu do hỏng.</p>
      <p>Tất cả sửa chữa diễn ra cục bộ trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư.</p>
    `,
    howToUse: [
      { step: 1, title: 'Tải lên PDF bị hỏng', description: 'Kéo và thả PDF bị hỏng của bạn hoặc nhấp để chọn.' },
      { step: 2, title: 'Sửa chữa tài liệu', description: 'Nhấp Sửa chữa để cố gắng khôi phục.' },
      { step: 3, title: 'Tải xuống', description: 'Tải xuống PDF đã sửa chữa nếu thành công.' },
    ],
    useCases: [
      { title: 'Khôi phục tệp', description: 'Khôi phục PDF không mở đúng cách.', icon: 'refresh-cw' },
      { title: 'Khắc phục lỗi', description: 'Sửa chữa tệp hiển thị thông báo lỗi.', icon: 'wrench' },
      { title: 'Khôi phục nội dung', description: 'Khôi phục nội dung từ tệp bị hỏng một phần.', icon: 'file-check' },
    ],
    faq: [
      { question: 'Tất cả PDF có thể sửa chữa được không?', answer: 'Thành công phụ thuộc vào loại và mức độ hỏng.' },
      { question: 'Tất cả nội dung có được khôi phục không?', answer: 'Công cụ khôi phục nhiều nhất có thể; tệp bị hỏng nghiêm trọng có thể có mất mát.' },
      { question: 'Tôi nên giữ tệp gốc không?', answer: 'Có, luôn giữ tệp gốc làm bản sao lưu.' },
    ],
  },

  // ==================== BẢO MẬT PDF ====================
  'encrypt-pdf': {
    title: 'Mã hóa PDF',
    metaDescription: 'Bảo vệ bằng mật khẩu tệp PDF. Thêm mã hóa và đặt quyền.',
    keywords: ['mã hóa pdf', 'bảo vệ bằng mật khẩu pdf', 'bảo mật pdf', 'mã hóa pdf'],
    description: `
      <p>Mã hóa PDF thêm bảo vệ bằng mật khẩu và mã hóa vào tài liệu PDF của bạn. Đặt mật khẩu người dùng để ngăn mở, và mật khẩu chủ sở hữu để kiểm soát quyền như in ấn và sao chép.</p>
      <p>Chọn từ các mức mã hóa khác nhau (128-bit hoặc 256-bit AES) cho nhu cầu bảo mật khác nhau.</p>
      <p>Tất cả mã hóa diễn ra cục bộ trong trình duyệt của bạn, đảm bảo mật khẩu và tài liệu của bạn vẫn riêng tư.</p>
    `,
    howToUse: [
      { step: 1, title: 'Tải lên PDF của bạn', description: 'Kéo và thả tệp PDF của bạn hoặc nhấp để chọn.' },
      { step: 2, title: 'Đặt mật khẩu', description: 'Nhập mật khẩu người dùng và/hoặc mật khẩu chủ sở hữu. Định cấu hình quyền.' },
      { step: 3, title: 'Mã hóa và tải xuống', description: 'Nhấp Mã hóa để bảo mật PDF của bạn và tải xuống.' },
    ],
    useCases: [
      { title: 'Tài liệu bí mật', description: 'Bảo vệ tài liệu kinh doanh nhạy cảm.', icon: 'lock' },
      { title: 'Tệp cá nhân', description: 'Bảo mật tài liệu cá nhân như tờ khai thuế.', icon: 'shield' },
      { title: 'Phân phối được kiểm soát', description: 'Giới hạn những gì người nhận có thể làm với tài liệu.', icon: 'key' },
    ],
    faq: [
      { question: 'Sự khác biệt giữa mật khẩu người dùng và chủ sở hữu là gì?', answer: 'Mật khẩu người dùng ngăn mở; mật khẩu chủ sở hữu kiểm soát quyền.' },
      { question: 'Mã hóa nào được sử dụng?', answer: 'Tùy chọn mã hóa 128-bit hoặc 256-bit AES có sẵn.' },
      { question: 'Tôi có thể đặt quyền mà không có mật khẩu người dùng không?', answer: 'Có, bạn có thể đặt mật khẩu chủ sở hữu chỉ để kiểm soát quyền.' },
    ],
  },

  'sanitize-pdf': {
    title: 'Vệ sinh PDF',
    metaDescription: 'Loại bỏ dữ liệu ẩn khỏi PDF. Dọn dẹp siêu dữ liệu, tập lệnh và thông tin nhạy cảm.',
    keywords: ['vệ sinh pdf', 'dọn dẹp pdf', 'loại bỏ dữ liệu ẩn', 'quyền riêng tư pdf'],
    description: `
      <p>Vệ sinh PDF loại bỏ dữ liệu ẩn và thông tin nhạy cảm tiềm ẩn khỏi tài liệu của bạn. Loại bỏ siêu dữ liệu, tập lệnh nhúng, tệp đính kèm, nhận xét và nội dung ẩn khác.</p>
      <p>Cần thiết để chuẩn bị tài liệu cho phân phối công khai hoặc khi quyền riêng tư là vấn đề.</p>
      <p>Tất cả vệ sinh diễn ra cục bộ trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư.</p>
    `,
    howToUse: [
      { step: 1, title: 'Tải lên PDF của bạn', description: 'Kéo và thả tệp PDF của bạn hoặc nhấp để chọn.' },
      { step: 2, title: 'Chọn loại bỏ gì', description: 'Chọn loại dữ liệu ẩn nào để loại bỏ.' },
      { step: 3, title: 'Vệ sinh và tải xuống', description: 'Nhấp Vệ sinh để dọn dẹp PDF và tải xuống.' },
    ],
    useCases: [
      { title: 'Phát hành công khai', description: 'Chuẩn bị tài liệu cho phân phối công khai.', icon: 'globe' },
      { title: 'Bảo vệ quyền riêng tư', description: 'Loại bỏ thông tin cá nhân trước khi chia sẻ.', icon: 'shield' },
      { title: 'Tuân thủ bảo mật', description: 'Đáp ứng yêu cầu bảo mật cho xử lý tài liệu.', icon: 'check-circle' },
    ],
    faq: [
      { question: 'Dữ liệu ẩn nào bị loại bỏ?', answer: 'Siêu dữ liệu, tập lệnh, tệp đính kèm, nhận xét, dữ liệu biểu mẫu và lớp ẩn.' },
      { question: 'Nội dung hiển thị có bị ảnh hưởng không?', answer: 'Không, chỉ dữ liệu ẩn bị loại bỏ; nội dung tài liệu không thay đổi.' },
      { question: 'Điều này có thể đảo ngược không?', answer: 'Không, dữ liệu đã loại bỏ không thể khôi phục. Giữ bản sao của bản gốc.' },
    ],
  },

  'decrypt-pdf': {
    title: 'Giải mã PDF',
    metaDescription: 'Loại bỏ mật khẩu khỏi tệp PDF. Mở khóa tài liệu được bảo vệ bằng mật khẩu.',
    keywords: ['giải mã pdf', 'loại bỏ mật khẩu pdf', 'mở khóa pdf', 'công cụ loại bỏ mật khẩu pdf'],
    description: `
      <p>Giải mã PDF loại bỏ bảo vệ bằng mật khẩu khỏi tài liệu PDF. Nhập mật khẩu hiện tại để mở khóa tệp và tạo bản sao không bảo vệ.</p>
      <p>Công cụ này yêu cầu bạn biết mật khẩu hiện tại. Nó không thể crack hoặc bỏ qua mật khẩu không xác định.</p>
      <p>Tất cả giải mã diễn ra cục bộ trong trình duyệt của bạn, đảm bảo mật khẩu và tài liệu của bạn vẫn riêng tư.</p>
    `,
    howToUse: [
      { step: 1, title: 'Tải lên PDF được bảo vệ', description: 'Kéo và thả PDF được bảo vệ bằng mật khẩu của bạn.' },
      { step: 2, title: 'Nhập mật khẩu', description: 'Nhập mật khẩu tài liệu hiện tại.' },
      { step: 3, title: 'Giải mã và tải xuống', description: 'Nhấp Giải mã để loại bỏ bảo vệ và tải xuống.' },
    ],
    useCases: [
      { title: 'Loại bỏ mật khẩu cũ', description: 'Mở khóa tài liệu khi mật khẩu không còn cần thiết.', icon: 'unlock' },
      { title: 'Đơn giản hóa truy cập', description: 'Tạo bản sao không bảo vệ để chia sẻ dễ dàng.', icon: 'share-2' },
      { title: 'Lưu trữ tài liệu', description: 'Loại bỏ mật khẩu trước khi lưu trữ lâu dài.', icon: 'archive' },
    ],
    faq: [
      { question: 'Nó có thể crack mật khẩu không xác định không?', answer: 'Không, bạn phải biết mật khẩu hiện tại để giải mã.' },
      { question: 'Tệp gốc có bị sửa đổi không?', answer: 'Không, bản sao không bảo vệ mới được tạo.' },
      { question: 'Điều gì nếu tôi quên mật khẩu?', answer: 'Thật không may, chúng tôi không thể khôi phục mật khẩu bị quên.' },
    ],
  },

  'flatten-pdf': {
    title: 'Làm phẳng PDF',
    metaDescription: 'Làm phẳng biểu mẫu và chú thích PDF. Làm cho nội dung không thể chỉnh sửa.',
    keywords: ['làm phẳng pdf', 'làm phẳng biểu mẫu', 'làm phẳng chú thích', 'pdf không thể chỉnh sửa'],
    description: `
      <p>Làm phẳng PDF chuyển đổi các phần tử tương tác như trường biểu mẫu và chú thích thành nội dung tĩnh. PDF được làm phẳng trông giống nhau nhưng không thể chỉnh sửa được nữa.</p>
      <p>Hoàn hảo để hoàn thiện biểu mẫu đã điền, bảo toàn chú thích hoặc tạo phiên bản tài liệu không thể chỉnh sửa.</p>
      <p>Tất cả xử lý diễn ra cục bộ trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư.</p>
    `,
    howToUse: [
      { step: 1, title: 'Tải lên PDF của bạn', description: 'Kéo và thả PDF có biểu mẫu hoặc chú thích của bạn.' },
      { step: 2, title: 'Chọn làm phẳng gì', description: 'Chọn làm phẳng biểu mẫu, chú thích hoặc cả hai.' },
      { step: 3, title: 'Làm phẳng và tải xuống', description: 'Nhấp Làm phẳng để tạo PDF tĩnh.' },
    ],
    useCases: [
      { title: 'Hoàn thiện biểu mẫu', description: 'Khóa dữ liệu biểu mẫu đã điền để ngăn thay đổi.', icon: 'lock' },
      { title: 'Bảo toàn chú thích', description: 'Làm cho chú thích vĩnh viễn trong tài liệu.', icon: 'check-circle' },
      { title: 'Lưu trữ tài liệu', description: 'Tạo phiên bản không thể chỉnh sửa để lưu trữ.', icon: 'archive' },
    ],
    faq: [
      { question: 'Làm phẳng có thể đảo ngược không?', answer: 'Không, làm phẳng là vĩnh viễn. Giữ bản sao của bản gốc.' },
      { question: 'Giao diện có thay đổi không?', answer: 'Không, tài liệu trông giống nhau nhưng không còn tương tác.' },
      { question: 'Nó có giảm kích thước tệp không?', answer: 'Đôi khi, vì các phần tử tương tác được chuyển đổi thành nội dung đơn giản hơn.' },
    ],
  },

  'remove-metadata': {
    title: 'Loại bỏ siêu dữ liệu',
    metaDescription: 'Loại bỏ siêu dữ liệu khỏi tệp PDF. Loại bỏ tác giả, ngày tháng và thuộc tính tài liệu.',
    keywords: ['loại bỏ siêu dữ liệu pdf', 'loại bỏ siêu dữ liệu', 'quyền riêng tư pdf', 'pdf ẩn danh'],
    description: `
      <p>Loại bỏ siêu dữ liệu loại bỏ tất cả thuộc tính và siêu dữ liệu khỏi tệp PDF của bạn. Loại bỏ tên tác giả, ngày tạo, thông tin phần mềm và dữ liệu nhận dạng khác.</p>
      <p>Cần thiết cho quyền riêng tư khi chia sẻ tài liệu hoặc khi siêu dữ liệu có thể tiết lộ thông tin nhạy cảm.</p>
      <p>Tất cả xử lý diễn ra cục bộ trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư.</p>
    `,
    howToUse: [
      { step: 1, title: 'Tải lên PDF của bạn', description: 'Kéo và thả tệp PDF của bạn hoặc nhấp để chọn.' },
      { step: 2, title: 'Loại bỏ siêu dữ liệu', description: 'Nhấp Loại bỏ để loại bỏ tất cả siêu dữ liệu.' },
      { step: 3, title: 'Tải xuống', description: 'Tải xuống PDF không có siêu dữ liệu.' },
    ],
    useCases: [
      { title: 'Bảo vệ quyền riêng tư', description: 'Loại bỏ thông tin cá nhân trước khi chia sẻ.', icon: 'shield' },
      { title: 'Tài liệu ẩn danh', description: 'Tạo tài liệu mà không có ghi công tác giả.', icon: 'user-x' },
      { title: 'Phân phối sạch', description: 'Phân phối tài liệu mà không có siêu dữ liệu nội bộ.', icon: 'send' },
    ],
    faq: [
      { question: 'Siêu dữ liệu nào bị loại bỏ?', answer: 'Tác giả, tiêu đề, chủ đề, từ khóa, ngày tháng, người tạo và nhà sản xuất.' },
      { question: 'Siêu dữ liệu XMP có bị loại bỏ không?', answer: 'Có, cả siêu dữ liệu tiêu chuẩn và XMP đều bị loại bỏ.' },
      { question: 'Nội dung có bị ảnh hưởng không?', answer: 'Không, chỉ siêu dữ liệu bị loại bỏ; nội dung tài liệu không thay đổi.' },
    ],
  },

  'change-permissions': {
    title: 'Thay đổi quyền',
    metaDescription: 'Sửa đổi quyền PDF. Kiểm soát truy cập in ấn, sao chép và chỉnh sửa.',
    keywords: ['quyền pdf', 'thay đổi truy cập pdf', 'hạn chế pdf', 'bảo mật pdf'],
    description: `
      <p>Thay đổi quyền sửa đổi các điều khiển truy cập trên tài liệu PDF của bạn. Bật hoặc tắt quyền in ấn, sao chép, chỉnh sửa và chú thích.</p>
      <p>Đặt mật khẩu chủ sở hữu để thực thi các hạn chế này. Người nhận có thể xem tài liệu nhưng bị giới hạn trong các hành động họ có thể thực hiện.</p>
      <p>Tất cả xử lý diễn ra cục bộ trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư.</p>
    `,
    howToUse: [
      { step: 1, title: 'Tải lên PDF của bạn', description: 'Kéo và thả tệp PDF của bạn hoặc nhấp để chọn.' },
      { step: 2, title: 'Đặt quyền', description: 'Bật hoặc tắt in ấn, sao chép, chỉnh sửa và chú thích.' },
      { step: 3, title: 'Áp dụng và tải xuống', description: 'Đặt mật khẩu chủ sở hữu và tải xuống PDF bị hạn chế.' },
    ],
    useCases: [
      { title: 'Ngăn sao chép', description: 'Tắt sao chép văn bản để bảo vệ nội dung.', icon: 'copy' },
      { title: 'Kiểm soát in ấn', description: 'Hạn chế hoặc cho phép in tài liệu.', icon: 'printer' },
      { title: 'Giới hạn chỉnh sửa', description: 'Ngăn chặn sửa đổi tài liệu.', icon: 'edit-3' },
    ],
    faq: [
      { question: 'Tôi có cần mật khẩu không?', answer: 'Mật khẩu chủ sở hữu là cần thiết để thực thi quyền.' },
      { question: 'Quyền có thể bị xóa không?', answer: 'Có, với mật khẩu chủ sở hữu hoặc sử dụng công cụ Loại bỏ hạn chế.' },
      { question: 'Tất cả trình đọc PDF có tương thích không?', answer: 'Hầu hết trình đọc PDF tôn trọng quyền, nhưng một số có thể không thực thi chúng.' },
    ],
  },

  'pdf-to-docx': {
    title: 'PDF sang Word',
    metaDescription: 'Chuyển đổi PDF sang tài liệu Word có thể chỉnh sửa. Bảo toàn định dạng và bố cục.',
    keywords: ['pdf sang word', 'docx sang pdf', 'chuyển đổi word', 'trình chuyển đổi word', 'microsoft word sang pdf'],
    description: `
      <p>PDF sang Word chuyển đổi tài liệu PDF của bạn thành tệp Microsoft Word có thể chỉnh sửa (DOCX). Công cụ bảo toàn bố cục gốc, định dạng, hình ảnh và luồng văn bản.</p>
      <p>Dễ dàng chỉnh sửa nội dung PDF của bạn trong Word mà không cần gõ lại. Hoàn hảo cho hợp đồng, báo cáo và sơ yếu lý lịch.</p>
      <p>Tất cả chuyển đổi diễn ra cục bộ trong trình duyệt của bạn bằng công nghệ WebAssembly, đảm bảo tài liệu của bạn không bao giờ rời khỏi thiết bị của bạn.</p>
    `,
    howToUse: [
      { step: 1, title: 'Tải lên PDF của bạn', description: 'Kéo và thả tệp PDF của bạn hoặc nhấp để chọn.' },
      { step: 2, title: 'Chuyển đổi', description: 'Chờ quá trình chuyển đổi hoàn thành.' },
      { step: 3, title: 'Tải xuống Word Doc', description: 'Tải xuống tệp DOCX có thể chỉnh sửa đầy đủ của bạn.' },
    ],
    useCases: [
      { title: 'Chỉnh sửa hợp đồng', description: 'Chuyển đổi PDF hợp đồng sang Word để chỉnh sửa và sửa đổi.', icon: 'file-text' },
      { title: 'Cập nhật sơ yếu lý lịch', description: 'Cập nhật sơ yếu lý lịch PDF cũ bằng cách chuyển đổi chúng sang Word.', icon: 'user' },
      { title: 'Tái sử dụng nội dung', description: 'Trích xuất nội dung từ PDF báo cáo để sử dụng trong tài liệu khác.', icon: 'copy' },
    ],
    faq: [
      { question: 'Định dạng có được bảo toàn không?', answer: 'Có, công cụ cố gắng bảo toàn bố cục, phông chữ và hình ảnh một cách chính xác nhất có thể.' },
      { question: 'Tôi có thể chuyển đổi PDF đã quét không?', answer: 'PDF đã quét sẽ được chuyển đổi dưới dạng hình ảnh trong Word trừ khi bạn sử dụng OCR trước.' },
      { question: 'Nó có tương thích với Word không?', answer: 'Có, đầu ra là tệp .docx tiêu chuẩn tương thích với Microsoft Word và Google Docs.' },
    ],
  },

  // ==================== CÔNG CỤ MỚI ====================
  'deskew-pdf': {
    title: 'Deskew PDF',
    metaDescription: 'Tự động làm thẳng trang PDF đã quét hoặc bị nghiêng. Khắc phục tài liệu bị lệch với độ chính xác góc phát hiện.',
    keywords: ['deskew pdf', 'làm thẳng pdf', 'khắc phục quét lệch', 'tự động xoay pdf', 'sửa góc pdf'],
    description: `
      <p>Deskew PDF tự động phát hiện và sửa chữa trang bị nghiêng hoặc lệch trong tài liệu PDF của bạn. Điều này thiết yếu cho tài liệu đã quét được đưa vào máy quét theo góc độ.</p>
      <p>Công cụ sử dụng phân tích hình ảnh nâng cao để phát hiện góc xoay chính xác của mỗi trang và sửa chữa nó thành căn chỉnh dọc. Bạn có thể điều chỉnh ngưỡng độ nhạy và cài đặt DPI để kết quả tối ưu.</p>
      <p>Tất cả xử lý diễn ra cục bộ trong trình duyệt của bạn bằng công nghệ WebAssembly, đảm bảo tài liệu của bạn vẫn riêng tư.</p>
    `,
    howToUse: [
      { step: 1, title: 'Tải lên PDF của bạn', description: 'Kéo và thả tệp PDF đã quét của bạn hoặc nhấp để chọn.' },
      { step: 2, title: 'Định cấu hình cài đặt', description: 'Điều chỉnh độ nhạy ngưỡng và DPI nếu cần để phát hiện tốt hơn.' },
      { step: 3, title: 'Xử lý và tải xuống', description: 'Nhấp Deskew để làm thẳng trang và tải xuống PDF đã sửa chữa.' },
    ],
    useCases: [
      { title: 'Tài liệu đã quét', description: 'Khắc phục trang được quét theo góc từ máy cấp giấy tài liệu.', icon: 'scan' },
      { title: 'Quét di động', description: 'Sửa chữa ảnh bị nghiêng của tài liệu được chụp bằng điện thoại thông minh.', icon: 'smartphone' },
      { title: 'Khôi phục lưu trữ', description: 'Làm thẳng lưu trữ đã quét cũ để dễ đọc hơn.', icon: 'archive' },
    ],
    faq: [
      { question: 'Độ chính xác phát hiện góc là bao nhiêu?', answer: 'Công cụ có thể phát hiện và sửa chữa góc nhỏ đến 0.1 độ để căn chỉnh chính xác.' },
      { question: 'Chất lượng văn bản có bị ảnh hưởng không?', answer: 'Quá trình deskew duy trì chất lượng văn bản trong khi xoay nội dung trang.' },
      { question: 'Tôi có thể deskew chỉ trang cụ thể không?', answer: 'Công cụ xử lý tất cả trang nhưng chỉ sửa chữa những trang được phát hiện là bị lệch.' },
    ],
  },

  'pdf-booklet': {
    title: 'Tạo booklet PDF',
    metaDescription: 'Sắp xếp bố cục booklet từ PDF để in. Sắp xếp trang cho ràng buộc saddle-stitch với nhiều tùy chọn lưới.',
    keywords: ['pdf booklet', 'trình tạo booklet', 'in booklet', 'saddle stitch', 'imposition'],
    description: `
      <p>Tạo booklet PDF sắp xếp trang PDF của bạn thành bố cục booklet sẵn sàng in, hoàn hảo để tạo brochure, zine, booklet và ấn phẩm saddle-stitched.</p>
      <p>Chọn từ nhiều chế độ lưới (1x2, 2x2, 2x4, 4x4), kích thước giấy và tùy chọn định hướng. Công cụ tự động xử lý imposition trang cho thứ tự gấp chính xác.</p>
      <p>Tất cả xử lý diễn ra cục bộ trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư.</p>
    `,
    howToUse: [
      { step: 1, title: 'Tải lên PDF của bạn', description: 'Tải lên tài liệu PDF bạn muốn chuyển đổi thành booklet.' },
      { step: 2, title: 'Chọn bố cục', description: 'Chọn chế độ lưới, kích thước giấy, định hướng và tùy chọn xoay.' },
      { step: 3, title: 'Tạo và tải xuống', description: 'Tạo bố cục booklet và tải xuống để in.' },
    ],
    useCases: [
      { title: 'Brochure', description: 'Tạo brochure gấp sẵn từ tài liệu PDF tiêu chuẩn.', icon: 'book-open' },
      { title: 'Zine', description: 'Sản xuất zine tự xuất bản với imposition trang thích hợp.', icon: 'book' },
      { title: 'Chương trình sự kiện', description: 'Tạo booklet chương trình chuyên nghiệp cho sự kiện.', icon: 'calendar' },
    ],
    faq: [
      { question: 'Ràng buộc saddle-stitch là gì?', answer: 'Saddle-stitch là phương pháp ràng buộc nơi các tờ gấp được lồng vào nhau và đóng ghim qua nếp gấp.' },
      { question: 'Chế độ lưới nào tôi nên sử dụng?', answer: '1x2 là tiêu chuẩn cho booklet. Sử dụng 2x2 hoặc lớn hơn để in nhiều trang để tiết kiệm giấy.' },
      { question: 'Tôi có thể xem trước bố cục không?', answer: 'Có, công cụ cung cấp xem trước trực quan trước khi tạo booklet cuối cùng.' },
    ],
  },

  'rasterize-pdf': {
    title: 'Rasterize PDF',
    metaDescription: 'Chuyển đổi trang PDF thành hình ảnh chất lượng cao. Xuất dưới dạng PNG, JPEG hoặc WebP với cài đặt DPI tùy chỉnh.',
    keywords: ['rasterize pdf', 'pdf sang hình ảnh', 'pdf sang png', 'pdf sang jpeg', 'chuyển đổi trang pdf'],
    description: `
      <p>Rasterize PDF chuyển đổi trang PDF của bạn thành hình ảnh raster chất lượng cao. Chọn từ định dạng đầu ra PNG, JPEG hoặc WebP với kiểm soát đầy đủ DPI và chất lượng.</p>
      <p>Hoàn hảo để tạo hình thu nhỏ, đồ họa mạng xã hội hoặc lưu trữ nội dung PDF dưới dạng hình ảnh. Hỗ trợ chọn phạm vi trang và xử lý hàng loạt.</p>
      <p>Tất cả xử lý diễn ra cục bộ trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư.</p>
    `,
    howToUse: [
      { step: 1, title: 'Tải lên PDF của bạn', description: 'Kéo và thả tệp PDF của bạn hoặc nhấp để chọn.' },
      { step: 2, title: 'Định cấu hình đầu ra', description: 'Chọn DPI, định dạng đầu ra (PNG/JPEG/WebP), chất lượng và phạm vi trang.' },
      { step: 3, title: 'Chuyển đổi và tải xuống', description: 'Xử lý trang và tải xuống hình ảnh riêng lẻ hoặc dưới dạng kho lưu trữ ZIP.' },
    ],
    useCases: [
      { title: 'Mạng xã hội', description: 'Chuyển đổi trang trình bày PDF sang hình ảnh để đăng mạng xã hội.', icon: 'share-2' },
      { title: 'Hình thu nhỏ', description: 'Tạo hình thu nhỏ xem trước cho tài liệu PDF.', icon: 'image' },
      { title: 'Xuất bản web', description: 'Chuyển đổi nội dung PDF sang định dạng hình ảnh thân thiện với web.', icon: 'globe' },
    ],
    faq: [
      { question: 'Tôi nên dùng DPI nào?', answer: '72 DPI cho xem màn hình, 150 DPI cho tài liệu tiêu chuẩn, 300 DPI cho chất lượng in.' },
      { question: 'Định dạng nào tốt nhất?', answer: 'PNG cho chất lượng/độ trong suốt, JPEG cho kích thước nhỏ, WebP cho web hiện đại.' },
      { question: 'Tôi có thể chuyển đổi chỉ trang cụ thể không?', answer: 'Có, chỉ định phạm vi trang như "1-5, 8, 10-15" để chuyển đổi chỉ những trang đó.' },
    ],
  },

  'markdown-to-pdf': {
    title: 'Markdown sang PDF',
    metaDescription: 'Chuyển đổi tệp Markdown thành tài liệu PDF được định dạng đẹp. Hỗ trợ GitHub Flavored Markdown và làm nổi bật cú pháp.',
    keywords: ['markdown sang pdf', 'md sang pdf', 'chuyển đổi markdown', 'gfm sang pdf', 'trình chuyển đổi markdown'],
    description: `
      <p>Markdown sang PDF chuyển đổi tệp Markdown của bạn thành tài liệu PDF được định dạng chuyên nghiệp. Hỗ trợ CommonMark và GitHub Flavored Markdown (GFM) bao gồm bảng, danh sách nhiệm vụ và khối mã.</p>
      <p>Chọn từ nhiều chủ đề (sáng, tối, GitHub) và tùy chỉnh kích thước trang và lề. Khối mã được làm nổi bật cú pháp để dễ đọc hơn.</p>
      <p>Tất cả chuyển đổi diễn ra cục bộ trong trình duyệt của bạn, đảm bảo nội dung của bạn vẫn riêng tư.</p>
    `,
    howToUse: [
      { step: 1, title: 'Tải lên tệp Markdown', description: 'Tải lên tệp .md hoặc .markdown của bạn.' },
      { step: 2, title: 'Chọn chủ đề', description: 'Chọn chủ đề trực quan và định cấu hình cài đặt trang.' },
      { step: 3, title: 'Chuyển đổi và tải xuống', description: 'Tạo PDF được định dạng và tải xuống.' },
    ],
    useCases: [
      { title: 'Tài liệu', description: 'Chuyển đổi tệp README và tài liệu sang PDF có thể chia sẻ.', icon: 'file-text' },
      { title: 'Xuất ghi chú', description: 'Xuất ghi chú Markdown sang PDF để in hoặc chia sẻ.', icon: 'edit-3' },
      { title: 'Báo cáo', description: 'Tạo báo cáo PDF từ Markdown với định dạng chuyên nghiệp.', icon: 'bar-chart' },
    ],
    faq: [
      { question: 'GitHub Flavored Markdown có được hỗ trợ không?', answer: 'Có, bảng, danh sách nhiệm vụ, gạch ngang và các tính năng GFM khác được hỗ trợ.' },
      { question: 'Tôi có thể tùy chỉnh định dạng không?', answer: 'Chọn từ chủ đề đặt sẵn hoặc thêm CSS tùy chỉnh để kiểm soát đầy đủ.' },
      { question: 'Khối mã có được làm nổi bật không?', answer: 'Có, khối mã bao gồm làm nổi bật cú pháp cho các ngôn ngữ phổ biến.' },
    ],
  },

  'email-to-pdf': {
    title: 'Email sang PDF',
    metaDescription: 'Chuyển đổi tệp email (.eml) sang tài liệu PDF. Bảo toàn định dạng, hình ảnh nội tuyến và tệp đính kèm.',
    keywords: ['email sang pdf', 'eml sang pdf', 'chuyển đổi email', 'trình chuyển đổi email', 'lưu email dưới dạng pdf'],
    description: `
      <p>Email sang PDF chuyển đổi tệp email (.eml) của bạn thành tài liệu PDF được định dạng tốt. Công cụ bảo toàn thông tin tiêu đề email, nội dung cơ thể, hình ảnh nội tuyến và liệt kê tệp đính kèm.</p>
      <p>Tùy chỉnh tùy chọn đầu ra bao gồm kích thước trang, định dạng ngày tháng và có bao gồm CC/BCC và thông tin tệp đính kèm hay không.</p>
      <p>Tất cả chuyển đổi diễn ra cục bộ trong trình duyệt của bạn, đảm bảo email của bạn vẫn riêng tư.</p>
    `,
    howToUse: [
      { step: 1, title: 'Tải lên tệp Email', description: 'Tải lên tệp email .eml của bạn.' },
      { step: 2, title: 'Định cấu hình tùy chọn', description: 'Đặt kích thước trang và chọn trường nào để bao gồm.' },
      { step: 3, title: 'Chuyển đổi và tải xuống', description: 'Chuyển đổi sang PDF và tải xuống kết quả.' },
    ],
    useCases: [
      { title: 'Hồ sơ pháp lý', description: 'Lưu trữ email quan trọng dưới dạng PDF để ghi nhận pháp lý.', icon: 'scale' },
      { title: 'Lưu trữ kinh doanh', description: 'Chuyển đổi thư tín kinh doanh sang PDF để lưu trữ hồ sơ.', icon: 'briefcase' },
      { title: 'Bảo quản bằng chứng', description: 'Lưu bằng chứng email ở định dạng PDF không thể chỉnh sửa.', icon: 'shield' },
    ],
    faq: [
      { question: 'Định dạng email nào được hỗ trợ?', answer: 'Hiện tại tệp .eml được hỗ trợ đầy đủ. Hỗ trợ MSG sẽ có sớm.' },
      { question: 'Tệp đính kèm có được bao gồm không?', answer: 'Tên tệp đính kèm được liệt kê trong PDF. Tệp thực tế không được nhúng.' },
      { question: 'Định dạng email có được bảo toàn không?', answer: 'Có, email HTML duy trì định dạng của chúng một cách chính xác nhất có thể.' },
    ],
  },

  'cbz-to-pdf': {
    title: 'CBZ sang PDF',
    metaDescription: 'Chuyển đổi kho lưu trữ truyện tranh (CBZ) sang PDF. Bảo toàn thứ tự hình ảnh và chất lượng để truyện tranh kỹ thuật số.',
    keywords: ['cbz sang pdf', 'truyện tranh sang pdf', 'chuyển đổi cbz', 'trình chuyển đổi truyện tranh', 'cbz converter'],
    description: `
      <p>CBZ sang PDF chuyển đổi tệp Kho lưu trữ Truyện tranh (CBZ) thành tài liệu PDF. Công cụ trích xuất tất cả hình ảnh từ kho lưu trữ CBZ và biên soạn chúng thành PDF trong khi duy trì thứ tự đọc chính xác.</p>
      <p>Chọn từ nhiều tùy chọn kích thước trang bao gồm kích thước hình ảnh gốc hoặc kích thước truyện tranh tiêu chuẩn. Hoàn hảo để đọc truyện tranh trên thiết bị hỗ trợ PDF nhưng không hỗ trợ CBZ.</p>
      <p>Tất cả chuyển đổi diễn ra cục bộ trong trình duyệt của bạn, đảm bảo truyện tranh của bạn vẫn riêng tư.</p>
    `,
    howToUse: [
      { step: 1, title: 'Tải lên tệp CBZ', description: 'Tải lên tệp kho lưu trữ truyện tranh .cbz của bạn.' },
      { step: 2, title: 'Chọn tùy chọn', description: 'Chọn kích thước trang và cài đặt chất lượng hình ảnh.' },
      { step: 3, title: 'Chuyển đổi và tải xuống', description: 'Chuyển đổi sang PDF và tải xuống truyện tranh của bạn.' },
    ],
    useCases: [
      { title: 'Tương thích E-Reader', description: 'Chuyển đổi CBZ sang PDF cho e-reader chỉ hỗ trợ PDF.', icon: 'book' },
      { title: 'Lưu trữ truyện tranh', description: 'Tạo lưu trữ PDF của bộ sưu tập truyện tranh kỹ thuật số của bạn.', icon: 'archive' },
      { title: 'Chuẩn bị in ấn', description: 'Chuyển đổi truyện tranh kỹ thuật số sang PDF để in ấn.', icon: 'printer' },
    ],
    faq: [
      { question: 'Định dạng CBZ là gì?', answer: 'CBZ là kho lưu trữ ZIP chứa trang truyện tranh dưới dạng tệp hình ảnh, được đổi tên với phần mở rộng .cbz.' },
      { question: 'Chất lượng hình ảnh có được bảo toàn không?', answer: 'Có, hình ảnh được nhúng ở chất lượng gốc trong PDF.' },
      { question: 'Thư mục lồng nhau có được hỗ trợ không?', answer: 'Có, hình ảnh từ tất cả thư mục trong kho lưu trữ được trích xuất và sắp xếp.' },
    ],
  },

  'pdf-to-pdfa': {
    title: 'PDF sang PDF/A',
    metaDescription: 'Chuyển đổi PDF sang định dạng lưu trữ PDF/A. Đảm bảo bảo quản tài liệu lâu dài với tiêu chuẩn ISO.',
    keywords: ['pdf sang pdfa', 'trình chuyển đổi pdfa', 'lưu trữ pdf', 'bảo quản pdf lâu dài', 'lưu trữ pdf'],
    description: `
      <p>PDF sang PDF/A chuyển đổi tài liệu PDF của bạn sang định dạng PDF/A, tiêu chuẩn ISO cho lưu trữ tài liệu lâu dài. PDF/A đảm bảo tài liệu sẽ có thể xem và tái tạo trong hàng thập kỷ.</p>
      <p>Chọn từ PDF/A-1b (tuân thủ cơ bản), PDF/A-2b (khuyến nghị, hỗ trợ độ trong suốt), hoặc PDF/A-3b (cho phép tệp nhúng). Công cụ nhúng phông chữ và làm phẳng độ trong suốt khi cần.</p>
      <p>Tất cả chuyển đổi diễn ra cục bộ trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư.</p>
    `,
    howToUse: [
      { step: 1, title: 'Tải lên PDF của bạn', description: 'Tải lên PDF bạn muốn chuyển đổi sang PDF/A.' },
      { step: 2, title: 'Chọn cấp PDF/A', description: 'Chọn cấp tuân thủ PDF/A-1b, PDF/A-2b hoặc PDF/A-3b.' },
      { step: 3, title: 'Chuyển đổi và tải xuống', description: 'Chuyển đổi sang PDF/A và tải xuống tài liệu lưu trữ.' },
    ],
    useCases: [
      { title: 'Lưu trữ pháp lý', description: 'Chuyển đổi tài liệu pháp lý sang PDF/A để lưu trữ lâu dài có thể chấp nhận tòa án.', icon: 'scale' },
      { title: 'Hồ sơ chính phủ', description: 'Tuân thủ yêu cầu lưu trữ chính phủ bằng PDF/A.', icon: 'building' },
      { title: 'Lưu trữ kinh doanh', description: 'Bảo quản tài liệu kinh doanh quan trọng để truy cập trong tương lai.', icon: 'archive' },
    ],
    faq: [
      { question: 'Cấp PDF/A nào tôi nên sử dụng?', answer: 'PDF/A-2b được khuyến nghị cho hầu hết sử dụng. Sử dụng 1b cho tương thích tối đa hoặc 3b nếu bạn cần tệp nhúng.' },
      { question: 'Điều gì làm PDF/A khác biệt?', answer: 'PDF/A nhúng phông chữ, vô hiệu hóa mã hóa và đảm bảo tất cả phần tử tự chứa cho xem trong tương lai.' },
      { question: 'Tôi có thể chuyển đổi từ PDF/A không?', answer: 'Tệp PDF/A là PDF tiêu chuẩn và có thể mở bình thường. Các tính năng lưu trữ thêm hạn chế, không phải giới hạn.' },
    ],
  },

  'font-to-outline': {
    title: 'Phông chữ sang Outline',
    metaDescription: 'Chuyển đổi phông chữ PDF sang đường viền vector. Đảm bảo tương thích khi phông chữ có thể không khả dụng.',
    keywords: ['phông chữ sang outline', 'outline phông chữ', 'chuyển đổi phông chữ', 'văn bản vector', 'tương thích phông chữ'],
    description: `
      <p>Phông chữ sang Outline chuyển đổi tất cả văn bản trong PDF của bạn thành đường dẫn vector (outline). Điều này đảm bảo tài liệu của bạn trông chính xác giống nhau trên bất kỳ hệ thống nào, ngay cả khi phông chữ gốc không được cài đặt.</p>
      <p>Điều này thiết yếu cho chuẩn bị in ấn, đảm bảo đồ họa hiển thị chính xác và tránh vấn đề cấp phép phông chữ khi chia sẻ tài liệu.</p>
      <p>Tất cả xử lý diễn ra cục bộ trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư.</p>
    `,
    howToUse: [
      { step: 1, title: 'Tải lên PDF của bạn', description: 'Tải lên PDF chứa phông chữ bạn muốn chuyển đổi.' },
      { step: 2, title: 'Định cấu hình tùy chọn', description: 'Đặt DPI cho rasterization nếu cần cho phông chữ phức tạp.' },
      { step: 3, title: 'Chuyển đổi và tải xuống', description: 'Chuyển đổi phông chữ sang outline và tải xuống kết quả.' },
    ],
    useCases: [
      { title: 'Chuẩn bị in ấn', description: 'Đảm bảo phông chữ hiển thị chính xác tại nhà in thương mại.', icon: 'printer' },
      { title: 'Chia sẻ đa nền tảng', description: 'Chia sẻ tài liệu trông giống hệt nhau trên mọi thiết bị.', icon: 'share-2' },
      { title: 'Cấp phép phông chữ', description: 'Loại bỏ nhúng phông chữ để tránh vấn đề cấp phép.', icon: 'shield' },
    ],
    faq: [
      { question: 'Tôi vẫn có thể chọn văn bản sau khi chuyển đổi không?', answer: 'Không, văn bản outline trở thành đồ họa vector và không còn có thể tìm kiếm hoặc chọn được.' },
      { question: 'Kích thước tệp có tăng không?', answer: 'Kích thước tệp có thể tăng vì vector có thể lớn hơn dữ liệu phông chữ, đặc biệt cho phông chữ phức tạp.' },
      { question: 'Điều này có thể đảo ngược không?', answer: 'Không, giữ bản sao của bản gốc nếu bạn cần văn bản có thể chỉnh sửa.' },
    ],
  },

  'extract-tables': {
    title: 'Trích xuất bảng từ PDF',
    metaDescription: 'Phát hiện và trích xuất bảng từ tài liệu PDF. Xuất sang định dạng JSON, Markdown hoặc CSV.',
    keywords: ['trích xuất bảng', 'trích xuất bảng pdf', 'pdf sang csv', 'pdf sang excel', 'phát hiện bảng'],
    description: `
      <p>Trích xuất bảng từ PDF phát hiện dữ liệu dạng bảng trong tài liệu PDF của bạn và xuất ở định dạng có cấu trúc. Chọn JSON để tích hợp dữ liệu, Markdown cho tài liệu hoặc CSV cho bảng tính.</p>
      <p>Công cụ sử dụng thuật toán phát hiện thông minh để xác định cấu trúc bảng ngay cả trong tài liệu phức tạp. Chỉ định phạm vi trang và điều chỉnh tham số phát hiện để kết quả tối ưu.</p>
      <p>Tất cả xử lý diễn ra cục bộ trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư.</p>
    `,
    howToUse: [
      { step: 1, title: 'Tải lên PDF của bạn', description: 'Tải lên PDF chứa bảng bạn muốn trích xuất.' },
      { step: 2, title: 'Định cấu hình phát hiện', description: 'Đặt phạm vi trang và ngưỡng cột/hàng tối thiểu.' },
      { step: 3, title: 'Xuất và tải xuống', description: 'Chọn định dạng đầu ra (JSON/Markdown/CSV) và tải xuống.' },
    ],
    useCases: [
      { title: 'Phân tích dữ liệu', description: 'Trích xuất dữ liệu bảng để phân tích trong bảng tính hoặc cơ sở dữ liệu.', icon: 'bar-chart' },
      { title: 'Xử lý báo cáo', description: 'Kéo bảng từ báo cáo PDF để xử lý thêm.', icon: 'file-text' },
      { title: 'Tài liệu', description: 'Chuyển đổi bảng PDF sang Markdown cho tài liệu kỹ thuật.', icon: 'book' },
    ],
    faq: [
      { question: 'Nó có thể phát hiện bảng phức tạp không?', answer: 'Công cụ hoạt động tốt nhất với bảng lưới đơn giản. Ô được hợp nhất phức tạp có thể cần điều chỉnh thủ công.' },
      { question: 'Điều gì nếu không tìm thấy bảng?', answer: 'Thử điều chỉnh ngưỡng cột/hàng tối thiểu hoặc kiểm tra xem PDF có chứa cấu trúc bảng thực tế không.' },
      { question: 'Tôi có thể trích xuất từ trang cụ thể không?', answer: 'Có, chỉ định phạm vi trang để giới hạn trích xuất ở các trang nhất định.' },
    ],
  },

  'ocg-manager': {
    title: 'Trình quản lý lớp PDF (OCG)',
    metaDescription: 'Quản lý lớp PDF (Nhóm nội dung tùy chọn). Xem, bật/tắt, thêm, xóa và đổi tên lớp trong tài liệu PDF của bạn.',
    keywords: ['lớp pdf', 'trình quản lý ocg', 'nhóm nội dung tùy chọn', 'khả năng hiển thị lớp pdf', 'quản lý lớp pdf'],
    description: `
      <p>Trình quản lý lớp PDF cho phép bạn xem và quản lý Nhóm nội dung tùy chọn (OCG) trong tài liệu PDF của mình. Lớp OCG được sử dụng trong bản vẽ kỹ thuật, bản đồ và tài liệu phức tạp để tổ chức nội dung thành lớp có thể bật/tắt.</p>
      <p>Xem tất cả lớp trong PDF của bạn, bật/tắt khả năng hiển thị, thêm lớp mới, xóa lớp không mong muốn hoặc đổi tên lớp hiện có. Công cụ này thiết yếu để làm việc với PDF có lớp như kế hoạch kiến trúc, xuất CAD và tài liệu sẵn sàng in.</p>
      <p>Tất cả xử lý diễn ra cục bộ trong trình duyệt của bạn, đảm bảo tài liệu của bạn vẫn riêng tư và an toàn.</p>
    `,
    howToUse: [
      { step: 1, title: 'Tải lên PDF của bạn', description: 'Tải lên tệp PDF có lớp (OCG) hoặc tệp bạn muốn thêm lớp vào.' },
      { step: 2, title: 'Xem lớp', description: 'Công cụ tự động liệt kê tất cả lớp được tìm thấy trong tài liệu với trạng thái khả năng hiển thị của chúng.' },
      { step: 3, title: 'Quản lý lớp', description: 'Bật/tắt khả năng hiển thị lớp, đổi tên lớp, thêm lớp mới hoặc xóa lớp không mong muốn.' },
      { step: 4, title: 'Lưu và tải xuống', description: 'Tải xuống PDF đã sửa đổi của bạn với thay đổi lớp được áp dụng.' },
    ],
    useCases: [
      { title: 'Bản vẽ kỹ thuật', description: 'Quản lý lớp trong xuất CAD để hiển thị/ẩn kích thước, chú thích hoặc chế độ xem khác nhau.', icon: 'ruler' },
      { title: 'Chỉnh sửa bản đồ', description: 'Bật/tắt các lớp bản đồ khác nhau như địa hình, đường phố và nhãn để in bản đồ tùy chỉnh.', icon: 'map' },
      { title: 'Chuẩn bị in ấn', description: 'Chuẩn bị PDF có lớp để in bằng cách bật/tắt lớp thích hợp cho các phiên bản khác nhau.', icon: 'printer' },
    ],
    faq: [
      { question: 'Lớp PDF (OCG) là gì?', answer: 'Nhóm nội dung tùy chọn (OCG) là lớp trong PDF có thể được hiển thị hoặc ẩn. Chúng thường được thêm trong quá trình tạo PDF từ phần mềm thiết kế hoặc CAD.' },
      { question: 'Tại sao PDF của tôi hiển thị không có lớp?', answer: 'Không phải tất cả PDF chứa lớp. Lớp thường được thêm trong quá trình tạo PDF từ phần mềm thiết kế hoặc CAD.' },
      { question: 'Thay đổi khả năng hiển thị lớp có ảnh hưởng đến nội dung gốc không?', answer: 'Thay đổi khả năng hiển thị lớp chỉ ảnh hưởng đến nội dung được hiển thị hoặc in. Nội dung thực tế vẫn còn trong tài liệu.' },
    ],
  },

  'pdf-reader': {
    title: 'Trình đọc PDF',
    metaDescription: 'Trình đọc PDF trực tuyến miễn phí. Xem, điều hướng, thu phóng, xoay và in tài liệu PDF trực tiếp trong trình duyệt của bạn.',
    keywords: ['trình đọc pdf', 'trình xem pdf', 'xem pdf trực tuyến', 'đọc pdf', 'trình xem pdf trình duyệt'],
    description: `
      <p>Trình đọc PDF là công cụ xem PDF toàn diện cho phép bạn đọc và điều hướng tài liệu PDF trực tiếp trong trình duyệt của mình. Không cần cài đặt phần mềm - chỉ cần tải lên PDF của bạn và bắt đầu đọc.</p>
      <p>Điều hướng giữa các trang, thu phóng vào và ra, xoay chế độ xem và sử dụng chế độ toàn màn hình để đọc không bị gián đoạn. Bạn cũng có thể in tài liệu hoặc tải xuống chúng để truy cập ngoại tuyến.</p>
      <p>Tất cả xem diễn ra cục bộ trong trình duyệt của bạn. Tài liệu của bạn không được tải lên bất kỳ máy chủ nào, đảm bảo quyền riêng tư hoàn toàn.</p>
    `,
    howToUse: [
      { step: 1, title: 'Mở PDF của bạn', description: 'Nhấp để tải lên hoặc kéo và thả tệp PDF để mở trong trình đọc.' },
      { step: 2, title: 'Điều hướng trang', description: 'Sử dụng điều khiển trang để đi đến trang trước hoặc trang tiếp theo, hoặc nhảy đến số trang cụ thể.' },
      { step: 3, title: 'Điều chỉnh chế độ xem', description: 'Thu phóng vào hoặc ra, xoay chế độ xem hoặc nhập chế độ toàn màn hình để đọc thoải mái.' },
      { step: 4, title: 'In hoặc tải xuống', description: 'In tài liệu hoặc tải xuống để truy cập ngoại tuyến khi cần.' },
    ],
    useCases: [
      { title: 'Xem xét tài liệu', description: 'Xem nhanh tài liệu PDF mà không cần cài đặt bất kỳ phần mềm nào.', icon: 'book-open' },
      { title: 'Đọc di động', description: 'Đọc tài liệu PDF trên bất kỳ thiết bị nào có trình duyệt web.', icon: 'smartphone' },
      { title: 'Xem trước nhanh', description: 'Xem trước PDF trước khi quyết định tải xuống hoặc in chúng.', icon: 'eye' },
    ],
    faq: [
      { question: 'Tài liệu của tôi có an toàn không?', answer: 'Có, tài liệu của bạn được xử lý hoàn toàn trong trình duyệt của bạn và không được tải lên bất kỳ máy chủ nào.' },
      { question: 'Tôi có thể chú thích hoặc chỉnh sửa PDF không?', answer: 'Công cụ này chỉ dành cho xem. Sử dụng công cụ Ký PDF hoặc Chú thích PDF của chúng tôi để chỉnh sửa.' },
      { question: 'Nó có hoạt động trên thiết bị di động không?', answer: 'Có, trình đọc PDF hoạt động trên tất cả thiết bị có trình duyệt web hiện đại.' },
    ],
  },
};