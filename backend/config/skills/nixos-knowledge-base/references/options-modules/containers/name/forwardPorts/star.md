---
module: containers.<name>.forwardPorts.*
option_count: 3
source: options.html
---

# containers.<name>.forwardPorts.*

## containers.<name>.forwardPorts.*.containerPort

Target port of container Type: null or 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: null Declared by: <nixpkgs/nixos/modules/virtualisation/nixos-containers.nix>

## containers.<name>.forwardPorts.*.hostPort

Source port of the external interface on host Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Declared by: <nixpkgs/nixos/modules/virtualisation/nixos-containers.nix>

## containers.<name>.forwardPorts.*.protocol

The protocol specifier for port forwarding between host and container Type: string Default: "tcp" Declared by: <nixpkgs/nixos/modules/virtualisation/nixos-containers.nix>
