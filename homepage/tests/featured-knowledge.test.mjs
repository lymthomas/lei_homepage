import { readFileSync } from "node:fs";
import { join } from "node:path";
import process from "node:process";

const root = process.cwd();
const library = readFileSync(join(root, "src/data/library.ts"), "utf8");

const articleBlocks = [...library.matchAll(/\{\s*slug: "([^"]+)",[\s\S]*?featured: (true|false),/g)].map((match) => ({
  slug: match[1],
  featured: match[2] === "true"
}));

const expectedFeatured = ["lg-formula-sheet", "reinforcement-learning-notes"];
const actualFeatured = articleBlocks.filter((article) => article.featured).map((article) => article.slug);

const failures = [];

for (const slug of expectedFeatured) {
  if (!actualFeatured.includes(slug)) {
    failures.push(`Expected ${slug} to be featured.`);
  }
}

for (const slug of actualFeatured) {
  if (!expectedFeatured.includes(slug)) {
    failures.push(`Expected ${slug} not to be featured.`);
  }
}

if (failures.length > 0) {
  for (const failure of failures) {
    console.error(`FAIL: ${failure}`);
  }
  process.exit(1);
}

console.log("PASS: Featured knowledge cards are LG Formula Sheet and Reinforcement Learning Notes only.");
