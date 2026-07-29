import { minify } from "npm:html-minifier-terser@7";

const html = await Deno.readTextFile("src/index.html");
const css = await Deno.readTextFile("src/style.css");
const js = await Deno.readTextFile("src/script.js");

let merged = html
  .replace(
    /<link rel="stylesheet" href="style\.css"\s*\/?>/,
    `<style>${css}</style>`,
  )
  .replace(
    '<script src="script.js"></script>',
    `<script>${js}</script>`,
  );

const minified = await minify(merged, {
  collapseWhitespace: true,
  removeComments: true,
  minifyCSS: true,
  minifyJS: true,
});

await Deno.mkdir("dist", { recursive: true });
await Deno.writeTextFile("dist/index.html", minified);
await Deno.copyFile("src/favicon.svg", "dist/favicon.svg");
await Deno.copyFile("src/preview.jpeg", "dist/preview.jpeg");
await Deno.copyFile("src/poster.jpg", "dist/poster.jpg");
