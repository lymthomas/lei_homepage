# Project Working Rules

## Archive workflow

- Before starting any focused change, check `git status -sb`, recent commits, and existing archive tags.
- If previous completed work has not been committed or archived, ask whether it should be archived before continuing.
- After completing and verifying a focused change, create a Git archive point for that change before moving on.
- Prefer an annotated tag named `archive/YYYY-MM-DD-short-topic` for archive points.
- Keep unrelated local changes out of commits, tags, and deployments unless the user explicitly asks to include them.

## Asset cleanup

- After completing each focused task, clean up files in `assets/` that were only needed for that task and are no longer required.
- Keep `assets/` tidy; do not leave copied source files, temporary exports, or intermediate materials there once their public-site equivalents have been placed in `homepage/public/resources/`.

## Deployment notes

- The public homepage lives in `homepage/`.
- Build from `homepage/` with `npm.cmd run build`.
- GitHub/Vercel deployment is triggered by pushing `main`.
- Netlify production deployment uses the linked `lei-homepage` site.
