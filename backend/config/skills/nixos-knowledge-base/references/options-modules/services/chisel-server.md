---
module: services.chisel-server
option_count: 8
source: options.html
---

# services.chisel-server

## services.chisel-server.enable

Whether to enable Chisel Tunnel Server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/chisel-server.nix>

## services.chisel-server.authfile

Path to auth.json file Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/networking/chisel-server.nix>

## services.chisel-server.backend

HTTP server to proxy normal requests to Type: null or string Default: null Example: "http://127.0.0.1:8888" Declared by: <nixpkgs/nixos/modules/services/networking/chisel-server.nix>

## services.chisel-server.host

Address to listen on, falls back to 0.0.0.0 Type: null or string Default: null Example: "[::1]" Declared by: <nixpkgs/nixos/modules/services/networking/chisel-server.nix>

## services.chisel-server.keepalive

Keepalive interval, falls back to 25s Type: null or string Default: null Example: "5s" Declared by: <nixpkgs/nixos/modules/services/networking/chisel-server.nix>

## services.chisel-server.port

Port to listen on, falls back to 8080 Type: null or 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: null Declared by: <nixpkgs/nixos/modules/services/networking/chisel-server.nix>

## services.chisel-server.reverse

Allow clients reverse port forwarding Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/chisel-server.nix>

## services.chisel-server.socks5

Allow clients access to internal SOCKS5 proxy Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/chisel-server.nix>
