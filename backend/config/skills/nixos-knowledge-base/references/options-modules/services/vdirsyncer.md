---
module: services.vdirsyncer
option_count: 3
source: options.html
---

# services.vdirsyncer

## services.vdirsyncer.enable

Whether to enable vdirsyncer. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/vdirsyncer.nix>

## services.vdirsyncer.package

The vdirsyncer package to use. Type: package Default: pkgs.vdirsyncer Declared by: <nixpkgs/nixos/modules/services/networking/vdirsyncer.nix>

## services.vdirsyncer.jobs

vdirsyncer job configurations Type: attribute set of (submodule) Declared by: <nixpkgs/nixos/modules/services/networking/vdirsyncer.nix>
