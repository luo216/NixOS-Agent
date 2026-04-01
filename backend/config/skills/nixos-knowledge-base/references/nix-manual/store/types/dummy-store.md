---
title: "Dummy Store - Nix 2.28.6 Reference Manual"
source: store/types/dummy-store.html
---

# Dummy Store - Nix 2.28.6 Reference Manual

Auto Light Rust Coal Navy Ayu

## Dummy Store

Store URL format: dummy:// This store type represents a store that contains no store paths and cannot be written to. It's useful when you want to use the Nix evaluator when no actual Nix store exists, e.g. # nix eval --store dummy:// --expr '1 + 2'

### Settings

path-info-cache-size Size of the in-memory store path metadata cache. Default: 65536 priority Priority of this store when used as a substituter. A lower value means a higher priority. Default: 0 store Logical location of the Nix store, usually /nix/store. Note that you can only copy store paths between stores if they have the same store setting. Default: /nix/store system-features Optional system features available on the system this store uses to build derivations. Example: "kvm" Default: machine-specific trusted Whether paths from this store can be used as substitutes even if they are not signed by a key listed in the trusted-public-keys setting. Default: false want-mass-query Whether this store can be queried efficiently for path validity when used as a substituter. Default: false
