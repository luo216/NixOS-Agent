---
module: services.lorri
option_count: 2
source: options.html
---

# services.lorri

## services.lorri.enable

Enables the daemon for lorri, a nix-shell replacement for project development. The socket-activated daemon starts on the first request issued by the lorri command. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/development/lorri.nix>

## services.lorri.package

The lorri package to use. Type: package Default: pkgs.lorri Declared by: <nixpkgs/nixos/modules/services/development/lorri.nix>
