---
module: services.tinydns
option_count: 3
source: options.html
---

# services.tinydns

## services.tinydns.enable

Whether to run the tinydns dns server Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/tinydns.nix>

## services.tinydns.data

The DNS data to serve, in the format described by tinydns-data(8) Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/networking/tinydns.nix>

## services.tinydns.ip

IP address on which to listen for connections Type: string Default: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/networking/tinydns.nix>
