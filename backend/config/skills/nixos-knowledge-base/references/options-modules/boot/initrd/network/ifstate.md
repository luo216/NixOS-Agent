---
module: boot.initrd.network.ifstate
option_count: 5
source: options.html
---

# boot.initrd.network.ifstate

## boot.initrd.network.ifstate.enable

Whether to enable initrd networking using IfState. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/ifstate.nix>

## boot.initrd.network.ifstate.package

The initrd IfState package to use. Type: package Default: pkgs.ifstate.override { withConfigValidation = false; } Declared by: <nixpkgs/nixos/modules/services/networking/ifstate.nix>

## boot.initrd.network.ifstate.allowIfstateToDrasticlyIncreaseInitrdSize

IfState in initrd drastically increases the size of initrd, your boot partition may be too small and/or you may have significantly fewer generations. By setting this option, you acknowledge this fact and keep it in mind when reporting issues. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/ifstate.nix>

## boot.initrd.network.ifstate.cleanupSettings

Content of IfState’s initrd cleanup configuration file. See https://ifstate.net/2.0/schema/ for details. This configuration gets applied before systemd switches to stage two. The goal is to deconfigurate the whole network in order to prevent access to services, before the firewall is configured. The stage two IfState configuration will start after the firewall is configured. Type: YAML 1.1 value Default: { interfaces = { }; } Declared by: <nixpkgs/nixos/modules/services/networking/ifstate.nix>

## boot.initrd.network.ifstate.settings

Content of IfState’s initrd configuration file. See https://ifstate.net/2.2/schema/ for details. Type: YAML 1.1 value Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/ifstate.nix>
