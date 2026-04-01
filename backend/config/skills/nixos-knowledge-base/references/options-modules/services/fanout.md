---
module: services.fanout
option_count: 3
source: options.html
---

# services.fanout

## services.fanout.enable

Whether to enable fanout. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/config/fanout.nix>

## services.fanout.bufferSize

Size of /dev/fanout buffer in bytes Type: signed integer Default: 16384 Declared by: <nixpkgs/nixos/modules/config/fanout.nix>

## services.fanout.fanoutDevices

Number of /dev/fanout devices Type: signed integer Default: 1 Declared by: <nixpkgs/nixos/modules/config/fanout.nix>
