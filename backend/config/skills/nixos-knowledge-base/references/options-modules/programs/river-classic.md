---
module: programs.river-classic
option_count: 3
source: options.html
---

# programs.river-classic

## programs.river-classic.enable

Whether to enable river-classic, a dynamic tiling Wayland compositor. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/programs/wayland/river.nix>

## programs.river-classic.package

The river-classic package to use. If the package is not overridable with xwaylandSupport, then the module option xwayland will have no effect. Set to null to not add any River package to your path. This should be done if you want to use the Home Manager River module to install River. Type: null or package Default: pkgs.river-classic Declared by: <nixpkgs/nixos/modules/programs/wayland/river.nix>

## programs.river-classic.extraPackages

Extra packages to be installed system wide. See Common X11 apps used on i3 with Wayland alternatives for a list of useful software. Type: list of package Default: with pkgs; [ swaylock foot dmenu ]; Example: with pkgs; [ termite rofi light ] Declared by: <nixpkgs/nixos/modules/programs/wayland/river.nix>
