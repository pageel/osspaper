---
name: "Academic Reviewer"
description: "Sidecar skill for reviewing scholarly content PRs against academic standards (Phase 3 Cognitive Gate)."
version: 1.0.0
---

# Academic Reviewer Skill

> This skill is loaded on-demand via the `/para-skill` workflow or manually invoked by the Maintainer to assess Pull Requests.

## Instructions
1. Analyze the Markdown content for academic tone, clear methodology, and proper citation format.
2. Check for potential plagiarism or low-effort generated content.
3. Validate that the complexity and domain match the category specified in the YAML Frontmatter.
4. Output a summary report indicating `APPROVE` or `REJECT` with specific remediation steps for the author.
