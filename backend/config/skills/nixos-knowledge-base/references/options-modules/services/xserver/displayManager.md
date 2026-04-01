---
module: services.xserver.displayManager
option_count: 5
source: options.html
---

# services.xserver.displayManager

## services.xserver.displayManager.session

List of sessions supported with the command used to start each session. Each session script can set the waitPID shell variable to make this script wait until the end of the user session. Each script is used to define either a window manager or a desktop manager. These can be differentiated by setting the attribute manage either to "window" or "desktop". The list of desktop manager and window manager should appear inside the display manager with the desktop manager name followed by the window manager name. Type: list of (attribute set) Default: [ ] Example: [ { manage = "desktop"; name = "xterm"; start = '' ${pkgs.xterm}/bin/xterm -ls & waitPID=$! ''; } ] Declared by: <nixpkgs/nixos/modules/services/x11/display-managers/default.nix>

## services.xserver.displayManager.sessionCommands

Shell commands executed just before the window or desktop manager is started. These commands are not currently sourced for Wayland sessions. Type: strings concatenated with “\n” Default: "" Example: '' xmessage "Hello World!" & '' Declared by: <nixpkgs/nixos/modules/services/x11/display-managers/default.nix>

## services.xserver.displayManager.setupCommands

Shell commands executed just after the X server has started. This option is only effective for display managers for which this feature is supported; currently these are LightDM, GDM and SDDM. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/x11/display-managers/default.nix>

## services.xserver.displayManager.xserverArgs

List of arguments for the X server. Type: list of string Default: [ ] Example: [ "-ac" "-logverbose" "-verbose" "-nolisten tcp" ] Declared by: <nixpkgs/nixos/modules/services/x11/display-managers/default.nix>

## services.xserver.displayManager.xserverBin

Path to the X server used by display managers. Type: absolute path Declared by: <nixpkgs/nixos/modules/services/x11/display-managers/default.nix>
