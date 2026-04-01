---
module: networking.nftables.tables.<name>
option_count: 4
source: options.html
---

# networking.nftables.tables.<name>

## networking.nftables.tables.<name>.enable

Enable this table. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/nftables.nix>

## networking.nftables.tables.<name>.content

The table content. Type: strings concatenated with “\n” Declared by: <nixpkgs/nixos/modules/services/networking/nftables.nix>

## networking.nftables.tables.<name>.family

Table family. Type: one of “ip”, “ip6”, “inet”, “arp”, “bridge”, “netdev” Declared by: <nixpkgs/nixos/modules/services/networking/nftables.nix>

## networking.nftables.tables.<name>.name

Table name. Type: string Declared by: <nixpkgs/nixos/modules/services/networking/nftables.nix>
