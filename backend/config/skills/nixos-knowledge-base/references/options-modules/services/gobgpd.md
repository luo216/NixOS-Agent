---
module: services.gobgpd
option_count: 2
source: options.html
---

# services.gobgpd

## services.gobgpd.enable

Whether to enable GoBGP Routing Daemon. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/gobgpd.nix>

## services.gobgpd.settings

GoBGP configuration. Refer to https://github.com/osrg/gobgp#documentation for details on supported values. Type: TOML value Default: { } Example: { global = { config = { as = 64512; router-id = "192.168.255.1"; }; }; neighbors = [ { config = { neighbor-address = "10.0.255.1"; peer-as = 65001; }; } { config = { neighbor-address = "10.0.255.2"; peer-as = 65002; }; } ]; } Declared by: <nixpkgs/nixos/modules/services/networking/gobgpd.nix>
