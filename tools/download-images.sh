#!/usr/bin/env bash
# ============================================================
# Download the artist pictures from Wikimedia Commons into
# the images/ folder, so the site can run fully OFFLINE.
#
# Usage:   bash tools/download-images.sh
# Then:    open js/app.js and set   IMAGE_BASE = "images/";
#
# Needs internet access to commons.wikimedia.org.
# Files that can't be found are listed at the end so you can
# fix the name in data/artists.js.
# ============================================================
set -u

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUT="$ROOT/images"
DATA="$ROOT/data/artists.js"
UA="LittleArtistsHomeschool/1.0 (educational; offline copy)"
WIDTH=1200

mkdir -p "$OUT"

if [ ! -f "$DATA" ]; then
  echo "Can't find $DATA"; exit 1
fi

# Pull every  file: "Some File.jpg"  value out of the data file.
mapfile -t FILES < <(grep -oE 'file:[[:space:]]*"[^"]+"' "$DATA" \
  | sed -E 's/file:[[:space:]]*"//; s/"$//' | grep -v '^$' | sort -u)

echo "Found ${#FILES[@]} pictures to download into images/ ..."
missing=()

for f in "${FILES[@]}"; do
  out="$OUT/$f"
  if [ -s "$out" ]; then
    echo "  ✓ already have: $f"; continue
  fi
  # Special:FilePath redirects to the real image; ?width= resizes it.
  url="https://commons.wikimedia.org/wiki/Special:FilePath/$(
    python3 -c "import urllib.parse,sys;print(urllib.parse.quote(sys.argv[1]))" "$f"
  )?width=$WIDTH"
  code=$(curl -sL -A "$UA" -o "$out" -w "%{http_code}" "$url")
  if [ "$code" = "200" ] && [ -s "$out" ]; then
    echo "  ⬇  $f"
  else
    echo "  ✗ could not get ($code): $f"
    rm -f "$out"
    missing+=("$f")
  fi
done

echo
echo "Done. Saved to: $OUT"
if [ "${#missing[@]}" -gt 0 ]; then
  echo
  echo "Could not download these (check the name on commons.wikimedia.org,"
  echo "then fix the 'file:' value in data/artists.js):"
  for m in "${missing[@]}"; do echo "  - $m"; done
fi
echo
echo "Next: open js/app.js and set   IMAGE_BASE = \"images/\";   for offline use."
