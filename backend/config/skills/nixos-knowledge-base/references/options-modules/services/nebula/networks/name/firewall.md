---
module: services.nebula.networks.<name>.firewall
option_count: 2
source: options.html
---

# services.nebula.networks.<name>.firewall

## services.nebula.networks.<name>.firewall.inbound

Firewall rules for inbound traffic. Type: list of (attribute set) Default: [ ] Example: [ { host = "any"; port = "any"; proto = "any"; } ] Declared by: <nixpkgs/nixos/modules/services/networking/nebula.nix>

## services.nebula.networks.<name>.firewall.outbound

Firewall rules for outbound traffic. Type: list of (attribute set) Default: [ ] Example: [ { host = "any"; port = "any"; proto = "any"; } ] Declared by: <nixpkgs/nixos/modules/services/networking/nebula.nix>
