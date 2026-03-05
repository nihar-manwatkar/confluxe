/**
 * Fetches category block images from Figma (6- Category Block) and saves to public/images/categories/
 * Add FIGMA_ACCESS_TOKEN to .env.local, then run: npm run fetch-categories
 *
 * Node IDs from figma-export.json – Launch Site > Homepage > 6- Category Block (367:546)
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Load .env.local
const envPath = path.join(__dirname, "..", ".env.local");
if (fs.existsSync(envPath)) {
  let env = fs.readFileSync(envPath, "utf8");
  env = env.replace(/^\uFEFF/, "");
  for (const line of env.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq > 0) {
      const key = trimmed.slice(0, eq).trim();
      let val = trimmed.slice(eq + 1).trim();
      val = val.replace(/^["']|["']$/g, "");
      process.env[key] = val;
    }
  }
}

const FIGMA_FILE_KEY = "Wj4ffAXCCkOTpoX0ykexQ5";
const IMAGES_DIR = path.join(__dirname, "..", "public", "images", "categories");

// Primary image node for each category (from figma-export.json)
const CATEGORY_NODES = [
  { id: "367:560", filename: "fashion.jpg", label: "Fashion" },
  { id: "367:565", filename: "bags-accessories-travel.jpg", label: "Bags, Accessories & Travel" },
  { id: "367:570", filename: "athleisure.jpg", label: "Athleisure" },
  { id: "367:554", filename: "home-decor.jpg", label: "Home Decor" },
  { id: "367:576", filename: "kids-fashion.jpg", label: "Kids Fashion" },
  { id: "367:548", filename: "footwear.jpg", label: "Footwear" },
];

async function fetchCategories() {
  const token = process.env.FIGMA_ACCESS_TOKEN;
  if (!token) {
    console.error(
      "Set FIGMA_ACCESS_TOKEN in .env.local. Get token from Figma > Settings > Personal access tokens."
    );
    process.exit(1);
  }

  fs.mkdirSync(IMAGES_DIR, { recursive: true });

  const idsParam = CATEGORY_NODES.map((n) => n.id).join(",");
  const url = `https://api.figma.com/v1/images/${FIGMA_FILE_KEY}?ids=${encodeURIComponent(idsParam)}&format=jpg&scale=2`;

  const res = await fetch(url, { headers: { "X-Figma-Token": token } });
  if (!res.ok) {
    console.error("Figma API error:", res.status, await res.text());
    process.exit(1);
  }

  const data = await res.json();
  for (let i = 0; i < CATEGORY_NODES.length; i++) {
    const { id, filename, label } = CATEGORY_NODES[i];
    const imageUrl = data?.images?.[id];
    if (imageUrl) {
      const imgRes = await fetch(imageUrl);
      if (imgRes.ok) {
        const outPath = path.join(IMAGES_DIR, filename);
        fs.writeFileSync(outPath, Buffer.from(await imgRes.arrayBuffer()));
        console.log("Saved", filename, "(" + label + ")");
      } else {
        console.warn("Failed to fetch", label);
      }
    } else {
      console.warn("No image URL for", label, id);
    }
  }
}

fetchCategories().catch(console.error);
