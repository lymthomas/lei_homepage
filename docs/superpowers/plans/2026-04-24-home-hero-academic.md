# Home Hero Academic-First Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Remove the casual portrait from the homepage hero and promote the dark academic spotlight card into the single right-column focal element.

**Architecture:** Keep the existing Astro homepage template and global stylesheet, but simplify the hero markup so the left column remains the sole narrative block and the right column contains only one academic profile card. Use small file-scoped regression scripts to verify the hero structure before and after the change.

**Tech Stack:** Astro, static `.astro` templates, global CSS, Node-based regression scripts

---

### Task 1: Lock The Approved Hero Structure

**Files:**
- Create: `homepage/tests/home-hero-structure.test.mjs`

- [ ] **Step 1: Write the failing test**

```js
import { readFileSync } from "node:fs";
import { join } from "node:path";
import process from "node:process";

const root = process.cwd();
const heroTemplate = readFileSync(join(root, "src/templates/HomePage.astro"), "utf8");

const checks = [
  !heroTemplate.includes("/resources/profile/selfie.JPG"),
  !heroTemplate.includes("hero-portrait-card"),
  heroTemplate.includes('<article class="spotlight-card reveal">')
];

if (checks.includes(false)) {
  process.exit(1);
}
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node tests/home-hero-structure.test.mjs`
Expected: FAIL because the current hero still references the casual photo and separate portrait card.

- [ ] **Step 3: Commit**

```bash
git add tests/home-hero-structure.test.mjs
git commit -m "test: lock approved homepage hero structure"
```

### Task 2: Simplify The Hero Markup

**Files:**
- Modify: `homepage/src/templates/HomePage.astro`

- [ ] **Step 1: Write minimal implementation**

```astro
<section class="hero">
  <div class="hero-copy reveal">
    <p class="eyebrow">{pick(locale, ui.home.eyebrow)}</p>
    <h1>{pick(locale, profile.name)}</h1>
    <p class="hero-role">{pick(locale, profile.role)}</p>
    <p class="hero-summary">{pick(locale, profile.summary)}</p>

    <div class="hero-actions">
      <a class="button primary" href={routes[locale].cv}>{pick(locale, ui.home.primaryCta)}</a>
      <a class="button secondary" href={routes[locale].knowledge}>{pick(locale, ui.home.secondaryCta)}</a>
    </div>
  </div>

  <article class="spotlight-card reveal">
    <!-- existing academic card content -->
  </article>
</section>
```

- [ ] **Step 2: Run test to verify it passes**

Run: `node tests/home-hero-structure.test.mjs`
Expected: PASS

- [ ] **Step 3: Commit**

```bash
git add src/templates/HomePage.astro
git commit -m "feat: simplify homepage hero structure"
```

### Task 3: Tighten The Hero Styling

**Files:**
- Modify: `homepage/src/styles/global.css`
- Test: `homepage/tests/home-hero-structure.test.mjs`

- [ ] **Step 1: Write minimal implementation**

```css
.hero {
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(320px, 0.85fr);
  gap: 28px;
  align-items: start;
}

.spotlight-card {
  height: fit-content;
}
```

- [ ] **Step 2: Remove portrait-card-only rules**

```css
/* delete .hero-panel and .hero-portrait-card rules */
```

- [ ] **Step 3: Run verification**

Run: `node tests/home-hero-structure.test.mjs`
Expected: PASS

- [ ] **Step 4: Commit**

```bash
git add src/styles/global.css
git commit -m "style: promote academic spotlight card in homepage hero"
```

### Task 4: Full Verification

**Files:**
- Test: `homepage/tests/home-hero-structure.test.mjs`

- [ ] **Step 1: Run the focused regression check**

Run: `node tests/home-hero-structure.test.mjs`
Expected: `PASS: Homepage hero matches the approved academic-first structure.`

- [ ] **Step 2: Run the existing profile image regression check**

Run: `node tests/profile-images.test.mjs`
Expected: FAIL because the homepage no longer uses the casual portrait and the older test must be updated to reflect the new scope.

- [ ] **Step 3: Update or replace obsolete verification**

```js
// Keep the CV portrait assertion and remove the homepage casual-photo expectation.
```

- [ ] **Step 4: Run the site build**

Run: `npm.cmd run build`
Expected: Astro build completes successfully with static pages generated.

- [ ] **Step 5: Commit**

```bash
git add tests/profile-images.test.mjs tests/home-hero-structure.test.mjs
git commit -m "test: align homepage hero verification with academic-first design"
```
