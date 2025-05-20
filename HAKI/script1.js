document.addEventListener('DOMContentLoaded', function() { // Agar javascript bisa jalan setelah HTML loading
	const hakiButton = document.querySelector('.nav-buttons button:nth-child(1)');

	const lisensiITButton = document.querySelector('.nav-buttons button:nth-child(2)');

	const lisensiKomputerButton =  document.querySelector('.nav-buttons button:nth-child(3)');

	const hakiContent = document.getElementById('haki-content'); // Referensi ke konten HAKI
	const lisensiITcontent = document.getElementById('lisensi-it-content');
	const lisensiKomputerContent = document.getElementById('lisensi-komputer-content') // const button, adalah button, yang referensinya button yang ada di html

	showHAKI(); // menampilkan konten, juga menyembunyikan yang lain
		function showHAKI() {
			hakiContent.style.display = 'block'; // block = menampilkan
			lisensiITcontent.style.display = 'none'; // none = sembunyikan
			lisensiKomputerContent.style.display = 'none'; // none = sembunyikan 
		}


				hakiButton.addEventListener('click', showHAKI); 
				

		lisensiITButton.addEventListener('click', function() {
			hakiContent.style.display = 'none';
			lisensiITcontent.style.display = 'block';
			lisensiKomputerContent.style.display = 'none';
		});

		lisensiKomputerButton.addEventListener('click', function() {
			hakiContent.style.display = 'none';
			lisensiITcontent.style.display = 'none';
			lisensiKomputerContent.style.display = 'block';
		});
});

const toggle = document.getElementById("toggle"); // untuk pindah ke dark mode

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

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
