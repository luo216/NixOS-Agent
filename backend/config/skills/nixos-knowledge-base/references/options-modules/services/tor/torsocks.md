---
module: services.tor.torsocks
option_count: 7
source: options.html
---

# services.tor.torsocks

## services.tor.torsocks.enable

Whether to build /etc/tor/torsocks.conf containing the specified global torsocks configuration. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/security/torsocks.nix>

## services.tor.torsocks.allowInbound

Set Torsocks to accept inbound connections. If set to true, listen() and accept() will be allowed to be used with non localhost address. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/security/torsocks.nix>

## services.tor.torsocks.fasterServer

IP/Port of the Tor SOCKS server for torsocks-faster wrapper suitable for HTTP. Currently, hostnames are NOT supported by torsocks. Type: string Default: "127.0.0.1:9063" Example: "192.168.0.20:1234" Declared by: <nixpkgs/nixos/modules/services/security/torsocks.nix>

## services.tor.torsocks.onionAddrRange

Tor hidden sites do not have real IP addresses. This specifies what range of IP addresses will be handed to the application as “cookies” for .onion names. Of course, you should pick a block of addresses which you aren’t going to ever need to actually connect to. This is similar to the MapAddress feature of the main tor daemon. Type: string Default: "127.42.42.0/24" Declared by: <nixpkgs/nixos/modules/services/security/torsocks.nix>

## services.tor.torsocks.server

IP/Port of the Tor SOCKS server. Currently, hostnames are NOT supported by torsocks. Type: string Default: "127.0.0.1:9050" Example: "192.168.0.20:1234" Declared by: <nixpkgs/nixos/modules/services/security/torsocks.nix>

## services.tor.torsocks.socks5Password

SOCKS5 password. The TORSOCKS_PASSWORD environment variable overrides this option if it is set. Type: null or string Default: null Example: "sekret" Declared by: <nixpkgs/nixos/modules/services/security/torsocks.nix>

## services.tor.torsocks.socks5Username

SOCKS5 username. The TORSOCKS_USERNAME environment variable overrides this option if it is set. Type: null or string Default: null Example: "bob" Declared by: <nixpkgs/nixos/modules/services/security/torsocks.nix>
