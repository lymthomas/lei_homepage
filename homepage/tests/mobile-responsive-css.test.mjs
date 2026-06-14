import { readFileSync } from "node:fs";
import { join } from "node:path";
import process from "node:process";

const root = process.cwd();
const css = readFileSync(join(root, "src/styles/global.css"), "utf8");

function extractMediaBlock(source, query) {
  const marker = `@media ${query}`;
  const start = source.indexOf(marker);
  if (start === -1) {
    return "";
  }

  const openingBrace = source.indexOf("{", start);
  let depth = 0;

  for (let index = openingBrace; index < source.length; index += 1) {
    const char = source[index];

    if (char === "{") {
      depth += 1;
    }

    if (char === "}") {
      depth -= 1;
    }

    if (depth === 0) {
      return source.slice(openingBrace + 1, index);
    }
  }

  return "";
}

const mobileBlock = extractMediaBlock(css, "(max-width: 640px)");

const requiredMobileRules = [
  { selector: "html,", property: "overflow-x: hidden" },
  { selector: ".site-shell", property: "padding:" },
  { selector: ".topbar", property: "overflow: hidden" },
  { selector: ".nav", property: "overflow-x: auto" },
  { selector: ".hero,", property: "border-radius:" },
  { selector: ".spotlight-card", property: "padding:" },
  { selector: ".metric-grid", property: "gap:" },
  { selector: ".profile-header", property: "align-items:" },
  { selector: ".profile-header-media", property: "max-width:" },
  { selector: ".news-media", property: "aspect-ratio:" },
  { selector: ".news-media", property: "min-height:" },
  { selector: ".article-meta-panel", property: "padding:" },
  { selector: ".contact-list a", property: "overflow-wrap:" }
];

const failures = [];

if (!mobileBlock) {
  failures.push("Missing @media (max-width: 640px) block.");
}

for (const rule of requiredMobileRules) {
  if (!mobileBlock.includes(rule.selector) || !mobileBlock.includes(rule.property)) {
    failures.push(`Missing mobile rule for ${rule.selector} with ${rule.property}.`);
  }
}

if (failures.length > 0) {
  for (const failure of failures) {
    console.error(`FAIL: ${failure}`);
  }
  process.exit(1);
}

console.log("PASS: Mobile responsive CSS keeps handset-specific layout rules inside the small-screen breakpoint.");
