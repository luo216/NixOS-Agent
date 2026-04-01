---
module: services.nebula.networks.<name>.tun
option_count: 2
source: options.html
---

# services.nebula.networks.<name>.tun

## services.nebula.networks.<name>.tun.device

Name of the tun device. Defaults to nebula.${networkName}. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/nebula.nix>

## services.nebula.networks.<name>.tun.disable

When tun is disabled, a lighthouse can be started without a local tun interface (and therefore without root). Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/nebula.nix>
