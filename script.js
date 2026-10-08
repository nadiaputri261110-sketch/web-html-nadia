// 1. Memilih elemen
const judul = document.getElementById("judul");
const sapaan = document.getElementById("sapaan");
const kelas =  document.getElementById("kelas");
 
// 2. Melihat elemen di Console
console.log(judul);
console.log(sapaan);
console.log(kelas);
 
// 3. Mengubah isi teks
judul.textContent = "Judul Sudah Diubah!";
 
// 4. Mengubah warna
judul.style.color = "crimson";
 
// 5. Mengubah isi dengan tag HTML
sapaan.innerHTML = "Halo, saya sedang <b>belajar DOM</b>!";

// 6. Mengubah isi kelas
kelas.textContent = "X RPL 5";

// 7. Mengubah ukuran huruf
kelas.style.fontSize = "30px";
 
// 8. Mencoba id yang tidak ada
const hantu = document.getElementById("tidakada");