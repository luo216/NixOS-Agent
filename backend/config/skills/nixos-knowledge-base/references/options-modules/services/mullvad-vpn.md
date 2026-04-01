---
module: services.mullvad-vpn
option_count: 3
source: options.html
---

# services.mullvad-vpn

## services.mullvad-vpn.enable

This option enables Mullvad VPN daemon. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/mullvad-vpn.nix>

## services.mullvad-vpn.enableExcludeWrapper

This option activates the wrapper that allows the use of mullvad-exclude. Might have minor security impact, so consider disabling if you do not use the feature. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/mullvad-vpn.nix>

## services.mullvad-vpn.package

The mullvad package to use. pkgs.mullvad only provides the CLI tool, pkgs.mullvad-vpn provides both the CLI and the GUI. Type: package Default: pkgs.mullvad Example: mullvad-vpn Declared by: <nixpkgs/nixos/modules/services/networking/mullvad-vpn.nix>
