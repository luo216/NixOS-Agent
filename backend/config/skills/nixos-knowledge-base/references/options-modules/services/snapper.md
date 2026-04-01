---
module: services.snapper
option_count: 6
source: options.html
---

# services.snapper

## services.snapper.cleanupInterval

Cleanup interval. The format is described in systemd.time(7). Type: string Default: "1d" Declared by: <nixpkgs/nixos/modules/services/misc/snapper.nix>

## services.snapper.configs

Subvolume configuration. Any option mentioned in man:snapper-configs(5) is valid here, even if NixOS doesn’t document it. Type: attribute set of (open submodule of attribute set of ((list of (string without line breaks or quotes)) or boolean or string without line breaks or quotes or signed integer or floating point number)) Default: { } Example: { home = { SUBVOLUME = "/home"; ALLOW_USERS = [ "alice" ]; TIMELINE_CREATE = true; TIMELINE_CLEANUP = true; }; } Declared by: <nixpkgs/nixos/modules/services/misc/snapper.nix>

## services.snapper.filters

Global display difference filter. See man:snapper(8) for more details. Type: null or strings concatenated with “\n” Default: null Declared by: <nixpkgs/nixos/modules/services/misc/snapper.nix>

## services.snapper.persistentTimer

Set the Persistent option for the systemd.timer(5) which triggers the snapshot immediately if the last trigger was missed (e.g. if the system was powered down). Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/snapper.nix>

## services.snapper.snapshotInterval

Snapshot interval. The format is described in systemd.time(7). Type: string Default: "hourly" Declared by: <nixpkgs/nixos/modules/services/misc/snapper.nix>

## services.snapper.snapshotRootOnBoot

Whether to snapshot root on boot Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/snapper.nix>
