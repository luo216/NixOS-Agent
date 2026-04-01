---
module: services.sonic-server
option_count: 3
source: options.html
---

# services.sonic-server

## services.sonic-server.enable

Whether to enable Sonic Search Index. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/search/sonic-server.nix>

## services.sonic-server.package

The sonic-server package to use. Type: package Default: pkgs.sonic-server Declared by: <nixpkgs/nixos/modules/services/search/sonic-server.nix>

## services.sonic-server.settings

Sonic Server configuration options. Refer to https://github.com/valeriansaliou/sonic/blob/master/CONFIGURATION.md for a full list of available options. Type: open submodule of (TOML value) Default: { store = { fst = { path = "/var/lib/sonic/fst"; }; kv = { path = "/var/lib/sonic/kv"; }; }; } Example: { channel = { inet = "[::1]:1491"; }; server = { log_level = "debug"; }; } Declared by: <nixpkgs/nixos/modules/services/search/sonic-server.nix>
