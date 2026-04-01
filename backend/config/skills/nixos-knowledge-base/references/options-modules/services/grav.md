---
module: services.grav
option_count: 8
source: options.html
---

# services.grav

## services.grav.enable

Whether to enable grav. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/grav.nix>

## services.grav.package

The grav package to use. Type: package Default: pkgs.grav Declared by: <nixpkgs/nixos/modules/services/web-apps/grav.nix>

## services.grav.maxUploadSize

The upload limit for files. This changes the relevant options in php.ini and nginx if enabled. Type: string Default: "128M" Declared by: <nixpkgs/nixos/modules/services/web-apps/grav.nix>

## services.grav.phpPackage

The php83 package to use. Type: package Default: pkgs.php83 Declared by: <nixpkgs/nixos/modules/services/web-apps/grav.nix>

## services.grav.pool

Name of existing phpfpm pool that is used to run web-application. If not specified a pool will be created automatically with default values. Type: string Default: "grav" Declared by: <nixpkgs/nixos/modules/services/web-apps/grav.nix>

## services.grav.root

Root of the application. Type: absolute path Default: "/var/lib/grav" Declared by: <nixpkgs/nixos/modules/services/web-apps/grav.nix>

## services.grav.systemSettings

Settings written to user/config/system.yaml. Type: YAML 1.1 value Default: { log = { handler = "syslog"; }; } Declared by: <nixpkgs/nixos/modules/services/web-apps/grav.nix>

## services.grav.virtualHost

Name of the nginx virtualhost to use and setup. If null, do not setup any virtualhost. Type: null or string Default: "grav" Declared by: <nixpkgs/nixos/modules/services/web-apps/grav.nix>
