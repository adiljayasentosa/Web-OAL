# Organization Admin Lite — Static Website

Static HTML/CSS/JS landing page for manual APK sales.

## Struktur
- `index.html` — landing page
- `beli.html` — alur pembelian manual via WhatsApp
- `style.css` — visual/responsive layout
- `script.js` — konfigurasi WhatsApp + pesan pembelian
- `assets/logo/` — logo aplikasi
- `assets/screenshots/` — screenshot aplikasi nyata

## Sebelum dipublish
1. Buka `script.js`.
2. Ganti `628XXXXXXXXXX` pada `whatsappNumber` dengan nomor WhatsApp tujuan, tanpa `+`, spasi, atau tanda baca.
3. Pastikan link WhatsApp mengarah ke nomor yang benar.
4. Upload seluruh folder ke hosting static seperti Vercel/Netlify/GitHub Pages.

## Flow penjualan
Landing Page → Cara Beli → WhatsApp → pembayaran manual → konfirmasi → admin mengirim link APK.

Tidak ada Midtrans, Supabase, API, webhook, order database, atau login pada versi ini.


### Galeri screenshot
Bagian Preview Aplikasi menggunakan screenshot dengan rasio asli 674×1536, bukan `object-fit: cover`, sehingga isi layar tidak terpotong atau diregangkan. Galeri bergerak otomatis secara horizontal dan berhenti saat kursor diarahkan ke area galeri. Di mobile, sentuhan juga menghentikan animasi sementara.
