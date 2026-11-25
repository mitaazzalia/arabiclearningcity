@echo off
setlocal
cd /d "%~dp0"
echo =====================================================
echo Arabic Learning City - Buat MP3 seluruh materi istima'
echo =====================================================

where node >nul 2>nul
if errorlevel 1 (
  echo Node.js belum ditemukan. Instal Node.js terlebih dahulu.
  goto failed
)

node -e "require('typescript')" >nul 2>nul
if errorlevel 1 (
  echo Dependensi proyek belum dipasang atau TypeScript belum tersedia.
  echo Jalankan npm install dari folder utama proyek, lalu ulangi.
  goto failed
)

where py >nul 2>nul
if errorlevel 0 (
  py -3 -m pip install -r tools\audio-generator\requirements.txt
  if errorlevel 1 goto failed
) else (
  where python >nul 2>nul
  if errorlevel 1 (
    echo Python 3 belum ditemukan. Instal Python terlebih dahulu.
    goto failed
  )
  python -m pip install -r tools\audio-generator\requirements.txt
  if errorlevel 1 goto failed
)

echo.
echo [1/2] Menyusun daftar audio dari semua materi dan soal...
node tools\audio-generator\build_audio_manifest.cjs
if errorlevel 1 goto failed

echo.
echo [2/2] Membuat file MP3 Bahasa Arab...
where py >nul 2>nul
if errorlevel 0 (
  py -3 tools\audio-generator\generate_mp3.py
  if errorlevel 1 goto failed
) else (
  python tools\audio-generator\generate_mp3.py
  if errorlevel 1 goto failed
)

echo.
echo Selesai. Audio tersimpan di public\audio\generated.
echo Refresh website untuk mencoba materi dan soal istima'.
pause
exit /b 0

:failed
echo.
echo Generator belum selesai. Periksa pesan di atas dan koneksi internet.
pause
exit /b 1
