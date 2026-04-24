# Homepage GitHub + Vercel Deployment Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Publish the current Astro homepage from `D:\Code\blog\homepage` through a GitHub-connected Vercel project with automatic redeploys on every push.

**Architecture:** Keep the current directory layout and use `D:\Code\blog` as the GitHub repository root. In Vercel, set the project `Root Directory` to `homepage` so only the Astro site is built, while the rest of the workspace can stay in the same repo. Astro already builds a static site into `homepage/dist`, so no server adapter or runtime environment variables are required.

**Tech Stack:** Git 2.46, GitHub, Vercel, Astro 5 static output, npm

---

## Relevant Files

- `homepage/package.json`: defines the install and build entrypoints used by Vercel
- `homepage/astro.config.mjs`: confirms the site uses `output: "static"`
- `homepage/.gitignore`: keeps local build artifacts and dependencies out of Git
- `homepage/src/data/site.ts`: main structured content file for later updates
- `homepage/public/`: static images, PDFs, and other deployed assets
- `homepage/dist/`: generated build output that should be produced locally but not committed

### Task 1: Verify The Release Candidate Locally

**Files:**
- Check: `homepage/package.json`
- Check: `homepage/astro.config.mjs`
- Check: `homepage/src/data/site.ts`
- Check: `homepage/public/`
- Output: `homepage/dist/`

- [x] **Step 1: Confirm the site builds with Astro**

Run:

```powershell
cd D:\Code\blog\homepage
npm.cmd run build
```

Expected: Astro finishes successfully and writes static files to `D:\Code\blog\homepage\dist\`.

- [x] **Step 2: Confirm the build script is what Vercel will use**

Run:

```powershell
Get-Content D:\Code\blog\homepage\package.json
```

Expected: the `scripts` block includes `build: "astro build"`.

- [x] **Step 3: Confirm the site is static**

Run:

```powershell
Get-Content D:\Code\blog\homepage\astro.config.mjs
```

Expected: the config includes `output: "static"`.

- [x] **Step 4: Spot-check the generated routes**

Run:

```powershell
Get-ChildItem D:\Code\blog\homepage\dist
```

Expected: output includes entries such as `index.html`, `cv`, `news`, `knowledge`, `apps`, and `en`.

### Task 2: Create A Git Repository And Push It To GitHub

**Files:**
- Check: `homepage/.gitignore`
- Include: `homepage/`
- Include: `docs/`
- Include: `assets/`

- [ ] **Step 1: Confirm ignored directories are already covered**

Run:

```powershell
Get-Content D:\Code\blog\homepage\.gitignore
```

Expected: the file lists `node_modules`, `dist`, `.astro`, and `.npm-cache`.

- [ ] **Step 2: Initialize Git at the workspace root**

Run:

```powershell
cd D:\Code\blog
git init
```

Expected: Git creates `.git` under `D:\Code\blog`.

- [ ] **Step 3: Stage files and verify ignored build artifacts stay out**

Run:

```powershell
git add .
git status --short
```

Expected: project files are staged, but `homepage/node_modules`, `homepage/dist`, `homepage/.astro`, and `homepage/.npm-cache` do not appear in the status list.

- [ ] **Step 4: Create the initial commit**

Run:

```powershell
git commit -m "chore: initialize blog repository"
```

Expected: Git creates the first commit on the default branch.

- [ ] **Step 5: Create an empty GitHub repository in the browser**

Open GitHub and create a new repository without a README, `.gitignore`, or license.

Expected: GitHub shows a remote URL similar to `https://github.com/<your-username>/<your-repo>.git`.

- [ ] **Step 6: Link the remote and push the main branch**

Run:

```powershell
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

Expected: the `main` branch appears on GitHub and the remote tracking branch is established.

### Task 3: Import The GitHub Repository Into Vercel

**Files:**
- Build From: `homepage/`
- Read: `homepage/package.json`
- Output: `homepage/dist/`

- [ ] **Step 1: Import the repository**

In Vercel, choose `Add New...` -> `Project`, then import the GitHub repository you just pushed.

Expected: Vercel reaches the project configuration screen for the selected repository.

- [ ] **Step 2: Set the project build configuration**

Use these values:

```text
Framework Preset: Astro
Root Directory: homepage
Install Command: npm install
Build Command: npm run build
Output Directory: dist
```

Expected: Vercel resolves `homepage/package.json` as the build source.

- [ ] **Step 3: Start the first deployment**

Click `Deploy`.

Expected: Vercel completes the build and returns a production URL such as `https://<project-name>.vercel.app`.

- [ ] **Step 4: Save the project settings**

After the first deployment succeeds, keep `Root Directory = homepage` unchanged for future deployments.

Expected: every later push to `main` triggers an automatic redeploy without additional setup.

### Task 4: Verify The Production Site

**Files:**
- Check: `homepage/src/pages/index.astro`
- Check: `homepage/src/pages/cv.astro`
- Check: `homepage/src/pages/news.astro`
- Check: `homepage/src/pages/knowledge.astro`
- Check: `homepage/src/pages/apps.astro`
- Check: `homepage/public/resources/`

- [ ] **Step 1: Verify the main top-level routes**

Open these URLs in the deployed Vercel site:

```text
/
/cv/
/news/
/knowledge/
/apps/
/en/
```

Expected: each route loads without a 404 or blank page.

- [ ] **Step 2: Verify at least one content detail route**

Open one generated knowledge page, for example:

```text
/knowledge/lg-formula-sheet/
```

Expected: the detail page loads and its static assets resolve correctly.

- [ ] **Step 3: Verify one binary asset**

Open one PDF or image URL from the deployed site, for example a file under `/resources/pdf/` or `/resources/profile/`.

Expected: the browser downloads or renders the asset successfully.

- [ ] **Step 4: Check the Vercel deployment log**

Open the latest deployment in Vercel and review the build summary.

Expected: no failed build steps, missing dependency errors, or missing output directory errors.

### Task 5: Use The Ongoing Update Workflow

**Files:**
- Modify: `homepage/src/data/site.ts`
- Modify: `homepage/public/resources/`
- Check: `homepage/UPDATE_GUIDE.md`

- [ ] **Step 1: Edit content or assets locally**

Typical changes happen in:

```text
homepage/src/data/site.ts
homepage/public/resources/
```

Expected: content edits stay within the current site structure and do not require Vercel config changes.

- [ ] **Step 2: Rebuild locally before every push**

Run:

```powershell
cd D:\Code\blog\homepage
npm.cmd run build
```

Expected: the local build succeeds before anything is pushed upstream.

- [ ] **Step 3: Commit the update**

Run:

```powershell
cd D:\Code\blog
git add .
git commit -m "content: update homepage content"
```

Expected: Git records only the source-content changes, not ignored dependencies or build output.

- [ ] **Step 4: Push and let Vercel redeploy automatically**

Run:

```powershell
git push
```

Expected: Vercel starts a new deployment automatically and updates production after the build finishes.

### Task 6: Add A Custom Domain Later If Needed

**Files:**
- No repository file changes required

- [ ] **Step 1: Add the domain in Vercel**

Open the Vercel project settings and add your custom domain under `Domains`.

Expected: Vercel shows the required DNS records for the domain.

- [ ] **Step 2: Apply the DNS records at your domain provider**

Copy the exact `A`, `CNAME`, or nameserver values shown by Vercel into your DNS provider.

Expected: the domain moves to `Valid Configuration` after DNS propagation.

- [ ] **Step 3: Re-test the main routes on the custom domain**

Open the same routes from Task 4 on the custom domain.

Expected: the custom domain serves the same site as the `vercel.app` domain.

## Common Pitfalls

- If Vercel cannot find `package.json`, the `Root Directory` is almost certainly not set to `homepage`.
- If a deployment succeeds locally but fails in Vercel, compare the configured build command to `homepage/package.json` and make sure it is still `npm run build`.
- If you later deploy the site under a subpath such as `https://example.com/homepage/`, you will need to add Astro `base` configuration in `homepage/astro.config.mjs`. A normal custom root domain does not need this.
- If the repository becomes too heavy because of large PDFs or images, move infrequently accessed files to an external storage location or reduce asset sizes before pushing.
