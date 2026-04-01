---
module: services.ofono
option_count: 2
source: options.html
---

# services.ofono

## services.ofono.enable

Whether to enable Ofono. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/ofono.nix>

## services.ofono.plugins

The list of plugins to install. Type: list of package Default: [ ] Example: [ pkgs.modem-manager-gui ] Declared by: <nixpkgs/nixos/modules/services/networking/ofono.nix>
