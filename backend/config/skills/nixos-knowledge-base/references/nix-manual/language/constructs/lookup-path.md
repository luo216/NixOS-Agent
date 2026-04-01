---
title: "Lookup path - Nix 2.28.6 Reference Manual"
source: language/constructs/lookup-path.html
---

# Lookup path - Nix 2.28.6 Reference Manual

Auto Light Rust Coal Navy Ayu

## Lookup path

Syntax lookup-path = < identifier [ / identifier ]... > A lookup path is an identifier with an optional path suffix that resolves to a path value if the identifier matches a search path entry in builtins.nixPath. The algorithm for lookup path resolution is described in the documentation on builtins.findFile. Example <nixpkgs> /nix/var/nix/profiles/per-user/root/channels/nixpkgs Example <nixpkgs/nixos> /nix/var/nix/profiles/per-user/root/channels/nixpkgs/nixos
