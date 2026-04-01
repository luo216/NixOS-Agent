---
module: services.displayManager
option_count: 10
source: options.html
---

# services.displayManager

## services.displayManager.enable

Whether to enable systemd’s display-manager service. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/display-managers/default.nix>

## services.displayManager.autoLogin

Auto login configuration attrset. Type: submodule Default: { } Declared by: <nixpkgs/nixos/modules/services/display-managers/default.nix>

## services.displayManager.defaultSession

Graphical session to pre-select in the session chooser (only effective for GDM, LightDM and SDDM). On GDM, LightDM and SDDM, it will also be used as a session for auto-login. Set this option to empty string to get an error with a list of currently available sessions. Type: session name Default: null Example: "gnome" Declared by: <nixpkgs/nixos/modules/services/display-managers/default.nix>

## services.displayManager.environment

Additional environment variables needed by the display manager. Type: attribute set of unspecified value Default: { } Declared by: <nixpkgs/nixos/modules/services/display-managers/default.nix>

## services.displayManager.execCmd

Command to start the display manager. Type: string Example: "${pkgs.lightdm}/bin/lightdm" Declared by: <nixpkgs/nixos/modules/services/display-managers/default.nix>

## services.displayManager.hiddenUsers

A list of users which will not be shown in the display manager. Type: list of string Default: [ "nobody" ] Declared by: <nixpkgs/nixos/modules/services/display-managers/default.nix>

## services.displayManager.logToFile

Whether the display manager redirects the output of the session script to ~/.xsession-errors. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/display-managers/default.nix>

## services.displayManager.logToJournal

Whether the display manager redirects the output of the session script to the systemd journal. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/display-managers/default.nix>

## services.displayManager.preStart

Script executed before the display manager is started. Type: strings concatenated with “\n” Default: "" Example: "rm -f /var/log/my-display-manager.log" Declared by: <nixpkgs/nixos/modules/services/display-managers/default.nix>

## services.displayManager.sessionPackages

A list of packages containing x11 or wayland session files to be passed to the display manager. Type: list of package with provided sessions Default: [ ] Declared by: <nixpkgs/nixos/modules/services/display-managers/default.nix>
