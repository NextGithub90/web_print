## Lokasi Kode

* `index.html`: navbar utama di baris sekitar `30` (`<nav class="navbar navbar-expand-lg navbar-dark bg-navy ...">`).

* `styles.css`: definisi warna khusus (`.bg-navy`, `.bg-navy-900`, `.btn-accent`) dan aturan `navbar .nav-link`.

## Perubahan HTML

1. Ganti kelas background pada navbar dari `bg-navy` menjadi `bg-white`.
2. Ganti skema dari `navbar-dark` menjadi `navbar-light` agar ikon toggler dan elemen default Bootstrap menyesuaikan dengan background terang.
3. Tidak mengubah topbar (`.topbar bg-navy-900`) sehingga elemen lain tidak terdampak.

Contoh hasil tag navbar:

```html
<nav class="navbar navbar-expand-lg navbar-light bg-white sticky-top shadow-sm">
  ...
</nav>
```

## Penambahan CSS Terarah (scoped)

Tambahkan aturan baru di `styles.css` yang hanya berlaku untuk navbar putih, tanpa mempengaruhi komponen lain:

```css
/* Navbar putih */
.navbar.bg-white { background-color: #FFFFFF !important; }

/* Teks brand & menu utama – kontras AA (≥4.5:1) */
.navbar.bg-white .navbar-brand,
.navbar.bg-white .nav-link { color: #333333; text-shadow: none; opacity: 1; }

/* Hover & focus */
.navbar.bg-white .nav-link:hover,
.navbar.bg-white .nav-link:focus { color: #111111; }

/* Active state */
.navbar.bg-white .nav-link.active,
.navbar.bg-white .nav-link.show { color: #000000; font-weight: 600; }

/* Dropdown jika ada */
.navbar.bg-white .dropdown-menu { background-color: #FFFFFF; border-color: rgba(0,0,0,0.1); }
.navbar.bg-white .dropdown-item { color: #333333; }
.navbar.bg-white .dropdown-item:hover,
.navbar.bg-white .dropdown-item:focus { color: #111111; background-color: rgba(0,0,0,0.05); }

/* Toggler pada theme terang */
.navbar-light .navbar-toggler { border-color: rgba(0,0,0,0.15); }
```

Catatan: aturan ini bersifat scoped (`.navbar.bg-white ...`) sehingga tidak mengubah menu/komponen di bagian lain halaman.

## Aksesibilitas & Kontras

* Warna `#333333` di atas `#FFFFFF` memiliki rasio kontras ≈ 12.6:1 (melewati WCAG AA & AAA untuk teks normal).

* Hover/active menggunakan warna lebih gelap (`#111111`/`#000000`) menjaga keterbacaan dan affordance.

## Verifikasi Responsif

* Uji di breakpoint Bootstrap: `xs`, `sm`, `md`, `lg`, `xl`.

* Cek: warna teks, ikon toggler, hover/active, dan dropdown (jika ada) pada setiap ukuran.

* Uji pada perangkat nyata/emu: ponsel, tablet, desktop, resolusi tinggi/low-DPI.

## Dampak Terbatas

* Topbar tetap `bg-navy-900` sehingga informasi WA tidak berubah.

* Tombol CTA `btn-accent` tidak diubah.

* Tidak ada aturan global `.nav-link` yang diubah; kita override hanya pada konteks `.navbar.bg-white`.

## Langkah Implementasi

1. Edit `index.html`: ubah kelas navbar sesuai di atas.
2. Tambah blok CSS scoped ke `styles.css`.
3. Jalankan pengecekan visual dan responsif, serta periksa konsistensi hover/active.
4. Jika ada dropdown di masa depan, aturan sudah siap; sesuaikan minor jika diperlukan.

Apakah Anda menyetujui rencana ini? Setelah konfirmasi, saya akan menerapkan perubahan dan memverifikasi di berbagai perangkat/resolusi.
