---
module: services.shadowsocks
option_count: 11
source: options.html
---

# services.shadowsocks

## services.shadowsocks.enable

Whether to run shadowsocks-libev shadowsocks server. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/shadowsocks.nix>

## services.shadowsocks.encryptionMethod

Encryption method. See https://github.com/shadowsocks/shadowsocks-org/wiki/AEAD-Ciphers. Type: string Default: "chacha20-ietf-poly1305" Declared by: <nixpkgs/nixos/modules/services/networking/shadowsocks.nix>

## services.shadowsocks.extraConfig

Additional configuration for shadowsocks that is not covered by the provided options. The provided attrset will be serialized to JSON and has to contain valid shadowsocks options. Unfortunately most additional options are undocumented but it’s easy to find out what is available by looking into the source code of https://github.com/shadowsocks/shadowsocks-libev/blob/master/src/jconf.c Type: attribute set Default: { } Example: { nameserver = "8.8.8.8"; } Declared by: <nixpkgs/nixos/modules/services/networking/shadowsocks.nix>

## services.shadowsocks.fastOpen

use TCP fast-open Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/shadowsocks.nix>

## services.shadowsocks.localAddress

Local addresses to which the server binds. Type: (list of string) or string convertible to it Default: [ "[::0]" "0.0.0.0" ] Declared by: <nixpkgs/nixos/modules/services/networking/shadowsocks.nix>

## services.shadowsocks.mode

Relay protocols. Type: one of “tcp_only”, “tcp_and_udp”, “udp_only” Default: "tcp_and_udp" Declared by: <nixpkgs/nixos/modules/services/networking/shadowsocks.nix>

## services.shadowsocks.password

Password for connecting clients. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/shadowsocks.nix>

## services.shadowsocks.passwordFile

Password file with a password for connecting clients. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/networking/shadowsocks.nix>

## services.shadowsocks.plugin

SIP003 plugin for shadowsocks Type: null or string Default: null Example: "${pkgs.shadowsocks-v2ray-plugin}/bin/v2ray-plugin" Declared by: <nixpkgs/nixos/modules/services/networking/shadowsocks.nix>

## services.shadowsocks.pluginOpts

Options to pass to the plugin if one was specified Type: string Default: "" Example: "server;host=example.com" Declared by: <nixpkgs/nixos/modules/services/networking/shadowsocks.nix>

## services.shadowsocks.port

Port which the server uses. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8388 Declared by: <nixpkgs/nixos/modules/services/networking/shadowsocks.nix>
