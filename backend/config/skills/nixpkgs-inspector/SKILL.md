---
name: nixpkgs-inspector
description: Verify whether a NixOS option, Home Manager option, nixpkgs package, module, or attr path actually exists. Use local nix commands and ripgrep instead of guessing.
---

# Nixpkgs Inspector

## File Tree

```text
.
`-- SKILL.md
```

Use this skill when existence matters.

- Do not answer from memory.
- Prefer local `nix` plus local `rg`.
- Separate `nixpkgs` package lookup, NixOS option lookup, and Home Manager option lookup.

## Resolve Source Roots

Nixpkgs:

```bash
NIXPKGS_ROOT="$(nix eval --raw nixpkgs#path)"
```

Home Manager:

```bash
HM_ROOT="$(nix flake metadata --json github:nix-community/home-manager/release-25.11 | jq -r .path)"
```

If the current repo already pins `home-manager`, prefer its flake first:

```bash
nix flake metadata --json /path/to/flake
```

## Query Types

Package lookup in nixpkgs:

```bash
rg -n "<name>" "$NIXPKGS_ROOT/pkgs"
```

NixOS option lookup:

```bash
rg -n "services\\.<name>|programs\\.<name>" "$NIXPKGS_ROOT/nixos/modules"
```

Home Manager option lookup for package/program trees such as `programs.git.*`, `programs.zsh.*`, or `services.gpg-agent.*`:

```bash
rg -n "options\\.<path>|config\\.<path>" "$HM_ROOT/modules"
```

Examples:

```bash
rg -n "options\\.programs\\.git|config\\.programs\\.git" "$HM_ROOT/modules"
```

```bash
rg -n "options\\.programs\\.zsh|config\\.programs\\.zsh" "$HM_ROOT/modules"
```

If the user names a program first, search that exact tree first. For example, for "can Home Manager configure git?", start with `programs.git`, not `programs.home-manager`.

## Module Lookup

Use this when the question is "which module defines this option tree?"

NixOS:

```bash
rg -n "options\\.<path>|config\\.<path>" "$NIXPKGS_ROOT/nixos/modules"
```

Home Manager:

```bash
rg -n "options\\.<path>|config\\.<path>" "$HM_ROOT/modules"
```

## How To Report

Separate these cases clearly:

- direct NixOS option exists
- direct Home Manager option exists
- package exists but no direct option was found
- only related options or related packages were found
- no reliable local hit was found

Preferred output shape:

- package:
- option scope:
- direct option:
- related option:
- definition path:

Example:

- package/program: git
- option scope: Home Manager
- direct option: `programs.git.enable`
- definition path:

## Notes

- `nix eval --raw nixpkgs#path` gives a local nixpkgs source tree.
- `nix flake metadata --json ...` exposes the flake source path via `.path`.
- Use `nix eval` for extra confirmation only when `rg` is not enough.
- Do not default to web search when local source inspection is enough.
