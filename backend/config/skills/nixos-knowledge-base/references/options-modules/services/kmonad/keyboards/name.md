---
module: services.kmonad.keyboards.<name>
option_count: 5
source: options.html
---

# services.kmonad.keyboards.<name>

## services.kmonad.keyboards.<name>.enableHardening

Whether to enable systemd hardening. Note If KMonad is used to execute shell commands, hardening may make some of them fail. Type: boolean Default: true Example: false Declared by: <nixpkgs/nixos/modules/services/hardware/kmonad.nix>

## services.kmonad.keyboards.<name>.config

Keyboard configuration. Type: strings concatenated with “\n” Declared by: <nixpkgs/nixos/modules/services/hardware/kmonad.nix>

## services.kmonad.keyboards.<name>.device

Path to the keyboard’s device file. Type: absolute path Example: "/dev/input/by-id/some-dev" Declared by: <nixpkgs/nixos/modules/services/hardware/kmonad.nix>

## services.kmonad.keyboards.<name>.extraGroups

Extra permission groups to attach to the KMonad instance for this keyboard. Since KMonad runs as an unprivileged user, it may sometimes need extra permissions in order to read the keyboard device file. If your keyboard’s device file isn’t in the input group, you’ll need to list its group in this option. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/hardware/kmonad.nix>

## services.kmonad.keyboards.<name>.name

Keyboard name. Type: string Default: "‹name›" Example: "laptop-internal" Declared by: <nixpkgs/nixos/modules/services/hardware/kmonad.nix>
