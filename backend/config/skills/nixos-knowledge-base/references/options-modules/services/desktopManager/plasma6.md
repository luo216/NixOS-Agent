---
module: services.desktopManager.plasma6
option_count: 3
source: options.html
---

# services.desktopManager.plasma6

## services.desktopManager.plasma6.enable

Enable the Plasma 6 (KDE 6) desktop environment. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/desktop-managers/plasma6.nix>

## services.desktopManager.plasma6.enableQt5Integration

Enable Qt 5 integration (theming, etc). Disable for a pure Qt 6 system. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/desktop-managers/plasma6.nix>

## services.desktopManager.plasma6.notoPackage

The Noto fonts - used for UI by default package to use. Type: package Default: pkgs.noto-fonts Example: noto-fonts-lgc-plus Declared by: <nixpkgs/nixos/modules/services/desktop-managers/plasma6.nix>
