import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import process from "node:process";

const root = process.cwd();
const library = readFileSync(join(root, "src/data/library.ts"), "utf8");

const requiredSnippets = [
  'slug: "scientific-english-writing-communication"',
  'slug: "computational-physics-assignments"',
  'slug: "philosophy-assignments"',
  'slug: "modern-physics-experiment-reports"',
  'slug: "today-physics-outline"',
  'slug: "reinforcement-learning-notes"',
  "science_english_writing/AI-Assisted_Low-Cost_Sensing_for_Everyday_Infrastructure.pdf",
  "science_english_writing/AI-Assisted_Low-Cost_Sensing_for_Everyday_Infrastructure-slides.pdf",
  "science_english_writing/An_approach_to_the_preparation_of_chicken_using_heat_and_flavoring.pdf",
  "computing_physics_assignments/2300011454_雷逸鸣_hw1.pdf",
  "philosophy_assignments/assignment7-2300011454.pdf",
  "modern_physics_experiments/磁光克尔效应_雷逸鸣.pdf",
  "study_notes/今日物理复习提纲.pdf",
  "study_notes/强化学习知识整理.pdf"
];

const requiredFiles = [
  "public/resources/pdf/science_english_writing/AI-Assisted_Low-Cost_Sensing_for_Everyday_Infrastructure.pdf",
  "public/resources/pdf/science_english_writing/AI-Assisted_Low-Cost_Sensing_for_Everyday_Infrastructure-slides.pdf",
  "public/resources/pdf/science_english_writing/An_approach_to_the_preparation_of_chicken_using_heat_and_flavoring.pdf",
  "public/resources/pdf-previews/science_english_writing/AI-Assisted_Low-Cost_Sensing_for_Everyday_Infrastructure.jpg",
  "public/resources/pdf-previews/science_english_writing/AI-Assisted_Low-Cost_Sensing_for_Everyday_Infrastructure-slides.jpg",
  "public/resources/pdf-previews/science_english_writing/An_approach_to_the_preparation_of_chicken_using_heat_and_flavoring.jpg",
  "public/resources/pdf/computing_physics_assignments/2300011454_雷逸鸣_hw1.pdf",
  "public/resources/pdf/computing_physics_assignments/2300011454_雷逸鸣_hw2.pdf",
  "public/resources/pdf/computing_physics_assignments/2300011454_雷逸鸣_hw3.pdf",
  "public/resources/pdf/computing_physics_assignments/2300011454_雷逸鸣_hw4.pdf",
  "public/resources/pdf/philosophy_assignments/assignment1-2300011454.pdf",
  "public/resources/pdf/philosophy_assignments/assignment2-2300011454.pdf",
  "public/resources/pdf/philosophy_assignments/assignment3-2300011454.pdf",
  "public/resources/pdf/philosophy_assignments/assignment4-2300011454.pdf",
  "public/resources/pdf/philosophy_assignments/assignment5-2300011454.pdf",
  "public/resources/pdf/philosophy_assignments/assignment6-2300011454.pdf",
  "public/resources/pdf/philosophy_assignments/assignment7-2300011454.pdf",
  "public/resources/pdf/modern_physics_experiments/HeNe激光器放电条件研究-雷逸鸣.pdf",
  "public/resources/pdf/modern_physics_experiments/Na(Tl)闪烁谱仪_v2.pdf",
  "public/resources/pdf/modern_physics_experiments/扫描电子显微镜_雷逸鸣.pdf",
  "public/resources/pdf/modern_physics_experiments/扫描隧穿显微镜.pdf",
  "public/resources/pdf/modern_physics_experiments/核磁共振-雷逸鸣.pdf",
  "public/resources/pdf/modern_physics_experiments/磁光克尔效应_雷逸鸣.pdf",
  "public/resources/pdf/modern_physics_experiments/非线性对流斑图.pdf",
  "public/resources/pdf/study_notes/今日物理复习提纲.pdf",
  "public/resources/pdf/study_notes/强化学习知识整理.pdf"
];

const forbiddenSnippets = [
  "数学建模大赛论文",
  "math-modeling"
];

const failures = [];

for (const snippet of requiredSnippets) {
  if (!library.includes(snippet)) {
    failures.push(`Library is missing ${snippet}`);
  }
}

for (const filePath of requiredFiles) {
  if (!existsSync(join(root, filePath))) {
    failures.push(`Missing resource ${filePath}`);
  }
}

for (const snippet of forbiddenSnippets) {
  if (library.includes(snippet)) {
    failures.push(`Library should not include ${snippet}`);
  }
}

if (existsSync(join(root, "public/resources/pdf/study_notes/数学建模大赛论文.pdf"))) {
  failures.push("Math modeling paper should not be copied into public resources.");
}

if (failures.length > 0) {
  for (const failure of failures) {
    console.error(`FAIL: ${failure}`);
  }
  process.exit(1);
}

console.log("PASS: New knowledge resources are listed, copied, and exclude the math modeling paper.");
