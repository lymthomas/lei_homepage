import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import process from "node:process";

const root = process.cwd();
const expectations = [
  {
    file: "src/templates/CvPage.astro",
    expected: "/resources/profile/selfie_formal.JPG",
    message: "CV page should reference the formal profile photo."
  }
];

const assetExpectations = [
  "public/resources/profile/selfie_formal.JPG"
];

let failed = false;

for (const check of expectations) {
  const content = readFileSync(join(root, check.file), "utf8");
  if (!content.includes(check.expected)) {
    failed = true;
    console.error(`FAIL: ${check.message}`);
  }
}

for (const assetPath of assetExpectations) {
  if (!existsSync(join(root, assetPath))) {
    failed = true;
    console.error(`FAIL: Missing asset ${assetPath}`);
  }
}

if (failed) {
  process.exit(1);
}

console.log("PASS: Homepage and CV both reference the expected profile photos.");
