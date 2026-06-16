# Fleur Homestay — Website

Trang giới thiệu & đặt phòng cho Fleur Homestay, dựng từ bản thiết kế trong
Claude Design. Đây là **static site thuần** (HTML + CSS + một ít JavaScript) —
không cần React, không cần build, mở bằng trình duyệt hoặc up thẳng lên hosting
là chạy.

## Các file
- **`index.html`** — trang chủ: header dính (logo + nút gọi), hero ảnh full-bleed,
  hai mục cơ sở (**Quảng Khánh** 4 phòng · **Trích Sài** 3 phòng) dạng thẻ phòng,
  mục tiện ích, khối đặt phòng (hotline / fanpage / TikTok) và footer.
- **`room.html?room=<slug>`** — trang chi tiết phòng: gallery bấm xem ảnh, mô tả,
  số giường/khách, tiện ích, thẻ đặt phòng cố định bên phải và "Phòng khác cùng cơ sở".
  Slug: `eclipse, new-moon, twilight, room-201, wednesday, sunday, friday`.
- **`rooms-data.js`** — **nguồn dữ liệu duy nhất**: liên hệ, cơ sở, danh sách phòng.
  Sửa ở đây, cả hai trang tự cập nhật.
- **`styles.css`** — toàn bộ token thương hiệu (màu, font, spacing) + style component,
  gộp trong một file.
- **`assets/`** — logo (`logos/`), ảnh từng phòng (`phong/<cơ-sở>/<phòng>/1.jpg, 2.jpg…`) và ảnh không gian chung (`chung/`).
- **`CAP-NHAT-ANH.md`** — hướng dẫn tiếng Việt cách thay ảnh / sửa giá.

## Chạy thử trên máy
Mở `index.html` bằng trình duyệt là được. Nếu muốn giống môi trường web thật
(tránh chặn file://), chạy một server tĩnh đơn giản trong thư mục này:

```bash
python3 -m http.server 8000
# rồi mở http://localhost:8000
```

## Phụ thuộc bên ngoài
- **Google Fonts** (Montserrat, Be Vietnam Pro, Allura) — nạp qua `styles.css`.
  Đây là bản thay thế gần nhất cho bộ font thương hiệu; có file font gốc thì thay
  bằng `@font-face`.
- **Lucide Icons** — nạp qua CDN cho các icon (điện thoại, map, tiện ích…).

Cả hai đều nạp qua CDN; muốn chạy hoàn toàn offline thì tải về và trỏ đường dẫn nội bộ.

## Lưu ý
- Đặt phòng hiện là front-end: nút gọi dùng `tel:`, fanpage & TikTok mở link thật.
  Cần đặt online thì gắn thêm Messenger deep-link hoặc form đặt phòng.
- Mô tả, số giường/khách, blurb từng cơ sở là bản nháp theo ảnh — bạn rà lại cho đúng.
- Ảnh phụ (`-2`) của vài phòng cắt từ ảnh ghép nên có thể hơi lệch góc; thay ảnh
  gốc rời khi có để gallery đẹp hơn.
