# Generator MP3 Bahasa Arab

Folder ini digabung langsung ke proyek Arabic Learning City. Generator membuat audio MP3 berbahasa Arab menggunakan `gTTS` (Google Translate TTS). Ini **bukan** Google Cloud Text-to-Speech dan tidak mendukung pemilihan suara Arthur, Dylan, Zelda, atau Brielle.

## Cara termudah di Windows

1. Pastikan Python 3 sudah terpasang dan komputer terhubung ke internet.
2. Dari folder utama proyek, klik dua kali `JALANKAN_GENERATOR_AUDIO.bat`.
3. Hasil MP3 muncul di `public/audio/generated/`.
4. Buka `http://localhost:5173/audio-demo.html` untuk mencoba tiga sampel.

## Menambah teks

Edit `tools/audio-generator/audio_texts.json`. Setiap item berisi:

- `filename`: nama file MP3.
- `text`: teks Arab yang akan dibacakan (gunakan harakat bila tersedia).
- `slow`: `true` untuk permintaan suara lambat atau `false` untuk normal.

Jalankan ulang generator. File yang sudah ada tidak ditimpa kecuali memakai argumen `--force`.

## Menjalankan manual

```bash
python -m pip install -r tools/audio-generator/requirements.txt
python tools/audio-generator/generate_mp3.py
```

## Menghubungkan MP3 ke materi

File lokal di `public/` dapat diakses dengan path `/audio/generated/nama-file.mp3`. Isi properti `audioSmpUrl` atau `audioSmaUrl` pada data materi dengan path yang sesuai, atau unggah MP3 ke bucket Supabase `arabic-audio` lalu simpan URL-nya pada kolom audio materi. Pastikan teks audio sesuai dengan bacaan/soal yang ditampilkan.

**Catatan akademik:** suara TTS perlu ditinjau guru Bahasa Arab untuk ketepatan pelafalan dan intonasi sebelum digunakan sebagai bahan evaluasi menyimak.
