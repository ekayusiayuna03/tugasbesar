// scripts.js

document.addEventListener('DOMContentLoaded', function() {

  // Validasi Form Kontak
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();

      const nama = document.getElementById('nama').value.trim();
      const email = document.getElementById('email').value.trim();
      const pesan = document.getElementById('pesan').value.trim();

      if (nama === '' || email === '' || pesan === '') {
        alert('Harap lengkapi semua kolom sebelum mengirim.');
        return;
      }

      alert('Terima kasih, pesan Anda berhasil dikirim!');
      contactForm.reset();
    });
  }

  // Validasi Form Kunjungan
  const visitForm = document.querySelector('.visit-form');
  if (visitForm) {
    visitForm.addEventListener('submit', function(e) {
      e.preventDefault();

      const nama = document.getElementById('nama').value.trim();
      const email = document.getElementById('email').value.trim();
      const tanggal = document.getElementById('tanggal').value;
      const jumlah = document.getElementById('jumlah').value;

      if (nama === '' || email === '' || tanggal === '' || jumlah === '') {
        alert('Harap lengkapi semua kolom sebelum mengirim.');
        return;
      }

      if (jumlah <= 0) {
        alert('Jumlah orang harus lebih dari 0.');
        return;
      }

      alert('Terima kasih, data kunjungan Anda berhasil dikirim!');
      visitForm.reset();
    });
  }

});
