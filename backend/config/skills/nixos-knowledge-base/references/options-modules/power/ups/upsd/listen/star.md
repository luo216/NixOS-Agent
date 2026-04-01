---
module: power.ups.upsd.listen.*
option_count: 2
source: options.html
---

# power.ups.upsd.listen.*

## power.ups.upsd.listen.*.address

Address of the interface for upsd to listen on. See man upsd.conf for details. Type: string Declared by: <nixpkgs/nixos/modules/services/monitoring/ups.nix>

## power.ups.upsd.listen.*.port

TCP port for upsd to listen on. See man upsd.conf for details. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 3493 Declared by: <nixpkgs/nixos/modules/services/monitoring/ups.nix>
