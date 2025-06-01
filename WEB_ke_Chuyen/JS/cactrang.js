// DỮ LIỆU CHUNG
const stories = [
  { id: "1", title: "Ngôi nhà Hoang", image: "../images/ngoinhahoang.jpg", Theloai: "truyện ma", url: "GioiThieuTruyen/GIngoinhahoang.html", image2: "../../images/ngoinhahoang.jpg", url2: "../GioiThieuTruyen/GIngoinhahoang.html" },
  { id: "2", title: "Dưới đáy giếng hoang", image: "../images/duoiDayGiengHoang.png", Theloai: "truyện ma", url: "GioiThieuTruyen/GTduoiDayGiengHoang.html", image2: "../../images/duoiDayGiengHoang.png", url2: "../GioiThieuTruyen/GTduoiDayGiengHoang.html" },
  { id: "3", title: "Sự tích trầu cau", image: "../images/truyen-trau-cau.jpg", Theloai: "truyện cổ tích", url: "GioiThieuTruyen/GTsuTichTrauCau.html", image2: "../../images/truyen-trau-cau.jpg", url2: "../GTsuTichTrauCau.html" },
  { id: "4", title: "Tấm Cám", image: "../images/TamCam.png", Theloai: "truyện cổ tích", url: "GioiThieuTruyen/GTtamCam.html", image2: "../../images/TamCam.png" , url2: "../GioiThieuTruyen/GTtamCam.html"},
  { id: "5", title: "Thầy bói xem voi", image: "../images/thayBoiXemVoi.png", Theloai: "truyện cười", url: "GioiThieuTruyen/GTthayBoiXemVoi.html", image2: "../../images/thayBoiXemVoi.png", url2: "../GioiThieuTruyen/GTthayBoiXemVoi.html" },
  { id: "6", title: "Sự tích cây vú sữa", image: "../images/su-tich-cay-vu-sua.webp", Theloai: "truyện cổ tích", url: "GioiThieuTruyen/GTsuTichcayVuSua.html" , image2: "../../images/su-tich-cay-vu-sua.webp", url2: "../GioiThieuTruyen/GTsuTichcayVuSua.html"},
  { id: "7", title: "Sự tích cây khế", image: "../images/Sutichcaykhe.jpg", Theloai: "truyện cổ tích", url: "GioiThieuTruyen/GTsuTichCayKhe.html", image2: "../../images/Sutichcaykhe.jpg", url2: "../GioiThieuTruyen/GTsuTichCayKhe.html" },
  { id: "8", title: "Sọ Dừa", image: "../images/So_dua_bia_truyen.jpg", Theloai: "truyện cổ tích", url: "GioiThieuTruyen/GTsoDua.html", image2: "../../images/So_dua_bia_truyen.jpg", url2: "../GioiThieuTruyen/GTsoDua.html" },
  { id: "9", title: "Chú Cuội cung trăng", image: "../images/su-tich-chu-cuoi-cung-trang.webp", Theloai: "truyện cổ tích", url: "GioiThieuTruyen/GTchuCuoiCungTrang.html", image2: "../../images/su-tich-chu-cuoi-cung-trang.webp", url2: "../GioiThieuTruyen/GTchuCuoiCungTrang.html" },
  { id: "10", title: "Không Thể Quay Lại", image: "../images/kothequaylai.png", Theloai: "truyện ngôn tình", url: "GioiThieuTruyen/GTkoThequaylai.html", image2: "../../images/kothequaylai.png", url2: "../GioiThieuTruyen/GTkoThequaylai.html" },
  { id: "11", title: "Mù Mặt Cũng Không Mù Anh", image: "../images/mumatkomuanh.png", Theloai: "truyện ngôn tình", url: "GioiThieuTruyen/GTmumatChuKoMuAnh.html", image2: "../../images/mumatkomuanh.png", url2: "../GioiThieuTruyen/GTmumatChuKoMuAnh.html" },
  { id: "12", title: "Chuyện Tình Âm Thầm Với Anh Trai Của Bạn Thân", image: "../images/amthamvsanhtraibff.png", Theloai: "truyện ngôn tình", url: "GioiThieuTruyen/GTamThamVsAnhTraiBanThan.html", image2: "../../images/amthamvsanhtraibff.png", url2: "../GioiThieuTruyen/GTamThamVsAnhTraiBanThan.html" },
  { id: "13", title: "Lời Nguyện Cầu Của Cô Ấy", image: "../images/Lời Nguyện Cầu Của Cô Ấy.png", Theloai: "truyện ngôn tình", url: "GioiThieuTruyen/GTloiNguyenCauCuaCoAy.html", image2: "../../images/Lời Nguyện Cầu Của Cô Ấy.png", url2: "../GioiThieuTruyen/GTloiNguyenCauCuaCoAy.html" },
  { id: "14", title: "Nữ Phụ Phản Công", image: "../images/nuphuphancong.png", Theloai: "truyện ngôn tình", url: "GioiThieuTruyen/GTnuPhuPhanCong.html", image2: "../../images/nuphuphancong.png", url2: "../GioiThieuTruyen/GTnuPhuPhanCong.html" },
  { id: "15", title: "Phi Tần Tranh Dành Sủng Ái", image: "../images/phitantranhdanhsungai.png", Theloai: "truyện ngôn tình", url: "GioiThieuTruyen/GTphitanTranhDanhSungAi.html", image2: "../../images/phitantranhdanhsungai.png", url2: "../GioiThieuTruyen/GTphitanTranhDanhSungAi.html" },
  { id: "16", title: "Bố bảo con trai trước khi lấy vợ", image: "../images/bobaocontraitrckhilayvo.png", Theloai: "truyện ý nghĩa", url: "GioiThieuTruyen/GTboBaoConTrcKhiLayVo.html", image2: "../../images/bobaocontraitrckhilayvo.png", url2: "../GioiThieuTruyen/GTboBaoConTrcKhiLayVo.html" },
  { id: "17", title: "Quan sát và lắng nghe", image: "../images/Quấntvalangnghe.png", Theloai: "truyện ý nghĩa", url: "GioiThieuTruyen/GTquanSatvalangNghe.html", image2: "../../images/Quấntvalangnghe.png", url2: "../GioiThieuTruyen/GTquanSatvalangNghe.html" },
  { id: "18", title: "Câu chuyện về hai chú ếch", image: "../images/chuyen2chuech.png", Theloai: "truyện ý nghĩa", url: "GioiThieuTruyen/GThaiChuEch.html", image2: "../../images/chuyen2chuech.png", url2: "../GioiThieuTruyen/GThaiChuEch.html" },
  { id: "19", title: "Cái chậu nứt", image: "../images/Caichaunut.png", Theloai: "truyện ý nghĩa", url: "GioiThieuTruyen/GTcaiChauNut.html", image2: "../../images/Caichaunut.png", url2: "../GioiThieuTruyen/GTcaiChauNut.html" },
  { id: "20", title: "Thứ quý giá nhất của cuộc đời", image: "../images/thuquygia.png", Theloai: "truyện ý nghĩa", url: "GioiThieuTruyen/GTcauChuyenQuyGia.html", image2: "../../images/thuquygia.png", url2: "../GioiThieuTruyen/GTcauChuyenQuyGia.html" },
  { id: "21", title: "Café, yêu và sống", image: "../images/Cafeyeu.png", Theloai: "truyện ý nghĩa", url: "GioiThieuTruyen/GTcfYeuCuocsong.html", image2: "../../images/Cafeyeu.png", url2: "../GioiThieuTruyen/GTcfYeuCuocsong.html" },
  { id: "111", title: "Dãi Lụa Đỏ", image: "../images/Dãi Lụa Đỏ.png", Theloai: "truyện Ma", url: "GioiThieuTruyen/GTdaiLuaDo.html", image2: "../../images/Dãi Lụa Đỏ.png", url2: "../GioiThieuTruyen/GTdaiLuaDo.html" },
  { id: "112", title: "Cây đa máu", image: "../images/Cây đa máu.png", Theloai: "truyện ma", url: "GioiThieuTruyen/GTCây đa máu.html", image2: "../../images/Cây đa máu.png", url2: "../GioiThieuTruyen/GTCây đa máu.html" },
  { id: "113", title: "Bìm bìm quấn quýt", image: "../images/Bìm bìm quấn quýt.png", Theloai: "truyện ma", url: "GioiThieuTruyen/GTBìm bìm quấn quýt.html", image2: "../../images/Bìm bìm quấn quýt.png", url2: "../GioiThieuTruyen/GTBìm bìm quấn quýt.html" },
  { id: "114", title: "Trốn tìm", image: "../images/Trốn tìm.png", Theloai: "truyện ma", url: "GioiThieuTruyen/GTTrốn tìm.html", image2: "../../images/Trốn tìm.png", url2: "../GioiThieuTruyen/GTTrốn tìm.html" },
  { id: "115", title: "Trí Thông Minh và Tiền Bạc", image: "../images/Trí Thông Minh và Tiền Bạc.png", Theloai: "truyện cười", url: "GioiThieuTruyen/GTTrí Thông Minh và Tiền Bạc.html", image2: "../../images/Trí Thông Minh và Tiền Bạc.png", url2: "../GioiThieuTruyen/GTTrí Thông Minh và Tiền Bạc.html" },
  { id: "116", title: "Truyện Ba trọc", image: "../images/Truyện Ba trọc.png", Theloai: "truyện cười", url: "GioiThieuTruyen/GTTruyện Ba trọc.html", image2: "../../images/Truyện Ba trọc.png", url2: "../GioiThieuTruyen/GTTruyện Ba trọc.html" },
  { id: "117", title: "Tam đại con gà", image: "../images/Tam đại con gà.png", Theloai: "truyện cười", url: "GioiThieuTruyen/GTTam đại con gà.html", image2: "../../images/Tam đại con gà.png", url2: "../GioiThieuTruyen/GTTam đại con gà.html" },
  { id: "118", title: "Trò ăn trấu", image: "../images/Trò ăn trấu.png", Theloai: "truyện cười", url: "GioiThieuTruyen/GTTrò ăn trấu.html", image2: "../../images/Trò ăn trấu.png", url2: "../GioiThieuTruyen/GTTrò ăn trấu.html" },
  { id: "119", title: "Lợn cưới áo mới", image: "../images/Lợn cưới áo mới.png", Theloai: "truyện cười", url: "GioiThieuTruyen/GTLợn cưới áo mới.html", image2: "../../images/Lợn cưới áo mới.png", url2: "../GioiThieuTruyen/GTLợn cưới áo mới.html" },

]
// Khởi tạo dữ liệu người dùng
let currentUser = null;
const localStorageKey = 'webTruyenUsers';
const currentUserKey = 'webTruyenCurrentUser';

// Lấy dữ liệu từ localStorage hoặc khởi tạo mảng trống
function getUsers() {
  const users = localStorage.getItem(localStorageKey);
  return users ? JSON.parse(users) : [];
}

// Lưu dữ liệu người dùng vào localStorage
function saveUsers(users) {
  localStorage.setItem(localStorageKey, JSON.stringify(users));
}

// Lưu thông tin người dùng hiện tại
function saveCurrentUser(user) {
  if (user) {
    localStorage.setItem(currentUserKey, JSON.stringify(user));
  } else {
    localStorage.removeItem(currentUserKey);
  }
  currentUser = user;
  updateUIState();
}

// Kiểm tra tính hợp lệ của người dùng trong localStorage
function validateCurrentUser(user) {
  if (!user || typeof user !== 'object') return false;
  if (!user.id || !user.username) return false;
  const users = getUsers();
  return users.some(u => u.id === user.id && u.username === user.username);
}


// Khởi tạo khi trang được tải
document.addEventListener('DOMContentLoaded', function () {
  try {
    // Kiểm tra nếu người dùng đã đăng nhập trước đó
    const savedUserJSON = localStorage.getItem(currentUserKey);
    if (savedUserJSON) {
      const savedUser = JSON.parse(savedUserJSON);
      if (validateCurrentUser(savedUser)) {
        currentUser = savedUser;
      } else {
        localStorage.removeItem(currentUserKey);
        currentUser = null;
        console.log('Dữ liệu người dùng không hợp lệ, đã xóa phiên đăng nhập');
      }
    } else {
      currentUser = null;
    }

    // Khởi tạo modal và cập nhật UI
    initModals();
    updateUIState();

    // Khởi tạo các sự kiện khác
    const searchInput = getElement('searchInput');
    const searchForm = document.querySelector('form');
    if (searchInput) searchInput.addEventListener('input', showSuggestions);
    if (searchForm) searchForm.addEventListener('submit', handleSearch);

    const toggleBtn = getElement('toggleDark');
    if (toggleBtn) toggleBtn.addEventListener('click', toggleDarkMode);

    setupScrollFadeEffects();
    setupHomePage();
    setupSearchPage();
  } catch (error) {
    console.error('Lỗi khi khởi tạo phiên đăng nhập:', error);
    localStorage.removeItem(currentUserKey);
    currentUser = null;
    updateUIState();
  }
});

let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];

function saveSearchHistory(term) {
  if (!term || searchHistory.includes(term)) return;
  searchHistory.unshift(term);
  if (searchHistory.length > 10) searchHistory.pop();
  localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
}

// HÀM TIỆN ÍCH
function getElement(id) {
  const element = document.getElementById(id);
  if (!element) console.warn(`Element with ID "${id}" not found`);
  return element;
}

function safeParseJSON(data, defaultValue = null) {
  try {
    return JSON.parse(data) || defaultValue;
  } catch (e) {
    console.error('JSON parse error:', e);
    return defaultValue;
  }
}

function debounce(func, wait) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

function showToast(message, type = 'info') {
  let toastContainer = document.querySelector('.toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.className = 'toast-container position-fixed bottom-0 end-0 p-3';
    toastContainer.style.zIndex = '1070';
    document.body.appendChild(toastContainer);
  }

  const toastId = `toast-${Date.now()}`;
  const toastElement = document.createElement('div');
  toastElement.id = toastId;
  toastElement.className = `toast align-items-center text-white bg-${type} border-0`;
  toastElement.setAttribute('role', 'alert');
  toastElement.setAttribute('aria-live', 'assertive');
  toastElement.setAttribute('aria-atomic', 'true');
  toastElement.innerHTML = `
    <div class="d-flex">
      <div class="toast-body">
        <i class="bi bi-info-circle me-2"></i>${message}
      </div>
      <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
  `;

  toastContainer.appendChild(toastElement);
  const toastInstance = new bootstrap.Toast(toastElement, { delay: 3000 });
  toastInstance.show();
  toastElement.addEventListener('hidden.bs.toast', () => toastElement.remove());
}

// TÌM KIẾM
function showSuggestions() {
  const searchInput = getElement('searchInput');
  const suggestionsList = getElement('suggestionsList');
  if (!searchInput || !suggestionsList) return;

  const keyword = searchInput.value.toLowerCase();
  suggestionsList.innerHTML = '';

  if (!keyword) {
    searchHistory.forEach(term => {
      const item = document.createElement('div');
      item.className = 'list-group-item list-group-item-action d-flex align-items-center';
      item.style.cursor = 'pointer';
      item.innerHTML = `
        <i class="bi bi-clock-history me-2"></i>
        <span>${term}</span>
      `;
      item.onclick = () => {
        searchInput.value = term;
        showSuggestions();
      };
      suggestionsList.appendChild(item);
    });
    return;
  }

  const results = stories.filter(s => s.title.toLowerCase().includes(keyword));
  if (results.length === 0) {
    suggestionsList.innerHTML = `<div class="list-group-item"><em>Không tìm thấy kết quả cho "${keyword}"</em></div>`;
    return;
  }

  results.forEach(story => {
    const item = document.createElement('div');
    item.className = 'list-group-item list-group-item-action d-flex align-items-center';
    item.style.cursor = 'pointer';
    item.onclick = () => window.location.href = story.url;
    const titleWithHighlight = story.title.replace(
      new RegExp(keyword, 'gi'),
      match => `<strong class="text-success">${match}</strong>`
    );
    item.innerHTML = `
      <img src="${story.image}" alt="" class="rounded me-2" style="width:40px;height:40px;object-fit:cover">
      <div>
        <div>${titleWithHighlight}</div>
        <div>Thể loại:${story.Theloai}</div>
      </div>
    `;
    suggestionsList.appendChild(item);
  });
}

function handleSearch(e) {
  e?.preventDefault();
  const searchInput = getElement('searchInput');
  if (!searchInput) return false;

  const keyword = searchInput.value.trim().toLowerCase();
  if (!keyword) {
    showToast('Vui lòng nhập từ khóa tìm kiếm!', 'warning');
    return false;
  }

  saveSearchHistory(keyword);
  const found = stories.find(s => s.title.toLowerCase() === keyword);
  window.location.href = found ? found.url : `Giới thiệu Truyện/search.html?q=${encodeURIComponent(keyword)}`;
  return false;
}

function setupSearchPage() {
  const resultsContainer = getElement('searchResults');
  if (!resultsContainer) return;

  const urlParams = new URLSearchParams(window.location.search);
  const keyword = urlParams.get('q')?.toLowerCase() || '';

  if (!keyword) {
    resultsContainer.innerHTML = '<p class="text-center">Vui lòng nhập từ khóa tìm kiếm.</p>';
    return;
  }

  const results = stories.filter(s => s.title.toLowerCase().includes(keyword));
  resultsContainer.innerHTML = '';
  if (results.length === 0) {
    resultsContainer.innerHTML = `<p class="text-center">Không tìm thấy truyện nào cho từ khóa "${keyword}".</p>`;
    return;
  }

  results.forEach(story => {
    const card = document.createElement('div');
    card.className = 'col-md-3';
    card.innerHTML = `
      <div class="card shadow-sm h-100" style="cursor: pointer" onclick="window.location.href='${story.url}'">
        <img src="${story.image}" class="card-img-top" style="height: 200px; object-fit: cover;" alt="${story.title}">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title mb-2">${story.title}</h5>
          <p class="text-muted mb-2">Thể loại: Truyện ma</p>
        </div>
      </div>
    `;
    resultsContainer.appendChild(card);
  });
}

function changeFontSize(action) {
  const storyContent = getElement('storyContent');
  const currentFontSizeElement = getElement('currentFontSize');
  if (!storyContent || !currentFontSizeElement) return;

  let currentSize = parseInt(storyContent.style.fontSize) || 16; // Giá trị mặc định là 16px
  if (action === 'increase') {
    currentSize = Math.min(currentSize + 2, 24); // Tăng tối đa đến 24px
  } else if (action === 'decrease') {
    currentSize = Math.max(currentSize - 2, 12); // Giảm tối thiểu đến 12px
  }

  storyContent.style.fontSize = `${currentSize}px`;
  currentFontSizeElement.textContent = currentSize; // Chỉ hiển thị số, ví dụ: "16"
  localStorage.setItem('preferredFontSize', currentSize);
}

// Gắn sự kiện cho các nút tăng/giảm kích thước chữ
document.addEventListener('DOMContentLoaded', function () {
  const decreaseFontBtn = getElement('decreaseFont');
  const increaseFontBtn = getElement('increaseFont');
  if (decreaseFontBtn) decreaseFontBtn.addEventListener('click', () => changeFontSize('decrease'));
  if (increaseFontBtn) increaseFontBtn.addEventListener('click', () => changeFontSize('increase'));

  // Khôi phục kích thước chữ đã lưu
  const savedFontSize = localStorage.getItem('preferredFontSize');
  const storyContent = getElement('storyContent');
  const currentFontSizeElement = getElement('currentFontSize');
  if (savedFontSize && storyContent && currentFontSizeElement) {
    storyContent.style.fontSize = `${savedFontSize}px`;
    currentFontSizeElement.textContent = savedFontSize; // Chỉ hiển thị số
  }
});
function toggleReadingMode() {
  const storyContent = getElement('storyContent');
  if (!storyContent) return;

  storyContent.classList.toggle('dark-mode');
  const isDarkMode = storyContent.classList.contains('dark-mode');
  localStorage.setItem('readingMode', isDarkMode ? 'dark' : 'light');

  const toggleBtn = getElement('toggleMode');
  if (toggleBtn) {
    toggleBtn.innerHTML = isDarkMode
      ? '<i class="bi bi-sun"></i> Chế độ sáng'
      : '<i class="bi bi-moon"></i> Chế độ tối';
  }
}

// Gắn sự kiện cho nút chế độ đọc
document.addEventListener('DOMContentLoaded', function () {
  const toggleModeBtn = getElement('toggleMode');
  if (toggleModeBtn) toggleModeBtn.addEventListener('click', toggleReadingMode);

  // Khôi phục chế độ đọc đã lưu
  const savedMode = localStorage.getItem('readingMode');
  if (savedMode === 'dark' && getElement('storyContent')) {
    getElement('storyContent').classList.add('dark-mode');
    getElement('toggleMode').innerHTML = '<i class="bi bi-sun"></i> Chế độ sáng';
  }
});
// GIAO DIỆN

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  const isDarkMode = document.body.classList.contains('dark-mode');
  localStorage.setItem('darkMode', isDarkMode);

  const toggleBtn = getElement('toggleDark');
  if (toggleBtn) {
    const icon = toggleBtn.querySelector('i');
    if (icon) {
      icon.classList.toggle('bi-lightbulb', !isDarkMode);
      icon.classList.toggle('bi-lightbulb-fill', isDarkMode);
    }
  }
}

function setupScrollFadeEffects() {
  const scrollElements = document.querySelectorAll('.scroll-fade');
  if (!scrollElements.length) return;

  const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;
    return elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend;
  };

  const displayScrollElement = el => el.classList.add('visible');
  const hideScrollElement = el => el.classList.remove('visible');

  const handleScrollAnimation = () => {
    scrollElements.forEach(el => {
      if (elementInView(el, 1.25)) {
        displayScrollElement(el);
      } else {
        hideScrollElement(el);
      }
    });
  };

  handleScrollAnimation();
  window.addEventListener('scroll', debounce(handleScrollAnimation, 100));
}

function setupHomePage() {
  if (typeof Swiper !== 'undefined' && document.querySelector('.mySwiper')) {
    new Swiper('.mySwiper', {
      slidesPerView: 4,
      spaceBetween: 10,
      loop: true,
      autoplay: { delay: 4000, disableOnInteraction: false },
      navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
      breakpoints: {
        0: { slidesPerView: 1 },
        576: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        992: { slidesPerView: 4 }
      }
    });
  }

  const newStoryCards = document.querySelectorAll('.new-stories .card');
  newStoryCards.forEach((card, index) => {
    card.dataset.url = stories[index % stories.length].url;
    card.addEventListener('click', () => window.location.href = card.dataset.url);
  });

  const lazyImages = document.querySelectorAll('img[data-src]');
  if (lazyImages.length) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          obs.unobserve(img);
        }
      });
    });
    lazyImages.forEach(img => observer.observe(img));
  }
}

// KHỞI TẠO
document.addEventListener('DOMContentLoaded', () => {
  // Dọn dẹp backdrop và lớp modal-open khi tải trang
  document.querySelectorAll('.modal-backdrop').forEach(backdrop => backdrop.remove());
  document.body.classList.remove('modal-open');
  document.body.style.paddingRight = '';

  const savedFontSize = localStorage.getItem('preferredFontSize');
  if (savedFontSize) changeFontSize(savedFontSize);

  if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
    const icon = getElement('toggleDark')?.querySelector('i');
    if (icon) {
      icon.classList.remove('bi-lightbulb');
      icon.classList.add('bi-lightbulb-fill');
    }
  }

  document.addEventListener('click', e => {
    const suggestionsList = getElement('suggestionsList');
    const searchInput = getElement('searchInput');
    if (suggestionsList && searchInput && !searchInput.contains(e.target) && !suggestionsList.contains(e.target)) {
      suggestionsList.innerHTML = '';
    }
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const href = anchor.getAttribute('href');
      if (href === '#') return;
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        window.scrollTo({ top: target.offsetTop - 70, behavior: 'smooth' });
      }
    });
  });

  const toggleBtn = getElement('toggleDark');
  if (toggleBtn) toggleBtn.addEventListener('click', toggleDarkMode);

  const searchInput = getElement('searchInput');
  const searchForm = document.querySelector('form');
  if (searchInput) searchInput.addEventListener('input', showSuggestions);
  if (searchForm) searchForm.addEventListener('submit', handleSearch);

  setupScrollFadeEffects();
  setupSearchPage();
  setupHomePage();
});
// Khởi tạo modal và các sự kiện
function initModals() {
  // Thêm modal đăng nhập nếu chưa có
  if (!document.getElementById('authModal')) {
    const authModal = `
      <div class="modal fade" id="authModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="authTitle">Đăng nhập</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Đóng"></button>
            </div>
            <div class="modal-body">
              <div id="loginForm">
                <div class="mb-3">
                  <label for="loginUsername" class="form-label">Tên đăng nhập</label>
                  <input type="text" class="form-control" id="loginUsername" placeholder="Nhập tên đăng nhập">
                </div>
                <div class="mb-3">
                  <label for="loginPassword" class="form-label">Mật khẩu</label>
                  <input type="password" class="form-control" id="loginPassword" placeholder="Nhập mật khẩu">
                </div>
                <button class="btn btn-primary w-100" onclick="handleLogin()">Đăng nhập</button>
                <p class="mt-3 text-center">Chưa có tài khoản? <a href="#" onclick="switchToRegister()">Đăng ký</a></p>
              </div>
              <div id="registerForm" style="display: none;">
                <div class="mb-3">
                  <label for="regUsername" class="form-label">Tên đăng nhập</label>
                  <input type="text" class="form-control" id="regUsername" placeholder="Nhập tên đăng nhập">
                </div>
                <div class="mb-3">
                  <label for="regPassword" class="form-label">Mật khẩu</label>
                  <input type="password" class="form-control" id="regPassword" placeholder="Nhập mật khẩu">
                </div>
                <div class="mb-3">
                  <label for="regConfirm" class="form-label">Xác nhận mật khẩu</label>
                  <input type="password" class="form-control" id="regConfirm" placeholder="Xác nhận mật khẩu">
                </div>
                <button class="btn btn-primary w-100" onclick="handleRegister()">Đăng ký</button>
                <p class="mt-3 text-center">Đã có tài khoản? <a href="#" onclick="switchToLogin()">Đăng nhập</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>`;
    document.body.insertAdjacentHTML('beforeend', authModal);
  }

  // Thêm modal profile nếu chưa có
  if (!document.getElementById('profileModal')) {
    const profileModal = `
      <div class="modal fade" id="profileModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Thông tin tài khoản</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Đóng"></button>
            </div>
            <div class="modal-body">
              <div class="text-center mb-3">
                <div class="avatar-container mb-2">
                  <img id="userAvatar" src="../images/LOGO.png" alt="Avatar" class="rounded-circle" style="width: 150px; height: 150px; object-fit: cover;">
                </div>
                <button class="btn btn-sm btn-outline-secondary" onclick="document.getElementById('avatarUpload').click()">Thay đổi avatar</button>
                <input type="file" id="avatarUpload" style="display: none;" accept="image/*" onchange="changeAvatar(this)">
              </div>
              <h4 class="text-center mb-3" id="profileUsername">Tên người dùng</h4>
              <div class="mb-3">
                <label for="currentPassword" class="form-label">Mật khẩu hiện tại</label>
                <input type="password" class="form-control" id="currentPassword">
              </div>
              <div class="mb-3">
                <label for="newPassword" class="form-label">Mật khẩu mới</label>
                <input type="password" class="form-control" id="newPassword">
              </div>
              <div class="mb-3">
                <label for="confirmNewPassword" class="form-label">Xác nhận mật khẩu mới</label>
                <input type="password" class="form-control" id="confirmNewPassword">
              </div>
              <button class="btn btn-primary w-100" onclick="changePassword()">Cập nhật mật khẩu</button>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" onclick="logout()">Đăng xuất</button>
            </div>
          </div>
        </div>
      </div>`;
    document.body.insertAdjacentHTML('beforeend', profileModal);
  }

}
// Chuyển đổi giữa form đăng nhập và đăng ký
function switchToRegister() {
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');
  const authTitle = document.getElementById('authTitle');
  if (loginForm && registerForm && authTitle) {
    loginForm.style.display = 'none';
    registerForm.style.display = 'block';
    authTitle.textContent = 'Đăng ký';
  }
  return false;
}

function switchToLogin() {
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');
  const authTitle = document.getElementById('authTitle');
  if (loginForm && registerForm && authTitle) {
    registerForm.style.display = 'none';
    loginForm.style.display = 'block';
    authTitle.textContent = 'Đăng nhập';
  }
  return false;
}

// Xử lý đăng nhập
 function handleLogin() {
  const username = document.getElementById('loginUsername')?.value.trim();
  const password = document.getElementById('loginPassword')?.value;

  if (!username || !password) {
    showToast('Vui lòng nhập đầy đủ thông tin', 'warning');
    return;
  }

  const users = getUsers();
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    saveCurrentUser(user);
    validateCurrentUser(user)
    // Đóng modal
    const authModalElement = document.getElementById('authModal');
    if (authModalElement) {
      const authModal = bootstrap.Modal.getInstance(authModalElement);
      if (authModal) {
        authModal.hide();
      }
      document.querySelectorAll('.modal-backdrop').forEach(backdrop => backdrop.remove());
      document.body.classList.remove('modal-open');
      document.body.style.paddingRight = '';
    }

    // Reset form
    document.getElementById('loginUsername').value = '';
    document.getElementById('loginPassword').value = '';

    showToast('Đăng nhập thành công!', 'success');
  } else {
    showToast('Tên đăng nhập hoặc mật khẩu không đúng', 'danger');
  }
}
// Xử lý đăng ký
function handleRegister() {
  const username = document.getElementById('regUsername')?.value.trim();
  const password = document.getElementById('regPassword')?.value;
  const confirmPassword = document.getElementById('regConfirm')?.value;

  if (!username || !password || !confirmPassword) {
    showToast('Vui lòng nhập đầy đủ thông tin', 'warning');
    return;
  }

  if (password !== confirmPassword) {
    showToast('Mật khẩu xác nhận không khớp', 'warning');
    return;
  }

  const users = getUsers();
  if (users.some(u => u.username === username)) {
    showToast('Tên đăng nhập đã tồn tại', 'warning');
    return;
  }

  const newUser = {
    id: Date.now().toString(),
    username: username,
    password: password,
    avatar: null
  };

  users.push(newUser);
  saveUsers(users);
  saveCurrentUser(newUser);

  // Đóng modal và dọn dẹp
  const authModalElement = document.getElementById('authModal');
  if (authModalElement) {
    const authModal = bootstrap.Modal.getInstance(authModalElement) || new bootstrap.Modal(authModalElement);
    authModal.hide();
    document.querySelectorAll('.modal-backdrop').forEach(backdrop => backdrop.remove());
    document.body.classList.remove('modal-open');
    document.body.style.paddingRight = '';
  }

  // Reset form
  document.getElementById('regUsername').value = '';
  document.getElementById('regPassword').value = '';
  document.getElementById('regConfirm').value = '';

  showToast('Đăng ký thành công!', 'success');
}

// Xử lý đăng xuất
function logout() {
  currentUser = null;
  saveCurrentUser(null);

  // Đóng modal và dọn dẹp
  const profileModalElement = document.getElementById('profileModal');
  if (profileModalElement) {
    const profileModal = bootstrap.Modal.getInstance(profileModalElement) || new bootstrap.Modal(profileModalElement);
    profileModal.hide();
    document.querySelectorAll('.modal-backdrop').forEach(backdrop => backdrop.remove());
    document.body.classList.remove('modal-open');
    document.body.style.paddingRight = '';
  }

  updateUIState();
  showToast('Đã đăng xuất', 'info');
}

// Thay đổi mật khẩu
function changePassword() {
  if (!currentUser) return;

  const currentPassword = document.getElementById('currentPassword')?.value;
  const newPassword = document.getElementById('newPassword')?.value;
  const confirmNewPassword = document.getElementById('confirmNewPassword')?.value;

  if (!currentPassword || !newPassword || !confirmNewPassword) {
    showToast('Vui lòng nhập đầy đủ thông tin', 'warning');
    return;
  }

  if (currentPassword !== currentUser.password) {
    showToast('Mật khẩu hiện tại không đúng', 'danger');
    return;
  }

  if (newPassword !== confirmNewPassword) {
    showToast('Mật khẩu mới xác nhận không khớp', 'warning');
    return;
  }

  const users = getUsers();
  const userIndex = users.findIndex(u => u.id === currentUser.id);

  if (userIndex !== -1) {
    users[userIndex].password = newPassword;
    saveUsers(users);
    currentUser.password = newPassword;
    saveCurrentUser(currentUser);

    // Reset form
    document.getElementById('currentPassword').value = '';
    document.getElementById('newPassword').value = '';
    document.getElementById('confirmNewPassword').value = '';

    // Đóng modal và dọn dẹp
    const profileModalElement = document.getElementById('profileModal');
    if (profileModalElement) {
      const profileModal = bootstrap.Modal.getInstance(profileModalElement) || new bootstrap.Modal(profileModalElement);
      profileModal.hide();
      document.querySelectorAll('.modal-backdrop').forEach(backdrop => backdrop.remove());
      document.body.classList.remove('modal-open');
      document.body.style.paddingRight = '';
    }

    showToast('Đã cập nhật mật khẩu', 'success');
  }
}

// Đổi avatar
function changeAvatar(input) {
  if (!currentUser || !input.files || !input.files[0]) return;

  const file = input.files[0];
  const reader = new FileReader();

  reader.onload = function(e) {
    const avatarData = e.target.result;
    const users = getUsers();
    const userIndex = users.findIndex(u => u.id === currentUser.id);

    if (userIndex !== -1) {
      users[userIndex].avatar = avatarData;
      saveUsers(users);
      currentUser.avatar = avatarData;
      saveCurrentUser(currentUser);

      const avatarImg = document.getElementById('userAvatar');
      if (avatarImg) avatarImg.src = avatarData;

      // Đóng modal và dọn dẹp
      const profileModalElement = document.getElementById('profileModal');
      if (profileModalElement) {
        const profileModal = bootstrap.Modal.getInstance(profileModalElement) || new bootstrap.Modal(profileModalElement);
        profileModal.hide();
        document.querySelectorAll('.modal-backdrop').forEach(backdrop => backdrop.remove());
        document.body.classList.remove('modal-open');
        document.body.style.paddingRight = '';
      }

      showToast('Đã cập nhật avatar', 'success');
    }
  };

  reader.readAsDataURL(file);
}
//******** */
/* Hàm thay đổi avatar */
function changeAvatar(input) {
  console.log('changeAvatar called with input:', input.files); // Debug
  if (input.files && input.files[0]) {
    if (input.files[0].size > 2 * 1024 * 1024) {
      showToast('Ảnh quá lớn, vui lòng chọn ảnh dưới 2MB', 'warning');
      return;
    }
    const reader = new FileReader();
    reader.onload = function (e) {
      const avatarImg = document.getElementById('userAvatar');
      if (avatarImg) {
        avatarImg.src = e.target.result;
      } else {
        console.error('userAvatar element not found'); // Debug
      }

      const users = getUsers();
      const userIndex = users.findIndex(u => u.id === currentUser.id);
      if (userIndex !== -1) {
        users[userIndex].avatar = e.target.result;
        saveUsers(users);
        currentUser.avatar = e.target.result;
        saveCurrentUser(currentUser);
        updateUIState();
        showToast('Đã cập nhật avatar', 'success');
        showSection('profileOptions'); // Quay lại màn hình lựa chọn
      } else {
        console.error('User not found in users list'); // Debug
      }
    };
    reader.readAsDataURL(input.files[0]);
  } else {
    console.error('No file selected'); // Debug
  }
}

/* Hàm hiển thị section */
function showSection(section) {
  console.log('Showing section:', section); // Debug
  const sections = ['profileOptions', 'infoSection', 'passwordSection', 'savedStoriesSection'];
  sections.forEach(s => {
    const element = document.getElementById(s);
    if (element) {
      element.style.display = s === section ? 'block' : 'none';
    } else {
      console.error(`Section ${s} not found`); // Debug
    }
  });

  // Cập nhật danh sách truyện đã lưu nếu hiển thị section tương ứng
  if (section === 'savedStoriesSection') {
    updateSavedStoriesList();
  }
}

/* Cập nhật hàm initModals */
function initModals() {
  console.log('initModals called'); // Debug
  // Modal đăng nhập (giữ nguyên)
  if (!document.getElementById('authModal')) {
    const authModal = `
      <div class="modal fade" id="authModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="authTitle">Đăng nhập</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Đóng"></button>
            </div>
            <div class="modal-body">
              <div id="loginForm">
                <div class="mb-3">
                  <label for="loginUsername" class="form-label">Tên đăng nhập</label>
                  <input type="text" class="form-control" id="loginUsername" placeholder="Nhập tên đăng nhập">
                </div>
                <div class="mb-3">
                  <label for="loginPassword" class="form-label">Mật khẩu</label>
                  <input type="password" class="form-control" id="loginPassword" placeholder="Nhập mật khẩu">
                </div>
                <button class="btn btn-primary w-100" onclick="handleLogin()">Đăng nhập</button>
                <p class="mt-3 text-center">Chưa có tài khoản? <a href="#" onclick="switchToRegister()">Đăng ký</a></p>
              </div>
              <div id="registerForm" style="display: none;">
                <div class="mb-3">
                  <label for="regUsername" class="form-label">Tên đăng nhập</label>
                  <input type="text" class="form-control" id="regUsername" placeholder="Nhập tên đăng nhập">
                </div>
                <div class="mb-3">
                  <label for="regPassword" class="form-label">Mật khẩu</label>
                  <input type="password" class="form-control" id="regPassword" placeholder="Nhập mật khẩu">
                </div>
                <div class="mb-3">
                  <label for="regConfirm" class="form-label">Xác nhận mật khẩu</label>
                  <input type="password" class="form-control" id="regConfirm" placeholder="Xác nhận mật khẩu">
                </div>
                <button class="btn btn-primary w-100" onclick="handleRegister()">Đăng ký</button>
                <p class="mt-3 text-center">Đã có tài khoản? <a href="#" onclick="switchToLogin()">Đăng nhập</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>`;
    document.body.insertAdjacentHTML('beforeend', authModal);
  }

  // Modal thông tin tài khoản
  if (document.getElementById('profileModal')) {
    document.getElementById('profileModal').remove();
  }
  const profileModal = `
    <div class="modal fade" id="profileModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Thông tin tài khoản</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Đóng"></button>
          </div>
          <div class="modal-body">
            <div id="profileOptions" class="text-center">
              <div class="avatar-container mb-3">
                <img id="userAvatar" src="../images/LOGO.png" alt="Avatar" class="rounded-circle" style="width: 150px; height: 150px; object-fit: cover;">
                <button id="editAvatarButton" class="btn btn-primary btn-sm edit-avatar-btn" onclick="document.getElementById('avatarUpload').click()">Sửa avatar</button>
                <input type="file" id="avatarUpload" style="display: none;" accept="image/*" onchange="changeAvatar(this)">
              </div>
              <h4 id="profileUsername" class="mb-4">Tên người dùng</h4>
              <div class="row g-3">
                <div class="col-md-4">
                  <div class="card option-card" style="cursor: pointer;" onclick="showSection('infoSection')">
                    <div class="card-body">
                      <i class="bi bi-person-circle fs-3 mb-2"></i>
                      <h6>Cập nhật thông tin</h6>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="card option-card" style="cursor: pointer;" onclick="showSection('passwordSection')">
                    <div class="card-body">
                      <i class="bi bi-lock-fill fs-3 mb-2"></i>
                      <h6>Đổi mật khẩu</h6>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="card option-card" style="cursor: pointer;" onclick="showSection('savedStoriesSection')">
                    <div class="card-body">
                      <i class="bi bi-bookmark-fill fs-3 mb-2"></i>
                      <h6>Truyện đã lưu</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="infoSection" style="display: none;">
              <div class="d-flex align-items-center mb-3">
                <button class="btn btn-outline-secondary me-2" onclick="showSection('profileOptions')"><i class="bi bi-arrow-left"></i> Quay lại</button>
                <h5 class="mb-0">Cập nhật thông tin</h5>
              </div>
              <form id="updateInfoForm">
                <div class="mb-3">
                  <label for="fullName" class="form-label">Họ tên</label>
                  <input type="text" class="form-control" id="fullName" placeholder="Nhập họ tên">
                </div>
                <div class="mb-3">
                  <label for="phoneNumber" class="form-label">Số điện thoại</label>
                  <input type="tel" class="form-control" id="phoneNumber" placeholder="Nhập số điện thoại">
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label">Email</label>
                  <input type="email" class="form-control" id="email" placeholder="Nhập email">
                </div>
                <button type="button" class="btn btn-primary w-100" onclick="updateUserInfo()">Cập nhật thông tin</button>
              </form>
            </div>
            <div id="passwordSection" style="display: none;">
              <div class="d-flex align-items-center mb-3">
                <button class="btn btn-outline-secondary me-2" onclick="showSection('profileOptions')"><i class="bi bi-arrow-left"></i> Quay lại</button>
                <h5 class="mb-0">Đổi mật khẩu</h5>
              </div>
              <form id="changePasswordForm">
                <div class="mb-3">
                  <label for="currentPassword" class="form-label">Mật khẩu hiện tại</label>
                  <input type="password" class="form-control" id="currentPassword">
                </div>
                <div class="mb-3">
                  <label for="newPassword" class="form-label">Mật khẩu mới</label>
                  <input type="password" class="form-control" id="newPassword">
                </div>
                <div class="mb-3">
                  <label for="confirmNewPassword" class="form-label">Xác nhận mật khẩu mới</label>
                  <input type="password" class="form-control" id="confirmNewPassword">
                </div>
                <button type="button" class="btn btn-primary w-100" onclick="changePassword()">Cập nhật mật khẩu</button>
              </form>
            </div>
            <div id="savedStoriesSection" style="display: none;">
              <div class="d-flex align-items-center mb-3">
                <button class="btn btn-outline-secondary me-2" onclick="showSection('profileOptions')"><i class="bi bi-arrow-left"></i> Quay lại</button>
                <h5 class="mb-0">Truyện đã lưu</h5>
              </div>
              <div id="savedStoriesList" class="row">
              </div>
              <p id="noSavedStories" class="text-center mt-3" style="display: none;">Bạn chưa lưu truyện nào.</p>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-danger" onclick="logout()">Đăng xuất</button>
          </div>
        </div>
      </div>
    </div>`;
  document.body.insertAdjacentHTML('beforeend', profileModal);
}
/* Hàm cập nhật thông tin người dùng */
function updateUserInfo() {
  if (!currentUser) return;

  const fullName = document.getElementById('fullName')?.value.trim();
  const phoneNumber = document.getElementById('phoneNumber')?.value.trim();
  const email = document.getElementById('email')?.value.trim();

  if (!fullName || !phoneNumber || !email) {
    showToast('Vui lòng nhập đầy đủ thông tin', 'warning');
    return;
  }

  const users = getUsers();
  const userIndex = users.findIndex(u => u.id === currentUser.id);

  if (userIndex !== -1) {
    users[userIndex].fullName = fullName;
    users[userIndex].phoneNumber = phoneNumber;
    users[userIndex].email = email;
    saveUsers(users);
    currentUser.fullName = fullName;
    currentUser.phoneNumber = phoneNumber;
    currentUser.email = email;
    saveCurrentUser(currentUser);

    showToast('Đã cập nhật thông tin', 'success');
    showSection('profileOptions'); // Quay lại màn hình lựa chọn
  }
}

/* Hàm lưu và xóa truyện */
function saveStory(storyId) {
  if (!currentUser) {
    showToast('Vui lòng đăng nhập để lưu truyện', 'warning');
    return;
  }

  const users = getUsers();
  const userIndex = users.findIndex(u => u.id === currentUser.id);

  if (userIndex !== -1) {
    if (!users[userIndex].savedStories) users[userIndex].savedStories = [];
    if (!users[userIndex].savedStories.includes(storyId)) {
      users[userIndex].savedStories.push(storyId);
      saveUsers(users);
      currentUser.savedStories = users[userIndex].savedStories;
      saveCurrentUser(currentUser);
      showToast('Đã lưu truyện', 'success');
      updateSavedStoriesList();
    } else {
      showToast('Truyện đã được lưu', 'info');
    }
  }
}

function removeStory(storyId) {
  if (!currentUser) return;

  const users = getUsers();
  const userIndex = users.findIndex(u => u.id === currentUser.id);

  if (userIndex !== -1) {
    users[userIndex].savedStories = users[userIndex].savedStories.filter(id => id !== storyId);
    saveUsers(users);
    currentUser.savedStories = users[userIndex].savedStories;
    saveCurrentUser(currentUser);
    showToast('Đã xóa truyện khỏi danh sách lưu', 'success');
    updateSavedStoriesList();
  }
}

/* Hàm cập nhật danh sách truyện đã lưu */
function updateSavedStoriesList() {
  const savedStoriesList = document.getElementById('savedStoriesList');
  const noSavedStories = document.getElementById('noSavedStories');
  if (!savedStoriesList || !noSavedStories) return;

  savedStoriesList.innerHTML = '';
  if (!currentUser || !currentUser.savedStories || currentUser.savedStories.length === 0) {
    noSavedStories.style.display = 'block';
    return;
  }

  noSavedStories.style.display = 'none';
  currentUser.savedStories.forEach(storyId => {
    const story = stories.find(s => s.id === storyId);
    if (story) {
      const card = document.createElement('div');
      card.className = 'col-md-4 mb-3';
      card.innerHTML = `
        <div class="card shadow-sm h-100" style="cursor: pointer;">
          <img src="${story.image}" onerror="this.src='${story.image2}'" class="card-img-top" style="height: 150px; object-fit: cover;" alt="${story.title}";>
          <div class="card-body d-flex flex-column">
            <h6 class="card-title mb-2">${story.title}</h6>
            <button class="btn btn-sm btn-danger mt-auto" onclick="removeStory('${story.id}')">Xóa</button>
          </div>
        </div>
      `;
card.querySelector('.card').addEventListener('click', async (e) => {
  if (e.target.classList.contains('btn-danger')) return;

  try {
    const response = await fetch(story.url, { method: 'HEAD' });
    if (response.ok) {
      window.location.href = story.url;
    } else {
      window.location.href = story.url2;
    }
  } catch (error) {
    window.location.href = story.url2;
  }
});

      savedStoriesList.appendChild(card);
    }
  });
}

/* Cập nhật hàm handleRegister */
function handleRegister() {
  const username = document.getElementById('regUsername')?.value.trim();
  const password = document.getElementById('regPassword')?.value;
  const confirmPassword = document.getElementById('regConfirm')?.value;

  if (!username || !password || !confirmPassword) {
    showToast('Vui lòng nhập đầy đủ thông tin', 'warning');
    return;
  }

  if (password !== confirmPassword) {
    showToast('Mật khẩu xác nhận không khớp', 'warning');
    return;
  }

  const users = getUsers();
  if (users.some(u => u.username === username)) {
    showToast('Tên đăng nhập đã tồn tại', 'warning');
    return;
  }

  const newUser = {
    id: Date.now().toString(),
    username: username,
    password: password,
    avatar: null,
    fullName: '',
    phoneNumber: '',
    email: '',
    savedStories: []
  };

  users.push(newUser);
  saveUsers(users);
  saveCurrentUser(newUser);

  const authModalElement = document.getElementById('authModal');
  if (authModalElement) {
    const authModal = bootstrap.Modal.getInstance(authModalElement) || new bootstrap.Modal(authModalElement);
    authModal.hide();
    document.querySelectorAll('.modal-backdrop').forEach(backdrop => backdrop.remove());
    document.body.classList.remove('modal-open');
    document.body.style.paddingRight = '';
  }

  document.getElementById('regUsername').value = '';
  document.getElementById('regPassword').value = '';
  document.getElementById('regConfirm').value = '';

  showToast('Đăng ký thành công!', 'success');
}
document.addEventListener('DOMContentLoaded', function () {
  const commentKey = 'comments';
  const usernameInput = document.getElementById('username');
  const contentInput = document.getElementById('content');
  const submitBtn = document.getElementById('submitComment');
  const commentList = document.getElementById('commentList');

  // ⭐️ Lấy ID truyện từ URL
  const urlParams = new URLSearchParams(window.location.search);
  const storyId = urlParams.get('id');

  // Nếu đã đăng nhập thì tự động điền tên và ẩn input
  if (currentUser?.username) {
    usernameInput.value = currentUser.username;
    usernameInput.style.display = 'none';
    usernameInput.setAttribute('data-autofill', 'true'); // dùng để phân biệt
  }

  // Tải và hiển thị bình luận cũ
  loadComments();

  // Sự kiện gửi bình luận
  submitBtn.addEventListener('click', addComment);

  // Ctrl + Enter để gửi
  contentInput.addEventListener('keydown', function (e) {
    if (e.ctrlKey && e.key === 'Enter') {
      addComment();
    }
  });

  function addComment() {
    let username;

    // ⭐️ Phân biệt giữa người đăng nhập và nhập tay
    if (currentUser?.username) {
      username = currentUser.username;
    } else {
      username = usernameInput.value.trim();
      if (!username) {
        alert('Vui lòng nhập tên của bạn!');
        return;
      }
    }

    const content = contentInput.value.trim();
    if (!content) {
      alert('Vui lòng nhập nội dung bình luận!');
      return;
    }

    const newComment = {
      username,
      content,
      date: new Date().toLocaleString('vi-VN'),
      storyId // ⭐️ Gắn ID truyện để lọc
    };

    // Thêm vào giao diện
    createCommentElement(newComment);

    // Lưu vào localStorage
    saveComment(newComment);

    // Xóa form
    if (!currentUser?.username) usernameInput.value = '';
    contentInput.value = '';
    contentInput.focus();
  }

  function createCommentElement(comment) {
    const commentDiv = document.createElement('div');
    commentDiv.className = 'comment';

    const headerDiv = document.createElement('div');
    headerDiv.className = 'comment-header';

    const authorSpan = document.createElement('span');
    authorSpan.className = 'comment-author';
    authorSpan.textContent = comment.username;

    const dateSpan = document.createElement('span');
    dateSpan.className = 'comment-date';
    dateSpan.textContent = comment.date;

    headerDiv.appendChild(authorSpan);
    headerDiv.appendChild(dateSpan);

    const contentDiv = document.createElement('div');
    contentDiv.className = 'comment-content';
    contentDiv.textContent = comment.content;

    commentDiv.appendChild(headerDiv);
    commentDiv.appendChild(contentDiv);

    // Thêm lên đầu danh sách
    commentList.insertBefore(commentDiv, commentList.firstChild);
  }

  function saveComment(comment) {
    const comments = JSON.parse(localStorage.getItem(commentKey)) || [];
    comments.push(comment);
    localStorage.setItem(commentKey, JSON.stringify(comments));
  }

  function loadComments() {
    const comments = JSON.parse(localStorage.getItem(commentKey)) || [];
    const storyComments = comments.filter(c => c.storyId === storyId); // ⭐️ Lọc theo id truyện
    storyComments.forEach(createCommentElement);
  }
});

function toggleSave() {
    const btn = document.getElementById("btnSave");
    const icon = btn.querySelector("i");

    // Toggle class màu
    btn.classList.toggle("bg-info");
    btn.classList.toggle("bg-warning");
    btn.classList.toggle("text-white");

    // Toggle biểu tượng
    icon.classList.toggle("bi-bookmark-plus");
    icon.classList.toggle("bi-bookmark-check");

    // (Tùy chọn) đổi chữ
    btn.innerHTML = icon.outerHTML + (icon.classList.contains("bi-bookmark-check") ? " Đã lưu" : " Lưu truyện");
}

function toggleLike() {
    const btn = document.getElementById("btnLike");
    const icon = btn.querySelector("i");

    // Toggle màu nút
    btn.classList.toggle("btn-outline-danger");
    btn.classList.toggle("btn-danger");
    btn.classList.toggle("text-white");

    // Toggle biểu tượng trái tim
    icon.classList.toggle("bi-heart");
    icon.classList.toggle("bi-heart-fill");

    // (Tùy chọn) đổi chữ
    btn.innerHTML = icon.outerHTML + (icon.classList.contains("bi-heart-fill") ? " Đã thích" : " Thích");
}
function getValidAvatarSrc() {
  const paths = [
    currentUser?.avatar, // Ưu tiên avatar của người dùng nếu có
    "../../images/LOGO.png"    // Đường dẫn từ thư mục gốc (nếu cần)
  ];

  for (let path of paths) {
    if (path) {
      const img = new Image();
      img.src = path;
      // Kiểm tra xem ảnh có tải được không
      if (img.complete && img.naturalHeight !== 0) {
        return path;
      }
    }
  }
  return "../../images/LOGO.png"; // Giá trị mặc định nếu không đường dẫn nào hợp lệ
}

function updateUIState() {
  const authButton = document.getElementById('authButton');
  if (!authButton) {
    console.error('authButton not found');
    return;
  }

  const avatarSrc = getValidAvatarSrc();
  if (currentUser) {
    authButton.innerHTML = `
      <img src="${avatarSrc}" alt="Avatar" class="rounded-circle" style="width: 32px; height: 32px; object-fit: cover;">
    `;
    authButton.classList.add('btn-outline-light', 'rounded-pill');
    authButton.setAttribute('data-bs-target', '#profileModal');
    authButton.setAttribute('data-bs-toggle', 'modal');

    const profileUsername = document.getElementById('profileUsername');
    if (profileUsername) profileUsername.textContent = currentUser.username;

    const avatarImg = document.getElementById('userAvatar');
    if (avatarImg) avatarImg.src = avatarSrc;
  } else {
    authButton.textContent = 'Đăng nhập';
    authButton.classList.add('btn-outline-light', 'rounded-pill');
    authButton.setAttribute('data-bs-target', '#authModal');
    authButton.setAttribute('data-bs-toggle', 'modal');
  }
}