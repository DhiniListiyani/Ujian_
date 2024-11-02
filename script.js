// File: script.js

// Menambahkan animasi saat mengklik tombol di sidebar
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
        link.classList.add('active');
    });
});
