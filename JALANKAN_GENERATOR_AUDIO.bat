@echo off
setlocal
cd /d "%~dp0"
echo ==============================================
echo Arabic Learning City - Generator MP3 Bahasa Arab
echo ==============================================
where py >nul 2>nul
if %errorlevel%==0 (
  py -3 -m pip install -r tools\audio-generator\requirements.txt
  if errorlevel 1 goto failed
  py -3 tools\audio-generator\generate_mp3.py
  if errorlevel 1 goto failed
) else (
  python -m pip install -r tools\audio-generator\requirements.txt
  if errorlevel 1 goto failed
  python tools\audio-generator\generate_mp3.py
  if errorlevel 1 goto failed
)
echo.
echo Selesai. Periksa folder public\audio\generated.
pause
exit /b 0
:failed
echo.
echo Generator gagal. Periksa koneksi internet dan instalasi Python.
pause
exit /b 1
