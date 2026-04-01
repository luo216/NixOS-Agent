---
module: services.scion.scion-ip-gateway
option_count: 3
source: options.html
---

# services.scion.scion-ip-gateway

## services.scion.scion-ip-gateway.enable

Whether to enable the scion-ip-gateway service. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/scion/scion-ip-gateway.nix>

## services.scion.scion-ip-gateway.config

scion-ip-gateway daemon configuration Type: TOML value Default: { } Example: { tunnel = { src_ipv4 = "172.16.100.1"; }; } Declared by: <nixpkgs/nixos/modules/services/networking/scion/scion-ip-gateway.nix>

## services.scion.scion-ip-gateway.trafficConfig

scion-ip-gateway traffic configuration Type: JSON value Default: { } Example: { ASes = { "2-ffaa:0:b" = { Nets = [ "172.16.1.0/24" ]; }; }; ConfigVersion = 9001; } Declared by: <nixpkgs/nixos/modules/services/networking/scion/scion-ip-gateway.nix>
