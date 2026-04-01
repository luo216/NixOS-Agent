---
module: services.aria2.settings
option_count: 6
source: options.html
---

# services.aria2.settings

## services.aria2.settings.enable-rpc

Enable JSON-RPC/XML-RPC server. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/aria2.nix>

## services.aria2.settings.conf-path

Configuration file path. Type: (optionally newline-terminated) single-line string Default: "/var/lib/aria2/aria2.conf" Declared by: <nixpkgs/nixos/modules/services/networking/aria2.nix>

## services.aria2.settings.dir

Directory to store downloaded files. Type: (optionally newline-terminated) single-line string Default: "/var/lib/aria2/Downloads" Declared by: <nixpkgs/nixos/modules/services/networking/aria2.nix>

## services.aria2.settings.listen-port

Set UDP listening port range used by DHT(IPv4, IPv6) and UDP tracker. Type: list of attribute set of 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: [ { from = 6881; to = 6999; } ] Declared by: <nixpkgs/nixos/modules/services/networking/aria2.nix>

## services.aria2.settings.rpc-listen-port

Specify a port number for JSON-RPC/XML-RPC server to listen to. Possible Values: 1024-65535 Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 6800 Declared by: <nixpkgs/nixos/modules/services/networking/aria2.nix>

## services.aria2.settings.save-session

Save error/unfinished downloads to FILE on exit. Type: (optionally newline-terminated) single-line string Default: "/var/lib/aria2/aria2.session" Declared by: <nixpkgs/nixos/modules/services/networking/aria2.nix>
