---
module: services.microsocks
option_count: 12
source: options.html
---

# services.microsocks

## services.microsocks.enable

Whether to enable Tiny, portable SOCKS5 server with very moderate resource usage. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/microsocks.nix>

## services.microsocks.package

The microsocks package to use. Type: package Default: pkgs.microsocks Declared by: <nixpkgs/nixos/modules/services/networking/microsocks.nix>

## services.microsocks.authOnce

If true, once a specific ip address authed successfully with user/pass, it is added to a whitelist and may use the proxy without auth. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/microsocks.nix>

## services.microsocks.authPasswordFile

Path to a file containing the password for authentication. Type: null or absolute path Default: null Example: "/run/secrets/microsocks-password" Declared by: <nixpkgs/nixos/modules/services/networking/microsocks.nix>

## services.microsocks.authUsername

Optional username to use for authentication. Type: null or string Default: null Example: "alice" Declared by: <nixpkgs/nixos/modules/services/networking/microsocks.nix>

## services.microsocks.disableLogging

If true, microsocks will not log any messages to stdout/stderr. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/microsocks.nix>

## services.microsocks.execWrapper

An optional command to prepend to the microsocks command (such as proxychains, or a VPN exclude command). Type: null or string Default: null Example: '' ''${pkgs.mullvad-vpn}/bin/mullvad-exclude '' Declared by: <nixpkgs/nixos/modules/services/networking/microsocks.nix>

## services.microsocks.group

Group microsocks runs as. Type: string Default: "microsocks" Declared by: <nixpkgs/nixos/modules/services/networking/microsocks.nix>

## services.microsocks.ip

IP on which microsocks should listen. Defaults to 127.0.0.1 for security reasons. Type: string Default: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/networking/microsocks.nix>

## services.microsocks.outgoingBindIp

Specifies which ip outgoing connections are bound to Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/microsocks.nix>

## services.microsocks.port

Port on which microsocks should listen. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 1080 Declared by: <nixpkgs/nixos/modules/services/networking/microsocks.nix>

## services.microsocks.user

User microsocks runs as. Type: string Default: "microsocks" Declared by: <nixpkgs/nixos/modules/services/networking/microsocks.nix>
