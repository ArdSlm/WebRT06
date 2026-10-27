# Pembaruan foto 27 Oktober 2026

Foto asli diambil melalui koneksi Google Drive, diperiksa secara visual, lalu dikonversi ke WebP. File Drive tidak diubah. Semua aset berikut berada di `assets/img/pilihan/`, dengan varian `-800.webp` dan `-1600.webp`.

| Area | Nama aset | ID sumber Google Drive | Resolusi asli |
| --- | --- | --- | --- |
| Beranda | kebersamaan-warga | 1TeQpsYo6Tq3-iC8VgFuZPIf6v0tIuO7X | 1600 × 900 |
| Profil & Sambutan | warga-pos-kamling | 1DvmkLUuMkCeyETC3ku7ocuqH7TBaO7e5 | 3968 × 2976 |
| Kegiatan | gotong-royong-jalan | 1-NKeJsZknqTDCarIeyDSbkfjAfb9zTUX | 1200 × 1600 |
| Galeri unggulan | dokumentasi-karnaval | 1SAnD1UodBX_X-xcyjzmUVizg9vvt-RGF | 1600 × 900 |
| Layanan | interior-bambu | 1OjZClG3SvMK-hQKKp74XqbEDRWYo-q5Y | 1600 × 1200 |

Varian besar dibatasi lebar 1600 piksel tanpa upscale; foto Kegiatan tetap 1200 × 1600. Galeri ditambahkan lewat migrasi satu kali yang mempertahankan dokumentasi tersimpan dan memungkinkan penghapusan berikutnya lewat admin. Lightbox tetap memakai gambar besar.

## Validasi dan batasan

- Pemeriksaan browser Chrome pada lebar 375 dan 1366 piksel: tidak ada overflow horizontal atau error JavaScript; foto unggulan dan lightbox tampil; reload tidak menggandakan galeri.
- Screenshot area yang diubah telah diperiksa pada kedua ukuran. Foto Ketua RT, Ronda, Prestasi, angka statistik, narasi Sunda, layout, overlay dan kode animasi tidak diubah.
- `node --check assets/js/script.js` dan `git diff --check` lulus. Proyek statis tidak memiliki perintah build.
- Foto hero kelompok tetap dapat beririsan dengan teks pada layout lama; seluruh subjek tidak dapat dijamin bebas teks/crop tanpa penyesuaian layout yang di luar cakupan instruksi.
- Statistik BELUM diganti: lampiran yang tersedia berupa teks tanpa gambar referensi. Folder Drive utama dan subfolder telah ditelusuri, tetapi kecocokan visual pilihan pengguna belum dapat ditentukan. Pencarian gambar bernama statistik tidak menghasilkan file. Tidak dipilih foto pengganti secara sembarang.
- Belum commit atau push pada pembaruan ini.
