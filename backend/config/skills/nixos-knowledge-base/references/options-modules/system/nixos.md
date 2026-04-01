---
module: system.nixos
option_count: 6
source: options.html
---

# system.nixos

## system.nixos.codeName

The NixOS release code name (e.g. Emu). Type: string (read only) Default: "Xantusia" Declared by: <nixpkgs/nixos/modules/misc/version.nix>

## system.nixos.label

NixOS version name to be used in the names of generated outputs and boot labels. If you ever wanted to influence the labels in your GRUB menu, this is the option for you. It can only contain letters, numbers and the following symbols: :, _, . and -. The default is system.nixos.tags separated by “-” + “-” + NIXOS_LABEL_VERSION environment variable (defaults to the value of system.nixos.version). Can be overridden by setting NIXOS_LABEL. Useful for not loosing track of configurations built from different nixos branches/revisions, e.g.: #!/bin/sh today=`date +%Y%m%d` branch=`(cd nixpkgs ; git branch 2>/dev/null | sed -n '/^\* / { s|^\* ||; p; }')` revision=`(cd nixpkgs ; git rev-parse HEAD)` export NIXOS_LABEL_VERSION="$today.$branch-${revision:0:7}" nixos-rebuild switch Type: string matching the pattern [a-zA-Z0-9:_\.-]* Declared by: <nixpkgs/nixos/modules/misc/label.nix>

## system.nixos.release

The NixOS release (e.g. 16.03). Type: string (read only) Default: "25.11" Declared by: <nixpkgs/nixos/modules/misc/version.nix>

## system.nixos.tags

Strings to prefix to the default system.nixos.label. Useful for not losing track of configurations built with different options, e.g.: { system.nixos.tags = [ "with-xen" ]; virtualisation.xen.enable = true; } Type: list of string Default: [ ] Example: [ "with-xen" ] Declared by: <nixpkgs/nixos/modules/misc/label.nix>

## system.nixos.variantName

A string identifying a specific variant or edition of the operating system suitable for presentation to the user Type: null or string Default: null Example: "NixOS Installer Image" Declared by: <nixpkgs/nixos/modules/misc/version.nix>

## system.nixos.variant_id

A lower-case string identifying a specific variant or edition of the operating system Type: null or string matching the pattern ^[a-z0-9._-]+$ Default: null Example: "installer" Declared by: <nixpkgs/nixos/modules/misc/version.nix>
