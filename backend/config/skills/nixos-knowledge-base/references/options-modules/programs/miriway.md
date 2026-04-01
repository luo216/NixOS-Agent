---
module: programs.miriway
option_count: 2
source: options.html
---

# programs.miriway

## programs.miriway.enable

Whether to enable Miriway, a Mir based Wayland compositor. You can manually launch Miriway by executing “exec miriway” on a TTY, or launch it from a display manager. Copy /etc/xdg/xdg-miriway/miriway-shell.config to ~/.config/miriway-shell.config to modify the system-wide configuration on a per-user basis. See https://github.com/Miriway/Miriway, and “miriway --help” for more information. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/programs/miriway.nix>

## programs.miriway.config

Miriway’s config. This will be installed system-wide. The default will install the miriway package’s barebones example config. Type: strings concatenated with “\n” Default: '' x11-window-title=Miriway (Mir-on-X) idle-timeout=600 ctrl-alt=t:miriway-terminal # Default "terminal emulator finder" shell-component=dbus-update-activation-environment --systemd DISPLAY WAYLAND_DISPLAY meta=Left:@dock-left meta=Right:@dock-right meta=Space:@toggle-maximized meta=Home:@workspace-begin meta=End:@workspace-end meta=Page_Up:@workspace-up meta=Page_Down:@workspace-down ctrl-alt=BackSpace:@exit '' Example: '' idle-timeout=300 ctrl-alt=t:weston-terminal add-wayland-extensions=all shell-components=dbus-update-activation-environment --systemd DISPLAY WAYLAND_DISPLAY shell-component=waybar shell-component=wbg Pictures/wallpaper shell-meta=a:synapse meta=Left:@dock-left meta=Right:@dock-right meta=Space:@toggle-maximized meta=Home:@workspace-begin meta=End:@workspace-end meta=Page_Up:@workspace-up meta=Page_Down:@workspace-down ctrl-alt=BackSpace:@exit '' Declared by: <nixpkgs/nixos/modules/programs/miriway.nix>
