---
module: services.orangefs.client.fileSystems.*
option_count: 3
source: options.html
---

# services.orangefs.client.fileSystems.*

## services.orangefs.client.fileSystems.*.mountPoint

Mount point. Type: string Default: "/orangefs" Declared by: <nixpkgs/nixos/modules/services/network-filesystems/orangefs/client.nix>

## services.orangefs.client.fileSystems.*.options

Mount options Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/network-filesystems/orangefs/client.nix>

## services.orangefs.client.fileSystems.*.target

Target URL Type: string Example: "tcp://server:3334/orangefs" Declared by: <nixpkgs/nixos/modules/services/network-filesystems/orangefs/client.nix>
