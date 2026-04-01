---
module: services.desktopManager.gnome.flashback.customSessions.*
option_count: 4
source: options.html
---

# services.desktopManager.gnome.flashback.customSessions.*

## services.desktopManager.gnome.flashback.customSessions.*.enableGnomePanel

Whether to enable the GNOME panel in this session. Type: boolean Default: true Example: false Declared by: <nixpkgs/nixos/modules/services/desktop-managers/gnome.nix>

## services.desktopManager.gnome.flashback.customSessions.*.wmCommand

The executable of the window manager to use. Type: string Example: "${pkgs.haskellPackages.xmonad}/bin/xmonad" Declared by: <nixpkgs/nixos/modules/services/desktop-managers/gnome.nix>

## services.desktopManager.gnome.flashback.customSessions.*.wmLabel

The name of the window manager to show in the session chooser. Type: string Example: "XMonad" Declared by: <nixpkgs/nixos/modules/services/desktop-managers/gnome.nix>

## services.desktopManager.gnome.flashback.customSessions.*.wmName

A unique identifier for the window manager. Type: string matching the pattern [a-zA-Z0-9_-]+ Example: "xmonad" Declared by: <nixpkgs/nixos/modules/services/desktop-managers/gnome.nix>
