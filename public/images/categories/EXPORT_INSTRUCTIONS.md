# Section 6 – Category Block: Asset Export Instructions

## Overview

Section 6 displays **6 category blocks** in an irregular grid. Each block has a background image, white label text, and a semi-transparent red overlay behind the text. Images should have **subjects in color** and **backgrounds desaturated (grayscale)** for maximum visual impact.

---

## Assets to Export & Save

### Image Files (6 total)

Save each image into this folder: `public/images/categories/`

| # | Category | Filename | Recommended Size | Notes |
|---|----------|----------|------------------|-------|
| 1 | Fashion | `fashion.jpg` | 600×800 px | Tall block. Couple in stylish attire, city background. |
| 2 | Bags, Accessories & Travel | `bags-accessories-travel.jpg` | 800×400 px | Wide block. Leather bag close-up, street background. |
| 3 | Kids Fashion | `kids-fashion.jpg` | 400×400 px | Square block. Two girls with ice cream, street scene. |
| 4 | Athleisure | `athleisure.jpg` | 400×400 px | Square block. Woman in activewear, studio setting. |
| 5 | Home Decor | `home-decor.jpg` | 800×400 px | Wide block. Sofa, coffee table, cozy interior. |
| 6 | Footwear | `footwear.jpg` | 400×800 px | Tall block. Close-up of feet/shoes, dark background. |

### Image Preparation

- **Color treatment:** Main subjects in full color; backgrounds desaturated/grayscale.
- **Format:** JPG or WebP, optimized for web.
- **Cropping:** Crop to the suggested aspect ratios. The component uses `object-fit: cover`.

---

## Text Content (from design)

Use these exact strings in the component:

- `Fashion`
- `Bags, Accessories & Travel`
- `Kids Fashion`
- `Athleisure`
- `Home Decor`
- `Footwear`

---

## Styling Reference

| Element | Value |
|---------|-------|
| Section background | Cream `#FCF9F3` / `var(--cream)` |
| Text color | White `#FFFFFF` |
| Red cube | Confluxe Red `#FF3D22` with opacity ~0.75 (semi-transparent) |
| Font | SF Pro Display Medium, 28px, letter-spacing -0.28px |
| White separator | Horizontal line between top and bottom rows |

## Red Cube Positioning (from Figma)

The design places a red cube at a **specific location** on each image, with text overlapping it. Current implementation uses approximate positions. For pixel-perfect match, export from Figma for each block:

- **Red cube X, Y** (or `left`, `bottom` as %) relative to the block
- **Red cube width and height** (px)

Current approximate positions in code:
- Fashion: bottom 20%, left 12%
- Bags: bottom 18%, right 15%
- Athleisure: bottom 22%, center horizontal
- Home Decor: bottom 18%, left 10%
- Kids Fashion: bottom 20%, left 12%
- Footwear: bottom 18%, center horizontal

---

## File Structure After Export

```
public/
  images/
    categories/
      fashion.jpg
      bags-accessories-travel.jpg
      kids-fashion.jpg
      athleisure.jpg
      home-decor.jpg
      footwear.jpg
      EXPORT_INSTRUCTIONS.md  (this file)
```
