---
project: Valorant Coaching Site
type: Static marketing site
---

# Valorant Coaching Site

A single-page static site offering Valorant coaching services with a tiered, rank-based pricing model.

## Stack
- Plain HTML / CSS / JS (no framework, no build step)
- Hand-rolled SVG graphics (no third-party Valorant assets — copyright-safe)

## File layout
- `index.html` — landing page (hero, tiers, about, contact)
- `styles.css` — all styles, Valorant-inspired palette (`#FF4655`, `#0F1923`, `#ECE8E1`)
- `script.js` — smooth scroll, copy-discord-handle, copy-email

## Pricing tiers
| Tier | Rank band | Rate |
|---|---|---|
| Recruit | Iron – Gold | **$5 / hr** |
| Operative | Platinum – Diamond | **$15 / hr** |
| Radiant | Ascendant+ | **$30 / hr** |

Edit `index.html` (`#pricing` section) to change tier copy or rates. Update the matching `data-tier` cards if adding/removing tiers.

## Contact
The site has no contact form — students reach out directly:
- **Discord:** `jnnywoot` (preferred for booking and quick questions)
- **Email:** `bnet@gmail.com`

Both are displayed prominently in the `#contact` section as click-to-copy pills (and the email is also a `mailto:` link). To change either, edit the `DISCORD_HANDLE` / `EMAIL` constants in `script.js` and the matching text in `index.html`.

## Local preview
No build step. Open `index.html` directly, or:
```
python3 -m http.server 8000
```
then visit http://localhost:8000.

## Design notes
- Color palette mirrors Valorant's UI (red accent on dark navy) but uses no game assets.
- Hero crosshair, tier chevrons, and spike-style accents are all inline SVG so they scale and theme cleanly.
- Mobile-first; tier cards stack below 768px.
