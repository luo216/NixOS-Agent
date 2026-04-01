---
title: "Upgrading Nix - Nix 2.28.6 Reference Manual"
source: installation/upgrading.html
---

# Upgrading Nix - Nix 2.28.6 Reference Manual

Auto Light Rust Coal Navy Ayu

## Upgrading Nix

Note These upgrade instructions apply where Nix was installed following the installation instructions in this manual. Check which Nix version will be installed, for example from one of the release channels such as nixpkgs-unstable: $ nix-shell -p nix -I nixpkgs=channel:nixpkgs-unstable --run "nix --version" nix (Nix) 2.18.1 Warning Writing to the local store with a newer version of Nix, for example by building derivations with nix-build or nix-store --realise, may change the database schema! Reverting to an older version of Nix may therefore require purging the store database before it can be used.

### Linux multi-user

$ sudo su # nix-env --install --file '<nixpkgs>' --attr nix cacert -I nixpkgs=channel:nixpkgs-unstable # systemctl daemon-reload # systemctl restart nix-daemon

### macOS multi-user

$ sudo nix-env --install --file '<nixpkgs>' --attr nix cacert -I nixpkgs=channel:nixpkgs-unstable $ sudo launchctl remove org.nixos.nix-daemon $ sudo launchctl load /Library/LaunchDaemons/org.nixos.nix-daemon.plist

### Single-user all platforms

$ nix-env --install --file '<nixpkgs>' --attr nix cacert -I nixpkgs=channel:nixpkgs-unstable
