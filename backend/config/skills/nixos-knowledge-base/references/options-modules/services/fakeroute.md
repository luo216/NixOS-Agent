---
module: services.fakeroute
option_count: 2
source: options.html
---

# services.fakeroute

## services.fakeroute.enable

Whether to enable the fakeroute service. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/fakeroute.nix>

## services.fakeroute.route

Fake route that will appear after the real one to any host running a traceroute. Type: list of string Default: [ ] Example: [ "216.102.187.130" "4.0.1.122" "198.116.142.34" "63.199.8.242" ] Declared by: <nixpkgs/nixos/modules/services/networking/fakeroute.nix>
