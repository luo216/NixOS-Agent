---
module: services.libeufin.bank
option_count: 7
source: options.html
---

# services.libeufin.bank

## services.libeufin.bank.enable

Whether to enable libeufin core banking system and web interface. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/finance/libeufin/bank.nix>

## services.libeufin.bank.package

The libeufin package to use. Type: package Default: pkgs.libeufin Declared by: <nixpkgs/nixos/modules/services/finance/libeufin/bank.nix>

## services.libeufin.bank.createLocalDatabase

Whether to enable automatic creation of a local postgres database. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/finance/libeufin/bank.nix>

## services.libeufin.bank.debug

Whether to enable debug logging. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/finance/libeufin/bank.nix>

## services.libeufin.bank.initialAccounts

Accounts to enable before the bank service starts. This is mainly needed for the nexus currency conversion since the exchange’s bank account is expected to be already registered. Don’t forget to change the account passwords afterwards. Type: list of (attribute set) Default: [ ] Declared by: <nixpkgs/nixos/modules/services/finance/libeufin/bank.nix>

## services.libeufin.bank.openFirewall

Whether to open ports in the firewall Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/finance/libeufin/bank.nix>

## services.libeufin.bank.settings

Configuration options for the libeufin bank system config file. For a list of all possible options, please see the man page libeufin-bank.conf(5) Type: open submodule of attribute set of section of an INI file (attrs of INI atom (null, bool, int, float or string)) Declared by: <nixpkgs/nixos/modules/services/finance/libeufin/bank.nix>
