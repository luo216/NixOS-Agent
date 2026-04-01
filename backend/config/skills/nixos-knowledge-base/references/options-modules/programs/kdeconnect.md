---
module: programs.kdeconnect
option_count: 2
source: options.html
---

# programs.kdeconnect

## programs.kdeconnect.enable

Whether to enable kdeconnect. Note that it will open the TCP and UDP port from 1714 to 1764 as they are needed for it to function properly. You can use the package to use gnomeExtensions.gsconnect as an alternative implementation if you use Gnome . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/programs/kdeconnect.nix>

## programs.kdeconnect.package

The kdeconnect-kde package to use. Type: null or package Default: pkgs.kdePackages.kdeconnect-kde Example: gnomeExtensions.gsconnect Declared by: <nixpkgs/nixos/modules/programs/kdeconnect.nix>
