---
module: services.olivetin
option_count: 7
source: options.html
---

# services.olivetin

## services.olivetin.enable

Whether to enable OliveTin. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/olivetin.nix>

## services.olivetin.package

The olivetin package to use. Type: package Default: pkgs.olivetin Declared by: <nixpkgs/nixos/modules/services/web-apps/olivetin.nix>

## services.olivetin.extraConfigFiles

Config files to merge into the settings defined in services.olivetin.settings. This is useful to avoid putting secrets into the nix store. See https://docs.olivetin.app/config.html for more information. Type: list of absolute path Default: [ ] Example: [ "/run/secrets/olivetin.yaml" ] Declared by: <nixpkgs/nixos/modules/services/web-apps/olivetin.nix>

## services.olivetin.group

The group under which OliveTin runs. Type: string Default: "olivetin" Declared by: <nixpkgs/nixos/modules/services/web-apps/olivetin.nix>

## services.olivetin.path

Packages added to the service’s PATH. Type: list of (package or string) Default: with pkgs; [ bash ] Declared by: <nixpkgs/nixos/modules/services/web-apps/olivetin.nix>

## services.olivetin.settings

Configuration of OliveTin. See https://docs.olivetin.app/config.html for more information. Type: open submodule of (YAML 1.1 value) Default: { } Declared by: <nixpkgs/nixos/modules/services/web-apps/olivetin.nix>

## services.olivetin.user

The user account under which OliveTin runs. Type: string Default: "olivetin" Declared by: <nixpkgs/nixos/modules/services/web-apps/olivetin.nix>
