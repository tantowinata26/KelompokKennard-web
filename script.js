function closePopup() { // Fungsi untuk menutup popup
  document.getElementById("popup").style.display = "none"; // Mengatur tampilan pop up menjadi tidak terlihat
}

window.onload = function () { // Menampilkan popup saat halaman dimuat
  document.getElementById("popup").style.display = "flex"; // Mengatur tampilan pop up menjadi terlihat 
};


const swalWithBootstrapButtons = Swal.mixin({ 
  customClass: {
    confirmButton: "custom-confirm", // Membuat class 
  },
  buttonsStyling: false  // Menonaktifkan styling tombol default SweetAlert2
});


document.getElementById("aboutBtn").addEventListener("click", () => {  // Menambahkan event listener untuk tombol "About"
  swalWithBootstrapButtons.fire({    // Menampilkan SweetAlert2 dengan pesan dan konfirmasi
    title: "Menuju halaman About",  // Judul
    text: "Anda akan diarahkan ke halaman About", // Isi teks 
    icon: "warning", // Ikon
    confirmButtonText: "Lanjutkan", // Teks tombol 
    backdrop: false //Menghapus overlay bawaan SweetAlert2
  }).then(() => {
    window.location.href = "ABOUT/index3.html"; // Mengarahkan pengguna ke halaman html lain
  });
});

document.getElementById("photoboothBtn").addEventListener("click", () => {  // Menambahkan event listener untuk tombol "Photobooth"
  swalWithBootstrapButtons.fire({  // Menampilkan SweetAlert2 dengan pesan dan konfirmasi
    title: "Menuju halaman Photobooth",  // Judul
    text: "Anda akan diarahkan ke halaman Photobooth",   // Isi teks 
    icon: "warning",  // Ikon
    confirmButtonText: "Lanjutkan", // Teks tombol 
    backdrop: false //Menghapus overlay bawaan SweetAlert2
  }).then(() => {
    window.location.href = "PHOTOBOOTH/index2.html"; // Mengarahkan pengguna ke halaman html lain
  });
}); 

document.getElementById("hakiBtn").addEventListener("click", () => {  // Menambahkan event listener untuk tombol "HAKI"
  swalWithBootstrapButtons.fire({  // Menampilkan SweetAlert2 dengan pesan dan konfirmasi
    title: "Menuju halaman HAKI",    // Judul
    text: "Anda akan diarahkan ke halaman HAKI",  // Isi teks 
    icon: "warning",  // Ikon
    confirmButtonText: "Lanjutkan",  // Teks tombol 
    backdrop: false //Menghapus overlay bawaan SweetAlert2
  }).then(() => {
    window.location.href = "HAKI/index1.html"; // Mengarahkan pengguna ke halaman html lain
  });
});


const toggle = document.getElementById("toggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

// Simpan preferensi ke localStorage
if (document.body.classList.contains("dark")) {
  localStorage.setItem("theme", "dark");
} else {
  localStorage.setItem("theme", "light");
}

  // Simpan preferensi ke localStorage
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

// Terapkan preferensi saat halaman dimuat
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
  }
});
