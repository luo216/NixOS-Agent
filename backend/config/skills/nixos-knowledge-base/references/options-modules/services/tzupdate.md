---
module: services.tzupdate
option_count: 2
source: options.html
---

# services.tzupdate

## services.tzupdate.enable

Enable the tzupdate timezone updating service. This provides a one-shot service which can be activated with systemctl to update the timezone. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/tzupdate.nix>

## services.tzupdate.package

The tzupdate package to use. Type: package Default: pkgs.tzupdate Declared by: <nixpkgs/nixos/modules/services/misc/tzupdate.nix>
