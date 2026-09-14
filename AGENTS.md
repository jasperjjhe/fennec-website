# Fennec website agent guide

## Project

- This is a React 19 + TypeScript + Vite site.
- The active landing page is composed in `src/App.tsx` and styled in `src/index.css`.
- Images used by the site live in `public/images/` and are bundled into the deployment.
- GitHub Pages publishes the `dist/` directory through `.github/workflows/deploy-pages.yml`.

## Non-negotiable site requirements

- Keep this site independent from Fennec's source website. Do not add links, redirects, embeds, API calls, or image URLs pointing to `fennecapp.com` or `app.fennecapp.com`.
- Fennec product information may be represented as local content, but product cards and navigation must use on-page anchors or standalone local routes.
- Do not hotlink graphics. Use the local files in `public/images/` with the project-relative `./images/...` pattern so the site works under the GitHub Pages subpath.
- Preserve the complete frame of product screenshots. Use `object-fit: contain` for screenshots and do not add hover transforms or fixed crops that cut off UI.
- Keep footer links internal to this site unless an external destination is explicitly requested.
- Reuse the existing editorial navy/cream/gold visual system and avoid generic AI-dashboard styling, excessive pills, or unnecessary gradients.

## Development and validation

1. Inspect the existing implementation before editing; preserve unrelated user changes.
2. Run `npm run build` after source changes. TypeScript is strict and unused locals/parameters are errors.
3. Run `git diff --check`.
4. Run `rg -n -i "fennecapp\\.com" src public dist .github` and require no matches in application or deployment files. (The agent guides themselves mention the blocked domain to document the rule.)
5. Verify local image paths and, when browser tooling is available, confirm every image loads and screenshot images use `object-fit: contain`.
6. Do not commit `node_modules/` or generated `dist/` changes unless the workflow explicitly requires them.

## Deployment

- A push to `master` triggers the GitHub Pages workflow.
- Confirm the workflow build and deploy jobs succeed before reporting a deployment.
- Public site: `https://jasperjjhe.github.io/fennec-website/`.
- Do not use force-pushes, destructive resets, or broad file deletion.

`CLAUDE.md` and `CODEX.md` point to this file so all coding agents use the same project rules.
