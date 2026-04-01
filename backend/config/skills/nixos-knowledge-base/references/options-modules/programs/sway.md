---
module: programs.sway
option_count: 5
source: options.html
---

# programs.sway

## programs.sway.enable

Whether to enable Sway, the i3-compatible tiling Wayland compositor. You can manually launch Sway by executing “exec sway” on a TTY. Copy /etc/sway/config to ~/.config/sway/config to modify the default configuration. See https://github.com/swaywm/sway/wiki and “man 5 sway” for more information. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/programs/wayland/sway.nix>

## programs.sway.package

The sway package to use. If the package is not overridable with extraSessionCommands, extraOptions, withBaseWrapper, withGtkWrapper, enableXWayland and isNixOS, then the module options wrapperFeatures, extraSessionCommands, extraOptions and xwayland will have no effect. Set to null to not add any Sway package to your path. This should be done if you want to use the Home Manager Sway module to install Sway. Type: null or package Default: pkgs.sway Declared by: <nixpkgs/nixos/modules/programs/wayland/sway.nix>

## programs.sway.extraOptions

Command line arguments passed to launch Sway. Please DO NOT report issues if you use an unsupported GPU (proprietary drivers). Type: list of string Default: [ ] Example: [ "--verbose" "--debug" "--unsupported-gpu" ] Declared by: <nixpkgs/nixos/modules/programs/wayland/sway.nix>

## programs.sway.extraPackages

Extra packages to be installed system wide. See https://github.com/swaywm/sway/wiki/Useful-add-ons-for-sway and https://github.com/swaywm/sway/wiki/i3-Migration-Guide#common-x11-apps-used-on-i3-with-wayland-alternatives for a list of useful software. Type: list of package Default: with pkgs; [ brightnessctl foot grim pulseaudio swayidle swaylock wmenu ]; Example: with pkgs; [ i3status i3status-rust termite rofi light ] Declared by: <nixpkgs/nixos/modules/programs/wayland/sway.nix>

## programs.sway.extraSessionCommands

Shell commands executed just before Sway is started. See https://github.com/swaywm/sway/wiki/Running-programs-natively-under-wayland and https://github.com/swaywm/wlroots/blob/master/docs/env_vars.md for some useful environment variables. Type: strings concatenated with “\n” Default: "" Example: '' # SDL: export SDL_VIDEODRIVER=wayland # QT (needs qt5.qtwayland in systemPackages): export QT_QPA_PLATFORM=wayland-egl export QT_WAYLAND_DISABLE_WINDOWDECORATION="1" # Fix for some Java AWT applications (e.g. Android Studio), # use this if they aren't displayed properly: export _JAVA_AWT_WM_NONREPARENTING=1 '' Declared by: <nixpkgs/nixos/modules/programs/wayland/sway.nix>
