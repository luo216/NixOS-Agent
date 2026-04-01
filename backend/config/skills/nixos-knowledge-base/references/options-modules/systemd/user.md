---
module: systemd.user
option_count: 9
source: options.html
---

# systemd.user

## systemd.user.extraConfig

Extra config options for systemd user instances. See systemd-user.conf(5) for available options. Type: strings concatenated with “\n” Default: "" Example: "DefaultTimeoutStartSec=60" Declared by: <nixpkgs/nixos/modules/system/boot/systemd/user.nix>

## systemd.user.generators

Definition of systemd generators; see systemd.generator(5). For each NAME = VALUE pair of the attrSet, a link is generated from /etc/systemd/user-generators/NAME to VALUE. Type: attribute set of absolute path Default: { } Example: { systemd-gpt-auto-generator = "/dev/null"; } Declared by: <nixpkgs/nixos/modules/system/boot/systemd/user.nix>

## systemd.user.paths

Definition of systemd per-user path units. Type: attribute set of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/system/boot/systemd/user.nix>

## systemd.user.services

Definition of systemd per-user service units. Type: attribute set of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/system/boot/systemd/user.nix>

## systemd.user.slices

Definition of systemd per-user slice units. Type: attribute set of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/system/boot/systemd/user.nix>

## systemd.user.sockets

Definition of systemd per-user socket units. Type: attribute set of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/system/boot/systemd/user.nix>

## systemd.user.targets

Definition of systemd per-user target units. Type: attribute set of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/system/boot/systemd/user.nix>

## systemd.user.timers

Definition of systemd per-user timer units. Type: attribute set of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/system/boot/systemd/user.nix>

## systemd.user.units

Definition of systemd per-user units. Type: attribute set of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/system/boot/systemd/user.nix>
