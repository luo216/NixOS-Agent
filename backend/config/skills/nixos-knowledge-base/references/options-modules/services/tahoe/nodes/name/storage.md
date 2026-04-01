---
module: services.tahoe.nodes.<name>.storage
option_count: 2
source: options.html
---

# services.tahoe.nodes.<name>.storage

## services.tahoe.nodes.<name>.storage.enable

Whether to enable storage service. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/network-filesystems/tahoe.nix>

## services.tahoe.nodes.<name>.storage.reservedSpace

The amount of filesystem space to not use for storage. Type: string Default: "1G" Declared by: <nixpkgs/nixos/modules/services/network-filesystems/tahoe.nix>
