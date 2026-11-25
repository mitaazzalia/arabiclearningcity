#!/usr/bin/env python3
"""Generate Arabic MP3 samples for Arabic Learning City using gTTS.

This is a lightweight Google Translate TTS helper, NOT Google Cloud TTS.
Generated files are written to public/audio/generated so Vite can serve them.
"""
from __future__ import annotations

import argparse
import json
import re
import sys
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
    parser = argparse.ArgumentParser(description="Buat MP3 Bahasa Arab untuk Arabic Learning City")
    parser.add_argument("--force", action="store_true", help="Timpa MP3 yang sudah ada")
    args = parser.parse_args()

    if not CONFIG.exists():
        print(f"File konfigurasi tidak ditemukan: {CONFIG}", file=sys.stderr)
        return 1

    items = json.loads(CONFIG.read_text(encoding="utf-8"))
    if not isinstance(items, list) or not items:
        print("audio_texts.json harus berisi daftar audio yang tidak kosong.", file=sys.stderr)
        return 1

    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    success = 0
    for item in items:
        filename = safe_filename(item["filename"])
        text = str(item.get("text", "")).strip()
        if not text:
            print(f"Lewati {filename}: teks kosong.")
            continue
        target = OUTPUT_DIR / filename
        if target.exists() and not args.force:
            print(f"Lewati {filename}: file sudah ada (gunakan --force untuk membuat ulang).")
            continue
        print(f"Membuat {filename} ...")
        try:
            gTTS(text=text, lang="ar", slow=bool(item.get("slow", False))).save(str(target))
            print(f"  OK: {target.relative_to(PROJECT_ROOT)}")
            success += 1
        except Exception as exc:
            print(f"  GAGAL: {filename}: {exc}", file=sys.stderr)

    print(f"\nSelesai: {success} file MP3 baru dibuat.")
    print(f"Folder output: {OUTPUT_DIR}")
    return 0 if success else 1


if __name__ == "__main__":
    raise SystemExit(main())
