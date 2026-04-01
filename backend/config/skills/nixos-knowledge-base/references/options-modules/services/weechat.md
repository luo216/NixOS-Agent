---
module: services.weechat
option_count: 6
source: options.html
---

# services.weechat

## services.weechat.enable

Whether to enable weechat. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/weechat.nix>

## services.weechat.package

The weechat package to use. Type: package Default: pkgs.weechat Declared by: <nixpkgs/nixos/modules/services/misc/weechat.nix>

## services.weechat.binary

Binary to execute. Type: absolute path Default: "${cfg.package}/bin/weechat" Example: "${cfg.package}/bin/weechat-headless" Declared by: <nixpkgs/nixos/modules/services/misc/weechat.nix>

## services.weechat.headless

Allows specifying if weechat should run in TUI or headless mode. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/weechat.nix>

## services.weechat.root

Weechat state directory. Type: absolute path Default: "/var/lib/weechat" Declared by: <nixpkgs/nixos/modules/services/misc/weechat.nix>

## services.weechat.sessionName

Name of the screen session for weechat. Type: string Default: "weechat-screen" Declared by: <nixpkgs/nixos/modules/services/misc/weechat.nix>
