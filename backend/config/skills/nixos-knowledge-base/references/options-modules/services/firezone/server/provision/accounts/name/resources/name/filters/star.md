---
module: services.firezone.server.provision.accounts.<name>.resources.<name>.filters.*
option_count: 2
source: options.html
---

# services.firezone.server.provision.accounts.<name>.resources.<name>.filters.*

## services.firezone.server.provision.accounts.<name>.resources.<name>.filters.*.ports

Either a single port or port range to allow. Both bounds are inclusive. Type: list of ((submodule) or 16 bit unsigned integer; between 0 and 65535 (both inclusive) convertible to it) Default: [ ] Example: [ 443 { from = 8080; to = 8100; } ] Declared by: <nixpkgs/nixos/modules/services/networking/firezone/server.nix>

## services.firezone.server.provision.accounts.<name>.resources.<name>.filters.*.protocol

The protocol to allow Type: one of “icmp”, “tcp”, “udp” Declared by: <nixpkgs/nixos/modules/services/networking/firezone/server.nix>
