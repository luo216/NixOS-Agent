---
module: services.dae.openFirewall
option_count: 2
source: options.html
---

# services.dae.openFirewall

## services.dae.openFirewall.enable

Whether to enable opening port in the firewall. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/dae.nix>

## services.dae.openFirewall.port

Port to be opened. Consist with field tproxy_port in config file. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Declared by: <nixpkgs/nixos/modules/services/networking/dae.nix>
