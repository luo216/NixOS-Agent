---
module: programs.uwsm
option_count: 3
source: options.html
---

# programs.uwsm

## programs.uwsm.enable

Whether to enable uwsm, which wraps standalone Wayland compositors with a set of Systemd units on the fly. This essentially binds the wayland compositor into graphical-session-pre.target, graphical-session.target, xdg-desktop-autostart.target. This is useful for Wayland compositors like Hyprland, Sway, Wayfire, etc. that do not start these targets and services on their own. Note You must configure waylandCompositors suboptions as well so that UWSM knows which compositors to manage. Additionally, this by default uses dbus-broker as the dbus implementation for better compatibility. If you dislike this behavior you can set services.dbus.implementation = lib.mkForce "dbus" in your configuration. If you are having trouble starting a service that depends on graphical-session.target, while using a WM, enabling this option might help . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/programs/wayland/uwsm.nix>

## programs.uwsm.package

The uwsm package to use. Type: package Default: pkgs.uwsm Declared by: <nixpkgs/nixos/modules/programs/wayland/uwsm.nix>

## programs.uwsm.waylandCompositors

Configuration for UWSM-managed Wayland Compositors. This creates a desktop entry file which will be used by Display Managers like GDM, to allow starting the UWSM managed session. Type: attribute set of (submodule) Example: hyprland = { prettyName = "Hyprland"; comment = "Hyprland compositor managed by UWSM"; binPath = "/run/current-system/sw/bin/Hyprland"; }; sway = { prettyName = "Sway"; comment = "Sway compositor managed by UWSM"; binPath = "/run/current-system/sw/bin/sway"; }; Declared by: <nixpkgs/nixos/modules/programs/wayland/uwsm.nix>
