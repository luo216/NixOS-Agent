---
module: services.xl2tpd
option_count: 5
source: options.html
---

# services.xl2tpd

## services.xl2tpd.enable

Whether to enable xl2tpd, the Layer 2 Tunnelling Protocol Daemon. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/xl2tpd.nix>

## services.xl2tpd.clientIpRange

The range from which client IPs are drawn. Type: string Default: "10.125.125.2-11" Declared by: <nixpkgs/nixos/modules/services/networking/xl2tpd.nix>

## services.xl2tpd.extraPppdOptions

Adds extra lines to the pppd options file. Type: strings concatenated with “\n” Default: "" Example: '' ms-dns 8.8.8.8 ms-dns 8.8.4.4 '' Declared by: <nixpkgs/nixos/modules/services/networking/xl2tpd.nix>

## services.xl2tpd.extraXl2tpOptions

Adds extra lines to the xl2tpd configuration file. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/networking/xl2tpd.nix>

## services.xl2tpd.serverIp

The server-side IP address. Type: string Default: "10.125.125.1" Declared by: <nixpkgs/nixos/modules/services/networking/xl2tpd.nix>
