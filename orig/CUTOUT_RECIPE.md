# Portrait cutout recipe

How the transparent-background portraits used on the site were produced, so the
same look can be recreated from a new studio photo. The result is a clean
alpha cutout with **no white halo/glow**, sitting on a CSS gradient card.

Pipeline: **crop → background removal (rembg / birefnet-portrait) → defringe
(ImageMagick alpha erode) → web export (WebP) → CSS gradient backdrop**.

All Python is run via **`uv`** (no global installs). ImageMagick is `magick`.

---

## Files in this folder (`orig/`)

| File | What it is |
|------|------------|
| `20200928-UTZ_9897.jpg` | Source original, home photo (4607×3071). |
| `remo-2-original.jpg` | Source original, headshot (2000×2000). |
| `remo-crop-full.png` | Intermediate: the square crop fed into rembg for the home photo. |
| `remo-cutout-full.png` | Home photo, full-res glow-fixed cutout (3071×3071). Master. |
| `remo-2-cutout-full.png` | Headshot, full-res glow-fixed cutout (2000×2000). Master. |
| `remo-prev-crop.jpg` | Superseded: the pre-cutout 900px home crop (before transparency). |

`../assets/` holds only what the site serves: `remo-cutout.webp` (58 KB
transparent cutout, on the home card over a CSS gradient) and `remo-2.webp`
(About section). Everything else — sources, intermediates, masters — lives here
in `orig/`.

---

## 1. Crop to a square (optional, framing)

The home source is landscape with the subject on the right, so it was cropped to
a square that positions him toward the right border:

```bash
magick assets/20200928-UTZ_9897.jpg -crop 3071x3071+1050+0 +repage orig/remo-crop-full.png
```

`-crop WxH+X+Y`: `3071×3071` = full image height as a square; `+1050+0` =
offset from top-left. A front-facing square headshot (like `remo-2-original.jpg`)
needs no crop — feed it directly.

## 2. Remove the background — rembg, `birefnet-portrait` model

`birefnet-portrait` gives the best hair-edge detail of the rembg models (much
better than `u2net` / `u2net_human_seg`, which leave a jagged/semi-transparent
hair fringe). Default settings, no alpha-matting flags needed.

`cutout.py`:

```python
from rembg import remove, new_session
from PIL import Image

session = new_session("birefnet-portrait")
inp = Image.open("orig/remo-crop-full.png")          # or assets/<source>.jpg
out = remove(inp, session=session)
out.save("orig/<name>-cutout-full.png")
print("saved", out.size)
```

Run it (downloads the model on first use):

```bash
uv run --with "rembg[cpu]" --with pillow --with onnxruntime python cutout.py
```

## 3. Defringe — erode the alpha edge (kills the white glow)

The matte's edge pixels still carry the original white backdrop, which shows as a
light halo on darker backgrounds. Pull the alpha inward a few px:

```bash
# 3071px master -> Disk:3.  Scale the disk to resolution: ~Disk:2 at 2000px.
magick <cutout-full>.png \
  \( +clone -alpha extract -morphology Erode Disk:3 -blur 0x0.6 -level 0,60% \) \
  -alpha off -compose CopyOpacity -composite <cutout-full-defringed>.png
```

- `Disk:N` — erosion radius in px. **Scale with image size**: Disk:3 @ 3071px,
  Disk:2 @ 2000px (≈ 1px per 1000px). Too large eats hair detail.
- `-blur 0x0.6` + `-level 0,60%` — softens then re-tightens the eroded edge so it
  stays anti-aliased rather than hard.

Verify against a dark background (where any glow shows):

```bash
magick -size 600x600 gradient:"#21465c"-"#0E2331" <cutout>.png -gravity center -composite check-navy.png
```

## 4. Web export — transparent WebP

Full-res PNG masters are multi-MB; ship a small WebP with alpha (universal
browser support):

```bash
magick <cutout-full-defringed>.png -resize 900x900 cutout-900.png
cwebp -q 88 -alpha_q 100 cutout-900.png -o assets/<name>-cutout.webp
```

~58 KB at 900×900. Bump the resize for larger display slots (≈2× the rendered px).

## 5. CSS backdrop (home card)

The cutout sits in the card over a gradient (light cream top held through the
upper ~22%, easing to a warmer tone at the bottom) — replaces the harsh white:

```css
background: linear-gradient(180deg, #FCFBF7 0%, #FCFBF7 22%, #EBE4D5 68%, #D9D1BE 100%);
```

Image style: `width:100%; aspect-ratio:1/1; object-fit:cover; object-position:top center;`

---

## Notes
- `uv` is the standard Python toolchain here — use `uv run --with ...`, not system `pip`.
- Models cache under `~/.u2net/`; first run of a new model downloads it.
- Best input: evenly-lit subject on a plain light/white studio backdrop.
