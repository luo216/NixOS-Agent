---
module: services.tinc.networks.<name>.hostSettings.<name>.addresses.*
option_count: 2
source: options.html
---

# services.tinc.networks.<name>.hostSettings.<name>.addresses.*

## services.tinc.networks.<name>.hostSettings.<name>.addresses.*.address

The external IP address or hostname where the host can be reached. Type: string Declared by: <nixpkgs/nixos/modules/services/networking/tinc.nix>

## services.tinc.networks.<name>.hostSettings.<name>.addresses.*.port

The port where the host can be reached. If no port is specified, the default Port is used. Type: null or 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: null Declared by: <nixpkgs/nixos/modules/services/networking/tinc.nix>
