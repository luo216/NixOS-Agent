---
module: programs.proxychains.proxies.<name>
option_count: 4
source: options.html
---

# programs.proxychains.proxies.<name>

## programs.proxychains.proxies.<name>.enable

Whether to enable this proxy. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/programs/proxychains.nix>

## programs.proxychains.proxies.<name>.host

Proxy host or IP address. Type: string Declared by: <nixpkgs/nixos/modules/programs/proxychains.nix>

## programs.proxychains.proxies.<name>.port

Proxy port Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Declared by: <nixpkgs/nixos/modules/programs/proxychains.nix>

## programs.proxychains.proxies.<name>.type

Proxy type. Type: one of “http”, “socks4”, “socks5” Declared by: <nixpkgs/nixos/modules/programs/proxychains.nix>
