---
module: services.lokinet
option_count: 4
source: options.html
---

# services.lokinet

## services.lokinet.enable

Whether to enable Lokinet daemon. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/lokinet.nix>

## services.lokinet.package

The lokinet package to use. Type: package Default: pkgs.lokinet Declared by: <nixpkgs/nixos/modules/services/networking/lokinet.nix>

## services.lokinet.settings

Configuration for Lokinet. Currently, the best way to view the available settings is by generating a config file using lokinet -g. Type: open submodule of attribute set of section of an INI file (attrs of INI atom (null, bool, int, float or string) or a list of them for duplicate keys) Default: { } Example: { dns = { bind = "127.3.2.1"; upstream = [ "1.1.1.1" "8.8.8.8" ]; }; network.exit-node = [ "example.loki" "example2.loki" ]; } Declared by: <nixpkgs/nixos/modules/services/networking/lokinet.nix>

## services.lokinet.useLocally

Whether to use Lokinet locally. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/lokinet.nix>
