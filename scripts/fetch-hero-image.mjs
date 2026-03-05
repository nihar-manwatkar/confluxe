/**
 * Fetches the hero background image from Figma and saves to public/images/hero-bg.jpg
 * Add FIGMA_ACCESS_TOKEN to .env.local, then run: npm run fetch-hero
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Load .env.local if it exists (handles BOM and line endings)
const envPath = path.join(__dirname, "..", ".env.local");
if (fs.existsSync(envPath)) {
  let env = fs.readFileSync(envPath, "utf8");
  env = env.replace(/^\uFEFF/, ""); // strip BOM
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
// Hero scroll variants (Property 1=1 through 5) - component node IDs from Components page
const HERO_VARIANT_IDS = ["183:1702", "183:1701", "183:1700", "183:1699", "183:1698"];
const ICON_NODE_ID = "367:698";
const IMAGES_DIR = path.join(__dirname, "..", "public", "images");

async function fetchHeroImage() {
  const token = process.env.FIGMA_ACCESS_TOKEN;
  if (!token) {
    console.error(
      "Set FIGMA_ACCESS_TOKEN in .env.local or as env var. Get token from Figma > Settings > Personal access tokens."
    );
    process.exit(1);
  }

  fs.mkdirSync(IMAGES_DIR, { recursive: true });

  // Fetch all 5 hero background variants
  const idsParam = HERO_VARIANT_IDS.join(",");
  const heroUrl = `https://api.figma.com/v1/images/${FIGMA_FILE_KEY}?ids=${encodeURIComponent(idsParam)}&format=jpg&scale=2`;
  const res = await fetch(heroUrl, {
    headers: { "X-Figma-Token": token },
  });

  if (!res.ok) {
    const err = await res.text();
    console.error("Figma API error:", res.status, err);
    process.exit(1);
  }

  const data = await res.json();
  for (let i = 0; i < HERO_VARIANT_IDS.length; i++) {
    const nodeId = HERO_VARIANT_IDS[i];
    const imageUrl = data?.images?.[nodeId];
    if (imageUrl) {
      const imgRes = await fetch(imageUrl);
      if (imgRes.ok) {
        const outPath = path.join(IMAGES_DIR, `hero-bg-${i + 1}.jpg`);
        fs.writeFileSync(outPath, Buffer.from(await imgRes.arrayBuffer()));
        console.log("Saved", outPath);
      }
    }
  }

  // Fetch World Map (Consumer Insights section)
  const WORLD_MAP_NODE_ID = "367:633";
  const worldMapUrlReq = await fetch(
    `https://api.figma.com/v1/images/${FIGMA_FILE_KEY}?ids=${encodeURIComponent(WORLD_MAP_NODE_ID)}&format=jpg&scale=2`,
    { headers: { "X-Figma-Token": token } }
  );
  if (worldMapUrlReq.ok) {
    const wmData = await worldMapUrlReq.json();
    const wmImageUrl = wmData?.images?.[WORLD_MAP_NODE_ID];
    if (wmImageUrl) {
      const wmRes = await fetch(wmImageUrl);
      if (wmRes.ok) {
        fs.writeFileSync(path.join(IMAGES_DIR, "consumer-insights-map.jpg"), Buffer.from(await wmRes.arrayBuffer()));
        console.log("Saved consumer-insights-map.jpg");
      }
    }
  }

  // Fetch icon
  const iconUrlReq = await fetch(
    `https://api.figma.com/v1/images/${FIGMA_FILE_KEY}?ids=${encodeURIComponent(ICON_NODE_ID)}&format=png&scale=2`,
    { headers: { "X-Figma-Token": token } }
  );
  if (iconUrlReq.ok) {
    const iconData = await iconUrlReq.json();
    const iconImageUrl = iconData?.images?.[ICON_NODE_ID];
    if (iconImageUrl) {
      const iconRes = await fetch(iconImageUrl);
      if (iconRes.ok) {
        fs.writeFileSync(path.join(IMAGES_DIR, "confluxe-icon.png"), Buffer.from(await iconRes.arrayBuffer()));
        console.log("Saved icon");
      }
    }
  }
}

fetchHeroImage().catch(console.error);
