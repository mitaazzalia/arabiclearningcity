# Generator MP3 untuk seluruh materi dan soal istima'

Generator ini membuat file MP3 Bahasa Arab untuk **semua lokasi pembelajaran pada jenjang SMP dan SMA**. Satu file audio per lokasi/jenjang dipakai bersama oleh:

- Tab Istimā' pada materi.
- Semua pertanyaan kuis dengan sumber `istima` pada lokasi dan jenjang yang sama.

Dengan demikian, soal menyimak tidak lagi memiliki `audioUrl` kosong. File yang dibuat disimpan di `public/audio/generated/` dan dapat langsung dibaca oleh Vite maupun deployment statis setelah file MP3 ikut diunggah ke GitHub.

## Cara paling mudah di Windows

1. Pastikan Node.js, Python 3, dan koneksi internet tersedia.
2. Dari folder utama proyek, jalankan `npm install` satu kali.
3. Klik dua kali `JALANKAN_GENERATOR_AUDIO.bat`.
4. Generator menyusun manifest berdasarkan data aktual 37 lokasi dan dua jenjang, kemudian membuat 74 file MP3.
5. Jalankan ulang website dan buka satu materi. Coba tab Istimā' serta soal berlabel Istimā'.

## Menjalankan manual

```bash
npm install
npm run audio:manifest
python -m pip install -r tools/audio-generator/requirements.txt
python tools/audio-generator/generate_mp3.py
```

Untuk membuat ulang semua MP3:

```bash
python tools/audio-generator/generate_mp3.py --force
```

## Catatan penting

- Menggunakan `gTTS` melalui koneksi internet. Ini bukan Google Cloud TTS.
- Hasil menggunakan satu suara Arab yang disediakan layanan; tidak mendukung pemilihan karakter Arthur, Dylan, Zelda, atau Brielle.
- Generator menyimpan suara pada kecepatan normal. Tombol 0,75× pada website memperlambat pemutaran.
- MP3 tidak disertakan di ZIP karena harus dibuat melalui koneksi internet pada komputer pengguna.
- Setelah MP3 dibuat, folder `public/audio/generated/` harus ikut diunggah ke GitHub agar Vercel dapat menyajikannya. Jangan mengecualikan MP3 dari commit/deployment.
- Untuk soal istimā', audio yang diputar adalah narasi/dialog audio milik materi yang sama. Guru perlu meninjau kesesuaian audio dan butir soal sebelum dipakai sebagai penilaian resmi.
