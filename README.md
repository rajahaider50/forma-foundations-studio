# Forma — 50 Product Foundations

A showcase catalog for 50 local-first product template foundations. The source package contains four web surfaces per template, Android **source projects** (not prebuilt APK files), backend/provider contracts, shared source, documentation and tests. The hosted release scope is the central catalog plus the 50 `public-website` apps; all other source surfaces remain in this public repository.

## Public website deployments

Public repository: https://github.com/rajahaider50/forma-foundations-studio. The Git-connected catalog is live at https://forma-foundations-studio.vercel.app. Vercel limits a Git repository to 25 linked projects, so the catalog plus templates 01–24 are Git-connected; templates 25–50 are deployed directly from the same repository's `main` source. Those direct-source projects require a redeploy after later source changes. All 50 public demo domains returned HTTP 200 in the final verification on 2026-10-09. See [`LIVE_LINKS.md`](LIVE_LINKS.md) for the complete list. The admin panel is browser-local only and does not publish edits to other visitors; no hosted database or authentication service is configured.

Vercel monorepo projects use these root directories:

- Catalog: `catalog`
- Public demo for template `NN-name`: `premium-50-template-v5/NN-name/public-website`

Intended project names are recorded as `forma-p50-NN-name` in `catalog/assets/templates.json`. Project creation and public URL availability are not claimed until Vercel reports each deployment ready and the URL is verified.

## Admin limitation

The catalog's built-in admin drawer edits display titles in the current browser's `localStorage`. There is no login, shared database, server API or cross-device synchronization. These edits do **not** change the deployed catalog for other visitors. Do not use it for confidential data or treat it as a protected administrator console. Downloaded JSON is a local backup only.

## Local preview

```sh
cd catalog
python3 -m http.server 8000
```

Then open `http://localhost:8000`. All 50 template sources are under `premium-50-template-v5/`.

## Android

Android folders are source projects. The archive contains no APK files or signing keys. APK compilation/signing are deferred; Android source is included at this stage.

## Security baseline

All web manifests pin Next.js `15.5.27` and React/React DOM `18.3.1`. The source code had an identical duplicate `LocalRepository` declaration in each template; this was removed so the selected public-site apps compile. See the [official Next.js May 2026 security release](https://vercel.com/changelog/next-js-may-2026-security-release) and the [September 2026 security release notice](https://nextjs.org/blog/upcoming-nextjs-security-release-september-2026); keep framework versions current before future deployments.

## Production readiness

These are reusable engineering foundations and local-first demos, not a claim that client-specific production credentials, app-store signing keys, server-backed identity or live third-party integrations are complete. See each template's README and release-readiness notes before production use.
