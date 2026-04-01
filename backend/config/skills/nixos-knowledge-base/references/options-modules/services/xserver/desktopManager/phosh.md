---
module: services.xserver.desktopManager.phosh
option_count: 5
source: options.html
---

# services.xserver.desktopManager.phosh

## services.xserver.desktopManager.phosh.enable

Enable the Phone Shell. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/x11/desktop-managers/phosh.nix>

## services.xserver.desktopManager.phosh.package

The phosh package to use. Type: package Default: pkgs.phosh Declared by: <nixpkgs/nixos/modules/services/x11/desktop-managers/phosh.nix>

## services.xserver.desktopManager.phosh.group

The group to run the Phosh service. Type: string Example: "users" Declared by: <nixpkgs/nixos/modules/services/x11/desktop-managers/phosh.nix>

## services.xserver.desktopManager.phosh.phocConfig

Configurations for the Phoc compositor. Type: strings concatenated with “\n” or absolute path or (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/services/x11/desktop-managers/phosh.nix>

## services.xserver.desktopManager.phosh.user

The user to run the Phosh service. Type: string Example: "alice" Declared by: <nixpkgs/nixos/modules/services/x11/desktop-managers/phosh.nix>
