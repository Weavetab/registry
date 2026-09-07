# WeaveTab Plugin Verification Registry

> The official verification ledger and trust registry for community and official plugins in the [WeaveTab](https://github.com/Weavetab) ecosystem.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)
[![Platform: WeaveTab](https://img.shields.io/badge/platform-WeaveTab-black.svg?style=flat-square)](https://weavetab.pages.dev)

---

## 🛡️ What is This Repository?

This repository acts as the single source of truth for plugin trustworthiness. 

The directory on **[weavetab.pages.dev/plugins](https://weavetab.pages.dev/plugins)** queries [`verified.json`](./verified.json). When an npm package or plugin ID is listed in `verified.json`, it automatically receives the official **Verified** badge (verified SVG icon) on the platform showcase and within agent runtime discovery.

---

## 📋 The `verified.json` Ledger

[`verified.json`](./verified.json) contains the list of verified plugin identifiers:

```json
{
  "version": 1,
  "updatedAt": "2026-09-07T00:00:00Z",
  "verified": [
    "github-automation",
    "seo-auditor",
    "notion-sync",
    "pdf-extract",
    "docker-agent-sandbox",
    "wt-n8n",
    "weavetab-admin",
    "@weavetab/plugin-vision"
  ]
}
```

---

## 🚀 How to Get Your Plugin Verified

To submit your plugin for the Verified Trust Badge, submit a Pull Request following these steps:

### 1. Requirements

Before requesting verification, make sure:
- Your package is published on **npm** (publicly available).
- The plugin root contains a valid **`weavetab.json`** manifest declaring engines, environments, and permissions.
- The source code is publicly accessible on GitHub or GitLab for security auditing.

### 2. Submit a Pull Request

1. Fork this repository.
2. Edit [`verified.json`](./verified.json) and append your package identifier (e.g., `"@scope/your-plugin"` or `"your-plugin"`) to the `verified` array in alphabetical order.
3. Open a Pull Request titled:  
   `feat(verify): add <your-package-name>`
4. In your PR description, provide:
   - **NPM Package URL**: `https://www.npmjs.com/package/<your-package-name>`
   - **Source Repository URL**: `https://github.com/<owner>/<repo>`
   - **Brief Description**: 1–2 sentences explaining what tools or capabilities the plugin provides.
   - **Permission Justification**: Explain why any requested CDP permissions (e.g. `cdp.evaluate`, `cdp.navigate`) are strictly necessary.

---

## 🔍 Verification Audit Checklist

Before approving and merging, WeaveTab maintainers verify:

- [ ] **No Obfuscated Code**: The published bundle matches the source repository with zero obfuscated scripts.
- [ ] **Least-Privilege CDP Scopes**: The plugin only requests CDP permissions essential to its declared tools.
- [ ] **Zero Telemetry / Zero Secret Leakage**: The plugin adheres to WeaveTab's local-first privacy policy (no unauthorized outbound network requests or exfiltration of credentials).
- [ ] **Semantic Versioning**: Follows standard SemVer with active maintenance.

Once merged into `main`, the badge goes live across the platform.

---

## 📄 License

MIT &copy; [WeaveTab Organization](https://github.com/Weavetab) & [fy2ne](https://github.com/fy2ne)
