---
module: services.quickwit
option_count: 8
source: options.html
---

# services.quickwit

## services.quickwit.enable

Whether to enable Quickwit. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/search/quickwit.nix>

## services.quickwit.package

The Quickwit package to use. Type: package Default: pkgs.quickwit Declared by: <nixpkgs/nixos/modules/services/search/quickwit.nix>

## services.quickwit.dataDir

Data directory for Quickwit. If you change this, you need to manually create the directory. You also need to create the quickwit user and group, or change services.quickwit.user and services.quickwit.group to existing ones with access to the directory. Type: absolute path Default: "/var/lib/quickwit" Declared by: <nixpkgs/nixos/modules/services/search/quickwit.nix>

## services.quickwit.extraFlags

Extra command line options to pass to Quickwit. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/search/quickwit.nix>

## services.quickwit.group

The group quickwit runs as. Should be left at default unless you have very specific needs. Type: string Default: "quickwit" Declared by: <nixpkgs/nixos/modules/services/search/quickwit.nix>

## services.quickwit.restartIfChanged

Automatically restart the service on config change. This can be set to false to defer restarts on a server or cluster. Please consider the security implications of inadvertently running an older version, and the possibility of unexpected behavior caused by inconsistent versions across a cluster when disabling this option. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/search/quickwit.nix>

## services.quickwit.settings

Quickwit configuration. Type: open submodule of (YAML 1.1 value) Default: { } Declared by: <nixpkgs/nixos/modules/services/search/quickwit.nix>

## services.quickwit.user

The user Quickwit runs as. Should be left at default unless you have very specific needs. Type: string Default: "quickwit" Declared by: <nixpkgs/nixos/modules/services/search/quickwit.nix>
