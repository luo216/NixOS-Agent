---
module: services.xserver.desktopManager.xfce
option_count: 6
source: options.html
---

# services.xserver.desktopManager.xfce

## services.xserver.desktopManager.xfce.enable

Enable the Xfce desktop environment. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/x11/desktop-managers/xfce.nix>

## services.xserver.desktopManager.xfce.enableScreensaver

Enable the XFCE screensaver. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/x11/desktop-managers/xfce.nix>

## services.xserver.desktopManager.xfce.enableWaylandSession

Whether to enable the experimental Xfce Wayland session. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/x11/desktop-managers/xfce.nix>

## services.xserver.desktopManager.xfce.enableXfwm

Enable the XFWM (default) window manager. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/x11/desktop-managers/xfce.nix>

## services.xserver.desktopManager.xfce.noDesktop

Don’t install XFCE desktop components (xfdesktop and panel). Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/x11/desktop-managers/xfce.nix>

## services.xserver.desktopManager.xfce.waylandSessionCompositor

Command line to run a Wayland compositor, defaults to labwc --startup if not specified. Note that xfce4-session will be passed to it as an argument, see startxfce4 --help for details. Some compositors do not have an option equivalent to labwc’s --startup and you might have to add xfce4-session somewhere in their configurations. Type: string Default: "" Example: "wayfire" Declared by: <nixpkgs/nixos/modules/services/x11/desktop-managers/xfce.nix>
