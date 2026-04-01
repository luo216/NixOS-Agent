---
module: hardware.kryoflux
option_count: 2
source: options.html
---

# hardware.kryoflux

## hardware.kryoflux.enable

Enables kryoflux udev rules, ensures ‘floppy’ group exists. This is a prerequisite to using devices supported by kryoflux without being root, since kryoflux device descriptors will be owned by floppy through udev. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/hardware/kryoflux.nix>

## hardware.kryoflux.package

The kryoflux package to use. Type: package Default: pkgs.kryoflux Declared by: <nixpkgs/nixos/modules/hardware/kryoflux.nix>
