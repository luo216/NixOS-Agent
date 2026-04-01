---
module: programs.sway.wrapperFeatures
option_count: 2
source: options.html
---

# programs.sway.wrapperFeatures

## programs.sway.wrapperFeatures.base

Whether to enable the base wrapper to execute extra session commands and prepend a dbus-run-session to the sway command. Type: boolean Default: true Example: true Declared by: <nixpkgs/nixos/modules/programs/wayland/sway.nix>

## programs.sway.wrapperFeatures.gtk

Whether to enable the wrapGAppsHook wrapper to execute sway with required environment variables for GTK applications. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/programs/wayland/sway.nix>
