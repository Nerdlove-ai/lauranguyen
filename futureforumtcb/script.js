const TERMS = [
  { term: "Predictive AI", vi: "AI dự đoán", category: "Công nghệ", meaning: "AI học từ dữ liệu quá khứ để dự đoán một kết quả, ví dụ khả năng gian lận, vỡ nợ hoặc rời bỏ dịch vụ.", keynote: "Trả lời: Điều gì có khả năng xảy ra tiếp theo?" },
  { term: "Generative AI (GenAI)", vi: "AI tạo sinh", category: "Công nghệ", meaning: "AI có thể tạo ra nội dung mới như văn bản, hình ảnh, mã nguồn hoặc bản tóm tắt dựa trên dữ liệu đã học.", keynote: "Trả lời: Tôi có thể tạo ra nội dung gì?" },
  { term: "Large Language Model (LLM)", vi: "Mô hình ngôn ngữ lớn", category: "Công nghệ", meaning: "Mô hình AI được huấn luyện trên lượng lớn dữ liệu văn bản để hiểu và tạo ngôn ngữ tự nhiên.", keynote: "LLM là nền tảng phía sau nhiều công cụ GenAI, không phải toàn bộ một sản phẩm AI." },
  { term: "Agentic AI", vi: "AI có tính tác nhân", category: "Công nghệ", meaning: "AI không chỉ trả lời mà còn có thể lập kế hoạch, sử dụng công cụ và thực hiện nhiều bước để đạt một mục tiêu.", keynote: "Chuyển từ AI trả lời câu hỏi sang AI thực hiện công việc." },
  { term: "AI Assistant", vi: "Trợ lý AI", category: "Công nghệ", meaning: "AI hỗ trợ người dùng tạo, tìm hoặc phân tích thông tin nhưng thường chờ yêu cầu tiếp theo thay vì tự hoàn thành toàn bộ quy trình.", keynote: "Assistant hỗ trợ từng bước; agent có thể theo đuổi một mục tiêu qua nhiều bước." },
  { term: "AI Agent", vi: "Tác nhân AI", category: "Công nghệ", meaning: "Một hệ thống AI nhận mục tiêu, quan sát bối cảnh, lựa chọn hành động và sử dụng công cụ để hoàn thành nhiệm vụ.", keynote: "Agent là hệ thống thực thi; agentic mô tả mức độ tự chủ trong cách hệ thống hành động." },
  { term: "RAG", vi: "Sinh nội dung có truy xuất", category: "Công nghệ", meaning: "Cách cho mô hình tìm thông tin từ nguồn dữ liệu đáng tin cậy trước khi tạo câu trả lời, thay vì chỉ dựa vào kiến thức đã học.", keynote: "Hữu ích khi AI cần trả lời dựa trên tài liệu nội bộ hoặc dữ liệu cập nhật." },
  { term: "Multimodal AI", vi: "AI đa phương thức", category: "Công nghệ", meaning: "AI có thể hiểu hoặc tạo nhiều loại dữ liệu như chữ, hình ảnh, âm thanh và video trong cùng một hệ thống." },
  { term: "Hallucination", vi: "Ảo giác AI", category: "Công nghệ", meaning: "Khi AI tạo ra thông tin nghe có vẻ hợp lý nhưng sai, không có căn cứ hoặc không tồn tại.", keynote: "Đầu ra trôi chảy không đồng nghĩa với đầu ra chính xác." },
  { term: "Model Drift", vi: "Độ trôi mô hình", category: "Công nghệ", meaning: "Hiệu quả của mô hình giảm dần khi dữ liệu hoặc hành vi thực tế thay đổi so với lúc mô hình được xây dựng." },
  { term: "Quantum Computing", vi: "Điện toán lượng tử", category: "Công nghệ", meaning: "Cách tính toán sử dụng các đặc tính của cơ học lượng tử để giải một số loại bài toán theo cách khác máy tính truyền thống.", keynote: "Không thay thế mọi máy tính hiện tại, nhưng có thể tạo lợi thế lớn ở một số bài toán chuyên biệt." },
  { term: "Quantum AI", vi: "AI lượng tử", category: "Công nghệ", meaning: "Lĩnh vực nghiên cứu kết hợp điện toán lượng tử với AI nhằm tăng tốc hoặc mở ra cách giải mới cho một số bài toán học máy.", keynote: "Là bước mới nổi trong AI ladder, chưa phải năng lực phổ biến để triển khai đại trà hôm nay." },
  { term: "Qubit", vi: "Bit lượng tử", category: "Công nghệ", meaning: "Đơn vị thông tin cơ bản của máy tính lượng tử; khác bit truyền thống chỉ nhận 0 hoặc 1, qubit có thể tồn tại trong trạng thái chồng chập." },
  { term: "Post-Quantum Cryptography (PQC)", vi: "Mật mã hậu lượng tử", category: "Công nghệ", meaning: "Các thuật toán mật mã được thiết kế để chống lại những cuộc tấn công có thể thực hiện bằng máy tính lượng tử trong tương lai.", keynote: "Chuẩn bị sớm vì việc thay đổi hạ tầng mật mã của một tổ chức lớn cần nhiều năm." },
  { term: "Blockchain", vi: "Chuỗi khối", category: "Công nghệ", meaning: "Sổ cái dùng chung, ghi lại giao dịch theo cách nhiều bên có thể kiểm chứng mà không phải phụ thuộc hoàn toàn vào một cơ sở dữ liệu trung tâm." },
  { term: "Public vs Permissioned Blockchain", vi: "Blockchain công khai và cấp quyền", category: "Công nghệ", meaning: "Blockchain công khai cho phép tham gia rộng rãi; blockchain cấp quyền giới hạn người có thể truy cập, xác thực hoặc ghi dữ liệu.", keynote: "Doanh nghiệp thường cân nhắc permissioned blockchain khi quyền truy cập và quản trị là yêu cầu trọng yếu." },
  { term: "Cryptocurrency", vi: "Tiền mã hóa", category: "Công nghệ", meaning: "Tài sản số vận hành trên blockchain và có thể được dùng để trao đổi hoặc lưu trữ giá trị.", keynote: "Cryptocurrency là một ứng dụng; tokenization là cách thể hiện tài sản hoặc quyền lợi trên hạ tầng số." },
  { term: "Legacy Rails", vi: "Hạ tầng thanh toán truyền thống", category: "Công nghệ", meaning: "Các hệ thống và mạng lưới thanh toán hiện hữu, thường qua nhiều bên trung gian, quy trình đối soát và thời gian xử lý khác nhau." },
  { term: "Stablecoin", vi: "Đồng tiền số neo giá", category: "Công nghệ", meaning: "Token số được thiết kế để duy trì giá trị ổn định bằng cách neo vào một tài sản như USD.", keynote: "Có thể đóng vai trò như một rail chuyển giá trị, không chỉ là tài sản để đầu cơ." },
  { term: "Tokenization", vi: "Token hóa", category: "Công nghệ", meaning: "Thể hiện quyền sở hữu hoặc quyền lợi đối với một tài sản dưới dạng token số để có thể ghi nhận, chuyển giao hoặc lập trình." },
  { term: "Smart Contract", vi: "Hợp đồng thông minh", category: "Công nghệ", meaning: "Chương trình chạy trên blockchain, tự động thực hiện các điều kiện đã được viết sẵn khi dữ liệu đầu vào phù hợp." },
  { term: "Embedded Finance", vi: "Tài chính nhúng", category: "Công nghệ", meaning: "Đưa dịch vụ tài chính như thanh toán, tín dụng hoặc bảo hiểm trực tiếp vào hành trình của một sản phẩm phi tài chính." },
  { term: "Vibe Coding", vi: "", category: "Công nghệ", meaning: "Cách tạo phần mềm bằng việc mô tả yêu cầu bằng ngôn ngữ tự nhiên để AI viết và chỉnh sửa code.", keynote: "Vibe coding giúp cả người không chuyên kỹ thuật nhanh chóng tạo prototype. Tuy nhiên, sản phẩm đưa vào vận hành vẫn cần kiểm tra kiến trúc, bảo mật, dữ liệu và chất lượng code bởi người có chuyên môn." },
  { term: "Automation", vi: "Tự động hóa", category: "Con người & tổ chức", meaning: "Dùng công nghệ để thực hiện thay con người một nhiệm vụ hoặc quy trình.", keynote: "Câu hỏi là phần việc nào nên giao cho máy, không phải nghề nào sẽ biến mất hoàn toàn." },
  { term: "Augmentation", vi: "Tăng cường năng lực con người", category: "Con người & tổ chức", meaning: "Dùng AI để giúp con người làm việc nhanh hơn hoặc tốt hơn, trong khi con người vẫn giữ vai trò ra quyết định.", keynote: "Automation thay thế một phần công việc; augmentation nâng năng lực người làm việc." },
  { term: "Human-in-the-loop", vi: "Con người trong vòng kiểm soát", category: "Con người & tổ chức", meaning: "Thiết kế quy trình trong đó con người kiểm tra, phê duyệt hoặc can thiệp vào quyết định của AI tại những điểm quan trọng." },
  { term: "Model Governance", vi: "Quản trị mô hình", category: "Con người & tổ chức", meaning: "Cơ chế xác định ai sở hữu, kiểm tra, phê duyệt, giám sát và chịu trách nhiệm đối với mô hình trong suốt vòng đời." },
  { term: "Meaningful Human Oversight", vi: "Giám sát thực chất của con người", category: "Con người & tổ chức", meaning: "Con người có đủ thông tin, thẩm quyền, thời gian và năng lực để chất vấn hoặc thay đổi quyết định của AI — không chỉ bấm phê duyệt hình thức.", keynote: "Human review chưa chắc là human control nếu người kiểm tra không thể can thiệp thực sự." },
  { term: "Warmth & Competence", vi: "Thiện ý & năng lực", category: "Con người & tổ chức", meaning: "Hai chiều con người thường dùng để đánh giá niềm tin: hệ thống có hành động vì lợi ích của tôi không, và nó có đủ khả năng làm đúng không?" },
  { term: "Agency & Experience", vi: "Năng lực hành động & năng lực cảm nhận", category: "Con người & tổ chức", meaning: "Hai cách con người cảm nhận về một chủ thể: nó có thể tự hành động hay không, và nó có cảm xúc hoặc trải nghiệm nội tại hay không?", keynote: "AI có thể được nhìn nhận là có agency cao dù không có trải nghiệm cảm xúc như con người." },
  { term: "Deepfake", vi: "Nội dung giả mạo bằng AI", category: "Con người & tổ chức", meaning: "Hình ảnh, video hoặc âm thanh được AI tạo hoặc chỉnh sửa để mô phỏng một người hay sự kiện có vẻ chân thực." },
  { term: "Task Fit", vi: "Mức độ phù hợp với nhiệm vụ", category: "Triển khai & đo lường", meaning: "Kiểm tra liệu bài toán có thật, AI có phải công nghệ phù hợp và kết quả có thể đo lường được hay không.", keynote: "Câu hỏi đầu tiên: Should we? — Có đáng làm không?" },
  { term: "Capability vs Adoption", vi: "Năng lực công nghệ và mức độ áp dụng", category: "Triển khai & đo lường", meaning: "Capability là điều công nghệ có thể làm; adoption là việc con người và tổ chức có thực sự đưa nó vào công việc hay không.", keynote: "Một demo tốt không đồng nghĩa với một hệ thống được sử dụng trong thực tế." },
  { term: "Model Performance vs Business Value", vi: "Hiệu năng mô hình và giá trị kinh doanh", category: "Triển khai & đo lường", meaning: "Mô hình có thể đạt điểm kỹ thuật cao nhưng vẫn không tạo giá trị nếu không cải thiện KPI, quyết định hoặc hành vi người dùng.", keynote: "Đừng nhầm model benchmark với business outcome." },
  { term: "Adoption Readiness", vi: "Mức độ sẵn sàng áp dụng", category: "Triển khai & đo lường", meaning: "Mức độ sẵn sàng về công nghệ, dữ liệu, tổ chức, con người, pháp lý và hệ sinh thái để đưa giải pháp vào thực tế.", keynote: "Có thể thay đổi theo thời gian; không phải một ô được đánh dấu một lần rồi thôi." },
  { term: "T–O–E Framework", vi: "Công nghệ – Tổ chức – Môi trường", category: "Triển khai & đo lường", meaning: "Khung đánh giá việc áp dụng công nghệ theo ba nhóm yếu tố: Technology, Organization và Environment." },
  { term: "Proof of Concept (PoC)", vi: "Thử nghiệm tính khả thi", category: "Triển khai & đo lường", meaning: "Thử nghiệm nhỏ nhằm chứng minh một giả định kỹ thuật hoặc nghiệp vụ quan trọng có khả thi hay không.", keynote: "PoC tạo bằng chứng, chưa phải sản phẩm hoàn chỉnh." },
  { term: "Minimum Viable Product (MVP)", vi: "Sản phẩm khả dụng tối thiểu", category: "Triển khai & đo lường", meaning: "Phiên bản nhỏ nhất có đủ giá trị để người dùng thật sử dụng và cung cấp phản hồi có ý nghĩa." },
  { term: "Scalable Operating Model", vi: "Mô hình vận hành có thể mở rộng", category: "Triển khai & đo lường", meaning: "Cách tổ chức con người, quy trình, công nghệ và quản trị để một giải pháp có thể đi từ pilot sang vận hành ổn định ở quy mô lớn.", keynote: "Pilot chứng minh khả năng; operating model quyết định khả năng scale." },
  { term: "ROI", vi: "Tỷ suất hoàn vốn", category: "Triển khai & đo lường", meaning: "So sánh giá trị thu được với chi phí đầu tư. Giá trị có thể là doanh thu, tiết kiệm chi phí, giảm rủi ro hoặc cải thiện trải nghiệm." },
  { term: "Hard ROI / Soft ROI", vi: "ROI cứng / ROI mềm", category: "Triển khai & đo lường", meaning: "ROI cứng có thể quy đổi trực tiếp thành tiền; ROI mềm phản ánh lợi ích như thương hiệu, trải nghiệm, tốc độ hoặc năng lực tổ chức." },
  { term: "Human Control", vi: "Kiểm soát của con người", category: "Triển khai & đo lường", meaning: "Thiết kế quyền giám sát, can thiệp, ghi đè và chịu trách nhiệm của con người tương ứng với mức độ rủi ro của AI." },
  { term: "Mobilization", vi: "Huy động triển khai", category: "Triển khai & đo lường", meaning: "Chuyển từ ý tưởng sang pilot rồi mở rộng: xác định người sở hữu, nguồn lực, quy trình và tiêu chí tiếp tục hoặc dừng." },
  { term: "Evaluation", vi: "Đánh giá", category: "Triển khai & đo lường", meaning: "Đo tác động thực tế, mức độ sử dụng, rủi ro và độ trôi sau triển khai; kết quả được đưa ngược lại vào quyết định tiếp theo." },
  { term: "Buy · Co-build · Own", vi: "Mua · Đồng xây dựng · Tự sở hữu", category: "Triển khai & đo lường", meaning: "Ba cách tiếp cận năng lực: mua giải pháp có sẵn, cùng đối tác xây dựng, hoặc tự phát triển và sở hữu năng lực cốt lõi.", keynote: "Lựa chọn phụ thuộc vào lợi thế cần giữ: dữ liệu, quy trình, talent, IP hay năng lực quản trị." },
  { term: "Acquihire", vi: "Mua lại để thu hút đội ngũ", category: "Triển khai & đo lường", meaning: "Mua lại một công ty chủ yếu để đưa đội ngũ và năng lực chuyên môn của họ vào tổ chức, thay vì chỉ mua sản phẩm." },
  { term: "AI Centre of Excellence", vi: "Trung tâm năng lực AI", category: "Triển khai & đo lường", meaning: "Đầu mối tập trung tiêu chuẩn, chuyên môn, nền tảng, quản trị và hỗ trợ các đơn vị triển khai AI nhất quán." },
  { term: "Decision Filter", vi: "Bộ lọc quyết định", category: "Triển khai & đo lường", meaning: "Chuỗi câu hỏi để quyết định một sáng kiến AI có đáng làm, đã sẵn sàng, được kiểm soát, triển khai và đánh giá đúng cách hay chưa.", keynote: "Không phải đường một chiều: Task Fit → Readiness → Human Control → Mobilization → Evaluation → quay lại điều chỉnh." }
];

const searchInput = document.querySelector("#glossary-search");
const clearButton = document.querySelector(".tcb-clear");
const filterButtons = document.querySelectorAll(".tcb-filters button");
const resultCount = document.querySelector("#result-count");
const termsList = document.querySelector("#terms-list");
const emptyState = document.querySelector("#empty-state");

let activeFilter = "Tất cả";
let expandedTerm = null;

function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function normalize(value) {
  return String(value || "").toLocaleLowerCase("vi");
}

function getFilteredTerms() {
  const query = normalize(searchInput.value.trim());

  return TERMS.filter((item) => {
    const matchesFilter = activeFilter === "Tất cả" || item.category === activeFilter;
    const haystack = normalize(`${item.term} ${item.vi || ""} ${item.meaning} ${item.keynote || ""}`);
    return matchesFilter && (!query || haystack.includes(query));
  });
}

function renderTerms() {
  const terms = getFilteredTerms();
  resultCount.textContent = `${terms.length} thuật ngữ`;
  clearButton.hidden = searchInput.value.length === 0;
  emptyState.hidden = terms.length !== 0;

  termsList.innerHTML = terms.map((item, index) => {
    const isExpanded = expandedTerm === item.term;
    const delay = Math.min(index, 10) * 25;
    const keynote = item.keynote
      ? `<aside><b>Trong keynote</b>${escapeHTML(item.keynote)}</aside>`
      : "";

    return `
      <article class="tcb-term ${isExpanded ? "expanded" : ""}" style="--delay:${delay}ms">
        <button class="tcb-termhead" type="button" aria-expanded="${isExpanded}" data-term="${escapeHTML(item.term)}">
          <span>
            <strong>${escapeHTML(item.term)}</strong>
            ${item.vi ? `<small>${escapeHTML(item.vi)}</small>` : ""}
          </span>
          <span class="tcb-plus" aria-hidden="true">${isExpanded ? "−" : "+"}</span>
        </button>
        ${isExpanded ? `<div class="tcb-definition"><p>${escapeHTML(item.meaning)}</p>${keynote}</div>` : ""}
      </article>
    `;
  }).join("");
}

searchInput.addEventListener("input", () => {
  renderTerms();
});

clearButton.addEventListener("click", () => {
  searchInput.value = "";
  searchInput.focus();
  renderTerms();
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.toggle("active", item === button));
    renderTerms();
  });
});

termsList.addEventListener("click", (event) => {
  const button = event.target.closest(".tcb-termhead");
  if (!button) return;

  const term = button.dataset.term;
  expandedTerm = expandedTerm === term ? null : term;
  renderTerms();
});

renderTerms();
