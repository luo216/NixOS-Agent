---
name: skill-library-maintainer
description: Use when adding, removing, renaming, reorganizing, or documenting large skill knowledge bases or template libraries in this repository, especially nixos-knowledge-base and nixos-patterns.
---

# Skill Library Maintainer

Use this skill only for large skill assets such as knowledge bases and template libraries.

Normal small skills do not need this level of process.

## Scope

- `backend/config/skills/nixos-knowledge-base/`
- `backend/config/skills/nixos-patterns/`
- future large local knowledge or template libraries with many files

## File Tree

```text
.
`-- SKILL.md
```

## Rules

- Prefer improving navigation before reshaping content.
- For knowledge bases, keep mirrored source content stable; add or refine `SKILL.md`, `README.md`, `MAP.md`, and `INDEX.md` style navigation around it.
- For template libraries, keep entry paths shallow and easy to scan.
- For template libraries, each template README should expose a short `File Tree` or `High-Level Tree` so planner can skim structure before reading the full content.
- Distinguish starter templates from reference repos in the docs even if they share one flat directory.
- When adding a new large branch, update the nearest navigation document in the same change.
- Do not dump huge full trees into `SKILL.md`; use a high-signal tree and expose the most common second-level entry points only.
- Do not dump huge full trees into template README files either; use one screen of high-signal structure that helps early template selection.
- If names are ambiguous, rename toward searchable repo-like or purpose-like names.
- If planner or other roles depend on the old path or naming, update those references in the same change.

## Typical Checklist

- Is the entry path easy to guess?
- Can a first-time reader tell where to start?
- Can planner understand the template shape from one short structure tree?
- Does the docs layer explain starter vs reference, light vs heavy, practical vs authoritative?
- Did any existing skill manual or README keep an outdated path?
- Did you append `codex-progress.md` and create a git commit?
