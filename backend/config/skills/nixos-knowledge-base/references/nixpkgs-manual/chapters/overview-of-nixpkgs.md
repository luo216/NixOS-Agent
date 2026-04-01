---
title: "Overview of Nixpkgs"
source: index.html
---

# Overview of Nixpkgs

Nix expressions describe how to build packages from source and are collected in the Nixpkgs repository. Also included in the collection are Nix expressions for NixOS modules. With these expressions the Nix package manager can build binary packages. Packages, including the Nix packages collection, are distributed through channels. The collection is distributed for users of Nix on non-NixOS distributions through the channel nixpkgs-unstable. Users of NixOS generally use one of the nixos-* channels, e.g. nixos-22.11, which includes all packages and modules for the stable NixOS 22.11. Stable NixOS releases are generally only given security updates. More up-to-date packages and modules are available via the nixos-unstable channel. Both nixos-unstable and nixpkgs-unstable follow the master branch of the Nixpkgs repository, although both do lag the master branch by generally a couple of days. Updates to a channel are distributed as soon as all tests for that channel pass, e.g. this table shows the status of tests for the nixpkgs-unstable channel. The tests are conducted by a cluster called Hydra, which also builds binary packages from the Nix expressions in Nixpkgs for x86_64-linux, aarch64-linux, x86_64-darwin and aarch64-darwin. The binaries are made available via a binary cache. The current Nix expressions of the channels are available in the Nixpkgs repository in branches that correspond to the channel names (e.g. nixos-22.11-small).
