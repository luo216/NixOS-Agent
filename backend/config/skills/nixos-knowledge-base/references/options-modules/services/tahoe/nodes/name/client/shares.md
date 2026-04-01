---
module: services.tahoe.nodes.<name>.client.shares
option_count: 3
source: options.html
---

# services.tahoe.nodes.<name>.client.shares

## services.tahoe.nodes.<name>.client.shares.happy

The number of distinct storage nodes required to store a file. Type: signed integer Default: 7 Declared by: <nixpkgs/nixos/modules/services/network-filesystems/tahoe.nix>

## services.tahoe.nodes.<name>.client.shares.needed

The number of shares required to reconstitute a file. Type: signed integer Default: 3 Declared by: <nixpkgs/nixos/modules/services/network-filesystems/tahoe.nix>

## services.tahoe.nodes.<name>.client.shares.total

The number of shares required to store a file. Type: signed integer Default: 10 Declared by: <nixpkgs/nixos/modules/services/network-filesystems/tahoe.nix>
