---
module: services.irkerd
option_count: 4
source: options.html
---

# services.irkerd

## services.irkerd.enable

Whether to enable irker, an IRC notification daemon. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/irkerd.nix>

## services.irkerd.listenAddress

Specifies the bind address on which the irker daemon listens. The default is localhost. Irker authors strongly warn about the risks of running this on a publicly accessible interface, so change this with caution. Type: string Default: "localhost" Example: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/misc/irkerd.nix>

## services.irkerd.nick

Nick to use for irker Type: string Default: "irker" Declared by: <nixpkgs/nixos/modules/services/misc/irkerd.nix>

## services.irkerd.openPorts

Open ports in the firewall for irkerd Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/irkerd.nix>
