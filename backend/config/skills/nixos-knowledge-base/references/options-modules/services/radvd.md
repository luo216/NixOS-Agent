---
module: services.radvd
option_count: 4
source: options.html
---

# services.radvd

## services.radvd.enable

Whether to enable the Router Advertisement Daemon (radvd), which provides link-local advertisements of IPv6 router addresses and prefixes using the Neighbor Discovery Protocol (NDP). This enables stateless address autoconfiguration in IPv6 clients on the network. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/radvd.nix>

## services.radvd.package

The radvd package to use. Type: package Default: pkgs.radvd Declared by: <nixpkgs/nixos/modules/services/networking/radvd.nix>

## services.radvd.config

The contents of the radvd configuration file. Type: strings concatenated with “\n” Example: '' interface eth0 { AdvSendAdvert on; prefix 2001:db8:1234:5678::/64 { }; }; '' Declared by: <nixpkgs/nixos/modules/services/networking/radvd.nix>

## services.radvd.debugLevel

The debugging level is an integer in the range from 1 to 5, from quiet to very verbose. A debugging level of 0 completely turns off debugging. Type: integer between 0 and 5 (both inclusive) Default: 0 Example: 5 Declared by: <nixpkgs/nixos/modules/services/networking/radvd.nix>
