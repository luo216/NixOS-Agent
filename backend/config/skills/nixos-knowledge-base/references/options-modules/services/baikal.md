---
module: services.baikal
option_count: 7
source: options.html
---

# services.baikal

## services.baikal.enable

Whether to enable baikal. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/baikal.nix>

## services.baikal.package

The baikal package to use. Type: package Default: pkgs.baikal Declared by: <nixpkgs/nixos/modules/services/web-apps/baikal.nix>

## services.baikal.group

Group account under which the web-application run. Type: string Default: "baikal" Declared by: <nixpkgs/nixos/modules/services/web-apps/baikal.nix>

## services.baikal.phpPackage

The php package to use. Type: package Default: pkgs.php Declared by: <nixpkgs/nixos/modules/services/web-apps/baikal.nix>

## services.baikal.pool

Name of existing phpfpm pool that is used to run web-application. If not specified a pool will be created automatically with default values. Type: string Default: "baikal" Declared by: <nixpkgs/nixos/modules/services/web-apps/baikal.nix>

## services.baikal.user

User account under which the web-application run. Type: string Default: "baikal" Declared by: <nixpkgs/nixos/modules/services/web-apps/baikal.nix>

## services.baikal.virtualHost

Name of the nginx virtualhost to use and setup. If null, do not setup any virtualhost. Type: null or string Default: "baikal" Declared by: <nixpkgs/nixos/modules/services/web-apps/baikal.nix>
