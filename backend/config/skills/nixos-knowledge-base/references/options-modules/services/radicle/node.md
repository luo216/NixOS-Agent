---
module: services.radicle.node
option_count: 4
source: options.html
---

# services.radicle.node

## services.radicle.node.extraArgs

Extra arguments for radicle-node Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/misc/radicle.nix>

## services.radicle.node.listenAddress

The IP address on which radicle-node listens. Type: string Default: "[::]" Example: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/misc/radicle.nix>

## services.radicle.node.listenPort

The port on which radicle-node listens. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8776 Declared by: <nixpkgs/nixos/modules/services/misc/radicle.nix>

## services.radicle.node.openFirewall

Whether to enable opening the firewall for radicle-node. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/radicle.nix>
