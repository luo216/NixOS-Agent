---
module: services.emacs
option_count: 5
source: options.html
---

# services.emacs

## services.emacs.enable

Whether to enable a user service for the Emacs daemon. Use emacsclient to connect to the daemon. If true, services.emacs.install is considered true. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/editors/emacs.nix>

## services.emacs.package

The emacs package to use. Type: package Default: pkgs.emacs Declared by: <nixpkgs/nixos/modules/services/editors/emacs.nix>

## services.emacs.defaultEditor

When enabled, configures emacsclient to be the default editor using the EDITOR environment variable. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/editors/emacs.nix>

## services.emacs.install

Whether to install a user service for the Emacs daemon. Once the service is started, use emacsclient to connect to the daemon. The service must be manually started for each user with “systemctl --user start emacs” or globally through services.emacs.enable. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/editors/emacs.nix>

## services.emacs.startWithGraphical

Start emacs with the graphical session instead of any session. Without this, emacs clients will not be able to create frames in the graphical session. Type: boolean Default: config.services.xserver.enable Declared by: <nixpkgs/nixos/modules/services/editors/emacs.nix>
