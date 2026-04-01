---
module: services.triggerhappy
option_count: 4
source: options.html
---

# services.triggerhappy

## services.triggerhappy.enable

Whether to enable the triggerhappy hotkey daemon. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/hardware/triggerhappy.nix>

## services.triggerhappy.bindings

Key bindings for triggerhappy. Type: list of (submodule) Default: [ ] Example: [ { keys = ["PLAYPAUSE"]; cmd = "${lib.getExe pkgs.mpc} -q toggle"; } ] Declared by: <nixpkgs/nixos/modules/services/hardware/triggerhappy.nix>

## services.triggerhappy.extraConfig

Literal contents to append to the end of triggerhappy configuration file. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/hardware/triggerhappy.nix>

## services.triggerhappy.user

User account under which triggerhappy runs. Type: string Default: "nobody" Example: "root" Declared by: <nixpkgs/nixos/modules/services/hardware/triggerhappy.nix>
