---
module: services.nebula.networks.<name>.lighthouse.dns
option_count: 3
source: options.html
---

# services.nebula.networks.<name>.lighthouse.dns

## services.nebula.networks.<name>.lighthouse.dns.enable

Whether this lighthouse node should serve DNS. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/nebula.nix>

## services.nebula.networks.<name>.lighthouse.dns.host

IP address on which nebula lighthouse should serve DNS. ‘localhost’ is a good default to ensure the service does not listen on public interfaces; use a Nebula address like 10.0.0.5 to make DNS resolution available to nebula hosts only. Type: string Default: "localhost" Declared by: <nixpkgs/nixos/modules/services/networking/nebula.nix>

## services.nebula.networks.<name>.lighthouse.dns.port

UDP port number for lighthouse DNS server. Type: null or 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 5353 Declared by: <nixpkgs/nixos/modules/services/networking/nebula.nix>
