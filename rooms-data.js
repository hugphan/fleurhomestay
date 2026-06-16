/* ============================================================
   Fleur Homestay — nguồn dữ liệu DUY NHẤT cho cả website
   Dùng bởi index.html (trang chủ) và room.html (trang chi tiết).
   Sửa giá / tên phòng / tiện ích / ảnh / liên hệ ngay tại đây
   là cả hai trang tự cập nhật. Xem CAP-NHAT-ANH.md.
   ============================================================ */
window.FLEUR_CONTACT = {
  hotline: '0866.621.466',
  hotlineTel: '0866621466',
  fanpage: 'https://www.facebook.com/Fleurhomestay',
  fanpageLabel: 'facebook.com/Fleurhomestay',
  tiktok: 'https://www.tiktok.com/@fleur.homestay',
  tiktokLabel: '@fleur.homestay',
  web: 'fleur.com.vn',
  checkin: '14:00',
  checkout: '12:00',
};

window.FLEUR_FACILITIES = [
  { id: 'quang-khanh', name: 'Quảng Khánh', area: 'Quảng An · Tây Hồ',
    map: 'https://maps.app.goo.gl/8jwQXk65tPDfsBzdA',
    blurb: 'Bốn căn phòng rộng rãi, nhiều ánh sáng bên hồ Tây — đầy đủ bếp, máy chiếu và boardgame cho kỳ nghỉ trọn vẹn.' },
  { id: 'trich-sai', name: 'Trích Sài', area: 'Trích Sài · Tây Hồ',
    map: 'https://maps.app.goo.gl/mWUcHpsQGKLN3TpU7',
    blurb: 'Ba căn phòng cá tính ven hồ, giá mềm — từ phòng điện ảnh tông tối tới gallery nghệ thuật rực rỡ.' },
];

// `photos` = số ảnh của phòng đó. Ảnh nằm trong
// assets/phong/<cơ-sở>/<phòng>/1.jpg, 2.jpg, ... (đánh số lần lượt).
// Thêm ảnh: bỏ file 3.jpg, 4.jpg... vào thư mục phòng rồi tăng số này lên.
const R = (slug, name, facility, price, amenities, desc, beds, guests, photos = 2) => ({
  slug, name, facility, price, amenities, desc, beds, guests,
  images: Array.from({ length: photos }, (_, i) =>
    `assets/phong/${facility}/${slug}/${i + 1}.jpg`),
});

window.FLEUR_ROOMS = [
  // ---- Cơ sở Quảng Khánh (4) ----
  R('eclipse', 'Eclipse Room', 'quang-khanh', 450,
    ['Máy chiếu', 'Boardgame', 'WC khép kín', 'Bếp'],
    'Tông hồng pastel ngọt ngào, hai khu giường rộng đón nắng sớm và một góc trà nhỏ giữa phòng. Chốn nghỉ lý tưởng cho nhóm bạn thân hay gia đình nhỏ muốn quây quần.',
    '2 giường', '4–5 khách'),
  R('new-moon', 'New Moon Room', 'quang-khanh', 400,
    ['Smart TV', 'Boardgame', 'WC khép kín', 'Bếp'],
    'Căn phòng sáng với góc làm việc gỗ mây, giường hoa nhí dịu mắt và khu sofa cạnh cửa sổ. Vừa nghỉ ngơi vừa làm việc đều thật dễ chịu.',
    '1 giường đôi + sofa', '2–3 khách'),
  R('twilight', 'Twilight Room', 'quang-khanh', 350,
    ['Máy chiếu', 'Boardgame', 'WC khép kín', 'Bếp'],
    'Sofa nệm êm, bàn trà gỗ tròn và bình gốm trắng tinh. Không gian trầm ấm cho một tối xem phim hay chơi boardgame cùng nhau.',
    '1 giường đôi', '2 khách'),
  R('room-201', '201 Room', 'quang-khanh', 350,
    ['Máy chiếu', 'Boardgame', 'WC khép kín', 'Bếp'],
    'Phòng góc nhiều cửa sổ, sàn gạch hoa cổ điển và giường hoa nhí ấm cúng — chất Hà Nội xưa pha cùng nét hiện đại nhẹ nhàng.',
    '1 giường đôi', '2–3 khách'),
  // ---- Cơ sở Trích Sài (3) ----
  R('wednesday', 'Wednesday Room', 'trich-sai', 180,
    ['Máy chiếu', 'Boardgame', 'WC khép kín'],
    'Phòng tông tối điện ảnh, đèn vàng ấm và màn chiếu lớn. Một “sleep date” xem phim cực chill, chỉ từ 180K mỗi đêm.',
    '1 giường đôi', '2 khách'),
  R('sunday', 'Sunday Room', 'trich-sai', 180,
    ['Máy chiếu', 'Boardgame', 'Máy chơi game', 'WC khép kín'],
    'Tường cam đất, gallery tranh Van Gogh & Matisse, máy chiếu và máy chơi game. Căn phòng dành cho hội mê nghệ thuật và game thủ.',
    '1 giường đôi + sofa', '2–3 khách'),
  R('friday', 'Friday Room', 'trich-sai', 150,
    ['Máy chiếu', 'Boardgame', 'WC khép kín'],
    'Phòng tông xanh tươi mát, giường hoa nhí ấm cúng và mức giá tốt nhất hệ thống — lựa chọn gọn gàng, dễ thương cho cặp đôi.',
    '1 giường đôi', '2 khách'),
];

window.FLEUR_AMBIANCE = [
  'assets/chung/garden-bath.jpg',
  'assets/chung/marble-bath.jpg',
  'assets/chung/spa-bath.jpg',
  'assets/chung/wood-room.jpg',
];
