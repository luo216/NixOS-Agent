---
module: services.metabase
option_count: 3
source: options.html
---

# services.metabase

## services.metabase.enable

Whether to enable Metabase service. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/metabase.nix>

## services.metabase.package

The metabase package to use. Type: package Default: pkgs.metabase Declared by: <nixpkgs/nixos/modules/services/misc/metabase.nix>

## services.metabase.openFirewall

Open ports in the firewall for Metabase. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/metabase.nix>
