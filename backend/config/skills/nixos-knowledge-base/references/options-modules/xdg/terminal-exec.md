---
module: xdg.terminal-exec
option_count: 3
source: options.html
---

# xdg.terminal-exec

## xdg.terminal-exec.enable

Whether to enable xdg-terminal-exec, the proposed Default Terminal Execution Specification. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/config/xdg/terminal-exec.nix>

## xdg.terminal-exec.package

The xdg-terminal-exec package to use. Type: package Default: pkgs.xdg-terminal-exec Declared by: <nixpkgs/nixos/modules/config/xdg/terminal-exec.nix>

## xdg.terminal-exec.settings

Configuration options for the Default Terminal Execution Specification. The keys are the desktop environments that are matched (case-insensitively) against $XDG_CURRENT_DESKTOP, or default which is used when the current desktop environment is not found in the configuration. The values are a list of terminals’ desktop file IDs to try in order of decreasing priority. Type: attribute set of list of string Default: { } Example: { GNOME = [ "com.raggesilver.BlackBox.desktop" "org.gnome.Terminal.desktop" ]; default = [ "kitty.desktop" ]; } Declared by: <nixpkgs/nixos/modules/config/xdg/terminal-exec.nix>
