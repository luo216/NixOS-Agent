---
module: services.tang
option_count: 4
source: options.html
---

# services.tang

## services.tang.enable

Whether to enable tang. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/security/tang.nix>

## services.tang.package

The tang package to use. Type: package Default: pkgs.tang Declared by: <nixpkgs/nixos/modules/services/security/tang.nix>

## services.tang.ipAddressAllow

Whitelist a list of address prefixes. Preferably, internal addresses should be used. Type: list of string Example: [ "192.168.1.0/24" ] Declared by: <nixpkgs/nixos/modules/services/security/tang.nix>

## services.tang.listenStream

Addresses and/or ports on which tang should listen. For detailed syntax see ListenStream in systemd.socket(5). Type: list of string Default: [ "7654" ] Example: [ "198.168.100.1:7654" "[2001:db8::1]:7654" "7654" ] Declared by: <nixpkgs/nixos/modules/services/security/tang.nix>
