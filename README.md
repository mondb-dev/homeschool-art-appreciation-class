# 🎨 Little Artists

A fun, colorful **art appreciation website for young artists ages 6–9**. Meet ten
amazing painters from around the world, see their art, hear their stories, and
try your own art projects!

Built for homeschool and classroom use — it's a plain website with **no install
and no build step**.

## ✨ What's inside

- **10 artists**, leading with five wonderful women: Mary Cassatt, Berthe Morisot,
  Frida Kahlo, Yayoi Kusama, Georgia O'Keeffe, plus Vincent van Gogh, Claude Monet,
  Henri Rousseau, Katsushika Hokusai and Georges Seurat.
- Each artist page covers their **art style, how they learned, life story,
  highlights, famous works (with links), fun facts, their artworks**, and **why
  kids should get to know them**.
- **📖 Art Words** — a kid-friendly glossary that explains art styles in depth
  (Impressionism, Post-Impressionism, Pointillism, Naïve art, Japanese woodblock
  prints, self-portraits, Surrealism, American Modernism, and contemporary
  installation art). Each word shows **pictures of the artists** who painted that
  way and links to them, plus a "handy art words" list (portrait, landscape,
  still life, en plein air, and more).
- **🔊 Read to me** button — the browser reads the story aloud for early readers.
- **▶️ Present mode** — full-screen view; use the **← / → arrow keys** to flip
  between artists like slides. Great for a lesson or projector.
- **Tap any artwork** to see it bigger.
- Bright, rounded, high-contrast design with big buttons for little hands.

## ▶️ How to run it

**Easiest:** double-click `index.html` to open it in your web browser. That's it!

**Or serve it locally** (nice for testing, matches GitHub Pages):

```bash
python3 -m http.server 8000
# then open http://localhost:8000 in your browser
```

**Host it free on GitHub Pages:** push this repo, then in the repo settings turn on
Pages for the branch root. The included `.nojekyll` file keeps everything serving
cleanly.

## 🖼️ About the pictures

Artworks are shown for **educational use** with credit to their museums and artists.
Most images come from [Wikimedia Commons](https://commons.wikimedia.org) and are in
the **public domain**. A few modern artists' *artworks* (Frida Kahlo, Yayoi Kusama,
Georgia O'Keeffe) are still under copyright, so for those we link out to museum pages
to view them. Their **portrait photos** are shown under free licenses (e.g. CC0 or
CC BY) with credit on the **For Grown-ups** page.

Pictures load over the internet from Wikimedia Commons. **If a picture can't load**
(for example, you're offline, or a file name has changed), the site automatically
shows a friendly colored placeholder with the artwork's title — so nothing ever
looks broken. Full picture credits are on the **For Grown-ups** page inside the site.

### Want it fully offline?

Run the helper script to download the public-domain images into `images/`:

```bash
bash tools/download-images.sh
```

(The script needs internet access to Wikimedia Commons. It prints any files it
can't find so you can fix the name in `data/artists.js`.)

## ✏️ Adding or changing an artist

Everything kids read lives in **one file**: `data/artists.js`. Open it in any text
editor, copy one `{ ... }` artist block, paste it, and change the words. No coding
needed — the comments at the top explain every field.

## 🗂️ Project layout

```
index.html          the page
css/styles.css      the kid-friendly styling
js/app.js           shows the pages (home, artists, activities, credits)
js/speech.js        the "Read to me" helper
data/artists.js     ALL the artist content — edit this!
tools/              helper script to download images for offline use
images/             downloaded images live here (optional, for offline)
```

Made with 💛 for young artists.
