---
module: services.keter
option_count: 4
source: options.html
---

# services.keter

## services.keter.enable

Whether to enable keter, a web app deployment manager. Note that this module only support loading of webapps: Keep an old app running and swap the ports when the new one is booted . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-servers/keter>

## services.keter.package

The keter package to use. Type: package Default: pkgs.haskellPackages.keter Declared by: <nixpkgs/nixos/modules/services/web-servers/keter>

## services.keter.globalKeterConfig

Global config for keter, see https://github.com/snoyberg/keter/blob/master/etc/keter-config.yaml for reference Type: open submodule of (YAML 1.1 value) Declared by: <nixpkgs/nixos/modules/services/web-servers/keter>

## services.keter.root

Mutable state folder for keter Type: string Default: "/var/lib/keter" Declared by: <nixpkgs/nixos/modules/services/web-servers/keter>
