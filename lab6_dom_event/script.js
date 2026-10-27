
/* LATIHAN 1 - Mengubah teks dengan DOM */
const judul = document.getElementById("judul");
const pesan = document.getElementById("pesan");

judul.textContent = "Belajar JavaScript DOM";
pesan.textContent = "Konten berhasil diubah oleh JavaScript.";


/* LATIHAN 2 - Event Click */
const tombol = document.getElementById("tombolAksi");

tombol.addEventListener("click", function () {
    pesan.textContent =
        "Tombol diklik pada " + new Date().toLocaleTimeString();
});


/* LATIHAN 3 - Mengubah gaya teks */
const tombolGaya = document.getElementById("tombolGaya");
const teksGaya = document.getElementById("teksGaya");

tombolGaya.addEventListener("click", function () {
    teksGaya.classList.toggle("highlight");
    teksGaya.classList.toggle("teks-besar");
});


/* LATIHAN 4 - Penghitung karakter */
const namaInput = document.getElementById("namaInput");
const jumlahKarakter = document.getElementById("jumlahKarakter");

namaInput.addEventListener("input", function () {
    jumlahKarakter.textContent = namaInput.value.length;
});


/* LATIHAN 5 - Validasi form pendaftaran */
const form = document.getElementById("formPendaftaran");
const pesanForm = document.getElementById("pesanForm");
const nama = document.getElementById("nama");
const email = document.getElementById("email");
const usia = document.getElementById("usia");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const namaValue = nama.value.trim();
    const emailValue = email.value.trim();
    const usiaInput = usia.value;
    const usiaValue = Number(usiaInput);
    const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (namaValue === "") {
        pesanForm.textContent = "Nama wajib diisi.";
    } else if (!polaEmail.test(emailValue)) {
        pesanForm.textContent = "Masukkan email yang valid.";
    } else if (
        usiaInput === "" ||
        !Number.isInteger(usiaValue) ||
        usiaValue < 17 ||
        usiaValue > 100
    ) {
        pesanForm.textContent =
            "Usia harus berupa bilangan bulat 17–100.";
    } else {
        pesanForm.textContent =
            "Validasi berhasil. Form siap diproses.";
        form.reset();
    }
});


/* LATIHAN 6 - Daftar Tugas */
const inputTugas = document.getElementById("inputTugas");
const tambahTugas = document.getElementById("tambahTugas");
const daftarTugas = document.getElementById("daftarTugas");
const pesanTugas = document.getElementById("pesanTugas");

tambahTugas.addEventListener("click", function () {
    const teks = inputTugas.value.trim();

    if (teks === "") {
        pesanTugas.textContent = "Tulis tugas terlebih dahulu.";
        return;
    }

    const item = document.createElement("li");
    const label = document.createElement("span");
    const selesai = document.createElement("button");
    const hapus = document.createElement("button");

    label.textContent = teks + " ";

    selesai.type = "button";
    selesai.textContent = "Tandai selesai";

    hapus.type = "button";
    hapus.textContent = "Hapus";

    // Tombol tandai selesai
    selesai.addEventListener("click", function () {
        item.classList.toggle("selesai");

        selesai.textContent = item.classList.contains("selesai")
            ? "Batalkan selesai"
            : "Tandai selesai";
    });

    // Tombol hapus tugas
    hapus.addEventListener("click", function () {
        item.remove();
        pesanTugas.textContent = "Tugas dihapus.";
    });

    item.append(label, selesai, hapus);
    daftarTugas.appendChild(item);

    inputTugas.value = "";
    pesanTugas.textContent = "Tugas ditambahkan.";
    inputTugas.focus();
});


/* MINI PROJECT - Form Pendaftaran Workshop */
const formWorkshop = document.getElementById("formWorkshop");
const namaWorkshop = document.getElementById("namaWorkshop");
const emailWorkshop = document.getElementById("emailWorkshop");
const sesiWorkshop = document.getElementById("sesiWorkshop");
const hitungNama = document.getElementById("hitungNama");
const pesanWorkshop = document.getElementById("pesanWorkshop");
const ringkasanWorkshop = document.getElementById("ringkasanWorkshop");

const polaEmailWorkshop = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Menghitung karakter nama secara langsung
namaWorkshop.addEventListener("input", function () {
    hitungNama.textContent =
        namaWorkshop.value.length + " karakter";
});

// Menampilkan sesi yang dipilih
sesiWorkshop.addEventListener("change", function () {
    if (sesiWorkshop.value === "") {
        ringkasanWorkshop.textContent = "";
    } else {
        ringkasanWorkshop.textContent =
            "Sesi yang dipilih: " + sesiWorkshop.value;
    }
});

// Validasi pendaftaran workshop
formWorkshop.addEventListener("submit", function (event) {
    event.preventDefault();

    const namaValue = namaWorkshop.value.trim();
    const emailValue = emailWorkshop.value.trim();
    const sesiValue = sesiWorkshop.value;

    if (namaValue.length < 3) {
        pesanWorkshop.textContent =
            "Nama harus diisi minimal 3 karakter.";
    } else if (!polaEmailWorkshop.test(emailValue)) {
        pesanWorkshop.textContent =
            "Masukkan alamat email yang valid.";
    } else if (sesiValue === "") {
        pesanWorkshop.textContent =
            "Silakan pilih sesi workshop terlebih dahulu.";
    } else {
        pesanWorkshop.textContent =
            "Pendaftaran workshop berhasil!";

        ringkasanWorkshop.textContent =
            "Nama: " + namaValue +
            " | Email: " + emailValue +
            " | Sesi: " + sesiValue;
    }
});

// Tombol reset workshop
formWorkshop.addEventListener("reset", function () {
    pesanWorkshop.textContent = "";
    ringkasanWorkshop.textContent = "";
    hitungNama.textContent = "0 karakter";
});


const paragrafEksperimen = document.getElementById("paragrafEksperimen");
const tombolParagraf = document.getElementById("tombolParagraf");

tombolParagraf.addEventListener("click", function () {
    paragrafEksperimen.classList.toggle("sembunyi");

    if (paragrafEksperimen.classList.contains("sembunyi")) {
        tombolParagraf.textContent = "Tampilkan Paragraf";
    } else {
        tombolParagraf.textContent = "Sembunyikan Paragraf";
    }
});
