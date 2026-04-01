---
module: programs.tmux
option_count: 19
source: options.html
---

# programs.tmux

## programs.tmux.enable

Whenever to configure tmux system-wide. Type: boolean Default: false Related packages: pkgs.tmux Declared by: <nixpkgs/nixos/modules/programs/tmux.nix>

## programs.tmux.package

The tmux package to use. Type: package Default: pkgs.tmux Declared by: <nixpkgs/nixos/modules/programs/tmux.nix>

## programs.tmux.aggressiveResize

Resize the window to the size of the smallest session for which it is the current window. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/programs/tmux.nix>

## programs.tmux.baseIndex

Base index for windows and panes. Type: signed integer Default: 0 Example: 1 Declared by: <nixpkgs/nixos/modules/programs/tmux.nix>

## programs.tmux.clock24

Use 24 hour clock. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/programs/tmux.nix>

## programs.tmux.customPaneNavigationAndResize

Override the hjkl and HJKL bindings for pane navigation and resizing in VI mode. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/programs/tmux.nix>

## programs.tmux.escapeTime

Time in milliseconds for which tmux waits after an escape is input. Type: signed integer Default: 500 Example: 0 Declared by: <nixpkgs/nixos/modules/programs/tmux.nix>

## programs.tmux.extraConfig

Additional contents of /etc/tmux.conf, to be run after sourcing plugins. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/programs/tmux.nix>

## programs.tmux.extraConfigBeforePlugins

Additional contents of /etc/tmux.conf, to be run before sourcing plugins. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/programs/tmux.nix>

## programs.tmux.historyLimit

Maximum number of lines held in window history. Type: signed integer Default: 2000 Example: 5000 Declared by: <nixpkgs/nixos/modules/programs/tmux.nix>

## programs.tmux.keyMode

VI or Emacs style shortcuts. Type: one of “emacs”, “vi” Default: "emacs" Example: "vi" Declared by: <nixpkgs/nixos/modules/programs/tmux.nix>

## programs.tmux.newSession

Automatically spawn a session if trying to attach and none are running. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/programs/tmux.nix>

## programs.tmux.plugins

List of plugins to install. Type: list of package Default: [ ] Example: [ pkgs.tmuxPlugins.nord ] Declared by: <nixpkgs/nixos/modules/programs/tmux.nix>

## programs.tmux.resizeAmount

Number of lines/columns when resizing. Type: signed integer Default: 5 Example: 10 Declared by: <nixpkgs/nixos/modules/programs/tmux.nix>

## programs.tmux.reverseSplit

Reverse the window split shortcuts. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/programs/tmux.nix>

## programs.tmux.secureSocket

Store tmux socket under /run, which is more secure than /tmp, but as a downside it doesn’t survive user logout. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/programs/tmux.nix>

## programs.tmux.shortcut

Ctrl following by this key is used as the main shortcut. Type: string Default: "b" Example: "a" Declared by: <nixpkgs/nixos/modules/programs/tmux.nix>

## programs.tmux.terminal

Set the $TERM variable. Use tmux-direct if italics or 24bit true color support is needed. Type: string Default: "screen" Example: "screen-256color" Declared by: <nixpkgs/nixos/modules/programs/tmux.nix>

## programs.tmux.withUtempter

Whether to enable libutempter for tmux. This is required so that tmux can write to /var/run/utmp (which can be queried with who to display currently connected user sessions). Note, this will add a guid wrapper for the group utmp! Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/programs/tmux.nix>
