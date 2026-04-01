---
module: services.pptpd
option_count: 6
source: options.html
---

# services.pptpd

## services.pptpd.enable

Whether to enable pptpd, the Point-to-Point Tunneling Protocol daemon. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/pptpd.nix>

## services.pptpd.clientIpRange

The range from which client IPs are drawn. Type: string Default: "10.124.124.2-11" Declared by: <nixpkgs/nixos/modules/services/networking/pptpd.nix>

## services.pptpd.extraPppdOptions

Adds extra lines to the pppd options file. Type: strings concatenated with “\n” Default: "" Example: '' ms-dns 8.8.8.8 ms-dns 8.8.4.4 '' Declared by: <nixpkgs/nixos/modules/services/networking/pptpd.nix>

## services.pptpd.extraPptpdOptions

Adds extra lines to the pptpd configuration file. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/networking/pptpd.nix>

## services.pptpd.maxClients

The maximum number of simultaneous connections. Type: signed integer Default: 10 Declared by: <nixpkgs/nixos/modules/services/networking/pptpd.nix>

## services.pptpd.serverIp

The server-side IP address. Type: string Default: "10.124.124.1" Declared by: <nixpkgs/nixos/modules/services/networking/pptpd.nix>
