# 📷 Cách cập nhật ảnh & thông tin phòng (dễ nhất)

Tất cả thông tin phòng (tên, giá, tiện ích, mô tả) nằm gọn trong **một file**:
`rooms-data.js`. Còn **ảnh** được xếp theo **cơ sở → phòng**, tên file đánh số
lần lượt, nên thay rất dễ.

## Cấu trúc thư mục ảnh

```
assets/
├── phong/                       ← ảnh từng phòng
│   ├── quang-khanh/             (Cơ sở Quảng Khánh)
│   │   ├── eclipse/   1.jpg  2.jpg
│   │   ├── new-moon/  1.jpg  2.jpg
│   │   ├── twilight/  1.jpg  2.jpg
│   │   └── room-201/  1.jpg  2.jpg
│   └── trich-sai/               (Cơ sở Trích Sài)
│       ├── wednesday/ 1.jpg  2.jpg
│       ├── sunday/    1.jpg  2.jpg
│       └── friday/    1.jpg  2.jpg
├── chung/                       ← ảnh không gian chung (hero + gallery)
│   ├── garden-bath.jpg  marble-bath.jpg  spa-bath.jpg  wood-room.jpg
└── logos/                       ← logo thương hiệu
```

Trong mỗi thư mục phòng, **`1.jpg` là ảnh chính** (hiện ở thẻ phòng + ảnh lớn
trang chi tiết), các số sau là ảnh phụ trong gallery.

## Thay / thêm ảnh — 3 cách

**Cách 1 — Nhờ trợ lý (dễ nhất).** Gửi ảnh mới kèm tên phòng ("đây là ảnh phòng
Eclipse") → ảnh sẽ được đặt vào đúng thư mục.

**Cách 2 — Tự thay file cùng tên.** Mở thư mục phòng cần đổi (ví dụ
`assets/phong/quang-khanh/eclipse/`), ghi đè `1.jpg` / `2.jpg` bằng ảnh mới
**giữ nguyên tên**. Trang tự dùng ảnh mới, không phải sửa gì khác.
- Ảnh ngang (khổ ~4:3 hoặc 16:10) sẽ đẹp nhất.

**Cách 3 — Thêm / bớt ảnh cho một phòng (TỰ ĐỘNG, không sửa code).**
Chỉ cần bỏ thêm file vào thư mục phòng, **đánh số lần lượt** `1.jpg`, `2.jpg`,
`3.jpg`, … (KHÔNG bỏ số ở giữa). Trang chi tiết tự dò và hiển thị đủ — không
phải mở `rooms-data.js`.
- Phòng có **nhiều hơn 4 ảnh**: dải ảnh nhỏ tự hiện **mũi tên ◀ ▶** để cuộn xem.
- Phòng có **ít ảnh**: chỉ hiện đúng số ảnh đang có (không độn ảnh mẫu).
- ⚠️ Phải đánh số liên tục. Nếu thiếu `2.jpg` thì trang dừng ở `1.jpg` và bỏ qua
  các ảnh sau, dù `3.jpg` vẫn còn.

## Đổi giá, tên phòng, tiện ích, mô tả
Cũng trong `rooms-data.js` — mỗi phòng là một dòng
`R('slug', 'Tên', 'cơ sở', giá, [tiện ích], 'mô tả', 'số giường', 'số khách')`.
Sửa trực tiếp các giá trị này. (Số ảnh KHÔNG khai báo ở đây — trang tự dò.)

## Đổi số điện thoại / fanpage / map
Sửa khối `FLEUR_CONTACT` (hotline, fanpage, tiktok, web) và `map` trong
`FLEUR_FACILITIES` ở đầu file `rooms-data.js`. Số điện thoại tự cập nhật ở mọi
nút gọi, header, footer và trang chi tiết.
