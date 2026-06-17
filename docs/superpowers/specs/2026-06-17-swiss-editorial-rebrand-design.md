# Swiss-Editorial Rebrand — Design Spec

**Date:** 2026-06-17
**Site:** remokoch.com — personal site for AI integration (KI-Integration) for Swiss SMEs
**Goal:** Remove the "AI-generated / Claude-style" feel and replace it with a distinctive, credible Swiss-precise editorial identity. For a consultant *selling* AI, looking AI-generated undermines credibility — this is the core motivation.

## Problem diagnosis (what currently reads as "AI-generated")

Ranked by how strongly each gives it away:

1. **Warm cream paper** (`--paper: #F6F5EF`) — the Anthropic/Claude signature off-white. The single loudest tell.
2. **Mono uppercase eyebrow labels with a leading dash** (`— ANGEBOT`, `— MEINE ÜBERZEUGUNG`) — the most overused "AI landing page" device.
3. **IBM Plex Sans + IBM Plex Mono** — a default-feeling generated-site pairing.
4. **Numbered cards `01/02/03` with mono tag pills** (`EINSTIEG`, `UMSETZUNG`).
5. **Dark forest/teal manifesto section** with a centered slogan (`Mensch + KI = 3`).
6. **Tight negative tracking + `text-wrap: balance` headlines** — technically fine, but house style of every AI demo.

## Decisions (locked)

- **Scope:** Strong rebrand — keep content & information architecture, replace the visual identity.
- **Personality:** Swiss-precise / editorial — engineered, exact, grid-disciplined; "rigorous and trustworthy."
- **Accent:** International blue (`~#1B3DF5`) — sharp, technical, not corporate-navy. Replaces navy/teal.
- **Headlines:** All-grotesque (precise) — Archivo display + Hanken Grotesk body. No serif.
- **Execution skill:** `better-frontend-design` will be used during implementation (not before).

## Design system

### Color tokens (replace `:root` in `index.html`)

| Token | Old | New | Notes |
|---|---|---|---|
| `--paper` | `#F6F5EF` | `#FAFAF9` | cool near-white, not warm cream |
| `--paper-2` | `#EEEAE0` | `#F0F1F0` | cool secondary surface |
| `--card` | `#FCFBF7` | `#FFFFFF` | true white cards |
| `--ink` | `#1A2228` | `#111315` | near-true-black, editorial contrast |
| `--ink-2` | `#2E373E` | `#2A2D31` | |
| `--ink-soft` | `#5A636A` | `#5C6066` | cooler grey |
| `--line` | `#E0DDD4` | `#E4E4E1` | hairline rules |
| `--line-2` | `#D0CCC0` | `#CFCFCB` | |
| `--dark` | `#0C1C28` | `#16181B` | cool charcoal manifesto bg, not forest |
| `--dark-2` | `#122838` | `#1E2125` | |
| `--dark-soft` | `#93A6B4` | `#9AA0A6` | cool grey on dark |
| `--accent` | `#19394e` | `#1B3DF5` | international blue |
| `--accent-strong` | `#102634` | `#1430C0` | hover / pressed |
| `--accent-bright` | `#5C9BC0` | `#5E76FF` | accent on dark |
| `--accent-tint` | `#E5EAEF` | `#EAEDFF` | faint blue wash (used sparingly) |

### Type (replace font `<link>` and `--font-*` tokens)

- **Display:** `Archivo` (weights 600/700/800), tracking `-0.02em`.
- **Body:** `Hanken Grotesk` (400/500), size 17px / line-height 1.6 (unchanged).
- **Mono:** `Geist Mono` — used only where genuinely functional (e.g. code-like detail), NOT for decorative labels. May be dropped entirely.
- **Remove all IBM Plex families** from the Google Fonts link.

### Structural / component moves

1. **Cool, structural background.** Replace the faint decorative hero grid with an *intentional, visible* Swiss grid: hairline column rules and full-width section divider rules. Structure is shown, not hidden.
2. **Delete the mono-uppercase-dash eyebrow.** Replace `Eyebrow` (in `shared.jsx`) with a Swiss section marker: a large ranged-left index numeral (e.g. `01`) against a hairline rule, plus a sentence-case label set in body type. No uppercase mono, no leading dash.
3. **Rework `SectionHead`** to use the new marker instead of `eyebrow`. Headlines in Archivo, tracking `-0.02em`, NOT centered by default (left-ranged, editorial). Drop reflexive `text-wrap: balance`.
4. **Cards lose the pills.** In `home.jsx` and `offer.jsx`, remove the mono `tag` pills (`EINSTIEG`/`Einstieg` etc.). Cards become a strict grid of columns divided by **hairline rules**, generous whitespace, large index numerals as the structural element. The `tag` data field is dropped from rendering (may stay in data, unused).
5. **Manifesto / dark section** (`home.jsx` belief section): re-tune to cool charcoal `--dark`. Typeset the slogan editorially (left-ranged, on the grid) rather than centered-hero style.
6. **Buttons** (`shared.jsx`): keep sharp corners (`border-radius: 2px` or `0`), blue primary, restrained shadows. Swiss = minimal decoration.
7. **Logo mark** (`Mark` in `shared.jsx`): keep the "1+1=3" venn concept but render in blue/ink and consider sharpening the soft overlapping circles, which currently read slightly soft/AI-ish. Low priority — concept stays.
8. **Tweaks panel** (`tweaks-panel.jsx`): update `ACCENTS` and `TYPES` maps in `shared.jsx` so the new blue + Archivo/Hanken are the defaults; refresh the alternative swatches to match the new world (remove navy/teal/Plex defaults or repurpose).

### Files touched

- `index.html` — `:root` tokens, font `<link>`, base styles.
- `shared.jsx` — `Eyebrow` → section marker, `SectionHead`, `Button`, `Mark`, `ACCENTS`/`TYPES`.
- `home.jsx` — eyebrows, offer cards (pills), process steps, manifesto section, about teaser.
- `offer.jsx` — eyebrows, offer cards (pills), FAQ/contact markers.
- `about.jsx`, `contact.jsx` — eyebrows and any mono labels, for consistency.
- `tweaks-panel.jsx` — verify it still works with refreshed theme maps.

### Out of scope

- No change to information architecture, page set, routing, or copy content (copy *typesetting* changes, wording does not).
- No new build tooling — stays a Babel-in-browser React SPA.
- No new images/photography (the photo direction is a separate effort).

## Success criteria

- None of the six diagnosed "AI tells" remain (cream, mono-dash eyebrows, Plex, mono pills, forest manifesto, reflexive balance).
- Palette is cool, ink near-black, single decisive blue accent.
- Layout visibly expresses a grid (rules, alignment, index numerals).
- Side-by-side with the old version, a designer would read it as "Swiss editorial," not "AI landing page."
