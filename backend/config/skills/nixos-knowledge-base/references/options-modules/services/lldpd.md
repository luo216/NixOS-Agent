---
module: services.lldpd
option_count: 2
source: options.html
---

# services.lldpd

## services.lldpd.enable

Whether to enable Link Layer Discovery Protocol Daemon. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/lldpd.nix>

## services.lldpd.extraArgs

List of command line parameters for lldpd Type: list of string Default: [ ] Example: [ "-c" "-k" "-I eth0" ] Declared by: <nixpkgs/nixos/modules/services/networking/lldpd.nix>
