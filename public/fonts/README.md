# SF Pro Font Files

Add your SF Pro font files here for cross-device and cross-browser support.

## Required files (use these exact names)

| File | Weight | Use |
|------|--------|-----|
| `SFProText-Regular.woff2` | 400 | Body text |
| `SFProText-Medium.woff2` | 500 | Headings, labels |
| `SFProDisplay-Medium.woff2` | 500 | Large headlines |
| `SFProDisplay-Semibold.woff2` | 600 | Bold headlines |

## Supported formats (in order of preference)

- **woff2** (best compression, all modern browsers) — recommended
- **woff** (fallback for older browsers)
- **ttf** (legacy fallback)

The setup tries woff2 first, then woff, then ttf. Add at least one format per weight.  
If you only have `.ttf` or `.otf`, you can add the `.ttf` files directly, or convert to `.woff2` at [CloudConvert](https://cloudconvert.com/ttf-to-woff2) for smaller file sizes.

**Note:** If your font files use different names, either rename them to match the table above or share the names and we can update the paths.

## After adding files

Restart the dev server. The site will use SF Pro across all devices and browsers.
