---
module: services.paretosecurity
option_count: 4
source: options.html
---

# services.paretosecurity

## services.paretosecurity.enable

Whether to enable ParetoSecurity agent and its root helper. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/security/paretosecurity.nix>

## services.paretosecurity.package

The paretosecurity package to use. Type: package Default: pkgs.paretosecurity Declared by: <nixpkgs/nixos/modules/services/security/paretosecurity.nix>

## services.paretosecurity.trayIcon

Set to false to disable the tray icon and run as a CLI tool only. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/security/paretosecurity.nix>

## services.paretosecurity.users

Per-user Pareto Security configuration. Type: attribute set of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/services/security/paretosecurity.nix>
