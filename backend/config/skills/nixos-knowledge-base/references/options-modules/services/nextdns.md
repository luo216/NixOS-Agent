---
module: services.nextdns
option_count: 2
source: options.html
---

# services.nextdns

## services.nextdns.enable

Whether to enable the NextDNS DNS/53 to DoH Proxy service. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/nextdns.nix>

## services.nextdns.arguments

Additional arguments to be passed to nextdns run. Type: list of string Default: [ ] Example: [ "-config" "10.0.3.0/24=abcdef" ] Declared by: <nixpkgs/nixos/modules/services/networking/nextdns.nix>
