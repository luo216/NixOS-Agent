---
module: services.turn-rs
option_count: 4
source: options.html
---

# services.turn-rs

## services.turn-rs.enable

Whether to enable turn-rs server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/turn-rs.nix>

## services.turn-rs.package

The turn-rs package to use. Type: package Default: pkgs.turn-rs Declared by: <nixpkgs/nixos/modules/services/misc/turn-rs.nix>

## services.turn-rs.secretFile

Environment variables from this file will be interpolated into the final config file using envsubst with this syntax: $ENVIRONMENT or ${VARIABLE}. The file should contain lines formatted as SECRET_VAR=SECRET_VALUE. This is useful to avoid putting secrets into the nix store. Type: null or absolute path Default: null Example: "/run/keys/turn-rs.env" Declared by: <nixpkgs/nixos/modules/services/misc/turn-rs.nix>

## services.turn-rs.settings

Turn-rs server config file Type: open submodule of (TOML value) Default: { } Example: { auth = { static_credentials = { user1 = "test"; user2 = "test"; }; }; turn = { interfaces = [ { bind = "127.0.0.1:3478"; external = "127.0.0.1:3478"; transport = "udp"; } { bind = "127.0.0.1:3478"; external = "127.0.0.1:3478"; transport = "tcp"; } ]; realm = "localhost"; }; } Declared by: <nixpkgs/nixos/modules/services/misc/turn-rs.nix>
