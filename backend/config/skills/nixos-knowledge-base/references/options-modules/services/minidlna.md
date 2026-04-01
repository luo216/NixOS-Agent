---
module: services.minidlna
option_count: 4
source: options.html
---

# services.minidlna

## services.minidlna.enable

Whether to enable MiniDLNA, a simple DLNA server. Consider adding openFirewall = true into your config. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/minidlna.nix>

## services.minidlna.package

The minidlna package to use. Type: package Default: pkgs.minidlna Declared by: <nixpkgs/nixos/modules/services/networking/minidlna.nix>

## services.minidlna.openFirewall

Whether to enable opening HTTP (TCP) and SSDP (UDP) ports in the firewall. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/minidlna.nix>

## services.minidlna.settings

Configuration for minidlna.conf(5). Type: open submodule of attribute set of (atom (null, bool, int, float or string) or a list of them for duplicate keys) Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/minidlna.nix>
