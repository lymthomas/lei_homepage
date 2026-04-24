import { readFileSync } from "node:fs";
import { join } from "node:path";
import process from "node:process";

const root = process.cwd();
const heroTemplate = readFileSync(join(root, "src/templates/HomePage.astro"), "utf8");

const checks = [
  {
    condition: !heroTemplate.includes("/resources/profile/selfie.JPG"),
    message: "Homepage hero should not reference the casual profile photo."
  },
  {
    condition: !heroTemplate.includes("hero-portrait-card"),
    message: "Homepage hero should not render a separate portrait card."
  },
  {
    condition: heroTemplate.includes('<article class="spotlight-card reveal">'),
    message: "Homepage hero should promote the academic spotlight card to the main right-side element."
  }
];

const failures = checks.filter((check) => !check.condition);

if (failures.length > 0) {
  for (const failure of failures) {
    console.error(`FAIL: ${failure.message}`);
  }
  process.exit(1);
}

console.log("PASS: Homepage hero matches the approved academic-first structure.");
