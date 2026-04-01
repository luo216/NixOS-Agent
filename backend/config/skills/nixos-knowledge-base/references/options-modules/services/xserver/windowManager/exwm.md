---
module: services.xserver.windowManager.exwm
option_count: 4
source: options.html
---

# services.xserver.windowManager.exwm

## services.xserver.windowManager.exwm.enable

Whether to enable exwm. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/x11/window-managers/exwm.nix>

## services.xserver.windowManager.exwm.package

The Emacs package to use. Type: package Default: pkgs.emacs Example: pkgs.emacs-gtk Declared by: <nixpkgs/nixos/modules/services/x11/window-managers/exwm.nix>

## services.xserver.windowManager.exwm.extraPackages

Extra packages available to Emacs. The value must be a function which receives the attrset defined in emacs.pkgs as the sole argument. Type: function that evaluates to a(n) list of package Default: epkgs: [] Example: epkgs: [ epkgs.emms epkgs.magit epkgs.proofgeneral ] Declared by: <nixpkgs/nixos/modules/services/x11/window-managers/exwm.nix>

## services.xserver.windowManager.exwm.loadScript

Emacs lisp code to be run after loading the user’s init file. Type: strings concatenated with “\n” Default: "(require 'exwm)" Example: '' (require 'exwm) (exwm-enable) '' Declared by: <nixpkgs/nixos/modules/services/x11/window-managers/exwm.nix>
