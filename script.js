// Memunculkan pesan sambutan saat pertama kali halaman diakses
alert("Selamat datang di Website Portfolio Nazra Aulia!");

// Menunggu seluruh elemen halaman selesai dimuat sempurna
window.addEventListener("load", () => {
    // Membuka transisi efek muncul halus pada teks dan foto utama
    document.querySelector(".home-text").classList.add("show");
    document.querySelector(".home-img").classList.add("show");
    
    // Memulai simulasi efek ketikan otomatis setelah elemen muncul
    setTimeout(typeEffect, 400);
});

// Konfigurasi teks simulasi ketikan otomatis
const text = "Selamat Datang di Website Saya"; 
const typingElement = document.getElementById("typing");
let index = 0;

function typeEffect() {
    if (index < text.length) {
        typingElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 90); // Mengatur kecepatan ketikan per huruf (milidetik)
    }
}

