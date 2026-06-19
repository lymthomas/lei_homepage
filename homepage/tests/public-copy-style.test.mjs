import { readFileSync } from "node:fs";
import { join } from "node:path";
import process from "node:process";

const root = process.cwd();
const site = readFileSync(join(root, "src/data/site.ts"), "utf8");
const guide = readFileSync(join(root, "UPDATE_GUIDE.md"), "utf8");

const forbiddenPublicCopy = [
  "这一页汇总公开可访问的新闻报道，按时间倒序整理，并为每条报道预留独立图片位置，方便后续继续完善。",
  "这一页承载完整的履历信息，作为主页摘要的展开版本。",
  "以结构化内容维护的中英双语学术主页，便于后续持续扩展。",
  "围绕本科阶段的研究、实验与工具实践，将学术积累与可持续的个人站点结构结合。",
  "这里记录公开报道和阶段性动态，按时间倒序呈现，便于快速了解近期经历。",
  "主页继续作为总入口，新闻、知识库与履历页已经形成更完整的内容层次。",
  "当前公开学校邮箱和课题组公开页面；更多链接可在后续需要时加入。",
  "这里整理教育经历、研究训练、奖励荣誉与实践活动。",
  "这里收录公开报道与阶段性动态，按时间倒序呈现。"
];

const requiredPublicCopy = [
  "本网站主要由 AI Agent 制作与更新。",
  "从教育背景到科研训练、奖励荣誉与社会活动，呈现更完整的个人经历。",
  "整理与我相关的公开报道、项目进展和活动记录，呈现不同阶段的成长轨迹。"
];

const requiredGuideCopy = [
  "对外页面只写给访客看的内容；给 Agent 或维护者看的说明放在本文档，不要渲染到页面上。",
  "履历页是主页摘要的展开版本",
  "新闻页用于汇总公开可访问的新闻报道"
];

const failures = [];

for (const snippet of forbiddenPublicCopy) {
  if (site.includes(snippet)) {
    failures.push(`Public site copy still includes maintenance note: ${snippet}`);
  }
}

for (const snippet of requiredPublicCopy) {
  if (!site.includes(snippet)) {
    failures.push(`Public site copy is missing visitor-facing copy: ${snippet}`);
  }
}

for (const snippet of requiredGuideCopy) {
  if (!guide.includes(snippet)) {
    failures.push(`Update guide is missing maintenance note: ${snippet}`);
  }
}

if (failures.length > 0) {
  for (const failure of failures) {
    console.error(`FAIL: ${failure}`);
  }
  process.exit(1);
}

console.log("PASS: Public copy is visitor-facing and maintenance notes stay in the update guide.");
