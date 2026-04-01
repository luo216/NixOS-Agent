---
module: services.ddns-updater
option_count: 3
source: options.html
---

# services.ddns-updater

## services.ddns-updater.enable

Whether to enable Container to update DNS records periodically with WebUI for many DNS providers. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/ddns-updater.nix>

## services.ddns-updater.package

The ddns-updater package to use. Type: package Default: pkgs.ddns-updater Declared by: <nixpkgs/nixos/modules/services/networking/ddns-updater.nix>

## services.ddns-updater.environment

Environment variables to be set for the ddns-updater service. DATADIR is ignored to enable using systemd DynamicUser. For full list see https://github.com/qdm12/ddns-updater Type: attribute set of string Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/ddns-updater.nix>
