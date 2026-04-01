---
module: services.connman
option_count: 6
source: options.html
---

# services.connman

## services.connman.enable

Whether to use ConnMan for managing your network connections. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/connman.nix>

## services.connman.enableVPN

Whether to enable ConnMan VPN service. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/connman.nix>

## services.connman.package

The connman package / build flavor Type: package Default: pkgs.connman Example: pkgs.connmanFull Declared by: <nixpkgs/nixos/modules/services/networking/connman.nix>

## services.connman.extraConfig

Configuration lines appended to the generated connman configuration file. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/networking/connman.nix>

## services.connman.extraFlags

Extra flags to pass to connmand Type: list of string Default: [ ] Example: [ "--nodnsproxy" ] Declared by: <nixpkgs/nixos/modules/services/networking/connman.nix>

## services.connman.networkInterfaceBlacklist

Default blacklisted interfaces, this includes NixOS containers interfaces (ve). Type: list of string Default: [ "vmnet" "vboxnet" "virbr" "ifb" "ve" ] Declared by: <nixpkgs/nixos/modules/services/networking/connman.nix>
