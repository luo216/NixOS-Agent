---
module: services.quickwit.settings
option_count: 4
source: options.html
---

# services.quickwit.settings

## services.quickwit.settings.grpc_listen_port

The port to listen on for gRPC traffic. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 7281 Declared by: <nixpkgs/nixos/modules/services/search/quickwit.nix>

## services.quickwit.settings.listen_address

Listen address of Quickwit. Type: string Default: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/search/quickwit.nix>

## services.quickwit.settings.rest

Rest server configuration for Quickwit Type: open submodule of (YAML 1.1 value) Default: { } Declared by: <nixpkgs/nixos/modules/services/search/quickwit.nix>

## services.quickwit.settings.version

Configuration file version. Type: floating point number Default: 0.7 Declared by: <nixpkgs/nixos/modules/services/search/quickwit.nix>
