---
module: services.tinyproxy
option_count: 3
source: options.html
---

# services.tinyproxy

## services.tinyproxy.enable

Whether to enable Tinyproxy daemon. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/tinyproxy.nix>

## services.tinyproxy.package

The tinyproxy package to use. Type: package Default: pkgs.tinyproxy Declared by: <nixpkgs/nixos/modules/services/networking/tinyproxy.nix>

## services.tinyproxy.settings

Configuration for tinyproxy. Type: open submodule of attribute set of (atom (null, bool, int, float or string) or a list of them for duplicate keys) Default: { } Example: { Port 8888; Listen 127.0.0.1; Timeout 600; Allow 127.0.0.1; Anonymous = ['"Host"' '"Authorization"']; ReversePath = '"/example/" "http://www.example.com/"'; } Declared by: <nixpkgs/nixos/modules/services/networking/tinyproxy.nix>
