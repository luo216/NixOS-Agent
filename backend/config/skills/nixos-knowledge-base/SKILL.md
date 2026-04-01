---
name: nixos-knowledge-base
description: Use this skill when the user asks for Nix, Nixpkgs, or NixOS knowledge from local documentation mirrors in this workspace. Start with the high-priority flakes-book branch for practical NixOS and Flakes workflows, then fall back to the official manuals, the NixOS options/module corpus, and the small supplemental wiki navigation branch.
---

# Nix Ecosystem KB

This skill stores local Nix ecosystem documentation as Markdown.

## Use

## File Tree

```text
.
|-- SKILL.md
`-- references/
    |-- MAP.md
    |-- flakes-book/
    |   |-- en/
    |   `-- zh/
    |-- nix-manual/
    |   |-- command-ref/
    |   |-- language/
    |   |-- package-management/
    |   `-- store/
    |-- nixpkgs-manual/
    |   |-- chapters/
    |   `-- release-notes/
    |-- options-modules/
    |   |-- programs/
    |   |-- services/
    |   |-- networking/
    |   |-- hardware/
    |   |-- virtualisation/
    |   `-- systemd/
    |-- community/
    |   `-- awesome-nix.parts/
    `-- wiki/
```

## Branch Guide

- `references/flakes-book/`
  First stop for practical Flakes and NixOS workflows. Start in `en/` or `zh/`, then open the nearest `INDEX.md`.
- `references/nix-manual/`
  Use for canonical Nix command semantics and language details. The most common entry branches are `command-ref/`, `language/`, `package-management/`, and `store/`.
- `references/nixpkgs-manual/`
  Use for packaging, overlays, library helpers, and nixpkgs conventions. Start in `chapters/`.
- `references/options-modules/`
  Use when the question is really about an option tree or module surface. The most common branches are `programs/`, `services/`, `networking/`, `hardware/`, `virtualisation/`, and `systemd/`.
- `references/community/`
  Use only for ecosystem discovery, tool finding, and supplementary pointers.
- `references/wiki/`
  Supplemental navigation branch. Do not treat it as the primary authoritative source.

- Read [references/MAP.md](references/MAP.md) first.
- Then choose the relevant branch:
  - `references/flakes-book/`
  - `references/nix-manual/`
  - `references/nixpkgs-manual/`
  - `references/options-modules/`
  - `references/community/`
  - `references/wiki/`
- Open the branch `INDEX.md`, then descend into narrower documents.
- Prefer narrow documents over broad scans.

## Notes

- For practical NixOS + Flakes questions, prefer `references/flakes-book/` first.
- Use the official manual branches for authoritative command, option, and reference details.
- Use `references/community/` only for community resource discovery and tool finding.
- Prefer the official manual branches before using `references/wiki/`.
- The `references/wiki/` branch is navigation-only and should be treated as supplemental context.
- This skill is intentionally file-only.
- The stored content comes from local mirrors prepared earlier in this workspace.
