---
module: services.libeufin.nexus
option_count: 6
source: options.html
---

# services.libeufin.nexus

## services.libeufin.nexus.enable

Whether to enable libeufin core banking system and web interface. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/finance/libeufin/nexus.nix>

## services.libeufin.nexus.package

The libeufin package to use. Type: package Default: pkgs.libeufin Declared by: <nixpkgs/nixos/modules/services/finance/libeufin/nexus.nix>

## services.libeufin.nexus.createLocalDatabase

Whether to enable automatic creation of a local postgres database. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/finance/libeufin/nexus.nix>

## services.libeufin.nexus.debug

Whether to enable debug logging. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/finance/libeufin/nexus.nix>

## services.libeufin.nexus.openFirewall

Whether to open ports in the firewall Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/finance/libeufin/nexus.nix>

## services.libeufin.nexus.settings

Configuration options for the libeufin nexus config file. For a list of all possible options, please see the man page libeufin-nexus.conf(5) Type: open submodule of attribute set of section of an INI file (attrs of INI atom (null, bool, int, float or string)) Declared by: <nixpkgs/nixos/modules/services/finance/libeufin/nexus.nix>
