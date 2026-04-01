---
module: services.tahoe.introducers.<name>.tub
option_count: 2
source: options.html
---

# services.tahoe.introducers.<name>.tub

## services.tahoe.introducers.<name>.tub.location

The external location that the introducer should listen on. If specified, the port should be included. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/network-filesystems/tahoe.nix>

## services.tahoe.introducers.<name>.tub.port

The port on which the introducer will listen. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 3458 Declared by: <nixpkgs/nixos/modules/services/network-filesystems/tahoe.nix>
