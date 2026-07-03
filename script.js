// =========================================
// PASTI LANDING PAGE - DATA & LOGIC
// =========================================

// ---------- PASTI Data (30+ entries) - Kawasan Sepang ----------
const pastiData = [
  // ===== ZON 1: Salak Tinggi & Sekitar =====
  { id: 1, nama: "PASTI Al-Faizin (BBST)", zon: 1, transit: true, tahun: { 4: { sesi: ["pagi"] }, 5: { sesi: ["pagi", "petang"] }, 6: { sesi: ["pagi", "petang"] } }, contact: { whatsapp: "https://wa.me/60123456789", facebook: "#", tiktok: "#" }, coordinate: { lat: 2.8136, lng: 101.7380 } },
  { id: 2, nama: "PASTI As-Syakirin (Kota Warisan)", zon: 1, transit: false, tahun: { 4: { sesi: ["pagi"] }, 5: { sesi: ["pagi"] }, 6: { sesi: ["pagi"] } }, contact: { whatsapp: "https://wa.me/60123456789", facebook: "#", tiktok: "#" }, coordinate: { lat: 2.8250, lng: 101.6960 } },
  { id: 3, nama: "PASTI Ar-Raudhah (Taman Seroja)", zon: 1, transit: true, tahun: { 5: { sesi: ["pagi", "petang"] }, 6: { sesi: ["pagi", "petang"] } }, contact: { whatsapp: "https://wa.me/60123456789", facebook: "#", tiktok: "#" }, coordinate: { lat: 2.8200, lng: 101.7400 } },
  { id: 4, nama: "PASTI Nurul Huda (Taman Mawar)", zon: 1, transit: false, tahun: { 4: { sesi: ["pagi"] }, 5: { sesi: ["pagi"] }, 6: { sesi: ["pagi", "petang"] } }, contact: { whatsapp: "https://wa.me/60123456789", facebook: "#", tiktok: "#" }, coordinate: { lat: 2.8300, lng: 101.7350 } },
  { id: 5, nama: "PASTI Al-Ikhwan (Salak Perdana)", zon: 1, transit: true, tahun: { 4: { sesi: ["pagi"] }, 5: { sesi: ["pagi"] }, 6: { sesi: ["pagi"] } }, contact: { whatsapp: "https://wa.me/60123456789", facebook: "#", tiktok: "#" }, coordinate: { lat: 2.8400, lng: 101.7200 } },
  { id: 6, nama: "PASTI Al-Hikmah (Desa Vista)", zon: 1, transit: false, tahun: { 4: { sesi: ["pagi", "petang"] }, 5: { sesi: ["pagi"] }, 6: { sesi: ["pagi"] } }, contact: { whatsapp: "https://wa.me/60123456789", facebook: "#", tiktok: "#" }, coordinate: { lat: 2.8150, lng: 101.7500 } },
  { id: 7, nama: "PASTI Darul Ilmu (Kg Jenderam Hulu)", zon: 1, transit: true, tahun: { 4: { sesi: ["pagi"] }, 5: { sesi: ["pagi", "petang"] }, 6: { sesi: ["pagi", "petang"] } }, contact: { whatsapp: "https://wa.me/60123456789", facebook: "#", tiktok: "#" }, coordinate: { lat: 2.8800, lng: 101.7200 } },
  { id: 8, nama: "PASTI At-Taqwa (Taman Dahlia)", zon: 1, transit: false, tahun: { 5: { sesi: ["pagi"] }, 6: { sesi: ["pagi"] } }, contact: { whatsapp: "https://wa.me/60123456789", facebook: "#", tiktok: "#" }, coordinate: { lat: 2.8250, lng: 101.7450 } },
  { id: 9, nama: "PASTI As-Salam (Salak Tinggi)", zon: 1, transit: true, tahun: { 4: { sesi: ["pagi"] }, 5: { sesi: ["pagi"] }, 6: { sesi: ["pagi"] } }, contact: { whatsapp: "https://wa.me/60123456789", facebook: "#", tiktok: "#" }, coordinate: { lat: 2.8100, lng: 101.7300 } },
  { id: 10, nama: "PASTI Al-Amin (Kg Chinchin)", zon: 1, transit: false, tahun: { 4: { sesi: ["pagi"] }, 5: { sesi: ["pagi", "petang"] }, 6: { sesi: ["pagi", "petang"] } }, contact: { whatsapp: "https://wa.me/60123456789", facebook: "#", tiktok: "#" }, coordinate: { lat: 2.8000, lng: 101.7600 } },
  { id: 11, nama: "PASTI Nurul Iman (Taman Kenanga)", zon: 1, transit: true, tahun: { 4: { sesi: ["pagi"] }, 5: { sesi: ["pagi"] }, 6: { sesi: ["pagi"] } }, contact: { whatsapp: "https://wa.me/60123456789", facebook: "#", tiktok: "#" }, coordinate: { lat: 2.8180, lng: 101.7380 } },
  { id: 12, nama: "PASTI Al-Munir (Bdr Sri Ehsan)", zon: 1, transit: false, tahun: { 5: { sesi: ["pagi"] }, 6: { sesi: ["pagi", "petang"] } }, contact: { whatsapp: "https://wa.me/60123456789", facebook: "#", tiktok: "#" }, coordinate: { lat: 2.8050, lng: 101.6850 } },

  // ===== ZON 2: Dengkil, Cyberjaya & Putra Perdana =====
  { id: 13, nama: "PASTI Al-Hidayah (Dengkil)", zon: 2, transit: true, tahun: { 4: { sesi: ["pagi"] }, 5: { sesi: ["pagi", "petang"] }, 6: { sesi: ["pagi", "petang"] } }, contact: { whatsapp: "https://wa.me/60123456789", facebook: "#", tiktok: "#" }, coordinate: { lat: 2.8590, lng: 101.6790 } },
  { id: 14, nama: "PASTI Cyberjaya Utama", zon: 2, transit: true, tahun: { 4: { sesi: ["pagi", "petang"] }, 5: { sesi: ["pagi", "petang"] }, 6: { sesi: ["pagi", "petang"] } }, contact: { whatsapp: "https://wa.me/60123456789", facebook: "#", tiktok: "#" }, coordinate: { lat: 2.9200, lng: 101.6500 } },
  { id: 15, nama: "PASTI As-Sobirin (Putra Perdana)", zon: 2, transit: false, tahun: { 4: { sesi: ["pagi"] }, 5: { sesi: ["pagi"] }, 6: { sesi: ["pagi"] } }, contact: { whatsapp: "https://wa.me/60123456789", facebook: "#", tiktok: "#" }, coordinate: { lat: 2.9400, lng: 101.6100 } },
  { id: 16, nama: "PASTI Al-Ehsan (Bukit Damar)", zon: 2, transit: true, tahun: { 5: { sesi: ["pagi", "petang"] }, 6: { sesi: ["pagi", "petang"] } }, contact: { whatsapp: "https://wa.me/60123456789", facebook: "#", tiktok: "#" }, coordinate: { lat: 2.8800, lng: 101.6400 } },
  { id: 17, nama: "PASTI Nurul Yaqin (Jenderam Hilir)", zon: 2, transit: false, tahun: { 4: { sesi: ["pagi"] }, 5: { sesi: ["pagi"] }, 6: { sesi: ["pagi", "petang"] } }, contact: { whatsapp: "https://wa.me/60123456789", facebook: "#", tiktok: "#" }, coordinate: { lat: 2.8850, lng: 101.7100 } },
  { id: 18, nama: "PASTI Al-Jannah (Desa Pinggiran Putra)", zon: 2, transit: true, tahun: { 4: { sesi: ["pagi"] }, 5: { sesi: ["pagi"] }, 6: { sesi: ["pagi"] } }, contact: { whatsapp: "https://wa.me/60123456789", facebook: "#", tiktok: "#" }, coordinate: { lat: 2.9300, lng: 101.7500 } },
  { id: 19, nama: "PASTI At-Tarbiyah (Kg Sungai Buah)", zon: 2, transit: false, tahun: { 4: { sesi: ["pagi"] }, 5: { sesi: ["pagi"] }, 6: { sesi: ["pagi"] } }, contact: { whatsapp: "https://wa.me/60123456789", facebook: "#", tiktok: "#" }, coordinate: { lat: 2.9000, lng: 101.7600 } },
  { id: 20, nama: "PASTI Al-Furqan (Taman Mas, Dengkil)", zon: 2, transit: true, tahun: { 5: { sesi: ["pagi", "petang"] }, 6: { sesi: ["pagi", "petang"] } }, contact: { whatsapp: "https://wa.me/60123456789", facebook: "#", tiktok: "#" }, coordinate: { lat: 2.8650, lng: 101.6700 } },
  { id: 21, nama: "PASTI As-Syifa (Cyberjaya Presint 11)", zon: 2, transit: false, tahun: { 4: { sesi: ["pagi"] }, 5: { sesi: ["pagi", "petang"] }, 6: { sesi: ["pagi", "petang"] } }, contact: { whatsapp: "https://wa.me/60123456789", facebook: "#", tiktok: "#" }, coordinate: { lat: 2.9250, lng: 101.6550 } },
  { id: 22, nama: "PASTI Bunga Raya (Tmn Baiduri)", zon: 2, transit: true, tahun: { 4: { sesi: ["pagi"] }, 5: { sesi: ["pagi"] }, 6: { sesi: ["pagi"] } }, contact: { whatsapp: "https://wa.me/60123456789", facebook: "#", tiktok: "#" }, coordinate: { lat: 2.8700, lng: 101.6650 } },

  // ===== ZON 3: Sepang & Sungai Pelek =====
  { id: 23, nama: "PASTI Al-Muttaqin (Pekan Sepang)", zon: 3, transit: true, tahun: { 4: { sesi: ["pagi"] }, 5: { sesi: ["pagi", "petang"] }, 6: { sesi: ["pagi", "petang"] } }, contact: { whatsapp: "https://wa.me/60123456789", facebook: "#", tiktok: "#" }, coordinate: { lat: 2.6900, lng: 101.7500 } },
  { id: 24, nama: "PASTI As-Solihin (Sungai Pelek)", zon: 3, transit: false, tahun: { 4: { sesi: ["pagi"] }, 5: { sesi: ["pagi"] }, 6: { sesi: ["pagi"] } }, contact: { whatsapp: "https://wa.me/60123456789", facebook: "#", tiktok: "#" }, coordinate: { lat: 2.6450, lng: 101.7150 } },
  { id: 25, nama: "PASTI Al-Bayan (Pantai Sepang Putra)", zon: 3, transit: true, tahun: { 4: { sesi: ["pagi"] }, 5: { sesi: ["pagi", "petang"] }, 6: { sesi: ["pagi", "petang"] } }, contact: { whatsapp: "https://wa.me/60123456789", facebook: "#", tiktok: "#" }, coordinate: { lat: 2.6200, lng: 101.7100 } },
  { id: 26, nama: "PASTI Darul Makmur (Bagan Lalang)", zon: 3, transit: false, tahun: { 4: { sesi: ["pagi"] }, 5: { sesi: ["pagi"] }, 6: { sesi: ["pagi"] } }, contact: { whatsapp: "https://wa.me/60123456789", facebook: "#", tiktok: "#" }, coordinate: { lat: 2.6050, lng: 101.6900 } },
  { id: 27, nama: "PASTI Al-Abrar (Kg Bukit Bangkong)", zon: 3, transit: true, tahun: { 4: { sesi: ["pagi"] }, 5: { sesi: ["pagi"] }, 6: { sesi: ["pagi"] } }, contact: { whatsapp: "https://wa.me/60123456789", facebook: "#", tiktok: "#" }, coordinate: { lat: 2.6600, lng: 101.7300 } },
  { id: 28, nama: "PASTI An-Najah (Taman Seri Sepang)", zon: 3, transit: false, tahun: { 5: { sesi: ["pagi"] }, 6: { sesi: ["pagi", "petang"] } }, contact: { whatsapp: "https://wa.me/60123456789", facebook: "#", tiktok: "#" }, coordinate: { lat: 2.6850, lng: 101.7450 } },
  { id: 29, nama: "PASTI Al-Mawaddah (Kg Hulu Cucuh)", zon: 3, transit: true, tahun: { 4: { sesi: ["pagi"] }, 5: { sesi: ["pagi"] }, 6: { sesi: ["pagi"] } }, contact: { whatsapp: "https://wa.me/60123456789", facebook: "#", tiktok: "#" }, coordinate: { lat: 2.6700, lng: 101.7400 } },
  { id: 30, nama: "PASTI Al-Falah (Kg Baru Sepang)", zon: 3, transit: false, tahun: { 4: { sesi: ["pagi"] }, 5: { sesi: ["pagi", "petang"] }, 6: { sesi: ["pagi", "petang"] } }, contact: { whatsapp: "https://wa.me/60123456789", facebook: "#", tiktok: "#" }, coordinate: { lat: 2.6950, lng: 101.7550 } },
  { id: 31, nama: "PASTI Ar-Raihan (Kg Tanjung Sepat)", zon: 3, transit: true, tahun: { 5: { sesi: ["pagi", "petang"] }, 6: { sesi: ["pagi", "petang"] } }, contact: { whatsapp: "https://wa.me/60123456789", facebook: "#", tiktok: "#" }, coordinate: { lat: 2.6580, lng: 101.5600 } },
  { id: 32, nama: "PASTI Al-Kausar (Bandar Sepang Utama)", zon: 3, transit: false, tahun: { 4: { sesi: ["pagi"] }, 5: { sesi: ["pagi"] }, 6: { sesi: ["pagi"] } }, contact: { whatsapp: "https://wa.me/60123456789", facebook: "#", tiktok: "#" }, coordinate: { lat: 2.6800, lng: 101.7400 } }
];

// ---------- Zone Labels ----------
const zoneLabels = {
  1: "Zon 1 (Salak Tinggi)",
  2: "Zon 2 (Dengkil / Cyberjaya)",
  3: "Zon 3 (Sepang / Sg Pelek)"
};

const zoneEmojis = {
  1: "🔴",
  2: "🟢",
  3: "🟡"
};

// ---------- SVG Icons ----------
const icons = {
  whatsapp: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`,
  facebook: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>`,
  tiktok: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>`,
  location: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  search: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>`,
  arrowUp: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>`
};

// ---------- Year Emojis ----------
const yearEmojis = {
  4: "👶",
  5: "🧒",
  6: "🎓"
};

// ---------- State ----------
let currentZone = "all";
let searchQuery = "";

// ---------- DOM Elements ----------
const cardsGrid = document.getElementById("cardsGrid");
const searchInput = document.getElementById("searchInput");
const resultCount = document.getElementById("resultCount");
const filterBtns = document.querySelectorAll(".filter-btn");
const navbar = document.querySelector(".navbar");
const backToTopBtn = document.getElementById("backToTop");
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const navLinks = document.getElementById("navLinks");

// ---------- Render Cards ----------
function renderCards() {
  const filtered = pastiData.filter(pasti => {
    const matchZone = currentZone === "all" || pasti.zon === parseInt(currentZone);
    const matchSearch = pasti.nama.toLowerCase().includes(searchQuery.toLowerCase());
    return matchZone && matchSearch;
  });

  // Update count
  resultCount.innerHTML = `Menunjukkan <span>${filtered.length}</span> daripada <span>${pastiData.length}</span> PASTI Kawasan Sepang`;

  if (filtered.length === 0) {
    cardsGrid.innerHTML = `
      <div class="no-results">
        <div class="no-results-icon">🔍</div>
        <h3>Tiada PASTI Ditemui</h3>
        <p>Cuba ubah carian atau filter zon anda</p>
      </div>
    `;
    return;
  }

  cardsGrid.innerHTML = filtered.map((pasti, index) => {
    // Build year rows
    const yearRows = Object.entries(pasti.tahun).map(([year, data]) => {
      const sessionTags = data.sesi.map(s => 
        `<span class="session-tag ${s}">${s === 'pagi' ? '🌅 Pagi' : '🌆 Petang'}</span>`
      ).join('');

      return `
        <div class="year-row">
          <span class="year-label">
            <span class="emoji">${yearEmojis[year]}</span> ${year} Tahun
          </span>
          <div class="session-tags">${sessionTags}</div>
        </div>
      `;
    }).join('');

    const statusClass = pasti.transit ? 'transit' : 'tiada-transit';
    const statusText = pasti.transit ? 'Transit' : 'Tiada Transit';
    const statusIcon = pasti.transit ? '🚌' : '✖️';

    const mapUrl = `https://www.google.com/maps?q=${pasti.coordinate.lat},${pasti.coordinate.lng}`;

    return `
      <div class="pasti-card" data-zone="${pasti.zon}" style="animation-delay: ${index * 0.05}s">
        <div class="card-header">
          <div class="card-title-wrap">
            <div class="card-title">${pasti.nama}</div>
          </div>
          <span class="card-zone-badge zone-${pasti.zon}">${zoneEmojis[pasti.zon]} ${zoneLabels[pasti.zon].split(' ')[0] + ' ' + zoneLabels[pasti.zon].split(' ')[1]}</span>
        </div>

        <div class="card-status">
          <span class="status-badge ${statusClass}">
            <span class="status-dot"></span>
            ${statusIcon} ${statusText}
          </span>
        </div>

        <div class="card-body">
          <div class="year-grid">
            ${yearRows}
          </div>
        </div>

        <div class="card-footer">
          <div class="contact-links">
            <a href="${pasti.contact.whatsapp}" target="_blank" rel="noopener" class="contact-link whatsapp" title="WhatsApp" aria-label="WhatsApp">
              ${icons.whatsapp}
            </a>
            <a href="${pasti.contact.facebook}" target="_blank" rel="noopener" class="contact-link facebook" title="Facebook" aria-label="Facebook">
              ${icons.facebook}
            </a>
            <a href="${pasti.contact.tiktok}" target="_blank" rel="noopener" class="contact-link tiktok" title="TikTok" aria-label="TikTok">
              ${icons.tiktok}
            </a>
          </div>
          <a href="${mapUrl}" target="_blank" rel="noopener" class="map-link">
            ${icons.location}
            <span>Lokasi</span>
          </a>
        </div>
      </div>
    `;
  }).join('');
}

// ---------- Event Listeners ----------

// Zone filter
filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentZone = btn.dataset.zone;
    renderCards();
  });
});

// Search
searchInput.addEventListener("input", (e) => {
  searchQuery = e.target.value;
  renderCards();
});

// Navbar scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  // Back to top
  if (window.scrollY > 400) {
    backToTopBtn.classList.add("visible");
  } else {
    backToTopBtn.classList.remove("visible");
  }
});

// Back to top
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Mobile menu
mobileMenuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// Close mobile menu on link click
navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// ---------- Counter Animation ----------
function animateCounters() {
  const counters = document.querySelectorAll(".hero-stat-number");
  counters.forEach(counter => {
    const target = parseInt(counter.dataset.target);
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;

    const updateCounter = () => {
      current += step;
      if (current < target) {
        counter.textContent = Math.floor(current) + "+";
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target + "+";
      }
    };

    // Use Intersection Observer for animation trigger
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          updateCounter();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    observer.observe(counter);
  });
}

// ---------- Init ----------
document.addEventListener("DOMContentLoaded", () => {
  renderCards();
  animateCounters();
});
