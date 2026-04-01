---
module: services.corerad
option_count: 4
source: options.html
---

# services.corerad

## services.corerad.enable

Whether to enable CoreRAD IPv6 NDP RA daemon. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/corerad.nix>

## services.corerad.package

The corerad package to use. Type: package Default: pkgs.corerad Declared by: <nixpkgs/nixos/modules/services/networking/corerad.nix>

## services.corerad.configFile

Path to CoreRAD TOML configuration file. Type: absolute path Example: "${pkgs.corerad}/etc/corerad/corerad.toml" Declared by: <nixpkgs/nixos/modules/services/networking/corerad.nix>

## services.corerad.settings

Configuration for CoreRAD, see https://github.com/mdlayher/corerad/blob/main/internal/config/reference.toml for supported values. Ignored if configFile is set. Type: TOML value Example: { interfaces = [ # eth0 is an upstream interface monitoring for IPv6 router advertisements. { name = "eth0"; monitor = true; } # eth1 is a downstream interface advertising IPv6 prefixes for SLAAC. { name = "eth1"; advertise = true; prefix = [{ prefix = "::/64"; }]; } ]; # Optionally enable Prometheus metrics. debug = { address = "localhost:9430"; prometheus = true; }; } Declared by: <nixpkgs/nixos/modules/services/networking/corerad.nix>
