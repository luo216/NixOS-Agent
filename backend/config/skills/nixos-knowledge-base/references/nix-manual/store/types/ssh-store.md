---
title: "SSH Store - Nix 2.28.6 Reference Manual"
source: store/types/ssh-store.html
---

# SSH Store - Nix 2.28.6 Reference Manual

Auto Light Rust Coal Navy Ayu

## SSH Store

Store URL format: ssh://[username@]hostname This store type allows limited access to a remote store on another machine via SSH.

### Settings

base64-ssh-public-host-key The public host key of the remote machine. Default: empty compress Whether to enable SSH compression. Default: false max-connections Maximum number of concurrent SSH connections. Default: 1 path-info-cache-size Size of the in-memory store path metadata cache. Default: 65536 priority Priority of this store when used as a substituter. A lower value means a higher priority. Default: 0 remote-program Path to the nix-store executable on the remote machine. Default: nix-store remote-store Store URL to be used on the remote machine. The default is auto (i.e. use the Nix daemon or /nix/store directly). Default: empty ssh-key Path to the SSH private key used to authenticate to the remote machine. Default: empty store Logical location of the Nix store, usually /nix/store. Note that you can only copy store paths between stores if they have the same store setting. Default: /nix/store system-features Optional system features available on the system this store uses to build derivations. Example: "kvm" Default: machine-specific trusted Whether paths from this store can be used as substitutes even if they are not signed by a key listed in the trusted-public-keys setting. Default: false want-mass-query Whether this store can be queried efficiently for path validity when used as a substituter. Default: false
