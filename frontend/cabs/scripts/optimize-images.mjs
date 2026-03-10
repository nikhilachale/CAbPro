import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const projectRoot = process.cwd();
const srcImagesDir = path.join(projectRoot, "src", "images");
const optimizedDir = path.join(srcImagesDir, "optimized");
const publicImagesDir = path.join(projectRoot, "public", "images");

const conversions = [
  { input: "bg.png", output: "brand-logo.webp", width: 320 },
  { input: "mini.png", output: "mini.webp", width: 480 },
  { input: "sedan.png", output: "sedan.webp", width: 480 },
  { input: "suv.png", output: "suv.webp", width: 480 },
  { input: "luxury.png", output: "luxury.webp", width: 480 },
  { input: "maheshwar.jpg", output: "maheshwar.webp", width: 800 },
  { input: "ujjain.jpg", output: "ujjain.webp", width: 800 },
  { input: "omkareshwar.jpg", output: "omkareshwar.webp", width: 800 },
  { input: "jamgate.jpg", output: "jamgate.webp", width: 800 },
  { input: "patalpani.jpg", output: "patalpani.webp", width: 800 },
  { input: "rajwada.jpg", output: "rajwada.webp", width: 800 },
  { input: "india.png", output: "india.webp", width: 800 },
  { input: "mini logo.png", output: "mini-logo.webp", width: 120 },
  { input: "muv logo.png", output: "muv-logo.webp", width: 120 },
  { input: "suv logo.png", output: "suv-logo.webp", width: 120 },
  { input: "innova logo.png", output: "innova-logo.webp", width: 120 },
  { input: "sedan logo.png", output: "sedan-logo.webp", width: 120 },
];

const heroSource = "cover2.jpg";

await fs.mkdir(optimizedDir, { recursive: true });
await fs.mkdir(publicImagesDir, { recursive: true });

for (const file of conversions) {
  const inputPath = path.join(srcImagesDir, file.input);
  const outputPath = path.join(optimizedDir, file.output);

  await sharp(inputPath)
    .rotate()
    .resize({ width: file.width, withoutEnlargement: true })
    .webp({ quality: 80, effort: 6 })
    .toFile(outputPath);

  console.log(`Created ${path.relative(projectRoot, outputPath)}`);
}

await sharp(path.join(srcImagesDir, heroSource))
  .rotate()
  .resize({ width: 768, withoutEnlargement: true })
  .webp({ quality: 78, effort: 6 })
  .toFile(path.join(publicImagesDir, "hero-768.webp"));

await sharp(path.join(srcImagesDir, heroSource))
  .rotate()
  .resize({ width: 1280, withoutEnlargement: true })
  .webp({ quality: 78, effort: 6 })
  .toFile(path.join(publicImagesDir, "hero-1280.webp"));

await sharp(path.join(srcImagesDir, heroSource))
  .rotate()
  .resize({ width: 1280, withoutEnlargement: true })
  .jpeg({ quality: 80, mozjpeg: true })
  .toFile(path.join(publicImagesDir, "hero-1280.jpg"));

const publicRootCopies = [
  ["favicon-16x16.png", "favicon-16x16.png"],
  ["favicon-32x32.png", "favicon-32x32.png"],
  ["apple-touch-icon.png", "apple-touch-icon.png"],
  ["android-chrome-192x192.png", "android-chrome-192x192.png"],
  ["android-chrome-512x512.png", "android-chrome-512x512.png"],
  ["favicon.ico", "favicon.ico"],
];

for (const [from, to] of publicRootCopies) {
  const fromPath = path.join(srcImagesDir, from);
  const toPath = path.join(projectRoot, "public", to);
  await fs.copyFile(fromPath, toPath);
}

const manifest = {
  name: "TheCabBro",
  short_name: "TheCabBro",
  start_url: "/",
  display: "standalone",
  background_color: "#ffffff",
  theme_color: "#f97316",
  icons: [
    { src: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
    { src: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
  ],
};

await fs.writeFile(path.join(projectRoot, "public", "site.webmanifest"), JSON.stringify(manifest, null, 2));

console.log("Image optimization completed.");
