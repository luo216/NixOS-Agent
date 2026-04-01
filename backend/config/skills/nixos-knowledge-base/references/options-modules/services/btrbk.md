---
module: services.btrbk
option_count: 5
source: options.html
---

# services.btrbk

## services.btrbk.extraPackages

Extra packages for btrbk, like compression utilities for stream_compress. Note: This option will get deprecated in future releases. Required compression programs will get automatically provided to btrbk depending on configured compression method in services.btrbk.instances.<name>.settings option. Type: list of package Default: [ ] Example: [ pkgs.xz ] Declared by: <nixpkgs/nixos/modules/services/backup/btrbk.nix>

## services.btrbk.instances

Set of btrbk instances. The instance named btrbk is the default one. Type: attribute set of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/services/backup/btrbk.nix>

## services.btrbk.ioSchedulingClass

IO scheduling class for btrbk (see ionice(1) for a quick description). Applies to local instances, and remote ones connecting by ssh if set to idle. Type: one of “idle”, “best-effort”, “realtime” Default: "best-effort" Declared by: <nixpkgs/nixos/modules/services/backup/btrbk.nix>

## services.btrbk.niceness

Niceness for local instances of btrbk. Also applies to remote ones connecting via ssh when positive. Type: integer between -20 and 19 (both inclusive) Default: 10 Declared by: <nixpkgs/nixos/modules/services/backup/btrbk.nix>

## services.btrbk.sshAccess

SSH keys that should be able to make or push snapshots on this system remotely with btrbk Type: list of (submodule) Default: [ ] Declared by: <nixpkgs/nixos/modules/services/backup/btrbk.nix>
