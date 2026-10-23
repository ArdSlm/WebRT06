# Global visual redesign — 23 Oktober 2026

## Perubahan per section

| Section | Sumber lokal di assets/img/galeri | Implementasi |
| --- | --- | --- |
| Beranda | karnaval-hut-ri-79-01.jpg | Hero tetap penuh, foto yang sama dengan WebP responsif dan srcset |
| Profil | hasilgotongroyong ngebentengjalan1.jpeg | Background jalan lingkungan, overlay Ijuk, satu bidang baca semi-transparan; daftar misi tanpa kotak berulang |
| Informasi | gotongroyongibuibu.jpeg | Background kebersamaan ibu-ibu, overlay Bilik terang, pengumuman pada bidang baca 92% |
| Kegiatan | gotongroyong ngebentengjalan1.jpeg | Background pekerjaan jalan, overlay hijau, dokumentasi asimetris dan bidang baca 91% |
| Galeri | karnaval-hut-ri-79-02.jpg | Foto hanya pada banner heading; grid editorial dan lightbox tetap jelas |
| Layanan | pos-kamling-rt06.png | Background fasilitas RT samar, layout kontak/form tetap dua area, lokasi tetap ringkas |
| Jadwal Ronda | ronda-malam-rt06.png | Tidak diubah: foto, overlay, kartu, ukuran, tipografi, data dan fungsi |
| Pendukung | Foto existing tetap | Sambutan, statistik, pengurus, prestasi dan footer diselaraskan melalui gradasi/aksen Awi & Ijuk |

Tidak ada foto stok, AI baru, atau dokumentasi kegiatan tambahan. Semua sumber yang dipakai sudah ada di repository; sumber asli tetap utuh. File `assets/css/style.css` dan `assets/js/script.js` tidak berubah. Gaya tambahan terisolasi di `assets/css/visual-sections.css` agar tidak mengubah Jadwal Ronda.

## Optimasi gambar

Enam sumber menghasilkan 12 turunan WebP dalam `assets/img/backgrounds/`, masing-masing versi lebar maksimum 800 dan 1600 piksel tanpa upscale. Kompresi WebP kualitas 80; rasio asli dipertahankan. Foto potret tetap potret, pemotongan tampilan dilakukan lewat background cover dan posisi per breakpoint, tanpa mengubah file asli.

- Total enam sumber asli: 4.53 MB.
- Total varian desktop: 1.67 MB (sekitar 63% lebih kecil).
- Total varian mobile: 0.74 MB (sekitar 84% lebih kecil).
- Ini ukuran enam aset visual terpilih, bukan ukuran seluruh halaman atau hasil pengukuran Core Web Vitals.
- Hero memakai srcset/sizes; background memakai media query. Foto dokumentasi non-hero yang sudah ada tetap lazy-loaded. Background CSS tidak diklaim lazy-loaded.

## Audit Drive

Skill Google Drive dipakai untuk listing folder induk dan lima subfolder secara rekursif tanpa menulis/mengubah sumber atau izin berbagi.

| Folder | Gambar terdaftar | Item lain |
| --- | --- | --- |
| Induk | 50 JPEG + 11 HEIF | 11 video, 5 folder |
| GOTONG ROYONG | 32 JPEG | 1 video |
| KEGIATAN LAINNYA | 12 JPEG | 2 video, 1 shortcut |
| PEMUDA PEMUDI | 0 | 0 |
| PENGAJIAN | 0 | 0 |
| AGUSTUS-AN | 0 | 0 |

Jumlah metadata gambar: 105. Setiap listing di bawah batas 100 item per folder; tidak ada token halaman berikutnya atau subfolder tambahan dalam hasil. Nol adalah hasil listing akses akun saat pemeriksaan, bukan klaim mengenai file di luar izin konektor.

Inventaris metadata lengkap disimpan sebagai artefak pemeriksaan lokal, tidak diterbitkan ke repo publik karena memuat dokumentasi pribadi. File identitas dikecualikan. Seluruh 105 gambar Drive belum diperiksa visual satu per satu; pilihan visual menggunakan aset lokal yang sudah ditinjau. Tidak ada impor Drive baru sehingga tidak menambah duplikat dokumentasi. Kemiripan ukuran/nama bukan bukti hash identik; pemetaan ID Drive untuk semua aset lokal belum diverifikasi. Tidak mengarang pemetaan sumber.

## Validasi

- Chrome headless/Playwright: 375, 430, 768, 1024, 1366 dan 1920 piksel tanpa horizontal overflow.
- Seluruh computed style terpilih (background, warna, font, padding, border, grid, lebar/tinggi) pada section Ronda beserta semua turunannya dibandingkan dengan snapshot sebelum perubahan: identik di enam ukuran.
- Background WebP terpasang pada Profil, Informasi, Kegiatan dan Layanan.
- Screenshot desktop/mobile ditinjau; kontras teks kecil pada header identitas wilayah diperbaiki.
- Galeri lengkap, lightbox, panah/Escape, filter kegiatan, menu HP, pembukaan panel admin, anchor kontak bersarang dalam layanan: lolos smoke test.
- Validasi field wajib dan URL/payload WhatsApp diuji dengan window.open yang dicegat; tidak mengirim pesan ke pengurus.
- JavaScript identik dengan versi sebelum perubahan: data, localStorage, form, navigasi, admin dan logika lain tidak diedit.
- `node --check assets/js/script.js` dan `git diff --check`: lulus.
- Tidak ada script build/lint/unit test proyek. Situs statis tidak membutuhkan kompilasi; tidak mengklaim production build atau audit WCAG/CWV otomatis.
- Skill UI/UX yang diminta tidak ditemukan pada katalog lokal. Tidak mengubah autentikasi, backend/API/database atau proyek lain.

Push hanya ke repository main sesuai instruksi. Tidak menjalankan perintah deploy production; integrasi hosting yang sudah ada mungkin otomatis men-deploy commit main.
