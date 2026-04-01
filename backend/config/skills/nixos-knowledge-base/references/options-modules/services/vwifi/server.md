---
module: services.vwifi.server
option_count: 3
source: options.html
---

# services.vwifi.server

## services.vwifi.server.enable

Whether to enable vwifi server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/vwifi.nix>

## services.vwifi.server.extraArgs

Extra arguments to pass to vwifi-server. You can use this for things including changing the ports or inducing packet loss. Type: list of string Default: [ ] Example: [ "--lost-packets" ] Declared by: <nixpkgs/nixos/modules/services/networking/vwifi.nix>

## services.vwifi.server.openFirewall

Whether to enable opening the firewall for the TCP and spy ports. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/vwifi.nix>
