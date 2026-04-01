---
module: services.e-imzo
option_count: 2
source: options.html
---

# services.e-imzo

## services.e-imzo.enable

Whether to enable E-IMZO. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/security/e-imzo.nix>

## services.e-imzo.package

The e-imzo package to use. Official mirror deletes old versions as soon as they release new one. Feel free to use either unstable or your own custom e-imzo package and ping maintainer. Type: package Default: pkgs.e-imzo Declared by: <nixpkgs/nixos/modules/services/security/e-imzo.nix>
