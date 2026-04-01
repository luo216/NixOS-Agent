---
module: services.dnsdist
option_count: 4
source: options.html
---

# services.dnsdist

## services.dnsdist.enable

Whether to enable dnsdist domain name server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/dnsdist.nix>

## services.dnsdist.extraConfig

Extra lines to be added verbatim to dnsdist.conf. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/networking/dnsdist.nix>

## services.dnsdist.listenAddress

Listen IP address Type: string Default: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/networking/dnsdist.nix>

## services.dnsdist.listenPort

Listen port Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 53 Declared by: <nixpkgs/nixos/modules/services/networking/dnsdist.nix>
