---
module: services.xserver.displayManager.lightdm.greeters.gtk
option_count: 4
source: options.html
---

# services.xserver.displayManager.lightdm.greeters.gtk

## services.xserver.displayManager.lightdm.greeters.gtk.enable

Whether to enable lightdm-gtk-greeter as the lightdm greeter. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/x11/display-managers/lightdm-greeters/gtk.nix>

## services.xserver.displayManager.lightdm.greeters.gtk.clock-format

Clock format string (as expected by strftime, e.g. “%H:%M”) to use with the lightdm gtk greeter panel. If set to null the default clock format is used. Type: null or string Default: null Example: "%F" Declared by: <nixpkgs/nixos/modules/services/x11/display-managers/lightdm-greeters/gtk.nix>

## services.xserver.displayManager.lightdm.greeters.gtk.extraConfig

Extra configuration that should be put in the lightdm-gtk-greeter.conf configuration file. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/x11/display-managers/lightdm-greeters/gtk.nix>

## services.xserver.displayManager.lightdm.greeters.gtk.indicators

List of allowed indicator modules to use for the lightdm gtk greeter panel. Built-in indicators include “~a11y”, “~language”, “~session”, “~power”, “~clock”, “~host”, “~spacer”. Unity indicators can be represented by short name (e.g. “sound”, “power”), service file name, or absolute path. If set to null the default indicators are used. Type: null or (list of string) Default: null Example: [ "~host" "~spacer" "~clock" "~spacer" "~session" "~language" "~a11y" "~power" ] Declared by: <nixpkgs/nixos/modules/services/x11/display-managers/lightdm-greeters/gtk.nix>
