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
    jumlahKK: 75,
    jumlahWarga: 245,
    jumlahRumah: 68,
    posKamling: 1,
    statusProgram: "Aktif",
    programUtama: "Pengadaan KWh Listrik untuk Pos Kamling"
  },
  
  // Kontak Pengurus untuk WhatsApp dan Tampilan
  kontak: {
    noWaKetua: "6282212345678", // Ganti dengan nomor WA Ketua RT (awali dengan kode negara 62, tanpa tanda + atau spasi)
    namaSekretaris: "Budi Santoso",
    noWaSekretaris: "6285322223333", // Nomor WA Sekretaris
    namaBendahara: "Siti Rahma",
    noWaBendahara: "6289655556666" // Nomor WA Bendahara
  }
};

// 1. DATA PENGURUS RT 006 (Sesuai Struktur Organigram)
// Note: Nama-nama di bawah ini dihubungkan langsung ke elemen organigram.
const DATA_PENGURUS = {
  penasihat: {
    nama: "H. Maimun",
    tugas: "memberikan arahan dan masukan kepada pengurus RT"
  },
  ketua: {
    nama: "Kusdiana",
    tugas: "memimpin dan mengoordinasikan kegiatan warga"
  },
  wakilKetua: {
    nama: "Asep Sunandar",
    tugas: "membantu tugas Ketua RT"
  },
  sekretaris: {
    nama: "Budi Santoso",
    tugas: "mengelola administrasi dan pencatatan kegiatan"
  },
  bendahara: {
    nama: "Siti Rahma",
    tugas: "mengelola kebutuhan dana kegiatan warga"
  },
  keamanan: {
    nama: "Dadang",
    tugas: "mengoordinasikan ronda dan keamanan lingkungan"
  },
  keagamaan: {
    nama: "Ustadz Yayan",
    tugas: "mengoordinasikan kegiatan keagamaan warga"
  }
};

// 2. DATA PENGUMUMAN RT 006
// Anda bisa menambah, menghapus, atau mengubah item di dalam array ini.
const DATA_PENGUMUMAN = [
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
const DATA_KEGIATAN = [
  {
    judul: "Ronda Malam",
    kategori: "rutin",
    kategoriLabel: "Kegiatan Rutin",
    status: "Aktif",
    statusColor: "bg-emerald-500",
    deskripsi: "Kegiatan rutin warga untuk menjaga keamanan lingkungan dari berbagai gangguan pada malam hari."
  },
  {
    judul: "Kerja Bakti",
    kategori: "rutin",
    kategoriLabel: "Kegiatan Rutin",
    status: "Rutin",
    statusColor: "bg-emerald-500",
    deskripsi: "Gotong royong membersihkan lingkungan RT agar tetap bersih, indah, sehat, dan bebas banjir."
  },
  {
    judul: "Pengadaan KWh Pos Kamling",
    kategori: "program",
    kategoriLabel: "Program Lingkungan",
    status: "Dalam Pengajuan",
    statusColor: "bg-amber-500",
    deskripsi: "Program pengadaan sambungan listrik mandiri untuk mendukung penerangan, sarana, dan aktivitas Pos Kamling."
  },
  {
    judul: "Rapat Warga",
    kategori: "koordinasi",
    kategoriLabel: "Kegiatan Koordinasi",
    status: "Menyesuaikan",
    statusColor: "bg-blue-500",
    deskripsi: "Pertemuan musyawarah berkala antara warga dan jajaran pengurus untuk menampung masukan dan evaluasi program."
  }
];

// 4. DATA GALERI FOTO RT 006
// Silakan ganti nilai 'image' dengan path gambar lokal Anda apabila sudah ada, contoh: "assets/img/foto1.jpg"
// Saat ini menggunakan Unsplash premium mockups untuk visual terbaik pada demo pertama.
const DATA_GALERI = [
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
const DATA_RONDA = [
  {
    hari: "Malam Senin",
    lokasi: "Pos Kamling RT 006",
    petugas: ["Ahmad", "Budi", "Dedi", "Asep"]
  },
  {
    hari: "Malam Selasa",
    lokasi: "Pos Kamling RT 006",
    petugas: ["Ujang", "Dadan", "Rudi", "Iwan"]
  },
  {
    hari: "Malam Rabu",
    lokasi: "Pos Kamling RT 006",
    petugas: ["Agus", "Heri", "Jajang", "Yusuf"]
  },
  {
    hari: "Malam Kamis",
    lokasi: "Pos Kamling RT 006",
    petugas: ["Dani", "Rahmat", "Yana", "Eman"]
  },
  {
    hari: "Malam Jumat",
    lokasi: "Pos Kamling RT 006",
    petugas: ["Hendra", "Taufik", "Cecep", "Adit"]
  },
  {
    hari: "Malam Sabtu",
    lokasi: "Pos Kamling RT 006",
    petugas: ["Rian", "Fajar", "Opik", "Diki"]
  },
  {
    hari: "Malam Minggu",
    lokasi: "Pos Kamling RT 006",
    petugas: ["Wildan", "Sandi", "Roni", "Usep"]
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
  setupEventListeners();
  setupScrollAnimation();
});

// A. RENDER INFO UMUM & STATISTIK
function renderInfoUmum() {
  // Update teks nama RT dan Alamat di beberapa section
  document.querySelectorAll(".rt-title").forEach(el => el.textContent = RT_CONFIG.namaRT);
  document.querySelectorAll(".rt-address").forEach(el => el.textContent = RT_CONFIG.alamatRT);
  document.querySelectorAll(".rt-ketua-name").forEach(el => el.textContent = RT_CONFIG.namaKetuaRT);
  
  // Stats Beranda
  document.getElementById("stat-kk-hero").textContent = RT_CONFIG.statistik.jumlahKK + " KK";
  document.getElementById("stat-warga-hero").textContent = RT_CONFIG.statistik.jumlahWarga + " Jiwa";
  document.getElementById("stat-pos-hero").textContent = RT_CONFIG.statistik.posKamling + " Unit";
  document.getElementById("stat-status-hero").textContent = RT_CONFIG.statistik.statusProgram;
  document.getElementById("stat-program-hero").textContent = RT_CONFIG.statistik.programUtama;

  // Stats Profil
  document.getElementById("stat-kk-profil").textContent = RT_CONFIG.statistik.jumlahKK + " KK";
  document.getElementById("stat-warga-profil").textContent = RT_CONFIG.statistik.jumlahWarga + " Jiwa";
  document.getElementById("stat-rumah-profil").textContent = RT_CONFIG.statistik.jumlahRumah + " Rumah";
  document.getElementById("stat-pos-profil").textContent = RT_CONFIG.statistik.posKamling + " Unit";
  
  // Kontak di footer/kontak
  document.getElementById("kontak-alamat").textContent = RT_CONFIG.alamatRT;
  document.getElementById("kontak-ketua").textContent = RT_CONFIG.namaKetuaRT;
  document.getElementById("kontak-sekretaris").textContent = RT_CONFIG.kontak.namaSekretaris;
  document.getElementById("kontak-bendahara").textContent = RT_CONFIG.kontak.namaBendahara;
  
  // Link WhatsApp langsung di tombol-tombol
  const waBtnHeader = document.getElementById("wa-btn-header");
  if (waBtnHeader) {
    waBtnHeader.href = `https://wa.me/${RT_CONFIG.kontak.noWaKetua}`;
  }
}

// B. RENDER ORGANIGRAM (PENGURUS)
function renderOrganigram() {
  // Memasukkan nama dan tugas ke masing-masing posisi
  const roles = ["penasihat", "ketua", "wakilKetua", "sekretaris", "bendahara", "keamanan", "keagamaan"];
  
  roles.forEach(roleKey => {
    // Cari elemen berdasarkan ID
    const nameEl = document.getElementById(`nama-${roleKey}`);
    const taskEl = document.getElementById(`tugas-${roleKey}`);
    
    // Sesuaikan mapping key jika camelCase
    let dataKey = roleKey;
    if (roleKey === "wakilKetua") dataKey = "wakilKetua";
    
    if (DATA_PENGURUS[dataKey]) {
      if (nameEl) nameEl.textContent = DATA_PENGURUS[dataKey].nama;
      if (taskEl) taskEl.textContent = DATA_PENGURUS[dataKey].tugas;
    }
  });
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

  // Escape key close lightbox
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
