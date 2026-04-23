# Author-Centric Governance Guard

> Protects project architecture against accidental modifications.

## Scope
- [x] Project `osspaper`

## Triggers
- Editing content inside `content/`
- Running validation scripts

## Rules
1. **Isolation:** Authors MUST ONLY create or modify files within their designated directory `content/authors/[username]/`.
2. **Assets:** All images MUST be placed in `content/authors/[username]/assets/` and MUST be under 500KB.
3. **No Root Edits:** Agents MUST NOT modify `content/_templates/` or `scripts/` when acting on behalf of a regular author's PR.
