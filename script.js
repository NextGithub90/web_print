// Interaksi WhatsApp: gunakan WA 1 sebagai default, bisa pilih WA 2
const WA1 = '6287779278899';
const WA2 = '6285715007878';

function waLink(number, product){
  const base = `https://wa.me/${number}`;
  const text = encodeURIComponent(`Halo, saya ingin memesan: ${product}. Mohon info harga & waktu produksi.`);
  return `${base}?text=${text}`;
}

function attachOrderButtons(){
  const buttons = document.querySelectorAll('.btn-order');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const product = btn.dataset.product || 'Produk Digital Printing';
      window.open(waLink(WA1, product), '_blank');
    });
  });
}

function setYear(){
  const y = document.getElementById('year');
  if(y){ y.textContent = new Date().getFullYear(); }
}

document.addEventListener('DOMContentLoaded', () => {
  attachOrderButtons();
  setYear();
  initProductFilter();
  initFadeOnScroll();
});

// Filter kategori produk populer
function initProductFilter(){
  const chips = document.querySelectorAll('.chip-btn');
  const items = document.querySelectorAll('.product-item');

  function applyFilter(filter){
    items.forEach(el => {
      const cat = el.dataset.category;
      if(filter === 'all' || filter === cat){
        el.classList.remove('d-none');
      } else {
        el.classList.add('d-none');
      }
    });
  }

  chips.forEach(btn => {
    btn.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      btn.classList.add('active');
      applyFilter(btn.dataset.filter);
    });
  });

  // default: tampilkan semua
  applyFilter('all');
}

// Animasi fade saat elemen masuk viewport
function initFadeOnScroll(){
  const targets = document.querySelectorAll('.fade-up, .fade-left, .fade-right');
  if(!('IntersectionObserver' in window)){
    // fallback: tampilkan semua jika observer tidak didukung
    targets.forEach(el => el.classList.add('in-view'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('in-view');
      } else {
        entry.target.classList.remove('in-view');
      }
    });
  }, { threshold: 0.15 });
  targets.forEach(el => io.observe(el));
}