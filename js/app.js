/* ============================================================
   Little Artists — the app
   A tiny hash-router that renders the home, gallery, artist,
   activities and about views from window.ARTISTS.
   Plain JavaScript, no build step, works from file:// too.
   ============================================================ */
(function () {
  "use strict";

  const ARTISTS = window.ARTISTS || [];
  const byId = (id) => ARTISTS.find((a) => a.id === id);
  const view = document.getElementById("view");

  /* Where to load pictures from:
       ""        → stream from Wikimedia Commons (needs internet). [default]
       "images/" → use your own copies after running
                   tools/download-images.sh (works fully offline).
     Either way, if a picture can't load, a friendly placeholder shows. */
  const IMAGE_BASE = "";

  /* ---------- little helpers ---------- */
  const esc = (s) =>
    String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  const escAttr = (s) => esc(s).replace(/"/g, "&quot;");

  // Build a Wikimedia Commons image URL from a file name.
  function commonsUrl(file, width) {
    return (
      "https://commons.wikimedia.org/wiki/Special:FilePath/" +
      encodeURIComponent(file) +
      "?width=" +
      (width || 1000)
    );
  }

  // Markup for one picture inside a frame. If the file is missing
  // OR fails to load, we show a friendly colored placeholder.
  // When IMAGE_BASE is set we try the local copy first, then fall
  // back to Commons, then to the placeholder.
  function picture(img, emoji, width) {
    const e = emoji || "🎨";
    if (!img || !img.file) {
      return fallbackHTML(e, img && img.title);
    }
    const commons = commonsUrl(img.file, width);
    const primary = IMAGE_BASE ? IMAGE_BASE + encodeURIComponent(img.file) : commons;
    const fallbackAttr = IMAGE_BASE ? ' data-commons="' + escAttr(commons) + '"' : "";
    return (
      '<img src="' + escAttr(primary) + '"' +
      ' alt="' + escAttr(img.alt || img.title || "") + '"' +
      ' loading="lazy"' + fallbackAttr +
      ' data-emoji="' + escAttr(e) + '"' +
      ' data-title="' + escAttr(img.title || "") + '"' +
      ' onerror="LA.imgFail(this)">'
    );
  }

  function fallbackHTML(emoji, title) {
    return (
      '<div class="img-fallback">' +
      '<span class="fb-emoji" aria-hidden="true">' + esc(emoji) + "</span>" +
      (title ? '<span class="fb-title">' + esc(title) + "</span>" : "") +
      "</div>"
    );
  }

  // Called from an image's onerror. First try the Commons copy (if we
  // started from a local file); otherwise show the placeholder.
  function imgFail(imgEl) {
    const commons = imgEl.getAttribute("data-commons");
    if (commons) {
      imgEl.removeAttribute("data-commons"); // only retry once
      imgEl.src = commons;
      return;
    }
    const wrap = document.createElement("div");
    wrap.innerHTML = fallbackHTML(
      imgEl.getAttribute("data-emoji") || "🎨",
      imgEl.getAttribute("data-title") || ""
    );
    imgEl.replaceWith(wrap.firstChild);
  }

  // Set an artist's accent color onto an element.
  function applyAccent(el, color) {
    el.style.setProperty("--accent", color);
    el.style.setProperty(
      "--accent-soft",
      "color-mix(in srgb, " + color + " 15%, white)"
    );
  }

  /* ---------- views ---------- */

  function homeView() {
    const peeks = ARTISTS.map(
      (a) =>
        '<button class="peek" data-go="#artist/' + a.id + '">' +
        '<span class="pe" aria-hidden="true">' + esc(a.emoji) + "</span>" +
        '<span class="pn">' + esc(a.name) + "</span>" +
        "</button>"
    ).join("");

    return (
      '<section class="hero">' +
      '<div class="crayons" aria-hidden="true">🖍️🎨🖌️</div>' +
      "<h1>Welcome, Little Artists!</h1>" +
      '<p class="sub">Come meet ten amazing painters from around the world. ' +
      "See their beautiful art, hear their stories, and make your own masterpieces!</p>" +
      '<div class="cta-row">' +
      '<a class="btn" href="#gallery">🖼️ Meet the Artists</a>' +
      '<a class="btn btn-ghost" href="#activities">✂️ Fun Activities</a>' +
      "</div></section>" +
      '<section class="home-peek"><h2>Tap an artist to begin! 👇</h2>' +
      '<div class="peek-row">' + peeks + "</div></section>"
    );
  }

  function galleryView() {
    const cards = ARTISTS.map((a) => {
      const cover = a.artworks && a.artworks[0];
      return (
        '<button class="card" data-go="#artist/' + a.id + '"' +
        ' style="--accent:' + escAttr(a.themeColor) +
        ';--accent-soft:color-mix(in srgb,' + escAttr(a.themeColor) + ' 15%,white)">' +
        '<span class="thumb">' +
        '<span class="badge" aria-hidden="true">' + esc(a.emoji) + "</span>" +
        picture(cover, a.emoji, 600) +
        "</span>" +
        '<span class="card-body">' +
        "<h3>" + esc(a.name) + "</h3>" +
        '<span class="yrs">' + esc(a.lifespan) + " · " + esc(a.nationality) + "</span>" +
        '<span class="tag">' + esc(a.funTagline) + "</span>" +
        "</span></button>"
      );
    }).join("");

    return (
      '<div class="page-head"><h1>Meet the Artists 🖼️</h1>' +
      "<p>Pick a picture to learn all about each wonderful painter.</p></div>" +
      '<div class="grid">' + cards + "</div>"
    );
  }

  function artistView(id) {
    const a = byId(id);
    if (!a) return notFoundView();

    const idx = ARTISTS.indexOf(a);
    const prev = ARTISTS[(idx - 1 + ARTISTS.length) % ARTISTS.length];
    const next = ARTISTS[(idx + 1) % ARTISTS.length];

    const works = (a.famousWorks || [])
      .map(
        (w) =>
          '<li><span class="wstar" aria-hidden="true">🎨</span> ' +
          '<span><a href="' + escAttr(w.sourceUrl) + '" target="_blank" rel="noopener">' +
          esc(w.title) + "</a> <em>(" + esc(w.year) + ")</em></span></li>"
      )
      .join("");

    const highlights = (a.highlights || [])
      .map((h) => "<li><span>" + esc(h) + "</span></li>")
      .join("");

    const facts = (a.funFacts || [])
      .map((f) => '<div class="fact-card">💡 ' + esc(f) + "</div>")
      .join("");

    const activities = (a.activities || [])
      .map((t) => "<li><span>" + esc(t) + "</span></li>")
      .join("");

    const artworks = (a.artworks || [])
      .map(
        (w, i) =>
          '<figure class="art-figure" data-zoom="' + a.id + ":" + i + '">' +
          '<span class="frame">' + picture(w, a.emoji, 800) + "</span>" +
          "<figcaption>" +
          '<div class="at">' + esc(w.title) + "</div>" +
          '<div class="ay">' + esc(w.year) + "</div>" +
          '<div class="credit">' + esc(w.credit) + "</div>" +
          "</figcaption></figure>"
      )
      .join("");

    const readBtn = window.ReadAloud && window.ReadAloud.supported
      ? '<button class="btn btn-accent btn-small" id="readBtn">🔊 Read to me</button>'
      : "";

    return (
      '<div class="detail" data-artist="' + a.id + '"' +
      ' style="--accent:' + escAttr(a.themeColor) +
      ';--accent-soft:color-mix(in srgb,' + escAttr(a.themeColor) + ' 15%,white)">' +

      '<div class="back-row">' +
      '<a class="btn btn-ghost btn-small" href="#gallery">← Back to the artists</a>' +
      '<div class="nav-arrows">' +
      '<a class="btn btn-accent btn-small" href="#artist/' + prev.id + '" title="' + escAttr(prev.name) + '">⬅️ ' + esc(prev.emoji) + "</a>" +
      '<button class="btn btn-accent btn-small" id="presentBtn">▶️ Present</button>' +
      '<a class="btn btn-accent btn-small" href="#artist/' + next.id + '" title="' + escAttr(next.name) + '">' + esc(next.emoji) + " ➡️</a>" +
      "</div></div>" +

      // hero
      '<section class="artist-hero">' +
      '<span class="frame portrait-wrap">' +
      '<img-portrait></img-portrait></span>' +
      '<div><div class="hero-emoji" aria-hidden="true">' + esc(a.emoji) + "</div>" +
      "<h1>" + esc(a.name) + "</h1>" +
      '<p class="meta">' + esc(a.lifespan) + " · " + esc(a.nationality) + "</p>" +
      '<p class="tagline">' + esc(a.funTagline) + "</p>" +
      '<div class="read-row">' + readBtn + "</div>" +
      "</div></section>" +

      // art style
      section("🎨", "Their Art Style", "<p>" + esc(a.style) + "</p>") +
      // how they learned
      section("📚", "How They Learned", "<p>" + esc(a.howTheyLearned) + "</p>") +
      // life
      section("🌟", "Their Life Story", "<p>" + esc(a.life) + "</p>") +
      // highlights
      section("⭐", "Best Bits of Their Life", '<ul class="bullets">' + highlights + "</ul>") +
      // why know them
      section("💛", "Why Get to Know Them?", "<p>" + esc(a.whyKnowThem) + "</p>") +
      // famous works
      section("🏆", "Their Most Famous Artworks", '<ul class="works-list">' + works + "</ul>") +
      // fun facts
      (facts ? section("🤩", "Did You Know?", facts) : "") +
      // activity
      '<section class="section activity-box">' +
      '<h2><span class="h2-emoji" aria-hidden="true">✏️</span> Try It Yourself!</h2>' +
      '<ul class="bullets">' + activities + "</ul></section>" +

      // artworks gallery
      '<section class="artworks"><h2 style="text-align:center">🖼️ Look at the Art!</h2>' +
      '<div class="art-grid">' + artworks + "</div></section>" +

      "</div>"
    );

    function section(emoji, title, body) {
      return (
        '<section class="section">' +
        '<h2><span class="h2-emoji" aria-hidden="true">' + esc(emoji) + "</span> " +
        esc(title) + "</h2>" + body + "</section>"
      );
    }
  }

  function activitiesView() {
    const cards = ARTISTS.map((a) => {
      const items = (a.activities || [])
        .map((t) => "<li><span>" + esc(t) + "</span></li>")
        .join("");
      return (
        '<article class="activity-card"' +
        ' style="--accent:' + escAttr(a.themeColor) +
        ';--accent-soft:color-mix(in srgb,' + escAttr(a.themeColor) + ' 15%,white)">' +
        "<h2><span aria-hidden=\"true\">" + esc(a.emoji) + "</span> " +
        esc(a.name) + "</h2>" +
        '<ul class="bullets">' + items + "</ul>" +
        '<a class="btn btn-accent btn-small" href="#artist/' + a.id + '">Meet ' +
        esc(a.name.split(" ")[0]) + " →</a>" +
        "</article>"
      );
    }).join("");

    return (
      '<div class="page-head"><h1>Fun Art Activities ✂️</h1>' +
      "<p>Each artist has a project for you to try. Grab your supplies and let's make art!</p></div>" +
      '<div class="activity-list">' + cards + "</div>"
    );
  }

  function aboutView() {
    const credits = ARTISTS.map((a) => {
      const imgs = [a.portrait]
        .concat(a.artworks || [])
        .filter((x) => x && (x.title || x.file))
        .map(
          (x) =>
            "<li><strong>" + esc(a.name) + "</strong> — " +
            esc(x.title || "portrait") +
            ". " + esc(x.credit || "") +
            (x.sourceUrl
              ? ' <a href="' + escAttr(x.sourceUrl) + '" target="_blank" rel="noopener">learn more</a>'
              : "") +
            "</li>"
        )
        .join("");
      return imgs;
    }).join("");

    return (
      '<div class="page-head"><h1>For Grown-ups 💛</h1></div>' +
      '<div class="prose">' +
      "<h2>How to use this site</h2>" +
      "<ul>" +
      "<li>Tap <strong>🖼️ Artists</strong> to see all ten painters. Tap any picture to open that artist's page.</li>" +
      "<li>On an artist's page, use <strong>🔊 Read to me</strong> to have the story read aloud — great for early readers.</li>" +
      "<li>Use the <strong>⬅️ ➡️ arrows</strong> (or your keyboard arrow keys) to move between artists like flipping through slides.</li>" +
      "<li>Tap <strong>▶️ Present</strong> for a big full-screen view that's perfect for a lesson or projector.</li>" +
      "<li>Tap any artwork to see it <strong>bigger</strong>.</li>" +
      "</ul>" +
      "<h2>About the pictures</h2>" +
      "<p>Artworks are shown for <strong>educational use</strong> with credit to their museums and artists. " +
      "Most come from <a href=\"https://commons.wikimedia.org\" target=\"_blank\" rel=\"noopener\">Wikimedia Commons</a> " +
      "and are in the public domain. A few modern artists' works are still under copyright, so we link out to museums " +
      "to view them. If a picture can't load (for example, you're offline), a colorful placeholder appears instead.</p>" +
      "<h2>Adding or changing an artist</h2>" +
      "<p>Open <code>data/artists.js</code> in any text editor, copy one artist block, and edit the words. " +
      "No coding needed!</p>" +
      "<h2>Picture credits</h2>" +
      '<ul class="credits-list">' + credits + "</ul>" +
      "</div>"
    );
  }

  function notFoundView() {
    return (
      '<div class="page-head"><h1>Oops! 🎨</h1>' +
      "<p>We couldn't find that page.</p>" +
      '<p><a class="btn" href="#gallery">🖼️ See all the artists</a></p></div>'
    );
  }

  /* ---------- router ---------- */
  function parseHash() {
    const h = (location.hash || "#home").replace(/^#/, "");
    const parts = h.split("/");
    return { name: parts[0] || "home", arg: parts[1] || "" };
  }

  function render() {
    const { name, arg } = parseHash();
    let html, activeNav = name;

    switch (name) {
      case "gallery":   html = galleryView(); break;
      case "artist":    html = artistView(arg); activeNav = "gallery"; break;
      case "activities":html = activitiesView(); break;
      case "about":     html = aboutView(); break;
      case "home":      html = homeView(); break;
      default:          html = notFoundView();
    }

    view.innerHTML = html;
    setActiveNav(activeNav);
    placePortrait(arg, name);
    wireDetail(name);
    window.scrollTo({ top: 0, behavior: "auto" });
    document.getElementById("main").focus({ preventScroll: true });

    // Leaving a page should stop any reading.
    if (window.ReadAloud) window.ReadAloud.stop();
  }

  // The hero portrait is a custom tag we swap for a real <img>/fallback,
  // so escaping stays simple.
  function placePortrait(arg, name) {
    if (name !== "artist") return;
    const a = byId(arg);
    const slot = view.querySelector("img-portrait");
    if (!a || !slot) return;
    const wrap = document.createElement("div");
    wrap.innerHTML = picture(a.portrait, a.emoji, 400);
    const node = wrap.firstChild;
    if (node && node.tagName === "IMG") node.className = "portrait";
    else if (node) node.classList.add("portrait");
    slot.replaceWith(node);
  }

  function setActiveNav(name) {
    document.querySelectorAll(".nav-link").forEach((l) => {
      l.classList.toggle("is-active", l.getAttribute("data-view") === name);
    });
  }

  /* ---------- detail-page wiring (read-aloud + present) ---------- */
  function wireDetail(name) {
    const readBtn = document.getElementById("readBtn");
    if (readBtn) {
      const { arg } = parseHash();
      const a = byId(arg);
      readBtn.addEventListener("click", () => {
        const text = readBtn.getAttribute("data-text") || buildReadText(a);
        window.ReadAloud.speak(text, (speaking) => {
          readBtn.textContent = speaking ? "⏹️ Stop reading" : "🔊 Read to me";
        });
      });
      readBtn.setAttribute("data-text", buildReadText(a));
    }

    const presentBtn = document.getElementById("presentBtn");
    if (presentBtn) presentBtn.addEventListener("click", togglePresent);
  }

  function buildReadText(a) {
    if (!a) return "";
    return [
      a.name + ". " + a.funTagline,
      "Their art style. " + a.style,
      "How they learned. " + a.howTheyLearned,
      "Their life. " + a.life,
      "Why you should get to know them. " + a.whyKnowThem,
    ].join(" ");
  }

  /* ---------- present / slideshow mode ---------- */
  function togglePresent() {
    const on = document.body.classList.toggle("present-mode");
    if (on) {
      if (document.documentElement.requestFullscreen)
        document.documentElement.requestFullscreen().catch(() => {});
      showHint();
    } else {
      if (document.fullscreenElement && document.exitFullscreen)
        document.exitFullscreen().catch(() => {});
      hideHint();
    }
  }
  document.addEventListener("fullscreenchange", () => {
    if (!document.fullscreenElement) {
      document.body.classList.remove("present-mode");
      hideHint();
    }
  });

  let hintEl;
  function showHint() {
    if (!hintEl) {
      hintEl = document.createElement("div");
      hintEl.className = "present-hint";
      hintEl.innerHTML = "Use ⬅️ ➡️ to change artist · press <b>Esc</b> to exit";
      document.body.appendChild(hintEl);
    }
    hintEl.hidden = false;
    clearTimeout(showHint._t);
    showHint._t = setTimeout(() => { if (hintEl) hintEl.hidden = true; }, 4000);
  }
  function hideHint() { if (hintEl) hintEl.hidden = true; }

  /* ---------- artwork lightbox (tap to zoom) ---------- */
  let lightbox;
  function ensureLightbox() {
    if (lightbox) return lightbox;
    lightbox = document.createElement("div");
    lightbox.className = "lightbox";
    lightbox.hidden = true;
    lightbox.innerHTML =
      '<button class="lb-close" aria-label="Close picture">✕</button>' +
      "<figure style=\"text-align:center;margin:0\"><div class=\"lb-img\"></div>" +
      '<figcaption class="lb-cap"></figcaption></figure>';
    document.body.appendChild(lightbox);
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox || e.target.classList.contains("lb-close"))
        closeLightbox();
    });
    return lightbox;
  }
  function openLightbox(img, captionHTML) {
    ensureLightbox();
    lightbox.querySelector(".lb-img").innerHTML = img;
    lightbox.querySelector(".lb-cap").innerHTML = captionHTML;
    lightbox.hidden = false;
  }
  function closeLightbox() { if (lightbox) lightbox.hidden = true; }

  /* ---------- global click + key handling ---------- */
  document.addEventListener("click", (e) => {
    // buttons that navigate (home peeks, gallery cards)
    const go = e.target.closest("[data-go]");
    if (go) { location.hash = go.getAttribute("data-go"); return; }

    // zoom an artwork
    const fig = e.target.closest("[data-zoom]");
    if (fig) {
      const [id, i] = fig.getAttribute("data-zoom").split(":");
      const a = byId(id);
      const w = a && a.artworks[+i];
      if (w) {
        openLightbox(
          picture(w, a.emoji, 1400),
          "<strong>" + esc(w.title) + "</strong> (" + esc(w.year) + ")<br>" +
          esc(a.name) + " — " + esc(w.credit)
        );
      }
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") { closeLightbox(); return; }
    if (lightbox && !lightbox.hidden) return; // don't navigate while zoomed
    // arrow keys flip between artists on a detail page
    const { name, arg } = parseHash();
    if (name === "artist" && (e.key === "ArrowLeft" || e.key === "ArrowRight")) {
      const a = byId(arg);
      if (!a) return;
      const i = ARTISTS.indexOf(a);
      const to = e.key === "ArrowLeft"
        ? (i - 1 + ARTISTS.length) % ARTISTS.length
        : (i + 1) % ARTISTS.length;
      location.hash = "#artist/" + ARTISTS[to].id;
    }
  });

  /* ---------- boot ---------- */
  window.LA = { imgFail }; // exposed for inline onerror
  window.addEventListener("hashchange", render);
  document.addEventListener("DOMContentLoaded", render);
  if (document.readyState !== "loading") render();
})();
