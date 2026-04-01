---
module: services.grocy
option_count: 4
source: options.html
---

# services.grocy

## services.grocy.enable

Whether to enable grocy. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/grocy.nix>

## services.grocy.package

The grocy package to use. Type: package Default: pkgs.grocy Declared by: <nixpkgs/nixos/modules/services/web-apps/grocy.nix>

## services.grocy.dataDir

Home directory of the grocy user which contains the application’s state. Type: string Default: "/var/lib/grocy" Declared by: <nixpkgs/nixos/modules/services/web-apps/grocy.nix>

## services.grocy.hostName

FQDN for the grocy instance. Type: string Declared by: <nixpkgs/nixos/modules/services/web-apps/grocy.nix>
