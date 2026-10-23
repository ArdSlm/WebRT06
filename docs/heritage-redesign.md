# Redesign Warung Cikopi — 23 Oktober 2026

## Implementasi

- Tetap memakai HTML, CSS, JavaScript, Tailwind CDN dan localStorage yang sudah ada.
- Palet Awi & Ijuk, Newsreader/Manrope, hero fotografi dengan narasi Sunda, layout editorial yang lebih lapang.
- Enam navigasi utama; anchor lama dipertahankan. Kontak dipindahkan ke dalam Layanan Warga saat inisialisasi.
- Sambutan diikuti statistik, lalu profil. Informasi administratif dan visi/misi tetap tersedia.
- Galeri menampilkan empat pilihan awal dan tombol dokumentasi lengkap; lightbox, tombol panah, Escape, pengembalian fokus dan pembatasan Tab tersedia.
- Empty state pengumuman/galeri, focus indicator, reduced motion dan lazy loading foto non-hero.
- Tidak mengubah data, nomor WhatsApp, kunci penyimpanan maupun alur CRUD admin.

File kode: `index.html`, `assets/css/style.css`, `assets/js/script.js`.

## Audit Drive dan aset

Folder sumber: `1S8Wzb0sdULh2wmKI9MDtK_BWz1iTy_Mc`.
Listing folder langsung melengkapi pencarian awal bertipe gambar yang ternyata melewatkan beberapa hasil.

| Folder | Hasil listing |
| --- | --- |
| Induk | 50 JPEG, 11 HEIF, 9 MP4, 2 QuickTime, 5 folder |
| GOTONG ROYONG | 32 JPEG, 1 MP4 |
| KEGIATAN LAINNYA | 12 JPEG, 2 MP4, 1 shortcut |
| PEMUDA PEMUDI | 0 item terdaftar |
| PENGAJIAN | 0 item terdaftar |
| AGUSTUS-AN | 0 item terdaftar |

Setiap folder berada di bawah batas 100 item per listing dan tidak mengembalikan token halaman berikutnya. Tidak ditemukan subfolder tambahan. Shortcut video di Kegiatan Lainnya gagal dibaca dengan HTTP 403; isi targetnya belum diverifikasi. Folder dengan nol hasil juga diperiksa dengan pencarian; ini hasil akses konektor saat audit, bukan jaminan tidak ada file di luar izin akun.

Metadata foto/video berhasil dibaca, tetapi seluruh konten visual belum ditinjau. Dimensi, kualitas, subjek dan duplikasi biner semua file belum dapat dipastikan dari metadata. Dokumen identitas pribadi yang terdeteksi tidak diunduh atau dipublikasikan. Inventaris mentah yang mengandung metadata pribadi tidak dimasukkan ke repository publik.

Foto Drive yang diperiksa visual: `WhatsApp Image 2026-09-30 at 20.04.35 (2).jpeg`, ID `1GaAUri-7CDX3IWfsV1pSbD8EHgjRSoPN`, folder GOTONG ROYONG, JPEG 1200×1600. Tampak pagar bambu, tanaman dan tepi jalan; orientasi potret serta area terang berlebih kurang cocok sebagai hero. Tidak diimpor ke aset produksi. Tidak ada foto baru dari Drive yang diterbitkan. File asli dan izin Drive tidak diubah.

| Aset lokal yang dipakai | Penempatan |
| --- | --- |
| `assets/img/galeri/karnaval-hut-ri-79-01.jpg` | Hero, sampul kegiatan yang sudah ada, galeri |
| `assets/img/galeri/karnaval-hut-ri-79-02.jpg` | Profil lingkungan, galeri lengkap |
| Dokumentasi ronda, pos kamling, gotong royong yang sudah ada | Galeri editorial / dokumentasi lengkap |
| `assets/img/pak-rt.png` | Sambutan |
| `assets/img/denah-wilayah-rt06.png` | Peta wilayah |

Dua foto karnaval berasal dari aset lokal yang sebelumnya diberikan pengguna (1600×900); pemetaan ID Drive-nya belum terverifikasi. Tidak mengarang sumber Drive untuk aset lokal. Tidak membuat foto AI, kegiatan, atau sejarah tambahan. Tidak menambah duplikasi foto.

## Validasi

- Chrome headless melalui Playwright pada 375, 430, 768, 1024, 1366, 1920 px: tidak ada horizontal overflow.
- Screenshot hero mobile/desktop dan galeri desktop diperiksa langsung. Seluruh empat gambar preview galeri berhasil dimuat.
- Preview 4 foto, toggle semua dokumentasi, membuka lightbox, Escape, menu mobile buka/tutup, serta kontak bersarang dalam layanan: berhasil.
- Tidak ada runtime page error selama smoke test.
- Perbandingan data melalui Node VM terhadap HEAD sebelum redesign: RT_CONFIG, DATA_PENGURUS dan seluruh lima DATA_* sama persis.
- `node --check assets/js/script.js` dan `git diff --check`: lulus.
- Project tidak menyediakan script lint, unit test atau production build; tidak mengklaim menjalankannya. Tidak ada dependency aplikasi baru.

## Batas pemeriksaan

- CRUD admin menyeluruh, pengiriman WhatsApp nyata, Maps, audit WCAG otomatis dan pengukuran Core Web Vitals belum diuji end-to-end.
- Audit visual seluruh Drive, pencocokan duplikasi seluruh dokumentasi, konversi WebP/AVIF dan responsive srcset belum selesai. Situs memakai aset lokal yang sudah tersedia dengan ukuran tampilan responsif.
- Tailwind CDN, Google Fonts dan ikon eksternal tetap memerlukan koneksi internet.
- Tiga skill desain yang diminta tidak terpasang; audit dilakukan langsung. Skill Google Drive digunakan untuk penelusuran metadata, pemeriksaan file terpilih dan perlindungan sumber asli.
- Tidak menjalankan perintah deploy production; push main dapat memicu integrasi deployment otomatis yang telah dikonfigurasi pemilik repository.
