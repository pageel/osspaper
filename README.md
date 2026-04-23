<div align="center">
  <img src="./public/logo.svg" alt="OSSPaper Logo" width="120" />
  <h1>OSSPaper</h1>
  <p><b>An Open Source Scholarly Publishing Platform powered by Agentic AI.</b></p>

  <!-- Badges -->
  <p>
    <img src="https://img.shields.io/badge/Ebooks-3-blue.svg" alt="Ebooks">
    <img src="https://img.shields.io/badge/Papers-1-green.svg" alt="Papers">
    <img src="https://img.shields.io/badge/Authors-1-purple.svg" alt="Authors">
    <a href="./LICENSE"><img src="https://img.shields.io/badge/License-MIT%20%7C%20CC%20BY--SA%204.0-darkblue.svg" alt="License"></a>
    <a href="https://github.com/pageel/osspaper/pulls"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs Welcome"></a>
  </p>
</div>

---

> **OSSPaper** is an open, "Markdown-First" platform designed to host high-quality scholarly documents, technical analysis, and ebooks. We aim to democratize technical publishing by eliminating complex CMS platforms and relying on a pure Git-based workflow augmented with AI verification.

## 📖 Table of Contents

- [About The Project](#-about-the-project)
- [Key Features](#-key-features)
- [Architecture & Governance](#-architecture--governance)
  - [Author-Centric Git-as-CMS](#author-centric-git-as-cms)
  - [Dual-Gate Quality Control](#dual-gate-quality-control)
- [Library Statistics](#-library-statistics)
- [Getting Started (Contributing)](#-getting-started-contributing)
- [Taxonomy & Classification](#-taxonomy--classification)
- [License](#-license)

---

## 💡 About The Project

Traditional academic publishing and personal technical blogging are often fragmented across disparate platforms. OSSPaper unifies knowledge distribution through a centralized, community-driven repository. Our goal is to create a frictionless environment where engineers, researchers, and tech leads can share deep technical insights using nothing but Markdown and Git.

## ✨ Key Features

- **Markdown-First Workflow:** Write in your favorite IDE. No web-based WYSIWYG editors or databases required.
- **Agentic AI Reviews:** Pull Requests are analyzed by an autonomous AI agent to ensure academic rigor and semantic enrichment.
- **Lightning Fast Performance:** Designed for perfect Core Web Vitals and zero-JS static rendering.
- **Author Isolation:** Every author receives a dedicated namespace, minimizing merge conflicts and ensuring clear ownership.

## 🏗 Architecture & Governance

### Author-Centric Git-as-CMS

All content within OSSPaper is managed via a Git-as-CMS model. Writers submit their content into their dedicated directory (`content/authors/[username]/`). The platform automatically aggregates, categorizes, and renders this content into a beautiful web interface.

### Dual-Gate Quality Control

To maintain the highest standards of technical writing, OSSPaper enforces a strict, two-tier governance protocol:

1. **Technical Gate (GitHub Actions):** 
   - Mandatory file size limits (Images ≤ 500KB).
   - Strict file extension whitelisting.
   - Anti-XSS and malicious tag scanning.
   - Taxonomy and YAML Frontmatter validation.
2. **Cognitive Gate (Antigravity AI):** 
   - An AI Agent acts as an academic peer reviewer, checking for coherence, logical flow, and formatting prior to merging.

## 📊 Library Statistics

*Our repository is actively growing. Current collection metrics:*

| Category | Count | Description |
| :--- | :---: | :--- |
| **Research Papers** | 1 | Deep-dive analytical research and architectural studies. |
| **Ebooks** | 3 | Comprehensive guides, manuals, and experience compilations. |
| **Total** | **4** | |

## 🚀 Getting Started (Contributing)

We welcome contributions from developers, researchers, and technical writers globally!

1. **Fork the repository** and clone it locally.
2. **Create your author profile** at `content/authors/your-username/_profile.json`.
3. **Write your content** in your dedicated directory using our [provided templates](content/_templates/).
4. **Run local validations** to ensure your document passes the Technical Gate:
   ```bash
   npm run test
   ```
5. **Submit a Pull Request** to the `main` branch.

> **Note:** For comprehensive instructions, including YAML Frontmatter schemas and folder structures, please review our [CONTRIBUTING.md](CONTRIBUTING.md) guide.

## 🗂 Taxonomy & Classification

To ensure an organized knowledge graph, all content must be classified according to our standardized taxonomy.

**Supported Categories:**
- `Documentation`, `Technical Analysis`, `Tutorial`, `Research Paper`, `Ebook`

**Supported Domains:**
- `Agentic Workflow`, `Artificial Intelligence`, `Cloud Architecture`, `Web Performance`, `Security`

*(See `content/taxonomy.json` for the complete list).*

## 📜 License

OSSPaper utilizes a dual-license structure to protect both the platform infrastructure and the intellectual property of our contributing authors.

- **Source Code:** Distributed under the [MIT License](LICENSE).
- **Published Content:** Distributed under the **CC BY-SA 4.0 License**. Authors retain full copyright over their writing while granting OSSPaper and the community the right to share and adapt the material with proper attribution.
