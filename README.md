# Arabic Learning City v0.4.0

Prototipe website pembelajaran Bahasa Arab dengan satu peta kota ilustratif yang dapat dijelajahi. Gaya visual menggunakan ilustrasi vektor orisinal yang digambar langsung melalui SVG dan CSS: bangunan dengan bentuk berbeda, jalan, marka penyeberangan, kendaraan, pepohonan, dan aktivitas warga. Peta tidak memakai gambar AI generatif sebagai latar utama.

## Penyempurnaan v0.4.0

### Visual dan navigasi
- Memperhalus bentuk bangunan utama agar sekolah, terminal transportasi, rumah sakit, rumah, pasar, dan taman memiliki siluet berbeda.
- Menambahkan halte visual kota, bus, mobil, pepohonan, zebra crossing, dan elemen jalan.
- Memperbaiki animasi kamera: saat bangunan dipilih, peta melakukan zoom sekaligus menggeser fokus ke bangunan tersebut sebelum membuka kawasan.
- Mengganti ilustrasi kawasan yang sebelumnya memakai satu bangunan generik menjadi ilustrasi SVG berbeda untuk 21 jenis area, seperti kelas, kantin, perpustakaan, masjid, bandara, stasiun, terminal, rumah sakit, apotek, pasar, restoran, bioskop, dan pantai.
- Menambahkan transisi masuk kawasan dan memperhalus tampilan kartu pada layar kecil.
- Menyimpan XP dan progres lokal secara terpisah; nilai XP tidak lagi dimulai dari angka contoh.

### Materi membaca
- Memperpanjang bacaan untuk 20 lokasi dengan paragraf tambahan yang relevan terhadap konteks masing-masing.
- Rentang bacaan saat ini: SMP/MTs sekitar 95–117 kata Arab; SMA/MA sekitar 140–180 kata Arab.
- Teks ditata menjadi beberapa paragraf, dilengkapi terjemahan, kosakata, dan panduan analisis: gagasan pokok, informasi rinci, urutan peristiwa, dan simpulan.
- Bacaan tambahan merupakan materi orisinal yang dikembangkan berdasarkan tema dan capaian pembelajaran buku Bahasa Arab, bukan salinan utuh buku teks.

### Audio dan evaluasi
- Audio narasi kini menggunakan keseluruhan teks bacaan agar materi qirā'ah dan istimā' selaras.
- Pemutar MP3 memiliki kontrol kecepatan, volume, posisi audio, jeda, dan pengulangan.
- Jika URL MP3 tidak tersedia, aplikasi hanya menggunakan pratinjau Web Speech API bila perangkat menyediakan suara Bahasa Arab. Jika tidak, tombol putar dinonaktifkan dan alasan ditampilkan secara jelas.
- Setiap soal istimā' di dalam kuis kini menampilkan pemutar audio, bukan hanya label “Istimā'”.
- Pilihan jawaban diacak setiap sesi sehingga posisi jawaban benar tidak selalu sama.
- Setiap lokasi dan jenjang memiliki tiga bank soal: mudah, menengah, dan sulit; masing-masing 10 butir. Lima butir dipilih secara acak untuk setiap percobaan.

## Struktur pembelajaran

1. **Peta kota:** enam kawasan utama dapat dipilih dan didekati melalui animasi zoom.
2. **Peta kawasan:** siswa memilih fasilitas atau area di dalam kawasan.
3. **Materi:** qirā'ah, istimā', mufradāt, dan evaluasi.
4. **Evaluasi bertingkat:** mudah → menengah → sulit. Nilai minimal 75 membuka tahap berikutnya.
5. **Progres:** XP, tahap yang lulus, dan materi tuntas disimpan di browser melalui `localStorage`.

## Teknologi

- React + Vite + TypeScript
- Tailwind CSS v4 (plugin Vite)
- SVG dan CSS untuk ilustrasi kota, adegan kawasan, serta animasi zoom
- Framer Motion untuk transisi dan interaksi kartu
- Three.js tetap tercantum sebagai dependensi untuk kemungkinan pengembangan 2.5D; peta utama saat ini menggunakan SVG agar ringan dan konsisten
- Supabase untuk sumber data materi dan fondasi autentikasi/progres pada tahap integrasi berikutnya

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

## Audio Bahasa Arab: hal yang perlu diketahui

File MP3 penutur Bahasa Arab **belum disertakan** dalam arsip. Web Speech API hanya menjadi pratinjau dan ketersediaannya bergantung pada suara yang terpasang di perangkat. Untuk penggunaan pembelajaran yang konsisten, gunakan rekaman MP3 yang telah ditinjau pelafalannya.

Skema Supabase sudah menyiapkan bucket publik `arabic-audio`. Alur pemasangan rekaman:

1. Buat rekaman MP3 untuk setiap kombinasi dari 20 lokasi dan 2 jenjang.
2. Gunakan `supabase/audio-manifest.csv` sebagai daftar 40 rekaman yang perlu disiapkan, lalu unggah ke bucket `arabic-audio`, misalnya `school/smp.mp3` dan `school/sma.mp3`.
3. Salin URL publik setiap file.
4. Isi kolom `audio_smp_url` dan `audio_sma_url` pada baris materi terkait di tabel `public.lessons`.
5. Pastikan URL dapat dibuka dan audio terdengar pada desktop serta ponsel.

Contoh pola lokasi file (bukan URL aktif):

```text
arabic-audio/
  school/smp.mp3
  school/sma.mp3
  classroom/smp.mp3
  classroom/sma.mp3
  ...
```

Bacaan dan narasi audio menggunakan teks yang sama pada versi ini. Transkrip audio disembunyikan secara default agar siswa dapat berlatih menyimak terlebih dahulu.

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
│   │   └── QuizPanel.tsx
│   ├── data/
│   │   ├── cityData.ts
│   │   ├── lessonEnrichment.ts
│   │   ├── lessons.ts
│   │   ├── moreCityLessons.ts
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
- Build produksi belum dapat diverifikasi di lingkungan penyusunan ini karena akses registry npm mengalami timeout. Pemeriksaan sintaks TypeScript/TSX dan validasi data dilakukan terpisah.
