---
module: services.toxvpn
option_count: 4
source: options.html
---

# services.toxvpn

## services.toxvpn.enable

Whether to enable toxvpn running on startup. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/toxvpn.nix>

## services.toxvpn.auto_add_peers

peers to automatically connect to on startup Type: list of string Default: [ ] Example: [ "toxid1" "toxid2" ] Declared by: <nixpkgs/nixos/modules/services/networking/toxvpn.nix>

## services.toxvpn.localip

your ip on the vpn Type: string Default: "10.123.123.1" Declared by: <nixpkgs/nixos/modules/services/networking/toxvpn.nix>

## services.toxvpn.port

udp port for toxcore, port-forward to help with connectivity if you run many nodes behind one NAT Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 33445 Declared by: <nixpkgs/nixos/modules/services/networking/toxvpn.nix>
