// ==============================
// Fitur: Smooth Scroll
// ==============================
// Fungsi ini digunakan untuk membuat tombol "Pelajari Lebih Lanjut" pada Hero Section 
// menggulir halaman secara halus menuju ke bagian "Tentang Kami".
// Metode yang digunakan: `scrollIntoView`
const learnMoreBtn = document.getElementById('learnMore'); // Ambil tombol berdasarkan ID
learnMoreBtn.addEventListener('click', () => {
  // Scroll ke elemen dengan ID 'about' secara smooth
  document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
});

// ==============================
// Fitur: Dynamic Service Cards
// ==============================
// Fungsi ini digunakan untuk menambahkan kartu layanan secara dinamis ke dalam
// elemen HTML dengan ID 'serviceCards'. Data layanan disimpan dalam array dan
// setiap kartu dibuat menggunakan DOM API (Document Object Model).
// Metode yang digunakan: `createElement`, `innerHTML`, `appendChild`
const serviceCards = document.getElementById('serviceCards'); // Ambil container untuk kartu layanan
const services = [
  { title: 'Konsultasi', description: 'Kami menawarkan layanan konsultasi untuk bisnis Anda.' },
  { title: 'Pengembangan Web', description: 'Kami membuat website profesional sesuai kebutuhan.' },
  { title: 'Digital Marketing', description: 'Kami membantu memasarkan produk Anda secara digital.' },
];

services.forEach(service => {
  // Buat elemen div untuk setiap kartu
  const card = document.createElement('div');
  card.className = 'p-6 bg-white shadow-lg rounded'; // Tambahkan kelas Tailwind untuk styling

  // Tambahkan konten kartu menggunakan innerHTML
  card.innerHTML = `
    <h3 class="text-xl font-bold mb-2">${service.title}</h3>
    <p class="text-gray-700">${service.description}</p>
  `;

  // Tambahkan kartu ke dalam container kartu layanan
  serviceCards.appendChild(card);
});

// ==============================
// Fitur: Form Validation
// ==============================
// Fungsi ini digunakan untuk memvalidasi form kontak sebelum dikirim.
// Formulir kontak akan memunculkan peringatan jika ada input yang kosong
// dan menampilkan pesan terima kasih jika semua input terisi.
// Metode yang digunakan: `addEventListener`, `value`, `reset`, `alert`
const contactForm = document.getElementById('contactForm'); // Ambil elemen form berdasarkan ID
contactForm.addEventListener('submit', (e) => {
  // Mencegah pengiriman form secara default (prevent default behavior)
  e.preventDefault();

  // Ambil nilai dari input pengguna
  const name = document.getElementById('name').value; // Nilai input Nama
  const email = document.getElementById('email').value; // Nilai input Email
  const message = document.getElementById('message').value; // Nilai input Pesan

  // Validasi: Pastikan semua bidang terisi
  if (name && email && message) {
    // Jika semua input valid, tampilkan pesan terima kasih
    alert(`Sorry, ${name}! I have boyfriend.`);
    contactForm.reset(); // Reset nilai form setelah pengiriman
  } else {
    // Jika ada input yang kosong, tampilkan pesan peringatan
    alert('Harap isi semua bidang!');
  }
});
