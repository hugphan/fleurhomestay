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

**Cách 3 — Thêm nhiều ảnh cho một phòng.**
1. Bỏ thêm file vào thư mục phòng, đánh số tiếp: `3.jpg`, `4.jpg`...
2. Mở `rooms-data.js`, tìm dòng của phòng đó và **thêm số ảnh** vào cuối. Ví dụ
   phòng Eclipse có 4 ảnh:
   ```js
   R('eclipse', 'Eclipse Room', 'quang-khanh', 450,
     ['Máy chiếu', 'Boardgame', 'WC khép kín', 'Bếp'],
     'Tông hồng pastel...', '2 giường', '4–5 khách', 4),
   //                                                  ↑ số ảnh (mặc định 2)
   ```

## Đổi giá, tên phòng, tiện ích, mô tả
Cũng trong `rooms-data.js` — mỗi phòng là một dòng
`R('slug', 'Tên', 'cơ sở', giá, [tiện ích], 'mô tả', 'số giường', 'số khách', số ảnh)`.
Sửa trực tiếp các giá trị này.

## Đổi số điện thoại / fanpage / map
Sửa khối `FLEUR_CONTACT` (hotline, fanpage, tiktok, web) và `map` trong
`FLEUR_FACILITIES` ở đầu file `rooms-data.js`. Số điện thoại tự cập nhật ở mọi
nút gọi, header, footer và trang chi tiết.
