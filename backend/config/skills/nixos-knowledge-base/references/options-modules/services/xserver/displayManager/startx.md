---
module: services.xserver.displayManager.startx
option_count: 3
source: options.html
---

# services.xserver.displayManager.startx

## services.xserver.displayManager.startx.enable

Whether to enable the dummy “startx” pseudo-display manager, which allows users to start X manually via the startx command from a virtual terminal. Note The X server will run under the current user, not as root. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/x11/display-managers/startx.nix>

## services.xserver.displayManager.startx.extraCommands

Shell commands to be added to the system-wide xinitrc script. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/x11/display-managers/startx.nix>

## services.xserver.displayManager.startx.generateScript

Whether to generate the system-wide xinitrc script (/etc/X11/xinit/xinitrc). This script will take care of setting up the session for systemd user services, running the window manager and cleaning up on exit. Note This script will only be used by startx when both .xinitrc does not exists and the XINITRC environment variable is unset. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/x11/display-managers/startx.nix>
