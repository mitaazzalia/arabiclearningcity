#!/usr/bin/env python3
"""Generate MP3 files for every lesson's istima' track using gTTS.

This uses the online Google Translate TTS endpoint through gTTS. It is not
Google Cloud TTS and it does not provide selectable character voices.
"""
from __future__ import annotations

import argparse
import json
import re
import sys
import time
from pathlib import Path
from gtts import gTTS

PROJECT_ROOT = Path(__file__).resolve().parents[2]
CONFIG = Path(__file__).with_name("audio_texts.json")
OUTPUT_DIR = PROJECT_ROOT / "public" / "audio" / "generated"


def safe_filename(value: str) -> str:
    name = Path(value).name
    if not name.lower().endswith(".mp3"):
        name += ".mp3"
    if not re.fullmatch(r"[A-Za-z0-9._-]+\.mp3", name):
        raise ValueError(f"Nama file tidak valid: {value!r}")
    return name


def main() -> int:
    parser = argparse.ArgumentParser(description="Buat MP3 untuk seluruh materi istima' Arabic Learning City")
    parser.add_argument("--force", action="store_true", help="Timpa MP3 yang sudah ada")
    args = parser.parse_args()

    if not CONFIG.exists():
        print("Manifest audio belum dibuat. Jalankan build_audio_manifest.cjs terlebih dahulu.", file=sys.stderr)
        return 1

    items = json.loads(CONFIG.read_text(encoding="utf-8"))
    if not isinstance(items, list) or not items:
        print("audio_texts.json harus berisi daftar audio yang tidak kosong.", file=sys.stderr)
        return 1

    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    generated = 0
    skipped = 0
    failed = 0

    for index, item in enumerate(items, start=1):
        filename = safe_filename(item["filename"])
        text = str(item.get("text", "")).strip()
        if not text:
            print(f"[{index}/{len(items)}] Lewati {filename}: teks kosong.")
            skipped += 1
            continue

        target = OUTPUT_DIR / filename
        if target.exists() and target.stat().st_size > 0 and not args.force:
            print(f"[{index}/{len(items)}] Sudah tersedia: {filename}")
            skipped += 1
            continue

        print(f"[{index}/{len(items)}] Membuat {filename} ...")
        last_error = None
        for retry in range(3):
            try:
                # Simpan pada kecepatan normal. Tombol 0,75x di website menangani mode lambat.
                gTTS(text=text, lang="ar", slow=False).save(str(target))
                if not target.exists() or target.stat().st_size < 256:
                    raise RuntimeError("File MP3 tidak terbentuk atau ukurannya tidak wajar.")
                generated += 1
                print(f"    OK ({target.stat().st_size:,} byte)")
                last_error = None
                break
            except Exception as exc:
                last_error = exc
                if target.exists() and target.stat().st_size == 0:
                    target.unlink(missing_ok=True)
                if retry < 2:
                    print(f"    Percobaan ulang {retry + 1}/2: {exc}")
                    time.sleep(1.5 * (retry + 1))
        if last_error is not None:
            failed += 1
            print(f"    GAGAL setelah 3 percobaan: {last_error}", file=sys.stderr)
        # Jeda ringan agar permintaan ke layanan TTS tidak terlalu rapat.
        time.sleep(0.25)

    print("\nRingkasan pembuatan audio")
    print(f"  Berhasil dibuat : {generated}")
    print(f"  Sudah tersedia  : {skipped}")
    print(f"  Gagal           : {failed}")
    print(f"  Total manifest  : {len(items)}")
    print(f"  Folder output   : {OUTPUT_DIR}")
    if failed:
        print("Sebagian audio gagal dibuat. Periksa koneksi internet, lalu jalankan generator kembali.", file=sys.stderr)
        return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
