// Resizes + compresses images before they go into the site.
// Usage: npm run optimize-images
// Drop new work photos into raw-images/, run this, then move the results
// from public/work/ into your project entries in lib/projects.ts.

import sharp from "sharp";
import { readdir, mkdir, stat } from "fs/promises";
import { existsSync } from "fs";
import path from "path";

const RAW_DIR = path.resolve("raw-images");
const OUT_DIR = path.resolve("public/work");
const TARGET_WIDTH = 1080;
const TARGET_HEIGHT = 1350; // Instagram portrait (4:5)
const QUALITY = 82;

const exts = new Set([".jpg", ".jpeg", ".png", ".webp", ".JPG", ".JPEG", ".PNG"]);

async function run() {
  if (!existsSync(RAW_DIR)) {
    console.log(`No raw-images/ folder found. Create it and drop photos in there, then re-run.`);
    return;
  }
  await mkdir(OUT_DIR, { recursive: true });

  const files = (await readdir(RAW_DIR)).filter((f) => exts.has(path.extname(f)));
  if (files.length === 0) {
    console.log("raw-images/ is empty — nothing to optimize.");
    return;
  }

  for (const file of files) {
    const inPath = path.join(RAW_DIR, file);
    const base = path.basename(file, path.extname(file));
    const outPath = path.join(OUT_DIR, `${base}.jpg`);

    const before = (await stat(inPath)).size;

    await sharp(inPath)
      .rotate() // auto-orient using EXIF before resizing/cropping
      .resize(TARGET_WIDTH, TARGET_HEIGHT, { fit: "cover", position: "attention" })
      .jpeg({ quality: QUALITY, mozjpeg: true })
      .toFile(outPath);

    const after = (await stat(outPath)).size;
    console.log(
      `${file} -> public/work/${base}.jpg  (${(before / 1024 / 1024).toFixed(2)}MB -> ${(after / 1024 / 1024).toFixed(2)}MB)`
    );
  }

  console.log(`\nDone. Optimized images are in public/work/.`);
  console.log(`Reference them in lib/projects.ts as "/work/<filename>.jpg".`);
}

run();
