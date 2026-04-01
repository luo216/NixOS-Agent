---
module: services.tahoe.nodes.<name>.tub
option_count: 2
source: options.html
---

# services.tahoe.nodes.<name>.tub

## services.tahoe.nodes.<name>.tub.location

The external location that the node should listen on. This is the setting to tweak if there are multiple interfaces and you want to alter which interface Tahoe is advertising. If specified, the port should be included. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/network-filesystems/tahoe.nix>

## services.tahoe.nodes.<name>.tub.port

The port on which the tub will listen. This is the correct setting to tweak if you want Tahoe’s storage system to listen on a different port. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 3457 Declared by: <nixpkgs/nixos/modules/services/network-filesystems/tahoe.nix>
