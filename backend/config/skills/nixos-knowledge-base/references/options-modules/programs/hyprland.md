---
module: programs.hyprland
option_count: 4
source: options.html
---

# programs.hyprland

## programs.hyprland.enable

Whether to enable Hyprland, the dynamic tiling Wayland compositor that doesn’t sacrifice on its looks. You can manually launch Hyprland by executing Hyprland on a TTY. A configuration file will be generated in ~/.config/hypr/hyprland.conf. See https://wiki.hyprland.org for more information. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/programs/wayland/hyprland.nix>

## programs.hyprland.package

The hyprland package to use. If the package is not overridable with enableXWayland, then the module option xwayland will have no effect. Type: package Default: pkgs.hyprland Declared by: <nixpkgs/nixos/modules/programs/wayland/hyprland.nix>

## programs.hyprland.portalPackage

The xdg-desktop-portal-hyprland package to use. If the package is not overridable with hyprland, then the Hyprland package used by the portal may differ from the one set in the module option package. Type: package Default: pkgs.xdg-desktop-portal-hyprland Declared by: <nixpkgs/nixos/modules/programs/wayland/hyprland.nix>

## programs.hyprland.withUWSM

Launch Hyprland with the UWSM (Universal Wayland Session Manager) session manager. This has improved systemd support and is recommended for most users. This automatically starts appropriate targets like graphical-session.target, and wayland-session@Hyprland.target. Note Some changes may need to be made to Hyprland configs depending on your setup, see Hyprland wiki. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/programs/wayland/hyprland.nix>
