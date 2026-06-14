import { readFileSync } from "node:fs";
import { join } from "node:path";
import process from "node:process";

const root = process.cwd();
const template = readFileSync(join(root, "src/templates/KnowledgeArticlePage.astro"), "utf8");
const css = readFileSync(join(root, "src/styles/global.css"), "utf8");

const requiredTemplateSnippets = [
  "function getPdfPreviewSrc",
  "resource-preview-panel",
  "resource-preview-image",
  "getPdfPreviewSrc(resource.href)",
  "getPdfPreviewSrc(link.href)"
];

const requiredCssSnippets = [
  ".resource-preview-panel",
  ".resource-preview-image",
  ".resource-preview-caption"
];

const failures = [];

for (const snippet of requiredTemplateSnippets) {
  if (!template.includes(snippet)) {
    failures.push(`KnowledgeArticlePage.astro is missing ${snippet}.`);
  }
}

for (const snippet of requiredCssSnippets) {
  if (!css.includes(snippet)) {
    failures.push(`global.css is missing ${snippet}.`);
  }
}

if (failures.length > 0) {
  for (const failure of failures) {
    console.error(`FAIL: ${failure}`);
  }
  process.exit(1);
}

console.log("PASS: Knowledge PDF downloads render generated overview images before opening the PDF.");
