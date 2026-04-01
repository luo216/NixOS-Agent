---
title: "HTTP Binary Cache Store - Nix 2.28.6 Reference Manual"
source: store/types/http-binary-cache-store.html
---

# HTTP Binary Cache Store - Nix 2.28.6 Reference Manual

Auto Light Rust Coal Navy Ayu

## HTTP Binary Cache Store

Store URL format: http://..., https://... This store allows a binary cache to be accessed via the HTTP protocol.

### Settings

compression NAR compression method (xz, bzip2, gzip, zstd, or none). Default: xz compression-level The preset level to be used when compressing NARs. The meaning and accepted values depend on the compression method selected. -1 specifies that the default compression level should be used. Default: -1 index-debug-info Whether to index DWARF debug info files by build ID. This allows dwarffs to fetch debug info on demand Default: false local-nar-cache Path to a local cache of NARs fetched from this binary cache, used by commands such as nix store cat. Default: empty parallel-compression Enable multi-threaded compression of NARs. This is currently only available for xz and zstd. Default: false path-info-cache-size Size of the in-memory store path metadata cache. Default: 65536 priority Priority of this store when used as a substituter. A lower value means a higher priority. Default: 0 secret-key Path to the secret key used to sign the binary cache. Default: empty store Logical location of the Nix store, usually /nix/store. Note that you can only copy store paths between stores if they have the same store setting. Default: /nix/store system-features Optional system features available on the system this store uses to build derivations. Example: "kvm" Default: machine-specific trusted Whether paths from this store can be used as substitutes even if they are not signed by a key listed in the trusted-public-keys setting. Default: false want-mass-query Whether this store can be queried efficiently for path validity when used as a substituter. Default: false write-nar-listing Whether to write a JSON file that lists the files in each NAR. Default: false
