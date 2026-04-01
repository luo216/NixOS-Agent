---
module: programs.evolution
option_count: 2
source: options.html
---

# programs.evolution

## programs.evolution.enable

Whether to enable Evolution, a Personal information management application that provides integrated mail, calendaring and address book functionality. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/desktops/gnome/evolution-data-server.nix>

## programs.evolution.plugins

Plugins for Evolution. Type: list of package Default: [ ] Example: [ pkgs.evolution-ews ] Declared by: <nixpkgs/nixos/modules/services/desktops/gnome/evolution-data-server.nix>
