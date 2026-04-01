---
module: programs.proxychains
option_count: 9
source: options.html
---

# programs.proxychains

## programs.proxychains.enable

Whether to enable proxychains configuration. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/programs/proxychains.nix>

## programs.proxychains.package

The proxychains package to use. Type: package Default: pkgs.proxychains Example: proxychains-ng Declared by: <nixpkgs/nixos/modules/programs/proxychains.nix>

## programs.proxychains.localnet

By default enable localnet for loopback address ranges. Type: string Default: "127.0.0.0/255.0.0.0" Declared by: <nixpkgs/nixos/modules/programs/proxychains.nix>

## programs.proxychains.proxies

Proxies to be used by proxychains. Type: attribute set of (submodule) Example: { myproxy = { type = "socks4"; host = "127.0.0.1"; port = 1337; }; } Declared by: <nixpkgs/nixos/modules/programs/proxychains.nix>

## programs.proxychains.proxyDNS

Proxy DNS requests - no leak for DNS data. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/programs/proxychains.nix>

## programs.proxychains.quietMode

Whether to enable Quiet mode (no output from the library). Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/programs/proxychains.nix>

## programs.proxychains.remoteDNSSubnet

Set the class A subnet number to use for the internal remote DNS mapping, uses the reserved 224.x.x.x range by default. Type: one of 10, 127, 224 Default: 224 Declared by: <nixpkgs/nixos/modules/programs/proxychains.nix>

## programs.proxychains.tcpConnectTimeOut

Connection time-out in milliseconds. Type: signed integer Default: 8000 Declared by: <nixpkgs/nixos/modules/programs/proxychains.nix>

## programs.proxychains.tcpReadTimeOut

Connection read time-out in milliseconds. Type: signed integer Default: 15000 Declared by: <nixpkgs/nixos/modules/programs/proxychains.nix>
