# CODEX.md

This file provides guidance to Codex and other coding agents that look for Codex-specific repository instructions. Read [`AGENTS.md`](./AGENTS.md) first; it is the canonical project guide.

## Quick Context

- **Product:** standalone marketing site for a nightlife/hospitality operating system.
- **Stack:** React 19, TypeScript, Vite, Framer Motion, Lucide React, Tailwind Vite plugin.
- **Entry:** `src/main.tsx` → `src/App.tsx`.
- **Styles:** `src/index.css`.
- **Assets:** `public/images/`, referenced as `./images/<filename>`.
- **Deployment:** GitHub Pages from `master`, publishing `dist/`.
- **Public URL:** `https://jasperjjhe.github.io/fennec-website/`.
- **Backend:** none. The waitlist form is client-only and does not persist data.

## Before Making Changes

1. Read `AGENTS.md` and inspect the current worktree.
2. Trace imports before editing legacy or unreferenced components.
3. Keep the page standalone: no source-domain links, redirects, embeds, fetches, or remote image URLs.
4. Use local screenshot assets and preserve their full frames with `object-fit: contain`.
5. Preserve the navy/cream/gold editorial design direction and human-sounding copy.

## Validation Checklist

```bash
npm run build
git diff --check
rg -n -i "fennecapp\.com" src public dist .github
```

The build and diff check must pass. The reference scan must return no application/deployment matches. If browser tooling is available, check image loading, screenshot framing, mobile navigation, footer anchors, and the waitlist success state.

## Security Checklist

- [ ] No secrets, credentials, tokens, or PII were added.
- [ ] No dynamic `dangerouslySetInnerHTML`, `innerHTML`, `eval`, or `new Function` was introduced.
- [ ] No user-controlled URL, redirect, fetch, iframe, or `postMessage` origin was trusted.
- [ ] New npm packages were reviewed for exact identity, maintainer, publish age, install scripts, and lockfile changes.
- [ ] No package newer than 7 days was added without explicit approval.
- [ ] `package-lock.json` remains synchronized.
- [ ] Destructive Git or deployment operations were not performed without user authorization.

## Documentation Governance

- Any Markdown update requires explicit user confirmation naming the file(s) and scope before editing; never change these instructions as incidental cleanup.
- Before editing, state the intended documentation scope. After editing, review the complete diff for accuracy, security, scope, and consistency with `AGENTS.md`.
- Keep documentation changes focused and do not bundle unrelated source changes.
- The user's explicit request for a Markdown update confirms only that requested scope. Do not infer approval for other `.md` files.
- Do not commit or push Markdown changes until the reviewed diff is valid and the user has requested the commit or push.

## Handoff

Report the result, validation status, relevant caveats, documentation changes, and whether the work was committed or pushed. Keep the response concise and do not add AI-attribution comments or `Co-Authored-By` lines. For full security, deployment, and collaboration rules, use `AGENTS.md`.
