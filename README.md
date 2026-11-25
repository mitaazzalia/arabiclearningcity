# Arabic Learning City v0.6.0

Prototipe website pembelajaran Bahasa Arab dengan peta kota ilustratif yang dapat dijelajahi. Siswa memilih kawasan, masuk ke lokasi, membaca teks Arab, menyimak narasi, mempelajari mufradat, dan mengerjakan evaluasi bertingkat.

## Penyempurnaan v0.5.0 dan perbaikan audio v0.6.0

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

## Generator MP3 Bahasa Arab untuk materi dan soal Istimā’

Versi 0.6.0 memperbaiki hubungan antara pemutar audio, materi Istimā’, dan soal kuis berbasis audio. Sebelumnya, soal `istima` hanya membawa teks audio; `audioUrl` sering kosong. Selain itu, generator lama hanya membuat tiga MP3 contoh yang tidak digunakan oleh URL materi.

Sekarang:
- Setiap materi SMP dan SMA memperoleh URL MP3 lokal yang konsisten.
- Semua soal dengan sumber `istima` otomatis memakai audio lokasi dan jenjang yang sama.
- Generator membaca data aktual dari 37 lokasi dan membuat manifest **74 MP3** (37 lokasi × 2 jenjang).
- Audio yang sama dipakai bersama oleh tab Istimā’ dan soal-soal menyimak pada lokasi tersebut, sehingga tidak membuat salinan MP3 untuk setiap soal.
- Jika file MP3 belum dibuat, pemutar memberi petunjuk menjalankan generator, bukan hanya memberi peringatan bahwa perangkat tidak memiliki suara Arab.

### Cara paling mudah di Windows

1. Pastikan Node.js, Python 3, dan koneksi internet tersedia.
2. Dari folder utama proyek, jalankan `npm install` satu kali.
3. Klik dua kali `JALANKAN_GENERATOR_AUDIO.bat`.
4. Tunggu generator menyusun manifest dan membuat 74 MP3. Proses pertama dapat memerlukan beberapa menit.
5. Jalankan atau refresh website. Coba tab Istimā’ dan soal yang berlabel Istimā’.

MP3 disimpan di `public/audio/generated/`. Setelah file berhasil dibuat, sertakan folder tersebut ketika mengunggah proyek ke GitHub agar Vercel juga dapat menyajikan audio.

### Menjalankan manual

```bash
npm install
npm run audio:manifest
python -m pip install -r tools/audio-generator/requirements.txt
python tools/audio-generator/generate_mp3.py
```

Untuk membuat ulang seluruh audio:

```bash
python tools/audio-generator/generate_mp3.py --force
```

Generator menggunakan `gTTS` melalui layanan Google Translate TTS. Ini **bukan Google Cloud TTS** dan hanya menggunakan satu suara Arab otomatis; tidak dapat memilih Arthur, Dylan, Zelda, atau Brielle. Audio disimpan pada kecepatan normal; tombol 0,75× memperlambat pemutaran di browser. Guru Bahasa Arab tetap perlu meninjau pelafalan dan kesesuaian audio sebelum digunakan sebagai penilaian.

**Penting:** ZIP berisi generator dan manifest teks, bukan 74 MP3 yang sudah jadi. File MP3 baru terbentuk setelah generator dijalankan pada komputer yang terhubung internet. Jika sebagian gagal karena koneksi, jalankan kembali; file yang sudah ada akan dilewati.

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
│   │   ├── audioAssets.ts
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
