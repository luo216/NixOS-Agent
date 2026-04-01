---
module: services.uptermd
option_count: 6
source: options.html
---

# services.uptermd

## services.uptermd.enable

Whether to enable uptermd. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/uptermd.nix>

## services.uptermd.extraFlags

Extra flags passed to the uptermd command. Type: list of string Default: [ ] Example: [ "--debug" ] Declared by: <nixpkgs/nixos/modules/services/networking/uptermd.nix>

## services.uptermd.hostKey

Path to SSH host key. If not defined, an ed25519 keypair is generated automatically. Type: null or absolute path Default: null Example: "/run/keys/upterm_host_ed25519_key" Declared by: <nixpkgs/nixos/modules/services/networking/uptermd.nix>

## services.uptermd.listenAddress

Address the server will listen on. Type: string Default: "[::]" Example: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/networking/uptermd.nix>

## services.uptermd.openFirewall

Whether to open the firewall for the port in services.uptermd.port. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/uptermd.nix>

## services.uptermd.port

Port the server will listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 2222 Declared by: <nixpkgs/nixos/modules/services/networking/uptermd.nix>
