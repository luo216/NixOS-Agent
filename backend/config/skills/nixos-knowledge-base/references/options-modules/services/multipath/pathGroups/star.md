---
module: services.multipath.pathGroups.*
option_count: 5
source: options.html
---

# services.multipath.pathGroups.*

## services.multipath.pathGroups.*.alias

The name of the multipath device Type: signed integer Example: 1001234 Declared by: <nixpkgs/nixos/modules/services/networking/multipath.nix>

## services.multipath.pathGroups.*.array

The DNS name of the storage array Type: string Default: null Example: "bigarray.example.com" Declared by: <nixpkgs/nixos/modules/services/networking/multipath.nix>

## services.multipath.pathGroups.*.fsType

Type of the filesystem Type: null or string Default: null Example: "zfs" Declared by: <nixpkgs/nixos/modules/services/networking/multipath.nix>

## services.multipath.pathGroups.*.options

Options used to mount the file system Type: null or string Default: null Example: "ro" Declared by: <nixpkgs/nixos/modules/services/networking/multipath.nix>

## services.multipath.pathGroups.*.wwid

The identifier for the multipath device Type: string (with check: hexadecimal string) Example: "360080e500043b35c0123456789abcdef" Declared by: <nixpkgs/nixos/modules/services/networking/multipath.nix>
