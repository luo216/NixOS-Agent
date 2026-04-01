---
module: services.actual
option_count: 4
source: options.html
---

# services.actual

## services.actual.enable

Whether to enable actual, a privacy focused app for managing your finances. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/actual.nix>

## services.actual.package

The actual-server package to use. Type: package Default: pkgs.actual-server Declared by: <nixpkgs/nixos/modules/services/web-apps/actual.nix>

## services.actual.openFirewall

Whether to open the firewall for the specified port. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/actual.nix>

## services.actual.settings

Server settings, refer to the documentation for available options. You can specify secret values in this configuration by setting somevalue._secret = "/path/to/file" instead of setting somevalue directly. Type: open submodule of (JSON value) Default: { } Declared by: <nixpkgs/nixos/modules/services/web-apps/actual.nix>
