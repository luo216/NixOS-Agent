---
module: security.isolate
option_count: 10
source: options.html
---

# security.isolate

## security.isolate.enable

Whether to enable Sandbox for securely executing untrusted programs . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/security/isolate.nix>

## security.isolate.package

The isolate-unwrapped package to use. Type: package Default: pkgs.isolate-unwrapped Declared by: <nixpkgs/nixos/modules/security/isolate.nix>

## security.isolate.boxRoot

All sandboxes are created under this directory. To avoid symlink attacks, this directory and all its ancestors must be writeable only by root. Type: absolute path Default: "/var/lib/isolate/boxes" Declared by: <nixpkgs/nixos/modules/security/isolate.nix>

## security.isolate.cgRoot

Control group which subgroups are placed under. Either an explicit path to a subdirectory in cgroupfs, or “auto:file” to read the path from “file”, where it is put by isolate-cg-helper. Type: string Default: "auto:/run/isolate/cgroup" Declared by: <nixpkgs/nixos/modules/security/isolate.nix>

## security.isolate.extraConfig

Extra configuration to append to the configuration file. Type: string Default: "" Declared by: <nixpkgs/nixos/modules/security/isolate.nix>

## security.isolate.firstGid

Start of block of GIDs reserved for sandboxes. Type: integer or floating point number between 1000 and 65533 (both inclusive) Default: 60000 Declared by: <nixpkgs/nixos/modules/security/isolate.nix>

## security.isolate.firstUid

Start of block of UIDs reserved for sandboxes. Type: integer or floating point number between 1000 and 65533 (both inclusive) Default: 60000 Declared by: <nixpkgs/nixos/modules/security/isolate.nix>

## security.isolate.lockRoot

Directory where lock files are created. Type: absolute path Default: "/run/isolate/locks" Declared by: <nixpkgs/nixos/modules/security/isolate.nix>

## security.isolate.numBoxes

Number of UIDs and GIDs to reserve, starting from firstUid and firstGid. Type: integer or floating point number between 1000 and 65533 (both inclusive) Default: 1000 Declared by: <nixpkgs/nixos/modules/security/isolate.nix>

## security.isolate.restrictedInit

If true, only root can create sandboxes. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/security/isolate.nix>
