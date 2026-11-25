# Arabic Learning City v0.5.0

Prototipe website pembelajaran Bahasa Arab dengan peta kota ilustratif yang dapat dijelajahi. Siswa memilih kawasan, masuk ke lokasi, membaca teks Arab, menyimak narasi, mempelajari mufradat, dan mengerjakan evaluasi bertingkat.

## Penyempurnaan v0.5.0

### Perluasan kawasan rumah
- Kawasan permukiman kini memiliki 12 tempat belajar: rumah keluarga, ruang keluarga, dapur, kamar tidur, kamar mandi, ruang makan, ruang belajar, garasi, taman rumah, ruang cuci, balkon, dan lorong rumah.
- Sembilan lokasi tambahan memiliki bacaan SMP/MTs dan SMA/MA, teks audio, kosakata, dan evaluasi.

### Perluasan kawasan transportasi
- Kawasan transportasi kini memiliki 11 tempat belajar: bandara, stasiun kereta, terminal bus, pangkalan taksi, halte bus, pelabuhan, tempat parkir, SPBU, jalan dan jembatan, bengkel kendaraan, serta stasiun sepeda.
- Delapan lokasi tambahan memperkaya konteks perjalanan, kendaraan, fasilitas transportasi, dan keselamatan di jalan.

### Kamus Mufradat
- Menambahkan pusat kamus yang dapat dicari dan difilter berdasarkan tema serta jenis kata.
- Memuat 633 entri: 281 isim dari bagian kosakata pada halaman 5–19, 289 fi'il dari halaman 20–46, dan 63 kosakata pengayaan untuk rumah serta fasilitas transportasi.
- Entri fi'il menampilkan bentuk māḍī, muḍāri', dan amr bila tersedia pada sumber.
- Setiap entri kamus sumber menampilkan nomor halaman. Kosakata pengayaan diberi label tersendiri agar tidak tercampur dengan isi buku.
- Ejaan dan beberapa padanan terjemahan dirapikan untuk konsistensi. Butir yang memerlukan verifikasi pengajar tetap perlu ditinjau sebelum digunakan sebagai bahan penilaian resmi.

### Visual
- Mengganti aksen pastel yang terlalu lembut dengan palet lebih tegas: hijau, biru, merah muda, jingga, ungu, dan kuning yang lebih jenuh.
- Memperkuat kontras teks, tombol, kartu kawasan, peta, dan indikator progres.
- Menambahkan ilustrasi khusus untuk kamar tidur, kamar mandi, ruang makan, ruang belajar, garasi, taman, ruang cuci, balkon, lorong, pangkalan taksi, halte, pelabuhan, parkir, SPBU, jembatan, bengkel, dan stasiun sepeda.

## Struktur pembelajaran

1. **Peta kota:** enam kawasan utama dapat dipilih dan didekati melalui animasi zoom.
2. **Peta kawasan:** 37 lokasi belajar tersedia di dalam enam kawasan.
3. **Materi:** qirā'ah, istimā', mufradāt, dan evaluasi.
4. **Kamus Mufradat:** pencarian kosakata Arab/Indonesia, filter isim/fi'il, dan filter kategori tema.
5. **Evaluasi bertingkat:** mudah → menengah → sulit. Nilai minimal 75 membuka tahap berikutnya.
6. **Progres:** XP, tahap yang lulus, dan materi tuntas disimpan di browser melalui `localStorage`.

## Teknologi

- React 19 + Vite + TypeScript
- Tailwind CSS v4 (plugin Vite)
- SVG dan CSS untuk ilustrasi kota, adegan kawasan, serta animasi zoom
- Framer Motion untuk transisi dan interaksi kartu
- Three.js tercantum sebagai dependensi untuk kemungkinan pengembangan 2.5D; peta utama saat ini menggunakan SVG.
- Supabase sebagai fondasi sumber data dan integrasi berikutnya.

## Menjalankan aplikasi

Persyaratan: Node.js 20.19+ atau 22.12+ dan npm 10+.

```bash
npm install
npm run dev
```

Buka alamat yang ditampilkan Vite, biasanya `http://localhost:5173`.

Pemeriksaan lokal:

```bash
npm run typecheck
npm run build
npm run preview
```

## Generator MP3 Bahasa Arab (sudah digabung)

Proyek ini sekarang menyertakan generator audio sederhana di `tools/audio-generator/`. Generator menggunakan `gTTS` melalui layanan Google Translate TTS (bukan Google Cloud TTS), dengan satu suara Arab otomatis. Generator tidak menyediakan pilihan suara karakter Arthur, Dylan, Zelda, atau Brielle.

**Cara paling mudah di Windows:** pastikan Python 3 dan koneksi internet tersedia, lalu klik dua kali `JALANKAN_GENERATOR_AUDIO.bat` dari folder utama proyek. MP3 akan dibuat ke `public/audio/generated/`. Buka `http://localhost:5173/audio-demo.html` untuk mencoba tiga sampel.

Untuk mengedit teks yang dibuat, ubah `tools/audio-generator/audio_texts.json`. Lihat `tools/audio-generator/README.md` untuk petunjuk lengkap. File MP3 tidak disertakan sebelum generator dijalankan; arsip ini berisi skrip pembuatnya.

## Audio Bahasa Arab: hal yang perlu diketahui

File MP3 penutur Bahasa Arab **belum disertakan** dalam arsip. Web Speech API hanya menjadi pratinjau dan ketersediaannya bergantung pada suara yang terpasang di perangkat. Untuk penggunaan pembelajaran yang konsisten, gunakan rekaman MP3 yang telah ditinjau pelafalannya.

Skema Supabase sudah menyiapkan bucket publik `arabic-audio`. Alur pemasangan rekaman:

1. Buat rekaman MP3 untuk setiap kombinasi lokasi dan jenjang.
2. Gunakan `supabase/audio-manifest.csv` sebagai daftar rekaman yang perlu disiapkan, lalu unggah ke bucket `arabic-audio`.
3. Salin URL publik setiap file.
4. Isi kolom `audio_smp_url` dan `audio_sma_url` pada baris materi terkait di tabel `public.lessons`.
5. Pastikan URL dapat dibuka dan audio terdengar pada desktop serta ponsel.

## Konfigurasi Supabase

1. Buat proyek Supabase.
2. Salin `.env.example` menjadi `.env.local`.
3. Isi `VITE_SUPABASE_URL` dan `VITE_SUPABASE_ANON_KEY`.
4. Jalankan `supabase/schema.sql` melalui Supabase Dashboard → SQL Editor.
5. Terbitkan data materi pada tabel `public.lessons` dan isi URL MP3 bila rekaman telah tersedia.

Gunakan hanya anon/publishable key pada frontend. Jangan memasukkan `service_role` key ke file `.env` frontend atau repositori publik.

## Struktur folder utama

```text
arabic-learning-universe/
├── src/
│   ├── components/
│   │   ├── AudioPlayer.tsx
│   │   ├── CityMap.tsx
│   │   ├── DistrictView.tsx
│   │   ├── LessonModal.tsx
│   │   ├── MufradatView.tsx
│   │   └── QuizPanel.tsx
│   ├── data/
│   │   ├── cityData.ts
│   │   ├── expandedCityLessons.ts
│   │   ├── lessonEnrichment.ts
│   │   ├── lessons.ts
│   │   ├── moreCityLessons.ts
│   │   ├── mufradat.ts
│   │   ├── questionBanks.ts
│   │   └── readingExtensions.ts
│   ├── lib/
│   │   ├── lessonRepository.ts
│   │   └── supabase.ts
│   ├── App.tsx
│   ├── city.css
│   ├── index.css
│   ├── lesson-components.css
│   └── types.ts
├── supabase/
│   ├── schema.sql
│   └── audio-manifest.csv
├── .env.example
├── index.html
└── package.json
```

## Batasan yang masih terbuka

- Autentikasi siswa dan guru serta sinkronisasi progres lintas perangkat belum diaktifkan; progres versi ini masih lokal di browser.
- Rekaman MP3 penutur asli belum disertakan. Audio yang dapat terdengar melalui Web Speech API bergantung pada suara Bahasa Arab di perangkat.
- Sebelum dipakai sebagai penilaian resmi, guru Bahasa Arab perlu meninjau butir soal dari sisi ketepatan bahasa, kesesuaian dengan teks/audio, dan tingkat kesulitan. Bank soal lokal dibangkitkan dari konten materi dan pertanyaan dasar per lokasi.
- Build produksi perlu diverifikasi kembali pada lingkungan yang dapat mengakses registry npm. Pada proses sebelumnya, akses registry mengalami timeout; pemeriksaan sintaks dan validasi data tidak menggantikan build produksi penuh.
