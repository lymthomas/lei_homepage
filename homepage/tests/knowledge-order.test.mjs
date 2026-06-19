import { readFileSync } from "node:fs";
import { join } from "node:path";
import process from "node:process";

const root = process.cwd();
const library = readFileSync(join(root, "src/data/library.ts"), "utf8");

const expectedOrder = [
  "reinforcement-learning-notes",
  "lg-formula-sheet",
  "scientific-english-writing-communication",
  "philosophy-assignments",
  "modern-physics-experiment-reports",
  "today-physics-outline",
  "general-physics-experiment-ii",
  "general-physics-experiment-i",
  "microelectronics-introduction",
  "computational-physics-assignments",
  "xi-thoughts-course",
  "xi-outline"
];

const orderMatch = library.match(/const knowledgeOrder = \[([\s\S]*?)\];/);

if (!orderMatch) {
  console.error("FAIL: Missing knowledgeOrder.");
  process.exit(1);
}

const actualOrder = [...orderMatch[1].matchAll(/"([^"]+)"/g)].map((match) => match[1]);
const failures = [];

for (const slug of expectedOrder) {
  if (!actualOrder.includes(slug)) {
    failures.push(`knowledgeOrder is missing ${slug}.`);
  }
}

const relevantActualOrder = actualOrder.filter((slug) => expectedOrder.includes(slug));

if (JSON.stringify(relevantActualOrder) !== JSON.stringify(expectedOrder)) {
  failures.push(`Expected known knowledge order ${expectedOrder.join(" -> ")} but got ${relevantActualOrder.join(" -> ")}.`);
}

if (!library.includes("function sortKnowledgeArticles")) {
  failures.push("Missing sortKnowledgeArticles function.");
}

if (!library.includes("return sortKnowledgeArticles(knowledgeArticles).map")) {
  failures.push("Knowledge collection should use sortKnowledgeArticles.");
}

if (failures.length > 0) {
  for (const failure of failures) {
    console.error(`FAIL: ${failure}`);
  }
  process.exit(1);
}

console.log("PASS: Knowledge cards use the approved manual order for existing entries.");
