// ==========================================================================
// KONFIGURASI DATA WEBSITE RESMI RT 006 WARUNG CIKOPI
// Silakan ubah data di bawah ini untuk memperbarui isi website secara dinamis.
// Semua perubahan akan otomatis diterapkan ke tampilan HTML.
// ==========================================================================

const RT_CONFIG = {
  namaRT: "RT 006 Warung Cikopi",
  alamatRT: "Kp. Warung Cikopi, Ds. Salebu, Kec. Mangunreja, Kab. Tasikmalaya",
  namaKetuaRT: "Kusdiana",
  
  // Statistik RT (Akan terupdate di Beranda & Profil)
  statistik: {
    jumlahKK: 105,
    jumlahWarga: 315,
    jumlahRumah: 100,
    posKamling: 1,
    statusProgram: "Aktif",
    programUtama: "Pengadaan KWh Listrik untuk Pos Kamling"
  },
  
  // Kontak Pengurus untuk WhatsApp dan Tampilan
  kontak: {
    noWaKetua: "6282218222557", // Ganti dengan nomor WA Ketua RT (awali dengan kode negara 62, tanpa tanda + atau spasi)
    namaSekretaris: "Iis Ahyantini",
    noWaSekretaris: "6285322223333", // Nomor WA Sekretaris
    namaBendahara: "Kodir",
    noWaBendahara: "6289655556666" // Nomor WA Bendahara
  }
};

// 1. DATA PENGURUS RT 006 (Sesuai Struktur Organigram)
// Note: Nama-nama di bawah ini dihubungkan langsung ke elemen organigram.
const DATA_PENGURUS = {
  penasihat: {
    roleName: "Penasehat",
    nama: ["A.J. Hasanudin", "A.J. Aep", "Ust. Dede", "Bpk. Udi"],
    icon: "fas fa-user-tie",
    tugas: "memberikan arahan, saran, dan pertimbangan kepada pengurus RT untuk kebaikan lingkungan"
  },
  ketua: {
    roleName: "Ketua RT",
    nama: "Kusdiana",
    icon: "fas fa-user-shield",
    tugas: "memimpin organisasi, mengoordinasikan kegiatan, menyalurkan aspirasi warga, dan melayani urusan administrasi"
  },
  wakilKetua: {
    roleName: "Wakil Ketua RT",
    nama: "Belum tersedia",
    icon: "fas fa-user-friends",
    tugas: "membantu tugas Ketua RT dan mewakili jika berhalangan"
  },
  sekretaris: {
    roleName: "Sekretaris",
    nama: "Ibu Iis",
    icon: "fas fa-file-signature",
    tugas: "mengelola persuratan, notulen rapat, pencatatan data kependudukan warga, dan arsip administrasi"
  },
  bendahara: {
    roleName: "Bendahara",
    nama: "Bpk. Odir",
    icon: "fas fa-wallet",
    tugas: "mengelola kas, keuangan pembangunan, dan laporan keuangan warga secara berkala"
  },
  humasInternal: {
    roleName: "Humas Internal",
    nama: ["Kang Ateng", "Bpk. Tete"],
    icon: "fas fa-bullhorn",
    tugas: "menghubungkan warga dan pengurus serta menyebarkan informasi lingkungan internal"
  },
  humasEksternal: {
    roleName: "Humas Eksternal",
    nama: ["Bpk. Ahim", "Bpk. Mumu"],
    icon: "fas fa-comments",
    tugas: "membantu koordinasi hubungan masyarakat dengan pihak luar RT"
  },
  keagamaan: {
    roleName: "Seksi Keagamaan",
    nama: ["Ust. Ana", "Ust. Iwan", "Bpk. Amar"],
    icon: "fas fa-mosque",
    tugas: "mengoordinasikan kegiatan ibadah, hari besar keagamaan, serta memelihara kerukunan antarwarga"
  },
  keamanan: {
    roleName: "Seksi Keamanan",
    nama: ["Bpk. Eded", "Bpk. Amang S.", "Bpk. Iday"],
    icon: "fas fa-shield-alt",
    tugas: "mengoordinasikan ronda malam bergilir dan menjaga ketertiban lingkungan"
  },
  pelayanan: {
    roleName: "Seksi Pelayanan",
    nama: ["Ibu Iner", "Bpk. Hasan"],
    icon: "fas fa-graduation-cap",
    tugas: "mengoordinasikan pelayanan warga dan administrasi sosial lingkungan"
  },
  wirausaha: {
    roleName: "Seksi Wirausaha",
    nama: ["Bpk. Vigi", "Bpk. Asep"],
    icon: "fas fa-store",
    tugas: "mengoordinasikan pengembangan ekonomi dan wirausaha warga"
  },
  gotongRoyong: {
    roleName: "Seksi Gotong Royong",
    nama: ["Bpk. Itang", "Bpk. Opik", "Saepuloh"],
    icon: "fas fa-hands-helping",
    tugas: "mengoordinasikan kerja bakti, kebersihan, dan gotong royong warga"
  },
  kesejahteraan: {
    roleName: "Seksi Kesejahteraan",
    nama: ["Ibu Lilis", "Ibu Mimin"],
    icon: "fas fa-hand-holding-heart",
    tugas: "mengoordinasikan kepedulian sosial dan program kesejahteraan warga"
  },
  pemuda: {
    roleName: "Seksi Pemuda",
    nama: ["Aben", "Ripandi"],
    icon: "fas fa-running",
    tugas: "mewadahi kegiatan olahraga, kreativitas pemuda, dan Karang Taruna"
  },
  pkk: {
    roleName: "Seksi PKK",
    nama: ["Yuni", "Nursani", "Dede"],
    icon: "fas fa-female",
    tugas: "mengoordinasikan pembinaan kesejahteraan keluarga dan program PKK"
  }
};

// 2. DATA PENGUMUMAN RT 006
// Anda bisa menambah, menghapus, atau mengubah item di dalam array ini.
const DATA_PENGUMUMAN = JSON.parse(localStorage.getItem("DATA_PENGUMUMAN")) || [
  {
    id: 1,
    judul: "Kerja Bakti Lingkungan",
    tanggal: "Minggu, 14 Juli 2026",
    isi: "Warga RT 006 diimbau mengikuti kerja bakti mulai pukul 07.00 WIB dengan titik kumpul di Pos Kamling untuk membersihkan saluran air dan jalan lingkungan.",
    kategori: "Kebersihan",
    badgeColor: "bg-emerald-100 text-emerald-800"
  },
  {
    id: 2,
    judul: "Ronda Malam",
    tanggal: "Setiap malam",
    isi: "Kegiatan ronda malam dilakukan secara bergilir oleh warga sesuai dengan jadwal piket masing-masing guna menjaga keamanan lingkungan.",
    kategori: "Keamanan",
    badgeColor: "bg-blue-100 text-blue-800"
  },
  {
    id: 3,
    judul: "Rapat Warga",
    tanggal: "Menyesuaikan",
    isi: "Rapat warga bulanan akan dilaksanakan untuk membahas perkembangan program kerja bakti dan evaluasi keamanan lingkungan.",
    kategori: "Rapat",
    badgeColor: "bg-purple-100 text-purple-800"
  },
  {
    id: 4,
    judul: "Program KWh Pos Kamling",
    tanggal: "2026",
    isi: "RT 006 sedang mengupayakan pengadaan sambungan listrik KWh untuk Pos Kamling agar kegiatan ronda malam lebih nyaman dan efektif bagi warga.",
    kategori: "Pembangunan",
    badgeColor: "bg-amber-100 text-amber-800"
  }
];

// 3. DATA KEGIATAN & PROGRAM RT 006
// Kategori yang tersedia: "rutin" (Kegiatan Rutin), "program" (Program Lingkungan), "koordinasi" (Kegiatan Koordinasi)
const DATA_KEGIATAN = JSON.parse(localStorage.getItem("DATA_KEGIATAN")) || [
  {
    judul: "Ronda Malam",
    kategori: "program",
    kategoriLabel: "Program Lingkungan",
    status: "Aktif",
    statusColor: "bg-emerald-500",
    deskripsi: "Kegiatan rutin warga untuk menjaga keamanan lingkungan dari berbagai gangguan pada malam hari."
  },
  {
    judul: "Kerja Bakti",
    kategori: "program",
    kategoriLabel: "Program Lingkungan",
    status: "Rutin",
    statusColor: "bg-emerald-500",
    deskripsi: "Gotong royong membersihkan lingkungan RT agar tetap bersih, indah, sehat, dan bebas banjir."
  },
  {
    judul: "Rapat Warga",
    kategori: "koordinasi",
    kategoriLabel: "Kegiatan Koordinasi",
    status: "Musyawarah",
    statusColor: "bg-blue-500",
    deskripsi: "Pertemuan musyawarah berkala antara warga dan jajaran pengurus untuk menampung masukan dan evaluasi program."
  }
];

// 4. DATA GALERI FOTO RT 006
// Silakan ganti nilai 'image' dengan path gambar lokal Anda apabila sudah ada, contoh: "assets/img/foto1.jpg"
// Saat ini menggunakan Unsplash premium mockups untuk visual terbaik pada demo pertama.
const DATA_GALERI = JSON.parse(localStorage.getItem("DATA_GALERI")) || [
  {
    judul: "Logo RT 006",
    image: "assets/img/logo-rt06.jpg",
    deskripsi: "Logo resmi RT 006 Warung Cikopi, melambangkan keharmonisan warga."
  },
  {
    judul: "Foto Pos Kamling",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&auto=format&fit=crop&q=80",
    deskripsi: "Pos ronda utama RT 006 sebagai pusat keamanan warga."
  },
  {
    judul: "Foto Kerja Bakti",
    image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&auto=format&fit=crop&q=80",
    deskripsi: "Kebersamaan warga saat melakukan gotong royong membersihkan saluran air."
  },
  {
    judul: "Foto Ronda Malam",
    image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=800&auto=format&fit=crop&q=80",
    deskripsi: "Petugas ronda bersiap melakukan patroli keliling pemukiman."
  },
  {
    judul: "Foto Rapat Warga",
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&auto=format&fit=crop&q=80",
    deskripsi: "Musyawarah pengurus dan tokoh masyarakat membahas program lingkungan."
  },
  {
    judul: "Foto Lingkungan RT",
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&auto=format&fit=crop&q=80",
    deskripsi: "Kondisi jalan lingkungan RT 006 Warung Cikopi yang asri."
  }
];

// ==========================================================================
// 5. DATA JADWAL RONDA RT 006
// ==========================================================================
const DATA_RONDA = JSON.parse(localStorage.getItem("DATA_RONDA")) || [
  {
    hari: "Malam Senin",
    lokasi: "Pos Kamling RT 006",
    petugas: ["ADE/UJU", "MAMAT R.", "ATANG", "SAMSI", "SUNDANA", "OPIK", "PEGI", "NONO S.", "APUD", "NUNU", "DUDI", "RIDWAN"]
  },
  {
    hari: "Malam Selasa",
    lokasi: "Pos Kamling RT 006",
    petugas: ["HADIMI", "OTONG", "YAYAT", "SARIPIN", "SOLIH", "TATA", "YUSEP", "YAMIN", "JAJANG R.", "SUGANDA", "RIPA", "ICANG"]
  },
  {
    hari: "Malam Rabu",
    lokasi: "Pos Kamling RT 006",
    petugas: ["EDED", "SUNARYO", "ACENG", "ADE N.", "DEDE A.", "DEDI S.", "KODIR", "TUTUS", "MUMU A.", "LATIP", "ADE S.", "UDI L."]
  },
  {
    hari: "Malam Kamis",
    lokasi: "Pos Kamling RT 006",
    petugas: ["HAMID", "BUSTANDI", "ADE K.", "AMIM", "ITANG", "JIDIN", "IDAN", "ASEP U.", "SUTISNA", "ADI", "ENCENG", "JAJANG FM"]
  },
  {
    hari: "Malam Jumat",
    lokasi: "Pos Kamling RT 006",
    petugas: ["TETE", "ASEP BQ", "SUBANA", "UDI A.", "IDAY", "NANANG", "MANSUR", "AJIB", "IMAT", "UTANG", "RIPAN", "SALMAN"]
  },
  {
    hari: "Malam Sabtu",
    lokasi: "Pos Kamling RT 006",
    petugas: ["MUMU ASIR", "KOMAR", "HABIB", "UDIN H.", "SAEPULOH", "ASEP DN.", "RIAN", "NURYADIN", "HASAN", "IWAN", "DIAN", "KARIM"]
  },
  {
    hari: "Malam Minggu",
    lokasi: "Pos Kamling RT 006",
    petugas: ["ATENG", "HAYAT", "AMAR", "DANI", "AJAT", "TO'AT", "DEDE H.", "SODIK", "OLIN", "UJU T.", "YANA", "ECEP"]
  }
];

// ==========================================================================
// 6. DATA PRESTASI & PENGHARGAAN
// ==========================================================================
const DATA_PRESTASI = JSON.parse(localStorage.getItem("DATA_PRESTASI")) || [
  {
    tahun: "2025",
    judul: "Lingkungan Terbersih RW",
    penyelenggara: "Kelurahan Salebu",
    deskripsi: "RT 006 meraih penghargaan sebagai lingkungan terbersih tingkat RW.",
    icon: "fas fa-trophy",
    color: "bg-amber-100 text-amber-700"
  },
  {
    tahun: "2024",
    judul: "Keamanan Lingkungan Terbaik",
    penyelenggara: "Kecamatan Mangunreja",
    deskripsi: "Penghargaan atas konsistensi ronda malam dan zero crime rate.",
    icon: "fas fa-medal",
    color: "bg-emerald-100 text-emerald-700"
  }
];

// ==========================================================================
// INISIALISASI & RENDER DATA KE HALAMAN
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
  renderInfoUmum();
  renderOrganigram();
  renderPengumuman();
  renderKegiatan("all");
  renderJadwalRonda();
  renderGaleri();
  renderPrestasi();
  setupEventListeners();
  setupScrollAnimation();
  setupAdminPanel();
});

// A. RENDER INFO UMUM & STATISTIK
function renderInfoUmum() {
  // Update teks nama RT dan Alamat di beberapa section
  document.querySelectorAll(".rt-title").forEach(el => el.textContent = RT_CONFIG.namaRT);
  document.querySelectorAll(".rt-address").forEach(el => el.textContent = RT_CONFIG.alamatRT);
  document.querySelectorAll(".rt-ketua-name").forEach(el => el.textContent = RT_CONFIG.namaKetuaRT);
  
  // Stats Beranda
  const statKkHero = document.getElementById("stat-kk-hero");
  if (statKkHero) statKkHero.textContent = RT_CONFIG.statistik.jumlahKK + " KK";
  const statWargaHero = document.getElementById("stat-warga-hero");
  if (statWargaHero) statWargaHero.textContent = RT_CONFIG.statistik.jumlahWarga + " Jiwa";
  const statPosHero = document.getElementById("stat-pos-hero");
  if (statPosHero) statPosHero.textContent = RT_CONFIG.statistik.posKamling + " Unit";
  const statStatusHero = document.getElementById("stat-status-hero");
  if (statStatusHero) statStatusHero.textContent = RT_CONFIG.statistik.statusProgram;
  
  // New Stats in Hero Panel
  const heroStatWarga = document.getElementById("hero-stat-warga");
  if (heroStatWarga) heroStatWarga.textContent = RT_CONFIG.statistik.jumlahWarga + " Jiwa";
  const heroStatKk = document.getElementById("hero-stat-kk");
  if (heroStatKk) heroStatKk.textContent = RT_CONFIG.statistik.jumlahKK + " KK";
  const heroStatStatus = document.getElementById("hero-stat-status");
  if (heroStatStatus) heroStatStatus.textContent = RT_CONFIG.statistik.statusProgram;

  // Stats Profil
  const statKkProfil = document.getElementById("stat-kk-profil");
  if (statKkProfil) statKkProfil.textContent = RT_CONFIG.statistik.jumlahKK + " KK";
  const statWargaProfil = document.getElementById("stat-warga-profil");
  if (statWargaProfil) statWargaProfil.textContent = RT_CONFIG.statistik.jumlahWarga + " Jiwa";
  const statRumahProfil = document.getElementById("stat-rumah-profil");
  if (statRumahProfil) statRumahProfil.textContent = RT_CONFIG.statistik.jumlahRumah + " Rumah";
  const statPosProfil = document.getElementById("stat-pos-profil");
  if (statPosProfil) statPosProfil.textContent = RT_CONFIG.statistik.posKamling + " Unit";
  
  // Kontak di footer/kontak
  const kontakAlamat = document.getElementById("kontak-alamat");
  if (kontakAlamat) kontakAlamat.textContent = RT_CONFIG.alamatRT;
  const kontakKetua = document.getElementById("kontak-ketua");
  if (kontakKetua) kontakKetua.textContent = RT_CONFIG.namaKetuaRT;
  const kontakSekretaris = document.getElementById("kontak-sekretaris");
  if (kontakSekretaris) kontakSekretaris.textContent = RT_CONFIG.kontak.namaSekretaris;
  const kontakBendahara = document.getElementById("kontak-bendahara");
  if (kontakBendahara) kontakBendahara.textContent = RT_CONFIG.kontak.namaBendahara;
  
  // Link WhatsApp langsung di tombol-tombol
  document.querySelectorAll('a[href*="wa.me/"]').forEach(link => {
    link.href = `https://wa.me/${RT_CONFIG.kontak.noWaKetua}`;
  });
}

// B. RENDER ORGANIGRAM (PENGURUS)
function renderOrganigram() {
  const container = document.getElementById("organigram-root");
  if (!container) return;

  // Helper function to format names
  const formatNames = (names) => {
    if (Array.isArray(names)) {
      return `
        <ul class="text-xs font-semibold text-slate-700 mt-2 flex flex-col gap-1 items-center">
          ${names.map(name => {
            if (name === "Belum terbaca" || name === "Belum tersedia") {
              return `<li class="text-slate-400 italic font-normal">${name}</li>`;
            }
            return `<li class="flex items-center gap-1.5"><span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>${name}</li>`;
          }).join('')}
        </ul>
      `;
    } else {
      if (names === "Belum tersedia" || names === "Belum terbaca") {
        return `<span class="text-slate-400 italic font-normal text-xs block mt-2">${names}</span>`;
      }
      return `<span class="text-slate-700 font-semibold text-sm block mt-2">${names}</span>`;
    }
  };

  // Helper function to create card HTML
  const createCard = (key, data, isMain = false) => {
    const cardClass = isMain 
      ? "bg-gradient-to-br from-emerald-700 to-emerald-900 text-white shadow-xl ring-4 ring-emerald-100/50" 
      : "bg-white border-2 border-emerald-600/70 shadow-md";
    const iconClass = isMain
      ? "bg-white text-emerald-800"
      : "bg-emerald-50 text-emerald-800";
    const titleClass = isMain
      ? "text-amber-300 font-bold uppercase tracking-widest text-xs mt-1"
      : "text-emerald-700 font-bold uppercase tracking-wider text-xxs mt-0.5";

    let namesHtml = "";
    if (isMain) {
      if (Array.isArray(data.nama)) {
        namesHtml = `
          <ul class="text-xs font-semibold text-emerald-100 mt-2 flex flex-col gap-1 items-center">
            ${data.nama.map(name => `<li class="flex items-center gap-1.5">${name}</li>`).join('')}
          </ul>
        `;
      } else {
        if (data.nama === "Belum tersedia" || data.nama === "Belum terbaca") {
          namesHtml = `<span class="text-emerald-300 italic font-normal text-xs block mt-2">${data.nama}</span>`;
        } else {
          namesHtml = `<span class="text-white font-extrabold text-base block mt-2">${data.nama}</span>`;
        }
      }
    } else {
      namesHtml = formatNames(data.nama);
    }

    return `
      <div class="organigram-card ${cardClass} rounded-2xl p-5 text-center hover-card-trigger flex flex-col items-center justify-between h-full w-full">
        <div class="flex flex-col items-center w-full">
          <div class="w-10 h-10 ${iconClass} rounded-full flex items-center justify-center mb-2 text-base font-bold">
            <i class="${data.icon}"></i>
          </div>
          <p class="${titleClass}">${data.roleName}</p>
          ${namesHtml}
        </div>
      </div>
    `;
  };

  let html = `
    <div class="flex flex-col items-center gap-6 w-full">
      <!-- LEVEL 1: PENASIHAT -->
      <div class="w-full max-w-sm">
        ${createCard('penasihat', DATA_PENGURUS.penasihat)}
      </div>

      <!-- Arrow down to Ketua -->
      <div class="w-0.5 h-6 bg-emerald-400"></div>

      <!-- LEVEL 2: KETUA & WAKIL KETUA -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl">
        ${createCard('ketua', DATA_PENGURUS.ketua, true)}
        ${createCard('wakilKetua', DATA_PENGURUS.wakilKetua)}
      </div>

      <!-- Arrow down to Sekretaris & Bendahara -->
      <div class="w-0.5 h-6 bg-emerald-400"></div>

      <!-- LEVEL 3: SEKRETARIS & BENDAHARA -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl">
        ${createCard('sekretaris', DATA_PENGURUS.sekretaris)}
        ${createCard('bendahara', DATA_PENGURUS.bendahara)}
      </div>

      <!-- Arrow down to Humas -->
      <div class="w-0.5 h-6 bg-emerald-400"></div>

      <!-- LEVEL 4: HUMAS & HUMAS TAMBAHAN -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl">
        ${createCard('humasInternal', DATA_PENGURUS.humasInternal)}
        ${createCard('humasEksternal', DATA_PENGURUS.humasEksternal)}
      </div>

      <!-- Divider / Section Title for Seksi-Seksi -->
      <div class="w-full text-center mt-6">
        <div class="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 px-4 py-2 rounded-full text-xs font-bold text-emerald-800">
          <i class="fas fa-users-cog"></i> SEKSI / DIVISI KERJA
        </div>
      </div>

      <!-- LEVEL 5: SEKSI-SEKSI GRID -->
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full mt-4">
        <div>${createCard('keagamaan', DATA_PENGURUS.keagamaan)}</div>
        <div>${createCard('keamanan', DATA_PENGURUS.keamanan)}</div>
        <div>${createCard('pelayanan', DATA_PENGURUS.pelayanan)}</div>
        <div>${createCard('wirausaha', DATA_PENGURUS.wirausaha)}</div>
        <div>${createCard('gotongRoyong', DATA_PENGURUS.gotongRoyong)}</div>
        <div>${createCard('kesejahteraan', DATA_PENGURUS.kesejahteraan)}</div>
        <div>${createCard('pemuda', DATA_PENGURUS.pemuda)}</div>
        <div>${createCard('pkk', DATA_PENGURUS.pkk)}</div>
      </div>
    </div>
  `;

  container.innerHTML = html;
}

// C. RENDER PENGUMUMAN
function renderPengumuman() {
  const container = document.getElementById("pengumuman-grid");
  if (!container) return;
  
  container.innerHTML = "";
  
  DATA_PENGUMUMAN.forEach(item => {
    const cardHTML = `
      <div class="bg-white rounded-2xl shadow-md border border-slate-100 p-6 hover-card-trigger reveal">
        <div class="flex items-center justify-between mb-4">
          <span class="px-3 py-1 rounded-full text-xs font-semibold ${item.badgeColor}">
            ${item.kategori}
          </span>
          <span class="text-xs text-slate-400 font-medium">
            <i class="far fa-calendar-alt mr-1"></i> ${item.tanggal}
          </span>
        </div>
        <h4 class="text-lg font-bold text-slate-800 mb-2">${item.judul}</h4>
        <p class="text-slate-600 text-sm leading-relaxed">${item.isi}</p>
      </div>
    `;
    container.innerHTML += cardHTML;
  });
}

// D. RENDER KEGIATAN & PROGRAM (Dengan Filter)
function renderKegiatan(filterCategory = "all") {
  const container = document.getElementById("kegiatan-grid");
  if (!container) return;
  
  container.innerHTML = "";
  
  const filteredData = filterCategory === "all" 
    ? DATA_KEGIATAN 
    : DATA_KEGIATAN.filter(item => item.kategori === filterCategory);
    
  if (filteredData.length === 0) {
    container.innerHTML = `
      <div class="col-span-full text-center py-8 text-slate-400">
        Tidak ada kegiatan dengan kategori ini.
      </div>
    `;
    return;
  }
  
  filteredData.forEach(item => {
    const cardHTML = `
      <div class="bg-white rounded-2xl shadow-md border border-slate-100 p-6 hover-card-trigger flex flex-col justify-between reveal">
        <div>
          <div class="flex items-center justify-between mb-4">
            <span class="text-xs font-semibold tracking-wider text-primary-700 uppercase">
              ${item.kategoriLabel}
            </span>
            <span class="inline-flex items-center text-xs font-medium text-slate-700 bg-slate-100 px-2.5 py-0.5 rounded-full">
              <span class="w-2 h-2 mr-1.5 rounded-full ${item.statusColor}"></span>
              ${item.status}
            </span>
          </div>
          <h4 class="text-xl font-bold text-slate-800 mb-2">${item.judul}</h4>
          <p class="text-slate-600 text-sm leading-relaxed mb-4">${item.deskripsi}</p>
        </div>
        <div class="pt-4 border-t border-slate-50 flex items-center justify-between">
          <span class="text-xs text-primary-600 font-semibold">RT 006 Warung Cikopi</span>
          <i class="fas fa-check-circle text-primary-600 text-lg"></i>
        </div>
      </div>
    `;
    container.innerHTML += cardHTML;
  });
}

// E. RENDER GALERI
function renderGaleri() {
  const container = document.getElementById("galeri-grid");
  if (!container) return;
  
  container.innerHTML = "";
  
  DATA_GALERI.forEach((item, index) => {
    const cardHTML = `
      <div class="group relative overflow-hidden rounded-2xl shadow-md cursor-pointer reveal" onclick="openLightbox(${index})">
        <img src="${item.image}" alt="${item.judul}" class="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500" onerror="this.src='https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&auto=format&fit=crop&q=80';">
        <div class="absolute inset-0 bg-gradient-to-t from-primary-dark via-transparent to-transparent opacity-90 transition-opacity duration-300"></div>
        <div class="absolute bottom-0 left-0 right-0 p-5 text-white">
          <h4 class="font-bold text-lg leading-tight mb-1 text-white">${item.judul}</h4>
          <p class="text-xs text-emerald-200 line-clamp-2">${item.deskripsi}</p>
        </div>
        <div class="absolute top-4 right-4 bg-white/20 backdrop-blur-md rounded-full p-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <i class="fas fa-search-plus"></i>
        </div>
      </div>
    `;
    container.innerHTML += cardHTML;
  });
}

// F. RENDER JADWAL RONDA
function renderJadwalRonda() {
  const container = document.getElementById("ronda-grid");
  if (!container) return;
  
  container.innerHTML = "";
  
  DATA_RONDA.forEach(item => {
    // Generate list of names
    const listHTML = item.petugas.map(nama => `
      <li class="flex items-center gap-2 text-slate-600 text-xs py-1 border-b border-slate-50 last:border-b-0 ronda-card-bullet">
        <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
        <span class="font-medium">${nama}</span>
      </li>
    `).join("");
    
    const cardHTML = `
      <div class="bg-white rounded-2xl shadow-md border border-slate-100 p-5 hover-card-trigger flex flex-col justify-between reveal">
        <div>
          <!-- Header Card: Hari & Icon -->
          <div class="flex items-center justify-between mb-3">
            <span class="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-lg">
              <i class="fas fa-moon text-amber-500"></i> ${item.hari}
            </span>
            <div class="text-slate-300 text-base">
              <i class="fas fa-shield-alt"></i>
            </div>
          </div>
          <!-- Lokasi Ronda -->
          <div class="flex items-center gap-1.5 text-xxs text-slate-400 font-bold uppercase tracking-wider mb-4">
            <i class="fas fa-map-marker-alt text-emerald-600"></i> ${item.lokasi}
          </div>
          <!-- Petugas Ronda -->
          <ul class="flex flex-col gap-0.5">
            ${listHTML}
          </ul>
        </div>
      </div>
    `;
    container.innerHTML += cardHTML;
  });
}

// ==========================================================================
// INTERAKTIF & EVENT LISTENERS
// ==========================================================================

let activeImageIndex = 0;

function openLightbox(index) {
  const modal = document.getElementById("lightboxModal");
  const modalImg = document.getElementById("lightboxImage");
  const modalCaption = document.getElementById("lightboxCaption");
  
  if (!modal || !modalImg || !modalCaption) return;
  
  activeImageIndex = index;
  modalImg.src = DATA_GALERI[index].image;
  // Fallback image in case
  modalImg.onerror = function() {
    this.src = 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&auto=format&fit=crop&q=80';
  };
  modalCaption.textContent = DATA_GALERI[index].judul + " - " + DATA_GALERI[index].deskripsi;
  
  modal.style.display = "flex";
  document.body.style.overflow = "hidden"; // Disable background scrolling
}

function closeLightbox() {
  const modal = document.getElementById("lightboxModal");
  if (modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto"; // Re-enable scrolling
  }
}

// Lightbox Navigation
function changeLightboxImage(direction) {
  activeImageIndex += direction;
  if (activeImageIndex >= DATA_GALERI.length) {
    activeImageIndex = 0;
  } else if (activeImageIndex < 0) {
    activeImageIndex = DATA_GALERI.length - 1;
  }
  
  const modalImg = document.getElementById("lightboxImage");
  const modalCaption = document.getElementById("lightboxCaption");
  
  if (modalImg && modalCaption) {
    modalImg.src = DATA_GALERI[activeImageIndex].image;
    modalCaption.textContent = DATA_GALERI[activeImageIndex].judul + " - " + DATA_GALERI[activeImageIndex].deskripsi;
  }
}

function setupEventListeners() {
  // 1. Mobile Menu Toggle
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
    
    // Close mobile menu when clicking link
    mobileMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
      });
    });
  }
  
  // 2. Navbar Styling on Scroll
  window.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbar");
    const backToTop = document.getElementById("back-to-top");
    
    if (navbar) {
      if (window.scrollY > 50) {
        navbar.classList.add("glass-nav-scrolled", "text-white");
        navbar.classList.remove("glass-nav", "text-slate-800");
        
        // Update logo border / styling if needed
      } else {
        navbar.classList.add("glass-nav", "text-slate-800");
        navbar.classList.remove("glass-nav-scrolled", "text-white");
      }
    }
    
    // Back to top
    if (backToTop) {
      if (window.scrollY > 400) {
        backToTop.classList.add("show");
      } else {
        backToTop.classList.remove("show");
      }
    }
  });
  
  // 3. Kegiatan Filter Button Click
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      // Remove active class from all
      filterBtns.forEach(b => b.classList.remove("active", "bg-primary-main", "text-white"));
      filterBtns.forEach(b => b.classList.add("bg-white", "text-slate-700", "border-slate-200"));
      
      // Add active to current
      e.target.classList.add("active", "bg-primary-main", "text-white");
      e.target.classList.remove("bg-white", "text-slate-700", "border-slate-200");
      
      const filter = e.target.getAttribute("data-filter");
      renderKegiatan(filter);
      
      // Re-trigger scroll animations for newly rendered elements
      setupScrollAnimation();
    });
  });

  // 4. Form Kontak Warga Submit to WhatsApp
  const contactForm = document.getElementById("warga-contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const name = document.getElementById("form-nama").value.trim();
      const phone = document.getElementById("form-wa").value.trim();
      const message = document.getElementById("form-pesan").value.trim();
      
      if (!name || !phone || !message) {
        alert("Semua data wajib diisi dengan benar.");
        return;
      }
      
      // Buat template text
      const introText = `Halo Ketua RT 006 Warung Cikopi (Bapak Kusdiana),\nSaya ingin menyampaikan pesan/laporan warga.\n\n`;
      const payloadText = `*Nama:* ${name}\n*No. WhatsApp:* ${phone}\n*Pesan:*\n${message}`;
      const encodedMessage = encodeURIComponent(introText + payloadText);
      
      const whatsappURL = `https://wa.me/${RT_CONFIG.kontak.noWaKetua}?text=${encodedMessage}`;
      
      // Buka link WhatsApp di tab baru
      window.open(whatsappURL, "_blank");
      
      // Reset form setelah mengirim
      contactForm.reset();
    });
  }

  // 5. Lightbox Modal Close Event
  const closeBtn = document.getElementById("lightboxClose");
  if (closeBtn) {
    closeBtn.addEventListener("click", closeLightbox);
  }
  
  // Close lightbox by clicking backdrop
  const modal = document.getElementById("lightboxModal");
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeLightbox();
      }
    });
  }

  // Close admin modal by clicking backdrop
  const adminModal = document.getElementById("adminModal");
  if (adminModal) {
    adminModal.addEventListener("click", (e) => {
      if (e.target === adminModal) {
        closeAdminModal();
      }
    });
  }

  // Escape key close lightbox or admin modal
  document.addEventListener("keydown", (e) => {
    if (modal && modal.style.display === "flex") {
      if (e.key === "Escape") {
        closeLightbox();
      } else if (e.key === "ArrowRight") {
        changeLightboxImage(1);
      } else if (e.key === "ArrowLeft") {
        changeLightboxImage(-1);
      }
    }
    if (adminModal && !adminModal.classList.contains("hidden")) {
      if (e.key === "Escape") {
        closeAdminModal();
      }
    }
  });
}

// F. ANIMATION ON SCROLL (REVEAL ELEMENTS)
function setupScrollAnimation() {
  const reveals = document.querySelectorAll(".reveal");
  
  const revealCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target); // Hanya animasi satu kali saat scroll down
      }
    });
  };

  const revealObserver = new IntersectionObserver(revealCallback, {
    root: null,
    threshold: 0.15, // Memicu animasi ketika 15% elemen terlihat
    rootMargin: "0px 0px -50px 0px"
  });

  reveals.forEach(reveal => {
    revealObserver.observe(reveal);
  });
}

// G. RENDER PRESTASI & PENGHARGAAN
function renderPrestasi() {
  const container = document.getElementById("prestasi-grid");
  if (!container) return;
  
  container.innerHTML = "";
  
  DATA_PRESTASI.forEach(item => {
    const cardHTML = `
      <div class="bg-white rounded-2xl shadow-md border border-slate-100 p-6 hover-card-trigger flex flex-col md:flex-row gap-5 items-start reveal">
        <!-- Icon Container -->
        <div class="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-xl ${item.color}">
          <i class="${item.icon}"></i>
        </div>
        <!-- Content Container -->
        <div class="flex-grow">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xxs font-extrabold bg-emerald-50 text-emerald-800 uppercase tracking-wide">
              Tahun ${item.tahun}
            </span>
            <span class="text-slate-400 text-xs font-semibold">
              <i class="fas fa-university mr-1"></i> ${item.penyelenggara}
            </span>
          </div>
          <h4 class="text-lg font-bold text-slate-800 mb-1">${item.judul}</h4>
          <p class="text-slate-600 text-sm leading-relaxed">${item.deskripsi}</p>
        </div>
      </div>
    `;
    container.innerHTML += cardHTML;
  });
}

// ==========================================================================
// ADMIN CONTROL PANEL ACTIONS
// ==========================================================================

let isAdminLoggedIn = false;

function triggerAdminLogin() {
  openAdminModal();
}

function openAdminModal() {
  const modal = document.getElementById("adminModal");
  if (!modal) return;
  
  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden"; // Disable background scrolling

  const loginScreen = document.getElementById("admin-login-screen");
  const panelContent = document.getElementById("admin-panel-content");
  const passwordInput = document.getElementById("admin-password-input");
  const errorMsg = document.getElementById("admin-login-error");

  if (isAdminLoggedIn) {
    if (loginScreen) loginScreen.classList.add("hidden");
    if (panelContent) panelContent.classList.remove("hidden");
  } else {
    if (loginScreen) loginScreen.classList.remove("hidden");
    if (panelContent) panelContent.classList.add("hidden");
    if (errorMsg) errorMsg.classList.add("hidden");
    if (passwordInput) {
      passwordInput.value = "";
      setTimeout(() => passwordInput.focus(), 100);
    }
  }
}

function closeAdminModal() {
  const modal = document.getElementById("adminModal");
  if (modal) {
    modal.classList.add("hidden");
    document.body.style.overflow = "auto"; // Re-enable background scrolling
  }
}

function switchAdminTab(tabIndex) {
  const tabs = document.querySelectorAll(".admin-tab-btn");
  const contents = document.querySelectorAll(".admin-tab-content");
  
  tabs.forEach((tab, index) => {
    if (index === tabIndex) {
      tab.classList.remove("text-slate-500", "border-transparent");
      tab.classList.add("text-emerald-600", "border-emerald-600");
    } else {
      tab.classList.remove("text-emerald-600", "border-emerald-600");
      tab.classList.add("text-slate-500", "border-transparent");
    }
  });
  
  contents.forEach((content, index) => {
    if (index === tabIndex) {
      content.classList.remove("hidden");
    } else {
      content.classList.add("hidden");
    }
  });
}

function setupAdminPanel() {
  const saveLocalStorageData = () => {
    localStorage.setItem("DATA_PENGUMUMAN", JSON.stringify(DATA_PENGUMUMAN));
    localStorage.setItem("DATA_KEGIATAN", JSON.stringify(DATA_KEGIATAN));
    localStorage.setItem("DATA_GALERI", JSON.stringify(DATA_GALERI));
    localStorage.setItem("DATA_RONDA", JSON.stringify(DATA_RONDA));
    localStorage.setItem("DATA_PRESTASI", JSON.stringify(DATA_PRESTASI));
  };

  // Admin Login Form Submit
  const loginForm = document.getElementById("admin-login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const passwordInput = document.getElementById("admin-password-input");
      const errorMsg = document.getElementById("admin-login-error");
      const loginScreen = document.getElementById("admin-login-screen");
      const panelContent = document.getElementById("admin-panel-content");

      if (passwordInput && passwordInput.value === "rt006admin") {
        isAdminLoggedIn = true;
        if (loginScreen) loginScreen.classList.add("hidden");
        if (panelContent) panelContent.classList.remove("hidden");
        if (errorMsg) errorMsg.classList.add("hidden");
        if (passwordInput) passwordInput.value = "";
      } else {
        if (errorMsg) errorMsg.classList.remove("hidden");
        if (passwordInput) {
          passwordInput.value = "";
          passwordInput.focus();
        }
      }
    });
  }

  // Tab 1: Pengumuman
  const formPengumuman = document.getElementById("admin-form-pengumuman");
  if (formPengumuman) {
    formPengumuman.addEventListener("submit", (e) => {
      e.preventDefault();
      const judul = document.getElementById("admin-ann-judul").value.trim();
      const tanggal = document.getElementById("admin-ann-tanggal").value.trim();
      const isi = document.getElementById("admin-ann-isi").value.trim();
      const kategori = document.getElementById("admin-ann-kategori").value.trim();
      const badgeSel = document.getElementById("admin-ann-badge").value;
      
      let badgeColor = "bg-emerald-100 text-emerald-800";
      if (badgeSel === "Biru") badgeColor = "bg-blue-100 text-blue-800";
      else if (badgeSel === "Ungu") badgeColor = "bg-purple-100 text-purple-800";
      else if (badgeSel === "Kuning") badgeColor = "bg-amber-100 text-amber-800";

      const id = DATA_PENGUMUMAN.length ? Math.max(...DATA_PENGUMUMAN.map(item => item.id)) + 1 : 1;
      
      DATA_PENGUMUMAN.push({ id, judul, tanggal, isi, kategori, badgeColor });
      saveLocalStorageData();
      renderPengumuman();
      formPengumuman.reset();
      alert("Pengumuman berhasil ditambahkan!");
      closeAdminModal();
      setupScrollAnimation();
    });
  }

  // Tab 2: Kegiatan
  const formKegiatan = document.getElementById("admin-form-kegiatan");
  if (formKegiatan) {
    formKegiatan.addEventListener("submit", (e) => {
      e.preventDefault();
      const judul = document.getElementById("admin-keg-judul").value.trim();
      const kategori = document.getElementById("admin-keg-kategori").value;
      const deskripsi = document.getElementById("admin-keg-deskripsi").value.trim();
      const status = document.getElementById("admin-keg-status").value.trim();
      const colorSel = document.getElementById("admin-keg-color").value;

      let statusColor = "bg-emerald-500";
      if (colorSel === "Kuning") statusColor = "bg-amber-500";
      else if (colorSel === "Biru") statusColor = "bg-blue-500";

      const kategoriLabel = kategori === "program" ? "Program Lingkungan" : "Kegiatan Koordinasi";

      DATA_KEGIATAN.push({ judul, kategori, kategoriLabel, status, statusColor, deskripsi });
      saveLocalStorageData();
      renderKegiatan("all");
      formKegiatan.reset();
      
      // Reset filter button to 'all'
      const filterBtns = document.querySelectorAll(".filter-btn");
      filterBtns.forEach(b => {
        if (b.getAttribute("data-filter") === "all") {
          b.classList.add("active", "bg-primary-main", "text-white");
          b.classList.remove("bg-white", "text-slate-700", "border-slate-200");
        } else {
          b.classList.remove("active", "bg-primary-main", "text-white");
          b.classList.add("bg-white", "text-slate-700", "border-slate-200");
        }
      });

      alert("Kegiatan berhasil ditambahkan!");
      closeAdminModal();
      setupScrollAnimation();
    });
  }

  // Tab 3: Galeri
  const formGaleri = document.getElementById("admin-form-galeri");
  if (formGaleri) {
    formGaleri.addEventListener("submit", (e) => {
      e.preventDefault();
      const judul = document.getElementById("admin-gal-judul").value.trim();
      const fileInput = document.getElementById("admin-gal-file");
      const deskripsi = document.getElementById("admin-gal-deskripsi").value.trim();

      if (fileInput && fileInput.files && fileInput.files[0]) {
        const file = fileInput.files[0];
        const reader = new FileReader();

        reader.onload = function(event) {
          const imageBase64 = event.target.result;
          DATA_GALERI.push({ judul, image: imageBase64, deskripsi });
          saveLocalStorageData();
          renderGaleri();
          formGaleri.reset();
          alert("Galeri berhasil ditambahkan!");
          closeAdminModal();
          setupScrollAnimation();
        };

        reader.readAsDataURL(file);
      } else {
        alert("Silakan pilih file gambar terlebih dahulu!");
      }
    });
  }

  // Tab 4: Jadwal Ronda
  const formRonda = document.getElementById("admin-form-ronda");
  if (formRonda) {
    formRonda.addEventListener("submit", (e) => {
      e.preventDefault();
      const hari = document.getElementById("admin-ron-hari").value;
      const petugasText = document.getElementById("admin-ron-petugas").value.trim();

      const match = DATA_RONDA.find(item => item.hari === hari);
      if (match) {
        match.petugas = petugasText.split(",").map(name => name.trim()).filter(name => name.length > 0);
        saveLocalStorageData();
        renderJadwalRonda();
        formRonda.reset();
        alert("Jadwal ronda berhasil diperbarui!");
        closeAdminModal();
        setupScrollAnimation();
      } else {
        alert("Hari tidak ditemukan!");
      }
    });
  }

  // Tab 5: Prestasi
  const formPrestasi = document.getElementById("admin-form-prestasi");
  if (formPrestasi) {
    formPrestasi.addEventListener("submit", (e) => {
      e.preventDefault();
      const tahun = document.getElementById("admin-pres-tahun").value.trim();
      const judul = document.getElementById("admin-pres-judul").value.trim();
      const penyelenggara = document.getElementById("admin-pres-penyelenggara").value.trim();
      const icon = document.getElementById("admin-pres-icon").value.trim();
      const colorSel = document.getElementById("admin-pres-color").value;
      const deskripsi = document.getElementById("admin-pres-deskripsi").value.trim();

      let color = "bg-amber-100 text-amber-700";
      if (colorSel === "Emerald") color = "bg-emerald-100 text-emerald-700";
      else if (colorSel === "Blue") color = "bg-blue-100 text-blue-700";
      else if (colorSel === "Indigo") color = "bg-indigo-100 text-indigo-700";

      DATA_PRESTASI.push({ tahun, judul, penyelenggara, deskripsi, icon, color });
      saveLocalStorageData();
      renderPrestasi();
      formPrestasi.reset();
      alert("Prestasi berhasil ditambahkan!");
      closeAdminModal();
      setupScrollAnimation();
    });
  }
}

// Make sure these are globally accessible for HTML onclick attributes
window.triggerAdminLogin = triggerAdminLogin;
window.openAdminModal = openAdminModal;
window.closeAdminModal = closeAdminModal;
window.switchAdminTab = switchAdminTab;

// Akhir dari berkas script.js - Sinkronisasi Email Vercel
