---
module: programs.thunar
option_count: 2
source: options.html
---

# programs.thunar

## programs.thunar.enable

Whether to enable Thunar, the Xfce file manager. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/programs/thunar.nix>

## programs.thunar.plugins

List of thunar plugins to install. Type: list of package Default: [ ] Example: with pkgs.xfce; [ thunar-archive-plugin thunar-volman ] Declared by: <nixpkgs/nixos/modules/programs/thunar.nix>
