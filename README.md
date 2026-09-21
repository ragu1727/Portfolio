# Raagendhu R — Portfolio Site

A single-page, scroll-driven portfolio built from your content brief and visual reference.

## What's inside
- `index.html` — all copy and structure, pulled directly from your content brief (no invented numbers)
- `styles.css` — the coral/cream design system (poster typography, sticker photo, doodle accents, sticky note, editorial case-study panels)
- `script.js` — scroll reveals, count-up stats, case-study tabs, magnetic buttons + custom cursor (desktop only), mobile nav
- `assets/` — your 4 photos (extracted from the visual reference PDF — see note below) and your resume PDF for the download button

## Photos — action needed
The 4 personal photos in `assets/` were extracted directly from the compressed images inside your Visual Design Reference PDF, since the full-resolution originals weren't attached. They look fine on screen but are lower-res than ideal for a hero image. **Swap in your original full-resolution files** (same filenames: `photo-headshot.jpg`, `photo-candid.jpg`, `photo-red.jpg`, `photo-bw.jpg`) whenever you have them, and the site will pick them up automatically.

## Still missing (from your own asset checklist)
- Annachy Instagram growth chart screenshots
- Best-performing Annachy posts/reels
- Zolvit's viral first reel screenshot
- BTS / team photos
- Real testimonial quote (there's a placeholder card in the Testimonial section — swap the text in `index.html`)

## How to preview locally
```
cd portfolio
python3 -m http.server 8000
```
Then open `http://localhost:8000`.

## How to deploy (per your brief's suggestion)
Any static host works — GitHub Pages, Netlify, or Vercel are all free at this scale. Drag-and-drop the whole `portfolio` folder onto Netlify, or push it to a GitHub repo and enable Pages. Once live, add the URL to your LinkedIn headline and resume, as your brief notes.

## Notes on the build
- Direction: full premium/creative build, per your choice — bold sticker-cutout hero photo, doodle accents, magnetic buttons, custom cursor (desktop), scroll reveals, animated stat counters.
- Case studies use the Context → Strategy → Execution → Result structure from your brief, with tab switching.
- All stats and figures are copied verbatim from your content brief — nothing invented.
- Fully responsive (tested at desktop 1440px and mobile 390px), keyboard-navigable, and respects `prefers-reduced-motion`.
